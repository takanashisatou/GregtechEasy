#!/usr/bin/env python3
"""
scripts/pack_common.py
Shared rules for building distributable pack archives.

Both the full-mod client pack and the Forge server pack are the same operation:
take gte/overrides, drop what does not belong in someone else's game directory,
and write a zip whose entries sit at the top level. They differ only in which
top-level directories survive. Keeping the rules here means a fix like "stop
shipping worldedit sessions" cannot land in one pack and be forgotten in the
other, which is how the two scripts drifted before.

Never reimplement the archive part with PowerShell's Compress-Archive: Windows
PowerShell writes zip entry names with backslashes ("mods\\gtecore-....jar"),
which is not a path separator in the zip spec, so consumers see one file
literally named "mods\\gtecore-....jar" at the archive root and no mods
directory at all. ZipFile::CreateFromDirectory over a copied tree failed the
same way. Python's zipfile always writes forward slashes.
"""
import re
import sys
import zipfile
from pathlib import Path

# Python on Windows encodes stdout with the ANSI code page (cp1252 on GitHub's
# hosted runners, GBK on a zh-CN machine). The pack tree contains CJK
# directories such as config/inventoryprofilesnext/新的世界/, so printing a path
# raised
#   UnicodeEncodeError: 'charmap' codec can't encode characters in position 44-47
# and killed a run at minute 42 *after* every file had been packed correctly.
# The callers set PYTHONIOENCODING, but art-pipeline.yml invokes these scripts
# too, so make them safe regardless of the caller's environment.
for _stream in (sys.stdout, sys.stderr):
    try:
        _stream.reconfigure(encoding="utf-8", errors="replace")
    except (AttributeError, ValueError):
        pass

ROOT = Path(__file__).parent.parent.resolve()
BUILD_DIR = ROOT / "build" / "artifacts"
OVERRIDES = ROOT / "gte" / "overrides"
PACK_TOML = ROOT / "gte" / "pack.toml"

# Matches gtecore-1.20.1-2.2.5.1-slim.jar and ...-dev-slim.jar without catching a
# third-party mod that merely has "slim" in its name.
SLIM_JAR = re.compile(r"-(dev-)?slim\.jar$", re.IGNORECASE)

# Build debris and vcs metadata. logs/ and crash-reports/ are untracked but do
# sit in the runner's working tree, so an in-place archive shipped them.
SKIP_TOP_ALWAYS = {"logs", "crash-reports", ".git"}

# saves/ is whoever's world; it is never pack content. resourcepacks/ is
# client-only, so the server pack drops it as well.
CLIENT_SKIP_TOP = SKIP_TOP_ALWAYS | {"saves"}
SERVER_SKIP_TOP = SKIP_TOP_ALWAYS | {"saves", "resourcepacks"}

# Paths under config/ that are personal state rather than pack configuration.
# jei/world/local/<name> carries bookmark files named after the saves on the
# machine that built the pack, and worldedit/sessions holds per-player blobs.
SKIP_CONFIG_PREFIXES = (
    ("config", "jei", "world"),
    ("config", "worldedit", "sessions"),
    ("config", "worldedit", ".archive-unpack"),
)


def read_pack_versions() -> tuple[str, str]:
    """Read minecraft / forge from gte/pack.toml.

    pack.toml is the single source of truth for these numbers. A pack that
    states one Forge version while its README teaches another is worse than one
    that states none: the player cannot tell which of the two is the typo.
    """
    text = PACK_TOML.read_text(encoding="utf-8")
    mc = re.search(r'(?m)^\s*minecraft\s*=\s*"([^"]+)"', text)
    forge = re.search(r'(?m)^\s*forge\s*=\s*"([^"]+)"', text)
    if not mc or not forge:
        print(f"[ERROR] Cannot read minecraft/forge versions from {PACK_TOML}")
        sys.exit(1)
    return mc.group(1), forge.group(1)


def should_skip(rel: Path, skip_top: set[str]) -> str | None:
    """Return why `rel` is excluded, or None to pack it."""
    parts = rel.parts
    if not parts:
        return "empty path"
    if parts[0] in skip_top:
        return f"{parts[0]}/ is not pack content"
    if ".git" in parts:
        return "vcs metadata"
    for prefix in SKIP_CONFIG_PREFIXES:
        if parts[: len(prefix)] == prefix:
            return "/".join(prefix) + "/ is local state"
    # -slim / -dev-slim jars deliberately carry no jar-in-jar dependencies
    # (ldlib, configuration, Registrate, flywheel, ...) because Maven consumers
    # want them thin. In mods/ they are poison: Forge sees three files declaring
    # modId "gtceu", picks a slim one, and aborts before the main menu with
    #   Missing or unsupported mandatory dependencies:
    #     Mod ID: 'ldlib', Requested by: 'gtceu' ... [MISSING]
    if parts[0] == "mods" and SLIM_JAR.search(rel.name):
        return "slim jar is not runnable"
    return None


def build_pack(out_zip: Path, skip_top: set[str], label: str,
               extra: dict[str, str] | None = None) -> None:
    """Zip gte/overrides into `out_zip` with entries at the top level.

    `extra` maps archive paths to text content written alongside the tree.
    Exits non-zero when the result would contain no runnable mods, because a
    pack that installs cleanly and then boots modless is the failure mode that
    reaches players instead of CI.
    """
    print(f"Building {label} -> {out_zip}")

    if not OVERRIDES.is_dir():
        print(f"[ERROR] Missing pack overrides directory: {OVERRIDES}")
        sys.exit(1)

    BUILD_DIR.mkdir(parents=True, exist_ok=True)

    written = 0
    skipped = 0
    mods: list[str] = []
    top_levels: dict[str, int] = {}

    with zipfile.ZipFile(out_zip, "w", compression=zipfile.ZIP_DEFLATED, compresslevel=6) as zf:
        for name, content in (extra or {}).items():
            zf.writestr(name, content)
            written += 1

        for item in sorted(OVERRIDES.rglob("*")):
            if not item.is_file():
                continue
            rel = item.relative_to(OVERRIDES)
            if should_skip(rel, skip_top):
                skipped += 1
                continue
            zf.write(item, rel.as_posix())
            written += 1
            top_levels[rel.parts[0]] = top_levels.get(rel.parts[0], 0) + 1
            if len(rel.parts) == 2 and rel.parts[0] == "mods" and rel.suffix == ".jar":
                mods.append(rel.name)

    # Print a summary rather than every path: the old per-file listing produced
    # 400+ log lines per pack and was what tripped the cp1252 crash.
    print(f"  entries written : {written}")
    print(f"  entries skipped : {skipped}")
    for top in sorted(top_levels):
        print(f"    {top+'/':<20} {top_levels[top]}")
    print(f"  mods/*.jar      : {len(mods)}")
    for name in sorted(mods):
        print(f"    {name}")

    if not mods:
        print("[ERROR] No mods/*.jar at the pack root; the pack would run with no mods.")
        sys.exit(1)

    size_mb = out_zip.stat().st_size / 1024 / 1024
    print(f"\n[SUCCESS] {label} created: {out_zip.name} ({size_mb:.2f} MB)")
