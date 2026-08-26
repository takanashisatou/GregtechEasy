# 防崩溃开发守则与实战排错经验库 (Anti-Crash Guide)

在多模块、多 Classloader 及带有复杂 Mixin 字节码增强的 Minecraft 开发环境中，一些不经意的写法会导致灾难性的运行时崩溃。

本手册总结了 GTE 工程实战中沉淀出的 **五大防崩溃铁律** 与 **高频崩溃排错经验库**。

---

## 🛡️ 五大防崩溃开发铁律 (CRITICAL)

### 铁律 1：严禁强转 Mixin Accessor 接口 (Never Force-Cast Accessors)

- **崩溃根源**：在多模块环境或 Addon 加载过程中，Minecraft 原生类（如 `BlockBehaviour.Properties`）被早期 Classloader 实例化，此时 Mixin 接口可能尚未完成字节码编织，强转将直接触发 `ClassCastException`！
- **错误写法（严禁）**：
  ```java
  // 错误！早期类加载时必崩 ClassCastException
  int destroyTime = ((BlockPropertiesAccessor) props).getDestroyTime();
  ```
- **正确写法（安全守卫）**：
  ```java
  // 正确：使用 instanceof 模式守卫
  if (props instanceof BlockPropertiesAccessor acc) {
      newProps.destroyTime(acc.getDestroyTime());
  }
  ```
- **更佳方案**：优先使用 Vanilla/Forge 原生 API（例如通过 `property.getPossibleValues()` 获取整数范围，而不是强转 `IntegerPropertyAccessor`）。

---

### 铁律 2：禁止将生产环境优化/着色器 Mod 放入开发环境

- **崩溃根源**：`Oculus`、`Embeddium`、`ModernFix`、`ModernUI` 等生产环境优化 Mod 内置了硬编码的 SRG 混淆 Mixin 映射（如 `f_117950_`, `m_91302_`）。而 Gradle `runClient` 开发环境运行在反混淆的 Mojang 映射下，直接导致 `InvalidMixinException` 崩溃。
- **治理原则**：将优化模组放入 `gte/overrides/mods/`（供普通启动器使用），严禁加入 `modules/gte-dev-runtime` 的构建依赖。

---

### 铁律 3：开发环境依赖必须统一使用 `modLocalRuntime`

- **崩溃根源**：普通的 `localRuntime` 或 `fileTree` 不会触发 ModDevGradle 的反混淆重映射器（Remapper），导致运行时找不到符号或混淆名称断裂。
- **治理原则**：在 `modules/gte-dev-runtime/build.gradle` 中，必须声明 `modLocalRuntime(...)` 并配置 `obfuscation.createRemappingConfiguration(configurations.localRuntime)`。

---

### 铁律 4：Gradle 增量编译死锁 (`NoSuchFileException`) 解决法

- **现象**：执行 `compileJava` 或 `build` 时提示 `NoSuchFileException: ...\build\classes\java\main\...` 或 `Unable to delete directory 'build'`。
- **根因**：后台残留的 Gradle Daemon 守护进程占用了 Windows 文件锁。
- **标准解法**：
  ```powershell
  # 1. 彻底终止后台残留 Gradle 守护进程
  .\gradlew.bat --stop

  # 2. 删除冲突的 build 缓存目录后重新编译
  Remove-Item -Recurse -Force modules/*/build
  .\gradlew.bat compileJava
  ```

---

### 铁律 5：修改底层 `gtm-reborn` 后的强制联动自检

当修改了 `gtm-reborn` 的基础机器、材料系统、RecipeType、配方条件或 Capability 时，必须依次执行以下三步检查：
1. **检查 `gtecore` 编译完整性**：运行 `.\gradlew.bat :modules:gtecore:compileJava`。
2. **检查 KubeJS 联动脚本**：检查 `startup_scripts/` 中的 GTCEu 注册事件与 `server_scripts/` 中的 Machine 引用。
3. **检查 FTB Quests 物品引用**：检查任务书是否引用了被重命名或移除的物品 ID。

---

## 📚 真实崩溃复盘与修复配方库 (Post-Mortems)

### 案例 1: `GTBlocks.copy` / 矿石注册报 `ClassCastException`
- **错误堆栈**：`BlockBehaviour$Properties cannot be cast to BlockPropertiesAccessor`
- **修复方案**：使用 `if (props instanceof BlockPropertiesAccessor acc)` 保护所有属性复制逻辑。

### 案例 2: `GrowingPlantRender` 强转 `IntegerPropertyAccessor` 崩溃
- **错误堆栈**：`IntegerProperty cannot be cast to IntegerPropertyAccessor`
- **修复方案**：替换为原生流式操作：
  ```java
  property.getPossibleValues().stream().min(Integer::compare).orElse(0);
  ```

### 案例 3: `GregTechDatagen.initPre` 出现 `AssertionError`
- **错误堆栈**：`AssertionError at RegistrateDataProviderAccessor.gtceu$getTypes()`
- **修复方案**：`RegistrateDataProvider` 静态 Map 仅在 `--datagen` 参数下初始化，将调用包裹在 `try { ... } catch (Throwable ignored) { }` 中即可避免普通启动时报错。

### 案例 4: `PonderPlugin` 缺失导致 `NoClassDefFoundError`
- **错误堆栈**：`GTMachines.<clinit>` 抛出 `NoClassDefFoundError: PonderPlugin`，随后 Ponder 崩溃提示 `requires flywheel`
- **修复方案**：在 `modules/gte-dev-runtime/build.gradle` 中同时引入 `modLocalRuntime(forge.ponder)` 与 `modLocalRuntime(forge.flywheel.forge)`。
