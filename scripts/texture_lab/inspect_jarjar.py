# -*- coding: utf-8 -*-
"""Inspect jarJar-embedded jars: which jars embed Registrate, and is the
embedded copy SRG-named (references f_256750_) or mojmap (BUILDING_BLOCKS)?"""
import io
import json
import sys
import zipfile

TARGET_CLASS = "com/tterrag/registrate/AbstractRegistrate.class"
SRG_TOKEN = b"f_256750_"
NAMED_TOKEN = b"BUILDING_BLOCKS"


def classify(data: bytes) -> str:
    srg = SRG_TOKEN in data
    named = NAMED_TOKEN in data
    if srg and not named:
        return "SRG (production-mapped)"
    if named and not srg:
        return "NAMED (mojmap/dev-mapped)"
    if srg and named:
        return "MIXED?!"
    return "UNKNOWN (no token)"


def scan(jar_path: str):
    print(f"\n=== {jar_path} ===")
    try:
        zf = zipfile.ZipFile(jar_path)
    except Exception as e:
        print(f"  cannot open: {e}")
        return
    names = zf.namelist()
    # 1. direct class?
    if TARGET_CLASS in names:
        print(f"  [direct] {TARGET_CLASS}: {classify(zf.read(TARGET_CLASS))}")
    # 2. jarjar metadata
    for meta in ("META-INF/jarjar/metadata.json", "META-INF/jarjar/"):
        if meta in names:
            try:
                data = json.loads(zf.read(meta))
                for dep in data.get("jars", []):
                    ident = dep.get("identifier", {})
                    if "registrate" in str(ident).lower():
                        print(f"  [metadata] {ident.get('group')}:{ident.get('artifact')}:{dep.get('version', {})}")
            except Exception as e:
                print(f"  [metadata] parse error: {e}")
    # 3. embedded jars
    embedded = [n for n in names if n.lower().endswith(".jar")]
    reg = [n for n in embedded if "registrate" in n.lower()]
    for n in reg:
        data = zf.read(n)
        try:
            inner = zipfile.ZipFile(io.BytesIO(data))
            if TARGET_CLASS in inner.namelist():
                print(f"  [embedded] {n}: {classify(inner.read(TARGET_CLASS))}")
            else:
                print(f"  [embedded] {n}: (no AbstractRegistrate)")
        except Exception as e:
            print(f"  [embedded] {n}: unreadable ({e})")
    if not reg:
        print("  (no embedded Registrate jar)")
    # 4. mods.toml mod id (to identify the jar)
    if "META-INF/mods.toml" in names:
        head = zf.read("META-INF/mods.toml")[:400].decode("utf-8", "replace")
        for line in head.splitlines():
            if "modId" in line or "displayName" in line:
                print("  ", line.strip())


if __name__ == "__main__":
    for p in sys.argv[1:]:
        scan(p)
