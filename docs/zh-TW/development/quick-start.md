# 開發者快速上手指南

本指南面向參與 GTE-Multi 跨模組工程開發的 Java/Kotlin 程式設計師與整合包作者。

---

## 💻 1. 開發環境準備

### JDK 21 強制要求
本專案全模組統一使用 **JDK 21**。推薦安裝：
- [Azul Zulu JDK 21](https://www.azul.com/downloads/?version=java-21-lts)
- [Eclipse Temurin JDK 21](https://adoptium.net/temurin/releases/?version=21)

### IDE 推薦與外掛
推薦使用 **IntelliJ IDEA 2023.3+**，並安裝以下官方外掛：
- **Minecraft Development**：提供 Mixin 程式碼提示、AT 訪問轉換器識別與事件高亮。
- **Lombok**：支援 `@Getter`, `@Setter`, `@NoArgsConstructor` 等註解。
- **Kotlin**：支援 GT-- CE 模組開發。

---

## 📥 2. 倉庫克隆與工程匯入

因為本專案包含了多個 Git 子模組 (Submodules)，**必須遞迴拉取**：

```bash
# 1. 递归克隆主仓库与所有子模块
git clone --recurse-submodules https://github.com/takanashisatou/GregtechEasy.git GTEGroup
cd GTEGroup

# 2. 若之前已克隆，更新并初始化子模块
git submodule update --init --recursive
```

### IDEA 匯入指引
1. 在 IDEA 中點選 **File ➜ Open**，選中根目錄的 `build.gradle` 開啟為工程。
2. 前往設定：`Settings` ➜ `Build, Execution, Deployment` ➜ `Build Tools` ➜ `Gradle`。
3. 將 **Gradle JVM** 指定為 **JDK 21**。

---

## 🛠️ 3. 常用 Gradle 構建指令

在 Windows PowerShell 中執行（需預先設定 `JAVA_HOME`）：

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
