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


def check_submodule(sub: Dict[str, str], auto_fetch: bool = True) -> Tuple[bool, str]:
    """Validates that a submodule's committed HEAD pointer is an ancestor of its tracked branch."""
    sub_path = ROOT / sub["path"]
    tracked_branch = sub.get("branch", "main")

    if not sub_path.exists():
        return False, f"Submodule directory does not exist: {sub['path']}"

    # Get committed commit in parent repository
    try:
        res = subprocess.run(
            ["git", "rev-parse", f"HEAD:{sub['path']}"],
            cwd=ROOT,
            capture_output=True,
            text=True,
        )
        if res.returncode != 0 or not res.stdout.strip():
            # Fallback to HEAD inside submodule
            res = subprocess.run(
                ["git", "rev-parse", "HEAD"],
                cwd=sub_path,
                capture_output=True,
                text=True,
                check=True,
            )
        commit_sha = res.stdout.strip()
    except Exception as e:
        return False, f"Could not determine commit for {sub['path']}: {e}"

    # Get short commit message
    try:
        msg_res = subprocess.run(
            ["git", "log", "-1", "--format=%h (%s, %an)", commit_sha],
            cwd=sub_path,
            capture_output=True,
            text=True,
        )
        commit_info = msg_res.stdout.strip() if msg_res.returncode == 0 else commit_sha[:8]
    except Exception:
        commit_info = commit_sha[:8]

    # In CI / automated environments, ensure remote refs are fetched
    if auto_fetch:
        subprocess.run(
            ["git", "fetch", "origin", tracked_branch],
            cwd=sub_path,
            capture_output=True,
            text=True,
        )

    # Check if commit is an ancestor of origin/<tracked_branch>
    check_targets = [f"origin/{tracked_branch}", tracked_branch]
    is_valid = False
    valid_target = ""

    for target in check_targets:
        res = subprocess.run(
            ["git", "merge-base", "--is-ancestor", commit_sha, target],
            cwd=sub_path,
            capture_output=True,
            text=True,
        )
        if res.returncode == 0:
            is_valid = True
            valid_target = target
            break

    if is_valid:
        return True, f"OK: {sub['path']} @ {commit_info} is merged in {valid_target}"
    else:
        return False, (
            f"[SUBMODULE LINEAGE ERROR] Submodule '{sub['path']}' pointer is INVALID!\n"
            f"   Pointer Commit: {commit_info}\n"
            f"   Target Branch:  origin/{tracked_branch}\n"
            f"   Reason: Commit {commit_sha[:8]} is NOT merged into official upstream branch 'origin/{tracked_branch}'.\n"
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
