# CI/CD Automated Build, Packaging, and Maven Release Pipeline

GTE has established a highly automated, multi-target parallel **GitHub Actions CI/CD pipeline** (configuration files located in `.github/workflows/sync-build.yml` and `release-publish.yml`).

---

## 🔄 Full CI Pipeline Architecture (`sync-build.yml`)

Whenever code is pushed to the `master` / `main` / `satou` branches, a PR is submitted, or a Release Tag is triggered, GitHub Actions automatically executes the following standard pipeline:

```mermaid
flowchart TD
    A[Code Push / Tag Trigger] --> B[Checkout recursive submodules & configure JDK 21 / Python 3.11 / Go]
    B --> C[Gradle incremental sync Blockbench art assets syncBlockbenchAssets]
    C --> D[Multi-module high-concurrency compilation & GameTest automated real-machine testing]
    D --> E[Copy generated Jars to overrides/mods & collect to build/artifacts]
    E --> F[Run opencode_translate.py full/incremental AI internationalization translation]
    F --> G[Packwiz standard packaging: CurseForge pack + patch Java 21 manifest]
    G --> H[Python builds Zero-Compile player complete lazy pack .minecraft]
    H --> I[Packwiz exports clean server pack]
    I --> J[Upload all Release artifacts to Actions Artifacts storage]
    J --> K[Build static Maven repository and deploy to GitHub Pages (gh-pages)]
    J --> L[When Tag triggers: automatically publish to CurseForge platform]
```

---

## 📦 Detailed Explanation of Three Core Packaging Tasks

### 1. CurseForge Standard Pack and Java 21 Patch
- **Packwiz Export**: Run `packwiz curseforge export` to generate a standard pack.
- **Automatic manifest.json Patch**: To address the issue where some third-party launchers default to Java 17 when parsing CurseForge packs, CI automatically unzips the zip, uses a Python script to **hardcode force-write 21** into `minecraft.javaVersion` and the top-level `javaVersion` in `manifest.json`, then repackages it.

### 2. Player No-Compile Complete Lazy Pack (`build_lazy_pack.py`)
- Python script automatically extracts the latest core Jars from each module's `build/libs/`.
- Automatically merges key extension mods under `modules/gtecore/gradle/libs/`.
- Packs all configurations, KubeJS scripts, and Patchouli manuals into a ready-to-use `.minecraft` archive, with a built-in Chinese startup guide.

### 3. Server Export Pack (`packwiz server export`)
- Automatically removes client-specific optimization mods (such as 3D skin layers, shaders, key bindings, etc.) to generate a clean server that can be directly deployed on Linux/Windows production servers.

---

## 🌐 GitHub Pages Static Maven Repository Deployment

The pipeline uses Gradle's `publish` task to build all submodules (`gtecore`, `gtm-reborn`, `gt--`) as standard Maven artifacts and deploy them to the `gh-pages` branch:

```groovy
// Directly reference the GTE Maven repository in third-party mods or development projects
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

## 🏷️ Manual Release and Version Tagging Workflow (`release-publish.yml`)

The project adopts a standardized Git Release process:
1. Manually trigger **Manual Publish Release** on the GitHub Actions page, enter the version number (e.g., `2.3.0`).
2. The workflow automatically creates a `dev -> release` PR, runs CI checks, and automatically Squash Merges.
3. Automatically tags the `release` branch with `v2.3.0` Git Tag and pushes it.
4. The Tag push event automatically triggers `sync-build.yml`, finally completing the all-channel artifact release.