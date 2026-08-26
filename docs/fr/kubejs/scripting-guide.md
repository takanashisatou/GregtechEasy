# Guide de modding et de développement de scripts KubeJS

GTE confie la plupart de l'enregistrement des matériaux, des ajustements de recettes et de la logique d'intégration multi-modules à **KubeJS** (répertoire situé dans `gte/overrides/kubejs/`).

---

## 📁 Architecture et cycle de vie des répertoires de scripts

```
gte/overrides/kubejs/
├── startup_scripts/     # Scripts de démarrage : exécutés au tout début du jeu, pour enregistrer matériaux, fluides, blocs, objets
├── server_scripts/      # Scripts serveur : exécutés lors de l'entrée dans une sauvegarde/connexion au serveur, pour enregistrer/modifier recettes et tags
├── client_scripts/      # Scripts client : exécutés côté client, pour modifier les infobulles, l'affichage de l'interface JEI/EMI
└── assets/ & data/      # Fichiers de localisation statiques, textures et packs de données
```

---

## 🧪 Phase de démarrage : enregistrement de matériaux personnalisés (`startup_scripts/`)

Utilisez `GTCEuStartupEvents.registry('gtceu:material', ...)` pour enregistrer des éléments et matériaux personnalisés :

```javascript
GTCEuStartupEvents.registry('gtceu:material', event => {
    // 1. Enregistrement du métal infini (Infinite)
    event.create('infinite')
        .color(0xed1661)
        .ingot()
        .iconSet(GTMaterialIconSet.DULL)
        .element('Xe')
        .toolStats(new ToolProperty(144, 114, 80000000, 6, [
            GTToolType.AXE, GTToolType.PICKAXE, GTToolType.SWORD, GTToolType.MORTAR
        ]))

    // 2. Enregistrement du métal fluide sombre (Dark Fluid)
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

    // 3. Enregistrement de la matière Meow Meow (Meow Meow Matter) et de l'antimatière (Antimatter)
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

## ⚙️ Côté serveur : écriture de recettes personnalisées et de recettes de machines (`server_scripts/`)

Dans l'événement `ServerEvents.recipes`, vous pouvez directement appeler `event.recipes.gtceu` et `event.recipes.gtecore` :

### 1. Recettes de machines de base et de haut fourneau

```javascript
ServerEvents.recipes(event => {
    const gtr = event.recipes.gtceu
    const gte = event.recipes.gtecore

    // Suppression des recettes inefficaces existantes
    event.remove({ input: 'gtceu:raw_platinum' })
    event.remove({ id: 'gtceu:coke_oven/log_to_charcoal' })

    // Recette de four à coke rapide
    gtr.coke_oven('fast_coke_oven')
        .itemInputs('#minecraft:logs_that_burn')
        .itemOutputs('minecraft:charcoal')
        .outputFluids('gtceu:creosote 1000')
        .duration(20)

    // Haut fourneau primitif : 1 fer + 1 charbon -> 5 lingots d'acier (1 tick)
    gtr.primitive_blast_furnace('easy_steel_from_coal')
        .itemInputs('1x minecraft:iron_ingot', '1x minecraft:coal')
        .itemOutputs('5x gtceu:steel_ingot')
        .duration(1)

    // Presse à former pour processeur logique
    gtr.forming_press('gtecore:printed_logic_processor')
        .EUt(26)
        .duration(2 * 20)
        .notConsumable('1x ae2:logic_processor_press')
        .itemInputs('1x minecraft:gold_ingot')
        .itemOutputs('1x ae2:printed_logic_processor')
})
```

### 2. Recettes de machines personnalisées GTECore

```javascript
ServerEvents.recipes(event => {
    const gte = event.recipes.gtecore

    // Recette de production en masse de minerais pour la boîte facile (Easy Box)
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

## ⚡ Commandes de rechargement à chaud en jeu

Sans redémarrer le client, vous pouvez tester vos modifications de scripts en temps réel :

- **Recharger les recettes et les scripts serveur :**
  ```mcfunction
  /kubejs reload server_scripts
  ```
- **Recharger les matériaux et les scripts client :**
  ```mcfunction
  /kubejs reload client_scripts
  ```