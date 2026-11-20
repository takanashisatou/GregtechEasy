---
name: gte-multiblock
description: >-
  GTE/GregTech 多方块机器开发与排错：控制器、FactoryBlockPattern 结构与谓词、
  配方条件与修改器、JEI 预览和 GameTest 回归测试。Use when creating, inspecting,
  or debugging multiblock machines in GTECore. For designing brand-new shapes
  and aesthetics, pair with gte-multiblock-architecture.
---

# GTE 多方块开发与排错

做新机器、查旧机器为啥不成型/不跑配方、写结构或配方 GameTest 都走这里。如果要从零设计外形与配色，先去 [gte-multiblock-architecture](../gte-multiblock-architecture/SKILL.md)。

## 按需求查对应参考

| 你在干嘛 | 先查什么 | 参考文档 |
| --- | --- | --- |
| 排查旧机器 | 注册入口 → 矩阵谓词 → 控制器 → recipeTypes → 条件与修改器 | [结构与谓词](references/block_pattern_guide.md)、[配方与修改器](references/recipe_and_modifier_guide.md) |
| 配方跑不起来 | 配方模式、实际配方 ID、控制器类型、条件判断、输入/输出/电力 | [配方与修改器](references/recipe_and_modifier_guide.md) |
| 结构不成型 / 预览错 | 失败坐标、实际方块、切片宽高、数量限制、朝向 | [结构与谓词](references/block_pattern_guide.md) |
| 新增多方块 / 外壳 / 线圈 | 抄相近现有机器和 API，按需注册新方块 | [原型示例](references/machine_blueprints.md)、[外壳与线圈](references/casings_and_coils.md) |
| 写多方块 GameTest | 清空独立测试场地、走真实成型与真实配方 | [GameTest 工作流](references/gametest_workflow.md) |

## 排查旧机器的 5 个高频坑

沿这条链查：`GTEMultiMachine`（或独立注册类）→ 控制器及父类 → `recipeTypes` → 条件/修改器 → Java & KubeJS 配方。重点盯紧这几处：

1. **坐标轴别靠脑补**：`FactoryBlockPattern.start()` 默认局部方向是 `(LEFT, UP, FRONT)`，世界坐标还要叠加 `start(...)` 自定义方向、控制器朝向与 flip。检查所有切片行数一致、每行等宽、控制器字符全结构只出现一次。
2. **`air()` 和 `any()` 别混用**：内部空腔用 `air()`，外部不管用 `any()`；同时核对仓口能否替换到外壳位置，数量限制（`setMinGlobalLimited` / `setExactLimit` / `setMaxGlobalLimited`）有没有和实际方块数打架。
3. **`autoAbilities` 的布尔重载是个大坑**：
   - `autoAbilities(recipeTypes)` 只自动加基础物品/流体/电力 IO，**不包含**特殊催化剂仓、数据仓等，特殊仓口要显式 `.or(abilities(...))`。
   - `autoAbilities(boolean, boolean, boolean)` 的三个参数是 **`(maintenance, muffler, parallel)`**，不是物品/流体/电力！
4. **支持配方类型 ≠ 满足配方条件**：很多配方挂着针对特定控制器或外壳的条件（`instanceof`、能力接口、反向条件）。修条件兼容时只放行目标机器，保留原有反向条件和其他要求，别图省事把整个条件列表删了。
5. **并行与超频别看错**：`maxParallel` 只是上限，实际并行受输入、电力、输出空间限制；`FUEL_ENGINE.getParallelAmount` 只看输入侧，普通电力加工用 `ParallelLogic.getParallelAmount`。固定 `.durationMultiplier(...)` 只是耗时倍率，不是真正的 subtick 超频。

## 新增一台多方块涉及哪些文件

优先参照同类型现有机器写，通常只改这几处：

- **机器注册**：`modules/gtecore/src/main/java/org/satou/gtecore/common/data/machines/`
- **自定义控制器**（仅需特殊逻辑时）：`modules/gtecore/src/main/java/org/satou/gtecore/common/machine/multiblock/`；有自定义同步字段时，`ManagedFieldHolder` 必须链接父类并由 `getFieldHolder()` 返回。
- **新配方类型 / 外壳 / 线圈**：`GTERecipeTypes.java`、`GTEBlocks.java`、`GTECoilBlock.java`。
- **配方与修改器**：`data/recipe/`、`utils/GTERecipeModifiers.java`。
- **双语文本**：写入 `modules/gtecore/src/main/java/org/satou/gtecore/datagen/Lang.java`（`provider.add(key, en, zh)`），贴图/模型都放好后再跑 `:modules:gtecore:runData`。

## 编译与测试

```powershell
$env:JAVA_HOME='C:\Users\Ex_Je\.jdks\ms-21.0.11'
.\gradlew.bat :modules:gtecore:compileJava -Pwerror --console=plain
.\gradlew.bat :modules:gtecore:runData --console=plain
.\gradlew.bat :modules:gtecore:runGameTestServer --console=plain
```

写结构 GameTest 时别只看预览或注册字符串，直接测真实 pattern；`empty` 模板不清大结构外围地形，创意 `autoBuild` 还会保留非空气并塞可选仓，具体踩坑写法看 [GameTest 工作流](references/gametest_workflow.md)。
