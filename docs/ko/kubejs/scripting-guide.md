# KubeJS 魔改 및 스크립트 개발 가이드

GTE는 대부분의 재료 등록, 레시피 조정 및 다중 모드 연동 로직을 **KubeJS**가 처리하도록 합니다 (디렉토리 위치: `gte/overrides/kubejs/`).

---

## 📁 스크립트 디렉토리 구조 및 생명주기

```
gte/overrides/kubejs/
├── startup_scripts/     # 【시작 단계 스크립트】게임 최초 실행 시 실행되며, 재료, 유체, 블록, 아이템 등록에 사용
├── server_scripts/      # 【서버 스크립트】세계 진입/서버 연결 시 실행되며, 레시피 및 태그 등록/수정에 사용
├── client_scripts/      # 【클라이언트 스크립트】클라이언트에서 실행되며, 툴팁, JEI/EMI 인터페이스 표시 수정에 사용
└── assets/ & data/      # 정적 현지화, 텍스처 및 데이터팩 파일
```

---

## 🧪 시작 단계: 사용자 정의 재료 등록 (`startup_scripts/`)

`GTCEuStartupEvents.registry('gtceu:material', ...)`를 사용하여 사용자 정의 원소 및 재료를 등록합니다:

```javascript
GTCEuStartupEvents.registry('gtceu:material', event => {
    // 1. 무한 금속 (Infinite) 등록
    event.create('infinite')
        .color(0xed1661)
        .ingot()
        .iconSet(GTMaterialIconSet.DULL)
        .element('Xe')
        .toolStats(new ToolProperty(144, 114, 80000000, 6, [
            GTToolType.AXE, GTToolType.PICKAXE, GTToolType.SWORD, GTToolType.MORTAR
        ]))

    // 2. 다크 플루이드 금속 (Dark Fluid) 등록
    event.create('dark_fluid')
        .color(0xb156d8)
        .fluid()
        .ingot()
        .appendFlags(
            GTMaterials.STD_METAL,
            GTMaterialFlags.GENERATE_FRAME,
            GTMaterialFlags.GENERATE_FOIL,
            GTMaterialFlags.GENERATE_FINE_WIRE,
            GTMaterialFlags.GENERATE_LONG_ROD
        )

    // 3. 냐옹 물질 (Meow Meow Matter) 및 반물질 (Antimatter) 등록
    event.create('meow_meow_matter')
        .color(0x483D8B)
        .dust()
        .fluid()
        .ingot()
        .appendFlags(GTMaterials.STD_METAL, GTMaterialFlags.GENERATE_FRAME)

    event.create('antimatter')
        .color(0x990099)
        .dust()
        .fluid()
        .ingot()
        .appendFlags(
            GTMaterials.STD_METAL,
            GTMaterialFlags.GENERATE_FRAME,
            GTMaterialFlags.GENERATE_FOIL,
            GTMaterialFlags.GENERATE_FINE_WIRE
        )
})
```

---

## ⚙️ 서버 단계: 사용자 정의 레시피 및 기계 레시피 작성 (`server_scripts/`)

`ServerEvents.recipes` 이벤트에서 `event.recipes.gtceu` 및 `event.recipes.gtecore`를 직접 호출할 수 있습니다:

### 1. 기본 기계 및 고로 레시피

```javascript
ServerEvents.recipes(event => {
    const gtr = event.recipes.gtceu
    const gte = event.recipes.gtecore

    // 기존 비효율 레시피 제거
    event.remove({ input: 'gtceu:raw_platinum' })
    event.remove({ id: 'gtceu:coke_oven/log_to_charcoal' })

    // 초고속 코크스로 레시피
    gtr.coke_oven('fast_coke_oven')
        .itemInputs('#minecraft:logs_that_burn')
        .itemOutputs('minecraft:charcoal')
        .outputFluids('gtceu:creosote 1000')
        .duration(20)

    // 원시 고로: 철 1 + 석탄 1 -> 강철 주괴 5 (1틱)
    gtr.primitive_blast_furnace('easy_steel_from_coal')
        .itemInputs('1x minecraft:iron_ingot', '1x minecraft:coal')
        .itemOutputs('5x gtceu:steel_ingot')
        .duration(1)

    // 압형기로 논리 프로세서 압형
    gtr.forming_press('gtecore:printed_logic_processor')
        .EUt(26)
        .duration(2 * 20)
        .notConsumable('1x ae2:logic_processor_press')
        .itemInputs('1x minecraft:gold_ingot')
        .itemOutputs('1x ae2:printed_logic_processor')
})
```

### 2. GTECore 사용자 정의 기계 레시피

```javascript
ServerEvents.recipes(event => {
    const gte = event.recipes.gtecore

    // 간편 상자 (Easy Box) 대량 광물 산출 레시피
    gte.easy_box('easy_test')
        .circuit(1)
        .duration(20 * 20)
        .EUt(32)
        .itemOutputs(
            'minecraft:raw_iron',
            'minecraft:raw_copper',
            'minecraft:raw_gold',
            'gtceu:raw_redstone',
            'gtceu:raw_diamond',
            'gtceu:raw_silver',
            'gtceu:raw_aluminium'
        )
})
```

---

## ⚡ 게임 내 핫 리로드 명령어

클라이언트를 재시작하지 않고도 스크립트 수정 사항을 실시간으로 테스트할 수 있습니다:

- **레시피 및 서버 스크립트 리로드**:
  ```mcfunction
  /kubejs reload server_scripts
  ```
- **재료 및 클라이언트 스크립트 리로드**:
  ```mcfunction
  /kubejs reload client_scripts
  ```