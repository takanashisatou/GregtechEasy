# Guide de démarrage rapide pour développeurs

Ce guide s'adresse aux programmeurs Java/Kotlin et aux auteurs de packs de mods participant au développement du projet multi-modules GTE-Multi.

---

## 💻 1. Préparation de l'environnement de développement

### Exigence obligatoire : JDK 21
Tous les modules de ce projet utilisent **JDK 21**. Installation recommandée :
- [Azul Zulu JDK 21](https://www.azul.com/downloads/?version=java-21-lts)
- [Eclipse Temurin JDK 21](https://adoptium.net/temurin/releases/?version=21)

### IDE recommandé et plugins
Il est recommandé d'utiliser **IntelliJ IDEA 2023.3+** et d'installer les plugins officiels suivants :
- **Minecraft Development** : fournit l'indication du code Mixin, la reconnaissance des access transformers (AT) et la mise en évidence des événements.
- **Lombok** : prend en charge les annotations `@Getter`, `@Setter`, `@NoArgsConstructor`, etc.
- **Kotlin** : prend en charge le développement du module GT-- CE.

---

## 📥 2. Clonage du dépôt et importation du projet

Comme ce projet contient plusieurs sous-modules Git (Submodules), **le clonage doit être récursif** :

```bash
# 1. Clonage récursif du dépôt principal et de tous les sous-modules
git clone --recurse-submodules https://github.com/takanashisatou/GregtechEasy.git GTEGroup
cd GTEGroup

# 2. Si déjà cloné, mise à jour et initialisation des sous-modules
git submodule update --init --recursive
```

### Instructions d'importation dans IDEA
1. Dans IDEA, cliquez sur **File ➜ Open**, sélectionnez le fichier `build.gradle` à la racine pour ouvrir le projet.
2. Allez dans les paramètres : `Settings` ➜ `Build, Execution, Deployment` ➜ `Build Tools` ➜ `Gradle`.
3. Définissez **Gradle JVM** sur **JDK 21**.

---

## 🛠️ 3. Commandes Gradle courantes

Exécutez dans Windows PowerShell (avec `JAVA_HOME` préalablement défini) :

```powershell
$env:JAVA_HOME='C:\Users\Ex_Je\.jdks\ms-21.0.11'

# 1. Compilation d'un sous-module spécifique
.\gradlew.bat :modules:gtecore:compileJava
.\gradlew.bat :modules:gt--:compileKotlin
.\gradlew.bat :modules:gtm-reborn:compileJava

# 2. Exécution du serveur de test GameTest de GTM-Reborn
.\gradlew.bat :modules:gtm-reborn:runGameTestServer

# 3. Exécution du formatage du code
.\gradlew.bat :modules:gtm-reborn:spotlessApply

# 4. Compilation de tous les modules et création des Jars en une commande
.\gradlew.bat buildAll -x test

# 5. Synchronisation des Jars compilés vers gte/overrides/mods/
.\gradlew.bat copyOutputJars

# 6. Publication de tous les modules dans le dépôt Maven local (~/.m2/repository/)
.\gradlew.bat publishAllToMavenLocal

# 7. Publication des artefacts statiques de tous les modules dans build/maven (pour GitHub Pages Maven)
.\gradlew.bat publishAllToMaven
```