# CurseForge-Import und Server-Bereitstellungsanleitung

Neben dem vorkompilierten All-in-One-Paket bietet GTE CurseForge-konforme Pakete und Serverpakete, die automatisch mit **Packwiz** erstellt werden.

---

## 📦 CurseForge-konformes Paket importieren

Die CurseForge-Format-Modpack-Datei heißt `GTE-CurseForge-<Versionsnummer>.zip`.

### Client-Importmethoden

=== "PCL2 / HMCL-Import"

    1. Öffnen Sie den Launcher und wählen Sie **Neue Spielversion installieren / Modpack importieren**.
    2. Wählen Sie die heruntergeladene Datei `GTE-CurseForge-<Versionsnummer>.zip` aus.
    3. Der Launcher analysiert automatisch `manifest.json` und lädt die abhängigen Mods parallel mit hoher Geschwindigkeit herunter.
    4. Nach dem Import gehen Sie zu den Versionsoptionen und legen die Java-Laufzeit auf **Java 21** fest.
    5. Stellen Sie den Arbeitsspeicher ein (empfohlen 8 GB bis 12 GB) und starten Sie das Spiel.

=== "CurseForge-App-Import"

    1. Öffnen Sie die CurseForge-App.
    2. Klicken Sie links auf das **Minecraft**-Symbol und gehen Sie zu **My Modpacks**.
    3. Klicken Sie im Einstellungsmenü oben rechts auf **Create Custom Profile** ➜ **Import**.
    4. Wählen Sie `GTE-CurseForge-<Versionsnummer>.zip` und warten Sie, bis der automatische Download und die Installation abgeschlossen sind.

=== "Prism-Launcher-Import"

    1. Klicken Sie auf **Add Instance (Instanz hinzufügen)** ➜ **Import (Importieren)**.
    2. Navigieren Sie zu `GTE-CurseForge-<Versionsnummer>.zip` und wählen Sie es aus.
    3. Nachdem die Instanz erstellt wurde, legen Sie in den Instanzeigenschaften den Pfad zu **JDK 21** fest.

---

## 🖥️ Server-Bereitstellungsanleitung

Die Serverpaketdatei heißt `GTE-Server-<Versionsnummer>.zip`.

### 1. Umgebungsvorbereitung
- Betriebssystem: Linux (Ubuntu 22.04+ / Debian 12+) oder Windows Server 2022+
- **JDK 21 muss bereit sein**: Führen Sie im Terminal `java -version` aus und stellen Sie sicher, dass die Ausgabe `openjdk version "21..."` ist.
- Empfohlene Konfiguration: mindestens 4 CPU-Kerne, 16 GB physischer Arbeitsspeicher (10 GB bis 14 GB für den Minecraft-Server zuweisen).

### 2. Bereitstellungsschritte

```bash
# 1. Erstellen Sie das Server-Arbeitsverzeichnis
mkdir -p /opt/gte-server && cd /opt/gte-server

# 2. Serverpaket entpacken
unzip GTE-Server-*.zip -d .

# 3. Forge 1.20.1-47.3.0 / 47.4.4 Server-Kern installieren (falls nicht vorinstalliert)
# Installationsskript ausführen, um minecraft_server und Forge-Bibliotheken herunterzuladen
java -jar forge-1.20.1-*-installer.jar --installServer

# 4. Minecraft-EULA akzeptieren
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

    $JAVA_CMD $FLAGS @libraries/net/minecraftforge/forge/1.20.1-47.3.0/unix_args.txt nogui
    ```

=== "Windows (`run_server.bat`)"

    ```bat
    @echo off
    set JAVA_CMD=java
    set MEMORY=12G

    set FLAGS=-Xms%MEMORY% -Xmx%MEMORY% -XX:+UseG1GC -XX:+ParallelRefProcEnabled -XX:MaxGCPauseMillis=200 -XX:+UnlockExperimentalVMOptions -XX:+DisableExplicitGC -XX:+AlwaysPreTouch

    %JAVA_CMD% %FLAGS% @libraries/net/minecraftforge/forge/1.20.1-47.3.0/win_args.txt nogui
    pause
    ```

---

## ⚙️ Häufige Probleme und Fehlerbehebung (FAQ)

### Q1: Beim Starten des Servers erscheint `UnsupportedClassVersionError: ... class file version 65.0`
> **Ursache**: Die Java-Version des Servers ist niedriger als Java 21 (Version 65.0 entspricht JDK 21).  
> **Lösung**: Wechseln Sie unter Linux mit `sudo update-alternatives --config java` zu OpenJDK 21.

### Q2: Spieler erhalten beim Betreten des Servers eine Meldung, dass die Modliste nicht übereinstimmt
> **Lösung**: Stellen Sie sicher, dass die Client-Versionsnummer und die Server-Versionsnummer exakt übereinstimmen. Jeder CI-Build des Hauptprojekts erzeugt synchron passende Client- und Server-Artefakte.