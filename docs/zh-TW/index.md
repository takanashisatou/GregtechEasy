# GregTech Easy (GTE) 官方文件

歡迎查閱 **GregTech Easy (GTE)** 整合包官方全方位指南！

GTE 是一個以 **“簡單、好玩、有趣、耗時短”** 為核心理念的現代 Minecraft 1.20.1 整合包。

---

## ⚡ 快速跳轉索引

<div class="grid cards" markdown>

-   :material-download: __[玩家與整合包指南](download-and-play/lazy-pack.md)__

    ---

    下載開箱即用的 **0 編譯完整懶人包**、CurseForge 規範包與服務端，瞭解 **Java 21** 執行環境配置與啟動器匯入教程。

    [:octicons-arrow-right-24: 立即前往](download-and-play/lazy-pack.md)

-   :material-chip: __[GTECore 核心模組詳解](gtecore/overview.md)__

    ---

    深入瞭解 **陰陽八卦煉仙爐**、**四象陣法**、**礦石處理中心**、**奇蹟之環**、**超弦與陰陽電路**、**AE2 樣板總成 Plus** 等核心內容。

    [:octicons-arrow-right-24: 立即前往](gtecore/overview.md)

-   :material-cog: __[GTM Reborn 模組分支](gtm-reborn/index.md)__

    ---

    瞭解 `satou` 分支帶來的多安培配方、批處理模式、1t Subtick 超頻、GameTest 自動化測試以及流體區間輸出特性。

    [:octicons-arrow-right-24: 立即前往](gtm-reborn/index.md)

-   :material-code-tags: __[KubeJS 魔改與開發工具](kubejs/scripting-guide.md)__

    ---

    學習如何在 KubeJS 中註冊材料、編寫配方，並使用內建的 `/dumpmultiblock` 木斧框選工具一鍵匯出多方塊結構程式碼。

    [:octicons-arrow-right-24: 立即前往](kubejs/scripting-guide.md)

-   :material-hammer-wrench: __[開發者與防崩潰實戰手冊](development/quick-start.md)__

    ---

    掌握 `run_game.bat` 免啟動器秒級啟動、`link_to_launcher.bat` 零複製目錄對映，以及杜絕 Mixin Accessor 崩潰的黃金守則。

    [:octicons-arrow-right-24: 立即前往](development/quick-start.md)

-   :material-robot: __[CI/CD 流水線與 AI 翻譯](ci-cd-and-translation/ci-pipeline.md)__

    ---

    瞭解基於 GitHub Actions 的自動化多模組並行構建、Packwiz 打包、Maven 釋出以及 `opencode_translate.py` AI 國際化指令碼。

    [:octicons-arrow-right-24: 立即前往](ci-cd-and-translation/ci-pipeline.md)

</div>

---

## 🛠️ 專案基礎資訊

| 配置項 | 說明 |
| :--- | :--- |
| **專案名稱** | `GregtechEasy` (`gte-multi`) |
| **執行與編譯工具鏈** | **JDK 21**（強制使用 Java 21 Toolchain，所有子模組嚴格統一） |
| **遊戲版本** | Minecraft `1.20.1` (Forge `47.4.1`) |
| **開源許可證** | LGPL-3.0 / MIT |
| **預設分支** | 主倉庫 `main` / `master`，GTM-Reborn `satou`，GT-- `kotlin`，GTECore `master` |
