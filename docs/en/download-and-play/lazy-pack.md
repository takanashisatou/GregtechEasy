# Modpack Download and Player Lazy Pack Guide

GTE (GregTech Easy) provides three out-of-the-box delivery formats for players and server owners with different technical backgrounds:

1. **Player No-Compile Full Lazy Pack (`GTE-LazyPack-*.zip`)**: Contains all pre-compiled mods, configurations, tweak scripts, and the complete `.minecraft` directory structure. **Double-click or drag into the launcher to play.**
2. **CurseForge Standard Pack (`GTE-CurseForge-*.zip`)**: Standard CurseForge format, can be imported with one click in PCL2 / HMCL / CurseForge App / Prism Launcher.
3. **Server Pack (`GTE-Server-*.zip`)**: Contains clean server configuration, mods, and startup scripts for hosting multiplayer servers.

---

## 🚀 Player Lazy Pack (Recommended)

### Features and Advantages
- **0 Compilation Dependencies**: No need to install JDK compilation environment, IntelliJ IDEA, or Git.
- **Full Packaging**: The latest release Jars of `gtecore`, `gtm-reborn`, `gt--`, and prerequisite extension mods are all included in the `mods/` directory.
- **Drag-and-Play**: Supports one-click import by dragging into PCL2 / HMCL windows.

### Import and Launch Steps

=== "Method 1: One-Click Drag into Launcher (Recommended)"

    1. Open **PCL2 (Plain Craft Launcher 2)** or **HMCL (Hello Minecraft! Launcher)**.
    2. Drag the downloaded `GTE-LazyPack-<version>.zip` directly into the launcher main window with the **left mouse button**.
    3. The launcher will automatically recognize and extract it to the game version list.
    4. Go to the **version settings** for that version, and set the Java runtime to **Java 21**.
    5. Allocate **8GB ~ 12GB** of memory, then click to launch the game!

=== "Method 2: Manual Extraction Mode"

    1. Extract the archive to any path without Chinese characters or spaces (e.g., `D:\Games\GTE\`).
    2. After extraction, you will get a `.minecraft` directory containing `mods/`, `config/`, and `kubejs/`.
    3. In the launcher, add a game version and set the game root directory to the extracted `.minecraft` folder.
    4. Make sure to select the **Java 21** core and launch.

---

## ⚠️ Java 21 Runtime Environment Requirements (Extremely Important)

> [!CAUTION]
> **This modpack requires Java 21 (JDK 21) as the runtime environment!**
> Do not use **Java 17** or **Java 8**, otherwise the game will crash or refuse to start!

### Why Must Java 21 Be Used?
- GTE's core mods (`gtecore`, `gtm-reborn`, `gt--`) fully utilize **Java 21 modern language features** (such as Record Patterns, Virtual Threads, enhanced Switch matching).
- The Gradle build script globally configures `JavaLanguageVersion.of(21)` to enforce toolchain checks.

### Recommended JDK 21 Download Links

| Distribution | Download Link | Recommendation Reason |
| :--- | :--- | :--- |
| **Azul Zulu 21 (LTS)** | [Click to go to Azul website](https://www.azul.com/downloads/?version=java-21-lts) | Excellent performance, great for Minecraft large-scale multithreading optimization |
| **Eclipse Temurin 21 (LTS)** | [Click to go to Adoptium website](https://adoptium.net/temurin/releases/?version=21) | Officially recommended, high compatibility and stability |
| **Microsoft OpenJDK 21** | [Click to go to Microsoft website](https://learn.microsoft.com/zh-cn/java/openjdk/download) | Good native adaptation on Windows platform |

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

## 🎮 In-Game Shortcuts and Common Commands

| Command / Shortcut | Function Description | Permission Requirement |
| :--- | :--- | :--- |
| `/ftbquests editing_mode true` | Enable quest book visual editing mode (author mode) | OP permission |
| `/ftbquests reload` | Hot reload FTB Quests quest book config files | Everyone |
| `/kubejs reload server_scripts` | Hot reload server-side tweak scripts and recipes | OP permission |
| `/kubejs reload client_scripts` | Hot reload client-side tweak scripts and display logic | No permission required |
| `/dumpmultiblock` | After selecting an area with the wooden axe, one-click export multiblock structure code | OP permission |
| <kbd>U</kbd> / <kbd>R</kbd> | View usage (Usage) / recipe (Recipe) of the item under cursor | EMI / JEI shortcut |
| <kbd>F7</kbd> | View surrounding light levels (red cross indicates mob spawn area) | Client-side shortcut |