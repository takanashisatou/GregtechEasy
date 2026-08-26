# CurseForge Import and Server Deployment Guide

In addition to the pre-compiled lazy pack, GTE provides CurseForge standard packs and server packs automatically built with **Packwiz**.

---

## 📦 CurseForge Standard Pack Import

The CurseForge format modpack file is named `GTE-CurseForge-<version>.zip`.

### Client Import Methods

=== "PCL2 / HMCL Import"

    1. Open the launcher and select **Install new game version / Import modpack**.
    2. Select the downloaded `GTE-CurseForge-<version>.zip` file.
    3. The launcher will automatically parse `manifest.json` and download dependent mods concurrently at high speed.
    4. After import, go to version settings and set the Java runtime to **Java 21**.
    5. Set the allocated memory (recommended 8GB ~ 12GB) and start the game.

=== "CurseForge App Import"

    1. Open the CurseForge App client.
    2. Click the **Minecraft** icon on the left and go to **My Modpacks**.
    3. In the settings menu at the top right, click **Create Custom Profile** ➜ **Import**.
    4. Select `GTE-CurseForge-<version>.zip` and wait for automatic download and installation.

=== "Prism Launcher Import"

    1. Click **Add Instance** ➜ **Import**.
    2. Browse and select `GTE-CurseForge-<version>.zip`.
    3. After the instance is created, set the Java path to **JDK 21** in the instance properties.

---

## 🖥️ Server Deployment Guide

The server pack file is named `GTE-Server-<version>.zip`.

### 1. Environment Preparation
- Operating System: Linux (Ubuntu 22.04+ / Debian 12+) or Windows Server 2022+
- **JDK 21 must be ready**: Run `java -version` in the terminal to confirm the output is `openjdk version "21..."`.
- Recommended configuration: 4+ core CPU, 16GB physical memory (allocate 10G ~ 14G to the Minecraft server).

### 2. Deployment Steps

```bash
# 1. Create server working directory
mkdir -p /opt/gte-server && cd /opt/gte-server

# 2. Extract server pack
unzip GTE-Server-*.zip -d .

# 3. Install Forge 1.20.1-47.3.0 / 47.4.4 server core (if not pre-installed)
# Run installer script to download minecraft_server and forge libraries
java -jar forge-1.20.1-*-installer.jar --installServer

# 4. Accept Minecraft EULA
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

## ⚙️ Common Issues Troubleshooting (FAQ)

### Q1: Server startup shows `UnsupportedClassVersionError: ... class file version 65.0`
> **Cause**: The Java version at server runtime is lower than Java 21 (version 65.0 represents JDK 21).  
> **Solution**: On Linux, switch to OpenJDK 21 via `sudo update-alternatives --config java`.

### Q2: Players entering the server get a mod list mismatch message
> **Solution**: Ensure the client version number exactly matches the server version number. Each CI build of the main project generates matching Client and Server artifacts.