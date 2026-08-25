# Anti-Crash Development Guide & Practical Post-Mortems

In a complex multi-module development environment featuring multiple classloaders and bytecode mixins, seemingly innocent code patterns can cause catastrophic runtime crashes.

This guide details the **Five Golden Rules for Crash Prevention** and a repository of **Real-World Crash Post-Mortems**.

---

## 🛡️ Five Golden Anti-Crash Rules (CRITICAL)

### Rule 1: Never Force-Cast Mixin Accessors

- **Root Cause**: In multi-module environments, vanilla Minecraft classes (like `BlockBehaviour.Properties`) are loaded by early classloaders before Mixin interfaces are attached, resulting in a fatal `ClassCastException`.
- **Wrong Pattern (STRICTLY PROHIBITED)**:
  ```java
  // WRONG: Crashes with ClassCastException during early classloading
  int destroyTime = ((BlockPropertiesAccessor) props).getDestroyTime();
  ```
- **Correct Pattern (Pattern Matching Guard)**:
  ```java
  // CORRECT: Safe instanceof pattern matching guard
  if (props instanceof BlockPropertiesAccessor acc) {
      newProps.destroyTime(acc.getDestroyTime());
  }
  ```
- **Best Practice**: Prefer Vanilla/Forge native methods over accessors (e.g. `property.getPossibleValues()` instead of `IntegerPropertyAccessor`).

---

### Rule 2: Never Put Production Shader/Optimizer Jars in Dev Runtime

- **Root Cause**: Optimization mods such as `Oculus`, `Embeddium`, `ModernFix`, and `ModernUI` contain hardcoded SRG obfuscated mixin refmaps (`f_117950_`, `m_91302_`). Gradle `runClient` runs in Mojang deobfuscated mappings, triggering `InvalidMixinException`.
- **Rule**: Keep optimization jars strictly in `gte/overrides/mods/` for real player launchers; exclude them from `modules/gte-dev-runtime`.

---

### Rule 3: Always Use `modLocalRuntime` for Dev Dependencies

- **Root Cause**: Standard `localRuntime` or `fileTree` dependencies do not trigger ModDevGradle's deobfuscation remapper.
- **Rule**: In `modules/gte-dev-runtime/build.gradle`, declare runtime dependencies using `modLocalRuntime(...)` and verify `obfuscation.createRemappingConfiguration(configurations.localRuntime)` is declared.

---

### Rule 4: Handling Gradle Incremental Locks (`NoSuchFileException`)

- **Symptom**: `compileJava` fails with `NoSuchFileException: ...\build\classes\java\main\...` or `Unable to delete directory 'build'`.
- **Root Cause**: Lingering background Gradle Daemons holding Windows file system locks.
- **Solution**:
  ```powershell
  # 1. Kill lingering Gradle daemons
  .\gradlew.bat --stop

  # 2. Delete locked build directories and recompile
  Remove-Item -Recurse -Force modules/*/build
  .\gradlew.bat compileJava
  ```

---

### Rule 5: Cross-Module Change Validation Checklist

Whenever editing `gtm-reborn` core classes, machines, materials, RecipeTypes, or Capabilities, execute this 3-step checklist:
1. **Validate `gtecore` compilation**: Run `.\gradlew.bat :modules:gtecore:compileJava`.
2. **Validate KubeJS scripts**: Check `startup_scripts/` for registered events and `server_scripts/` for machine references.
3. **Validate FTB Quests**: Ensure no quests reference renamed or deleted item IDs.

---

## 📚 Real-World Crash Post-Mortems & Fix Recipes

### Case 1: `GTBlocks.copy` / Ore Registration `ClassCastException`
- **Symptom**: `BlockBehaviour$Properties cannot be cast to BlockPropertiesAccessor`
- **Fix**: Guard all property cloning using `if (props instanceof BlockPropertiesAccessor acc)`.

### Case 2: `GrowingPlantRender` `IntegerPropertyAccessor` Crash
- **Symptom**: `IntegerProperty cannot be cast to IntegerPropertyAccessor`
- **Fix**: Replace accessor call with native stream methods:
  ```java
  property.getPossibleValues().stream().min(Integer::compare).orElse(0);
  ```

### Case 3: `GregTechDatagen.initPre` `AssertionError`
- **Symptom**: `AssertionError at RegistrateDataProviderAccessor.gtceu$getTypes()`
- **Fix**: `RegistrateDataProvider` static maps only initialize during `--datagen`. Wrap the call in `try { ... } catch (Throwable ignored) { }` to safely ignore in normal client runs.

### Case 4: Missing `PonderPlugin` & Flywheel `NoClassDefFoundError`
- **Symptom**: `GTMachines.<clinit>` throws `NoClassDefFoundError: PonderPlugin`, and Ponder crashes with `requires flywheel`.
- **Fix**: Add both `modLocalRuntime(forge.ponder)` and `modLocalRuntime(forge.flywheel.forge)` to `modules/gte-dev-runtime/build.gradle`.
