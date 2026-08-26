# Руководство по модификации и разработке скриптов KubeJS

GTE передает большую часть логики регистрации материалов, настройки рецептов и интеграции с другими модами на **KubeJS** (каталог находится в `gte/overrides/kubejs/`).

---

## 📁 Структура каталога скриптов и жизненный цикл

```
gte/overrides/kubejs/
├── startup_scripts/     # 【Скрипты запуска】Выполняются на самом раннем этапе игры, используются для регистрации материалов, жидкостей, блоков, предметов
├── server_scripts/      # 【Серверные скрипты】Выполняются при входе в мир/подключении к серверу, используются для регистрации/изменения рецептов и тегов
├── client_scripts/      # 【Клиентские скрипты】Выполняются на клиенте, используются для изменения подсказок, отображения интерфейса JEI/EMI
└── assets/ & data/      # Статические файлы локализации, текстуры и файлы датапаков
```

---

## 🧪 Этап запуска: регистрация пользовательских материалов (`startup_scripts/`)

Используйте `GTCEuStartupEvents.registry('gtceu:material', ...)` для регистрации пользовательских элементов и материалов:

```javascript
GTCEuStartupEvents.registry('gtceu:material', event => {
    // 1. Регистрация бесконечного металла (Infinite)
    event.create('infinite')
        .color(0xed1661)
        .ingot()
        .iconSet(GTMaterialIconSet.DULL)
        .element('Xe')
        .toolStats(new ToolProperty(144, 114, 80000000, 6, [
            GTToolType.AXE, GTToolType.PICKAXE, GTToolType.SWORD, GTToolType.MORTAR
        ]))

    // 2. Регистрация тёмной жидкой стали (Dark Fluid)
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

    // 3. Регистрация вещества Мяу-Мяу (Meow Meow Matter) и антивещества (Antimatter)
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

## ⚙️ Серверный этап: написание пользовательских рецептов и рецептов машин (`server_scripts/`)

В событии `ServerEvents.recipes` можно напрямую вызывать `event.recipes.gtceu` и `event.recipes.gtecore`:

### 1. Базовые рецепты машин и доменной печи

```javascript
ServerEvents.recipes(event => {
    const gtr = event.recipes.gtceu
    const gte = event.recipes.gtecore

    // Удаление старых неэффективных рецептов
    event.remove({ input: 'gtceu:raw_platinum' })
    event.remove({ id: 'gtceu:coke_oven/log_to_charcoal' })

    // Рецепт скоростной коксовой печи
    gtr.coke_oven('fast_coke_oven')
        .itemInputs('#minecraft:logs_that_burn')
        .itemOutputs('minecraft:charcoal')
        .outputFluids('gtceu:creosote 1000')
        .duration(20)

    // Примитивная доменная печь: 1 железо + 1 уголь -> 5 стальных слитков (1 тик)
    gtr.primitive_blast_furnace('easy_steel_from_coal')
        .itemInputs('1x minecraft:iron_ingot', '1x minecraft:coal')
        .itemOutputs('5x gtceu:steel_ingot')
        .duration(1)

    // Прессование логического процессора
    gtr.forming_press('gtecore:printed_logic_processor')
        .EUt(26)
        .duration(2 * 20)
        .notConsumable('1x ae2:logic_processor_press')
        .itemInputs('1x minecraft:gold_ingot')
        .itemOutputs('1x ae2:printed_logic_processor')
})
```

### 2. Пользовательские рецепты машин GTECore

```javascript
ServerEvents.recipes(event => {
    const gte = event.recipes.gtecore

    // Рецепт массовой добычи руды в "Простой коробке" (Easy Box)
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

## ⚡ Команды горячей перезагрузки в игре

Можно тестировать изменения скриптов в реальном времени без перезапуска клиента:

- **Перезагрузка рецептов и серверных скриптов**:
  ```mcfunction
  /kubejs reload server_scripts
  ```
- **Перезагрузка материалов и клиентских скриптов**:
  ```mcfunction
  /kubejs reload client_scripts
  ```