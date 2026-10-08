#!/usr/bin/env python3
"""FTB Quests CLI for the GTE modpack.

Reads and edits the quest tree under gte/overrides/config/ftbquests/quests/
(FTB Quests 2001.4.14, MC 1.20.1) without launching the game.

Quest text conventions in this pack:
  - Quest SNBT text is either raw Chinese or a "{gte.<chapter>.quests.<qid>.*}"
    translation key resolved through the openloader resource pack
    gte/overrides/config/openloader/resources/quests/assets/gte/lang/<locale>.json
    (zh_cn is the source language, en_us the reference translation).
  - Mutations are surgical text edits: tabs, CRLF, alphabetical key order
    (what FTB Library writes) and the 4-space "k":"v" style of the lang JSONs
    are preserved so diffs stay minimal.

Usage:
  python scripts/quest_lab/ftbq.py stats
  python scripts/quest_lab/ftbq.py list [--chapter tier_0] [--search 木炭]
  python scripts/quest_lab/ftbq.py show <quest_id>
  python scripts/quest_lab/ftbq.py id [--count 5]
  python scripts/quest_lab/ftbq.py add-quest --chapter tier_0 --x -18.5 --y 3.5 \
      --title-zh "..." [--title-en ...] [--subtitle-zh ...] [--desc-zh ...] \
      [--task item|checkmark] [--item gtceu:coke_oven] [--count 25] \
      [--icon gtceu:coke_oven] [--deps <id>,<id>] [--optional] \
      [--xp 100] [--reward-item gtceu:copper_credit:8] [--dry-run]
  python scripts/quest_lab/ftbq.py lint [--strict] [--json]
  python scripts/quest_lab/ftbq.py runtime-check [--runtime <client directory>]
"""

from __future__ import annotations

import argparse
import json
import re
import secrets
import sys
from pathlib import Path

# --------------------------------------------------------------------------
# SNBT parsing (FTB dialect: optional commas, d/L/f suffixes, ' or " strings)
# --------------------------------------------------------------------------


class SnbtError(Exception):
    pass


_WS = " \t\r\n"
_UNQUOTED_STOP = _WS + ",}]"


class _Parser:
    def __init__(self, text: str, origin: str):
        self.s = text
        self.i = 0
        self.line = 1
        self.origin = origin

    def _err(self, msg: str) -> SnbtError:
        return SnbtError(f"{self.origin}: line {self.line}: {msg}")

    def _peek(self) -> str:
        return self.s[self.i] if self.i < len(self.s) else ""

    def _next(self) -> str:
        c = self.s[self.i]
        self.i += 1
        if c == "\n":
            self.line += 1
        return c

    def _skip_ws(self) -> None:
        while self.i < len(self.s) and self.s[self.i] in _WS:
            self._next()

    def _skip_optional_commas(self) -> None:
        self._skip_ws()
        while self._peek() == ",":
            self._next()
            self._skip_ws()

    def parse_root(self):
        self._skip_ws()
        v = self._parse_value()
        self._skip_ws()
        if self.i < len(self.s):
            raise self._err(f"trailing data at offset {self.i}")
        return v

    def _parse_value(self):
        c = self._peek()
        if c == "{":
            return self._parse_compound()
        if c == "[":
            return self._parse_list()
        if c in "\"'":
            return self._parse_string()
        return self._parse_unquoted()

    def _parse_compound(self) -> dict:
        self._next()  # {
        out: dict = {}
        self._skip_optional_commas()
        while self._peek() != "}":
            if self.i >= len(self.s):
                raise self._err("unterminated compound")
            c = self._peek()
            if c in "\"'":
                key = self._parse_string()
            else:
                key = self._read_key_word()
            if not key:
                raise self._err("empty key")
            self._skip_ws()
            if self._peek() != ":":
                raise self._err(f"expected ':' after key {key!r}")
            self._next()
            self._skip_optional_commas()
            out[key] = self._parse_value()
            self._skip_optional_commas()
        self._next()  # }
        return out

    def _parse_list(self) -> list:
        self._next()  # [
        out: list = []
        self._skip_optional_commas()
        while self._peek() != "]":
            if self.i >= len(self.s):
                raise self._err("unterminated list")
            out.append(self._parse_value())
            self._skip_optional_commas()
        self._next()  # ]
        return out

    def _parse_string(self) -> str:
        quote = self._next()
        buf = []
        while True:
            if self.i >= len(self.s):
                raise self._err("unterminated string")
            c = self._next()
            if c == "\\":
                if self.i >= len(self.s):
                    raise self._err("dangling escape")
                buf.append(self._next())
            elif c == quote:
                break
            else:
                buf.append(c)
        return "".join(buf)

    def _read_key_word(self) -> str:
        start = self.i
        while self.i < len(self.s) and self.s[self.i] not in _WS and self.s[self.i] != ":":
            self._next()
        return self.s[start : self.i]

    def _read_unquoted(self) -> str:
        start = self.i
        while self.i < len(self.s) and self.s[self.i] not in _UNQUOTED_STOP:
            self._next()
        return self.s[start : self.i]

    def _parse_unquoted(self):
        raw = self._read_unquoted()
        if not raw:
            raise self._err(f"unexpected character {self._peek()!r}")
        return _coerce(raw)


def _coerce(raw: str):
    if raw in ("true", "false"):
        return raw  # keep booleans as text; nothing in the lint needs logic on them
    m = re.fullmatch(r"(-?\d+)[bBsSlL]", raw)
    if m:
        return int(m.group(1))
    m = re.fullmatch(r"(-?\d+\.\d*|-?\.\d+|-?\d+)[fFdD]", raw)
    if m:
        return float(m.group(1))
    if re.fullmatch(r"-?\d+", raw):
        return int(raw)
    if re.fullmatch(r"-?(\d+\.\d*|\.\d+)", raw):
        return float(raw)
    return raw


def parse_snbt(text: str, origin: str = "<snbt>"):
    return _Parser(text, origin).parse_root()


# --------------------------------------------------------------------------
# Small file helpers (EOL/encoding preserving)
# --------------------------------------------------------------------------


def read_file(path: Path):
    data = path.read_bytes()
    eol = "\r\n" if b"\r\n" in data else "\n"
    return data.decode("utf-8"), eol


def write_file(path: Path, text: str) -> None:
    path.write_bytes(text.encode("utf-8"))


# --------------------------------------------------------------------------
# Quest book model
# --------------------------------------------------------------------------

_LANG_KEY_RE = re.compile(r"\{([A-Za-z0-9_.]+)\}")
_ITEM_RE = re.compile(r"^#?[a-z0-9_.\-]+:[a-z0-9_/\.\-]+$")


class Chapter:
    def __init__(self, path: Path, data: dict, filename: str):
        self.path = path
        self.data = data
        self.filename = filename

    @property
    def chapter_id(self) -> str:
        return str(self.data.get("id", ""))

    @property
    def quests(self) -> list:
        return list(self.data.get("quests", []))


class QuestBook:
    def __init__(self, repo_root: Path):
        self.repo_root = repo_root
        self.quests_root = repo_root / "gte" / "overrides" / "config" / "ftbquests" / "quests"
        self.lang_root = (
            repo_root / "gte" / "overrides" / "config" / "openloader" / "resources" / "quests" / "assets" / "gte" / "lang"
        )
        if not self.quests_root.is_dir():
            raise SystemExit(f"quests root not found: {self.quests_root}")
        self.parse_errors: list[str] = []
        self.groups: dict = {}
        self.data: dict = {}
        self.chapters: list[Chapter] = []
        self.reward_tables: list[dict] = []
        self._load()
        self.lang_zh = self._load_lang_json("zh_cn")
        self.lang_en = self._load_lang_json("en_us")

    # -- loading -----------------------------------------------------------

    def _load_snbt(self, path: Path):
        text, _ = read_file(path)
        try:
            return parse_snbt(text, str(path.relative_to(self.repo_root)))
        except SnbtError as e:
            self.parse_errors.append(str(e))
            return None

    def _load(self):
        groups_path = self.quests_root / "chapter_groups.snbt"
        if groups_path.exists():
            parsed = self._load_snbt(groups_path)
            if parsed:
                self.groups = parsed
        data_path = self.quests_root / "data.snbt"
        if data_path.exists():
            parsed = self._load_snbt(data_path)
            if parsed:
                self.data = parsed
        for path in sorted((self.quests_root / "chapters").glob("*.snbt")):
            parsed = self._load_snbt(path)
            if parsed is not None:
                self.chapters.append(Chapter(path, parsed, path.stem))
        rt_dir = self.quests_root / "reward_tables"
        if rt_dir.is_dir():
            for path in sorted(rt_dir.glob("*.snbt")):
                parsed = self._load_snbt(path)
                if parsed is not None:
                    self.reward_tables.append(parsed)

    def _load_lang_json(self, locale: str) -> dict:
        path = self.lang_root / f"{locale}.json"
        if not path.exists():
            return {}
        try:
            return json.loads(path.read_bytes().decode("utf-8"))
        except (json.JSONDecodeError, UnicodeDecodeError) as e:
            self.parse_errors.append(f"{path}: {e}")
            return {}

    # -- derived views -----------------------------------------------------

    def all_quests(self):
        for ch in self.chapters:
            for q in ch.quests:
                yield ch, q

    def quest_index(self) -> dict:
        idx: dict = {}
        for ch, q in self.all_quests():
            idx.setdefault(str(q.get("id", "")), []).append((ch, q))
        return idx

    def used_ids(self) -> set:
        ids = {str(self.data.get("id", "")), str(self.groups.get("id", ""))}
        for ch in self.chapters:
            ids.add(ch.chapter_id)
            for q in ch.quests:
                ids.add(str(q.get("id", "")))
                for t in q.get("tasks", []) or []:
                    ids.add(str(t.get("id", "")))
                for r in q.get("rewards", []) or []:
                    ids.add(str(r.get("id", "")))
        for rt in self.reward_tables:
            ids.add(str(rt.get("id", "")))
        return {i for i in ids if i}

    def fresh_id(self) -> str:
        used = self.used_ids()
        while True:
            # FTB Quests parseCodeString uses Long.parseLong(text, 16), not
            # parseUnsignedLong. Zero or a set sign bit is not a usable ID.
            value = secrets.randbits(63)
            cand = f"{value:016X}"
            if value and cand not in used:
                return cand

    # -- text resolution ---------------------------------------------------

    def resolve(self, text, locale: str = "zh") -> str:
        if not isinstance(text, str):
            return ""
        lang = self.lang_zh if locale == "zh" else self.lang_en
        return _LANG_KEY_RE.sub(lambda m: str(lang.get(m.group(1), m.group(0))), text)

    def quest_text(self, q: dict, field: str, locale: str = "zh") -> str:
        raw = q.get(field, "")
        if isinstance(raw, list):
            raw = " / ".join(str(x) for x in raw)
        return self.resolve(raw, locale)

    def chapter_text(self, ch: Chapter, field: str, locale: str = "zh") -> str:
        return self.resolve(ch.data.get(field, ""), locale)


# --------------------------------------------------------------------------
# Rendering helpers (FTB Library style: alphabetical keys, tabs, d suffixes)
# --------------------------------------------------------------------------


def _snbt_str(value: str) -> str:
    return '"' + value.replace("\\", "\\\\").replace('"', '\\"') + '"'


def _fmt_double(x: float) -> str:
    s = f"{x:.6f}".rstrip("0").rstrip(".")
    if s in ("", "-"):
        s = "0"
    return s + "d"


def _fmt_int(n: int) -> str:
    return f"{n}L" if n > 2**31 - 1 else str(n)


def _snbt_array(values: list, indent: str) -> str:
    """FTB writer style: single element inline, several elements one per line
    without commas (the reader accepts both)."""
    if len(values) == 1:
        return f"[{values[0]}]"
    inner = "".join(f"{indent}\t{v}\n" for v in values)
    return f"[\n{inner}{indent}]"


def render_quest_block(args, qid: str, task_id: str, reward_ids: list, chapter_filename: str, deps: list) -> str:
    """One quest compound for insertion into the chapter's `quests: [...]` list.

    Block sits at 2 tabs, fields at 3 tabs, keys alphabetical — matching what
    the in-game editor writes out.
    """
    t = "\t" * 3
    tf = t + "\t"
    key_prefix = f"gte.{chapter_filename}.quests.{qid}"
    lines = ["\t\t{"]
    if deps:
        lines.append(f"{t}dependencies: {_snbt_array([_snbt_str(d) for d in deps], t)}")
    desc_keys = [f"{{gte.{chapter_filename}.quests.{qid}.description{i}}}" for i in range(len(args.desc_zh or []))]
    if desc_keys:
        lines.append(f"{t}description: {_snbt_array([_snbt_str(k) for k in desc_keys], t)}")
    icon = args.icon or (args.item if args.task == "item" else None)
    if icon:
        lines.append(f"{t}icon: {_snbt_str(icon)}")
    lines.append(f"{t}id: {_snbt_str(qid)}")
    if args.optional:
        lines.append(f"{t}optional: true")
    reward_specs = []
    if args.xp:
        reward_specs.append(("xp", args.xp, None))
    for spec in args.reward_item or []:
        m = re.fullmatch(r"(.+):(\d+)", spec)
        if m and spec.count(":") == 2:
            reward_specs.append(("item", m.group(1), int(m.group(2))))
        else:
            reward_specs.append(("item", spec, 1))
    if reward_specs:
        lines.append(f"{t}rewards: [")
        for i, (rtype, a, b) in enumerate(reward_specs):
            rid = reward_ids[i]
            lines.append(f"{t}\t{{")
            if rtype == "xp":
                lines.append(f"{tf}\tid: {_snbt_str(rid)}")
                lines.append(f'{tf}\ttype: "xp"')
                lines.append(f"{tf}\txp: {a}")
            else:
                if b != 1:
                    lines.append(f"{tf}\tcount: {_fmt_int(b)}")
                lines.append(f"{tf}\tid: {_snbt_str(rid)}")
                lines.append(f"{tf}\titem: {_snbt_str(a)}")
                lines.append(f'{tf}\ttype: "item"')
            lines.append(f"{t}\t}}")
        lines.append(f"{t}]")
    if args.subtitle_zh:
        lines.append(f"{t}subtitle: {_snbt_str('{' + key_prefix + '.subtitle}')}")
    task_fields = []
    if args.task == "item" and args.count != 1:
        task_fields.append(f"{tf}count: {_fmt_int(args.count)}")
    task_fields.append(f"{tf}id: {_snbt_str(task_id)}")
    if args.task == "item":
        task_fields.append(f"{tf}item: {_snbt_str(args.item)}")
    task_fields.append(f"{tf}type: {_snbt_str(args.task)}")
    lines.append(f"{t}tasks: [{{\n" + "\n".join(task_fields) + f"\n{t}}}]")
    lines.append(f"{t}title: {_snbt_str('{' + key_prefix + '.title}')}")
    lines.append(f"{t}x: {_fmt_double(args.x)}")
    lines.append(f"{t}y: {_fmt_double(args.y)}")
    lines.append("\t\t}")
    return "\n".join(lines)


# --------------------------------------------------------------------------
# Lang JSON surgical upsert (4-space indent, "k":"v", preserves EOL)
# --------------------------------------------------------------------------


def upsert_lang_json(path: Path, key: str, value: str) -> str:
    """Insert or replace one key. Returns 'inserted' | 'replaced' | 'unchanged'.

    The pack's lang JSONs are 4-space indented, tight colon ("k":"v"), CRLF,
    unsorted, and end without a trailing newline. Rewriting the whole file
    with json.dump would churn every line, so edit surgically.
    """
    if not path.exists():
        text, eol = "", "\r\n"
    else:
        text, eol = read_file(path)
    try:
        existing = json.loads(text) if text.strip() else {}
    except json.JSONDecodeError:
        raise SystemExit(f"{path}: 不是合法 JSON, 先修复再运行")
    new_escaped = json.dumps(value, ensure_ascii=False)[1:-1]
    if existing.get(key) == value:
        return "unchanged"
    if existing:
        pattern = re.compile(r'(\r?\n[ \t]*)"' + re.escape(key) + r'"(\s*:\s*)"(?:[^"\\]|\\.)*"')
        if pattern.search(text):
            text = pattern.sub(lambda m: f'{m.group(1)}"{key}"{m.group(2)}"{new_escaped}"', text, count=1)
            write_file(path, text)
            return "replaced"
        stripped = text.rstrip()
        if not stripped.endswith("}"):
            raise SystemExit(f"{path}: 意外的文件结尾 ({stripped[-1:]!r})")
        body = stripped[:-1].rstrip()
        if body and not body.endswith(","):
            body += ","
        write_file(path, f'{body}{eol}    "{key}":"{new_escaped}"{eol}}}')
        return "inserted"
    write_file(path, f'{{{eol}    "{key}":"{new_escaped}"{eol}}}')
    return "inserted"


# --------------------------------------------------------------------------
# chapter quests-list insertion
# --------------------------------------------------------------------------


def find_quests_list_close(lines: list) -> int:
    """Index of the '\t]' line closing the chapter's 'quests: [' list."""
    open_idx = None
    for i, l in enumerate(lines):
        if re.match(r"^\tquests: \[$", l):
            open_idx = i
            break
    if open_idx is None:
        raise SystemExit("章节文件没有 '\\tquests: [' 列表 (旧格式?)")
    depth = 0
    for i in range(open_idx, len(lines)):
        s = lines[i].strip()
        depth += s.count("{") + s.count("[") - s.count("}") - s.count("]")
        if i > open_idx and depth == 0 and s == "]":
            return i
    raise SystemExit("'quests: [' 列表未闭合")


# --------------------------------------------------------------------------
# Commands
# --------------------------------------------------------------------------


def cmd_stats(book: QuestBook, args) -> int:
    print(f"任务树: {book.quests_root.relative_to(book.repo_root)}")
    print(
        f"data.snbt: version={book.data.get('version', '?')} "
        f"progression_mode={book.data.get('progression_mode', '?')}"
    )
    group_names = {str(g.get("id", "")): str(g.get("title", "")) for g in book.groups.get("chapter_groups", [])}
    total = 0
    print()
    print(f"{'章节文件':<26} {'顺序':>4} {'任务':>4} {'可选':>4}  {'分组':<12} 标题")
    for ch in sorted(book.chapters, key=lambda c: (c.data.get("order_index", 0), c.filename)):
        qs = ch.quests
        opt = sum(1 for q in qs if q.get("optional"))
        total += len(qs)
        gtitle = book.resolve(group_names.get(str(ch.data.get("group", "")), "?"))
        ctitle = book.chapter_text(ch, "title")
        print(f"{ch.filename:<26} {ch.data.get('order_index', '?'):>4} {len(qs):>4} {opt:>4}  {gtitle:<12} {ctitle}")
    print(f"\n合计: {len(book.chapters)} 章节, {total} 任务, {len(book.reward_tables)} 奖励表")
    print(f"openloader lang: zh_cn={len(book.lang_zh)} keys, en_us={len(book.lang_en)} keys")
    return 0


def cmd_list(book: QuestBook, args) -> int:
    needle = (args.search or "").lower()
    shown = 0
    for ch in book.chapters:
        if args.chapter and ch.filename != args.chapter and ch.path.name != args.chapter:
            continue
        for q in ch.quests:
            if needle:
                hay = " ".join(
                    str(x)
                    for x in (
                        q.get("id", ""),
                        q.get("title", ""),
                        q.get("subtitle", ""),
                        book.quest_text(q, "title"),
                        book.quest_text(q, "title", "en"),
                        book.quest_text(q, "subtitle"),
                    )
                    if x
                ).lower()
                if needle not in hay:
                    continue
            flags = "".join(
                m for m, on in (("O", q.get("optional")), ("R", q.get("can_repeat")), ("H", q.get("hidden"))) if on
            )
            title = book.quest_text(q, "title")
            print(f"{q.get('id', '?')}  [{ch.filename}]  ({q.get('x', '?')}, {q.get('y', '?')})  {flags:<3} {title}")
            shown += 1
    print(f"-- {shown} 个任务", file=sys.stderr)
    return 0


def cmd_show(book: QuestBook, args) -> int:
    qidx = book.quest_index()
    hits = qidx.get(args.quest_id, [])
    if not hits:
        for ch, q in book.all_quests():
            if args.quest_id.lower() in str(q.get("id", "")).lower():
                hits.append((ch, q))
    if not hits:
        print(f"找不到任务: {args.quest_id} (用 list --search 按标题找 id)", file=sys.stderr)
        return 1
    titles = {qid: (qs[0][1] if qs else {}) for qid, qs in qidx.items()}
    for ch, q in hits:
        print(f"章节: {ch.filename} ({ch.path.name})")
        print(f"任务 id: {q.get('id')}  位置: ({q.get('x')}, {q.get('y')})")
        for flag in ("optional", "can_repeat", "hidden", "shape", "icon"):
            v = q.get(flag)
            if v not in (None, False, ""):
                print(f"{flag}: {v}")
        print(f"标题: {book.quest_text(q, 'title')}  |  {book.quest_text(q, 'title', 'en')}")
        if q.get("subtitle"):
            print(f"副标题: {book.quest_text(q, 'subtitle')}  |  {book.quest_text(q, 'subtitle', 'en')}")
        desc = q.get("description", [])
        if isinstance(desc, str):
            desc = [desc]
        for i, d in enumerate(desc):
            print(f"描述{i}: {book.resolve(d)}")
            print(f"        en: {book.resolve(d, 'en')}")
        deps = q.get("dependencies", []) or []
        if deps:
            print("前置依赖:")
            for d in deps:
                dd = titles.get(str(d))
                print(f"  <- {d}  {book.quest_text(dd, 'title') if dd else '(未知!)'}")
        children = [qq for _, qq in book.all_quests() if str(q.get("id")) in [str(x) for x in (qq.get("dependencies", []) or [])]]
        if children:
            print("后续任务:")
            for c in children:
                print(f"  -> {c.get('id')}  {book.quest_text(c, 'title')}")
        for label, key in (("任务", "tasks"), ("奖励", "rewards")):
            items = q.get(key, []) or []
            if not items:
                continue
            print(f"{label}:")
            for it in items:
                bits = [f"id={it.get('id')}", f"type={it.get('type')}"]
                if it.get("item"):
                    bits.append(f"item={it['item']}")
                if it.get("count", 1) != 1:
                    bits.append(f"count={it['count']}")
                if it.get("xp") is not None:
                    bits.append(f"xp={it['xp']}")
                if it.get("command"):
                    bits.append(f"command={it['command']}")
                if it.get("title"):
                    bits.append(f"title={book.resolve(it['title'])}")
                print("  - " + "  ".join(str(b) for b in bits))
        print()
    return 0


def cmd_id(book: QuestBook, args) -> int:
    for _ in range(args.count):
        print(book.fresh_id())
    return 0


def cmd_add_quest(book: QuestBook, args) -> int:
    ch = next((c for c in book.chapters if c.filename == args.chapter or c.path.name == args.chapter), None)
    if ch is None:
        print(f"找不到章节: {args.chapter} (用 stats 查看章节文件名)", file=sys.stderr)
        return 1
    if args.task == "item" and not args.item:
        print("item 任务需要 --item <namespace:path>", file=sys.stderr)
        return 1
    qidx = book.quest_index()
    deps = [d.strip() for d in (args.deps or "").split(",") if d.strip()]
    unknown = [d for d in deps if d not in qidx]
    if unknown:
        print(f"依赖的任务 id 不存在: {', '.join(unknown)} (用 list / show 查 id)", file=sys.stderr)
        return 1
    for c2, q2 in book.all_quests():
        if c2.filename == ch.filename and abs(float(q2.get("x", 9e9)) - args.x) < 1e-9 and abs(float(q2.get("y", 9e9)) - args.y) < 1e-9:
            print(f"网格位置已被占用: {ch.filename} ({args.x}, {args.y}) = {q2.get('id')} {book.quest_text(q2, 'title')}", file=sys.stderr)
            return 1
    qid = book.fresh_id()
    n_rewards = (1 if args.xp else 0) + len(args.reward_item or [])
    reward_ids = [book.fresh_id() for _ in range(n_rewards)]
    task_id = book.fresh_id()

    key_prefix = f"gte.{ch.filename}.quests.{qid}"
    lang_entries = [(f"{key_prefix}.title", args.title_zh, args.title_en or args.title_zh)]
    if args.subtitle_zh:
        lang_entries.append((f"{key_prefix}.subtitle", args.subtitle_zh, args.subtitle_en or args.subtitle_zh))
    for i, d in enumerate(args.desc_zh or []):
        en = args.desc_en[i] if args.desc_en and i < len(args.desc_en) else d
        lang_entries.append((f"{key_prefix}.description{i}", d, en))

    block = render_quest_block(args, qid, task_id, reward_ids, ch.filename, deps)
    zh_path = book.lang_root / "zh_cn.json"
    en_path = book.lang_root / "en_us.json"

    print(f"新任务 id: {qid}  (task {task_id})")
    print(f"章节: {ch.filename}  位置: ({args.x}, {args.y})")
    print()
    print(block)
    print()
    for key, zh, en in lang_entries:
        print(f"  zh_cn  {key} = {zh}")
        print(f"  en_us  {key} = {en}")
    if args.dry_run:
        print("\n[dry-run] 未写入任何文件")
        return 0

    text, eol = read_file(ch.path)
    lines = text.split(eol)
    close = find_quests_list_close(lines)
    lines[close:close] = block.split("\n")
    write_file(ch.path, eol.join(lines))
    print(f"\n已写入 {ch.path.relative_to(book.repo_root)}")
    for key, zh, en in lang_entries:
        print(f"  {key}: zh_cn={upsert_lang_json(zh_path, key, zh)} en_us={upsert_lang_json(en_path, key, en)}")
    print("\n后续: 游戏内 /ftbquests reload 预览; de/es/fr/... 其他语言由翻译管线补齐")
    return 0


# --------------------------------------------------------------------------
# lint
# --------------------------------------------------------------------------


def referenced_lang_keys(book: QuestBook) -> set[str]:
    keys = set()

    def collect(value):
        if isinstance(value, str):
            keys.update(m.group(1) for m in _LANG_KEY_RE.finditer(value))
        elif isinstance(value, list):
            for child in value:
                collect(child)
        elif isinstance(value, dict):
            for child in value.values():
                collect(child)

    for chapter in book.chapters:
        collect(chapter.data)
    return keys


def cmd_runtime_check(book: QuestBook, args) -> int:
    """Check the files Minecraft actually reads, not only the repository source."""
    runtime = Path(args.runtime).resolve() if args.runtime else book.repo_root / "run/client"
    lang_root = runtime / "config/openloader/resources/quests/assets/gte/lang"
    keys = referenced_lang_keys(book)
    errors = []
    for locale, expected in (("zh_cn", book.lang_zh), ("en_us", book.lang_en)):
        path = lang_root / f"{locale}.json"
        try:
            actual = json.loads(path.read_bytes().decode("utf-8"))
        except (OSError, ValueError) as error:
            errors.append(f"无法读取运行时语言资源 {path}: {error}")
            continue
        for key in sorted(keys & expected.keys()):
            if key not in actual:
                errors.append(f"运行时 {locale} 缺少词条: {key}")
            elif actual[key] != expected[key]:
                errors.append(f"运行时 {locale} 词条与仓库不同: {key}")
    for error in errors[:20]:
        print(f"  ERROR {error}")
    if len(errors) > 20:
        print(f"  ... 还有 {len(errors) - 20} 个运行时语言资源问题")
    print(f"runtime-check: {'FAIL' if errors else 'OK'} ({len(errors)} errors); {lang_root}")
    if not errors:
        print("文件已同步；已打开的客户端需 F3+T 重载资源，任务树修改另用 /ftbquests reload。")
    return 2 if errors else 0


def cmd_lint(book: QuestBook, args) -> int:
    errors: list[str] = []
    warnings: list[str] = []

    for e in book.parse_errors:
        errors.append(f"SNBT/JSON 解析失败: {e}")

    # -- id uniqueness ------------------------------------------------------
    for object_id in sorted(book.used_ids()):
        if not re.fullmatch(r"[0-7][0-9A-Fa-f]{15}", object_id) or int(object_id, 16) == 0:
            errors.append(f"FTB 无法读取对象 id (必须为非零正 long): {object_id}")
    seen: dict = {}
    for ch in book.chapters:
        cid = ch.chapter_id
        if cid:
            key = cid.upper()
            if key in seen:
                errors.append(f"章节 id 重复: {cid} ({ch.filename} 与 {seen[key]})")
            seen[key] = ch.filename
    qidx = book.quest_index()
    for qid, occ in qidx.items():
        if len(occ) > 1:
            files = ", ".join(c.filename for c, _ in occ)
            errors.append(f"任务 id 重复: {qid} ({files})")
    rt_ids = [str(rt.get("id", "")) for rt in book.reward_tables]
    if len(rt_ids) != len({i.upper() for i in rt_ids}):
        errors.append("奖励表 id 重复")

    # -- dependencies -------------------------------------------------------
    # FTB only resolves quest-id deps; a dep pointing at a task/reward id is
    # silently ignored by the loader (quest never unlocks under linear mode).
    sub_id_index: dict = {}
    for ch, q in book.all_quests():
        for kind in ("tasks", "rewards"):
            for it in q.get(kind, []) or []:
                sub_id_index.setdefault(str(it.get("id", "")), []).append(
                    f"{kind[:-1]} of {ch.filename}/{q.get('id')}"
                )
    for ch, q in book.all_quests():
        qid = str(q.get("id", "?"))
        for d in q.get("dependencies", []) or []:
            d = str(d)
            if d == qid:
                errors.append(f"自依赖: {ch.filename}/{qid}")
            elif d not in qidx:
                if d in sub_id_index:
                    errors.append(f"悬空依赖 (指到了 {sub_id_index[d][0]} 的 id, 应改为其所属任务 id): {ch.filename}/{qid} -> {d}")
                else:
                    errors.append(f"悬空依赖: {ch.filename}/{qid} -> {d}")

    # -- dependency cycles --------------------------------------------------
    adj: dict = {}
    for ch, q in book.all_quests():
        adj.setdefault(str(q.get("id", "")), []).extend(str(d) for d in (q.get("dependencies", []) or []))
    GRAY, BLACK = 1, 2
    color: dict = {}
    cycles: list = []

    def dfs(u: str, stack: list) -> None:
        color[u] = GRAY
        for v in adj.get(u, []):
            if v not in qidx:
                continue
            c = color.get(v, 0)
            if c == GRAY:
                cycles.append(stack + [v])
            elif c == 0:
                dfs(v, stack + [v])
        color[u] = BLACK

    for root in list(adj):
        if color.get(root, 0) == 0:
            dfs(root, [root])
    for cyc in cycles[:5]:
        chain = " -> ".join(
            f"{n}[{book.quest_text(qidx[n][0][1], 'title') if n in qidx else '?'}]" for n in cyc
        )
        errors.append(f"依赖环: {chain}")

    # -- chapter group refs -------------------------------------------------
    group_ids = {str(g.get("id", "")) for g in book.groups.get("chapter_groups", [])}
    for ch in book.chapters:
        g = str(ch.data.get("group", ""))
        if g and g not in group_ids:
            errors.append(f"章节 {ch.filename} 引用了不存在的分组 {g}")

    # -- {gte.*} translation keys -------------------------------------------
    # recurse the whole chapter tree: quest texts, image hovers, task titles
    used_keys = referenced_lang_keys(book)
    missing_zh = sorted(k for k in used_keys if k not in book.lang_zh)
    missing_en = sorted(k for k in used_keys if k not in book.lang_en)
    for k in missing_zh[:20]:
        errors.append(f"翻译键缺少 zh_cn 词条: {k}")
    if len(missing_zh) > 20:
        errors.append(f"... 还有 {len(missing_zh) - 20} 个缺 zh_cn 的键")
    for k in missing_en[:20]:
        warnings.append(f"翻译键缺少 en_us 词条: {k}")
    if len(missing_en) > 20:
        warnings.append(f"... 还有 {len(missing_en) - 20} 个缺 en_us 的键")
    # FTB resolves {key} through I18n's no-argument formatting path. A literal
    # percentage must be doubled or the UI displays "Format error: ...".
    for key in sorted(used_keys):
        for locale, lang in (("zh_cn", book.lang_zh), ("en_us", book.lang_en)):
            if re.search(r"(?<!%)%(?!%)", str(lang.get(key, ""))):
                warnings.append(f"FTB 词条含未转义百分号 ({locale}): {key}; 字面 % 应写为 %%")

    # -- item id format ------------------------------------------------------
    # `item` may be a plain "ns:path" string or a full item-stack compound
    # {Count:..., id: 'ns:path', tag: {...}}; FTB writes NBT-holding items
    # (charged tools, cells) the second way.
    def item_label(item) -> str:
        if isinstance(item, dict):
            return str(item.get("id", item))
        return str(item)

    def check_item(item, where: str) -> None:
        if item is None:
            return
        if isinstance(item, dict) and "id" not in item:
            warnings.append(f"物品串缺少 id 字段: {where}")
            return
        label = item_label(item)
        if not _ITEM_RE.match(label):
            warnings.append(f"物品 id 格式可疑: {where} item={label}")

    for ch, q in book.all_quests():
        where_q = f"{ch.filename}/{q.get('id')}"
        for label, group in (("task", q.get("tasks", []) or []), ("reward", q.get("rewards", []) or [])):
            for it in group:
                check_item(it.get("item"), f"{where_q} {label}")

    # -- x/y grid collisions -------------------------------------------------
    for ch in book.chapters:
        seen_xy: dict = {}
        for q in ch.quests:
            key = (str(q.get("x")), str(q.get("y")))
            if key in seen_xy:
                errors.append(f"网格重叠: {ch.filename} {key} 上有 {seen_xy[key]} 和 {q.get('id')}")
            else:
                seen_xy[key] = q.get("id")

    # -- zh/en parity beyond used keys ---------------------------------------
    for k in sorted(set(book.lang_zh) - set(book.lang_en))[:10]:
        warnings.append(f"zh_cn 独有键 (en_us 缺失): {k}")
    for k in sorted(set(book.lang_en) - set(book.lang_zh))[:10]:
        warnings.append(f"en_us 独有键 (zh_cn 缺失): {k}")

    # -- report ---------------------------------------------------------------
    if args.json:
        print(json.dumps({"errors": errors, "warnings": warnings}, ensure_ascii=False, indent=2))
    else:
        print(
            f"任务树: {len(book.chapters)} 章节, "
            f"{sum(len(c.quests) for c in book.chapters)} 任务, {len(book.reward_tables)} 奖励表; "
            f"{len(used_keys)} 个 {gte_key_count(used_keys)} 引用; data.snbt version={book.data.get('version', '?')}"
        )
        for e in errors:
            print(f"  ERROR {e}")
        for w in warnings:
            print(f"  warn  {w}")
        status = "FAIL" if errors else ("WARN" if warnings else "OK")
        print(f"lint: {status}  ({len(errors)} errors, {len(warnings)} warnings)")
    return 2 if errors else (1 if args.strict and warnings else 0)


def gte_key_count(used_keys) -> str:
    return "翻译键"


# --------------------------------------------------------------------------
# entry point
# --------------------------------------------------------------------------


def repo_root_default() -> Path:
    return Path(__file__).resolve().parents[2]


def main(argv=None) -> int:
    p = argparse.ArgumentParser(description="GTE FTB Quests CLI (scripts/quest_lab/ftbq.py)")
    p.add_argument("--repo", default=str(repo_root_default()), help="仓库根目录 (默认自动探测)")
    sub = p.add_subparsers(dest="cmd", required=True)

    sub.add_parser("stats", help="任务树总览")
    sp = sub.add_parser("list", help="列出/搜索任务")
    sp.add_argument("--chapter")
    sp.add_argument("--search")
    sp = sub.add_parser("show", help="按 id 查看任务详情 (含反向依赖)")
    sp.add_argument("quest_id")
    sp = sub.add_parser("id", help="生成不与现有 id 冲突的新 16 位十六进制 id")
    sp.add_argument("--count", type=int, default=1)
    sp = sub.add_parser("add-quest", help="向章节追加一个新任务并登记翻译键")
    sp.add_argument("--chapter", required=True, help="章节文件名 (如 tier_0)")
    sp.add_argument("--x", type=float, required=True)
    sp.add_argument("--y", type=float, required=True)
    sp.add_argument("--title-zh", required=True)
    sp.add_argument("--title-en")
    sp.add_argument("--subtitle-zh")
    sp.add_argument("--subtitle-en")
    sp.add_argument("--desc-zh", action="append", help="可重复: 每行一条描述")
    sp.add_argument("--desc-en", action="append")
    sp.add_argument("--task", choices=["item", "checkmark"], default="item")
    sp.add_argument("--item", help="item 任务的物品 id, 如 gtceu:coke_oven")
    sp.add_argument("--count", type=int, default=1)
    sp.add_argument("--icon", help="默认取任务物品")
    sp.add_argument("--deps", default="", help="逗号分隔的前置任务 id")
    sp.add_argument("--optional", action="store_true")
    sp.add_argument("--xp", type=int, help="追加一个 xp 奖励")
    sp.add_argument("--reward-item", action="append", help="追加一个物品奖励, 支持 id 或 id:数量")
    sp.add_argument("--dry-run", action="store_true")
    sp = sub.add_parser("lint", help="校验任务树 (解析/id/依赖环/翻译键/网格)")
    sp.add_argument("--strict", action="store_true", help="有 warning 也返回非零")
    sp.add_argument("--json", action="store_true")
    sp = sub.add_parser("runtime-check", help="检查客户端实际读取的任务语言资源是否同步")
    sp.add_argument("--runtime", help="客户端目录 (默认 <repo>/run/client)")

    args = p.parse_args(argv)
    book = QuestBook(Path(args.repo).resolve())
    return {
        "stats": cmd_stats,
        "list": cmd_list,
        "show": cmd_show,
        "id": cmd_id,
        "add-quest": cmd_add_quest,
        "lint": cmd_lint,
        "runtime-check": cmd_runtime_check,
    }[args.cmd](book, args)


if __name__ == "__main__":
    sys.exit(main())
