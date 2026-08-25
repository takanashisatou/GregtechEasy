# Developer Quick Start Guide

This guide is intended for Java/Kotlin developers and modpack designers contributing to the GTE-Multi aggregated repository.

---

## 💻 1. Development Environment

### Mandatory JDK 21
The entire multi-module project enforces **JDK 21**. Recommended distributions:
- [Azul Zulu JDK 21](https://www.azul.com/downloads/?version=java-21-lts)
- [Eclipse Temurin JDK 21](https://adoptium.net/temurin/releases/?version=21)

### Recommended IDE & Plugins
We recommend **IntelliJ IDEA 2023.3+** with the following plugins:
- **Minecraft Development**: Provides Mixin assistance, Access Transformer mapping, and Forge event highlighting.
- **Lombok**: Supports `@Getter`, `@Setter`, `@NoArgsConstructor`, etc.
- **Kotlin**: Required for GT-- CE submodule development.

---

## 📥 2. Repository Cloning & Project Import

Because this repository aggregates several Git submodules, **recursive cloning is mandatory**:

```bash
# 1. Clone recursively with all submodules
git clone --recurse-submodules https://github.com/takanashisatou/GregtechEasy.git GTEGroup
cd GTEGroup

# 2. If cloned previously without submodules, initialize them
git submodule update --init --recursive
```

### IDEA Import Steps
1. In IDEA, click **File ➜ Open**, and choose the root `build.gradle`.
2. Open Settings: `Settings` ➜ `Build, Execution, Deployment` ➜ `Build Tools` ➜ `Gradle`.
3. Set **Gradle JVM** to **JDK 21**.

---

## 🛠️ 3. Key Gradle Build Commands

On Windows PowerShell (ensure `JAVA_HOME` is set):

```powershell
$env:JAVA_HOME='C:\Users\Ex_Je\.jdks\ms-21.0.11'

# 1. Compile individual submodules
.\gradlew.bat :modules:gtecore:compileJava
.\gradlew.bat :modules:gt--:compileKotlin
.\gradlew.bat :modules:gtm-reborn:compileJava

# 2. Run GameTest Server automated integration tests
.\gradlew.bat :modules:gtm-reborn:runGameTestServer

# 3. Apply Spotless code formatting
.\gradlew.bat :modules:gtm-reborn:spotlessApply

# 4. Build all modules and assemble jars
.\gradlew.bat buildAll -x test

# 5. Synchronize built jars into gte/overrides/mods/
.\gradlew.bat copyOutputJars

# 6. Publish to local user Maven repository (~/.m2/repository/)
.\gradlew.bat publishAllToMavenLocal

# 7. Publish static Maven repository to build/maven (for GitHub Pages Maven)
.\gradlew.bat publishAllToMaven
```
