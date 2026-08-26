# 整合包下載與玩家懶人包指南

GTE (GregTech Easy) 為不同技術背景的玩家和服主提供了三種開箱即用的交付形式：

1. **玩家免編譯完整懶人包 (`GTE-LazyPack-*.zip`)**：包含預編譯好的全部模組、配置、魔改指令碼與完整 `.minecraft` 目錄結構，**雙擊或拖入啟動器即可遊玩**。
2. **CurseForge 規範包 (`GTE-CurseForge-*.zip`)**：標準 CurseForge 格式，可直接在 PCL2 / HMCL / CurseForge App / Prism Launcher 中一鍵匯入。
3. **服務端整合包 (`GTE-Server-*.zip`)**：包含純淨服務端配置、模組與啟動指令碼，用於開服聯機。

---

## 🚀 玩家懶人包（推薦）

### 特點與優勢
- **0 編譯依賴**：無需安裝 JDK 編譯環境、IntelliJ IDEA 或 Git。
- **全量打包**：`gtecore`、`gtm-reborn`、`gt--` 最新發布 Jar 及前置擴充套件模組已全部內建於 `mods/` 目錄。
- **即拖即玩**：支援 PCL2 / HMCL 視窗拖拽一鍵匯入。

### 匯入與啟動步驟

=== "方式一：啟動器一鍵拖拽（推薦）"

    1. 開啟 **PCL2 (Plain Craft Launcher 2)** 或 **HMCL (Hello Minecraft! Launcher)**。
    2. 將下載到的 `GTE-LazyPack-<版本號>.zip` 直接**滑鼠左鍵拖入**啟動器主視窗中。
    3. 啟動器將自動識別並解壓至遊戲版本列表。
    4. 前往該版本的**版本設定**，將 Java 執行時指定為 **Java 21**。
    5. 分配 **8GB ~ 12GB** 記憶體，點選啟動遊戲！

=== "方式二：手動解壓模式"

    1. 將壓縮包解壓至任意無中文、無空格路徑（例如 `D:\Games\GTE\`）。
    2. 解壓後將獲得包含 `mods/`、`config/`、`kubejs/` 的 `.minecraft` 目錄。
    3. 在啟動器中新增遊戲版本，將遊戲根目錄選擇為解壓出的 `.minecraft` 資料夾。
    4. 確保選擇 **Java 21** 核心並啟動。

---

## ⚠️ Java 21 執行環境要求（極其重要）

> [!CAUTION]
> **本整合包強制要求執行環境為 Java 21 (JDK 21)！**
> 切勿使用 **Java 17** 或 **Java 8**，否則遊戲將直接崩潰或拒絕啟動！

### 為什麼必須使用 Java 21？
- GTE 的核心模組（`gtecore`、`gtm-reborn`、`gt--`）全面採用了 **Java 21 現代化語言特性**（如 Record Patterns、Virtual Threads、增強 Switch 匹配）。
- Gradle 構建指令碼全域性配置了 `JavaLanguageVersion.of(21)` 強制工具鏈檢查。

### 推薦 JDK 21 下載地址

| 發行版 | 下載連結 | 推薦理由 |
| :--- | :--- | :--- |
| **Azul Zulu 21 (LTS)** | [點選前往 Azul 官網](https://www.azul.com/downloads/?version=java-21-lts) | 效能卓越，對 Minecraft 大規模多執行緒最佳化極佳 |
| **Eclipse Temurin 21 (LTS)** | [點選前往 Adoptium 官網](https://adoptium.net/temurin/releases/?version=21) | 官方推薦，高相容性與穩定性 |
| **Microsoft OpenJDK 21** | [點選前往 Microsoft 官網](https://learn.microsoft.com/zh-cn/java/openjdk/download) | Windows 平臺原生適配良好 |

### 在啟動器中配置 Java 21

```mermaid
graph LR
    A[打开启动器] --> B[进入 GTE 版本设置]
    B --> C[Java 路径 / 运行时]
    C --> D[选择已安装的 JDK 21 javaw.exe]
    D --> E[分配 8192MB ~ 12288MB 内存]
    E --> F[保存并启动游戏]
```

---

## 🎮 遊戲內快捷鍵與常用指令

| 指令 / 快捷鍵 | 功能說明 | 許可權要求 |
| :--- | :--- | :--- |
| `/ftbquests editing_mode true` | 開啟任務書視覺化編輯模式（作者模式） | OP 許可權 |
| `/ftbquests reload` | 熱過載 FTB Quests 任務書配置檔案 | 所有人 |
| `/kubejs reload server_scripts` | 熱過載服務端魔改指令碼與配方 | OP 許可權 |
| `/kubejs reload client_scripts` | 熱過載客戶端魔改指令碼與顯示邏輯 | 無需許可權 |
| `/dumpmultiblock` | 木斧選取區域後一鍵匯出多方塊結構程式碼 | OP 許可權 |
| <kbd>U</kbd> / <kbd>R</kbd> | 檢視游標處物品的用途 (Usage) / 配方 (Recipe) | EMI / JEI 快捷鍵 |
| <kbd>F7</kbd> | 檢視周圍光照等級（紅叉表示刷怪區域） | 客戶端快捷鍵 |
