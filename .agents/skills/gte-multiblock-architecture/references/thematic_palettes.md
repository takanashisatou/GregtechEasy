# 多方块 6 大主题配色与方块库

按机器科技定位直接选配色，字符映射可直接抄进 `.where(...)`。

## 1. 工业蒸汽风
适用：早期蒸汽多方块、大型合金炉、大锻造锤、酿造塔。

- **主外壳**：`CASING_BRONZE_BRICKS`、`CASING_INDUSTRIAL_STEAM`、`steam_machine_casing`
- **框架**：`ChemicalHelper.getBlock(frameGt, Bronze)`、`Blocks.OAK_LOG`
- **视窗 / 管道**：`Blocks.GLASS`、`CASING_BRONZE_PIPE`、`steel_pipe_casing`
- **机械传动 / 点缀**：`CASING_BRONZE_GEARBOX`、`Blocks.BRICKS`、`Blocks.BOOKSHELF`

```java
.where("A", blocks(CASING_BRONZE_BRICKS.get()).or(autoAbilities(...)))
.where("B", blocks(ChemicalHelper.getBlock(frameGt, Bronze)))
.where("C", blocks(CASING_BRONZE_GEARBOX.get()))
.where("D", blocks(CASING_BRONZE_PIPE.get()))
.where("G", blocks(Blocks.GLASS))
.where("#", air())
```

## 2. 重工石化与机械风
适用：洗矿池、混合机、折弯机、脱硫塔、大型蒸馏塔、石化厂。

- **主外壳**：`CASING_STEEL_SOLID`、`CASING_INVAR_HEATPROOF`
- **框架**：`frameGt` 的 `Steel` / `TungstenSteel`
- **视窗**：`CASING_TEMPERED_GLASS`、`CLEANROOM_GLASS`
- **管道 / 流体**：`CASING_STEEL_PIPE`、`CASING_TUNGSTENSTEEL_PIPE`、`Blocks.WATER`
- **传动**：`CASING_STEEL_GEARBOX`、`CASING_STAINLESS_TURBINE`

```java
.where("A", blocks(CASING_STEEL_SOLID.get()).or(autoAbilities(...)))
.where("F", easy("gtceu:steel_frame"))
.where("P", easy("gtceu:steel_pipe_casing"))
.where("G", easy("gtceu:tempered_glass"))
.where("W", blocks(Blocks.WATER))
```

## 3. 洁净室与微电子风
适用：电路装配中心、精密元件工厂、超净反应器、晶体生长。

- **主外壳**：`CASING_ALUMINIUM_FROSTPROOF`、`CASING_STAINLESS_CLEAN`、`CASING_TITANIUM_STABLE`
- **框架**：`frameGt` 的 `StainlessSteel` / `Aluminium`
- **视窗**：`CLEANROOM_GLASS`、`CASING_LAMINATED_GLASS`
- **核心**：`CASING_STAINLESS_STEEL_GEARBOX`、`CASING_STAINLESS_TURBINE`、`CASING_STEEL_PIPE`

```java
.where("A", blocks(CASING_STAINLESS_CLEAN.get()).or(autoAbilities(...)))
.where("B", blocks(ChemicalHelper.getBlock(frameGt, StainlessSteel)))
.where("C", blocks(CLEANROOM_GLASS.get()))
.where("D", blocks(CASING_STAINLESS_STEEL_GEARBOX.get()))
.where("E", blocks(CASING_STAINLESS_TURBINE.get()))
```

## 4. 深空科幻 / 超弦 / 虚数终局风
适用：超弦振荡器阵列、万物之弦、奇迹之环、终极聚变、虚数树产线。

- **主外壳**：`SUPER_STRING_CASING`、`HIGH_POWER_CASING`、`CASING_TUNGSTENSTEEL_ROBUST`
- **虚数自发光系列（`GTEBlocks`）**：`IMAGINARY_CASING`、`IMAGINARY_CORE_CASING`、`IMAGINARY_BRANCH_CASING`、`IMAGINARY_CONTAINMENT_CASING`、`IMAGINARY_ENERGY_CONDUIT`、`IMAGINARY_GLASS`、`IMAGINARY_LEAF_MATRIX`、`IMAGINARY_COIL`
- **防辐射护甲（GT--）**：`GTNNCasingBlocks.INSTANCE.getMAR_CASING()`、`GTNNCasingBlocks.INSTANCE.getRADIATION_PROOF_MACHINE_CASING()`
- **发光核心**：`SUPERCONDUCTING_COIL`、`FUSION_COIL`、`CASING_FUSION_GLASS`
- **贵金属框架**：`frameGt` 的 `Europium` / `Iridium` / `NaquadahAlloy`

```java
.where("A", blocks(SUPER_STRING_CASING.get()).or(autoAbilities(...)))
.where("B", blocks(HIGH_POWER_CASING.get()))
.where("C", blocks(GTNNCasingBlocks.INSTANCE.getMAR_CASING().get()))
.where("D", blocks(ChemicalHelper.getBlock(frameGt, Europium)))
.where("E", blocks(GTNNCasingBlocks.INSTANCE.getRADIATION_PROOF_MACHINE_CASING().get()))
.where("F", blocks(ChemicalHelper.getBlock(frameGt, Iridium)))
.where("G", blocks(SUPERCONDUCTING_COIL.get()))
```

## 5. 东方玄幻与八卦四象风
适用：阴阳八卦高炉、五行分离、乾穹引力引擎、赤阳道核。

- **五行八卦外壳**：`LI_HUO_CASING`、`KUN_GEN_CASING`、`KAN_SHUI_CASING`、`EIGHT_TRIGMAS_CASING`
- **阵法与线圈**：`YIN_YANG_FIELD_RESTRICTION`、`YIN_YANG_COIL`
- **四象模块**：`QINLONG_MODULE`、`BAIHU_MODULE`、`XUANWU_MODULE`、`ZHUQUE_MODULE`
- **基石**：`BASE_DARK_CONCRETE`、`BASE_MID_CONCRETE`、`BASE_LIGHT_CONCRETE`

## 6. 生态与生化模拟风
适用：生态模拟箱、大型发酵塔、人工温室、生物质转化。

- **外壳**：`CASING_ALUMINIUM_FROSTPROOF`、`CASING_STAINLESS_CLEAN`
- **透明穹顶**：`CASING_TEMPERED_GLASS`、`CLEANROOM_GLASS`
- **生态基质**：`Blocks.GRASS_BLOCK`、`Blocks.DIRT`、`Blocks.WATER`、`Blocks.CLAY`、`Blocks.OAK_LOG`
