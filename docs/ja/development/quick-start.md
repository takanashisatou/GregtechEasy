# 開発者クイックスタートガイド

本ガイドは、GTE-Multi クロスモジュールエンジニアリング開発に参加する Java/Kotlin プログラマーと Modpack 作成者を対象としています。

---

## 💻 1. 開発環境の準備

### JDK 21 の必須要件
このプロジェクトの全モジュールは統一して **JDK 21** を使用します。推奨インストール：
- [Azul Zulu JDK 21](https://www.azul.com/downloads/?version=java-21-lts)
- [Eclipse Temurin JDK 21](https://adoptium.net/temurin/releases/?version=21)

### IDE の推奨とプラグイン
**IntelliJ IDEA 2023.3+** の使用を推奨し、以下の公式プラグインをインストールします：
- **Minecraft Development**：Mixin コードヒント、AT アクセストランスフォーマー認識、イベントハイライトを提供します。
- **Lombok**：`@Getter`, `@Setter`, `@NoArgsConstructor` などのアノテーションをサポートします。
- **Kotlin**：GT-- CE モジュール開発をサポートします。

---

## 📥 2. リポジトリのクローンとプロジェクトのインポート

このプロジェクトには複数の Git サブモジュールが含まれているため、**再帰的に取得する必要があります**：

```bash
# 1. メインリポジトリとすべてのサブモジュールを再帰的にクローン
git clone --recurse-submodules https://github.com/takanashisatou/GregtechEasy.git GTEGroup
cd GTEGroup

# 2. 以前にクローンした場合は、サブモジュールを更新して初期化
git submodule update --init --recursive
```

### IDEA でのインポート手順
1. IDEA で **File ➜ Open** をクリックし、ルートディレクトリの `build.gradle` を選択してプロジェクトとして開きます。
2. 設定に移動：`Settings` ➜ `Build, Execution, Deployment` ➜ `Build Tools` ➜ `Gradle`。
3. **Gradle JVM** を **JDK 21** に指定します。

---

## 🛠️ 3. よく使う Gradle ビルドコマンド

Windows PowerShell で実行します（事前に `JAVA_HOME` を設定する必要があります）：

```powershell
$env:JAVA_HOME='C:\Users\Ex_Je\.jdks\ms-21.0.11'

# 1. 指定したサブモジュールを個別にコンパイル
.\gradlew.bat :modules:gtecore:compileJava
.\gradlew.bat :modules:gt--:compileKotlin
.\gradlew.bat :modules:gtm-reborn:compileJava

# 2. GTM-Reborn GameTest サーバー実機テストを実行
.\gradlew.bat :modules:gtm-reborn:runGameTestServer

# 3. コードフォーマットを実行
.\gradlew.bat :modules:gtm-reborn:spotlessApply

# 4. 全モジュールを一括コンパイルして Jar をパッケージング
.\gradlew.bat buildAll -x test

# 5. コンパイルで生成された Jar を gte/overrides/mods/ に同期
.\gradlew.bat copyOutputJars

# 6. 全モジュールをローカル Maven リポジトリ (~/.m2/repository/) に公開
.\gradlew.bat publishAllToMavenLocal

# 7. 全モジュールの静的アーティファクトを build/maven に公開 (GitHub Pages Maven 用)
.\gradlew.bat publishAllToMaven
```