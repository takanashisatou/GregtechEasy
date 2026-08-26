# Guia de Início Rápido para Desenvolvedores

Este guia é destinado a programadores Java/Kotlin e autores de modpacks que participam do desenvolvimento do projeto multi-módulo GTE-Multi.

---

## 💻 1. Preparação do Ambiente de Desenvolvimento

### Requisito Obrigatório: JDK 21
Este projeto utiliza **JDK 21** em todos os módulos. Instalações recomendadas:
- [Azul Zulu JDK 21](https://www.azul.com/downloads/?version=java-21-lts)
- [Eclipse Temurin JDK 21](https://adoptium.net/temurin/releases/?version=21)

### IDE Recomendada e Plugins
Recomenda-se o uso do **IntelliJ IDEA 2023.3+** com os seguintes plugins oficiais:
- **Minecraft Development**: Fornece sugestões de código Mixin, reconhecimento de AT (Access Transformers) e destaque de eventos.
- **Lombok**: Suporta anotações como `@Getter`, `@Setter`, `@NoArgsConstructor`.
- **Kotlin**: Suporte ao desenvolvimento do módulo GT-- CE.

---

## 📥 2. Clonagem do Repositório e Importação do Projeto

Como este projeto contém vários submódulos Git, **é necessário clonar recursivamente**:

```bash
# 1. Clonar recursivamente o repositório principal e todos os submódulos
git clone --recurse-submodules https://github.com/takanashisatou/GregtechEasy.git GTEGroup
cd GTEGroup

# 2. Se já clonou anteriormente, atualize e inicialize os submódulos
git submodule update --init --recursive
```

### Guia de Importação no IDEA
1. No IDEA, clique em **File ➜ Open**, selecione o `build.gradle` na raiz e abra como projeto.
2. Vá para as configurações: `Settings` ➜ `Build, Execution, Deployment` ➜ `Build Tools` ➜ `Gradle`.
3. Defina o **Gradle JVM** como **JDK 21**.

---

## 🛠️ 3. Comandos Gradle Comuns

Execute no Windows PowerShell (é necessário definir `JAVA_HOME` previamente):

```powershell
$env:JAVA_HOME='C:\Users\Ex_Je\.jdks\ms-21.0.11'

# 1. Compilar um submódulo específico
.\gradlew.bat :modules:gtecore:compileJava
.\gradlew.bat :modules:gt--:compileKotlin
.\gradlew.bat :modules:gtm-reborn:compileJava

# 2. Executar teste de servidor GameTest do GTM-Reborn
.\gradlew.bat :modules:gtm-reborn:runGameTestServer

# 3. Executar formatação de código
.\gradlew.bat :modules:gtm-reborn:spotlessApply

# 4. Compilar todos os módulos e empacotar Jar com um comando
.\gradlew.bat buildAll -x test

# 5. Sincronizar os Jars gerados para gte/overrides/mods/
.\gradlew.bat copyOutputJars

# 6. Publicar todos os módulos no repositório Maven local (~/.m2/repository/)
.\gradlew.bat publishAllToMavenLocal

# 7. Publicar artefatos estáticos de todos os módulos em build/maven (para GitHub Pages Maven)
.\gradlew.bat publishAllToMaven
```