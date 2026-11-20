# FTB Quests 2001.4.14 SNBT 格式参考

记录本仓库实际用到的字段和游戏写出器的固定风格。FTB 的读取器很宽容，但写出器风格死板——手写或脚本生成一律对齐写出器，否则游戏内随便保存一次就会刷出海量格式 diff。

## 文件级写出风格

- **编码与缩进**：UTF-8、**CRLF** 换行、**Tab** 缩进。
- **键序**：按字母序写出（`dependencies` < `description` < `id` < `optional` < `rewards` < `subtitle` < `tasks` < `title` < `x` < `y`）。
- **数组与标点**：容器内元素省略逗号；多元素数组一行一个，单元素内联 `["a"]`。
- **字符串与数字**：字符串双引号，`\` 转义为 `\\`；数字后缀 `1.0d`（double）、`25L`（long）、`100`（int）。
- **缩进层级**：根 `{` 在 0 列 → 章节头字段 1 Tab → `quests: [` 里的任务 `{` 2 Tab → 任务字段 3 Tab → task/reward 内层字段 4 Tab。
- **ID 取值**：16 位大写十六进制，且必须是非零正 Java `long`——**首位只能是 `0`～`7`**。`8000000000000000`～`FFFFFFFFFFFFFFFF` 超出 `Long.parseLong(..., 16)` 范围，会被读成 0。

## 目录结构

```
gte/overrides/config/ftbquests/quests/
├── data.snbt              # 全局配置，version: 13 勿改
├── chapter_groups.snbt    # 章节分组 tab
├── chapters/*.snbt        # 每章一个文件，文件名 = filename（或 16 位 hex）
├── reward_tables/*.snbt   # 奖励表（当前章节未引用，保留）
└── lang/*.snbt            # FTB 自带原文->译文表，游戏管理，勿手编
```

## 章节文件示例（节选自 `tier_0.snbt`）

```snbt
{
	autofocus_id: "11101BDC46C78EE0"          # 打开章节默认聚焦的任务
	default_hide_dependency_lines: false
	default_quest_shape: ""                    # "" = 沿用 data.snbt 的 rsquare
	filename: "tier_0"                         # 翻译键命名空间用这个名字
	group: "277796EFA601375B"                  # chapter_groups.snbt 里的分组 id
	icon: "gtceu:lp_steam_solid_boiler"        # 物品/方块 id 或贴图路径
	id: "7BBC78701013E74F"
	images: [ ... ]                            # 手摆坐标装饰贴图，勿动
	order_index: 0                             # 章节 tab 排序
	quest_links: [ ]
	quests: [
		{ ... }
	]
	subtitle: ["超低压"]
	tags: ["quest_ulv"]
	title: "&8{gte.tier_0.title} &7ULV&r"
}
```

## 任务块示例

```snbt
		{
			dependencies: ["11101BDC46C78EE0"]          # 只能填任务 id；多个时可配 dependency_requirement
			dependency_requirement: "one_completed"      # 可选：默认全完成，one_completed=任一
			description: ["{gte.tier_0.quests.<id>.description0}"]
			icon: "gtceu:coke_oven"                      # 缺省取第一个 task 的物品
			id: "2D2FF11CE840C1E3"
			optional: true                               # 可选任务（不阻塞后续）
			can_repeat: true                             # 可重复领取
			hidden: true                                 # 前置未完成前隐藏
			rewards: [
				{ id: "<hex>", type: "xp", xp: 100 }
				{ count: 8, id: "<hex>", item: "gtceu:copper_credit", type: "item" }
			]
			subtitle: "{...subtitle}"
			shape: "rsquare"                             # 缺省继承章节
			tasks: [{
				count: 25L                               # >2^31 才写 L
				id: "<hex>"
				item: "gtceu:coke_oven_bricks"
				type: "item"
			}]
			title: "{gte.tier_0.quests.<id>.title}"
			x: -21.5d
			y: -1.5d                                     # 网格坐标 0.5 步进；重叠 = lint error
		}
```

### 常用 `task` 类型

| type | 字段 | 说明 |
| --- | --- | --- |
| `item` | `item`, `count` | 主力。`item` 可写 `"ns:path"`、带 NBT 的 `{ Count: 1, id: "ns:path", tag: {...} }` 或标签 `"#forge:ingots"` |
| `checkmark` | — | 手动打勾，常用于阅读/搭建引导 |

其余类型（观察、流体、能量、维度等）FTB 支持但本包暂未用，需要时手写再 `lint`。

### 常用 `reward` 类型

| type | 字段 | 说明 |
| --- | --- | --- |
| `item` | `item`, `count` | 物品奖励 |
| `xp` | `xp` | 经验点 |
| `xp_levels` | `levels` | 经验等级 |
| `command` | `command` | 后台指令 |
| `choice` | `rewards: [...]` | 玩家多选一 |

## `data.snbt` 关键配置

`version: 13`（勿改）、`progression_mode: "linear"`（前置全完成才解锁，所以悬空依赖=永久锁死）、`default_quest_shape: "rsquare"`、`grid_scale: 0.5d`、`default_consume_items: false`、`default_autoclaim_rewards: "disabled"`。

## 翻译体系

- **键名格式**：`gte.<章节filename>.quests.<任务id>.title|subtitle|description<N>`；task 标题为 `gte.<章>.quests.<任务id>.tasks.<taskid>.title`；章节标题为 `gte.<章>.title`。
- **JSON 风格**：`gte/overrides/config/openloader/resources/quests/assets/gte/lang/<locale>.json`，4 空格缩进、`"k":"v"` 冒号后无空格、不排序、CRLF、末尾无换行。
- **语言分工**：`zh_cn` 为源语言，`en_us` 同步维护；其余 9 语（`de`/`es`/`fr`/`it`/`ja`/`ko`/`ru`/`zh_hk`/`zh_tw`）由 `translate.yml` 补齐，别手写。
- **转义**：字面 `%` 写 `%%`；JSON 里的 `\` 写 `\\`。
