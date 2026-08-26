#!/usr/bin/env python3
"""
GTE Secrets Multi-Repo Automatic Synchronizer
============================================
Reads keys from local .env or environment and automatically pushes them via GitHub CLI
to all GTE repositories simultaneously (GregtechEasy, GregtechEasy-Docs, gtecore, gtm-reborn, gt--).
Also syncs to local actions-runner .env for seamless offline/self-hosted builds.
"""

import os
import sys
import subprocess
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
ENV_FILE = ROOT / ".env"
RUNNER_ENV = Path("C:/actions-runner/.env")

REPOSITORIES = [
    "takanashisatou/GregtechEasy",
    "takanashisatou/GregtechEasy-Docs",
    "takanashisatou/gtecore",
    "takanashisatou/gtm-reborn",
    "takanashisatou/gt--",
]

SECRET_KEYS = [
    "GEMINI_API_KEY",
    "DEEPSEEK_API_KEY",
    "OPENAI_API_KEY",
    "DASHSCOPE_API_KEY",
    "MOONSHOT_API_KEY",
    "ZHIPU_API_KEY",
    "OPENCODE_API_KEY",
    "LLM_API_KEY",
    "CURSEFORGE_TOKEN",
]


def load_env_file(path: Path) -> dict:
    env_vars = {}
    if not path.exists():
        return env_vars
    for line in path.read_text(encoding="utf-8-sig").splitlines():
        line = line.strip()
        if line and not line.startswith("#") and "=" in line:
            k, v = line.split("=", 1)
            env_vars[k.strip()] = v.strip().strip('"').strip("'")
    return env_vars


def main():
    if sys.stdout.encoding and sys.stdout.encoding.lower() != "utf-8":
        try:
            sys.stdout.reconfigure(encoding="utf-8", errors="replace")
        except Exception:
            pass

    print("=== GTE Secrets Auto-Synchronizer ===")
    local_vars = load_env_file(ENV_FILE)

    found_secrets = {}
    for key in SECRET_KEYS:
        val = local_vars.get(key) or os.environ.get(key)
        if val:
            found_secrets[key] = val

    if not found_secrets:
        print(f"\n[INFO] No secrets found in {ENV_FILE} or environment variables.")
        print("To auto-sync secrets, simply place them in GTEGroup/.env:")
        print("  GEMINI_API_KEY=your_key_here")
        print("  DEEPSEEK_API_KEY=your_key_here")
        print("  OPENCODE_API_KEY=your_key_here")
        sys.exit(0)

    print(f"\nFound {len(found_secrets)} secret key(s) to synchronize: {list(found_secrets.keys())}\n")

    # 1. Sync to local actions-runner .env
    if RUNNER_ENV.parent.exists():
        existing_runner_env = load_env_file(RUNNER_ENV)
        existing_runner_env.update(found_secrets)
        runner_lines = [f"{k}={v}" for k, v in sorted(existing_runner_env.items())]
        RUNNER_ENV.write_text("\n".join(runner_lines) + "\n", encoding="utf-8")
        print(f"  [OK] Synchronized {len(found_secrets)} secrets to Local Runner at {RUNNER_ENV}")

    # 2. Sync to all GitHub Repositories via GitHub CLI
    for repo in REPOSITORIES:
        print(f"\n--> Syncing secrets to {repo}...")
        for k, v in found_secrets.items():
            try:
                proc = subprocess.run(
                    ["gh", "secret", "set", k, "--repo", repo, "--body", v],
                    capture_output=True,
                    text=True,
                )
                if proc.returncode == 0:
                    print(f"  [SUCCESS] {repo} <- {k}")
                else:
                    print(f"  [SKIP/WARN] {repo} <- {k}: {proc.stderr.strip()}")
            except Exception as e:
                print(f"  [ERROR] Failed to set {k} on {repo}: {e}")

    print("\n[PASSED] All Secrets synchronization complete!")


if __name__ == "__main__":
    main()