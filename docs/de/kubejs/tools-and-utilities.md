# KubeJS-Werkzeugsatz und Multiblock-Exporter (`/dumpmultiblock`)

GTE bietet in KubeJS-Serverskripten spezielle Werkzeuge für Entwickler zur automatisierten Erstellung und Strukturextraktion von Multiblöcken, die den Designprozess von Multiblockstrukturen völlig revolutionieren.

---

## 🪓 Multiblock-Visualisierungs-Exporter (`/dumpmultiblock`)

Beim Entwickeln benutzerdefinierter Multiblöcke (sei es in Java-Code oder KubeJS-Skripten) ist das manuelle Schreiben von `FactoryBlockPattern.aisle(...)` mit Dutzenden von Zeichenebenen äußerst zeitaufwendig und fehleranfällig.

GTE enthält einen **`/dumpmultiblock` Holzaxt-Auswahl-Exporter** (`server_scripts/easymultiblock.js`):

```mermaid
graph LR
    A[Holzaxt halten] -->|Linksklick| B[Pos1-Eckpunkt auswählen]
    A -->|Rechtsklick| C[Pos2-Eckpunkt auswählen]
    B & C --> D[/dumpmultiblock im Spiel ausführen]
    D --> E[Vollständigen FactoryBlockPattern-Java-Code in Konsole und Chat ausgeben]
```

### Verwendungsschritte

1. Wechsle in den Kreativmodus und halte eine **Holzaxt (`minecraft:wooden_axe`)** in der Hand.
2. Baue die vollständige physische Multiblockstruktur gemäß deiner Vorstellung in der Welt auf (einschließlich Gehäuse, Kammern, Spulen, Hauptcontroller).
3. Klicke mit der Holzaxt **links** auf einen unteren Eckblock der Struktur (Chat zeigt `Pos1 gesetzt: x, y, z`).
4. Klicke mit der Holzaxt **rechts** auf den diagonal gegenüberliegenden oberen Eckblock (Chat zeigt `Pos2 gesetzt: x, y, z`).
5. Gib im Chat den Befehl ein:
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

GTE erweitert die Sammlung von Flüssigkeiten und Gasen über alle Dimensionen durch KubeJS:

### 1. Dimensionsweite Gasextraktion (`dimension_gas.js`)
Mit der großen Gassammelkammer (`gas_collector`) und verschiedenen Schaltkreisnummern kann die für die Dimension spezifische Atmosphäre extrahiert werden:
- **Oberwelt-Luft**: `circuit(4)` ➜ Ausgabe `gtceu:air 10000`
- **Nether-Höllenluft**: `circuit(5)` ➜ Ausgabe `gtceu:nether_air 10000`
- **End-Void-Luft**: `circuit(6)` ➜ Ausgabe `gtceu:ender_air 10000`

### 2. Universeller Schaltkreis-Konverter (`universal_circuit.js`)
Um die komplexen Rezeptstapel für schaltkreisbasierte Gegenstände über Mods und Spannungsstufen hinweg zu lösen, führt GTE das **Universalschaltkreis (`universal_circuit`)**-System ein:
- Es erlaubt, in der Packmaschine (`packer`) beliebige Schaltkreise derselben Spannungsstufe (von ULV bis MAX) mit **1 EU / 1 Tick** verlustfrei in ein einheitliches Universalschaltkreis-Item umzuwandeln.