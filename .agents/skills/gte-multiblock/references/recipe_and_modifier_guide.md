# GTE 配方系统与配方修改器指南 (Recipe & RecipeModifier Guide)

本指南详细说明在 `gtecore` 中如何注册自定义配方类型（`GTRecipeType`）、构建配方修改器（`RecipeModifier` / `ModifierFunction`）以及编写配方生成器（`GTRecipeBuilder`）。

---

## 1. 注册自定义配方类型 (`GTERecipeTypes`)

所有新的多方块机器专用配方类型集中在 `modules/gtecore/src/main/java/org/satou/gtecore/common/data/GTERecipeTypes.java`：

```java
package org.satou.gtecore.common.data;

import org.satou.gtecore.GTECore;
import com.gregtechceu.gtceu.api.capability.recipe.IO;
import com.gregtechceu.gtceu.api.gui.GuiTextures;
import com.gregtechceu.gtceu.api.recipe.GTRecipeSerializer;
import com.gregtechceu.gtceu.api.recipe.GTRecipeType;
import com.gregtechceu.gtceu.api.registry.GTRegistries;
import net.minecraft.core.registries.BuiltInRegistries;
import net.minecraft.world.item.crafting.RecipeType;

import static com.gregtechceu.gtceu.common.data.GTRecipeTypes.MULTIBLOCK;
import static com.lowdragmc.lowdraglib.gui.texture.ProgressTexture.FillDirection.LEFT_TO_RIGHT;

public class GTERecipeTypes {

    public static GTRecipeType register(String name, String group, RecipeType<?>... proxyRecipes) {
        var recipeType = new GTRecipeType(GTECore.id(name), group, proxyRecipes);
        GTRegistries.register(BuiltInRegistries.RECIPE_TYPE, recipeType.registryName, recipeType);
        GTRegistries.register(BuiltInRegistries.RECIPE_SERIALIZER, recipeType.registryName, new GTRecipeSerializer());
        GTRegistries.RECIPE_TYPES.register(recipeType.registryName, recipeType);
        return recipeType;
    }

    // 示例 1: 标准输入/输出加工机器
    public final static GTRecipeType QUANTUM_ASSEMBLER = register("quantum_assembler", MULTIBLOCK)
            .setMaxIOSize(9, 3, 3, 1) // (itemIn, itemOut, fluidIn, fluidOut)
            .setEUIO(IO.IN)
            .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, LEFT_TO_RIGHT);

    // 示例 2: 发电/产能类型
    public final static GTRecipeType HIGH_ENERGY_GENERATOR = register("high_energy_generator", MULTIBLOCK)
            .setMaxIOSize(0, 0, 2, 1)
            .setEUIO(IO.OUT);

    // 示例 3: 蒸汽驱动机器
    public final static GTRecipeType STEAM_MEGA_MACERATOR = register("steam_mega_macerator", MULTIBLOCK)
            .setMaxIOSize(2, 8, 0, 0)
            .setEUIO(IO.IN)
            .setSteamProgressBar(GuiTextures.PROGRESS_BAR_ARROW_STEAM, LEFT_TO_RIGHT);

    public static void init() {}
}
```

> [!NOTE]
> 必须确保在 `GTECore.java` 或主生命周期中触发 `GTERecipeTypes.init()`，以保证静态字段顺利初始化。

---

## 2. 配方修改器机制 (`RecipeModifier`)

配方修改器决定了机器执行配方时的**并行计算**、**超频衰减**、**能耗计算**和**时间缩减**。

### 常用内置修饰器

1. `GTRecipeModifiers.OC_PERFECT_SUBTICK`：无损完美 Subtick 超频（常用于终极加工多方块）。
2. `GTRecipeModifiers.OC_NON_PERFECT`：常规 GregTech 4x 能量 / 2x 速度超频。
3. `GTRecipeModifiers.BATCH_MODE`：自动批量处理修饰器。
4. `SteamParallelMultiblockMachine::recipeModifier`：蒸汽多方块专用修饰器。

### 编写自定义高并行/自定义超频修饰器

在 `modules/gtecore/src/main/java/org/satou/gtecore/utils/GTERecipeModifiers.java` 中：

```java
public static ModifierFunction recipeModifierForCustomMultiblock(@NotNull MetaMachine machine, @NotNull GTRecipe recipe) {
    if (!(machine instanceof WorkableElectricMultiblockMachine electricMachine)) {
        return RecipeModifier.nullWrongType(WorkableElectricMultiblockMachine.class, machine);
    }
    
    // 1. 设置或计算最大并行上限（如 10 亿并行或由仓口/等级决定）
    int maxParallel = 1000000000;
    // 普通电力加工使用同时限制输入、输出空间与电力的原生逻辑。
    // FUEL_ENGINE.getParallelAmount 是特定机器的输入侧 helper，不能当作通用安全并行计算。
    int actualParallel = ParallelLogic.getParallelAmount(electricMachine, recipe, maxParallel);
    
    if (actualParallel <= 0) return ModifierFunction.NULL;

    // 2. 构建修饰结果
    return ModifierFunction.builder()
            .inputModifier(ContentModifier.multiplier(actualParallel))
            .outputModifier(ContentModifier.multiplier(actualParallel))
            .parallels(actualParallel)
            .eutMultiplier(actualParallel) // 能耗等比例放大
            .build();
}
```

上例说明一次性 IO 的并行缩放。配方若含有非 EU 的 tick 输入/输出，还要核实相应 tick modifier；零并行、能耗与耗时边界以当前 `ModifierFunction`、`ParallelLogic` 源码为准。固定 `.durationModifier(multiplier(...))` 只是耗时倍率，不能称为真正 subtick 超频；超频应采用匹配机器设计的 `OverclockingLogic` / 原生修改器，确认组合顺序与并行电耗。

### 配方不能运行时

从真实配方、当前模式、条件的控制器类型/能力判断追踪到 `RecipeHelper.checkConditions`、`RecipeLogic` 与机器修改器。声明某配方类型不意味着满足那个类型内的专用外壳条件。兼容修改应仅作用于目标机器/类型，保留反向条件和其他环境、输入输出、电力要求；不要直接清空条件列表。

---

## 3. 编写配方与数据生成 (`GTERecipe.java`)

在 `modules/gtecore/src/main/java/org/satou/gtecore/data/recipe/GTERecipe.java` 中添加配方：

### (1) 标准多方块配方

```java
GTERecipeTypes.QUANTUM_ASSEMBLER.recipeBuilder("nano_circuit_assembly")
        .inputItems(CustomTags.IV_CIRCUITS, 4)
        .inputItems(TagPrefix.plate, GTMaterials.Naquadah, 16)
        .inputFluids(GTMaterials.SolderingAlloy.getFluid(1000))
        .outputItems(GTEItems.SPECIAL_ITEM.get(), 1)
        .duration(20 * 15) // 15 秒
        .EUt(GTValues.VA[GTValues.LuV]) // 耗能等级
        .save(provider);
```

### 语言与 datagen

新增或改名的内容、名称与提示统一在 `modules/gtecore/src/main/java/org/satou/gtecore/datagen/Lang.java` 写入 `provider.add(key, en, zh)`，随后运行 `:modules:gtecore:runData`。生成输出位于 `src/generated/resources/`，不能直接编辑；不要依据旧 `assets/gtceu/lang` 路径为新 GTECore 内容手写语言 JSON。

### (2) 装配线配方（含研究与扫描器）

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
