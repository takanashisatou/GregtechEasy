# 多方块结构与谓词指南（FactoryBlockPattern）

讲解 `FactoryBlockPattern` 坐标轴、常用谓词、`MultiblockShapeInfo` 预览与结构不成型排错。

## 1. 坐标轴与切片规则

`FactoryBlockPattern.start()` 默认局部方向是 `(LEFT, UP, FRONT)`：
- 字符串里的字符索引 → 沿 `LEFT` 增加
- 同一个 `.aisle(...)` 里的字符串行索引 → 沿 `UP` 增加（第 0 行是最底层）
- 每个 `.aisle(...)` → 沿 `FRONT` 增加一个切片

调用 `start(charDir, stringDir, aisleDir)` 可以改这三个局部方向；最终世界坐标还会叠加控制器朝向、`upwardsFacing` 和 `flip`。

```java
.pattern(definition -> FactoryBlockPattern.start()
        .aisle("AAA", "AAA", "AAA") // 切片 0
        .aisle("BBB", "B#B", "BBB") // 切片 1
        .aisle("AAA", "ACA", "AAA") // 切片 2（常见控制器所在切片）
        .where("A", blocks(CASING_STEEL_SOLID.get()).setMinGlobalLimited(10)
                .or(autoAbilities(definition.getRecipeTypes()))
                .or(abilities(PartAbility.INPUT_LASER)))
        .where("B", blocks(Blocks.GLASS))
        .where("#", air())
        .where("C", controller(blocks(definition.getBlock())))
        .build())
```

两条死规矩：
- 控制器字符全结构**恰好出现 1 次**，用 `controller(blocks(definition.getBlock()))`。
- 每个 `.aisle(...)` 的行数必须相等，每一行字符数必须完全相等，否则启动直接抛 `IllegalArgumentException`。

## 2. 常用谓词速查

### 基础方块与通配

| 写法 | 含义 | 常见用途 |
| --- | --- | --- |
| `blocks(CASING.get())` | 匹配指定 `BlockEntry` / `Block` | 机械外壳、结构方块 |
| `GTEUtils.easy("modid:block_id")` | 按注册 ID 字符串取方块 | 跨模组方块、简写原版/GT 方块 |
| `Predicates.air()` | 必须是空气 | 内部空腔（EBF 内腔等） |
| `Predicates.any()` | 任意方块 | 结构外部无限制占位 |
| `Predicates.heatingCoils()` | 所有注册在 `GTCEuAPI.HEATING_COILS` 的线圈 | 高炉、裂化机、高温设备 |

### 仓口能力（`PartAbility`）

| 写法 | 含义 |
| --- | --- |
| `autoAbilities(definition.getRecipeTypes())` | 按配方类型自动放行基础物品/流体/电力仓口（不含催化剂/数据等特殊仓） |
| `autoAbilities(maintenance, muffler, parallel)` | 三个布尔开关分别对应维护仓、消音仓、并行仓，**不包含基础 IO** |
| `abilities(PartAbility.INPUT_LASER)` / `OUTPUT_LASER` | 激光输入/输出仓 |
| `abilities(PartAbility.MULTI_PARALLEL_HATCH)` | 多重并行控制仓 |
| `abilities(PartAbility.MAINTENANCE)` / `MUFFLER` | 维护仓 / 消音仓 |
| `abilities(PartAbility.STEAM)` | 蒸汽输入仓（常配 `.setExactLimit(1)`） |
| `abilities(PartAbility.STEAM_IMPORT_ITEMS)` / `STEAM_EXPORT_ITEMS` | 蒸汽物品输入/输出仓 |
| `abilities(PartAbility.COMPUTATION_DATA_TRANSMISSION)` | 算力/数据传输仓 |

### 数量修饰符

- `.setMinGlobalLimited(n)`：全结构至少出现 `n` 个（外壳常用，防止玩家把外壳全换成仓口）。
- `.setExactLimit(n)`：恰好 `n` 个（蒸汽仓、消音仓、单一能源仓常用）。
- `.setMaxGlobalLimited(n)`：最多 `n` 个。

## 3. 自定义 JEI 预览（`MultiblockShapeInfo`）

默认情况下 builder 会自动生成预览，不是每台机器都必须手写 `.shapeInfos(...)`。需要多形态切换、指定部件朝向或展示不同线圈等级时再加：

```java
.shapeInfos(definition -> {
    List<MultiblockShapeInfo> shapeInfo = new ArrayList<>();
    var builder = MultiblockShapeInfo.builder()
            .aisle("ISO", "CCC", "CCC", "XMX")
            .aisle("FXD", "C#C", "C#C", "XHX")
            .aisle("EEX", "CCC", "CCC", "XXX")
            .where('X', CASING_INVAR_HEATPROOF.getDefaultState())
            .where('S', definition, Direction.NORTH)
            .where('#', Blocks.AIR.defaultBlockState())
            .where('E', ENERGY_INPUT_HATCH[GTValues.EV], Direction.SOUTH)
            .where('I', ITEM_IMPORT_BUS[GTValues.EV], Direction.NORTH)
            .where('O', ITEM_EXPORT_BUS[GTValues.EV], Direction.NORTH)
            .where('F', FLUID_IMPORT_HATCH[GTValues.EV], Direction.WEST)
            .where('D', FLUID_EXPORT_HATCH[GTValues.EV], Direction.EAST)
            .where('H', MUFFLER_HATCH[GTValues.EV], Direction.UP)
            .where('M', MAINTENANCE_HATCH, Direction.NORTH);

    GTCEuAPI.HEATING_COILS.entrySet().stream()
            .sorted(Comparator.comparingInt(e -> e.getKey().getTier()))
            .forEach(coil -> shapeInfo.add(builder.shallowCopy().where('C', coil.getValue().get()).build()));
    return shapeInfo;
})
```

预览能画出来不代表真实 `pattern` 一定能成型，结构校验以 `FactoryBlockPattern` 为准。

## 4. 不成型速查

- **Invalid Structure**：查外壳是否低于 `setMinGlobalLimited`；`air()` 空腔有没有被误填；仓口是不是放到了没挂 `autoAbilities` 的字符位；催化剂/数据等特殊仓口有没有单独声明。
- **朝向不对**：查注册链里的 `.rotationState(RotationState.ALL)` 或 `NON_Y_AXIS`。
- **GameTest 里偶发失配**：打印 `error.getErrorInfo()`、坐标和该位置真实方块，详见 [GameTest 工作流](gametest_workflow.md)。
