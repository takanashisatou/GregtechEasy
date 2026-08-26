# Schnellstartanleitung für Entwickler

Dieser Leitfaden richtet sich an Java/Kotlin-Programmierer und Modpack-Autoren, die an der GTE-Multi-Modul-Entwicklung beteiligt sind.

---

## 💻 1. Vorbereitung der Entwicklungsumgebung

### JDK 21 Pflichtanforderung
Dieses Projekt verwendet einheitlich **JDK 21** für alle Module. Empfohlene Installation:
- [Azul Zulu JDK 21](https://www.azul.com/downloads/?version=java-21-lts)
- [Eclipse Temurin JDK 21](https://adoptium.net/temurin/releases/?version=21)

### Empfohlene IDE und Plugins
Es wird empfohlen, **IntelliJ IDEA 2023.3+** zu verwenden und die folgenden offiziellen Plugins zu installieren:
- **Minecraft Development**: Bietet Mixin-Code-Hinweise, AT-Zugriffstransformer-Erkennung und Ereignis-Hervorhebung.
- **Lombok**: Unterstützt Annotationen wie `@Getter`, `@Setter`, `@NoArgsConstructor`.
- **Kotlin**: Unterstützt die Entwicklung des GT-- CE-Moduls.

---

## 📥 2. Klonen des Repositories und Import des Projekts

Da dieses Projekt mehrere Git-Submodule enthält, **muss rekursiv geklont werden**:

```bash
# 1. Rekursiv das Haupt-Repository und alle Submodule klonen
git clone --recurse-submodules https://github.com/takanashisatou/GregtechEasy.git GTEGroup
cd GTEGroup

# 2. Falls bereits geklont, Submodule aktualisieren und initialisieren
git submodule update --init --recursive
```

### Anleitung zum Import in IDEA
1. Klicken Sie in IDEA auf **File ➜ Open** und wählen Sie die `build.gradle` im Stammverzeichnis aus, um es als Projekt zu öffnen.
2. Gehen Sie zu den Einstellungen: `Settings` ➜ `Build, Execution, Deployment` ➜ `Build Tools` ➜ `Gradle`.
3. Legen Sie **Gradle JVM** als **JDK 21** fest.

---

## 🛠️ 3. Häufige Gradle-Build-Befehle

Führen Sie in Windows PowerShell aus (stellen Sie zuvor `JAVA_HOME` ein):

```powershell
$env:JAVA_HOME='C:\Users\Ex_Je\.jdks\ms-21.0.11'

# 1. Einzelnes Kompilieren des angegebenen Submoduls
.\gradlew.bat :modules:gtecore:compileJava
.\gradlew.bat :modules:gt--:compileKotlin
.\gradlew.bat :modules:gtm-reborn:compileJava

# 2. Ausführen des GTM-Reborn GameTest-Server-Tests
.\gradlew.bat :modules:gtm-reborn:runGameTestServer

# 3. Code-Formatierung ausführen
.\gradlew.bat :modules:gtm-reborn:spotlessApply

# 4. Ein-Klick-Kompilierung aller Module und Jar-Paketierung
.\gradlew.bat buildAll -x test

# 5. Synchronisieren der erzeugten Jars nach gte/overrides/mods/
.\gradlew.bat copyOutputJars

# 6. Veröffentlichen aller Module im lokalen Maven-Repository (~/.m2/repository/)
.\gradlew.bat publishAllToMavenLocal

# 7. Veröffentlichen aller Module als statische Artefakte nach build/maven (für GitHub Pages Maven)
.\gradlew.bat publishAllToMaven
```