# 配方类型、修改器与配方编写指南

## 1. 注册配方类型（`GTERecipeTypes`）

文件：`modules/gtecore/src/main/java/org/satou/gtecore/common/data/GTERecipeTypes.java`

```java
public static GTRecipeType register(String name, String group, RecipeType<?>... proxyRecipes) {
    var recipeType = new GTRecipeType(GTECore.id(name), group, proxyRecipes);
    GTRegistries.register(BuiltInRegistries.RECIPE_TYPE, recipeType.registryName, recipeType);
    GTRegistries.register(BuiltInRegistries.RECIPE_SERIALIZER, recipeType.registryName, new GTRecipeSerializer());
    GTRegistries.RECIPE_TYPES.register(recipeType.registryName, recipeType);
    return recipeType;
}

// 电力加工
public static final GTRecipeType QUANTUM_ASSEMBLER = register("quantum_assembler", MULTIBLOCK)
        .setMaxIOSize(9, 3, 3, 1) // (itemIn, itemOut, fluidIn, fluidOut)
        .setEUIO(IO.IN)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, LEFT_TO_RIGHT);

// 发电
public static final GTRecipeType HIGH_ENERGY_GENERATOR = register("high_energy_generator", MULTIBLOCK)
        .setMaxIOSize(0, 0, 2, 1)
        .setEUIO(IO.OUT);

// 蒸汽
public static final GTRecipeType STEAM_MEGA_MACERATOR = register("steam_mega_macerator", MULTIBLOCK)
        .setMaxIOSize(2, 8, 0, 0)
        .setEUIO(IO.IN)
        .setSteamProgressBar(GuiTextures.PROGRESS_BAR_ARROW_STEAM, LEFT_TO_RIGHT);
```

确保启动流程调用了 `GTERecipeTypes.init()`，静态字段才会被加载。

## 2. 配方修改器（`RecipeModifier`）

### 常用内置修改器

- `GTRecipeModifiers.OC_PERFECT_SUBTICK`：无损完美 subtick 超频
- `GTRecipeModifiers.OC_NON_PERFECT`：常规 4x 耗电 / 2x 速度超频
- `GTRecipeModifiers.BATCH_MODE`：自动批量模式
- `SteamParallelMultiblockMachine::recipeModifier`：蒸汽多方块并行

### 自定义并行修改器

文件：`modules/gtecore/src/main/java/org/satou/gtecore/utils/GTERecipeModifiers.java`

```java
public static ModifierFunction recipeModifierForCustomMultiblock(@NotNull MetaMachine machine, @NotNull GTRecipe recipe) {
    if (!(machine instanceof WorkableElectricMultiblockMachine electricMachine)) {
        return RecipeModifier.nullWrongType(WorkableElectricMultiblockMachine.class, machine);
    }

    int maxParallel = 1000000000;
    // 普通电力加工用原生 ParallelLogic，同时约束输入、输出空间与电力；
    // 仓库里 FUEL_ENGINE.getParallelAmount 只看输入侧，别当成通用并行函数照抄。
    int actualParallel = ParallelLogic.getParallelAmount(electricMachine, recipe, maxParallel);
    if (actualParallel <= 0) return ModifierFunction.NULL;

    return ModifierFunction.builder()
            .inputModifier(ContentModifier.multiplier(actualParallel))
            .outputModifier(ContentModifier.multiplier(actualParallel))
            .parallels(actualParallel)
            .eutMultiplier(actualParallel)
            .build();
}
```

两个常见坑：
- 上例只缩放一次性输入/输出；如果配方带非 EU 的 tick IO，要一并配对应的 tick modifier。
- 固定 `.durationMultiplier(...)` 只是给耗时乘系数，不是真正超频；要做超频请用 `OverclockingLogic` 或原版超频修改器，并留意和并行修饰器的组合顺序。

### 配方跑不起来怎么查

按这条顺序逐个排除：真实配方 ID（Java + KubeJS）→ 机器当前模式 → 配方条件里的控制器/能力判断 → `RecipeHelper.checkConditions`（含反向条件）→ `RecipeLogic` → 机器修改器。

## 3. 编写配方（`GTERecipe.java`）

文件：`modules/gtecore/src/main/java/org/satou/gtecore/data/recipe/GTERecipe.java`

### 标准配方

```java
GTERecipeTypes.QUANTUM_ASSEMBLER.recipeBuilder("nano_circuit_assembly")
        .inputItems(CustomTags.IV_CIRCUITS, 4)
        .inputItems(TagPrefix.plate, GTMaterials.Naquadah, 16)
        .inputFluids(GTMaterials.SolderingAlloy.getFluid(1000))
        .outputItems(GTEItems.SPECIAL_ITEM.get(), 1)
        .duration(20 * 15)
        .EUt(GTValues.VA[GTValues.LuV])
        .save(provider);
```

### 装配线配方（带扫描研究）

```java
GTRecipeTypes.ASSEMBLY_LINE_RECIPES.recipeBuilder("my_mega_machine")
        .inputItems(GCYMMachines.LARGE_CENTRIFUGE, 8)
        .inputItems(TagPrefix.plate, GTMaterials.ReinforcedEpoxyResin, 64)
        .inputItems(CustomTags.ZPM_CIRCUITS, 16)
        .inputFluids(GTMaterials.Epoxy.getFluid(10000))
        .scannerResearch(b -> b.researchStack(GCYMMachines.LARGE_CENTRIFUGE.asStack())
                .duration(600)
                .EUt(GTValues.VA[GTValues.IV]))
        .outputItems(GTEMultiMachine.MY_MEGA_MACHINE)
        .duration(20 * 120)
        .EUt(GTValues.VA[GTValues.ZPM])
        .save(provider);
```

新增配方类型或机器的名称与提示，统一写进 `modules/gtecore/src/main/java/org/satou/gtecore/datagen/Lang.java`（`provider.add(key, en, zh)`），再跑 `:modules:gtecore:runData`。
