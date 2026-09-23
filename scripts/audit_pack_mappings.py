#!/usr/bin/env python3
"""
GTE Pack Mapping Sanity Audit (production jars only)
====================================================
Forge 1.20.1 production runs vanilla with **SRG** member names (`m_12345_`,
`f_12345_`), so every published mod jar references them that way. A jar built
with Mojang mappings - a "dev" jar, which is what the dev runtime produces when
it remaps the pack SRG -> named - contains plain names instead
(`Minecraft.getInstance()`, `.player`) and cannot resolve a single vanilla member
on a production install.

That is not hypothetical. Commit 9a67970 ("release: v3.0.7 nightly with ...
dev runtime link ...") replaced the whole third-party set in
`gte/overrides/mods/` with dev builds of the same file names: 94 of 99 jars went
from hundreds/thousands of SRG references to zero, and the pack died on launch at
the first mixin that shadows a vanilla field:

    Mixin apply failed modernfix-forge.mixins.json:...TagOrElementLocationMixin
    @Shadow field tag was not located in the target class
    net.minecraft.util.ExtraCodecs$TagOrElementLocation.

The bytes were indistinguishable from the real mod by name, version or file size
- only the mapping style gives it away. Rule 15 says add a gate, so this is it:
every jar that has enough classes to reference vanilla at all must contain SRG
references, or it is a dev jar and must not ship.
"""

import re
import sys
import time
import zipfile
from pathlib import Path
from typing import Dict, List, Tuple

ROOT = Path(__file__).parent.parent.resolve()

PACK_MOD_DIRS = [
    ROOT / "gte" / "overrides" / "mods",
    ROOT / "gte" / "mods",
]

# A production jar can legitimately contain no SRG reference when it is too small
# to touch vanilla at all. Measured on the last known-good pack (commit 5eb4386,
# where every third-party jar was the published artifact): the only jars with zero
# SRG references had 1, 2 and 6 classes, while every dev build that replaced them
# had 10+ (the smallest was 13). 10 separates them with margin.
MIN_CLASSES = 10

SRG_REF = re.compile(rb"[fm]_\d{4,}_")

# jar name -> reason it is allowed to have no SRG references despite its size
ALLOWLIST: Dict[str, str] = {}


def scan_jar(path: Path) -> Tuple[int, int]:
    """Return (class_count, srg_reference_count), stopping early once one is found."""
    classes = 0
    with zipfile.ZipFile(path) as jar:
        for entry in jar.namelist():
            if not entry.endswith(".class"):
                continue
            classes += 1
            if SRG_REF.search(jar.read(entry)):
                return classes, 1
    return classes, 0


def collect_pack_jars() -> List[Path]:
    jars: List[Path] = []
    for mod_dir in PACK_MOD_DIRS:
        if mod_dir.is_dir():
            jars.extend(sorted(p for p in mod_dir.rglob("*.jar") if p.is_file()))
    return jars


def main():
    if sys.stdout.encoding and sys.stdout.encoding.lower() != "utf-8":
        try:
            sys.stdout.reconfigure(encoding="utf-8", errors="replace")
        except Exception:
            pass

    print("=== GTE Pack Mapping Sanity Audit (production jars only) ===")

    existing = [d for d in PACK_MOD_DIRS if d.is_dir()]
    if not existing:
        print(f"\n[FAILED] No pack mod directory found (looked for {', '.join(str(d) for d in PACK_MOD_DIRS)}).")
        sys.exit(1)

    started = time.time()
    violations: List[str] = []
    jars = collect_pack_jars()
    small = 0

    for jar_path in jars:
        rel = jar_path.relative_to(ROOT).as_posix()
        try:
            classes, srg = scan_jar(jar_path)
        except zipfile.BadZipFile as exc:
            violations.append(f"UNREADABLE JAR: {rel} ({exc})")
            continue

        if srg:
            continue
        if classes < MIN_CLASSES:
            small += 1
            continue
        if jar_path.name in ALLOWLIST:
            continue

        violations.append(
            f"DEV (NAMED-MAPPING) JAR: {rel}\n"
            f"  {classes} classes and not a single SRG reference: this is a Mojang-mapped\n"
            f"  build (runFullPack/dev-runtime output), not the published artifact. On a\n"
            f"  production install every vanilla member it calls is named m_*/f_*, so the\n"
            f"  loader either fails on a @Shadow during mixin apply or throws\n"
            f"  NoSuchMethodError/NoSuchFieldError as soon as the class is used.\n"
            f"  Replace the file with the artifact the upstream project published\n"
            f"  (same version, real release) - never reobfuscate or patch it by hand."
        )

    elapsed = time.time() - started
    print(f"Scanned {len(jars)} jar(s) in {elapsed:.1f}s "
          f"({small} too small to reference vanilla, so not judged).")

    if violations:
        print(f"\n[FAILED] Found {len(violations)} non-production jar(s):\n")
        for v in violations:
            print(f"  [VIOLATION] {v}")
        print("\nPack mapping audit gate blocked. See AGENTS.md rules 13-15.")
        sys.exit(1)

    print("[PASSED] Every jar large enough to reference vanilla is a production (SRG) build.")
    sys.exit(0)


if __name__ == "__main__":
    main()
