"""Derive the static superstring star from the first GTM gravi-star frame."""

from pathlib import Path

from PIL import Image


ROOT = Path(__file__).resolve().parents[2]
SOURCE = ROOT / "modules/gtm-reborn/src/main/resources/assets/gtceu/textures/item/gravi_star.png"
OUTPUT = ROOT / "gte/overrides/kubejs/assets/kubejs/textures/item/super_string_star.png"

PALETTE = {
    (0, 14, 43, 128): (41, 14, 72, 128),
    (0, 20, 64, 255): (40, 10, 65, 255),
    (0, 46, 90, 255): (82, 29, 123, 255),
    (0, 71, 115, 255): (128, 53, 184, 255),
    (26, 97, 141, 255): (181, 102, 236, 255),
    (76, 147, 191, 255): (220, 171, 255, 255),
    (102, 173, 217, 255): (245, 220, 255, 255),
}


def main():
    with Image.open(SOURCE) as source:
        frame = source.convert("RGBA").crop((0, 0, 16, 16))
    for y in range(16):
        for x in range(16):
            pixel = frame.getpixel((x, y))
            frame.putpixel((x, y), PALETTE[pixel] if pixel[3] else (0, 0, 0, 0))

    # A white nucleus and cyan strings distinguish it from the blue gravi-star.
    for position in ((8, 7), (8, 8), (9, 7)):
        frame.putpixel(position, (255, 250, 255, 255))
    for position in ((6, 9), (7, 8), (9, 6), (10, 5)):
        frame.putpixel(position, (81, 232, 238, 255))
    for position in ((12, 2), (13, 4), (11, 7), (9, 12), (12, 13), (13, 11)):
        frame.putpixel(position, (81, 232, 238, 255))

    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    frame.save(OUTPUT, optimize=True)
    print(OUTPUT.relative_to(ROOT))


if __name__ == "__main__":
    main()
