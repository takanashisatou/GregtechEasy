#!/usr/bin/env python3
"""
GTE Module Jar Freshness Audit (AGENTS.md Rule 15)
==================================================
`gte/overrides/mods/` is CI-owned and this repository treats its contents as the
source of truth for what the pack ships - but nothing ever checked that those
jars still correspond to the module sources next to them. They stopped doing so
quietly:

  - the three module jars were last committed on 2026-09-01;
  - `gtecore`'s sources gained 28 files on 2026-09-20 (`7bcf786`, `e42461c`);
  - `gtm-reborn` gained 4 commits of recipe fixes after that date.

The failure mode is the worst kind: the version strings still agree
(`3.0.7-nightly` is `3.0.7-nightly`), so `gte/overrides/mods/` looks consistent
while shipping code three weeks older than the tree it sits in. Players then get
a `nightly` whose zip and whose standalone module jars are different builds under
one version number, and Forge has no version ordering to arbitrate.

What it checks, per module, without needing submodules or a build:

 1. the shipped jar exists and its declared `mod_version` matches
    `gradle.properties`;
 2. every compiled top-level source file has a `.class` entry in that jar - a
    source file with no class means the jar predates it. This is the signal that
    catches the 28 `gtecore` files;
 3. (informational) whether the submodule has commits newer than the jar's own
    commit, so a stale-but-still-complete jar is at least reported.

Usage:
    python scripts/audit_module_jar_freshness.py
"""

import re
import subprocess
import sys
import zipfile
from pathlib import Path
from typing import Dict, List, NamedTuple, Optional, Set

ROOT = Path(__file__).parent.parent.resolve()

# module directory -> glob matching its shipped jar in gte/overrides/mods.
#
# `gtecore` is a glob on purpose: since 2026-09-24 its nightly version carries a
# build number (the commit it was built from, e.g.
# `gtecore-1.20.1-3.0.7-nightly-0c30e47.jar`), so the file name changes with every
# build and cannot be pinned here. The other two ship clean release versions.
MODULES = {
    "gtm-reborn": "gtm-reborn-1.20.1-*.jar",
    "gt--": "gt---1.20.1-*.jar",
    "gtecore": "gtecore-1.20.1-*.jar",
}

# Jars the pack must never ship: build intermediates and dev outputs.
NON_RUNNABLE_SUFFIXES = ("-slim.jar", "-dev-slim.jar", "-dev-embeds.jar", "-dev.jar", "-sources.jar")

# The number of source files that may legitimately have no class in the jar
# before the gate calls the jar stale. A stray file is normal (a commented-out
# source, a Kotlin file whose package line was disabled); 28 was not.
MAX_UNCOMPILED_SOURCES = 2

PROPERTIES_VERSION_KEY = "mod_version"

# `[[mods]] modId` and `version` lines, as audit_modids.py parses them.
MODS_TOML_CANDIDATES = ("META-INF/mods.toml", "META-INF/neoforge.mods.toml")


class ModuleReport(NamedTuple):
    name: str
    jar: Path
    sources: int
    compiled: int
    uncompiled: List[str]
    source_extensions: Dict[str, str]
    declared_version: str
    expected_version: str
    pointer_commits_since_jar: Optional[int]
    pointer_source_commits_since_jar: Optional[int]
    newest_commit: str


def pointer_state(module: str, jar: Path) -> Tuple[Optional[int], Optional[int], str]:
    """How far modules/<module> has moved since the jar was last committed.

    Works in a submodule-less checkout, which is the whole point: the LazyPack job
    runs `actions/checkout` without submodules, so the source-tree comparison
    below cannot run there - but the gitlink recorded in the root tree can still
    be compared against the one that heads the commit which last built this jar.

    Returns (commits_moved, of_which_touched_src, newest_commit_summary). A jar
    whose module moved only through documentation or CI edits is reported but not
    failed; one whose module gained source commits is genuinely stale.
    """
    jar_commit = run_git(
        ["log", "-1", "--format=%H", "--", f"gte/overrides/mods/{jar.name}"], ROOT
    )
    if not jar_commit:
        return None, None, ""

    def pointer_at(rev: str) -> Optional[str]:
        line = run_git(["ls-tree", rev, f"modules/{module}"], ROOT)
        if not line:
            return None
        fields = line.split()
        return fields[2] if len(fields) >= 3 else None

    before = pointer_at(jar_commit)
    now = pointer_at("HEAD")
    if not before or not now or before == now:
        return 0, 0, ""

    module_dir = ROOT / "modules" / module
    if not (module_dir / ".git").exists():
        # Submodule not checked out: the counts are unknowable here, but the fact
        # that the pointer moved is not.
        return -1, -1, ""

    count = run_git(["rev-list", "--count", f"{before}..{now}"], module_dir)
    src_count = run_git(["rev-list", "--count", f"{before}..{now}", "--", "src"], module_dir)
    newest = run_git(["log", "-1", "--format=%h %ad %s", "--date=short", now], module_dir) or ""
    return (
        int(count) if count and count.isdigit() else None,
        int(src_count) if src_count and src_count.isdigit() else None,
        newest,
    )


def inspect(module: str, jar: Path) -> ModuleReport:
    module_dir = ROOT / "modules" / module
    src_main = module_dir / "src" / "main"

    sources = source_classes(src_main) if src_main.is_dir() else {}
    classes = jar_classes(jar) if jar.is_file() else set()
    # A class matches its source when the jar carries a `.class` entry of the same
    # fully qualified name (inner classes and Kotlin file facades additionally
    # appear as `Outer$Inner` / `FileKt`, which are not separate source files).
    uncompiled = sorted(fq for fq in sources if fq not in classes)

    moved, moved_src, newest = pointer_state(module, jar)

    return ModuleReport(
        name=module,
        jar=jar,
        sources=len(sources),
        compiled=len(sources) - len(uncompiled),
        uncompiled=uncompiled,
        source_extensions={fq: sources[fq] for fq in uncompiled},
        declared_version=jar_declared_version(jar) if jar.is_file() else "",
        expected_version=expected_version(module_dir) if module_dir.is_dir() else "",
        pointer_commits_since_jar=moved,
        pointer_source_commits_since_jar=moved_src,
        newest_commit=newest,
    )


def run_git(args: List[str], cwd: Path) -> Optional[str]:
    """Run git and return stdout, or None when git/the repo is unavailable."""
    try:
        result = subprocess.run(
            ["git", *args],
            cwd=str(cwd),
            capture_output=True,
            text=True,
            timeout=60,
        )
    except (OSError, subprocess.SubprocessError):
        return None
    if result.returncode != 0:
        return None
    return result.stdout.strip()


def declares_package(path: Path) -> bool:
    """True when a source file has an active `package` line.

    A file whose package declaration is commented out (gt-- ships one:
    `EmiPlayerInventoryMixin.java`) compiles to nothing, so it must not be
    counted as a missing class.
    """
    try:
        text = path.read_text(encoding="utf-8", errors="replace")
    except OSError:
        return False
    for raw in text.splitlines():
        line = raw.strip()
        if not line:
            continue
        if line.startswith("//") or line.startswith("*") or line.startswith("/*"):
            continue
        return line.startswith("package ")
    return False


def source_classes(src_main: Path) -> Dict[str, str]:
    """Map every compilable class in a `src/main` tree to its source extension."""
    found: Dict[str, str] = {}
    for path in list(src_main.rglob("*.java")) + list(src_main.rglob("*.kt")):
        parts = path.relative_to(src_main).parts
        root = next((i for i, part in enumerate(parts) if part in ("java", "kotlin")), None)
        if root is None:
            continue
        fqcn = "/".join(parts[root + 1:]).rsplit(".", 1)[0]
        if fqcn.endswith("package-info") or not declares_package(path):
            continue
        found[fqcn] = path.suffix
    return found


def jar_classes(jar: Path) -> Set[str]:
    with zipfile.ZipFile(jar) as archive:
        return {name[:-6] for name in archive.namelist() if name.endswith(".class")}


def jar_declared_version(jar: Path) -> str:
    with zipfile.ZipFile(jar) as archive:
        names = set(archive.namelist())
        for candidate in MODS_TOML_CANDIDATES:
            if candidate not in names:
                continue
            text = archive.read(candidate).decode("utf-8", errors="replace")
            match = re.search(r'(?m)^\s*version\s*=\s*["\']([^"\']+)["\']', text)
            return match.group(1) if match else ""
    return ""


def expected_version(module_dir: Path) -> str:
    text = (module_dir / "gradle.properties").read_text(encoding="utf-8")
    match = re.search(rf"(?m)^\s*{PROPERTIES_VERSION_KEY}\s*=\s*(\S+)\s*$", text)
    return match.group(1) if match else ""


def runnable_jars(module: str, pattern: str) -> Tuple[List[Path], List[Path]]:
    """Return (runnable jars matching the pattern, non-runnable leftovers).

    The pattern globs because a build-numbered nightly changes its file name on
    every commit. Filtering build intermediates matters more here than it looks:
    `-dev-slim` / `-slim` / `-dev-embeds` / `-sources` all match `gtecore-1.20.1-*`
    and would otherwise be mistaken for the shipped jar.
    """
    candidates = sorted((ROOT / "gte" / "overrides" / "mods").glob(pattern))
    runnable, debris = [], []
    for candidate in candidates:
        lower = candidate.name.lower()
        (debris if lower.endswith(NON_RUNNABLE_SUFFIXES) else runnable).append(candidate)
    return runnable, debris


def main() -> None:
    if sys.stdout.encoding and sys.stdout.encoding.lower() != "utf-8":
        try:
            sys.stdout.reconfigure(encoding="utf-8", errors="replace")
        except Exception:
            pass

    print("=== GTE Module Jar Freshness Audit ===")

    reports: List[ModuleReport] = []
    failures: List[str] = []

    for module, pattern in MODULES.items():
        runnable, debris = runnable_jars(module, pattern)
        if not runnable:
            failures.append(
                f"MISSING MODULE JAR: no gte/overrides/mods/{pattern} matches\n"
                f"  The pack ships no runnable jar for modules/{module}, so the pack and the\n"
                f"  module sources cannot be the same build."
            )
            continue
        if len(runnable) > 1:
            names = "\n".join(f"      - {jar.name}" for jar in runnable)
            failures.append(
                f"AMBIGUOUS MODULE JAR: {len(runnable)} jars match gte/overrides/mods/{pattern}\n"
                f"{names}\n"
                f"  Forge loads mod ids, not file names, so every one of these declares the same\n"
                f"  modId and version and only one can win (AGENTS.md rule 14). A build-numbered\n"
                f"  nightly is expected to leave exactly one match; delete the stale jar."
            )
            continue
        if debris:
            # Harmless for Forge but they are what the pack's own gates reject, so
            # say so rather than letting them sit there looking like a second build.
            print(
                f"  {module}: {len(debris)} non-runnable jar(s) alongside the shipped one "
                f"({', '.join(jar.name for jar in debris)})"
            )
        reports.append(inspect(module, runnable[0]))

    for report in reports:
        rel = report.jar.relative_to(ROOT).as_posix()
        print(f"\n  {report.name}: {rel}")
        source_tree = (ROOT / "modules" / report.name / "src" / "main").is_dir()
        if source_tree:
            print(f"    source classes {report.compiled}/{report.sources} present in the jar")
        else:
            print("    source tree absent (submodule not checked out) - class check skipped")
        if report.declared_version and report.expected_version:
            declared = report.declared_version
            expected = report.expected_version
            # The jar may legitimately carry a build number after the base version
            # (`3.0.7-nightly-0c30e47` for a `3.0.7-nightly` gradle.properties), so
            # compare the declared version as a prefix rather than for equality -
            # otherwise every nightly build would report a mismatch.
            if declared == expected:
                print(f"    declared version matches gradle.properties ({declared})")
            elif declared.startswith(expected + "-"):
                print(
                    f"    declared version carries a build number: {declared} "
                    f"(base {expected})"
                )
            else:
                failures.append(
                    f"VERSION MISMATCH: {rel}\n"
                    f"  jar declares     : {declared}\n"
                    f"  gradle.properties: {expected}\n"
                    f"  The pack ships a different version than the module builds."
                )

        # Signal 1 (needs the submodule): source files the jar has no class for.
        if report.uncompiled:
            detail = "\n".join(
                f"      - {fq}{report.source_extensions.get(fq, '.java')}"
                for fq in report.uncompiled[:10]
            )
            more = (
                f"\n      ... and {len(report.uncompiled) - 10} more"
                if len(report.uncompiled) > 10
                else ""
            )
            if len(report.uncompiled) > MAX_UNCOMPILED_SOURCES:
                failures.append(
                    f"STALE MODULE JAR: {rel}\n"
                    f"  {len(report.uncompiled)} source file(s) in modules/{report.name}/src/main have no\n"
                    f"  compiled class in this jar, so the jar predates them:\n"
                    f"{detail}{more}\n"
                    f"  The pack would ship code older than the tree it was built from, under the same\n"
                    f"  version string. Rebuild the module and commit the new jar (see AGENTS.md\n"
                    f"  'Modpack Assembly' - jars reach gte/overrides/mods/ through sync-build.yml)."
                )
            else:
                print(f"    {len(report.uncompiled)} source file(s) without a class (within tolerance):")
                print(detail)

        # Signal 2 (works without submodules): the module moved since this jar
        # was last committed. This is the check that also runs in the LazyPack
        # job, which checks out no submodules at all.
        moved = report.pointer_commits_since_jar
        moved_src = report.pointer_source_commits_since_jar
        class_check_failed = len(report.uncompiled) > MAX_UNCOMPILED_SOURCES
        if moved is None:
            print("    [INFO] submodule pointer history unavailable - staleness not cross-checked")
        elif moved < 0:
            failures.append(
                f"STALE MODULE JAR: {rel}\n"
                f"  The submodule pointer for modules/{report.name} moved after the commit that last\n"
                f"  built this jar. The submodule is not checked out here, so this job cannot say by\n"
                f"  how much - but the jar in gte/overrides/mods/ is not the current module's output."
            )
        elif moved_src and not class_check_failed:
            # Not reported twice for the same jar: the class check above already
            # proved this one stale and says it more precisely.
            failures.append(
                f"STALE MODULE JAR: {rel}\n"
                f"  modules/{report.name} gained {moved_src} source commit(s) after the commit that last\n"
                f"  built this jar ({moved} commit(s) total). Newest: {report.newest_commit}\n"
                f"  Everything built from this jar - every LazyPack zip - is behind those commits."
            )
        elif moved_src:
            print(
                f"    [INFO] modules/{report.name} gained {moved_src} source commit(s) since the jar was\n"
                f"    built; already reported above. Newest: {report.newest_commit}"
            )
        elif moved:
            print(
                f"    [INFO] modules/{report.name} moved {moved} commit(s) since the jar was built, "
                f"none of them under src/ - newest: {report.newest_commit}"
            )

    if failures:
        print(f"\n[FAILED] {len(failures)} module jar freshness problem(s):\n")
        for failure in failures:
            print(f"  [VIOLATION] {failure}\n")
        print("Module jar freshness gate blocked. The LazyPack job zips gte/ by hand and compiles")
        print("nothing, so a stale jar there reaches players under an unchanged version number.")
        sys.exit(1)

    if not reports:
        print("\n[PASSED] No module source tree present; nothing to compare (pack-only checkout).")
        sys.exit(0)

    print("\n[PASSED] Every shipped module jar is built from the module sources beside it.")


if __name__ == "__main__":
    main()
