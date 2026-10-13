# GTE 精准检索

从当前任务线索与锁定提交出发，逐层取得实际注册 ID、归属文件和调用链。不要在根目录盲搜模糊词，也不要输出完整巨型结构矩阵。

## 中文名称 → 语言键 → 注册 ID

首选 `modules/gtecore/src/generated/resources/assets/gtecore/lang/zh_cn.json`。若未命中，按功能查模块自己的语言文件、旧 `assets/gtceu/lang/` 或任务语言目录。语言键命名空间不一定与类名相同，变量也不一定是全大写。

```powershell
rg -n '奇迹之环|综合石化工厂' modules/gtecore/src/generated/resources/assets/gtecore/lang/zh_cn.json
rg -n 'miracle_ring|integrated_petrochemical_plant' modules/gtecore/src/main/java/org/satou/gtecore/common/data/machines
```

拿到 ID 后按下面路由限定搜索，再跟随命中的符号；不要因为一个 Java 文件没命中就断定内容不存在。

| 目标 | 路径/后续追踪 |
| --- | --- |
| 机器注册 | `modules/gtecore/src/main/java/org/satou/gtecore/common/data/machines/` → 控制器/父类 |
| 方块/物品/配方类型 | 对应 `GTEBlocks.java`、items 注册目录、`GTERecipeTypes.java` |
| Java 配方 | 所属模块 `src/main/.../data/recipe` 或 GT-- Kotlin `data/recipes` |
| 整合包配方 | `gte/overrides/kubejs/server_scripts/` 中按准确 ID 或类型搜索 |
| GTM API | `modules/gtm-reborn/src/main/java/com/gregtechceu/gtceu/` 下对应 api/common/data 路径 |
| GT-- 条件/机器 | `modules/gt--/src/main/kotlin/dev/arbor/gtnn/` 的 common/data 对应目录 |
| 游戏任务 | 用 gte-quest-lab 处理 `gte/overrides/config/ftbquests/` 及任务翻译 |
| 构建、CI、打包 | 具体 module Gradle 文件、`gradle/forge.versions.toml`、相关 workflow 或 `scripts/` 文件 |

## 沿调用链确认原因

- 多方块：注册入口 → 矩阵与谓词 → 控制器/能力 → recipeTypes → 配方模式、条件和修改器 → 注册的真实配方。
- 配方条件：条件自身的控制器/接口判断 → RecipeHelper 条件组合与反向语义 → RecipeLogic 的启动及运行时检查。支持类型不等于满足条件。
- 并行/超频：修改器 → ParallelLogic 的输入/输出/电力限制 → ModifierFunction 对零并行、耗时和 EU 的实际处理。
- 物品进度：物品/电路标签 → 产出/消耗配方 → 任务依赖；保留准确注册 ID 与翻译键。

记录源码分支、提交和文件行号。指定 main 时，以根仓库 `git ls-tree origin/main modules/...` 的 gitlink 为基线，而不是碰巧 checkout 的子模块 HEAD。

## 大文件与资产

巨型 `.aisle(...)` 每行可含几千字符。通过小脚本提取切片数量、行高、宽度、字符频次、控制器坐标和未定义字符；再单独读取短的 `.where(...)`、控制器和修改器片段。字符串表达式、重复切片或自定义 builder 的动态行为须另外核实，不能把简单正则当作完整 Java 解析器。

仅在资产新增/修改、注册未命中或渲染问题时继续查 `art_assets/` 与模块 runtime assets。找到纹理同时核对 `.png.mcmeta` / `_ctm.png`；像素、动画与 CTM 分析再用 gte-pixel-lab。不要为一个纯配方逻辑修复展开整套美术工作流。
