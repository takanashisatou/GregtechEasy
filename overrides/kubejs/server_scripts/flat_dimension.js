/*
ServerEvents.highPriorityData(event => {
  // 注册维度类型（必须）
  event.addJson("kubejs:dimension_type/flat_dimension", {
    fixed_time: 6000,
    has_skylight: true,
    has_ceiling: false,
    ultrawarm: false,
    natural: false,
    coordinate_scale: 1.0,
    bed_works: true,
    respawn_anchor_works: false,
    has_raids: false,
    piglin_safe: false,
    ambient_light: 0.0,
    height: 256,
    min_y: 0,
    logical_height: 256,
    infiniburn: "minecraft:infiniburn_overworld",
    effects: "minecraft:overworld"
  });

  // 注册维度本身（必须含 type 字段）
  event.addJson("kubejs:dimension/flat_world", {
    type: "kubejs:dimension_type/flat_dimension", // ⬅ 这行不能缺
    generator: {
      type: "minecraft:flat",
      settings: {
        layers: [
          { block: "minecraft:bedrock", height: 1 },
          { block: "minecraft:dirt", height: 2 },
          { block: "minecraft:grass_block", height: 1 }
        ],
        biome: "minecraft:plains",
        structures: {
          structures: []
        }
      }
    }
  });
});*/
