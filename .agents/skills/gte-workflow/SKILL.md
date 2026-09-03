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

### Rule 2: Ensure Early Window is Disabled via `config/fml.toml` When Using Embeddium/Oculus in Dev Runtime
- **Why**: When running `runClient` with `modLocalRuntime(forge.embeddium)` and `modLocalRuntime(forge.oculus)` on Windows with discrete GPUs (NVIDIA RTX series), Forge's `fmlearlywindow` (Early Progress Window) spawns a separate background GLFW/OpenGL rendering thread (`pool-2-thread-1`). When Embeddium/Oculus multi-threaded optimization hooks kick in, GLFW context switching between threads deadlocks silently, preventing the game window from popping up.
- **Policy**: In Forge 47.4.1, `FMLConfig` prioritizes reading `earlyWindowControl` directly from `config/fml.toml`. Ensure:
  1. In all `config/fml.toml` (`run/client/config/fml.toml`, `gte/overrides/config/fml.toml`, `modules/gtecore/run/client/config/fml.toml`), set:
     ```toml
     earlyWindowControl = false
     ```
  2. In `runs.client` within `moddevgradle.gradle` / `build.gradle`, also pass:
     ```groovy
     jvmArguments.addAll('-Dfml.earlyprogresswindow=false', '-Dforge.earlyWindow=false')
     ```
  This causes Forge to use `DummyProvider` (`ImmediateWindowProvider not loading because splash screen is disabled`), routing all GLFW window and OpenGL context creation directly to the main Render Thread so the game window pops up smoothly.
- **Consequence**: with no early window, nothing is on screen for the first ~25 s and the window is then created *behind* the active window (Windows foreground lock). That is handled by the raise helper — see Rule 2b and Case 11 — not by re-enabling the early window.

### Rule 2b: Launch the Dev Client Only Through the Gradle `runClient` Task
- **Supported entry points** (all three arm the window-raise helper):
  ```powershell
  $env:JAVA_HOME='C:\Users\Ex_Je\.jdks\ms-21.0.11'
  .\gradlew.bat runFullPack                              # preferred, root aggregate wrapper
  .\gradlew.bat :modules:gte-dev-runtime:runClient        # equivalent
  .\run_game.bat                                         # same task, auto-detects JDK/RAM/cores
  ```
- **Expected timeline**: no window for ~25 s (early window is disabled on purpose), then a 1600x900 window opens and is raised to the front; full cold start ≈ 70 s (`ModernFix` logs `Game took ~66 seconds to start`).
- **Knobs**: `GTE_WINDOW_WIDTH` / `GTE_WINDOW_HEIGHT` (default 1600x900), `GTE_NO_WINDOW_RAISE=1`, `GTE_RUNTIME_XMX` (default `8G`).
- **Unsupported**: the auto-generated `.vscode/launch.json` configs. They invoke `net.neoforged.devlaunch.Main` directly, bypassing `runClient` and therefore the window raise; ModDevGradle also regenerates that file on every IDE sync, so edits do not survive (Case 12). The IntelliJ `Run Client (Hot Debug)` config attaches JDWP, which produces the `jdwp.dll` `EXCEPTION_ACCESS_VIOLATION` dumps in `run/client/hs_err_pid*.log` at shutdown — use it only when you actually need breakpoints.


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

### Rule 5: Never Attach Sibling SourceSets to `legacyForge.mods {}` in Submodules
- **Why**: Attaching sibling mod source sets (e.g. `gtceu { sourceSet(...) }` or `gtnn { sourceSet(...) }`) inside a submodule's `legacyForge.mods {}` block forces Forge's `DatagenModLoader` and `ModLauncher` to register those sibling mods as active contributors in the submodule's context.
  - **In `runData`**: This causes duplicate/conflicting Registrate data providers to be constructed, triggering fatal classloader collisions: `ClassCastException: class RegistrateBlockstateProvider cannot be cast to class GTBlockstateProvider`.
  - **In `runClient`**: This causes classloading duplicates, mapping-attribute loops, and launch crashes during FML mod construction.
- **Policy**: Keep each submodule's `legacyForge.mods {}` strictly limited to its own mod ID (`"${mod_id}"`). Wire sibling cross-module code dependencies using standard Gradle dependency declarations (`implementation(requireSibling(...)) { transitive = false }`). Multi-mod sourceSet aggregation is exclusively reserved for the dedicated runner `modules/gte-dev-runtime`.

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

### Case 7: `runClient` Hangs in Background Without Popping Up Window (Embeddium / Oculus + `fmlearlywindow` Deadlock)
- **Symptom**: Running `runClient` with `modLocalRuntime(forge.embeddium)` and `modLocalRuntime(forge.oculus)` shows `Game took XX seconds to start` in logs or freezes after ModLauncher, but no game window ever appears on screen.
- **Root Cause**: Forge's `ImmediateWindowProvider fmlearlywindow` creates a concurrent OpenGL context on a secondary worker thread to show the early progress bar. On discrete GPUs (NVIDIA RTX series), Embeddium / Oculus multi-threaded optimizations (`NVIDIA_THREADED_OPTIMIZATIONS`) conflict with this early GLFW context switch, deadlocking the render thread before the main window is displayed.
- **Solution**:
  1. Do NOT delete or strip Embeddium/Oculus from `modLocalRuntime` if they are required for development.
  2. In `runs.client` within `moddevgradle.gradle` (or `build.gradle`), pass the disable flags directly to `jvmArguments`:
     ```groovy
     jvmArguments.addAll('-Dfml.earlyprogresswindow=false', '-Dforge.earlyWindow=false')
     ```
  3. This completely disables the unstable early progress window and routes all GLFW window creation directly to the main Render Thread.
- **Follow-up**: With the early window gone, no window exists for the first ~25 s of the run, which produces a *second*, different "no window" report — see Case 11. Never resolve Case 11 by re-enabling the early window.

### Case 8: `runData` & `runClient` Collision — `ClassCastException` / Lifecycle Failures via Sibling `sourceSets`
- **Symptom**: `.\gradlew.bat :modules:gtecore:runData` fails with `ClassCastException: RegistrateBlockstateProvider cannot be cast to GTBlockstateProvider`, and `runClient` fails during mod initialization.
- **Root Cause**: Sibling mod sourceSets (`gtceu`, `gtnn`) were attached to `legacyForge.mods {}` in `gtecore/gradle/scripts/moddevgradle.gradle`. Forge's `DatagenModLoader` and ModLauncher registered both `gtceu` and `gtecore` as active contributors, causing Registrate provider instances from different loaders/wrappers to collide and break runtime lifecycle.
- **Solution**: Remove sibling sourceSets from `mods {}` in all submodules. Sibling compilation dependencies must strictly use standard Gradle dependency wiring `implementation(requireSibling(':modules:gtm-reborn', 'gtm-reborn')) { transitive = false }`, and multi-sourceSet hot debugging belongs strictly in `gte-dev-runtime`.

### Case 9: Jade `AssertionError: Missing config translation` in Dev Runs
- **Symptom**: Opening or closing screens in `runClient` crashes with `java.lang.AssertionError: Missing config translation: config.jade.plugin_xxx` inside `snownee.jade.JadeClient.onGui`.
- **Root Cause**: ModDevGradle enables Java assertions (`-ea`) in dev run configurations by default. Jade has an assertion verifying all third-party plugin translation keys exist; if any third-party mod misses a key, an AssertionError is thrown.
- **Solution**: Pass `-da:snownee.jade...` in `runs.client` within `modules/gte-dev-runtime/build.gradle` and register the missing translation in `Lang.java`.

### Case 10: Real-Time Bi-Directional Dev Directory Linking
- **Symptom**: Quests edited in-game during `runClient` stay isolated in `run/client/` without updating `gte/overrides/`, or changes in `gte/overrides/` are missing from `runClient`.
- **Root Cause**: `run/` is `.gitignore`d to prevent log/save pollution, while `gte/overrides/` is the Git-tracked source of truth.
- **Solution**: `modules/gte-dev-runtime` defines `linkDevEnvironment`, which automatically creates native NTFS Directory Junctions (`mklink /J` on Windows, symlinks on POSIX) for `kubejs`, `config/ftbquests`, `defaultconfigs`, and `tlm_custom_pack`. Edits in-game write directly into `gte/overrides` for instant Git tracking.

### Case 11: `runFullPack` / `runClient` "Window Never Pops Up" — Window Created BEHIND the Active Window (Windows Foreground Lock)
- **Symptom**: `.\gradlew.bat runFullPack` runs to completion, `latest.log` ends with `[ModernFix]: Game took ~66 seconds to start` and no error, yet the user never sees a game window. Looks identical to Case 7 but is a different failure.
- **Diagnosis (do this before changing anything)**: enumerate top-level windows in Z-order and look for class `GLFW30` owned by the run's `java.exe`. If it is present with `Visible=True`, `Iconic=False` and a sane rect, the game is fine and only the Z-order/focus is wrong. On the reference machine the window sat at Z-index 2, directly behind the focused browser window that fully covered it.
- **Root Cause**: two effects compounding.
  1. Because the early progress window is disabled (mandatory, Case 7 / Rule 2), GLFW only creates the window inside `Minecraft.<init>`, ~25 s into the run — long after the user alt-tabbed away. The game JVM is a **background process forked by the Gradle daemon**, so Windows' foreground lock refuses the `SetForegroundWindow` that GLFW issues on window creation (`SetForegroundWindow` only succeeds for the foreground process, a process started *by* the foreground process, or one that received the last input event). The window is therefore created *below* the active window.
  2. Minecraft's default 854x480 is ~11 % of a 3840x2400 screen, so any maximized editor/browser hides it completely.
- **Solution**: `modules/gte-dev-runtime/build.gradle` arms `scripts/dev/raise_game_window.ps1` from `runClient.doFirst` (via `ProcessBuilder`, never `exec {}`, so the build does not block). The helper polls for the `GLFW30` window whose owning `java.exe` command line contains `gte-dev-runtime` (so a launcher instance is never grabbed) and started with this run, then lifts it with `SetWindowPos(HWND_TOPMOST)` → `SetWindowPos(HWND_NOTOPMOST)`. **Z-order changes are not subject to the foreground lock, so the raise always works**; keyboard focus is then attempted with `AttachThreadInput` + `SetForegroundWindow` + `SwitchToThisWindow`, falling back to `FlashWindowEx` when Windows still refuses. The run also passes `--width 1600 --height 900`.
- **Knobs**: `GTE_NO_WINDOW_RAISE=1` disables the helper; `GTE_WINDOW_WIDTH` / `GTE_WINDOW_HEIGHT` override the window size. Helper output goes to `modules/gte-dev-runtime/build/raise-game-window.log`.
- **Launch through Gradle only**: the helper is armed from `runClient.doFirst`, so it only applies to `gradlew runFullPack` / `gradlew :modules:gte-dev-runtime:runClient` / `run_game.bat`. The auto-generated `.vscode/launch.json` configs start `net.neoforged.devlaunch.Main` directly and bypass it — see Case 12; that path is deliberately unsupported.
- **Not a fix**: re-enabling `earlyWindowControl` / `fmlearlywindow` (regresses to the Case 7 GLFW deadlock), and changing `SPI_SETFOREGROUNDLOCKTIMEOUT` (mutates the user's system-wide settings).

### Case 12: Where `.vscode/launch.json` Comes From (and Why It Is Not a Supported Launch Path)
- **Question**: nobody wrote `.vscode/launch.json`, yet it holds 12 fully-populated Java launch configs with absolute paths.
- **Origin**: ModDevGradle generates it. `IdeIntegration.createForProject` picks an integration by probing the environment — `VSCODE_PID` (and the Gradle process actually being a descendant of that PID) selects `VsCodeIntegration`, `eclipse.application` selects `EclipseIntegration`, `idea.sync.active` selects `IntelliJIntegration`, otherwise `NoIdeIntegration` writes nothing. `VsCodeIntegration.configureRuns` then walks every `runs {}` block in `afterEvaluate` and calls `BatchedLaunchWriter.writeToLatestJson(rootDir)`. Config names come verbatim from each module's `ideName`; group names are `"Mod Development - " + project.getName()`. VS Code's Java extension is Buildship-based, which is why the configs reference Eclipse-style `bin/main` output dirs — IntelliJ would use `build/classes`.
- **When it regenerates**: on every Gradle sync from a VS Code-family IDE (VS Code, Antigravity, Cursor), including the sync triggered after editing a `build.gradle`. MDG writes its groups with `WritingMode.REMOVE_EXISTING`, so they are replaced wholesale each time. The content only actually changes if `ideName`, `gameDirectory`, `loadedMods`, `tasksBefore` or the set of runs changed — the configs merely point at `build/moddev/*RunProgramArgs.txt` argfiles, and it is those argfiles that carry `--width`/`--height`, mixin lists and JVM args (verified: changing `GTE_WINDOW_WIDTH` rewrites the argfile and leaves `launch.json` byte-identical).
- **Manual trigger**: MDG registers `neoForgeIdeSync` for this. From a shell the IDE probe must pass, so fake the VS Code ancestry:
  ```powershell
  $env:JAVA_HOME='C:\Users\Ex_Je\.jdks\ms-21.0.11'
  $env:VSCODE_PID=$PID    # the Gradle process must be a descendant of this PID
  .\gradlew.bat --no-daemon neoForgeIdeSync
  ```
  Its task graph is `linkDevEnvironment` → `prepareClientRun` → `prepareServerRun` → `neoForgeIdeSync`, so a sync also refreshes the argfiles and the `gte/overrides` directory junctions.
- **Do not use those configs to launch the game, and do not hand-edit them.** They bypass `runClient`, so the Case 11 window raise never happens, and regeneration discards manual edits. Durable customization belongs in `runs {}` in `build.gradle`, which flows into the argfiles both paths read.
- **Not tracked by git**: `.gitignore` ignores `.vscode/`, so this is purely a local IDE artifact.



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

