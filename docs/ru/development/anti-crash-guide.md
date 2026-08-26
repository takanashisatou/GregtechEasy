# Руководство по предотвращению крашей и практическая база знаний по устранению неполадок (Anti-Crash Guide)

В среде разработки Minecraft с несколькими модулями, несколькими загрузчиками классов и сложным усилением байт-кода Mixin, некоторые неосторожные подходы могут привести к катастрофическим сбоям во время выполнения.

В этом руководстве собраны **пять железных правил предотвращения крашей** и **база знаний по устранению частых сбоев**, выработанные в ходе практической разработки GTE.

---

## 🛡️ Пять железных правил предотвращения крашей (CRITICAL)

### Правило 1: Запрещено принудительное приведение типов к интерфейсам Mixin Accessor (Never Force-Cast Accessors)

- **Причина краша**: В среде с несколькими модулями или при загрузке аддонов, нативные классы Minecraft (например, `BlockBehaviour.Properties`) создаются ранним загрузчиком классов, и в этот момент интерфейсы Mixin могут ещё не быть полностью внедрены в байт-код. Принудительное приведение типов немедленно вызовет `ClassCastException`!
- **Неправильный код (запрещено)**:
  ```java
  // Ошибка! При ранней загрузке классов обязательно будет ClassCastException
  int destroyTime = ((BlockPropertiesAccessor) props).getDestroyTime();
  ```
- **Правильный код (безопасная защита)**:
  ```java
  // Правильно: используйте защиту через instanceof
  if (props instanceof BlockPropertiesAccessor acc) {
      newProps.destroyTime(acc.getDestroyTime());
  }
  ```
- **Лучший вариант**: Предпочтительно использовать нативные API Vanilla/Forge (например, получать диапазон целых чисел через `property.getPossibleValues()`, а не приводить к `IntegerPropertyAccessor`).

---

### Правило 2: Запрещено помещать оптимизационные/шейдерные моды производственной среды в среду разработки

- **Причина краша**: Оптимизационные моды производственной среды, такие как `Oculus`, `Embeddium`, `ModernFix`, `ModernUI`, содержат жёстко закодированные SRG-обфусцированные Mixin-маппинги (например, `f_117950_`, `m_91302_`). Однако среда разработки Gradle `runClient` работает с деобфусцированными маппингами Mojang, что напрямую вызывает `InvalidMixinException`.
- **Принцип управления**: Помещайте оптимизационные моды в `gte/overrides/mods/` (для обычных лаунчеров), строго запрещено добавлять их в зависимости сборки `modules/gte-dev-runtime`.

---

### Правило 3: Зависимости среды разработки должны использовать только `modLocalRuntime`

- **Причина краша**: Обычный `localRuntime` или `fileTree` не запускает ремаппер деобфускации ModDevGradle, что приводит к невозможности найти символы во время выполнения или к разрыву обфусцированных имён.
- **Принцип управления**: В `modules/gte-dev-runtime/build.gradle` необходимо объявлять `modLocalRuntime(...)` и настраивать `obfuscation.createRemappingConfiguration(configurations.localRuntime)`.

---

### Правило 4: Решение проблемы взаимоблокировки инкрементальной компиляции Gradle (`NoSuchFileException`)

- **Симптомы**: При выполнении `compileJava` или `build` появляется `NoSuchFileException: ...\build\classes\java\main\...` или `Unable to delete directory 'build'`.
- **Причина**: Фоновый процесс Gradle Daemon удерживает файловые блокировки Windows.
- **Стандартное решение**:
  ```powershell
  # 1. Полностью остановить фоновые процессы Gradle Daemon
  .\gradlew.bat --stop

  # 2. Удалить конфликтующие каталоги кэша build и перекомпилировать
  Remove-Item -Recurse -Force modules/*/build
  .\gradlew.bat compileJava
  ```

---

### Правило 5: Обязательная проверка взаимосвязей после изменения базового `gtm-reborn`

При изменении базовых машин, системы материалов, RecipeType, условий рецептов или Capability в `gtm-reborn`, необходимо последовательно выполнить следующие три шага проверки:
1. **Проверить целостность компиляции `gtecore`**: Выполнить `.\gradlew.bat :modules:gtecore:compileJava`.
2. **Проверить скрипты KubeJS**: Проверить события регистрации GTCEu в `startup_scripts/` и ссылки на Machine в `server_scripts/`.
3. **Проверить ссылки на предметы в FTB Quests**: Проверить, не ссылается ли книга заданий на переименованные или удалённые ID предметов.

---

## 📚 База реальных разборов крашей и рецептов исправления (Post-Mortems)

### Случай 1: `GTBlocks.copy` / регистрация руды вызывает `ClassCastException`
- **Стек ошибки**: `BlockBehaviour$Properties cannot be cast to BlockPropertiesAccessor`
- **Решение**: Использовать `if (props instanceof BlockPropertiesAccessor acc)` для защиты всей логики копирования свойств.

### Случай 2: `GrowingPlantRender` вызывает краш при приведении к `IntegerPropertyAccessor`
- **Стек ошибки**: `IntegerProperty cannot be cast to IntegerPropertyAccessor`
- **Решение**: Заменить на нативную потоковую операцию:
  ```java
  property.getPossibleValues().stream().min(Integer::compare).orElse(0);
  ```

### Случай 3: `GregTechDatagen.initPre` вызывает `AssertionError`
- **Стек ошибки**: `AssertionError at RegistrateDataProviderAccessor.gtceu$getTypes()`
- **Решение**: Статическая Map в `RegistrateDataProvider` инициализируется только при параметре `--datagen`. Оберните вызов в `try { ... } catch (Throwable ignored) { }`, чтобы избежать ошибки при обычном запуске.

### Случай 4: Отсутствие `PonderPlugin` вызывает `NoClassDefFoundError`
- **Стек ошибки**: `GTMachines.<clinit>` выбрасывает `NoClassDefFoundError: PonderPlugin`, затем Ponder падает с сообщением `requires flywheel`
- **Решение**: В `modules/gte-dev-runtime/build.gradle` одновременно добавить `modLocalRuntime(forge.ponder)` и `modLocalRuntime(forge.flywheel.forge)`.