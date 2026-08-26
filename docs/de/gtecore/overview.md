# GTECore Kernmodul Übersicht

**GTECore** ist das maßgeschneiderte Java-Kernmodul des GregTech Easy Projekts. Es basiert direkt auf dem Quellcode von `gtm-reborn` und erweitert großflächige multiblockindustrielle Strukturen, hochstufige Formationstechnologie, tiefe AE2-Interaktionen sowie ein superintegriertes Schaltkreisherstellungssystem.

---

## 🏛️ Modularchitektur und Designausrichtung

```mermaid
graph TD
    A[GTM-Reborn Basis-Framework] --> B[GTECore Kernmodul]
    B --> C[Östliche Mystische Industrie: Yin-Yang-Bagua-Alchemieofen / Vier-Symbole-Formation / Taiji-Fünf-Elemente]
    B --> D[Industrielle Extreme Optimierung: Wunderring / Erz-Komplexverarbeitung / Universeller Kraftstoffmotor]
    B --> E[AE2 Tiefenerweiterung: ME-Vorlagenmonteur Plus & Spiegel / ME-Dampfspeicher]
    B --> F[Hyperdimensionale Schaltkreissysteme: Superstring-Schaltkreissystem / Yin-Yang-Schaltkreissystem]
    B --> G[Automatisierung & Entwicklung: Jade Echtzeit-Integration / Strukturprüfungsterminal / Datagen Internationalisierung]
```

---

## 📦 Kreativmodus-Inventar und Kategorien

GTECore registriert im Spiel einen eigenen Kreativmodus-Tab:

1. **GregTech Easy Maschinen (`itemGroup.gtecore.gtecore_machines`)**:
   - Enthält alle GTE-originalen Multiblock-Hauptblöcke (Yin-Yang-Bagua-Hochofen, Wunderring, Erzverarbeitungszentrum, Chemie-Terminator usw.).
   - Enthält mehrstufige Super-Batterieboxen (Max Super Battery Buffer), ME-Dampfspeicher, ME-Vorlagenmonteur Plus und Spiegel.
2. **GregTech Easy Gegenstände (`itemGroup.gtecore.gtecore_items`)**:
   - Enthält Superstring- und Yin-Yang-Schaltkreisgegenstände (Prozessoren, Cluster, Supercomputer, Hosts).
   - Enthält spezielle Werkzeuge wie Fünf-Elemente-Talismane, Bagua-Chips, Sanqing-Partikel, Strukturprüfungsterminal usw.

---

## ⚙️ Modulglobale Konfiguration (`GTEConfig`)

GTECore bietet umfangreiche Konfigurationsoptionen im Spiel und in Dateien (unter `config/gtecore-common.toml` oder im Spielkonfigurationsmenü):

| Konfigurationsoption | Standardwert | Detaillierte Beschreibung |
| :--- | :--- | :--- |
| `superPeace` (Super-Friedensmodus) | `false` | Wenn aktiviert, wird die Erzeugung feindlicher Kreaturen vollständig deaktiviert, was eine absolut reine Umgebung für den Technologiebau bietet |
| `durationMultiplier` (Rezeptzeit-Multiplikator) | `1.0` | Passt global den Zeitmultiplikator für GTECore-eigene Rezepte an |

---

## 🔍 Jade / TOP Native Integration

GTECore enthält eingebaute Unterstützung für das **`GTEJadePlugin`**-Plugin:
- **ME-Vorlagenmonteur Plus Status**: Zeigt in Echtzeit die Anzahl der gebundenen Vorlagen sowie die Fluid- und Gegenstandsausgabemodi an.
- **ME-Vorlagenmonteur Spiegel Plus Bindungsinformationen**: Zeigt beim Überfahren direkt die Koordinaten `(X, Y, Z)` des gebundenen Hauptmonteurs sowie den Netzwerkverbindungsstatus an.
- **Formationsaktivierungsanzeige**: Zeigt am Yin-Yang-Bagua-Alchemieofen in Echtzeit den Bereitschaftsstatus der Vier-Symbole-Formationen (Azurdrache, Weißer Tiger, Purpurvogel, Schwarze Schildkröte) an.

---

## 🛠️ Strukturprüfungsterminal (`Structure Testing Terminal`)

GTECore bietet ein spezielles Handwerkzeug – das **Strukturprüfungsterminal** (`item.gtecore.check_structure_terminal`):
- **Rechtsklick auf Multiblock-Controller**: Scannt in Echtzeit die strukturelle Integrität.
- **Fehlerdiagnosehinweise**: Wenn die Struktur nicht geformt ist, zeigt das Terminal im Chat und im Tooltip präzise die **fehlerhaften Blockkoordinaten und unzulässigen Positionen** an, was den Bau und die Fehlersuche großer Multiblöcke erheblich beschleunigt.