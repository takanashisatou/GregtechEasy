# 整合パックのダウンロードとプレイヤー向けラジーパックガイド

GTE（GregTech Easy）は、技術レベルの異なるプレイヤーやサーバー管理者向けに、すぐに使える3つの配布形式を提供しています：

1. **プレイヤー向けコンパイル不要の完全ラジーパック（`GTE-LazyPack-*.zip`）**：プリコンパイル済みの全Mod、設定、改造スクリプト、完全な`.minecraft`ディレクトリ構造を含み、**ダブルクリックまたはランチャーにドラッグ＆ドロップするだけでプレイ可能**です。
2. **CurseForge準拠パック（`GTE-CurseForge-*.zip`）**：標準のCurseForge形式で、PCL2 / HMCL / CurseForge App / Prism Launcherでワンクリックインポートできます。
3. **サーバー向け整合パック（`GTE-Server-*.zip`）**：クリーンなサーバー設定、Mod、起動スクリプトを含み、サーバーを立ててマルチプレイするためのものです。

---

## 🚀 プレイヤー向けラジーパック（推奨）

### 特徴と利点
- **0コンパイル依存**：JDKコンパイル環境、IntelliJ IDEA、Gitのインストールは不要です。
- **フルパッケージ**：`gtecore`、`gtm-reborn`、`gt--`の最新リリースJarと前提拡張Modがすべて`mods/`ディレクトリに内蔵されています。
- **ドラッグ＆ドロップですぐにプレイ**：PCL2 / HMCLウィンドウへのドラッグ＆ドロップでワンクリックインポートに対応。

### インポートと起動手順

=== "方法1：ランチャーへのドラッグ＆ドロップ（推奨）"

    1. **PCL2（Plain Craft Launcher 2）**または**HMCL（Hello Minecraft! Launcher）**を開きます。
    2. ダウンロードした`GTE-LazyPack-<バージョン>.zip`を**マウス左ボタンで**ランチャーのメインウィンドウにドラッグ＆ドロップします。
    3. ランチャーが自動的に認識し、ゲームバージョンリストに解凍します。
    4. そのバージョンの**バージョン設定**に移動し、Javaランタイムを**Java 21**に指定します。
    5. **8GB〜12GB**のメモリを割り当て、ゲームを起動します！

=== "方法2：手動解凍モード"

    1. 圧縮ファイルを、中国語やスペースを含まない任意のパスに解凍します（例：`D:\Games\GTE\`）。
    2. 解凍後、`mods/`、`config/`、`kubejs/`を含む`.minecraft`ディレクトリが得られます。
    3. ランチャーでゲームバージョンを追加し、ゲームのルートディレクトリとして解凍した`.minecraft`フォルダを選択します。
    4. **Java 21**コアを選択して起動します。

---

## ⚠️ Java 21実行環境の要件（非常に重要）

> [!CAUTION]
> **この整合パックは実行環境としてJava 21（JDK 21）を必須とします！**
> **Java 17**や**Java 8**は使用しないでください。ゲームがクラッシュするか、起動を拒否します！

### なぜJava 21が必要なのか？
- GTEのコアMod（`gtecore`、`gtm-reborn`、`gt--`）は、**Java 21の最新言語機能**（Record Patterns、Virtual Threads、拡張されたSwitchマッチングなど）を全面的に採用しています。
- Gradleビルドスクリプトは、`JavaLanguageVersion.of(21)`をグローバルに設定し、ツールチェーンを強制チェックしています。

### 推奨JDK 21ダウンロード先

| 配布版 | ダウンロードリンク | 推奨理由 |
| :--- | :--- | :--- |
| **Azul Zulu 21 (LTS)** | [Azul公式サイトへ](https://www.azul.com/downloads/?version=java-21-lts) | 性能が優れており、Minecraftの大規模マルチスレッド最適化に最適 |
| **Eclipse Temurin 21 (LTS)** | [Adoptium公式サイトへ](https://adoptium.net/temurin/releases/?version=21) | 公式推奨、高い互換性と安定性 |
| **Microsoft OpenJDK 21** | [Microsoft公式サイトへ](https://learn.microsoft.com/zh-cn/java/openjdk/download) | Windowsプラットフォームでのネイティブ対応が良好 |

### ランチャーでのJava 21の設定

```mermaid
graph LR
    A[ランチャーを開く] --> B[GTEバージョン設定に入る]
    B --> C[Javaパス / ランタイム]
    C --> D[インストール済みのJDK 21 javaw.exeを選択]
    D --> E[8192MB〜12288MBのメモリを割り当て]
    E --> F[保存してゲームを起動]
```

---

## 🎮 ゲーム内ショートカットキーとよく使うコマンド

| コマンド / ショートカットキー | 機能説明 | 権限要件 |
| :--- | :--- | :--- |
| `/ftbquests editing_mode true` | クエストブックのビジュアル編集モードを有効化（作者モード） | OP権限 |
| `/ftbquests reload` | FTB Questsクエストブックの設定ファイルをホットリロード | 全員 |
| `/kubejs reload server_scripts` | サーバー側の改造スクリプトとレシピをホットリロード | OP権限 |
| `/kubejs reload client_scripts` | クライアント側の改造スクリプトと表示ロジックをホットリロード | 権限不要 |
| `/dumpmultiblock` | 木の斧で領域を選択後、マルチブロック構造コードをワンクリックでエクスポート | OP権限 |
| <kbd>U</kbd> / <kbd>R</kbd> | カーソル位置のアイテムの用途（Usage）/ レシピ（Recipe）を表示 | EMI / JEIショートカットキー |
| <kbd>F7</kbd> | 周囲の明るさレベルを表示（赤い×はモブスポーンエリアを示す） | クライアントショートカットキー |