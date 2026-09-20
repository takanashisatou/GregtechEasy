ServerEvents.recipes((event) => {
    // Bootstrap UEV hardware from the existing UHV / Yin-Yang line.
    // UEV circuit tags can be supplied by Super String mainframes or Yin-Yang computers;
    // no Imaginary-series items or purified water are needed to build the first water plant.
    const upgrade = (component, seconds) => event.recipes.gtceu
        .assembly_line(`gtecore:uev_${component}`)
        .itemInputs(`1x gtceu:uhv_${component}`)
        .itemOutputs(`1x gtceu:uev_${component}`)
        .inputFluids(
            'gtceu:dark_fluid 4000',
            'gtceu:super_string_catalyst 4000',
            'gtceu:neutronium 1152'
        )
        .stationResearch((b) => b
            .researchStack(Item.of(`gtceu:uhv_${component}`))
            .CWUt(64)
            .EUt(GTValues.VA[GTValues.UHV]))
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(20 * seconds)

    upgrade('electric_motor', 60)
        .itemInputs(
            '2x gtceu:long_dark_fluid_rod',
            '64x gtceu:fine_europium_wire',
            '64x gtceu:fine_europium_wire',
            '4x gtceu:infinity_ring',
            '4x gtceu:neutronium_plate',
            '8x gtecore:yin',
            '8x gtecore:yang',
            '4x gtecore:rune_zhen'
        )

    upgrade('electric_piston', 60)
        .itemInputs(
            '1x gtceu:uev_electric_motor',
            '4x gtceu:dark_fluid_plate',
            '2x gtceu:infinity_gear',
            '4x gtceu:small_infinity_gear',
            '8x gtceu:infinity_screw',
            '8x gtceu:europium_single_cable',
            '8x gtecore:rune_gen',
            '4x gtecore:rune_kun'
        )

    upgrade('electric_pump', 60)
        .itemInputs(
            '1x gtceu:uev_electric_motor',
            '2x gtceu:neutronium_large_fluid_pipe',
            '4x gtceu:dark_fluid_plate',
            '8x gtceu:infinity_screw',
            '2x gtceu:darmstadtium_rotor',
            '8x gtecore:rune_kan',
            '8x gtecore:yin'
        )

    upgrade('conveyor_module', 60)
        .itemInputs(
            '2x gtceu:uev_electric_motor',
            '4x gtceu:dark_fluid_plate',
            '4x gtceu:infinity_ring',
            '8x gtceu:infinity_screw',
            '8x gtceu:europium_single_cable',
            '8x gtecore:rune_xun',
            '8x gtecore:yang'
        )

    upgrade('robot_arm', 120)
        .itemInputs(
            '2x gtceu:uev_electric_motor',
            '1x gtceu:uev_electric_piston',
            '4x gtceu:dark_fluid_rod',
            '2x gtceu:infinity_gear',
            '4x gtceu:small_infinity_gear',
            '1x #gtceu:circuits/uev',
            '2x #gtceu:circuits/uhv',
            '4x #gtceu:circuits/uv',
            '8x gtceu:europium_single_cable',
            '2x gtecore:gen_chip',
            '2x gtecore:dui_chip'
        )

    upgrade('emitter', 120)
        .itemInputs(
            '1x gtceu:uev_electric_motor',
            '1x gtceu:dark_fluid_frame',
            '4x gtceu:long_dark_fluid_rod',
            '1x gtceu:gravi_star',
            '2x #gtceu:circuits/uev',
            '64x gtceu:dark_fluid_foil',
            '8x gtceu:europium_single_cable',
            '16x gtecore:yang',
            '8x gtecore:rune_li',
            '2x gtecore:dui_chip'
        )

    upgrade('sensor', 120)
        .itemInputs(
            '1x gtceu:uev_electric_motor',
            '1x gtceu:dark_fluid_frame',
            '4x gtceu:dark_fluid_plate',
            '1x gtceu:gravi_star',
            '2x #gtceu:circuits/uev',
            '64x gtceu:dark_fluid_foil',
            '8x gtceu:europium_single_cable',
            '16x gtecore:yin',
            '8x gtecore:rune_kan',
            '2x gtecore:gen_chip'
        )

    upgrade('field_generator', 120)
        .itemInputs(
            '2x gtceu:uev_emitter',
            '1x gtceu:dark_fluid_frame',
            '4x gtceu:neutronium_plate',
            '2x #gtceu:circuits/uev',
            '64x gtceu:fine_dark_fluid_wire',
            '64x gtceu:fine_dark_fluid_wire',
            '8x gtceu:europium_single_cable',
            '16x gtecore:yin',
            '16x gtecore:yang',
            '8x gtecore:rune_qian',
            '8x gtecore:rune_kun'
        )
})
