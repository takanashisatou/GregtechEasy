ServerEvents.recipes((event) => {
    const gtr = event.recipes.gtceu
    event.remove({input:'gtceu:raw_platinum'})
    event.remove({input:'gtceu:endstone_platinum_ore'})
    event.remove({input:'gtceu:cooperite_dust'})
    event.remove({'id':'gtceu:coke_oven/log_to_charcoal'})
    gtr.coke_oven('fast_coke_oven')
    .itemInputs('#minecraft:logs_that_burn')
    .itemOutputs('minecraft:charcoal')
    .outputFluids('gtceu:creosote 1000')
    .duration(20)
    gtr.compressor('easy_box')
    .itemInputs('64x gtceu:steam_machine_casing')
    .itemOutputs('1x gtceu:easy_box')
    .duration(1200)
    .EUt(32)
    gtr.primitive_blast_furnace('easy_steel_from_coal')
    .itemInputs('1x minecraft:iron_ingot',
        '1x minecraft:coal'
    ).itemOutputs('5x gtceu:steel_ingot')
    .duration(1)
    gtr.primitive_blast_furnace('easy_steel_from_charcoal')
    .itemInputs('1x minecraft:iron_ingot',
        '1x minecraft:charcoal'
    ).itemOutputs('5x gtceu:steel_ingot')
    .duration(1)
    gtr.alloy_smelter('easy_wrought_iron_ingot')
    .itemInputs('1x minecraft:iron_ingot',
        '1x minecraft:coal'
    ).itemOutputs('2x gtceu:wrought_iron_ingot')
    .duration(1)
    .EUt(8)
    gtr.alloy_smelter('easy_rubber_ingot')
    .itemInputs('1x gtceu:sulfur_dust',
        '1x gtceu:raw_rubber_dust'
    ).duration(10)
    .EUt(16)
    .itemOutputs('4x gtceu:rubber_ingot')
    const gte = event.recipes.gtecore
    gte.easy_box('easy_test')
    .circuit(1)
    .duration(20*20)
    .EUt(32)
    .itemOutputs('minecraft:raw_iron',
        'minecraft:raw_copper',
        'minecraft:raw_gold',
        'gtceu:raw_redstone',
        'minecraft:diamond',
        'gtceu:raw_silver',
        'gtceu:raw_aluminium',
        'gtceu:raw_bauxite',
        'gtceu:raw_ilmenite',
        'gtceu:raw_sphalerite',
        'gtceu:raw_sulfur',
        'gtceu:raw_stibnite',
        'gtceu:raw_tetrahedrite',
        'gtceu:raw_tin',
        'gtceu:raw_cinnabar',
        'gtceu:raw_bentonite',
        'gtceu:raw_cobaltite',
        'gtceu:raw_coal',
        'gtceu:raw_graphite',
        'gtceu:raw_neodymium',
        'gtceu:raw_plutonium',
        'gtceu:raw_pyrochlore',
        'minecraft:emerald',
        'minecraft:end_stone',
        'gtceu:raw_uraninite',
        'gtceu:raw_ruby'
    )
    gte.circuit_factory()
    event.remove({'id':'gtceu:primitive_blast_furnace/steel_from_coal_gem_wrought'})
    event.remove({'id':'gtceu:primitive_blast_furnace/steel_from_coal_gem'})
    event.remove({'id':'gtceu:primitive_blast_furnace/steel_from_charcoal_gem'})
    event.remove({'id':'gtceu:alloy_smelter/rubber_bar'})
    event.shaped(Item.of('gtceu:big_alloy',1),[
        "AXA",
        "BOB",
        "AXA"
    ],{
        "A": "gtceu:steam_machine_casing",
        "O": "gtceu:lp_steam_alloy_smelter",
        "X": "gtceu:bronze_gear",
        "B": "gtceu:potin_gear"
    })
    event.shaped(Item.of('gtceu:industrial_steam_casing',1),[
        "A"
    ],{
        "A":"gtceu:steam_machine_casing"
    })
event.shaped(Item.of('gtceu:big_compressor',1),[
        "AXA",
        "BOB",
        "AXA"
    ],{
        "A": "gtceu:steam_machine_casing",
        "O": "gtceu:lp_steam_compressor",
        "X": "gtceu:bronze_gear",
        "B": "gtceu:potin_gear"
    })
    event.shaped(Item.of('gtceu:big_forge_hammer',1),[
        "AXA",
        "BOB",
        "AXA"
    ],{
        "A": "gtceu:steam_machine_casing",
        "O": "gtceu:lp_steam_forge_hammer",
        "X": "gtceu:bronze_gear",
        "B": "gtceu:potin_gear"
    })
    event.shaped(Item.of('gtceu:big_steam_extractor',1),[
        "AXA",
        "BOB",
        "AXA"
    ],{
        "A": "gtceu:steam_machine_casing",
        "O": "gtceu:lp_steam_extractor",
        "X": "gtceu:bronze_gear",
        "B": "gtceu:potin_gear"
    })
    event.shaped(Item.of('gtceu:component_factory',1),[
        "ABA",
        "BOB",
        "ABA"
    ],{
        "A": "gtceu:mv_robot_arm",
        "O": "gtceu:mv_machine_hull",
        "B": "#gtceu:circuits/mv"
    })
    event.shaped(Item.of('gtceu:circuit_factory',1),[
        "AFA",
        "EXE",
        "AFA"
    ],{
        "A": "gtceu:hv_electric_motor",
        "B":"gtceu:hv_assembler",
        "C":"gtceu:hv_laser_engraver",
        "D":"gtceu:hv_cutter",
        "E":"#gtceu:circuits/hv",
        "F":"gtceu:hv_robot_arm",
        "X":"gtceu:hv_machine_hull"
    })

    gtr.assembler('gtceu:circuit_factory')
    .itemInputs("1x gtceu:hv_machine_hull",
        "1x gtceu:hv_assembler",
        "1x gtceu:hv_cutter",
        "1x gtceu:hv_laser_engraver",
        "1x gtceu:hv_circuit_assembler",
        "2x gtceu:circuits/iv",
        "2x gtceu:hv_robot_arm"
    ).circuit(1)
    .itemOutputs('1x gtceu:circuit_factory')
    .duration(1200)
    .EUt(GTValues.VA[GTValues.HV])
    event.shaped(Item.of('gtceu:big_bender',1),[
        "AOA",
        "CDC",
        "EFE"
    ],{
        "A":'gtceu:lv_electric_piston',
        'O':'gtceu:steel_plate',
        "C":'#gtceu:circuits/lv',
        'D':"gtceu:lv_bender",
        "E":'gtceu:lv_electric_motor',
        "F":"gtceu:tin_single_cable"
    })
    event.shaped(Item.of('gtceu:big_wiremill',1),[
        "AOA",
        "CDC",
        "EFE"
    ],{
        "A":'gtceu:lv_electric_piston',
        'O':'gtceu:steel_plate',
        "C":'#gtceu:circuits/lv',
        'D':"gtceu:lv_wiremill",
        "E":'gtceu:lv_electric_motor',
        "F":"gtceu:tin_single_cable"
    })
    event.shaped(Item.of('gtceu:big_centrifuge',1),[
        "AOA",
        "CDC",
        "EFE"
    ],{
        "A":'gtceu:lv_electric_piston',
        'O':'gtceu:steel_plate',
        "C":'#gtceu:circuits/lv',
        'D':"gtceu:lv_centrifuge",
        "E":'gtceu:lv_electric_motor',
        "F":"gtceu:tin_single_cable"
    })
    event.shaped(Item.of('gtceu:big_wash',1),[
        "AOA",
        "CDC",
        "EFE"
    ],{
        "A":'gtceu:lv_electric_piston',
        'O':'gtceu:steel_plate',
        "C":'#gtceu:circuits/lv',
        'D':"gtceu:lv_ore_washer",
        "E":'gtceu:lv_electric_motor',
        "F":"gtceu:tin_single_cable"
    })
    event.shaped(Item.of('gtceu:big_electrolyzer',1),[
        "AOA",
        "CDC",
        "EFE"
    ],{
        "A":'gtceu:lv_electric_piston',
        'O':'gtceu:steel_plate',
        "C":'#gtceu:circuits/lv',
        'D':"gtceu:lv_electrolyzer",
        "E":'gtceu:lv_electric_motor',
        "F":"gtceu:tin_single_cable"
    })
    event.shaped(Item.of('gtceu:big_gas_collector',1),[
        "AOA",
        "CDC",
        "EFE"
    ],{
        "A":'gtceu:lv_electric_piston',
        'O':'gtceu:steel_plate',
        "C":'#gtceu:circuits/lv',
        'D':"gtceu:lv_gas_collector",
        "E":'gtceu:lv_electric_motor',
        "F":"gtceu:tin_single_cable"
    })
    event.shaped(Item.of('gtceu:big_extruder',1),[
        "AOA",
        "CDC",
        "EFE"
    ],{
        "A":'gtceu:lv_electric_piston',
        'O':'gtceu:steel_plate',
        "C":'#gtceu:circuits/lv',
        'D':"gtceu:lv_extruder",
        "E":'gtceu:lv_electric_motor',
        "F":"gtceu:tin_single_cable"
    })
    event.shaped(Item.of('gtceu:ecological_simulator',1),[
        "AOA",
        "CDC",
        "EFE"
    ],{
        "A":'gtceu:mv_electric_piston',
        'O':'gtceu:aluminium_plate',
        "C":'#gtceu:circuits/mv',
        'D':"gtceu:mv_machine_hull",
        "E":'gtceu:mv_electric_motor',
        "F":"gtceu:copper_single_cable"
    })
    gte.ecological_simulator('gtceu:ecological_one')
    .EUt(120)
    .circuit(1)
    .itemOutputs('16x gtceu:sticky_resin',
        '16x gtceu:rubber_sapling',
        '16x gtceu:rubber_wood',
        '16  minecraft:sugar_cane',
        '16x minecraft:ender_pearl',
        '16x minecraft:cod'
    ).duration(160)
    event.remove({id:'gtceu:electrolyzer/sugar_electrolysis'})
    gtr.electrolyzer('gtceu:sugar_oxygen')
    .EUt(120)
    .itemInputs('1x minecraft:sugar')
    .itemOutputs('1x gtceu:carbon_dust')
    .outputFluids('gtceu:oxygen 1000')
    .duration(100)
    event.remove({id:'gtceu:autoclave/raw_crystal_chip_emerald'})
    gtr.autoclave('gtceu:easy_chip')
    .EUt(320)
    .itemInputs('1x minecraft:emerald')
    .inputFluids('gtceu:europium 16')
    .itemOutputs('4x gtceu:raw_crystal_chip')
    .duration(2400)
    event.shaped(Item.of('gtceu:big_extractor',1),[
        "AOA",
        "CDC",
        "EFE"
    ],{
        "A":'gtceu:lv_electric_piston',
        'O':'gtceu:steel_plate',
        "C":'#gtceu:circuits/lv',
        'D':"gtceu:lv_extractor",
        "E":'gtceu:lv_electric_motor',
        "F":"gtceu:tin_single_cable"
    })
    event.shaped(Item.of('gtceu:big_brewery',1),[
        "AOA",
        "CDC",
        "EFE"
    ],{
        "A":'gtceu:lv_electric_piston',
        'O':'gtceu:steel_plate',
        "C":'#gtceu:circuits/lv',
        'D':"gtceu:lv_brewery",
        "E":'gtceu:lv_electric_motor',
        "F":"gtceu:tin_single_cable"
    })
    gtr.assembler('gtceu:miracle_ring')
    .itemInputs('32x gtceu:iv_machine_hull',
        '128x #gtceu:circuits/zpm',
        '32x gtceu:assembly_line_casing'
    ).EUt(GTValues.VA[GTValues.IV])
    .inputFluids('gtceu:polybenzimidazole 1000000')
    .itemOutputs('1x gtceu:miracle_ring')
    .duration(10000)
    event.shaped(Item.of('gtceu:microchip_processor',1),[
        "A"
    ],{
        "A":"mekanism:basic_control_circuit"
    })
    event.shaped(Item.of('gtceu:good_electronic_circuit',1),[
        "A"
    ],{
        "A":'mekanism:advanced_control_circuit'
    })
    gtr.circuit_assembler('gtceu:easy_hv_circuit')
    .circuit(1)
    .EUt(30)
    .itemInputs('1x mekanism:elite_control_circuit')
    .duration(20)
    .itemOutputs('1x gtceu:advanced_integrated_circuit')
    gtr.circuit_assembler('gtceu:easy_ev_circuit')
    .circuit(1)
    .EUt(100)
    .itemInputs('mekanism:ultimate_control_circuit')
    .duration(20)
    .itemOutputs('1x gtceu:micro_processor_computer')
    //event.remove({id:'gtceu:blasting/smelt_deepslate_platinum_ore_to_ingot'})
    //event.remove({id:'gtceu:blasting/smelt_raw_platinum_ore_to_ingot'})
    //event.remove({id:'gtceu:blasting/smelt_platinum_ore_to_ingot'})
    //event.remove({output:'gtceu:platinum_ingot'})
    
}
)