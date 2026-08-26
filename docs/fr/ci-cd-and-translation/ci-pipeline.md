# Pipeline CI/CD automatisé de construction, d'empaquetage et de publication Maven

GTE a mis en place un pipeline **GitHub Actions CI/CD** hautement automatisé et parallèle pour plusieurs artefacts (les fichiers de configuration se trouvent dans `.github/workflows/sync-build.yml` et `release-publish.yml`).

---

## 🔄 Architecture complète du pipeline CI (`sync-build.yml`)

Chaque fois que du code est poussé vers les branches `master` / `main` / `satou`, qu'une PR est soumise ou qu'un tag de release est déclenché, GitHub Actions exécute automatiquement le pipeline standard suivant :

```mermaid
flowchart TD
    A[Push de code / Déclenchement de tag] --> B[Checkout des sous-modules récursifs & configuration JDK 21 / Python 3.11 / Go]
    B --> C[Synchronisation incrémentale Gradle des assets artistiques Blockbench syncBlockbenchAssets]
    C --> D[Compilation multi-modules à haute concurrence & tests automatisés GameTest en environnement réel]
    D --> E[Copie des Jars générés vers overrides/mods & collecte vers build/artifacts]
    E --> F[Exécution de opencode_translate.py pour la traduction IA complète/incrémentale]
    F --> G[Packaging standard Packwiz : pack CurseForge + correctif manifest Java 21]
    G --> H[Construction Python du pack complet .minecraft Zero-Compile pour joueurs]
    H --> I[Export Packwiz du pack serveur pur]
    I --> J[Téléversement de tous les artefacts de release vers le stockage Actions Artifacts]
    J --> K[Construction du dépôt Maven statique et déploiement sur GitHub Pages (gh-pages)]
    J --> L[Lors du déclenchement de tag : publication automatique sur la plateforme CurseForge]
```

---

## 📦 Détail des trois tâches d'empaquetage principales

### 1. Pack standard CurseForge et correctif Java 21
- **Export Packwiz** : exécutez `packwiz curseforge export` pour générer le pack standard.
- **Correctif automatique de manifest.json** : pour résoudre le problème où certains lanceurs tiers attribuent par défaut Java 17 lors de l'analyse des packs CurseForge, le CI décompresse automatiquement le zip, force via un script Python l'écriture de `minecraft.javaVersion` et `javaVersion` de niveau supérieur à **21**, puis reconditionne le pack.

### 2. Pack complet sans compilation pour joueurs (`build_lazy_pack.py`)
- Le script Python extrait automatiquement les derniers Jars principaux de `build/libs/` de chaque module.
- Il fusionne automatiquement les mods d'extension clés situés dans `modules/gtecore/gradle/libs/`.
- Il regroupe toutes les configurations, les scripts KubeJS, le manuel Patchouli dans une archive `.minecraft` prête à l'emploi, avec un guide de démarrage en chinois intégré.

### 3. Pack d'export serveur (`packwiz server export`)
- Il exclut automatiquement les mods d'optimisation spécifiques au client (comme les couches de peau 3D, les shaders, les raccourcis clavier, etc.) et génère un serveur pur prêt à être déployé sur des serveurs de production Linux/Windows.

---

## 🌐 Déploiement du dépôt Maven statique sur GitHub Pages

Le pipeline utilise la tâche `publish` de Gradle pour construire tous les sous-modules (`gtecore`, `gtm-reborn`, `gt--`) en artefacts Maven standard et les déployer sur la branche `gh-pages` :

```groovy
// Référencez directement le dépôt Maven GTE dans un mod tiers ou un projet de développement
repositories {
    maven {
        name = "GTE GitHub Pages Maven"
        url = "https://takanashisatou.github.io/GregtechEasy/"
    }
}

dependencies {
    implementation fg.deobf("org.satou.gtecore:gtecore-1.20.1:1.0.0")
}
```

---

## 🏷️ Workflow de publication manuelle et de marquage de version (`release-publish.yml`)

Le projet suit un processus de release Git standardisé :
1. Déclenchez manuellement **Manual Publish Release** depuis la page GitHub Actions, en saisissant le numéro de version (par exemple `2.3.0`).
2. Le workflow crée automatiquement une PR `dev -> release`, exécute les vérifications CI et effectue un Squash Merge automatique.
3. Il crée automatiquement un tag Git `v2.3.0` sur la branche `release` et le pousse.
4. L'événement de push du tag déclenche automatiquement `sync-build.yml`, finalisant ainsi la publication des artefacts sur tous les canaux.