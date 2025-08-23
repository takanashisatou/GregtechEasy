/*const [ ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX ] = GTValues.VA
GTCEuStartupEvents.registry('gtceu:machine',e=>{
    
    e.create('big_steam_alloy_smelter','multiblock').machine((holder) = new )
    .rotationState(RotationState.NON_Y_AXIS)
    .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
    .recipeTypes(GTRecipeTypes.get('alloy_smelter'))
    .pattern(definition => FactoryBlockPattern.start()
    .aisle('BBB','BBB','BBB')
    .aisle('BBB','BAB','BBB')
    .aisle('BBB','B#B','BBB')
    .where('A',Predicates.blocks('minecraft:air'))
    .where('#',Predicates.controller(Predicates.blocks(definition.getBlock())))
    .where('B',Predicates.blocks('gtceu:steam_machine_casing').or(Predicates.autoAbilities(definition.getRecipeTypes())))
    .build())
    .registry() 
})*/