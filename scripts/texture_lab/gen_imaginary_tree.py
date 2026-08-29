# -*- coding: utf-8 -*-
"""Generate the full Imaginary Tree (虚数之树) circuit product-line textures.

Style sources (analyzed pixel-by-pixel):
  - super_string_circuit_board / _printed_circuit_board : diagonal board silhouette
  - yin_yang_processor (16x112, 7f)                       : diagonal chip template
  - crystal_processor_assembly / _computer / _mainframe : GTCEu high-tier templates
  - silicon_boule / silicon_wafer / qbit_cpu_wafer        : GTCEu canonical shapes
  - imaginary_casing (block)                              : navy + ice-cyan palette

Palette identity: deep navy substrate, ice-cyan glowing "circuit tree"
(traces branch like a binary tree - the Imaginary Tree), ice-white casing,
copper pins & gray solder kept for hardware consistency with existing series.
"""
import os
from PIL import Image

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, "..", "..", "modules", "gtecore", "src", "main",
                   "resources", "assets", "gtecore", "textures", "item")
GT = os.path.join(HERE, "..", "..", "modules", "gtm-reborn", "src", "main",
                  "resources", "assets", "gtceu", "textures", "item")

# ---------------------------------------------------------------- palette
DEEP   = (10, 24, 36, 255)     # deepest navy shadow
NAVY0  = (14, 34, 50, 255)     # casing navy (from imaginary_casing)
NAVY1  = (22, 50, 72, 255)     # base navy
NAVY2  = (28, 62, 90, 255)
STEEL0 = (32, 75, 109, 255)    # mid steel blue
STEEL1 = (45, 100, 140, 255)
STEEL2 = (70, 130, 170, 255)
CYAN0  = (120, 210, 245, 255)  # glow cyan
CYAN1  = (175, 230, 252, 255)  # ice cyan
ICE    = (225, 248, 255, 255)  # near-white cyan
WHITE  = (255, 255, 255, 255)
# casing cyan-white scale (processor casing)
CASE_HI   = ICE
CASE_MID  = (150, 205, 230, 255)
CASE_DARK = (110, 165, 195, 255)
# hardware (kept from existing series)
GRAY_D = (107, 103, 97, 255)
GRAY_L = (160, 154, 149, 255)
COP_D  = (156, 98, 41, 255)
COP_G  = (231, 160, 86, 255)
COP_H  = (138, 89, 41, 255)
COP_I  = (252, 184, 130, 255)
COP_J  = (193, 125, 54, 255)
GOLD   = (212, 175, 55, 255)
GOLD_D = (160, 130, 40, 255)

T = (0, 0, 0, 0)  # transparent


def new_img(w=16, h=16):
    return Image.new("RGBA", (w, h), T)


def px(img, x, y, c):
    if 0 <= x < img.width and 0 <= y < img.height:
        img.putpixel((x, y), c)


def save(img, name):
    path = os.path.join(OUT, name)
    img.save(path)
    print("wrote", name, img.size)


def load(path):
    return Image.open(path).convert("RGBA")


# ============================================================ 1. boule
def gen_boule():
    """silicon_boule silhouette, navy crystal with glowing tree-ring bands."""
    tpl = load(os.path.join(GT, "silicon_boule.png"))
    gray_map = {  # silicon gray -> imaginary navy scale
        (35, 35, 35): DEEP, (61, 61, 61): NAVY0, (73, 73, 73): NAVY2,
        (86, 86, 86): NAVY1, (112, 112, 112): STEEL0,
        (137, 137, 137): STEEL1, (163, 163, 163): CYAN0,
    }
    img = new_img()
    for y in range(16):
        for x in range(16):
            p = tpl.getpixel((x, y))
            if p[3] == 0:
                continue
            img.putpixel((x, y), gray_map.get(p[:3], NAVY1))
    # glowing growth rings (tree-ring concept) across the cylinder body
    for y, col in ((5, CYAN1), (6, CYAN0), (10, CYAN1), (11, CYAN0)):
        for x in range(16):
            p = img.getpixel((x, y))
            if p[3] != 0 and p != DEEP:
                # keep cylindrical shading: ring brighter toward centre
                img.putpixel((x, y), col if p in (STEEL0, STEEL1, CYAN0, NAVY2) else NAVY2)
    # bright core line of each ring
    for y in (5, 10):
        for x in range(16):
            if img.getpixel((x, y))[3] != 0 and img.getpixel((x, y)) != DEEP:
                img.putpixel((x, y), ICE if 6 <= x <= 9 else CYAN1)
    save(img, "imaginary_tree_boule.png")


# ============================================================ 2. wafer
WAFER_SHEEN = {  # silicon_wafer grays -> diagonal navy sheen
    (35, 35, 35): DEEP, (61, 61, 61): NAVY0, (73, 73, 73): NAVY1,
    (86, 86, 86): STEEL0, (115, 111, 117): STEEL1,
    (136, 132, 145): STEEL2, (149, 165, 159): CYAN0,
}


def wafer_disc():
    tpl = load(os.path.join(GT, "silicon_wafer.png"))
    img = new_img()
    for y in range(16):
        for x in range(16):
            p = tpl.getpixel((x, y))
            if p[3] == 0:
                continue
            img.putpixel((x, y), WAFER_SHEEN.get(p[:3], NAVY1))
    return img


TREE_SMALL = [  # faint tree etching, centred at (7-8, 7) - local coords
    (8, 3), (7, 4), (9, 4), (6, 5), (8, 5), (10, 5),
    (7, 6), (9, 6), (8, 7), (8, 8), (7, 9), (9, 9), (8, 10),
]


def gen_wafer():
    img = wafer_disc()
    for x, y in TREE_SMALL:  # subtle etch, lighter than the sheen
        p = img.getpixel((x, y))
        if p[3] != 0:
            img.putpixel((x, y), CYAN1)
    save(img, "imaginary_tree_wafer.png")


def gen_cpu_wafer():
    img = wafer_disc()
    # etched die grid (darkened cells) like qbit_cpu_wafer
    for gy in (4, 7, 10):
        for gx in (4, 7, 10):
            for dx in (0, 1):
                for dy in (0, 1):
                    x, y = gx + dx, gy + dy
                    p = img.getpixel((x, y))
                    if p[3] != 0 and p != DEEP:
                        darker = tuple(max(0, c - 28) for c in p[:3]) + (255,)
                        img.putpixel((x, y), darker)
    # central die carries the bright circuit-tree (trunk ICE, branches CYAN1)
    for x, y in TREE_SMALL:
        p = img.getpixel((x, y))
        if p[3] != 0:
            img.putpixel((x, y), ICE if x == 8 else CYAN1)
    save(img, "imaginary_tree_cpu_wafer.png")


# ============================================================ 3. circuit chip (QFP)
def gen_circuit_chip():
    img = new_img()
    # pins: copper, top & bottom rows, left & right cols (1px, spaced)
    for x in (5, 7, 9, 11):
        px(img, x, 3, COP_I); px(img, x, 12, COP_D)
        px(img, x, 2, COP_H); px(img, x, 13, COP_H)
    for y in (5, 7, 9, 11):
        px(img, 3, y, COP_I); px(img, 12, y, COP_D)
        px(img, 2, y, COP_H); px(img, 13, y, COP_H)
    # body 8x8 navy with bevel
    for y in range(4, 12):
        for x in range(4, 12):
            img.putpixel((x, y), NAVY1)
    for x in range(4, 12):
        px(img, x, 4, STEEL1)   # top bevel light
        px(img, x, 11, DEEP)    # bottom bevel dark
    for y in range(4, 12):
        px(img, 4, y, STEEL0)   # left bevel
        px(img, 11, y, NAVY0)   # right bevel
    px(img, 4, 4, CYAN0)  # corner marker
    # die window: dark centre with ice circuit-tree
    for y in range(6, 10):
        for x in range(6, 10):
            img.putpixel((x, y), NAVY0)
    for x, y in ((8, 5), (7, 6), (9, 6), (8, 7), (6, 7), (10, 7), (8, 8), (8, 9), (7, 8), (9, 8)):
        px(img, x, y, CYAN1)
    px(img, 8, 6, ICE); px(img, 8, 8, ICE)
    save(img, "imaginary_tree_circuit_chip.png")


# ============================================================ 4/5. boards
def board_silhouette(name):
    """Return (surface, edge, highlight) pixel sets of super_string board."""
    tpl = load(os.path.join(OUT, name))
    surface, edge, high = [], [], []
    for y in range(16):
        for x in range(16):
            p = tpl.getpixel((x, y))
            if p[3] == 0:
                continue
            if p[:3] == (59, 46, 113):
                edge.append((x, y))
            elif p[:3] == (191, 214, 255):
                high.append((x, y))
            else:
                surface.append((x, y))
    return surface, edge, high


# circuit-tree traces for the board: connected line segments (Bresenham),
# roots at the bottom-right connector, binary branches spreading top-left.
def bline(p0, p1):
    """4/8-connected integer line from p0 to p1."""
    x0, y0 = p0
    x1, y1 = p1
    pts = []
    dx, dy = abs(x1 - x0), abs(y1 - y0)
    sx = 1 if x0 < x1 else -1
    sy = 1 if y0 < y1 else -1
    err = dx - dy
    while True:
        pts.append((x0, y0))
        if (x0, y0) == (x1, y1):
            return pts
        e2 = 2 * err
        if e2 > -dy:
            err -= dy
            x0 += sx
        if e2 < dx:
            err += dx
            y0 += sy


# (segment, depth) - trunk -> branches -> twigs -> canopy tips
BOARD_SEGMENTS = [
    (((9, 12), (7, 7)), 0),    # trunk
    (((8, 9), (5, 6)), 1),     # branch upper-left
    (((7, 8), (10, 5)), 1),    # branch upper-right
    (((6, 7), (5, 8)), 2),     # twig left
    (((9, 6), (10, 7)), 2),    # twig right
    (((5, 6), (4, 4)), 3),     # canopy left
    (((10, 5), (11, 4)), 3),   # canopy right
]
BOARD_TIPS = [(9, 12), (4, 4), (11, 4), (5, 8), (10, 7)]       # bright nodes
BOARD_JUNCTIONS = [(8, 9), (7, 8), (6, 7), (9, 6), (7, 7)]     # split points


def build_board_tree():
    tree = {}  # (x, y) -> depth
    for (p0, p1), d in BOARD_SEGMENTS:
        for pt in bline(p0, p1):
            tree[pt] = min(tree.get(pt, 99), d)
    return tree


def paint_board(img, surface, edge, high, printed):
    surf = set(surface) | set(high)
    for x, y in edge:
        img.putpixel((x, y), DEEP)
    for x, y in high:
        img.putpixel((x, y), CYAN0)
    for x, y in surface:
        # flat navy substrate with a soft top-left sheen band
        img.putpixel((x, y), NAVY2 if x + y < 14 else NAVY1)
    # glowing circuit-tree traces (clipped to the board surface)
    tree = build_board_tree()
    for (x, y), d in tree.items():
        if (x, y) in surf:
            img.putpixel((x, y), CYAN1)
    # thicken branch lines with a dimmer companion pixel
    for (x, y), d in tree.items():
        if d >= 1 and (x + 1, y) in surf and img.getpixel((x + 1, y)) in (NAVY1, NAVY2):
            img.putpixel((x + 1, y), CYAN0)
    for x, y in BOARD_JUNCTIONS:
        if (x, y) in surf:
            img.putpixel((x, y), ICE)
    for x, y in BOARD_TIPS:
        if (x, y) in surf:
            img.putpixel((x, y), ICE)
    if printed:
        # gold edge connector at bottom-right tip
        for x, y in ((11, 13), (12, 12), (12, 11), (13, 11), (13, 10)):
            px(img, x, y, GOLD)
        for x, y in ((12, 13), (13, 12)):
            px(img, x, y, GOLD_D)
        # two dark micro-chips with pins
        for ox, oy in ((5, 8), (8, 5)):
            for dx in (0, 1):
                for dy in (0, 1):
                    px(img, ox + dx, oy + dy, NAVY0)
            px(img, ox, oy, STEEL2)
            px(img, ox - 1, oy, COP_G); px(img, ox + 2, oy + 1, COP_G)
        # small caps / resistors
        px(img, 7, 9, COP_I); px(img, 9, 7, COP_I)
        px(img, 6, 9, COP_H); px(img, 10, 6, COP_H)


def gen_boards():
    surface, edge, high = board_silhouette("super_string_circuit_board.png")
    img = new_img()
    paint_board(img, surface, edge, high, printed=False)
    save(img, "imaginary_tree_circuit_board.png")

    surface, edge, high = board_silhouette("super_string_printed_circuit_board.png")
    img = new_img()
    paint_board(img, surface, edge, high, printed=True)
    save(img, "imaginary_tree_printed_circuit_board.png")


# ============================================================ 6. processor (animated)
# yin_yang_processor template roles
PROC_CASE = {(68, 64, 59): CASE_HI, (54, 50, 45): CASE_MID, (40, 37, 32): CASE_DARK}
PROC_KEEP = {(107, 103, 97): GRAY_D, (160, 154, 149): GRAY_L,
             (156, 98, 41): COP_D, (231, 160, 86): COP_G, (138, 89, 41): COP_H,
             (252, 184, 130): COP_I, (193, 125, 54): COP_J}
PROC_CORE = {(0, 0, 0), (255, 255, 255)}

# the Imaginary Tree inside the processor core diamond (rows 4-9, cols 4-11)
CORE_TREE = {  # (x, y): depth   - binary circuit tree, trunk at bottom
    (8, 9): 0, (7, 9): 0,            # trunk base
    (8, 8): 0, (7, 8): 0,
    (8, 7): 1,                        # trunk
    (7, 6): 2, (9, 6): 2,             # first split
    (6, 5): 3, (8, 5): 3, (10, 5): 3,  # second split
    (5, 4): 4, (7, 4): 4, (9, 4): 4, (11, 4): 4,  # canopy tips (row4 only x8 in mask...)
}
# core mask per template frame-0 diamond (rows 4..9)
CORE_MASK = {(8, 4),
             (6, 5), (7, 5), (8, 5), (9, 5),
             (4, 6), (5, 6), (6, 6), (7, 6), (8, 6), (9, 6), (10, 6),
             (5, 7), (6, 7), (7, 7), (8, 7), (9, 7), (10, 7), (11, 7),
             (6, 8), (7, 8), (8, 8), (9, 8),
             (7, 9), (8, 9)}
# adjust tree to fit mask (row4 only has x8)
CORE_TREE = {
    (7, 9): 0, (8, 9): 0,
    (7, 8): 0, (8, 8): 1,
    (8, 7): 1, (7, 7): 2, (9, 7): 2,
    (6, 6): 3, (8, 6): 3, (10, 6): 3,
    (5, 6): 4, (7, 5): 4, (9, 5): 4, (11, 7): 4,
    (8, 4): 5, (6, 5): 5, (10, 6): 5, (4, 6): 5, (5, 7): 5, (11, 7): 5,
}
CORE_TREE = {k: v for k, v in CORE_TREE.items() if k in CORE_MASK}
N_FRAMES = 7


def gen_processor():
    tpl = load(os.path.join(OUT, "yin_yang_processor.png"))
    img = new_img(16, 16 * N_FRAMES)
    for f in range(N_FRAMES):
        oy = f * 16
        for y in range(16):
            for x in range(16):
                p = tpl.getpixel((x, oy + y))
                if p[3] == 0:
                    continue
                key = p[:3]
                if key in PROC_CORE:
                    continue  # core repainted below
                if key in PROC_CASE:
                    img.putpixel((x, oy + y), PROC_CASE[key])
                elif key in PROC_KEEP:
                    img.putpixel((x, oy + y), PROC_KEEP[key])
                else:
                    img.putpixel((x, oy + y), NAVY1)
        # core: navy background + animated glowing tree
        for x, y in CORE_MASK:
            img.putpixel((x, oy + y), NAVY0)
        for (x, y), d in CORE_TREE.items():
            phase = (f - d) % N_FRAMES
            if phase == 0:
                col = ICE                      # wave front: brightest
            elif phase in (1, 2):
                col = CYAN1
            elif phase in (3, 4):
                col = CYAN0
            else:
                col = STEEL2                   # dim rest glow
            img.putpixel((x, oy + y), col)
        # wandering sparkle inside core
        sx, sy = ((5 + 2 * f) % 8 + 4, 4 + (f % 3))
        if (sx, sy) in CORE_MASK:
            img.putpixel((sx, oy + sy), WHITE)
    save(img, "imaginary_tree_processor.png")
    write_mcmeta("imaginary_tree_processor.png.mcmeta", N_FRAMES)


# ============================================================ 7. assembly (animated)
# full gray -> navy-steel/cyan-casing remap (no crystal gray left behind)
ASSEM_GRAY = {
    (40, 37, 32): NAVY0, (54, 50, 45): NAVY1, (68, 64, 59): NAVY2,
    (81, 77, 72): STEEL0, (107, 103, 97): STEEL1, (132, 128, 121): STEEL2,
    (160, 154, 149): (120, 180, 215), (174, 174, 174): CASE_DARK,
    (215, 215, 215): CASE_MID, (245, 245, 245): CASE_HI,
}
# core crystal blues -> breathing glow cycle (indexed by base brightness)
ASSEM_CORE_IDX = {(1, 59, 255): 0, (4, 89, 255): 1,
                  (7, 120, 255): 2, (10, 158, 255): 3}
BREATH = [STEEL1, CYAN0, CYAN1, ICE]


def gen_assembly():
    tpl = load(os.path.join(GT, "crystal_processor_assembly.png"))
    img = new_img(16, 16 * N_FRAMES)
    for f in range(N_FRAMES):
        oy = f * 16
        for y in range(16):
            for x in range(16):
                p = tpl.getpixel((x, oy + y))
                if p[3] == 0:
                    continue
                key = p[:3]
                if key == (255, 255, 255):
                    img.putpixel((x, oy + y), WHITE)          # wandering sparkle
                elif key in ASSEM_CORE_IDX:
                    # breathing resonance: glow level cycles with the frame
                    lvl = (ASSEM_CORE_IDX[key] + f) % len(BREATH)
                    img.putpixel((x, oy + y), BREATH[lvl])
                elif key in ASSEM_GRAY:
                    img.putpixel((x, oy + y), ASSEM_GRAY[key])
                else:
                    img.putpixel((x, oy + y), p)
    save(img, "imaginary_tree_processor_assembly.png")
    write_mcmeta("imaginary_tree_processor_assembly.png.mcmeta", N_FRAMES)


# ============================================================ 8. computer (static)
def gen_computer():
    tpl = load(os.path.join(GT, "crystal_processor_computer.png"))
    blue_map = {(1, 59, 255): STEEL0, (4, 89, 255): STEEL1,
                (7, 120, 255): CYAN0, (10, 158, 255): CYAN1}
    img = new_img()
    for y in range(16):
        for x in range(16):
            p = tpl.getpixel((x, y))
            if p[3] == 0:
                continue
            key = p[:3]
            if key in blue_map:
                img.putpixel((x, y), blue_map[key])
            elif key in ASSEM_GRAY:
                img.putpixel((x, y), ASSEM_GRAY[key])
            else:
                img.putpixel((x, y), p)
    # gold edge-connector tail (bottom-right strip)
    for y in range(12, 16):
        for x in range(16):
            p = img.getpixel((x, y))
            if p[3] != 0:
                img.putpixel((x, y), GOLD if (x + y) % 2 else GOLD_D)
    # ice-white bus lines across the chip stack
    for x, y in ((3, 6), (4, 6), (5, 6), (2, 9), (3, 9), (4, 9)):
        if img.getpixel((x, y))[3] != 0:
            img.putpixel((x, y), ICE)
    # enlarged imaginary micro-tree network on the board area
    for x, y in ((11, 11), (10, 10), (9, 9), (8, 8), (12, 10), (10, 12),
                 (7, 7), (6, 8), (9, 7), (11, 9)):
        if img.getpixel((x, y))[3] != 0:
            img.putpixel((x, y), ICE)
    save(img, "imaginary_tree_processor_computer.png")


# ============================================================ 9. mainframe (animated, 8 frames)
MAIN_GRAY = {  # machine body -> navy-steel scale
    (160, 154, 149): (120, 180, 215), (132, 128, 121): STEEL2,
    (107, 103, 97): STEEL1, (81, 77, 72): STEEL0,
    (68, 64, 59): NAVY2, (54, 50, 45): NAVY1, (40, 37, 32): NAVY0,
}
MAIN_BLUE = {(7, 120, 255): CYAN0, (10, 158, 255): CYAN1,
             (4, 89, 255): (60, 160, 220), (77, 200, 255): (200, 240, 255),
             (77, 255, 255): ICE, (77, 154, 255): CYAN1}


def gen_mainframe():
    tpl = load(os.path.join(GT, "crystal_processor_mainframe.png"))
    n = tpl.height // 16
    img = new_img(16, tpl.height)
    for f in range(n):
        oy = f * 16
        for y in range(16):
            for x in range(16):
                p = tpl.getpixel((x, oy + y))
                if p[3] == 0:
                    continue
                key = p[:3]
                if key in MAIN_BLUE:
                    img.putpixel((x, oy + y), MAIN_BLUE[key])
                elif key in MAIN_GRAY:
                    img.putpixel((x, oy + y), MAIN_GRAY[key])
                else:
                    img.putpixel((x, oy + y), p)
    save(img, "imaginary_tree_processor_mainframe.png")
    write_mcmeta("imaginary_tree_processor_mainframe.png.mcmeta", n)


def write_mcmeta(name, n_frames):
    frames = ", ".join(str(i) for i in range(n_frames))
    content = ("{\n\t\"animation\": {\n\t\t\"interpolate\": true,\n"
               "\t\t\"frametime\": 2,\n\t\t\"frames\": [\n\t\t\t" + frames +
               "\n\t\t]\n\t}\n}\n")
    with open(os.path.join(OUT, name), "w", encoding="utf-8") as fh:
        fh.write(content)
    print("wrote", name)


if __name__ == "__main__":
    gen_boule()
    gen_wafer()
    gen_cpu_wafer()
    gen_circuit_chip()
    gen_boards()
    gen_processor()
    gen_assembly()
    gen_computer()
    gen_mainframe()
    print("done")
