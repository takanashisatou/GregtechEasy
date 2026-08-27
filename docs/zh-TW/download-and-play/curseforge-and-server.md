# CurseForge 匯入與服務端部署指南

除了免編譯懶人包外，GTE 提供了基於 **Packwiz** 自動構建的 CurseForge 規範包與服務端包。

---

## 📦 CurseForge 規範包匯入

CurseForge 格式整合包檔名為 `GTE-CurseForge-<版本號>.zip`。

### 客戶端匯入方法

=== "PCL2 / HMCL 匯入"

    1. 開啟啟動器，選擇 **安裝新遊戲版本 / 匯入整合包**。
    2. 選擇下載好的 `GTE-CurseForge-<版本號>.zip` 檔案。
    3. 啟動器將自動解析 `manifest.json` 並高速併發下載依賴模組。
    4. 匯入完成後，進入版本設定將 Java 執行時指定為 **Java 21**。
    5. 設定執行記憶體（推薦 8GB ~ 12GB），啟動遊戲。

=== "CurseForge App 匯入"

    1. 開啟 CurseForge App 客戶端。
    2. 點選左側 **Minecraft** 圖示，進入 **My Modpacks**。
    3. 點選右上角設定選單中的 **Create Custom Profile** ➜ **Import**。
    4. 選擇 `GTE-CurseForge-<版本號>.zip`，等待自動下載並完成安裝。

=== "Prism Launcher 匯入"

    1. 點選 **Add Instance (新增例項)** ➜ **Import (匯入)**。
    2. 瀏覽並選中 `GTE-CurseForge-<版本號>.zip`。
    3. 例項建立後，在例項屬性中將 Java 設定為 **JDK 21** 路徑。

---

## 🖥️ 服務端部署指南

服務端檔案包名為 `GTE-Server-<版本號>.zip`。

### 1. 環境準備
- 作業系統：Linux (Ubuntu 22.04+ / Debian 12+) 或 Windows Server 2022+
- **JDK 21 必須就緒**：在終端執行 `java -version` 確認輸出為 `openjdk version "21..."`。
- 推薦配置：4 核心 CPU 以上，16GB 實體記憶體（給 Minecraft 服務端分配 10G ~ 14G）。

### 2. 部署步驟

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

### 3. 啟動指令碼配置 (`run_server.sh` / `run_server.bat`)

推薦使用 Aikar 最佳化引數啟動服務端：

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

## ⚙️ 常見問題排查 (FAQ)

### Q1: 啟動服務端提示 `UnsupportedClassVersionError: ... class file version 65.0`
> **原因**：服務端執行時的 Java 版本低於 Java 21（版本 65.0 代表 JDK 21）。  
> **解決**：在 Linux 上透過 `sudo update-alternatives --config java` 切換到 OpenJDK 21。

### Q2: 玩家進入伺服器提示模組列表不匹配
> **解決**：請確保客戶端版本號與服務端版本號完全一致。每次主工程 CI 構建均會同步生成配套的 Client 與 Server 構件。
