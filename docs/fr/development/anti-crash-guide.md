# Guide de développement anti-crash et bibliothèque d'expérience de dépannage (Guide Anti-Crash)

Dans un environnement de développement Minecraft multi-modules, multi-Classloader et avec un renforcement de bytecode Mixin complexe, certaines écritures imprudentes peuvent provoquer des crashs catastrophiques au runtime.

Ce manuel résume les **cinq règles d'or anti-crash** et la **bibliothèque d'expérience de dépannage des crashs fréquents** issues de la pratique du projet GTE.

---

## 🛡️ Les cinq règles d'or du développement anti-crash (CRITIQUE)

### Règle d'or 1 : Interdiction stricte de caster les interfaces Accessor Mixin (Ne jamais forcer le cast des Accessors)

- **Cause racine du crash** : Dans un environnement multi-modules ou lors du chargement d'Addon, les classes natives de Minecraft (comme `BlockBehaviour.Properties`) sont instanciées par le premier Classloader, et à ce moment l'interface Mixin peut ne pas encore avoir subi le tissage de bytecode. Un cast forcé déclenchera directement une `ClassCastException` !
- **Écriture incorrecte (strictement interdite)** :
  ```java
  // Erreur ! Crash ClassCastException garanti lors du chargement précoce des classes
  int destroyTime = ((BlockPropertiesAccessor) props).getDestroyTime();
  ```
- **Écriture correcte (garde de sécurité)** :
  ```java
  // Correct : utiliser une garde de motif instanceof
  if (props instanceof BlockPropertiesAccessor acc) {
      newProps.destroyTime(acc.getDestroyTime());
  }
  ```
- **Meilleure solution** : Privilégier les API natives Vanilla/Forge (par exemple, utiliser `property.getPossibleValues()` pour obtenir la plage d'entiers, plutôt que de caster `IntegerPropertyAccessor`).

---

### Règle d'or 2 : Interdiction de placer les mods d'optimisation/Shader de production dans l'environnement de développement

- **Cause racine du crash** : Les mods d'optimisation de production comme `Oculus`, `Embeddium`, `ModernFix`, `ModernUI` intègrent des mappings Mixin SRG codés en dur (comme `f_117950_`, `m_91302_`). Or, l'environnement de développement Gradle `runClient` fonctionne avec les mappings Mojang désobfusqués, ce qui provoque directement une `InvalidMixinException`.
- **Principe de gestion** : Placer les mods d'optimisation dans `gte/overrides/mods/` (pour les lanceurs normaux), et interdire strictement de les ajouter comme dépendances de build dans `modules/gte-dev-runtime`.

---

### Règle d'or 3 : Les dépendances de l'environnement de développement doivent utiliser uniformément `modLocalRuntime`

- **Cause racine du crash** : Un `localRuntime` ou `fileTree` ordinaire ne déclenche pas le remappeur de désobfuscation (Remapper) de ModDevGradle, ce qui entraîne des symboles introuvables ou des noms obfusqués cassés au runtime.
- **Principe de gestion** : Dans `modules/gte-dev-runtime/build.gradle`, il est obligatoire de déclarer `modLocalRuntime(...)` et de configurer `obfuscation.createRemappingConfiguration(configurations.localRuntime)`.

---

### Règle d'or 4 : Solution au blocage de compilation incrémentale Gradle (`NoSuchFileException`)

- **Symptôme** : Lors de l'exécution de `compileJava` ou `build`, une erreur `NoSuchFileException: ...\build\classes\java\main\...` ou `Unable to delete directory 'build'` apparaît.
- **Cause racine** : Un processus démon Gradle résiduel en arrière-plan occupe les verrous de fichiers Windows.
- **Solution standard** :
  ```powershell
  # 1. Terminer complètement les processus démon Gradle résiduels en arrière-plan
  .\gradlew.bat --stop

  # 2. Supprimer les répertoires de cache build conflictuels puis recompiler
  Remove-Item -Recurse -Force modules/*/build
  .\gradlew.bat compileJava
  ```

---

### Règle d'or 5 : Auto-vérification forcée après modification du `gtm-reborn` sous-jacent

Lorsque vous modifiez les machines de base, le système de matériaux, les RecipeType, les conditions de recette ou les Capability de `gtm-reborn`, vous devez effectuer les trois vérifications suivantes dans l'ordre :
1. **Vérifier l'intégrité de compilation de `gtecore`** : Exécuter `.\gradlew.bat :modules:gtecore:compileJava`.
2. **Vérifier les scripts de liaison KubeJS** : Vérifier les événements d'enregistrement GTCEu dans `startup_scripts/` et les références Machine dans `server_scripts/`.
3. **Vérifier les références d'objets FTB Quests** : Vérifier si le livre de quêtes référence des ID d'objets renommés ou supprimés.

---

## 📚 Bibliothèque de post-mortems réels et de correctifs (Post-Mortems)

### Cas 1 : `GTBlocks.copy` / enregistrement de minerai provoque une `ClassCastException`
- **Pile d'erreurs** : `BlockBehaviour$Properties cannot be cast to BlockPropertiesAccessor`
- **Correctif** : Utiliser `if (props instanceof BlockPropertiesAccessor acc)` pour protéger toute la logique de copie des propriétés.

### Cas 2 : `GrowingPlantRender` caste `IntegerPropertyAccessor` et crashe
- **Pile d'erreurs** : `IntegerProperty cannot be cast to IntegerPropertyAccessor`
- **Correctif** : Remplacer par une opération de flux native :
  ```java
  property.getPossibleValues().stream().min(Integer::compare).orElse(0);
  ```

### Cas 3 : `GregTechDatagen.initPre` provoque une `AssertionError`
- **Pile d'erreurs** : `AssertionError at RegistrateDataProviderAccessor.gtceu$getTypes()`
- **Correctif** : La Map statique de `RegistrateDataProvider` n'est initialisée qu'avec le paramètre `--datagen`. Envelopper l'appel dans `try { ... } catch (Throwable ignored) { }` pour éviter l'erreur lors d'un démarrage normal.

### Cas 4 : `PonderPlugin` manquant provoque une `NoClassDefFoundError`
- **Pile d'erreurs** : `GTMachines.<clinit>` lève `NoClassDefFoundError: PonderPlugin`, puis Ponder crashe avec le message `requires flywheel`
- **Correctif** : Dans `modules/gte-dev-runtime/build.gradle`, ajouter à la fois `modLocalRuntime(forge.ponder)` et `modLocalRuntime(forge.flywheel.forge)`.