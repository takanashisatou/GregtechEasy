# Pipeline de CI/CD de construcción, empaquetado y publicación Maven automatizados

GTE ha establecido un **pipeline de CI/CD de GitHub Actions** altamente automatizado y con múltiples artefactos en paralelo (los archivos de configuración se encuentran en `.github/workflows/sync-build.yml` y `release-publish.yml`).

---

## 🔄 Arquitectura completa del pipeline de CI (`sync-build.yml`)

Cada vez que se envía código a las ramas `master` / `main` / `satou`, se envía un PR o se activa una etiqueta de Release, GitHub Actions ejecuta automáticamente el siguiente pipeline estándar:

```mermaid
flowchart TD
    A[Empuje de código / Activación de Tag] --> B[Checkout de submódulos recursivos y configuración de JDK 21 / Python 3.11 / Go]
    B --> C[Sincronización incremental de activos de arte de Blockbench con Gradle syncBlockbenchAssets]
    C --> D[Compilación de múltiples módulos de alta concurrencia y pruebas automatizadas en máquina real con GameTest]
    D --> E[Copiar los Jars generados a overrides/mods y recopilarlos en build/artifacts]
    E --> F[Ejecutar opencode_translate.py para traducción internacional AI completa/incremental]
    F --> G[Empaquetado estándar de Packwiz: paquete CurseForge + parche de manifest de Java 21]
    G --> H[Python construye el paquete completo para jugadores Zero-Compile .minecraft]
    H --> I[Packwiz exporta el paquete de servidor puro]
    I --> J[Subir todos los artefactos de Release al almacenamiento de Actions Artifacts]
    J --> K[Construir un repositorio Maven estático y desplegarlo en GitHub Pages (gh-pages)]
    J --> L[Cuando se activa un Tag: publicar automáticamente en la plataforma CurseForge]
```

---

## 📦 Detalle de las tres tareas principales de empaquetado

### 1. Paquete estándar de CurseForge y parche de Java 21
- **Exportación de Packwiz**: ejecutar `packwiz curseforge export` para generar el paquete estándar.
- **Parche automático de manifest.json**: para el problema de que algunos lanzadores de terceros asignan por defecto Java 17 al analizar paquetes de CurseForge, el CI descomprime automáticamente el zip, y mediante un script de Python escribe forzosamente **hardcodeado a 21** el `minecraft.javaVersion` y el `javaVersion` de nivel superior en `manifest.json`, y luego lo vuelve a empaquetar.

### 2. Paquete completo para jugadores sin compilación (`build_lazy_pack.py`)
- El script de Python extrae automáticamente los Jars principales más recientes de `build/libs/` de cada módulo.
- Fusiona automáticamente los Mods de extensión clave bajo `modules/gtecore/gradle/libs/`.
- Empaqueta toda la configuración, scripts de KubeJS y el manual de Patchouli en un archivo comprimido `.minecraft` listo para usar, con una guía de inicio en chino incluida.

### 3. Paquete de exportación para servidor (`packwiz server export`)
- Elimina automáticamente los Mods de optimización exclusivos del cliente (como capas de skin 3D, shaders, asignaciones de teclas, etc.), generando un servidor puro que se puede desplegar directamente en servidores de producción Linux/Windows.

---

## 🌐 Despliegue del repositorio Maven estático en GitHub Pages

El pipeline, mediante la tarea `publish` de Gradle, construye todos los submódulos (`gtecore`, `gtm-reborn`, `gt--`) como artefactos Maven estándar y los despliega en la rama `gh-pages`:

```groovy
// Referencia directa al repositorio Maven de GTE en Mods de terceros o proyectos de desarrollo
repositories {
    maven {
        name = "GTE GitHub Pages Maven"
        url = "https://takanashisatou.github.io/GregtechEasy/"
    }
}

dependencies {
    implementation fg.deobf("org.satou.gtecore:gtecore-1.20.1:1.0.0")
}
```

---

## 🏷️ Flujo de trabajo de publicación manual y etiquetado de versiones (`release-publish.yml`)

El proyecto utiliza un flujo de Release de Git estandarizado:
1. Activar manualmente **Manual Publish Release** en la página de GitHub Actions, ingresando el número de versión (por ejemplo, `2.3.0`).
2. El flujo de trabajo crea automáticamente un PR de `dev -> release`, ejecuta la validación de CI y realiza un Squash Merge automático.
3. Automáticamente etiqueta la rama `release` con el Tag de Git `v2.3.0` y lo empuja.
4. El evento de empuje del Tag activa automáticamente `sync-build.yml`, completando finalmente la publicación de artefactos en todos los canales.