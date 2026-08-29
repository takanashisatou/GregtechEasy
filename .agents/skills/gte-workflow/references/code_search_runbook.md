# GTE Code Search & Asset Discovery Runbook (GTE 代码与资源精准检索指南)

本指南为所有在 GTE-Multi 仓库中工作的 AI 编程助手与开发者提供**系统化、高效率、杜绝盲目全库乱搜的代码与资产定位方法论**。

---

## 1. GTE 跨层级标识符映射关系 (Identifier Mapping Hierarchy)

在 GTE 架构中，一个物品/方块/机器通常存在 **4 种不同形态的表示**，检索时必须根据当前线索进行精准转换：

```
[玩家/需求自然语言] (如: "虚数机械方块", "万物之弦", "化学终结者")
       │
       ▼ (步骤 1: 查 lang/zh_cn.json)
[本地化语言键与注册 ID] (如: "block.gtecore.imaginary_casing" -> ID: "imaginary_casing")
       │
       ▼ (步骤 2: 查 Java/KubeJS 注册类)
[代码注册对象] (如: GTEBlocks.IMAGINARY_CASING, GTEMachines.CHEMISTRY_TERMINATOR)
       │
       ▼ (步骤 3: 查 assets / art_assets / CTM)
[美术材质与模型] (如: assets/gtecore/textures/block/casings/imaginary/imaginary_casing.png)
```

---

## 2. 沿着代码依赖链检索 (Dependency-Chain & Symbol Graph Search)

在深入分析、修改或调试功能时，**严禁孤立查看单个文件**。必须顺着 GTE 的 **4 大核心代码依赖链** 进行上下游穿透检索：

```
                    ┌─────────────────────────────────────────────────────────┐
                    │            多方块结构全依赖链 (Multiblock Chain)          │
                    └─────────────────────────────────────────────────────────┘
  Machine Registry ────────► Block Pattern (where/aisle) ────────► Casings/Coils (GTEBlocks)
(GTEMachines.java)         (FactoryBlockPattern.start())         (Texture ID / CTM / .mcmeta)
         │                                                                   │
         ▼                                                                   ▼
 RecipeType (GTERecipeTypes) ──► Recipe Conditions ──► Overclocks/Modifiers ──► JEI / Terminal Check
 (DataGen & KubeJS Scripts)     (BAI_HU_CONDITION)     (recipeModifier)       (Structure Testing)
```

### 链条一：多方块结构全依赖链 (Multiblock Structure Chain)
当要修改或分析一个多方块机器时，按如下链条逐级追踪：
1. **入口定位**：在 `modules/gtecore/common/data/machines/` 或 `GTEMachines.java` 找到机器控制器常量（如 `YIN_YANG_EIGHT_TRIGMAS_BLAST_FURNACE`）。
2. **图案解析**：找到其 `.pattern(...)` 方法，查看切片矩阵（`aisle(...)`）与字符谓词（`where("A", ...)`）。
3. **方块追踪**：从谓词中的 `GTEBlocks.XXX.get()` 跳转至 `GTEBlocks.java`，获取方块的注册属性与贴图 ResourceLocation。
4. **材质与连接**：跳转至 `assets/gtecore/textures/block/...`，同时检查同名 `.mcmeta`（动画与 CTM 配置）和 `_ctm.png`（无缝连接贴图）。
5. **结构校验终端**：查看 `StructureTestingTerminalBehavior.java` 中是否支持该多方块的虚拟投影或成型校验。

### 链条二：配方与业务处理链路 (Recipe & Processing Chain)
当分析机器的运行逻辑、并行数、超频与输入输出时：
1. **配方类型**：从机器的 `.recipeType(GTERecipeTypes.XXX)` 跳转至 `GTERecipeTypes.java`。
2. **运行条件**：检查是否挂载了自定义条件（如 `GTERecipeConditions.BAI_HU` $\to$ `BAI_HU_CONDITION.java`）。
3. **超频/修改器**：检查机器的 `.recipeModifier(...)`（如 1T OC 逻辑、温度加成、线圈等级计算）。
4. **配方数据源**：
   - 内置 Java 配方：`modules/gtecore/src/main/java/org/satou/gtecore/data/recipe/...`
   - KubeJS 整合包配方：`gte/overrides/kubejs/server_scripts/...`

### 链条三：物品、芯片与电路层级链 (Circuit & Tier Progression Chain)
当追踪某个材料、芯片或电路的上下游消耗与产出时：
1. **物品定义**：在 `modules/gtecore/common/data/items/GTEItems.java` 找到物品注册。
2. **阶级标签**：检查附带的 Tag（如 `.tag(CustomTags.UV_CIRCUITS)`、`CustomTags.ZPM_CIRCUITS`）。
3. **生产配方**：在 `org.satou.gtecore.data.recipe` 或 `kubejs/` 中 grep 该物品 ID 作为 output（查由什么机器制造）。
4. **消耗配方**：grep 该物品 ID 作为 input（查用于合成什么机器控制器或高级外壳）。
5. **任务引导**：在 `gte/overrides/config/openloader/resources/quests/` 中检索该物品的 Quest 依赖关系。

### 链条四：跨子模块 API 溯源与继承链 (Cross-Submodule Inheritance Chain)
当遇到框架层报错或需要扩展 GT 核心功能时：
1. **子模块上溯**：
   - `modules/gtecore` 中的类（如 `GTEMultiMachine`）通常继承自 `modules/gtm-reborn` 中的基类（如 `WorkableElectricMultiblockMachine`、`MetaMachine`）。
2. **能力与接口**：
   - 若要实现特定能力（如能量存储、流体多合一），查看 `com.gregtechceu.gtceu.api.machine.feature` 下的接口。
3. **跨模块依赖 (GT--)**：
   - 若使用了 GT-- (GTNN) 的高级材料或外壳，追踪至 `modules/gt--` 的 `GTNNCasingBlocks` 或 `GTNNMaterials`。

---

## 3. 系统化检索决策树 (Search Decision Tree)

### 场景 A：已知中文名称（如“虚数外壳”、“离火外壳”、“结构检测终端”）
**严禁直接在整个 Java 源码中 grep 中文字符！**（Java 变量名全部为英文）。
1. **第一步：定位多语言文件中的注册 ID**
   - 检索路径：`modules/gtecore/src/generated/resources/assets/gtecore/lang/zh_cn.json`
   - 辅助路径：`gte/overrides/config/openloader/resources/quests/assets/gte/lang/zh_cn.json`（任务书文本）
   - 提取出英文 ID（例如 `imaginary_casing`、`check_structure_terminal`）。
2. **第二步：按模块与类型直达 Java 注册文件**
   - **方块与外壳 (Blocks/Casings)** $\to$ `modules/gtecore/src/main/java/org/satou/gtecore/common/data/GTEBlocks.java`
   - **物品与芯片 (Items/Circuits)** $\to$ `modules/gtecore/src/main/java/org/satou/gtecore/common/data/items/GTEItems.java`
   - **多方块与机器 (Machines/Multiblocks)** $\to$ `modules/gtecore/src/main/java/org/satou/gtecore/common/data/machines/`
   - **配方类型 (Recipe Types)** $\to$ `modules/gtecore/src/main/java/org/satou/gtecore/common/data/GTERecipeTypes.java`
   - **材料系统 (Materials)** $\to$ `modules/gtecore/src/main/java/org/satou/gtecore/common/data/GTEMaterials.java`
3. **第三步：若 Java 中未注册，排查资产与分支储备**
   - 查 `art_assets/` 或 `GTETextures/`（可能已存在贴图或 Blockbench 模型但尚未注册进代码）。
   - 查 `gte/overrides/kubejs/`（可能是 KubeJS 动态添加的物品/配方）。

---

### 场景 B：查找美术材质、贴图、CTM、Blockbench 模型
**必须遵循双向资产路由检索：**
1. **中央资产库 (Art Assets)**：`art_assets/`
   - 查找 `.bbmodel`、`.json`、`.png` 源文件（由 `syncBlockbenchAssets` 任务自动同步）。
2. **模组运行时资源路径 (Runtime Assets)**：
   - `modules/gtecore/src/main/resources/assets/gtecore/textures/`
   - `modules/gtm-reborn/src/main/resources/assets/gtceu/textures/`
   - `modules/gt--/src/main/resources/assets/gtnn/textures/`
3. **CTM 与动画关联检查**：
   - 当找到 `xxx.png` 时，**必须同时检查是否存在 `xxx.png.mcmeta` 与 `xxx_ctm.png`**，确认是否启用了 LDLib CTM 无缝连接或动画帧。

---

### 场景 C：查找多方块结构定义与机器逻辑
1. **结构图案 (Block Pattern)**：
   - 检索 `modules/gtecore/src/main/java/org/satou/gtecore/common/data/machines/GTEMultiMachine.java` 或具体机器类。
   - 搜索关键方法：`createMultiblock(...)`、`FactoryBlockPattern.start()`、`Predicates.blocks(...)`、`autoAbilities(...)`。
2. **配方与超频逻辑 (Recipe Modifiers / Overclocks)**：
   - 检索机器类中的 `.recipeModifier(...)` 或 `modules/gtecore/src/main/java/org/satou/gtecore/data/recipe/`。
3. **配方魔改 (KubeJS Recipes)**：
   - 检索 `gte/overrides/kubejs/server_scripts/`。

---

### 场景 D：查找构建、CI/CD、打包脚本与版本管理
1. **全模组客户端包打包 (Full-Mod)** $\to$ `scripts/build_full_mod_pack.py`
2. **CurseForge 平台包打包 (0 jar)** $\to$ `scripts/build_curseforge_pack.py`
3. **服务端包打包 (Server)** $\to$ `scripts/build_server_pack.py`
4. **Nightly 发布与说明生成** $\to$ `scripts/render_nightly_notes.py`、`.github/workflows/sync-build.yml`
5. **子模块指针安全审计** $\to$ `scripts/audit_submodules.py`
6. **多模块 Gradle 依赖与版本目录** $\to$ `build.gradle`、`gradle/scripts/repositories.gradle`、`gradle/forge.versions.toml`

---

## 4. 工具选用与精准检索范例

| 检索目标 | 推荐工具 | 推荐参数范例 | 说明 |
| :--- | :--- | :--- | :--- |
| **定位中文对应的 ID** | `grep_search` | `Query: "虚数"`, `SearchPath: "modules/gtecore/src/generated/resources/assets/gtecore/lang/zh_cn.json"` | 极速秒出，不消耗额外 Token |
| **定位某个 Java 类或方块** | `grep_search` | `Query: "IMAGINARY_CASING"`, `SearchPath: "modules/gtecore/src/main/java"` | 限定目录，精准命中 |
| **查找贴图/模型文件** | `find_by_name` | `Pattern: "*imaginary*"`, `SearchDirectory: "modules/gtecore/src/main/resources/assets"` | 按文件名与扩展名定位 |
| **排查是否有未提交或分支资产** | `run_command` | `python -c "import subprocess..."` 跨子模块 git log 扫描 | 快速排查本地隐藏历史 |
| **沿继承链追踪基类方法** | `grep_search` | `Query: "class WorkableElectricMultiblockMachine"`, `SearchPath: "modules/gtm-reborn"` | 跨子模块精准定位核心实现 |

---

## 5. 严禁的反模式 (Anti-Patterns to Avoid)

- ❌ **严禁无范围全库盲搜 (Blind Workspace Grep)**：切勿在仓库根目录直接对模糊词发起大范围无过滤 grep。
- ❌ **严禁把“代码未搜到”直接当作“完全不存在”**：美术素材可能已经放在 `art_assets/` 或 `textures/block/` 中等待注册；必须完成多层排查。
- ❌ **严禁忽略 CTM / MCMETA 依赖**：为方块添加或修改贴图时，漏查 `.mcmeta` 将导致游戏内 CTM 丢失或贴图不连接。
- ❌ **严禁断链推测**：在修改多方块结构或配方时，严禁只改 Java 端却不检查对应的材质、CTM、配方修改器与 KubeJS 联动。
