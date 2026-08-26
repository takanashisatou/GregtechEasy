# Краткое руководство для разработчиков

Это руководство предназначено для Java/Kotlin программистов и авторов модпаков, участвующих в разработке межмодульного проекта GTE-Multi.

---

## 💻 1. Подготовка среды разработки

### Обязательное требование JDK 21
Во всех модулях проекта используется **JDK 21**. Рекомендуемые дистрибутивы:
- [Azul Zulu JDK 21](https://www.azul.com/downloads/?version=java-21-lts)
- [Eclipse Temurin JDK 21](https://adoptium.net/temurin/releases/?version=21)

### Рекомендуемая IDE и плагины
Рекомендуется использовать **IntelliJ IDEA 2023.3+** со следующими официальными плагинами:
- **Minecraft Development**: обеспечивает подсказки для Mixin, распознавание AT-трансформеров и подсветку событий.
- **Lombok**: поддержка аннотаций `@Getter`, `@Setter`, `@NoArgsConstructor` и других.
- **Kotlin**: поддержка разработки модулей GT-- CE.

---

## 📥 2. Клонирование репозитория и импорт проекта

Поскольку проект содержит несколько Git-подмодулей (Submodules), **клонирование должно быть рекурсивным**:

```bash
# 1. Рекурсивное клонирование основного репозитория и всех подмодулей
git clone --recurse-submodules https://github.com/takanashisatou/GregtechEasy.git GTEGroup
cd GTEGroup

# 2. Если репозиторий уже клонирован, обновить и инициализировать подмодули
git submodule update --init --recursive
```

### Инструкция по импорту в IDEA
1. В IDEA нажмите **File ➜ Open** и выберите корневой файл `build.gradle` для открытия как проекта.
2. Перейдите в настройки: `Settings` ➜ `Build, Execution, Deployment` ➜ `Build Tools` ➜ `Gradle`.
3. Укажите **Gradle JVM** как **JDK 21**.

---

## 🛠️ 3. Часто используемые команды сборки Gradle

Выполняйте в Windows PowerShell (предварительно задайте `JAVA_HOME`):

```powershell
$env:JAVA_HOME='C:\Users\Ex_Je\.jdks\ms-21.0.11'

# 1. Компиляция отдельного модуля
.\gradlew.bat :modules:gtecore:compileJava
.\gradlew.bat :modules:gt--:compileKotlin
.\gradlew.bat :modules:gtm-reborn:compileJava

# 2. Запуск серверного теста GameTest для GTM-Reborn
.\gradlew.bat :modules:gtm-reborn:runGameTestServer

# 3. Запуск форматирования кода
.\gradlew.bat :modules:gtm-reborn:spotlessApply

# 4. Однокомандная компиляция всех модулей и сборка Jar
.\gradlew.bat buildAll -x test

# 5. Синхронизация скомпилированных Jar в gte/overrides/mods/
.\gradlew.bat copyOutputJars

# 6. Публикация всех модулей в локальный Maven-репозиторий (~/.m2/repository/)
.\gradlew.bat publishAllToMavenLocal

# 7. Публикация статических артефактов всех модулей в build/maven (для GitHub Pages Maven)
.\gradlew.bat publishAllToMaven
```