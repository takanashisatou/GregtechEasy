# CI/CD Automatisierte Build-, Paketierungs- und Maven-Veröffentlichungspipeline

GTE hat eine hochautomatisierte, multi-Ziel-Artefakt-parallele **GitHub Actions CI/CD-Pipeline** eingerichtet (Konfigurationsdateien unter `.github/workflows/sync-build.yml` und `release-publish.yml`).

---

## 🔄 Vollständige CI-Pipeline-Architektur (`sync-build.yml`)

Bei jedem Push auf die `master` / `main` / `satou`-Zweige, bei PRs oder bei Auslösung eines Release-Tags führt GitHub Actions automatisch die folgende Standard-Pipeline aus:

```mermaid
flowchart TD
    A[Code-Push / Tag-Auslösung] --> B[Checkout rekursive Submodule & JDK 21 / Python 3.11 / Go konfigurieren]
    B --> C[Gradle inkrementelle Synchronisierung der Blockbench-Art-Assets syncBlockbenchAssets]
    C --> D[Multi-Modul-Hochparallel-Kompilierung & GameTest automatisierte Echtzeit-Tests]
    D --> E[Generierte Jars nach overrides/mods kopieren & in build/artifacts sammeln]
    E --> F[opencode_translate.py ausführen: Vollständige/inkrementelle KI-Internationalisierungsübersetzung]
    F --> G[Packwiz-Standardpaketierung: CurseForge-Paket + Patch Java 21 manifest]
    G --> H[Python baut das Komplett-Mod-Client-Paket GTE-FullMod]
    H --> I[Packwiz exportiert sauberes Server-Paket]
    I --> J[Alle Release-Artefakte in Actions Artifacts-Speicher hochladen]
    J --> K[Statisches Maven-Repository erstellen und auf GitHub Pages (gh-pages) bereitstellen]
    J --> L[Bei Tag-Auslösung: Automatische Veröffentlichung auf CurseForge-Plattform]
```

---

## 📦 Detaillierte Beschreibung der drei Kern-Paketierungsaufgaben

### 1. CurseForge-Standardpaket und Java 21-Patch
- **Packwiz-Export**: Führt `packwiz curseforge export` aus, um ein standardkonformes Paket zu generieren.
- **Automatischer manifest.json-Patch**: Da einige Drittanbieter-Launcher beim Parsen von CurseForge-Paketen standardmäßig Java 17 zuweisen, entpackt die CI automatisch die ZIP-Datei, schreibt per Python-Skript `minecraft.javaVersion` und die oberste `javaVersion` im `manifest.json` **hartkodiert auf 21** und verpackt sie anschließend neu.

### 2. Komplett-Mod-Client-Paket für Spieler (`build_full_mod_pack.py`)
- Das Python-Skript extrahiert automatisch die neuesten Kern-Jars aus den `build/libs/`-Verzeichnissen aller Module.
- Es fügt automatisch die wichtigen Erweiterungs-Mods aus `modules/gtecore/gradle/libs/` hinzu.
- Alle Konfigurationen, KubeJS-Skripte und das Patchouli-Handbuch werden in ein flaches `GTE-FullMod-*.zip` verpackt (auf oberster Ebene `mods/`, `config/`, `defaultconfigs/`, `kubejs/`), inklusive der chinesischen Installationsanleitung `README_安装必看.txt`.

### 3. Server-Exportpaket (`packwiz server export`)
- Entfernt automatisch client-spezifische Optimierungs-Mods (z. B. 3D-Skin-Layer, Shader, Tastenbelegungen usw.) und generiert einen sauberen Server, der direkt auf Linux/Windows-Produktionsservern bereitgestellt werden kann.

---

## 🌐 GitHub Pages statisches Maven-Repository

Die Pipeline verwendet die Gradle-`publish`-Aufgabe, um alle Submodule (`gtecore`, `gtm-reborn`, `gt--`) als Standard-Maven-Artefakte zu bauen und auf dem `gh-pages`-Zweig bereitzustellen:

```groovy
// In Drittanbieter-Mods oder Entwicklungsprojekten direkt das GTE-Maven-Repository referenzieren
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

## 🏷️ Manuelle Veröffentlichung und Versions-Tagging-Workflow (`release-publish.yml`)

Das Projekt verwendet einen standardisierten Git-Release-Prozess:
1. Manuelles Auslösen von **Manual Publish Release** auf der GitHub-Actions-Seite, Eingabe der Versionsnummer (z. B. `2.3.0`).
2. Der Workflow erstellt automatisch einen `dev -> release`-PR, führt die CI-Prüfung durch und führt automatisch einen Squash-Merge aus.
3. Automatisches Setzen des Git-Tags `v2.3.0` auf dem `release`-Zweig und Push.
4. Das Tag-Push-Ereignis löst automatisch `sync-build.yml` aus und schließt die Veröffentlichung aller Kanäle ab.