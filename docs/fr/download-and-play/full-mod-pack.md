# Guide de téléchargement du pack et du pack client complet

GTE (GregTech Easy) propose trois formats de livraison pour les joueurs et les administrateurs de serveurs de différents niveaux techniques :

1. **Pack au format CurseForge (`GTE-CurseForge-*.zip`)** : le format d'import standard des lanceurs. Il contient un `manifest.json` et les mods se trouvent dans `overrides/mods/` ; le lanceur installe Forge automatiquement. **C'est l'option recommandée pour la plupart des joueurs.**
2. **Pack client complet (`GTE-FullMod-*.zip`)** : une archive plate ne contenant que le contenu du jeu au niveau racine, pour les joueurs qui configurent eux-mêmes leur instance.
3. **Pack serveur (`GTE-Server-*.zip`)** : pack serveur dédié Forge, avec `mods/` à la racine de l'archive, pour ouvrir un serveur multijoueur.

---

## 📦 Pack client complet

### Structure de l'archive

```text
README_安装必看.txt
mods/            (17 JAR)
config/
defaultconfigs/
kubejs/
```

Il n'y a pas de répertoire `.minecraft/` imbriqué, aucun lanceur fourni et pas de `run_game.bat`. Minecraft et Forge sont installés par votre lanceur : ce pack suppose donc que **vous savez déjà créer une instance dans un lanceur**.

### Exigences strictes d'environnement

| Élément | Version | Remarque |
| :--- | :--- | :--- |
| **Minecraft** | `1.20.1` | Aucune autre version n'est acceptée |
| **Forge** | `47.4.1` | Doit être exactement cette version |
| **Java** | `21` | N'utilisez jamais Java 17 ou Java 8 |

> [!CAUTION]
> **Forge doit être en 47.4.1, et non « 47.4.1 ou toute version supérieure ».**
> - Le mod `gtmthings` exige Forge `[47.4.1,)`, donc toute version inférieure ne se chargera pas ;
> - mais Forge 47.4.10 embarque ASM 9.8 + coremods 5.2.4, ce qui casse les mixins d'`appliedenergistics2` 15.4.9 et le jeu n'atteint jamais le menu principal.
>
> 47.4.1 est la seule version exploitable.

### Étapes d'installation

=== "Méthode 1 : configurer l'instance soi-même (ce pack)"

    1. Dans votre lanceur (PCL2 / HMCL / Prism / MultiMC / lanceur officiel, tous conviennent), créez une instance Minecraft **1.20.1** et installez **Forge 47.4.1**.
    2. Lancez-la une fois et vérifiez que vous atteignez le menu principal (cela élimine les problèmes de lanceur et de Java).
    3. Ouvrez le répertoire de jeu de cette instance (le dossier `.minecraft` ; les lanceurs disposent généralement d'un bouton « ouvrir le dossier »).
    4. Extrayez le contenu de `GTE-FullMod-<version>.zip` dedans, en fusionnant avec les dossiers existants du même nom.
    5. Dans les paramètres de l'instance, définissez Java sur **Java 21** et allouez **8 Go à 12 Go** de mémoire.
    6. Démarrez le jeu. Le premier lancement génère les configurations et est plus lent que d'habitude.

=== "Méthode 2 : import en un clic dans le lanceur (recommandé)"

    Utilisez plutôt `GTE-CurseForge-<version>.zip` et choisissez **importer un modpack** dans CurseForge App / PCL2 / HMCL / Prism Launcher / MultiMC. Ce pack contient un `manifest.json` : le lanceur installe Forge pour vous, aucune configuration manuelle n'est nécessaire.

=== "Méthode 3 : ouvrir un serveur"

    Utilisez plutôt `GTE-Server-<version>.zip` ; son dossier `mods/` se trouve à la racine de l'archive. Extrayez-le dans le répertoire racine du serveur, exécutez `java -jar forge-*-installer.jar --installServer`, puis démarrez avec `@libraries/net/minecraftforge/forge/1.20.1-47.4.1/unix_args.txt nogui`.

> [!WARNING]
> Les JAR dont le nom se termine par `-slim.jar` ou `-dev-slim.jar` sont des artefacts destinés aux utilisateurs Maven, qui n'embarquent volontairement aucune dépendance jar-in-jar, et ne doivent **jamais** être placés dans `mods/`. Forge choisirait alors une version de `gtceu` sans `ldlib` embarqué et s'arrêterait avec `Missing or unsupported mandatory dependencies: Mod ID: 'ldlib' ... [MISSING]`. Aucun des trois packs livrés ne contient de tels fichiers.

---

## ⚠️ Exigence d'environnement d'exécution Java 21 (extrêmement important)

> [!CAUTION]
> **Ce pack exige impérativement un environnement d'exécution Java 21 (JDK 21) !**
> N'utilisez surtout pas **Java 17** ou **Java 8**, sinon le jeu plantera immédiatement ou refusera de démarrer !

### Pourquoi Java 21 est-il obligatoire ?
- Les mods principaux de GTE (`gtecore`, `gtm-reborn`, `gt--`) utilisent pleinement les **fonctionnalités modernes du langage Java 21** (comme les Record Patterns, les Virtual Threads, le Switch amélioré).
- Les scripts de construction Gradle configurent globalement `JavaLanguageVersion.of(21)` pour forcer la vérification de la chaîne d'outils.

### Adresses de téléchargement recommandées pour JDK 21

| Distribution | Lien de téléchargement | Raison de la recommandation |
| :--- | :--- | :--- |
| **Azul Zulu 21 (LTS)** | [Cliquez pour aller sur le site d'Azul](https://www.azul.com/downloads/?version=java-21-lts) | Performances excellentes, optimisation idéale pour le multithreading à grande échelle de Minecraft |
| **Eclipse Temurin 21 (LTS)** | [Cliquez pour aller sur le site d'Adoptium](https://adoptium.net/temurin/releases/?version=21) | Recommandation officielle, haute compatibilité et stabilité |
| **Microsoft OpenJDK 21** | [Cliquez pour aller sur le site de Microsoft](https://learn.microsoft.com/zh-cn/java/openjdk/download) | Bonne adaptation native à la plateforme Windows |

### Configuration de Java 21 dans le lanceur

```mermaid
graph LR
    A[Créer une instance 1.20.1] --> B[Installer Forge 47.4.1]
    B --> C[Chemin Java / Runtime]
    C --> D[Sélectionner le javaw.exe du JDK 21 installé]
    D --> E[Allouer 8192 Mo à 12288 Mo de mémoire]
    E --> F[Extraire GTE-FullMod et démarrer le jeu]
```

---

## 🎮 Raccourcis clavier et commandes courantes dans le jeu

| Commande / Raccourci | Description | Exigence de permission |
| :--- | :--- | :--- |
| `/ftbquests editing_mode true` | Activer le mode d'édition visuelle du livre de quêtes (mode auteur) | Permission OP |
| `/ftbquests reload` | Recharger à chaud les fichiers de configuration du livre de quêtes FTB Quests | Tout le monde |
| `/kubejs reload server_scripts` | Recharger à chaud les scripts de modification côté serveur et les recettes | Permission OP |
| `/kubejs reload client_scripts` | Recharger à chaud les scripts de modification côté client et la logique d'affichage | Aucune permission requise |
| `/dumpmultiblock` | Exporter en un clic le code de structure multi-bloc après avoir sélectionné une zone avec la hache en bois | Permission OP |
| <kbd>U</kbd> / <kbd>R</kbd> | Afficher l'utilisation (Usage) / la recette (Recipe) de l'élément sous le curseur | Raccourcis EMI / JEI |
| <kbd>F7</kbd> | Afficher le niveau de lumière environnant (croix rouge indiquant les zones d'apparition des monstres) | Raccourci client |
