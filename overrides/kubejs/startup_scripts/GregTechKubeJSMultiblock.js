/*
//多方块电力合金炉示例代码
const [ ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX ] = GTValues.VA
GTCEuStartupEvents.registry('gtceu:machine',e=>{ 
    const WorkableElectricMultiblockMachine = Java.loadClass('com.gregtechceu.gtceu.api.machine.multiblock.WorkableElectricMultiblockMachine')
    e.create('kjs_test_multiblock','multiblock')
    .machine((holder,tier)=>{return new WorkableElectricMultiblockMachine(holder,tier)})
    .rotationState(RotationState.NON_Y_AXIS)
    .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
    .recipeTypes(GTRecipeTypes.get('alloy_smelter'))
    .pattern(definition => FactoryBlockPattern.start()
    .aisle('BBB','BBB','BBB')
    .aisle('BBB','BAB','BBB')
    .aisle('BBB','B#B','BBB')
    .where('A',Predicates.blocks('minecraft:air'))
    .where('#',Predicates.controller(Predicates.blocks(definition.getBlock())))
    .where('B',Predicates.blocks('gtceu:solid_machine_casing').or(Predicates.autoAbilities(definition.getRecipeTypes())))
    .build())
    .workableCasingModel(GTCEu.id("block/casings/solid/machine_casing_solid_steel"),
                    GTCEu.id("block/multiblock/distillation_tower")) 
})
*/