---
name: gte-multiblock-architecture
description: >-
  Architectural design, 3D geometric modeling, and block pattern generator for GregTech Modern
  and GTE multiblock structures. Use whenever conceptualizing new multiblock machine shapes,
  avoiding boring box structures, choosing aesthetic block palettes, designing complex curves/rings/towers,
  or calculating dimensionally precise FactoryBlockPattern string matrices.
---

# GTE 多方块建筑与几何设计技能 (GTE Multiblock Architecture Skill)

本技能专注于解决 AI 在设计多方块结构时容易产生的 **“简单方块化 (火柴盒)”**、**“材质搭配单调”**、**“比例失衡”** 以及 **“`aisle` 字符串长度错位导致编译/成型崩溃”** 等问题。提供全套 3D 几何建模算法、主题风格配色板与建筑构思法则。

---

## 1. 多方块建筑设计 5 步法则 (Architectural Design Methodology)

当用户要求设计一个全新的多方块机器或改进现有机器外观时，严格按照以下步骤推演：

```
1. 确定体量尺度 ──► 2. 选定主题调色板 ──► 3. 规划功能分区 ──► 4. 几何切片推演 ──► 5. 矩阵对齐自检
  (X * Y * Z)        (主外壳/框架/玻璃/核心)  (反应腔/观察窗/管道/立柱) (Aisle Layering)     (Strict Width Check)
```

### 步骤 1: 确定体量与尺度 (Scale & Dimensions)
根据机器在科技树中的定位与重要程度设定外形体量（长 X $\times$ 高 Y $\times$ 深 Z）：
- **紧凑型 / 早期蒸汽设备**：$3\times3\times3$ 至 $5\times5\times5$（如大蒸汽压缩机、大合金炉、大锻造锤）
- **中型工业车间 / 标准加工中心**：$7\times5\times7$ 至 $9\times7\times9$（如大型洗矿池、精密元件工厂、大型折弯机）
- **高耸塔式结构 / 反应塔**：$5\times11\times5$ 至 $7\times17\times7$（如脱硫塔、大型蒸馏塔、高压热解塔）
- **大型科学装置 / 环形对撞机**：$15\times5\times15$ 至 $31\times15\times31$（如超弦振荡器阵列、奇迹之环、终极聚变堆）
- **阵列型 / 终极大奇观**：$35\times10\times35$ 至 $55\times30\times55$（如阴阳八卦高炉、万物之弦）

### 步骤 2: 选定主题调色板 (Theme & Block Palette)
严禁全结构使用单一纯色外壳！必须遵循 **“三段式层次（主外壳 60% + 框架/立柱 20% + 玻璃观察窗 10% + 管道/线圈核心 10%）”**。
- 调色板详见：[thematic_palettes.md](file:///c:/Users/Ex_Je/Documents/GTEGroup/.agents/skills/gte-multiblock-architecture/references/thematic_palettes.md)

### 步骤 3: 规划功能分区与人机交互 (Functional Zoning)
- **正面与控制器位置**：控制器必须置于正面最易被玩家触及的位置（通常是底面居中 `(X/2, 0, Z=Front)` 或视线平齐 `(X/2, 1, Z=Front)`）。
- **仓口可达性**：在底层边缘或后背墙面留出充足的 `autoAbilities` 替换空间，切忌将仓口谓词埋入无法接线的封闭内腔。
- **内部可视性**：大型反应室、线圈层或流体池尽量在侧翼设置透明玻璃（钢化玻璃 / 洁净室玻璃 / 聚变玻璃），展现内部机械细节。

### 步骤 4: 几何切片推演 (`aisle` Layering)
- 利用圆柱公式、对称环形或龙骨框架生成每一层切片。
- 几何公式与切片对照表详见：[geometry_algorithms.md](file:///c:/Users/Ex_Je/Documents/GTEGroup/.agents/skills/gte-multiblock-architecture/references/geometry_algorithms.md)

### 步骤 5: 严格的字符矩阵对齐自检 (Width Check)
- **致命规则**：同一个多方块内，**所有 `.aisle(...)` 的行数必须一致**，且**每一行字符串内的字符数必须分毫不差地完全相等**！

---

## 2. 经典多方块建筑形态模板 (Archetypal Forms)

### 形态 1: 工业龙骨车间型 (Industrial Hall with Structural Ribs)
*特点：大跨度顶部框架、双侧通透采光、中轴加工管路。*

```java
// 尺寸：7 宽 (X) * 5 高 (Y) * 5 深 (Z)
.pattern(definition -> FactoryBlockPattern.start()
        // Z = 0: 前立面 (含控制器 #, 门框 F, 外壳 A)
        .aisle("FFFFFFF",
               "FAAAAFA",
               "FA...AF",
               "FA...AF",
               "FAAA#FA")
        // Z = 1~3: 中间跨度车间 (顶部框架 F, 侧面玻璃 G, 底部外壳 A, 内部管道 P 与空腔 .)
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
        // Z = 4: 后立面 (封闭排气与维护)
        .aisle("FFFFFFF",
               "FAAAAFA",
               "FA...AF",
               "FA...AF",
               "FAAAAFA")
        .where("A", blocks(CASING_ALUMINIUM_FROSTPROOF.get()).or(autoAbilities(definition.getRecipeTypes())))
        .where("F", easy("gtceu:aluminium_frame"))
        .where("G", blocks(CLEANROOM_GLASS.get()))
        .where("P", blocks(CASING_STEEL_PIPE.get()))
        .where(".", air())
        .where("#", controller(blocks(definition.getBlock())))
        .build())
```

---

### 形态 2: 经典工业圆柱反应塔 (Industrial Cylindrical Tower)
*特点：5x5 弧形立面、中空线圈反应腔、顶部排烟锥。*

```java
// 尺寸：5 宽 (X) * 5 高 (Y) * 5 深 (Z)
.pattern(definition -> FactoryBlockPattern.start()
        // Z = 0 (最前层)
        .aisle(".AAA.",
               "AAAAA",
               "AA#AA",
               "AAAAA",
               ".AAA.")
        // Z = 1~3 (中层圆环截面，中间为空腔 . 与加热线圈 C)
        .aisle(".AAA.",
               "ACCCA",
               "AC.CA",
               "ACCCA",
               ".AAA.")
        .aisle(".AAA.",
               "ACCCA",
               "AC.CA",
               "ACCCA",
               ".AAA.")
        .aisle(".AAA.",
               "ACCCA",
               "AC.CA",
               "ACCCA",
               ".AAA.")
        // Z = 4 (最后层)
        .aisle(".AAA.",
               "AAAAA",
               "AAAAA",
               "AAAAA",
               ".AAA.")
        .where("A", blocks(CASING_INVAR_HEATPROOF.get()).or(autoAbilities(definition.getRecipeTypes())))
        .where("C", heatingCoils())
        .where(".", air())
        .where("#", controller(blocks(definition.getBlock())))
        .build())
```

---

### 形态 3: 高科技能量环 / 托卡马克加速环 (Toroidal Quantum Ring)
*特点：八角环形截面、中心发光超导核心、防辐射屏蔽层。*

```java
// 尺寸：7 宽 * 3 高 * 7 深 (水平圆环)
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

---

## 3. 常见设计雷区与排错对照 (Anti-Patterns)

| 常见反面设计 (Bad Pattern) | 危害与问题 | 正确改进方案 (Best Practice) |
| :--- | :--- | :--- |
| **纯立方实心火柴盒**（如 3x3x3 全是实心 Casing） | 呆板简陋，内部无空间安放线圈/管道/流体 | 掏空内部反应腔，加入内部发光线圈或中轴管道，外部替换部分玻璃视窗 |
| **仓口谓词与外壳分离**（如外壳写在固定位置，仓口只能放在边缘角落） | 玩家无法自由布置输入输出管道 | 在绝大多数主外壳字符上使用 `.or(autoAbilities(...))` |
| **切片字符串行长度不一致**（如第 1 行 7 字符，第 2 行误打成 8 字符） | 游戏启动直接抛出 `IllegalArgumentException` 崩溃 | 建立心理网格模型，使用标准等宽字符自检，严禁混用全角空格 |
| **控制器埋在机器背面或内部** | 玩家放置后无法右键交互查看 GUI | 始终将控制器置于最前切片 (`Z=Front`) 的视平线或底部居中 |
| **缺乏结构性框架与边缘线** | 方块之间缺乏对比度，整体糊成一团 | 在边角、立柱或转折处使用 Frame (金属框架) 或 Gearbox (齿轮箱) 压边 |

---

## 4. 深入参考资料 (References)

- 6 大主题风格与方块调色板库：[thematic_palettes.md](file:///c:/Users/Ex_Je/Documents/GTEGroup/.agents/skills/gte-multiblock-architecture/references/thematic_palettes.md)
- 3D 几何建模与数学切片对照表：[geometry_algorithms.md](file:///c:/Users/Ex_Je/Documents/GTEGroup/.agents/skills/gte-multiblock-architecture/references/geometry_algorithms.md)
- GTE 经典真实多方块设计案例拆解：[design_showcase.md](file:///c:/Users/Ex_Je/Documents/GTEGroup/.agents/skills/gte-multiblock-architecture/references/design_showcase.md)
