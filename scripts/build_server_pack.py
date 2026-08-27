#!/usr/bin/env python3
"""
scripts/build_server_pack.py
Build the Forge dedicated-server pack.

A server pack is NOT a CurseForge pack. `packwiz curseforge export -s server`
emits manifest.json + overrides/, which is a *launcher import* format -- it needs
a launcher to read manifest.json and copy overrides/ into place. A Forge server
has no launcher. The documented procedure is

    unzip GTE-Server-*.zip -d .
    java -jar forge-*-installer.jar --installServer
    java @libraries/net/minecraftforge/forge/1.20.1-47.4.1/unix_args.txt nogui

and Forge resolves mods/ and config/ relative to the server root, so the pack
must put mods/ at its own top level.

Do not reimplement this with PowerShell's Compress-Archive: Windows PowerShell
writes zip entry names with backslashes ("mods\\gtecore-....jar"), which is not a
path separator in the zip spec, so consumers see one file literally named
"mods\\gtecore-....jar" at the archive root and no mods directory at all.
zipfile always writes forward slashes.

Usage: python scripts/build_server_pack.py [version]
"""
import re
import sys
import zipfile
from pathlib import Path

ROOT = Path(__file__).parent.parent.resolve()
BUILD_DIR = ROOT / "build" / "artifacts"
BUILD_DIR.mkdir(parents=True, exist_ok=True)

VERSION = sys.argv[1] if len(sys.argv) > 1 else "dev"
OUT_ZIP = BUILD_DIR / f"GTE-Server-{VERSION}.zip"

OVERRIDES = ROOT / "gte" / "overrides"

SLIM_JAR = re.compile(r"-(dev-)?slim\.jar$", re.IGNORECASE)

# Top-level directories a dedicated server has no use for.
#   resourcepacks   client-side only
#   logs            local dev debris; untracked, but present in the runner's
#                   working tree, so an in-place archive shipped them to admins
#   crash-reports   same
#   saves           the admin's own worlds belong to the admin
SKIP_TOP = {"resourcepacks", "logs", "crash-reports", "saves"}

# Paths under config/ that are personal state rather than pack configuration.
# jei/world/local/<name> carries bookmark files named after whoever's machine
# built the pack, and worldedit/sessions holds per-player session blobs.
SKIP_CONFIG_PREFIXES = (
    ("config", "jei", "world"),
    ("config", "worldedit", "sessions"),
    ("config", "worldedit", ".archive-unpack"),
)


def should_skip(rel: Path) -> str | None:
    parts = rel.parts
    if not parts:
        return "empty path"
    if parts[0] in SKIP_TOP:
        return f"{parts[0]}/ is not server content"
    if ".git" in parts:
        return "vcs metadata"
    for prefix in SKIP_CONFIG_PREFIXES:
        if parts[: len(prefix)] == prefix:
            return "/".join(prefix) + "/ is local state"
    # slim jars carry no jar-in-jar dependencies; Forge would pick one for modId
    # gtceu and fail with "Mod ID: 'ldlib' ... [MISSING]".
    if parts[0] == "mods" and SLIM_JAR.search(rel.name):
        return "slim jar is not runnable"
    return None


def main() -> None:
    print(f"Building Forge server pack -> {OUT_ZIP}")

    if not OVERRIDES.is_dir():
        print(f"[ERROR] Missing pack overrides directory: {OVERRIDES}")
        sys.exit(1)

    written = 0
    skipped = 0
    mods = []

    with zipfile.ZipFile(OUT_ZIP, "w", compression=zipfile.ZIP_DEFLATED, compresslevel=6) as zf:
        for item in sorted(OVERRIDES.rglob("*")):
            if not item.is_file():
                continue
            rel = item.relative_to(OVERRIDES)
            reason = should_skip(rel)
            if reason:
                skipped += 1
                continue
            arcname = rel.as_posix()
            zf.write(item, arcname)
            written += 1
            if len(rel.parts) == 2 and rel.parts[0] == "mods" and rel.suffix == ".jar":
                mods.append(rel.name)

    print(f"  entries written : {written}")
    print(f"  entries skipped : {skipped}")
    print(f"  mods/*.jar      : {len(mods)}")
    for name in sorted(mods):
        print(f"    {name}")

    if not mods:
        print("[ERROR] No mods/*.jar at the pack root; Forge would boot modless.")
        sys.exit(1)

    size_mb = OUT_ZIP.stat().st_size / 1024 / 1024
    print(f"\n[SUCCESS] Server pack created: {OUT_ZIP.name} ({size_mb:.2f} MB)")


if __name__ == "__main__":
    main()
