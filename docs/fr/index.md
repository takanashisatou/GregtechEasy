# Documentation officielle de GregTech Easy (GTE)

Bienvenue dans le guide complet officiel du pack d'intégration **GregTech Easy (GTE)** !

GTE est un pack d'intégration moderne pour Minecraft 1.20.1, conçu autour des principes **« Simple, Amusant, Intéressant, Rapide »**.

---

## ⚡ Index de navigation rapide

<div class="grid cards" markdown>

-   :material-download: __[Guide du joueur et du pack d'intégration](download-and-play/lazy-pack.md)__

    ---

    Téléchargez le **pack clé-en-main complet sans compilation**, le pack standard CurseForge et le serveur, et découvrez la configuration de l'environnement d'exécution **Java 21** et les tutoriels d'importation pour lanceurs.

    [:octicons-arrow-right-24: Aller sur la page](download-and-play/lazy-pack.md)

-   :material-chip: __[Guide détaillé du mod principal GTECore](gtecore/overview.md)__

    ---

    Explorez en profondeur le **Four de raffinage Yin-Yang Bagua**, les **Formations des Quatre Symboles**, le **Centre de traitement du minerai**, l'**Anneau des Merveilles**, les **Circuits Supercordes et Yin-Yang**, l'**Ensemble de Schémas AE2 Plus**, etc.

    [:octicons-arrow-right-24: Aller sur la page](gtecore/overview.md)

-   :material-cog: __[Branche du mod GTM Reborn](gtm-reborn/index.md)__

    ---

    Découvrez les fonctionnalités de la branche `satou` : recettes multi-ampères, mode de traitement par lots, overclocking 1t Subtick, tests automatisés GameTest et sortie de fluides par intervalles.

    [:octicons-arrow-right-24: Aller sur la page](gtm-reborn/index.md)

-   :material-code-tags: __[KubeJS : Personnalisation et outils de développement](kubejs/scripting-guide.md)__

    ---

    Apprenez à enregistrer des matériaux, écrire des recettes dans KubeJS, et utilisez l'outil de sélection à la hache en bois `/dumpmultiblock` intégré pour exporter en un clic le code de structure des machines multi-blocs.

    [:octicons-arrow-right-24: Aller sur la page](kubejs/scripting-guide.md)

-   :material-hammer-wrench: __[Manuel pratique pour développeurs et anti-crash](development/quick-start.md)__

    ---

    Maîtrisez le lancement instantané sans lanceur via `run_game.bat`, le mappage de répertoire sans copie via `link_to_launcher.bat`, et la règle d'or pour éviter les crashes de Mixin Accessor.

    [:octicons-arrow-right-24: Aller sur la page](development/quick-start.md)

-   :material-robot: __[Pipeline CI/CD et traduction IA](ci-cd-and-translation/ci-pipeline.md)__

    ---

    Découvrez la construction parallèle automatisée multi-modules basée sur GitHub Actions, l'empaquetage Packwiz, la publication Maven et le script d'internationalisation IA `opencode_translate.py`.

    [:octicons-arrow-right-24: Aller sur la page](ci-cd-and-translation/ci-pipeline.md)

</div>

---

## 🛠️ Informations de base sur le projet

| Élément de configuration | Description |
| :--- | :--- |
| **Nom du projet** | `GregtechEasy` (`gte-multi`) |
| **Chaîne d'outils d'exécution et de compilation** | **JDK 21** (Toolchain Java 21 obligatoire, strictement unifié pour tous les sous-modules) |
| **Version du jeu** | Minecraft `1.20.1` (Forge `47.4.1`) |
| **Licence open source** | LGPL-3.0 / MIT |
| **Branches par défaut** | Dépôt principal `main` / `master`, GTM-Reborn `satou`, GT-- `kotlin`, GTECore `master` |