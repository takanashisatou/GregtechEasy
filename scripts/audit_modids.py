#!/usr/bin/env python3
"""
GTE Pack Duplicate modId Audit (AGENTS.md Rule 14)
==================================================
Forge loads mod ids, not file names, and a fork keeps the upstream `modId`, so
two jars in one pack that declare the same id can never coexist: one of them
wins and the other's content silently disappears from the game (or the pack dies
with a duplicate-mod error before the main menu).

This has already happened once - `gtnn-1.20.1-1.3.5.3.jar` (a stale upstream GT--
release inherited from the pre-monorepo pack) sits next to the GT-- Community
Edition jar CI builds, and both declare `modId = gtnn`. Rule 15 says a check
that keeps getting violated by hand needs an automated gate rather than a
stronger sentence, so this is that gate.

What it does: for every jar shipped in the pack, read `META-INF/mods.toml` and
collect the ids declared by the `[[mods]]` sections ONLY. The ids that appear
under `[[dependencies.*]]` are requirements, not declarations - counting them
would flag every jar that depends on `forge` or `minecraft` as a duplicate.
"""

import re
import sys
import zipfile
from pathlib import Path
from typing import Dict, List, Tuple

ROOT = Path(__file__).parent.parent.resolve()

# `gte/overrides/mods` is what the pack ships today ("Lazy Pack" mode: the whole
# tree is zipped verbatim). `gte/mods` is the packwiz metafolder - empty right
# now, but if it is ever populated its jars ship too, so audit it as well.
PACK_MOD_DIRS = [
    ROOT / "gte" / "overrides" / "mods",
    ROOT / "gte" / "mods",
]

MODS_TOML_CANDIDATES = (
    "META-INF/mods.toml",
    "META-INF/neoforge.mods.toml",
)

SECTION_RE = re.compile(r"^\s*\[\[?\s*(?P<name>[^\]\s]+)\s*\]\]?\s*$")
ENTRY_RE = re.compile(r"^\s*(?P<key>[A-Za-z_][A-Za-z0-9_]*)\s*=\s*(?P<value>.+?)\s*$")
STRING_RE = re.compile(r"""^(?P<q>["'])(?P<text>.*)(?P=q)$""")

MODS_SECTION = "mods"


def strip_comment(line: str) -> str:
    """Drop a trailing TOML comment, ignoring `#` inside quoted strings."""
    out = []
    quote = None
    escaped = False
    for ch in line:
        if escaped:
            out.append(ch)
            escaped = False
            continue
        if quote:
            out.append(ch)
            if ch == "\\":
                escaped = True
            elif ch == quote:
                quote = None
            continue
        if ch in "\"'":
            quote = ch
            out.append(ch)
        elif ch == "#":
            break
        else:
            out.append(ch)
    return "".join(out)


def parse_declared_modids(toml_text: str) -> List[Tuple[str, str]]:
    """Return [(modId, version)] for every `[[mods]]` section in a mods.toml.

    Only the array-of-tables `[[mods]]` sections declare loadable mods; every
    other section (`[[dependencies.foo]]`, `[modproperties.foo]`, ...) is
    skipped, which is the whole point of parsing this way.
    """
    declared: List[Tuple[str, str]] = []
    in_mods_section = False
    current_id = None
    current_version = ""

    def flush():
        if in_mods_section and current_id is not None:
            declared.append((current_id, current_version))

    for raw_line in toml_text.splitlines():
        line = strip_comment(raw_line).strip()
        if not line:
            continue

        section = SECTION_RE.match(line)
        if section:
            flush()
            current_id = None
            current_version = ""
            name = section.group("name")
            in_mods_section = name == MODS_SECTION
            continue

        if not in_mods_section:
            continue

        entry = ENTRY_RE.match(line)
        if not entry:
            continue
        key = entry.group("key")
        value = STRING_RE.match(entry.group("value"))
        if key == "modId" and value:
            current_id = value.group("text").strip()
        elif key == "version" and value:
            current_version = value.group("text").strip()

    flush()
    return declared


def read_mods_toml(jar_path: Path) -> Tuple[str, str]:
    """Return (toml_text, entry_name) for the first mods.toml found in a jar."""
    with zipfile.ZipFile(jar_path) as jar:
        names = set(jar.namelist())
        for candidate in MODS_TOML_CANDIDATES:
            if candidate in names:
                return jar.read(candidate).decode("utf-8", errors="replace"), candidate
    return "", ""


def collect_pack_jars() -> List[Path]:
    jars: List[Path] = []
    for mod_dir in PACK_MOD_DIRS:
        if mod_dir.is_dir():
            jars.extend(sorted(p for p in mod_dir.rglob("*.jar") if p.is_file()))
    return jars


def audit_pack() -> Tuple[List[str], int, int]:
    """Return (violations, jar_count, declared_mod_count)."""
    violations: List[str] = []
    jars = collect_pack_jars()

    owners: Dict[str, List[Tuple[str, str]]] = {}
    libraries: List[str] = []

    for jar_path in jars:
        rel = jar_path.relative_to(ROOT).as_posix()
        try:
            toml_text, entry = read_mods_toml(jar_path)
        except zipfile.BadZipFile as exc:
            violations.append(
                f"UNREADABLE JAR: {rel}\n"
                f"  Not a readable zip archive ({exc}); the duplicate-modId invariant cannot be verified."
            )
            continue
        except OSError as exc:
            violations.append(f"UNREADABLE JAR: {rel} ({exc})")
            continue

        if not entry:
            libraries.append(rel)
            continue

        declared = parse_declared_modids(toml_text)
        if not declared:
            violations.append(
                f"NO [[mods]] MODID: {rel}\n"
                f"  {entry} exists but declares no modId, so this jar's identity is unknown."
            )
            continue

        seen_in_this_jar = set()
        for mod_id, version in declared:
            key = mod_id.lower()
            owners.setdefault(key, []).append((rel, version or "unversioned"))
            if key in seen_in_this_jar:
                violations.append(
                    f"DUPLICATE MODID INSIDE ONE JAR: {rel}\n"
                    f"  Declares `{mod_id}` in more than one [[mods]] section."
                )
            seen_in_this_jar.add(key)

    for mod_id, jars_for_id in sorted(owners.items()):
        distinct_files = sorted({rel for rel, _ in jars_for_id})
        if len(distinct_files) > 1:
            detail = "\n".join(f"    - {rel}  (version {version})" for rel, version in sorted(jars_for_id))
            violations.append(
                f"DUPLICATE MODID `{mod_id}` IN {len(distinct_files)} JARS:\n"
                f"{detail}\n"
                f"  Forge loads mod ids, so only one of these can win. A fork keeps the upstream\n"
                f"  modId: keep the jar this repository builds and delete the inherited release.\n"
                f"  Change versions through the build configuration, never by swapping a jar in by hand."
            )

    return violations, len(jars), len(owners)


def main():
    if sys.stdout.encoding and sys.stdout.encoding.lower() != "utf-8":
        try:
            sys.stdout.reconfigure(encoding="utf-8", errors="replace")
        except Exception:
            pass

    print("=== GTE Pack Duplicate modId Audit (Rule 14) ===")

    existing_dirs = [d for d in PACK_MOD_DIRS if d.is_dir()]
    if not existing_dirs:
        print(f"\n[FAILED] No pack mod directory found (looked for {', '.join(str(d) for d in PACK_MOD_DIRS)}).")
        sys.exit(1)

    violations, jar_count, mod_count = audit_pack()

    print(f"Scanned {jar_count} jar(s) in {', '.join(d.relative_to(ROOT).as_posix() for d in existing_dirs)}.")
    print(f"Collected {mod_count} distinct modId(s) from [[mods]] sections.")

    if violations:
        print(f"\n[FAILED] Found {len(violations)} modId violation(s):\n")
        for v in violations:
            print(f"  [VIOLATION] {v}")
        print("\nPack modId audit gate blocked. See AGENTS.md rules 13-15.")
        sys.exit(1)

    print("[PASSED] Every modId is declared by exactly one jar in the pack.")
    sys.exit(0)


if __name__ == "__main__":
    main()
