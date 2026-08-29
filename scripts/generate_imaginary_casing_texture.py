#!/usr/bin/env python3
"""
scripts/generate_imaginary_casing_texture.py
Generates the animated light-blue crystal glass texture and seamless CTM for
the Imaginary Tree Mechanical Casing (虚数机械外壳 / imaginary_casing).
"""

import json
import math
from pathlib import Path
from PIL import Image

TILE_SIZE = 16
NUM_FRAMES = 20

def clamp(v, low=0, high=255):
    return max(low, min(high, int(v)))

def get_crystal_pixel(x, y, t_phase, border_mode):
    # border_mode: (has_top, has_bottom, has_left, has_right)
    has_top, has_bottom, has_left, has_right = border_mode

    # 1. Bevel Borders for Mechanical / Crystal Frame
    is_top_0 = has_top and y == 0
    is_top_1 = has_top and y == 1
    is_bot_0 = has_bottom and y == 15
    is_bot_1 = has_bottom and y == 14
    is_left_0 = has_left and x == 0
    is_left_1 = has_left and x == 1
    is_right_0 = has_right and x == 15
    is_right_1 = has_right and x == 14

    is_outer = is_top_0 or is_bot_0 or is_left_0 or is_right_0
    is_inner = is_top_1 or is_bot_1 or is_left_1 or is_right_1

    # Outer border: High-tech crystalline chrome & light cyan specular line
    if is_outer:
        if is_top_0 or is_left_0:
            # Highlight top-left border: bright crystal cyan-white
            return (210, 245, 255)
        else:
            # Shadow bot-right border: deep rich navy-cyan
            return (18, 48, 72)

    if is_inner:
        if is_top_1 or is_left_1:
            # Inner bevel light
            return (130, 215, 250)
        else:
            # Inner bevel shadow
            return (28, 70, 98)

    # 2. Crystalline Glass Body (Light Blue Crystal & Imaginary Matrix)
    # Subtle geometric diamond grid & internal refraction facets
    cx = abs(x - 7.5)
    cy = abs(y - 7.5)
    
    # Octagonal crystal facet calculation
    facet1 = (math.sin(x * 0.785) * math.cos(y * 0.785) + 1.0) * 0.5
    facet2 = (math.sin((x + y) * 0.55) + 1.0) * 0.5
    
    # Base crystalline azure hue
    base_r = 30 + 12 * facet1
    base_g = 85 + 25 * facet1 + 10 * facet2
    base_b = 145 + 35 * facet1 + 20 * facet2

    # Internal diamond crystal core (center 4x4 area)
    is_core_outer = (cx + cy) <= 4.0
    is_core_inner = (cx + cy) <= 2.0
    is_core_point = (cx + cy) <= 0.8

    # 3. Animated Imaginary Energy Pulse & Shimmer
    # Primary diagonal refraction wave (top-left to bottom-right)
    wave1_pos = (x + y - t_phase * 32.0) % 32.0
    wave1 = math.exp(-((wave1_pos - 16.0) ** 2) / 10.0)

    # Secondary reverse pulse (ethereal shimmering resonance)
    wave2_pos = (x * 1.2 - y * 0.8 + t_phase * 32.0) % 32.0
    wave2 = math.exp(-((wave2_pos - 16.0) ** 2) / 14.0) * 0.65

    # Core breathing glow
    core_breath = (math.sin(t_phase * 2 * math.pi) + 1.0) * 0.5

    total_wave = wave1 + wave2

    # Assemble color
    r = base_r + 55 * total_wave
    g = base_g + 110 * total_wave
    b = base_b + 140 * total_wave

    if is_core_outer:
        r += 25 + 35 * core_breath
        g += 50 + 60 * core_breath
        b += 70 + 70 * core_breath

    if is_core_inner:
        r += 45 + 40 * core_breath + 30 * wave1
        g += 80 + 50 * core_breath + 40 * wave1
        b += 95 + 40 * core_breath + 40 * wave1

    if is_core_point:
        r += 80 + 30 * core_breath
        g += 100 + 20 * core_breath
        b += 100 + 10 * core_breath

    # 4. Corner Crystal Anchor Nodes
    is_corner_node = (x in (3, 12)) and (y in (3, 12))
    if is_corner_node:
        node_glow = (math.sin(t_phase * 4 * math.pi + (x * 2 + y * 3)) + 1.0) * 0.5
        r += 40 + 40 * node_glow
        g += 70 + 50 * node_glow
        b += 90 + 40 * node_glow

    return (clamp(r), clamp(g), clamp(b))

def main():
    root = Path(__file__).parent.parent.resolve()
    target_dir = root / "modules" / "gtecore" / "src" / "main" / "resources" / "assets" / "gtecore" / "textures" / "block" / "casings" / "imaginary"
    target_dir.mkdir(parents=True, exist_ok=True)

    # Also save copy in root textures and art_assets for asset router
    art_dir = root / "art_assets" / "gtecore" / "textures" / "block" / "casings" / "imaginary"
    art_dir.mkdir(parents=True, exist_ok=True)

    # 1. Generate Animated Texture Strip (16 x (16*NUM_FRAMES))
    anim_img = Image.new("RGB", (TILE_SIZE, TILE_SIZE * NUM_FRAMES))
    for f in range(NUM_FRAMES):
        t_phase = f / float(NUM_FRAMES)
        frame = Image.new("RGB", (TILE_SIZE, TILE_SIZE))
        for y in range(TILE_SIZE):
            for x in range(TILE_SIZE):
                col = get_crystal_pixel(x, y, t_phase, (True, True, True, True))
                frame.putpixel((x, y), col)
        anim_img.paste(frame, (0, f * TILE_SIZE))

    anim_path = target_dir / "imaginary_casing.png"
    anim_img.save(anim_path)
    anim_img.save(art_dir / "imaginary_casing.png")
    print(f"[OK] Saved animated texture: {anim_path} ({anim_img.size})")

    # 2. Generate Animated mcmeta
    mcmeta_data = {
        "animation": {
            "frametime": 2,
            "interpolate": True
        },
        "ldlib": {
            "connection": "gtecore:block/casings/imaginary/imaginary_casing_ctm"
        }
    }
    mcmeta_path = target_dir / "imaginary_casing.png.mcmeta"
    mcmeta_path.write_text(json.dumps(mcmeta_data, indent=2), encoding="utf-8")
    (art_dir / "imaginary_casing.png.mcmeta").write_text(json.dumps(mcmeta_data, indent=2), encoding="utf-8")
    print(f"[OK] Saved mcmeta: {mcmeta_path}")

    # 3. Generate 32x32 CTM texture
    # TL: (False, False, False, False) - seamless inner field
    # TR: (True, True, False, False)   - horizontal top/bottom borders
    # BL: (False, False, True, True)   - vertical left/right borders
    # BR: (True, True, True, True)     - full 4 borders
    ctm_img = Image.new("RGB", (32, 32))
    quadrants = [
        ((0, 0), (False, False, False, False)), # TL
        ((16, 0), (True, True, False, False)),  # TR
        ((0, 16), (False, False, True, True)),  # BL
        ((16, 16), (True, True, True, True)),   # BR
    ]

    for (ox, oy), b_mode in quadrants:
        for y in range(TILE_SIZE):
            for x in range(TILE_SIZE):
                col = get_crystal_pixel(x, y, 0.25, b_mode)
                ctm_img.putpixel((ox + x, oy + y), col)

    ctm_path = target_dir / "imaginary_casing_ctm.png"
    ctm_img.save(ctm_path)
    ctm_img.save(art_dir / "imaginary_casing_ctm.png")
    print(f"[OK] Saved CTM texture: {ctm_path} ({ctm_img.size})")

    # Also update legacy imagnary_number_casing in block/ root for compatibility
    legacy_dir = root / "modules" / "gtecore" / "src" / "main" / "resources" / "assets" / "gtecore" / "textures" / "block"
    anim_img.save(legacy_dir / "imagnary_number_casing.png")
    (legacy_dir / "imagnary_number_casing.png.mcmeta").write_text(json.dumps(mcmeta_data, indent=2), encoding="utf-8")
    ctm_img.save(legacy_dir / "imagnary_number_casing_ctm.png")
    print("[OK] Synchronized legacy paths.")

if __name__ == "__main__":
    main()
