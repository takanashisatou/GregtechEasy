# GTE 精准检索

从明确线索出发逐层定位，别在仓库根目录用模糊词全盘 `rg`。

## 1. 中文名 → 注册 ID

先查 GTECore 的生成语言文件，拿不到再查对应模块自己的语言文件、旧 `assets/gtceu/lang/` 或任务书语言文件（`gte/overrides/config/openloader/resources/quests/assets/gte/lang/zh_cn.json`）。

```powershell
rg -n '奇迹之环|综合石化工厂' modules/gtecore/src/generated/resources/assets/gtecore/lang/zh_cn.json
rg -n 'miracle_ring|integrated_petrochemical_plant' modules/gtecore/src/main/java/org/satou/gtecore/common/data/machines
```

语言键命名空间和 Java 类名/字段名不一定对得上，字段名也不一定全大写，用注册 ID 搜最稳。

## 2. 按目标路由目录

| 你要找什么 | 直接搜这里 |
| --- | --- |
| 机器注册与结构 | `modules/gtecore/src/main/java/org/satou/gtecore/common/data/machines/` |
| 控制器逻辑 | `modules/gtecore/src/main/java/org/satou/gtecore/common/machine/multiblock/` |
| 方块 / 线圈 / 配方类型 | `GTEBlocks.java`、`GTECoilBlock.java`、`GTERecipeTypes.java` |
| 配方修改器 / 条件 | `utils/GTERecipeModifiers.java`、`common/data/condition/GTERecipeConditions.java` |
| Java 配方 | `modules/gtecore/src/main/java/org/satou/gtecore/data/recipe/` |
| GT-- 机器/外壳/配方 | `modules/gt--/src/main/kotlin/dev/arbor/gtnn/`（`common/`、`data/`） |
| GTM-Reborn 核心 API | `modules/gtm-reborn/src/main/java/com/gregtechceu/gtceu/` |
| KubeJS 魔改配方 | `gte/overrides/kubejs/server_scripts/` |
| 游戏内任务 | 用 `gte-quest-lab` 的 `ftbq.py` 查 `gte/overrides/config/ftbquests/` |
| 构建 / 依赖 / 打包脚本 | `gradle/forge.versions.toml`、`scripts/`、各模块 `build.gradle` |

## 3. 排查问题的固定追踪链

- **多方块**：机器注册 → `FactoryBlockPattern` 矩阵与 `.where(...)` 谓词 → 控制器及父类 → `recipeTypes` → 条件与修改器 → 实际配方（Java + KubeJS）。
- **配方条件**：条件类里的 `instanceof` / 能力检查 → `RecipeHelper.checkConditions`（含反向条件）→ `RecipeLogic` 的启动与每 tick 检查。机器声明支持某个配方类型，不代表满足该配方上的专用条件。
- **并行与超频**：机器修改器 → `ParallelLogic`（输入/输出/电力限制）→ `ModifierFunction` 对零并行、耗时和 EU 的处理。
- **查看主线锁定版本**：查某个分支实际锁定的子模块提交用 `git ls-tree origin/main modules/gtecore`，别直接把本地碰巧 checkout 的子模块 HEAD 当成整合包版本。

## 4. 巨型矩阵与美术资产

- 遇到单行几千字符的 `.aisle(...)`（如八卦高炉、奇迹之环），写个小段 Python 提取切片数、宽高、字符频次、控制器位置和未定义字符，再单独读短的 `.where(...)` 与逻辑代码；动态拼字符串或循环重复切片再结合源码看。
- 查贴图时同时看同名的 `.png.mcmeta` 和 `_ctm.png` / `_bloom.png`；要改图或检 CTM 切去 `gte-pixel-lab`。
