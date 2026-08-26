# 통합팩 다운로드 및 플레이어 간편팩 가이드

GTE(GregTech Easy)는 다양한 기술 수준의 플레이어와 서버 관리자를 위해 세 가지 즉시 사용 가능한 배포 형태를 제공합니다:

1. **플레이어 컴파일 불필요 전체 간편팩 (`GTE-LazyPack-*.zip`)**: 사전 컴파일된 모든 모드, 설정, 트윅 스크립트와 완전한 `.minecraft` 디렉터리 구조를 포함하며, **더블클릭 또는 런처에 드래그하여 바로 플레이**할 수 있습니다.
2. **CurseForge 표준 팩 (`GTE-CurseForge-*.zip`)**: 표준 CurseForge 형식으로, PCL2 / HMCL / CurseForge App / Prism Launcher에서 원클릭으로 가져올 수 있습니다.
3. **서버 통합팩 (`GTE-Server-*.zip`)**: 클린 서버 설정, 모드 및 시작 스크립트를 포함하여 서버를 열고 멀티플레이를 즐기기 위한 팩입니다.

---

## 🚀 플레이어 간편팩 (권장)

### 특징 및 장점
- **컴파일 의존성 0**: JDK 컴파일 환경, IntelliJ IDEA 또는 Git을 설치할 필요가 없습니다.
- **전체 패키징**: `gtecore`, `gtm-reborn`, `gt--` 최신 릴리스 Jar 및 필수 확장 모드가 모두 `mods/` 디렉터리에 내장되어 있습니다.
- **드래그 앤 플레이**: PCL2 / HMCL 창에 드래그하여 원클릭으로 가져올 수 있습니다.

### 가져오기 및 시작 단계

=== "방법 1: 런처 원클릭 드래그 (권장)"

    1. **PCL2 (Plain Craft Launcher 2)** 또는 **HMCL (Hello Minecraft! Launcher)**를 엽니다.
    2. 다운로드한 `GTE-LazyPack-<版本号>.zip`을 **마우스 왼쪽 버튼으로** 런처 메인 창에 직접 드래그합니다.
    3. 런처가 자동으로 인식하여 게임 버전 목록에 압축 해제합니다.
    4. 해당 버전의 **버전 설정**으로 이동하여 Java 런타임을 **Java 21**로 지정합니다.
    5. **8GB ~ 12GB** 메모리를 할당하고 게임 시작을 클릭하세요!

=== "방법 2: 수동 압축 해제 모드"

    1. 압축 파일을 중국어 문자가 없고 공백이 없는 경로에 압축 해제합니다 (예: `D:\Games\GTE\`).
    2. 압축 해제 후 `mods/`, `config/`, `kubejs/`를 포함하는 `.minecraft` 디렉터리를 얻게 됩니다.
    3. 런처에서 게임 버전을 추가하고 게임 루트 디렉터리를 압축 해제된 `.minecraft` 폴더로 선택합니다.
    4. **Java 21** 코어를 선택했는지 확인하고 시작합니다.

---

## ⚠️ Java 21 실행 환경 요구 사항 (매우 중요)

> [!CAUTION]
> **이 통합팩은 실행 환경으로 Java 21 (JDK 21)을 필수로 요구합니다!**
> **Java 17** 또는 **Java 8**을 절대 사용하지 마세요. 그렇지 않으면 게임이 즉시 충돌하거나 시작을 거부합니다!

### 왜 Java 21을 사용해야 하나요?
- GTE의 핵심 모드(`gtecore`, `gtm-reborn`, `gt--`)는 **Java 21의 현대적인 언어 기능**(예: Record Patterns, Virtual Threads, 향상된 Switch 매칭)을 전면적으로 채택했습니다.
- Gradle 빌드 스크립트는 전역적으로 `JavaLanguageVersion.of(21)`을 구성하여 툴체인 검사를 강제합니다.

### 권장 JDK 21 다운로드 주소

| 배포판 | 다운로드 링크 | 추천 이유 |
| :--- | :--- | :--- |
| **Azul Zulu 21 (LTS)** | [Azul 공식 사이트로 이동](https://www.azul.com/downloads/?version=java-21-lts) | 성능이 뛰어나며 Minecraft 대규모 멀티스레드 최적화에 탁월합니다. |
| **Eclipse Temurin 21 (LTS)** | [Adoptium 공식 사이트로 이동](https://adoptium.net/temurin/releases/?version=21) | 공식 권장, 높은 호환성과 안정성 |
| **Microsoft OpenJDK 21** | [Microsoft 공식 사이트로 이동](https://learn.microsoft.com/zh-cn/java/openjdk/download) | Windows 플랫폼 네이티브 호환성이 우수합니다. |

### 런처에서 Java 21 구성

```mermaid
graph LR
    A[打开启动器] --> B[进入 GTE 版本设置]
    B --> C[Java 路径 / 运行时]
    C --> D[选择已安装的 JDK 21 javaw.exe]
    D --> E[分配 8192MB ~ 12288MB 内存]
    E --> F[保存并启动游戏]
```

---

## 🎮 게임 내 단축키 및 자주 사용하는 명령어

| 명령어 / 단축키 | 기능 설명 | 권한 요구 사항 |
| :--- | :--- | :--- |
| `/ftbquests editing_mode true` | 퀘스트 북 시각적 편집 모드(작성자 모드) 활성화 | OP 권한 |
| `/ftbquests reload` | FTB Quests 퀘스트 북 설정 파일을 핫 리로드 | 모든 사용자 |
| `/kubejs reload server_scripts` | 서버 측 트윅 스크립트와 레시피를 핫 리로드 | OP 권한 |
| `/kubejs reload client_scripts` | 클라이언트 측 트윅 스크립트와 표시 로직을 핫 리로드 | 권한 불필요 |
| `/dumpmultiblock` | 목도끼로 영역을 선택한 후 원클릭으로 멀티블록 구조 코드를 내보냅니다 | OP 권한 |
| <kbd>U</kbd> / <kbd>R</kbd> | 커서가 있는 아이템의 용도(Usage) / 레시피(Recipe) 보기 | EMI / JEI 단축키 |
| <kbd>F7</kbd> | 주변 조명 레벨 보기 (빨간 X는 몬스터 생성 구역을 나타냄) | 클라이언트 단축키 |