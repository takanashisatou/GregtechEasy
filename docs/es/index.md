# Documentación Oficial de GregTech Easy (GTE)

¡Bienvenido a la guía oficial integral del paquete de mods **GregTech Easy (GTE)**!

GTE es un paquete de mods moderno para Minecraft 1.20.1 cuyo núcleo conceptual es **"simple, divertido, interesante y de corta duración"**.

---

## ⚡ Índice de Acceso Rápido

<div class="grid cards" markdown>

-   :material-download: __[Guía para Jugadores y Paquetes de Mods](download-and-play/lazy-pack.md)__

    ---

    Descarga el **paquete completo listo para usar sin compilar**, el paquete estándar de CurseForge y el servidor, y aprende sobre la configuración del entorno de ejecución **Java 21** y los tutoriales de importación con lanzadores.

    [:octicons-arrow-right-24: Ir ahora](download-and-play/lazy-pack.md)

-   :material-chip: __[Explicación Detallada del Mod Central GTECore](gtecore/overview.md)__

    ---

    Profundiza en el **Horno de Refinación de la Alquimia Yin-Yang**, las **Formaciones de los Cuatro Símbolos**, el **Centro de Procesamiento de Minerales**, el **Anillo de los Milagros**, los **Circuitos de Supercuerdas y Yin-Yang**, el **Ensamblador de Plantillas AE2 Plus** y otros contenidos centrales.

    [:octicons-arrow-right-24: Ir ahora](gtecore/overview.md)

-   :material-cog: __[Rama del Mod GTM Reborn](gtm-reborn/index.md)__

    ---

    Conoce las características de la rama `satou`: recetas de múltiples amperios, modo de procesamiento por lotes, overclocking Subtick de 1t, pruebas automatizadas con GameTest y la salida de fluidos por rango.

    [:octicons-arrow-right-24: Ir ahora](gtm-reborn/index.md)

-   :material-code-tags: __[Modificaciones KubeJS y Herramientas de Desarrollo](kubejs/scripting-guide.md)__

    ---

    Aprende a registrar materiales y escribir recetas en KubeJS, y utiliza la herramienta de selección con hacha de madera `/dumpmultiblock` integrada para exportar código de estructuras multibloque con un solo clic.

    [:octicons-arrow-right-24: Ir ahora](kubejs/scripting-guide.md)

-   :material-hammer-wrench: __[Manual Práctico para Desarrolladores y Prevención de Fallos](development/quick-start.md)__

    ---

    Domina el inicio rápido sin lanzador con `run_game.bat`, el mapeo de directorios sin copias con `link_to_launcher.bat`, y la regla de oro para evitar fallos de Mixin Accessor.

    [:octicons-arrow-right-24: Ir ahora](development/quick-start.md)

-   :material-robot: __[Pipeline CI/CD y Traducción con IA](ci-cd-and-translation/ci-pipeline.md)__

    ---

    Conoce la compilación paralela automatizada de múltiples módulos basada en GitHub Actions, el empaquetado con Packwiz, la publicación en Maven y el script de internacionalización con IA `opencode_translate.py`.

    [:octicons-arrow-right-24: Ir ahora](ci-cd-and-translation/ci-pipeline.md)

</div>

---

## 🛠️ Información Básica del Proyecto

| Elemento de Configuración | Descripción |
| :--- | :--- |
| **Nombre del Proyecto** | `GregtechEasy` (`gte-multi`) |
| **Cadena de Herramientas de Ejecución y Compilación** | **JDK 21** (uso obligatorio de la Toolchain de Java 21, estrictamente unificada en todos los submódulos) |
| **Versión del Juego** | Minecraft `1.20.1` (Forge `47.4.1`) |
| **Licencia de Código Abierto** | LGPL-3.0 / MIT |
| **Ramas Predeterminadas** | `main` / `master` en el repositorio principal, `satou` para GTM-Reborn, `kotlin` para GT--, `master` para GTECore |