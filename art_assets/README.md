# GTE-Multi 美术工作台 / Artist Workspace

欢迎来到 **GTE-Multi** 美术设计工作台！在此目录下，美术设计师可以**完全免除接触 Java 代码和 Gradle 复杂目录**，直接投放 Blockbench 3D 模型（`.bbmodel` / `.json`）和高清贴图（`.png` / `.mcmeta`）。

---

## 🎨 推荐多命名空间目录布局 (Multi-Namespace Layout)

```text
art_assets/
├── gtecore/              # GTECore 核心模组
│   ├── models/block/     # 方块/机器模型 (.json)
│   ├── models/item/      # 物品模型 (.json)
│   ├── textures/block/   # 外壳、线圈、发光贴图 (.png, .mcmeta)
│   └── textures/item/    # 芯片、符文、材料贴图 (.png)
├── gtceu/                # GTM Reborn 重绘材质与模型
│   ├── textures/block/
│   └── textures/item/
├── gtnn/                 # GT-- CE 组装线与大型反应堆材质
│   ├── textures/block/
│   └── textures/item/
└── modpack/              # 整合包层专用 UI 与魔改材质
    ├── ftbquests/        # 任务书章节封面与任务大图标
    ├── gui/              # 主菜单背景、HUD、Logo
    └── kubejs/           # KubeJS 自定义物品与虚拟流体材质
```

---

## 🚀 智能路由与平铺容错机制 (Auto-Routing & Fallback)

1. **精准分发**：放入上述子目录的文件，将被全自动映射同步至对应子模组的 `assets/<namespace>/` 目录与整合包资源包。
2. **平铺智能识别**：如果直接将文件扔在 `art_assets/` 根目录：
   - 带有 `gtceu_` 前缀 ➜ 自动分流至 `gtceu` 命名空间；
   - 带有 `gtnn_` 前缀 ➜ 自动分流至 `gtnn` 命名空间；
   - 带有 `quest_` 前缀 ➜ 自动分流至 `modpack/ftbquests`；
   - 带有 `gui_` / `menu_` 前缀 ➜ 自动分流至 `modpack/gui`；
   - 包含 `casing`, `module`, `matrix`, `block` ➜ 自动识别为方块材质/模型；
   - 包含 `chip`, `processor`, `string`, `wafer`, `paper`, `item` ➜ 自动识别为物品材质/模型；
   - 默认归入 `gtecore`。

---

## 🛠️ 本地与游戏内实时调试

- **手动一键同步**：双击运行根目录的 `sync_art.bat`（Windows）或 `./sync_art.sh`（Linux/WSL）。
- **免 IDE 启动游戏**：双击运行根目录的 `run_game.bat`。
- **游戏内热重载贴图**：修改贴图后，在游戏界面按下 **`F3 + T`** 即可在 1 秒内看到贴图刷新！
