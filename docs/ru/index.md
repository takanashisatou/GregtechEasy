# Официальная документация GregTech Easy (GTE)

Добро пожаловать в официальное всеобъемлющее руководство по сборке **GregTech Easy (GTE)**!

GTE — это современная сборка для Minecraft 1.20.1, основанная на принципах **«Просто, весело, интересно, быстро»**.

---

## ⚡ Индекс быстрых ссылок

<div class="grid cards" markdown>

-   :material-download: __[Руководство для игроков и по сборке](download-and-play/lazy-pack.md)__

    ---

    Скачайте готовую к использованию **полную сборку без компиляции**, пакет CurseForge и серверную часть, узнайте о настройке окружения **Java 21** и импорте через лаунчер.

    [:octicons-arrow-right-24: Перейти](download-and-play/lazy-pack.md)

-   :material-chip: __[Подробное описание основного мода GTECore](gtecore/overview.md)__

    ---

    Узнайте о **Печи бессмертия Инь-Ян**, **Формации Четырех Символов**, **Центре переработки руды**, **Кольце Чудес**, **Сверхструнных и Инь-Ян схемах**, **AE2 Шаблонный узел Plus** и других ключевых элементах.

    [:octicons-arrow-right-24: Перейти](gtecore/overview.md)

-   :material-cog: __[Ветка мода GTM Reborn](gtm-reborn/index.md)__

    ---

    Узнайте о функциях ветки `satou`: мультиамперные рецепты, пакетный режим, разгон 1t Subtick, автоматическое тестирование GameTest и вывод жидкости с интервалами.

    [:octicons-arrow-right-24: Перейти](gtm-reborn/index.md)

-   :material-code-tags: __[KubeJS: модификации и инструменты разработки](kubejs/scripting-guide.md)__

    ---

    Научитесь регистрировать материалы, писать рецепты в KubeJS и использовать встроенный инструмент выделения `/dumpmultiblock` для мгновенного экспорта кода многоструктурных блоков.

    [:octicons-arrow-right-24: Перейти](kubejs/scripting-guide.md)

-   :material-hammer-wrench: __[Практическое руководство для разработчиков и защита от сбоев](development/quick-start.md)__

    ---

    Освойте мгновенный запуск без лаунчера через `run_game.bat`, сопоставление каталогов без копирования через `link_to_launcher.bat` и золотое правило предотвращения сбоев Mixin Accessor.

    [:octicons-arrow-right-24: Перейти](development/quick-start.md)

-   :material-robot: __[Конвейер CI/CD и AI-перевод](ci-cd-and-translation/ci-pipeline.md)__

    ---

    Узнайте об автоматизированной многомодульной параллельной сборке на основе GitHub Actions, упаковке Packwiz, публикации в Maven и AI-скрипте интернационализации `opencode_translate.py`.

    [:octicons-arrow-right-24: Перейти](ci-cd-and-translation/ci-pipeline.md)

</div>

---

## 🛠️ Основная информация о проекте

| Параметр | Описание |
| :--- | :--- |
| **Название проекта** | `GregtechEasy` (`gte-multi`) |
| **Инструментарий для запуска и компиляции** | **JDK 21** (обязательно использование Toolchain Java 21, все подмодули строго унифицированы) |
| **Версия игры** | Minecraft `1.20.1` (Forge `47.4.1`) |
| **Лицензия с открытым исходным кодом** | LGPL-3.0 / MIT |
| **Ветки по умолчанию** | Основной репозиторий `main` / `master`, GTM-Reborn `satou`, GT-- `kotlin`, GTECore `master` |