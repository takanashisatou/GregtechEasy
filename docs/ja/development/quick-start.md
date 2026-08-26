# 開発者クイックスタートガイド

このガイドは、GTE-Multi クロスモジュールプロジェクト開発に参加する Java/Kotlin プログラマーと Modpack 制作者を対象としています。

---

## 💻 1. 開発環境の準備

### JDK 21 の必須要件
このプロジェクトの全モジュールは統一して **JDK 21** を使用します。推奨インストール先：
- [Azul Zulu JDK 21](https://www.azul.com/downloads/?version=java-21-lts)
- [Eclipse Temurin JDK 21](https://adoptium.net/temurin/releases/?version=21)

### 推奨IDEとプラグイン
**IntelliJ IDEA 2023.3+** の使用を推奨し、以下の公式プラグインをインストールしてください：
- **Minecraft Development**：Mixin コードヒント、AT アクセストランスフォーマー認識、イベントハイライトを提供します。
- **Lombok**：`@Getter`, `@Setter`, `@NoArgsConstructor` などのアノテーションをサポートします。
- **Kotlin**：GT-- CE モジュール開発をサポートします。

---

## 📥 2. リポジトリのクローンとプロジェクトのインポート

このプロジェクトには複数の Git サブモジュール (Submodules) が含まれているため、**再帰的に取得する必要があります**：

```bash
# 1. 递归克隆主仓库与所有子模块
git clone --recurse-submodules https://github.com/takanashisatou/GregtechEasy.git GTEGroup
cd GTEGroup

# 2. 若之前已克隆，更新并初始化子模块
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

# 1. 单独编译指定子模块
.\gradlew.bat :modules:gtecore:compileJava
.\gradlew.bat :modules:gt--:compileKotlin
.\gradlew.bat :modules:gtm-reborn:compileJava

# 2. 运行 GTM-Reborn GameTest 服务端实机测试
.\gradlew.bat :modules:gtm-reborn:runGameTestServer

# 3. 运行代码格式化
.\gradlew.bat :modules:gtm-reborn:spotlessApply

# 4. 一键全模块编译并打包 Jar
.\gradlew.bat buildAll -x test

# 5. 将编译生成的 Jar 同步至 gte/overrides/mods/
.\gradlew.bat copyOutputJars

# 6. 发布全模块至本地 Maven 仓库 (~/.m2/repository/)
.\gradlew.bat publishAllToMavenLocal

# 7. 发布全模块静态构件至 build/maven (用于 GitHub Pages Maven)
.\gradlew.bat publishAllToMaven
```