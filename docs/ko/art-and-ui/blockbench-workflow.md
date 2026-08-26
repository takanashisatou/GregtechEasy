# 인터페이스, 텍스처 및 Blockbench 아트 워크플로우

GTE 프로젝트는 자동화되고 손실 없는 아트 에셋 처리 파이프라인을 구축했습니다. 모델 디자이너는 **Blockbench**를 사용하여 모델을 제작하고 원본 디렉터리에 저장하기만 하면 되며, Gradle 태스크가 자동으로 에셋 분류, 형식 검증 및 증분 동기화를 수행합니다.

---

## 🎨 아트 소스 파일 디렉터리 (`art_assets/`)

프로젝트 루트 디렉터리의 `art_assets/`는 아트 디자이너의 **유일한 작업 디렉터리**이며, Git의 엄격한 버전 추적을 받습니다:

```
art_assets/
├── *.bbmodel                           # Blockbench 工程源文件（保留图层与骨骼）
├── *.json                              # Blockbench 导出的 Minecraft 几何模型
├── *.png                               # 纹理贴图（物品 / 方块机壳 / 阵法贴图）
├── *.png.mcmeta                        # 动画与材质元数据
└── projectuhv/                         # 高阶电路系列专用材质子目录
```

---

## 🏷️ 명명 규칙 및 자동 라우팅 규칙

Gradle 태스크 `syncBlockbenchAssets`는 파일 이름의 키워드를 기준으로 파일을 `modules/gtecore`의 해당 리소스 경로로 자동 배포합니다:

| 파일 유형 | 이름에 포함된 키워드 | 자동 동기화 대상 디렉터리 (GTECore) |
| :--- | :--- | :--- |
| **아이템 텍스처** (`.png`) | `processor`, `string`, `symbol`, `paper`, `wafer`, `chip`, `god`, `rune`, `yin`, `yang` | `src/main/resources/assets/gtecore/textures/item/` |
| **블록 케이싱 텍스처** (`.png`) | `casing`, `module`, `concrete`, `coil`, `zhenfa`, `matrix`, `buffer`, `generator`, `machine` | `src/main/resources/assets/gtecore/textures/block/` |
| **블록 모델** (`.json`) | `casing`, `module`, `block`, `matrix` | `src/main/resources/assets/gtecore/models/block/` |
| **아이템 모델** (`.json`) | 기타 모든 모델 파일 (`.bbmodel` 제외) | `src/main/resources/assets/gtecore/models/item/` |

---

## 🔄 원클릭 에셋 동기화 태스크 (`syncBlockbenchAssets`)

모델을 내보내거나 텍스처를 수정한 후 터미널에서 실행하세요:

```powershell
$env:JAVA_HOME='C:\Users\Ex_Je\.jdks\ms-21.0.11'
.\gradlew.bat syncBlockbenchAssets
```

### 자동화 기능
1. **자동 트리거**: 이 태스크는 `buildAll`, `copyOutputJars` 및 CI 빌드 프로세스의 사전 단계에 연결되어 있어, 로컬 컴파일 또는 게임 실행 시 자동으로 실행되므로 수동으로 반복 복사할 필요가 없습니다.
2. **증분 안전**: 이진 스트리밍 덮어쓰기를 사용하며, 대상 리소스 디렉터리에 누락된 상위 디렉터리를 자동으로 생성합니다.
3. **Git 클린 상태 유지**: `.bbmodel`은 소스 프로젝트로 `art_assets/`에만 유지되며, 컴파일로 생성된 jar 패키지에는 불필요한 Blockbench 프로젝트 메타데이터가 포함되지 않습니다.