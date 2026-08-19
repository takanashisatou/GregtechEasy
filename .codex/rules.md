# GTE-Multi 全局架构与开发规范 (Codex Rules)

## 1. 项目基础信息与技术栈
- **项目名称**：`gte-multi`
- **运行与编译环境**：**JDK 21**（强制使用 Java 21 Toolchain，所有子模块严格统一）
- **游戏版本**：Minecraft 1.20.1 (Forge 47.3.0 / 47.4.4)
- **核心架构**：多项目聚合工程（`gtm-reborn` + `gt--` + `gtecore`）+ Packwiz 整合包主体（`gte`）

---

## 2. 目录架构与模块职责

```
gte-multi/
├── .codex/
│   └── rules.md                     # Codex 全局规则（本文件）
├── .github/
│   └── workflows/
│       └── sync-build.yml           # GitHub Actions 自动化 CI 构建、AI 翻译与打包发布流水线
├── gradle/                          # Gradle 包装器与版本目录
├── modules/
│   ├── gtm-reborn/                  # 【子仓库】GregTech Modern Reborn 专属分支模组源码
│   ├── gt--/                        # 【子仓库】GT-- Community Edition (GT-- CE) 模组源码
│   ├── gtecore/                     # 【核心模组】GTECore 核心模组源码（直接底层依赖 gtm-reborn）
│   └── gte-dev-runtime/             # 【影子模组】本地全模组热编译调试环境（不发布，不打包）
├── gte/                             # 【整合包主体】Packwiz 项目与游戏根目录
│   ├── pack.toml                    # 整合包元数据（包含 versions.java = "21" 强制标记）
│   └── overrides/                   # 游戏工作目录
│       ├── config/                  # 配置文件（包含 ftbquests 任务配置）
│       ├── kubejs/                  # KubeJS 联动与魔改脚本
│       ├── defaultconfigs/          # 默认存档配置
│       ├── patchouli_books/         # 帕秋莉手册
│       ├── resourcepacks/           # 材质与资源包
│       └── mods/                    # 调试用依赖 Mod 存放目录
├── art_assets/                      # 【美术源文件】Blockbench 模型与贴图原件
├── scripts/
│   └── opencode_translate.py        # 基于 OpenCode 平台 deepseek-v4-flash 的全量/增量 AI 国际化脚本
├── build.gradle                     # 根工程构建脚本（包含 syncBlockbenchAssets 任务）
├── settings.gradle                  # 多模块包含声明
└── gradle.properties                # 全局 JVM 内存与编译参数
```

---

## 3. Git 跨仓库追踪与开发工作流

### 3.1 `gtm-reborn` 独立提交与推送
`modules/gtm-reborn/` 关联远程仓库 `https://github.com/Gregtech-Modern-Reborn/GregTech-Modern-Reborn`。
开发者在本地可直接对其进行独立版本控制：
```bash
# 进入 gtm-reborn 目录独立提交与推送
cd modules/gtm-reborn
git add .
git commit -m "feat: update machine recipe capability"
git push origin satou
```

### 3.2 `gte-multi` 主工程协同
在根工程中，`modules/gtm-reborn` 的最新 commit hash 会被主工程追踪：
```bash
# 回到根目录更新主工程对子仓库的指针
cd ../..
git add modules/gtm-reborn
git commit -m "chore: bump gtm-reborn submodule pointer"
git push origin master
```

### 3.3 `gt--` (GT-- Community Edition) 独立提交与推送
`modules/gt--/` 关联远程仓库 `https://github.com/takanashisatou/GT---Community-Edition`，开发分支为 `kotlin`：
```bash
cd modules/gt--
git add .
git commit -m "feat: update GT-- CE module"
git push origin kotlin
```

回到根目录后同样更新主工程对 `modules/gt--` 的 submodule 指针：
```bash
cd ../..
git add modules/gt--
git commit -m "chore: bump gt-- submodule pointer"
git push origin master
```

---

## 4. 跨模块变更联动规范与排查清单

> [!IMPORTANT]
> **修改 `gtm-reborn` 后的强制检查流程**
> 当修改了 `gtm-reborn` 的基础机器、材料系统、RecipeType、配方条件或 Capability 时，必须依次执行以下步骤：

1. **检查 `gtecore` 编译与引用完整性**：
   运行 `./gradlew :modules:gtecore:compileJava` 确保 `gtecore` 中的自定义机器、方块实体、配方处理器未发生编译断裂。
2. **检查 `gte/overrides/kubejs/` 联动脚本**：
   - 检查 `startup_scripts/` 中的 GTCEu / GTE 注册事件。
   - 检查 `server_scripts/` 中的配方 ID 与 Machine 引用。
   - 检查 `client_scripts/` 中的 JEI/EMI 显示逻辑。
3. **检查 FTB Quests 与国际化**：
   - 检查 `gte/overrides/config/ftbquests/quests/` 是否引用了被修改或删除的物品/机器 ID。
   - 运行 `python scripts/opencode_translate.py` 更新全量与增量多语言（SNBT/JSON）。

---

## 5. 本地影子调试与热编译环境 (`gte-dev-runtime`)

- **定位**：纯本地测试环境，禁止打包发布。
- **启动方式**：在 IntelliJ IDEA 中直接运行 Run Configuration **`Run GTE Full Pack (Client - Hot Debug)`**，或在命令行运行 `./gradlew :modules:gte-dev-runtime:runClient`。
- **工作原理**：
  - 游戏工作目录重定向到 `gte/overrides/`。
  - 自动读取 `gte/overrides/mods/` 里的所有第三方 Jar。
  - 自动将 `gtm-reborn` 和 `gtecore` 的最新源码热编译并注入进去，享受毫秒级改动生效。

---

## 6. 美术资产工作流 (`syncBlockbenchAssets`)

- 所有 Blockbench 模型（`.json`、`.bbmodel`）和贴图（`.png`）统一放置在 `art_assets/` 中。
- 执行 `./gradlew syncBlockbenchAssets`（或在运行 `runClient` / 编译时自动触发），资产将增量合并到 `modules/gtecore/src/main/resources/assets/gtecore/` 中。
- `.gitignore` 已配置忽略临时导出和构建缓存，保障 Git 历史整洁。

---

## 7. 数据生成器 `rundata` 规范

- 运行 `./gradlew :modules:gtecore:runData` 或 `./gradlew :modules:gtm-reborn:runData`。
- 数据生成器输出路径固定为 `src/generated/resources/`。
- 构建脚本已配置 `--existing-mod gtceu` 与预创建目录逻辑，确保 100% 稳定运行无崩溃。
