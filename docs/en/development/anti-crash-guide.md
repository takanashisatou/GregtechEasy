# Anti-Crash Development Guide and Practical Troubleshooting Experience Library

In a multi-module, multi-Classloader Minecraft development environment with complex Mixin bytecode enhancement, some careless coding practices can lead to catastrophic runtime crashes.

This manual summarizes the **Five Anti-Crash Development Iron Rules** and a **High-Frequency Crash Troubleshooting Experience Library** distilled from real-world GTE engineering practice.

---

## 🛡️ Five Anti-Crash Development Iron Rules (CRITICAL)

### Iron Rule 1: Never Force-Cast Mixin Accessor Interfaces

- **Crash Root Cause**: In a multi-module environment or during Addon loading, Minecraft native classes (e.g., `BlockBehaviour.Properties`) are instantiated by an early Classloader. At that point, the Mixin interface may not yet have completed bytecode weaving, and a force-cast will directly trigger a `ClassCastException`!
- **Incorrect Approach (Forbidden)**:
  ```java
  // Wrong! Will definitely crash with ClassCastException during early class loading
  int destroyTime = ((BlockPropertiesAccessor) props).getDestroyTime();
  ```
- **Correct Approach (Safe Guard)**:
  ```java
  // Correct: Use instanceof pattern guard
  if (props instanceof BlockPropertiesAccessor acc) {
      newProps.destroyTime(acc.getDestroyTime());
  }
  ```
- **Better Solution**: Prefer using Vanilla/Forge native APIs (e.g., obtain the integer range via `property.getPossibleValues()` instead of force-casting `IntegerPropertyAccessor`).

---

### Iron Rule 2: Do Not Put Production Optimization/Shader Mods in the Development Environment

- **Crash Root Cause**: Production optimization mods like `Oculus`, `Embeddium`, `ModernFix`, `ModernUI` contain hardcoded SRG obfuscated Mixin mappings (e.g., `f_117950_`, `m_91302_`). However, the Gradle `runClient` development environment runs under deobfuscated Mojang mappings, directly causing `InvalidMixinException` crashes.
- **Governance Principle**: Place optimization mods in `gte/overrides/mods/` (for use by normal launchers) and strictly forbid adding them as build dependencies of `modules/gte-dev-runtime`.

---

### Iron Rule 3: Development Environment Dependencies Must Uniformly Use `modLocalRuntime`

- **Crash Root Cause**: Plain `localRuntime` or `fileTree` does not trigger ModDevGradle's deobfuscation remapper, leading to missing symbols or broken obfuscated names at runtime.
- **Governance Principle**: In `modules/gte-dev-runtime/build.gradle`, you must declare `modLocalRuntime(...)` and configure `obfuscation.createRemappingConfiguration(configurations.localRuntime)`.

---

### Iron Rule 4: Resolving Gradle Incremental Compilation Deadlock (`NoSuchFileException`)

- **Symptom**: When running `compileJava` or `build`, you get `NoSuchFileException: ...\build\classes\java\main\...` or `Unable to delete directory 'build'`.
- **Root Cause**: A lingering Gradle Daemon background process holds Windows file locks.
- **Standard Solution**:
  ```powershell
  # 1. Completely terminate lingering Gradle daemon processes
  .\gradlew.bat --stop

  # 2. Delete conflicting build cache directories and recompile
  Remove-Item -Recurse -Force modules/*/build
  .\gradlew.bat compileJava
  ```

---

### Iron Rule 5: Mandatory Cross-Module Self-Check After Modifying the Underlying `gtm-reborn`

When modifying `gtm-reborn`'s base machines, material system, RecipeType, recipe conditions, or Capabilities, you must perform the following three-step checks in order:
1. **Check `gtecore` compilation integrity**: Run `.\gradlew.bat :modules:gtecore:compileJava`.
2. **Check KubeJS integration scripts**: Inspect GTCEu registration events in `startup_scripts/` and Machine references in `server_scripts/`.
3. **Check FTB Quests item references**: Verify whether the quest book references item IDs that have been renamed or removed.

---

## 📚 Real Crash Post-Mortems and Fix Recipe Library

### Case 1: `GTBlocks.copy` / Ore Registration Throws `ClassCastException`
- **Error Stack Trace**: `BlockBehaviour$Properties cannot be cast to BlockPropertiesAccessor`
- **Fix**: Use `if (props instanceof BlockPropertiesAccessor acc)` to guard all property copy logic.

### Case 2: `GrowingPlantRender` Force-Cast `IntegerPropertyAccessor` Crash
- **Error Stack Trace**: `IntegerProperty cannot be cast to IntegerPropertyAccessor`
- **Fix**: Replace with native stream operations:
  ```java
  property.getPossibleValues().stream().min(Integer::compare).orElse(0);
  ```

### Case 3: `GregTechDatagen.initPre` Throws `AssertionError`
- **Error Stack Trace**: `AssertionError at RegistrateDataProviderAccessor.gtceu$getTypes()`
- **Fix**: The static Map in `RegistrateDataProvider` is only initialized under the `--datagen` argument. Wrap the call in `try { ... } catch (Throwable ignored) { }` to avoid errors during normal startup.

### Case 4: Missing `PonderPlugin` Causes `NoClassDefFoundError`
- **Error Stack Trace**: `GTMachines.<clinit>` throws `NoClassDefFoundError: PonderPlugin`, followed by Ponder crash indicating `requires flywheel`
- **Fix**: In `modules/gte-dev-runtime/build.gradle`, include both `modLocalRuntime(forge.ponder)` and `modLocalRuntime(forge.flywheel.forge)`.