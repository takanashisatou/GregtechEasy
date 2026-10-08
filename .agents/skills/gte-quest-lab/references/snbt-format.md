# FTB Quests 2001.4.14 SNBT 格式参考(GTE 整合包实况)

本文描述**本仓库实际使用**的字段与写出风格。FTB Library 的 SNBT 读取器很宽容,
写出器风格固定;手写/脚本生成一律模仿写出器,否则每次游戏内保存都会产生海量格式 diff。

## 文件级写出风格

- 编码 UTF-8,换行 **CRLF**,缩进 **Tab**。
- 键名按**字母序**写出(`dependencies` < `description` < `id` < `optional` < `rewards`
  < `subtitle` < `tasks` < `title` < `x` < `y`)。
- 容器内元素**逗号可省略**(写出器省略);多元素数组通常一行一个元素,单元素内联 `["a"]`。
- 字符串一律双引号,`\` 转义为 `\\`;数字后缀:`1.0d`(double)、`25L`(long)、`100`(int)。
- 嵌套层级:根 `{` 在 0 列;章节头字段 1 个 Tab;`quests: [` 列表里的任务块 `{` 2 个 Tab;
  任务字段 3 个 Tab;task/reward 内层字段 4 个 Tab。

对象 id 写成 16 位大写十六进制，但取值须为非零正 Java long：首位只能是 0～7。
`8000000000000000`～`FFFFFFFFFFFFFFFF` 超出 `Long.parseLong(..., 16)` 范围，不能作为 FTB id。

## 目录结构

```
gte/overrides/config/ftbquests/quests/
├── data.snbt              # 全局配置, version: 13 勿动
├── chapter_groups.snbt    # 分组 tab
├── chapters/*.snbt        # 每章一个文件, 文件名=章节 filename(或 16 位 hex)
├── reward_tables/*.snbt   # 奖励表(当前章节未引用, 保留)
└── lang/*.snbt            # FTB 2001.4 自带的"原文->译文"表, 游戏管理, 勿手编
```

## 章节文件(实截自 tier_0.snbt)

```snbt
{
	autofocus_id: "11101BDC46C78EE0"          # 打开章节默认聚焦的任务
	default_hide_dependency_lines: false
	default_quest_shape: ""                    # "" = 用 data.snbt 的 rsquare
	filename: "tier_0"                         # 翻译键命名空间用这个名字
	group: "277796EFA601375B"                  # chapter_groups.snbt 里的分组 id
	icon: "gtceu:lp_steam_solid_boiler"        # 章节图标, 物品/方块 id 或贴图路径
	id: "7BBC78701013E74F"
	images: [ ... ]                            # 装饰贴图, 手摆坐标, 不要动
	order_index: 0                             # 章节 tab 排序
	quest_links: [ ]
	quests: [                                  # 任务块列表, 见下
		{ ... }
	]
	subtitle: ["超低压"]                        # 章节 UI 副标题, 可为字符串数组
	tags: ["quest_ulv"]
	title: "&8{gte.tier_0.title} &7ULV&r"      # 章节标题, 可用翻译键+颜色码
}
```

## 任务块

```snbt
		{
			dependencies: ["11101BDC46C78EE0"]          # 只能是任务 id; 多个时配 dependency_requirement
			dependency_requirement: "one_completed"      # 可选: 默认全完成, one_completed=任一
			description: ["{gte.tier_0.quests.<id>.description0}"]
			icon: "gtceu:coke_oven"                      # 缺省用第一个 task 的物品
			id: "2D2FF11CE840C1E3"
			optional: true                               # 可选任务(不阻塞后续)
			can_repeat: true                             # 可重复领取
			hidden: true                                 # 前置未完成前隐藏
			rewards: [
				{ id: "<hex>", type: "xp", xp: 100 }
				{ count: 8, id: "<hex>", item: "gtceu:copper_credit", type: "item" }
			]
			subtitle: "{...subtitle}"                    # 任务列表里的灰色小字
			shape: "rsquare"                             # 缺省继承章节
			tasks: [{
				count: 25L                               # >2^31 才写 L
				id: "<hex>"
				item: "gtceu:coke_oven_bricks"
				type: "item"
			}]
			title: "{gte.tier_0.quests.<id>.title}"
			x: -21.5d
			y: -1.5d                                     # 章节网格坐标, 0.5 步进; 重叠= lint error
		}
```

### 本包实际用到的 task 类型

| type | 字段 | 说明 |
| --- | --- | --- |
| `item` | `item`, `count` | 主力(1330 处)。`item` 可以是 `"ns:path"` 字符串,也可以是带 NBT 的物品串 `{ Count: 1, id: "ns:path", tag: {...} }`(充能工具、存储元件等)。标签任务写 `"#forge:ingots"`。 |
| `checkmark` | — | 手动打勾(216 处),常用于"阅读/搭建"类引导 |

其余类型(观察、流体、能量、维度等)FTB 均支持但本包未用;需要时手写块并跑 lint。

### 本包实际用到的 reward 类型

| type | 字段 | 说明 |
| --- | --- | --- |
| `item` | `item`, `count` | 物品奖励 |
| `xp` | `xp` | 经验点(239 处) |
| `xp_levels` | `levels` | 经验等级(17 处) |
| `command` | `command` | 后台指令(8 处) |
| `choice` | `rewards: [...]` | 玩家自选其一(4 处) |

## data.snbt(摘要)

`version: 13`(文件格式版本,**勿改**)、`progression_mode: "linear"`(依赖全完成才解锁,
所以悬空依赖=任务永久锁死)、`default_quest_shape: "rsquare"`、`grid_scale: 0.5d`、
`default_consume_items: false`、`default_autoclaim_rewards: "disabled"`。

## 翻译体系

**键的命名空间约定**:`gte.<章节filename>.quests.<任务id>.title|subtitle|description<N>`,
task 级标题是 `gte.<章>.quests.<任务id>.tasks.<taskid>.title`。章节级:
`gte.<章>.title`。

- 词条文件:`gte/overrides/config/openloader/resources/quests/assets/gte/lang/<locale>.json`
  —— 4 空格缩进、`"k":"v"` 冒号后无空格、**不排序**、CRLF、末尾无换行的普通 JSON。
- zh_cn = 源语言(中文先写);en_us = 参考译文(应同步);de/es/fr/it/ja/ko/ru/zh_hk/zh_tw
  由翻译管线(translate.yml)补齐,不要手写。
- 文本里 `{key}` 之外还可直接内联中文 + `&` 颜色码;`quests/lang/*.snbt`(FTB 原文->译文
  映射)是游戏内翻译编辑器的产物,由游戏管理,不要手编。
- `\` 在 JSON 里转义为 `\\`(如知识库标题里的路径分隔)。
