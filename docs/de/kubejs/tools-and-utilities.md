# KubeJS-Werkzeugsatz und Multiblock-Exporter (`/dumpmultiblock`)

GTE integriert in KubeJS-Serverskripten entwicklerspezifische Werkzeuge zur automatisierten Erstellung und Strukturextraktion von Multiblocks, die den Designprozess von Multiblock-Strukturen völlig revolutionieren.

---

## 🪓 Multiblock-Visualisierungs-Exporter (`/dumpmultiblock`)

Beim Entwickeln benutzerdefinierter Multiblocks (sowohl in Java-Code als auch in KubeJS-Skripten) ist das manuelle Schreiben von `FactoryBlockPattern.aisle(...)` aus Dutzenden von Zeichenebenen äußerst zeitaufwendig und fehleranfällig.

GTE integriert den **`/dumpmultiblock`-Holzaxt-Auswahl-Exporter** (`server_scripts/easymultiblock.js`):

```mermaid
graph LR
    A[Holzaxt in der Hand] -->|Linksklick| B[Pos1-Eckpunkt auswählen]
    A -->|Rechtsklick| C[Pos2-Eckpunkt auswählen]
    B & C --> D[/dumpmultiblock im Spiel ausführen]
    D --> E[Konsolen- und Chat-Ausgabe des vollständigen FactoryBlockPattern-Java-Codes]
```

### Verwendungsschritte

1. Wechsle in den Kreativmodus und halte eine **Holzaxt (`minecraft:wooden_axe`)** in der Hand.
2. Baue die vollständige physische Multiblock-Struktur direkt in der Welt gemäß deiner Vorstellung auf (einschließlich Gehäuse, Kammern, Spulen, Hauptcontroller).
3. Klicke mit der Holzaxt **links** auf einen unteren Eckblock der Struktur (Chat zeigt `Pos1 gesetzt: x, y, z`).
4. Klicke mit der Holzaxt **rechts** auf den diagonal gegenüberliegenden oberen Eckblock der Struktur (Chat zeigt `Pos2 gesetzt: x, y, z`).
5. Gib den Befehl im Chat ein:
   ```mcfunction
   /dumpmultiblock
   ```
6. Das Skript scannt automatisch alle Blocktypen im 3D-Begrenzungsrahmen, weist Zeichenzuordnungen zu (`.` für Luft, `A-Z/a-z/0-9` für spezifische Blöcke) und generiert direkt im Hintergrund-Log und im Client den Strukturcode:

```java
// Automatisch exportierte FactoryBlockPattern-Vorlage
.pattern(definition -> FactoryBlockPattern.start()
    .aisle("BBB", "BBB", "BBB")
    .aisle("BBB", "BAB", "BBB")
    .aisle("BBB", "B#B", "BBB")
    .where('A', Predicates.blocks("minecraft:air"))
    .where('#', Predicates.controller(Predicates.blocks(definition.getBlock())))
    .where('B', Predicates.blocks("gtceu:steam_machine_casing").or(Predicates.autoAbilities(definition.getRecipeTypes())))
    .build()
)
```

---

## 🌌 Dimensionsgas- und Flüssigkeitserz-Konfiguration

GTE erweitert die Sammlung von Flüssigkeiten und Gasen über alle Dimensionen hinweg durch KubeJS:

### 1. Dimensionsweite Gasextraktion (`dimension_gas.js`)
Mit der großen Gassammelkammer (`gas_collector`) und verschiedenen Schaltkreisnummern kann in jeder Dimension die spezifische Atmosphäre dieser Dimension extrahiert werden:
- **Oberwelt-Luft**: `circuit(4)` ➜ Ausgabe `gtceu:air 10000`
- **Nether-Höllenluft**: `circuit(5)` ➜ Ausgabe `gtceu:nether_air 10000`
- **End-Void-Luft**: `circuit(6)` ➜ Ausgabe `gtceu:ender_air 10000`

### 2. Universal-Schaltkreis-Konverter (`universal_circuit.js`)
Um die komplexen Rezeptstapelungen von Schaltkreisen über Mods und verschiedene Stufen hinweg zu lösen, führt GTE das **Universal-Schaltkreis (`universal_circuit`)**-System ein:
- Ermöglicht es, im Packer (`packer`) beliebige Schaltkreise derselben Spannungsstufe (ULV bis MAX) mit **1 EU / 1 tick** verlustfrei in ein einheitliches Universal-Schaltkreis-Item umzuwandeln.