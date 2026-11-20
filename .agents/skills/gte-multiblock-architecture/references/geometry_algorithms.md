# 3D 几何建模与切片对照表

直接拿来拼圆柱、圆环、龙骨厂房和金字塔，避免手敲出歪边或长度错位。

## 1. 圆柱切片表

圆方程：`(x - cx)^2 + (z - cz)^2 <= r^2`

### 3×3（r = 1.0）
```
.aisle(".A.",
       "AAA",
       ".A.")
```

### 5×5（r = 2.2）
实心：
```
.aisle(".AAA.",
       "AAAAA",
       "AAAAA",
       "AAAAA",
       ".AAA.")
```
壁厚 1 中空：
```
.aisle(".AAA.",
       "A...A",
       "A...A",
       "A...A",
       ".AAA.")
```

### 7×7（r = 3.2）
实心：
```
.aisle("..AAA..",
       ".AAAAA.",
       "AAAAAAA",
       "AAAAAAA",
       "AAAAAAA",
       ".AAAAA.",
       "..AAA..")
```
中空：
```
.aisle("..AAA..",
       ".A...A.",
       "A.....A",
       "A.....A",
       "A.....A",
       ".A...A.",
       "..AAA..")
```

### 9×9（r = 4.2）
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

### 11×11（r = 5.2）
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

## 2. 15×15 同心圆环切片（加速器 / 托卡马克）

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

## 3. 工业龙骨厂房（7×5 跨度）

四角立柱 + 顶梁 + 双侧玻璃 + 中轴管路：

```
// 正面端墙（C=控制器，B=框架）
.aisle("BBBBBBB",
       "BAAAAAB",
       "BA...AB",
       "BA...AB",
       "BAACABB")

// 中间跨度（G=玻璃，P=管道，X=传动轴）
.aisle("BGGGGGB",
       "G.....G",
       "G..P..G",
       "G..X..G",
       "BAAAAAB")

// 背面封闭墙（M=维护/排气位）
.aisle("BBBBBBB",
       "BAAAAAB",
       "BA...AB",
       "BA.M.AB",
       "BAAAAAB")
```

## 4. 阶梯金字塔 / 收束塔顶（7×4×7）

```java
// 第 1 层（7x7 底座）
.aisle("AAAAAAA", "AAAAAAA", "AAAAAAA", "AAAAAAA", "AAAAAAA", "AAAAAAA", "AAAAAAA")
// 第 2 层（5x5）
.aisle(".......", ".BBBBB.", ".BBBBB.", ".BBBBB.", ".BBBBB.", ".BBBBB.", ".......")
// 第 3 层（3x3）
.aisle(".......", ".......", "..CCC..", "..CCC..", "..CCC..", ".......", ".......")
// 第 4 层（1x1 塔尖）
.aisle(".......", ".......", ".......", "...D...", ".......", ".......", ".......")
```

## 5. 出码前自检

1. 所有 `.aisle(...)` 的字符串个数相同（高度 H 一致）。
2. 每一行字符串长度相同（宽度 W 一致），无全角空格。
3. 控制器字符全结构只出现 1 次，且放在正面方便交互的位置。
