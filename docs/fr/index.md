# Documentation officielle de GregTech Easy (GTE)

Bienvenue dans le guide complet officiel du pack de mods **GregTech Easy (GTE)** !

GTE est un pack de mods moderne pour Minecraft 1.20.1, conçu autour des principes **« simple, amusant, intéressant, et rapide »**.

---

## ⚡ Index de navigation rapide

<div class="grid cards" markdown>

-   :material-download: __[Guide du joueur et du pack](download-and-play/lazy-pack.md)__

    ---

    Téléchargez le **pack complet prêt à l'emploi sans compilation**, le pack standard CurseForge et le serveur, et apprenez à configurer l'environnement d'exécution **Java 21** et à importer le lanceur.

    [:octicons-arrow-right-24: Aller directement](download-and-play/lazy-pack.md)

-   :material-chip: __[Détails du mod principal GTECore](gtecore/overview.md)__

    ---

    Découvrez en profondeur le **Fourneau de raffinage Yin-Yang Bagua**, les **Formations des Quatre Symboles**, le **Centre de traitement du minerai**, l'**Anneau des Merveilles**, les **Circuits Supercordes et Yin-Yang**, le **AE2 Sample Assembly Plus**, et bien plus encore.

    [:octicons-arrow-right-24: Aller directement](gtecore/overview.md)

-   :material-cog: __[Branche du mod GTM Reborn](gtm-reborn/index.md)__

    ---

    Découvrez les recettes multi-ampères, le mode traitement par lots, l'overclocking 1t Subtick, les tests automatisés GameTest et les fonctionnalités de sortie de fluide par intervalles apportées par la branche `satou`.

    [:octicons-arrow-right-24: Aller directement](gtm-reborn/index.md)

-   :material-code-tags: __[KubeJS et outils de développement](kubejs/scripting-guide.md)__

    ---

    Apprenez à enregistrer des matériaux, écrire des recettes dans KubeJS, et utilisez l'outil intégré `/dumpmultiblock` (hache en bois) pour sélectionner et exporter en un clic le code de structure multi-bloc.

    [:octicons-arrow-right-24: Aller directement](kubejs/scripting-guide.md)

-   :material-hammer-wrench: __[Manuel pratique pour développeurs et anti-crash](development/quick-start.md)__

    ---

    Maîtrisez le lancement en quelques secondes sans lanceur avec `run_game.bat`, le mappage de répertoire sans copie avec `link_to_launcher.bat`, et les règles d'or pour éviter les crashs Mixin Accessor.

    [:octicons-arrow-right-24: Aller directement](development/quick-start.md)

-   :material-robot: __[Pipeline CI/CD et traduction IA](ci-cd-and-translation/ci-pipeline.md)__

    ---

    Découvrez la construction parallèle automatisée multi-modules basée sur GitHub Actions, l'empaquetage Packwiz, la publication Maven et le script d'internationalisation IA `opencode_translate.py`.

    [:octicons-arrow-right-24: Aller directement](ci-cd-and-translation/ci-pipeline.md)

</div>

---

## 🛠️ Informations de base du projet

| Élément de configuration | Description |
| :--- | :--- |
| **Nom du projet** | `GregtechEasy` (`gte-multi`) |
| **Chaîne d'outils d'exécution et de compilation** | **JDK 21** (Toolchain Java 21 obligatoire, strictement unifié pour tous les sous-modules) |
| **Version du jeu** | Minecraft `1.20.1` (Forge `47.3.0` / `47.4.4`) |
| **Licence open source** | LGPL-3.0 / MIT |
| **Branche par défaut** | Dépôt principal `main` / `master`, GTM-Reborn `satou`, GT-- `kotlin`, GTECore `master` |