---
name: gte-release-publish
description: >-
  GregTech Easy (GTE) 正式发版手册：改版本号与 FancyMenu 标题、本机编生产 JAR、
  生成 CurseForge 零 JAR 正式包、本地全量校验与手动上传 CurseForge。
  Use when releasing GTE to CurseForge, bumping pack/module versions, refreshing
  production JARs, or building a local official zero-JAR pack for inspection.
---

# GTE 正式发版（本地构建 + 手动 CurseForge 上传）

旧的 `sync-build.yml` 和 `curseforge-publish.yml` 已经废弃。现在正式发版固定走 4 步：

1. 本机 Gradle 编生产 JAR（只有模块源码变了才编）
2. 本机 `scripts/build_curseforge_pack.py` 打零 JAR CurseForge ZIP
3. 本地跑校验脚本 + 人工过目 ZIP
4. 去 CurseForge 作者后台手动上传模块 JAR 和整合包

完整背景见 [CurseForge 发布指南](../../../docs/curseforge-release.md)，JSON 模板与校验脚本放 [references/release-automation.md](references/release-automation.md)。

## 动手前先对齐 4 件事

- 整合包目标版本号 `<v>`（同步改 FancyMenu 窗口标题 `GregTech Easy <v> Edition`）
- 本次模块源码有没有变（没变就直接复用已提交的 JAR 和已审核 file ID）
- 源码有变时确认 GTECore 版本，以及 **GTM Reborn 版本**（独立 `8.3.x` 版本线，别和整合包版本搞混）
- 官方包名与显示名固定为 `GregTech Easy <v>(Use Java 21).zip`（版本号和 `(` 之间**无空格**）

## 发版步骤

### 1. 摸清当前状态

```powershell
git status -sb; git submodule status; git log --oneline -3
Get-Content gte/pack.toml
Get-Content modules/gtecore/gradle.properties
Get-Content modules/gtm-reborn/gradle.properties
Get-Content modules/gt--/gradle.properties
```

### 2. 改版本号与元数据，直接 commit & push

**模块源码有变更时**，先改对应模块的 `gradle.properties`（`mod_version`），严格编译通过后在子模块里 commit 并 push：

```powershell
$env:JAVA_HOME='C:\Users\Ex_Je\.jdks\ms-21.0.11'
.\gradlew.bat :modules:gtecore:compileJava :modules:gtm-reborn:compileJava -Pwerror --console=plain
```

然后回根仓库更新版本文件和子模块指针：

| 文件 | 改动 |
| --- | --- |
| `gte/pack.toml` | `version = "<v>"` |
| `gte/curseforge_manifest.json` | `"version": "<v>"` |
| `gte/overrides/config/fancymenu/options.txt` | `S:custom_window_title = 'GregTech Easy <v> Edition';` |
| `modules/gtecore` / `modules/gtm-reborn` | 仅模块有变更时同步新 commit 指针 |

跑基础审计后直接 commit & push：

```powershell
python scripts/audit_submodules.py
python scripts/audit_modids.py
python scripts/audit_pack_mappings.py
python scripts/audit_dev_pack_parity.py
python -m unittest discover -s scripts -p test_curseforge_release.py
```

### 3. 本地编生产 JAR 并刷新 `gte/overrides/mods/`（仅模块源码有变更时）

模块源码没动就跳过这一步，直接复用仓库里现有 JAR（记得核对 SHA-256 与 CF 已审核文件一致）。

```powershell
$env:JAVA_HOME='C:\Users\Ex_Je\.jdks\ms-21.0.11'
.\gradlew.bat buildAll -Pwerror --console=plain
.\gradlew.bat copyOutputJars
python scripts/audit_module_jar_freshness.py
python scripts/audit_modids.py
python scripts/audit_pack_mappings.py
python scripts/audit_dev_pack_parity.py
```

检查三件事后再 commit & push `gte/overrides/mods/`：
- 没有 `-slim`、`-dev`、`-sources`、`-all` 中间产物混进去；
- **GT-- 没改代码时别重新打包覆盖**，保留已审核的原字节（重压会导致哈希变掉，无法复用旧 file ID）；
- 记下三个模块 JAR 的 SHA-256。

### 4. 手动上传模块 JAR 到 CurseForge

去 CurseForge 作者后台上传本次更新的模块 JAR，把三个模块（包括未变更、复用的 GT--）的准确 `projectID`、`fileID`、`fileName`、`sha256` 记到 `build/curseforge/<v>/module-release.json`（模板见 [references/release-automation.md](references/release-automation.md)）。

### 5. 在干净 worktree 里打零 JAR 正式包

**别在脏工作区直接打包**：`gte/overrides/` 下可能藏着被 gitignore 的 `config/ftbquests/quests.7z`、`logs/`、`saves/`、`crash-reports/`，会被一起打进 ZIP。

```powershell
git worktree add --detach ..\GTEGroup-build\gte-pack-<v> <releaseCommit>
cd ..\GTEGroup-build\gte-pack-<v>
python scripts/build_curseforge_pack.py <v> --module-release build\curseforge\<v>\module-release.json
```

如果打包对象临时带了未提交改动，`--module-release` 的 Git tree 校验会拦下来，改传显式 ID：

```powershell
python scripts/build_curseforge_pack.py <v> `
  --gtecore-project-id <pid> --gtecore-file-id <fid> `
  --gtm-reborn-project-id <pid> --gtm-reborn-file-id <fid> `
  --gt-minus-project-id <pid> --gt-minus-file-id <fid>
```

打完用 [references/release-automation.md](references/release-automation.md) 里的 `verify-candidate.py` 跑一遍全量检查（ZIP CRC、无重名/反斜杠、全包零 `.jar`、零 `overrides/mods/`、不含垃圾文件、`overrides/` 与干净树逐文件 CRC 一致、`manifest.json` 版本和模组数量吻合），生成回执 `local-candidate-receipt.json`。

### 6. 人工检查后手动上传整合包并验公开下载

检查完 ZIP，去 CurseForge 整合包项目 `1332016` 手动上传 `GregTech Easy <v>(Use Java 21).zip`，记录返回的 `fileID` 到 `build/curseforge/<v>/pack-release-<v>.json`。

等审核通过后，跑 [references/release-automation.md](references/release-automation.md) 里的无 token 公开下载脚本，核对三个模块和整合包公开下载的 SHA-256 全部匹配。

## 真实踩坑清单

1. **包名括号没空格**：`GregTech Easy <v>(Use Java 21).zip`，文件名和 CF 显示名都照这个写。
2. **绝不在脏树打包**：一定用独立 worktree，避免把 `quests.7z`、`logs/`、`saves/`、`crash-reports/` 塞进玩家包里。
3. **GT-- 没变就别动它**：保留原 JAR 字节，直接复用已审核 file ID（复用前核对一次 SHA-256）。
4. **别猜“最新 fileID”**：`module-release.json` 必须填真实上传或已核对 SHA-256 的精确 ID。
5. **审核期 404 很正常**：刚上传完公开下载 404 是 CF 还在审核，等审核通过再验，别重复上传。
6. **别把 Full-Mod / LazyPack 当正式 CF 包**：正式 CF 包必须零 JAR，全部模组走 `manifest.json` pin。

## 本地记录目录

`build/curseforge/<v>/` 已在 `.gitignore` 里，每次发版留好四份记录即可：
- `module-release.json`：三模块 `projectID` / `fileID` / `fileName` / `sha256`
- `local-candidate-receipt.json`：本地 ZIP 校验回执
- `pack-release-<v>.json`：整合包上传记录
- `release-progress.md`（可选）：步骤流水账
