# 多方块原型示例

仅在新增相应类型机器时读取相关段落。示例用于说明 API 组合；以当前相邻机器、父类和注册器源码核实签名与行为，不能把示意注册名当成已存在内容。语言键统一写入 `datagen/Lang.java` 后运行 datagen，参见 [配方与修改器指南](recipe_and_modifier_guide.md)。

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
