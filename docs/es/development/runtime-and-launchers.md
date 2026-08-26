# Depuración local en caliente y ejecución rápida sin lanzador

GTE ha diseñado un sistema de depuración sin fricciones extremadamente amigable para planificadores de modpacks, escritores de misiones y programadores de mods.

---

## ⚡ 1. Script de inicio ultrarrápido sin lanzador (`run_game.bat` / `run_game.sh`)

Para autores de libros de misiones (FTB Quests) y planificadores de recetas de KubeJS, **no es necesario abrir IntelliJ IDEA ni instalar ningún lanzador de terceros**, simplemente haga doble clic en **`run_game.bat`** en la raíz del proyecto para entrar al juego a gran velocidad.

```mermaid
graph TD
    A[Haga doble clic en run_game.bat] --> B[Escaneo automático de la ruta local de JDK 21 y persistencia]
    B --> C[Detección automática de memoria física y núcleos de CPU]
    C --> D[Cálculo dinámico de la asignación óptima de memoria JVM y subprocesos GC]
    D --> E[Montaje directo de gte/overrides como directorio de trabajo del juego]
    E --> F[Iniciar el juego: lectura y escritura en tiempo real de quests y scripts rastreados por Git]
```

### Características principales

1. **Detección automática de JDK 21**: busca automáticamente Java 21 instalado en `.jdks`, `Adoptium`, `Zulu`, `Program Files`, y lo recuerda automáticamente en `.jdk_path`.
2. **Optimización adaptativa de hardware**: asigna automáticamente el tamaño del heap de JVM según la RAM total del equipo en una proporción óptima (50%~60% de memoria física disponible) y configura automáticamente los subprocesos de GC paralelos.
3. **Flujo de trabajo sin mover archivos**: modifica las misiones en el juego (`/ftbquests editing_mode true`) y guarda; los cambios se guardan en tiempo real en `config/ftbquests/` correspondiente del repositorio Git, ¡abre GitHub Desktop y haz commit con un clic!

---

## 🔗 2. Herramienta de mapeo sin copias para lanzadores externos (`link_to_launcher.bat`)

Si estás acostumbrado a usar un lanzador con tu piel y atajos de teclado configurados (como PCL2 / HMCL / Prism Launcher):

1. Haz doble clic en **`link_to_launcher.bat`** en el directorio raíz.
2. Sigue las indicaciones y arrastra el directorio del juego de tu lanzador (por ejemplo, `D:\PCL2\.minecraft\versions\GTE-Dev\.minecraft\`) a la consola y presiona Enter.
3. El script creará automáticamente enlaces simbólicos de directorios de Windows (Directory Junctions):
   - `config` ➜ `gte/overrides/config`
   - `kubejs` ➜ `gte/overrides/kubejs`
   - `ftbquests` ➜ `gte/overrides/config/ftbquests`
   - `defaultconfigs` ➜ `gte/overrides/defaultconfigs`
4. No importa cómo modifiques misiones o recetas en el lanzador, **los datos físicos se sincronizan y guardan en tiempo real en el repositorio principal de Git**!

---

## ☕ 3. Entorno sombra de compilación en caliente para código de mods (`gte-dev-runtime`)

Para programadores de Java/Kotlin, `modules/gte-dev-runtime` es un módulo de depuración sombra dedicado:

### Principio de funcionamiento y consideraciones de diseño

- **Posicionamiento**: sandbox de depuración local de compilación en caliente, **prohibido empaquetar y publicar, no aparecerá en ningún artefacto de jugador**.
- **Reasignación dinámica de ModDevGradle**: compila en caliente automáticamente el código fuente más reciente de `gtm-reborn` y `gtecore` y lo monta en el espacio de nombres de ofuscación inversa de Mojang.
- **Método de inicio**:
  - En IDEA, selecciona la configuración de ejecución **`Run GTE Full Pack (Client - Hot Debug)`**.
  - O ejecuta desde la línea de comandos:

    ```powershell
    .\gradlew.bat :modules:gte-dev-runtime:runClient
    ```