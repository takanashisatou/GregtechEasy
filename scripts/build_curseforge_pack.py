#!/usr/bin/env python3
"""
scripts/build_curseforge_pack.py
Build a standard, clean CurseForge modpack ZIP without bundling jar files in overrides.

CurseForge Modpack Specification:
1. manifest.json at zip root with projectID & fileID for all declared mods.
2. modlist.html at zip root with links to CurseForge project pages.
3. overrides/ folder containing config, kubejs, patchouli_books, defaultconfigs, etc.
4. STRICTLY NO JAR FILES inside overrides/mods/ (bundling jars in overrides violates CF rules).

Usage:
    python scripts/build_curseforge_pack.py [version] [options]
Options:
    --gtm-reborn-project-id <id>
    --gtm-reborn-file-id <id>
    --gtecore-project-id <id>
    --gtecore-file-id <id>
    --gt-minus-project-id <id>
    --gt-minus-file-id <id>
"""

import argparse
import json
import os
import sys
import zipfile
from pathlib import Path

# Ensure UTF-8 output on all platforms
for _stream in (sys.stdout, sys.stderr):
    try:
        _stream.reconfigure(encoding="utf-8", errors="replace")
    except (AttributeError, ValueError):
        pass

ROOT = Path(__file__).parent.parent.resolve()
BUILD_DIR = ROOT / "build" / "artifacts"
OVERRIDES = ROOT / "gte" / "overrides"
PACK_TOML = ROOT / "gte" / "pack.toml"
MANIFEST_BASE = ROOT / "gte" / "curseforge_manifest.json"

sys.path.insert(0, str(Path(__file__).parent))
from pack_common import (  # noqa: E402
    SKIP_CONFIG_PREFIXES,
    SKIP_TOP_ALWAYS,
    read_pack_versions,
)


def should_skip_override(rel: Path) -> str | None:
    """Return reason if path should be excluded from overrides/, else None."""
    parts = rel.parts
    if not parts:
        return "empty path"
    if parts[0] in SKIP_TOP_ALWAYS or parts[0] == "saves":
        return f"{parts[0]}/ is not pack content"
    if ".git" in parts:
        return "vcs metadata"
    for prefix in SKIP_CONFIG_PREFIXES:
        if parts[: len(prefix)] == prefix:
            return "/".join(prefix) + "/ is local state"
    # CRITICAL: Never include mods/ or .jar files in CurseForge overrides!
    if parts[0] == "mods" or rel.suffix.lower() == ".jar":
        return "jar files are not allowed in CurseForge overrides"
    return None


def generate_modlist_html(mod_entries: list[dict]) -> str:
    """Generate modlist.html according to CurseForge modpack spec."""
    items = []
    for mod in mod_entries:
        name = mod.get("name", f"Mod (Project {mod.get('projectID')})")
        slug = mod.get("slug", "")
        if slug:
            url = f"https://www.curseforge.com/minecraft/mc-mods/{slug}"
            items.append(f'<li><a href="{url}">{name}</a></li>')
        else:
            items.append(f"<li>{name}</li>")

    return f"""<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Mod List</title>
</head>
<body>
    <h1>Mod List</h1>
    <ul>
        {"".join(items)}
    </ul>
</body>
</html>
"""


def build_curseforge_pack(version: str, submodule_overrides: dict[str, dict[str, int]]) -> Path:
    mc_version, forge_version = read_pack_versions()
    out_zip = BUILD_DIR / f"GTE-CurseForge-{version}.zip"
    BUILD_DIR.mkdir(parents=True, exist_ok=True)

    print(f"\n=======================================================")
    print(f" Building Clean CurseForge Modpack: {out_zip.name}")
    print(f" Target: Minecraft {mc_version}, Forge {forge_version}, Java 21")
    print(f"=======================================================\n")

    # 1. Load base manifest definition
    manifest_data = {}
    if MANIFEST_BASE.is_file():
        try:
            manifest_data = json.loads(MANIFEST_BASE.read_text(encoding="utf-8"))
        except Exception as e:
            print(f"[WARN] Failed to parse {MANIFEST_BASE}: {e}")

    # 2. Assemble manifest.json
    manifest = {
        "minecraft": {
            "version": mc_version,
            "modLoaders": [
                {
                    "id": f"forge-{forge_version}",
                    "primary": True
                }
            ],
            "javaVersion": 21
        },
        "manifestType": "minecraftModpack",
        "manifestVersion": 1,
        "name": manifest_data.get("name", "GregTech Easy"),
        "version": version,
        "author": manifest_data.get("author", "satou"),
        "overrides": "overrides",
        "javaVersion": 21,
        "files": []
    }

    # Track all mods for modlist.html
    mod_info_list = []

    # Add third-party mods
    base_files = manifest_data.get("files", [])
    for mod in base_files:
        pid = mod.get("projectID", 0)
        fid = mod.get("fileID", 0)
        if pid and fid:
            manifest["files"].append({
                "projectID": int(pid),
                "fileID": int(fid),
                "required": bool(mod.get("required", True))
            })
            mod_info_list.append(mod)

    # Add / update submodule mods
    submodules = manifest_data.get("submodules", {})
    for sub_key, sub_def in submodules.items():
        overrides = submodule_overrides.get(sub_key, {})
        pid = overrides.get("projectID") or sub_def.get("projectID", 0)
        fid = overrides.get("fileID") or sub_def.get("fileID", 0)
        name = sub_def.get("name", sub_key)
        slug = sub_def.get("slug", "")

        if pid and fid:
            manifest["files"].append({
                "projectID": int(pid),
                "fileID": int(fid),
                "required": True
            })
            mod_info_list.append({"name": name, "slug": slug, "projectID": pid, "fileID": fid})
            print(f"  [Submodule Mod] {name:<26} -> Project: {pid}, File: {fid}")
        else:
            print(f"  [Notice] Submodule mod {name} not assigned CF fileID (project={pid}, file={fid}).")

    modlist_html = generate_modlist_html(mod_info_list)

    # 3. Create ZIP archive
    written_count = 0
    skipped_count = 0
    top_levels: dict[str, int] = {}

    with zipfile.ZipFile(out_zip, "w", compression=zipfile.ZIP_DEFLATED, compresslevel=6) as zf:
        # Write manifest.json
        zf.writestr("manifest.json", json.dumps(manifest, indent=2, ensure_ascii=False))
        written_count += 1

        # Write modlist.html
        zf.writestr("modlist.html", modlist_html)
        written_count += 1

        # Copy overrides without any jars or mods/ folder
        if OVERRIDES.is_dir():
            for item in sorted(OVERRIDES.rglob("*")):
                if not item.is_file():
                    continue
                rel = item.relative_to(OVERRIDES)
                skip_reason = should_skip_override(rel)
                if skip_reason:
                    skipped_count += 1
                    continue
                zip_path = f"overrides/{rel.as_posix()}"
                zf.write(item, zip_path)
                written_count += 1
                top = rel.parts[0]
                top_levels[top] = top_levels.get(top, 0) + 1

    print(f"\nPack Summary:")
    print(f"  Total archive entries written : {written_count}")
    print(f"  Entries skipped (mods/local)  : {skipped_count}")
    print(f"  Declared CurseForge mod files : {len(manifest['files'])}")
    for top in sorted(top_levels):
        print(f"    overrides/{top+'/' :<20} {top_levels[top]} files")

    # 4. Strict Validation
    validate_curseforge_zip(out_zip)

    size_mb = out_zip.stat().st_size / 1024 / 1024
    print(f"\n[SUCCESS] Clean CurseForge pack created: {out_zip.name} ({size_mb:.2f} MB)")
    return out_zip


def validate_curseforge_zip(zip_path: Path) -> None:
    """Validate that the zip strictly complies with CurseForge requirements."""
    if not zip_path.is_file():
        print(f"[ERROR] Exported zip does not exist: {zip_path}")
        sys.exit(1)

    with zipfile.ZipFile(zip_path, "r") as zf:
        names = zf.namelist()

        if "manifest.json" not in names:
            print("[ERROR] manifest.json is missing from zip root!")
            sys.exit(1)

        if "modlist.html" not in names:
            print("[ERROR] modlist.html is missing from zip root!")
            sys.exit(1)

        # Parse manifest
        manifest = json.loads(zf.read("manifest.json").decode("utf-8"))
        files = manifest.get("files", [])
        if not files:
            print("[WARN] manifest.json contains 0 files! Launchers will install no mods.")

        # STRICT ASSERTION: NO JAR FILES ANYWHERE IN OVERRIDES
        jar_entries = [name for name in names if name.endswith(".jar") or name.startswith("overrides/mods/")]
        if jar_entries:
            print(f"[ERROR] CRITICAL: CurseForge pack contains {len(jar_entries)} bundled jar file(s) in overrides!")
            for jar in jar_entries[:5]:
                print(f"  - {jar}")
            print("CurseForge moderation will REJECT packs bundling mods in overrides.")
            zip_path.unlink(missing_ok=True)
            sys.exit(1)

    print("  [Validation Passed] manifest.json and modlist.html present, 0 jar files bundled in overrides.")


def parse_args():
    parser = argparse.ArgumentParser(description="Build clean CurseForge modpack ZIP")
    parser.add_argument("version", nargs="?", default="dev", help="Release version (e.g. 2.2.5)")
    parser.add_argument("--gtm-reborn-project-id", type=int, default=0)
    parser.add_argument("--gtm-reborn-file-id", type=int, default=0)
    parser.add_argument("--gtecore-project-id", type=int, default=0)
    parser.add_argument("--gtecore-file-id", type=int, default=0)
    parser.add_argument("--gt-minus-project-id", type=int, default=0)
    parser.add_argument("--gt-minus-file-id", type=int, default=0)
    return parser.parse_args()


def main():
    args = parse_args()
    sub_overrides = {}

    if args.gtm_reborn_project_id or args.gtm_reborn_file_id:
        sub_overrides["gtm-reborn"] = {
            "projectID": args.gtm_reborn_project_id,
            "fileID": args.gtm_reborn_file_id
        }
    if args.gtecore_project_id or args.gtecore_file_id:
        sub_overrides["gtecore"] = {
            "projectID": args.gtecore_project_id,
            "fileID": args.gtecore_file_id
        }
    if args.gt_minus_project_id or args.gt_minus_file_id:
        sub_overrides["gt--"] = {
            "projectID": args.gt_minus_project_id,
            "fileID": args.gt_minus_file_id
        }

    build_curseforge_pack(args.version, sub_overrides)


if __name__ == "__main__":
    main()
