# Integrationspaket-Download und Spieler-Lazy-Pack-Anleitung

GTE (GregTech Easy) bietet Spielern und Serverbetreibern mit unterschiedlichem technischem Hintergrund drei sofort einsatzbereite Lieferformen:

1. **Spieler-Komplett-Lazy-Pack ohne Kompilierung (`GTE-LazyPack-*.zip`)** : Enthält alle vorkompilierten Mods, Konfigurationen, Modifikationsskripte und die vollständige `.minecraft`-Verzeichnisstruktur. **Doppelklick oder Ziehen in den Launcher genügt zum Spielen.**
2. **CurseForge-Standardpaket (`GTE-CurseForge-*.zip`)** : Standard-CurseForge-Format, direkt importierbar in PCL2 / HMCL / CurseForge App / Prism Launcher.
3. **Server-Integrationspaket (`GTE-Server-*.zip`)** : Enthält reine Serverkonfiguration, Mods und Startskripte für den Mehrspielerbetrieb.

---

## 🚀 Spieler-Lazy-Pack (empfohlen)

### Eigenschaften und Vorteile
- **0 Kompilierungsabhängigkeiten**: Keine Installation von JDK-Kompilierungsumgebung, IntelliJ IDEA oder Git erforderlich.
- **Vollständige Paketierung**: `gtecore`, `gtm-reborn`, `gt--` neueste Release-Jars sowie alle erforderlichen Erweiterungsmods sind bereits im `mods/`-Verzeichnis enthalten.
- **Sofort spielbar per Drag & Drop**: Unterstützt PCL2 / HMCL Fenster-Drag-and-Drop-Import.

### Import- und Startschritte

=== "Methode 1: Launcher-Drag-and-Drop (empfohlen)"

    1. Öffnen Sie **PCL2 (Plain Craft Launcher 2)** oder **HMCL (Hello Minecraft! Launcher)**.
    2. Ziehen Sie die heruntergeladene `GTE-LazyPack-<Versionsnummer>.zip` direkt mit der **linken Maustaste** in das Hauptfenster des Launchers.
    3. Der Launcher erkennt und entpackt sie automatisch in die Spielversionsliste.
    4. Gehen Sie zu den **Versionseinstellungen** dieser Version und legen Sie die Java-Laufzeit auf **Java 21** fest.
    5. Weisen Sie **8 GB bis 12 GB** Arbeitsspeicher zu und starten Sie das Spiel!

=== "Methode 2: Manuelles Entpacken"

    1. Entpacken Sie das Archiv in einen Pfad ohne chinesische Zeichen und ohne Leerzeichen (z. B. `D:\Games\GTE\`).
    2. Nach dem Entpacken erhalten Sie ein `.minecraft`-Verzeichnis mit `mods/`, `config/` und `kubejs/`.
    3. Fügen Sie im Launcher eine Spielversion hinzu und wählen Sie als Spielverzeichnis den entpackten `.minecraft`-Ordner.
    4. Stellen Sie sicher, dass Sie **Java 21** als Kern auswählen und starten.

---

## ⚠️ Java 21 Laufzeitumgebungs-Anforderungen (äußerst wichtig)

> [!CAUTION]
> **Dieses Integrationspaket erfordert zwingend Java 21 (JDK 21) als Laufzeitumgebung!**
> Verwenden Sie keinesfalls **Java 17** oder **Java 8**, da das Spiel sonst sofort abstürzt oder den Start verweigert!

### Warum ist Java 21 erforderlich?
- Die Kernmods von GTE (`gtecore`, `gtm-reborn`, `gt--`) nutzen umfassend **moderne Java-21-Sprachfeatures** (wie Record Patterns, Virtual Threads, erweitertes Switch-Matching).
- Die Gradle-Build-Skripte konfigurieren global `JavaLanguageVersion.of(21)` zur erzwungenen Toolchain-Prüfung.

### Empfohlene JDK-21-Download-Adressen

| Distribution | Download-Link | Empfehlungsgrund |
| :--- | :--- | :--- |
| **Azul Zulu 21 (LTS)** | [Zur Azul-Website](https://www.azul.com/downloads/?version=java-21-lts) | Hervorragende Leistung, optimiert für groß angelegte Multithreading in Minecraft |
| **Eclipse Temurin 21 (LTS)** | [Zur Adoptium-Website](https://adoptium.net/temurin/releases/?version=21) | Offiziell empfohlen, hohe Kompatibilität und Stabilität |
| **Microsoft OpenJDK 21** | [Zur Microsoft-Website](https://learn.microsoft.com/zh-cn/java/openjdk/download) | Gute native Anpassung für Windows-Plattform |

### Java 21 im Launcher konfigurieren

```mermaid
graph LR
    A[Launcher öffnen] --> B[GTE-Versionseinstellungen aufrufen]
    B --> C[Java-Pfad / Laufzeit]
    C --> D[Installiertes JDK 21 javaw.exe auswählen]
    D --> E[8192MB bis 12288MB Arbeitsspeicher zuweisen]
    E --> F[Speichern und Spiel starten]
```

---

## 🎮 In-Game-Tastenkürzel und häufige Befehle

| Befehl / Tastenkürzel | Funktionsbeschreibung | Berechtigungsanforderung |
| :--- | :--- | :--- |
| `/ftbquests editing_mode true` | Aktiviert den visuellen Bearbeitungsmodus für Questbuch (Autorenmodus) | OP-Berechtigung |
| `/ftbquests reload` | Lädt die FTB-Quests-Konfigurationsdateien heiß neu | Alle |
| `/kubejs reload server_scripts` | Lädt serverseitige Modifikationsskripte und Rezepte heiß neu | OP-Berechtigung |
| `/kubejs reload client_scripts` | Lädt clientseitige Modifikationsskripte und Anzeigelogik heiß neu | Keine Berechtigung erforderlich |
| `/dumpmultiblock` | Exportiert nach Auswahl mit der Holzaxt den Multi-Block-Strukturcode mit einem Klick | OP-Berechtigung |
| <kbd>U</kbd> / <kbd>R</kbd> | Zeigt Verwendung (Usage) / Rezept (Recipe) des Elements unter dem Cursor an | EMI / JEI-Tastenkürzel |
| <kbd>F7</kbd> | Zeigt die Umgebungslichtstufe an (rotes Kreuz markiert Spawn-Bereiche) | Client-Tastenkürzel |