# GTE 多方块主题风格与方块调色板库 (Thematic Palettes)

在设计 GregTech / GTE 多方块结构时，优秀的外观源自于**主色调外壳**、**结构支撑框架**、**通透观察视窗**与**功能性管道/机械部件**的协调搭配。

本参考手册定义了 6 大经典主题的标准调色板及字符映射推荐。

---

## 1. 工业蒸汽风 (Steampunk & Industrial Steam)

*适用场景：早期蒸汽多方块、蒸汽粉碎机、蒸汽烤箱、大型合金炉、大锻造锤、酿造塔。*

### 推荐材质表
- **主外壳 (Base)**：`CASING_BRONZE_BRICKS` (青铜砖机械外壳)、`CASING_INDUSTRIAL_STEAM` (工业蒸汽外壳)、`steam_machine_casing`
- **结构骨架 (Frame)**：`ChemicalHelper.getBlock(frameGt, Bronze)` (青铜框架)、`Blocks.OAK_LOG` (原木框架)
- **通透视窗 (Window)**：`Blocks.GLASS` (普通玻璃)、`CASING_BRONZE_PIPE` (青铜管道外壳)
- **机械传动 (Machinery)**：`CASING_BRONZE_GEARBOX` (青铜齿轮箱)、`steel_pipe_casing` (钢管道外壳)
- **环境点缀 (Accent)**：`Blocks.BOOKSHELF` (书架)、`Blocks.BRICKS` (红砖)

### 推荐字符分配
```java
where("A", blocks(CASING_BRONZE_BRICKS.get()).or(autoAbilities(...))) // 主外壳 & 仓口
where("B", blocks(ChemicalHelper.getBlock(frameGt, Bronze)))          // 支撑框架
where("C", blocks(CASING_BRONZE_GEARBOX.get()))                       // 机械齿轮箱
where("D", blocks(CASING_BRONZE_PIPE.get()))                          // 蒸汽管路
where("G", blocks(Blocks.GLASS))                                      // 观察窗
where("#", air())                                                     // 内部反应空腔
```

---

## 2. 重工石化与机械风 (Heavy Industry & Petrochemical)

*适用场景：大型洗矿机、大型混合机、大型折弯机、脱硫塔、大型蒸馏塔、一体化石化厂。*

### 推荐材质表
- **主外壳 (Base)**：`CASING_STEEL_SOLID` (实心钢外壳)、`CASING_INVAR_HEATPROOF` (耐热殷钢外壳)
- **结构骨架 (Frame)**：`ChemicalHelper.getBlock(frameGt, Steel)` (钢框架)、`ChemicalHelper.getBlock(frameGt, TungstenSteel)`
- **通透视窗 (Window)**：`CASING_TEMPERED_GLASS` (钢化玻璃)、`CLEANROOM_GLASS` (洁净室玻璃)
- **管道与流体 (Fluids)**：`CASING_STEEL_PIPE` (钢管道外壳)、`CASING_TUNGSTENSTEEL_PIPE` (钨钢管道外壳)、`Blocks.WATER`
- **传动与动力 (Machinery)**：`CASING_STEEL_GEARBOX` (钢齿轮箱)、`CASING_STAINLESS_TURBINE` (涡轮外壳)

### 推荐字符分配
```java
where("A", blocks(CASING_STEEL_SOLID.get()).or(autoAbilities(...)))
where("F", easy("gtceu:steel_frame"))
where("P", easy("gtceu:steel_pipe_casing"))
where("G", easy("gtceu:tempered_glass"))
where("W", blocks(Blocks.WATER)) // 反应浸泡池
```

---

## 3. 高精尖洁净室与微电子风 (High-Tech Cleanroom & Assembly)

*适用场景：电路装配中心、精密元件工厂、超净间反应器、生态模拟器、晶体生长中心。*

### 推荐材质表
- **主外壳 (Base)**：`CASING_ALUMINIUM_FROSTPROOF` (防冻铝外壳)、`CASING_STAINLESS_CLEAN` (洁净不锈钢外壳)、`CASING_TITANIUM_STABLE`
- **结构骨架 (Frame)**：`ChemicalHelper.getBlock(frameGt, StainlessSteel)`、`ChemicalHelper.getBlock(frameGt, Aluminium)`
- **通透视窗 (Window)**：`CLEANROOM_GLASS` (洁净室玻璃)、`CASING_LAMINATED_GLASS` (层压玻璃)
- **内部核心 (Core)**：`CASING_STAINLESS_STEEL_GEARBOX`、`CASING_STAINLESS_TURBINE`、`CASING_STEEL_PIPE`

### 推荐字符分配
```java
where("A", blocks(CASING_STAINLESS_CLEAN.get()).or(autoAbilities(...)))
where("B", blocks(ChemicalHelper.getBlock(frameGt, StainlessSteel)))
where("C", blocks(CLEANROOM_GLASS.get()))
where("D", blocks(CASING_STAINLESS_STEEL_GEARBOX.get()))
where("E", blocks(CASING_STAINLESS_TURBINE.get()))
```

---

## 4. 深空科幻与超弦量子风 (Sci-Fi Quantum & Cosmic)

*适用场景：超弦振荡器阵列、超弦混料机、万物之弦、奇迹之环、终极聚变反应堆、反物质转化仪。*

### 推荐材质表
- **主外壳 (Base)**：`SUPER_STRING_CASING` (超弦外壳)、`HIGH_POWER_CASING` (高功率外壳)、`CASING_TUNGSTENSTEEL_ROBUST`
- **高级护甲 (Armor)**：`GTNNCasingBlocks.getMAR_CASING()` (MAR 外壳)、`GTNNCasingBlocks.getRADIATION_PROOF_MACHINE_CASING()` (防辐射外壳)
- **发光与线圈 (Energy Core)**：`SUPERCONDUCTING_COIL` (超导线圈)、`FUSION_COIL` (聚变线圈)、`CASING_FUSION_GLASS` (聚变玻璃)
- **贵金属骨架 (Noble Frame)**：`ChemicalHelper.getBlock(frameGt, Europium)` (铕框架)、`ChemicalHelper.getBlock(frameGt, Iridium)` (铱框架)、`ChemicalHelper.getBlock(frameGt, NaquadahAlloy)`

### 推荐字符分配
```java
where("A", blocks(SUPER_STRING_CASING.get()).or(autoAbilities(...)))
where("B", blocks(HIGH_POWER_CASING.get()))
where("C", blocks(GTNNCasingBlocks.INSTANCE.getMAR_CASING().get()))
where("D", blocks(ChemicalHelper.getBlock(frameGt, Europium)))
where("E", blocks(GTNNCasingBlocks.INSTANCE.getRADIATION_PROOF_MACHINE_CASING().get()))
where("F", blocks(ChemicalHelper.getBlock(frameGt, Iridium)))
where("G", blocks(SUPERCONDUCTING_COIL.get()))
```

---

## 5. 东方玄幻与八卦四象风 (Oriental Xuanhuan & Bagua)

*适用场景：阴阳八卦炼丹炉、太极五行分离机、乾穹引力引擎、赤阳道核。*

### 推荐材质表
- **五行八卦外壳 (Elements)**：`LI_HUO_CASING` (离火外壳)、`KUN_GEN_CASING` (坤艮外壳)、`KAN_SHUI_CASING` (坎水外壳)、`EIGHT_TRIGMAS_CASING` (八卦外壳)
- **阵法限制 (Array)**：`YIN_YANG_FIELD_RESTRICTION` (阴阳场力限制器)、`YIN_YANG_COIL` (阴阳线圈)
- **四象神兽模块 (Four Beasts)**：`QINLONG_MODULE` (青龙模块)、`BAIHU_MODULE` (白虎模块)、`XUANWU_MODULE` (玄武模块)、`ZHUQUE_MODULE` (朱雀模块)
- **基座与石阶 (Base Ground)**：`BASE_DARK_CONCRETE` (暗色基石)、`BASE_MID_CONCRETE`、`BASE_LIGHT_CONCRETE`

---

## 6. 生态与生化模拟风 (Eco-Bio Simulation)

*适用场景：生态模拟箱、大型发酵塔、人工温室、生物质转化中心。*

### 推荐材质表
- **外壳 (Shell)**：`CASING_ALUMINIUM_FROSTPROOF`、`CASING_STAINLESS_CLEAN`
- **全透视窗 (Dome)**：`CASING_TEMPERED_GLASS`、`CLEANROOM_GLASS`
- **生态基质 (Biosphere)**：`Blocks.GRASS_BLOCK`、`Blocks.DIRT`、`Blocks.WATER`、`Blocks.CLAY`、`Blocks.OAK_LOG`
