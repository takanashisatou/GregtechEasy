GTCEuServerEvents.fluidVeins(event => {

    event.add('gtceu:custom_nacl_fluid_vein', vein => {
        vein.dimensions('minecraft:overworld')
        vein.fluid(() => Fluid.of('gtceu:salt_water').fluid)
        vein.weight(600)
        vein.minimumYield(1200)
        vein.maximumYield(7200)
        vein.depletionAmount(20)
        vein.depletionChance(10)
        vein.depletedYield(50)
    });
    event.add('gtceu:custom_salt_water_in_void_vein', vein => {
        vein.dimensions('javd:void')
        vein.fluid(() => Fluid.of('gtceu:salt_water').fluid)
        vein.weight(600)
        vein.minimumYield(1200)
        vein.maximumYield(7200)
        vein.depletionAmount(20)
        vein.depletionChance(10)
        vein.depletedYield(50)
    });
    event.add('gtceu:custom_oilm_fluid_vein', vein => {
        vein.dimensions('javd:void')
        vein.fluid(() => Fluid.of('gtceu:oil_medium').fluid)
        vein.weight(600)
        vein.minimumYield(1200)
        vein.maximumYield(7200)
        vein.depletionAmount(20)
        vein.depletionChance(10)
        vein.depletedYield(50)
    });
    event.add('gtceu:custom_oilh_fluid_vein', vein => {
        vein.dimensions('javd:void')
        vein.fluid(() => Fluid.of('gtceu:oil_heavy').fluid)
        vein.weight(600)
        vein.minimumYield(1200)
        vein.maximumYield(7200)
        vein.depletionAmount(20)
        vein.depletionChance(10)
        vein.depletedYield(50)
    });
    event.add('gtceu:custom_oil_fluid_vein', vein => {
        vein.dimensions('javd:void')
        vein.fluid(() => Fluid.of('gtceu:oil').fluid)
        vein.weight(600)
        vein.minimumYield(1200)
        vein.maximumYield(7200)
        vein.depletionAmount(20)
        vein.depletionChance(10)
        vein.depletedYield(50)
    });
    event.add('gtceu:custom_oill_fluid_vein', vein => {
        vein.dimensions('javd:void')
        vein.fluid(() => Fluid.of('gtceu:oil_light').fluid)
        vein.weight(600)
        vein.minimumYield(1200)
        vein.maximumYield(7200)
        vein.depletionAmount(20)
        vein.depletionChance(10)
        vein.depletedYield(50)
    });
})