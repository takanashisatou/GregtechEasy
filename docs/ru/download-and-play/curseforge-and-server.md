# Руководство по импорту CurseForge и развертыванию сервера

Помимо клиентского пакета со всеми модами, GTE предоставляет пакет в формате CurseForge и серверный пакет, автоматически собираемые на основе **Packwiz**.

---

## 📦 Импорт пакета в формате CurseForge

Файл пакета в формате CurseForge называется `GTE-CurseForge-<номер версии>.zip`.

### Метод импорта для клиента

=== "Импорт через PCL2 / HMCL"

    1. Откройте лаунчер и выберите **Установить новую версию игры / Импортировать сборку**.
    2. Выберите загруженный файл `GTE-CurseForge-<номер версии>.zip`.
    3. Лаунчер автоматически проанализирует `manifest.json` и начнет высокоскоростную параллельную загрузку зависимых модов.
    4. После завершения импорта перейдите в настройки версии и укажите **Java 21** в качестве среды выполнения.
    5. Установите объем оперативной памяти (рекомендуется 8–12 ГБ) и запустите игру.

=== "Импорт через CurseForge App"

    1. Откройте приложение CurseForge.
    2. Нажмите на иконку **Minecraft** слева и перейдите в раздел **My Modpacks**.
    3. В меню настроек в правом верхнем углу выберите **Create Custom Profile** ➜ **Import**.
    4. Выберите `GTE-CurseForge-<номер версии>.zip` и дождитесь автоматической загрузки и завершения установки.

=== "Импорт через Prism Launcher"

    1. Нажмите **Add Instance (Добавить экземпляр)** ➜ **Import (Импортировать)**.
    2. Найдите и выберите `GTE-CurseForge-<номер версии>.zip`.
    3. После создания экземпляра укажите путь к **JDK 21** в его свойствах.

---

## 🖥️ Руководство по развертыванию сервера

Файл серверного пакета называется `GTE-Server-<номер версии>.zip`.

### 1. Подготовка окружения
- Операционная система: Linux (Ubuntu 22.04+ / Debian 12+) или Windows Server 2022+
- **JDK 21 должен быть установлен**: выполните `java -version` в терминале и убедитесь, что вывод содержит `openjdk version "21..."`.
- Рекомендуемая конфигурация: 4+ ядра CPU, 16 ГБ оперативной памяти (выделите серверу Minecraft 10–14 ГБ).

### 2. Шаги по развертыванию

```bash
# 1. Создайте рабочую директорию сервера
mkdir -p /opt/gte-server && cd /opt/gte-server

# 2. Распакуйте серверный пакет
unzip GTE-Server-*.zip -d .

# 3. Установите ядро сервера Forge 1.20.1-47.4.1 (если не предустановлено)
# Запустите скрипт установки для загрузки minecraft_server и библиотек forge
java -jar forge-1.20.1-*-installer.jar --installServer

# 4. Примите лицензионное соглашение Minecraft EULA
echo "eula=true" > eula.txt
```

### 3. Настройка скрипта запуска (`run_server.sh` / `run_server.bat`)

Рекомендуется запускать сервер с оптимизированными параметрами Aikar:

=== "Linux (`run_server.sh`)"

    ```bash
    #!/bin/bash
    JAVA_CMD="java"
    MEMORY="12G"

    FLAGS="-Xms${MEMORY} -Xmx${MEMORY} \
      -XX:+UseG1GC -XX:+ParallelRefProcEnabled -XX:MaxGCPauseMillis=200 \
      -XX:+UnlockExperimentalVMOptions -XX:+DisableExplicitGC -XX:+AlwaysPreTouch \
      -XX:G1NewSizePercent=30 -XX:G1MaxNewSizePercent=40 -XX:G1ReservePercent=20 \
      -XX:G1HeapWastePercent=5 -XX:G1MixedGCCountTarget=4 -XX:InitiatingHeapOccupancyPercent=15 \
      -XX:G1MixedGCLiveThresholdPercent=90 -XX:G1RSetUpdatingPauseTimePercent=5 \
      -XX:SurvivorRatio=32 -XX:+PerfDisableSharedMem -XX:MaxTenuringThreshold=1"

    $JAVA_CMD $FLAGS @libraries/net/minecraftforge/forge/1.20.1-47.4.1/unix_args.txt nogui
    ```

=== "Windows (`run_server.bat`)"

    ```bat
    @echo off
    set JAVA_CMD=java
    set MEMORY=12G

    set FLAGS=-Xms%MEMORY% -Xmx%MEMORY% -XX:+UseG1GC -XX:+ParallelRefProcEnabled -XX:MaxGCPauseMillis=200 -XX:+UnlockExperimentalVMOptions -XX:+DisableExplicitGC -XX:+AlwaysPreTouch

    %JAVA_CMD% %FLAGS% @libraries/net/minecraftforge/forge/1.20.1-47.4.1/win_args.txt nogui
    pause
    ```

---

## ⚙️ Устранение неполадок (FAQ)

### Вопрос 1: При запуске сервера появляется ошибка `UnsupportedClassVersionError: ... class file version 65.0`
> **Причина**: Версия Java на сервере ниже Java 21 (версия 65.0 соответствует JDK 21).  
> **Решение**: В Linux переключитесь на OpenJDK 21 с помощью команды `sudo update-alternatives --config java`.

### Вопрос 2: Игроки получают сообщение о несоответствии списка модов при входе на сервер
> **Решение**: Убедитесь, что номер версии клиента полностью совпадает с номером версии сервера. Каждая сборка основного проекта в CI генерирует согласованные артефакты Client и Server.