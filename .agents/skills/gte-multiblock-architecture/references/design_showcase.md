# GTE 真实多方块设计案例拆解

从 `gtecore` 现有机器里挑 4 个不同体量与风格的代表作，设计新机器时可以参考它们的空间层次。

## 1. 精密元件工厂（`Component_Factory_Multiblock`）
风格：洁净室长方体跨度（7×7×8）

- **顶底封装**：`CASING_ALUMINIUM_FROSTPROOF` 封顶封底，保证工业气密感。
- **立面与骨架**：大面积 `CLEANROOM_GLASS`，四角与中轴用铝框架（`Aluminium` frame）压边。
- **内部细节**：两条 `CASING_STEEL_PIPE` 流水线纵贯内部，留出通透中空。

```java
// 典型中间剖面
.aisle("BBBCBBB",
       "B.....B",
       "B.....B",
       "C..C..C",
       "B.....B",
       "B.....B",
       "BBBCBBB")
```

## 2. 大型复合洗矿池（`Big_Wash`）
风格：重工石化流体池（7×7×5）

- **底座**：实心钢外壳承重。
- **可见反应池**：外圈钢化玻璃围堰，里面直接填原版 `minecraft:water`，让玩家一眼看到水池。
- **侧壁管路**：接出 `steel_pipe_casing` 做进出液歧管，破除平面单调感。

## 3. 超弦振荡器阵列（`SUPER_STRING_OSCILLATOR_ARRAY`）
风格：深空高能对撞环（31×31×22）

- **外环**：31×31 逐层缩进的 `SUPER_STRING_CASING` 构成弧形加速跑道。
- **中心柱**：中轴立起 `SUPERCONDUCTING_COIL` 超导线圈柱。
- **护甲与骨架**：外贴 `GTNNCasingBlocks` 的 `RADIATION_PROOF_MACHINE_CASING` 与 `MAR_CASING` 做防辐射层，转折位用 `Europium` 和 `Iridium` 框架收边。

## 4. 阴阳八卦高炉（`YIN_YANG_EIGHT_TRIGMAS_BLAST_FURNACE`）
风格：东方玄幻巨型阵法（55×55 平铺阵列 + 四象卫星模块）

- **地面阵图**：用 `LI_HUO_CASING`、`KAN_SHUI_CASING`、`KUN_GEN_CASING` 等五行外壳在 55×55 平面上拼出太极八卦纹样。
- **主阵 + 卫星模块**：高炉主体在中央，四方特定相对坐标布置青龙、白虎、朱雀、玄武模块阵列，由控制器代码动态检测提供加成。
