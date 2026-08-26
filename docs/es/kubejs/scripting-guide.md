# Guía de Modificación y Desarrollo de Scripts de KubeJS

GTE delega la mayor parte del registro de materiales, ajustes de recetas y lógica de integración multimod en **KubeJS** (directorio en `gte/overrides/kubejs/`).

---

## 📁 Arquitectura del Directorio de Scripts y Ciclo de Vida

```
gte/overrides/kubejs/
├── startup_scripts/     # 【Scripts de inicio】Se ejecutan en la fase más temprana del juego, para registrar materiales, fluidos, bloques y objetos
├── server_scripts/      # 【Scripts del servidor】Se ejecutan al entrar en una partida/conectarse al servidor, para registrar/modificar recetas y etiquetas
├── client_scripts/      # 【Scripts del cliente】Se ejecutan en el cliente, para modificar tooltips, la interfaz de JEI/EMI
└── assets/ & data/      # Archivos estáticos de localización, texturas y paquetes de datos
```

---

## 🧪 Fase de inicio: Registro de materiales personalizados (`startup_scripts/`)

Usa `GTCEuStartupEvents.registry('gtceu:material', ...)` para registrar elementos y materiales personalizados:

```javascript
GTCEuStartupEvents.registry('gtceu:material', event => {
    // 1. Registrar metal infinito (Infinite)
    event.create('infinite')
        .color(0xed1661)
        .ingot()
        .iconSet(GTMaterialIconSet.DULL)
        .element('Xe')
        .toolStats(new ToolProperty(144, 114, 80000000, 6, [
            GTToolType.AXE, GTToolType.PICKAXE, GTToolType.SWORD, GTToolType.MORTAR
        ]))

    // 2. Registrar metal de fluido oscuro (Dark Fluid)
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

    // 3. Registrar materia miau miau (Meow Meow Matter) y antimateria (Antimatter)
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

## ⚙️ Servidor: Recetas personalizadas y escritura de recetas de máquinas (`server_scripts/`)

En el evento `ServerEvents.recipes`, puedes llamar directamente a `event.recipes.gtceu` y `event.recipes.gtecore`:

### 1. Recetas básicas de máquinas y alto horno

```javascript
ServerEvents.recipes(event => {
    const gtr = event.recipes.gtceu
    const gte = event.recipes.gtecore

    // Eliminar recetas antiguas ineficientes
    event.remove({ input: 'gtceu:raw_platinum' })
    event.remove({ id: 'gtceu:coke_oven/log_to_charcoal' })

    // Receta de horno de coque rápido
    gtr.coke_oven('fast_coke_oven')
        .itemInputs('#minecraft:logs_that_burn')
        .itemOutputs('minecraft:charcoal')
        .outputFluids('gtceu:creosote 1000')
        .duration(20)

    // Alto horno primitivo: 1 hierro + 1 carbón -> 5 lingotes de acero (1 tick)
    gtr.primitive_blast_furnace('easy_steel_from_coal')
        .itemInputs('1x minecraft:iron_ingot', '1x minecraft:coal')
        .itemOutputs('5x gtceu:steel_ingot')
        .duration(1)

    // Prensado de procesador lógico
    gtr.forming_press('gtecore:printed_logic_processor')
        .EUt(26)
        .duration(2 * 20)
        .notConsumable('1x ae2:logic_processor_press')
        .itemInputs('1x minecraft:gold_ingot')
        .itemOutputs('1x ae2:printed_logic_processor')
})
```

### 2. Recetas de máquinas personalizadas de GTECore

```javascript
ServerEvents.recipes(event => {
    const gte = event.recipes.gtecore

    // Receta de producción masiva de minerales de la Caja Fácil (Easy Box)
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

## ⚡ Comandos de recarga en caliente dentro del juego

Puedes probar los cambios de scripts en tiempo real sin reiniciar el cliente:

- **Recargar recetas y scripts del servidor**:
  ```mcfunction
  /kubejs reload server_scripts
  ```
- **Recargar materiales y scripts del cliente**:
  ```mcfunction
  /kubejs reload client_scripts
  ```