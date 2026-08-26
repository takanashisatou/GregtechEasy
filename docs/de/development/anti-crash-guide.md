# Anti-Crash-Entwicklungsrichtlinien und praktische Fehlerbehebungs-Bibliothek (Anti-Crash-Leitfaden)

In einer Minecraft-Entwicklungsumgebung mit mehreren Modulen, mehreren Classloadern und komplexer Mixin-Bytecode-Verstärkung können unbedachte Schreibweisen zu katastrophalen Laufzeitabstürzen führen.

Dieses Handbuch fasst die **fünf wichtigsten Anti-Crash-Eisenregeln** und die **Hochfrequenz-Absturz-Fehlerbehebungs-Bibliothek** zusammen, die in der praktischen Arbeit am GTE-Projekt entwickelt wurden.

---

## 🛡️ Die fünf wichtigsten Anti-Crash-Entwicklungsregeln (KRITISCH)

### Regel 1: Niemals Mixin-Accessor-Schnittstellen erzwingen (Niemals Accessors casten)

- **Absturzursache**: In einer Multi-Modul-Umgebung oder während des Addon-Ladens werden native Minecraft-Klassen (z. B. `BlockBehaviour.Properties`) von einem frühen Classloader instanziiert. Zu diesem Zeitpunkt ist die Mixin-Schnittstelle möglicherweise noch nicht bytecode-verstärkt, und ein erzwungener Cast führt direkt zu einer `ClassCastException`!
- **Falsche Schreibweise (verboten)**:
  ```java
  // Fehler! Bei frühem Klassenladen kommt es zwangsläufig zu ClassCastException
  int destroyTime = ((BlockPropertiesAccessor) props).getDestroyTime();
  ```
- **Richtige Schreibweise (sichere Absicherung)**:
  ```java
  // Richtig: Mit instanceof-Muster absichern
  if (props instanceof BlockPropertiesAccessor acc) {
      newProps.destroyTime(acc.getDestroyTime());
  }
  ```
- **Bessere Lösung**: Bevorzugt native Vanilla/Forge-APIs verwenden (z. B. über `property.getPossibleValues()` den Integer-Bereich abrufen, anstatt `IntegerPropertyAccessor` zu casten).

---

### Regel 2: Produktionsoptimierungs-/Shader-Mods nicht in die Entwicklungsumgebung legen

- **Absturzursache**: Produktionsoptimierungs-Mods wie `Oculus`, `Embeddium`, `ModernFix`, `ModernUI` enthalten hartcodierte SRG-verwirrte Mixin-Mappings (z. B. `f_117950_`, `m_91302_`). Die Gradle-`runClient`-Entwicklungsumgebung läuft jedoch unter deobfuszierten Mojang-Mappings, was direkt zu einer `InvalidMixinException` führt.
- **Verwaltungsprinzip**: Optimierungs-Mods in `gte/overrides/mods/` ablegen (für normale Launcher), sie dürfen **nicht** als Build-Abhängigkeiten in `modules/gte-dev-runtime` aufgenommen werden.

---

### Regel 3: Entwicklungsumgebungs-Abhängigkeiten müssen einheitlich `modLocalRuntime` verwenden

- **Absturzursache**: Normale `localRuntime`- oder `fileTree`-Abhängigkeiten lösen den Deobfuscation-Remapper von ModDevGradle nicht aus, was zu fehlenden Symbolen oder gebrochenen Obfuscation-Namen zur Laufzeit führt.
- **Verwaltungsprinzip**: In `modules/gte-dev-runtime/build.gradle` muss `modLocalRuntime(...)` deklariert und `obfuscation.createRemappingConfiguration(configurations.localRuntime)` konfiguriert werden.

---

### Regel 4: Lösung für Gradle-Inkremental-Compile-Deadlock (`NoSuchFileException`)

- **Symptom**: Beim Ausführen von `compileJava` oder `build` erscheint `NoSuchFileException: ...\build\classes\java\main\...` oder `Unable to delete directory 'build'`.
- **Ursache**: Ein im Hintergrund verbliebener Gradle-Daemon-Prozess blockiert Windows-Dateisperren.
- **Standardlösung**:
  ```powershell
  # 1. Hintergrund-Gradle-Daemon-Prozesse vollständig beenden
  .\gradlew.bat --stop

  # 2. Konfliktbehaftete Build-Cache-Verzeichnisse löschen und neu kompilieren
  Remove-Item -Recurse -Force modules/*/build
  .\gradlew.bat compileJava
  ```

---

### Regel 5: Erzwungene Integrations-Selbstprüfung nach Änderungen am zugrunde liegenden `gtm-reborn`

Wenn Änderungen an den Basismaschinen, dem Materialsystem, RecipeType, Rezeptbedingungen oder Capabilities von `gtm-reborn` vorgenommen wurden, müssen die folgenden drei Schritte nacheinander ausgeführt werden:
1. **Kompilierungsintegrität von `gtecore` prüfen**: `.\gradlew.bat :modules:gtecore:compileJava` ausführen.
2. **KubeJS-Integrationsskripte prüfen**: Die GTCEu-Registrierungsereignisse in `startup_scripts/` und die Maschinenreferenzen in `server_scripts/` überprüfen.
3. **FTB-Quests-Item-Referenzen prüfen**: Überprüfen, ob das Questbuch auf umbenannte oder entfernte Item-IDs verweist.

---

## 📚 Echte Absturz-Analysen und Reparatur-Rezept-Bibliothek (Post-Mortems)

### Fall 1: `GTBlocks.copy` / Erz-Registrierung wirft `ClassCastException`
- **Fehler-Stacktrace**: `BlockBehaviour$Properties cannot be cast to BlockPropertiesAccessor`
- **Reparaturlösung**: Verwende `if (props instanceof BlockPropertiesAccessor acc)`, um alle Property-Kopierlogik abzusichern.

### Fall 2: `GrowingPlantRender` Cast auf `IntegerPropertyAccessor` stürzt ab
- **Fehler-Stacktrace**: `IntegerProperty cannot be cast to IntegerPropertyAccessor`
- **Reparaturlösung**: Durch native Stream-Operation ersetzen:
  ```java
  property.getPossibleValues().stream().min(Integer::compare).orElse(0);
  ```

### Fall 3: `GregTechDatagen.initPre` zeigt `AssertionError`
- **Fehler-Stacktrace**: `AssertionError at RegistrateDataProviderAccessor.gtceu$getTypes()`
- **Reparaturlösung**: Die statische Map von `RegistrateDataProvider` wird nur unter dem Parameter `--datagen` initialisiert. Den Aufruf in `try { ... } catch (Throwable ignored) { }` kapseln, um Fehler beim normalen Start zu vermeiden.

### Fall 4: Fehlender `PonderPlugin` führt zu `NoClassDefFoundError`
- **Fehler-Stacktrace**: `GTMachines.<clinit>` wirft `NoClassDefFoundError: PonderPlugin`, danach stürzt Ponder mit `requires flywheel` ab
- **Reparaturlösung**: In `modules/gte-dev-runtime/build.gradle` sowohl `modLocalRuntime(forge.ponder)` als auch `modLocalRuntime(forge.flywheel.forge)` einbinden.