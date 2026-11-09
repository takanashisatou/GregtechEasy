# CurseForge 发布（本地构建 + 手动上传）

GTE 正式整合包使用 CurseForge manifest 格式，**任何路径都不允许有 jar**。
所有模组通过 `manifest.json` 中的 `projectID` / `fileID` 安装。

旧的 `sync-build.yml` / `curseforge-publish.yml` 自动构建和发布链路已弃用。
正式发版现在固定为：本机编译生产 JAR → 人工上传模块 JAR → 本机生成零 JAR 包 →
人工检查 → 人工上传整合包。不要 dispatch 这些 workflow 来完成正式发布。

## 从源码到正式整合包

本项目正式整合包默认采用此流程；用户指定其他格式或平台时按其要求。

1. 核对 `main` 的模块 gitlink 与计划发布的源码，确定包版本、三个模块版本、FancyMenu 标题；
   需要的源码、根指针和版本元数据改动先通过 PR 合并。
2. **模块源码有变更时**：本地构建生产 JAR，刷新 `gte/overrides/mods/`，通过单独 PR 合并。
   ```powershell
   $env:JAVA_HOME='C:\Users\Ex_Je\.jdks\ms-21.0.11'
   .\gradlew.bat buildAll -Pwerror --console=plain
   .\gradlew.bat copyOutputJars
   python scripts/audit_module_jar_freshness.py
   python scripts/audit_modids.py
   python scripts/audit_pack_mappings.py
   python scripts/audit_dev_pack_parity.py
   ```
   确认没有 `-slim`、`-dev`、`-sources`、`-all` 中间产物，记录三个 JAR 的 SHA-256。
   **模块源码未变时**：直接复用当前已提交 JAR 和已审核的 CurseForge file ID；使用前校验
   JAR 的 SHA-256 与当前仓库文件完全一致。GT-- 未变时不要因重新压缩而换字节。
3. 在 CurseForge 作者后台**手动上传**本次变更的模块 JAR（GTECore / GTM Reborn；GT-- 未变则复用
   已审核文件）。记录每个模块的 `projectID`、`fileID`、`fileName`、`sha256`，保存到
   `build/curseforge/<版本>/module-release.json`。上传成功不等于审核通过。
4. 用本机脚本生成零 JAR 正式包（见下节）。
5. 人工检查 ZIP（见检查清单），保存候选包 receipt。
6. 在 CurseForge 作者后台把 ZIP 手动上传到整合包项目 `1332016`，保存返回的 `fileID` 和公开 URL。
7. 审核通过后，用无 token 公开下载校验模块和整合包的 SHA-256；分别报告审核、公开下载、
   本地 ZIP 校验和最终发布结果。

## 模块与包记录

`build/curseforge/<版本>/module-release.json` 至少包含：

```json
{
  "schema": 1,
  "version": "<版本>",
  "modpackProject": 1332016,
  "modules": {
    "gtecore": {"projectID": 0, "fileID": 0, "fileName": "gtecore-<...>.jar", "sha256": "<sha256>"},
    "gtm-reborn": {"projectID": 0, "fileID": 0, "fileName": "gtm-reborn-<...>.jar", "sha256": "<sha256>"},
    "gt--": {"projectID": 0, "fileID": 0, "fileName": "gt---<...>.jar", "sha256": "<sha256>"}
  }
}
```

未变更的模块也必须写入准确已审核 file ID；不要用“最新文件”或旧版本号代替真实上传结果。

## 本地零 JAR 正式包

不要在脏工作区直接打包：`gte/overrides/` 下可能有被忽略的本地文件
（`config/ftbquests/quests.7z`、`logs/`、`crash-reports/`、`saves/`），会被打进 ZIP。
优先在独立干净 worktree 中固定到发布源 commit：

```powershell
git worktree add --detach C:\Users\Ex_Je\Documents\GTEGroup-build\gte-pack-<版本> <releaseSourceCommit>
cd C:\Users\Ex_Je\Documents\GTEGroup-build\gte-pack-<版本>
python scripts/build_curseforge_pack.py <版本> --module-release build\curseforge\<版本>\module-release.json
```

`--module-release` 会校验版本、模块文件名、SHA-256 以及 `gte/overrides` 的 Git tree。
如果包必须包含未提交改动，Git tree 校验不会通过；改用显式 ID：

```powershell
python scripts/build_curseforge_pack.py <版本> `
  --gtecore-project-id <pid> --gtecore-file-id <fid> `
  --gtm-reborn-project-id <pid> --gtm-reborn-file-id <fid> `
  --gt-minus-project-id <pid> --gt-minus-file-id <fid>
```

显式 ID 模式需要人工确认模块 JAR 与已上传文件哈希一致，并且 ZIP 内容就是待检查候选包。

## 人工检查清单

- ZIP CRC 可读，无重复 entry、无反斜杠 entry；
- `manifest.json` 的包版本、Minecraft、Forge、Java 正确；
- `manifest.json` 的模组数量 = 第三方 manifest pin 数 + 三个模块；
- 全路径零 `.jar`、零 `overrides/mods/`；
- ZIP 的 `overrides/` 条目集合与干净树一致，逐 entry CRC 对比无差异；
- 不含 `quests.7z`、`logs/`、`saves/`、`crash-reports/`；
- 三个模块的 project/file ID 与记录一致，JAR SHA-256 与已上传文件一致；
- 记录 ZIP 绝对路径、字节数、SHA-256、来源 commit（或“工作区候选包”说明）。

建议把结果保存为 `build/curseforge/<版本>/local-candidate-receipt.json`。
只有本地 ZIP 校验通过、模块已上传且公开下载可验证、整合包已手动上传并审核通过后，
才能称为“已发布”。

## 正式包命名

正式包 ZIP 统一使用 `GregTech Easy <版本号>(Use Java 21).zip`，发布显示名称
使用 `GregTech Easy <版本号>(Use Java 21)`。例如 `GregTech Easy 3.1.1(Use Java 21).zip`；
保留名称中的空格，版本号与左括号之间不加空格。

已发布的历史文件保持现有名称。Full-Mod 与 CurseForge 包可能使用相同文件名，
若同时制作，应放在不同目录，避免互相覆盖。

## 项目 ID

| 项目 | Project ID |
| --- | --- |
| GregTech Easy 整合包 | 1332016 |
| GTE Core | 1332244 |
| GregTech Modern Reborn | 1347911 |
| GT-- Community Edition | 1353895 |

手动上传使用 CurseForge 作者后台，不需要把 token 写入仓库。不要在聊天或代码中硬编码凭据。

## 清单 pin 规则

`gte/curseforge_manifest.json` 的每个第三方文件必须有 `projectID`、`fileID`、`fileName` 和
`sha256`，并与 `gte/overrides/mods/` 中的实际字节一致。更新第三方 jar 时必须同时更新这四个字段；
遗漏、重复、文件名漂移或哈希不一致都会让打包失败。清单只存元数据，不会把 jar 放进整合包。

## 已弃用与保留的 workflow

- `sync-build.yml`：已弃用。不要用它构建正式 JAR 或创建 JAR 刷新 PR。
- `curseforge-publish.yml`：已弃用。模块和整合包上传改为人工完成。
- `release-publish.yml`：独立的分支/tag 发布操作，仅在用户明确要求时使用，不能代替本地打包与手动上传。
- `lazypack.yml` / `build_full_mod_pack.py`：只用于 Full-Mod/离线/服务端等内置 JAR 包，
  不是正式 CurseForge zero-JAR 包的替代品。
