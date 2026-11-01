# 整合包与发布流程

只在用户明确请求整合包产物、生产 JAR 更新、版本发布或 Maven 发布时使用本流程。机器源码修复、静态分析、测试与技能优化本身不授权这些操作；已有用户授权足够时直接完成，不增加重复确认。

## 先核实当前配置

后续正式包 ZIP 命名为 `GregTech Easy <版本号>(Use Java 21).zip`，发布显示名称为
`GregTech Easy <版本号>(Use Java 21)`，版本号与左括号之间不加空格。发布前核对
打包脚本与 CI 的命名模板一致；已发布的历史文件保持现有名称。

读取 `AGENTS.md` 的 Pack and CI Reference 章节和实际 `.github/workflows/`。正式整合包准备或发布还必须先读 [CurseForge 发布指南](../../../../docs/curseforge-release.md)，再启动构建；不要等到上传时才发现所需产物格式和前置条件。实际 job、分支与版本配置为准，不把历史版本或旧状态说明当成当前事实。

- 模块版本来自各模块 `gradle.properties`；运行依赖来自版本目录和 Gradle 配置。
- `gte/overrides/mods/` 由 CI 装配，禁止手工丢 JAR、编辑第三方 JAR 内部或写回开发 remap 输出。
- 一 modId 一 JAR，读取 `META-INF/mods.toml` 的 `[[mods]]` 段；只接受生产 SRG 构建，排除 `-dev`、`-dev-embeds`、`-sources` 等中间产物。

## 按用户请求选交付

| 请求 | 使用路径 |
| --- | --- |
| 刷新已提交的模块 JAR | 模块源码与根指针经本地验证及 PR 合并后，明确请求时手动运行 sync-build 装配并创建 JAR 刷新 PR；本地核对正确源提交、内容和 Gate 1d，再在已授权范围内合并，无需合并 CI |
| 基于已提交整合包制作 Full-Mod/Server 包 | 当前 `lazypack.yml` 或 `scripts/build_full_mod_pack.py` / `build_server_pack.py`；检查产物内容及相应 pack gates |
| 正式整合包准备 / CurseForge 产物或发布 | 按发布指南完成源码与元数据准备 → CI 构建及 JAR 刷新 PR → CI 上传模块 → 本地零 JAR ZIP → 所需人工验收 → 获授权后发布整合包；用户指定其他格式/平台时按其要求 |
| GitHub 分支 / tag 发布 | 明确请求此目标时检查 `release-publish.yml` 的当前分支、PR、tag 路径；不能代替 CurseForge 模块上传 |
| Maven 发布 | 当前 publishing 配置与 CI；仅执行用户要求的发布目标 |

手动生产构建创建的 JAR PR 是待审阅产物，不是任何源码任务的默认后续步骤。源码合并不自动运行 CI。用户要求只修改源码或不更新 JAR 时，不自行启动构建、跟踪或合并 JAR PR。不能把本地 `copyOutputJars` 当作默认源码验证命令。GameTest 在本地运行，生产构建不重复执行。

## 正式整合包的交付边界

- “先把模块发布成正式 JAR，再打本地包让我检验”授权 CI 构建、JAR 更新 PR、CurseForge 模块上传和本地打包；交付本地验收包后等待用户检验，不自行执行整合包 `stage=pack`、创建 tag 或发布 nightly。
- 本地正式 CurseForge ZIP 使用 `build_curseforge_pack.py --module-release`，所有模组由准确的 project/file ID 安装，全归档零 JAR。LazyPack / Full-Mod 的内置 JAR 包仅在用户要求该格式时使用；不能因为同样有 `manifest.json` 就混淆两种交付。
- 仅完成构建、保存 Actions artifacts、刷新仓库 JAR 或部署 Maven 都不能称为“已发布到 CurseForge”。上传成功后保留 `module-release.json`，不要用旧 ID 或猜测的“最新文件”打包。
- 区分“已上传”“已审核”“公开下载与 SHA-256 验证通过”“ZIP 校验通过”“用户验收通过”“整合包已发布”。404 只能说明尚不可公开下载，网络超时也不能证明审核状态；未完成的下载检查应明确报告，不能宣称可完整安装。
- 用户等待人工检验时，可以先交付已绑定新 ID 的本地 ZIP，并注明审核/下载待完成项。不要长时间轮询审核或重复上传；后续公开发布仍须满足指南中的全部前置条件。

## 可复现产物核对

核对 duplicate modId、production mappings、module jar freshness 与 dev/pack parity 等当前要求的 gate；检查实际生成的 zip、类和资源，而不是仅凭文件名/版本判断。发布需使用已完成且成功的正确 CI 运行，不能采用取消、缺失或另一个 SHA 的产物。

读取 release assets 用分页 REST assets endpoint；删除已授权的目标 asset 用 id（包括 `state=starter`），不能依据 `gh release view --json assets` 的有限快照或按名字猜测。
