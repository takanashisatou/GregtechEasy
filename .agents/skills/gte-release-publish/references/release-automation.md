# 发版自动化片段

从 GTE 3.1.5 实际发布中沉淀的可复用命令/脚本。全部是 PowerShell（Windows 本机），
`gh` 与 `git` 需要访问 GitHub；网络不稳时先设置本地代理并加重试。

## 通用：代理 + 重试

```powershell
$env:HTTPS_PROXY='http://127.0.0.1:10808'
$env:HTTP_PROXY='http://127.0.0.1:10808'

function Invoke-Retry([scriptblock]$Action, [int]$Attempts = 8, [int]$DelaySec = 4) {
  for ($i = 1; $i -le $Attempts; $i++) {
    $out = & $Action 2>&1
    if ($LASTEXITCODE -eq 0) { return $out }
    Write-Host "attempt $i failed: $($out | Select-Object -Last 1)"
    Start-Sleep -Seconds $DelaySec
  }
  throw "all $Attempts attempts failed"
}
```

## 通用：后台等待一个 run

```powershell
$id = <runId>
while ($true) {
  $s = gh run view $id --repo takanashisatou/GregtechEasy --json status,conclusion,updatedAt `
        --jq '"\(.status)|\(.conclusion)|\(.updatedAt)"' 2>$null
  if ($LASTEXITCODE -eq 0 -and $s) {
    Write-Host "$(Get-Date -Format HH:mm:ss) $s"
    if ($s -like 'completed*') { break }
  } else { Write-Host "$(Get-Date -Format HH:mm:ss) poll-error" }
  Start-Sleep -Seconds 25
}
gh run view $id --repo takanashisatou/GregtechEasy --json status,conclusion,headSha --jq '"\(.status)|\(.conclusion)|\(.headSha)"'
```

运行在后台会话里时可写成 managed background job，避免阻塞其它步骤。

## dispatch：modules / pack

```powershell
# join-refresh 前先设置 main 上的干净状态；payload 写文件避免引号/换行问题
$changelog = Get-Content 'build/curseforge/<v>/changelog.md' -Raw
$payload = @{ ref='main'; inputs=@{
  stage='modules'                        # 第一段；pack 阶段改成 'pack'
  version='<v>'
  channel='release'
  reuse_gt_minus_file_id='<approved GT-- fileID>'   # 仅 modules
  module_release_run_id='<modulesRunId>'            # 仅 pack
  modules_approved='true'                           # 仅 pack
  changelog=$changelog
} } | ConvertTo-Json -Depth 6
$payload | Out-File 'build/curseforge/<v>/dispatch-<stage>.json' -Encoding utf8
Invoke-Retry {
  gh api --method POST repos/takanashisatou/GregtechEasy/actions/workflows/curseforge-publish.yml/dispatches `
    --input 'build/curseforge/<v>/dispatch-<stage>.json'
  $LASTEXITCODE
}
# 找 run id（dispatch 后 10–20 秒）
gh run list --workflow curseforge-publish.yml --limit 3 `
  --json databaseId,status,conclusion,createdAt,headSha --jq '.[] | "\(.databaseId) \(.status) \(.createdAt) \(.headSha)"'
```

## 等待 CurseForge 审核（无 token 公开下载轮询）

`build/curseforge/<v>/watch_moderation.py`：

```python
"""Passively wait for the three CurseForge module files to pass moderation."""
import hashlib, json, sys, time, urllib.error, urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parents[3]
RECORD = ROOT / "build/curseforge/<v>/run-<modulesRunId>/module-release.json"
LOG = ROOT / "build/curseforge/<v>/moderation-watch.log"
DEADLINE = time.time() + 3 * 3600
INTERVAL = 180

def log(line):
    print(line, flush=True)
    with LOG.open("a", encoding="utf-8") as stream:
        stream.write(line + "\n")

def check(row):
    url = f"https://www.curseforge.com/api/v1/mods/{row['projectID']}/files/{row['fileID']}/download"
    sha = hashlib.sha256()
    try:
        with urllib.request.urlopen(url, timeout=90) as response:
            while chunk := response.read(1024 * 1024):
                sha.update(chunk)
    except urllib.error.HTTPError as exc:
        return f"HTTP{exc.code}"
    except Exception as exc:  # 审核期间 404/超时都正常
        return f"ERR:{type(exc).__name__}"
    digest = sha.hexdigest()
    return "OK" if digest == row["sha256"] else f"HASH-MISMATCH:{digest}"

record = json.loads(RECORD.read_text(encoding="utf-8"))
while time.time() < DEADLINE:
    results = {key: check(row) for key, row in record["modules"].items()}
    log(time.strftime("%Y-%m-%dT%H:%M:%S%z") + " " + " ".join(f"{k}={v}" for k, v in results.items()))
    if all(value == "OK" for value in results.values()):
        log("ALL_MODULES_PUBLIC_OK"); sys.exit(0)
    time.sleep(INTERVAL)
log("TIMEOUT_WAITING_FOR_MODERATION"); sys.exit(2)
```

## 本地 CF 格式 zero-JAR 包（干净 worktree）

```powershell
git worktree add --detach C:\Users\Ex_Je\Documents\GTEGroup-build\gte-pack-<v> <releaseSourceCommit>
cd C:\Users\Ex_Je\Documents\GTEGroup-build\gte-pack-<v>
python scripts/build_curseforge_pack.py <v> --module-release build\curseforge\<v>\module-release.json
```

打包校验脚本骨架（放到 worktree 的 `build/curseforge/<v>/verify-candidate.py`，`parents[3]` 即 worktree 根）：

```python
from pathlib import Path
import hashlib, json, subprocess, sys, zipfile
VERSION = "<v>"
workspace = Path(__file__).resolve().parents[3]
record = json.loads(Path(sys.argv[1]).read_text(encoding="utf-8"))
catalog = json.loads((workspace / "gte/curseforge_manifest.json").read_text(encoding="utf-8"))
sys.path.insert(0, str(workspace / "scripts"))
from build_curseforge_pack import should_skip_override

def git(*args):
    return subprocess.check_output(["git", *args], cwd=workspace, text=True).strip()

assert record["version"] == VERSION
assert record["sourceCommit"] == git("rev-parse", "HEAD")
assert record["overridesTree"] == git("rev-parse", "HEAD:gte/overrides")

archive = workspace / "build/artifacts" / f"GregTech Easy {VERSION}(Use Java 21).zip"
expected_pins = {(row["projectID"], row["fileID"]) for row in [*catalog["files"], *record["modules"].values()]}
with zipfile.ZipFile(archive) as pack:
    assert pack.testzip() is None
    names = pack.namelist()
    assert len(set(names)) == len(names)
    assert not any(n.lower().endswith(".jar") or n.startswith("overrides/mods/") for n in names)
    expected = {"manifest.json", "modlist.html"}
    for path in (workspace / "gte/overrides").rglob("*"):
        if path.is_file():
            rel = path.relative_to(workspace / "gte/overrides")
            if should_skip_override(rel) is None:
                expected.add("overrides/" + rel.as_posix())
    assert set(names) == expected
    manifest = json.loads(pack.read("manifest.json"))
    assert manifest["version"] == VERSION and manifest["javaVersion"] == 21
    assert manifest["minecraft"] == {"version": "1.20.1", "modLoaders": [{"id": "forge-47.4.1", "primary": True}], "javaVersion": 21}
    assert len(manifest["files"]) == len(expected_pins) == 100
    assert {(r["projectID"], r["fileID"]) for r in manifest["files"]} == expected_pins
receipt = {"version": VERSION, "archive": str(archive), "bytes": archive.stat().st_size,
           "sha256": hashlib.file_digest(archive.open("rb"), "sha256").hexdigest(),
           "entries": len(names), "manifestPins": 100, "bundledJars": 0,
           "sourceCommit": record["sourceCommit"], "overridesTree": record["overridesTree"],
           "modules": record["modules"]}
(workspace / "build/curseforge" / VERSION / "local-candidate-receipt.json").write_text(
    json.dumps(receipt, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
print(json.dumps(receipt, indent=2, ensure_ascii=False))
```

## 发布后：CI artifact 对比 + 公开下载校验

```powershell
gh run download <packRunId> --name GTE-CurseForge-<v> --dir build/curseforge/<v>/pack-run-<packRunId>
gh run view <packRunId> --repo takanashisatou/GregtechEasy --log | Select-String 'CurseForge pack file ID'
```

```python
import hashlib, json, urllib.request, zipfile
from pathlib import Path

ci = Path(r"...\pack-run-<packRunId>\GregTech Easy <v>(Use Java 21).zip")
local = Path(r"...\build\artifacts\GregTech Easy <v>(Use Java 21).zip")

def digest(p):
    return hashlib.file_digest(p.open("rb"), "sha256").hexdigest()

with zipfile.ZipFile(ci) as z:
    ci_crc = {i.filename: i.CRC for i in z.infolist()}
    manifest = json.loads(z.read("manifest.json"))
with zipfile.ZipFile(local) as z:
    local_crc = {i.filename: i.CRC for i in z.infolist()}
assert ci_crc == local_crc                      # 内容一致（压缩字节可不同）
assert len(manifest["files"]) == 100
assert not any(n.lower().endswith(".jar") or n.startswith("overrides/mods/") for n in ci_crc)

url = "https://www.curseforge.com/api/v1/mods/<modpackProject>/files/<packFileID>/download"
sha = hashlib.sha256(); total = 0
with urllib.request.urlopen(url, timeout=120) as r:   # 不带作者 token；审核期可能先 404，重试
    while chunk := r.read(1024 * 1024):
        total += len(chunk); sha.update(chunk)
assert total == ci.stat().st_size and sha.hexdigest() == digest(ci)
print("PUBLIC_MATCHES_CI: True", sha.hexdigest(), total)
```

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
  "sha256": "<ci artifact sha256>",
  "contentEqualsLocalCandidate": true,
  "publicDownloadVerified": true,
  "moduleStageRun": 0,
  "packStageRun": 0,
  "moduleStageSourceCommit": "<module-release sourceCommit>",
  "overridesTree": "<module-release overridesTree>",
  "modules": {},
  "manifestPins": 100,
  "bundledJars": 0
}
```

`release-progress.md` 每步记录：时间、run ID、commit SHA、file ID、失败原文、当前等待项。
