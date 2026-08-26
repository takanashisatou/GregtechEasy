# CurseForge インポートとサーバー導入ガイド

コンパイル不要のラクダパックに加えて、GTE は **Packwiz** による自動構築の CurseForge 準拠パックとサーバーパックを提供しています。

---

## 📦 CurseForge 準拠パックのインポート

CurseForge 形式の整合パックのファイル名は `GTE-CurseForge-<バージョン>.zip` です。

### クライアント導入方法

=== "PCL2 / HMCL での導入"

    1. ランチャーを開き、**新しいゲームバージョンのインストール / 整合パックのインポート** を選択します。
    2. ダウンロードした `GTE-CurseForge-<バージョン>.zip` ファイルを選択します。
    3. ランチャーが `manifest.json` を自動解析し、依存 Mod を高速並列ダウンロードします。
    4. インポート完了後、バージョン設定で Java ランタイムを **Java 21** に指定します。
    5. メモリ割り当て（推奨 8GB ～ 12GB）を設定し、ゲームを起動します。

=== "CurseForge App での導入"

    1. CurseForge App クライアントを開きます。
    2. 左側の **Minecraft** アイコンをクリックし、**My Modpacks** に入ります。
    3. 右上の設定メニューから **Create Custom Profile** ➜ **Import** をクリックします。
    4. `GTE-CurseForge-<バージョン>.zip` を選択し、自動ダウンロードとインストール完了を待ちます。

=== "Prism Launcher での導入"

    1. **Add Instance (インスタンス追加)** ➜ **Import (インポート)** をクリックします。
    2. `GTE-CurseForge-<バージョン>.zip` を参照して選択します。
    3. インスタンス作成後、インスタンスプロパティで Java を **JDK 21** のパスに設定します。

---

## 🖥️ サーバー導入ガイド

サーバーファイルパックの名前は `GTE-Server-<バージョン>.zip` です。

### 1. 環境準備
- オペレーティングシステム：Linux (Ubuntu 22.04+ / Debian 12+) または Windows Server 2022+
- **JDK 21 が必須**：ターミナルで `java -version` を実行し、出力が `openjdk version "21..."` であることを確認します。
- 推奨構成：4 コア以上の CPU、16GB の物理メモリ（Minecraft サーバーに 10G ～ 14G を割り当て）。

### 2. 導入手順

```bash
# 1. サーバー作業ディレクトリを作成
mkdir -p /opt/gte-server && cd /opt/gte-server

# 2. サーバーパックを解凍
unzip GTE-Server-*.zip -d .

# 3. Forge 1.20.1-47.3.0 / 47.4.4 サーバーコアをインストール（未インストールの場合）
# インストールスクリプトを実行して minecraft_server と forge ライブラリをダウンロード
java -jar forge-1.20.1-*-installer.jar --installServer

# 4. Minecraft EULA に同意
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
> **原因**：サーバー実行時の Java バージョンが Java 21 より低い（バージョン 65.0 は JDK 21 を意味します）。  
> **解決策**：Linux では `sudo update-alternatives --config java` を実行して OpenJDK 21 に切り替えます。

### Q2: プレイヤーがサーバーに入ると Mod リスト不一致と表示される
> **解決策**：クライアントのバージョン番号とサーバーのバージョン番号が完全に一致していることを確認してください。メインの CI ビルドでは、毎回対応する Client と Server の成果物が同時に生成されます。