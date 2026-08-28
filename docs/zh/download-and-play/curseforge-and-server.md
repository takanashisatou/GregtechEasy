# CurseForge 导入与服务端部署指南

除了完整模组客户端包外，GTE 提供了基于 **Packwiz** 自动构建的 CurseForge 规范包与服务端包。

---

## 📦 CurseForge 规范包导入

CurseForge 格式整合包文件名为 `GTE-CurseForge-<版本号>.zip`。

### 客户端导入方法

=== "PCL2 / HMCL 导入"

    1. 打开启动器，选择 **安装新游戏版本 / 导入整合包**。
    2. 选择下载好的 `GTE-CurseForge-<版本号>.zip` 文件。
    3. 启动器将自动解析 `manifest.json` 并高速并发下载依赖模组。
    4. 导入完成后，进入版本设置将 Java 运行时指定为 **Java 21**。
    5. 设置运行内存（推荐 8GB ~ 12GB），启动游戏。

=== "CurseForge App 导入"

    1. 打开 CurseForge App 客户端。
    2. 点击左侧 **Minecraft** 图标，进入 **My Modpacks**。
    3. 点击右上角设置菜单中的 **Create Custom Profile** ➜ **Import**。
    4. 选择 `GTE-CurseForge-<版本号>.zip`，等待自动下载并完成安装。

=== "Prism Launcher 导入"

    1. 点击 **Add Instance (添加实例)** ➜ **Import (导入)**。
    2. 浏览并选中 `GTE-CurseForge-<版本号>.zip`。
    3. 实例创建后，在实例属性中将 Java 设置为 **JDK 21** 路径。

---

## 🖥️ 服务端部署指南

服务端文件包名为 `GTE-Server-<版本号>.zip`。

### 1. 环境准备
- 操作系统：Linux (Ubuntu 22.04+ / Debian 12+) 或 Windows Server 2022+
- **JDK 21 必须就绪**：在终端执行 `java -version` 确认输出为 `openjdk version "21..."`。
- 推荐配置：4 核心 CPU 以上，16GB 物理内存（给 Minecraft 服务端分配 10G ~ 14G）。

### 2. 部署步骤

```bash
# 1. 创建服务端工作目录
mkdir -p /opt/gte-server && cd /opt/gte-server

# 2. 解压服务端包
unzip GTE-Server-*.zip -d .

# 3. 安装 Forge 1.20.1-47.4.1 服务端核心 (若未预装)
# 运行安装脚本下载 minecraft_server 与 forge 库
java -jar forge-1.20.1-*-installer.jar --installServer

# 4. 同意 Minecraft EULA 协议
echo "eula=true" > eula.txt
```

### 3. 启动脚本配置 (`run_server.sh` / `run_server.bat`)

推荐使用 Aikar 优化参数启动服务端：

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

## ⚙️ 常见问题排查 (FAQ)

### Q1: 启动服务端提示 `UnsupportedClassVersionError: ... class file version 65.0`
> **原因**：服务端运行时的 Java 版本低于 Java 21（版本 65.0 代表 JDK 21）。  
> **解决**：在 Linux 上通过 `sudo update-alternatives --config java` 切换到 OpenJDK 21。

### Q2: 玩家进入服务器提示模组列表不匹配
> **解决**：请确保客户端版本号与服务端版本号完全一致。每次主工程 CI 构建均会同步生成配套的 Client 与 Server 构件。
