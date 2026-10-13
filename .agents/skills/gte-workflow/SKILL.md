---
name: gte-workflow
description: >-
  Develop and debug GTE module sources, dependencies, and the development runtime.
  Use for GTE Java/Kotlin changes, crashes, and source PRs. Packaging, production
  JAR refreshes, releases, and Maven publication apply only when requested.
---

# GTE 开发工作流

先读取当前仓库的 `AGENTS.md`。依赖版本、模块分支、JDK 路径和 CI 状态以当前源码与远端为准；技能不扩大用户已经授权的任务范围。

## 先确定交付范围

| 用户请求 | 应交付的结果 | 结束条件 |
| --- | --- | --- |
| 静态分析、代码审查 | 基于指定提交的发现、依据与不确定项 | 报告完成；不自动修改、启动游戏或发布 |
| 源码修复、机器开发 | 归属模块中的改动及必要验证 | 本地改动完成，或会话已授权的源码 PR / 指针 PR 合并完成 |
| 技能、说明、测试夹具优化 | 对应文件与适用的验证 | 文本/脚本检查、相关测试及已授权的 PR 流程完成 |
| 整合包、生产 JAR 更新、发布 | 用户明确指定的产物或发布结果 | 进入 [打包与发布流程](references/packaging_and_release.md) |

修复源码不等于更新生产 JAR。CI 自动创建 JAR 刷新 PR，也不代表用户授权本任务跟踪或合并它。用户要求不更新 JAR 时，提交范围不包含 `gte/overrides/mods/`；必要的源码 CI 可继续运行。

## 定位与读取

1. 中文名称先查 `modules/gtecore/src/generated/resources/assets/gtecore/lang/zh_cn.json`，取得注册 ID；必要时再查旧命名空间的主资源语言文件或任务语言文件。
2. 按 ID 限定到注册类、控制器、配方类型与配方文件，再沿父类、条件与修改器追踪。详见 [精准检索](references/code_search_runbook.md)。
3. 记录用户指定分支实际锁定的子模块提交；比较本地 HEAD 与远端，保留未提交改动。不要把当前子模块分支当成整合包的锁定版本。

只读相关文件和行段。大型 `.aisle(...)` 矩阵应提取尺寸、字符计数和谓词摘要，避免打印整段巨型字符串导致关键输出被截断。每次读取参考资料只选择当前问题需要的主题。

## 源码改动与验证

- 在拥有该功能的模块创建功能分支，先复现或确认阻断点，再做一个有依据的修复。
- 纯文本/技能修改使用结构、链接与脚本检查；测试夹具修改运行对应测试。不要把这些任务升级为生产包构建或客户端启动。
- Java/Kotlin 行为修改做严格编译与针对性运行验证；按 `AGENTS.md` 执行适用的强制检查。已有通过结果只在改动、失败或新疑点出现时重跑。
- **新增/改名注册内容、语言键或标签时**，语言源写在 `modules/gtecore/src/main/java/org/satou/gtecore/datagen/Lang.java` 的 `provider.add(key, en, zh)`，再运行 `:modules:gtecore:runData`。不手改 `src/generated/`。没有数据变化的逻辑修复不自动要求本地 datagen；CI 自身要求的步骤照常执行。
- 测试要验证可观察的行为。结构 GameTest 的 `empty` 模板只清理自身范围；大结构必须显式隔离完整场地，不能假定抬高相对高度后没有地形。详见 [多方块测试](../gte-multiblock/references/gametest_workflow.md)。

常用命令（Windows 从根目录运行，先按 `AGENTS.md` 设置 JDK 21 的 `JAVA_HOME`）：

```powershell
.\gradlew.bat :modules:gtecore:compileJava -Pwerror --console=plain
.\gradlew.bat :modules:gtecore:runData --console=plain
.\gradlew.bat :modules:gtecore:runGameTestServer --console=plain
```

## PR 与 CI

仅在用户已授权 commit / push / PR / merge 的范围内执行后续动作，不重复询问已有授权。源码流程按仓库要求依次完成模块 PR，再更新根仓库指针；根级技能/工具改动使用根仓库功能分支。

- 提交前确认分支；不直接提交到受保护的目标分支。
- CI 检查绑定 PR 的实际 head SHA；等待相关运行的最终结论，不能凭运行中、已取消或缺失的检查报告完成。
- 同一分支 CI 在运行时，不追加 push，除非已明确决定取消旧运行。
- CI 失败先读失败步骤及具体断言，再判断实现、测试场地还是环境问题；不要用反复重跑、删测试或关闭校验掩盖可复现错误。
- 等待时优先处理独立工作，状态未变则延长查询间隔；只汇报实质变化。不要把源码任务的终点延伸到未请求的发布流水线。

## 会影响运行的关键约束

- 不强转 Mixin accessor；对 vanilla/Forge 目标保留 remap。
- 开发运行依赖使用 `modLocalRuntime` 及命名映射；编译依赖使用相应 compile 配置。
- 子模块的 `legacyForge.mods` 只声明自己的 source set；跨模块走 Gradle project 依赖，只有专用 `gte-dev-runtime` 聚合多模块 source set。
- 开发 JAR 不依赖 SRG jarJar 内嵌库；实际加载模块的每个运行配置提供对应的命名 standalone 依赖。
- 需要图形启动验证时，使用 Gradle `runFullPack` / `:modules:gte-dev-runtime:runClient`。优化/光影环境保持 `earlyWindowControl=false`，不通过重新启用早期窗口修复“窗口没出现”。
- 不修改第三方 JAR 内部，不把开发重映射输出覆盖进生产整合包。

启动、类加载、窗口与缓存问题按症状查 [运行时排障](references/runtime_troubleshooting.md)；只有实际涉及该主题才读取。当前项目的 `.agents/skills/` 是这套 GTE 技能的唯一维护来源，避免保留旧同名副本、旧正文归档或相互矛盾的第二套指引。
