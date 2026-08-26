# 防崩潰開發守則與實戰排錯經驗庫 (Anti-Crash Guide)

在多模組、多 Classloader 及帶有複雜 Mixin 位元組碼增強的 Minecraft 開發環境中，一些不經意的寫法會導致災難性的執行時崩潰。

本手冊總結了 GTE 工程實戰中沉澱出的 **五大防崩潰鐵律** 與 **高頻崩潰排錯經驗庫**。

---

## 🛡️ 五大防崩潰開發鐵律 (CRITICAL)

### 鐵律 1：嚴禁強轉 Mixin Accessor 介面 (Never Force-Cast Accessors)

- **崩潰根源**：在多模組環境或 Addon 載入過程中，Minecraft 原生類（如 `BlockBehaviour.Properties`）被早期 Classloader 例項化，此時 Mixin 介面可能尚未完成位元組碼編織，強轉將直接觸發 `ClassCastException`！
- **錯誤寫法（嚴禁）**：
  ```java
  // 错误！早期类加载时必崩 ClassCastException
  int destroyTime = ((BlockPropertiesAccessor) props).getDestroyTime();
  ```
- **正確寫法（安全守衛）**：
  ```java
  // 正确：使用 instanceof 模式守卫
  if (props instanceof BlockPropertiesAccessor acc) {
      newProps.destroyTime(acc.getDestroyTime());
  }
  ```
- **更佳方案**：優先使用 Vanilla/Forge 原生 API（例如透過 `property.getPossibleValues()` 獲取整數範圍，而不是強轉 `IntegerPropertyAccessor`）。

---

### 鐵律 2：禁止將生產環境最佳化/著色器 Mod 放入開發環境

- **崩潰根源**：`Oculus`、`Embeddium`、`ModernFix`、`ModernUI` 等生產環境最佳化 Mod 內建了硬編碼的 SRG 混淆 Mixin 對映（如 `f_117950_`, `m_91302_`）。而 Gradle `runClient` 開發環境執行在反混淆的 Mojang 對映下，直接導致 `InvalidMixinException` 崩潰。
- **治理原則**：將最佳化模組放入 `gte/overrides/mods/`（供普通啟動器使用），嚴禁加入 `modules/gte-dev-runtime` 的構建依賴。

---

### 鐵律 3：開發環境依賴必須統一使用 `modLocalRuntime`

- **崩潰根源**：普通的 `localRuntime` 或 `fileTree` 不會觸發 ModDevGradle 的反混淆重對映器（Remapper），導致執行時找不到符號或混淆名稱斷裂。
- **治理原則**：在 `modules/gte-dev-runtime/build.gradle` 中，必須宣告 `modLocalRuntime(...)` 並配置 `obfuscation.createRemappingConfiguration(configurations.localRuntime)`。

---

### 鐵律 4：Gradle 增量編譯死鎖 (`NoSuchFileException`) 解決法

- **現象**：執行 `compileJava` 或 `build` 時提示 `NoSuchFileException: ...\build\classes\java\main\...` 或 `Unable to delete directory 'build'`。
- **根因**：後臺殘留的 Gradle Daemon 守護程序佔用了 Windows 檔案鎖。
- **標準解法**：
  ```powershell
  # 1. 彻底终止后台残留 Gradle 守护进程
  .\gradlew.bat --stop

  # 2. 删除冲突的 build 缓存目录后重新编译
  Remove-Item -Recurse -Force modules/*/build
  .\gradlew.bat compileJava
  ```

---

### 鐵律 5：修改底層 `gtm-reborn` 後的強制聯動自檢

當修改了 `gtm-reborn` 的基礎機器、材料系統、RecipeType、配方條件或 Capability 時，必須依次執行以下三步檢查：
1. **檢查 `gtecore` 編譯完整性**：執行 `.\gradlew.bat :modules:gtecore:compileJava`。
2. **檢查 KubeJS 聯動指令碼**：檢查 `startup_scripts/` 中的 GTCEu 註冊事件與 `server_scripts/` 中的 Machine 引用。
3. **檢查 FTB Quests 物品引用**：檢查任務書是否引用了被重新命名或移除的物品 ID。

---

## 📚 真實崩潰覆盤與修復配方庫 (Post-Mortems)

### 案例 1: `GTBlocks.copy` / 礦石註冊報 `ClassCastException`
- **錯誤堆疊**：`BlockBehaviour$Properties cannot be cast to BlockPropertiesAccessor`
- **修復方案**：使用 `if (props instanceof BlockPropertiesAccessor acc)` 保護所有屬性複製邏輯。

### 案例 2: `GrowingPlantRender` 強轉 `IntegerPropertyAccessor` 崩潰
- **錯誤堆疊**：`IntegerProperty cannot be cast to IntegerPropertyAccessor`
- **修復方案**：替換為原生流式操作：
  ```java
  property.getPossibleValues().stream().min(Integer::compare).orElse(0);
  ```

### 案例 3: `GregTechDatagen.initPre` 出現 `AssertionError`
- **錯誤堆疊**：`AssertionError at RegistrateDataProviderAccessor.gtceu$getTypes()`
- **修復方案**：`RegistrateDataProvider` 靜態 Map 僅在 `--datagen` 引數下初始化，將呼叫包裹在 `try { ... } catch (Throwable ignored) { }` 中即可避免普通啟動時報錯。

### 案例 4: `PonderPlugin` 缺失導致 `NoClassDefFoundError`
- **錯誤堆疊**：`GTMachines.<clinit>` 丟擲 `NoClassDefFoundError: PonderPlugin`，隨後 Ponder 崩潰提示 `requires flywheel`
- **修復方案**：在 `modules/gte-dev-runtime/build.gradle` 中同時引入 `modLocalRuntime(forge.ponder)` 與 `modLocalRuntime(forge.flywheel.forge)`。
