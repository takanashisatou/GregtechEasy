# Anti-Crash Development Guidelines and Practical Troubleshooting Experience Library (Anti-Crash Guide)

In a Minecraft development environment with multiple modules, multiple Classloaders, and complex Mixin bytecode enhancement, some careless coding practices can lead to catastrophic runtime crashes.

This manual summarizes the **Five Anti-Crash Iron Rules** and the **High-Frequency Crash Troubleshooting Experience Library** accumulated from real-world GTE project development.

---

## 🛡️ Five Anti-Crash Development Iron Rules (CRITICAL)

### Iron Rule 1: Never Force-Cast Mixin Accessor Interfaces

- **Crash Root Cause**: In a multi-module environment or during Addon loading, Minecraft native classes (such as `BlockBehaviour.Properties`) are instantiated by an early Classloader. At this point, the Mixin interface may not have completed bytecode weaving, and a force-cast will directly trigger a `ClassCastException`!
- **Incorrect Approach (Strictly Forbidden)**:
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
- **Better Solution**: Prefer using Vanilla/Forge native APIs (for example, use `property.getPossibleValues()` to obtain the integer range instead of force-casting `IntegerPropertyAccessor`).

---

### Iron Rule 2: Prohibited from Placing Production Optimization/Shader Mods in the Development Environment

- **Crash Root Cause**: Production environment optimization Mods such as `Oculus`, `Embeddium`, `ModernFix`, and `ModernUI` contain hardcoded SRG obfuscated Mixin mappings (e.g., `f_117950_`, `m_91302_`). However, the Gradle `runClient` development environment runs under deobfuscated Mojang mappings, directly causing an `InvalidMixinException` crash.
- **Governance Principle**: Place optimization mods in `gte/overrides/mods/` (for use by standard launchers) and strictly prohibit adding them to the build dependencies of `modules/gte-dev-runtime`.

---

### Iron Rule 3: Development Environment Dependencies Must Uniformly Use `modLocalRuntime`

- **Crash Root Cause**: Ordinary `localRuntime` or `fileTree` does not trigger ModDevGradle's deobfuscation remapper, leading to missing symbols or broken obfuscated names at runtime.
- **Governance Principle**: In `modules/gte-dev-runtime/build.gradle`, you must declare `modLocalRuntime(...)` and configure `obfuscation.createRemappingConfiguration(configurations.localRuntime)`.

---

### Iron Rule 4: Gradle Incremental Compilation Deadlock (`NoSuchFileException`) Solution

- **Symptom**: When executing `compileJava` or `build`, you encounter `NoSuchFileException: ...\build\classes\java\main\...` or `Unable to delete directory 'build'`.
- **Root Cause**: A lingering background Gradle Daemon process is holding Windows file locks.
- **Standard Solution**:
  ```powershell
  # 1. Completely terminate lingering background Gradle daemon processes
  .\gradlew.bat --stop

  # 2. Delete conflicting build cache directories and recompile
  Remove-Item -Recurse -Force modules/*/build
  .\gradlew.bat compileJava
  ```

---

### Iron Rule 5: Mandatory Linked Self-Check After Modifying the Underlying `gtm-reborn`

When modifying the base machines, material system, RecipeType, recipe conditions, or Capabilities of `gtm-reborn`, you must sequentially perform the following three-step check:
1. **Check `gtecore` compilation integrity**: Run `.\gradlew.bat :modules:gtecore:compileJava`.
2. **Check KubeJS integration scripts**: Check the GTCEu registration events in `startup_scripts/` and the Machine references in `server_scripts/`.
3. **Check FTB Quests item references**: Check whether the quest book references item IDs that have been renamed or removed.

---

## 📚 Real Crash Post-Mortems and Fix Recipe Library

### Case 1: `GTBlocks.copy` / Ore Registration Throws `ClassCastException`
- **Error Stack Trace**: `BlockBehaviour$Properties cannot be cast to BlockPropertiesAccessor`
- **Fix Solution**: Use `if (props instanceof BlockPropertiesAccessor acc)` to guard all property copy logic.

### Case 2: `GrowingPlantRender` Force-Cast `IntegerPropertyAccessor` Crash
- **Error Stack Trace**: `IntegerProperty cannot be cast to IntegerPropertyAccessor`
- **Fix Solution**: Replace with native streaming operations:
  ```java
  property.getPossibleValues().stream().min(Integer::compare).orElse(0);
  ```

### Case 3: `GregTechDatagen.initPre` Throws `AssertionError`
- **Error Stack Trace**: `AssertionError at RegistrateDataProviderAccessor.gtceu$getTypes()`
- **Fix Solution**: The `RegistrateDataProvider` static Map is only initialized under the `--datagen` parameter. Wrap the call in `try { ... } catch (Throwable ignored) { }` to avoid errors during normal startup.

### Case 4: Missing `PonderPlugin` Causes `NoClassDefFoundError`
- **Error Stack Trace**: `GTMachines.<clinit>` throws `NoClassDefFoundError: PonderPlugin`, followed by a Ponder crash indicating `requires flywheel`
- **Fix Solution**: In `modules/gte-dev-runtime/build.gradle`, add both `modLocalRuntime(forge.ponder)` and `modLocalRuntime(forge.flywheel.forge)`.

<<<<<FILE_END: development/anti-crash-guide.md>>>>