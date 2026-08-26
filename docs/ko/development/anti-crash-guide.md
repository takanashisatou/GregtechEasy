# 크래시 방지 개발 수칙 및 실전 디버깅 경험 라이브러리 (Anti-Crash Guide)

다중 모듈, 다중 Classloader 및 복잡한 Mixin 바이트코드 강화가 있는 Minecraft 개발 환경에서는 사소한 작성 방식이 치명적인 런타임 크래시를 유발할 수 있습니다.

이 매뉴얼은 GTE 엔지니어링 실전에서 축적된 **5대 크래시 방지 철칙**과 **고빈도 크래시 디버깅 경험 라이브러리**를 요약합니다.

---

## 🛡️ 5대 크래시 방지 개발 철칙 (CRITICAL)

### 철칙 1: Mixin Accessor 인터페이스 강제 형변환 금지 (Never Force-Cast Accessors)

- **크래시 원인**: 다중 모듈 환경 또는 Addon 로딩 과정에서 Minecraft 네이티브 클래스(예: `BlockBehaviour.Properties`)가 초기 Classloader에 의해 인스턴스화됩니다. 이때 Mixin 인터페이스가 아직 바이트코드 위빙을 완료하지 못했을 수 있으므로, 강제 형변환은 즉시 `ClassCastException`을 유발합니다!
- **잘못된 작성 방식(금지)**:
  ```java
  // 错误！早期类加载时必崩 ClassCastException
  int destroyTime = ((BlockPropertiesAccessor) props).getDestroyTime();
  ```
- **올바른 작성 방식(안전 가드)**:
  ```java
  // 正确：使用 instanceof 模式守卫
  if (props instanceof BlockPropertiesAccessor acc) {
      newProps.destroyTime(acc.getDestroyTime());
  }
  ```
- **더 나은 방법**: Vanilla/Forge 네이티브 API를 우선 사용하세요(예: `IntegerPropertyAccessor`로 강제 형변환하는 대신 `property.getPossibleValues()`를 통해 정수 범위를 얻기).

---

### 철칙 2: 프로덕션 환경 최적화/셰이더 모드를 개발 환경에 넣는 것 금지

- **크래시 원인**: `Oculus`, `Embeddium`, `ModernFix`, `ModernUI` 등 프로덕션 환경 최적화 모드에는 하드코딩된 SRG 난독화 Mixin 매핑(예: `f_117950_`, `m_91302_`)이 내장되어 있습니다. 그런데 Gradle `runClient` 개발 환경은 난독화가 해제된 Mojang 매핑으로 실행되므로, 직접적으로 `InvalidMixinException` 크래시가 발생합니다.
- **관리 원칙**: 최적화 모드를 `gte/overrides/mods/`에 넣고(일반 런처용), `modules/gte-dev-runtime`의 빌드 의존성에 추가하는 것을 엄격히 금지합니다.

---

### 철칙 3: 개발 환경 의존성은 반드시 `modLocalRuntime`으로 통일

- **크래시 원인**: 일반적인 `localRuntime` 또는 `fileTree`는 ModDevGradle의 난독화 해제 리매퍼(Remapper)를 트리거하지 않으므로, 런타임에 심볼을 찾지 못하거나 난독화된 이름이 깨질 수 있습니다.
- **관리 원칙**: `modules/gte-dev-runtime/build.gradle`에서 반드시 `modLocalRuntime(...)`을 선언하고 `obfuscation.createRemappingConfiguration(configurations.localRuntime)`을 구성해야 합니다.

---

### 철칙 4: Gradle 증분 컴파일 교착 상태(`NoSuchFileException`) 해결법

- **현상**: `compileJava` 또는 `build` 실행 시 `NoSuchFileException: ...\build\classes\java\main\...` 또는 `Unable to delete directory 'build'` 메시지가 표시됩니다.
- **근본 원인**: 백그라운드에 남아 있는 Gradle Daemon 프로세스가 Windows 파일 잠금을 점유하고 있습니다.
- **표준 해결 방법**:
  ```powershell
  # 1. 彻底终止后台残留 Gradle 守护进程
  .\gradlew.bat --stop

  # 2. 删除冲突的 build 缓存目录后重新编译
  Remove-Item -Recurse -Force modules/*/build
  .\gradlew.bat compileJava
  ```

---

### 철칙 5: 하위 레벨 `gtm-reborn` 수정 후 강제 연동 자가 점검

`gtm-reborn`의 기본 기계, 재료 시스템, RecipeType, 레시피 조건 또는 Capability를 수정한 경우, 다음 3단계 점검을 순서대로 실행해야 합니다:
1. **`gtecore` 컴파일 무결성 확인**: `.\gradlew.bat :modules:gtecore:compileJava` 실행.
2. **KubeJS 연동 스크립트 확인**: `startup_scripts/`의 GTCEu 등록 이벤트와 `server_scripts/`의 Machine 참조를 확인.
3. **FTB Quests 아이템 참조 확인**: 퀘스트 북이 이름이 바뀌거나 제거된 아이템 ID를 참조하는지 확인.

---

## 📚 실제 크래시 복기 및 수정 레시피 라이브러리 (Post-Mortems)

### 사례 1: `GTBlocks.copy` / 광물 등록 시 `ClassCastException` 발생
- **오류 스택**: `BlockBehaviour$Properties cannot be cast to BlockPropertiesAccessor`
- **수정 방법**: `if (props instanceof BlockPropertiesAccessor acc)`를 사용하여 모든 속성 복사 로직을 보호합니다.

### 사례 2: `GrowingPlantRender`에서 `IntegerPropertyAccessor` 강제 형변환 크래시
- **오류 스택**: `IntegerProperty cannot be cast to IntegerPropertyAccessor`
- **수정 방법**: 네이티브 스트림 연산으로 교체:
  ```java
  property.getPossibleValues().stream().min(Integer::compare).orElse(0);
  ```

### 사례 3: `GregTechDatagen.initPre`에서 `AssertionError` 발생
- **오류 스택**: `AssertionError at RegistrateDataProviderAccessor.gtceu$getTypes()`
- **수정 방법**: `RegistrateDataProvider`의 정적 Map은 `--datagen` 인자에서만 초기화되므로, 호출을 `try { ... } catch (Throwable ignored) { }`로 감싸면 일반 시작 시 오류를 피할 수 있습니다.

### 사례 4: `PonderPlugin` 누락으로 인한 `NoClassDefFoundError`
- **오류 스택**: `GTMachines.<clinit>`에서 `NoClassDefFoundError: PonderPlugin`이 발생하고, 이후 Ponder가 `requires flywheel` 크래시를 표시합니다.
- **수정 방법**: `modules/gte-dev-runtime/build.gradle`에서 `modLocalRuntime(forge.ponder)`와 `modLocalRuntime(forge.flywheel.forge)`를 함께 추가합니다.