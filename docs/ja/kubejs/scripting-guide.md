# KubeJS 改造とスクリプト開発ガイド

GTE は材料登録、レシピ調整、複数MOD連携ロジックの大部分を **KubeJS** に委ねています（ディレクトリは `gte/overrides/kubejs/`）。

---

## 📁 スクリプトディレクトリ構成とライフサイクル

```
gte/overrides/kubejs/
├── startup_scripts/     # 【起動時スクリプト】ゲームの最初期に実行され、材料・流体・ブロック・アイテムの登録に使用
├── server_scripts/      # 【サーバー側スクリプト】ワールド進入/サーバー接続時に実行され、レシピとタグの登録・変更に使用
├── client_scripts/      # 【クライアント側スクリプト】クライアントで実行され、ツールチップやJEI/EMIの表示変更に使用
└── assets/ & data/      # 静的ローカライズ、テクスチャ素材、データパックファイル
```

---

## 🧪 起動時：カスタム材料登録 (`startup_scripts/`)

`GTCEuStartupEvents.registry('gtceu:material', ...)` を使用してカスタム元素と材料を登録します：

```javascript
GTCEuStartupEvents.registry('gtceu:material', event => {
    // 1. 無限金属 (Infinite) の登録
    event.create('infinite')
        .color(0xed1661)
        .ingot()
        .iconSet(GTMaterialIconSet.DULL)
        .element('Xe')
        .toolStats(new ToolProperty(144, 114, 80000000, 6, [
            GTToolType.AXE, GTToolType.PICKAXE, GTToolType.SWORD, GTToolType.MORTAR
        ]))

    // 2. 暗流体金属 (Dark Fluid) の登録
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

    // 3. ニャーニャー物質 (Meow Meow Matter) と反物質 (Antimatter) の登録
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

## ⚙️ サーバー側：カスタムレシピとマシンレシピの記述 (`server_scripts/`)

`ServerEvents.recipes` イベント内で、`event.recipes.gtceu` と `event.recipes.gtecore` を直接呼び出すことができます：

### 1. 基本マシンと高炉レシピ

```javascript
ServerEvents.recipes(event => {
    const gtr = event.recipes.gtceu
    const gte = event.recipes.gtecore

    // 元の非効率なレシピを削除
    event.remove({ input: 'gtceu:raw_platinum' })
    event.remove({ id: 'gtceu:coke_oven/log_to_charcoal' })

    // 高速コークス炉レシピ
    gtr.coke_oven('fast_coke_oven')
        .itemInputs('#minecraft:logs_that_burn')
        .itemOutputs('minecraft:charcoal')
        .outputFluids('gtceu:creosote 1000')
        .duration(20)

    // 原始高炉：鉄1 + 石炭1 -> 鋼インゴット5 (1 tick)
    gtr.primitive_blast_furnace('easy_steel_from_coal')
        .itemInputs('1x minecraft:iron_ingot', '1x minecraft:coal')
        .itemOutputs('5x gtceu:steel_ingot')
        .duration(1)

    // 圧延機でロジックプロセッサを成型
    gtr.forming_press('gtecore:printed_logic_processor')
        .EUt(26)
        .duration(2 * 20)
        .notConsumable('1x ae2:logic_processor_press')
        .itemInputs('1x minecraft:gold_ingot')
        .itemOutputs('1x ae2:printed_logic_processor')
})
```

### 2. GTECore カスタムマシンレシピ

```javascript
ServerEvents.recipes(event => {
    const gte = event.recipes.gtecore

    // イージーボックス (Easy Box) のバルク鉱石生成レシピ
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

## ⚡ ゲーム内ホットリロードコマンド

クライアントを再起動せずにスクリプト変更をリアルタイムでテストできます：

- **レシピとサーバー側スクリプトのリロード**：
  ```mcfunction
  /kubejs reload server_scripts
  ```
- **マテリアルとクライアント側スクリプトのリロード**：
  ```mcfunction
  /kubejs reload client_scripts
  ```