# Flujo de trabajo de interfaces, texturas y arte en Blockbench

El proyecto GTE ha establecido un pipeline de procesamiento de activos artísticos automatizado y sin pérdidas. Los diseñadores de modelos solo necesitan usar **Blockbench** para crear modelos y guardarlos en el directorio de origen. Las tareas de Gradle se encargan automáticamente de la clasificación de activos, la validación de formatos y la sincronización incremental.

---

## 🎨 Directorio de archivos fuente de arte (`art_assets/`)

El directorio `art_assets/` en la raíz del proyecto es el **único directorio de trabajo** para los diseñadores de arte, y está estrictamente versionado por Git:

```
art_assets/
├── *.bbmodel                           # Archivos fuente del proyecto Blockbench (conserva capas y huesos)
├── *.json                              # Modelos geométricos de Minecraft exportados desde Blockbench
├── *.png                               # Texturas (objetos / carcasas de bloques / texturas de formaciones)
├── *.png.mcmeta                        # Metadatos de animación y material
└── projectuhv/                         # Subdirectorio de texturas especiales para la serie de circuitos de alto voltaje
```

---

## 🏷️ Convenciones de nomenclatura y reglas de enrutamiento automático

La tarea de Gradle `syncBlockbenchAssets` distribuye automáticamente los archivos a las rutas de recursos correspondientes en `modules/gtecore` según las palabras clave en los nombres de archivo:

| Tipo de archivo | Palabras clave en el nombre | Directorio de sincronización automática (GTECore) |
| :--- | :--- | :--- |
| **Texturas de objetos** (`.png`) | `processor`, `string`, `symbol`, `paper`, `wafer`, `chip`, `god`, `rune`, `yin`, `yang` | `src/main/resources/assets/gtecore/textures/item/` |
| **Texturas de carcasas de bloques** (`.png`) | `casing`, `module`, `concrete`, `coil`, `zhenfa`, `matrix`, `buffer`, `generator`, `machine` | `src/main/resources/assets/gtecore/textures/block/` |
| **Modelos de bloques** (`.json`) | `casing`, `module`, `block`, `matrix` | `src/main/resources/assets/gtecore/models/block/` |
| **Modelos de objetos** (`.json`) | Todos los demás archivos de modelo (excluyendo `.bbmodel`) | `src/main/resources/assets/gtecore/models/item/` |

---

## 🔄 Tarea de sincronización de activos con un clic (`syncBlockbenchAssets`)

Después de exportar modelos o modificar texturas, ejecuta en la terminal:

```powershell
$env:JAVA_HOME='C:\Users\Ex_Je\.jdks\ms-21.0.11'
.\gradlew.bat syncBlockbenchAssets
```

### Características de automatización
1. **Activación automática**: Esta tarea está montada en los nodos previos de `buildAll`, `copyOutputJars` y el flujo de CI. Se ejecuta automáticamente al compilar localmente o iniciar el juego, sin necesidad de copiar manualmente repetidamente.
2. **Seguridad incremental**: Utiliza sobrescritura de flujo binario y completa automáticamente los directorios padre faltantes en el directorio de recursos de destino.
3. **Mantiene Git limpio**: Los archivos `.bbmodel` se conservan solo en `art_assets/` como proyecto fuente; el jar compilado no incluirá metadatos redundantes del proyecto Blockbench.