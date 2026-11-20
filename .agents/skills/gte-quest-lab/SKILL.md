---
name: gte-quest-lab
description: >-
  FTB Quests 任务编辑 CLI 工具集与 SNBT 格式手册：读取、搜索、校验、新增 GTE 整合包任务，
  处理依赖环/悬空依赖/翻译键，以及任务文本双语化。Use whenever editing, inspecting, adding,
  linking, translating, or debugging FTB Quests quests in this repo (config/ftbquests,
  chapters/*.snbt, 任务/任务书/章节/依赖/奖励/任务翻译, /ftbquests reload).
---

# GTE Quest Lab — FTB Quests 编辑 CLI

本仓库的任务书**不靠启动游戏手点，也不靠盲改正则**：一切读取、搜索、校验、新增都走 `python scripts/quest_lab/ftbq.py`（下称 `ftbq`）。字段格式看 [references/snbt-format.md](references/snbt-format.md)，分步操作看 [references/recipes.md](references/recipes.md)。

## 数据在哪

| 内容 | 路径 |
| --- | --- |
| 任务树（唯一事实源，git 跟踪） | `gte/overrides/config/ftbquests/quests/` |
| 章节文件（每章一个） | `quests/chapters/*.snbt`（30 个，`tier_0`、`free_plus`、`450B4E83…` 等） |
| 章节分组 / 全局配置 / 奖励表 | `quests/chapter_groups.snbt`、`quests/data.snbt`、`quests/reward_tables/` |
| `{gte.*}` 翻译键词条 | `gte/overrides/config/openloader/resources/quests/assets/gte/lang/*.json`（`zh_cn` 为中文源，`en_us` 为英文） |
| FTB 自带翻译表（游戏管理，勿手编） | `quests/lang/*.snbt` |

FTB Quests 版本为 **2001.4.14**（MC 1.20.1），`data.snbt` 里的 `version: 13` 是文件格式版本，**别手改**。

## 任务文本的两条路

1. **翻译键（新任务一律用这个）**：SNBT 里写 `title: "{gte.<章节filename>.quests.<任务id>.title}"`，词条写进 openloader 的 `zh_cn.json` 和 `en_us.json`。其余 9 种语言由翻译管线补齐，别手写 `de_de`/`fr_fr` 等。
2. **内联原文**：老任务遗留的直接写中文，仍合法，但新任务别这么写。

两种写法都支持 `&0-&f` 颜色码 / `&l` 粗体 / `&r` 重置。**坑**：翻译文本里想显示字面百分号必须写 `%%`（例如 `50%%`），写单个 `%` 游戏里会直接报 `Format error`。另外翻译键严格区分大小写（大写十六进制任务 ID 是正常键名）。

## 铁律

1. **动文件前先摸清现场**：`stats` → `list --search` → `show <id>`。`show` 会列出反向依赖（「后续任务」），删改任务前必看。
2. **ID 必须用 `ftbq id` 生成**：16 位大写十六进制，范围 `0000000000000001`～`7FFFFFFFFFFFFFFF`（首位只能是 `0`～`7`，因为 FTB 用有符号 `Long.parseLong(..., 16)` 解析，首位 `8`～`F` 会被读成 0 然后被游戏重建）。任务、task、reward 三层各有自己的 id，`dependencies` 里只能填**任务 id**——填成 task id 会被静默忽略，linear 模式下任务永久锁死。
3. **外科手术式写入**：SNBT 是 CRLF + Tab 缩进 + 键名字母序；lang JSON 是 4 空格缩进 + `"k":"v"` 紧凑冒号 + 不排序 + 末尾无换行。别用 `json.dump` 整文件重排，也别把 CRLF 改成 LF，否则 diff 爆炸。`add-quest` 已内置这些格式约定。
4. **dev 实时联动**：开发客户端目录在仓库根目录 `run/client/`，它的 `config/ftbquests` 与 `config/openloader/resources` 联接到 `gte/overrides/`。
   - 改了 SNBT → 游戏内跑 `/ftbquests reload`
   - 改了语言 JSON → 游戏内按 **F3+T** 重载资源（`/ftbquests reload` 不会重载语言文件！）
   - 遇到页面显示 `gte.…title` 原键，先跑 `ftbq runtime-check` 查客户端实际读到的词条。
   - **游戏内任务编辑器开着时别在外面改文件**，编辑器保存会整文件覆盖。
5. **玩家侧同步**：玩家 `.minecraft` 同步走 `scripts/sync_quests.bat`（robocopy 双向 + `/ftbquests reload`）。
6. **收尾必跑 `ftbq lint`**：exit 2 = 有 error（悬空依赖、依赖环、id 冲突、网格重叠、缺 `zh_cn` 词条），exit 1（`--strict`）= warning（缺 `en_us` 等）。当前树上有两笔历史既有债（见 lint 输出），别在别的改动里顺手混着修。
7. **别碰章节 `images:`**：那些装饰图坐标是手工蹲在图上抠出来的，别“顺手规整”；新任务默认不配 `images`。

## 命令速查

```powershell
python scripts/quest_lab/ftbq.py stats                          # 全树总览
python scripts/quest_lab/ftbq.py list --chapter tier_0          # 某章任务清单
python scripts/quest_lab/ftbq.py list --search 焦炉             # 跨章搜索（中/英标题、id）
python scripts/quest_lab/ftbq.py show <quest_id>                # 详情 + 前后依赖 + tasks/rewards
python scripts/quest_lab/ftbq.py id --count 3                   # 生成查重后的新 id
python scripts/quest_lab/ftbq.py add-quest --chapter tier_0 `
    --x -26.5 --y 3.5 --title-zh "…" --title-en "…" `
    --subtitle-zh "…" --desc-zh "第一步…" --desc-en "Step 1…" `
    --task item --item gtceu:coke_oven --count 25 `
    --deps <id>,<id> --optional --xp 100 `
    --reward-item gtceu:copper_credit:8 --dry-run               # 先 dry-run 预览，去掉即落盘
python scripts/quest_lab/ftbq.py lint                           # 校验全树
python scripts/quest_lab/ftbq.py runtime-check                  # 检查 dev 客户端语言资源同步
```

`add-quest` 会自动生成全套 id、写入 `zh_cn.json`/`en_us.json`（缺英文时先回落中文）、按规范格式插到章节 `quests: [...]` 末尾。它覆盖 `item`/`checkmark` 任务与 `xp`/`item` 奖励；其余类型（观察、`command`、`choice` 等）对照 [references/snbt-format.md](references/snbt-format.md) 手写块再跑 `lint`。

## 深入阅读

- 字段全集与写出风格 → [references/snbt-format.md](references/snbt-format.md)
- 常见任务操作分步配方 → [references/recipes.md](references/recipes.md)
