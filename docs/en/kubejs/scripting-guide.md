# KubeJS Customization & Scripting Guide

GTE delegates material registration, recipe balance, and cross-mod automation to **KubeJS** (located under `gte/overrides/kubejs/`).

---

## 📁 Directory Hierarchy & Lifecycles

```
gte/overrides/kubejs/
├── startup_scripts/     # 【Startup】Executes on early boot; registers materials, fluids, blocks, items
├── server_scripts/      # 【Server】Executes on world load/server connect; modifies recipes, loot, and tags
├── client_scripts/      # 【Client】Executes on client; alters tooltips, EMI/JEI recipes and UI
└── assets/ & data/      # Static localization, textures, models, and datapacks
```

---

## 🧪 Startup Phase: Custom Material Registration (`startup_scripts/`)

Register custom elements, fluids, and ingots using `GTCEuStartupEvents.registry('gtceu:material', ...)`:

```javascript
GTCEuStartupEvents.registry('gtceu:material', event => {
    // 1. Register Infinite Metal
    event.create('infinite')
        .color(0xed1661)
        .ingot()
        .iconSet(GTMaterialIconSet.DULL)
        .element('Xe')
        .toolStats(new ToolProperty(144, 114, 80000000, 6, [
            GTToolType.AXE, GTToolType.PICKAXE, GTToolType.SWORD, GTToolType.MORTAR
        ]))

    // 2. Register Dark Fluid Metal
    event.create('dark_fluid')
        .color(0xb156d8)
        .fluid()
        .ingot()
        .appendFlags(
            GTMaterials.STD_METAL,
            GTMaterialFlags.GENERATE_FRAME,
            GTMaterialFlags.GENERATE_FOIL,
            GTMaterialFlags.GENERATE_FINE_WIRE,
            GTMaterialFlags.GENERATE_LONG_ROD
        )

    // 3. Register Meow Meow Matter and Antimatter
    event.create('meow_meow_matter')
        .color(0x483D8B)
        .dust()
        .fluid()
        .ingot()
        .appendFlags(GTMaterials.STD_METAL, GTMaterialFlags.GENERATE_FRAME)

    event.create('antimatter')
        .color(0x990099)
        .dust()
        .fluid()
        .ingot()
        .appendFlags(
            GTMaterials.STD_METAL,
            GTMaterialFlags.GENERATE_FRAME,
            GTMaterialFlags.GENERATE_FOIL,
            GTMaterialFlags.GENERATE_FINE_WIRE
        )
})
```

---

## ⚙️ Server Phase: Custom Recipe Handlers (`server_scripts/`)

Inside `ServerEvents.recipes`, invoke `event.recipes.gtceu` and `event.recipes.gtecore`:

### 1. Base Machines & Blast Furnace Recipes

```javascript
ServerEvents.recipes(event => {
    const gtr = event.recipes.gtceu
    const gte = event.recipes.gtecore

    // Remove legacy recipes
    event.remove({ input: 'gtceu:raw_platinum' })
    event.remove({ id: 'gtceu:coke_oven/log_to_charcoal' })

    // Instant Coke Oven
    gtr.coke_oven('fast_coke_oven')
        .itemInputs('#minecraft:logs_that_burn')
        .itemOutputs('minecraft:charcoal')
        .outputFluids('gtceu:creosote 1000')
        .duration(20)

    // Primitive Blast Furnace: 1 Iron + 1 Coal -> 5 Steel (1 tick)
    gtr.primitive_blast_furnace('easy_steel_from_coal')
        .itemInputs('1x minecraft:iron_ingot', '1x minecraft:coal')
        .itemOutputs('5x gtceu:steel_ingot')
        .duration(1)

    // Forming Press AE2 Logic Processor
    gtr.forming_press('gtecore:printed_logic_processor')
        .EUt(26)
        .duration(2 * 20)
        .notConsumable('1x ae2:logic_processor_press')
        .itemInputs('1x minecraft:gold_ingot')
        .itemOutputs('1x ae2:printed_logic_processor')
})
```

### 2. GTECore Multiblock Recipes

```javascript
ServerEvents.recipes(event => {
    const gte = event.recipes.gtecore

    // Easy Box batch ore generator
    gte.easy_box('easy_test')
        .circuit(1)
        .duration(20 * 20)
        .EUt(32)
        .itemOutputs(
            'minecraft:raw_iron',
            'minecraft:raw_copper',
            'minecraft:raw_gold',
            'gtceu:raw_redstone',
            'gtceu:raw_diamond',
            'gtceu:raw_silver',
            'gtceu:raw_aluminium'
        )
})
```

---

## ⚡ In-Game Hot-Reload Commands

Test script modifications live without restarting the client:

- **Reload Recipes & Server Scripts**:
  ```mcfunction
  /kubejs reload server_scripts
  ```
- **Reload Textures & Client Scripts**:
  ```mcfunction
  /kubejs reload client_scripts
  ```
