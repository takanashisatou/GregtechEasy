# Guía de inicio rápido para desarrolladores

Esta guía está dirigida a programadores de Java/Kotlin y autores de modpacks que participan en el desarrollo del proyecto de ingeniería de módulos cruzados GTE-Multi.

---

## 💻 1. Preparación del entorno de desarrollo

### Requisito obligatorio de JDK 21
Todos los módulos de este proyecto utilizan **JDK 21** de manera uniforme. Se recomienda instalar:
- [Azul Zulu JDK 21](https://www.azul.com/downloads/?version=java-21-lts)
- [Eclipse Temurin JDK 21](https://adoptium.net/temurin/releases/?version=21)

### IDE recomendado y complementos
Se recomienda usar **IntelliJ IDEA 2023.3+** e instalar los siguientes complementos oficiales:
- **Minecraft Development**: proporciona sugerencias de código Mixin, reconocimiento de AT (Access Transformer) y resaltado de eventos.
- **Lombok**: admite anotaciones como `@Getter`, `@Setter`, `@NoArgsConstructor`.
- **Kotlin**: admite el desarrollo del módulo GT-- CE.

---

## 📥 2. Clonación del repositorio e importación del proyecto

Debido a que este proyecto incluye múltiples submódulos de Git (Submodules), **es obligatorio clonar de forma recursiva**:

```bash
# 1. Clonar recursivamente el repositorio principal y todos los submódulos
git clone --recurse-submodules https://github.com/takanashisatou/GregtechEasy.git GTEGroup
cd GTEGroup

# 2. Si ya se clonó antes, actualizar e inicializar los submódulos
git submodule update --init --recursive
```

### Guía de importación en IDEA
1. En IDEA, haga clic en **File ➜ Open** y seleccione el archivo `build.gradle` en el directorio raíz para abrirlo como proyecto.
2. Vaya a la configuración: `Settings` ➜ `Build, Execution, Deployment` ➜ `Build Tools` ➜ `Gradle`.
3. Establezca **Gradle JVM** como **JDK 21**.

---

## 🛠️ 3. Comandos comunes de compilación con Gradle

Ejecute en Windows PowerShell (debe configurar `JAVA_HOME` previamente):

```powershell
$env:JAVA_HOME='C:\Users\Ex_Je\.jdks\ms-21.0.11'

# 1. Compilar solo un submódulo específico
.\gradlew.bat :modules:gtecore:compileJava
.\gradlew.bat :modules:gt--:compileKotlin
.\gradlew.bat :modules:gtm-reborn:compileJava

# 2. Ejecutar el servidor de pruebas GameTest de GTM-Reborn
.\gradlew.bat :modules:gtm-reborn:runGameTestServer

# 3. Ejecutar el formateo de código
.\gradlew.bat :modules:gtm-reborn:spotlessApply

# 4. Compilar todos los módulos y empaquetar los Jars de una vez
.\gradlew.bat buildAll -x test

# 5. Sincronizar los Jars compilados a gte/overrides/mods/
.\gradlew.bat copyOutputJars

# 6. Publicar todos los módulos en el repositorio Maven local (~/.m2/repository/)
.\gradlew.bat publishAllToMavenLocal

# 7. Publicar todos los módulos como artefactos estáticos en build/maven (para GitHub Pages Maven)
.\gradlew.bat publishAllToMaven
```