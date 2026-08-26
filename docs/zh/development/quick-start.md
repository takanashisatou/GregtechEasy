# 开发者快速上手指南

本指南面向参与 GTE-Multi 跨模块工程开发的 Java/Kotlin 程序员与整合包作者。

---

## 💻 1. 开发环境准备

### JDK 21 强制要求
本项目全模块统一使用 **JDK 21**。推荐安装：
- [Azul Zulu JDK 21](https://www.azul.com/downloads/?version=java-21-lts)
- [Eclipse Temurin JDK 21](https://adoptium.net/temurin/releases/?version=21)

### IDE 推荐与插件
推荐使用 **IntelliJ IDEA 2023.3+**，并安装以下官方插件：
- **Minecraft Development**：提供 Mixin 代码提示、AT 访问转换器识别与事件高亮。
- **Lombok**：支持 `@Getter`, `@Setter`, `@NoArgsConstructor` 等注解。
- **Kotlin**：支持 GT-- CE 模块开发。

---

## 📥 2. 仓库克隆与工程导入

因为本项目包含了多个 Git 子模块 (Submodules)，**必须递归拉取**：

```bash
# 1. 递归克隆主仓库与所有子模块
git clone --recurse-submodules https://github.com/takanashisatou/GregtechEasy.git GTEGroup
cd GTEGroup

# 2. 若之前已克隆，更新并初始化子模块
git submodule update --init --recursive
```

### IDEA 导入指引
1. 在 IDEA 中点击 **File ➜ Open**，选中根目录的 `build.gradle` 打开为工程。
2. 前往设置：`Settings` ➜ `Build, Execution, Deployment` ➜ `Build Tools` ➜ `Gradle`。
3. 将 **Gradle JVM** 指定为 **JDK 21**。

---

## 🛠️ 3. 常用 Gradle 构建指令

在 Windows PowerShell 中执行（需预先设置 `JAVA_HOME`）：

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
