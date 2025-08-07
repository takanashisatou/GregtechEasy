
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
    event.remove({'id':'gtceu:primitive_blast_furnace/steel_from_coal_gem_wrought'})
    event.remove({'id':'gtceu:primitive_blast_furnace/steel_from_coal_gem'})
    event.remove({'id':'gtceu:primitive_blast_furnace/steel_from_charcoal_gem'})
    event.remove({'id':'gtceu:alloy_smelter/rubber_bar'})
    //event.remove({id:'gtceu:blasting/smelt_deepslate_platinum_ore_to_ingot'})
    //event.remove({id:'gtceu:blasting/smelt_raw_platinum_ore_to_ingot'})
    //event.remove({id:'gtceu:blasting/smelt_platinum_ore_to_ingot'})
    //event.remove({output:'gtceu:platinum_ingot'})
    
}
)