---
name: gte-pixel-lab
description: >-
  GTE 像素美术与贴图工程工具链：用 pixel_tool.py 查看贴图与色板、终端预览、
  诊断和一键修复 LDLib CTM 4 象限错位、动图条转 GIF、拼对比图/差异图、换色与生成 .mcmeta。
  Use whenever inspecting, diagnosing, animating, recoloring, or troubleshooting
  item/block/CTM textures in GTE.
---

# GTE 贴图工具箱（pixel_tool.py）

仓库里查贴图尺寸、色板、动画帧、CTM 象限、换色和出对比图，统一跑 `scripts/texture_lab/pixel_tool.py`，不用手动开 PS 或写一次性脚本。

## 1. CLI 命令速查

```powershell
python scripts/texture_lab/pixel_tool.py <命令> [参数...]
```

| 命令 | 用法 | 干嘛用 |
| --- | --- | --- |
| `info` | `pixel_tool.py info <a.png>` | 看宽高、动画帧数、`.mcmeta` 状态、透明占比、前 8 主色 |
| `render` | `pixel_tool.py render <a.png> [--frame 0] [--ansi]` | 直接在终端画 ASCII 或 24 位 ANSI 彩色像素预览 |
| `ctm-check` | `pixel_tool.py ctm-check <ctm.png>` | 逐帧检查 LDLib 4 象限布局和边缘亮度，揪出 TR/BL 反了的 CTM |
| `ctm-fix` | `pixel_tool.py ctm-fix <ctm.png> [--swap-tr-bl] [--output out.png]` | 逐帧互换右上（TR）和左下（BL）象限 |
| `to-gif` | `pixel_tool.py to-gif <strip.png> [--output out.gif] [--fps 10] [--scale 8]` | 把 MC 竖向动画条（`16 × 16*N`）转成放大版 GIF 方便肉眼看 |
| `board` | `pixel_tool.py board <图1> <图2> ... --output board.png [--scale 8]` | 在深色底板上拼带标签的多图并排对比板 |
| `diff` | `pixel_tool.py diff <旧.png> <新.png> --output diff.png [--scale 8]` | 生成「旧 / 新 / 差异」三联图，改动像素用洋红高亮 |
| `recolor` | `pixel_tool.py recolor <a.png> --map "#旧1:#新1,#旧2:#新2" [--output out.png]` | 精确色板替换，单帧和多帧动画条都支持 |
| `mcmeta` | `pixel_tool.py mcmeta <strip.png> [--frametime 2] [--interpolate]` | 自动生成配套的 `<名>.png.mcmeta`（`--interpolate` 默认开启） |

## 2. LDLib CTM 四象限布局与高频坑

LDLib 的连接材质（`_ctm.png`）每帧是 `32 × 32`，拆成 4 个 `16 × 16` 象限：

```
+----------------------+----------------------+
| 左上 TL (0..16,0..16) | 右上 TR (16..32,0..16)|
| 中心无缝图            | 竖向边框（左右有边）  |
| （四面全连）          |                      |
+----------------------+----------------------+
| 左下 BL (0..16,16..32)| 右下 BR (16..32,16..32)|
| 横向边框（上下有边）  | 十字/内角交汇        |
+----------------------+----------------------+
```

**经典的 TR / BL 互换 Bug**：
- 症状：游戏里上下相连的方块出现一排横纹把竖边切断，左右相连的方块出现竖纹把横边切断。
- 诊断：`python scripts/texture_lab/pixel_tool.py ctm-check <ctm.png>`
- 一键修：`python scripts/texture_lab/pixel_tool.py ctm-fix <ctm.png> --swap-tr-bl --output <ctm.png>`

## 3. GTE 贴图命名与电路规范

- **电路 4 级序列**：同一系列按 `processor`（N 级）→ `assembly`（N+1）→ `computer`（N+2）→ `mainframe`（N+3）递增。
  - 多帧动画电路必须配同名 `.png.mcmeta`。
  - 同一系列别把 `16×16` 静图和 `16×112` 动图混着用，改完用 `pixel_tool.py info` 逐张核对帧数和色板。
- **自发光外壳与线圈**：GTECore 的 `createActiveLightCasingBlock` 和 `createCoilBlock` 都会自动引用 `<name>_bloom.png`，缺了 `_bloom.png` 机器一运行就变紫黑块。
- **Datagen 顺序**：新方块/物品的 `.png`、`.png.mcmeta`、`_bloom.png`、`_ctm.png` 先全部落盘，再跑 `:modules:gtecore:runData`。
