# CI/CD 自动化构建、打包与 Maven 发布流水线

GTE 建立了一套高自动化、多目标产物并行的 **GitHub Actions CI/CD 流水线**（配置文件位于 `.github/workflows/sync-build.yml` 与 `release-publish.yml`）。

---

## 🔄 全量 CI 流水线架构 (`sync-build.yml`)

每当向 `master` / `main` / `satou` 分支推送代码、提交 PR 或触发 Release Tag 时，GitHub Actions 会自动执行以下标准流水线：

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

## 📦 三大核心打包任务详解

### 1. CurseForge 规范包与 Java 21 补丁
- **Packwiz 导出**：运行 `packwiz curseforge export` 生成标准规范包。
- **自动补丁 manifest.json**：针对部分第三方启动器在解析 CurseForge 包时默认指派 Java 17 的问题，CI 会自动解压 zip，通过 Python 脚本将 `manifest.json` 中的 `minecraft.javaVersion` 与顶层 `javaVersion` **硬编码强制写入 21**，然后重新封装。

### 2. 玩家完整模组客户端包 (`build_full_mod_pack.py`)
- Python 脚本自动从各模块 `build/libs/` 抽取最新核心 Jar。
- 自动合并 `modules/gtecore/gradle/libs/` 下的关键扩展 Mod。
- 将全部配置、KubeJS 脚本、帕秋莉手册打包成扁平的 `GTE-FullMod-*.zip`（顶层即 `mods/`、`config/`、`defaultconfigs/`、`kubejs/`），内置中文安装指南 `README_安装必看.txt`。

### 3. 服务端导出包 (`packwiz server export`)
- 自动剔除客户端专有优化 Mod（如 3D 皮肤层、光影着色器、按键绑定等），生成可直接部署在 Linux/Windows 生产服务器上的纯净服务端。

---

## 🌐 GitHub Pages 静态 Maven 仓库部署

流水线通过 Gradle 的 `publish` 任务将所有子模块（`gtecore`、`gtm-reborn`、`gt--`）构建为标准 Maven 构件，并部署到 `gh-pages` 分支：

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

## 🏷️ 手动发布与版本打标工作流 (`release-publish.yml`)

项目采用规范化的 Git Release 流程：
1. 在 GitHub Actions 页面手动触发 **Manual Publish Release**，输入版本号（如 `2.3.0`）。
2. 工作流自动创建 `dev -> release` PR，执行 CI 校验并自动 Squash Merge。
3. 自动在 `release` 分支打上 `v2.3.0` Git Tag 并推送。
4. Tag 推送事件自动触发 `sync-build.yml`，最终完成全渠道制品发布。
