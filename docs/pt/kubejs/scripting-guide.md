# Guia de Modificação e Desenvolvimento de Scripts KubeJS

O GTE delega a maior parte do registro de materiais, ajustes de receitas e lógica de integração entre múltiplos mods para o **KubeJS** (diretório localizado em `gte/overrides/kubejs/`).

---

## 📁 Estrutura de Diretórios de Scripts e Ciclo de Vida

```
gte/overrides/kubejs/
├── startup_scripts/     # 【Scripts de inicialização】Executados no início do jogo, usados para registrar materiais, fluidos, blocos e itens
├── server_scripts/      # 【Scripts do servidor】Executados ao entrar em um mundo/servidor, usados para registrar/modificar receitas e tags
├── client_scripts/      # 【Scripts do cliente】Executados no cliente, usados para modificar Tooltips, exibição da interface JEI/EMI
└── assets/ & data/      # Arquivos estáticos de localização, texturas e pacotes de dados
```

---

## 🧪 Fase de Inicialização: Registro de Materiais Personalizados (`startup_scripts/`)

Use `GTCEuStartupEvents.registry('gtceu:material', ...)` para registrar elementos e materiais personalizados:

```javascript
GTCEuStartupEvents.registry('gtceu:material', event => {
    // 1. Registrar Metal Infinito (Infinite)
    event.create('infinite')
        .color(0xed1661)
        .ingot()
        .iconSet(GTMaterialIconSet.DULL)
        .element('Xe')
        .toolStats(new ToolProperty(144, 114, 80000000, 6, [
            GTToolType.AXE, GTToolType.PICKAXE, GTToolType.SWORD, GTToolType.MORTAR
        ]))

    // 2. Registrar Metal de Fluido Escuro (Dark Fluid)
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

    // 3. Registrar Matéria Miau Miau (Meow Meow Matter) e Antimatéria (Antimatter)
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

## ⚙️ Fase de Servidor: Receitas Personalizadas e Escrita de Receitas de Máquinas (`server_scripts/`)

No evento `ServerEvents.recipes`, você pode chamar diretamente `event.recipes.gtceu` e `event.recipes.gtecore`:

### 1. Receitas Básicas de Máquinas e Alto-Forno

```javascript
ServerEvents.recipes(event => {
    const gtr = event.recipes.gtceu
    const gte = event.recipes.gtecore

    // Remover receitas antigas ineficientes
    event.remove({ input: 'gtceu:raw_platinum' })
    event.remove({ id: 'gtceu:coke_oven/log_to_charcoal' })

    // Receita de forno de coque rápido
    gtr.coke_oven('fast_coke_oven')
        .itemInputs('#minecraft:logs_that_burn')
        .itemOutputs('minecraft:charcoal')
        .outputFluids('gtceu:creosote 1000')
        .duration(20)

    // Alto-forno primitivo: 1 ferro + 1 carvão -> 5 lingotes de aço (1 tick)
    gtr.primitive_blast_furnace('easy_steel_from_coal')
        .itemInputs('1x minecraft:iron_ingot', '1x minecraft:coal')
        .itemOutputs('5x gtceu:steel_ingot')
        .duration(1)

    // Prensagem para processador lógico
    gtr.forming_press('gtecore:printed_logic_processor')
        .EUt(26)
        .duration(2 * 20)
        .notConsumable('1x ae2:logic_processor_press')
        .itemInputs('1x minecraft:gold_ingot')
        .itemOutputs('1x ae2:printed_logic_processor')
})
```

### 2. Receitas Personalizadas de Máquinas GTECore

```javascript
ServerEvents.recipes(event => {
    const gte = event.recipes.gtecore

    // Receita de produção em massa de minérios da Caixa Fácil (Easy Box)
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

## ⚡ Comandos de Recarga Rápida no Jogo

Teste alterações de scripts em tempo real sem reiniciar o cliente:

- **Recarregar receitas e scripts do servidor**:
  ```mcfunction
  /kubejs reload server_scripts
  ```
- **Recarregar materiais e scripts do cliente**:
  ```mcfunction
  /kubejs reload client_scripts
  ```