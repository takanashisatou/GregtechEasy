# CurseForge Import and Server Deployment Guide

In addition to the no-compile lazy pack, GTE provides a CurseForge standard pack and a server pack automatically built with **Packwiz**.

---

## 📦 CurseForge Standard Pack Import

The CurseForge format modpack file is named `GTE-CurseForge-<version>.zip`.

### Client Import Methods

=== "PCL2 / HMCL Import"

    1. Open the launcher and select **Install New Game Version / Import Modpack**.
    2. Select the downloaded `GTE-CurseForge-<version>.zip` file.
    3. The launcher will automatically parse `manifest.json` and download dependency mods concurrently at high speed.
    4. After import completes, go to version settings and set the Java runtime to **Java 21**.
    5. Set allocated memory (8GB ~ 12GB recommended) and launch the game.

=== "CurseForge App Import"

    1. Open the CurseForge App client.
    2. Click the **Minecraft** icon on the left and go to **My Modpacks**.
    3. Click **Create Custom Profile** ➜ **Import** in the settings menu in the top-right corner.
    4. Select `GTE-CurseForge-<version>.zip` and wait for the automatic download and installation to complete.

=== "Prism Launcher Import"

    1. Click **Add Instance** ➜ **Import**.
    2. Browse and select `GTE-CurseForge-<version>.zip`.
    3. After the instance is created, set Java to the **JDK 21** path in the instance properties.

---

## 🖥️ Server Deployment Guide

The server pack file is named `GTE-Server-<version>.zip`.

### 1. Environment Preparation
- Operating System: Linux (Ubuntu 22.04+ / Debian 12+) or Windows Server 2022+
- **JDK 21 must be ready**: Run `java -version` in the terminal and confirm the output is `openjdk version "21..."`.
- Recommended configuration: 4+ core CPU, 16GB physical memory (allocate 10G ~ 14G to the Minecraft server).

### 2. Deployment Steps

```bash
# 1. Create the server working directory
mkdir -p /opt/gte-server && cd /opt/gte-server

# 2. Extract the server pack
unzip GTE-Server-*.zip -d .

# 3. Install the Forge 1.20.1-47.4.1 server core (if not pre-installed)
# Run the installation script to download minecraft_server and forge libraries
java -jar forge-1.20.1-*-installer.jar --installServer

# 4. Accept the Minecraft EULA agreement
echo "eula=true" > eula.txt
```

### 3. Startup Script Configuration (`run_server.sh` / `run_server.bat`)

It is recommended to use Aikar's optimized parameters to start the server:

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

    $JAVA_CMD $FLAGS @libraries/net/minecraftforge/forge/1.20.1-47.4.1/unix_args.txt nogui
    ```

=== "Windows (`run_server.bat`)"

    ```bat
    @echo off
    set JAVA_CMD=java
    set MEMORY=12G

    set FLAGS=-Xms%MEMORY% -Xmx%MEMORY% -XX:+UseG1GC -XX:+ParallelRefProcEnabled -XX:MaxGCPauseMillis=200 -XX:+UnlockExperimentalVMOptions -XX:+DisableExplicitGC -XX:+AlwaysPreTouch

    %JAVA_CMD% %FLAGS% @libraries/net/minecraftforge/forge/1.20.1-47.4.1/win_args.txt nogui
    pause
    ```

---

## ⚙️ Common Issue Troubleshooting (FAQ)

### Q1: Server startup reports `UnsupportedClassVersionError: ... class file version 65.0`
> **Cause**: The Java version running the server is lower than Java 21 (version 65.0 represents JDK 21).  
> **Solution**: On Linux, switch to OpenJDK 21 using `sudo update-alternatives --config java`.

### Q2: Players joining the server report a mod list mismatch
> **Solution**: Ensure the client version number exactly matches the server version number. Every main project CI build generates matching Client and Server artifacts simultaneously.

<<<<<FILE_END: download-and-play/curseforge-and-server.md>>>>