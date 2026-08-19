ServerEvents.recipes((event) => {
 event.recipes.gtceu.packer('universal:uhv_universal_circuit')       
        .itemInputs('#gtceu:circuits/uhv')
        .itemOutputs('universal_circuit:uhv_universal_circuit')
        .duration(1)
        .EUt(1)

 event.recipes.gtceu.assembler('mekanism:yellow_cake_uranium')       
        .itemInputs('gtceu:uranium_dust')
        .itemOutputs('2x mekanism:yellow_cake_uranium')
        .duration(1)
        .EUt(1)

 event.recipes.gtceu.packer('universal:uev_universal_circuit')       
        .itemInputs('#gtceu:circuits/uev')
        .itemOutputs('universal_circuit:uev_universal_circuit')
        .duration(1)
        .EUt(1)

 event.recipes.gtceu.packer('universal:uiv_universal_circuit')       
        .itemInputs('#gtceu:circuits/uiv')
        .itemOutputs('universal_circuit:uiv_universal_circuit')
        .duration(1)
        .EUt(1)

 event.recipes.gtceu.packer('universal:uxv_universal_circuit')       
        .itemInputs('#gtceu:circuits/uxv')
        .itemOutputs('universal_circuit:uxv_universal_circuit')
        .duration(1)
        .EUt(1)

 event.recipes.gtceu.packer('universal:opv_universal_circuit')       
        .itemInputs('#gtceu:circuits/opv')
        .itemOutputs('universal_circuit:opv_universal_circuit')
        .duration(1)
        .EUt(1)

 event.recipes.gtceu.packer('universal:ulv_universal_circuit')       
        .itemInputs('#gtceu:circuits/ulv')
        .itemOutputs('universal_circuit:ulv_universal_circuit')
        .duration(1)
        .EUt(1)

 event.recipes.gtceu.packer('universal:lv_universal_circuit')       
        .itemInputs('#gtceu:circuits/lv')
        .itemOutputs('universal_circuit:lv_universal_circuit')
        .duration(1)
        .EUt(1)

 event.recipes.gtceu.packer('universal:mv_universal_circuit')       
        .itemInputs('#gtceu:circuits/mv')
        .itemOutputs('universal_circuit:mv_universal_circuit')
        .duration(1)
        .EUt(1)

 event.recipes.gtceu.packer('universal:hv_universal_circuit')       
        .itemInputs('#gtceu:circuits/hv')
        .itemOutputs('universal_circuit:hv_universal_circuit')
        .duration(1)
        .EUt(1)

 event.recipes.gtceu.packer('universal:ev_universal_circuit')       
        .itemInputs('#gtceu:circuits/ev')
        .itemOutputs('universal_circuit:ev_universal_circuit')
        .duration(1)
        .EUt(1)

 event.recipes.gtceu.packer('universal:iv_universal_circuit')       
        .itemInputs('#gtceu:circuits/iv')
        .itemOutputs('universal_circuit:iv_universal_circuit')
        .duration(1)
        .EUt(1)

 event.recipes.gtceu.packer('universal:luv_universal_circuit')       
        .itemInputs('#gtceu:circuits/luv')
        .itemOutputs('universal_circuit:luv_universal_circuit')
        .duration(1)
        .EUt(1)

 event.recipes.gtceu.packer('universal:zpm_universal_circuit')       
        .itemInputs('#gtceu:circuits/zpm')
        .itemOutputs('universal_circuit:zpm_universal_circuit')
        .duration(1)
        .EUt(1)

 event.recipes.gtceu.packer('universal:uv_universal_circuit')       
        .itemInputs('#gtceu:circuits/uv')
        .itemOutputs('universal_circuit:uv_universal_circuit')
        .duration(1)
        .EUt(1)
})

ServerEvents.tags('item', event => {
   event.add('gtceu:circuits/lv','mekanism:basic_control_circuit');

   event.add('gtceu:circuits/mv','mekanism:advanced_control_circuit');

   event.add('gtceu:circuits/hv','mekanism:elite_control_circuit');

   event.add('gtceu:circuits/ev','mekanism:ultimate_control_circuit');

   event.add('gtceu:circuits/iv','mekanism_extras:absolute_control_circuit');

   event.add('gtceu:circuits/luv','mekanism_extras:supreme_control_circuit');

   event.add('gtceu:circuits/zpm','mekanism_extras:cosmic_control_circuit');

   event.add('gtceu:circuits/uv','mekanism_extras:infinite_control_circuit');

})
