# GTE-Multi 聚合开发工程

欢迎来到 **GTE-Multi** 多项目聚合工程！本项目集合了 **GTECore**（Java 核心模组）、**GTM-Reborn**（专属 GregTech Modern 分支）、**GT-- Community Edition**（GT-- CE 模组）以及 **GTE**（整合包主体与 KubeJS 脚本）。

---

## 💻 快速开始（新开发者指南）

### 1. 环境准备
- **Java 环境**：必须安装 **JDK 21**（推荐 [Azul Zulu 21](https://www.azul.com/downloads/?version=java-21-lts) 或 [Eclipse Temurin 21](https://adoptium.net/temurin/releases/?version=21)）。
- **开发工具**：推荐使用 **IntelliJ IDEA 2023.3+**，并安装插件：
  - *Minecraft Development*
  - *Lombok*

### 2. 克隆与导入项目
```bash
git clone --recurse-submodules <仓库地址> GTEGroup
cd GTEGroup
git submodule update --init --recursive
```
在 IntelliJ IDEA 中点击 **File -> Open**，选择项目的根目录 `build.gradle` 打开为工程。

> [!IMPORTANT]
> 打开后请前往 IDEA 设置：`Settings` ➜ `Build, Execution, Deployment` ➜ `Build Tools` ➜ `Gradle`，确保 **Gradle JVM** 选择为 **JDK 21**。

---

## 🛠️ 针对不同开发者的工作流

### 🅰️ 模组开发者（Java / 机器 / 逻辑开发）
- **直接源码引用**：`gtecore` 已配置底层直接依赖本地 `gtm-reborn` 源码，修改任意一方的代码均可实时生效，无需手动打包 jar。
- **运行联调**：
  - 在 IDEA 顶部运行配置中选择 **`Run GTE Full Pack (Client - Hot Debug)`** 直接启动或 Debug 调试。
  - 或命令行执行：
    ```powershell
    .\gradlew.bat :modules:gte-dev-runtime:runClient
    ```
- **资源生成（Datagen）**：新增物品、方块或材质后，运行数据生成任务：
  ```powershell
  .\gradlew.bat :modules:gtecore:runData
  ```

---

### 🅱️ 整合包策划与任务作者（FTB Quests / KubeJS / 配方）
- **🚀 极速免启动器启动（推荐）**：
  - **无需安装任何启动器或 IDEA**，直接双击项目根目录下的 **`run_game.bat`**！
  - 脚本会自动检测 Java 21 并直接启动游戏，工作目录直接指向 `gte/overrides/`。
  - 在游戏内编辑任务（`/ftbquests editing_mode true`）并保存，修改直接实时保存在 Git 仓库中。
  - 打开 GitHub Desktop 点击提交即可，实现真正的 **0 挪动、0 配置**！
- **游戏内热重载**：
  - 任务书热重载：`/ftbquests reload`
  - 配方/服务端脚本：`/kubejs reload server_scripts`
  - 材质/客户端脚本：`/kubejs reload client_scripts`

---

### 🅲️ 美术与建模人员（Blockbench / 贴图）
- 将模型及材质导出后，运行一键同步任务：
  ```powershell
  .\gradlew.bat syncBlockbenchAssets
  ```
  即可自动增量同步合并至 `gtecore` 的编译资源目录中。

---

## 📦 打包与发布

一键构建全模块发布 Jar 包（输出至各模块的 `build/libs/`）：
```powershell
.\gradlew.bat buildAll -x test
```

更多开发守则与跨模组规范请参考：[.codex/rules.md](.codex/rules.md)。
