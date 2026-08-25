# UI, Textures & Blockbench Asset Workflow

The GTE project features an automated, zero-loss art asset processing pipeline. 3D modelers and texture artists work strictly within the source asset directory using **Blockbench**, while Gradle handles asset classification, validation, and incremental synchronization.

---

## 🎨 Source Assets Directory (`art_assets/`)

The `art_assets/` directory at the repository root is the **single source of truth for all artwork**, tracked under Git version control:

```
art_assets/
├── *.bbmodel                           # Blockbench source projects (layers & bones)
├── *.json                              # Exported Minecraft Java block/item models
├── *.png                               # Texture maps (items / casings / formations)
├── *.png.mcmeta                        # Animation frames & texture metadata
└── projectuhv/                         # Dedicated asset subfolder for high-tier circuits
```

---

## 🏷️ Naming Conventions & Auto-Routing Rules

The Gradle task `syncBlockbenchAssets` inspects file names and dispatches files into their respective `modules/gtecore` resource directories:

| Asset Type | Matching Keywords | Destination Path (GTECore) |
| :--- | :--- | :--- |
| **Item Textures** (`.png`) | `processor`, `string`, `symbol`, `paper`, `wafer`, `chip`, `god`, `rune`, `yin`, `yang` | `src/main/resources/assets/gtecore/textures/item/` |
| **Block / Casing Textures** (`.png`) | `casing`, `module`, `concrete`, `coil`, `zhenfa`, `matrix`, `buffer`, `generator`, `machine` | `src/main/resources/assets/gtecore/textures/block/` |
| **Block Models** (`.json`) | `casing`, `module`, `block`, `matrix` | `src/main/resources/assets/gtecore/models/block/` |
| **Item Models** (`.json`) | All other models (excluding `.bbmodel`) | `src/main/resources/assets/gtecore/models/item/` |

---

## 🔄 One-Click Art Synchronization (`syncBlockbenchAssets`)

After exporting models or updating textures from Blockbench, execute:

```powershell
$env:JAVA_HOME='C:\Users\Ex_Je\.jdks\ms-21.0.11'
.\gradlew.bat syncBlockbenchAssets
```

### Automation Highlights
1. **Lifecycle Hooks**: Automatically invoked before `buildAll`, `copyOutputJars`, and CI builds; ensures changes take effect without manual copying.
2. **Streamlined Packaging**: `.bbmodel` source files remain safely versioned in `art_assets/` without bloating production mod jars.
3. **Directory Preservation**: Creates missing parent directories dynamically upon detection.
