# Guía de importación de CurseForge e implementación de servidor

Además del paquete de instalación sin compilación, GTE proporciona un paquete estándar de CurseForge y un paquete de servidor construidos automáticamente con **Packwiz**.

---

## 📦 Importación del paquete estándar de CurseForge

El archivo del paquete de mods en formato CurseForge se llama `GTE-CurseForge-<versión>.zip`.

### Métodos de importación en el cliente

=== "Importación con PCL2 / HMCL"

    1. Abre el lanzador y selecciona **Instalar nueva versión del juego / Importar paquete de mods**.
    2. Selecciona el archivo `GTE-CurseForge-<versión>.zip` descargado.
    3. El lanzador analizará automáticamente `manifest.json` y descargará los mods dependientes de forma concurrente a alta velocidad.
    4. Después de la importación, ve a la configuración de la versión y especifica el runtime de Java como **Java 21**.
    5. Configura la memoria (se recomienda 8GB ~ 12GB) e inicia el juego.

=== "Importación con la aplicación CurseForge"

    1. Abre la aplicación CurseForge.
    2. Haz clic en el icono **Minecraft** a la izquierda y entra en **My Modpacks**.
    3. En el menú de configuración de la esquina superior derecha, haz clic en **Create Custom Profile** ➜ **Import**.
    4. Selecciona `GTE-CurseForge-<versión>.zip` y espera a que se descargue e instale automáticamente.

=== "Importación con Prism Launcher"

    1. Haz clic en **Add Instance (Añadir instancia)** ➜ **Import (Importar)**.
    2. Navega y selecciona `GTE-CurseForge-<versión>.zip`.
    3. Después de crear la instancia, en sus propiedades establece la ruta de Java como **JDK 21**.

---

## 🖥️ Guía de implementación del servidor

El archivo del paquete del servidor se llama `GTE-Server-<versión>.zip`.

### 1. Preparación del entorno
- Sistema operativo: Linux (Ubuntu 22.04+ / Debian 12+) o Windows Server 2022+
- **JDK 21 debe estar listo**: ejecuta `java -version` en la terminal y confirma que la salida sea `openjdk version "21..."`.
- Configuración recomendada: CPU de 4 núcleos o superior, 16GB de memoria física (asigna 10G ~ 14G al servidor de Minecraft).

### 2. Pasos de implementación

```bash
# 1. Crear el directorio de trabajo del servidor
mkdir -p /opt/gte-server && cd /opt/gte-server

# 2. Descomprimir el paquete del servidor
unzip GTE-Server-*.zip -d .

# 3. Instalar el núcleo del servidor Forge 1.20.1-47.3.0 / 47.4.4 (si no está preinstalado)
# Ejecutar el script de instalación para descargar minecraft_server y las librerías de forge
java -jar forge-1.20.1-*-installer.jar --installServer

# 4. Aceptar el acuerdo EULA de Minecraft
echo "eula=true" > eula.txt
```

### 3. Configuración del script de inicio (`run_server.sh` / `run_server.bat`)

Se recomienda usar los parámetros de optimización de Aikar para iniciar el servidor:

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

    $JAVA_CMD $FLAGS @libraries/net/minecraftforge/forge/1.20.1-47.3.0/unix_args.txt nogui
    ```

=== "Windows (`run_server.bat`)"

    ```bat
    @echo off
    set JAVA_CMD=java
    set MEMORY=12G

    set FLAGS=-Xms%MEMORY% -Xmx%MEMORY% -XX:+UseG1GC -XX:+ParallelRefProcEnabled -XX:MaxGCPauseMillis=200 -XX:+UnlockExperimentalVMOptions -XX:+DisableExplicitGC -XX:+AlwaysPreTouch

    %JAVA_CMD% %FLAGS% @libraries/net/minecraftforge/forge/1.20.1-47.3.0/win_args.txt nogui
    pause
    ```

---

## ⚙️ Solución de problemas comunes (FAQ)

### P1: Al iniciar el servidor aparece `UnsupportedClassVersionError: ... class file version 65.0`
> **Causa**: La versión de Java en el servidor es inferior a Java 21 (la versión 65.0 corresponde a JDK 21).  
> **Solución**: En Linux, cambia a OpenJDK 21 con `sudo update-alternatives --config java`.

### P2: Los jugadores reciben un mensaje de que la lista de mods no coincide al entrar al servidor
> **Solución**: Asegúrate de que la versión del cliente sea exactamente la misma que la del servidor. Cada compilación CI del proyecto principal genera simultáneamente los artefactos de Cliente y Servidor correspondientes.