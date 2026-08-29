#!/usr/bin/env python3
"""
scripts/render_nightly_notes.py
Render the rolling nightly prerelease notes.

This lives in Python rather than inline in the workflow because GitHub Actions
writes a `run:` block to a BOM-less UTF-8 .ps1 file, and Windows PowerShell 5.1
decodes script files using the ANSI code page. Any non-ASCII character in the
script body is therefore mis-decoded before it is ever parsed, and CJK
punctuation decodes into byte sequences that break the parser outright:

    | 鏂囦欢 | 鐢ㄩ€?|
    Missing argument in parameter list.
    The string is missing the terminator: '.

Existing CJK *comments* in the workflow survive only because corrupting a
comment is harmless. Any Chinese text that has to reach a player must therefore
come from a file Python reads as UTF-8, which is exactly what this script is.

Usage: python scripts/render_nightly_notes.py <version> <sha> <run_id> <ref_name> <out_path>
"""
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent))

from pack_common import read_pack_versions  # noqa: E402

REPO = "takanashisatou/GregtechEasy"


def render(version: str, sha: str, run_id: str, ref_name: str,
           mc: str, forge: str) -> str:
    # The previous note was a single line ("Automated nightly build of ..."),
    # which left players to pick among three zips unaided. The guesses that cost
    # the most support time -- a client downloading the server pack, or taking
    # full-mod without realising it needs a pre-made instance -- look identical
    # to the right choice in an asset list, so spell it out.
    return f"""Automated nightly build of `{version}` from `{sha}`.

Built by [run {run_id}](https://github.com/{REPO}/actions/runs/{run_id}) on `{ref_name}`.

Rolling prerelease: every asset here is replaced on the next nightly run.

## 下载哪个

| 文件 | 用途 | 怎么用 |
|---|---|---|
| `GTE-FullMod-{version}.zip` | **全模组客户端包（推荐）** | 遵循 CurseForge 整合包规范并内置全部模组。在 PCL2 / HMCL / Prism / MultiMC / CurseForge 里选「导入整合包」，启动器会自动配置好 Forge {forge} 与全部模组 |
| `GTE-Server-{version}.zip` | 开服 | 解压到服务端根目录，`mods/` 就在根下，然后跑 `--installServer` |

其余 jar 是单模块产物，给开发者和 Maven 使用者。带 `-slim` / `-dev-slim` 的**不要**放进 `mods/`：它们故意不打包内嵌依赖，Forge 会因为缺少 `ldlib` 而启动失败。

## 环境

- Minecraft {mc}，Forge **{forge}**，Java **21**
- Forge 版本是硬性的：gtmthings 要求 `[{forge},)`，而 47.4.10 自带的 ASM 9.8 + coremods 5.2.4 会让 AE2 15.4.9 的 mixin 崩溃，游戏开不到主菜单

nightly 不发布到 CurseForge 平台，只在这里滚动更新。
"""


def main() -> None:
    if len(sys.argv) != 6:
        print(__doc__.strip().splitlines()[-1])
        sys.exit(2)

    version, sha, run_id, ref_name, out_path = sys.argv[1:6]
    mc, forge = read_pack_versions()
    notes = render(version, sha, run_id, ref_name, mc, forge)

    out = Path(out_path)
    out.parent.mkdir(parents=True, exist_ok=True)
    # newline="\n" and no BOM: gh sends the file as-is to the API.
    out.write_text(notes, encoding="utf-8", newline="\n")
    print(f"Wrote {len(notes)} chars of release notes to {out}")


if __name__ == "__main__":
    main()
