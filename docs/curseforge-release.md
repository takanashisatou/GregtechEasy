# CurseForge 发布

此流程使用 `main` 中已经提交、通过生产映射和新鲜度检查的三个生产 jar。
`sync-build.yml` 负责构建、数据生成和 jar 刷新 PR；发布时不会重新编译另一套产物。
最终 CurseForge 整合包中 **任何路径都不允许有 jar**。所有模组通过
`manifest.json` 中的 `projectID` / `fileID` 安装。

项目默认值来自已有公开项目：

| 项目 | Project ID |
| --- | --- |
| GregTech Easy 整合包 | 1332016 |
| GTE Core | 1332244 |
| GregTech Modern Reborn | 1347911 |
| GT-- Community Edition | 1353895 |

上传凭据放在 GitHub 仓库 secret `CURSEFORGE_TOKEN` 中。现有 token 不需要
发到聊天或写入代码。更新凭据时使用仓库 Settings → Secrets and variables →
Actions。本文流程不需要额外的 CurseForge Core API key。

## 检查

手动运行 `CurseForge Publish (two stages)`，选择 `stage=check`，填写计划版本号。
此阶段不上传任何文件：检查生产 jar、模块来源版本、97 个第三方文件的
SHA-256 清单和完整覆盖率，准备三个模块的发布记录。

`gte/curseforge_manifest.json` 的第三方文件来自已发布的 2.2.5 包，并逐个
通过公开下载验证与当前仓库 jar 完全一致。更新第三方 jar 时必须同时更新
对应的 project ID、file ID、文件名和 SHA-256；遗漏、重复或版本漂移都会失败。
这份清单只存元数据，不会把下载的 jar 放进 CurseForge 整合包。

## 第一阶段：上传三个模块

1. 确认模块 PR、根仓库指针 PR 和 jar 刷新 PR 已合并，使用 `main`。
2. 运行同一 workflow，选择 `stage=modules`，填写版本号、release/beta/alpha
   和更新日志。此阶段只上传三个生产 jar，不构建或上传整合包。
3. 保存成功运行的 Actions run ID。运行产物 `curseforge-module-release`
   包含 `module-release.json`，记录三个返回的 file ID、project ID、文件名、
   SHA-256、来源提交和整合包 overrides 的 Git tree。记录保留 90 天。
4. 在 CurseForge 作者后台等待三个文件全部审核通过。上传接口返回 file ID
   只说明收到了文件，不能据此视为可安装版本。

如果上传中途失败，仍会保留已返回的 file ID。先检查作者后台和发布记录，
不要盲目重跑导致重复上传；第二阶段拒绝缺失任一模块 file ID 的记录。

## 第二阶段：审核后发布整合包

1. 三个模块文件均审核通过后，选择 `stage=pack`，填写第一阶段成功的 run ID，
   使用相同版本号，并勾选 `modules_approved`。这个勾选代表作者已核实审核结果，
   工作流不会把“上传成功”自动当作“审核通过”。
2. 工作流取回第一阶段的记录，确认当前包内容未变更，然后在 **不携带作者 token**
   的情况下通过 CurseForge 公开文件下载接口下载三个模块和其余全部第三方文件，
   跟随官方 CDN 跳转并逐个验证 SHA-256。这证明外部能够取得与发布记录相同的文件；
   若审核或公开分发尚未就绪，此步骤失败，整合包不会上传。
3. 使用记录中的准确 file ID 生成 manifest，构建 ZIP，并扫描所有路径拒绝
   `.jar`（包括大写扩展名）。归档经检查并保存为 Actions 产物后，才上传到
   整合包项目 `1332016`。

如果等待审核期间 `gte/overrides` 已改变，第二阶段会拒绝使用新内容拼出与
第一阶段不匹配的包。可从发布记录中的 `sourceCommit` 恢复该版本，或准备
新的发布；不要把旧文件 ID 改成“最新版本”代替实际上传结果。

本流程没有定时发布或在单次 CI 中长时间轮询审核。两个阶段由作者明确启动，
审核通过之前不会自动上传整合包。
