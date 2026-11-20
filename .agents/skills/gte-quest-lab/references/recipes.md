# 常见任务编辑配方

固定节奏：先只读摸现场（`stats` / `list` / `show`）→ 动手改 → 收尾跑 `lint` + `runtime-check`。

想先在临时副本上演练，可以拷一份出来传 `--repo`：

```powershell
$tmp = Join-Path $env:TEMP "ftbq-test"
Remove-Item -Recurse -Force $tmp -ErrorAction SilentlyContinue
New-Item -ItemType Directory -Force "$tmp\gte\overrides\config\openloader\resources" | Out-Null
Copy-Item -Recurse gte\overrides\config\ftbquests "$tmp\gte\overrides\config\"
Copy-Item -Recurse gte\overrides\config\openloader\resources\quests "$tmp\gte\overrides\config\openloader\resources\"
python scripts/quest_lab/ftbq.py --repo $tmp <命令>
```

## 1. 定位任务

```powershell
python scripts/quest_lab/ftbq.py list --search 木炭        # 按中/英标题或 id 跨章搜
python scripts/quest_lab/ftbq.py show 2D2FF11CE840C1E3     # 详情：前后依赖、tasks、rewards
```

`show` 里的「后续任务」是反向依赖；**删任务或断依赖前必须看它**，不然下游任务在 linear 模式下直接永久锁死。

## 2. 新增任务

优先直接用 `add-quest`（覆盖 `item`/`checkmark` 任务和 `xp`/`item` 奖励）：

```powershell
python scripts/quest_lab/ftbq.py add-quest `
    --chapter tier_0 --x -26.5 --y 3.5 `
    --title-zh "煤气管线" --title-en "Coke gas piping" `
    --subtitle-zh "把焦炉煤气接进燃气轮机" `
    --desc-zh "合成黄铜流体管道" --desc-en "Craft brass fluid pipes" `
    --task item --item gtceu:brass_normal_fluid_pipe --count 12 `
    --deps 2D2FF11CE840C1E3 --optional `
    --xp 100 --reward-item gtceu:copper_credit:8 `
    --dry-run
```

预览无误去掉 `--dry-run` 落盘，会同步改三处：`chapters/<章>.snbt` 末尾插入任务块，openloader 的 `zh_cn.json` / `en_us.json` 追加对应词条（`--desc-en` 省略时会先填中文，记得后续补英文）。

需要 `add-quest` 以外的类型（观察任务、`command`/`choice` 奖励等）：用 `ftbq id --count N` 生成 id，按 [snbt-format.md](snbt-format.md) 在 `quests: [` 末尾手写（3 Tab 字段缩进、键名字母序、CRLF），词条手工加进两个 JSON（4 空格 + `"k":"v"` 紧凑冒号），最后 `lint`。

选坐标：先 `list --chapter <章>` 看周边占位，新任务摆在前置附近 1～2 格，**别和已有任务同格**（`lint` 会拦）。

## 3. 修悬空依赖 / 改依赖链

```powershell
python scripts/quest_lab/ftbq.py lint          # 找到 "tier_x/<任务id> -> <坏id>"
python scripts/quest_lab/ftbq.py show <任务id>  # 看上下文
```

- 坏 id 是某个 **task 的 id**（lint 会提示「指到了 task of …」）：把 `dependencies` 里的值换成该 task 所属的**任务 id**。
- 章节重组留下的死 id：用 `list --chapter` 找语义正确的新前置，改 `dependencies`（多元素一行一个、不加逗号）。
- 改完必跑 `lint` 查依赖环和自依赖。

## 4. 改文本 / 补翻译

- SNBT 里已经是 `{gte.…}` 键 → 只改 openloader 的 `zh_cn.json` 与 `en_us.json`（其他 9 种语言让翻译管线补）。
- 老任务是内联中文要国际化 → SNBT 原文换成新翻译键 + 两个 JSON 加词条；不用碰 `quests/lang/*.snbt`。
- 文本里字面 `%` 写 `%%`，字面 `\` 在 JSON 里写 `\\`。

## 5. 与游戏联调

- **dev 客户端**（根目录 `run/client/`）：改 SNBT 跑 `/ftbquests reload`（需 OP）；改语言 JSON 按 **F3+T** 重载资源；两个都改了就两步都做。
- **看到原键 `gte.…title`**：先跑 `ftbq runtime-check`。如果报联接失效，跑 `.\gradlew.bat :modules:gte-dev-runtime:linkDevEnvironment`（旧副本会备份到 `run/client/.gte-link-backups/`），再进游戏按 F3+T。外部启动器用 `ftbq runtime-check --runtime <游戏目录>` 查。
- **重载后任务树空白/报错**：跑 `ftbq lint` 看具体行号。

## 6. 提交前检查

```powershell
python scripts/quest_lab/ftbq.py lint          # 确认没引入新 error
python scripts/quest_lab/ftbq.py runtime-check # 确认 dev 语言资源同步
git diff --stat                                # 只应有 quests/*.snbt + 两个 lang JSON
git diff -- gte/overrides/config/ftbquests | Select-Object -First 40
```

如果 `git diff` 冒出一整屏无关行，多半是把 CRLF 改成了 LF 或把缩进搞乱了，撤销重改。

## 7. 已知既有债（不是新引入的）

- `tier_2_mv/00274A038F9DD2C4` 和 `tier_5_iv/4C9CBBDF095CD6B8` 的 `dependencies` 指到了 task id（分别应改为 `5594D16233633A8A`、`1C743E79E6E28EBB`）。
- `gte.myzz`、`gte.myzz_des` 缺 `en_us` 词条（`tier_1_lv` 引用）。
- `gte/overrides/config/ftbquests/quests.7z` 是历史备份，无人引用，编辑时忽略它。

要清这些旧债请单独提交，别和日常新任务混在一起。
