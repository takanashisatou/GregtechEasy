# KubeJS Modding and Script Development Guide

GTE delegates most material registration, recipe adjustments, and cross-mod integration logic to **KubeJS** (located in `gte/overrides/kubejs/`).

---

## 📁 Script Directory Architecture and Lifecycle

```
gte/overrides/kubejs/
├── startup_scripts/     # [Startup Scripts] Execute at the earliest stage of the game, used for registering materials, fluids, blocks, items
├── server_scripts/      # [Server Scripts] Execute when entering a world/connecting to a server, used for registering/modifying recipes and tags
├── client_scripts/      # [Client Scripts] Execute on the client, used for modifying tooltips, JEI/EMI interface display
└── assets/ & data/      # Static localization, textures, and datapack files
```

---

## 🧪 Startup Phase: Custom Material Registration (`startup_scripts/`)

Use `GTCEuStartupEvents.registry('gtceu:material', ...)` to register custom elements and materials:

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

## ⚙️ Server Phase: Custom Recipe and Machine Recipe Writing (`server_scripts/`)

In the `ServerEvents.recipes` event, you can directly call `event.recipes.gtceu` and `event.recipes.gtecore`:

### 1. Basic Machine and Blast Furnace Recipes

```javascript
ServerEvents.recipes(event => {
    const gtr = event.recipes.gtceu
    const gte = event.recipes.gtecore

    // Remove original inefficient recipes
    event.remove({ input: 'gtceu:raw_platinum' })
    event.remove({ id: 'gtceu:coke_oven/log_to_charcoal' })

    // Fast coke oven recipe
    gtr.coke_oven('fast_coke_oven')
        .itemInputs('#minecraft:logs_that_burn')
        .itemOutputs('minecraft:charcoal')
        .outputFluids('gtceu:creosote 1000')
        .duration(20)

    // Primitive blast furnace: 1 iron + 1 coal -> 5 steel ingots (1 tick)
    gtr.primitive_blast_furnace('easy_steel_from_coal')
        .itemInputs('1x minecraft:iron_ingot', '1x minecraft:coal')
        .itemOutputs('5x gtceu:steel_ingot')
        .duration(1)

    // Forming press for printed logic processor
    gtr.forming_press('gtecore:printed_logic_processor')
        .EUt(26)
        .duration(2 * 20)
        .notConsumable('1x ae2:logic_processor_press')
        .itemInputs('1x minecraft:gold_ingot')
        .itemOutputs('1x ae2:printed_logic_processor')
})
```

### 2. GTECore Custom Machine Recipes

```javascript
ServerEvents.recipes(event => {
    const gte = event.recipes.gtecore

    // Easy Box batch mineral output recipe
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

## ⚡ In-Game Hot Reload Commands

Test script modifications in real-time without restarting the client:

- **Reload recipes and server scripts**:
  ```mcfunction
  /kubejs reload server_scripts
  ```
- **Reload textures and client scripts**:
  ```mcfunction
  /kubejs reload client_scripts
  ```