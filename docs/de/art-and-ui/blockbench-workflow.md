# Benutzeroberfläche, Texturen und Blockbench-Artwork-Workflow

Das GTE-Projekt hat eine automatisierte, verlustfreie Asset-Verarbeitungspipeline etabliert. Modelldesigner müssen lediglich Modelle mit **Blockbench** erstellen und im Quellverzeichnis speichern. Gradle-Aufgaben übernehmen automatisch die Asset-Klassifizierung, Formatvalidierung und inkrementelle Synchronisierung.

---

## 🎨 Kunst-Quellverzeichnis (`art_assets/`)

Das `art_assets/`-Verzeichnis im Projektstamm ist das **einzige Arbeitsverzeichnis** für Kunstdesigner und wird streng von Git versioniert:

```
art_assets/
├── *.bbmodel                           # Blockbench-Projektquelldateien (Ebenen und Knochen bleiben erhalten)
├── *.json                              # Von Blockbench exportierte Minecraft-Geometriemodelle
├── *.png                               # Textur-Texturen (Gegenstände / Blockgehäuse / Array-Texturen)
├── *.png.mcmeta                        # Animations- und Material-Metadaten
└── projectuhv/                         # Unterverzeichnis für spezielle Texturen der Hochspannungs-Schaltkreisserie
```

---

## 🏷️ Namenskonventionen und automatische Routing-Regeln

Die Gradle-Aufgabe `syncBlockbenchAssets` verteilt Dateien basierend auf Namensschlüsselwörtern automatisch an die entsprechenden Ressourcenpfade in `modules/gtecore`:

| Dateityp | Namensschlüsselwörter | Automatisches Synchronisierungsziel (GTECore) |
| :--- | :--- | :--- |
| **Gegenstandstexturen** (`.png`) | `processor`, `string`, `symbol`, `paper`, `wafer`, `chip`, `god`, `rune`, `yin`, `yang` | `src/main/resources/assets/gtecore/textures/item/` |
| **Blockgehäuse-Texturen** (`.png`) | `casing`, `module`, `concrete`, `coil`, `zhenfa`, `matrix`, `buffer`, `generator`, `machine` | `src/main/resources/assets/gtecore/textures/block/` |
| **Blockmodelle** (`.json`) | `casing`, `module`, `block`, `matrix` | `src/main/resources/assets/gtecore/models/block/` |
| **Gegenstandsmodelle** (`.json`) | Alle übrigen Modelldateien (außer `.bbmodel`) | `src/main/resources/assets/gtecore/models/item/` |

---

## 🔄 Ein-Klick-Asset-Synchronisierungsaufgabe (`syncBlockbenchAssets`)

Nach dem Exportieren von Modellen oder dem Ändern von Texturen führen Sie im Terminal aus:

```powershell
$env:JAVA_HOME='C:\Users\Ex_Je\.jdks\ms-21.0.11'
.\gradlew.bat syncBlockbenchAssets
```

### Automatisierungsfunktionen
1. **Automatische Auslösung**: Diese Aufgabe ist an die Vorstufen von `buildAll`, `copyOutputJars` und den CI-Build-Prozess angehängt. Sie wird automatisch beim lokalen Kompilieren oder Starten des Spiels ausgeführt, ohne manuelles Kopieren.
2. **Inkrementelle Sicherheit**: Verwendet binäres Streaming-Überschreiben und ergänzt automatisch fehlende übergeordnete Verzeichnisse im Zielressourcenverzeichnis.
3. **Git sauber halten**: `.bbmodel`-Dateien bleiben nur in `art_assets/` als Quellprojekt erhalten. Die generierten JAR-Pakete enthalten keine redundanten Blockbench-Projektmetadaten.