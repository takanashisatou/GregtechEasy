# 防崩溃开发守则与实战排错经验库 (Guía Anti-Crash)

En entornos de desarrollo de Minecraft con múltiples módulos, múltiples Classloaders y compleja mejora de bytecode Mixin, algunas escrituras descuidadas pueden provocar fallos catastróficos en tiempo de ejecución.

Este manual resume las **cinco reglas de oro anti-crash** y la **base de experiencia de resolución de fallos de alta frecuencia** acumuladas en la práctica del proyecto GTE.

---

## 🛡️ Cinco Reglas de Oro para el Desarrollo Anti-Crash (CRÍTICO)

### Regla de Oro 1: Prohibido forzar la conversión de interfaces Accessor de Mixin (Nunca Forzar Conversión de Accessors)

- **Causa raíz del fallo**: En entornos de múltiples módulos o durante la carga de Addons, las clases nativas de Minecraft (como `BlockBehaviour.Properties`) se instancian con un Classloader temprano. En ese momento, la interfaz Mixin puede no haber completado el tejido de bytecode, ¡y forzar la conversión provocará directamente una `ClassCastException`!
- **Escritura incorrecta (prohibida)**:
  ```java
  // ¡Error! Al cargar clases tempranamente, siempre provocará ClassCastException
  int destroyTime = ((BlockPropertiesAccessor) props).getDestroyTime();
  ```
- **Escritura correcta (guardia segura)**:
  ```java
  // Correcto: usar guardia de patrón instanceof
  if (props instanceof BlockPropertiesAccessor acc) {
      newProps.destroyTime(acc.getDestroyTime());
  }
  ```
- **Mejor solución**: Priorizar el uso de APIs nativas de Vanilla/Forge (por ejemplo, obtener el rango de enteros mediante `property.getPossibleValues()` en lugar de forzar la conversión a `IntegerPropertyAccessor`).

---

### Regla de Oro 2: Prohibido colocar Mods de optimización/sombreado de producción en el entorno de desarrollo

- **Causa raíz del fallo**: Mods de optimización de producción como `Oculus`, `Embeddium`, `ModernFix`, `ModernUI` incluyen mapeos Mixin SRG codificados (como `f_117950_`, `m_91302_`). Sin embargo, el entorno de desarrollo `runClient` de Gradle se ejecuta con mapeos Mojang desofuscados, lo que provoca directamente un fallo `InvalidMixinException`.
- **Principio de gestión**: Colocar los mods de optimización en `gte/overrides/mods/` (para uso con lanzadores normales), y está prohibido agregarlos como dependencias de construcción de `modules/gte-dev-runtime`.

---

### Regla de Oro 3: Las dependencias del entorno de desarrollo deben usar uniformemente `modLocalRuntime`

- **Causa raíz del fallo**: Un `localRuntime` común o `fileTree` no activa el remapeador de ofuscación de ModDevGradle, lo que provoca que en tiempo de ejecución no se encuentren símbolos o que los nombres ofuscados se rompan.
- **Principio de gestión**: En `modules/gte-dev-runtime/build.gradle`, se debe declarar `modLocalRuntime(...)` y configurar `obfuscation.createRemappingConfiguration(configurations.localRuntime)`.

---

### Regla de Oro 4: Solución al bloqueo de compilación incremental de Gradle (`NoSuchFileException`)

- **Síntoma**: Al ejecutar `compileJava` o `build`, aparece `NoSuchFileException: ...\build\classes\java\main\...` o `Unable to delete directory 'build'`.
- **Causa raíz**: Procesos daemon de Gradle residuales en segundo plano ocupan bloqueos de archivos de Windows.
- **Solución estándar**:
  ```powershell
  # 1. Terminar por completo los procesos daemon de Gradle residuales en segundo plano
  .\gradlew.bat --stop

  # 2. Eliminar los directorios de caché de build conflictivos y recompilar
  Remove-Item -Recurse -Force modules/*/build
  .\gradlew.bat compileJava
  ```

---

### Regla de Oro 5: Autocomprobación forzada de integración después de modificar el `gtm-reborn` subyacente

Cuando se modifican las máquinas base, el sistema de materiales, los RecipeTypes, las condiciones de recetas o las Capabilities de `gtm-reborn`, se deben ejecutar secuencialmente los siguientes tres pasos de verificación:
1. **Verificar la integridad de compilación de `gtecore`**: Ejecutar `.\gradlew.bat :modules:gtecore:compileJava`.
2. **Verificar los scripts de integración de KubeJS**: Revisar los eventos de registro de GTCEu en `startup_scripts/` y las referencias de Machine en `server_scripts/`.
3. **Verificar las referencias de ítems en FTB Quests**: Revisar si el libro de misiones referencia IDs de ítems que fueron renombrados o eliminados.

---

## 📚 Base de Revisión de Fallos Reales y Recetas de Reparación (Post-Mortems)

### Caso 1: `GTBlocks.copy` / registro de minerales lanza `ClassCastException`
- **Pila de errores**: `BlockBehaviour$Properties cannot be cast to BlockPropertiesAccessor`
- **Solución**: Usar `if (props instanceof BlockPropertiesAccessor acc)` para proteger toda la lógica de copia de propiedades.

### Caso 2: `GrowingPlantRender` fuerza conversión a `IntegerPropertyAccessor` y falla
- **Pila de errores**: `IntegerProperty cannot be cast to IntegerPropertyAccessor`
- **Solución**: Reemplazar con operación de flujo nativa:
  ```java
  property.getPossibleValues().stream().min(Integer::compare).orElse(0);
  ```

### Caso 3: `GregTechDatagen.initPre` aparece `AssertionError`
- **Pila de errores**: `AssertionError at RegistrateDataProviderAccessor.gtceu$getTypes()`
- **Solución**: El Map estático de `RegistrateDataProvider` solo se inicializa con el parámetro `--datagen`. Envolver la llamada en `try { ... } catch (Throwable ignored) { }` para evitar errores en el inicio normal.

### Caso 4: Falta `PonderPlugin` que provoca `NoClassDefFoundError`
- **Pila de errores**: `GTMachines.<clinit>` lanza `NoClassDefFoundError: PonderPlugin`, luego Ponder falla indicando `requires flywheel`
- **Solución**: En `modules/gte-dev-runtime/build.gradle`, agregar tanto `modLocalRuntime(forge.ponder)` como `modLocalRuntime(forge.flywheel.forge)`.