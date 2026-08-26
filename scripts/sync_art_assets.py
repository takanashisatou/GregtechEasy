#!/usr/bin/env python3
"""
GTE-Multi Universal Art Asset Router & Synchronizer
===================================================
Intelligently routes and synchronizes 3D models and textures from art_assets/
to their respective submodule directories and modpack resource packs.
Supports multi-namespace directory trees (gtecore, gtceu, gtnn, modpack)
as well as keyword-based flattened fallback.
"""

import sys
import shutil
from pathlib import Path
from typing import Dict, List, Tuple

ROOT = Path(__file__).parent.parent.resolve()
ART_DIR = ROOT / "art_assets"

# Target resource directories
TARGETS = {
    "gtecore": ROOT / "modules" / "gtecore" / "src" / "main" / "resources" / "assets" / "gtecore",
    "gtceu": ROOT / "modules" / "gtm-reborn" / "src" / "main" / "resources" / "assets" / "gtceu",
    "gtnn": ROOT / "modules" / "gt--" / "src" / "main" / "resources" / "assets" / "gtnn",
    "modpack_quests": ROOT / "gte" / "overrides" / "config" / "openloader" / "resources" / "quests" / "assets" / "gte" / "textures",
    "modpack_gui": ROOT / "gte" / "overrides" / "kubejs" / "assets" / "gte" / "textures" / "gui",
    "modpack_kubejs": ROOT / "gte" / "overrides" / "kubejs" / "assets" / "kubejs",
}

BLOCK_KEYWORDS = {
    "casing", "module", "matrix", "concrete", "coil", "zhenfa",
    "buffer", "generator", "machine", "block", "structure", "ore"
}

ITEM_KEYWORDS = {
    "processor", "string", "symbol", "paper", "wafer", "chip",
    "god", "rune", "yin", "yang", "item", "tool", "circuit"
}


def classify_flat_file(file_path: Path) -> Path:
    """Heuristically routes a flat file in art_assets/ to its proper target location."""
    name = file_path.name.lower()
    ext = file_path.suffix.lower()

    if ext not in {".png", ".json", ".mcmeta"} or name.endswith(".bbmodel"):
        return None

    # Handle prefixed namespace redirection
    if name.startswith("gtceu_"):
        sub_type = "block" if any(k in name for k in BLOCK_KEYWORDS) else "item"
        cat = "models" if ext == ".json" else "textures"
        return TARGETS["gtceu"] / cat / sub_type / file_path.name
    elif name.startswith("gtnn_"):
        sub_type = "block" if any(k in name for k in BLOCK_KEYWORDS) else "item"
        cat = "models" if ext == ".json" else "textures"
        return TARGETS["gtnn"] / cat / sub_type / file_path.name
    elif name.startswith("quest_"):
        return TARGETS["modpack_quests"] / file_path.name
    elif name.startswith("gui_") or name.startswith("menu_") or "logo" in name or "icon" in name:
        return TARGETS["modpack_gui"] / file_path.name

    # Default to gtecore
    is_block = any(k in name for k in BLOCK_KEYWORDS)
    sub_type = "block" if is_block else "item"

    if ext in {".png", ".mcmeta"}:
        return TARGETS["gtecore"] / "textures" / sub_type / file_path.name
    elif ext == ".json":
        return TARGETS["gtecore"] / "models" / sub_type / file_path.name

    return None


def copy_if_changed(src: Path, dst: Path) -> bool:
    """Copies src to dst if dst does not exist or has different content."""
    if not dst.exists():
        dst.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(src, dst)
        return True

    if src.stat().st_size != dst.stat().st_size or src.stat().st_mtime > dst.stat().st_mtime:
        dst.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(src, dst)
        return True

    return False


def sync_all_assets() -> Dict[str, int]:
    """Scans art_assets/ and synchronizes all assets to their destination."""
    if not ART_DIR.exists():
        print(f"[WARN] Art directory {ART_DIR} does not exist.")
        return {}

    stats = {
        "gtecore": 0,
        "gtceu": 0,
        "gtnn": 0,
        "modpack": 0,
        "flat_fallback": 0,
    }

    # 1. Synchronize structured namespace directories
    # gtecore/
    gtecore_src = ART_DIR / "gtecore"
    if gtecore_src.exists():
        for p in gtecore_src.rglob("*"):
            if p.is_file() and not p.name.endswith(".bbmodel") and p.suffix.lower() in {".png", ".json", ".mcmeta"}:
                rel = p.relative_to(gtecore_src)
                dst = TARGETS["gtecore"] / rel
                if copy_if_changed(p, dst):
                    stats["gtecore"] += 1

    # gtceu/
    gtceu_src = ART_DIR / "gtceu"
    if gtceu_src.exists():
        for p in gtceu_src.rglob("*"):
            if p.is_file() and not p.name.endswith(".bbmodel") and p.suffix.lower() in {".png", ".json", ".mcmeta"}:
                rel = p.relative_to(gtceu_src)
                dst = TARGETS["gtceu"] / rel
                if copy_if_changed(p, dst):
                    stats["gtceu"] += 1

    # gtnn/
    gtnn_src = ART_DIR / "gtnn"
    if gtnn_src.exists():
        for p in gtnn_src.rglob("*"):
            if p.is_file() and not p.name.endswith(".bbmodel") and p.suffix.lower() in {".png", ".json", ".mcmeta"}:
                rel = p.relative_to(gtnn_src)
                dst = TARGETS["gtnn"] / rel
                if copy_if_changed(p, dst):
                    stats["gtnn"] += 1

    # modpack/
    modpack_src = ART_DIR / "modpack"
    if modpack_src.exists():
        # ftbquests
        fq = modpack_src / "ftbquests"
        if fq.exists():
            for p in fq.rglob("*"):
                if p.is_file() and p.suffix.lower() in {".png", ".json", ".mcmeta"}:
                    rel = p.relative_to(fq)
                    dst = TARGETS["modpack_quests"] / rel
                    if copy_if_changed(p, dst):
                        stats["modpack"] += 1
        # gui
        fg = modpack_src / "gui"
        if fg.exists():
            for p in fg.rglob("*"):
                if p.is_file() and p.suffix.lower() in {".png", ".json", ".mcmeta"}:
                    rel = p.relative_to(fg)
                    dst = TARGETS["modpack_gui"] / rel
                    if copy_if_changed(p, dst):
                        stats["modpack"] += 1
        # kubejs
        fk = modpack_src / "kubejs"
        if fk.exists():
            for p in fk.rglob("*"):
                if p.is_file() and p.suffix.lower() in {".png", ".json", ".mcmeta"}:
                    rel = p.relative_to(fk)
                    dst = TARGETS["modpack_kubejs"] / rel
                    if copy_if_changed(p, dst):
                        stats["modpack"] += 1

    # 2. Synchronize flat files in root art_assets/
    for p in ART_DIR.iterdir():
        if p.is_file() and not p.name.startswith("."):
            dst = classify_flat_file(p)
            if dst is not None:
                if copy_if_changed(p, dst):
                    stats["flat_fallback"] += 1

    total = sum(stats.values())
    print(f">> [Art Router] Synchronized {total} asset(s) across namespaces:")
    for k, v in stats.items():
        if v > 0:
            print(f"   - {k}: {v} file(s)")

    return stats


def main():
    if sys.stdout.encoding and sys.stdout.encoding.lower() != "utf-8":
        try:
            sys.stdout.reconfigure(encoding="utf-8", errors="replace")
        except Exception:
            pass

    print("=== GTE-Multi Art Assets Synchronization ===")
    sync_all_assets()
    print("[PASSED] Art assets synchronization completed successfully.")


if __name__ == "__main__":
    main()
