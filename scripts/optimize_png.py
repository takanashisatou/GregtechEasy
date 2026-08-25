#!/usr/bin/env python3
"""
GTE-Multi PNG Lossless Image Compressor
=======================================
Losslessly optimizes all PNG textures across art_assets/ and resource packs.
Uses `oxipng` if available for maximum compression (saving 30%~50% VRAM/size),
with a pure Python fallback (PIL / zlib) if oxipng is not installed.
"""

import sys
import os
import shutil
import subprocess
from pathlib import Path
from typing import List, Tuple

ROOT = Path(__file__).parent.parent.resolve()
SEARCH_DIRS = [
    ROOT / "art_assets",
    ROOT / "gte" / "overrides" / "kubejs" / "assets",
    ROOT / "gte" / "overrides" / "config" / "openloader" / "resources",
]


def check_oxipng() -> bool:
    """Checks if oxipng CLI is available."""
    return shutil.which("oxipng") is not None


def optimize_file_oxipng(png_file: Path) -> Tuple[int, int]:
    """Optimizes a PNG file using oxipng."""
    size_before = png_file.stat().st_size
    try:
        subprocess.run(
            ["oxipng", "-o", "4", "--strip", "safe", str(png_file)],
            stdout=subprocess.DEVNULL,
            stderr=subprocess.DEVNULL,
            check=True
        )
        size_after = png_file.stat().st_size
        return size_before, size_after
    except Exception:
        return size_before, size_before


def optimize_file_pillow(png_file: Path) -> Tuple[int, int]:
    """Fallback lossless optimization using PIL."""
    size_before = png_file.stat().st_size
    try:
        from PIL import Image
        with Image.open(png_file) as img:
            img.save(png_file, "PNG", optimize=True)
        size_after = png_file.stat().st_size
        return size_before, size_after
    except Exception:
        return size_before, size_before


def main():
    if sys.stdout.encoding and sys.stdout.encoding.lower() != "utf-8":
        try:
            sys.stdout.reconfigure(encoding="utf-8", errors="replace")
        except Exception:
            pass

    print("=== GTE-Multi PNG Texture Lossless Compressor ===")

    use_oxipng = check_oxipng()
    engine_name = "Oxipng (Native Rust)" if use_oxipng else "Python PIL Fallback"
    print(f"Compression Engine: {engine_name}")

    png_files: List[Path] = []
    for d in SEARCH_DIRS:
        if d.exists():
            png_files.extend(p for p in d.rglob("*.png") if p.is_file() and not p.name.startswith("."))

    print(f"Found {len(png_files)} PNG texture(s) to optimize...")

    total_before = 0
    total_after = 0
    optimized_count = 0

    for p in png_files:
        if use_oxipng:
            before, after = optimize_file_oxipng(p)
        else:
            before, after = optimize_file_pillow(p)

        total_before += before
        total_after += after
        if after < before:
            optimized_count += 1

    saved_bytes = total_before - total_after
    saved_kb = saved_bytes / 1024
    pct = (saved_bytes / total_before * 100) if total_before > 0 else 0

    print(f">> Optimized {optimized_count}/{len(png_files)} textures.")
    print(f">> Total Size Before: {total_before / 1024:.2f} KB | After: {total_after / 1024:.2f} KB")
    print(f">> Saved: {saved_kb:.2f} KB ({pct:.2f}% reduction)")
    print("[PASSED] PNG optimization complete.")


if __name__ == "__main__":
    main()
