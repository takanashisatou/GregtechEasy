ServerEvents.recipes((event) => {
    const gtr = event.recipes.gtceu
    const gte = event.recipes.gtecore
    const baihu_condition = Java.loadClass('org.satou.gtecore.common.data.condition.BAI_HU_CONDITION')
    const zhuque_condition = Java.loadClass('org.satou.gtecore.common.data.condition.ZHU_QUE_CONDITION')
    const xuanwu_conddition = Java.loadClass('org.satou.gtecore.common.data.condition.XUAN_WU_CONDITION')
    const qing_long_condition = Java.loadClass('org.satou.gtecore.common.data.condition.QING_LONG_CONDITION')
    for(let material of GTCEuAPI.materialManager.getRegisteredMaterials()){
        event.remove({'id':'gtceu:ore_washer/' +'dissolve_ore' + material.getName()})
        event.remove({'id':'gtceu:ore_washer/' +'dissolve_raw' + material.getName()}) 
    }   
    gtr.compressor('minecraft:netherite_block')
    .itemInputs('9x minecraft:netherite_ingot')
    .itemOutputs('1x minecraft:netherite_block')
    gtr.assembler('gtecore:not_hard_box')
    .EUt(GTValues.VA[GTValues.LV])
    .itemInputs('8x gtecore:easy_box',
        '32x gtceu:solid_machine_casing',
        '16x gtceu:lv_robot_arm',
        '8x #gtceu:circuits/mv'
    )
    .duration(20 * 30)
    .itemOutputs('1x gtecore:not_hard_box')
    .circuit(12)
    gtr.assembler('gtecore:not_hard_fluid_drilling_rig')
    .EUt(GTValues.VA[GTValues.LV])
    .itemInputs('8x gtecore:easy_fluid_drilling_rig',
        '16x gtceu:solid_machine_casing',
        '8x #gtceu:circuits/mv'
    )
    .duration(20 * 30)
    .itemOutputs('1x gtecore:not_hard_fluid_drilling_rig')
    .circuit(16)
    gtr.assembler('gtecore:large_general_generator')
    .EUt(GTValues.VA[GTValues.LV])
    .itemInputs('1x gtceu:lv_machine_hull',
        '2x gtceu:lv_field_generator',
        '2x gtceu:lv_sensor',
        '4x #gtceu:circuits/mv',
        '8x gtceu:lv_robot_arm'
    ).duration(20 * 30)
    .itemOutputs('1x gtecore:large_general_generator')
    .circuit(16)
    gtr.assembler('gtecore:wiremill_factory')
    .itemInputs("1x gtceu:hv_machine_hull",
        "1x gtceu:hv_assembler",
        "8x gtceu:hv_wiremill",
        "8x #gtceu:circuits/iv",
        "2x gtceu:hv_robot_arm"
    )
    .circuit(8)
    .itemOutputs('1x gtecore:wiremill_factory')
    .duration(1200)
    .EUt(GTValues.VA[GTValues.HV])
    gte.integrated_petrochemical_plant('gtecore:oil_to_many')
    .inputFluids('gtceu:oil 160000')
    .duration(20 * 5)
    .EUt(GTValues.VA[GTValues.LV])
    .outputFluids('gtceu:benzene 16000',
        'gtceu:methane 16000',
        'gtceu:propane 16000',
        'gtceu:propene 16000',
        'gtceu:ethane 16000',
        'gtceu:butene 16000',
        'gtceu:butadiene 16000',
        'gtceu:heavy_fuel 16000',
        'gtceu:light_fuel 16000',
        'gtceu:helium 16000',
        'gtceu:toluene 16000'
    )
    .circuit(8)
     gte.starblade_etching('gtecore:silicon_boule_to_chips')
    .itemInputs('4x gtceu:silicon_boule')
    .EUt(GTValues.VA[GTValues.LV])
    .duration(20 * 30)
    .itemOutputs('64x gtceu:ram_chip',
        '64x gtceu:simple_soc',
        '64x gtceu:lpic_chip',
        '64x gtceu:cpu_chip',
        '64x gtceu:ulpic_chip',
        '64x gtceu:ilc_chip'
    )
    .circuit(1)
    gte.starblade_etching('gtecore:phosphorus_boule_to_chips')
    .itemInputs('4x gtceu:phosphorus_boule')
    .EUt(GTValues.VA[GTValues.LV])
    .duration(20 * 30)
    .itemOutputs('64x gtceu:soc',
        '64x gtceu:nand_memory_chip',
        '64x gtceu:nor_memory_chip',
        '64x gtceu:mpic_chip',
        '64x gtceu:hpic_chip'
    )
    .circuit(2)
    gte.starblade_etching('gtecore:naquadah_boule_to_chips')
    .itemInputs('4x gtceu:naquadah_boule')
    .EUt(GTValues.VA[GTValues.LV])
    .duration(20 * 30)
    .itemOutputs(
        '64x gtceu:uhpic_chip',
        '64x gtceu:qbit_cpu_chip',
        '64x gtceu:advanced_soc',
        '64x gtceu:nano_cpu_chip'
    )
    .circuit(3)
    gte.starblade_etching('gtecore:neutronium_boule_to_chips')
    .itemInputs('4x gtceu:neutronium_boule')
    .EUt(GTValues.VA[GTValues.LV])
    .duration(20 * 30)
    .itemOutputs(
       '4096x gtceu:highly_advanced_soc'
    )
    .circuit(4)
    gtr.assembly_line('gtecore:starblade_etching_machine')
    .itemInputs('64x gtceu:large_engraving_laser',
        '16x #gtceu:circuits/uhv',
        '64x gtceu:zpm_electric_motor',
        '16x gtceu:zpm_robot_arm',
        '16x gtceu:double_europium_plate',
        '64x gtceu:uhpic_chip',
        '64x gtceu:uranium_rhodium_dinaquadide_single_wire'
    ).inputFluids('gtceu:molten_hssg 64000',
        'gtceu:sterilized_growth_medium 16000',
        'gtceu:molten_hastelloy_c_276 16000'
    )
    .itemOutputs('1x gtecore:starblade_etching_machine')
    .EUt(GTValues.VA[GTValues.ZPM])
    .duration(20 * 60)
    .stationResearch((b)=>b
                        .researchStack(Item.of('gtceu:large_engraving_laser'))
                        .CWUt(32)
                        .EUt(GTValues.VA[GTValues.ZPM]))
    gte.crystal_center('gtceu:silicon_boule_in_crystal_center')
    .itemInputs('4x gtceu:silicon_dust')
    .EUt(GTValues.VA[GTValues.LV])
    .duration(20 * 5)
    .itemOutputs('16x gtceu:silicon_boule')
    gte.crystal_center('gtceu:phosphorus_boule_in_crystal_center')
    .itemInputs('4x gtceu:phosphorus_dust')
    .EUt(GTValues.VA[GTValues.LV])
    .duration(20 * 5)
    .itemOutputs('16x gtceu:phosphorus_boule')
    gte.crystal_center('gtceu:naquadah_boule_in_crystal_center')
    .itemInputs('4x gtceu:naquadah_ingot')
    .EUt(GTValues.VA[GTValues.LV])
    .duration(20 * 5)
    .itemOutputs('16x gtceu:naquadah_boule')
    gte.crystal_center('gtceu:neutronium_boule_in_crystal_center')
    .itemInputs('4x gtceu:neutronium_ingot')
    .EUt(GTValues.VA[GTValues.LV])
    .duration(20 * 5)
    .itemOutputs('16x gtceu:neutronium_boule')
    gtr.assembly_line('gtecore:crystal_center')
    .itemInputs('64x gtecore:circuit_factory',
        '16x #gtceu:circuits/uhv',
        '64x gtceu:zpm_electric_motor',
        '16x gtceu:zpm_robot_arm',
        '16x gtceu:double_europium_plate',
        '64x gtceu:uhpic_chip',
        '64x gtceu:uranium_rhodium_dinaquadide_single_wire'
    ).inputFluids('gtceu:molten_hssg 64000',
        'gtceu:sterilized_growth_medium 16000',
        'gtceu:molten_hastelloy_c_276 16000'
    )
    .itemOutputs('1x gtecore:crystal_center')
    .EUt(GTValues.VA[GTValues.ZPM])
    .duration(20 * 60)
    .stationResearch((b)=>b
                        .researchStack(Item.of('gtecore:circuit_factory'))
                        .CWUt(32)
                        .EUt(GTValues.VA[GTValues.ZPM]))
    gtr.assembly_line('gtecore:quantum_cable_assembler')
    .itemInputs('64x gtecore:wiremill_factory',
        '16x #gtceu:circuits/uhv',
        '64x gtceu:zpm_electric_motor',
        '16x gtceu:zpm_robot_arm',
        '16x gtceu:double_europium_plate',
        '64x gtceu:uhpic_chip',
        '64x gtceu:uranium_rhodium_dinaquadide_single_wire',
        '32x gtceu:zpm_field_generator'
    ).inputFluids('gtceu:molten_hssg 64000',
        'gtceu:overheated_bromine_sulfate_gas 32000'
    )
    .itemOutputs('1x gtecore:quantum_cable_assembler')
    .EUt(GTValues.VA[GTValues.ZPM])
    .duration(20 * 60)
    .stationResearch((b)=>b
                        .researchStack(Item.of('gtecore:wiremill_factory'))
                        .CWUt(32)
                        .EUt(GTValues.VA[GTValues.ZPM]))
    const va_list = ['LV','MV','HV','EV','IV','LuV','ZPM','UV','UHV','UEV','UIV','UXV','OpV','MAX']
    const Eut = 28;
    for(const va of va_list){
        gtr.assembler('gtecore:' +va.toLocaleLowerCase() +'_16a_wireless_hatch')
        .itemInputs('gtceu:' + va.toLowerCase() + '_machine_hull',
    'gtceu:advanced_energy_detector_cover')
        .itemOutputs('1x '+'gtmthings:'+va.toLowerCase()+'_16a_wireless_energy_input_hatch')
        .EUt(Eut)
        .circuit(31)
        .duration(20 * 60)
        Eut <<= 2;
    }
    gtr.assembler('gtecore:max_super_battery_buffer_1x')
    .itemInputs('64x gtceu:max_battery')
    .itemOutputs('1x gtecore:max_super_battery_buffer_1x')
    .duration(20 * 30)
    .EUt(GTValues.VA[GTValues.UV])
    gtr.assembler('gtecore:antimatter_ball')
    .itemInputs('8x gtceu:ev_machine_hull',
        '64x #gtceu:circuits/luv',
        '16x gtceu:ev_robot_arm',
        '16x gtceu:ev_sensor',
        '16x gtceu:ev_fluid_regulator',
        '16x gtceu:ev_field_generator'
    )
    .itemOutputs('1x gtecore:antimatter_ball')
    .duration(20 * 60)
    .circuit(31)
    .EUt(GTValues.VA[GTValues.EV])
    gte.integrated_petrochemical_plant('gtecore:oil_medium_to_many')
    .inputFluids('gtceu:oil_medium 160000')
    .duration(20 * 5)
    .EUt(GTValues.VA[GTValues.LV])
    .outputFluids('gtceu:benzene 16000',
        'gtceu:methane 16000',
        'gtceu:propane 16000',
        'gtceu:propene 16000',
        'gtceu:ethane 16000',
        'gtceu:butene 16000',
        'gtceu:butadiene 16000',
        'gtceu:heavy_fuel 16000',
        'gtceu:light_fuel 16000',
        'gtceu:helium 16000',
        'gtceu:toluene 16000'
    )
    .circuit(8)
    gte.integrated_petrochemical_plant('gtecore:oil_light_to_many')
    .inputFluids('gtceu:oil_light 160000')
    .duration(20 * 5)
    .EUt(GTValues.VA[GTValues.LV])
    .outputFluids('gtceu:benzene 16000',
        'gtceu:methane 16000',
        'gtceu:propane 16000',
        'gtceu:propene 16000',
        'gtceu:ethane 16000',
        'gtceu:butene 16000',
        'gtceu:butadiene 16000',
        'gtceu:heavy_fuel 16000',
        'gtceu:light_fuel 16000',
        'gtceu:helium 16000',
        'gtceu:toluene 16000'
    )
    .circuit(8)
    gte.integrated_petrochemical_plant('gtecore:oil_heavy_to_many')
    .inputFluids('gtceu:oil_heavy 160000')
    .duration(20 * 5)
    .EUt(GTValues.VA[GTValues.LV])
    .outputFluids('gtceu:benzene 16000',
        'gtceu:methane 16000',
        'gtceu:propane 16000',
        'gtceu:propene 16000',
        'gtceu:ethane 16000',
        'gtceu:butene 16000',
        'gtceu:butadiene 16000',
        'gtceu:heavy_fuel 16000',
        'gtceu:light_fuel 16000',
        'gtceu:helium 16000',
        'gtceu:toluene 16000'
    )
    .circuit(8)
    gte.super_string_mixing('gtceu:dark_fluid')
    .inputFluids('gtceu:antimatter 6000',
        'gtceu:super_string_catalyst 2000'
    )
    .itemInputs('16x gtecore:gamma_string')
    .outputFluids('gtceu:dark_fluid 16000')
    .EUt(GTValues.VA[GTValues.EV])
    .duration(20 * 30)
    gtr.assembly_line('gtceu:uhv_electric_motor')
    .itemInputs('1x gtceu:long_tritanium_rod',
        '4x gtceu:dark_fluid_rod',
        '64x gtceu:fine_europium_wire',
        '64x gtceu:fine_europium_wire',
        '16x gtceu:infinity_ring',
        '4x gtceu:infinity_plate'
    )
    .inputFluids('gtceu:dark_fluid 2000',
        'gtceu:super_string_catalyst 2000'
    )
    .itemOutputs('1x gtceu:uhv_electric_motor')
    .stationResearch((b)=>b
                        .researchStack(Item.of('gtceu:uv_electric_motor'))
                        .CWUt(32)
                        .EUt(GTValues.VA[GTValues.UV]))
    .EUt(GTValues.VA[GTValues.UV])
    .duration(20 * 30)
     gtr.assembly_line('gtceu:uhv_electric_piston')
    .itemInputs('1x gtceu:uhv_electric_motor',
       '4x gtceu:dark_fluid_plate',
       '4x gtceu:infinity_gear',
       '8x gtceu:small_infinity_gear',
       '4x gtceu:infinity_round',
       '16x gtceu:europium_single_cable',
    )
    .inputFluids('gtceu:dark_fluid 3000',
        'gtceu:super_string_catalyst 2000',
        'gtceu:neutronium 1000'
    )
    .itemOutputs('1x gtceu:uhv_electric_piston')
    .stationResearch((b)=>b
                        .researchStack(Item.of('gtceu:uv_electric_piston'))
                        .CWUt(32)
                        .EUt(GTValues.VA[GTValues.UV]))
    .EUt(GTValues.VA[GTValues.UV])
    .duration(20 * 30)

    gtr.assembly_line('gtceu:uhv_electric_pump')
    .itemInputs('1x gtceu:uhv_electric_motor',
      '1x gtceu:neutronium_large_fluid_pipe',
      '4x gtceu:dark_fluid_plate',
      '16x gtceu:infinity_screw',
      '4x gtceu:darmstadtium_rotor'
    )
    .inputFluids('gtceu:dark_fluid 2000',
        'gtceu:super_string_catalyst 2000',
        'gtceu:neutronium 1000',
        'gtceu:naquadria 1500'
    )
    .itemOutputs('1x gtceu:uhv_electric_pump')
    .stationResearch((b)=>b
                        .researchStack(Item.of('gtceu:uv_electric_pump'))
                        .CWUt(32)
                        .EUt(GTValues.VA[GTValues.UV]))
    .EUt(GTValues.VA[GTValues.UV])
    .duration(20 * 30)

    gtr.assembly_line('gtceu:uhv_conveyor_module')
    .itemInputs('2x gtceu:uhv_electric_motor',
     '2x gtceu:dark_fluid_plate',
     '8x gtceu:infinity_ring',
     '16x gtceu:infinity_round',
     '8x gtceu:infinity_screw',
     '16x gtceu:europium_single_cable'
    )
    .inputFluids('gtceu:dark_fluid 1000',
        'gtceu:super_string_catalyst 1000',
        'gtceu:neutronium 500',
        'gtceu:naquadria 1000'
    )
    .itemOutputs('1x gtceu:uhv_conveyor_module')
    .stationResearch((b)=>b
                        .researchStack(Item.of('gtceu:uv_conveyor_module'))
                        .CWUt(32)
                        .EUt(GTValues.VA[GTValues.UV]))
    .EUt(GTValues.VA[GTValues.UV])
    .duration(20 * 30)

    gtr.assembly_line('gtceu:uhv_robot_arm')
    .itemInputs('2x gtceu:uhv_electric_motor',
        '1x gtceu:uhv_electric_piston',
        '2x gtceu:dark_fluid_rod',
        '2x gtceu:infinity_gear',
        '6x gtceu:small_infinity_gear',
        '1x #gtceu:circuits/uhv',
        '2x #gtceu:circuits/uv',
        '4x #gtceu:circuits/zpm',
        '8x gtceu:europium_single_cable'
     
    )
    .inputFluids('gtceu:dark_fluid 1000',
        'gtceu:super_string_catalyst 1000',
        'gtceu:neutronium 500',
        'gtceu:naquadria 1000'
    )
    .itemOutputs('1x gtceu:uhv_robot_arm')
    .stationResearch((b)=>b
                        .researchStack(Item.of('gtceu:uv_robot_arm'))
                        .CWUt(32)
                        .EUt(GTValues.VA[GTValues.UV]))
    .EUt(GTValues.VA[GTValues.UV])
    .duration(20 * 30)

    gte.chord_of_all_things('gtecore:eight_trigmas_casing')
    .itemInputs('1x gtceu:uhv_machine_hull',
        '1x #gtceu:circuits/uev',
        '1x gtceu:uhv_robot_arm',
        '1x gtceu:uhv_electric_piston',
        '2x gtceu:uhv_electric_motor'
    ).itemOutputs('1x gtecore:eight_trigmas_casing')
    .EUt(GTValues.VA[GTValues.UHV])
    .duration(20 * 60)
    gtr.assembly_line('gtecore:taichi_five_elements_separation_array')
    .itemInputs('32x gtecore:eight_trigmas_casing',
        '32x #gtceu:circuits/uev',
        '4x gtceu:uhv_robot_arm',
        '8x gtceu:uhv_electric_piston',
        '16x gtceu:uhv_electric_motor',
        '32x gtecore:god_nugget'
    )
    .itemOutputs('1x gtecore:taichi_five_elements_separation_array')
    .duration(20 * 60)
    .EUt(GTValues.VA[GTValues.UHV])
    .stationResearch((b)=>b
                        .researchStack(Item.of('gtceu:large_centrifuge'))
                        .CWUt(32)
                        .EUt(GTValues.VA[GTValues.UHV]))
    gte.chord_of_all_things('gtecore:god_nugget')
    .itemInputs('16x gtecore:original_string',
        '2x gtceu:uhv_robot_arm'
    )
    .itemOutputs('1x gtecore:god_nugget')
    .duration(20 * 60)
    .EUt(GTValues.VA[GTValues.UHV])
    gte.taichi_five_elements_separating('gtecore:five_elements_produce')
    .itemInputs('1x gtecore:original_string')
    .outputFluids('gtceu:jinyuansu 16000',
        'gtceu:muyuansu 16000',
        'gtceu:shuiyuansu 16000',
        'gtceu:huo 16000',
        'gtceu:tuyuansu 16000'
    )
    .duration(20 * 30)
    .EUt(GTValues.VA[GTValues.HV])
    gte.yin_yang_eight_trigmas_blast('gtecore:symbol_paper_gold')
    .inputFluids('gtceu:jinyuansu 10000')
    .itemOutputs('1x gtecore:symbol_paper_gold')
    .duration(20 * 30)
    .EUt(GTValues.VA[GTValues.HV])
    .circuit(24)

    gte.chord_of_all_things('gtecore:yin_yang_eight_trigmas_blast_furnace')
    .itemInputs('64x #gtceu:circuits/uev',
        '64x gtceu:alloy_blast_smelter',
        '64x gtecore:god_nugget'
    ).inputFluids(
        'gtceu:jinyuansu 1000000',
        'gtceu:muyuansu 1000000',
        'gtceu:shuiyuansu 1000000',
        'gtceu:huo 1000000',
        'gtceu:tuyuansu 1000000'
    ).itemOutputs('1x gtecore:yin_yang_eight_trigmas_blast_furnace')
    .EUt(GTValues.VA[GTValues.UHV])
    .duration(20 * 3600)

    gte.chord_of_all_things('gtecore:yang')
    .itemInputs('1x gtecore:alpha_string')
    .itemOutputs('8x gtecore:yang')
    .EUt(GTValues.VA[GTValues.LuV])
    .duration(20 * 30)
    .circuit(22)
    gte.chord_of_all_things('gtecore:yin')
    .itemInputs('1x gtecore:beta_string')
    .itemOutputs('8x gtecore:yin')
    .circuit(20)
    .EUt(GTValues.VA[GTValues.LuV])
    .duration(20 * 30)

    gte.chord_of_all_things('gtecore:yin_yang_coil_block')
    .itemInputs('1x gtecore:eight_trigmas_casing',
        '32x gtecore:yin',
        '32x gtecore:yang'
    )
    .itemOutputs('gtecore:yin_yang_coil_block')
    .EUt(GTValues.VA[GTValues.UHV])

    gte.chord_of_all_things('gtecore:xuanwu_module')
    .itemInputs('1x gtecore:eight_trigmas_casing',
        '8x gtecore:symbol_paper_gold'
    )
    .itemOutputs('1x gtecore:xuanwu_module')
    .duration(20 * 30)
    .EUt(GTValues.VA[GTValues.UHV])
    gte.yin_yang_eight_trigmas_blast('gtecore:rune_gen')
    .inputFluids('gtceu:tuyuansu 16000',
        'gtceu:jinyuansu 1000'
    ).itemOutputs('1x gtecore:rune_gen')
    .addCondition(new xuanwu_conddition)
    .circuit(2)
    .EUt(GTValues.VA[GTValues.UHV])
    gte.yin_yang_eight_trigmas_blast('gtecore:rune_dui')
    .inputFluids(
        'gtceu:jinyuansu 16000',
        'gtceu:muyuansu 1000'
    ).itemOutputs('1x gtecore:rune_dui')
    .circuit(3)
    .EUt(GTValues.VA[GTValues.UHV])
    .addCondition(new xuanwu_conddition)
    gte.yin_yang_eight_trigmas_blast('gtecore:symbol_paper_earth')
    .inputFluids('gtceu:tuyuansu 10000')
    .itemOutputs('1x gtecore:symbol_paper_earth')
    .circuit(6)
    .EUt(GTValues.VA[GTValues.UHV])
    .addCondition(new xuanwu_conddition)
    gte.chord_of_all_things('gtecore:baihu_module')
    .itemInputs('1x gtecore:eight_trigmas_casing',
        '8x gtecore:symbol_paper_earth'
    )
    .itemOutputs('1x gtecore:baihu_module')
    .duration(20 * 30)
    .EUt(GTValues.VA[GTValues.UHV])
    gte.yin_yang_eight_trigmas_blast('gtecore:rune_kun')
    .inputFluids(
        'gtceu:jinyuansu 16000',
        'gtceu:shuiyuansu 1000'
    ).itemOutputs('1x gtecore:rune_kun')
    .circuit(8)
    .EUt(GTValues.VA[GTValues.UHV])
    .addCondition(new xuanwu_conddition)
    .addCondition(new baihu_condition)
    gte.yin_yang_eight_trigmas_blast('gtecore:rune_kan')
    .inputFluids(
        'gtceu:shuiyuansu 16000',
        'gtceu:muyuansu 1000'
    ).itemOutputs('1x gtecore:rune_kan')
    .circuit(12)
    .EUt(GTValues.VA[GTValues.UHV])
    .addCondition(new xuanwu_conddition)
    .addCondition(new baihu_condition)
    gte.chord_of_all_things('gtecore:kun_gen_star_hub')
    .itemInputs('64x gtecore:rune_kun',
        '64x gtecore:rune_gen',
        '32x gtecore:eight_trigmas_casing',
        '64x #gtceu:circuits/uev'
    ).inputFluids('gtceu:super_string_catalyst 1000000000')
    .itemOutputs('1x gtecore:kun_gen_star_hub')
    .duration(20 * 600)
    .EUt(GTValues.VA[GTValues.UHV])

    gte.yin_yang_eight_trigmas_blast('gtecore:symbol_paper_fire')
    .inputFluids('gtceu:huo 10000')
    .itemOutputs('1x gtecore:symbol_paper_fire')
    .duration(20 * 30)
    .EUt(GTValues.VA[GTValues.HV])
    .circuit(16)
    .addCondition(new xuanwu_conddition)
    .addCondition(new baihu_condition)
    gte.chord_of_all_things('gtecore:zhuque_module')
    .itemInputs('1x gtecore:eight_trigmas_casing',
        '8x gtecore:symbol_paper_fire'
    )
    .itemOutputs('1x gtecore:zhuque_module')
    .duration(20 * 30)
    .EUt(GTValues.VA[GTValues.UHV])
    gte.yin_yang_eight_trigmas_blast('gtecore:symbol_paper_wood')
    .inputFluids('gtceu:muyuansu 10000')
    .itemOutputs('1x gtecore:symbol_paper_wood')
    .duration(20 * 30)
    .EUt(GTValues.VA[GTValues.UHV])
    .circuit(16)
    .addCondition(new xuanwu_conddition)
    .addCondition(new baihu_condition)
    .addCondition(new zhuque_condition)
    gte.yin_yang_eight_trigmas_blast('gtecore:symbol_paper_water')
    .inputFluids('gtceu:shuiyuansu 10000')
    .itemOutputs('1x gtecore:symbol_paper_water')
    .duration(20 * 30)
    .EUt(GTValues.VA[GTValues.UHV])
    .circuit(16)
    .addCondition(new xuanwu_conddition)
    .addCondition(new baihu_condition)
    .addCondition(new zhuque_condition)
    gte.chord_of_all_things('gtecore:qinglong_module')
    .itemInputs('1x gtecore:eight_trigmas_casing',
        '8x gtecore:symbol_paper_wood',
        '8x gtecore:symbol_paper_water'
    )
    .itemOutputs('1x gtecore:qinglong_module')
    .duration(20 * 30)
    .EUt(GTValues.VA[GTValues.UHV])
    gte.yin_yang_eight_trigmas_blast('gtecore:rune_li')
    .inputFluids('gtceu:huo 16000',
        'gtceu:jinyuansu 1000'
    ).itemOutputs('1x gtecore:rune_li')
    .EUt(GTValues.VA[GTValues.UHV])
    .circuit(32)
    .addCondition(new xuanwu_conddition)
    .addCondition(new baihu_condition)
    .addCondition(new zhuque_condition)
    gte.kun_gen_star_hub('gtecore:gen_chip')
    .itemInputs('8x gtecore:rune_gen',
        '2x gtceu:uhpic_chip'
    ).itemOutputs('1x gtecore:gen_chip')
    .duration(20 * 30)
    .EUt(GTValues.VA[GTValues.UHV])

    gte.kun_gen_star_hub('gtecore:dui_chip')
    .itemInputs('8x gtecore:rune_dui',
        '2x gtceu:highly_advanced_soc'
    ).itemOutputs('1x gtecore:dui_chip')
    .duration(20 * 30)
    .EUt(GTValues.VA[GTValues.UHV])

    gte.yin_yang_eight_trigmas_blast('gtecore:rune_qian')
    .inputFluids('gtceu:jinyuansu 16000',
        'gtceu:tuyuansu 1000'
    ).itemOutputs('1x gtecore:rune_qian')
    .EUt(GTValues.VA[GTValues.UHV])
    .circuit(30)
    .addCondition(new xuanwu_conddition)
    .addCondition(new baihu_condition)
    .addCondition(new zhuque_condition
    )
    gte.kun_gen_star_hub('gtecore:red_sun_tao_core')
    .itemInputs('64x gtecore:rune_li',
        '64x gtecore:rune_qian',
        '32x gtecore:eight_trigmas_casing',
        '64x #gtceu:circuits/uev')
    .inputFluids('gtceu:huo 1000000000')
    .itemOutputs('1x gtecore:red_sun_tao_core')
    .duration(20 * 60)
    .EUt(GTValues.VA[GTValues.UHV])
    gte.yin_yang_eight_trigmas_blast('gtecore:rune_xun')
    .inputFluids('gtceu:muyuansu 16000',
        'gtceu:shuiyuansu 1000'
    ).itemOutputs('1x gtecore:rune_xun')
    .EUt(GTValues.VA[GTValues.UHV])
    .circuit(20)
    .addCondition(new xuanwu_conddition)
    .addCondition(new baihu_condition)
    .addCondition(new zhuque_condition)
    .addCondition(new qing_long_condition)
    gte.yin_yang_eight_trigmas_blast('gtecore:rune_zhen')
    .inputFluids('gtceu:muyuansu 16000',
        'gtceu:huo 1000'
    ).itemOutputs('1x gtecore:rune_zhen')
    .EUt(GTValues.VA[GTValues.UHV])
    .circuit(14)
    .addCondition(new xuanwu_conddition)
    .addCondition(new baihu_condition)
    .addCondition(new zhuque_condition)
    .addCondition(new qing_long_condition)
    gte.yin_yang_eight_trigmas_blast('gtecore:yin_yang_boule')
    .itemInputs('64x gtecore:yin',
        '64x gtecore:yang',
        '64x gtecore:rune_xun',
        '64x gtecore:rune_zhen',
        '64x gtceu:silicon_block'
    )
    .itemOutputs('1x gtecore:yin_yang_boule')
    .EUt(GTValues.VA[GTValues.UHV])
    .duration(20 * 600)
    .addCondition(new xuanwu_conddition)
    .addCondition(new baihu_condition)
    .addCondition(new zhuque_condition)
    .addCondition(new qing_long_condition)
    gte.kun_gen_star_hub('gtecore:yinyang_glass_lens')
    .itemInputs('64x gtecore:yin',
        '64x gtecore:yang',
        '64x gtceu:nether_star_lens'
    ).itemOutputs('1x gtecore:yinyang_glass_lens')
    .EUt(GTValues.VA[GTValues.UHV])
    .duration(20 * 30)
    gte.red_sun_tao_core('gtecore:yin_yang_wafer')
    .itemInputs('1x gtecore:yin_yang_boule')
    .itemOutputs('64x gtecore:yin_yang_wafer')
    .EUt(GTValues.VA[GTValues.UHV])
    .duration(20 * 30)
    gte.red_sun_tao_core('gtecore:yin_yang_circuit_board')
    .itemInputs('8x gtecore:yin',
        '8x gtecore:yang',
        '16x gtecore:rune_kan',
        '1x gtecore:yin_yang_circuit_chip'
    ).itemOutputs('1x gtecore:yin_yang_circuit_board')
    .EUt(GTValues.VA[GTValues.UHV])
    .duration(20 * 30)
    gte.red_sun_tao_core('gtecore:yin_yang_processor')
    .itemInputs('8x gtecore:yin',
        '8x gtecore:yang',
        '1x gtecore:yin_yang_circuit_board',
        '6x gtecore:gen_chip'
    ).itemOutputs('1x gtecore:yin_yang_processor')
    .EUt(GTValues.VA[GTValues.UHV])
    .duration(20 * 30)
    gte.red_sun_tao_core('gtecore:yin_yang_processor_assembly')
    .itemInputs('2x gtecore:yin_yang_processor',
        '6x gtecore:dui_chip',
        '16x gtecore:rune_kan',
        '16x gtecore:rune_zhen'
    ).itemOutputs('1x gtecore:yin_yang_processor_assembly')
    .EUt(GTValues.VA[GTValues.UHV])
    .duration(20 * 30)
    gte.red_sun_tao_core('gtecore:yin_yang_processor_computer')
    .itemInputs('2x gtecore:yin_yang_processor_assembly',
        '16x gtecore:rune_kan',
        '16x gtecore:rune_zhen',
        '32x gtecore:rune_qian'
    ).itemOutputs('1x gtecore:yin_yang_processor_computer')
    .EUt(GTValues.VA[GTValues.UHV])
    .duration(20 * 30)
    gte.red_sun_tao_core('gtecore:yin_yang_processor_mainframe')
    .itemInputs('2x gtecore:yin_yang_processor_computer',
        '32x gtecore:rune_kan',
        '32x gtecore:rune_zhen',
        '32x gtecore:rune_qian',
        '16x gtecore:dui_chip',
        '16x gtecore:gen_chip',
        '16x gtecore:god_nugget'
    ).itemOutputs('1x gtecore:yin_yang_processor_mainframe')
    .EUt(GTValues.VA[GTValues.UHV])
    .duration(20 * 30)
    gte.kun_gen_star_hub('gtecore:qian_qiong_engine')
    .itemInputs('64x gtecore:general_fuel_engine',
        '16x #gtceu:circuits/uiv',
        '16x gtceu:uhv_electric_piston',
        '16x gtceu:uhv_conveyor_module',
        '16x gtceu:uhv_electric_pump'
    ).itemOutputs('1x gtecore:qian_qiong_engine')
     .EUt(GTValues.VA[GTValues.UHV])
    .duration(20 * 30)
    gte.kun_gen_star_hub('gtecore:ashing_star_fusion_array')
    .itemInputs('8x gtecore:super_fusion_reactor',
        '16x #gtceu:circuits/uiv',
        '16x gtceu:uhv_electric_piston',
        '16x gtceu:uhv_robot_arm'
    ).itemOutputs('1x gtecore:ashing_star_fusion_array')
    .EUt(GTValues.VA[GTValues.UHV])
    .duration(20 * 30)
    gte.qian_qiong_engine('gtecore:five_elements_toeu')
    .inputFluids('gtceu:jinyuansu 1',
        'gtceu:muyuansu 1',
        'gtceu:shuiyuansu 1',
        'gtceu:huo 1',
        'gtceu:tuyuansu 1'
    )
    .duration(20 * 60)
    .EUt(-GTValues.VA[GTValues.LV])
    gte.ashing_star_fusion_array('gtecore:super_neutronium')
    .itemInputs('1x gtceu:quantum_star',
        '1x gtceu:gravi_star'
    ).outputFluids('gtceu:neutronium 100000')
    .duration(20 * 30)
    .EUt(GTValues.VA[GTValues.EV])
    gtr.assembly_line('gtceu:uhv_field_generator')
    .itemInputs('1x gtceu:dark_fluid_frame',
        '6x gtceu:dark_fluid_plate',
        '1x gtceu:dark_fluid_plate',
        '2x gtceu:uhv_emitter',
        '2x #gtceu:circuits/uhv',
        '64x gtceu:fine_dark_fluid_wire',
        '64x gtceu:fine_dark_fluid_wire',
        '2x gtceu:europium_single_cable'
    ).inputFluids('gtceu:super_string_catalyst 2000')
    .stationResearch((b)=>b
                        .researchStack(Item.of('gtceu:uv_field_generator'))
                        .CWUt(32)
                        .EUt(GTValues.VA[GTValues.UV]))
    .EUt(GTValues.VA[GTValues.UHV])
    .duration(20 * 60)
    .itemOutputs('1x gtceu:uhv_field_generator')
    gtr.assembly_line('gtceu:uhv_emitter')
    .itemInputs('1x gtceu:dark_fluid_frame',
        '1x gtceu:uhv_electric_motor',
        '4x gtceu:long_dark_fluid_rod',
        '1x gtceu:gravi_star',
        '2x #gtceu:circuits/uhv',
        '64x gtceu:dark_fluid_foil',
        '32x gtceu:dark_fluid_foil',
        '4x gtceu:europium_single_cable'
    ).inputFluids('gtceu:super_string_catalyst 2000')
    .stationResearch((b)=>b
                        .researchStack(Item.of('gtceu:uv_emitter'))
                        .CWUt(32)
                        .EUt(GTValues.VA[GTValues.UV]))
    .EUt(GTValues.VA[GTValues.UHV])
    .duration(20 * 60) 
    .itemOutputs('1x gtceu:uhv_emitter')
    gtr.assembly_line('gtceu:uhv_sensor')
    .itemInputs('1x gtceu:dark_fluid_frame',
        '1x gtceu:uhv_electric_motor',
        '4x gtceu:dark_fluid_plate',
        '1x gtceu:gravi_star',
        '2x #gtceu:circuits/uhv',
        '64x gtceu:dark_fluid_foil',
        '32x gtceu:dark_fluid_foil',
        '4x gtceu:europium_single_cable'
    ).inputFluids('gtceu:super_string_catalyst 2000')
    .stationResearch((b)=>b
                        .researchStack(Item.of('gtceu:uv_sensor'))
                        .CWUt(32)
                        .EUt(GTValues.VA[GTValues.UV]))
    .EUt(GTValues.VA[GTValues.UHV])
    .duration(20 * 60) 
    .itemOutputs('1x gtceu:uhv_sensor')
    gtr.assembler('gtmthings:uhv_wireless_energy_receive_cover')
    .itemInputs('1x gtceu:uhv_sensor',
        '1x gtceu:uhv_emitter',
        '4x gtceu:dark_fluid_plate',
        '1x gtecore:dui_chip',
        '1x gtecore:gen_chip'
    ).itemOutputs('gtmthings:uhv_wireless_energy_receive_cover')
    .EUt(GTValues.VA[GTValues.UHV])
    .duration(20 * 30)
    gtr.assembler('gtmthings:uhv_4a_wireless_energy_receive_cover')
    .itemInputs('4x gtmthings:uhv_wireless_energy_receive_cover')
    .itemOutputs('1x gtmthings:uhv_4a_wireless_energy_receive_cover')
    .EUt(GTValues.VA[GTValues.UHV])
    .duration(20 * 30)
    gte.red_sun_tao_core('gtecore:yin_yang_cpu_wafer')
    .itemInputs('1x gtecore:yin_yang_wafer')
    .notConsumable('gtecore:yinyang_glass_lens')
    .itemOutputs('16x gtecore:yin_yang_cpu_wafer')
    .EUt(GTValues.VA[GTValues.UHV])
    .duration(20 * 30)
    gte.red_sun_tao_core('gtecore:yin_yang_circuit_chip')
    .itemInputs('1x gtecore:yin_yang_cpu_wafer')
    .itemOutputs('16x gtecore:yin_yang_circuit_chip')
    .EUt(GTValues.VA[GTValues.UHV])
    .duration(20 * 30)
    gtr.assembler('gtecore:kan_shui_casing')
    .itemInputs('1x gtecore:eight_trigmas_casing')
    .inputFluids('minecraft:water 10000')
    .itemOutputs('16x gtecore:kan_shui_casing')
    .EUt(GTValues.VA[GTValues.UHV])
    .duration(20 * 30)

    gtr.assembler('gtecore:li_huo_casing')
    .itemInputs('1x gtecore:eight_trigmas_casing')
    .inputFluids('minecraft:lava 10000')
    .itemOutputs('16x gtecore:li_huo_casing')
    .EUt(GTValues.VA[GTValues.UHV])
    .duration(20 * 30)

    gtr.assembler('gtecore:kun_gen_casing')
    .itemInputs('1x gtecore:eight_trigmas_casing')
    .inputFluids('gtceu:concrete 10000')
    .itemOutputs('16x gtecore:kun_gen_casing')
    .EUt(GTValues.VA[GTValues.UHV])
    .duration(20 * 30)

    gtr.assembler('gtecore:yin_yang_field_restriction')
    .itemInputs('1x gtecore:eight_trigmas_casing',
        '2x gtceu:uhv_field_generator'
    )
    .inputFluids('gtceu:super_string_catalyst 10000')
    .itemOutputs('1x gtecore:yin_yang_field_restriction')
    .EUt(GTValues.VA[GTValues.UHV])
    .duration(20 * 30)
    gtr.assembler('gtecore:base_dark_concrete')
    .itemInputs('6x gtceu:plascrete',
        '16x gtecore:yin'
    )
    .inputFluids('gtceu:super_string_catalyst 10000')
    .itemOutputs('1x gtecore:base_dark_concrete')
    .circuit(6)
    
    .EUt(GTValues.VA[GTValues.UHV])
    .duration(20 * 30)

    gtr.assembler('gtecore:base_light_concrete')
    .itemInputs('6x gtceu:plascrete',
        '16x gtecore:yang'
    )
    .inputFluids('gtceu:super_string_catalyst 10000')
    .itemOutputs('1x gtecore:base_light_concrete')
    .circuit(7)
    .EUt(GTValues.VA[GTValues.UHV])
    .duration(20 * 30)

    gtr.assembler('gtecore:base_mid_concrete')
    .itemInputs('6x gtceu:plascrete',
        '8x gtecore:yin',
        '8x gtecore:yang'
    )
    .inputFluids('gtceu:super_string_catalyst 10000')
    .itemOutputs('1x gtecore:base_mid_concrete')
    .circuit(8)
    .EUt(GTValues.VA[GTValues.UHV])
    .duration(20 * 30)
    event.shaped(Item.of('gtecore:check_structure_terminal',1),[
        "D"
    ],{
      
        "D":"gtceu:terminal",
      
    })
    gtr.assembly_line('gtecore:mega_alloy_smelter_blast')
    .itemInputs('64x gtceu:alloy_blast_smelter',
        '32x #gtceu:circuits/uv',
        '8x gtceu:luv_electric_pump',
        '8x gtceu:luv_electric_piston',
        '16x gtceu:luv_robot_arm',
        '64x gtceu:naquadah_alloy_plate',
        '64x gtceu:normal_optical_pipe',
        '16x gtceu:indium_tin_barium_titanium_cuprate_hex_wire'
    ).inputFluids('gtceu:polybenzimidazole 16000')
    .itemOutputs('1x gtecore:mega_alloy_smelter_blast')
    .stationResearch((b)=>b
                        .researchStack(Item.of('gtceu:alloy_blast_smelter'))
                        .CWUt(32)
                        .EUt(GTValues.VA[GTValues.ZPM]))
    .duration(20 * 300)
    .EUt(GTValues.VA[GTValues.LuV])
    gtr.assembly_line('gtecore:mega_dehydrator')
    .itemInputs('64x gtnn:large_dehydrator',
        '32x #gtceu:circuits/uv',
        '16x gtceu:luv_electric_pump',
        '8x gtceu:luv_electric_piston',
        '2x gtceu:luv_robot_arm',
        '64x gtceu:naquadah_alloy_plate',
    
    ).inputFluids('gtceu:polyphenylene_sulfide 32000')
    .itemOutputs('1x gtecore:mega_dehydrator')
    .stationResearch((b)=>b
                        .researchStack(Item.of('gtnn:large_dehydrator'))
                        .CWUt(32)
                        .EUt(GTValues.VA[GTValues.ZPM]))
    .duration(20 * 300)
    .EUt(GTValues.VA[GTValues.LuV])
    gte.rare_earth_processing('gtceu:rare_earth_dust_centrifuge')
    .itemInputs('10x gtceu:rare_earth_dust')
    .itemOutputs('10x gtceu:cadmium_dust',
        '10x gtceu:neodymium_dust',
        '10x gtceu:samarium_dust',
        '10x gtceu:cerium_dust',
        '10x gtceu:yttrium_dust',
        '10x gtceu:lanthanum_dust'
    )
    .EUt(GTValues.VA[GTValues.LV])
    gte.rare_earth_processing('gtceu:monazite_dust_centrifuge')
    .itemInputs('10x gtceu:monazite_dust')
    .itemOutputs('10x gtceu:cadmium_dust',
        '10x gtceu:neodymium_dust',
        '10x gtceu:samarium_dust',
        '10x gtceu:cerium_dust',
        '10x gtceu:yttrium_dust',
        '10x gtceu:lanthanum_dust'
    )
    .EUt(GTValues.VA[GTValues.LV])

})