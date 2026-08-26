# CI/CD 自动化构建、打包与 Maven 发布流水线

GTE 建立了一套高自动化、多目标产物并行的 **GitHub Actions CI/CD 流水线**（配置文件位于 `.github/workflows/sync-build.yml` 与 `release-publish.yml`）。

---

## 🔄 全量 CI 流水线架构 (`sync-build.yml`)

每当向 `master` / `main` / `satou` 分支推送代码、提交 PR 或触发 Release Tag 时，GitHub Actions 会自动执行以下标准流水线：

```mermaid
flowchart TD
    A[Código push / Tag trigger] --> B[Checkout submódulos recursivos & configurar JDK 21 / Python 3.11 / Go]
    B --> C[Sincronización incremental de assets de Blockbench con Gradle syncBlockbenchAssets]
    C --> D[Compilación concurrente multi-módulo & pruebas automatizadas GameTest]
    D --> E[Copiar Jars generados a overrides/mods & recopilar en build/artifacts]
    E --> F[Ejecutar opencode_translate.py traducción AI completa/incremental]
    F --> G[Empaquetado estándar Packwiz: paquete CurseForge + parche manifest Java 21]
    G --> H[Python construye paquete completo para jugadores sin compilar .minecraft]
    H --> I[Packwiz exporta paquete de servidor puro]
    I --> J[Subir todos los artefactos de release al almacenamiento de Actions Artifacts]
    J --> K[Construir repositorio Maven estático y desplegar en GitHub Pages (gh-pages)]
    J --> L[Cuando se dispara Tag: publicar automáticamente en plataforma CurseForge]
```

---

## 📦 三大核心打包任务详解

### 1. CurseForge 规范包与 Java 21 补丁
- **Packwiz 导出**：运行 `packwiz curseforge export` 生成标准规范包。
- **自动补丁 manifest.json**：针对部分第三方启动器在解析 CurseForge 包时默认指派 Java 17 的问题，CI 会自动解压 zip，通过 Python 脚本将 `manifest.json` 中的 `minecraft.javaVersion` 与顶层 `javaVersion` **硬编码强制写入 21**，然后重新封装。

### 2. 玩家免编译完整懒人包 (`build_lazy_pack.py`)
- Python 脚本自动从各模块 `build/libs/` 抽取最新核心 Jar。
- 自动合并 `modules/gtecore/gradle/libs/` 下的关键扩展 Mod。
- 将全部配置、KubeJS 脚本、帕秋莉手册打包成一个开箱即用的 `.minecraft` 压缩包，内置中文启动指南。

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