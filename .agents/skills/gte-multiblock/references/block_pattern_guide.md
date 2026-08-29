# GTE 多方块结构构建与图案指南 (FactoryBlockPattern Guide)

本指南深入讲解 GregTech Modern / `gtecore` 中多方块结构图案（`FactoryBlockPattern`）、谓词（`Predicates`）和预览形状（`MultiblockShapeInfo`）的设计规则与代码范式。

---

## 1. 结构坐标轴映射机制 (Coordinate System & Aisles)

`FactoryBlockPattern.start()` 采用相对于控制器面朝方向的局部坐标系：

```
                    ▲ Y 轴 (垂直高度，从上到下或者从下到上均可，通常第一行为顶部或底部)
                    │
                    │
                    │
   ◄────────────────┼────────────────► X 轴 (横向宽度，字符串的每个字符，从左到右)
   (相对左侧)       │                 (相对右侧)
                    │
                   ╱
                  ╱
                 ▼ Z 轴 (前后深度，每一个 .aisle() 代表一层切片，从后向前或从前向后)
```

### 编写规范示例

```java
.pattern(definition -> FactoryBlockPattern.start()
        // 第 1 切片 (Z = 0, 最底层或最顶层 / 最深层)
        .aisle("AAA", "AAA", "AAA")
        // 第 2 切片 (Z = 1, 中间层)
        .aisle("BBB", "B#B", "BBB")
        // 第 3 切片 (Z = 2, 最前层，控制器通常位于此切片)
        .aisle("AAA", "ACA", "AAA")
        .where("A", blocks(CASING_STEEL_SOLID.get()).setMinGlobalLimited(10)
                .or(autoAbilities(definition.getRecipeTypes()))
                .or(abilities(PartAbility.INPUT_LASER)))
        .where("B", blocks(Blocks.GLASS))
        .where("#", air())
        .where("C", controller(blocks(definition.getBlock())))
        .build())
```

> [!IMPORTANT]
> - **控制器字符**：必须在整个结构中**出现且仅出现 1 次**，使用 `controller(blocks(definition.getBlock()))`。
> - **切片维度一致性**：每个 `.aisle()` 传入的字符串行数（Y）必须相等；每一行字符串的长度（X 字符数）必须完全一致。

---

## 2. 常用谓词大全 (Predicates Reference)

### (1) 基础方块与通配符

| 谓词写法 | 含义说明 | 适用场景 |
| :--- | :--- | :--- |
| `blocks(CASING.get())` | 精确匹配指定的 `BlockEntry<Block>` | 机械外壳、结构方块 |
| `easy("modid:block_id")` | `GTEUtils.easy("...")` 字符串获取方块 | 跨模组方块、GT 原版方块简写 |
| `Predicates.air()` | 必须是空气方块 | 机器内部空腔（如 EBF、高炉内腔） |
| `Predicates.any()` | 任意方块（包括空气、液体、玩家放置的方块） | 结构外部无限制通配 |
| `Predicates.heatingCoils()` | 匹配所有注册在 `GTCEuAPI.HEATING_COILS` 中的加热线圈 | 电炉、裂化机、高温设备 |

### (2) 仓口能力谓词 (`PartAbility`)

| `PartAbility` 枚举 | 功能说明 | 典型用途 |
| :--- | :--- | :--- |
| `autoAbilities(definition.getRecipeTypes())` | **自动根据配方类型**允许输入/输出物品与流体仓口及能源仓 | 大多数加工机器（最省心推荐） |
| `autoAbilities(true, false, true)` | 手动指定 `(item, fluid, energy)` 基础仓口能力 | 自定义输入需求机器 |
| `abilities(PartAbility.INPUT_LASER)` | 激光输入仓（256A+ 大电流） | 高压/高耗能多方块机器 |
| `abilities(PartAbility.OUTPUT_LASER)` | 激光输出仓 | 超大型发电机 / 聚变输出 |
| `abilities(PartAbility.MULTI_PARALLEL_HATCH)` | 多重并行控制仓 | 高并行加工机器 |
| `abilities(PartAbility.MAINTENANCE)` | 维护仓 | 工业多方块结构 |
| `abilities(PartAbility.MUFFLER)` | 消音仓（排烟仓） | 有污染排放的机器（EBF、热解炉） |
| `abilities(PartAbility.STEAM)` | 蒸汽输入仓（`.setExactLimit(1)`） | 蒸汽多方块结构 |
| `abilities(PartAbility.STEAM_IMPORT_ITEMS)` | 蒸汽物品输入仓 | 蒸汽多方块结构 |
| `abilities(PartAbility.STEAM_EXPORT_ITEMS)` | 蒸汽物品输出仓 | 蒸汽多方块结构 |
| `abilities(PartAbility.COMPUTATION_DATA_TRANSMISSION)` | 计算数据传输 | 量子超算、装配线 |

### (3) 数量与限制修饰符

- `.setMinGlobalLimited(n)`：全结构内该方块（或满足该条件的方块）最少数量。例如 `.setMinGlobalLimited(10)`。
- `.setExactLimit(n)`：全结构内该部件必须恰好为 `n` 个。常用于能源仓或消音仓（如 `.setExactLimit(1)`）。
- `.setMaxGlobalLimited(n)`：全结构内该部件最多出现 `n` 个。

---

## 3. 结构预览与 JEI 形状信息 (`MultiblockShapeInfo`)

为了让机器支持在 **JEI / EMI / REI** 以及游戏内 **结构测试终端（Structure Testing Terminal）** 中高亮投影和分层预览，需要配置 `.shapeInfos(...)`：

```java
.shapeInfos(definition -> {
    List<MultiblockShapeInfo> shapeInfo = new ArrayList<>();
    var builder = MultiblockShapeInfo.builder()
            .aisle("ISO", "CCC", "CCC", "XMX")
            .aisle("FXD", "C#C", "C#C", "XHX")
            .aisle("EEX", "CCC", "CCC", "XXX")
            .where('X', CASING_INVAR_HEATPROOF.getDefaultState())
            .where('S', definition, Direction.NORTH) // 控制器位置与默认朝向
            .where('#', Blocks.AIR.defaultBlockState())
            .where('E', ENERGY_INPUT_HATCH[GTValues.EV], Direction.SOUTH)
            .where('I', ITEM_IMPORT_BUS[GTValues.EV], Direction.NORTH)
            .where('O', ITEM_EXPORT_BUS[GTValues.EV], Direction.NORTH)
            .where('F', FLUID_IMPORT_HATCH[GTValues.EV], Direction.WEST)
            .where('D', FLUID_EXPORT_HATCH[GTValues.EV], Direction.EAST)
            .where('H', MUFFLER_HATCH[GTValues.EV], Direction.UP)
            .where('M', MAINTENANCE_HATCH, Direction.NORTH);

    // 如果含有线圈，可以循环添加不同线圈等级的预览
    GTCEuAPI.HEATING_COILS.entrySet().stream()
            .sorted(Comparator.comparingInt(entry -> entry.getKey().getTier()))
            .forEach(coil -> shapeInfo.add(builder.shallowCopy().where('C', coil.getValue().get()).build()));

    return shapeInfo;
})
```

---

## 4. 常见结构错误排查 (Structure Troubleshooting)

1. **结构无法成型（Controller says Invalid Structure）**：
   - 检查是否有方块数量未满足 `.setMinGlobalLimited()`。
   - 检查空腔是否被误填了方块（如果使用了 `Predicates.air()`）。
   - 检查仓口是否放在了未被 `.or(autoAbilities(...))` 包含的位置。
2. **控制器朝向错误**：
   - 确认在 `MultiblockMachineDefinition` 链式调用中设置了 `.rotationState(RotationState.ALL)` 或 `.rotationState(RotationState.NON_Y_AXIS)`。
