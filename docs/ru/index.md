# GregTech Easy (GTE) официальная документация

Добро пожаловать в официальное всеобъемлющее руководство по модпаку **GregTech Easy (GTE)**!

GTE — это современный модпак для Minecraft 1.20.1, основанный на принципах **«просто, весело, интересно, быстро»**.

---

## ⚡ Быстрый переход по разделам

<div class="grid cards" markdown>

-   :material-download: __[Руководство для игроков и по модпаку](download-and-play/lazy-pack.md)__

    ---

    Скачайте готовый **полный ленивый пакет без компиляции**, стандартный пакет CurseForge и сервер, узнайте о настройке среды выполнения **Java 21** и импорте в лаунчер.

    [:octicons-arrow-right-24: Перейти](download-and-play/lazy-pack.md)

-   :material-chip: __[Подробное описание основного модуля GTECore](gtecore/overview.md)__

    ---

    Узнайте подробнее о **печи алхимии инь-ян и багуа**, **формации четырёх символов**, **центре обработки руды**, **кольце чудес**, **сверхструнных и инь-ян схемах**, **AE2 Assembly Plus** и других ключевых элементах.

    [:octicons-arrow-right-24: Перейти](gtecore/overview.md)

-   :material-cog: __[Ветка мода GTM Reborn](gtm-reborn/index.md)__

    ---

    Узнайте о возможностях ветки `satou`: многоамперные рецепты, пакетный режим, разгон 1t Subtick, автоматическое тестирование GameTest и вывод жидкостей с интервалами.

    [:octicons-arrow-right-24: Перейти](gtm-reborn/index.md)

-   :material-code-tags: __[KubeJS: модификация и инструменты разработки](kubejs/scripting-guide.md)__

    ---

    Узнайте, как регистрировать материалы в KubeJS, создавать рецепты и использовать встроенный инструмент выделения деревянным топором `/dumpmultiblock` для экспорта кода многоструктурных блоков одним нажатием.

    [:octicons-arrow-right-24: Перейти](kubejs/scripting-guide.md)

-   :material-hammer-wrench: __[Практическое руководство для разработчиков и по предотвращению сбоев](development/quick-start.md)__

    ---

    Освойте мгновенный запуск без лаунчера с помощью `run_game.bat`, сопоставление каталогов без копирования с `link_to_launcher.bat`, а также золотое правило предотвращения сбоев Mixin Accessor.

    [:octicons-arrow-right-24: Перейти](development/quick-start.md)

-   :material-robot: __[CI/CD конвейер и AI-перевод](ci-cd-and-translation/ci-pipeline.md)__

    ---

    Узнайте об автоматизированной параллельной сборке нескольких модулей на основе GitHub Actions, упаковке Packwiz, публикации Maven и AI-скрипте интернационализации `opencode_translate.py`.

    [:octicons-arrow-right-24: Перейти](ci-cd-and-translation/ci-pipeline.md)

</div>

---

## 🛠️ Основная информация о проекте

| Параметр | Описание |
| :--- | :--- |
| **Название проекта** | `GregtechEasy` (`gte-multi`) |
| **Инструментарий для запуска и компиляции** | **JDK 21** (обязательно использование Java 21 Toolchain, все подмодули строго унифицированы) |
| **Версия игры** | Minecraft `1.20.1` (Forge `47.4.1`) |
| **Лицензия с открытым исходным кодом** | LGPL-3.0 / MIT |
| **Ветки по умолчанию** | Основной репозиторий `main` / `master`, GTM-Reborn `satou`, GT-- `kotlin`, GTECore `master` |