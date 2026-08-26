# GregTech Easy (GTE) 公式ドキュメント

**GregTech Easy (GTE)** 整合パックの公式総合ガイドへようこそ！

GTE は、**「シンプル、楽しい、面白い、短時間」** を核心理念とする現代の Minecraft 1.20.1 整合パックです。

---

## ⚡ クイックジャンプインデックス

<div class="grid cards" markdown>

-   :material-download: __[プレイヤーと整合パックガイド](download-and-play/lazy-pack.md)__

    ---

    ダウンロードしてすぐ使える **0コンパイル完全お手軽パック**、CurseForge 標準パックとサーバー、**Java 21** 実行環境の設定とランチャーインポートチュートリアルを紹介します。

    [:octicons-arrow-right-24: 今すぐ見る](download-and-play/lazy-pack.md)

-   :material-chip: __[GTECore コアモジュール詳細](gtecore/overview.md)__

    ---

    **陰陽八卦煉仙炉**、**四象陣法**、**鉱石処理センター**、**奇跡の環**、**超弦と陰陽回路**、**AE2 サンプル総成 Plus** などの核心コンテンツを詳しく解説します。

    [:octicons-arrow-right-24: 今すぐ見る](gtecore/overview.md)

-   :material-cog: __[GTM Reborn モジュールブランチ](gtm-reborn/index.md)__

    ---

    `satou` ブランチがもたらす多アンペアレシピ、バッチ処理モード、1t Subtick オーバークロック、GameTest 自動化テスト、流体レンジ出力機能を紹介します。

    [:octicons-arrow-right-24: 今すぐ見る](gtm-reborn/index.md)

-   :material-code-tags: __[KubeJS 魔改と開発ツール](kubejs/scripting-guide.md)__

    ---

    KubeJS で材料を登録し、レシピを記述する方法を学び、内蔵の `/dumpmultiblock` 木斧フレーム選択ツールを使ってワンクリックでマルチブロック構造コードをエクスポートします。

    [:octicons-arrow-right-24: 今すぐ見る](kubejs/scripting-guide.md)

-   :material-hammer-wrench: __[開発者とクラッシュ防止実践マニュアル](development/quick-start.md)__

    ---

    `run_game.bat` によるランチャー不要の秒速起動、`link_to_launcher.bat` によるコピー不要のディレクトリマッピング、そして Mixin Accessor クラッシュを防ぐ黄金ルールを習得します。

    [:octicons-arrow-right-24: 今すぐ見る](development/quick-start.md)

-   :material-robot: __[CI/CD パイプラインと AI 翻訳](ci-cd-and-translation/ci-pipeline.md)__

    ---

    GitHub Actions に基づく自動化されたマルチモジュール並列ビルド、Packwiz パッケージング、Maven リリース、そして `opencode_translate.py` AI 国際化スクリプトを紹介します。

    [:octicons-arrow-right-24: 今すぐ見る](ci-cd-and-translation/ci-pipeline.md)

</div>

---

## 🛠️ プロジェクト基本情報

| 設定項目 | 説明 |
| :--- | :--- |
| **プロジェクト名** | `GregtechEasy` (`gte-multi`) |
| **実行・コンパイルツールチェーン** | **JDK 21**（Java 21 Toolchain を強制使用し、すべてのサブモジュールで厳密に統一） |
| **ゲームバージョン** | Minecraft `1.20.1` (Forge `47.3.0` / `47.4.4`) |
| **オープンソースライセンス** | LGPL-3.0 / MIT |
| **デフォルトブランチ** | メインリポジトリ `main` / `master`、GTM-Reborn `satou`、GT-- `kotlin`、GTECore `master` |