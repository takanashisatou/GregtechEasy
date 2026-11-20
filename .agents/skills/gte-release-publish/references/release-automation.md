# 发版模板与校验脚本

配合 [SKILL.md](../SKILL.md) 使用，这里只放需要直接复制的 JSON 模板和 Python 校验脚本。

访问 GitHub / CurseForge 不稳时先开本地代理：

```powershell
# $env:HTTPS_PROXY='http://127.0.0.1:10808'; $env:HTTP_PROXY=$env:HTTPS_PROXY
```

## 1. 模块上传记录模板

保存到 `build/curseforge/<v>/module-release.json`：

```json
{
  "schema": 1,
  "version": "<v>",
  "modpackProject": 1332016,
  "modules": {
    "gtecore": {
      "projectID": 0,
      "fileID": 0,
      "fileName": "gtecore-<...>.jar",
      "sha256": "<sha256>"
    },
    "gtm-reborn": {
      "projectID": 0,
      "fileID": 0,
      "fileName": "gtm-reborn-<...>.jar",
      "sha256": "<sha256>"
    },
    "gt--": {
      "projectID": 0,
      "fileID": 0,
      "fileName": "gt---<...>.jar",
      "sha256": "<sha256>"
    }
  }
}
```

## 2. 本地零 JAR 候选包校验脚本

放到 worktree 里的 `build/curseforge/<v>/verify-candidate.py`，执行：
`python build/curseforge/<v>/verify-candidate.py build/curseforge/<v>/module-release.json`

```python
from pathlib import Path
import hashlib
import json
import sys
import tomllib
import zipfile
import zlib

VERSION = "<v>"
workspace = Path(__file__).resolve().parents[3]
pack_toml = tomllib.loads((workspace / "gte/pack.toml").read_text(encoding="utf-8"))
catalog = json.loads((workspace / "gte/curseforge_manifest.json").read_text(encoding="utf-8"))

sys.path.insert(0, str(workspace / "scripts"))
from build_curseforge_pack import should_skip_override

archive = workspace / "build/artifacts" / f"GregTech Easy {VERSION}(Use Java 21).zip"
record = json.loads(Path(sys.argv[1]).read_text(encoding="utf-8"))
expected_pins = {
    (row["projectID"], row["fileID"])
    for row in [*catalog["files"], *record["modules"].values()]
}

expected_mc = pack_toml["versions"]["minecraft"]
expected_forge = pack_toml["versions"]["forge"]
expected_java = int(pack_toml["versions"]["java"])

with zipfile.ZipFile(archive) as pack:
    assert pack.testzip() is None, "ZIP CRC 损坏"
    names = pack.namelist()
    assert len(set(names)) == len(names), "存在重复 entry"
    assert all("\\" not in n for n in names), "存在反斜杠路径"
    assert not any(
        n.lower().endswith(".jar") or n.startswith("overrides/mods/") for n in names
    ), "正式包混入了 .jar 或 overrides/mods/"
    assert not any(
        n.endswith("quests.7z")
        or n.startswith(("overrides/logs/", "overrides/saves/", "overrides/crash-reports/"))
        for n in names
    ), "混入了本地垃圾文件"

    expected = {"manifest.json", "modlist.html"}
    base = workspace / "gte/overrides"
    for path in base.rglob("*"):
        if path.is_file():
            rel = path.relative_to(base)
            if should_skip_override(rel) is None:
                expected.add("overrides/" + rel.as_posix())

    assert set(names) == expected, (
        sorted(set(names) - expected),
        sorted(expected - set(names)),
    )

    for name in expected - {"manifest.json", "modlist.html"}:
        src = base / Path(name[len("overrides/"):])
        assert (zlib.crc32(src.read_bytes()) & 0xFFFFFFFF) == pack.getinfo(name).CRC, name

    manifest = json.loads(pack.read("manifest.json"))
    assert manifest["version"] == VERSION and manifest["javaVersion"] == expected_java
    assert manifest["minecraft"] == {
        "version": expected_mc,
        "modLoaders": [{"id": f"forge-{expected_forge}", "primary": True}],
        "javaVersion": expected_java,
    }
    assert len(manifest["files"]) == len(expected_pins)
    assert {(r["projectID"], r["fileID"]) for r in manifest["files"]} == expected_pins

receipt = {
    "version": VERSION,
    "archive": str(archive),
    "bytes": archive.stat().st_size,
    "sha256": hashlib.sha256(archive.read_bytes()).hexdigest(),
    "entries": len(names),
    "manifestPins": len(expected_pins),
    "bundledJars": 0,
    "modules": record["modules"],
}
out = workspace / "build/curseforge" / VERSION / "local-candidate-receipt.json"
out.parent.mkdir(parents=True, exist_ok=True)
out.write_text(json.dumps(receipt, indent=2, ensure_ascii=False), encoding="utf-8")
print(json.dumps(receipt, indent=2, ensure_ascii=False))
```

## 3. 整合包上传记录模板

保存到 `build/curseforge/<v>/pack-release-<v>.json`：

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

## 4. 无 Token 公开下载 SHA-256 校验

等 CurseForge 审核通过后跑一遍，确认玩家端公开下载的文件和本地一致：

```python
import hashlib
import json
import urllib.request
from pathlib import Path

VERSION = "<v>"

def public_sha(project_id: int, file_id: int) -> str:
    url = f"https://www.curseforge.com/api/v1/mods/{project_id}/files/{file_id}/download"
    sha = hashlib.sha256()
    with urllib.request.urlopen(url, timeout=120) as resp:
        while chunk := resp.read(1024 * 1024):
            sha.update(chunk)
    return sha.hexdigest()

record = json.loads(Path(f"build/curseforge/{VERSION}/module-release.json").read_text(encoding="utf-8"))
for key, row in record["modules"].items():
    assert public_sha(row["projectID"], row["fileID"]) == row["sha256"], f"模块哈希不一致: {key}"

pack = json.loads(Path(f"build/curseforge/{VERSION}/pack-release-{VERSION}.json").read_text(encoding="utf-8"))
assert public_sha(pack["modpackProject"], pack["publishedFileID"]) == pack["sha256"], "整合包哈希不一致"

print("PUBLIC_DOWNLOADS_MATCH")
```
