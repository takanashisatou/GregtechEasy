# Interface, textures et workflow artistique Blockbench

L'ingénierie GTE a établi un pipeline de traitement des assets artistiques automatisé et sans perte. Les concepteurs de modèles n'ont qu'à utiliser **Blockbench** pour créer des modèles et les enregistrer dans le répertoire source ; les tâches Gradle effectuent automatiquement la classification des assets, la validation du format et la synchronisation incrémentale.

---

## 🎨 Répertoire des fichiers sources artistiques (`art_assets/`)

Le répertoire `art_assets/` à la racine du projet est le **répertoire de travail unique** des concepteurs artistiques, strictement suivi par Git :

```
art_assets/
├── *.bbmodel                           # Fichiers sources du projet Blockbench (calques et os conservés)
├── *.json                              # Modèles géométriques Minecraft exportés depuis Blockbench
├── *.png                               # Textures (objets / boîtiers de blocs / textures de formations)
├── *.png.mcmeta                        # Métadonnées d'animation et de matériaux
└── projectuhv/                         # Sous-répertoire dédié aux matériaux de la série de circuits haute tension
```

---

## 🏷️ Conventions de nommage et règles de routage automatique

La tâche Gradle `syncBlockbenchAssets` distribue automatiquement les fichiers vers les chemins de ressources correspondants dans `modules/gtecore`, en fonction des mots-clés dans les noms de fichiers :

| Type de fichier | Mots-clés dans le nom | Répertoire cible de synchronisation automatique (GTECore) |
| :--- | :--- | :--- |
| **Textures d'objets** (`.png`) | `processor`, `string`, `symbol`, `paper`, `wafer`, `chip`, `god`, `rune`, `yin`, `yang` | `src/main/resources/assets/gtecore/textures/item/` |
| **Textures de boîtiers de blocs** (`.png`) | `casing`, `module`, `concrete`, `coil`, `zhenfa`, `matrix`, `buffer`, `generator`, `machine` | `src/main/resources/assets/gtecore/textures/block/` |
| **Modèles de blocs** (`.json`) | `casing`, `module`, `block`, `matrix` | `src/main/resources/assets/gtecore/models/block/` |
| **Modèles d'objets** (`.json`) | Tous les autres fichiers de modèles (à l'exclusion des `.bbmodel`) | `src/main/resources/assets/gtecore/models/item/` |

---

## 🔄 Tâche de synchronisation des assets en un clic (`syncBlockbenchAssets`)

Après avoir exporté un modèle ou modifié une texture, exécutez dans le terminal :

```powershell
$env:JAVA_HOME='C:\Users\Ex_Je\.jdks\ms-21.0.11'
.\gradlew.bat syncBlockbenchAssets
```

### Caractéristiques d'automatisation
1. **Déclenchement automatique** : Cette tâche est montée en nœud préalable aux flux `buildAll`, `copyOutputJars` et au pipeline CI. Elle s'exécute automatiquement lors de la compilation locale ou du lancement du jeu, sans copie manuelle répétée.
2. **Sécurité incrémentale** : Utilise un écrasement en flux binaire et complète automatiquement les répertoires parents manquants dans le répertoire de ressources cible.
3. **Maintien de la propreté Git** : Les fichiers `.bbmodel` ne sont conservés que dans `art_assets/` en tant que projet source ; le jar compilé ne contient pas de métadonnées de projet Blockbench redondantes.