# Entwickler-Schnellstartanleitung

Dieser Leitfaden richtet sich an Java/Kotlin-Programmierer und Modpack-Autoren, die an der modulübergreifenden Entwicklung von GTE-Multi beteiligt sind.

---

## 💻 1. Vorbereitung der Entwicklungsumgebung

### JDK 21 zwingend erforderlich
Dieses Projekt verwendet in allen Modulen einheitlich **JDK 21**. Empfohlene Installationen:
- [Azul Zulu JDK 21](https://www.azul.com/downloads/?version=java-21-lts)
- [Eclipse Temurin JDK 21](https://adoptium.net/temurin/releases/?version=21)

### IDE-Empfehlung und Plugins
Empfohlen wird **IntelliJ IDEA 2023.3+** mit den folgenden offiziellen Plugins:
- **Minecraft Development**: Bietet Mixin-Code-Hinweise, AT-Zugriffstransformer-Erkennung und Ereignis-Hervorhebung.
- **Lombok**: Unterstützt Annotationen wie `@Getter`, `@Setter`, `@NoArgsConstructor`.
- **Kotlin**: Unterstützt die Entwicklung des GT-- CE-Moduls.

---

## 📥 2. Repository-Klonen und Projektimport

Da dieses Projekt mehrere Git-Submodule enthält, **muss rekursiv geklont werden**:

```bash
# 1. Rekursives Klonen des Haupt-Repositorys und aller Submodule
git clone --recurse-submodules https://github.com/takanashisatou/GregtechEasy.git GTEGroup
cd GTEGroup

# 2. Falls bereits geklont, Submodule aktualisieren und initialisieren
git submodule update --init --recursive
```

### Importanleitung für IDEA
1. Klicken Sie in IDEA auf **Datei ➜ Öffnen** und wählen Sie die `build.gradle` im Stammverzeichnis aus, um sie als Projekt zu öffnen.
2. Gehen Sie zu den Einstellungen: `Einstellungen` ➜ `Build, Ausführung, Bereitstellung` ➜ `Build-Tools` ➜ `Gradle`.
3. Setzen Sie **Gradle JVM** auf **JDK 21**.

---

## 🛠️ 3. Häufige Gradle-Build-Befehle

Ausführen in Windows PowerShell (mit vorherigem Setzen von `JAVA_HOME`):

```powershell
$env:JAVA_HOME='C:\Users\Ex_Je\.jdks\ms-21.0.11'

# 1. Einzelnes Submodul kompilieren
.\gradlew.bat :modules:gtecore:compileJava
.\gradlew.bat :modules:gt--:compileKotlin
.\gradlew.bat :modules:gtm-reborn:compileJava

# 2. GTM-Reborn GameTest-Server für echte Tests ausführen
.\gradlew.bat :modules:gtm-reborn:runGameTestServer

# 3. Code-Formatierung ausführen
.\gradlew.bat :modules:gtm-reborn:spotlessApply

# 4. Alle Module kompilieren und Jars packen
.\gradlew.bat buildAll -x test

# 5. Kompilierte Jars nach gte/overrides/mods/ synchronisieren
.\gradlew.bat copyOutputJars

# 6. Alle Module im lokalen Maven-Repository veröffentlichen (~/.m2/repository/)
.\gradlew.bat publishAllToMavenLocal

# 7. Alle Module als statische Artefakte nach build/maven veröffentlichen (für GitHub Pages Maven)
.\gradlew.bat publishAllToMaven
```