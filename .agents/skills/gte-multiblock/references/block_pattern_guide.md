# GTE 多方块结构构建与图案指南 (FactoryBlockPattern Guide)

本指南深入讲解 GregTech Modern / `gtecore` 中多方块结构图案（`FactoryBlockPattern`）、谓词（`Predicates`）和预览形状（`MultiblockShapeInfo`）的设计规则与代码范式。

---

## 1. 结构坐标轴映射机制 (Coordinate System & Aisles)

`FactoryBlockPattern.start()` 默认局部方向为 `(LEFT, UP, FRONT)`：字符索引沿 LEFT 增加、行索引沿 UP 增加、切片索引沿 FRONT 增加。显式 `start(charDir, stringDir, aisleDir)` 可以更改这三个方向；再结合控制器朝向、upwardsFacing 和 flip 转为世界坐标。

```
                    ▲ Y 轴 (默认 UP，行索引从底部向上增加)
                    │
                    │
                    │
   ◄────────────────┼────────────────► X 轴 (横向宽度，字符串的每个字符，从左到右)
   (字符轴默认 LEFT，不能直接等同于世界 X 正方向)
                    │
                   ╱
                  ╱
                    ▼ Z 轴 (默认 FRONT，每个 .aisle() 增加一个切片)
```

### 编写规范示例

```java
.pattern(definition -> FactoryBlockPattern.start()
        // 第 1 切片 (切片索引 0)
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

| 能力 / 调用 | 功能说明 | 典型用途 |
| :--- | :--- | :--- |
| `autoAbilities(definition.getRecipeTypes())` | **自动根据配方类型**允许输入/输出物品与流体仓口及能源仓 | 大多数加工机器（最省心推荐） |
| `autoAbilities(true, false, true)` | 参数为 `(maintenance, muffler, parallel)`，此例允许维护与并行仓，不包含基础 IO | 需另外组合配方 IO 的机器 |
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

默认结构可由 `getMatchingShapes()` / 当前 builder 自动产生预览。只有需要额外结构变体、特殊部件朝向或自定义页面时再配置 `.shapeInfos(...)`；它不是所有机器的必填项。预览生成不证明真实 pattern 一定能成型：

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

3. **特殊仓口无法加入**：
   - `autoAbilities(recipeTypes)` 只处理基础物品/流体/电力能力；催化剂仓、数据仓等需按实际能力单独声明。
4. **GameTest 中偶发失配**：
   - 读错误坐标与真实方块。`empty` 模板不清理整座大机器，创意自动搭建保留已有非空气方块，并可能放入可选仓口；按 [GameTest 工作流](gametest_workflow.md) 隔离场地与数量状态。
