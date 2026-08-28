# Modpack Download and Full-Mod Client Pack Guide

GTE (GregTech Easy) provides three delivery formats for players and server owners with different technical backgrounds:

1. **CurseForge Standard Pack (`GTE-CurseForge-*.zip`)**: The standard launcher import format. It ships a `manifest.json` and keeps the mods under `overrides/mods/`, and the launcher installs Forge automatically. **This is the recommended option for most players.**
2. **Full-Mod Client Pack (`GTE-FullMod-*.zip`)**: A flat archive containing only game content at the top level, for players who configure their own instance.
3. **Server Pack (`GTE-Server-*.zip`)**: A Forge dedicated server pack with `mods/` at the top level of the zip, for hosting multiplayer servers.

---

## 📦 Full-Mod Client Pack

### Archive Layout

```text
README_安装必看.txt
mods/            (17 jars)
config/
defaultconfigs/
kubejs/
```

There is no nested `.minecraft/` directory, no bundled launcher, and no `run_game.bat`. Minecraft itself and Forge are installed by your launcher, so this pack assumes **you already know how to create a launcher instance**.

### Hard Environment Requirements

| Item | Version | Notes |
| :--- | :--- | :--- |
| **Minecraft** | `1.20.1` | No other version is accepted |
| **Forge** | `47.4.1` | Must be exactly this version |
| **Java** | `21` | Never use Java 17 or Java 8 |

> [!CAUTION]
> **Forge must be 47.4.1 — not "47.4.1 or any newer build".**
> - The mod `gtmthings` requires Forge `[47.4.1,)`, so anything lower will not load;
> - but Forge 47.4.10 ships ASM 9.8 + coremods 5.2.4, which breaks the mixins of `appliedenergistics2` 15.4.9 so the game never reaches the main menu.
>
> 47.4.1 is the only workable version.

### Installation Steps

=== "Method 1: Configure the instance yourself (this pack)"

    1. In your launcher (PCL2 / HMCL / Prism / MultiMC / official launcher all work), create a Minecraft **1.20.1** instance and install **Forge 47.4.1**.
    2. Launch it once and confirm you reach the main menu (this rules out launcher and Java problems).
    3. Open that instance's game directory (the `.minecraft` folder; launchers usually have an "open folder" button).
    4. Extract the contents of `GTE-FullMod-<version>.zip` into it, merging with existing same-named folders.
    5. Set Java to **Java 21** in the instance settings and allocate **8G ~ 12G** of memory.
    6. Launch the game. The first start generates configs and is slower than usual.

=== "Method 2: One-click launcher import (recommended)"

    Use `GTE-CurseForge-<version>.zip` instead and choose **import modpack** in CurseForge App / PCL2 / HMCL / Prism Launcher / MultiMC. That pack ships a `manifest.json`, so the launcher installs Forge for you and no manual setup is needed.

=== "Method 3: Hosting a server"

    Use `GTE-Server-<version>.zip` instead; its `mods/` sits at the top level of the zip. Extract it into the server root, run `java -jar forge-*-installer.jar --installServer`, then start it with `@libraries/net/minecraftforge/forge/1.20.1-47.4.1/unix_args.txt nogui`.

> [!WARNING]
> Jars whose names end in `-slim.jar` or `-dev-slim.jar` are Maven-consumer artifacts that deliberately bundle no jar-in-jar dependencies, and must **never** be placed in `mods/`. Forge would then pick a `gtceu` build with no bundled `ldlib` and abort with `Missing or unsupported mandatory dependencies: Mod ID: 'ldlib' ... [MISSING]`. None of the three shipped packs contain them.

---

## ⚠️ Java 21 Runtime Environment Requirements (Extremely Important)

> [!CAUTION]
> **This modpack strictly requires Java 21 (JDK 21) as the runtime environment!**
> Do NOT use **Java 17** or **Java 8**, otherwise the game will crash directly or refuse to start!

### Why Must Java 21 Be Used?
- GTE's core mods (`gtecore`, `gtm-reborn`, `gt--`) fully adopt **modern Java 21 language features** (such as Record Patterns, Virtual Threads, and enhanced Switch matching).
- The Gradle build scripts globally configure `JavaLanguageVersion.of(21)` to enforce toolchain checks.

### Recommended JDK 21 Download Links

| Distribution | Download Link | Recommendation Reason |
| :--- | :--- | :--- |
| **Azul Zulu 21 (LTS)** | [Click to visit Azul website](https://www.azul.com/downloads/?version=java-21-lts) | Excellent performance, ideal for Minecraft large-scale multi-threading optimization |
| **Eclipse Temurin 21 (LTS)** | [Click to visit Adoptium website](https://adoptium.net/temurin/releases/?version=21) | Officially recommended, high compatibility and stability |
| **Microsoft OpenJDK 21** | [Click to visit Microsoft website](https://learn.microsoft.com/zh-cn/java/openjdk/download) | Good native adaptation on Windows platforms |

### Configuring Java 21 in the Launcher

```mermaid
graph LR
    A[Create 1.20.1 instance] --> B[Install Forge 47.4.1]
    B --> C[Java path / runtime]
    C --> D[Select installed JDK 21 javaw.exe]
    D --> E[Allocate 8192MB ~ 12288MB memory]
    E --> F[Extract GTE-FullMod and launch game]
```

---

## 🎮 In-Game Shortcuts and Common Commands

| Command / Shortcut | Function Description | Permission Requirement |
| :--- | :--- | :--- |
| `/ftbquests editing_mode true` | Enable quest book visual editing mode (author mode) | OP permission |
| `/ftbquests reload` | Hot reload FTB Quests quest book configuration files | Everyone |
| `/kubejs reload server_scripts` | Hot reload server-side tweak scripts and recipes | OP permission |
| `/kubejs reload client_scripts` | Hot reload client-side tweak scripts and display logic | No permission required |
| `/dumpmultiblock` | One-click export of multiblock structure code after selecting an area with a wooden axe | OP permission |
| <kbd>U</kbd> / <kbd>R</kbd> | View usage (Usage) / recipe (Recipe) of the item under the cursor | EMI / JEI shortcut |
| <kbd>F7</kbd> | View surrounding light levels (red X marks mob spawn areas) | Client-side shortcut |
