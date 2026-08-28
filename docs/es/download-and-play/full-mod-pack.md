# Guía de descarga del modpack y del paquete cliente con todos los mods

GTE (GregTech Easy) ofrece tres formatos de entrega para jugadores y administradores de servidores con diferentes niveles técnicos:

1. **Paquete estándar CurseForge (`GTE-CurseForge-*.zip`)**: El formato estándar de importación para lanzadores. Incluye `manifest.json` y los mods están en `overrides/mods/`; el lanzador instala Forge automáticamente. **Esta es la opción recomendada para la mayoría de los jugadores.**
2. **Paquete cliente con todos los mods (`GTE-FullMod-*.zip`)**: Un archivo plano que contiene únicamente el contenido del juego en el nivel superior, para jugadores que configuran su propia instancia.
3. **Paquete de servidor (`GTE-Server-*.zip`)**: Paquete de servidor dedicado de Forge, con `mods/` en el nivel superior del zip, para abrir servidores y jugar en línea.

---

## 📦 Paquete cliente con todos los mods

### Estructura del archivo

```text
README_安装必看.txt
mods/            (17 JAR)
config/
defaultconfigs/
kubejs/
```

No hay ningún directorio `.minecraft/` anidado, ni lanzador incluido, ni `run_game.bat`. Minecraft y Forge los instala tu lanzador, por lo que este paquete asume que **ya sabes crear una instancia en tu lanzador**.

### Requisitos obligatorios del entorno

| Elemento | Versión | Observaciones |
| :--- | :--- | :--- |
| **Minecraft** | `1.20.1` | No se acepta ninguna otra versión |
| **Forge** | `47.4.1` | Debe ser exactamente esta versión |
| **Java** | `21` | Nunca uses Java 17 ni Java 8 |

> [!CAUTION]
> **Forge debe ser 47.4.1, no «47.4.1 o cualquier versión superior».**
> - El mod `gtmthings` requiere Forge `[47.4.1,)`, por lo que cualquier versión inferior no se cargará;
> - pero Forge 47.4.10 incluye ASM 9.8 + coremods 5.2.4, lo que rompe los mixins de `appliedenergistics2` 15.4.9 y el juego nunca llega al menú principal.
>
> 47.4.1 es la única versión que funciona.

### Pasos de instalación

=== "Método 1: Configurar la instancia manualmente (este paquete)"

    1. En tu lanzador (PCL2 / HMCL / Prism / MultiMC / lanzador oficial, todos funcionan), crea una instancia de Minecraft **1.20.1** e instala **Forge 47.4.1**.
    2. Iníciala una vez y confirma que llegas al menú principal (así se descartan problemas del lanzador y de Java).
    3. Abre el directorio de juego de esa instancia (la carpeta `.minecraft`; los lanzadores suelen tener un botón «abrir carpeta»).
    4. Extrae el contenido de `GTE-FullMod-<versión>.zip` dentro, fusionándolo con las carpetas existentes del mismo nombre.
    5. En la configuración de la instancia, establece Java en **Java 21** y asigna **8G ~ 12G** de memoria.
    6. Inicia el juego. El primer arranque genera las configuraciones y es más lento de lo habitual.

=== "Método 2: Importación con un clic en el lanzador (recomendado)"

    Usa en su lugar `GTE-CurseForge-<versión>.zip` y elige **importar modpack** en CurseForge App / PCL2 / HMCL / Prism Launcher / MultiMC. Ese paquete incluye `manifest.json`, por lo que el lanzador instala Forge por ti y no hace falta configuración manual.

=== "Método 3: Abrir un servidor"

    Usa en su lugar `GTE-Server-<versión>.zip`; su carpeta `mods/` está en el nivel superior del zip. Descomprímelo en la raíz del servidor, ejecuta `java -jar forge-*-installer.jar --installServer` y arráncalo con `@libraries/net/minecraftforge/forge/1.20.1-47.4.1/unix_args.txt nogui`.

> [!WARNING]
> Los JAR cuyos nombres terminan en `-slim.jar` o `-dev-slim.jar` son artefactos para consumidores de Maven que deliberadamente no incluyen dependencias jar-in-jar y **nunca** deben colocarse en `mods/`. Forge elegiría entonces una compilación de `gtceu` sin `ldlib` incluido y abortaría con `Missing or unsupported mandatory dependencies: Mod ID: 'ldlib' ... [MISSING]`. Ninguno de los tres paquetes publicados contiene este tipo de archivos.

---

## ⚠️ Requisitos del entorno de ejecución Java 21 (extremadamente importante)

> [!CAUTION]
> **Este paquete integrado requiere obligatoriamente el entorno de ejecución Java 21 (JDK 21)!**
> No uses **Java 17** ni **Java 8**, de lo contrario el juego se bloqueará o se negará a iniciar.

### ¿Por qué es obligatorio usar Java 21?
- Los mods principales de GTE (`gtecore`, `gtm-reborn`, `gt--`) utilizan completamente las **características modernas del lenguaje Java 21** (como Record Patterns, Virtual Threads, mejora de coincidencia de Switch).
- Los scripts de compilación de Gradle configuran globalmente `JavaLanguageVersion.of(21)` para forzar la verificación de la cadena de herramientas.

### Direcciones de descarga recomendadas para JDK 21

| Distribución | Enlace de descarga | Razón de recomendación |
| :--- | :--- | :--- |
| **Azul Zulu 21 (LTS)** | [Haz clic para ir al sitio web de Azul](https://www.azul.com/downloads/?version=java-21-lts) | Excelente rendimiento, muy buena optimización para el multihilo a gran escala de Minecraft |
| **Eclipse Temurin 21 (LTS)** | [Haz clic para ir al sitio web de Adoptium](https://adoptium.net/temurin/releases/?version=21) | Recomendado oficialmente, alta compatibilidad y estabilidad |
| **Microsoft OpenJDK 21** | [Haz clic para ir al sitio web de Microsoft](https://learn.microsoft.com/zh-cn/java/openjdk/download) | Buena adaptación nativa en plataformas Windows |

### Configurar Java 21 en el lanzador

```mermaid
graph LR
    A[Crear instancia 1.20.1] --> B[Instalar Forge 47.4.1]
    B --> C[Ruta de Java / tiempo de ejecución]
    C --> D[Seleccionar el javaw.exe del JDK 21 instalado]
    D --> E[Asignar 8192MB ~ 12288MB de memoria]
    E --> F[Extraer GTE-FullMod e iniciar el juego]
```

---

## 🎮 Atajos de teclado y comandos comunes en el juego

| Comando / Atajo | Descripción de función | Requisito de permisos |
| :--- | :--- | :--- |
| `/ftbquests editing_mode true` | Activar el modo de edición visual del libro de misiones (modo autor) | Permisos de OP |
| `/ftbquests reload` | Recargar en caliente los archivos de configuración del libro de misiones de FTB Quests | Todos |
| `/kubejs reload server_scripts` | Recargar en caliente los scripts de modificación del servidor y las recetas | Permisos de OP |
| `/kubejs reload client_scripts` | Recargar en caliente los scripts de modificación del cliente y la lógica de visualización | Sin permisos |
| `/dumpmultiblock` | Exportar con un clic el código de estructura de bloques múltiples después de seleccionar un área con el hacha de madera | Permisos de OP |
| <kbd>U</kbd> / <kbd>R</kbd> | Ver el uso (Usage) / receta (Recipe) del objeto bajo el cursor | Atajos de EMI / JEI |
| <kbd>F7</kbd> | Ver el nivel de luz circundante (las cruces rojas indican áreas de aparición de monstruos) | Atajo del cliente |
