# Benutzeroberfläche, Texturen und Blockbench-Artwork-Workflow

Das GTE-Projekt hat eine automatisierte, verlustfreie Pipeline für die Verarbeitung von Kunst-Assets etabliert. Modell-Designer müssen nur **Blockbench** verwenden, um Modelle zu erstellen und sie im Originalverzeichnis zu speichern. Gradle-Aufgaben übernehmen automatisch die Asset-Klassifizierung, Formatvalidierung und inkrementelle Synchronisierung.

---

## 🎨 Kunst-Quelldatei-Verzeichnis (`art_assets/`)

Das `art_assets/`-Verzeichnis im Projektstamm ist das **einzige Arbeitsverzeichnis** für Kunst-Designer und wird streng von Git versioniert:

```
art_assets/
├── *.bbmodel                           # Blockbench-Projektquelldateien (Ebenen und Knochen beibehalten)
├── *.json                              # Von Blockbench exportierte Minecraft-Geometriemodelle
├── *.png                               # Textur-Texturen (Gegenstände / Blockgehäuse / Formations-Texturen)
├── *.png.mcmeta                        # Animations- und Material-Metadaten
└── projectuhv/                         # Unterverzeichnis für spezielle Materialien der High-End-Schaltkreisserie
```

---

## 🏷️ Namenskonventionen und automatische Routing-Regeln

Die Gradle-Aufgabe `syncBlockbenchAssets` verteilt Dateien automatisch anhand von Dateinamen-Schlüsselwörtern an die entsprechenden Ressourcenpfade in `modules/gtecore`:

| Dateityp | Namens-Schlüsselwörter | Automatisches Synchronisierungszielverzeichnis (GTECore) |
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
1. **Automatische Auslösung**: Diese Aufgabe wurde an die Vorstufen von `buildAll`, `copyOutputJars` und dem CI-Build-Prozess angehängt und wird automatisch beim lokalen Kompilieren oder Starten des Spiels ausgeführt, ohne manuelles wiederholtes Kopieren.
2. **Inkrementelle Sicherheit**: Verwendet binäres Streaming-Überschreiben und ergänzt automatisch fehlende übergeordnete Verzeichnisse im Zielressourcenverzeichnis.
3. **Git sauber halten**: `.bbmodel`-Dateien bleiben nur in `art_assets/` als Quellprojekt erhalten; die generierten JAR-Pakete enthalten keine redundanten Blockbench-Projektmetadaten.