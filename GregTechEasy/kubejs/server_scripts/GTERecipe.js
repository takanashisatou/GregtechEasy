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
        'gtceu:raw_cobaltite'
    )
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