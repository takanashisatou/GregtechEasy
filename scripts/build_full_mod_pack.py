#!/usr/bin/env python3
"""
scripts/build_full_mod_pack.py
Build the full-mod client pack: every mod, config and script, at the top level.

This replaces the "lazy pack". That one shipped a nested .minecraft/ plus
run_game.bat, run_game.sh and gte_launcher.ps1 -- a 626-line PowerShell launcher
that downloaded a JDK, the vanilla client, ran the Forge installer and fetched
~3600 asset files. Maintaining a launcher is not the same job as building a
modpack, and every one of its failure modes ("double-clicking the bat does
nothing") landed on us rather than on a real launcher.

The full-mod pack is just the game content:

    mods/  config/  defaultconfigs/  kubejs/  resourcepacks/

Extract it into a launcher instance's game directory (the folder holding
.minecraft's contents), install Forge yourself, and play. Same shape as the
server pack, which makes both packs one code path.

Usage: python scripts/build_full_mod_pack.py [version]
"""
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent))

from pack_common import (  # noqa: E402
    BUILD_DIR,
    CLIENT_SKIP_TOP,
    build_pack,
    read_pack_versions,
)

VERSION = sys.argv[1] if len(sys.argv) > 1 else "dev"


def render_readme(version: str, mc_version: str, forge_version: str) -> str:
    """Player-facing README. Versions come from pack.toml, never hardcoded.

    This text used to hardcode Forge 47.3.0 while the pack installed 47.4.1, so
    the documentation and the game disagreed and the player had no way to tell
    which number was wrong.
    """
    return f"""====================================================
GregTech Easy (GTE) Full-Mod Client Pack v{version}
====================================================

本压缩包是完整的客户端游戏内容：全部模组、配置与魔改脚本。
不含启动器，也不含 Minecraft 本体和 Forge —— 这些由你的启动器负责。

【环境要求】
  Minecraft : {mc_version}
  Forge     : {forge_version}  <-- 必须是这个版本
  Java      : 21  <-- 不能用 Java 17 或 Java 8

Forge 版本是硬性的，不是建议值：
  - gtmthings 要求 Forge [{forge_version},)，低于它无法加载；
  - 而 47.4.10 自带 ASM 9.8 + coremods 5.2.4，会让 appliedenergistics2
    的 mixin 失配，游戏开不到主菜单。
{forge_version} 是目前唯一可用的版本。

【安装步骤（PCL2 / HMCL / Prism / MultiMC / 官方启动器通用）】
1. 在启动器里新建一个 Minecraft {mc_version} 实例，并安装 Forge {forge_version}。
2. 启动一次，确认能进主菜单（这一步排除启动器和 Java 的问题）。
3. 打开该实例的游戏目录（.minecraft 目录，启动器里一般有「打开文件夹」按钮）。
4. 把本压缩包里的 mods、config、defaultconfigs、kubejs 等文件夹
   【全部解压进去】，与已有的同名文件夹合并。
5. 在实例设置里把 Java 指定为 Java 21，内存建议 8G~12G。
6. 启动游戏。首次进入会生成配置，比平时慢一些。

【如果你想要启动器一键导入】
请下载 GTE-CurseForge-*.zip，在 CurseForge / PCL2 / HMCL / Prism / MultiMC
里选择「导入整合包」。那个包自带 manifest.json，启动器会自动装好 Forge。
本 full-mod 包是给已经会自己配实例的玩家用的。

【开服】
请下载 GTE-Server-*.zip，不要用这个包。

【常见问题】
- 进不去、报缺少 ldlib：检查 mods/ 里有没有名字带 -slim 的 jar。
  本包不含这类文件；如果有，是从别处混进来的，删掉即可。
  （-slim jar 不打包内嵌依赖，只给 Maven 使用者。）
- 崩溃并提到 mixin / AE2：几乎总是 Forge 版本不对，确认是 {forge_version}。
- 卡在加载界面：内存不足，调到 8G 以上。

祝您游戏愉快！
"""


def main() -> None:
    mc_version, forge_version = read_pack_versions()
    print(f"  pack targets Minecraft {mc_version} / Forge {forge_version}")

    readme = render_readme(VERSION, mc_version, forge_version)
    build_pack(
        out_zip=BUILD_DIR / f"GTE-FullMod-{VERSION}.zip",
        skip_top=CLIENT_SKIP_TOP,
        label="full-mod client pack",
        extra={"README_安装必看.txt": readme},
    )


if __name__ == "__main__":
    main()
