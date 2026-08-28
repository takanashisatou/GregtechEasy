#!/usr/bin/env python3
"""
scripts/dump_workflow_run_steps.py
Dump every `run:` block of a workflow to .ps1 files, exactly as Actions writes them.

Actions materialises a `run:` block as a BOM-less UTF-8 file and hands it to the
shell. On Windows, `shell: powershell` is Windows PowerShell 5.1, which decodes
script files using the ANSI code page -- so any non-ASCII character in the script
body is mis-decoded before the parser ever sees it. CJK punctuation in particular
decodes into byte sequences that break parsing outright, which took down
`Publish Rolling Nightly Prerelease` in run 33146482531 with

    Unexpected token 'Nightly' in expression or statement.
    The string is missing the terminator: ".

*after* every artifact had already been built correctly.

This dump lets a lint step parse each block the way the runner will, so the
failure surfaces in seconds instead of at minute 20 of a release build.

Usage: python scripts/dump_workflow_run_steps.py <workflow.yml> <out-dir>
"""
import re
import sys
from pathlib import Path

import yaml

# Expression substitution is textual on purpose. The lint only cares whether the
# result parses, and `${{ ... }}` is not PowerShell syntax, so leaving it in
# would produce false failures. Values are shaped like the real thing (a version
# with dots and dashes, a sha, a repo with a slash) so quoting bugs still show.
SUBSTITUTIONS = {
    "steps.meta.outputs.version": "nightly-9.9.9",
    "steps.meta.outputs.channel": "nightly",
    "github.sha": "0123456789abcdef0123456789abcdef01234567",
    "github.run_id": "12345678901",
    "github.ref_name": "main",
    "github.ref": "refs/heads/main",
    "github.repository": "owner/repo",
    "github.workspace": "D:\\a\\repo\\repo",
    "github.token": "gh-token",
    "github.event_name": "workflow_dispatch",
    "runner.os": "Windows",
    "runner.temp": "D:\\a\\_temp",
}

EXPR = re.compile(r"\$\{\{\s*([^}]+?)\s*\}\}")


def expand(body: str) -> str:
    return EXPR.sub(lambda m: SUBSTITUTIONS.get(m.group(1).strip(), "PLACEHOLDER"), body)


def main() -> None:
    if len(sys.argv) != 3:
        print("usage: dump_workflow_run_steps.py <workflow.yml> <out-dir>")
        sys.exit(2)

    wf_path = Path(sys.argv[1])
    out_dir = Path(sys.argv[2])
    out_dir.mkdir(parents=True, exist_ok=True)

    doc = yaml.safe_load(wf_path.read_text(encoding="utf-8"))

    count = 0
    for job_name, job in (doc.get("jobs") or {}).items():
        # Only PowerShell steps are affected. A job whose default shell is bash
        # (or a step that overrides to bash) reads UTF-8 correctly.
        job_shell = ((job.get("defaults") or {}).get("run") or {}).get("shell", "")
        for index, step in enumerate(job.get("steps") or []):
            body = step.get("run")
            if not body:
                continue
            shell = step.get("shell", job_shell)
            if shell not in ("powershell", "pwsh"):
                continue
            name = re.sub(r"[^A-Za-z0-9]+", "_", step.get("name", f"step{index}"))[:60]
            target = out_dir / f"{job_name}__{index:02d}__{name}.ps1"
            # Match the runner byte-for-byte: UTF-8, no BOM, LF.
            with target.open("w", encoding="utf-8", newline="\n") as handle:
                handle.write(expand(body))
            count += 1

    print(f"Dumped {count} PowerShell run-step(s) from {wf_path} to {out_dir}")


if __name__ == "__main__":
    main()
