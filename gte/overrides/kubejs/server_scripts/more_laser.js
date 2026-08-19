ServerEvents.recipes((event) => {
    const gtr = event.recipes.gtceu

    // 电压等级配置
    const voltageConfigs = [
        {
            tier: 'IV',
            suffix: 'iv',
            voltage: GTValues.IV,
            cable: {
                octal: 'platinum_octal_cable',
                hex: 'platinum_hex_cable'
            }
        },
        {
            tier: 'LuV',
            suffix: 'luv',
            voltage: GTValues.LuV,
            cable: {
                octal: 'niobium_titanium_octal_cable',
                hex: 'niobium_titanium_hex_cable'
            }
        },
        {
            tier: 'ZPM',
            suffix: 'zpm',
            voltage: GTValues.ZPM,
            cable: {
                octal: 'vanadium_gallium_octal_cable',
                hex: 'vanadium_gallium_hex_cable'
            }
        },
        {
            tier: 'UV',
            suffix: 'uv',
            voltage: GTValues.UV,
            cable: {
                octal: 'yttrium_barium_cuprate_octal_cable',
                hex: 'yttrium_barium_cuprate_hex_cable'
            }
        },
        {
            tier: 'UHV',
            suffix: 'uhv',
            voltage: GTValues.UHV,
            cable: {
                octal: 'europium_octal_cable',
                hex: 'europium_hex_cable'
            }
        }
    ]

    // 创建单个配方的辅助函数
    function createRecipe(config, type, ampLevel) {
        const suffix = config.suffix
        const isTarget = type === 'target'
        const isHighAmp = ampLevel === 65536
        const ampPrefix = isHighAmp ? '65536a' : '16384a'
        
        // 计算数量
        const lensCount = isHighAmp ? 16 : 8
        const componentCount = isHighAmp ? 16 : 8
        const coverCount = isHighAmp ? 64 : 32
        const circuit = isHighAmp ? 5 : 4
        const cableType = isHighAmp ? config.cable.hex : config.cable.octal
        
        // 确定组件类型
        const component = isTarget ? 'sensor' : 'emitter'
        
        // 创建配方
        gtr.assembler(`gtmthings:${suffix}_${ampPrefix}_wireless_laser_${type}_hatch`)
            .EUt(GTValues.VA[config.voltage])
            .itemInputs(
                `gtceu:${suffix}_machine_hull`,
                `${lensCount}x gtceu:diamond_lens`,
                `${componentCount}x gtceu:${suffix}_${component}`,
                `${componentCount}x gtceu:${suffix}_electric_pump`,
                `4x gtceu:${cableType}`,
                `${coverCount}x gtmthings:${suffix}_4a_wireless_energy_receive_cover`,
                'gtceu:superconducting_coil',
                'gtceu:active_transformer'
            )
            .inputFluids('gtceu:soldering_alloy 144')
            .duration(20 * 30)
            .itemOutputs(`1x gtmthings:${suffix}_${ampPrefix}_wireless_laser_${type}_hatch`)
            .circuit(circuit)
    }

    // 为所有配置创建所有类型的配方
    voltageConfigs.forEach(config => {
        // 创建两种安培级别和两种类型的配方
        createRecipe(config, 'target', 16384)
        createRecipe(config, 'target', 65536)
        createRecipe(config, 'source', 16384)
        createRecipe(config, 'source', 65536)
    })
})