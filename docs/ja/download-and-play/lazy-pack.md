# Modパックのダウンロードとプレイヤー向け便利パックガイド

GTE (GregTech Easy) は、技術レベルの異なるプレイヤーとサーバー管理者向けに、すぐに使える3つの配布形式を提供しています：

1. **プレイヤー向けコンパイル不要の完全便利パック (`GTE-LazyPack-*.zip`)**：プリコンパイル済みの全Mod、設定、改造スクリプト、完全な `.minecraft` ディレクトリ構造を含み、**ダブルクリックまたはランチャーへのドラッグ＆ドロップですぐにプレイ可能**です。
2. **CurseForge 標準パック (`GTE-CurseForge-*.zip`)**：標準のCurseForge形式で、PCL2 / HMCL / CurseForge App / Prism Launcher にワンクリックでインポートできます。
3. **サーバー向けModパック (`GTE-Server-*.zip`)**：素のサーバー設定、Mod、起動スクリプトを含み、サーバーを立ててマルチプレイするためのものです。

---

## 🚀 プレイヤー向け便利パック（推奨）

### 特徴と利点
- **コンパイル依存ゼロ**：JDKコンパイル環境、IntelliJ IDEA、Gitのインストールは不要です。
- **全量パッケージ**：`gtecore`、`gtm-reborn`、`gt--` の最新リリースJarと前提拡張Modがすべて `mods/` ディレクトリに同梱されています。
- **ドラッグ＆ドロップですぐにプレイ**：PCL2 / HMCL ウィンドウへのドラッグ＆ドロップによるワンクリックインポートに対応。

### インポートと起動手順

=== "方法1：ランチャーへのドラッグ＆ドロップ（推奨）"

    1. **PCL2 (Plain Craft Launcher 2)** または **HMCL (Hello Minecraft! Launcher)** を開きます。
    2. ダウンロードした `GTE-LazyPack-<版本号>.zip` を**マウス左ボタンで**ランチャーのメインウィンドウにドラッグ＆ドロップします。
    3. ランチャーが自動的に認識し、ゲームバージョンリストに解凍します。
    4. そのバージョンの**バージョン設定**に移動し、Javaランタイムを **Java 21** に指定します。
    5. **8GB ~ 12GB** のメモリを割り当て、「ゲームを起動」をクリックします！

=== "方法2：手動解凍モード"

    1. 圧縮パックを、中国語やスペースを含まない任意のパスに解凍します（例：`D:\Games\GTE\`）。
    2. 解凍後、`mods/`、`config/`、`kubejs/` を含む `.minecraft` ディレクトリが得られます。
    3. ランチャーでゲームバージョンを追加し、ゲームのルートディレクトリとして解凍した `.minecraft` フォルダを選択します。
    4. **Java 21** を選択して起動します。

---

## ⚠️ Java 21 実行環境の要件（非常に重要）

> [!CAUTION]
> **このModパックは実行環境として Java 21 (JDK 21) を必須とします！**
> **Java 17** や **Java 8** は使用しないでください。ゲームがクラッシュするか、起動を拒否します！

### なぜ Java 21 でなければならないのか？
- GTE のコアMod（`gtecore`、`gtm-reborn`、`gt--`）は、**Java 21 の近代的な言語機能**（Record Patterns、Virtual Threads、拡張されたSwitchマッチングなど）を全面的に採用しています。
- Gradle ビルドスクリプトは、`JavaLanguageVersion.of(21)` をグローバルに設定し、ツールチェーンを強制チェックしています。

### 推奨 JDK 21 ダウンロード先

| ディストリビューション | ダウンロードリンク | 推奨理由 |
| :--- | :--- | :--- |
| **Azul Zulu 21 (LTS)** | [Azul公式サイトへ](https://www.azul.com/downloads/?version=java-21-lts) | 性能が優れており、Minecraftの大規模マルチスレッド最適化に最適 |
| **Eclipse Temurin 21 (LTS)** | [Adoptium公式サイトへ](https://adoptium.net/temurin/releases/?version=21) | 公式推奨、高い互換性と安定性 |
| **Microsoft OpenJDK 21** | [Microsoft公式サイトへ](https://learn.microsoft.com/zh-cn/java/openjdk/download) | Windowsプラットフォームへのネイティブ対応が良好 |

### ランチャーで Java 21 を設定する

```mermaid
graph LR
    A[打开启动器] --> B[进入 GTE 版本设置]
    B --> C[Java 路径 / 运行时]
    C --> D[选择已安装的 JDK 21 javaw.exe]
    D --> E[分配 8192MB ~ 12288MB 内存]
    E --> F[保存并启动游戏]
```

---

## 🎮 ゲーム内ショートカットキーとよく使うコマンド

| コマンド / ショートカットキー | 機能説明 | 権限要件 |
| :--- | :--- | :--- |
| `/ftbquests editing_mode true` | クエストブックのビジュアル編集モードを有効化（作者モード） | OP権限 |
| `/ftbquests reload` | FTB Quests クエストブックの設定ファイルをホットリロード | 全員 |
| `/kubejs reload server_scripts` | サーバー側の改造スクリプトとレシピをホットリロード | OP権限 |
| `/kubejs reload client_scripts` | クライアント側の改造スクリプトと表示ロジックをホットリロード | 権限不要 |
| `/dumpmultiblock` | 木の斧で領域を選択後、ワンクリックでマルチブロック構造コードをエクスポート | OP権限 |
| <kbd>U</kbd> / <kbd>R</kbd> | カーソル位置のアイテムの用途 (Usage) / レシピ (Recipe) を表示 | EMI / JEI ショートカットキー |
| <kbd>F7</kbd> | 周囲の明るさレベルを表示（赤い×はモブ湧き領域を示す） | クライアント側ショートカットキー |