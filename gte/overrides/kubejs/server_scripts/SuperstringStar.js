ServerEvents.recipes(event => {
    const gte = event.recipes.gtecore

    // Complete the original superstring chain before unlocking passive production.
    gte.chord_of_all_things('kubejs:super_string_star')
        .itemInputs(
            '4096x gtecore:alpha_string',
            '4096x gtecore:beta_string',
            '4096x gtecore:gamma_string',
            '4096x gtecore:original_string',
            '64x gtecore:super_string_processor_mainframe',
            '64x gtceu:gravi_star'
        )
        .inputFluids(
            'gtceu:super_string_catalyst 16000000',
            'gtceu:quantum_ca 1000000',
            'gtceu:dimension_c 1000000',
            'gtceu:element_710 64000000',
            'gtceu:neutronium 144000',
            'gtceu:tritanium 144000'
        )
        .itemOutputs('kubejs:super_string_star')
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(20 * 60 * 20)

    // The star remains in the input bus, including when overclocking or paralleling.
    gte.chord_of_all_things('kubejs:super_string_star_circuits')
        .notConsumable('kubejs:super_string_star')
        .itemInputs(
            '32x gtceu:quantum_ca_dust',
            '32x gtceu:dimension_c_dust',
            '16x gtceu:tritanium_ingot'
        )
        .inputFluids(
            'gtceu:super_string_catalyst 16000',
            'gtceu:element_710 1000000',
            'gtceu:neutronium 16000'
        )
        .itemOutputs(
            '256x gtecore:super_string_processor',
            '128x gtecore:super_string_processor_assembly',
            '64x gtecore:super_string_processor_computer',
            '32x gtecore:super_string_processor_mainframe'
        )
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(20 * 60)
})
