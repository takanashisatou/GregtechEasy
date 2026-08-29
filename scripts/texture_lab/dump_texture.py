"""Dump a PNG texture as ASCII-art pixel grid + palette legend.

Usage: python dump_texture.py <png> [--frames N] [--maxw 32]
Each unique RGBA color gets a letter. Grid rows printed top-to-bottom.
For tall animated strips, prints each 16x16 frame separately.
"""
import sys
from PIL import Image


def dump(path, max_frames=8):
    img = Image.open(path).convert("RGBA")
    w, h = img.size
    print(f"=== {path} : {w}x{h} ===")
    frame_h = w if h > w and h % w == 0 else h
    n_frames = h // frame_h
    if n_frames > max_frames:
        print(f"(showing {max_frames}/{n_frames} frames)")
        n_frames = max_frames

    # global palette
    palette = {}
    chars = "#@abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+-*/=<>?!$%&|;:"
    def ch_for(px):
        if px[3] == 0:
            return "."
        key = px
        if key not in palette:
            palette[key] = chars[len(palette)] if len(palette) < len(chars) else "?"
        return palette[key]

    for f in range(n_frames):
        if n_frames > 1:
            print(f"--- frame {f} ---")
        for y in range(f * frame_h, (f + 1) * frame_h):
            row = ""
            for x in range(w):
                row += ch_for(img.getpixel((x, y)))
            print(row)
    print("--- palette (char: RGBA, count) ---")
    counts = {}
    for y in range(h):
        for x in range(w):
            px = img.getpixel((x, y))
            if px[3] == 0:
                continue
            counts[px] = counts.get(px, 0) + 1
    for px, c in sorted(counts.items(), key=lambda kv: -kv[1]):
        print(f"{palette.get(px, '?')}: {px} x{c}")


if __name__ == "__main__":
    dump(sys.argv[1], int(sys.argv[2]) if len(sys.argv) > 2 else 8)
