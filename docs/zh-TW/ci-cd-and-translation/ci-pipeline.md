# CI/CD 自動化構建、打包與 Maven 釋出流水線

GTE 建立了一套高自動化、多目標產物並行的 **GitHub Actions CI/CD 流水線**（配置檔案位於 `.github/workflows/sync-build.yml` 與 `release-publish.yml`）。

---

## 🔄 全量 CI 流水線架構 (`sync-build.yml`)

每當向 `master` / `main` / `satou` 分支推送程式碼、提交 PR 或觸發 Release Tag 時，GitHub Actions 會自動執行以下標準流水線：

```mermaid
flowchart TD
    A[代码推送 / Tag 触发] --> B[Checkout 递归子模块 & 配置 JDK 21 / Python 3.11 / Go]
    B --> C[Gradle 增量同步 Blockbench 美术资产 syncBlockbenchAssets]
    C --> D[多模块高并发编译 & GameTest 自动化实机测试]
    D --> E[复制生成 Jar 至 overrides/mods & 收集至 build/artifacts]
    E --> F[运行 opencode_translate.py 全量/增量 AI 国际化翻译]
    F --> G[Packwiz 规范打包: CurseForge 包 + 补丁 Java 21 manifest]
    G --> H[Python 构建玩家完整模组客户端包 GTE-FullMod]
    H --> I[Packwiz 导出纯净服务端 Server 包]
    I --> J[上传所有 Release 产物至 Actions Artifacts 存储]
    J --> K[构建静态 Maven 仓库并部署至 GitHub Pages (gh-pages)]
    J --> L[Tag 触发时: 自动发布至 CurseForge 平台]
```

---

## 📦 三大核心打包任務詳解

### 1. CurseForge 規範包與 Java 21 補丁
- **Packwiz 匯出**：執行 `packwiz curseforge export` 生成標準規範包。
- **自動補丁 manifest.json**：針對部分第三方啟動器在解析 CurseForge 包時預設指派 Java 17 的問題，CI 會自動解壓 zip，透過 Python 指令碼將 `manifest.json` 中的 `minecraft.javaVersion` 與頂層 `javaVersion` **硬編碼強制寫入 21**，然後重新封裝。

### 2. 玩家完整模組客戶端包 (`build_full_mod_pack.py`)
- Python 指令碼自動從各模組 `build/libs/` 抽取最新核心 Jar。
- 自動合併 `modules/gtecore/gradle/libs/` 下的關鍵擴充套件 Mod。
- 將全部配置、KubeJS 指令碼、帕秋莉手冊打包成扁平的 `GTE-FullMod-*.zip`（頂層即 `mods/`、`config/`、`defaultconfigs/`、`kubejs/`），內建中文安裝指南 `README_安装必看.txt`。

### 3. 服務端匯出包 (`packwiz server export`)
- 自動剔除客戶端專有最佳化 Mod（如 3D 皮膚層、光影著色器、按鍵繫結等），生成可直接部署在 Linux/Windows 生產伺服器上的純淨服務端。

---

## 🌐 GitHub Pages 靜態 Maven 倉庫部署

流水線透過 Gradle 的 `publish` 任務將所有子模組（`gtecore`、`gtm-reborn`、`gt--`）構建為標準 Maven 構件，並部署到 `gh-pages` 分支：

```groovy
// 在第三方 Mod 或开发工程中直接引用 GTE Maven 仓库
repositories {
    maven {
        name = "GTE GitHub Pages Maven"
        url = "https://takanashisatou.github.io/GregtechEasy/"
    }
}

dependencies {
    implementation fg.deobf("org.satou.gtecore:gtecore-1.20.1:1.0.0")
}
```

---

## 🏷️ 手動釋出與版本打標工作流 (`release-publish.yml`)

專案採用規範化的 Git Release 流程：
1. 在 GitHub Actions 頁面手動觸發 **Manual Publish Release**，輸入版本號（如 `2.3.0`）。
2. 工作流自動建立 `dev -> release` PR，執行 CI 校驗並自動 Squash Merge。
3. 自動在 `release` 分支打上 `v2.3.0` Git Tag 並推送。
4. Tag 推送事件自動觸發 `sync-build.yml`，最終完成全渠道製品釋出。
