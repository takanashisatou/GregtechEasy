# CurseForge-Import und Server-Bereitstellungsanleitung

Neben dem vorgefertigten Lazy Pack bietet GTE ein CurseForge-konformes Paket und ein Serverpaket, die automatisch mit **Packwiz** erstellt werden.

---

## 📦 CurseForge-konformes Paket importieren

Die Datei des CurseForge-Format-Modpacks heißt `GTE-CurseForge-<Versionsnummer>.zip`.

### Client-Importmethoden

=== "PCL2 / HMCL Import"

    1. Öffnen Sie den Launcher und wählen Sie **Neue Spielversion installieren / Modpack importieren**.
    2. Wählen Sie die heruntergeladene Datei `GTE-CurseForge-<Versionsnummer>.zip` aus.
    3. Der Launcher analysiert automatisch `manifest.json` und lädt die abhängigen Mods mit hoher Geschwindigkeit parallel herunter.
    4. Nach Abschluss des Imports gehen Sie in die Versionsoptionen und legen die Java-Laufzeitumgebung auf **Java 21** fest.
    5. Stellen Sie den Arbeitsspeicher ein (empfohlen 8 GB ~ 12 GB) und starten Sie das Spiel.

=== "CurseForge App Import"

    1. Öffnen Sie die CurseForge App.
    2. Klicken Sie links auf das **Minecraft**-Symbol und gehen Sie zu **My Modpacks**.
    3. Klicken Sie im Einstellungsmenü oben rechts auf **Create Custom Profile** ➜ **Import**.
    4. Wählen Sie `GTE-CurseForge-<Versionsnummer>.zip` aus und warten Sie, bis der automatische Download und die Installation abgeschlossen sind.

=== "Prism Launcher Import"

    1. Klicken Sie auf **Add Instance (Instanz hinzufügen)** ➜ **Import (Importieren)**.
    2. Navigieren Sie zu `GTE-CurseForge-<Versionsnummer>.zip` und wählen Sie es aus.
    3. Nachdem die Instanz erstellt wurde, legen Sie in den Instanzeigenschaften den Pfad zu **JDK 21** fest.

---

## 🖥️ Server-Bereitstellungsanleitung

Die Serverpaketdatei heißt `GTE-Server-<Versionsnummer>.zip`.

### 1. Umgebungsvorbereitung
- Betriebssystem: Linux (Ubuntu 22.04+ / Debian 12+) oder Windows Server 2022+
- **JDK 21 muss bereit sein**: Führen Sie im Terminal `java -version` aus und bestätigen Sie, dass die Ausgabe `openjdk version "21..."` lautet.
- Empfohlene Konfiguration: 4 oder mehr CPU-Kerne, 16 GB physischer Arbeitsspeicher (10 GB ~ 14 GB für den Minecraft-Server zuweisen).

### 2. Bereitstellungsschritte

```bash
# 1. Server-Arbeitsverzeichnis erstellen
mkdir -p /opt/gte-server && cd /opt/gte-server

# 2. Serverpaket entpacken
unzip GTE-Server-*.zip -d .

# 3. Forge 1.20.1-47.4.1 Server-Kern installieren (falls nicht vorinstalliert)
# Installationsskript ausführen, um minecraft_server und Forge-Bibliotheken herunterzuladen
java -jar forge-1.20.1-*-installer.jar --installServer

# 4. Minecraft EULA zustimmen
echo "eula=true" > eula.txt
```

### 3. Startskript-Konfiguration (`run_server.sh` / `run_server.bat`)

Es wird empfohlen, den Server mit den optimierten Aikar-Parametern zu starten:

=== "Linux (`run_server.sh`)"

    ```bash
    #!/bin/bash
    JAVA_CMD="java"
    MEMORY="12G"

    FLAGS="-Xms${MEMORY} -Xmx${MEMORY} \
      -XX:+UseG1GC -XX:+ParallelRefProcEnabled -XX:MaxGCPauseMillis=200 \
      -XX:+UnlockExperimentalVMOptions -XX:+DisableExplicitGC -XX:+AlwaysPreTouch \
      -XX:G1NewSizePercent=30 -XX:G1MaxNewSizePercent=40 -XX:G1ReservePercent=20 \
      -XX:G1HeapWastePercent=5 -XX:G1MixedGCCountTarget=4 -XX:InitiatingHeapOccupancyPercent=15 \
      -XX:G1MixedGCLiveThresholdPercent=90 -XX:G1RSetUpdatingPauseTimePercent=5 \
      -XX:SurvivorRatio=32 -XX:+PerfDisableSharedMem -XX:MaxTenuringThreshold=1"

    $JAVA_CMD $FLAGS @libraries/net/minecraftforge/forge/1.20.1-47.4.1/unix_args.txt nogui
    ```

=== "Windows (`run_server.bat`)"

    ```bat
    @echo off
    set JAVA_CMD=java
    set MEMORY=12G

    set FLAGS=-Xms%MEMORY% -Xmx%MEMORY% -XX:+UseG1GC -XX:+ParallelRefProcEnabled -XX:MaxGCPauseMillis=200 -XX:+UnlockExperimentalVMOptions -XX:+DisableExplicitGC -XX:+AlwaysPreTouch

    %JAVA_CMD% %FLAGS% @libraries/net/minecraftforge/forge/1.20.1-47.4.1/win_args.txt nogui
    pause
    ```

---

## ⚙️ Häufig gestellte Fragen (FAQ)

### F1: Beim Starten des Servers erscheint `UnsupportedClassVersionError: ... class file version 65.0`
> **Ursache**: Die Java-Version der Server-Laufzeitumgebung ist niedriger als Java 21 (Version 65.0 entspricht JDK 21).  
> **Lösung**: Wechseln Sie unter Linux mit `sudo update-alternatives --config java` zu OpenJDK 21.

### F2: Spieler erhalten beim Betreten des Servers eine Meldung über nicht übereinstimmende Modlisten
> **Lösung**: Stellen Sie sicher, dass die Client-Versionsnummer exakt mit der Server-Versionsnummer übereinstimmt. Jeder CI-Build des Hauptprojekts erzeugt synchron passende Client- und Server-Artefakte.