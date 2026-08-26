# Interface, textures et flux de travail artistique Blockbench

Le projet GTE a établi un pipeline automatisé de traitement des actifs artistiques sans perte. Les concepteurs de modèles n'ont qu'à utiliser **Blockbench** pour créer des modèles et les enregistrer dans le répertoire source, et les tâches Gradle automatisent la classification des actifs, la validation du format et la synchronisation incrémentale.

---

## 🎨 Répertoire des fichiers sources artistiques (`art_assets/`)

Le répertoire `art_assets/` à la racine du projet est le **répertoire de travail unique** des concepteurs artistiques, strictement suivi par Git :

```
art_assets/
├── *.bbmodel                           # Fichiers sources du projet Blockbench (conservant les calques et les os)
├── *.json                              # Modèles géométriques Minecraft exportés depuis Blockbench
├── *.png                               # Textures (objets / boîtiers de blocs / textures de formation)
├── *.png.mcmeta                        # Métadonnées d'animation et de matériaux
└── projectuhv/                         # Sous-répertoire dédié aux matériaux de la série de circuits avancés
```

---

## 🏷️ Règles de nommage et de routage automatique

La tâche Gradle `syncBlockbenchAssets` distribue automatiquement les fichiers vers les chemins de ressources correspondants dans `modules/gtecore` en fonction des mots-clés de nommage des fichiers :

| Type de fichier | Mots-clés de nommage | Répertoire cible de synchronisation automatique (GTECore) |
| :--- | :--- | :--- |
| **Textures d'objets** (`.png`) | `processor`, `string`, `symbol`, `paper`, `wafer`, `chip`, `god`, `rune`, `yin`, `yang` | `src/main/resources/assets/gtecore/textures/item/` |
| **Textures de boîtiers de blocs** (`.png`) | `casing`, `module`, `concrete`, `coil`, `zhenfa`, `matrix`, `buffer`, `generator`, `machine` | `src/main/resources/assets/gtecore/textures/block/` |
| **Modèles de blocs** (`.json`) | `casing`, `module`, `block`, `matrix` | `src/main/resources/assets/gtecore/models/block/` |
| **Modèles d'objets** (`.json`) | tous les autres fichiers de modèles (à l'exclusion de `.bbmodel`) | `src/main/resources/assets/gtecore/models/item/` |

---

## 🔄 Tâche de synchronisation des actifs en un clic (`syncBlockbenchAssets`)

Après avoir exporté des modèles ou modifié des textures, exécutez dans le terminal :

```powershell
$env:JAVA_HOME='C:\Users\Ex_Je\.jdks\ms-21.0.11'
.\gradlew.bat syncBlockbenchAssets
```

### Caractéristiques d'automatisation
1. **Déclenchement automatique** : cette tâche est montée sur les nœuds préalables de `buildAll`, `copyOutputJars` et du pipeline de construction CI, elle s'exécute automatiquement lors de la compilation locale ou du lancement du jeu, sans avoir à copier manuellement à plusieurs reprises.
2. **Sécurité incrémentale** : utilise l'écrasement en flux binaire, complète automatiquement les répertoires parents manquants dans le répertoire de ressources cible.
3. **Maintien de la propreté Git** : `.bbmodel` n'est conservé que dans `art_assets/` comme projet source, le jar généré par la compilation ne contient pas de métadonnées de projet Blockbench redondantes.