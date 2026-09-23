#!/usr/bin/env python3
"""
GTE Dev-Runtime <-> Pack Parity Audit (AGENTS.md Rule 15)
=========================================================
`runFullPack` and the shipped LazyPack are supposed to load the same mod set, and
they no longer do. Two independent mechanisms drift apart:

1. `modules/gte-dev-runtime/build.gradle` lists ~33 mods in
   `packModsAlreadyProvided`: instead of the pack's jar, the dev run resolves the
   mod from a Maven coordinate pinned in `gradle/forge.versions.toml`. Nothing
   keeps that pin equal to the version actually shipped in `gte/overrides/mods/`,
   so the dev client happy-paths on a version players never see (and vice versa).

2. The exclusion used to be a *substring* match on the file name, which silently
   dropped `extendedae_plus-1.5.1.jar` because the string "extendedae" is part
   of it. The dev run was quietly one mod short of the pack and nothing said so.

This gate covers both: it re-derives which pack jars the dev runtime skips, and
for every one it verifies the version the coordinate supplies matches the jar the
pack ships. Divergences recorded in `scripts/dev_pack_parity_baseline.json` are
known debt and only warned about; anything new fails the build.

Usage:
    python scripts/audit_dev_pack_parity.py
    python scripts/audit_dev_pack_parity.py --update-baseline
"""

import json
import re
import sys
import zipfile
from dataclasses import dataclass
from pathlib import Path
from typing import Dict, List, Optional, Tuple

sys.path.insert(0, str(Path(__file__).parent))

from audit_modids import parse_declared_modids, read_mods_toml  # noqa: E402

ROOT = Path(__file__).parent.parent.resolve()
PACK_MODS_DIR = ROOT / "gte" / "overrides" / "mods"
DEV_RUNTIME_BUILD = ROOT / "modules" / "gte-dev-runtime" / "build.gradle"
ROOT_CATALOG = ROOT / "gradle" / "forge.versions.toml"
BASELINE_PATH = Path(__file__).parent / "dev_pack_parity_baseline.json"


def normalize_version(value: str) -> str:
    """Comparable form of a version string.

    Three shape differences are noise, not a different build:
      - build metadata: `11.1.136+forge` vs `11.1.136`
      - a loader suffix: `2001.1.7-forge` vs `2001.1.7`
      - a loader prefix: `1.20.1-Forge-11.13.2` vs `11.13.2`
    A `+` cannot appear in a Maven version at all, and the loader tokens carry no
    version information, so none of them can be the difference between two real
    versions. Everything else is compared as-is.
    """
    text = value.strip().lstrip("v").split("+", 1)[0]
    return text


LOADER_TOKENS = ("forge", "fabric", "neoforge", "universal", "mc", "build")


def versions_match(catalog_version: str, pack_version: str) -> bool:
    """True when the two strings describe the same published version."""
    left = normalize_version(catalog_version)
    right = normalize_version(pack_version)
    if left == right:
        return True

    # Same value with a loader qualifier appended: `6.0.1` vs `6.0.1-forge`.
    for suffix in ("", "-forge", "-fabric", "-neoforge", "-universal"):
        if left == right + suffix or right == left + suffix:
            return True

    # One side carries a Minecraft-version or loader prefix:
    # `11.13.2` vs `1.20.1-Forge-11.13.2`, `3.23.26.1315` vs `1.20.1-3.23.26.1315`.
    for short, long in ((left, right), (right, left)):
        if long.endswith(f"-{short}"):
            prefix = long[: -(len(short) + 1)]
            tokens = [t for t in re.split(r"[-_]", prefix.lower()) if t]
            if tokens and all(
                token in LOADER_TOKENS or re.fullmatch(r"\d+(\.\d+)*", token) for token in tokens
            ):
                return True
    return False


def normalize_alias(value: str) -> str:
    """Compare a coordinate name to a catalog alias ignoring punctuation.

    `packModsAlreadyProvided` names the coordinate the way the mod is known
    ("cloth-config", "ftb-library", "item-filters") while the catalog keys the
    alias without separators ("clothconfig", "ftblibrary", "item-filters").
    Both refer to the same entry, so match on the alphanumerics alone.
    """
    return re.sub(r"[^a-z0-9]", "", value.strip().lower())


@dataclass
class Divergence:
    """One mod the dev runtime loads at a different version than the pack ships."""

    mod_id: str
    jar: str  # repo-relative
    pack_version: str
    coordinate: str
    dev_versions: List[str]

    @property
    def key(self) -> str:
        return f"{self.mod_id}:{self.jar}"

    @property
    def signature(self) -> str:
        return f"{self.pack_version}|{','.join(self.dev_versions)}"

    def render(self, known: bool) -> str:
        tail = (
            f"\n  (recorded in {BASELINE_PATH.name} as known debt; "
            f"align {ROOT_CATALOG.relative_to(ROOT).as_posix()} to burn it down)"
            if known
            else ""
        )
        return (
            f"VERSION DRIFT: pack ships {self.jar}\n"
            f"  declared version : {self.pack_version}\n"
            f"  dev runtime loads: {', '.join(self.dev_versions)}  "
            f"(via the '{self.coordinate}' coordinate,\n"
            f"  pinned in {ROOT_CATALOG.relative_to(ROOT).as_posix()})\n"
            f"  The dev client and the shipped pack are running different code under this mod.{tail}"
        )


def parse_groovy_list(text: str, variable: str) -> List[str]:
    """Read a flat Groovy list literal `def <variable> = [ 'a', 'b' ]`."""
    match = re.search(rf"def\s+{re.escape(variable)}\s*=\s*\[(.*?)\]", text, re.DOTALL)
    if not match:
        raise ValueError(f"could not find `def {variable} = [...]` in {DEV_RUNTIME_BUILD}")
    return re.findall(r"['\"]([^'\"]+)['\"]", match.group(1))


def parse_groovy_map(text: str, variable: str) -> Dict[str, str]:
    """Read a Groovy map literal `def <variable> = [ 'k' : 'v', ... ]`."""
    match = re.search(rf"def\s+{re.escape(variable)}\s*=\s*\[(.*?)\n\]", text, re.DOTALL)
    if not match:
        raise ValueError(f"could not find `def {variable} = [...]` in {DEV_RUNTIME_BUILD}")
    body = match.group(1)
    pairs = re.findall(r"['\"]([^'\"]+)['\"]\s*:\s*['\"]([^'\"]+)['\"]", body)
    if not pairs:
        raise ValueError(f"`{variable}` in {DEV_RUNTIME_BUILD} parsed to zero entries")
    return {k: v for k, v in pairs}


def parse_version_catalog(path: Path) -> Tuple[Dict[str, str], Dict[str, str]]:
    """Return ({version_alias: version}, {library_alias: "<module>[@ref:<ref>]"})

    Hand-parsed rather than pulling in `tomllib`: this script has to run on the
    same stdlib-only Python as the pack builders, and the catalog uses nothing
    but `[versions]` / `[libraries]` tables of flat `key = "value"` lines.
    """
    versions: Dict[str, str] = {}
    libraries: Dict[str, str] = {}
    section = None
    for raw in path.read_text(encoding="utf-8").splitlines():
        line = raw.split("#", 1)[0].strip()
        if not line:
            continue
        if line.startswith("["):
            section = line.strip("[]").strip()
            continue
        if "=" not in line:
            continue
        key, value = line.split("=", 1)
        key, value = key.strip(), value.strip()
        if section == "versions":
            versions[key] = value.strip('"')
            continue
        if section != "libraries":
            continue
        module = re.search(r'module\s*=\s*"([^"]+)"', value)
        if not module:
            continue
        ref = re.search(r'version\.ref\s*=\s*"([^"]+)"', value)
        libraries[key] = f"{module.group(1)}@ref:{ref.group(1)}" if ref else module.group(1)
    return versions, libraries


def resolve_pin(pin: str, versions: Dict[str, str], libraries: Dict[str, str]) -> Optional[Tuple[str, str, str]]:
    """Resolve a `modLocalRuntime(...)` expression to (alias, artifact, version).

    Three shapes appear in the dev runtime:
      - a catalog alias:      forge.ae2, forge.ldlib        -> look up `ae2` / `ldlib`
      - a catalog bundle:     forge.bundles.jei             -> jei-forge-impl
      - a literal coordinate: blank:gtmthings:1.5.4         -> parsed directly
    """
    pin = pin.strip().strip("()'\"")
    if not pin:
        return None

    if pin.startswith("forge."):
        alias = pin[len("forge."):]
        if alias.startswith("bundles."):
            alias = {
                "jei": "jei-forge-impl",
                "kjs": "kubejs",
            }.get(alias[len("bundles."):], alias[len("bundles."):])
        entry = libraries.get(alias)
        if entry is None:
            # Fall back to a punctuation-insensitive lookup: the catalog spells
            # some aliases differently from the coordinate name used elsewhere
            # ("itemfilters" in the catalog vs "item-filters" in the map value).
            # Rank the candidates so the most specific match wins: an exact
            # normalized key first, then the shortest key the wanted name
            # extends ("itemfilters" over "itemfiltersforge").
            wanted = normalize_alias(alias)
            candidates = [
                k
                for k in libraries
                if normalize_alias(k) == wanted
                or normalize_alias(k).startswith(wanted)
                or wanted.startswith(normalize_alias(k))
            ]
            candidates.sort(
                key=lambda k: (
                    normalize_alias(k) != wanted,
                    not normalize_alias(k).startswith(wanted),
                    len(normalize_alias(k)),
                )
            )
            if candidates:
                alias = candidates[0]
                entry = libraries.get(alias)
        if entry is None:
            return None
        if "@" in entry:
            module, ref = entry.split("@", 1)
            # `@ref:<alias>` points into [versions]; anything else after `@` is
            # the version itself (how injected literal coordinates are stored).
            version = versions.get(ref[4:]) if ref.startswith("ref:") else ref
        else:
            module, version = entry, None
        if version is None:
            return None
        return alias, module.split(":")[-1], version

    # A literal coordinate: group:artifact:version. It has no catalog alias, so
    # name it by its artifact - that is the spelling a map value can match.
    parts = pin.split(":")
    if len(parts) >= 3 and all(parts[:3]):
        return parts[-2], parts[-2], parts[-1]
    return None


# mods.toml may build its version from the jar manifest; the real value then only
# exists in the file name ("ferritecore-6.0.1-forge.jar").
PLACEHOLDER_VERSION = re.compile(r"\$\{")


def effective_version(jar: Path, declared: str) -> str:
    """The version to compare against a catalog pin.

    Prefers the `mods.toml` value, falling back to the version segment of the
    file name when the manifest leaves a `${file.jarVersion}` placeholder.
    """
    if declared and not PLACEHOLDER_VERSION.search(declared):
        return declared
    stem = jar.name[: -len(".jar")] if jar.name.endswith(".jar") else jar.name
    match = re.search(r"[-_](\d[^-_+]*.*)$", stem)
    return match.group(1) if match else declared


def pack_jar_versions() -> Dict[str, Tuple[Path, str]]:
    """modId (lowercase) -> (jar path, declared version) for the shipped pack."""
    found: Dict[str, Tuple[Path, str]] = {}
    for jar in sorted(PACK_MODS_DIR.glob("*.jar")):
        try:
            toml_text, entry = read_mods_toml(jar)
        except (zipfile.BadZipFile, OSError):
            continue
        if not entry:
            continue
        declared = parse_declared_modids(toml_text)
        if not declared:
            continue
        # A jar may declare several modIds (e.g. Mekanism ships Mekanism +
        # MekanismGenerators). Key them all; the version is the jar's.
        version = next((v for _, v in declared if v), "")
        for mod_id, mod_version in declared:
            found[mod_id.lower()] = (jar, mod_version or version)
    return found


def dev_runtime_coordinates() -> Tuple[Dict[str, List[str]], List[str]]:
    """Resolve the dev runtime's `modLocalRuntime(...)` list into versions.

    Returns (modId -> versions, unresolvable coordinate names). The first maps
    each `packModsAlreadyProvided` key to the version(s) the dev runtime loads
    in its place; the second lists coordinates the catalog could not resolve, so
    the caller can fail instead of silently treating them as "not provided".
    """
    build_text = DEV_RUNTIME_BUILD.read_text(encoding="utf-8")
    provided = parse_groovy_map(build_text, "packModsAlreadyProvided")
    versions, libraries = parse_version_catalog(ROOT_CATALOG)

    # Every `modLocalRuntime(...)` argument, collected first so literal
    # coordinates (`dev.latvian.mods:item-filters-forge:2001.1.0-build.59`) become
    # addressable by artifact name exactly like a catalog entry.
    arguments: List[str] = []
    for line in build_text.splitlines():
        for arg in re.findall(r"modLocalRuntime\(\s*([^)]+?)\s*\)", line.strip()):
            arguments.append(arg.strip().strip("()'\""))

    for argument in arguments:
        parts = argument.split(":")
        if len(parts) >= 3 and all(parts[:3]) and not argument.startswith("gte.mods"):
            libraries.setdefault(parts[-2], f"{parts[0]}:{parts[1]}@{parts[-1]}")
    # Every way to name a dependency -> the version the dev runtime loads.
    by_name: Dict[str, List[str]] = {}

    def record(version: str, *names: str) -> None:
        for name in names:
            if not name:
                continue
            bucket = by_name.setdefault(normalize_alias(name), [])
            if version not in bucket:
                bucket.append(version)

    bundle_members = {
        "jei": ("jei-common-api", "jei-forge-api", "jei-forge-impl"),
        "kjs": ("kubejs", "rhino", "architectury"),
    }

    demangled: List[str] = []

    for line in build_text.splitlines():
        for arg in re.findall(r"modLocalRuntime\(\s*([^)]+?)\s*\)", line.strip()):
            arg = arg.strip().strip("()'\"")
            members = [arg]
            if arg.startswith("forge.bundles."):
                members = [f"forge.{m}" for m in bundle_members.get(arg[len("forge.bundles."):], ())]
                # Also record the bundle itself: `packModsAlreadyProvided` refers
                # to the group ("jei"), not to one of its members, and every
                # member of a bundle shares one version.
                for member in members:
                    resolved = resolve_pin(member, versions, libraries)
                    if resolved:
                        record(resolved[2], arg[len("forge."):])
                        break
            for member in members:
                resolved = resolve_pin(member, versions, libraries)
                if not resolved:
                    demangled.append(member)
                    continue
                alias, artifact, version = resolved
                record(version, alias, artifact)

    # `packModsAlreadyProvided` values are version-catalog resource names, which
    # is exactly what `resolve_pin("forge.<name>")` consumes. The catalog-key
    # spelling is the contract; the resolved artifact spelling is accepted too so
    # the map keeps working if someone writes the coordinate instead.
    result: Dict[str, List[str]] = {}
    demangled_normalized = {normalize_alias(name) for name in demangled}

    for mod_id, argument in provided.items():
        found: List[str] = []
        for name in re.split(r"[,/]", argument):
            name = name.strip()
            if not name:
                continue
            resolved = resolve_pin(f"forge.{name}", versions, libraries) or resolve_pin(
                name, versions, libraries
            )
            # Only accept the version if the dev runtime or the argument list
            # actually names this resource - an alias the catalog knows but no
            # `modLocalRuntime(...)` uses would be a phantom.
            if resolved:
                alias, artifact, version = resolved
                if normalize_alias(alias) in by_name or normalize_alias(artifact) in by_name:
                    found = [version]
                    break
            direct = by_name.get(normalize_alias(name))
            if direct:
                found = direct
                break
        if found:
            result[mod_id.lower()] = sorted(set(found))
        elif normalize_alias(argument) in demangled_normalized:
            # Named by the map, but its coordinate did not resolve - reported by
            # the caller as an unresolved coordinate rather than as absent.
            result[mod_id.lower()] = []
        elif any(normalize_alias(m) == normalize_alias(argument) for m in demangled):
            result[mod_id.lower()] = []  # named, but unparseable - reported below
    return result, demangled


@dataclass
class Finding:
    """A structural problem, as opposed to a version divergence."""

    message: str


def audit() -> Tuple[List[Divergence], List[Finding], int]:
    """Return (divergences, structural findings, compared count)."""
    build_text = DEV_RUNTIME_BUILD.read_text(encoding="utf-8")
    provided = parse_groovy_map(build_text, "packModsAlreadyProvided")
    unsafe = parse_groovy_list(build_text, "packModsDevUnsafe")

    jar_mods = pack_jar_versions()
    coordinates, demangled = dev_runtime_coordinates()

    baseline = {}
    if BASELINE_PATH.is_file():
        baseline = json.loads(BASELINE_PATH.read_text(encoding="utf-8")).get("known_divergences", {})

    divergences: List[Divergence] = []
    findings: List[Finding] = []
    checked = 0

    for mod_id, coordinate in sorted(provided.items()):
        if mod_id not in jar_mods:
            continue  # dev-only library, not shipped in the pack - nothing to compare
        jar, declared_version = jar_mods[mod_id]
        pack_version = effective_version(jar, declared_version)
        rel = jar.relative_to(ROOT).as_posix()

        if any(entry in jar.name.lower() for entry in unsafe):
            continue

        # A `modLocalRuntime(...)` we could not resolve to a version at all: the
        # gate cannot tell what the dev runtime loads, so refuse to pass.
        unresolved = [
            name
            for name in demangled
            if normalize_alias(name) == normalize_alias(coordinate)
        ]
        if unresolved:
            findings.append(
                Finding(
                    f"UNRESOLVED COORDINATE for `{mod_id}`: {rel}\n"
                    f"  `packModsAlreadyProvided` names the resource '{coordinate}', but\n"
                    f"  `modLocalRuntime({unresolved[0]})` does not resolve to a version through\n"
                    f"  {ROOT_CATALOG.relative_to(ROOT).as_posix()}, so the dev runtime's mod set is unknown."
                )
            )
            continue

        candidates = coordinates.get(mod_id)
        if not candidates:
            findings.append(
                Finding(
                    f"NO COORDINATE FOR `{mod_id}`: {rel}\n"
                    f"  `packModsAlreadyProvided` says modId `{mod_id}` is provided by the\n"
                    f"  '{coordinate}' resource, but no `modLocalRuntime(...)` in the dev runtime\n"
                    f"  provides it, so the dev run silently loads neither and runs without this mod."
                )
            )
            continue

        checked += 1
        # A Modrinth-style coordinate (resourcefullib = "5659871") carries a build
        # id, not a version, so there is nothing comparable to assert against.
        if not any(re.search(r"\d", candidate) for candidate in candidates):
            continue
        if any(versions_match(candidate, pack_version) for candidate in candidates):
            continue

        divergence = Divergence(
            mod_id=mod_id,
            jar=rel,
            pack_version=pack_version,
            coordinate=coordinate,
            dev_versions=candidates,
        )
        # Only still-current entries count as known debt; a stale baseline line
        # (the pack jar moved on) is a fresh divergence and must be re-reviewed.
        if str(baseline.get(divergence.key, "")) == divergence.signature:
            continue
        divergences.append(divergence)

    return divergences, findings, checked


def main() -> None:
    if sys.stdout.encoding and sys.stdout.encoding.lower() != "utf-8":
        try:
            sys.stdout.reconfigure(encoding="utf-8", errors="replace")
        except Exception:
            pass

    print("=== GTE Dev-Runtime <-> Pack Parity Audit ===")

    if not PACK_MODS_DIR.is_dir():
        print(f"\n[FAILED] Pack mod directory missing: {PACK_MODS_DIR}")
        sys.exit(1)
    if not DEV_RUNTIME_BUILD.is_file():
        print(f"\n[FAILED] Dev runtime build script missing: {DEV_RUNTIME_BUILD}")
        sys.exit(1)

    if "--update-baseline" in sys.argv:
        # Rewrite from scratch, not merge. `audit()` returns everything that is
        # NOT already recorded, so baselining exactly its output is what makes
        # the file mean "the divergences a human has looked at" - re-running the
        # flag after aligning a coordinate therefore drops the fixed entries.
        divergences, findings, _ = audit()
        entries = {d.key: d.signature for d in divergences}
        BASELINE_PATH.write_text(
            json.dumps(
                {
                    "_comment": (
                        "Known dev-runtime/pack version divergences. Each entry means the dev "
                        "client loads a different version of this mod than the pack ships. "
                        "Burn these down by aligning gradle/forge.versions.toml with the shipped "
                        "jars; regenerate with `python scripts/audit_dev_pack_parity.py "
                        "--update-baseline` only for a divergence you have actually reviewed."
                    ),
                    "known_divergences": dict(sorted(entries.items())),
                },
                indent=2,
                ensure_ascii=False,
            )
            + "\n",
            encoding="utf-8",
        )
        print(f"Baseline rewritten with {len(entries)} known divergence(s): {BASELINE_PATH.name}")
        for finding in findings:
            print(f"  [NOT BASELINED - must be fixed] {finding.message.splitlines()[0]}")
        sys.exit(0)

    divergences, findings, checked = audit()
    print(f"Compared {checked} coordinate-provided mod(s) against {PACK_MODS_DIR.relative_to(ROOT).as_posix()}.")

    baseline_count = 0
    if BASELINE_PATH.is_file():
        baseline_count = len(
            json.loads(BASELINE_PATH.read_text(encoding="utf-8")).get("known_divergences", {})
        )
    if baseline_count:
        print(
            f"[KNOWN DEBT] {baseline_count} divergence(s) recorded in {BASELINE_PATH.name} "
            f"and not re-reported; {len(divergences)} new one(s) found."
        )

    if findings or divergences:
        total = len(findings) + len(divergences)
        print(f"\n[FAILED] {total} new dev/pack parity problem(s):\n")
        for finding in findings:
            print(f"  [VIOLATION] {finding.message}\n")
        for divergence in divergences:
            print(f"  [VIOLATION] {divergence.render(known=False)}\n")
        print("Dev/pack parity gate blocked. Align the coordinate in gradle/forge.versions.toml with")
        print("the shipped jar, or - if a divergence is deliberate - record it with")
        print("`python scripts/audit_dev_pack_parity.py --update-baseline` after reviewing it.")
        sys.exit(1)

    print("[PASSED] No new dev-runtime/pack divergence.")


if __name__ == "__main__":
    main()
