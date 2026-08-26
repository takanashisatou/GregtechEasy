# 개발자 빠른 시작 가이드

이 가이드는 GTE-Multi 크로스 모듈 프로젝트 개발에 참여하는 Java/Kotlin 프로그래머와 모드팩 제작자를 대상으로 합니다.

---

## 💻 1. 개발 환경 준비

### JDK 21 필수 요구 사항
이 프로젝트는 모든 모듈에서 **JDK 21**을 통일적으로 사용합니다. 다음을 설치하는 것이 좋습니다:
- [Azul Zulu JDK 21](https://www.azul.com/downloads/?version=java-21-lts)
- [Eclipse Temurin JDK 21](https://adoptium.net/temurin/releases/?version=21)

### IDE 권장 사항 및 플러그인
**IntelliJ IDEA 2023.3+** 사용을 권장하며, 다음 공식 플러그인을 설치하세요:
- **Minecraft Development**: Mixin 코드 힌트, AT 액세스 트랜스포머 인식 및 이벤트 하이라이트를 제공합니다.
- **Lombok**: `@Getter`, `@Setter`, `@NoArgsConstructor` 등의 애노테이션을 지원합니다.
- **Kotlin**: GT-- CE 모듈 개발을 지원합니다.

---

## 📥 2. 저장소 클론 및 프로젝트 가져오기

이 프로젝트는 여러 Git 서브모듈(Submodules)을 포함하고 있으므로 **재귀적으로 가져와야 합니다**:

```bash
# 1. 递归克隆主仓库与所有子模块
git clone --recurse-submodules https://github.com/takanashisatou/GregtechEasy.git GTEGroup
cd GTEGroup

# 2. 若之前已克隆，更新并初始化子模块
git submodule update --init --recursive
```

### IDEA 가져오기 지침
1. IDEA에서 **File ➜ Open**을 클릭하고 루트 디렉터리의 `build.gradle`을 선택하여 프로젝트로 엽니다.
2. 설정으로 이동: `Settings` ➜ `Build, Execution, Deployment` ➜ `Build Tools` ➜ `Gradle`.
3. **Gradle JVM**을 **JDK 21**로 지정합니다.

---

## 🛠️ 3. 일반적인 Gradle 빌드 명령어

Windows PowerShell에서 실행합니다 (`JAVA_HOME`을 미리 설정해야 합니다):

```powershell
$env:JAVA_HOME='C:\Users\Ex_Je\.jdks\ms-21.0.11'

# 1. 单独编译指定子模块
.\gradlew.bat :modules:gtecore:compileJava
.\gradlew.bat :modules:gt--:compileKotlin
.\gradlew.bat :modules:gtm-reborn:compileJava

# 2. 运行 GTM-Reborn GameTest 服务端实机测试
.\gradlew.bat :modules:gtm-reborn:runGameTestServer

# 3. 运行代码格式化
.\gradlew.bat :modules:gtm-reborn:spotlessApply

# 4. 一键全模块编译并打包 Jar
.\gradlew.bat buildAll -x test

# 5. 将编译生成的 Jar 同步至 gte/overrides/mods/
.\gradlew.bat copyOutputJars

# 6. 发布全模块至本地 Maven 仓库 (~/.m2/repository/)
.\gradlew.bat publishAllToMavenLocal

# 7. 发布全模块静态构件至 build/maven (用于 GitHub Pages Maven)
.\gradlew.bat publishAllToMaven
```