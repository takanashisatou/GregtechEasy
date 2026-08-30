---
name: gte-pixel-lab
description: Universal Minecraft pixel art, LDLib CTM quadrant inspection, animated strip conversion, color palette analysis, and texture verification toolset. Use whenever inspecting, diagnosing, creating, animating, recoloring, or troubleshooting item/block textures in GTE.
---

# GTE Pixel Lab & Texture Engineering Guide

This skill provides a standardized toolset and workflow for inspecting, diagnosing, animating, validating, and recoloring Minecraft item, block, and CTM textures in GTE.

---

## 1. Fast CLI Tool: `pixel_tool.py`

Location: `scripts/texture_lab/pixel_tool.py`

Run with Python 3:
```powershell
python scripts/texture_lab/pixel_tool.py <command> [args...]
```

### Supported Commands

| Command | Usage | Description |
| :--- | :--- | :--- |
| **`info`** | `python scripts/texture_lab/pixel_tool.py info <path.png>` | Inspects width, height, frame count, `.mcmeta` presence/config, transparency ratio, and top 8 palette colors. |
| **`render`** | `python scripts/texture_lab/pixel_tool.py render <path.png> [--frame 0] [--ansi]` | Renders terminal ASCII or 24-bit ANSI background pixel art directly to console. |
| **`ctm-check`** | `python scripts/texture_lab/pixel_tool.py ctm-check <ctm.png>` | Validates LDLib 4-quadrant layout across all animation frames and checks edge luminance. |
| **`ctm-fix`** | `python scripts/texture_lab/pixel_tool.py ctm-fix <ctm.png> [--swap-tr-bl] [--output out.png]` | Auto-swaps Top-Right (Vertical) and Bottom-Left (Horizontal) quadrants across all frames. |
| **`to-gif`** | `python scripts/texture_lab/pixel_tool.py to-gif <strip.png> [--fps 10] [--scale 8]` | Converts a vertical Minecraft animation strip ($16 \times (16 \times N)$) to scaled animated GIF. |
| **`board`** | `python scripts/texture_lab/pixel_tool.py board <img1> <img2> ... --output board.png [--scale 8]` | Generates a labeled side-by-side comparison board on a clean dark studio background. |
| **`diff`** | `python scripts/texture_lab/pixel_tool.py diff <before.png> <after.png> --output diff.png` | Produces a 3-panel Before / After / Diff board highlighting modified pixels in magenta. |
| **`recolor`** | `python scripts/texture_lab/pixel_tool.py recolor <img.png> --map "#HEX1:#HEX2,#HEX3:#HEX4" [--output out.png]` | Precision palette swapping across single images or animated multi-frame strips. |
| **`mcmeta`** | `python scripts/texture_lab/pixel_tool.py mcmeta <strip.png> [--frametime 2] [--interpolate true]` | Auto-generates matching `<name>.png.mcmeta` JSON metadata. |

---

## 2. LDLib CTM 4-Quadrant Architecture

LowDragLib (LDLib) uses a 4-quadrant submap coordinate system for connected texture sheets ($32 \times 32$ per animation frame):

```
+-------------------+-------------------+
| Top-Left (TL)     | Top-Right (TR)    |
| (0, 0) .. (16, 16)| (16, 0) .. (32, 16|
|                   |                   |
| CENTER SEAMLESS   | VERTICAL BORDER   |
| (Connected All)   | (Left & Right)    |
+-------------------+-------------------+
| Bottom-Left (BL)  | Bottom-Right (BR) |
| (0, 16) .. (16, 32| (16, 16) .. (32,32|
|                   |                   |
| HORIZONTAL BORDER | CORNER JUNCTION   |
| (Top & Bottom)    | (Cross / Inner +) |
+-------------------+-------------------+
```

### The "Swapped TR/BL" Bug:
- If TR contains horizontal borders and BL contains vertical borders:
  - Top/Bottom connections will show horizontal stripes cutting vertically.
  - Left/Right connections will show vertical stripes cutting horizontally.
- **Fix**: Run `python scripts/texture_lab/pixel_tool.py ctm-fix <file.png> --swap-tr-bl`.

---

## 3. Circuit Progression Palette Standards

When creating or modifying GregTech circuit tiers:
1. **Tier Progression**:
   - `processor` $\to$ Tier $N$ (e.g. UHV)
   - `assembly` $\to$ Tier $N+1$ (e.g. UEV)
   - `computer` $\to$ Tier $N+2$ (e.g. UIV)
   - `mainframe` $\to$ Tier $N+3$ (e.g. UXV)
2. **Animation Consistency**:
   - Multi-frame animated circuits must always provide a matching `<name>.png.mcmeta`.
   - Never mix static $16 \times 16$ with animated $16 \times 112$ in the same tier series.
   - Run `pixel_tool.py info` to confirm all 4 tiers have matching frame counts and palettes.
