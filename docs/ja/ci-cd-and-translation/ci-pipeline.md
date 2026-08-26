# CI/CD 自動ビルド・パッケージング・Maven 公開パイプライン

GTE は、高度に自動化され、複数のターゲット成果物を並行生成する **GitHub Actions CI/CD パイプライン**（設定ファイルは `.github/workflows/sync-build.yml` と `release-publish.yml`）を構築しています。

---

## 🔄 全量 CI パイプライン構成 (`sync-build.yml`)

`master` / `main` / `satou` ブランチへのコードプッシュ、PR 提出、または Release Tag のトリガー時、GitHub Actions が自動的に以下の標準パイプラインを実行します：

```mermaid
flowchart TD
    A[コードプッシュ / Tag トリガー] --> B[Checkout 再帰サブモジュール & JDK 21 / Python 3.11 / Go 設定]
    B --> C[Gradle 増分同期 Blockbench アート資産 syncBlockbenchAssets]
    C --> D[マルチモジュール高並列コンパイル & GameTest 自動実機テスト]
    D --> E[生成 Jar を overrides/mods にコピー & build/artifacts に収集]
    E --> F[opencode_translate.py を実行し全量/増分 AI 国際化翻訳]
    F --> G[Packwiz 規範パッケージング: CurseForge パック + Java 21 manifest パッチ]
    G --> H[Python で Zero-Compile プレイヤー完全お手軽パック .minecraft をビルド]
    H --> I[Packwiz で純粋サーバー Server パックをエクスポート]
    I --> J[すべての Release 成果物を Actions Artifacts ストレージにアップロード]
    J --> K[静的 Maven リポジトリを構築し GitHub Pages (gh-pages) にデプロイ]
    J --> L[Tag トリガー時: CurseForge プラットフォームに自動公開]
```

---

## 📦 三大コアパッケージングタスク詳細

### 1. CurseForge 規範パックと Java 21 パッチ
- **Packwiz エクスポート**：`packwiz curseforge export` を実行し、標準規範パックを生成します。
- **manifest.json 自動パッチ**：一部のサードパーティ製ランチャーが CurseForge パックを解析する際にデフォルトで Java 17 を割り当てる問題に対し、CI が自動的に zip を解凍し、Python スクリプトで `manifest.json` 内の `minecraft.javaVersion` とトップレベルの `javaVersion` を **ハードコードで強制的に 21 に書き換え**、再パッケージングします。

### 2. プレイヤー向けコンパイル不要完全お手軽パック (`build_lazy_pack.py`)
- Python スクリプトが各モジュールの `build/libs/` から最新のコア Jar を自動抽出します。
- `modules/gtecore/gradle/libs/` 配下の主要拡張 Mod を自動マージします。
- すべての設定、KubeJS スクリプト、パチュリーの本を同梱し、すぐに使える `.minecraft` 圧縮パックを生成します。中国語の起動ガイドも内蔵しています。

### 3. サーバーエクスポートパック (`packwiz server export`)
- クライアント専用の最適化 Mod（3D スキンレイヤー、シェーダー、キーバインドなど）を自動的に除外し、Linux/Windows の本番サーバーに直接デプロイ可能な純粋なサーバーパックを生成します。

---

## 🌐 GitHub Pages 静的 Maven リポジトリデプロイ

パイプラインは Gradle の `publish` タスクを通じて、すべてのサブモジュール（`gtecore`、`gtm-reborn`、`gt--`）を標準 Maven アーティファクトとしてビルドし、`gh-pages` ブランチにデプロイします：

```groovy
// サードパーティ Mod または開発プロジェクトで GTE Maven リポジトリを直接参照する場合
repositories {
    maven {
        name = "GTE GitHub Pages Maven"
        url = "https://takanashisatou.github.io/GregtechEasy/"
    }
}

dependencies {
    implementation fg.deobf("org.satou.gtecore:gtecore-1.20.1:1.0.0")
}
```

---

## 🏷️ 手動リリースとバージョンタグ付けワークフロー (`release-publish.yml`)

プロジェクトは標準化された Git Release フローを採用しています：
1. GitHub Actions ページで **Manual Publish Release** を手動トリガーし、バージョン番号（例：`2.3.0`）を入力します。
2. ワークフローが自動的に `dev -> release` PR を作成し、CI 検証を実行して自動 Squash Merge します。
3. `release` ブランチに `v2.3.0` Git Tag を自動的に打ち、プッシュします。
4. Tag プッシュイベントが自動的に `sync-build.yml` をトリガーし、最終的に全チャネルへの成果物公開を完了します。