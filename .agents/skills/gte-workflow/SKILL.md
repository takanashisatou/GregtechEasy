---
name: gte-workflow
description: >-
  GTE 日常开发与调试工作流：查源码、改 Java/Kotlin 逻辑、跑 Datagen/GameTest、
  启动开发客户端、排查依赖与运行崩溃。Use for GTE module code changes, code search,
  builds, GameTests, dev client runs, and runtime debugging.
---

# GTE 开发工作流

这套仓库是 Minecraft Forge 1.20.1 + JDK 21 的多模块工程，日常改代码、查问题、跑测试都从这里下手。

## 模块与分支速览

| 路径 | 职责 | 主分支 |
| --- | --- | --- |
| `modules/gtecore` | GTECore 主内容（机器、配方、方块、物品、Datagen） | `master` |
| `modules/gtm-reborn` | GregTech Modern Reborn 上游魔改版 | `satou` |
| `modules/gt--` | GT-- CE（Kotlin，modId 仍叫 `gtnn`） | `kotlin` |
| `modules/docs` | 文档 / Wiki | `main` |
| `modules/gte-dev-runtime` | 根仓库自带的开发启动器（不发版） | 随根仓库 |
| `gte/` | 整合包配置、KubeJS、任务书、正式 mods | 随根仓库 `main` |

GTECore 自己的玩法、联动和性能优化放在 `modules/gtecore`，别为了图省事去改 `modules/gtm-reborn`。

## 查代码路线

1. **中文名找 ID**：先查 `modules/gtecore/src/generated/resources/assets/gtecore/lang/zh_cn.json`，拿不到再看对应模块的语言文件或任务语言文件。
2. **顺藤摸瓜**：拿到 ID 后只搜对应目录（机器注册、控制器、配方、KubeJS），沿着父类、配方条件和修改器追下去。详细路径表看 [精准检索](references/code_search_runbook.md)。
3. **别硬读巨型矩阵**：遇到上千字符的 `.aisle(...)`，用一行脚本抽尺寸、字符统计和控制器坐标，只直接读短的 `.where(...)` 和逻辑代码。

## 常用 Gradle 命令

Windows 下先切好 JDK 21 再在根目录跑 Gradle：

```powershell
$env:JAVA_HOME='C:\Users\Ex_Je\.jdks\ms-21.0.11'

# 严格编译
.\gradlew.bat :modules:gtecore:compileJava -Pwerror --console=plain

# 新增/改名注册项、语言键或标签后跑数据生成
.\gradlew.bat :modules:gtecore:runData --console=plain

# 跑 GameTest
.\gradlew.bat :modules:gtecore:runGameTestServer --console=plain
.\gradlew.bat :modules:gtm-reborn:runGameTestServer --console=plain

# 启动完整开发客户端（自带窗口拉起）
.\gradlew.bat runFullPack
```

## 踩过血坑的硬约束

- **语言和生成资源**：GTECore 的中英文统一写在 `modules/gtecore/src/main/java/org/satou/gtecore/datagen/Lang.java`（`provider.add(key, en, zh)`），然后跑 `:modules:gtecore:runData`。**千万别手改 `src/generated/`**，下次 datagen 会直接冲掉。贴图/模型文件先写完再跑 datagen。
- **`legacyForge.mods` 只声明自己**：子模块的 `legacyForge.mods` 塞了 sibling sourceSet 会把 `runData` 的 Registrate 类加载器搞炸。跨模块引用走 Gradle project 依赖，只有 `gte-dev-runtime` 负责聚合多模块。
- **Mixin 别强转 accessor**：用 `instanceof` 守卫或原版 API；目标在 `net.minecraft.*` / `net.minecraftforge.*` 的 Mixin 保留 remap。
- **开发环境别靠 SRG jarJar**：开发 JAR 排除了 `META-INF/jarjar/**`，运行配置必须提供对应的 named standalone 依赖（`modLocalRuntime`）；没有 `mods.toml` 的库保留原始 Maven 文件名方便去重。也别手改第三方 JAR 内部字节。
- **光影/优化窗口配置**：Embeddium + Oculus 下保持 `config/fml.toml` 的 `earlyWindowControl=false` 和 `-Dfml.earlyprogresswindow=false` / `-Dforge.earlyWindow=false`，窗口没弹出来也别把早期窗口改回 true。
- **提交顺序**：子模块有改动时，先在子模块里 `git commit && git push`，再回根仓库把新的子模块指针（和根仓库改动）一起 `git commit && git push`。
- **dev 目录联接**：`run/client/` 下的 `config/ftbquests`、`config/openloader/resources`、`kubejs` 等直接联接到 `gte/overrides/`，游戏里随手改的配置会变成 git 改动，提交前 `git status` 看一眼别误提交。

## 按需扩展

- 找文件、追调用链 → [精准检索](references/code_search_runbook.md)
- 启动崩溃、映射报错、窗口失踪、文件锁 → [运行时排障](references/runtime_troubleshooting.md)
- 正式 CurseForge 发版（本地编 JAR + 零 JAR 包 + 手动上传）→ [gte-release-publish](../gte-release-publish/SKILL.md)
- 其他打包格式（Full-Mod / 服务端包 / Maven / GitHub Release Assets）→ [打包格式速查](references/packaging_and_release.md)
- 多方块机器 / GameTest → [gte-multiblock](../gte-multiblock/SKILL.md)
