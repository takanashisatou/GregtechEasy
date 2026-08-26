# KubeJS-Modding- und Skriptentwicklungsleitfaden

GTE überlässt den Großteil der Materialregistrierung, Rezeptanpassungen und Multi-Mod-Interaktionslogik **KubeJS** (Verzeichnis unter `gte/overrides/kubejs/`).

---

## 📁 Skriptverzeichnisstruktur und Lebenszyklus

```
gte/overrides/kubejs/
├── startup_scripts/     # 【Startskripte】werden in der frühesten Phase des Spiels ausgeführt, um Materialien, Flüssigkeiten, Blöcke und Gegenstände zu registrieren
├── server_scripts/      # 【Serverskripte】werden beim Betreten einer Welt/Verbinden mit einem Server ausgeführt, um Rezepte und Tags zu registrieren/ändern
├── client_scripts/      # 【Clientskripte】werden auf dem Client ausgeführt, um Tooltips, JEI/EMI-Anzeigen zu ändern
└── assets/ & data/      # Statische Lokalisierung, Texturen und Datenpaketdateien
```

---

## 🧪 Startphase: Benutzerdefinierte Materialregistrierung (`startup_scripts/`)

Verwenden Sie `GTCEuStartupEvents.registry('gtceu:material', ...)`, um benutzerdefinierte Elemente und Materialien zu registrieren:

```javascript
GTCEuStartupEvents.registry('gtceu:material', event => {
    // 1. Registriere Unendliches Metall (Infinite)
    event.create('infinite')
        .color(0xed1661)
        .ingot()
        .iconSet(GTMaterialIconSet.DULL)
        .element('Xe')
        .toolStats(new ToolProperty(144, 114, 80000000, 6, [
            GTToolType.AXE, GTToolType.PICKAXE, GTToolType.SWORD, GTToolType.MORTAR
        ]))

    // 2. Registriere Dunkles Flüssigmetall (Dark Fluid)
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

    // 3. Registriere Miau-Miau-Materie (Meow Meow Matter) und Antimaterie (Antimatter)
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

## ⚙️ Serverseite: Benutzerdefinierte Rezepte und Maschinenrezepte schreiben (`server_scripts/`)

Im `ServerEvents.recipes`-Event können Sie direkt `event.recipes.gtceu` und `event.recipes.gtecore` aufrufen:

### 1. Grundlegende Maschinen- und Hochofenrezepte

```javascript
ServerEvents.recipes(event => {
    const gtr = event.recipes.gtceu
    const gte = event.recipes.gtecore

    // Entferne ursprüngliche ineffiziente Rezepte
    event.remove({ input: 'gtceu:raw_platinum' })
    event.remove({ id: 'gtceu:coke_oven/log_to_charcoal' })

    // Schnellkoksofen-Rezept
    gtr.coke_oven('fast_coke_oven')
        .itemInputs('#minecraft:logs_that_burn')
        .itemOutputs('minecraft:charcoal')
        .outputFluids('gtceu:creosote 1000')
        .duration(20)

    // Primitiver Hochofen: 1 Eisen + 1 Kohle -> 5 Stahlbarren (1 Tick)
    gtr.primitive_blast_furnace('easy_steel_from_coal')
        .itemInputs('1x minecraft:iron_ingot', '1x minecraft:coal')
        .itemOutputs('5x gtceu:steel_ingot')
        .duration(1)

    // Formpresse für logischen Prozessor
    gtr.forming_press('gtecore:printed_logic_processor')
        .EUt(26)
        .duration(2 * 20)
        .notConsumable('1x ae2:logic_processor_press')
        .itemInputs('1x minecraft:gold_ingot')
        .itemOutputs('1x ae2:printed_logic_processor')
})
```

### 2. GTECore-Benutzerdefinierte Maschinenrezepte

```javascript
ServerEvents.recipes(event => {
    const gte = event.recipes.gtecore

    // Einfache Box (Easy Box) Massenerz-Ausbeute-Rezept
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

## ⚡ In-Game-Hot-Reload-Befehle

Sie können Skriptänderungen in Echtzeit testen, ohne den Client neu zu starten:

- **Rezepte und Serverskripte neu laden**:
  ```mcfunction
  /kubejs reload server_scripts
  ```
- **Materialien und Clientskripte neu laden**:
  ```mcfunction
  /kubejs reload client_scripts
  ```