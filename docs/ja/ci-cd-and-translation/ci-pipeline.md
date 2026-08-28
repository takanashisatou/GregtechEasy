# CI/CD 自動ビルド・パッケージング・Maven 公開パイプライン

GTE は、高度に自動化され、複数のターゲット成果物を並行生成する **GitHub Actions CI/CD パイプライン** を構築しました（設定ファイルは `.github/workflows/sync-build.yml` と `release-publish.yml` にあります）。

---

## 🔄 フル CI パイプラインのアーキテクチャ (`sync-build.yml`)

`master` / `main` / `satou` ブランチへのコードプッシュ、PR の提出、または Release Tag のトリガーが発生すると、GitHub Actions は以下の標準パイプラインを自動的に実行します：

```mermaid
flowchart TD
    A[代码推送 / Tag 触发] --> B[Checkout 递归子模块 & 配置 JDK 21 / Python 3.11 / Go]
    B --> C[Gradle 增量同步 Blockbench 美术资产 syncBlockbenchAssets]
    C --> D[多模块高并发编译 & GameTest 自动化实机测试]
    D --> E[复制生成 Jar 至 overrides/mods & 收集至 build/artifacts]
    E --> F[运行 opencode_translate.py 全量/增量 AI 国际化翻译]
    F --> G[Packwiz 规范打包: CurseForge 包 + 补丁 Java 21 manifest]
    G --> H[Python 构建玩家完整模组客户端包 GTE-FullMod]
    H --> I[Packwiz 导出纯净服务端 Server 包]
    I --> J[上传所有 Release 产物至 Actions Artifacts 存储]
    J --> K[构建静态 Maven 仓库并部署至 GitHub Pages (gh-pages)]
    J --> L[Tag 触发时: 自动发布至 CurseForge 平台]
```

---

## 📦 主要な3つのパッケージングタスクの詳細

### 1. CurseForge 標準パックと Java 21 パッチ
- **Packwiz エクスポート**: `packwiz curseforge export` を実行して標準パックを生成します。
- **manifest.json の自動パッチ**: 一部のサードパーティ製ランチャーが CurseForge パックを解析する際にデフォルトで Java 17 を割り当てる問題に対処するため、CI は zip を自動的に解凍し、Python スクリプトによって `manifest.json` 内の `minecraft.javaVersion` とトップレベルの `javaVersion` を **ハードコードで強制的に 21** に書き換え、再パッケージングします。

### 2. プレイヤー向け完全Modクライアントパック (`build_full_mod_pack.py`)
- Python スクリプトが各モジュールの `build/libs/` から最新のコア Jar を自動的に抽出します。
- `modules/gtecore/gradle/libs/` 配下の主要な拡張 Mod を自動的にマージします。
- すべての設定、KubeJS スクリプト、Patchouli の本を、フラットな `GTE-FullMod-*.zip`（最上位が `mods/`、`config/`、`defaultconfigs/`、`kubejs/`）にまとめ、中国語のインストールガイド `README_安装必看.txt` を同梱します。

### 3. サーバーエクスポートパック (`packwiz server export`)
- クライアント専用の最適化 Mod（3D スキンレイヤー、シェーダー、キーバインドなど）を自動的に除外し、Linux/Windows の本番サーバーに直接デプロイできるクリーンなサーバーパックを生成します。

---

## 🌐 GitHub Pages 静的 Maven リポジトリのデプロイ

パイプラインは Gradle の `publish` タスクを通じて、すべてのサブモジュール（`gtecore`、`gtm-reborn`、`gt--`）を標準の Maven アーティファクトとしてビルドし、`gh-pages` ブランチにデプロイします：

```groovy
// 在第三方 Mod 或开发工程中直接引用 GTE Maven 仓库
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

1. GitHub Actions ページで **Manual Publish Release** を手動でトリガーし、バージョン番号（例: `2.3.0`）を入力します。
2. ワークフローが自動的に `dev -> release` PR を作成し、CI チェックを実行して自動的に Squash Merge します。
3. `release` ブランチに `v2.3.0` Git Tag を自動的に打ってプッシュします。
4. Tag のプッシュイベントが自動的に `sync-build.yml` をトリガーし、最終的に全チャネルへの成果物リリースが完了します。