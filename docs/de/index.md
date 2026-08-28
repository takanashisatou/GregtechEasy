# GregTech Easy (GTE) Offizielle Dokumentation

Willkommen zum offiziellen umfassenden Leitfaden für das **GregTech Easy (GTE)** Modpack!

GTE ist ein modernes Minecraft 1.20.1 Modpack, das auf dem Kernkonzept **„Einfach, unterhaltsam, spaßig, zeitsparend“** basiert.

---

## ⚡ Schnellzugriffsindex

<div class="grid cards" markdown>

-   :material-download: __[Spieler- & Modpack-Leitfaden](download-and-play/full-mod-pack.md)__

    ---

    Laden Sie das **Komplett-Mod-Client-Paket**, das CurseForge-konforme Paket und den Server herunter. Erfahren Sie mehr über die **Java 21**-Laufzeitumgebungskonfiguration und Launcher-Import-Tutorials.

    [:octicons-arrow-right-24: Jetzt loslegen](download-and-play/full-mod-pack.md)

-   :material-chip: __[GTECore Kernmodul im Detail](gtecore/overview.md)__

    ---

    Erhalten Sie tiefe Einblicke in den **Yin-Yang-Bagua-Alchemieofen**, die **Vier-Symbole-Formation**, das **Erzverarbeitungszentrum**, den **Ring der Wunder**, die **Superstring- & Yin-Yang-Schaltkreise**, das **AE2-Vorlagen-Baugruppen-Plus** und weitere Kerninhalte.

    [:octicons-arrow-right-24: Jetzt loslegen](gtecore/overview.md)

-   :material-cog: __[GTM Reborn Modifikationszweig](gtm-reborn/index.md)__

    ---

    Erfahren Sie mehr über die Funktionen des `satou`-Zweigs: Multi-Ampere-Rezepte, Stapelverarbeitungsmodus, 1t-Subtick-Übertaktung, GameTest-Automatisierungstests und Fluid-Intervall-Ausgabefunktionen.

    [:octicons-arrow-right-24: Jetzt loslegen](gtm-reborn/index.md)

-   :material-code-tags: __[KubeJS-Modifikationen & Entwicklungswerkzeuge](kubejs/scripting-guide.md)__

    ---

    Lernen Sie, wie Sie in KubeJS Materialien registrieren, Rezepte schreiben und das integrierte `/dumpmultiblock`-Holzaxt-Auswahlwerkzeug verwenden, um Mehrblock-Strukturcode mit einem Klick zu exportieren.

    [:octicons-arrow-right-24: Jetzt loslegen](kubejs/scripting-guide.md)

-   :material-hammer-wrench: __[Entwickler- & Absturzschutz-Handbuch](development/quick-start.md)__

    ---

    Meistern Sie den Launcher-freien Sekundenstart mit `run_game.bat`, die Null-Kopien-Verzeichniszuordnung mit `link_to_launcher.bat` und die goldenen Regeln zur Vermeidung von Mixin-Accessor-Abstürzen.

    [:octicons-arrow-right-24: Jetzt loslegen](development/quick-start.md)

-   :material-robot: __[CI/CD-Pipeline & KI-Übersetzung](ci-cd-and-translation/ci-pipeline.md)__

    ---

    Erfahren Sie mehr über die automatisierte parallele Multi-Modul-Konstruktion basierend auf GitHub Actions, Packwiz-Paketierung, Maven-Veröffentlichung und das KI-Internationalisierungsskript `opencode_translate.py`.

    [:octicons-arrow-right-24: Jetzt loslegen](ci-cd-and-translation/ci-pipeline.md)

</div>

---

## 🛠️ Projektbasisinformationen

| Konfigurationselement | Beschreibung |
| :--- | :--- |
| **Projektname** | `GregtechEasy` (`gte-multi`) |
| **Laufzeit- & Kompilierungswerkzeugkette** | **JDK 21** (Java 21 Toolchain ist obligatorisch, alle Untermodule sind strikt vereinheitlicht) |
| **Spielversion** | Minecraft `1.20.1` (Forge `47.4.1`) |
| **Open-Source-Lizenz** | LGPL-3.0 / MIT |
| **Standardzweige** | Hauptrepository `main` / `master`, GTM-Reborn `satou`, GT-- `kotlin`, GTECore `master` |