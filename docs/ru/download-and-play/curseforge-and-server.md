# Руководство по импорту CurseForge и развертыванию сервера

Помимо готового пакета без компиляции, GTE предоставляет пакеты CurseForge и серверные пакеты, автоматически собираемые на основе **Packwiz**.

---

## 📦 Импорт стандартного пакета CurseForge

Файл интеграционного пакета в формате CurseForge называется `GTE-CurseForge-<версия>.zip`.

### Методы импорта на клиенте

=== "Импорт через PCL2 / HMCL"

    1. Откройте лаунчер и выберите **Установить новую версию игры / Импортировать интеграционный пакет**.
    2. Выберите загруженный файл `GTE-CurseForge-<версия>.zip`.
    3. Лаунчер автоматически проанализирует `manifest.json` и быстро загрузит зависимые моды параллельно.
    4. После завершения импорта перейдите в настройки версии и укажите среду выполнения Java как **Java 21**.
    5. Установите объем оперативной памяти (рекомендуется 8–12 ГБ) и запустите игру.

=== "Импорт через приложение CurseForge"

    1. Откройте клиент CurseForge App.
    2. Нажмите на значок **Minecraft** слева и перейдите в **My Modpacks**.
    3. В меню настроек в правом верхнем углу нажмите **Create Custom Profile** ➜ **Import**.
    4. Выберите `GTE-CurseForge-<версия>.zip` и дождитесь автоматической загрузки и завершения установки.

=== "Импорт через Prism Launcher"

    1. Нажмите **Add Instance (Добавить экземпляр)** ➜ **Import (Импорт)**.
    2. Найдите и выберите `GTE-CurseForge-<версия>.zip`.
    3. После создания экземпляра укажите путь к **JDK 21** в свойствах экземпляра.

---

## 🖥️ Руководство по развертыванию сервера

Файл серверного пакета называется `GTE-Server-<версия>.zip`.

### 1. Подготовка окружения
- Операционная система: Linux (Ubuntu 22.04+ / Debian 12+) или Windows Server 2022+
- **JDK 21 должен быть установлен**: выполните `java -version` в терминале и убедитесь, что вывод содержит `openjdk version "21..."`.
- Рекомендуемая конфигурация: не менее 4 ядер CPU, 16 ГБ физической памяти (выделите серверу Minecraft 10–14 ГБ).

### 2. Шаги развертывания

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

Рекомендуется использовать оптимизированные параметры Aikar для запуска сервера:

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

## ⚙️ Устранение распространенных проблем (FAQ)

### Q1: При запуске сервера появляется `UnsupportedClassVersionError: ... class file version 65.0`
> **Причина**: версия Java во время выполнения сервера ниже Java 21 (версия 65.0 соответствует JDK 21).  
> **Решение**: на Linux переключитесь на OpenJDK 21 с помощью `sudo update-alternatives --config java`.

### Q2: При входе игроков на сервер появляется сообщение о несоответствии списка модов
> **Решение**: убедитесь, что версия клиента и сервера полностью совпадают. Каждая сборка CI основного проекта синхронно генерирует соответствующие артефакты Client и Server.