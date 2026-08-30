---
name: gte-workflow
description: >-
  Comprehensive guide and operational runbook for GregTech Easy (GTE) project development,
  multi-module architecture, dependency management, avoiding Mixin/Accessor runtime crashes,
  and building the player full-mod client pack or publishing to GitHub Pages Maven. Use whenever developing,
  modifying, or debugging GTE core modules, adding dependencies, or diagnosing game crashes.
---

# GTE (GregTech Easy) Project Development & Architecture Skill

This skill provides essential guidelines, architectural definitions, real-world crash post-mortems, and build workflows for the **GregTech Easy (GTE)** multi-module project.

---

## 1. Project Architecture Overview

The repository is structured into isolated submodules managed by a unified Gradle root:

```
GTEGroup/
├── gradle/
│   ├── scripts/
│   │   └── repositories.gradle   # Single Source of Truth for Maven repos (BMCLAPI, GitHub Pages, ModMaven, etc.)
│   ├── forge.versions.toml       # Version catalog for all dependencies and mods
│   └── init.d/cn-mirrors.gradle  # Intelligent domestic / international network mirror switcher
├── modules/
│   ├── gtm-reborn/               # GregTech Modern Reborn (submodule: branch satou)
│   ├── gtecore/                  # GTE Core Mod (submodule: branch master)
│   │   └── gradle/libs/          # 100% pre-cached offline dependency jars (flatDir)
│   └── gte-dev-runtime/          # Dedicated deobfuscated hot debug runner (runClient / runServer)
├── gte/                          # Modpack root (Packwiz index & overrides)
│   └── overrides/
│       ├── mods/                 # Custom jars & pre-compiled runtime jars
│       ├── config/ & kubejs/     # In-game configs & scripts
│       └── patchouli_books/      # In-game guidebooks
└── scripts/
    ├── build_full_mod_pack.py    # Player full-mod client packaging (GTE-FullMod zip)
    └── audit_dependencies.py     # Static dependency audit scanner
```

---

## 2. Anti-Crash & Clean Code Rules (CRITICAL)

When writing or modifying Java/Kotlin code in `gtm-reborn`, `gtecore`, or `gte-dev-runtime`:

### Rule 1: Never Force-Cast Mixin Accessor Interfaces
- **Why**: In multi-module environments and addon runtime loaders, Minecraft classes are loaded by early classloaders before Mixin interfaces are attached, causing `ClassCastException`.
- **Wrong**: `((BlockPropertiesAccessor) props).getDestroyTime()`
- **Correct**:
  ```java
  if (props instanceof BlockPropertiesAccessor acc) {
      newProps.destroyTime(acc.getDestroyTime());
  }
  ```
- **Better**: Prefer Vanilla/Forge native methods over accessors (e.g. `property.getPossibleValues()` for `IntegerProperty` min/max instead of `IntegerPropertyAccessor`).

### Rule 2: Never Put Production Shader/Optimizer Jars into Dev Runtime
- **Why**: Production jars like `Oculus`, `Embeddium`, `ModernFix`, `ModernUI` have hardcoded SRG obfuscated mixin refmaps (`f_117950_`, `m_91302_`). Gradle `runClient` uses deobfuscated Mojang mappings, leading to `InvalidMixinException`.
- **Policy**: Keep optimization/shader mods exclusively for players in `gte/overrides/mods/` for real launchers; exclude them from `gte-dev-runtime`.

### Rule 3: Always Use `modLocalRuntime` for Dev Runtime Dependencies
- **Why**: Plain `localRuntime` or `fileTree` does NOT trigger ModDevGradle's deobfuscation remapper.
- **Policy**: In `modules/gte-dev-runtime/build.gradle`, declare runtime dependencies with `modLocalRuntime(...)` and ensure `obfuscation.createRemappingConfiguration(configurations.localRuntime)` is defined.

### Rule 3b: Never Rely on `jarJar` Embeds in Dev Runs (probabilistic-crash trap)
- **Why**: ModDevGradle's `jarJar` configuration resolves **production-mapped (SRG)** jars by design (embeds target production). FML extracts embedded jars verbatim, so an SRG embed loaded in a named (mojmap) dev runtime crashes mod construction with e.g. `NoSuchFieldError: CreativeModeTabs f_256750_` (SRG Registrate). Whether a run survived depended on which entry point was used and on FML's `JarSelector` dedup picking a named standalone copy first — which made `runData`/`runClient` fail **probabilistically**.
- **Policy (implemented in `gradle/scripts/jars.gradle` of gtm-reborn and gt--)**:
  1. The **dev jar excludes `META-INF/jarjar/**`** — it ships without embeds.
  2. A `jarWithEmbeds` task (dev jar + jarJar output) feeds `reobfJar.input`, so the **production jar keeps its SRG embeds** unchanged.
  3. Every run configuration must declare **named standalone copies** of every previously-embedded library via `modLocalRuntime(...)` (Registrate, ldlib, configuration, ponder, flywheel, mixinextras, kotlinforforge — whichever apply). For mods.toml-less libraries (e.g. Registrate), FML dedup matches by **file name**, so the standalone jar must keep its maven artifact name — use maven coordinates, never renamed curse.maven files.
- **Version trap**: gtm-reborn resolves mixinextras through a `[0.5.0-rc.3,)` require range (i.e. 0.5.5), so dev runs must pin `io.github.llamalad7:mixinextras-forge:0.5.5`, not the catalog's 0.5.0-rc.3.
- **Compat-mod trap**: gt--'s datagen omits content gated by `GTNNIntegration` (ad_astra / botania / create materials & tags) when those mods are absent from the run. Its data run therefore loads them via `modLocalRuntime`; otherwise generated lang/tags silently lose entries.

### Rule 4: Never Set `remap = false` on Vanilla Minecraft / Forge Targets
- **Why**: In development, Minecraft is deobfuscated so `remap = false` appears to work. But in production, Vanilla methods are SRG-obfuscated (`m_xxxx_`). Setting `remap = false` skips Refmap generation and causes instant fatal crashes (`InvalidInjectionException: Could not find target`) when players start the game.
- **Policy**:
  - Targets in `net.minecraft.*` or `net.minecraftforge.*` **MUST** keep `remap = true` (default; do not specify `remap = false`).
  - Only set `remap = false` on third-party non-obfuscated Java libraries (e.g. `Gson`, `Netty`, `LWJGL`) or synthetic mod-injected interface accessors.

### Rule 5: Never Attach Sibling SourceSets to `legacyForge.mods {}` in Submodule Datagen
- **Why**: Attaching sibling mod source sets (e.g. `gtceu { sourceSet(...) }` or `gtnn { sourceSet(...) }`) inside a submodule's `legacyForge.mods {}` block forces Forge's `DatagenModLoader` to register those sibling mods as active Datagen contributors. This causes duplicate or conflicting Registrate data providers to be constructed, triggering fatal classloader collisions: `ClassCastException: class RegistrateBlockstateProvider cannot be cast to class GTBlockstateProvider`.
- **Policy**: Keep each submodule's `legacyForge.mods {}` strictly limited to its own mod ID (`"${mod_id}"`). Wire sibling cross-module code dependencies using standard Gradle dependency declarations (`implementation(requireSibling(...)) { transitive = false }`).

---

## 3. Real-World Crash Post-Mortems & Fix Recipes (实战排错经验库)

### Case 1: `ClassCastException` in `GTBlocks.copy` / `gtceu:pollucite_ore`
- **Symptom**: `BlockBehaviour$Properties cannot be cast to BlockPropertiesAccessor` during Block Register Event.
- **Root Cause**: `BlockBehaviour.Properties` is a vanilla class loaded before `BlockPropertiesAccessor` interface was enhanced.
- **Solution**: Use `if (props instanceof BlockPropertiesAccessor acc)` to guard all property copy logic.

### Case 2: `ClassCastException` in `GrowingPlantRender`
- **Symptom**: `IntegerProperty cannot be cast to IntegerPropertyAccessor`.
- **Root Cause**: Accessor mixin cast was used solely to get min/max integer bounds.
- **Solution**: Replace `accessor.gtceu$getMin()` / `getMax()` with `property.getPossibleValues().stream().min(Integer::compare).orElse(0)`.

### Case 3: `AssertionError` in `GregTechDatagen.initPre`
- **Symptom**: `AssertionError` at `RegistrateDataProviderAccessor.gtceu$getTypes()`.
- **Root Cause**: `RegistrateDataProvider` static map is only initialized during `--datagen` execution.
- **Solution**: Wrap the call in `try { ... } catch (Throwable ignored) { }` so normal client startup ignores datagen hooks.

### Case 4: `NoClassDefFoundError: PonderPlugin` & Missing Flywheel
- **Symptom**: `GTMachines.<clinit>` crashes because `PonderPlugin` class is missing, and Ponder crashes with `requires flywheel`.
- **Solution**: Add both `modLocalRuntime(forge.ponder)` and `modLocalRuntime(forge.flywheel.forge)` to `modules/gte-dev-runtime/build.gradle`.

### Case 5: Gradle Incremental Build Lock (`NoSuchFileException`)
- **Symptom**: `compileJava` fails with `NoSuchFileException: ...\build\classes\java\main\...` or `Unable to delete build`.
- **Solution**: Run `.\gradlew.bat --stop` to terminate lingering Gradle Daemons holding file locks, then delete `build/` and recompile.

### Case 6: Probabilistic `runData` crash — `NoSuchFieldError: CreativeModeTabs f_256750_`
- **Symptom**: `runData`/`runClient` in gtecore or gt-- died during mod construction at `AbstractRegistrate.<init>` with `NoSuchFieldError` on SRG field `f_256750_`. Success looked random: gte-dev-runtime runs worked, module runs crashed, and occasionally a run survived depending on FML's jar-selection order.
- **Root Cause**: gtm-reborn's and gt--'s **dev jars embedded SRG-mapped jarJar dependencies** (Registrate, ldlib, configuration, flywheel, ponder, mixinextras; kotlinforforge for gt--). FML extracts embeds verbatim; an SRG Registrate in a named (mojmap) runtime crashes on first use. Runs that also had a named standalone Registrate on the classpath survived because FML's `JarSelector` deterministically prefers top-level classpath jars over embedded ones with the same identifier (for mods.toml-less libs the identifier is the **file name**).
- **Fix**: See Rule 3b. Dev jars no longer carry embeds (`jar` excludes `META-INF/jarjar/**`); `jarWithEmbeds` feeds `reobfJar` so production jars are unchanged; every run config carries named `modLocalRuntime` copies of the embedded libraries.
- **Diagnostic script**: `python scripts/texture_lab/inspect_jarjar.py <jar>` classifies a jar's `META-INF/jarjar` embeds as SRG vs NAMED.

### Case 7: `runData` Datagen Crash — `ClassCastException: RegistrateBlockstateProvider cannot be cast to GTBlockstateProvider`
- **Symptom**: `.\gradlew.bat :modules:gtecore:runData` fails with `ClassCastException` in `GTBlockBuilder.lambda$exBlockstate$0`.
- **Root Cause**: Sibling mod sourceSets (`gtceu`, `gtnn`) were attached to `legacyForge.mods {}` in `gtecore/gradle/scripts/moddevgradle.gradle`. Forge's `DatagenModLoader` registered both `gtceu` and `gtecore` as active datagen providers, causing Registrate provider instances from different loaders/wrappers to collide.
- **Solution**: Remove sibling sourceSets from `mods {}` in `gtecore`. Sibling compilation dependencies must strictly use standard `implementation(requireSibling(':modules:gtm-reborn', 'gtm-reborn')) { transitive = false }`.

---

## 4. Dependency Management Workflow

### Adding a Mod for Players (整合包模组)
- Drop the `.jar` into `gte/overrides/mods/`.
- No Gradle modification needed.

### Adding a Mod for Code Development (代码引用模组)
1. Drop the `.jar` into `modules/gtecore/gradle/libs/` (tracked in Git for 100% offline coverage).
2. Add reference in `gradle/forge.versions.toml`.
3. Add `modCompileOnly(forge.yourMod)` in `modules/gtecore/dependencies.gradle`.
4. If runtime execution in dev environment is needed, add `modLocalRuntime(forge.yourMod)` in `modules/gte-dev-runtime/build.gradle`.

---

## 5. Key Gradle & Build Commands

```bash
# 1. Compile all Java code
./gradlew compileJava

# 2. Regenerate gtecore data (lang / item models / tags) — MANDATORY after
#    adding or renaming any registered content (items, blocks, tooltips)
./gradlew :modules:gtecore:runData

# 3. Build mod jars and synchronize to overrides/mods
./gradlew copyOutputJars

# 4. Publish to local Maven cache (~/.m2/repository/)
./gradlew publishAllToMavenLocal

# 5. Publish to static folder for GitHub Pages
./gradlew publishAllToMaven

# 6. Build Player Full-Mod Client Pack (GTE-FullMod zip)
python scripts/build_full_mod_pack.py [version]

# 7. Build Pure CurseForge Modpack (No bundled jars)
python scripts/build_curseforge_pack.py [version]

# 8. Audit 100% dependency coverage
python scripts/audit_dependencies.py

# 9. Launch Hot Debug Client
./gradlew :modules:gte-dev-runtime:runClient
```

### Datagen Discipline (注册新内容后必须 runData)

- `modules/gtecore/src/generated/resources/` is **100% datagen output**
  (`runData` writes lang JSONs, Registrate item models, and `.tag(...)`
  circuit/item tags there). **NEVER hand-edit files under it** — the next
  `runData` silently overwrites them.
- Bilingual lang entries are sourced from
  `modules/gtecore/.../datagen/Lang.java` via
  `provider.add(key, en, zh)` (en_us + zh_cn in one call). Add entries there,
  then run `./gradlew :modules:gtecore:runData` and verify the regenerated
  `en_us.json` / `zh_cn.json` contain your keys.
- Skipping `runData` leaves new items without generated item models and
  without circuit tag JSONs (`data/gtceu/tags/items/circuits/*.json`), so
  circuits will not be recognized as working circuits in-game even though
  `compileJava` passes.
- Other locales (`de_de`, `ja_jp`, ...) are produced by the CI translation
  workflow (`.github/workflows/translate.yml`) from the committed zh_cn —
  do not hand-write them either.

---

## 6. Code & Asset Search Methodology (代码与资源精准检索方法)

Detailed runbook: [code_search_runbook.md](file:///c:/Users/Ex_Je/Documents/GTEGroup/.agents/skills/gte-workflow/references/code_search_runbook.md)

When looking for items, blocks, machines, textures, or configs across the multi-module repo, **NEVER perform broad unconstrained root greps**. Follow this systematic 3-step pipeline:

1. **Natural Language / Chinese Name $\to$ ID**:
   - First grep `zh_cn.json` under `modules/gtecore/src/generated/resources/assets/gtecore/lang/` or `gte/overrides/config/openloader/resources/quests/assets/gte/lang/`.
   - Extract the registry ID (e.g. `"block.gtecore.imaginary_casing": "§b虚数机械方块"` $\to$ `imaginary_casing`).
2. **ID $\to$ Java / KubeJS Registry Target**:
   - Casings & Blocks $\to$ `modules/gtecore/.../GTEBlocks.java`
   - Items & Circuits $\to$ `modules/gtecore/.../GTEItems.java`
   - Multiblocks & Machines $\to$ `modules/gtecore/.../machines/GTEMultiMachine.java` / `GTEMachines.java`
   - Modpack Scripts $\to$ `gte/overrides/kubejs/server_scripts/`
3. **Textures, Models & CTM Discovery**:
   - Search `art_assets/` (central models/textures) and `modules/<mod>/src/main/resources/assets/<mod>/textures/`.
   - Always verify matching `.png.mcmeta` and `_ctm.png` for connected textures and animation.

