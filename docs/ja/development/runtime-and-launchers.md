# ローカルでのホットデバッグとランチャー不要の高速起動

GTEは、統合パックの企画者、クエスト作成者、そしてModプログラマーにとって非常に使いやすいシームレスなデバッグシステムを設計しました。

---

## ⚡ 1. ランチャー不要の高速起動スクリプト (`run_game.bat` / `run_game.sh`)

タスクブック作成者（FTB Quests）やKubeJSレシピプランナーにとって、**IntelliJ IDEAを開く必要も、サードパーティ製ランチャーをインストールする必要もなく**、プロジェクトルートディレクトリの **`run_game.bat`** をダブルクリックするだけで、ゲームを高速に起動できます！

```mermaid
graph TD
    A[ダブルクリック run_game.bat] --> B[ローカルJDK 21パスを自動スキャンして永続化]
    B --> C[システムの物理メモリとCPUコア数を自動検出]
    C --> D[JVMメモリ割り当てとGCスレッドを動的に最適化]
    D --> E[gte/overridesをゲーム作業ディレクトリとして直接マウント]
    E --> F[ゲーム起動: Git追跡のquestsとscriptsをリアルタイムで読み書き]
```

### 主な特徴
1. **全自動JDK 21検出**: `.jdks`、`Adoptium`、`Zulu`、`Program Files` 配下にインストールされたJava 21を自動的に検索し、`.jdk_path` に自動的に記憶します。
2. **ハードウェア適応最適化**: 現在のPCのRAM総量に基づいて、最適な比率（利用可能な物理メモリの50%〜60%）でJVMヒープサイズを自動的に割り当て、並列GCスレッドを自動的に設定します。
3. **移動不要のワークフロー**: ゲーム内でクエストを変更（`/ftbquests editing_mode true`）して保存すると、変更はGitリポジトリの対応する `config/ftbquests/` にリアルタイムで直接保存され、GitHub Desktopを開けばワンクリックでコミットできます！

---

## 🔗 2. 外部ランチャーへのコピー不要マッピングツール (`link_to_launcher.bat`)

スキンやキー設定を自分で設定したランチャー（PCL2 / HMCL / Prism Launcherなど）を使い慣れている場合：

1. ルートディレクトリの **`link_to_launcher.bat`** をダブルクリックして実行します。
2. プロンプトに従って、ランチャーのゲームディレクトリ（例: `D:\PCL2\.minecraft\versions\GTE-Dev\.minecraft\`）をコンソールにドラッグ＆ドロップしてEnterキーを押します。
3. スクリプトは自動的にWindowsディレクトリのジャンクション（Directory Junctions）を作成します：
   - `config` ➜ `gte/overrides/config`
   - `kubejs` ➜ `gte/overrides/kubejs`
   - `ftbquests` ➜ `gte/overrides/config/ftbquests`
   - `defaultconfigs` ➜ `gte/overrides/defaultconfigs`
4. ランチャーでクエストやレシピをどのように変更しても、**物理データはメインのGitリポジトリにリアルタイムで同期保存されます**！

---

## ☕ 3. Modコードのホットコンパイルシャドウ環境 (`gte-dev-runtime`)

Java/Kotlinプログラマー向けに、`modules/gte-dev-runtime` は専用のシャドウデバッグモジュールです：

### 動作原理と設計上の考慮点
- **位置付け**: 純粋なローカルホットコンパイルデバッグサンドボックスであり、**パッケージングや公開は禁止されており、プレイヤー向けのビルドには一切含まれません**。
- **ModDevGradle動的リマッピング**: `gtm-reborn` と `gtecore` の最新ソースコードを自動的にホットコンパイルし、Mojangの難読化解除名前空間にマウントします。
- **起動方法**:
  - IDEAで実行構成 **`Run GTE Full Pack (Client - Hot Debug)`** を選択します。
  - またはコマンドラインで実行：
    ```powershell
    .\gradlew.bat :modules:gte-dev-runtime:runClient
    ```