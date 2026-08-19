---
name: gte-workflow
description: >-
  Comprehensive guide and operational runbook for GregTech Easy (GTE) project development,
  multi-module architecture, dependency management, avoiding Mixin/Accessor runtime crashes,
  and building player Lazy Packs or publishing to GitHub Pages Maven. Use whenever developing,
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
    ├── build_lazy_pack.py        # Player zero-compile client packaging (.minecraft zip)
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

# 2. Build mod jars and synchronize to overrides/mods
./gradlew copyOutputJars

# 3. Publish to local Maven cache (~/.m2/repository/)
./gradlew publishAllToMavenLocal

# 4. Publish to static folder for GitHub Pages
./gradlew publishAllToMaven

# 5. Build Zero-Compile Player Lazy Pack (.minecraft client zip)
python scripts/build_lazy_pack.py [version]

# 6. Audit 100% dependency coverage
python scripts/audit_dependencies.py

# 7. Launch Hot Debug Client
./gradlew :modules:gte-dev-runtime:runClient
```
