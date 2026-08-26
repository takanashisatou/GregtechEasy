# Guide de démarrage rapide pour développeurs

Ce guide s'adresse aux programmeurs Java/Kotlin et aux auteurs de packs de mods participant au développement du projet multi-modules GTE-Multi.

---

## 💻 1. Préparation de l'environnement de développement

### Exigence obligatoire : JDK 21
Ce projet utilise uniformément **JDK 21** pour tous les modules. Installations recommandées :
- [Azul Zulu JDK 21](https://www.azul.com/downloads/?version=java-21-lts)
- [Eclipse Temurin JDK 21](https://adoptium.net/temurin/releases/?version=21)

### IDE recommandé et plugins
Il est recommandé d'utiliser **IntelliJ IDEA 2023.3+** et d'installer les plugins officiels suivants :
- **Minecraft Development** : fournit l'indication de code Mixin, la reconnaissance des access transformers (AT) et la mise en évidence des événements.
- **Lombok** : prend en charge les annotations `@Getter`, `@Setter`, `@NoArgsConstructor`, etc.
- **Kotlin** : prend en charge le développement du module GT-- CE.

---

## 📥 2. Clonage du dépôt et importation du projet

Comme ce projet contient plusieurs sous-modules Git (Submodules), **le clonage doit être récursif** :

```bash
# 1. Cloner récursivement le dépôt principal et tous les sous-modules
git clone --recurse-submodules https://github.com/takanashisatou/GregtechEasy.git GTEGroup
cd GTEGroup

# 2. Si déjà cloné, mettre à jour et initialiser les sous-modules
git submodule update --init --recursive
```

### Guide d'importation dans IDEA
1. Dans IDEA, cliquez sur **File ➜ Open**, sélectionnez le fichier `build.gradle` à la racine pour l'ouvrir en tant que projet.
2. Allez dans les paramètres : `Settings` ➜ `Build, Execution, Deployment` ➜ `Build Tools` ➜ `Gradle`.
3. Définissez **Gradle JVM** sur **JDK 21**.

---

## 🛠️ 3. Commandes Gradle courantes

Exécutez dans Windows PowerShell (avec `JAVA_HOME` défini au préalable) :

```powershell
$env:JAVA_HOME='C:\Users\Ex_Je\.jdks\ms-21.0.11'

# 1. Compiler uniquement un module spécifique
.\gradlew.bat :modules:gtecore:compileJava
.\gradlew.bat :modules:gt--:compileKotlin
.\gradlew.bat :modules:gtm-reborn:compileJava

# 2. Exécuter le serveur de test GameTest de GTM-Reborn
.\gradlew.bat :modules:gtm-reborn:runGameTestServer

# 3. Exécuter le formatage du code
.\gradlew.bat :modules:gtm-reborn:spotlessApply

# 4. Compiler tous les modules et empaqueter les Jars en une seule commande
.\gradlew.bat buildAll -x test

# 5. Synchroniser les Jars compilés vers gte/overrides/mods/
.\gradlew.bat copyOutputJars

# 6. Publier tous les modules dans le dépôt Maven local (~/.m2/repository/)
.\gradlew.bat publishAllToMavenLocal

# 7. Publier les artefacts statiques de tous les modules dans build/maven (pour GitHub Pages Maven)
.\gradlew.bat publishAllToMaven
```