#!/usr/bin/env python3
import os
import sys

channel = sys.argv[1] if len(sys.argv) > 1 else "nightly"
summary_file = os.environ.get("GITHUB_STEP_SUMMARY")

if summary_file:
    with open(summary_file, "a", encoding="utf-8") as f:
        f.write(f"### 🎯 GTE-Multi Build Success ({channel})\n\n")
        f.write("> ✅ All modules (`gtm-reborn`, `gtecore`, `gt--`) compiled and GameTest passed successfully!\n")