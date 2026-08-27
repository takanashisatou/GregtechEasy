#!/usr/bin/env python3
"""
GTE Submodule Lineage & Pointer Audit
====================================
Verifies that all submodule pointers in GTEGroup strictly point to commits
that exist and are merged into their official upstream tracked branches.
Prevents unpushed commits, detached private branches, or wild commits from
being pushed or merged into the parent repository.
"""

import sys
import os
import re
import subprocess
from pathlib import Path
from typing import Dict, List, Tuple

ROOT = Path(__file__).parent.parent.resolve()
GITMODULES_FILE = ROOT / ".gitmodules"


def parse_gitmodules() -> List[Dict[str, str]]:
    """Parses .gitmodules file to extract submodule paths, urls, and tracked branches."""
    if not GITMODULES_FILE.exists():
        print(f"[ERROR] .gitmodules file not found at {GITMODULES_FILE}")
        sys.exit(1)

    content = GITMODULES_FILE.read_text(encoding="utf-8")
    submodules = []
    current: Dict[str, str] = {}

    for line in content.splitlines():
        line = line.strip()
        m_section = re.match(r'\[submodule\s+"([^"]+)"\]', line)
        if m_section:
            if current and "path" in current:
                submodules.append(current)
            current = {"name": m_section.group(1)}
        elif "=" in line:
            k, v = line.split("=", 1)
            current[k.strip()] = v.strip()

    if current and "path" in current:
        submodules.append(current)

    return submodules


def run_git(args: List[str], cwd: Path) -> subprocess.CompletedProcess:
    """Runs a git command, tolerating non-UTF-8 output and never raising.

    ``safe.directory=*`` is forced because self-hosted runners often execute as a
    different account (LocalSystem) than the one owning ``_work``, which makes
    git refuse every submodule worktree for "dubious ownership" and look
    identical to a genuine lineage violation.
    """
    return subprocess.run(
        ["git", "-c", "safe.directory=*", *args],
        cwd=cwd,
        capture_output=True,
        text=True,
        encoding="utf-8",
        errors="replace",
    )


def ensure_safe_directory(path: Path) -> None:
    """Reports (and persists) a safe.directory exemption when git refuses a repo."""
    probe = subprocess.run(
        ["git", "rev-parse", "--git-dir"],
        cwd=path,
        capture_output=True,
        text=True,
        encoding="utf-8",
        errors="replace",
    )
    if probe.returncode == 0:
        return
    if "dubious ownership" not in (probe.stderr or ""):
        return
    for target in {str(path), str(path).replace("\\", "/")}:
        subprocess.run(
            ["git", "config", "--global", "--add", "safe.directory", target],
            capture_output=True,
            text=True,
            encoding="utf-8",
            errors="replace",
        )
    print(f"  [INFO] '{path}' had dubious ownership; registered as a git safe.directory.")


def check_submodule(sub: Dict[str, str], auto_fetch: bool = True) -> Tuple[bool, str]:
    """Validates that a submodule's committed HEAD pointer is an ancestor of its tracked branch."""
    sub_path = ROOT / sub["path"]
    tracked_branch = sub.get("branch", "main")

    if not sub_path.exists():
        return False, f"Submodule directory does not exist: {sub['path']}"

    ensure_safe_directory(sub_path)

    # Get committed commit in parent repository
    res = run_git(["rev-parse", f"HEAD:{sub['path']}"], ROOT)
    if res.returncode != 0 or not res.stdout.strip():
        # Fallback to HEAD inside submodule
        res = run_git(["rev-parse", "HEAD"], sub_path)
    commit_sha = res.stdout.strip()
    if not commit_sha:
        return False, (
            f"Could not determine commit for {sub['path']}: "
            f"{(res.stderr or '').strip() or 'git produced no output'}"
        )

    # Get short commit message
    msg_res = run_git(["log", "-1", "--format=%h (%s, %an)", commit_sha], sub_path)
    commit_info = msg_res.stdout.strip() if msg_res.returncode == 0 else commit_sha[:8]

    # In CI / automated environments, ensure remote refs are fetched
    fetch_err = ""
    if auto_fetch:
        fetch_res = run_git(["fetch", "origin", tracked_branch], sub_path)
        if fetch_res.returncode != 0:
            fetch_err = (fetch_res.stderr or "").strip()

    # Check if commit is an ancestor of origin/<tracked_branch>
    check_targets = [f"origin/{tracked_branch}", tracked_branch, "FETCH_HEAD"]
    is_valid = False
    valid_target = ""
    diagnostics: List[str] = []

    for target in check_targets:
        res = run_git(["merge-base", "--is-ancestor", commit_sha, target], sub_path)
        if res.returncode == 0:
            is_valid = True
            valid_target = target
            break
        err = (res.stderr or "").strip()
        if err:
            diagnostics.append(f"{target}: {err}")

    if is_valid:
        return True, f"OK: {sub['path']} @ {commit_info} is merged in {valid_target}"
    else:
        detail = ""
        if fetch_err:
            detail += f"\n   git fetch error: {fetch_err}"
        if diagnostics:
            detail += "\n   git diagnostics: " + " | ".join(diagnostics)
        return False, (
            f"[SUBMODULE LINEAGE ERROR] Submodule '{sub['path']}' pointer is INVALID!\n"
            f"   Pointer Commit: {commit_info}\n"
            f"   Target Branch:  origin/{tracked_branch}\n"
            f"   Reason: Commit {commit_sha[:8]} is NOT merged into official upstream branch 'origin/{tracked_branch}'."
            f"{detail}\n"
            f"   Resolution: Ensure your changes are committed, pushed, and merged into upstream '{tracked_branch}' first!"
        )


def main():
    # Enforce UTF-8 output if possible
    if sys.stdout.encoding and sys.stdout.encoding.lower() != "utf-8":
        try:
            sys.stdout.reconfigure(encoding="utf-8", errors="replace")
        except Exception:
            pass

    print("=== GTE Submodule Lineage & Pointer Audit ===")
    ensure_safe_directory(ROOT)
    submodules = parse_gitmodules()
    if not submodules:
        print("[WARN] No submodules found in .gitmodules.")
        sys.exit(0)

    auto_fetch = "--no-fetch" not in sys.argv
    all_passed = True
    results = []

    for sub in submodules:
        passed, msg = check_submodule(sub, auto_fetch=auto_fetch)
        results.append((passed, msg))
        if not passed:
            all_passed = False

    for passed, msg in results:
        if passed:
            print(f"  [OK] {msg}")
        else:
            print(f"\n[FAIL] {msg}\n")

    if all_passed:
        print(f"\n[PASSED] All {len(submodules)} submodule pointers are verified and merged in official branches.")
        sys.exit(0)
    else:
        print(f"\n[FAILED] Submodule lineage check failed. Merge blocked.")
        sys.exit(1)


if __name__ == "__main__":
    main()
