---
name: gte-multiblock
description: >-
  Create, statically inspect, or debug GTE/GregTech multiblock controllers,
  structure patterns, recipe conditions, modifiers, and shape previews.
  Use the architecture skill only when designing a new shape.
---

# GTE 多方块开发与诊断

源码/PR 范围、依赖和生产产物边界遵循 [gte-workflow](../gte-workflow/SKILL.md) 与当前 `AGENTS.md`。现有机器排错不自动重设计结构；源码修复不自动刷新生产 JAR。

## 按请求选择流程

| 请求 | 优先检查 | 按需读取 |
| --- | --- | --- |
| 静态分析现有机器 | 锁定提交、注册入口、矩阵、能力、条件、修改器 | [结构谓词](references/block_pattern_guide.md)、[配方链](references/recipe_and_modifier_guide.md) |
| 配方不能运行 | 配方模式、真实配方 ID、控制器类型、条件、输入输出、电力 | [配方链](references/recipe_and_modifier_guide.md) |
| 结构不能成型或预览异常 | 实际错误坐标、方块状态、尺寸、数量限制、朝向 | [结构谓词](references/block_pattern_guide.md) |
| 新增机器或更改形状 | 选相近现有控制器与结构；设计任务再用架构技能 | [原型示例](references/machine_blueprints.md)、[外壳与线圈](references/casings_and_coils.md) |
| 添加运行回归测试 | 使用真实定义、配方和仓口，隔离测试场地 | [GameTest 工作流](references/gametest_workflow.md) |

## 现有机器静态检查

沿注册 ID 追踪 `GTEMultiMachine` 或独立注册类 → 控制器及父类 → `recipeTypes` → 条件/修改器 → Java 与 KubeJS 配方。不要只看机器声明就断定配方可运行。

- 矩阵各切片行数一致、各行宽度一致；所有字符有谓词；控制器字符全结构恰好一次。实际世界方向由 `FactoryBlockPattern.start(...)` 与控制器朝向决定，不能只凭字符串排列猜坐标。
- 区分 `air()` 和 `any()`；能力是否允许出现在相应外壳位置，数量限制是否与真实位置数量相容。
- `autoAbilities(recipeTypes)` 只涵盖基础配方 IO，特殊催化剂仓/数据仓等须核实并显式加入。布尔重载的参数是 **maintenance、muffler、parallel**，不是物品/流体/电力。
- 检查运行模式、条件中的 `instanceof`/能力接口、反向条件及其他要求。多配方类型声明不会自动满足某一控制器专属条件。
- 并行上限不是实际并行；查输入、电力与输出容量约束，零并行、耗时下限及数值范围。固定耗时倍率不等同于真正 subtick 超频。
- 检查注册初始化链、所用方块与资源。只有材质或模型涉及变动/异常时才展开资产检查；纹理问题再使用像素技能。

报告区分“确认的运行缺陷”“文案不一致”与“尚未运行验证”。静态检查通过不能推断所有朝向、存档和模组组合都通过。

## 实现与注册

优先沿用同类机器与当前 API，而不是复制整份示意蓝图。通常涉及：

- 注册：`modules/gtecore/src/main/java/org/satou/gtecore/common/data/machines/`。
- 控制器：同模块 `common/machine/multiblock/`；自定义同步字段的 `ManagedFieldHolder` 要包含父类并由 `getFieldHolder()` 返回。
- 配方类型/方块：`GTERecipeTypes.java`、`GTEBlocks.java`；配方与修改器按现有归属查找。
- 双语名称与提示：`datagen/Lang.java`，再由 `runData` 生成 `src/generated/resources/`。

只注册任务实际需要的新类型/外壳/线圈。只有新增或更改这些数据时才本地运行 datagen；资源资产须先完整写入，才可开始依赖它们的数据生成。

## 验证与完成

静态请求交付有依据的分析；修复请求执行严格编译和必要的行为验证。条件兼容修改至少检查目标机器成功、其他机器仍受限、其他条件与反向语义保留；不能直接删掉整份配方条件列表。

结构测试要验证实际 pattern，而不只验证预览或注册字符串。`empty` 模板不隔离大结构；先清空完整结构范围，创意 autobuild 也可能放入可选部件，数量测试应从已知零个部件状态开始。测试完成以必需测试的最终结果为准，见 [GameTest 工作流](references/gametest_workflow.md)。

完成已授权的源码流程后，报告改动、验证与静态检查的实际范围。整合包生产 JAR、发布、Maven 上传按明确的独立请求处理。
