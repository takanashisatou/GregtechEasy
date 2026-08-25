# CI/CD Automation, Packaging & Maven Publishing

GTE maintains a highly automated, multi-artifact **GitHub Actions CI/CD pipeline** (configured in `.github/workflows/sync-build.yml` and `release-publish.yml`).

---

## 🔄 Complete CI Pipeline Workflow (`sync-build.yml`)

Upon pushing to `master` / `main` / `satou`, submitting a PR, or creating a release tag, GitHub Actions executes the following pipeline:

```mermaid
flowchart TD
    A[Push / Tag Event] --> B[Checkout Recursive Submodules & Setup JDK 21 / Python 3.11 / Go]
    B --> C[Gradle Incremental Art Sync syncBlockbenchAssets]
    C --> D[Multi-Module Parallel Build & GameTest Integration Tests]
    D --> E[Copy Built Jars to overrides/mods & Collect into build/artifacts]
    E --> F[Run opencode_translate.py AI Internationalization Engine]
    F --> G[Packwiz Export: CurseForge Pack + Java 21 Manifest Patch]
    G --> H[Python Script: Build Zero-Compile Player Lazy Pack .minecraft]
    H --> I[Packwiz Export: Server Deployment Pack]
    I --> J[Upload Release Artifacts to Actions Artifacts Storage]
    J --> K[Build Static Maven Repo & Deploy to GitHub Pages (gh-pages)]
    J --> L[Tag Event: Auto-Publish to CurseForge Platform]
```

---

## 📦 Core Packaging Tasks

### 1. CurseForge Pack & Java 21 Manifest Patching
- **Packwiz Export**: Runs `packwiz curseforge export` to produce standard archives.
- **Java 21 Manifest Patch**: Third-party launchers may default to Java 17 when reading CurseForge manifests. The pipeline unzips the archive, enforces `javaVersion = 21` inside `manifest.json` via Python, and repacks the zip.

### 2. Player Zero-Compile Lazy Pack (`build_lazy_pack.py`)
- Extracts the latest compiled mod jars from submodule `build/libs/`.
- Merges companion offline libraries from `modules/gtecore/gradle/libs/`.
- Assembles configs, KubeJS scripts, and Patchouli books into a ready-to-play `.minecraft` zip bundle with player guides.

### 3. Server Pack (`packwiz server export`)
- Automatically excludes client-only cosmetic/shader mods, producing a clean production server bundle ready for Linux/Windows servers.

---

## 🌐 GitHub Pages Maven Repository Deployment

The Gradle `publish` task builds standard Maven repository artifacts for `gtecore`, `gtm-reborn`, and `gt--`, deploying directly to the `gh-pages` branch:

```groovy
// Consume GTE Maven repository in third-party mods
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

## 🏷️ Manual Release Tagging Workflow (`release-publish.yml`)

The repository adopts a strict Git release workflow:
1. Dispatch **Manual Publish Release** in GitHub Actions with a semantic version (e.g. `2.3.0`).
2. The workflow creates a `dev -> release` PR, runs CI, and squash merges.
3. Automatically tags `v2.3.0` on the `release` branch and pushes.
4. The tag event triggers `sync-build.yml` to publish release artifacts to CurseForge and GitHub.
