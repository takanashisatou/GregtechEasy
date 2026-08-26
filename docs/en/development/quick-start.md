# Developer Quick Start Guide

This guide is intended for Java/Kotlin programmers and modpack authors involved in the GTE-Multi cross-module project development.

---

## 💻 1. Development Environment Preparation

### JDK 21 Mandatory Requirement
This project uniformly uses **JDK 21** across all modules. Recommended installations:
- [Azul Zulu JDK 21](https://www.azul.com/downloads/?version=java-21-lts)
- [Eclipse Temurin JDK 21](https://adoptium.net/temurin/releases/?version=21)

### Recommended IDE and Plugins
It is recommended to use **IntelliJ IDEA 2023.3+** and install the following official plugins:
- **Minecraft Development**: Provides Mixin code hints, AT access transformer recognition, and event highlighting.
- **Lombok**: Supports annotations such as `@Getter`, `@Setter`, `@NoArgsConstructor`.
- **Kotlin**: Supports GT-- CE module development.

---

## 📥 2. Repository Cloning and Project Import

Because this project includes multiple Git submodules, **recursive cloning is required**:

```bash
# 1. Recursively clone the main repository and all submodules
git clone --recurse-submodules https://github.com/takanashisatou/GregtechEasy.git GTEGroup
cd GTEGroup

# 2. If already cloned, update and initialize submodules
git submodule update --init --recursive
```

### IDEA Import Guide
1. In IDEA, click **File ➜ Open** and select the root `build.gradle` to open as a project.
2. Go to Settings: `Settings` ➜ `Build, Execution, Deployment` ➜ `Build Tools` ➜ `Gradle`.
3. Set **Gradle JVM** to **JDK 21**.

---

## 🛠️ 3. Common Gradle Build Commands

Execute in Windows PowerShell (requires `JAVA_HOME` to be set beforehand):

```powershell
$env:JAVA_HOME='C:\Users\Ex_Je\.jdks\ms-21.0.11'

# 1. Compile a specific submodule individually
.\gradlew.bat :modules:gtecore:compileJava
.\gradlew.bat :modules:gt--:compileKotlin
.\gradlew.bat :modules:gtm-reborn:compileJava

# 2. Run GTM-Reborn GameTest server for real-machine testing
.\gradlew.bat :modules:gtm-reborn:runGameTestServer

# 3. Run code formatting
.\gradlew.bat :modules:gtm-reborn:spotlessApply

# 4. One-click compile all modules and package Jars
.\gradlew.bat buildAll -x test

# 5. Sync compiled Jars to gte/overrides/mods/
.\gradlew.bat copyOutputJars

# 6. Publish all modules to local Maven repository (~/.m2/repository/)
.\gradlew.bat publishAllToMavenLocal

# 7. Publish all modules' static artifacts to build/maven (for GitHub Pages Maven)
.\gradlew.bat publishAllToMaven
```