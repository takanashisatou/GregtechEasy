# 配方:常见任务编辑场景

按顺序读:先摸现场(`stats`/`list`/`show`),再动手,收尾 `lint`。
所有写操作建议先在临时副本上演练:

```bash
rm -rf /tmp/ftbq-test && mkdir -p /tmp/ftbq-test/gte/overrides/config
cp -r gte/overrides/config/ftbquests /tmp/ftbq-test/gte/overrides/config/
mkdir -p /tmp/ftbq-test/gte/overrides/config/openloader/resources
cp -r gte/overrides/config/openloader/resources/quests /tmp/ftbq-test/gte/overrides/config/openloader/resources/
python scripts/quest_lab/ftbq.py --repo /tmp/ftbq-test <命令>
```

## 1. 找到一个任务

```bash
python scripts/quest_lab/ftbq.py list --search 木炭        # 按标题(中/英)/id 跨章搜索
python scripts/quest_lab/ftbq.py show 2D2FF11CE840C1E3     # 详情:前后依赖、tasks、rewards
```

`show` 的"后续任务"是反向依赖;**删任务/断依赖前必须看它**,否则下游任务在
linear 模式下永久锁死。

## 2. 新增任务

优先用 `add-quest`(覆盖 item/checkmark 任务 + xp/item/choice 奖励):

```bash
python scripts/quest_lab/ftbq.py add-quest \
    --chapter tier_0 --x -26.5 --y 3.5 \
    --title-zh "煤气管线" --title-en "Coke gas piping" \
    --subtitle-zh "把焦炉煤气接进燃气轮机" \
    --desc-zh "合成黄铜流体管道" --desc-en "Craft brass fluid pipes" \
    --task item --item gtceu:brass_normal_fluid_pipe --count 12 \
    --deps 2D2FF11CE840C1E3 --optional \
    --xp 100 --reward-item gtceu:copper_credit:8 \
    --dry-run          # 先看生成的块;确认后去掉 --dry-run 落盘
```

落盘后三处变化:`chapters/tier_0.snbt` 末尾插入任务块;openloader `zh_cn.json`/`en_us.json`
追加 4 个词条(title/subtitle/description0)。`--desc-en` 缺省会回落中文,记得之后单独补英文。

超出 item/checkmark 范围(如观察任务、command 奖励):用 `ftbq id --count N` 生成 id,
按 `snbt-format.md` 的字段表在 `quests: [` 列表末尾手写块(保持 3 Tab 字段缩进、键名字母序、
CRLF),翻译键手工加进两个 JSON(保持 4 空格 + 紧凑冒号风格),然后 `lint`。

坐标怎么选:`list --chapter <章>` 看现有占位,新任务放在前置任务附近(相差 1~2 格),
**禁止与其他任务同格**(lint 会拦)。

## 3. 修悬空依赖 / 改依赖关系

```bash
python scripts/quest_lab/ftbq.py lint          # 拿到 "tier_x/<任务id> -> <坏id>"
python scripts/quest_lab/ftbq.py show <任务id>  # 看上下文
```

- 若坏 id 是某个 **task 的 id**(lint 会注明"指到了 task of …"):把 `dependencies` 里的值
  换成该 task **所属任务的 id**(`show` 输出里 task 所属任务会一起列出)。
- 若是章节重组留下的死 id:决定指向(用 `list --chapter` 找语义正确的新前置),手编该任务
  的 `dependencies` 数组,多元素一行一个、不加逗号。
- 加新依赖同理;改完必须 `lint`(抓依赖环与自依赖)。

## 4. 改任务文本 / 补翻译

- 文本在 SNBT 里是 `{gte.…}` 键 → 只改 openloader JSON 里对应词条(键名含任务 id,
  `list`/`show` 可查)。zh_cn 必改,en_us 应同步;其他语言别动(管线补)。
- 内联中文的老任务要国际化:把 SNBT 里的原文换成新翻译键 + JSON 加词条。**键的值改了但
  键名不变**即可,不需要动 quests/lang/*.snbt(游戏自己管理)。
- 词条含 `\` 时 JSON 里写 `\\`。

## 5. 与游戏联动(调试所见)

- **dev 运行时**:实际目录为仓库根目录 `run/client/`。`config/ftbquests` 与
  `config/openloader/resources` 分别联接到 `gte/overrides/` 同名目录。
  改任务 SNBT → `/ftbquests reload`(需要 op)；改语言 JSON → **F3+T** 资源重载。
  修改两者时两种重载都要执行。游戏内改动 → 直接落盘进 git,游戏关闭前别在
  外面改同一文件(编辑器保存会整文件覆盖)。
- **玩家侧启动器**:`scripts/sync_quests.bat` 在 `.minecraft` 与仓库间 robocopy 双向同步,
  推送到游戏后同样 `/ftbquests reload`。
- 重载后任务树不显示/报错，先 `ftbq lint` 看解析错误行号。
- 标题或描述显示 `gte.…` 原键时，运行 `ftbq runtime-check` 比对实际客户端词条。
  若失败，运行 `gradlew :modules:gte-dev-runtime:linkDevEnvironment` 修复联接；旧语言
  资源副本保存在 `run/client/.gte-link-backups/`，随后 F3+T 重载资源。
  外部启动器用 `ftbq runtime-check --runtime <实际游戏目录>` 检查，并同步语言资源包。

## 6. 提交前检查

```bash
python scripts/quest_lab/ftbq.py lint          # 必须不引入新 error
python scripts/quest_lab/ftbq.py runtime-check # dev 客户端语言资源必须同步
git diff --stat                                 # 只应有 quests/*.snbt + 两个 lang JSON
git diff -- gte/overrides/config/ftbquests | head   # 确认没有整文件重排(CRLF/缩进事故)
```

游戏内碰到改动的章节会重写整个文件(键序/格式由游戏规范化)——如果 diff 显示大量无关
行变化,说明你改错了行尾或缩进,撤销重来。

## 7. 已知既有债(截至 2026-10-06,不是你引入的)

- `tier_2_mv/00274A038F9DD2C4` 与 `tier_5_iv/4C9CBBDF095CD6B8` 的依赖指到了 task id,
  游戏里表现为这两任务的前置线缺失。修复 = 把依赖值换成所属任务 id
  (`5594D16233633A8A`、`1C743E79E6E28EBB`)。
- 翻译键 `gte.myzz`、`gte.myzz_des` 缺 en_us 词条(tier_1_lv 章引用)。
- `gte/overrides/config/ftbquests/quests.7z` 是历史手工备份,随 pack 一起发布但无人引用;
  别往里加东西,也别在编辑时把它当数据源。

修这些请开独立 PR,一个 PR 只做一件事。
