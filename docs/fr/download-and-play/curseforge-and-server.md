# Guide d'importation CurseForge et de déploiement serveur

En plus du pack client complet, GTE fournit un pack standard CurseForge et un pack serveur, tous deux construits automatiquement via **Packwiz**.

---

## 📦 Importation du pack standard CurseForge

Le fichier du pack d'intégration au format CurseForge est nommé `GTE-CurseForge-<numéro_de_version>.zip`.

### Méthode d'importation côté client

=== "Importation PCL2 / HMCL"

    1. Ouvrez le lanceur, sélectionnez **Installer une nouvelle version de jeu / Importer un pack d'intégration**.
    2. Sélectionnez le fichier `GTE-CurseForge-<numéro_de_version>.zip` téléchargé.
    3. Le lanceur analysera automatiquement `manifest.json` et téléchargera les mods dépendants à haute vitesse en parallèle.
    4. Une fois l'importation terminée, allez dans les paramètres de la version et spécifiez **Java 21** comme environnement d'exécution.
    5. Définissez la mémoire allouée (8 Go ~ 12 Go recommandés), puis lancez le jeu.

=== "Importation via l'application CurseForge"

    1. Ouvrez l'application CurseForge.
    2. Cliquez sur l'icône **Minecraft** à gauche, puis allez dans **My Modpacks**.
    3. Dans le menu des paramètres en haut à droite, cliquez sur **Create Custom Profile** ➜ **Import**.
    4. Sélectionnez `GTE-CurseForge-<numéro_de_version>.zip`, attendez le téléchargement automatique et la fin de l'installation.

=== "Importation via Prism Launcher"

    1. Cliquez sur **Add Instance (Ajouter une instance)** ➜ **Import (Importer)**.
    2. Parcourez et sélectionnez `GTE-CurseForge-<numéro_de_version>.zip`.
    3. Une fois l'instance créée, définissez le chemin de Java sur **JDK 21** dans les propriétés de l'instance.

---

## 🖥️ Guide de déploiement serveur

Le fichier du pack serveur est nommé `GTE-Server-<numéro_de_version>.zip`.

### 1. Préparation de l'environnement
- Système d'exploitation : Linux (Ubuntu 22.04+ / Debian 12+) ou Windows Server 2022+
- **JDK 21 doit être prêt** : exécutez `java -version` dans le terminal pour confirmer que la sortie est `openjdk version "21..."`.
- Configuration recommandée : CPU 4 cœurs ou plus, 16 Go de RAM physique (allouez 10 Go ~ 14 Go au serveur Minecraft).

### 2. Étapes de déploiement

```bash
# 1. Créer le répertoire de travail du serveur
mkdir -p /opt/gte-server && cd /opt/gte-server

# 2. Décompresser le pack serveur
unzip GTE-Server-*.zip -d .

# 3. Installer le noyau serveur Forge 1.20.1-47.4.1 (s'il n'est pas préinstallé)
# Exécuter le script d'installation pour télécharger minecraft_server et les bibliothèques forge
java -jar forge-1.20.1-*-installer.jar --installServer

# 4. Accepter le contrat EULA de Minecraft
echo "eula=true" > eula.txt
```

### 3. Configuration du script de démarrage (`run_server.sh` / `run_server.bat`)

Il est recommandé d'utiliser les paramètres d'optimisation Aikar pour démarrer le serveur :

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

## ⚙️ Dépannage des problèmes courants (FAQ)

### Q1 : Le serveur affiche `UnsupportedClassVersionError: ... class file version 65.0` au démarrage
> **Cause** : La version de Java utilisée par le serveur est inférieure à Java 21 (la version 65.0 correspond à JDK 21).  
> **Solution** : Sur Linux, basculez vers OpenJDK 21 avec `sudo update-alternatives --config java`.

### Q2 : Les joueurs signalent une non-correspondance de la liste des mods en rejoignant le serveur
> **Solution** : Assurez-vous que le numéro de version du client est exactement identique à celui du serveur. Chaque build CI du projet principal génère simultanément les artefacts Client et Serveur correspondants.