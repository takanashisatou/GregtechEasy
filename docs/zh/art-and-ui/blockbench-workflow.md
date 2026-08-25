# 界面、材质与 Blockbench 美术工作流

GTE 工程建立了一套自动化、零丢失的美术资产处理流水线。模型设计师只需使用 **Blockbench** 制作模型并保存在原件目录，Gradle 任务会自动完成资产分类、格式校验与增量同步。

---

## 🎨 美术源文件目录 (`art_assets/`)

项目根目录下的 `art_assets/` 是美术设计师的**唯一工作目录**，受 Git 严格版本追踪：

```
art_assets/
├── *.bbmodel                           # Blockbench 工程源文件（保留图层与骨骼）
├── *.json                              # Blockbench 导出的 Minecraft 几何模型
├── *.png                               # 纹理贴图（物品 / 方块机壳 / 阵法贴图）
├── *.png.mcmeta                        # 动画与材质元数据
└── projectuhv/                         # 高阶电路系列专用材质子目录
```

---

## 🏷️ 命名规范与自动路由规则

Gradle 任务 `syncBlockbenchAssets` 根据文件命名关键词，自动将文件分发至 `modules/gtecore` 对应的资源路径中：

| 文件类型 | 命名包含关键词 | 自动同步目标目录 (GTECore) |
| :--- | :--- | :--- |
| **物品贴图** (`.png`) | `processor`, `string`, `symbol`, `paper`, `wafer`, `chip`, `god`, `rune`, `yin`, `yang` | `src/main/resources/assets/gtecore/textures/item/` |
| **方块机壳贴图** (`.png`) | `casing`, `module`, `concrete`, `coil`, `zhenfa`, `matrix`, `buffer`, `generator`, `machine` | `src/main/resources/assets/gtecore/textures/block/` |
| **方块模型** (`.json`) | `casing`, `module`, `block`, `matrix` | `src/main/resources/assets/gtecore/models/block/` |
| **物品模型** (`.json`) | 其余所有模型文件（排除 `.bbmodel`） | `src/main/resources/assets/gtecore/models/item/` |

---

## 🔄 一键资产同步任务 (`syncBlockbenchAssets`)

在导出模型或修改贴图后，在终端执行：

```powershell
$env:JAVA_HOME='C:\Users\Ex_Je\.jdks\ms-21.0.11'
.\gradlew.bat syncBlockbenchAssets
```

### 自动化特性
1. **自动触发**：该任务已被挂载至 `buildAll`、`copyOutputJars` 以及 CI 构建流程的前置节点，在本地编译或启动游戏时会自动执行，无需手动反复拷贝。
2. **增量安全**：使用二进制流式覆写，自动在目标资源目录中补全缺失的父级目录。
3. **保持 Git 清洁**：`.bbmodel` 仅保留在 `art_assets/` 作为源工程，编译生成的 jar 包中不会夹带冗余的 Blockbench 项目元数据。
