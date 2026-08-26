# CI/CD 자동화 빌드, 패키징 및 Maven 배포 파이프라인

GTE는 고도로 자동화되고 다중 대상 산출물을 병렬 처리하는 **GitHub Actions CI/CD 파이프라인**을 구축했습니다 (구성 파일은 `.github/workflows/sync-build.yml` 및 `release-publish.yml`에 위치).

---

## 🔄 전체 CI 파이프라인 아키텍처 (`sync-build.yml`)

`master` / `main` / `satou` 브랜치에 코드를 푸시하거나, PR을 제출하거나, Release Tag를 트리거할 때마다 GitHub Actions가 자동으로 다음 표준 파이프라인을 실행합니다:

```mermaid
flowchart TD
    A[代码推送 / Tag 触发] --> B[Checkout 递归子模块 & 配置 JDK 21 / Python 3.11 / Go]
    B --> C[Gradle 增量同步 Blockbench 美术资产 syncBlockbenchAssets]
    C --> D[多模块高并发编译 & GameTest 自动化实机测试]
    D --> E[复制生成 Jar 至 overrides/mods & 收集至 build/artifacts]
    E --> F[运行 opencode_translate.py 全量/增量 AI 国际化翻译]
    F --> G[Packwiz 规范打包: CurseForge 包 + 补丁 Java 21 manifest]
    G --> H[Python 构建 Zero-Compile 玩家完整懒人包 .minecraft]
    H --> I[Packwiz 导出纯净服务端 Server 包]
    I --> J[上传所有 Release 产物至 Actions Artifacts 存储]
    J --> K[构建静态 Maven 仓库并部署至 GitHub Pages (gh-pages)]
    J --> L[Tag 触发时: 自动发布至 CurseForge 平台]
```

---

## 📦 세 가지 핵심 패키징 작업 상세

### 1. CurseForge 표준 패키지 및 Java 21 패치
- **Packwiz 내보내기**: `packwiz curseforge export`를 실행하여 표준 규격 패키지를 생성합니다.
- **manifest.json 자동 패치**: 일부 서드파티 런처가 CurseForge 패키지를 파싱할 때 기본적으로 Java 17을 지정하는 문제를 해결하기 위해, CI가 zip을 자동으로 압축 해제하고 Python 스크립트를 통해 `manifest.json`의 `minecraft.javaVersion` 및 최상위 `javaVersion`을 **하드코딩으로 강제로 21로 기록**한 후 다시 패키징합니다.

### 2. 플레이어용 컴파일 불필요 완전 간편 팩 (`build_lazy_pack.py`)
- Python 스크립트가 각 모듈의 `build/libs/`에서 최신 코어 Jar를 자동으로 추출합니다.
- `modules/gtecore/gradle/libs/` 아래의 핵심 확장 Mod를 자동으로 병합합니다.
- 모든 설정, KubeJS 스크립트, 파추리(Patchouli) 매뉴얼을 하나의 즉시 사용 가능한 `.minecraft` 압축 파일로 패키징하며, 중국어 시작 가이드가 내장되어 있습니다.

### 3. 서버 전용 내보내기 팩 (`packwiz server export`)
- 클라이언트 전용 최적화 Mod(예: 3D 스킨 레이어, 셰이더, 키 바인딩 등)를 자동으로 제외하여 Linux/Windows 프로덕션 서버에 바로 배포할 수 있는 순수 서버 팩을 생성합니다.

---

## 🌐 GitHub Pages 정적 Maven 저장소 배포

파이프라인은 Gradle의 `publish` 태스크를 통해 모든 하위 모듈(`gtecore`, `gtm-reborn`, `gt--`)을 표준 Maven 아티팩트로 빌드하고 `gh-pages` 브랜치에 배포합니다:

```groovy
// 在第三方 Mod 或开发工程中直接引用 GTE Maven 仓库
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

## 🏷️ 수동 릴리스 및 버전 태깅 워크플로 (`release-publish.yml`)

프로젝트는 표준화된 Git Release 프로세스를 사용합니다:
1. GitHub Actions 페이지에서 **Manual Publish Release**를 수동으로 트리거하고 버전 번호(예: `2.3.0`)를 입력합니다.
2. 워크플로가 자동으로 `dev -> release` PR을 생성하고, CI 검증을 실행한 후 자동으로 Squash Merge합니다.
3. 자동으로 `release` 브랜치에 `v2.3.0` Git Tag를 생성하고 푸시합니다.
4. Tag 푸시 이벤트가 자동으로 `sync-build.yml`을 트리거하여 최종적으로 전 채널 산출물 릴리스를 완료합니다.