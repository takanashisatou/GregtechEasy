"""Two-stage CurseForge release metadata and exact pack-file verification.

Upload three committed production jars, save their returned IDs, then resume
after moderation. Public downloads are checked without the upload token.
"""
import argparse
import concurrent.futures
import hashlib
import json
import os
from pathlib import Path
import re
import subprocess
import urllib.error
import urllib.request

ROOT = Path(__file__).resolve().parent.parent
CATALOG = ROOT / "gte/curseforge_manifest.json"
MODS = ROOT / "gte/overrides/mods"
MODULES = {
    "gtecore": ("gtecore-*.jar", "GTECORE"),
    "gtm-reborn": ("gtm-reborn-*.jar", "GTM_REBORN"),
    "gt--": ("gt---*.jar", "GT_MINUS"),
}
DEBRIS = ("-slim.jar", "-dev.jar", "-dev-slim.jar", "-dev-embeds.jar", "-sources.jar", "-all.jar")


def positive_id(value):
    if isinstance(value, bool) or not re.fullmatch(r"[1-9][0-9]*", str(value)):
        raise ValueError(f"Invalid CurseForge ID: {value!r}")
    return int(value)


def digest(path):
    with path.open("rb") as stream:
        return hashlib.file_digest(stream, "sha256").hexdigest()


def module_jars(mods=MODS):
    found = {}
    for key, (pattern, _) in MODULES.items():
        jars = [p for p in mods.glob(pattern) if not p.name.endswith(DEBRIS)]
        if len(jars) != 1:
            raise ValueError(f"{key}: expected one production jar, found {len(jars)}")
        found[key] = jars[0]
    return found


def validate_catalog(catalog, mods=MODS):
    """Every current jar must have exactly one pinned manifest or module owner."""
    own = module_jars(mods)
    covered = {path.name for path in own.values()}
    projects = set()
    for key in MODULES:
        project = positive_id(catalog["submodules"][key]["projectID"])
        if project in projects:
            raise ValueError(f"Duplicate CurseForge project: {project}")
        projects.add(project)
    for row in catalog["files"]:
        project = positive_id(row["projectID"])
        positive_id(row["fileID"])
        if project in projects:
            raise ValueError(f"Duplicate CurseForge project: {project}")
        projects.add(project)
        name = row.get("fileName", "")
        if not name or Path(name).name != name or "/" in name or "\\" in name:
            raise ValueError(f"Missing or invalid pinned jar filename: {name!r}")
        if name in covered:
            raise ValueError(f"Duplicate manifest jar: {name}")
        path = mods / name
        expected = row.get("sha256", "")
        if not re.fullmatch(r"[0-9a-f]{64}", expected) or not path.is_file() or digest(path) != expected:
            raise ValueError(f"Manifest pin differs from the shipped jar: {name}")
        covered.add(name)
    actual = {p.relative_to(mods).as_posix() for p in mods.rglob("*.jar")}
    if actual != covered:
        raise ValueError(f"Unmapped jars: {sorted(actual - covered)}; obsolete pins: {sorted(covered - actual)}")
    return own


def git_value(*args):
    return subprocess.check_output(["git", *args], cwd=ROOT, text=True).strip()


def prepare(version, catalog=None):
    if not re.fullmatch(r"[A-Za-z0-9][A-Za-z0-9._+-]{0,79}", version):
        raise ValueError("Version must be 1-80 letters, digits, dots, underscores, pluses or hyphens")
    catalog = catalog or json.loads(CATALOG.read_text(encoding="utf-8"))
    own = validate_catalog(catalog)
    record = {"schema": 1, "version": version,
              "modpackProject": positive_id(os.environ.get("MODPACK_CF_ID", "1332016")),
              "sourceCommit": git_value("rev-parse", "HEAD"),
              "overridesTree": git_value("rev-parse", "HEAD:gte/overrides"), "modules": {}}
    for key, path in own.items():
        row = dict(catalog["submodules"][key], fileName=path.name, sha256=digest(path), fileID=0)
        _, env = MODULES[key]
        row["projectID"] = positive_id(os.environ.get(env + "_CF_ID") or row["projectID"])
        record["modules"][key] = row
        output = os.environ.get("GITHUB_OUTPUT")
        if output:
            with open(output, "a", encoding="utf-8") as stream:
                stream.write(f"{env.lower()}_jar={path.as_posix()}\n{env.lower()}_project={row['projectID']}\n")
    projects = [r["projectID"] for r in record["modules"].values()]
    if len(set(projects)) != len(projects) or set(projects) & {r["projectID"] for r in catalog["files"]}:
        raise ValueError("Module project overrides collide with another manifest project")
    if record["modpackProject"] in projects or record["modpackProject"] in {r["projectID"] for r in catalog["files"]}:
        raise ValueError("Modpack project ID is a mod project ID")
    return record


def validate_release(record, catalog=None, mods=MODS, expected_tree=None):
    catalog = catalog or json.loads(CATALOG.read_text(encoding="utf-8"))
    own = validate_catalog(catalog, mods)
    if record.get("schema") != 1 or set(record.get("modules", {})) != set(MODULES):
        raise ValueError("Release record must contain all three modules")
    pack_project = positive_id(record.get("modpackProject"))
    if os.environ.get("MODPACK_CF_ID") and positive_id(os.environ["MODPACK_CF_ID"]) != pack_project:
        raise ValueError("Modpack project differs from the module-stage release record")
    if os.environ.get("RELEASE_VERSION") and os.environ["RELEASE_VERSION"] != record.get("version"):
        raise ValueError("Version differs from the module-stage release record")
    if expected_tree is None:
        expected_tree = git_value("rev-parse", "HEAD:gte/overrides")
    if record.get("overridesTree") != expected_tree:
        raise ValueError("Pack overrides changed after module upload; resume from the recorded source commit")
    projects = {positive_id(r["projectID"]) for r in catalog["files"]}
    for key, path in own.items():
        row = record["modules"][key]
        project = positive_id(row["projectID"])
        positive_id(row["fileID"])
        if project in projects:
            raise ValueError(f"Duplicate release project: {project}")
        projects.add(project)
        if row.get("fileName") != path.name or row.get("sha256") != digest(path):
            raise ValueError(f"Uploaded module differs from shipped jar: {key}")
    if pack_project in projects:
        raise ValueError("Modpack project ID is a mod project ID")
    return record["modules"]


def public_download(row):
    """Follow CurseForge's public file-download endpoint without an author token.

    This is the same public URL returned by the pinned mc-publish action. The
    final CDN response must contain exactly the bytes recorded at upload time.
    """
    pid, fid = positive_id(row["projectID"]), positive_id(row["fileID"])
    url = f"https://www.curseforge.com/api/v1/mods/{pid}/files/{fid}/download"
    sha = hashlib.sha256()
    with urllib.request.urlopen(url, timeout=30) as response:
        while chunk := response.read(1024 * 1024):
            sha.update(chunk)
    if sha.hexdigest() != row["sha256"]:
        raise ValueError(f"Public file differs from the release jar: {row['fileName']} (project {pid}, file {fid})")
    return row["fileName"]


def verify_public(record):
    catalog = json.loads(CATALOG.read_text(encoding="utf-8"))
    modules = validate_release(record, catalog)
    rows = [*modules.values(), *catalog["files"]]
    # Read-only independent downloads; collect every failure before refusing upload.
    errors = []
    with concurrent.futures.ThreadPoolExecutor(max_workers=6) as pool:
        futures = {pool.submit(public_download, row): row for row in rows}
        for future in concurrent.futures.as_completed(futures):
            row = futures[future]
            try:
                print(f"Public SHA-256 verified: {future.result()}", flush=True)
            except (OSError, ValueError) as exc:
                errors.append(f"{row['fileName']} (project {row['projectID']}, file {row['fileID']}): {exc}")
    if errors:
        raise ValueError("Files are not publicly downloadable with the expected bytes; wait for moderation or fix pins:\n" + "\n".join(errors))


def check_token():
    token = os.environ.get("CF_UPLOAD_TOKEN", "")
    if not token:
        raise ValueError("Configure the CURSEFORGE_TOKEN repository secret")
    request = urllib.request.Request("https://minecraft.curseforge.com/api/game/versions",
                                     headers={"X-Api-Token": token})
    with urllib.request.urlopen(request, timeout=30) as response:
        versions = json.load(response)
    if not isinstance(versions, list) or not any(row.get("name") == "1.20.1" for row in versions):
        raise ValueError("CurseForge Upload API did not return the Minecraft 1.20.1 game version")
    print("CurseForge Upload API version lookup succeeded using the configured token; no upload performed.")


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("action", choices=("prepare", "record", "verify", "check-token"))
    parser.add_argument("--record", type=Path, default=ROOT / "build/curseforge/module-release.json")
    parser.add_argument("--version", default=os.environ.get("RELEASE_VERSION", "preflight"))
    args = parser.parse_args()
    try:
        if args.action == "check-token":
            check_token()
        elif args.action == "prepare":
            record = prepare(args.version)
            args.record.parent.mkdir(parents=True, exist_ok=True)
            args.record.write_text(json.dumps(record, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
            print("All shipped jars are pinned. Module release record prepared; no upload performed.")
        elif args.action == "record":
            record = json.loads(args.record.read_text(encoding="utf-8"))
            for key, (_, env) in MODULES.items():
                value = os.environ.get(env + "_FILE_ID", "")
                # Persist successful IDs even when a later upload failed. Pack verification rejects zeros.
                record["modules"][key]["fileID"] = positive_id(value) if value else 0
            args.record.write_text(json.dumps(record, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
            print("Upload IDs saved. Wait for CurseForge moderation before the pack stage.")
        else:
            verify_public(json.loads(args.record.read_text(encoding="utf-8")))
            print("All manifest files can be downloaded publicly and match the shipped bytes.")
    except (OSError, ValueError, KeyError, subprocess.CalledProcessError) as exc:
        parser.exit(1, f"ERROR: {exc}\n")


if __name__ == "__main__":
    main()
