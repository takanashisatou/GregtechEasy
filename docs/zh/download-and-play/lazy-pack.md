# 整合包下载与玩家懒人包指南

GTE (GregTech Easy) 为不同技术背景的玩家和服主提供了三种开箱即用的交付形式：

1. **玩家免编译完整懒人包 (`GTE-LazyPack-*.zip`)**：包含预编译好的全部模组、配置、魔改脚本与完整 `.minecraft` 目录结构，**双击或拖入启动器即可游玩**。
2. **CurseForge 规范包 (`GTE-CurseForge-*.zip`)**：标准 CurseForge 格式，可直接在 PCL2 / HMCL / CurseForge App / Prism Launcher 中一键导入。
3. **服务端整合包 (`GTE-Server-*.zip`)**：包含纯净服务端配置、模组与启动脚本，用于开服联机。

---

## 🚀 玩家懒人包（推荐）

### 特点与优势
- **0 编译依赖**：无需安装 JDK 编译环境、IntelliJ IDEA 或 Git。
- **全量打包**：`gtecore`、`gtm-reborn`、`gt--` 最新发布 Jar 及前置扩展模组已全部内置于 `mods/` 目录。
- **即拖即玩**：支持 PCL2 / HMCL 窗口拖拽一键导入。

### 导入与启动步骤

=== "方式一：启动器一键拖拽（推荐）"

    1. 打开 **PCL2 (Plain Craft Launcher 2)** 或 **HMCL (Hello Minecraft! Launcher)**。
    2. 将下载到的 `GTE-LazyPack-<版本号>.zip` 直接**鼠标左键拖入**启动器主窗口中。
    3. 启动器将自动识别并解压至游戏版本列表。
    4. 前往该版本的**版本设置**，将 Java 运行时指定为 **Java 21**。
    5. 分配 **8GB ~ 12GB** 内存，点击启动游戏！

=== "方式二：手动解压模式"

    1. 将压缩包解压至任意无中文、无空格路径（例如 `D:\Games\GTE\`）。
    2. 解压后将获得包含 `mods/`、`config/`、`kubejs/` 的 `.minecraft` 目录。
    3. 在启动器中添加游戏版本，将游戏根目录选择为解压出的 `.minecraft` 文件夹。
    4. 确保选择 **Java 21** 核心并启动。

---

## ⚠️ Java 21 运行环境要求（极其重要）

> [!CAUTION]
> **本整合包强制要求运行环境为 Java 21 (JDK 21)！**
> 切勿使用 **Java 17** 或 **Java 8**，否则游戏将直接崩溃或拒绝启动！

### 为什么必须使用 Java 21？
- GTE 的核心模组（`gtecore`、`gtm-reborn`、`gt--`）全面采用了 **Java 21 现代化语言特性**（如 Record Patterns、Virtual Threads、增强 Switch 匹配）。
- Gradle 构建脚本全局配置了 `JavaLanguageVersion.of(21)` 强制工具链检查。

### 推荐 JDK 21 下载地址

| 发行版 | 下载链接 | 推荐理由 |
| :--- | :--- | :--- |
| **Azul Zulu 21 (LTS)** | [点击前往 Azul 官网](https://www.azul.com/downloads/?version=java-21-lts) | 性能卓越，对 Minecraft 大规模多线程优化极佳 |
| **Eclipse Temurin 21 (LTS)** | [点击前往 Adoptium 官网](https://adoptium.net/temurin/releases/?version=21) | 官方推荐，高兼容性与稳定性 |
| **Microsoft OpenJDK 21** | [点击前往 Microsoft 官网](https://learn.microsoft.com/zh-cn/java/openjdk/download) | Windows 平台原生适配良好 |

### 在启动器中配置 Java 21

```mermaid
graph LR
    A[打开启动器] --> B[进入 GTE 版本设置]
    B --> C[Java 路径 / 运行时]
    C --> D[选择已安装的 JDK 21 javaw.exe]
    D --> E[分配 8192MB ~ 12288MB 内存]
    E --> F[保存并启动游戏]
```

---

## 🎮 游戏内快捷键与常用指令

| 指令 / 快捷键 | 功能说明 | 权限要求 |
| :--- | :--- | :--- |
| `/ftbquests editing_mode true` | 开启任务书可视化编辑模式（作者模式） | OP 权限 |
| `/ftbquests reload` | 热重载 FTB Quests 任务书配置文件 | 所有人 |
| `/kubejs reload server_scripts` | 热重载服务端魔改脚本与配方 | OP 权限 |
| `/kubejs reload client_scripts` | 热重载客户端魔改脚本与显示逻辑 | 无需权限 |
| `/dumpmultiblock` | 木斧选取区域后一键导出多方块结构代码 | OP 权限 |
| <kbd>U</kbd> / <kbd>R</kbd> | 查看光标处物品的用途 (Usage) / 配方 (Recipe) | EMI / JEI 快捷键 |
| <kbd>F7</kbd> | 查看周围光照等级（红叉表示刷怪区域） | 客户端快捷键 |
