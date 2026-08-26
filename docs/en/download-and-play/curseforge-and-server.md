# CurseForge Import & Server Deployment Guide

In addition to the zero-compile player lazy pack, GTE provides automated **Packwiz** builds for standard CurseForge packages and multiplayer server packages.

---

## 📦 CurseForge Standard Pack Import

The CurseForge distribution file is named `GTE-CurseForge-<version>.zip`.

### Client Import Methods

=== "PCL2 / HMCL Import"

    1. Open your launcher and choose **Install New Version / Import Modpack**.
    2. Browse and select the downloaded `GTE-CurseForge-<version>.zip`.
    3. The launcher will parse `manifest.json` and download required mods concurrently.
    4. Once imported, enter Version Settings and set the Java runtime to **Java 21**.
    5. Allocate **8GB ~ 12GB** of RAM and launch the game.

=== "CurseForge App Import"

    1. Open the CurseForge App client.
    2. Click on the **Minecraft** tab and navigate to **My Modpacks**.
    3. From the top-right menu, select **Create Custom Profile** ➜ **Import**.
    4. Select `GTE-CurseForge-<version>.zip` and wait for mod downloads to finish.

=== "Prism Launcher Import"

    1. Click **Add Instance** ➜ **Import**.
    2. Browse to and select `GTE-CurseForge-<version>.zip`.
    3. After creation, open Instance Settings and set the Java installation to **JDK 21**.

---

## 🖥️ Server Deployment Guide

The server pack file is named `GTE-Server-<version>.zip`.

### 1. Requirements
- Operating System: Linux (Ubuntu 22.04+ / Debian 12+) or Windows Server 2022+
- **JDK 21 is required**: Run `java -version` in terminal to confirm `openjdk version "21..."`.
- Recommended Specs: 4+ CPU cores, 16GB RAM (allocate 10G ~ 14G to Minecraft).

### 2. Deployment Steps

```bash
# 1. Create server working directory
mkdir -p /opt/gte-server && cd /opt/gte-server

# 2. Extract server archive
unzip GTE-Server-*.zip -d .

# 3. Install Forge 1.20.1-47.3.0 / 47.4.4 server libraries (if not pre-installed)
java -jar forge-1.20.1-*-installer.jar --installServer

# 4. Accept Minecraft EULA
echo "eula=true" > eula.txt
```

### 3. Startup Scripts (`run_server.sh` / `run_server.bat`)

We recommend using Aikar's optimized JVM flags:

=== "Linux (`run_server.sh`)"

    ```bash
    #!/bin/bash
    JAVA_CMD="java"
    MEMORY="12G"

    FLAGS="-Xms${MEMORY} -Xmx${MEMORY} \
      -XX:+UseG1GC -XX:+ParallelRefProcEnabled -XX:MaxGCPauseMillis=200 \
      -XX:+UnlockExperimentalVMOptions -XX:+DisableExplicitGC -XX:+AlwaysPreTouch \
      -XX:G1NewSizePercent=30 -XX:G1MaxNewSizePercent=40 -XX:G1ReservePercent=20 \
      -XX:G1HeapWastePercent=5 -XX:G1MixedGCCountTarget=4 -XX:InitiatingHeapOccupancyPercent=15 \
      -XX:G1MixedGCLiveThresholdPercent=90 -XX:G1RSetUpdatingPauseTimePercent=5 \
      -XX:SurvivorRatio=32 -XX:+PerfDisableSharedMem -XX:MaxTenuringThreshold=1"

    $JAVA_CMD $FLAGS @libraries/net/minecraftforge/forge/1.20.1-47.3.0/unix_args.txt nogui
    ```

=== "Windows (`run_server.bat`)"

    ```bat
    @echo off
    set JAVA_CMD=java
    set MEMORY=12G

    set FLAGS=-Xms%MEMORY% -Xmx%MEMORY% -XX:+UseG1GC -XX:+ParallelRefProcEnabled -XX:MaxGCPauseMillis=200 -XX:+UnlockExperimentalVMOptions -XX:+DisableExplicitGC -XX:+AlwaysPreTouch

    %JAVA_CMD% %FLAGS% @libraries/net/minecraftforge/forge/1.20.1-47.3.0/win_args.txt nogui
    pause
    ```

---

## ⚙️ FAQ & Troubleshooting

### Q1: Server crashes with `UnsupportedClassVersionError: ... class file version 65.0`
> **Cause**: The server is running on a Java version older than Java 21 (class version 65.0 corresponds to JDK 21).  
> **Solution**: On Linux, switch to OpenJDK 21 via `sudo update-alternatives --config java`.

### Q2: Players receive mod mismatch when joining server
> **Solution**: Ensure client and server are built from the exact same CI release version. Every GitHub Actions run synchronously exports matching Client and Server artifacts.
