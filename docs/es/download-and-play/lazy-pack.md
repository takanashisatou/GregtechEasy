# Guía de descarga del paquete integrado y paquete perezoso para jugadores

GTE (GregTech Easy) ofrece tres formatos de entrega listos para usar para jugadores y administradores de servidores con diferentes niveles técnicos:

1. **Paquete perezoso completo sin compilación para jugadores (`GTE-LazyPack-*.zip`)**: Incluye todos los mods precompilados, configuraciones, scripts de modificación y la estructura completa del directorio `.minecraft`. **Haz doble clic o arrástralo al lanzador para jugar**.
2. **Paquete estándar CurseForge (`GTE-CurseForge-*.zip`)**: Formato estándar de CurseForge, se puede importar directamente con un clic en PCL2 / HMCL / CurseForge App / Prism Launcher.
3. **Paquete integrado de servidor (`GTE-Server-*.zip`)**: Incluye configuración de servidor limpia, mods y scripts de inicio, para abrir servidores y jugar en línea.

---

## 🚀 Paquete perezoso para jugadores (recomendado)

### Características y ventajas
- **0 dependencias de compilación**: No es necesario instalar el entorno de compilación JDK, IntelliJ IDEA o Git.
- **Empaquetado completo**: Los últimos JAR publicados de `gtecore`, `gtm-reborn`, `gt--` y los mods de extensión adicionales ya están incluidos en el directorio `mods/`.
- **Arrastrar y jugar**: Compatible con la importación con un clic mediante arrastre en PCL2 / HMCL.

### Pasos de importación e inicio

=== "Método 1: Arrastre con un clic en el lanzador (recomendado)"

    1. Abre **PCL2 (Plain Craft Launcher 2)** o **HMCL (Hello Minecraft! Launcher)**.
    2. Arrastra el archivo `GTE-LazyPack-<versión>.zip` descargado directamente a la ventana principal del lanzador con el **botón izquierdo del ratón**.
    3. El lanzador lo reconocerá automáticamente y lo descomprimirá en la lista de versiones del juego.
    4. Ve a la **configuración de versión** de esa versión y especifica el tiempo de ejecución de Java como **Java 21**.
    5. Asigna **8GB ~ 12GB** de memoria y ¡haz clic para iniciar el juego!

=== "Método 2: Modo de descompresión manual"

    1. Descomprime el archivo en cualquier ruta sin caracteres chinos ni espacios (por ejemplo, `D:\Games\GTE\`).
    2. Después de descomprimir, obtendrás un directorio `.minecraft` que contiene `mods/`, `config/`, `kubejs/`.
    3. En el lanzador, agrega una versión del juego y selecciona la carpeta `.minecraft` descomprimida como directorio raíz del juego.
    4. Asegúrate de seleccionar el núcleo **Java 21** e inicia.

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
    A[Abrir el lanzador] --> B[Entrar en la configuración de la versión GTE]
    B --> C[Ruta de Java / tiempo de ejecución]
    C --> D[Seleccionar el javaw.exe del JDK 21 instalado]
    D --> E[Asignar 8192MB ~ 12288MB de memoria]
    E --> F[Guardar e iniciar el juego]
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