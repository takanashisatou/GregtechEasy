# 防崩溃开发守则与实战排错经验库 (Guide Anti-Crash)

Dans un environnement de développement Minecraft multi-modules, multi-Classloader et avec un renforcement de bytecode Mixin complexe, certaines écritures imprudentes peuvent provoquer des crashs catastrophiques au runtime.

Ce manuel résume les **cinq règles d'or anti-crash** et la **bibliothèque d'expérience de dépannage des crashs fréquents** issues de la pratique du projet GTE.

---

## 🛡️ Les cinq règles d'or du développement anti-crash (CRITIQUE)

### Règle 1 : Interdiction stricte de forcer la conversion des interfaces Accessor Mixin (Ne jamais forcer la conversion des Accessors)

- **Cause racine du crash** : Dans un environnement multi-modules ou lors du chargement d'Addon, les classes natives de Minecraft (comme `BlockBehaviour.Properties`) sont instanciées par le Classloader précoce. À ce moment, l'interface Mixin peut ne pas encore avoir subi le tissage de bytecode, et la conversion forcée déclenchera directement une `ClassCastException` !
- **Écriture incorrecte (interdite)** :
  ```java
  // Erreur ! En cas de chargement précoce de classe, provoque une ClassCastException
  int destroyTime = ((BlockPropertiesAccessor) props).getDestroyTime();
  ```
- **Écriture correcte (garde de sécurité)** :
  ```java
  // Correct : utiliser une garde de modèle instanceof
  if (props instanceof BlockPropertiesAccessor acc) {
      newProps.destroyTime(acc.getDestroyTime());
  }
  ```
- **Meilleure solution** : Privilégier les API natives Vanilla/Forge (par exemple, obtenir la plage d'entiers via `property.getPossibleValues()` plutôt que de forcer la conversion `IntegerPropertyAccessor`).

---

### Règle 2 : Interdiction de placer les mods d'optimisation/shader de production dans l'environnement de développement

- **Cause racine du crash** : Les mods d'optimisation de production comme `Oculus`, `Embeddium`, `ModernFix`, `ModernUI` intègrent des mappings Mixin SRG codés en dur (comme `f_117950_`, `m_91302_`). Or, l'environnement de développement Gradle `runClient` fonctionne avec les mappings Mojang désambiguïsés, ce qui provoque directement une `InvalidMixinException`.
- **Principe de gestion** : Placer les mods d'optimisation dans `gte/overrides/mods/` (pour les lanceurs normaux), et interdire strictement de les ajouter comme dépendances de construction de `modules/gte-dev-runtime`.

---

### Règle 3 : Les dépendances de l'environnement de développement doivent utiliser uniformément `modLocalRuntime`

- **Cause racine du crash** : Un `localRuntime` ordinaire ou un `fileTree` ne déclenche pas le remappeur de désambiguïsation (Remapper) de ModDevGradle, ce qui entraîne des symboles introuvables ou des noms de mappings rompus au runtime.
- **Principe de gestion** : Dans `modules/gte-dev-runtime/build.gradle`, il faut déclarer `modLocalRuntime(...)` et configurer `obfuscation.createRemappingConfiguration(configurations.localRuntime)`.

---

### Règle 4 : Solution au blocage de compilation incrémentale Gradle (`NoSuchFileException`)

- **Symptôme** : Lors de l'exécution de `compileJava` ou `build`, une erreur `NoSuchFileException: ...\build\classes\java\main\...` ou `Unable to delete directory 'build'` apparaît.
- **Cause racine** : Un processus Daemon Gradle résiduel en arrière-plan occupe les verrous de fichiers Windows.
- **Solution standard** :
  ```powershell
  # 1. Terminer complètement les processus Daemon Gradle résiduels en arrière-plan
  .\gradlew.bat --stop

  # 2. Supprimer les répertoires de cache build conflictuels puis recompiler
  Remove-Item -Recurse -Force modules/*/build
  .\gradlew.bat compileJava
  ```

---

### Règle 5 : Auto-vérification obligatoire après modification du `gtm-reborn` sous-jacent

Lorsque vous modifiez les machines de base, le système de matériaux, les RecipeType, les conditions de recette ou les Capability de `gtm-reborn`, vous devez effectuer les trois vérifications suivantes dans l'ordre :
1. **Vérifier l'intégrité de compilation de `gtecore`** : Exécutez `.\gradlew.bat :modules:gtecore:compileJava`.
2. **Vérifier les scripts de liaison KubeJS** : Vérifiez les événements d'enregistrement GTCEu dans `startup_scripts/` et les références Machine dans `server_scripts/`.
3. **Vérifier les références d'objets FTB Quests** : Vérifiez si le livre de quêtes référence des ID d'objets renommés ou supprimés.

---

## 📚 Bibliothèque de révision des crashs réels et de recettes de réparation (Post-Mortems)

### Cas 1 : `GTBlocks.copy` / enregistrement de minerai provoque une `ClassCastException`
- **Pile d'erreurs** : `BlockBehaviour$Properties cannot be cast to BlockPropertiesAccessor`
- **Solution** : Utiliser `if (props instanceof BlockPropertiesAccessor acc)` pour protéger toute la logique de copie des propriétés.

### Cas 2 : `GrowingPlantRender` force la conversion `IntegerPropertyAccessor` et crashe
- **Pile d'erreurs** : `IntegerProperty cannot be cast to IntegerPropertyAccessor`
- **Solution** : Remplacer par une opération de flux native :
  ```java
  property.getPossibleValues().stream().min(Integer::compare).orElse(0);
  ```

### Cas 3 : `GregTechDatagen.initPre` provoque une `AssertionError`
- **Pile d'erreurs** : `AssertionError at RegistrateDataProviderAccessor.gtceu$getTypes()`
- **Solution** : La Map statique de `RegistrateDataProvider` n'est initialisée qu'avec le paramètre `--datagen`. Enveloppez l'appel dans `try { ... } catch (Throwable ignored) { }` pour éviter l'erreur lors d'un démarrage normal.

### Cas 4 : `PonderPlugin` manquant provoque une `NoClassDefFoundError`
- **Pile d'erreurs** : `GTMachines.<clinit>` lève `NoClassDefFoundError: PonderPlugin`, puis Ponder crashe avec le message `requires flywheel`
- **Solution** : Dans `modules/gte-dev-runtime/build.gradle`, ajoutez à la fois `modLocalRuntime(forge.ponder)` et `modLocalRuntime(forge.flywheel.forge)`.