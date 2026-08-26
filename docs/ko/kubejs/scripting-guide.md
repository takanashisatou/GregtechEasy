# KubeJS 모드 개조 및 스크립트 개발 가이드

GTE는 대부분의 재료 등록, 레시피 조정 및 다중 모드 연동 로직을 **KubeJS**가 처리하도록 합니다 (디렉토리는 `gte/overrides/kubejs/`에 위치).

---

## 📁 스크립트 디렉토리 구조와 수명 주기

```
gte/overrides/kubejs/
├── startup_scripts/     # 【启动期脚本】在游戏最早期执行，用于注册材料、流体、方块、物品
├── server_scripts/      # 【服务端脚本】在进入存档/连接服务器时执行，用于注册/修改配方与标签
├── client_scripts/      # 【客户端脚本】在客户端执行，用于修改 Tooltips、JEI/EMI 界面显示
└── assets/ & data/      # 静态本地化、贴图材质与数据包文件
```

---

## 🧪 시작 단계: 사용자 정의 재료 등록 (`startup_scripts/`)

`GTCEuStartupEvents.registry('gtceu:material', ...)`를 사용하여 사용자 정의 원소와 재료를 등록합니다:

```javascript
GTCEuStartupEvents.registry('gtceu:material', event => {
    // 1. 注册无尽金属 (Infinite)
    event.create('infinite')
        .color(0xed1661)
        .ingot()
        .iconSet(GTMaterialIconSet.DULL)
        .element('Xe')
        .toolStats(new ToolProperty(144, 114, 80000000, 6, [
            GTToolType.AXE, GTToolType.PICKAXE, GTToolType.SWORD, GTToolType.MORTAR
        ]))

    // 2. 注册暗流体金属 (Dark Fluid)
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

    // 3. 注册喵喵物质 (Meow Meow Matter) 与 反物质 (Antimatter)
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

## ⚙️ 서버: 사용자 정의 레시피 및 기계 레시피 작성 (`server_scripts/`)

`ServerEvents.recipes` 이벤트에서 `event.recipes.gtceu` 및 `event.recipes.gtecore`를 직접 호출할 수 있습니다:

### 1. 기본 기계 및 용광로 레시피

```javascript
ServerEvents.recipes(event => {
    const gtr = event.recipes.gtceu
    const gte = event.recipes.gtecore

    // 移除原有低效配方
    event.remove({ input: 'gtceu:raw_platinum' })
    event.remove({ id: 'gtceu:coke_oven/log_to_charcoal' })

    // 极速焦炉配方
    gtr.coke_oven('fast_coke_oven')
        .itemInputs('#minecraft:logs_that_burn')
        .itemOutputs('minecraft:charcoal')
        .outputFluids('gtceu:creosote 1000')
        .duration(20)

    // 原始高炉：1 铁 + 1 煤炭 -> 5 钢锭 (1 tick)
    gtr.primitive_blast_furnace('easy_steel_from_coal')
        .itemInputs('1x minecraft:iron_ingot', '1x minecraft:coal')
        .itemOutputs('5x gtceu:steel_ingot')
        .duration(1)

    // 压模机压制逻辑处理器
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

    // 简单之盒 (Easy Box) 批量矿物产出配方
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

클라이언트를 재시작하지 않고 스크립트 변경 사항을 실시간으로 테스트할 수 있습니다:

- **레시피 및 서버 스크립트 리로드**:
  ```mcfunction
  /kubejs reload server_scripts
  ```
- **텍스처 및 클라이언트 스크립트 리로드**:
  ```mcfunction
  /kubejs reload client_scripts
  ```