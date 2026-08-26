# ローカルホットデバッグとランチャー不要のクイック起動

GTEは、Modpackプランナー、クエスト作成者、Modプログラマーにとって非常に使いやすいシームレスな連携デバッグシステムを設計しました。

---

## ⚡ 1. ランチャー不要の超高速起動スクリプト (`run_game.bat` / `run_game.sh`)

クエストブック作成者（FTB Quests）やKubeJSレシピ担当者にとって、**IntelliJ IDEAを開く必要も、サードパーティ製ランチャーをインストールする必要もありません**。プロジェクトルートの **`run_game.bat`** をダブルクリックするだけで、ゲームを超高速に起動できます！

```mermaid
graph TD
    A[双击 run_game.bat] --> B[自动扫描本地 JDK 21 路径并持久化]
    B --> C[自动探测系统物理内存与 CPU 核心数]
    C --> D[动态计算最优 JVM 内存分配与 GC 线程]
    D --> E[直接挂载 gte/overrides 为游戏工作目录]
    E --> F[启动游戏: 实时读写 Git 追踪的 quests 与 scripts]
```

### 主な特徴
1. **全自動JDK 21検出**: `.jdks`、`Adoptium`、`Zulu`、`Program Files` 配下にインストールされたJava 21を自動的に検索し、`.jdk_path` に自動的に記憶します。
2. **ハードウェア適応最適化**: 現在のPCのRAM総量に基づき、最適な割合（使用可能な物理メモリの50%〜60%）でJVMヒープサイズを自動割り当てし、並列GCスレッドを自動構成します。
3. **移動ゼロのワークフロー**: ゲーム内でクエストを変更（`/ftbquests editing_mode true`）して保存すると、変更はGitリポジトリ内の対応する `config/ftbquests/` にリアルタイムで直接保存されます。GitHub Desktopを開けばワンクリックでコミットできます！

---

## 🔗 2. 外部ランチャー向けコピー不要マッピングツール (`link_to_launcher.bat`)

スキンやキー設定を自分好みに設定したランチャー（PCL2 / HMCL / Prism Launcher など）を使い慣れている場合：

1. ルートディレクトリの **`link_to_launcher.bat`** をダブルクリックして実行します。
2. プロンプトに従って、ランチャーのゲームディレクトリ（例: `D:\PCL2\.minecraft\versions\GTE-Dev\.minecraft\`）をコンソールにドラッグ＆ドロップしてEnterキーを押します。
3. スクリプトはWindowsのディレクトリジャンクション（Directory Junctions）を自動的に作成します：
   - `config` ➜ `gte/overrides/config`
   - `kubejs` ➜ `gte/overrides/kubejs`
   - `ftbquests` ➜ `gte/overrides/config/ftbquests`
   - `defaultconfigs` ➜ `gte/overrides/defaultconfigs`
4. ランチャー内でクエストやレシピをどのように変更しても、**物理データはメインのGitリポジトリにリアルタイムで同期保存されます**！

---

## ☕ 3. Modコードのホットコンパイルシャドウ環境 (`gte-dev-runtime`)

Java/Kotlinプログラマー向けに、`modules/gte-dev-runtime` は専用のシャドウデバッグモジュールです：

### 動作原理と設計上の考慮点
- **位置付け**: 純粋なローカルホットコンパイル/連携デバッグ用サンドボックスであり、**パッケージングして公開することは禁止されており、いかなるプレイヤー向け成果物にも含まれません**。
- **ModDevGradle動的リマッピング**: `gtm-reborn` と `gtecore` の最新ソースコードを自動的にホットコンパイルし、Mojangの難読化解除名前空間にマウントします。
- **起動方法**:
  - IDEAで実行構成 **`Run GTE Full Pack (Client - Hot Debug)`** を選択します。
  - またはコマンドラインで実行：
    ```powershell
    .\gradlew.bat :modules:gte-dev-runtime:runClient
    ```