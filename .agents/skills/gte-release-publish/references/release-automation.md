# 发版自动化片段（本地构建 + 手动上传）

正式发版已改为本机编译、本机零 JAR 打包、人工检查后手动上传 CurseForge。
本文件只保留本地 PowerShell / Python 片段，不再包含 `sync-build.yml` 或
`curseforge-publish.yml` 的 dispatch、run 轮询或 CI artifact 下载步骤。

## 本地环境

```powershell
$env:JAVA_HOME='C:\Users\Ex_Je\.jdks\ms-21.0.11'
# 访问 GitHub / CurseForge 不稳时再设置本地代理
# $env:HTTPS_PROXY='http://127.0.0.1:10808'; $env:HTTP_PROXY=$env:HTTPS_PROXY
```

## 本地生产构建与审计

仅在模块源码有变更时执行；模块未变时复用当前已提交 JAR 和已审核 CF file ID。

```powershell
.\gradlew.bat buildAll -Pwerror --console=plain
.\gradlew.bat copyOutputJars
python scripts/audit_module_jar_freshness.py
python scripts/audit_modids.py
python scripts/audit_pack_mappings.py
python scripts/audit_dev_pack_parity.py
git diff --check
```

- 确认 `gte/overrides/mods/` 里只有计划替换的生产 JAR；排除 `-slim`、`-dev`、`-sources`、`-all`。
- 记录三个模块 JAR 的 SHA-256；GT-- 未变时保留已审核字节。
- 用单独 PR 提交 JAR 刷新，合并后再进入打包。

## 模块上传记录（手动上传后填写）

```powershell
$v='3.1.5.5'
New-Item -ItemType Directory -Force "build/curseforge/$v" | Out-Null
```

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

保存为 `build/curseforge/<v>/module-release.json`。未变更的模块也必须记录其准确已审核 file ID。

## 本地零 JAR 正式包

优先在干净 worktree 中打包，避免 `gte/overrides/config/ftbquests/quests.7z`、`logs/`、
`crash-reports/`、`saves/` 等本地文件进入 ZIP：

```powershell
git worktree add --detach C:\Users\Ex_Je\Documents\GTEGroup-build\gte-pack-<v> <releaseSourceCommit>
cd C:\Users\Ex_Je\Documents\GTEGroup-build\gte-pack-<v>
python scripts/build_curseforge_pack.py <v> --module-release build\curseforge\<v>\module-release.json
```

如果包必须包含未提交改动，`--module-release` 的 Git tree 校验会失败；改用显式 ID：

```powershell
python scripts/build_curseforge_pack.py <v> `
  --gtecore-project-id <pid> --gtecore-file-id <fid> `
  --gtm-reborn-project-id <pid> --gtm-reborn-file-id <fid> `
  --gt-minus-project-id <pid> --gt-minus-file-id <fid>
```

显式 ID 模式仍需人工确认：模块 JAR 的 SHA-256 与已上传 CF 文件一致，ZIP 内容就是待检查候选包。

## 本地 ZIP 校验骨架

放到 worktree 的 `build/curseforge/<v>/verify-candidate.py`；`parents[3]` 为 worktree 根。

```python
from pathlib import Path
import hashlib, json, subprocess, sys, zipfile, zlib

VERSION = "<v>"
workspace = Path(__file__).resolve().parents[3]
catalog = json.loads((workspace / "gte/curseforge_manifest.json").read_text(encoding="utf-8"))
sys.path.insert(0, str(workspace / "scripts"))
from build_curseforge_pack import should_skip_override

archive = workspace / "build/artifacts" / f"GregTech Easy {VERSION}(Use Java 21).zip"
record = json.loads(Path(sys.argv[1]).read_text(encoding="utf-8"))
expected_pins = {(row["projectID"], row["fileID"]) for row in [*catalog["files"], *record["modules"].values()]}

with zipfile.ZipFile(archive) as pack:
    assert pack.testzip() is None
    names = pack.namelist()
    assert len(set(names)) == len(names)
    assert all("\\" not in n for n in names)
    assert not any(n.lower().endswith(".jar") or n.startswith("overrides/mods/") for n in names)
    assert not any(n.endswith("quests.7z") or n.startswith(("overrides/logs/", "overrides/saves/", "overrides/crash-reports/")) for n in names)
    expected = {"manifest.json", "modlist.html"}
    base = workspace / "gte/overrides"
    for path in base.rglob("*"):
        if path.is_file():
            rel = path.relative_to(base)
            if should_skip_override(rel) is None:
                expected.add("overrides/" + rel.as_posix())
    assert set(names) == expected, (sorted(set(names) - expected), sorted(expected - set(names)))
    for name in expected - {"manifest.json", "modlist.html"}:
        src = base / Path(name[len("overrides/"):])
        assert zlib.crc32(src.read_bytes()) & 0xFFFFFFFF == pack.getinfo(name).CRC, name
    manifest = json.loads(pack.read("manifest.json"))
    assert manifest["version"] == VERSION and manifest["javaVersion"] == 21
    assert manifest["minecraft"] == {"version": "1.20.1", "modLoaders": [{"id": "forge-47.4.1", "primary": True}], "javaVersion": 21}
    assert len(manifest["files"]) == len(expected_pins)
    assert {(r["projectID"], r["fileID"]) for r in manifest["files"]} == expected_pins

receipt = {
    "version": VERSION, "archive": str(archive), "bytes": archive.stat().st_size,
    "sha256": hashlib.sha256(archive.read_bytes()).hexdigest(),
    "entries": len(names), "manifestPins": len(expected_pins), "bundledJars": 0,
    "modules": record["modules"],
}
out = workspace / "build/curseforge" / VERSION / "local-candidate-receipt.json"
out.parent.mkdir(parents=True, exist_ok=True)
out.write_text(json.dumps(receipt, indent=2, ensure_ascii=False), encoding="utf-8")
print(json.dumps(receipt, indent=2, ensure_ascii=False))
```

如果候选包来自未提交工作区，额外记录 `"source": "working tree candidate"` 和实际 overlay 的文件清单。

## 手动上传后的公开下载校验

不携带作者 token，逐个校验模块 JAR 和整合包公开文件：

```python
import hashlib, json, urllib.request
from pathlib import Path

def public_sha(project_id, file_id):
    url = f"https://www.curseforge.com/api/v1/mods/{project_id}/files/{file_id}/download"
    sha = hashlib.sha256()
    with urllib.request.urlopen(url, timeout=120) as response:
        while chunk := response.read(1024 * 1024):
            sha.update(chunk)
    return sha.hexdigest()

record = json.loads(Path("build/curseforge/<v>/module-release.json").read_text(encoding="utf-8"))
for key, row in record["modules"].items():
    assert public_sha(row["projectID"], row["fileID"]) == row["sha256"], key

pack = json.loads(Path("build/curseforge/<v>/pack-release-<v>.json").read_text(encoding="utf-8"))
assert public_sha(pack["modpackProject"], pack["publishedFileID"]) == pack["sha256"]
print("PUBLIC_DOWNLOADS_MATCH")
```

审核期 404/超时是正常状态，不能据此认定文件可安装或已发布。

## 发布记录模板

`build/curseforge/<v>/pack-release-<v>.json`：

```json
{
  "version": "<v>",
  "modpackProject": 1332016,
  "publishedFileID": 0,
  "publicUrl": "https://www.curseforge.com/minecraft/modpacks/gregtech-easy/files/0",
  "displayName": "GregTech Easy <v>(Use Java 21)",
  "fileName": "GregTech Easy <v>(Use Java 21).zip",
  "bytes": 0,
  "sha256": "<local zip sha256>",
  "publicDownloadVerified": false,
  "modules": {},
  "manifestPins": 0,
  "bundledJars": 0
}
```

`release-progress.md` 每步记录：时间、来源 commit 或“工作区候选包”、模块 file ID、
手动上传结果、人工检查结论、公开下载校验状态。
