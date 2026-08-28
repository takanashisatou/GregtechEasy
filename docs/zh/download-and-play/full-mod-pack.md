# 整合包下载与完整模组客户端包指南

GTE (GregTech Easy) 为不同技术背景的玩家和服主提供了三种交付形式：

1. **CurseForge 规范包 (`GTE-CurseForge-*.zip`)**：标准启动器导入格式，自带 `manifest.json`，模组位于 `overrides/mods/`，启动器会自动安装 Forge。**大多数玩家推荐使用这一种。**
2. **完整模组客户端包 (`GTE-FullMod-*.zip`)**：扁平压缩包，顶层只有游戏内容，供自己配置实例的玩家使用。
3. **服务端包 (`GTE-Server-*.zip`)**：Forge 专用服务端包，`mods/` 位于压缩包顶层，用于开服联机。

---

## 📦 完整模组客户端包

### 包内结构

```text
README_安装必看.txt
mods/            (17 个 jar)
config/
defaultconfigs/
kubejs/
```

没有嵌套的 `.minecraft/` 目录，不含启动器，也不含 `run_game.bat`。Minecraft 本体与 Forge 由你的启动器负责安装，因此使用本包的前提是**你已经会在启动器里创建实例**。

### 硬性环境要求

| 项目 | 版本 | 说明 |
| :--- | :--- | :--- |
| **Minecraft** | `1.20.1` | 不接受其他版本 |
| **Forge** | `47.4.1` | 必须精确到这个版本 |
| **Java** | `21` | 切勿使用 Java 17 或 Java 8 |

> [!CAUTION]
> **Forge 必须是 47.4.1，而不是「47.4.1 及以上任选一个」。**
> - 模组 `gtmthings` 要求 Forge `[47.4.1,)`，低于此版本不会加载；
> - 而 Forge 47.4.10 自带 ASM 9.8 + coremods 5.2.4，会让 `appliedenergistics2` 15.4.9 的 mixin 失配，游戏永远开不到主菜单。
>
> 47.4.1 是目前唯一可用的版本。

### 安装步骤

=== "方式一：手动配置实例（本包用法）"

    1. 在启动器（PCL2 / HMCL / Prism / MultiMC / 官方启动器均可）中新建一个 Minecraft **1.20.1** 实例，并安装 **Forge 47.4.1**。
    2. 先启动一次，确认能进入主菜单（这一步用来排除启动器与 Java 自身的问题）。
    3. 打开该实例的游戏目录（即 `.minecraft` 目录，启动器里一般有「打开文件夹」按钮）。
    4. 将 `GTE-FullMod-<版本号>.zip` 的内容**全部解压进去**，与已有的同名文件夹合并。
    5. 在实例设置里把 Java 指定为 **Java 21**，分配 **8G ~ 12G** 内存。
    6. 启动游戏。首次进入会生成配置，比平时稍慢。

=== "方式二：启动器一键导入（推荐）"

    请改用 `GTE-CurseForge-<版本号>.zip`，在 CurseForge App / PCL2 / HMCL / Prism Launcher / MultiMC 中选择**导入整合包**。该包自带 `manifest.json`，启动器会自动装好 Forge，无需手动配置。

=== "方式三：开服"

    请改用 `GTE-Server-<版本号>.zip`，其 `mods/` 位于压缩包顶层：解压至服务端根目录后执行 `java -jar forge-*-installer.jar --installServer`，随后以 `@libraries/net/minecraftforge/forge/1.20.1-47.4.1/unix_args.txt nogui` 启动。

> [!WARNING]
> 文件名以 `-slim.jar` 或 `-dev-slim.jar` 结尾的 jar 是面向 Maven 使用者的构件，**故意不打包任何内嵌依赖**，绝对不要放进 `mods/`。否则 Forge 会选中一个不含内嵌 `ldlib` 的 `gtceu` 构建并直接中止：`Missing or unsupported mandatory dependencies: Mod ID: 'ldlib' ... [MISSING]`。官方发布的三个包均不含此类文件。

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
    A[新建 1.20.1 实例] --> B[安装 Forge 47.4.1]
    B --> C[Java 路径 / 运行时]
    C --> D[选择已安装的 JDK 21 javaw.exe]
    D --> E[分配 8192MB ~ 12288MB 内存]
    E --> F[解压 GTE-FullMod 并启动游戏]
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
