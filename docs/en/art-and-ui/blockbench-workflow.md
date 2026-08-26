# UI, Textures, and Blockbench Art Workflow

The GTE project has established an automated, zero-loss art asset processing pipeline. Model designers only need to create models using **Blockbench** and save them in the source directory; Gradle tasks automatically handle asset classification, format validation, and incremental synchronization.

---

## 🎨 Art Source Directory (`art_assets/`)

The `art_assets/` directory at the project root is the **sole working directory** for art designers and is strictly version-tracked by Git:

```
art_assets/
├── *.bbmodel                           # Blockbench project source files (preserving layers and bones)
├── *.json                              # Minecraft geometry models exported from Blockbench
├── *.png                               # Texture maps (items / block casings / formation textures)
├── *.png.mcmeta                        # Animation and material metadata
└── projectuhv/                         # Dedicated texture subdirectory for the high-tier circuit series
```

---

## 🏷️ Naming Conventions and Automatic Routing Rules

The Gradle task `syncBlockbenchAssets` automatically distributes files to the corresponding resource paths in `modules/gtecore` based on naming keywords in the file names:

| File Type | Naming Keywords | Automatic Sync Target Directory (GTECore) |
| :--- | :--- | :--- |
| **Item Textures** (`.png`) | `processor`, `string`, `symbol`, `paper`, `wafer`, `chip`, `god`, `rune`, `yin`, `yang` | `src/main/resources/assets/gtecore/textures/item/` |
| **Block Casing Textures** (`.png`) | `casing`, `module`, `concrete`, `coil`, `zhenfa`, `matrix`, `buffer`, `generator`, `machine` | `src/main/resources/assets/gtecore/textures/block/` |
| **Block Models** (`.json`) | `casing`, `module`, `block`, `matrix` | `src/main/resources/assets/gtecore/models/block/` |
| **Item Models** (`.json`) | All other model files (excluding `.bbmodel`) | `src/main/resources/assets/gtecore/models/item/` |

---

## 🔄 One-Click Asset Sync Task (`syncBlockbenchAssets`)

After exporting models or modifying textures, run the following in the terminal:

```powershell
$env:JAVA_HOME='C:\Users\Ex_Je\.jdks\ms-21.0.11'
.\gradlew.bat syncBlockbenchAssets
```

### Automation Features
1. **Automatic Trigger**: This task is hooked into the prerequisite nodes of `buildAll`, `copyOutputJars`, and the CI build pipeline. It executes automatically during local compilation or game startup, eliminating the need for manual repeated copying.
2. **Incremental Safety**: Uses binary streaming overwrite and automatically creates any missing parent directories in the target resource directory.
3. **Keeps Git Clean**: `.bbmodel` files are retained only in `art_assets/` as source projects; the compiled jar packages will not contain redundant Blockbench project metadata.

<<<<<FILE_END: art-and-ui/blockbench-workflow.md>>>>