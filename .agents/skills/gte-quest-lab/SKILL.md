---
name: gte-quest-lab
description: >-
  FTB Quests 任务编辑 CLI 工具集与 SNBT 格式手册:读取、搜索、校验、新增 GTE 整合包任务,
  处理依赖环/悬空依赖/翻译键,以及任务文本双语化。Use whenever editing, inspecting, adding,
  linking, translating, or debugging FTB Quests quests in this repo (config/ftbquests,
  chapters/*.snbt, 任务/任务书/章节/依赖/奖励/任务翻译, /ftbquests reload) — even if the
  user never says "FTB", any request to change in-game quest content belongs here.
---

# GTE Quest Lab — FTB Quests 编辑 CLI

本仓库的任务书**不靠启动游戏编辑,也不靠盲改正则**:一切读取、校验、新增都走
`python scripts/quest_lab/ftbq.py`(下称 `ftbq`),格式细节查 `references/`,
动手配方查 `references/recipes.md`。

## 数据在哪

| 内容 | 路径 |
| --- | --- |
| 任务树(唯一事实源,git 跟踪) | `gte/overrides/config/ftbquests/quests/` |
| 章节文件(每章一个) | `quests/chapters/*.snbt`(30 个,`tier_0`、`free_plus`、`450B4E83…` 等) |
| 章节分组 / 全局配置 / 奖励表 | `quests/chapter_groups.snbt`、`quests/data.snbt`、`quests/reward_tables/` |
| `{gte.*}` 翻译键词条 | `gte/overrides/config/openloader/resources/quests/assets/gte/lang/*.json`(zh_cn=源语言,en_us=参考译文) |
| FTB 自带翻译文件(游戏写出,勿手编) | `quests/lang/*.snbt` |

FTB Quests 版本为 **2001.4.14**(MC 1.20.1),`data.snbt` 的 `version: 13` 是其文件格式版本,
**永远不要手改**;游戏升级版本后由游戏自己重写。

## 任务文本的两条路(改文本前必读)

1. **翻译键(推荐,新任务必须)**:SNBT 里写 `title: "{gte.<章节文件名>.quests.<任务id>.title}"`,
   实际词条放在 openloader 的 `assets/gte/lang/zh_cn.json`(中文源)与 `en_us.json`(英文)。
   其余 9 种语言由翻译管线补齐,**不要手写 de_es/fr_fr 等**。
2. **内联原文**:直接把中文写在 SNBT 里(老任务遗留,仍合法)。不要把新任务写成内联中文。

两种文本都支持 `&0-&f` 颜色码 / `&l` 粗体 / `&r` 重置。
FTB 翻译文本中的字面百分号须写作 `%%`（例如 `50%%`），否则会显示 `Format error`。

## 铁律

1. **改文件前先跑只读命令摸清现场**:`stats` → `list --search` → `show <id>`。
   `show` 会给出反向依赖("后续任务"),删改任务前必须先看它。
2. **id 用 `ftbq id` 生成**，16 位大写十六进制，范围 `0000000000000001`～`7FFFFFFFFFFFFFFF`。
   FTB 用 `Long.parseLong(..., 16)`，不是无符号解析；首位 8～F 的随机 id 会读成 0，随后被游戏重建。
   与全树现有 id 查重。任务、task、reward
   三层对象各有自己的 id,`dependencies` 里只能填**任务 id**——填成 task id 是真实发生过的
   bug(加载器静默忽略,linear 模式下任务永远锁死),lint 会抓。
3. **外科手术式写入**:文件是 CRLF + Tab 缩进 + 键名字母序;lang JSON 是 4 空格缩进 +
   `"k":"v"` 紧凑冒号 + 无排序 + 末尾无换行。不要用 `json.dump` 整体重排,不要把 CRLF 改成
   LF,否则 diff 爆炸且游戏写出时格式漂移。`add-quest` 已内置这些约定。
4. **dev 环境实时联动**(AGENTS.md 规则 12):`runClient` 时
   实际客户端目录为仓库根目录 `run/client/`，不是模块目录下的 `run/client/`。
   `config/ftbquests` 与 `config/openloader/resources` 均应联接到 `gte/overrides/` 同名目录。
   用 `ftbq runtime-check` 检查客户端实际读到的中英文词条，不能只检查仓库 JSON。
   任务树改动用 `/ftbquests reload`；语言 JSON 改动还需 **F3+T 资源重载**或重启客户端。
   `/ftbquests reload` 不会重载 Minecraft 语言资源。
   **游戏内任务编辑器开着别改文件**——编辑器保存会整文件覆盖,先关界面或先 reload。
5. **玩家侧启动器同步**走 `scripts/sync_quests.bat`(robocopy 双向 + `/ftbquests reload`),
   与本 CLI 互不替代。
6. **收尾必跑 `ftbq lint`**:exit 2 = 有 error(悬空依赖、依赖环、id 冲突、网格重叠、缺
   zh_cn 词条),exit 1(--strict) = 仅 warning(缺 en_us 词条等)。当前树上有两笔**既有
   债**(见 lint 输出),不是你引入的,但也别顺手修——单独一个 PR 只做一件事。
7. 章节里的 `images:` 装饰图(坐标是手工摆的)是有人蹲在图上抠出来的,**不要动、不要"顺手
   规整"**;新任务默认不配 images。

## 命令速查

```bash
python scripts/quest_lab/ftbq.py stats                          # 全树总览:章节/任务数/分组
python scripts/quest_lab/ftbq.py list --chapter tier_0          # 某章任务清单(id/坐标/标题)
python scripts/quest_lab/ftbq.py list --search 焦炉             # 跨章搜索(标题/id, zh+en)
python scripts/quest_lab/ftbq.py show <quest_id>                # 详情+前后依赖+tasks/rewards
python scripts/quest_lab/ftbq.py id --count 3                   # 生成查重后的新 id
python scripts/quest_lab/ftbq.py add-quest --chapter tier_0 \
    --x -26.5 --y 3.5 --title-zh "…" --title-en "…" \
    --subtitle-zh "…" --desc-zh "第一步…" --desc-en "Step 1…" \
    --task item --item gtceu:coke_oven --count 25 \
    --deps <id>,<id> --optional --xp 100 \
    --reward-item gtceu:copper_credit:8 --dry-run               # 先 dry-run 看块,去掉 --dry-run 落盘
python scripts/quest_lab/ftbq.py lint                           # 校验全树
python scripts/quest_lab/ftbq.py runtime-check                  # 检查 dev 客户端语言资源同步
```

`add-quest` 自动:生成全部 id、按 `{gte.<章>.quests.<id>.*}` 建翻译键并写入 zh_cn/en_us
(en 缺省回落中文,后续可单独补)、插到章节 `quests: [...]` 末尾、保持 CRLF/缩进/键序。
支持 item/checkmark 任务与 xp/item 奖励;其余类型(观察、command、choice……)按
`references/snbt-format.md` 的字段表手写块,再 lint。

翻译键大小写必须与 JSON 完全一致；大写十六进制任务 ID 属于正常键名，搜索与 lint
必须覆盖它们。显示 `gte.…title` 原键时，先查客户端语言副本与资源重载状态。

## 深入阅读

- 改章节/任务/task/reward 的字段、类型全集、写出风格约定 → `references/snbt-format.md`
- 分步配方(新任务、修悬空依赖、补翻译、与游戏联动、发布检查)→ `references/recipes.md`
