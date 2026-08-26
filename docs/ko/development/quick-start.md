# 개발자 빠른 시작 가이드

본 가이드는 GTE-Multi 크로스 모듈 엔지니어링 개발에 참여하는 Java/Kotlin 프로그래머와 통합팩 제작자를 대상으로 합니다.

---

## 💻 1. 개발 환경 준비

### JDK 21 필수 요구 사항
이 프로젝트의 모든 모듈은 **JDK 21**을 공통으로 사용합니다. 다음을 설치하는 것을 권장합니다:
- [Azul Zulu JDK 21](https://www.azul.com/downloads/?version=java-21-lts)
- [Eclipse Temurin JDK 21](https://adoptium.net/temurin/releases/?version=21)

### IDE 권장 사항 및 플러그인
**IntelliJ IDEA 2023.3+** 사용을 권장하며, 다음 공식 플러그인을 설치하세요:
- **Minecraft Development**: Mixin 코드 힌트, AT 접근 변환기 인식 및 이벤트 하이라이트를 제공합니다.
- **Lombok**: `@Getter`, `@Setter`, `@NoArgsConstructor` 등의 어노테이션을 지원합니다.
- **Kotlin**: GT-- CE 모듈 개발을 지원합니다.

---

## 📥 2. 저장소 클론 및 프로젝트 가져오기

이 프로젝트는 여러 Git 서브모듈(Submodules)을 포함하고 있으므로 **반드시 재귀적으로 가져와야 합니다**:

```bash
# 1. 메인 저장소와 모든 서브모듈을 재귀적으로 클론
git clone --recurse-submodules https://github.com/takanashisatou/GregtechEasy.git GTEGroup
cd GTEGroup

# 2. 이미 클론한 경우, 서브모듈을 업데이트하고 초기화
git submodule update --init --recursive
```

### IDEA 가져오기 안내
1. IDEA에서 **File ➜ Open**을 클릭하고, 루트 디렉터리의 `build.gradle`을 선택하여 프로젝트로 엽니다.
2. 설정으로 이동: `Settings` ➜ `Build, Execution, Deployment` ➜ `Build Tools` ➜ `Gradle`.
3. **Gradle JVM**을 **JDK 21**로 지정합니다.

---

## 🛠️ 3. 자주 사용하는 Gradle 빌드 명령어

Windows PowerShell에서 실행합니다 (`JAVA_HOME`을 미리 설정해야 합니다):

```powershell
$env:JAVA_HOME='C:\Users\Ex_Je\.jdks\ms-21.0.11'

# 1. 특정 서브모듈만 컴파일
.\gradlew.bat :modules:gtecore:compileJava
.\gradlew.bat :modules:gt--:compileKotlin
.\gradlew.bat :modules:gtm-reborn:compileJava

# 2. GTM-Reborn GameTest 서버 실기 테스트 실행
.\gradlew.bat :modules:gtm-reborn:runGameTestServer

# 3. 코드 포맷 실행
.\gradlew.bat :modules:gtm-reborn:spotlessApply

# 4. 전체 모듈 컴파일 및 Jar 패키징
.\gradlew.bat buildAll -x test

# 5. 컴파일된 Jar를 gte/overrides/mods/로 동기화
.\gradlew.bat copyOutputJars

# 6. 전체 모듈을 로컬 Maven 저장소(~/.m2/repository/)에 배포
.\gradlew.bat publishAllToMavenLocal

# 7. 전체 모듈의 정적 아티팩트를 build/maven에 배포 (GitHub Pages Maven용)
.\gradlew.bat publishAllToMaven
```