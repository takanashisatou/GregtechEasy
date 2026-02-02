ServerEvents.recipes((event) => {
    const gtr = event.recipes.gtceu
    event.remove({input:'gtceu:raw_platinum'})
    event.remove({input:'gtceu:endstone_platinum_ore'})
    event.remove({input:'gtceu:cooperite_dust'})
    event.remove({'id':'gtceu:coke_oven/log_to_charcoal'})
    event.remove({'id':'gtnn:assembly_line/component_assembly_line'})
    event.remove({'id':'gtceu:forming_press/printed_logic_processor'})
    gtr.forming_press('gtecore:printed_logic_processor')
    .EUt(26)
    .duration(2 * 20)
    .notConsumable('1x ae2:logic_processor_press')
    .itemInputs('1x minecraft:gold_ingot')
    .itemOutputs('1x ae2:printed_logic_processor')
    gtr.coke_oven('fast_coke_oven')
    .itemInputs('#minecraft:logs_that_burn')
    .itemOutputs('minecraft:charcoal')
    .outputFluids('gtceu:creosote 1000')
    .duration(20)

    gtr.compressor('easy_box')
    .itemInputs('64x gtceu:steam_machine_casing')
    .itemOutputs('1x gtecore:easy_box')
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
    event.shaped(Item.of('gtecore:big_alloy',1),[
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
event.shaped(Item.of('gtecore:big_compressor',1),[
        "AXA",
        "BOB",
        "AXA"
    ],{
        "A": "gtceu:steam_machine_casing",
        "O": "gtceu:lp_steam_compressor",
        "X": "gtceu:bronze_gear",
        "B": "gtceu:potin_gear"
    })
    event.shaped(Item.of('gtecore:big_forge_hammer',1),[
        "AXA",
        "BOB",
        "AXA"
    ],{
        "A": "gtceu:steam_machine_casing",
        "O": "gtceu:lp_steam_forge_hammer",
        "X": "gtceu:bronze_gear",
        "B": "gtceu:potin_gear"
    })
    event.shaped(Item.of('gtecore:big_steam_extractor',1),[
        "AXA",
        "BOB",
        "AXA"
    ],{
        "A": "gtceu:steam_machine_casing",
        "O": "gtceu:lp_steam_extractor",
        "X": "gtceu:bronze_gear",
        "B": "gtceu:potin_gear"
    })
    event.shaped(Item.of('gtecore:component_factory',1),[
        "ABA",
        "BOB",
        "ABA"
    ],{
        "A": "gtceu:mv_robot_arm",
        "O": "gtceu:mv_machine_hull",
        "B": "#gtceu:circuits/mv"
    })

    gtr.assembler('gtecore:circuit_factory')
    .itemInputs("1x gtceu:hv_machine_hull",
        "1x gtceu:hv_assembler",
        "1x gtceu:hv_cutter",
        "1x gtceu:hv_laser_engraver",
        "1x gtceu:hv_circuit_assembler",
        "2x #gtceu:circuits/iv",
        "2x gtceu:hv_robot_arm"
    ).circuit(1)
    .itemOutputs('1x gtecore:circuit_factory')
    .duration(1200)
    .EUt(GTValues.VA[GTValues.HV])
    event.shaped(Item.of('gtecore:big_bender',1),[
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
    event.shaped(Item.of('gtecore:big_mixer',1),[
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
    event.shaped(Item.of('gtecore:big_autoclave',1),[
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
    event.shaped(Item.of('gtecore:big_wiremill',1),[
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
    event.shaped(Item.of('gtecore:big_centrifuge',1),[
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
    event.shaped(Item.of('gtecore:big_wash',1),[
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
    event.shaped(Item.of('gtecore:big_electrolyzer',1),[
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
    event.shaped(Item.of('gtecore:big_gas_collector',1),[
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
    event.shaped(Item.of('gtecore:big_extruder',1),[
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
    event.shaped(Item.of('gtecore:ecological_simulator',1),[
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
        '16x minecraft:wheat',
        '16x minecraft:dried_kelp_block'
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
    event.shaped(Item.of('gtecore:big_extractor',1),[
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
    event.shaped(Item.of('gtecore:big_brewery',1),[
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
    gtr.assembler('gtecore:miracle_ring')
    .itemInputs('32x gtceu:iv_machine_hull',
        '128x #gtceu:circuits/zpm',
        '32x gtceu:assembly_line_casing'
    ).EUt(GTValues.VA[GTValues.IV])
    .inputFluids('gtceu:polybenzimidazole 1000000')
    .itemOutputs('1x gtecore:miracle_ring')
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
    gtr.assembler('gtecore:general_fuel_engine')
    .circuit(24)
    .EUt(1960)
    .duration(600)
    .itemInputs('4x gtceu:iv_machine_hull',
        '4x #gtceu:circuits/zpm',
        '8x gtceu:iv_electric_piston'
    ).inputFluids('gtceu:styrene_butadiene_rubber 4096')
    .itemOutputs('1x gtecore:general_fuel_engine')
    
    gtr.assembler('gtceu:advanced_energy_detector_cover_easy')
    .circuit(1)
    .EUt(28)
    .duration(200)
    .itemInputs('1x gtceu:lv_sensor',
        '1x gtceu:energy_detector_cover'
    )
    .itemOutputs('1x gtceu:advanced_energy_detector_cover')
    
    event.shaped(Item.of('gtecore:steam_grinder_easy',1),[
        "A"
    ],{
        "A":'gtceu:steam_grinder'
    })
    event.shaped(Item.of('gtecore:steam_oven_easy',1),[
        "A"
    ],{
        "A":'gtceu:steam_oven'
    })
    event.shaped(Item.of('gtecore:steam_op',1),[
        "A"
    ],{
        "A":'gtecore:easy_box'
    })
    event.shaped(Item.of('gtecore:distillation_tower_easy',1),[
        "A"
    ],{
        "A":'gtceu:distillation_tower'
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
    gtr.assembler('gtecore:desulfurization')
    .itemInputs('8x #gtceu:circuits/mv',
        '1x gtceu:mv_machine_hull',
        '4x gtceu:mv_electric_pump'
    ).itemOutputs('1x gtecore:desulfurization')
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
    .EUt(GTValues.VA[GTValues.LuV])
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
    .circuit(1)
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

    gte.chemistry_terminator_recipe('gtecore:easy_pbi')
    .itemInputs('20x gtceu:carbon_dust')
    .inputFluids('gtceu:hydrogen 12000',
        'gtceu:nitrogen 4000'
    )
    .outputFluids('gtceu:polybenzimidazole 36000')
    .duration(20)
    .EUt(30)
    .circuit(2)
    event.shaped(Item.of('gtceu:nano_processor_computer',1),[
        "A"
    ],{
        "A":"mekanism_extras:absolute_control_circuit"
    })
    event.shaped(Item.of('gtceu:quantum_processor_computer',1),[
        "A"
    ],{
        "A":"mekanism_extras:supreme_control_circuit"
    })
    event.shaped(Item.of('gtceu:crystal_processor_computer',1),[
        "A"
    ],{
        "A":"mekanism_extras:cosmic_control_circuit"
    })
    event.shaped(Item.of('gtceu:wetware_processor_computer',1),[
        "A"
    ],{
        "A":'mekanism_extras:infinite_control_circuit'
    }
    )
    gte.easy_fluid("easy_fluid_recipe_one")
    .circuit(1)
    .duration(100)
    .EUt(10)
    .outputFluids(
        'gtceu:oil 6000',
        'gtceu:oil_medium 6000',
        'gtceu:oil_light 6000',
        'gtceu:oil_heavy 6000',
        'gtceu:air 6000',
        'gtceu:ender_air 6000',
        'gtceu:nether_air 6000',
        'gtceu:salt_water 6000'
    )
    gte.easy_fluid("easy_fluid_recipe_two")
    .circuit(2)
    .duration(100)
    .EUt(10)
    .outputFluids(
        'gtceu:element_710 6000'
    )
    gte.super_string_mixing('e710_bromiding')
    .circuit(6)
    .duration(600)
    .EUt(GTValues.VA[GTValues.ZPM])
    .inputFluids('gtceu:bromine 6000',
        'gtceu:element_710 6000'
    ).outputFluids('gtceu:element_710_bromide 12000')
    gtr.distillation_tower('gtceu:element_710_bromide_to_distill')
    .inputFluids('gtceu:element_710_bromide 10000')
    .EUt(GTValues.VA[GTValues.UV])
    .duration(300)
    .outputFluids('gtceu:dimension_c_raw 5000',
        'gtceu:quantum_ca_raw 5000',
        'gtceu:xenon 2000',
        'gtceu:radon 2000',
        'gtceu:tritium 2000'
    )
    gte.super_string_mixing('quantam_ca_raw_to_quantum_ca')
    .inputFluids('gtceu:bromine 10000',
        'gtceu:quantum_ca_raw 10000'
    )
    .duration(100)
    .outputFluids('gtceu:quantum_ca 20000')
    .EUt(GTValues.VA[GTValues.UHV])
gte.super_string_mixing('diemnsion_carbon_raw_to_dimension_carbon')
    .inputFluids(
        'gtceu:dimension_c_raw 10000')
    .itemInputs('16x gtceu:iodine_dust')
    .duration(100)
    .outputFluids('gtceu:dimension_c 15000')
    .EUt(GTValues.VA[GTValues.UHV])
gte.super_string_mixing('dimension_carbon_fluid_to_dust')
    .inputFluids(
    'gtceu:dimension_c 10000',
    'gtceu:polyphenylene_sulfide 6000',
    'gtceu:polybenzimidazole 6000'
)
    .itemOutputs('32x gtceu:dimension_c_dust')
    .duration(100)
    .EUt(GTValues.VA[GTValues.UHV])
gte.super_string_mixing('quantum_ca_fluid_to_dust')
    .inputFluids(
    'gtceu:quantum_ca 10000',
    'gtceu:polyphenylene_sulfide 6000',
    'gtceu:polybenzimidazole 6000'
)
    .itemOutputs('32x gtceu:quantum_ca_dust')
    .duration(100)
    .EUt(GTValues.VA[GTValues.UHV])
gte.super_string_mixing('super_string_catalyst')
    .inputFluids('gtceu:polyphenylene_sulfide 6000',
        'gtceu:polybenzimidazole 3000',
        'gtceu:neutronium 3000',
        'gtceu:tritanium 3000',
        'gtceu:iron_plasma 3000')
    .itemInputs('8x gtceu:quantum_ca_dust',
    '8x gtceu:dimension_c_dust'
    )
.EUt(GTValues.VA[GTValues.UHV])
.duration(100)
.outputFluids('gtceu:super_string_catalyst 200000')
gtr.assembly_line('super_fusion_reactor_recipe')
    .itemInputs('64x #gtceu:circuits/uhv',
        '32x gtceu:zpm_robot_arm',
        '16x gtceu:zpm_fusion_reactor',
        '32x gtceu:luv_fusion_reactor'
    )
    .inputFluids('gtceu:darmstadtium 8000')
    .itemOutputs('1x gtecore:super_fusion_reactor')
    .stationResearch((b)=>b
                        .researchStack(Item.of('gtceu:zpm_fusion_reactor'))
                        .CWUt(32)
                        .EUt(GTValues.VA[GTValues.ZPM]))
    .duration(20 * 3000)
    .EUt(GTValues.VA[GTValues.LuV])
    gtr.assembly_line('gtnn:component_assline_casing_uv')
        .itemInputs('4x #gtceu:circuits/uhv',
            '2x gtceu:uv_robot_arm',
            '2x gtceu:uv_electric_motor',
            '2x gtceu:assembly_line_casing',
            '16x gtceu:uhpic_chip',
            '16x gtceu:quantum_star',
            '64x gtceu:enriched_naquadah_trinium_europium_duranide_single_wire'
    )
    .inputFluids('gtceu:neutronium 2000',
        'gtceu:xenon 2000',
        'gtceu:radon 2000',
        'gtceu:nitrogen_plasma 2000'
    )
    .itemOutputs('1x gtnn:component_assline_casing_uv')
    .stationResearch((b)=>b
                        .researchStack(Item.of('gtnn:component_assline_casing_zpm'))
                        .CWUt(32)
                        .EUt(GTValues.VA[GTValues.UV]))
    .duration(20 * 3000)
    .EUt(GTValues.VA[GTValues.UHV])
    gtr.assembly_line('gtecore:super_string_casing')
        .itemInputs('1x gtnn:component_assline_casing_uv',
            '1x #gtceu:circuits/uhv',
            '1x gtceu:uv_electric_motor',
            '1x gtceu:uv_robot_arm',
            '1x gtceu:fusion_coil',
            '1x gtceu:quantum_star',
            '1x gtceu:uv_electric_pump'
        )
        .inputFluids('gtceu:neutronium 2000',
        'gtceu:xenon 2000',
        'gtceu:radon 2000',
        'gtceu:nitrogen_plasma 2000'
    )
    .itemOutputs('16x gtecore:super_string_casing')
    .duration(20 * 30)
    .EUt(GTValues.VA[GTValues.UHV])
    .stationResearch((b)=>b
                        .researchStack(Item.of('gtceu:uv_machine_hull'))
                        .CWUt(32)
                        .EUt(GTValues.VA[GTValues.UV]))
    .duration(20 * 3000)

    gtr.assembly_line('gtecore:super_string_mixer')
    .itemInputs('64x gtceu:large_mixer',
        '32x #gtceu:circuits/uhv',
        '16x gtecore:super_string_casing',
        '32x gtceu:uv_electric_motor',
        '64x #gtceu:circuits/uv',
        '64x #gtceu:circuits/zpm',
        '64x #gtceu:circuits/luv',
        '16x gtceu:uv_electric_motor',
        '64x gtceu:uv_field_generator'
    )
        .inputFluids('gtceu:neutronium 2000000',
        'gtceu:xenon 2000000',
        'gtceu:radon 2000000',
        'gtceu:nitrogen_plasma 2000000')
        .itemOutputs('1x gtecore:super_string_mixer')
        .duration(20 * 30)
        .EUt(GTValues.VA[GTValues.UHV])
        .stationResearch((b)=>b
                        .researchStack(Item.of('gtceu:large_mixer'))
                        .CWUt(32)
                        .EUt(GTValues.VA[GTValues.UV]))
    .duration(20 * 3000)
    gte.string_of_creation('gtecore:original_string')
    .itemInputs('16x gtceu:quantum_star',
        '16x gtceu:long_tritanium_rod',
        '16x gtceu:long_magnetic_samarium_rod'
    ).inputFluids('gtceu:super_string_catalyst 10000',
        'gtceu:tritanium 32000',
        'gtceu:neutronium 32000'
    ).itemOutputs('64x gtecore:original_string')
    .duration(20*60)
    .EUt(GTValues.VA[GTValues.UHV])
    gte.super_string_mixing('gtecore:string_of_creation')
    .inputFluids('gtceu:super_string_catalyst 1000000000')
    .itemInputs('16x gtecore:super_string_casing',
        '32x #gtceu:circuits/uhv',
        '64x gtceu:uv_field_generator',
        '32x gtceu:uranium_rhodium_dinaquadide_hex_wire',
        '64x gtceu:ruthenium_trinium_americium_neutronate_hex_wire'
    )
    .itemOutputs('1x gtecore:string_of_creation')
    .duration(20*60)
    .EUt(GTValues.VA[GTValues.UHV])
    gte.super_string_mixing('gtecore:super_string_oscillator_array')
    .inputFluids('gtceu:super_string_catalyst 2000000000')
    .itemInputs('64x gtecore:super_string_casing',
        '64x #gtceu:circuits/uhv',
        '64x gtceu:uv_field_generator',
        '64x gtceu:yttrium_barium_cuprate_hex_cable',
        '32x gtceu:gravi_star',
        '32x gtceu:uv_sensor',
        '32x gtceu:uv_emitter',
        '64x gtecore:original_string'
    )
    .itemOutputs('1x gtecore:super_string_oscillator_array')
    .circuit(2)
    .duration(20 * 60)
    .EUt(GTValues.VA[GTValues.UHV])
    gte.super_string_mixing('gtecore:chord_of_all_things')
    .itemInputs('64x gtecore:alpha_string',
        '64x gtecore:beta_string',
        '64x gtecore:gamma_string',
       '64x gtecore:super_fusion_reactor')
       .circuit(3)
       .itemOutputs('1x gtecore:chord_of_all_things')
       .duration(20 * 60)
       .EUt(GTValues.VA[GTValues.UHV])
    gte.super_string_oscillator_array('original_string_to_alpha_beta_and_gamma_string')
    .itemInputs('64x gtecore:original_string')
    .itemOutputs('64x gtecore:alpha_string',
        '64x gtecore:beta_string',
        '64x gtecore:gamma_string'
    )
    .circuit(1)
    .duration(20 * 60)
    .EUt(GTValues.VA[GTValues.UHV])
    gte.chord_of_all_things('gtecore:super_string_circuit_board')
    .itemInputs('64x gtecore:alpha_string',
        '64x gtecore:beta_string',
        '64x gtecore:gamma_string'
    )
    .inputFluids('gtceu:super_string_catalyst 16000')
    .itemOutputs('32x gtecore:super_string_circuit_board')
    .circuit(1)
    .duration(20 * 60)
    .EUt(GTValues.VA[GTValues.UHV])
    gte.chord_of_all_things('gtecore:super_string_printed_circuit_board')
    .itemInputs('64x gtecore:original_string',
        '64x gtecore:super_string_circuit_board',
        '64x gtceu:gravi_star'
    )
    .inputFluids('gtceu:super_string_catalyst 16000')
    .itemOutputs('32x gtecore:super_string_printed_circuit_board')
    .circuit(1)
    .duration(20*60)
    .EUt(GTValues.VA[GTValues.UHV])
    gte.chord_of_all_things('gtecore:super_string_processor')
    .itemInputs('1x gtecore:super_string_printed_circuit_board',
        '4x gtecore:alpha_string',
        '4x gtecore:original_string'
    ).inputFluids('gtceu:quantum_ca 2000')
    .EUt(GTValues.VA[GTValues.UHV])
    .duration(20 * 60)
    .itemOutputs('1x gtecore:super_string_processor')
    gte.chord_of_all_things('gtecore:super_string_processor_assembly')
    .itemInputs('2x gtecore:super_string_processor',
        '8x gtecore:beta_string',
        '1x gtecore:super_string_printed_circuit_board'
    ).inputFluids('gtceu:super_string_catalyst 2000',
        'gtceu:dimension_c 2000'
    ).EUt(GTValues.VA[GTValues.UHV])
    .duration(20 * 60)
    .itemOutputs('1x gtecore:super_string_processor_assembly')
    gte.chord_of_all_things('gtecore:super_string_processor_computer')
    .itemInputs('2x gtecore:super_string_processor_assembly',
        '8x gtecore:gamma_string',
        '4x gtecore:super_string_printed_circuit_board',
        '16x gtecore:original_string'
    ).inputFluids('gtceu:super_string_catalyst 8000',
        'gtceu:element_710 1000000'
    ).EUt(GTValues.VA[GTValues.UHV])
    .duration(20 * 60)
    .itemOutputs('1x gtecore:super_string_processor_computer')
    gte.chord_of_all_things('gtecore:easy_e710')
    .itemInputs('1x gtecore:original_string')
    .outputFluids('gtceu:element_710 1000000')
    .duration(20 * 60)
    .EUt(GTValues.VA[GTValues.ZPM])
    .circuit(3)
    gte.chord_of_all_things('gtecore:super_string_processor_mainframe')
    .itemInputs('8x gtecore:super_string_printed_circuit_board',
        '2x gtecore:super_string_processor_computer',
        '32x gtecore:original_string',
        '64x gtecore:alpha_string',
        '64x gtecore:beta_string',
        '64x gtecore:gamma_string'
    ).inputFluids('gtceu:neutronium 16000',
        'gtceu:super_string_catalyst 16000'
    ).itemOutputs('1x gtecore:super_string_processor_mainframe')
    .duration(20 * 60)
    .EUt(GTValues.VA[GTValues.UHV])
     gtr.assembler('gtecore:easy_fluid_drilling_rig')
    .itemInputs('16x #gtceu:circuits/lv',
        '32x gtceu:steam_machine_casing',
        '16x gtceu:bronze_frame',
        '4x gtceu:bronze_gear'
    ).EUt(28)
    .duration(20 * 15)
    .itemOutputs('1x gtecore:easy_fluid_drilling_rig')
    gtr.assembly_line('gtecore:molecular_separators')
    .itemInputs('64x gtceu:large_electrolyzer',
        '16x #gtceu:circuits/uv',
        '8x gtceu:zpm_field_generator',
        '16x gtceu:tritanium_gear',
        '64x gtceu:darmstadtium_plate',
        '32x gtceu:hsse_frame',
        '64x gtceu:advanced_smd_capacitor'
    ).inputFluids(
        'gtceu:polybenzimidazole 8192',
        'gtceu:styrene_butadiene_rubber 4096'
    )
    .itemOutputs('gtecore:molecular_separators')
    .duration(20 * 60)
    .EUt(GTValues.VA[GTValues.ZPM])
    .stationResearch((b)=>b
                        .researchStack(Item.of('gtceu:large_electrolyzer'))
                        .CWUt(32)
                        .EUt(GTValues.VA[GTValues.LuV]))
    .duration(20 * 3000)
    .EUt(GTValues.VA[GTValues.ZPM])
    gtr.assembler('gtecore:integrated_petrochemical_plant')
    .itemInputs('1x gtnn:exxonmobil_chemical_plant',
        '1x gtecore:desulfurization',
        '1x gtceu:cracker',
        '8x #gtceu:circuits/zpm'
    ).inputFluids('gtceu:polybenzimidazole 16000')
    .itemOutputs('1x gtecore:integrated_petrochemical_plant')
    .duration(20 * 30)
    .EUt(GTValues.VA[GTValues.IV])
    gtr.assembly_line('gtecore:star_core_cooling_matrix')
    .itemInputs('64x gtceu:mega_vacuum_freezer',
        '16x #gtceu:circuits/uhv',
        '64x gtceu:zpm_electric_motor',
        '32x gtceu:zpm_robot_arm',
        '32x gtceu:double_europium_plate',
        '32x gtceu:uhpic_chip',
        '64x gtceu:uranium_rhodium_dinaquadide_single_wire'
    ).inputFluids('gtceu:molten_hssg 16000',
        'gtceu:sterilized_growth_medium 32000'
    )
    .itemOutputs('1x gtecore:star_core_cooling_matrix')
    .EUt(GTValues.VA[GTValues.ZPM])
    .duration(20 * 60)
    .stationResearch((b)=>b
                        .researchStack(Item.of('gtceu:mega_vacuum_freezer'))
                        .CWUt(32)
                        .EUt(GTValues.VA[GTValues.ZPM]))
    gtr.assembly_line('gtecore:ore_process_center')
    .itemInputs(
        '64x gtecore:steam_op',
        '32x #gtceu:circuits/zpm',
        '32x gtceu:iv_robot_arm',
        '32x gtceu:iv_electric_piston',
        '64x gtceu:data_orb',
        '64x gtceu:normal_optical_pipe',
        '64x gtceu:indium_tin_barium_titanium_cuprate_double_wire',
        '64x gtceu:laminated_glass'
    ).inputFluids('gtceu:polybenzimidazole 16000',
        'gtceu:molten_rhodium_plated_palladium 16000'
    )
    .itemOutputs('1x gtecore:ore_process_center')
    .duration(20 * 60)
    .EUt(GTValues.VA[GTValues.IV])
    .stationResearch((b)=>b
                        .researchStack(Item.of('gtecore:steam_op'))
                        .CWUt(32)
                        .EUt(GTValues.VA[GTValues.IV]))
    gtr.assembler('gtnn:component_assline_casing_zpm')
    .itemInputs('8x gtnn:component_assline_casing_luv')
    .itemOutputs('1x gtnn:component_assline_casing_zpm')
    .duration(20 * 30)
    .EUt(GTValues.VA[GTValues.ZPM])
    gte.integrated_petrochemical_plant('gtecore:ethylene_easy')
    .inputFluids('gtceu:oil 16000',
        'gtceu:hydrogen 4000',
        'gtceu:steam 16000'
    ).outputFluids('gtceu:ethylene 128000')
    .circuit(1)
    .EUt(GTValues.VA[GTValues.LV])
    .duration(20 * 5)
    gte.integrated_petrochemical_plant('gtecore:methane_easy')
    .inputFluids('gtceu:oil 16000',
        'gtceu:hydrogen 4000',
        'gtceu:steam 16000'
    ).outputFluids('gtceu:methane 128000')
    .circuit(2)
    .EUt(GTValues.VA[GTValues.LV])
    .duration(20 * 5)
    gte.integrated_petrochemical_plant('gtecore:logs_easy')
    .itemInputs('64x #minecraft:logs')
    .outputFluids('gtceu:dimethylbenzene 16000',
        'gtceu:toluene 16000',
        'gtceu:creosote 16000',
        'gtceu:phenol 16000',
        'gtceu:benzene 16000',
        'gtceu:methanol 16000',
        'gtceu:acetone 16000',
        'gtceu:methyl_acetate 16000',
        'gtceu:ethanol 16000',
        'gtceu:acetic_acid 16000',
        'gtceu:ethylene 16000',
        'gtceu:methane 16000'
    ).circuit(3)
    .EUt(GTValues.VA[GTValues.LV])
    .duration(20 * 5)

}   
)