# 整合包与发布流程

只在用户明确请求整合包产物、生产 JAR 更新、版本发布或 Maven 发布时使用本流程。机器源码修复、静态分析、测试与技能优化本身不授权这些操作；已有用户授权足够时直接完成，不增加重复确认。

## 先核实当前配置

后续正式包 ZIP 命名为 `GregTech Easy <版本号>(Use Java 21).zip`，发布显示名称为
`GregTech Easy <版本号>(Use Java 21)`，版本号与左括号之间不加空格。下次发布前
同步打包脚本与 CI 的命名模板；此次已发布的 3.1.1 文件保持现有名称。

读取 `AGENTS.md` 的 Modpack Assembly / CI 章节和实际 `.github/workflows/`。根仓库可能仍包含旧状态说明；实际 job、分支与版本配置为准，不把文档中的历史版本或“尚未实现”当成当前事实。

- 模块版本来自各模块 `gradle.properties`；运行依赖来自版本目录和 Gradle 配置。
- `gte/overrides/mods/` 由 CI 装配，禁止手工丢 JAR、编辑第三方 JAR 内部或写回开发 remap 输出。
- 一 modId 一 JAR，读取 `META-INF/mods.toml` 的 `[[mods]]` 段；只接受生产 SRG 构建，排除 `-dev`、`-dev-embeds`、`-sources` 等中间产物。

## 按用户请求选交付

| 请求 | 使用路径 |
| --- | --- |
| 刷新已提交的模块 JAR | 模块源码与根指针经本地验证及 PR 合并后，明确请求时手动运行 sync-build 装配并创建 JAR 刷新 PR；本地核对正确源提交、内容和 Gate 1d，再在已授权范围内合并，无需合并 CI |
| 基于已提交整合包制作 Full-Mod/Server 包 | 当前 `lazypack.yml` 或 `scripts/build_full_mod_pack.py` / `build_server_pack.py`；检查产物内容及相应 pack gates |
| CurseForge 产物/发布 | 当前 `curseforge-publish.yml` 与 `docs/curseforge-release.md`；manifest 路径不能夹带生产 JAR |
| 正式版本发布 | 当前 `release-publish.yml` 的分支、PR、tag 路径 |
| Maven 发布 | 当前 publishing 配置与 CI；仅执行用户要求的发布目标 |

手动生产构建创建的 JAR PR 是待审阅产物，不是任何源码任务的默认后续步骤。源码合并不自动运行 CI。用户要求只修改源码或不更新 JAR 时，不自行启动构建、跟踪或合并 JAR PR。不能把本地 `copyOutputJars` 当作默认源码验证命令。GameTest 在本地运行，生产构建不重复执行。

## 可复现产物核对

核对 duplicate modId、production mappings、module jar freshness 与 dev/pack parity 等当前要求的 gate；检查实际生成的 zip、类和资源，而不是仅凭文件名/版本判断。发布需使用已完成且成功的正确 CI 运行，不能采用取消、缺失或另一个 SHA 的产物。

读取 release assets 用分页 REST assets endpoint；删除已授权的目标 asset 用 id（包括 `state=starter`），不能依据 `gh release view --json assets` 的有限快照或按名字猜测。
