ServerEvents.recipes((event) => {
    const a = event.recipes.gtecore.antimatter_transformation;
    
    a('gtecore_basic_circuit')
        .itemInputs('4x #forge:ingots/osmium','minecraft:redstone')
        .itemOutputs('4x mekanism:basic_control_circuit')
        .duration(20)
        .EUt(32);  //mek初级电路板
        
    a('gtecore_advanced_circuit')
        .itemInputs('2x mekanism:alloy_infused','mekanism:basic_control_circuit')
        .itemOutputs('mekanism:advanced_control_circuit')
        .duration(20)
        .EUt(32);  //mek高级电路板

    a('gtecore_elite_circuit')
        .itemInputs('2x mekanism:alloy_reinforced','mekanism:advanced_control_circuit')
        .itemOutputs('mekanism:elite_control_circuit')
        .duration(20)
        .EUt(32);  //mek精英电路板

    a('gtecore_ultimate_circuit')
        .itemInputs('2x mekanism:alloy_atomic','mekanism:elite_control_circuit')
        .itemOutputs('mekanism:ultimate_control_circuit')
        .duration(20)
        .EUt(32);  //mek终极电路板

    a('gtecore_absolute_circuit')
        .itemInputs('2x mekanism_extras:alloy_radiance','mekanism:ultimate_control_circuit')
        .itemOutputs('mekanism_extras:absolute_control_circuit')
        .duration(20)
        .EUt(32);  //mek绝对电路板

    a('gtecore_supreme_circuit')
        .itemInputs('2x mekanism_extras:alloy_thermonuclear','mekanism_extras:absolute_control_circuit')
        .itemOutputs('mekanism_extras:supreme_control_circuit')
        .duration(20)
        .EUt(32);  //mek至尊电路板

    a('gtecore_cosmic_circuit')
        .itemInputs('2x mekanism_extras:alloy_shining','mekanism_extras:supreme_control_circuit')
        .itemOutputs('mekanism_extras:cosmic_control_circuit')
        .duration(20)
        .EUt(32);  //mek寰宇电路板

    a('gtecore_infinite_circuit')
        .itemInputs('2x mekanism_extras:alloy_spectrum','mekanism_extras:cosmic_control_circuit')
        .itemOutputs('mekanism_extras:infinite_control_circuit')
        .duration(20)
        .EUt(32);  //mek悖论电路板

    
    a('gtecore_infused')
       .itemInputs('minecraft:redstone','8x minecraft:iron_ingot')
       .itemOutputs('8x mekanism:alloy_infused')
        .duration(20)
        .EUt(32);  //mek初级
        
    a('gtecore_reinforced')
      .itemInputs('#forge:gems/diamond','4x mekanism:alloy_infused')
      .itemOutputs('4x mekanism:alloy_reinforced')
      .duration(20)
      .EUt(128);  //mek高级

    a('gtecore_atomic')
      .itemInputs('minecraft:redstone','2x mekanism:alloy_reinforced')
      .itemOutputs('2x mekanism:alloy_atomic')
      .duration(20)
      .EUt(512);  //mek终极

    a('gtecore_radiance')
        .itemInputs('mekanism:alloy_atomic','mekanism:yellow_cake_uranium','minecraft:glowstone_dust')
        .itemOutputs('mekanism_extras:alloy_radiance')
        .duration(20)
        .EUt(2048);  //mek富集
    
    a('gtecore_thermonuclear')
        .itemInputs('minecraft:netherite_ingot','8x gtceu:sodium_dust','mekanism_extras:alloy_radiance')
        .inputFluids('minecraft:lava 2000')
        .itemOutputs('mekanism_extras:alloy_thermonuclear')
        .duration(20)
        .EUt(8192);  //mek热核

    a('gtecore_shining')
        .itemInputs('mekanism:pellet_antimatter','mekanism_extras:alloy_thermonuclear')
        .itemOutputs('8x mekanism_extras:alloy_shining')
        .duration(20)
        .EUt(32768);  //mek闪耀

    a('gtecore_spectrum')
        .itemInputs('mekanism:pellet_antimatter','mekanism_extras:alloy_shining')
        .itemOutputs('8x mekanism_extras:alloy_spectrum')
        .duration(20)
        .EUt(131072); //mek光谱

    a('gtecore_208')
        .inputFluids('gtceu:depleted_uranium_hexafluoride 10')
        .outputFluids('mekanism_extras:polonium-208 1000')
        .duration(20)
        .EUt(16384); //mek208
    
    a('gtecore_bucket')
        .inputFluids('mekanism_extras:polonium-208 10')
        .outputFluids('gtceu:antimatter 1000')
        .duration(20)
        .EUt(16384); //mek反物质

    a('gtecore_itembucket')
        .inputFluids('gtceu:antimatter 1000')
        .itemOutputs('mekanism:pellet_antimatter 10')
        .duration(20)
        .EUt(16384); //mek反物质



})