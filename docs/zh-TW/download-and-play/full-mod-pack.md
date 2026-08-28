# 整合包下載與完整模組客戶端包指南

GTE (GregTech Easy) 為不同技術背景的玩家和服主提供了三種交付形式：

1. **CurseForge 規範包 (`GTE-CurseForge-*.zip`)**：標準啟動器匯入格式，自帶 `manifest.json`，模組位於 `overrides/mods/`，啟動器會自動安裝 Forge。**大多數玩家推薦使用這一種。**
2. **完整模組客戶端包 (`GTE-FullMod-*.zip`)**：扁平壓縮包，頂層只有遊戲內容，供自己配置例項的玩家使用。
3. **服務端包 (`GTE-Server-*.zip`)**：Forge 專用服務端包，`mods/` 位於壓縮包頂層，用於開服聯機。

---

## 📦 完整模組客戶端包

### 包內結構

```text
README_安装必看.txt
mods/            (17 個 jar)
config/
defaultconfigs/
kubejs/
```

沒有嵌套的 `.minecraft/` 目錄，不含啟動器，也不含 `run_game.bat`。Minecraft 本體與 Forge 由你的啟動器負責安裝，因此使用本包的前提是**你已經會在啟動器裡建立例項**。

### 硬性環境要求

| 項目 | 版本 | 說明 |
| :--- | :--- | :--- |
| **Minecraft** | `1.20.1` | 不接受其他版本 |
| **Forge** | `47.4.1` | 必須精確到這個版本 |
| **Java** | `21` | 切勿使用 Java 17 或 Java 8 |

> [!CAUTION]
> **Forge 必須是 47.4.1，而不是「47.4.1 及以上任選一個」。**
> - 模組 `gtmthings` 要求 Forge `[47.4.1,)`，低於此版本不會載入；
> - 而 Forge 47.4.10 自帶 ASM 9.8 + coremods 5.2.4，會讓 `appliedenergistics2` 15.4.9 的 mixin 失配，遊戲永遠開不到主選單。
>
> 47.4.1 是目前唯一可用的版本。

### 安裝步驟

=== "方式一：手動配置例項（本包用法）"

    1. 在啟動器（PCL2 / HMCL / Prism / MultiMC / 官方啟動器均可）中新建一個 Minecraft **1.20.1** 例項，並安裝 **Forge 47.4.1**。
    2. 先啟動一次，確認能進入主選單（這一步用來排除啟動器與 Java 自身的問題）。
    3. 開啟該例項的遊戲目錄（即 `.minecraft` 目錄，啟動器裡一般有「開啟資料夾」按鈕）。
    4. 將 `GTE-FullMod-<版本號>.zip` 的內容**全部解壓進去**，與已有的同名資料夾合併。
    5. 在例項設定裡把 Java 指定為 **Java 21**，分配 **8G ~ 12G** 記憶體。
    6. 啟動遊戲。首次進入會生成配置，比平時稍慢。

=== "方式二：啟動器一鍵匯入（推薦）"

    請改用 `GTE-CurseForge-<版本號>.zip`，在 CurseForge App / PCL2 / HMCL / Prism Launcher / MultiMC 中選擇**匯入整合包**。該包自帶 `manifest.json`，啟動器會自動裝好 Forge，無需手動配置。

=== "方式三：開服"

    請改用 `GTE-Server-<版本號>.zip`，其 `mods/` 位於壓縮包頂層：解壓至服務端根目錄後執行 `java -jar forge-*-installer.jar --installServer`，隨後以 `@libraries/net/minecraftforge/forge/1.20.1-47.4.1/unix_args.txt nogui` 啟動。

> [!WARNING]
> 檔名以 `-slim.jar` 或 `-dev-slim.jar` 結尾的 jar 是面向 Maven 使用者的構件，**故意不打包任何內嵌依賴**，絕對不要放進 `mods/`。否則 Forge 會選中一個不含內嵌 `ldlib` 的 `gtceu` 構建並直接中止：`Missing or unsupported mandatory dependencies: Mod ID: 'ldlib' ... [MISSING]`。官方發布的三個包均不含此類檔案。

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
    A[新建 1.20.1 实例] --> B[安装 Forge 47.4.1]
    B --> C[Java 路径 / 运行时]
    C --> D[选择已安装的 JDK 21 javaw.exe]
    D --> E[分配 8192MB ~ 12288MB 内存]
    E --> F[解压 GTE-FullMod 并启动游戏]
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
