# Interface, Textures, and Blockbench Art Workflow

The GTE project has established an automated, zero-loss art asset processing pipeline. Model designers only need to use **Blockbench** to create models and save them in the source directory; Gradle tasks automatically handle asset classification, format validation, and incremental synchronization.

---

## 🎨 Art Source Directory (`art_assets/`)

The `art_assets/` directory at the project root is the **only working directory** for art designers and is strictly version-tracked by Git:

```
art_assets/
├── *.bbmodel                           # Blockbench project source files (preserving layers and bones)
├── *.json                              # Minecraft geometry models exported from Blockbench
├── *.png                               # Texture maps (items / block casings / formation textures)
├── *.png.mcmeta                        # Animation and material metadata
└── projectuhv/                         # Subdirectory for high-tier circuit series materials
```

---

## 🏷️ Naming Conventions and Automatic Routing Rules

The Gradle task `syncBlockbenchAssets` automatically distributes files to the corresponding resource paths in `modules/gtecore` based on file naming keywords:

| File Type | Naming Keywords | Auto-sync Target Directory (GTECore) |
| :--- | :--- | :--- |
| **Item Textures** (`.png`) | `processor`, `string`, `symbol`, `paper`, `wafer`, `chip`, `god`, `rune`, `yin`, `yang` | `src/main/resources/assets/gtecore/textures/item/` |
| **Block Casing Textures** (`.png`) | `casing`, `module`, `concrete`, `coil`, `zhenfa`, `matrix`, `buffer`, `generator`, `machine` | `src/main/resources/assets/gtecore/textures/block/` |
| **Block Models** (`.json`) | `casing`, `module`, `block`, `matrix` | `src/main/resources/assets/gtecore/models/block/` |
| **Item Models** (`.json`) | All other model files (excluding `.bbmodel`) | `src/main/resources/assets/gtecore/models/item/` |

---

## 🔄 One-Click Asset Sync Task (`syncBlockbenchAssets`)

After exporting models or modifying textures, run in the terminal:

```powershell
$env:JAVA_HOME='C:\Users\Ex_Je\.jdks\ms-21.0.11'
.\gradlew.bat syncBlockbenchAssets
```

### Automation Features
1. **Automatic Trigger**: This task is mounted as a prerequisite node in `buildAll`, `copyOutputJars`, and the CI build pipeline. It runs automatically during local compilation or game startup, eliminating the need for manual repeated copying.
2. **Incremental Safety**: Uses binary streaming overwrite and automatically creates missing parent directories in the target resource directory.
3. **Git Cleanliness**: `.bbmodel` files are kept only in `art_assets/` as source projects; the compiled jar packages do not include redundant Blockbench project metadata.