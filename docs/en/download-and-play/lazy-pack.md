# Modpack Download and Player Lazy Pack Guide

GTE (GregTech Easy) provides three out-of-the-box delivery formats for players and server owners with different technical backgrounds:

1. **Player Ready-to-Play Full Lazy Pack (`GTE-LazyPack-*.zip`)**: Contains all pre-compiled mods, configurations, tweak scripts, and the complete `.minecraft` directory structure. **Double-click or drag-and-drop into a launcher to start playing.**
2. **CurseForge Standard Pack (`GTE-CurseForge-*.zip`)**: Standard CurseForge format, can be directly imported with one click in PCL2 / HMCL / CurseForge App / Prism Launcher.
3. **Server Pack (`GTE-Server-*.zip`)**: Contains a clean server configuration, mods, and launch scripts for hosting multiplayer servers.

---

## 🚀 Player Lazy Pack (Recommended)

### Features and Advantages
- **0 Compilation Dependencies**: No need to install JDK build environment, IntelliJ IDEA, or Git.
- **Full Package**: The latest release Jars of `gtecore`, `gtm-reborn`, `gt--` and all prerequisite extension mods are already bundled in the `mods/` directory.
- **Drag-and-Play**: Supports one-click import via drag-and-drop in PCL2 / HMCL windows.

### Import and Launch Steps

=== "Method 1: One-Click Drag-and-Drop in Launcher (Recommended)"

    1. Open **PCL2 (Plain Craft Launcher 2)** or **HMCL (Hello Minecraft! Launcher)**.
    2. **Left-click and drag** the downloaded `GTE-LazyPack-<version>.zip` directly into the launcher's main window.
    3. The launcher will automatically detect and extract it to the game version list.
    4. Go to the **Version Settings** of that version and set the Java runtime to **Java 21**.
    5. Allocate **8GB ~ 12GB** of memory, then click launch!

=== "Method 2: Manual Extraction Mode"

    1. Extract the archive to any path without Chinese characters or spaces (e.g., `D:\Games\GTE\`).
    2. After extraction, you will obtain a `.minecraft` directory containing `mods/`, `config/`, and `kubejs/`.
    3. Add a game version in the launcher and set the game root directory to the extracted `.minecraft` folder.
    4. Make sure to select the **Java 21** core and launch.

---

## ⚠️ Java 21 Runtime Environment Requirements (Extremely Important)

> [!CAUTION]
> **This modpack strictly requires Java 21 (JDK 21) as the runtime environment!**
> Do NOT use **Java 17** or **Java 8**, otherwise the game will crash immediately or refuse to launch!

### Why Must Java 21 Be Used?
- GTE's core mods (`gtecore`, `gtm-reborn`, `gt--`) fully adopt **modern Java 21 language features** (such as Record Patterns, Virtual Threads, and enhanced Switch matching).
- The Gradle build scripts globally configure `JavaLanguageVersion.of(21)` to enforce toolchain checks.

### Recommended JDK 21 Download Sources

| Distribution | Download Link | Recommendation Reason |
| :--- | :--- | :--- |
| **Azul Zulu 21 (LTS)** | [Click to visit Azul's official site](https://www.azul.com/downloads/?version=java-21-lts) | Excellent performance, highly optimized for Minecraft's large-scale multithreading |
| **Eclipse Temurin 21 (LTS)** | [Click to visit Adoptium's official site](https://adoptium.net/temurin/releases/?version=21) | Officially recommended, high compatibility and stability |
| **Microsoft OpenJDK 21** | [Click to visit Microsoft's official site](https://learn.microsoft.com/zh-cn/java/openjdk/download) | Well adapted natively for Windows platforms |

### Configuring Java 21 in the Launcher

```mermaid
graph LR
    A[Open Launcher] --> B[Enter GTE Version Settings]
    B --> C[Java Path / Runtime]
    C --> D[Select Installed JDK 21 javaw.exe]
    D --> E[Allocate 8192MB ~ 12288MB Memory]
    E --> F[Save and Launch Game]
```

---

## 🎮 In-Game Hotkeys and Common Commands

| Command / Hotkey | Description | Permission Requirement |
| :--- | :--- | :--- |
| `/ftbquests editing_mode true` | Enable visual editing mode for the quest book (author mode) | OP permission |
| `/ftbquests reload` | Hot-reload FTB Quests quest book configuration files | Everyone |
| `/kubejs reload server_scripts` | Hot-reload server-side tweak scripts and recipes | OP permission |
| `/kubejs reload client_scripts` | Hot-reload client-side tweak scripts and display logic | No permission required |
| `/dumpmultiblock` | Export multiblock structure code with one click after selecting an area with the wooden axe | OP permission |
| <kbd>U</kbd> / <kbd>R</kbd> | View the usage / recipe of the item under the cursor | EMI / JEI hotkey |
| <kbd>F7</kbd> | View surrounding light levels (red X marks mob spawn areas) | Client-side hotkey |