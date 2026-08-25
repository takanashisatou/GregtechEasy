#!/usr/bin/env python3
"""
scripts/patch_manifest.py
Enforce Java 21 requirement inside CurseForge export zip's manifest.json.
Prevents third-party launchers (PCL2, HMCL, etc.) from incorrectly defaulting to Java 17.
Usage: python scripts/patch_manifest.py [path_to_curseforge_zip]
"""

import sys
import json
import zipfile
from pathlib import Path

def patch_manifest(zip_path: Path):
    if not zip_path.is_file():
        print(f"[WARN] Target zip does not exist: {zip_path}")
        return False

    temp_zip = zip_path.with_suffix(".tmp.zip")
    patched = False

    with zipfile.ZipFile(zip_path, "r") as zin, zipfile.ZipFile(temp_zip, "w", compression=zipfile.ZIP_DEFLATED) as zout:
        for item in zin.infolist():
            data = zin.read(item.filename)
            if item.filename == "manifest.json":
                try:
                    manifest = json.loads(data.decode("utf-8"))
                    if "minecraft" in manifest and isinstance(manifest["minecraft"], dict):
                        manifest["minecraft"]["javaVersion"] = 21
                    manifest["javaVersion"] = 21
                    data = json.dumps(manifest, indent=2, ensure_ascii=False).encode("utf-8")
                    patched = True
                    print(f"[OK] Patched manifest.json in {zip_path.name} -> javaVersion = 21")
                except Exception as e:
                    print(f"[ERROR] Failed to parse/patch manifest.json: {e}")
            zout.writestr(item, data)

    if patched:
        temp_zip.replace(zip_path)
    else:
        temp_zip.unlink(missing_ok=True)
        print(f"[INFO] No manifest.json found in {zip_path.name} (skipped)")

    return patched

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python scripts/patch_manifest.py <path_to_zip>")
        sys.exit(1)

    target_zip = Path(sys.argv[1]).resolve()
    patch_manifest(target_zip)
