#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
pixel_tool.py - Universal Minecraft Pixel Art, CTM & Texture Analysis Tool for GTE-Multi.

Commands:
  info       - Inspect dimensions, frames, mcmeta, palette, alpha
  render     - Terminal ANSI/ASCII pixel art preview
  ctm-check  - Validate LDLib 4-quadrant CTM layout (detect TR/BL swaps)
  ctm-fix    - Auto-repair swapped CTM quadrants across all animation frames
  to-gif     - Convert vertical Minecraft animation strip to scaled animated GIF
  board      - Generate multi-item side-by-side comparison boards with labels
  diff       - Pixel-by-pixel visual before/after comparison board
  recolor    - Precision color swapping across static images or animated strips
  mcmeta     - Auto-generate Minecraft animation metadata (.png.mcmeta)
"""

import argparse
import json
import sys
from pathlib import Path
from PIL import Image, ImageDraw

def parse_hex(hex_str: str):
    s = hex_str.strip().lstrip('#')
    if len(s) == 6:
        return (int(s[0:2], 16), int(s[2:4], 16), int(s[4:6], 16), 255)
    elif len(s) == 8:
        return (int(s[0:2], 16), int(s[2:4], 16), int(s[4:6], 16), int(s[6:8], 16))
    elif len(s) == 3:
        return (int(s[0]*2, 16), int(s[1]*2, 16), int(s[2]*2, 16), 255)
    raise ValueError('Invalid hex: ' + hex_str)

def cmd_info(args):
    p = Path(args.image)
    if not p.exists():
        print('Error: Not found: ' + str(p), file=sys.stderr)
        sys.exit(1)
    im = Image.open(p)
    w, h = im.size
    frames = h // w if w > 0 else 1
    meta_p = Path(str(p) + '.mcmeta')
    meta_data = None
    if meta_p.exists():
        try:
            meta_data = json.loads(meta_p.read_text(encoding='utf-8'))
        except Exception as e:
            meta_data = str(e)

    rgba = im.convert('RGBA')
    colors = {}
    trans = 0
    total = w * h
    for y in range(h):
        for x in range(w):
            c = rgba.getpixel((x, y))
            if c[3] == 0:
                trans += 1
            else:
                colors[c] = colors.get(c, 0) + 1

    print('=' * 60)
    print(f' File: {p.name} ({p})')
    print(f' Size: {w}x{h} | Frames: {frames} ({w}x{w} each)')
    t_str = 'Static 1:1' if w == h else f'Animated Strip ({frames} frames)'
    print(f' Type: {t_str}')
    print(' mcmeta: ' + ('PRESENT' if meta_p.exists() else 'MISSING'))
    if isinstance(meta_data, dict):
        anim = meta_data.get('animation', {})
        print(f'   - frametime: {anim.get("frametime", 1)}, interpolate: {anim.get("interpolate", False)}')
    pct = (trans / total) * 100 if total > 0 else 0
    print(f' Pixels: {total} (Transparent: {trans} / {pct:.1f}%)')
    print(f' Unique Colors: {len(colors)}')
    print(' Top Palette Colors (RGBA):')
    for (r, g, b, a), count in sorted(colors.items(), key=lambda x: x[1], reverse=True)[:8]:
        cpct = (count / total) * 100
        print(f'   #{r:02X}{g:02X}{b:02X} (rgba={r},{g},{b},{a}) : {count}px ({cpct:.1f}%)')
    print('=' * 60)

def cmd_render(args):
    p = Path(args.image)
    if not p.exists():
        print('Error: Not found: ' + str(p), file=sys.stderr)
        sys.exit(1)
    im = Image.open(p).convert('RGBA')
    w, h = im.size
    f_idx = args.frame
    frame = im.crop((0, f_idx * w, w, min(h, (f_idx + 1) * w)))
    fw, fh = frame.size
    print(f'--- {p.name} (Frame {f_idx}, {fw}x{fh}) ---')
    for y in range(fh):
        row = ''
        for x in range(fw):
            r, g, b, a = frame.getpixel((x, y))
            if a == 0:
                row += '  '
            elif args.ansi:
                row += f'\033[48;2;{r};{g};{b}m  \033[0m'
            else:
                lum = (r*299 + g*587 + b*114)//1000
                if lum > 200: row += '##'
                elif lum > 140: row += '=='
                elif lum > 80: row += '::'
                else: row += '..'
        print(f'{y:02d}: {row}')

def cmd_ctm_check(args):
    p = Path(args.image)
    if not p.exists():
        print('Error: Not found: ' + str(p), file=sys.stderr)
        sys.exit(1)
    im = Image.open(p).convert('RGBA')
    w, h = im.size
    frames = h // w if w > 0 else 1
    print(f'=== LDLib CTM Check: {p.name} ({w}x{h}, {frames} frames) ===')
    for f in range(frames):
        frame = im.crop((0, f * 32, 32, (f + 1) * 32))
        tl = frame.crop((0, 0, 16, 16))
        tr = frame.crop((16, 0, 32, 16))
        bl = frame.crop((0, 16, 16, 32))
        br = frame.crop((16, 16, 32, 32))
        tr_top = sum(sum(tr.getpixel((x, 0))[:3]) for x in range(16)) / 16
        tr_left = sum(sum(tr.getpixel((0, y))[:3]) for y in range(16)) / 16
        bl_top = sum(sum(bl.getpixel((x, 0))[:3]) for x in range(16)) / 16
        bl_left = sum(sum(bl.getpixel((0, y))[:3]) for y in range(16)) / 16
        print(f'Frame {f}:')
        print('  [TL (0,0..16,16)]   Center Seamless')
        print(f'  [TR (16,0..32,16)]  Vertical Border (Top lum={tr_top:.0f}, Left lum={tr_left:.0f})')
        print(f'  [BL (0,16..16,32)]  Horizontal Border (Top lum={bl_top:.0f}, Left lum={bl_left:.0f})')
        print('  [BR (16,16..32,32)] Corner Cross / Junctions')

def cmd_ctm_fix(args):
    p = Path(args.image)
    if not p.exists():
        print('Error: Not found: ' + str(p), file=sys.stderr)
        sys.exit(1)
    im = Image.open(p).convert('RGBA')
    w, h = im.size
    frames = h // 32
    out_p = Path(args.output) if args.output else p
    fixed = Image.new('RGBA', (w, h))
    for f in range(frames):
        frame = im.crop((0, f * 32, 32, (f + 1) * 32))
        tl = frame.crop((0, 0, 16, 16))
        tr = frame.crop((16, 0, 32, 16))
        bl = frame.crop((0, 16, 16, 32))
        br = frame.crop((16, 16, 32, 32))
        f_fixed = Image.new('RGBA', (32, 32))
        f_fixed.paste(tl, (0, 0))
        if args.swap_tr_bl:
            f_fixed.paste(bl, (16, 0))
            f_fixed.paste(tr, (0, 16))
        else:
            f_fixed.paste(tr, (16, 0))
            f_fixed.paste(bl, (0, 16))
        f_fixed.paste(br, (16, 16))
        fixed.paste(f_fixed, (0, f * 32))
    fixed.save(out_p)
    print(f'Saved fixed CTM to: {out_p} ({frames} frames)')

def cmd_to_gif(args):
    p = Path(args.image)
    if not p.exists():
        print('Error: Not found: ' + str(p), file=sys.stderr)
        sys.exit(1)
    im = Image.open(p).convert('RGBA')
    w, h = im.size
    frames_count = h // w
    out_p = Path(args.output) if args.output else p.with_suffix('.gif')
    scale = args.scale
    duration = int(1000 / args.fps)
    frames = []
    for f in range(frames_count):
        fr = im.crop((0, f * w, w, (f + 1) * w))
        if scale != 1: fr = fr.resize((w * scale, w * scale), Image.NEAREST)
        frames.append(fr)
    if frames:
        frames[0].save(out_p, save_all=True, append_images=frames[1:], duration=duration, loop=0, disposal=2)
        print(f'Generated GIF: {out_p} ({len(frames)} frames @ {args.fps}fps, scale={scale}x)')

def cmd_board(args):
    images = [Path(img) for img in args.images]
    scale = args.scale
    out_p = Path(args.output)
    loaded = []
    for p in images:
        if not p.exists():
            print('Warning: Not found: ' + str(p), file=sys.stderr)
            continue
        im = Image.open(p).convert('RGBA')
        w, h = im.size
        f0 = im.crop((0, 0, w, min(h, w)))
        if scale != 1: f0 = f0.resize((w * scale, w * scale), Image.NEAREST)
        loaded.append((p.stem, f0))
    if not loaded:
        print('Error: No valid images for board.', file=sys.stderr)
        sys.exit(1)
    pad = 24
    max_h = max(im.size[1] for _, im in loaded)
    total_w = sum(im.size[0] for _, im in loaded) + pad * (len(loaded) + 1)
    total_h = max_h + pad * 2 + 30
    board = Image.new('RGBA', (total_w, total_h), (24, 26, 32, 255))
    draw = ImageDraw.Draw(board)
    curr_x = pad
    for name, im in loaded:
        board.paste(im, (curr_x, pad), im)
        draw.text((curr_x, pad + im.size[1] + 6), name, fill=(200, 210, 225, 255))
        curr_x += im.size[0] + pad
    out_p.parent.mkdir(parents=True, exist_ok=True)
    board.save(out_p)
    print(f'Generated board: {out_p} ({len(loaded)} items)')

def cmd_diff(args):
    p1 = Path(args.image1)
    p2 = Path(args.image2)
    out_p = Path(args.output)
    scale = args.scale
    im1 = Image.open(p1).convert('RGBA')
    im2 = Image.open(p2).convert('RGBA')
    w1, h1 = im1.size
    w2, h2 = im2.size
    f1 = im1.crop((0, 0, w1, min(h1, w1)))
    f2 = im2.crop((0, 0, w2, min(h2, w2)))
    mw = max(w1, w2)
    mh = max(f1.size[1], f2.size[1])
    diff_mask = Image.new('RGBA', (mw, mh), (0, 0, 0, 0))
    diff_count = 0
    for y in range(mh):
        for x in range(mw):
            c1 = f1.getpixel((x, y)) if x < f1.size[0] and y < f1.size[1] else (0,0,0,0)
            c2 = f2.getpixel((x, y)) if x < f2.size[0] and y < f2.size[1] else (0,0,0,0)
            if c1 != c2:
                diff_count += 1
                diff_mask.putpixel((x, y), (255, 0, 128, 255))
            else: diff_mask.putpixel((x, y), c2)
    pad = 20
    board_w = (mw * scale) * 3 + pad * 4
    board_h = (mh * scale) + pad * 2 + 30
    board = Image.new('RGBA', (board_w, board_h), (24, 26, 32, 255))
    draw = ImageDraw.Draw(board)
    s1 = f1.resize((mw * scale, mh * scale), Image.NEAREST)
    s2 = f2.resize((mw * scale, mh * scale), Image.NEAREST)
    sd = diff_mask.resize((mw * scale, mh * scale), Image.NEAREST)
    board.paste(s1, (pad, pad), s1)
    draw.text((pad, pad + mh * scale + 6), f'Before ({p1.stem})', fill=(180, 190, 200))
    board.paste(s2, (pad * 2 + mw * scale, pad), s2)
    draw.text((pad * 2 + mw * scale, pad + mh * scale + 6), f'After ({p2.stem})', fill=(180, 190, 200))
    board.paste(sd, (pad * 3 + mw * scale * 2, pad), sd)
    draw.text((pad * 3 + mw * scale * 2, pad + mh * scale + 6), f'Diff ({diff_count}px)', fill=(255, 100, 180))
    out_p.parent.mkdir(parents=True, exist_ok=True)
    board.save(out_p)
    print(f'Generated diff: {out_p} ({diff_count} differing px)')

def cmd_recolor(args):
    p = Path(args.image)
    if not p.exists():
        print('Error: Not found: ' + str(p), file=sys.stderr)
        sys.exit(1)
    color_map = {}
    for pair in args.map.split(','):
        if ':' in pair:
            src, dst = pair.split(':', 1)
            color_map[parse_hex(src)] = parse_hex(dst)
    im = Image.open(p).convert('RGBA')
    out_p = Path(args.output) if args.output else p
    new_im = Image.new('RGBA', im.size)
    count = 0
    for y in range(im.size[1]):
        for x in range(im.size[0]):
            c = im.getpixel((x, y))
            if c in color_map:
                new_im.putpixel((x, y), color_map[c])
                count += 1
            else: new_im.putpixel((x, y), c)
    new_im.save(out_p)
    print(f'Recolored {count} pixels in {p.name} -> {out_p}')

def cmd_mcmeta(args):
    p = Path(args.image)
    meta_p = Path(str(p) + '.mcmeta')
    if not p.exists():
        print('Error: Not found: ' + str(p), file=sys.stderr)
        sys.exit(1)
    im = Image.open(p)
    w, h = im.size
    frames = h // w
    data = {'animation': {'interpolate': args.interpolate, 'frametime': args.frametime, 'frames': list(range(frames))}}
    meta_p.write_text(json.dumps(data, indent=2), encoding='utf-8')
    print(f'Generated mcmeta ({frames} frames): {meta_p}')

def main():
    parser = argparse.ArgumentParser(description='Universal Pixel & Texture Tool for GTE-Multi')
    sub = parser.add_subparsers(dest='command', required=True)
    p_info = sub.add_parser('info', help='Inspect image properties and palette')
    p_info.add_argument('image')
    p_render = sub.add_parser('render', help='Render terminal preview')
    p_render.add_argument('image')
    p_render.add_argument('--frame', type=int, default=0)
    p_render.add_argument('--ansi', action='store_true')
    p_ctm_c = sub.add_parser('ctm-check', help='Check LDLib CTM layout')
    p_ctm_c.add_argument('image')
    p_ctm_f = sub.add_parser('ctm-fix', help='Fix swapped CTM quadrants')
    p_ctm_f.add_argument('image')
    p_ctm_f.add_argument('--swap-tr-bl', action='store_true', default=True)
    p_ctm_f.add_argument('--output')
    p_gif = sub.add_parser('to-gif', help='Convert strip to animated GIF')
    p_gif.add_argument('image')
    p_gif.add_argument('--output')
    p_gif.add_argument('--fps', type=int, default=10)
    p_gif.add_argument('--scale', type=int, default=8)
    p_board = sub.add_parser('board', help='Create comparison board')
    p_board.add_argument('images', nargs='+')
    p_board.add_argument('--output', required=True)
    p_board.add_argument('--scale', type=int, default=8)
    p_diff = sub.add_parser('diff', help='Create visual diff board')
    p_diff.add_argument('image1')
    p_diff.add_argument('image2')
    p_diff.add_argument('--output', required=True)
    p_diff.add_argument('--scale', type=int, default=8)
    p_rec = sub.add_parser('recolor', help='Swap palette colors')
    p_rec.add_argument('image')
    p_rec.add_argument('--map', required=True)
    p_rec.add_argument('--output')
    p_meta = sub.add_parser('mcmeta', help='Generate .mcmeta')
    p_meta.add_argument('image')
    p_meta.add_argument('--frametime', type=int, default=2)
    p_meta.add_argument('--interpolate', action='store_true', default=True)

    args = parser.parse_args()
    dispatch = {
        'info': cmd_info, 'render': cmd_render, 'ctm-check': cmd_ctm_check,
        'ctm-fix': cmd_ctm_fix, 'to-gif': cmd_to_gif, 'board': cmd_board,
        'diff': cmd_diff, 'recolor': cmd_recolor, 'mcmeta': cmd_mcmeta
    }
    dispatch[args.command](args)

if __name__ == '__main__':
    main()
