#!/usr/bin/env python3
"""
GTE-Multi Art Assets Compliance & Dimension Audit
=================================================
1. Texture Power-of-Two / Animation Strip Dimension Sniffer:
   Checks that block/item PNG textures conform to 2^N dimensions (16, 32, 64, 128, 256, 512, 1024)
   or valid vertical animation strips (width is 2^N and height is a multiple of width).
   GUI textures (menus, logos, icons, HUDs) are permitted standard GUI dimensions.
2. Blockbench JSON Model Syntax Validator:
   Ensures all exported model JSON files are strictly valid JSON syntax.
"""

import sys
import struct
import json
from pathlib import Path
from typing import List, Tuple

ROOT = Path(__file__).parent.parent.resolve()
ART_DIR = ROOT / "art_assets"

GUI_KEYWORDS = {"gui", "menu", "logo", "icon", "ico", "banner", "quest", "zhenfa", "ctm", "overlay", "aa.png", "modpack"}


def get_png_dimensions(file_path: Path) -> Tuple[int, int]:
    """Reads PNG width and height directly from IHDR header (fast binary reader, 0 deps)."""
    with file_path.open("rb") as f:
        header = f.read(24)
        if len(header) < 24 or header[:8] != b"\x89PNG\r\n\x1a\n":
            raise ValueError("Not a valid PNG file")
        width, height = struct.unpack(">II", header[16:24])
        return width, height


def is_power_of_two(n: int) -> bool:
    return n > 0 and (n & (n - 1)) == 0


def is_valid_texture_dimensions(w: int, h: int) -> bool:
    """
    Validates Minecraft texture dimensions:
    - Square or rectangular power of two (e.g. 16x16, 32x32, 64x64, 32x64, etc.)
    - Vertical animated texture strip: width is power of two, height is integer multiple of width (e.g. 16x112 = 7 frames of 16x16)
    """
    if not is_power_of_two(w):
        return False

    if is_power_of_two(h):
        return True

    # Animated texture strip check
    if h % w == 0:
        return True

    return False


def audit_art_assets() -> List[str]:
    violations = []
    if not ART_DIR.exists():
        return [f"Art assets directory not found: {ART_DIR}"]

    png_count = 0
    json_count = 0

    for p in ART_DIR.rglob("*"):
        if not p.is_file() or p.name.startswith("."):
            continue

        ext = p.suffix.lower()

        # 1. Audit PNG Textures
        if ext == ".png":
            png_count += 1
            try:
                w, h = get_png_dimensions(p)
            except Exception as e:
                violations.append(f"CORRUPT PNG: {p.relative_to(ROOT)} ({e})")
                continue

            # Check if texture is standard block/item or GUI
            is_gui = any(k in str(p).lower() for k in GUI_KEYWORDS)
            if not is_gui:
                if not is_valid_texture_dimensions(w, h):
                    violations.append(
                        f"NON-STANDARD TEXTURE DIMENSIONS: {p.relative_to(ROOT)}\n"
                        f"  Dimensions {w}x{h} are not powers of two or valid animation strips (e.g. 16x16, 32x32, 16x112).\n"
                        f"  Non-standard textures can cause shader mipmap distortion and rendering glitches."
                    )

        # 2. Audit JSON Models
        elif ext == ".json" and not p.name.endswith(".bbmodel"):
            json_count += 1
            try:
                content = p.read_text(encoding="utf-8")
                json.loads(content)
            except Exception as e:
                violations.append(f"INVALID JSON MODEL: {p.relative_to(ROOT)} ({e})")

    print(f"Scanned {png_count} PNG texture(s) and {json_count} JSON model(s) in art_assets/.")
    return violations


def main():
    if sys.stdout.encoding and sys.stdout.encoding.lower() != "utf-8":
        try:
            sys.stdout.reconfigure(encoding="utf-8", errors="replace")
        except Exception:
            pass

    print("=== GTE-Multi Art Asset Compliance & Dimension Audit ===")
    violations = audit_art_assets()

    if violations:
        print(f"\n[FAILED] Found {len(violations)} art asset violation(s):\n")
        for v in violations:
            print(f"  [VIOLATION] {v}")
        print("\nArt CI audit gate blocked.")
        sys.exit(1)
    else:
        print("[PASSED] All PNG textures and Blockbench JSON models verified compliant.")
        sys.exit(0)


if __name__ == "__main__":
    main()
