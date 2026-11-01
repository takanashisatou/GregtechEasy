# CurseForge 发布

此流程使用 `main` 中已经提交、通过生产映射和新鲜度检查的三个生产 jar。
`sync-build.yml` 负责构建、数据生成和 jar 刷新 PR；发布时不会重新编译另一套产物。
最终 CurseForge 整合包中 **任何路径都不允许有 jar**。所有模组通过
`manifest.json` 中的 `projectID` / `fileID` 安装。

## 从源码到正式整合包

本项目正式整合包默认采用此流程，用户指定其他格式或平台时按其要求。
“先发布更新后的模块 JAR，再打本地包让我人工检验”包含 CI 上传模块到 CurseForge，
交付点是本地验收 ZIP；整合包公开上传留待用户验收和发布授权后执行。

1. 核对 `main` 的模块 gitlink 与计划发布的源码，先完成必要的模块及根指针 PR。
   在构建前确定包版本、模块各自的 `gradle.properties` 版本、包元数据与命名模板，
   将所需改动通过 PR 合并。包版本不自动改写所有模块版本；版本号相同也不能证明 JAR 是最新源码。
2. 手动运行 `sync-build.yml`，正式构建使用 `channel=release` 和计划包版本。
   核对来源 SHA、数据生成、生产装配和整个运行的最终成功结果。
3. 复核其 JAR 刷新 PR：只保留计划更新的产物，在本地运行重复 modId、生产映射、
   模块新鲜度和 dev/pack parity 检查后合并。后续上传消费这些已提交的相同字节，
   不另行本地编译或替换 JAR。
4. 执行下述模块上传阶段，保存成功运行的 ID 和 `module-release.json`。
5. 使用上传记录制作下述本地验收包，交付 ZIP、来源提交、哈希和验证结果。
   用户要求人工检验时在此交付，不运行整合包上传阶段。
6. 满足模块审核、公开下载验证、所需人工验收及发布授权后，执行整合包上传阶段。

`sync-build.yml` 的产物和 JAR 刷新 PR 不等于 CurseForge 上传。
`lazypack.yml` / `build_full_mod_pack.py` 生成内置 JAR 的 Full-Mod 包，
`release-publish.yml` 操作分支和 tag；它们均不能替代本流程的模块上传与零 JAR 打包。

## 正式包命名

后续正式包 ZIP 统一使用 `GregTech Easy <版本号>(Use Java 21).zip`，发布显示名称
使用 `GregTech Easy <版本号>(Use Java 21)`。例如 `GregTech Easy 3.1.1(Use Java 21).zip`；
保留名称中的空格，版本号与左括号之间不加空格。

核对打包脚本与 CI 的命名模板一致；已发布的历史文件保持现有名称。
Full-Mod 与 CurseForge 包可能使用相同文件名，若同时制作，应放在不同目录，避免互相覆盖。

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

需要单独预检时，手动运行 `CurseForge Publish (two stages)`，选择 `stage=check`，填写计划版本号。
此阶段不上传任何文件；`stage=modules` 也会执行相同前置检查：检查生产 jar、模块来源版本、清单中第三方文件的
SHA-256 清单和完整覆盖率，准备三个模块的发布记录。

`gte/curseforge_manifest.json` 的第三方文件来自已发布的 2.2.5 包，并逐个
通过公开下载验证与当前仓库 jar 完全一致。更新第三方 jar 时必须同时更新
对应的 project ID、file ID、文件名和 SHA-256；遗漏、重复或版本漂移都会失败。
这份清单只存元数据，不会把下载的 jar 放进 CurseForge 整合包。

## 第一阶段：上传三个模块

1. 确认模块 PR、根仓库指针 PR 和 jar 刷新 PR 已合并，使用 `main`。
2. 运行同一 workflow，选择 `stage=modules`，填写版本号、release/beta/alpha
   和更新日志。此阶段只上传三个生产 jar，不构建或上传整合包。
   若 GT-- 没有变更，可填写 `reuse_gt_minus_file_id`，复用已审核文件。准备阶段会
   公开下载该文件并核对当前已提交 GT-- JAR 的 SHA-256；一致后跳过 GT-- 上传，
   仍在发布记录中保存其准确 file ID，只上传 GTECore 和 GTM-Reborn。
   复用要求整个 JAR 的 SHA-256 相同，不能只比较文件名、版本或解压后的文件内容。
   若未修改模块仅因重新压缩而产生不同字节，可在 JAR 刷新 PR 中保留原已审核产物，
   经新鲜度检查后复用；不要将新字节绑定到旧 file ID。
3. 保存成功运行的 Actions run ID。运行产物 `curseforge-module-release`
   包含 `module-release.json`，记录三个返回的 file ID、project ID、文件名、
   SHA-256、来源提交和整合包 overrides 的 Git tree。记录保留 90 天。
4. 在 CurseForge 作者后台等待三个文件全部审核通过。上传接口返回 file ID
   只说明收到了文件，不能据此视为可安装版本。

如果上传中途失败，仍会保留已返回的 file ID。先检查作者后台和发布记录，
不要盲目重跑导致重复上传；第二阶段拒绝缺失任一模块 file ID 的记录。

## 本地验收包（不上传整合包）

模块上传成功后，下载该运行的 `curseforge-module-release` artifact 到独立目录。
使用其中的原始记录打包。在仓库根目录先将 `$packVersion` 设为计划版本，
`$moduleRecord` 设为该 `module-release.json` 的本地路径，再执行：

```powershell
python scripts/build_curseforge_pack.py "$packVersion" --module-release "$moduleRecord"
python scripts/curseforge_release.py verify --record "$moduleRecord"
```

打包会核对记录版本、overrides Git tree、模块文件名及 SHA-256，并使用返回的准确 ID。
同时检查工作区配置是否与记录一致；不要把未提交的配置改动混进验收包却仍声称对应原提交。
核对 ZIP CRC、Minecraft/Forge/Java 与包版本、全部模组引用和全归档零 JAR，保存 ZIP SHA-256。
交付绝对路径、来源提交、模块上传 run ID / file ID 以及实际完成的检查结果。

本地 ZIP 可以先于审核完成生成。公开下载检查须不携带作者 token，并逐个校验清单文件哈希。
上传返回 ID 不证明审核通过；404 表示文件尚不可公开取得，超时表示该次网络验证未完成。
若存在待审核或未通过/未完成的下载项，应注明“本地包已生成，完整安装尚未验证”，
不能仅凭 ZIP 校验通过称为可安装。等待审核不需要反复上传或长时间轮询。

## 第二阶段：审核后发布整合包

1. 获得整合包发布授权、完成用户要求的人工验收且三个模块文件均审核通过后，选择 `stage=pack`，填写第一阶段成功的 run ID，
   使用相同版本号，并勾选 `modules_approved`。这个勾选代表作者已核实审核结果，
   工作流不会把“上传成功”自动当作“审核通过”。
2. 工作流取回第一阶段的记录，确认当前包内容未变更，然后在 **不携带作者 token**
   的情况下通过 CurseForge 公开文件下载接口下载三个模块和其余全部第三方文件，
   跟随官方 CDN 跳转并逐个验证 SHA-256。这证明外部能够取得与发布记录相同的文件；
   若审核或公开分发尚未就绪，此步骤失败，整合包不会上传。
3. 使用记录中的准确 file ID 生成 manifest，构建 ZIP，并扫描所有路径拒绝
   `.jar`（包括大写扩展名）。归档经检查并保存为 Actions 产物后，才上传到
   整合包项目 `1332016`。

如果等待审核期间配置已改变，先在本地打包并由用户测试。用户确认后，第二阶段
可填写该测试包的 `tested_pack_commit`：当前整个 `gte/` Git tree 必须与该提交
一致，三个模块仍按原始上传记录核对文件名、SHA-256 和准确 file ID，无需重新
上传未变更的 JAR。原始模块上传记录保持不变。不填写时，仍要求 overrides 与
上传时一致。不要把旧文件 ID 改成“最新版本”代替实际上传结果。

本流程没有定时发布或在单次 CI 中长时间轮询审核。两个阶段由作者明确启动，
审核通过之前不会自动上传整合包。
