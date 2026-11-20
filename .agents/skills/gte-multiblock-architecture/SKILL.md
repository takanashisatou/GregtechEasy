---
name: gte-multiblock-architecture
description: >-
  GTE 多方块建筑外观与 3D 几何设计：摆脱纯火柴盒造型、搭配主题外壳/框架/玻璃/线圈、
  生成精准等宽的 FactoryBlockPattern 切片矩阵。Use when designing new multiblock
  machine shapes, choosing block palettes, or building curves/rings/towers.
---

# GTE 多方块建筑与几何设计

专门治多方块设计的四大通病：**实心火柴盒**、**全通体纯色糊成一团**、**仓口埋太深接不到线**、**`.aisle(...)` 字符对不齐启动直接炸**。写完造型后接回 [gte-multiblock](../gte-multiblock/SKILL.md) 完成注册与逻辑。

## 5 步出图法

```
1. 定体量 (X*Y*Z) -> 2. 选配色板 -> 3. 定功能区 -> 4. 切几何片 -> 5. 查矩阵对齐
```

1. **定体量（宽 X × 高 Y × 深 Z）**
   - 早期蒸汽 / 紧凑设备：`3x3x3` ~ `5x5x5`
   - 中型工业车间 / 加工中心：`7x5x7` ~ `9x7x9`
   - 反应塔 / 蒸馏塔：`5x11x5` ~ `7x17x7`
   - 科学装置 / 环形对撞机：`15x5x15` ~ `31x15x31`
   - 终局大奇观：`35x10x35` ~ `55x30x55`
2. **三段式配色（绝不全用单一纯色外壳）**
   - 主外壳 ~60% + 金属框架/齿轮箱压边 ~20% + 玻璃观察窗 ~10% + 内部管道/发光线圈核心 ~10%。
   - 6 套主题配色库直接查 [thematic_palettes.md](references/thematic_palettes.md)。
3. **功能分区与玩家顺手度**
   - **控制器**：放正面最容易右键的位置（底面居中或视线平齐 `y=1`）。
   - **仓口可达**：在底层边缘、侧面或背面留足带 `.or(autoAbilities(...))` 的外壳位，别把仓口藏进封闭内腔。
   - **内部可视**：反应腔、线圈、水池尽量开侧窗玻璃，让机器运转时能看到内部细节。
4. **几何切片**：圆柱、同心环、龙骨厂房、阶梯塔直接抄 [geometry_algorithms.md](references/geometry_algorithms.md) 的标准切片表。
5. **等宽自检**：同一个多方块里，所有 `.aisle(...)` 行数必须一致、每行字符数一字不差、无全角空格，控制器字符全结构只出现 1 次。

## 3 套拿来就能改的经典形态

### 形态 1：工业龙骨车间（7×5×5）
顶部框架压边、双侧大玻璃采光、中轴管道。

```java
.pattern(definition -> FactoryBlockPattern.start()
        // 前立面（含控制器 #）
        .aisle("FFFFFFF",
               "FAAAAAF",
               "FA...AF",
               "FA...AF",
               "FAA#AAF")
        // 中间跨度（3 层：顶框架 F、侧玻璃 G、底外壳 A、中轴管道 P）
        .aisle("FGGGGGF",
               "G.....G",
               "G..P..G",
               "G.....G",
               "AAAAAAA")
        .aisle("FGGGGGF",
               "G.....G",
               "G..P..G",
               "G.....G",
               "AAAAAAA")
        .aisle("FGGGGGF",
               "G.....G",
               "G..P..G",
               "G.....G",
               "AAAAAAA")
        // 后立面
        .aisle("FFFFFFF",
               "FAAAAAF",
               "FA...AF",
               "FA...AF",
               "FAAAAAF")
        .where("A", blocks(CASING_ALUMINIUM_FROSTPROOF.get()).or(autoAbilities(definition.getRecipeTypes())))
        .where("F", easy("gtceu:aluminium_frame"))
        .where("G", blocks(CLEANROOM_GLASS.get()))
        .where("P", blocks(CASING_STEEL_PIPE.get()))
        .where(".", air())
        .where("#", controller(blocks(definition.getBlock())))
        .build())
```

### 形态 2：工业圆柱反应塔（5×5×5）
切角圆柱立面 + 中空线圈反应腔。

```java
.pattern(definition -> FactoryBlockPattern.start()
        .aisle(".AAA.", "AAAAA", "AA#AA", "AAAAA", ".AAA.")
        .aisle(".AAA.", "ACCCA", "AC.CA", "ACCCA", ".AAA.")
        .aisle(".AAA.", "ACCCA", "AC.CA", "ACCCA", ".AAA.")
        .aisle(".AAA.", "ACCCA", "AC.CA", "ACCCA", ".AAA.")
        .aisle(".AAA.", "AAAAA", "AAAAA", "AAAAA", ".AAA.")
        .where("A", blocks(CASING_INVAR_HEATPROOF.get()).or(autoAbilities(definition.getRecipeTypes())))
        .where("C", heatingCoils())
        .where(".", air())
        .where("#", controller(blocks(definition.getBlock())))
        .build())
```

### 形态 3：高科技能量环（7×3×7）
八角水平圆环 + 聚变玻璃屏蔽层 + 中心超导核心。

```java
.pattern(definition -> FactoryBlockPattern.start()
        .aisle("..AAA..", "..CCC..", "..AAA..")
        .aisle(".AAAAA.", ".C...C.", ".AAAAA.")
        .aisle("AAAAAAA", "C..E..C", "AAAAAAA")
        .aisle("AAA#AAA", "C.EEE.C", "AAAAAAA")
        .aisle("AAAAAAA", "C..E..C", "AAAAAAA")
        .aisle(".AAAAA.", ".C...C.", ".AAAAA.")
        .aisle("..AAA..", "..CCC..", "..AAA..")
        .where("A", blocks(SUPER_STRING_CASING.get()).or(autoAbilities(definition.getRecipeTypes())))
        .where("C", blocks(CASING_FUSION_GLASS.get()))
        .where("E", blocks(SUPERCONDUCTING_COIL.get()))
        .where(".", air())
        .where("#", controller(blocks(definition.getBlock())))
        .build())
```

## 常见踩坑对照

| 坏写法 | 问题 | 改法 |
| --- | --- | --- |
| 全实心立方火柴盒 | 呆板、没层次 | 掏空内腔放线圈/管道/流体，侧面开玻璃视窗 |
| 全结构无框架压边 | 色块糊成一团 | 四角、顶梁、转折位用 Frame 或 Gearbox 勾边 |
| 仓口只允许放死角 | 玩家接线极其难受 | 主外壳大面积挂 `.or(autoAbilities(...))` |
| 控制器埋在背面/内部 | 右键不到 GUI | 放正面最前切片的底居中或 `y=1` |
| 某行多打/少打一个字符 | 启动直接 `IllegalArgumentException` | 生成后数一遍每片行数和每行长度 |

## 深入参考

- 6 大主题配色与方块表 → [references/thematic_palettes.md](references/thematic_palettes.md)
- 圆形 / 同心环 / 龙骨 / 金字塔切片表 → [references/geometry_algorithms.md](references/geometry_algorithms.md)
- GTE 真实多方块案例拆解 → [references/design_showcase.md](references/design_showcase.md)
