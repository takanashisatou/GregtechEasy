---
name: gte-multiblock
description: >-
  Comprehensive guide, blueprint generator, and operational patterns for creating, registering,
  designing, and troubleshooting GregTech Modern multiblock structures, machines, block patterns,
  recipe types, recipe modifiers, custom casings/coils, and JEI/terminal shape rendering in gtecore.
  Use whenever adding, modifying, or debugging multiblock machines in the GTE project.
---

# GTE 多方块结构开发指南与辅助生成技能 (GTE Multiblock Skill)

本技能为 AI 代理在 **GregTech Easy (`gtecore`)** 中设计、编写、注册和调试多方块结构（Multiblock Machines）提供全套标准化开发流程、结构图案语法、配方修饰器配置与防崩溃准则。

---

## 1. 架构总览与文件职责 (File Map)

在 `gtecore` 中新增或修改多方块结构时涉及的核心类与路径：

```
modules/gtecore/src/main/
├── java/org/satou/gtecore/
│   ├── common/data/
│   │   ├── GTERecipeTypes.java          # 1. 注册多方块专用的 GTRecipeType
│   │   ├── GTEBlocks.java               # 2. 注册自定义外壳 (Casings) 与线圈 (Coils)
│   │   └── machines/
│   │       ├── GTEMachines.java         # 3. 机器总入口与统一 init() 触发
│   │       ├── GTEMultiMachine.java     # 4. 电力 / 蒸汽标准多方块定义
│   │       └── GTEMultiMachines2.java    # 5. 大型 / 特殊 / 终极多方块定义
│   ├── common/machine/multiblock/       # 6. 自定义控制器逻辑类 (如 FUEL_ENGINE, ORE_PROCESS_CENTER)
│   ├── utils/GTERecipeModifiers.java    # 7. 配方修饰器 (并行计算、超频逻辑、Subtick 缩减)
│   └── data/recipe/GTERecipe.java       # 8. 注册该多方块机器的加工配方与合成配方
└── resources/assets/gtceu/lang/
    ├── en_us.json                       # 9. 英文语言文件 (block.gtceu.<name>, tooltips)
    └── zh_cn.json                       # 10. 中文语言文件
```

---

## 2. 多方块结构开发 8 步标准工作流 (Lifecycle Checklist)

1. **Step 1: 确定多方块原型与基类**
   - 普通电力加工机器：`WorkableElectricMultiblockMachine`
   - 温度与线圈相关机器：`CoilWorkableElectricMultiblockMachine`
   - 蒸汽驱动多方块：`SteamParallelMultiblockMachine`
   - 发电/产能设备：自定义类继承 `WorkableElectricMultiblockMachine` 或 `FUEL_ENGINE`
   - 含有腔体内流体渲染 / 阵列检测：继承并实现 `IFluidRenderMulti` 或 `IDisplayUIMachine`
2. **Step 2: 注册配方类型（若为新功能）**
   - 在 [`GTERecipeTypes.java`](file:///modules/gtecore/src/main/java/org/satou/gtecore/common/data/GTERecipeTypes.java) 中注册 `GTRecipeType`，配置输入/输出上限与进度条。
3. **Step 3: 注册所需的新外壳/线圈（可选）**
   - 在 [`GTEBlocks.java`](file:///modules/gtecore/src/main/java/org/satou/gtecore/common/data/GTEBlocks.java) 中通过 `createCasingBlock` 或 `createCoilBlock` 注册。
4. **Step 4: 编写自定义控制器逻辑类（可选）**
   - 若有特殊数据同步，使用 `@Persisted` 并在类中初始化 `ManagedFieldHolder`。
5. **Step 5: 构建多方块定义与结构图案 (`FactoryBlockPattern`)**
   - 在 [`GTEMultiMachine.java`](file:///modules/gtecore/src/main/java/org/satou/gtecore/common/data/machines/GTEMultiMachine.java) 或 [`GTEMultiMachines2.java`](file:///modules/gtecore/src/main/java/org/satou/gtecore/common/data/machines/GTEMultiMachines2.java) 中使用 `GTECore_REGISTRATE.multiblock(name, factory)` 链式注册。
6. **Step 6: 配置配方修饰器 (`recipeModifiers`)**
   - 绑定超频、批处理（`BATCH_MODE`）或自定义 `GTERecipeModifiers`。
7. **Step 7: 添加本地化语言键 (Lang Keys)**
   - 在 `en_us.json` 与 `zh_cn.json` 中配置机器名称与提示信息。
8. **Step 8: 编写配方与编译验证**
   - 在 [`GTERecipe.java`](file:///modules/gtecore/src/main/java/org/satou/gtecore/data/recipe/GTERecipe.java) 中添加合成配方，执行 `./gradlew :modules:gtecore:compileJava` 验证编译。

---

## 3. 五大多方块原型代码蓝图 (Code Blueprints)

### 原型 1: 标准电力加工多方块 (Standard Electric Multiblock)

```java
public static final MultiblockMachineDefinition BIG_MACERATOR = GTECore_REGISTRATE
        .multiblock("big_macerator", WorkableElectricMultiblockMachine::new)
        .rotationState(RotationState.ALL)
        .appearanceBlock(CASING_STEEL_SOLID)
        .recipeType(GTRecipeTypes.MACERATOR_RECIPES)
        .recipeModifiers(GTRecipeModifiers.OC_PERFECT_SUBTICK, BATCH_MODE)
        .pattern(definition -> FactoryBlockPattern.start()
                .aisle("AAA", "AAA", "AAA")
                .aisle("AAA", "A#A", "AAA")
                .aisle("AAA", "ACA", "AAA")
                .where("A", blocks(CASING_STEEL_SOLID.get()).setMinGlobalLimited(10)
                        .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                        .or(Predicates.abilities(PartAbility.INPUT_LASER))
                        .or(Predicates.abilities(PartAbility.MULTI_PARALLEL_HATCH)))
                .where("#", air())
                .where("C", controller(blocks(definition.getBlock())))
                .build())
        .tooltips(Component.translatable("com.gtecore.tooltips.0"))
        .workableCasingModel(GTCEu.id("block/casings/solid/machine_casing_solid_steel"),
                GTCEu.id("block/multiblock/distillation_tower"))
        .register();
```

---

### 原型 2: 线圈加热多方块 (Coil Heated Multiblock)

```java
public static final MultiblockMachineDefinition MEGA_BLAST_FURNACE = GTECore_REGISTRATE
        .multiblock("mega_blast_furnace", CoilWorkableElectricMultiblockMachine::new)
        .rotationState(RotationState.ALL)
        .appearanceBlock(CASING_INVAR_HEATPROOF)
        .recipeType(GTRecipeTypes.BLAST_RECIPES)
        .recipeModifiers(GTRecipeModifiers::ebfOverclock, BATCH_MODE)
        .pattern(definition -> FactoryBlockPattern.start()
                .aisle("XXX", "CCC", "CCC", "XXX")
                .aisle("XXX", "C#C", "C#C", "XMX")
                .aisle("XSX", "CCC", "CCC", "XXX")
                .where("S", controller(blocks(definition.getBlock())))
                .where("X", blocks(CASING_INVAR_HEATPROOF.get()).setMinGlobalLimited(9)
                        .or(autoAbilities(definition.getRecipeTypes()))
                        .or(autoAbilities(true, false, false))
                        .or(abilities(PartAbility.INPUT_LASER)))
                .where("M", abilities(PartAbility.MUFFLER))
                .where("C", heatingCoils())
                .where("#", air())
                .build())
        .tooltips(Component.translatable("com.gtecore.tooltips.0"))
        .additionalDisplay((controller, components) -> {
            if (controller instanceof CoilWorkableElectricMultiblockMachine coilMachine && controller.isFormed()) {
                components.add(Component.translatable("gtceu.multiblock.blast_furnace.max_temperature",
                        Component.translatable(FormattingUtil.formatNumbers(coilMachine.getCoilType().getCoilTemperature() +
                                100L * Math.max(0, coilMachine.getTier() - GTValues.MV)) + "K")
                                .setStyle(Style.EMPTY.withColor(ChatFormatting.RED))));
            }
        })
        .workableCasingModel(GTCEu.id("block/casings/solid/machine_casing_heatproof"),
                GTCEu.id("block/multiblock/electric_blast_furnace"))
        .register();
```

---

### 原型 3: 蒸汽并行多方块 (Steam Parallel Multiblock)

```java
public static final MultiblockMachineDefinition BIG_STEAM_COMPRESSOR = GTECore_REGISTRATE
        .multiblock("big_steam_compressor", SteamParallelMultiblockMachine::new)
        .rotationState(RotationState.ALL)
        .appearanceBlock(CASING_BRONZE_BRICKS)
        .recipeTypes(GTRecipeTypes.COMPRESSOR_RECIPES)
        .recipeModifier(SteamParallelMultiblockMachine::recipeModifier, true)
        .pattern(definition -> FactoryBlockPattern.start()
                .aisle("BBB", "BBB", "BBB")
                .aisle("BBB", "BAB", "BBB")
                .aisle("BBB", "B#B", "BBB")
                .where("A", Predicates.any())
                .where("#", controller(blocks(definition.getBlock())))
                .where("B", blocks(steam_machine_casing.get()).setMinGlobalLimited(6)
                        .or(Predicates.abilities(PartAbility.STEAM_IMPORT_ITEMS))
                        .or(Predicates.abilities(PartAbility.STEAM_EXPORT_ITEMS))
                        .or(Predicates.abilities(PartAbility.STEAM).setExactLimit(1))
                        .or(Predicates.abilities(PartAbility.EXPORT_ITEMS))
                        .or(Predicates.abilities(PartAbility.IMPORT_ITEMS))
                        .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS))
                        .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS))))
                .build())
        .tooltips(Component.translatable("com.gtecore.tooltips.0"))
        .workableCasingModel(GTCEu.id("block/casings/solid/machine_casing_bronze_plated_bricks"),
                GTCEu.id("block/multiblock/gcym/large_centrifuge"))
        .register();
```

---

### 原型 4: 发电机与高额产能多方块 (Generator / Fuel Engine)

```java
public static final MultiblockMachineDefinition MEGA_FUEL_GENERATOR = GTECore_REGISTRATE
        .multiblock("mega_fuel_generator", holder -> new FUEL_ENGINE(holder, GTValues.IV))
        .appearanceBlock(CASING_TUNGSTENSTEEL_ROBUST)
        .rotationState(RotationState.ALL)
        .recipeTypes(GTERecipeTypes.General_Fuel_Generator)
        .recipeModifier(FUEL_ENGINE::recipeModifier)
        .pattern(definition -> FactoryBlockPattern.start()
                .aisle("AAA", "ABA", "AAA")
                .aisle("AAA", "ABA", "AAA")
                .aisle("AAA", "ACA", "AAA")
                .where("A", blocks(CASING_TUNGSTENSTEEL_ROBUST.get())
                        .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                        .or(Predicates.abilities(PartAbility.OUTPUT_LASER))
                        .or(Predicates.abilities(PartAbility.OUTPUT_ENERGY)))
                .where("B", blocks(CASING_TUNGSTENSTEEL_PIPE.get()))
                .where("C", controller(blocks(definition.getBlock())))
                .build())
        .tooltips(Component.translatable("com.gtecore.tooltips.4"), Component.translatable("com.gtecore.tooltips.0"))
        .workableCasingModel(GTCEu.id("block/casings/solid/machine_casing_robust_tungstensteel"),
                GTCEu.id("block/multiblock/generator/extreme_combustion_engine"))
        .register();
```

---

### 原型 5: 腔体流体渲染与模块化多方块 (Fluid Render & Module Multi)

```java
public class CustomFluidProcessMachine extends WorkableElectricMultiblockMachine implements IFluidRenderMulti, IDisplayUIMachine {
    
    protected static final ManagedFieldHolder MANAGED_FIELD_HOLDER = new ManagedFieldHolder(
            CustomFluidProcessMachine.class, WorkableElectricMultiblockMachine.MANAGED_FIELD_HOLDER);

    @Getter @Setter @DescSynced @RequireRerender
    private @NotNull Set<BlockPos> fluidBlockOffsets = new HashSet<>();

    public CustomFluidProcessMachine(IMachineBlockEntity holder) {
        super(holder);
    }

    @Override
    public ManagedFieldHolder getFieldHolder() {
        return MANAGED_FIELD_HOLDER;
    }

    @Override
    public void onStructureFormed() {
        super.onStructureFormed();
        IFluidRenderMulti.super.onStructureFormed();
    }

    @Override
    public void onStructureInvalid() {
        super.onStructureInvalid();
        IFluidRenderMulti.super.onStructureInvalid();
    }

    @NotNull
    @Override
    public Set<BlockPos> saveOffsets() {
        // 计算腔体内部相对于控制器的相对方块偏移集合
        Set<BlockPos> offsets = new HashSet<>();
        Direction back = getFrontFacing().getOpposite();
        BlockPos center = getPos().relative(back);
        offsets.add(center.subtract(getPos()));
        return offsets;
    }
}
```

---

## 4. 关键避坑与防崩溃规范 (Anti-Crash Rules)

1. **绝对禁止强转 Mixin Accessor 接口**：
   - 必须使用 `if (controller instanceof MyCustomMachine custom && controller.isFormed())` 进行守卫判断。
2. **正确初始化 `ManagedFieldHolder`**：
   - 自定义控制器类若含有 `@Persisted` 或 `@DescSynced` 字段，必须将父类的 `MANAGED_FIELD_HOLDER` 传入子类构造，并在 `getFieldHolder()` 中返回，否则会产生运行时空指针或同步崩溃。
3. **控制器只能出现 1 次**：
   - 在 `FactoryBlockPattern` 中，`controller(blocks(definition.getBlock()))` 对应的字符在整个结构切片中必须唯一。
4. **确保初始化静态触发链**：
   - 所有的 `MultiblockMachineDefinition` 静态字段在类加载时注册。必须在 [`GTEMachines.init()`](file:///modules/gtecore/src/main/java/org/satou/gtecore/common/data/machines/GTEMachines.java) 中显式调用所在类的 `.init()`（如 `GTEMultiMachine.init()`）。

---

## 5. 扩展参考资料 (Detailed References)

- 深入结构图案坐标与谓词：[block_pattern_guide.md](file:///c:/Users/Ex_Je/Documents/GTEGroup/.agents/skills/gte-multiblock/references/block_pattern_guide.md)
- 配方类型、修饰器与 Datagen 规范：[recipe_and_modifier_guide.md](file:///c:/Users/Ex_Je/Documents/GTEGroup/.agents/skills/gte-multiblock/references/recipe_and_modifier_guide.md)
- 自定义机械外壳与加热线圈注册：[casings_and_coils.md](file:///c:/Users/Ex_Je/Documents/GTEGroup/.agents/skills/gte-multiblock/references/casings_and_coils.md)
