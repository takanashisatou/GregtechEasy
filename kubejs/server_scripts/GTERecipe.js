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
    .itemOutputs(
        'minecraft:raw_iron',
        'minecraft:raw_copper',
        'minecraft:raw_gold',
        'gtceu:raw_redstone',
        'gtceu:raw_diamond',
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
        'gtceu:raw_emerald',
        'minecraft:end_stone',
        'gtceu:raw_uraninite',
        'gtceu:raw_ruby',
        'mekanism:raw_osmium',
        'gtceu:raw_lead',
        'gtceu:raw_galena',
        'gtceu:raw_garnierite',
        'gtceu:raw_topaz',
        'gtceu:raw_beryllium',
        'gtceu:raw_lithium',
        'gtceu:raw_garnierite',
        'gtceu:raw_pyrolusite',
        'gtceu:raw_bastnasite',
        'minecraft:ancient_debris',
        'gtceu:raw_tantalite',
        'gtceu:raw_monazite',
        'gtceu:raw_rock_salt',
        'gtceu:raw_quartzite',
        'gtceu:raw_apatite',
        'gtceu:raw_vanadium_magnetite',
        'gtceu:raw_naquadah',
        'gtceu:raw_molybdenite'

    )
    event.remove({output:'gtceu:steel_large_boiler'})
    event.shaped(Item.of('gtceu:steel_large_boiler',1),[
        "ABA",
        "BOB",
        "ABA"
    ],{
        "A":"gtceu:tin_single_cable",
        "O":"gtceu:steel_firebox_casing",
        "B":"#gtceu:circuits/lv"
    })
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


    gtr.assembler('gtceu:circuit_factory')
    .itemInputs("1x gtceu:hv_machine_hull",
        "1x gtceu:hv_assembler",
        "1x gtceu:hv_cutter",
        "1x gtceu:hv_laser_engraver",
        "1x gtceu:hv_circuit_assembler",
        "2x #gtceu:circuits/iv",
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
    event.shaped(Item.of('gtceu:big_mixer',1),[
        "AOA",
        "CDC",
        "EFE"
    ],{
        "A":'gtceu:lv_electric_piston',
        'O':'gtceu:steel_plate',
        "C":'#gtceu:circuits/lv',
        'D':"gtceu:lv_mixer",
        "E":'gtceu:lv_electric_motor',
        "F":"gtceu:tin_single_cable"
    })
    event.shaped(Item.of('gtceu:big_autoclave',1),[
        "AOA",
        "CDC",
        "EFE"
    ],{
        "A":'gtceu:lv_electric_piston',
        'O':'gtceu:steel_plate',
        "C":'#gtceu:circuits/lv',
        'D':"gtceu:lv_autoclave",
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
        '16x gtceu:rubber_log',
        '16x minecraft:sugar_cane',
        '16x minecraft:ender_pearl',
        '16x minecraft:cod',
        '16x minecraft:blaze_powder',
        '16x minecraft:bone_meal',
        '16x minecraft:nether_star',
        '16x minecraft:blaze_rod',
        '16x minecraft:wheat'
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
    gtr.assembler('gtceu:general_fuel_engine')
    .circuit(24)
    .EUt(1960)
    .duration(600)
    .itemInputs('4x gtceu:iv_machine_hull',
        '4x #gtceu:circuits/zpm',
        '8x gtceu:iv_electric_piston'
    ).inputFluids('gtceu:styrene_butadiene_rubber 4096')
    .itemOutputs('1x gtceu:general_fuel_engine')
    
    gtr.assembler('gtceu:advanced_energy_detector_cover_easy')
    .circuit(1)
    .EUt(28)
    .duration(200)
    .itemInputs('1x gtceu:lv_sensor',
        '1x gtceu:energy_detector_cover'
    )
    .itemOutputs('1x gtceu:advanced_energy_detector_cover')
    
    event.shaped(Item.of('gtceu:steam_grinder_easy',1),[
        "A"
    ],{
        "A":'gtceu:steam_grinder'
    })
    event.shaped(Item.of('gtceu:steam_oven_easy',1),[
        "A"
    ],{
        "A":'gtceu:steam_oven'
    })
    event.shaped(Item.of('gtecore:steam_op',1),[
        "A"
    ],{
        "A":'gtceu:easy_box'
    })
    //event.remove({id:'gtceu:blasting/smelt_deepslate_platinum_ore_to_ingot'})
    //event.remove({id:'gtceu:blasting/smelt_raw_platinum_ore_to_ingot'})
    //event.remove({id:'gtceu:blasting/smelt_platinum_ore_to_ingot'})
    //event.remove({output:'gtceu:platinum_ingot'})
    gte.desulfurization_recipe('easy_desulfurization_heavy')
    .inputFluids('gtceu:sulfuric_heavy_fuel 8000')
    .outputFluids('gtceu:heavy_fuel 8000',
        'gtceu:hydrogen 8000'
    )
    .itemOutputs('8x gtceu:sulfur_dust')
    .EUt(120)
    .duration(200)
    gte.desulfurization_recipe('easy_desulfurization_light')
    .inputFluids('gtceu:sulfuric_light_fuel 8000')
    .outputFluids('gtceu:light_fuel 8000',
        'gtceu:hydrogen 8000'
    )
    .itemOutputs('8x gtceu:sulfur_dust')
    .EUt(120)
    .duration(200)
    gte.desulfurization_recipe('easy_desulfurization_naphtha')
    .inputFluids('gtceu:sulfuric_naphtha 8000')
    .outputFluids('gtceu:naphtha 8000',
        'gtceu:hydrogen 8000'
    )
    .itemOutputs('8x gtceu:sulfur_dust')
    .EUt(120)
    .duration(200)
    gte.desulfurization_recipe('easy_desulfurization_gas')
    .inputFluids('gtceu:sulfuric_gas 8000')
    .outputFluids('gtceu:refinery_gas 8000',
        'gtceu:hydrogen 8000'
    )
    .itemOutputs('8x gtceu:sulfur_dust')
    .EUt(120)
    .duration(200)
    gte.desulfurization_recipe('easy_desulfurization_gas_natural')
    .inputFluids('gtceu:natural_gas 8000')
    .outputFluids('gtceu:refinery_gas 8000',
        'gtceu:hydrogen 8000'
    )
    .itemOutputs('8x gtceu:sulfur_dust')
    .EUt(120)
    .duration(200)
    gte.desulfurization_recipe('easy_fuel_2')
    .inputFluids('gtceu:natural_gas 8000',
        'gtceu:sulfuric_gas 8000',
        'gtceu:sulfuric_naphtha 8000',
        'gtceu:sulfuric_light_fuel 8000',
        'gtceu:sulfuric_heavy_fuel 8000'

    )
    .outputFluids('gtceu:refinery_gas 16000',
        'gtceu:naphtha 8000',
        'gtceu:light_fuel 8000',
        'gtceu:heavy_fuel 8000',
        'gtceu:hydrogen 40000'
    )
    .itemOutputs('40x gtceu:sulfur_dust')
    .circuit(2)
    .EUt(120)
    .duration(400)
    gte.desulfurization_recipe('easy_fuel_1')
    .inputFluids(
        'gtceu:sulfuric_gas 8000',
        'gtceu:sulfuric_naphtha 8000',
        'gtceu:sulfuric_light_fuel 8000',
        'gtceu:sulfuric_heavy_fuel 8000'

    )
    .outputFluids('gtceu:refinery_gas 8000',
        'gtceu:naphtha 8000',
        'gtceu:light_fuel 8000',
        'gtceu:heavy_fuel 8000',
        'gtceu:hydrogen 32000'
    )
    .itemOutputs('32x gtceu:sulfur_dust')
    .circuit(1)
    .EUt(120)
    .duration(300)
    gtr.assembler('gtceu:desulfurization')
    .itemInputs('8x #gtceu:circuits/mv',
        '1x gtceu:mv_machine_hull',
        '4x gtceu:mv_electric_pump'
    ).itemOutputs('1x gtceu:desulfurization')
    .circuit(6)
    .EUt(120)
    .duration(300)
    gtr.assembly_line('gtnn:component_assembly_line')
    .itemInputs('2x gtceu:assembly_line',
        '16x gtceu:assembly_line_unit',
        '16x gtceu:assembly_line_casing',
        '32x #gtceu:circuits/luv',
        '8x gtceu:luv_field_generator'
    )
    .itemOutputs('1x gtnn:component_assembly_line')
    .stationResearch((b)=>b
                        .researchStack(Item.of('gtceu:assembly_line'))
                        .CWUt(32)
                        .EUt(GTValues.VA[GTValues.LuV]))
    .duration(20 * 3000)
    .EUt(GTValues.VA[GTValues.LuV])
    gtr.assembler('gtnn:component_assline_casing_luv')
    .itemInputs('16x gtceu:assembly_line_casing')
    .circuit(1)
    .itemOutputs('1x gtnn:component_assline_casing_luv')
    .duration(20 * 300)
    .EUt(GTValues.VA[GTValues.LuV])
    event.shaped(Item.of('gtecore:ten_in_one',1),[
        "AOA",
        "CDC",
        "EFE"
    ],{
        "A":'gtceu:lv_electric_piston',
        'O':'gtceu:steel_plate',
        "C":'#gtceu:circuits/lv',
        'D':"gtceu:lv_machine_hull",
        "E":'gtceu:lv_electric_motor',
        "F":"gtceu:tin_single_cable"
    })
    gtr.assembly_line('gtecore:chemistry_terminator')
    .itemInputs('32x gtceu:zpm_electric_motor',
        '32x gtceu:large_chemical_reactor',
        '8x gtceu:luv_field_generator',
        '16x #gtceu:circuits/uv'
    ).inputFluids('gtceu:polybenzimidazole 32000',
        'gtceu:reinforced_epoxy_resin 32000',
        'gtceu:europium 32000'
    )
    .itemOutputs('1x gtecore:chemistry_terminator')
    .stationResearch((b)=>b
                        .researchStack(Item.of('gtceu:large_chemical_reactor'))
                        .CWUt(32)
                        .EUt(GTValues.VA[GTValues.LuV]))
    .duration(20 * 3000)
    gte.chemistry_terminator_recipe('gtecore:water_to_oil')
    .inputFluids('minecraft:water 8000')
    .outputFluids('gtceu:high_octane_gasoline 80000')
    .EUt(7)
    .duration(20)
    gte.chemistry_terminator_recipe('gtecore:air_to_hno3')
    .inputFluids('gtceu:air 8000')
    .outputFluids('gtceu:sulfuric_acid 8000',
        'gtceu:nitric_acid 8000',
        'gtceu:phosphoric_acid 8000',
        'gtceu:hypochlorous_acid 8000',
        'gtceu:hydrofluoric_acid 8000',
        'gtceu:hydrochloric_acid 8000',
        'gtceu:fluoroantimonic_acid 8000'
    )
    .EUt(16)
    .duration(20)
    gte.chemistry_terminator_recipe('gtecore:one_plantium_recipe')
    .itemInputs('32x gtceu:cooperite_dust')
    .itemOutputs('10x gtceu:platinum_dust',
        '10x gtceu:palladium_dust',
        '10x gtceu:rhodium_dust',
        '10x gtceu:ruthenium_dust',
        '10x gtceu:iridium_dust',
        '10x gtceu:osmium_dust'
    ).duration(20)
    .EUt(30)
    gte.chemistry_terminator_recipe('gtecore:easy_europium')
    .inputFluids('gtceu:hydrogen 1000')
    .outputFluids('gtceu:europium 1000')
    .duration(20)
    .EUt(30)
    gte.chemistry_terminator_recipe('gtecore:easy_americium_plasma')
    .outputFluids('gtceu:americium_plasma 1000')
    .itemInputs('1x gtceu:plutonium_dust')
    .duration(20)
    .EUt(30)
    gte.chemistry_terminator_recipe('gtecore:easy_naquadah')
    .itemInputs('32x gtceu:crushed_naquadah_ore')
    .itemOutputs('32x gtceu:enriched_naquadah_dust',
        '32x gtceu:trinium_dust',
        '32x gtceu:naquadah_dust',
        '32x gtceu:naquadria_dust'
    ).duration(20)
    .EUt(30)
}
)