# CurseForge インポートとサーバー導入ガイド

完全Modクライアントパックの他に、GTE は **Packwiz** ベースで自動構築された CurseForge 標準パックとサーバーパックを提供しています。

---

## 📦 CurseForge 標準パックのインポート

CurseForge 形式のMODパックのファイル名は `GTE-CurseForge-<版本号>.zip` です。

### クライアントのインポート方法

=== "PCL2 / HMCL インポート"

    1. ランチャーを開き、**新しいゲームバージョンのインストール / MODパックのインポート** を選択します。
    2. ダウンロードした `GTE-CurseForge-<版本号>.zip` ファイルを選択します。
    3. ランチャーが `manifest.json` を自動解析し、依存MODを高速かつ並行でダウンロードします。
    4. インポート完了後、バージョン設定で Java ランタイムを **Java 21** に指定します。
    5. メモリを設定し（推奨 8GB ~ 12GB）、ゲームを起動します。

=== "CurseForge App インポート"

    1. CurseForge App クライアントを開きます。
    2. 左側の **Minecraft** アイコンをクリックし、**My Modpacks** に入ります。
    3. 右上隅の設定メニューにある **Create Custom Profile** ➜ **Import** をクリックします。
    4. `GTE-CurseForge-<版本号>.zip` を選択し、自動ダウンロードとインストール完了を待ちます。

=== "Prism Launcher インポート"

    1. **Add Instance (インスタンス追加)** ➜ **Import (インポート)** をクリックします。
    2. `GTE-CurseForge-<版本号>.zip` を参照して選択します。
    3. インスタンス作成後、インスタンスのプロパティで Java を **JDK 21** のパスに設定します。

---

## 🖥️ サーバー導入ガイド

サーバーパックのファイル名は `GTE-Server-<版本号>.zip` です。

### 1. 環境準備

- OS: Linux (Ubuntu 22.04+ / Debian 12+) または Windows Server 2022+
- **JDK 21 が必須です**: ターミナルで `java -version` を実行し、出力が `openjdk version "21..."` であることを確認してください。
- 推奨構成: 4コア以上のCPU、16GBの物理メモリ（Minecraftサーバーに10G ~ 14Gを割り当て）。

### 2. 導入手順

```bash
# 1. 创建服务端工作目录
mkdir -p /opt/gte-server && cd /opt/gte-server

# 2. 解压服务端包
unzip GTE-Server-*.zip -d .

# 3. 安装 Forge 1.20.1-47.3.0 / 47.4.4 服务端核心 (若未预装)
# 运行安装脚本下载 minecraft_server 与 forge 库
java -jar forge-1.20.1-*-installer.jar --installServer

# 4. 同意 Minecraft EULA 协议
echo "eula=true" > eula.txt
```

### 3. 起動スクリプト設定 (`run_server.sh` / `run_server.bat`)

Aikar 最適化パラメータを使用したサーバー起動を推奨します：

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

## ⚙️ よくある問題のトラブルシューティング (FAQ)

### Q1: サーバー起動時に `UnsupportedClassVersionError: ... class file version 65.0` が表示される

> **原因**: サーバー実行時の Java バージョンが Java 21 より低い（バージョン 65.0 は JDK 21 を意味します）。  
> **解決策**: Linux では `sudo update-alternatives --config java` を使用して OpenJDK 21 に切り替えます。

### Q2: プレイヤーがサーバーに入るとMODリストが一致しないと表示される

> **解決策**: クライアントのバージョン番号とサーバーのバージョン番号が完全に一致していることを確認してください。メインプロジェクトのCIビルドごとに、対応するClientとServerのビルドが同時に生成されます。