---
name: gte-release-publish
description: >-
  GregTech Easy (GTE) 正式发版流程: bump GTECore / GTM Reborn 模块版本、FancyMenu 标题与根仓库包元数据,
  PR + squash merge, 手动生产构建并刷新 JAR, CurseForge 模块上传(GT-- 复用), 等待审核,
  构建零 JAR 的 CurseForge 正式整合包并完成 stage=pack 发布与公开下载校验。Use when the user asks to
  发布/打包 GTE 正式整合包、release GTE x.y.z to CurseForge、刷新生产 JAR 并上传 CF、
  “按 CurseForge CI 流程发版”, or publish module jars + official modpack.
---

# GTE 正式发版（CurseForge CI 流程）

这是 GTE 的正式发版 runbook，来自 3.1.5 实际发布过程。先读 `AGENTS.md` 的 Pack and CI Reference
和 [CurseForge 发布指南](../../../docs/curseforge-release.md)，再按本技能执行；实际 workflow 输入、
模块版本和远端状态以当前源码/仓库为准，不照抄历史版本号。

## 何时使用

- 用户要求“发布 GTE x.y.z 正式整合包 / 按 CurseForge CI 流程发版 / 发布模块 JAR + 正式包（无 jar）”。
- 需要更新 `gte/overrides/mods/` 的生产 JAR、推动 CurseForge 模块与整合包发布。
- 不适用于：普通源码修复（用 `gte-workflow`）、仅本地 Full-Mod/lazypack 包、Maven 发布（未明确要求时）。

## 授权与交付边界

1. 确认本次发版的：整合包版本号、GTECore 版本、**GTM Reborn 版本**（GTM 有独立 `8.3.x` 版本线，
   必须与用户确认，例如 3.1.5 对应 GTECore 3.1.5 / GTM 8.3.4）、FancyMenu 标题文字。
2. “打包正式版整合包（无 jar）”= 生成 CurseForge 格式的 zero-JAR 正式包；公开发布（stage=pack）
   需要用户明确授权，且三个模块文件已通过 CurseForge 审核、公开可下载。
3. 模块上传成功只算“已上传”；审核、公开下载校验、整合包发布要分别报告，不能混为“已发布”。
4. 明确排除的历史遗留工作（例如别的 agent 未完成的旧版本 PR/构建）不要接管、不要合并。

## 标准流程

### 0. 进入状态核对

```powershell
git status -sb; git submodule status; git log --oneline -3
Get-Content gte/pack.toml; Get-Content modules/gtecore/gradle.properties; Get-Content modules/gtm-reborn/gradle.properties
gh run list --limit 10 --json databaseId,workflowName,status,conclusion,createdAt
gh pr list --state open
```

记录：上次已发布的版本/文件、当前 main、模块远端分支（GTECore `master`、GTM `satou`、根 `main`）、
是否有仍在跑的旧构建/待合并 PR。**不要**把旧版本号或旧状态说明当成当前事实。

### 1. 模块版本 PR（各自仓库，squash merge）

- GTECore：`modules/gtecore/gradle.properties` 的 `mod_version = <整合包版本>`，base `master`。
- GTM Reborn：`modules/gtm-reborn/gradle.properties` 的 `mod_version = 8.3.x`，base `satou`，
  版本由用户确认（不要默认等于整合包版本）。
- 分支前缀 `codex/release-<version>`；本地严格编译后再开 PR：

```powershell
$env:JAVA_HOME='C:\Users\Ex_Je\.jdks\ms-21.0.11'
.\gradlew.bat :modules:gtecore:compileJava :modules:gtm-reborn:compileJava -Pwerror --console=plain
.\gradlew.bat :modules:gtecore:properties :modules:gtm-reborn:properties -q |
  Select-String '^(mod_id|mod_version):'
git diff --check
gh pr create --repo <owner/repo> --base <master|satou> --head codex/release-<v> --title "chore: release ..." --body "..."
gh pr merge <num> --repo <owner/repo> --squash --delete-branch
```

记录两个 squash commit SHA——下一步要用它们钉根仓库指针。

### 2. 根仓库发版准备 PR

分支 `codex/release-<version>`，base `main`，只改必要内容：

| 文件 | 改动 |
| --- | --- |
| `gte/pack.toml` | `version = "<v>"` |
| `gte/curseforge_manifest.json` | `"version": "<v>"` |
| `gte/overrides/config/fancymenu/options.txt` | `S:custom_window_title = 'GregTech Easy <v> Edition';` |
| `modules/gtecore`、`modules/gtm-reborn` | 更新为第 1 步的 squash commit |

本地验证（此时 JAR 还是旧的，freshness 预期失败，不要当成错误）：

```powershell
python scripts/audit_submodules.py
python scripts/audit_modids.py
python scripts/audit_pack_mappings.py
python scripts/audit_dev_pack_parity.py
python -m unittest discover -s scripts -p test_curseforge_release.py
git diff --check
```

PR 描述记录验证结果与 squash commit；合并后记录根 commit SHA。发布命名固定为
`GregTech Easy <v>(Use Java 21).zip`（版本号与 `(` 之间不留空格），显示名同理。

### 3. 生产构建与 JAR 刷新 PR

手动 dispatch `sync-build.yml`（release 通道自带严格编译，JAR 刷新 PR 由它自动创建）：

```powershell
gh workflow run sync-build.yml --repo takanashisatou/GregtechEasy --ref main `
  -f channel=release -f version=<v> -f werror=false -f runner=windows-latest
# 拿到 run id 后
gh run watch <runId> --repo takanashisatou/GregtechEasy --exit-status
```

成功后会创建 `chore/refresh-module-jars-<runId>` PR。**审阅并保留 GT-- 的原字节**：
CI 会重建 GT--，即使源码未变字节也可能不同；把已审核的 GT-- 文件从 main 还原回来，
否则无法复用已发布 file ID（GT-- 不需要改）。

```powershell
git fetch origin chore/refresh-module-jars-<runId>
git checkout -B codex/refresh-<v> origin/chore/refresh-module-jars-<runId>
git checkout origin/main -- gte/overrides/mods/gt---*.jar
git commit -m "chore(pack): keep approved GT-- production bytes in the <v> refresh"
git push origin HEAD:chore/refresh-module-jars-<runId>
python scripts/audit_module_jar_freshness.py
python scripts/audit_modids.py; python scripts/audit_pack_mappings.py
```

预期 diff 只有：`gtecore-*.jar`、`gtm-reborn-*.jar` 两个替换，GT-- 不变。
用户允许时可跳过 PR CI 检查直接 squash merge；记录合并 commit、三个 jar 的 SHA-256。

### 4. CurseForge 模块上传（stage=modules）

用 GitHub Actions API dispatch（changelog 多行时比 `-f` 更稳；一次只 dispatch 一次）：

```powershell
$payload = @{ ref='main'; inputs=@{
  stage='modules'; version='<v>'; channel='release'
  reuse_gt_minus_file_id='<已审核 GT-- fileID>'
  changelog=(Get-Content build/curseforge/<v>/changelog.md -Raw)
} } | ConvertTo-Json -Depth 6
$payload | Out-File build/curseforge/<v>/dispatch-modules.json -Encoding utf8
gh api --method POST repos/takanashisatou/GregtechEasy/actions/workflows/curseforge-publish.yml/dispatches `
  --input build/curseforge/<v>/dispatch-modules.json
```

- 只上传 GTECore 与 GTM；GT-- 复用已审核 file ID（prepare 步骤会做公开 SHA-256 校验）。
- 成功后保存 run ID，并下载发布记录（**这是 GitHub Actions artifact，不是 CurseForge jar**）：

```powershell
gh run download <runId> --name curseforge-module-release --dir build/curseforge/<v>/run-<runId>
```

记录 `module-release.json` 中的 project/file ID、SHA-256、`sourceCommit`、`overridesTree`。
中途失败/超时先查 run 列表和已有记录，不要盲目重跑导致重复上传。

### 5. 等待 CurseForge 审核（不要反复下载 jar）

审核通过前，新模块的公开下载接口返回 404，整合包里的这些 CF ID 暂时不可安装——这是正常状态。
用无 token 的公开下载做被动轮询（每 2–3 分钟），通过后再继续：

```powershell
python build/curseforge/<v>/watch_moderation.py   # 见 references/release-automation.md 模板
# 直到三个模块 public download 都能取到且 SHA-256 与记录一致
```

等待期间不要重复上传、不要改版本号、不要尝试 stage=pack。超过 ~30–60 分钟仍 404 就向用户报告状态。

### 6. 本地 CurseForge 格式正式包（zero-JAR）

**不要在脏工作区打包**：`gte/overrides/` 下可能有被忽略的本地文件（如 `config/ftbquests/quests.7z`、
`logs/`、`crash-reports/`），会被打进包。用独立干净 worktree 固定到发布源 commit：

```powershell
git worktree add --detach C:\Users\Ex_Je\Documents\GTEGroup-build\gte-pack-<v> <releaseSourceCommit>
cd C:\Users\Ex_Je\Documents\GTEGroup-build\gte-pack-<v>
python scripts/build_curseforge_pack.py <v> --module-release <record.json>
```

校验产物（见 references 的 verify 模板）：ZIP CRC、条目集合等于干净树的 overrides、100 个 manifest pins、
0 个 JAR、版本/MC/Forge/Java、module 记录 SHA 一致；生成 receipt 并复制到
`build/artifacts/GregTech Easy <v>(Use Java 21).zip`。把路径、字节数、SHA-256、run/file ID 交给用户。

### 7. 正式整合包发布（stage=pack）

前置：三个模块文件已审核且公开可下载；用户明确授权发布整合包。dispatch：

```powershell
$payload = @{ ref='main'; inputs=@{
  stage='pack'; version='<v>'; channel='release'
  module_release_run_id='<modules run id>'; modules_approved='true'
  changelog=(Get-Content build/curseforge/<v>/changelog.md -Raw)
} } | ConvertTo-Json -Depth 6
$payload | Out-File build/curseforge/<v>/dispatch-pack.json -Encoding utf8
gh api --method POST repos/takanashisatou/GregtechEasy/actions/workflows/curseforge-publish.yml/dispatches `
  --input build/curseforge/<v>/dispatch-pack.json
```

确认 stage=pack run 成功，并从日志读取返回的整合包 file ID：

```powershell
gh run view <packRunId> --repo takanashisatou/GregtechEasy --log | Select-String 'CurseForge pack file ID'
gh run download <packRunId> --name GTE-CurseForge-<v> --dir build/curseforge/<v>/pack-run-<packRunId>
```

最终校验：CI artifact 与本地候选包逐 entry CRC 一致；用无 token 公开下载整合包文件，与 CI artifact
逐字节一致（字节数 + SHA-256）。记录 URL：
`https://www.curseforge.com/minecraft/modpacks/gregtech-easy/files/<fileID>`。

## 关键坑（每次发版都检查）

1. **GT-- 不要改**：源码不变时 CI 重建也可能换字节；必须从 main 还原已审核字节，
   `reuse_gt_minus_file_id` 才合法（要求整个 JAR SHA-256 相同，不能只比文件名）。
2. **官方包名括号会被 mc-publish 当 glob**：`GregTech Easy <v>(Use Java 21).zip` 直接写进
   `files:` 会报 `No files found for the specified glob`。workflow 中使用
   `build/artifacts/GregTech Easy ${{ inputs.version }}?Use Java 21?.zip`（`?` 匹配字面括号，
   上传文件名保持不变）。改动 workflow 需 PR + squash merge。
3. **审核等待**：公开下载 404 时整合包不可安装；不要重传、不要提前 stage=pack。
4. **一次 dispatch 原则**：每个 stage 只发一次；响应不明确时先 `gh run list` 查，再决定是否补发。
5. **本机网络**：GitHub/CurseForge 访问不稳时用本地代理 `http://127.0.0.1:10808`
   （`$env:HTTPS_PROXY` / `$env:HTTP_PROXY`），并对 `gh`/`git` 调用加重试；TLS timeout 不是发布失败。
6. **不在脏树打包**：用独立 worktree；本地与 CI 的 ZIP 字节可能因 Python/zlib 版本不同而不同，
   但条目集合与 CRC 必须一致。发布以 CI artifact / CF 公开文件为准。
7. **Merge 方式**：模块/根仓库/刷新 PR 用 squash merge；用户明确说跳过 CI 检查时不要等 PR checks，
   但仍然要保留本地必需验证与准确 SHA/run ID 证据。
8. **Full-Mod / LazyPack 不是正式 CF 包**：正式包必须在 overrides 中零 JAR、100 个 manifest pins。

## 证据与完成标准

所有记录放 `build/curseforge/<v>/`（被 gitignore，保留本地即可）：

- `release-progress.md`：逐步检查点（PR/commit/run ID/审核状态/失败原因）。
- `run-<modulesRunId>/module-release.json`：模块 file ID + SHA + source/overrides tree。
- `pack-run-<packRunId>/…`：CI 正式包 artifact。
- `pack-release-<v>.json`、`local-candidate-receipt.json`：最终发布记录与本地候选回执。
- `changelog.md`、`dispatch-*.json`、`moderation-watch.log`。

完成标准（全部满足才可称“已发布”）：

- [ ] 模块版本已合并并构建出生产 JAR；刷新 PR 只替换 GTECore/GTM，GT-- 字节不变。
- [ ] modules stage run 成功，记录三个准确 file ID。
- [ ] 三个模块公开下载均可取到且 SHA-256 与记录一致。
- [ ] 本地 CF 格式 zero-JAR 包验证通过（100 pins、0 JAR、版本正确）。
- [ ] 用户授权后 pack stage run 成功，返回整合包 file ID。
- [ ] 整合包公开下载与 CI artifact 字节一致；报告 CF URL、file ID、字节数、SHA-256、run ID。

## 关联文件

- 发布指南：`docs/curseforge-release.md`
- 工作流：`.github/workflows/sync-build.yml`、`.github/workflows/curseforge-publish.yml`
- 脚本：`scripts/curseforge_release.py`、`scripts/build_curseforge_pack.py`
- 审计：`scripts/audit_modids.py`、`scripts/audit_pack_mappings.py`、
  `scripts/audit_module_jar_freshness.py`、`scripts/audit_dev_pack_parity.py`
- 自动化片段：[references/release-automation.md](references/release-automation.md)
