---
name: gte-release-publish
description: >-
  GregTech Easy (GTE) 正式发版流程（本地构建 + 手动 CurseForge 上传）：bump 包版本与
  FancyMenu 标题，必要时本地编译模块 JAR 并刷新 gte/overrides/mods，人工检查后用
  scripts/build_curseforge_pack.py 生成零 JAR 正式包，再手动上传模块 JAR 与整合包到 CurseForge。
  Use when the user asks to 发布/打包 GTE 正式整合包、release GTE x.y.z to CurseForge、
  “本地打包给人工检查”，or refresh production JARs and upload them manually.
---

# GTE 正式发版（本地构建 + 手动 CurseForge 上传）

旧的 `sync-build.yml` / `curseforge-publish.yml` 自动构建和发布链路已弃用。正式发版链路固定为：

1. 本机 Gradle 编译生产模块 JAR（仅模块源码有变更时）；
2. 本机 `scripts/build_curseforge_pack.py` 生成零 JAR CurseForge 包；
3. 人工检查 ZIP；
4. 在 CurseForge 作者后台手动上传模块 JAR 与整合包。

先读 `AGENTS.md` 的 Pack and CI Reference 和 [CurseForge 发布指南](../../../docs/curseforge-release.md)。
实际包版本、模块版本、CF 项目/file ID 以当前源码、已提交 JAR 和作者后台为准，不照抄历史版本号。

## 何时使用

- 用户要求“发布 GTE x.y.z 正式整合包 / 生成正式零 JAR 包 / 本地打包给我人工检查”。
- 需要刷新 `gte/overrides/mods/` 的生产模块 JAR，并手动上传到 CurseForge。
- 不适用于：普通源码修复（用 `gte-workflow`）、仅 Full-Mod/lazypack 包、Maven 发布（未明确要求时）。

## 授权与交付边界

1. 先确认：整合包版本号、GTECore 版本、**GTM Reborn 版本**（独立 `8.3.x` 版本线，必须单独确认）、
   FancyMenu 标题，以及本次是否包含模块源码变更。
2. “打包正式版整合包（无 jar）”= 本机生成 CurseForge 格式 zero-JAR ZIP。正式上传到 CurseForge
   需要用户明确授权；人工检查通过后也只上传用户要求的产物。
3. 模块上传成功只算“已上传”；审核、公开下载校验、整合包发布要分别报告。
4. 不再 dispatch `sync-build.yml` 或 `curseforge-publish.yml`。不要用历史 Actions artifact、
   旧 file ID 或旧版本号冒充本次产物。

## 标准流程

### 0. 状态核对

```powershell
git status -sb; git submodule status; git log --oneline -3
Get-Content gte/pack.toml; Get-Content gte/curseforge_manifest.json
Get-Content modules/gtecore/gradle.properties; Get-Content modules/gtm-reborn/gradle.properties; Get-Content modules/gt--/gradle.properties
```

记录：计划版本、三个模块当前版本、模块 JAR 是否变化、上次已审核的 CF file ID、工作区是否有未提交改动。
有未提交改动时，明确告诉用户本次包是“工作区候选包”，不是某个已提交 commit 的正式产物。

### 1. 模块版本 PR（仅模块源码变更时）

- GTECore：`modules/gtecore/gradle.properties` 的 `mod_version`，base `master`。
- GTM Reborn：`modules/gtm-reborn/gradle.properties` 的 `mod_version = 8.3.x`，base `satou`，版本由用户确认。
- 分支前缀 `codex/release-<version>`；本地严格编译后再开 PR：

```powershell
$env:JAVA_HOME='C:\Users\Ex_Je\.jdks\ms-21.0.11'
.\gradlew.bat :modules:gtecore:compileJava :modules:gtm-reborn:compileJava -Pwerror --console=plain
git diff --check
gh pr create --repo <owner/repo> --base <master|satou> --head codex/release-<v> --title "chore: release ..." --body "..."
gh pr merge <num> --repo <owner/repo> --squash --delete-branch
```

记录两个 squash commit SHA；只有模块源码变化时才需要更新根仓库 gitlink。

### 2. 根仓库发版准备 PR

分支 `codex/release-<version>`，base `main`，只改必要内容：

| 文件 | 改动 |
| --- | --- |
| `gte/pack.toml` | `version = "<v>"` |
| `gte/curseforge_manifest.json` | `"version": "<v>"` |
| `gte/overrides/config/fancymenu/options.txt` | `S:custom_window_title = 'GregTech Easy <v> Edition';` |
| `modules/gtecore`、`modules/gtm-reborn` | 仅在模块源码/版本变化时更新 squash commit |

本地验证：

```powershell
python scripts/audit_submodules.py
python scripts/audit_modids.py
python scripts/audit_pack_mappings.py
python scripts/audit_dev_pack_parity.py
python -m unittest discover -s scripts -p test_curseforge_release.py
git diff --check
```

发布命名固定为 `GregTech Easy <v>(Use Java 21).zip`（版本号与 `(` 之间不留空格），显示名同理。
PR 描述记录验证结果与 squash commit；合并后记录根 commit SHA。

### 3. 本地生产构建与 JAR 刷新（仅模块源码变更时）

不要用 CI 产物。按当前 Gradle 配置选择生产装配任务（例如 `buildAll` / 模块 `build`），
在模块和根仓库 PR 合并后构建、复制并核对：

```powershell
$env:JAVA_HOME='C:\Users\Ex_Je\.jdks\ms-21.0.11'
.\gradlew.bat buildAll -Pwerror --console=plain
.\gradlew.bat copyOutputJars
python scripts/audit_module_jar_freshness.py
python scripts/audit_modids.py
python scripts/audit_pack_mappings.py
python scripts/audit_dev_pack_parity.py
```

- `copyOutputJars` 会把生产 JAR 复制到 `gte/overrides/mods/`；确认没有 `-slim`、`-dev`、
  `-sources`、`-all` 中间产物混入。
- 只保留本次计划替换的模块 JAR。GT-- 未变更时保留已审核的原字节，不要因为重新压缩而换字节。
- 用单独 PR 提交 `gte/overrides/mods/` 的 JAR 变化；记录三个 JAR 的 SHA-256。
- 模块源码未变时跳过本节：直接复用当前已提交 JAR 和其已审核的 CF file ID；使用前必须逐字节
  校验 SHA-256 与当前仓库 JAR 一致。

### 4. 手动上传模块 JAR 到 CurseForge

在 CurseForge 作者后台上传本次变更的模块 JAR（GTECore / GTM Reborn；GT-- 未变则复用已审核文件）。
每次上传后记录：

- `projectID`、`fileID`、`fileName`、`sha256`；
- 上传时间与文件状态（上传成功 ≠ 审核通过）。

把结果写入本地 `build/curseforge/<v>/module-release.json`（或等价记录）。字段至少包括：

```json
{
  "schema": 1,
  "version": "<v>",
  "modpackProject": 1332016,
  "modules": {
    "gtecore": {"projectID": 0, "fileID": 0, "fileName": "gtecore-<...>.jar", "sha256": "<sha256>"},
    "gtm-reborn": {"projectID": 0, "fileID": 0, "fileName": "gtm-reborn-<...>.jar", "sha256": "<sha256>"},
    "gt--": {"projectID": 0, "fileID": 0, "fileName": "gt---<...>.jar", "sha256": "<sha256>"}
  }
}
```

不要猜“最新文件”代替真实上传结果；未变更的 GT-- 也必须记录其准确已审核 file ID。

### 5. 本地零 JAR 正式包

**不要在脏工作区直接打包**：`gte/overrides/` 下可能有被忽略的本地文件
（如 `config/ftbquests/quests.7z`、`logs/`、`crash-reports/`、`saves/`），会被打进包。
用独立干净 worktree 固定到发布源 commit；如果确有未提交的发布改动，先把它们提交/PR，
或在 worktree 中逐项 overlay 并准确记录“工作区候选包”。

```powershell
git worktree add --detach C:\Users\Ex_Je\Documents\GTEGroup-build\gte-pack-<v> <releaseSourceCommit>
cd C:\Users\Ex_Je\Documents\GTEGroup-build\gte-pack-<v>
python scripts/build_curseforge_pack.py <v> --module-release build\curseforge\<v>\module-release.json
```

- 已提交且 `overridesTree` 与记录一致时，优先用 `--module-release`；脚本会校验版本、模块文件名、
  SHA-256 和 `gte/overrides` Git tree。
- 如果包必须包含未提交改动，不能使用 `--module-release`（它要求 Git tree 一致）；改用显式 ID：

```powershell
python scripts/build_curseforge_pack.py <v> `
  --gtecore-project-id <pid> --gtecore-file-id <fid> `
  --gtm-reborn-project-id <pid> --gtm-reborn-file-id <fid> `
  --gt-minus-project-id <pid> --gt-minus-file-id <fid>
```

显式 ID 模式绕过了记录里的 Git tree 校验，必须人工确认本次 ZIP 内容就是用户要检查的候选包。

### 6. 人工检查清单

至少核对：

- ZIP CRC 可读、无重复 entry、无反斜杠 entry；
- `manifest.json` 的 `version`、Minecraft、Forge、Java 正确；
- `manifest.json` 的 Mod 数与 `gte/curseforge_manifest.json` 的第三方 pin + 三个模块一致；
- 全路径零 `.jar`、零 `overrides/mods/`；
- ZIP 的 `overrides/` 条目集合与干净树一致，逐 entry CRC 对比无差异；
- 不含 `quests.7z`、`logs/`、`saves/`、`crash-reports/`；
- 三个模块的 project/file ID 与记录一致，JAR SHA-256 与已上传文件一致；
- 记录 ZIP 绝对路径、字节数、SHA-256、来源 commit（或“工作区候选包”说明）。

建议生成 `build/curseforge/<v>/local-candidate-receipt.json` 保存以上结果。

### 7. 手动上传整合包到 CurseForge

在 CurseForge 作者后台把 ZIP 上传到整合包项目 `1332016`，保存返回的 `fileID` 与公开 URL。
上传后分别检查：

- 文件状态是否审核通过；
- 无 token 公开下载是否能取到；
- 公开文件 SHA-256 是否与本地 ZIP 一致；
- 文件是否为 `GregTech Easy <v>(Use Java 21).zip`。

不把“本地 ZIP 校验通过”称为“已发布”；未完成审核或公开下载时明确标注。

## 关键坑（每次发版都检查）

1. **不再用 CI 发布**：`sync-build.yml` / `curseforge-publish.yml` 已弃用；正式 JAR 与整合包都在
   本机构建、人工上传，不要 dispatch 它们。
2. **GT-- 不要无谓重建**：源码未变时保留已审核字节；复用 file ID 前必须校验整个 JAR 的 SHA-256。
3. **官方包名括号**：`GregTech Easy <v>(Use Java 21).zip`，版本号与 `(` 之间不留空格；
   上传文件名和显示名保持一致。
4. **不在脏树打包**：用独立 worktree；特别注意被忽略的 `quests.7z`、`logs/`、`saves/`、
   `crash-reports/`。工作区候选包要明确标注来源。
5. **模块记录**：手动上传后记录准确 project/file ID、文件名、SHA-256；不要用旧 ID 或
   “最新版本”猜测。
6. **审核等待**：公开下载 404 时整合包不可安装；不要重复上传，也不要宣称已发布。
7. **Full-Mod / LazyPack 不是正式 CF 包**：正式包必须在 overrides 中零 JAR，manifest pin 覆盖全部模组。

## 证据与完成标准

记录放在 `build/curseforge/<v>/`（gitignore，本地保留即可）：

- `release-progress.md`：逐步检查点、commit、CF file ID、人工检查结果。
- `module-release.json`：三个模块的 project/file ID、文件名、SHA-256。
- `local-candidate-receipt.json`：ZIP 路径、字节数、SHA-256、manifest pins、entry 数、检查结果。
- `pack-release-<v>.json`：手动上传后的整合包 file ID、公开 URL、审核/下载校验结果。

完成标准（全部满足才可称“已发布”）：

- [ ] 版本/元数据与模块版本已按用户确认的范围合并。
- [ ] 模块 JAR 已本地构建并通过 mapping/freshness/modId/parity 检查；或确认未变并复用已审核字节。
- [ ] 三个模块 CF file ID、文件名、SHA-256 已记录；需要上传的已手动上传。
- [ ] 本地 zero-JAR 包通过 ZIP/manifest/entry/CRC/0 JAR 检查，回执已保存。
- [ ] 用户要求的上传动作已完成；公开下载与 SHA-256 校验结果单独报告。

## 关联文件

- 发布指南：`docs/curseforge-release.md`
- 打包脚本：`scripts/build_curseforge_pack.py`、`scripts/pack_common.py`
- 上传/校验辅助：`scripts/curseforge_release.py`（公开下载校验）
- 审计：`scripts/audit_modids.py`、`scripts/audit_pack_mappings.py`、
  `scripts/audit_module_jar_freshness.py`、`scripts/audit_dev_pack_parity.py`
- 本地命令模板：[references/release-automation.md](references/release-automation.md)
- 已弃用：`.github/workflows/sync-build.yml`、`.github/workflows/curseforge-publish.yml`
