#!/usr/bin/env python3
import os
import re
from pathlib import Path

ROOT = Path(__file__).parent.parent.resolve()
TOML_PATH = ROOT / "gradle" / "forge.versions.toml"
LIBS_DIR = ROOT / "modules" / "gtecore" / "gradle" / "libs"

with open(TOML_PATH, "r", encoding="utf-8") as f:
    toml_content = f.read()

# Parse versions
versions = {}
for line in toml_content.splitlines():
    line = line.strip()
    if "=" in line and not line.startswith("[") and not line.startswith("#"):
        k, v = line.split("=", 1)
        k = k.strip()
        v = v.strip().strip('"').strip("'")
        versions[k] = v

# Parse libraries
libraries = {}
for match in re.finditer(r'([\w-]+)\s*=\s*\{\s*module\s*=\s*["\']([^"\']+)["\'](?:,\s*version\.ref\s*=\s*["\']([^"\']+)["\'])?', toml_content):
    alias = match.group(1)
    mod = match.group(2)
    vref = match.group(3)
    ver = versions.get(vref, "") if vref else ""
    libraries[alias] = (mod, ver)

local_jars = [f.name for f in LIBS_DIR.glob("*.jar")]

print(f"=== Full Dependency Audit ({len(libraries)} libraries defined) ===")
unmatched = []

for alias, (mod, ver) in libraries.items():
    # Check if this is a curse.maven or maven.modrinth
    if mod.startswith("curse.maven") or mod.startswith("maven.modrinth"):
        # Check if local jar matches
        matched = False
        for jar in local_jars:
            # check jar name match
            clean_mod = mod.split(":")[-1].lower().replace("-", "").replace("_", "")
            clean_jar = jar.lower().replace("-", "").replace("_", "")
            if clean_mod in clean_jar or alias.lower().replace("-", "") in clean_jar:
                matched = True
                break
        status = "[LOCAL-OK]" if matched else "[REMOTE-MAVEN]"
        print(f"{status:15} {alias:25} -> {mod}:{ver}")
        if not matched:
            unmatched.append((alias, mod, ver))

print(f"\nAudit complete. {len(libraries) - len(unmatched)} accounted for, {len(unmatched)} relying on upstream Maven.")
if unmatched:
    print("\nUpstream maven targets:")
    for a, m, v in unmatched:
        print(f"  - {a}: {m}:{v}")
