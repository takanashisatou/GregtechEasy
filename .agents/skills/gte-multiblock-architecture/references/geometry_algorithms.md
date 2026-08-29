# GTE 多方块 3D 几何建模与数学切片对照表 (Geometry & Shape Patterns)

在 Minecraft 体素（Voxel）空间中构建多方块时，利用数学公式可以生成完美圆弧、中空圆环、锥形金字塔和网格阵列，彻底避免“不规则毛边”和“行长度错位”。

---

## 1. 完美圆形与圆柱切片表 (Circle & Cylinder Slices)

圆方程：$(x - c_x)^2 + (z - c_z)^2 \le r^2$

### (1) 3x3 紧凑圆柱 (Radius = 1.0)
```
.aisle(".A.",
       "AAA",
       ".A.")
```

### (2) 5x5 标准圆柱 (Radius = 2.2)
```
.aisle(".AAA.",
       "AAAAA",
       "AAAAA",
       "AAAAA",
       ".AAA.")
```
*中空版本 (壁厚 1)：*
```
.aisle(".AAA.",
       "A...A",
       "A...A",
       "A...A",
       ".AAA.")
```

### (3) 7x7 重型圆柱 (Radius = 3.2)
```
.aisle("..AAA..",
       ".AAAAA.",
       "AAAAAAA",
       "AAAAAAA",
       "AAAAAAA",
       ".AAAAA.",
       "..AAA..")
```
*中空版本 (内腔 5x5 / 3x3)：*
```
.aisle("..AAA..",
       ".A...A.",
       "A.....A",
       "A.....A",
       "A.....A",
       ".A...A.",
       "..AAA..")
```

### (4) 9x9 巨型圆柱 (Radius = 4.2)
```
.aisle("...AAA...",
       ".AAAAAAA.",
       ".AAAAAAA.",
       "AAAAAAAAA",
       "AAAAAAAAA",
       "AAAAAAAAA",
       ".AAAAAAA.",
       ".AAAAAAA.",
       "...AAA...")
```

### (5) 11x11 超级圆柱 (Radius = 5.2)
```
.aisle("....AAA....",
       "..AAAAAAA..",
       ".AAAAAAAAA.",
       ".AAAAAAAAA.",
       "AAAAAAAAAAA",
       "AAAAAAAAAAA",
       "AAAAAAAAAAA",
       ".AAAAAAAAA.",
       ".AAAAAAAAA.",
       "..AAAAAAA..",
       "....AAA....")
```

---

## 2. 环形对撞机与同心圆环切片 (Torus & Ring Patterns)

用于大型环形加速器、聚变环或托卡马克结构。

### 15x15 中型同心环切片
```
.aisle(".....AAAAA.....",
       "...AAAAAAAAA...",
       "..AAAA...AAAA..",
       ".AAAA.....AAAA.",
       ".AAA.......AAA.",
       "AAAA.......AAAA",
       "AAAA.......AAAA",
       "AAAA.......AAAA",
       "AAAA.......AAAA",
       "AAAA.......AAAA",
       ".AAA.......AAA.",
       ".AAAA.....AAAA.",
       "..AAAA...AAAA..",
       "...AAAAAAAAA...",
       ".....AAAAA.....")
```

---

## 3. 工业厂房与大跨度龙骨结构 (Industrial Hall & Ribs)

工业厂房通常采用 **四角立柱 + 拱形顶梁 + 侧翼大玻璃视窗 + 内部机械中轴**：

```
切片 1 (正面端墙，含控制器 C 与框架 B):
.aisle("BBBBBBB",
       "BAAAAAB",
       "BA...AB",
       "BA...AB",
       "BAACABB")

切片 2~N (厂房主体跨度，侧面为洁净室玻璃 G，内部有管道 P 与传动轴 X):
.aisle("BGGGGGB",
       "G.....G",
       "G..P..G",
       "G..X..G",
       "BAAAAAB")

切片 End (后侧封闭墙，含排气/维护):
.aisle("BBBBBBB",
       "BAAAAAB",
       "BA...AB",
       "BA.M.AB",
       "BAAAAAB")
```

---

## 4. 阶梯金字塔与收束塔顶 (Pyramid & Tapering Spire)

用于大型反应堆底座、聚能发生器或东方祭坛：

```java
// Layer 1 (基底 7x7)
.aisle("AAAAAAA", "AAAAAAA", "AAAAAAA", "AAAAAAA", "AAAAAAA", "AAAAAAA", "AAAAAAA")
// Layer 2 (中阶 5x5)
.aisle(".......", ".BBBBB.", ".BBBBB.", ".BBBBB.", ".BBBBB.", ".BBBBB.", ".......")
// Layer 3 (上阶 3x3)
.aisle(".......", ".......", "..CCC..", "..CCC..", "..CCC..", ".......", ".......")
// Layer 4 (塔尖核心 1x1)
.aisle(".......", ".......", ".......", "...D...", ".......", ".......", ".......")
```

---

## 5. 字符矩阵对齐验证算法 (Alignment Check)

在生成任何多方块代码前，务必在心理模型中执行此校验：

$$\forall i, j: \text{length}(\text{row}_{i,j}) = W \quad \land \quad \text{count}(\text{rows}_i) = H$$

1. 确认结构的长（X）、高（Y）、深（Z）是固定三维常数。
2. 确认每一行的字符串由双引号紧密包裹，无半角/全角空格混淆。
3. 确认控制器标记唯一且面向玩家操作的一侧（通常位于最前方切片的最下层或中间层）。
