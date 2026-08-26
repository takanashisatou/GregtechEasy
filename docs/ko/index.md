# GregTech Easy (GTE) 공식 문서

**GregTech Easy (GTE)** 통합팩 공식 종합 가이드를 환영합니다!

GTE는 **“간단하고, 재미있고, 흥미롭고, 시간이 짧은”** 것을 핵심 이념으로 하는 현대적인 Minecraft 1.20.1 통합팩입니다.

---

## ⚡ 빠른 이동 색인

<div class="grid cards" markdown>

-   :material-download: __[플레이어 및 통합팩 가이드](download-and-play/lazy-pack.md)__

    ---

    즉시 사용 가능한 **0 컴파일 완전 편의 팩**, CurseForge 표준 팩 및 서버를 다운로드하고, **Java 21** 실행 환경 구성과 런처 가져오기 튜토리얼을 알아보세요.

    [:octicons-arrow-right-24: 바로 가기](download-and-play/lazy-pack.md)

-   :material-chip: __[GTECore 핵심 모드 상세](gtecore/overview.md)__

    ---

    **음양 팔괘 연선로**, **사상 진법**, **광석 처리 센터**, **기적의 고리**, **초끈과 음양 회로**, **AE2 패턴 어셈블리 Plus** 등 핵심 콘텐츠를 자세히 알아보세요.

    [:octicons-arrow-right-24: 바로 가기](gtecore/overview.md)

-   :material-cog: __[GTM Reborn 모드 브랜치](gtm-reborn/index.md)__

    ---

    `satou` 브랜치가 제공하는 다중 암페어 레시피, 배치 처리 모드, 1t Subtick 오버클럭, GameTest 자동화 테스트 및 유체 구간 출력 특성을 알아보세요.

    [:octicons-arrow-right-24: 바로 가기](gtm-reborn/index.md)

-   :material-code-tags: __[KubeJS 모드 개조 및 개발 도구](kubejs/scripting-guide.md)__

    ---

    KubeJS에서 재료를 등록하고 레시피를 작성하는 방법과, 내장된 `/dumpmultiblock` 목재 도끼 영역 선택 도구를 사용하여 한 번에 멀티블록 구조 코드를 내보내는 방법을 배워보세요.

    [:octicons-arrow-right-24: 바로 가기](kubejs/scripting-guide.md)

-   :material-hammer-wrench: __[개발자 및 충돌 방지 실전 매뉴얼](development/quick-start.md)__

    ---

    `run_game.bat`으로 런처 없이 초 단위 시작, `link_to_launcher.bat`으로 복사 없는 디렉터리 매핑, 그리고 Mixin Accessor 충돌을 방지하는 황금 규칙을 익히세요.

    [:octicons-arrow-right-24: 바로 가기](development/quick-start.md)

-   :material-robot: __[CI/CD 파이프라인 및 AI 번역](ci-cd-and-translation/ci-pipeline.md)__

    ---

    GitHub Actions 기반 자동화 다중 모듈 병렬 빌드, Packwiz 패키징, Maven 릴리스 및 `opencode_translate.py` AI 국제화 스크립트에 대해 알아보세요.

    [:octicons-arrow-right-24: 바로 가기](ci-cd-and-translation/ci-pipeline.md)

</div>

---

## 🛠️ 프로젝트 기본 정보

| 구성 항목 | 설명 |
| :--- | :--- |
| **프로젝트 이름** | `GregtechEasy` (`gte-multi`) |
| **실행 및 컴파일 도구 체인** | **JDK 21** (Java 21 Toolchain 강제 사용, 모든 하위 모듈 엄격히 통일) |
| **게임 버전** | Minecraft `1.20.1` (Forge `47.3.0` / `47.4.4`) |
| **오픈소스 라이선스** | LGPL-3.0 / MIT |
| **기본 브랜치** | 메인 저장소 `main` / `master`, GTM-Reborn `satou`, GT-- `kotlin`, GTECore `master` |