#!/usr/bin/env python3
"""
scripts/build_full_mod_pack.py
Build the full-mod client pack following CurseForge modpack format (manifest.json + overrides/mods/*.jar).

Format specification:
1. Root contains `manifest.json` (CurseForge format, Minecraft 1.20.1, Forge 47.4.1, Java 21, overrides: "overrides").
2. Root contains `modlist.html` (HTML list of bundled mods).
3. `overrides/` folder containing:
   - `overrides/mods/*.jar` (all pre-bundled runnable mods, no slim jars)
   - `overrides/config/`, `overrides/kubejs/`, `overrides/defaultconfigs/`, `overrides/patchouli_books/`, etc.
   - `overrides/README_安装必看.txt`
4. 1-click import into PCL2 / HMCL / Prism / MultiMC / CurseForge Launcher.

Usage:
    python scripts/build_full_mod_pack.py [version]
"""

import json
import os
import sys
import zipfile
from pathlib import Path

# Ensure UTF-8 output on all platforms
for _stream in (sys.stdout, sys.stderr):
    try:
        _stream.reconfigure(encoding="utf-8", errors="replace")
    except (AttributeError, ValueError):
        pass

ROOT = Path(__file__).parent.parent.resolve()
BUILD_DIR = ROOT / "build" / "artifacts"
OVERRIDES = ROOT / "gte" / "overrides"
PACK_TOML = ROOT / "gte" / "pack.toml"
MANIFEST_BASE = ROOT / "gte" / "curseforge_manifest.json"

sys.path.insert(0, str(Path(__file__).parent))
from pack_common import (  # noqa: E402
    CLIENT_SKIP_TOP,
    SLIM_JAR,
    SKIP_CONFIG_PREFIXES,
    SKIP_TOP_ALWAYS,
    read_pack_versions,
)

VERSION = sys.argv[1] if len(sys.argv) > 1 else "dev"


def should_skip_override(rel: Path) -> str | None:
    """Return reason if path should be excluded from overrides/, else None."""
    parts = rel.parts
    if not parts:
        return "empty path"
    if parts[0] in SKIP_TOP_ALWAYS or parts[0] == "saves":
        return f"{parts[0]}/ is not pack content"
    if ".git" in parts:
        return "vcs metadata"
    for prefix in SKIP_CONFIG_PREFIXES:
        if parts[: len(prefix)] == prefix:
            return "/".join(prefix) + "/ is local state"
    # Skip non-runnable slim jars
    if parts[0] == "mods" and SLIM_JAR.search(rel.name):
        return "slim jar is not runnable"
    return None


def generate_modlist_html(mod_names: list[str]) -> str:
    """Generate modlist.html listing all bundled mods."""
    items = [f"<li>{name}</li>" for name in sorted(mod_names)]
    return f"""<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>GTE Full-Mod Pack Mod List</title>
</head>
<body>
    <h1>GregTech Easy - Bundled Mods</h1>
    <ul>
        {"".join(items)}
    </ul>
</body>
</html>
"""


def render_readme(version: str, mc_version: str, forge_version: str) -> str:
    """Player-facing README for 1-click import and manual extraction."""
    return f"""====================================================
GregTech Easy (GTE) Full-Mod Client Pack v{version}
====================================================

本整合包遵循 CurseForge 规范结构，并【已内置全部模组与配置】。
支持启动器一键导入，无需额外手动下载模组。

【环境信息】
  Minecraft : {mc_version}
  Forge     : {forge_version}
  Java      : 21  <-- 必须使用 Java 21

【推荐使用方法：启动器一键导入（PCL2 / HMCL / Prism / MultiMC / CurseForge 通用）】
1. 打开启动器（如 PCL2、HMCL、Prism Launcher 等）。
2. 选择「导入整合包」或直接将本压缩包（GTE-FullMod-*.zip）拖拽进启动器窗口。
3. 启动器会自动根据 manifest.json 配置好 Minecraft {mc_version}、Forge {forge_version} 以及全部模组。
4. 确认分配内存建议 8G~12G，Java 指定为 Java 21。
5. 启动游戏即可游玩！

【手动解压安装方法】
1. 在启动器里新建一个 Minecraft {mc_version} 实例，并安装 Forge {forge_version}。
2. 将本压缩包内 overrides 文件夹下的全部内容（mods、config、kubejs 等）解压并合并到实例游戏目录（.minecraft/）。
3. 指定 Java 为 Java 21，启动游戏。

【开服】
请下载 GTE-Server-*.zip 服务端专用包，不要使用本客户端包。

祝您游戏愉快！
"""


def build_full_mod_pack(version: str) -> Path:
    mc_version, forge_version = read_pack_versions()
    out_zip = BUILD_DIR / f"GTE-FullMod-{version}.zip"
    BUILD_DIR.mkdir(parents=True, exist_ok=True)

    print(f"\n=======================================================")
    print(f" Building Full-Mod Client Pack (CurseForge Format + Mods): {out_zip.name}")
    print(f" Target: Minecraft {mc_version}, Forge {forge_version}, Java 21")
    print(f"=======================================================\n")

    manifest = {
        "minecraft": {
            "version": mc_version,
            "modLoaders": [
                {
                    "id": f"forge-{forge_version}",
                    "primary": True
                }
            ],
            "javaVersion": 21
        },
        "manifestType": "minecraftModpack",
        "manifestVersion": 1,
        "name": "GregTech Easy",
        "version": version,
        "author": "satou",
        "overrides": "overrides",
        "javaVersion": 21,
        "files": []
    }

    readme_content = render_readme(version, mc_version, forge_version)

    written_count = 0
    skipped_count = 0
    mods: list[str] = []
    top_levels: dict[str, int] = {}

    with zipfile.ZipFile(out_zip, "w", compression=zipfile.ZIP_DEFLATED, compresslevel=6) as zf:
        # 1. Write root manifest.json
        zf.writestr("manifest.json", json.dumps(manifest, indent=2, ensure_ascii=False))
        written_count += 1

        # 2. Write root README
        zf.writestr("README_安装必看.txt", readme_content)
        written_count += 1

        # 3. Write overrides tree
        if not OVERRIDES.is_dir():
            print(f"[ERROR] Missing overrides directory: {OVERRIDES}")
            sys.exit(1)

        for item in sorted(OVERRIDES.rglob("*")):
            if not item.is_file():
                continue
            rel = item.relative_to(OVERRIDES)
            skip_reason = should_skip_override(rel)
            if skip_reason:
                skipped_count += 1
                continue

            zip_entry = f"overrides/{rel.as_posix()}"
            zf.write(item, zip_entry)
            written_count += 1

            top = rel.parts[0]
            top_levels[top] = top_levels.get(top, 0) + 1

            if len(rel.parts) == 2 and rel.parts[0] == "mods" and rel.suffix.lower() == ".jar":
                mods.append(rel.name)

        # 4. Write modlist.html
        modlist_html = generate_modlist_html(mods)
        zf.writestr("modlist.html", modlist_html)
        written_count += 1

    print(f"Pack Summary:")
    print(f"  Total archive entries written : {written_count}")
    print(f"  Entries skipped (local/slim)  : {skipped_count}")
    for top in sorted(top_levels):
        print(f"    overrides/{top+'/' :<20} {top_levels[top]} files")
    print(f"  overrides/mods/*.jar          : {len(mods)}")
    for name in sorted(mods):
        print(f"    {name}")

    if not mods:
        print("[ERROR] No overrides/mods/*.jar in the pack; the pack would run with no mods.")
        out_zip.unlink(missing_ok=True)
        sys.exit(1)

    # Validate output
    validate_full_mod_pack(out_zip, len(mods))

    size_mb = out_zip.stat().st_size / 1024 / 1024
    print(f"\n[SUCCESS] Full-mod client pack created: {out_zip.name} ({size_mb:.2f} MB)")
    return out_zip


def validate_full_mod_pack(zip_path: Path, expected_mods_count: int) -> None:
    """Validate CurseForge format and bundled mods."""
    with zipfile.ZipFile(zip_path, "r") as zf:
        names = zf.namelist()
        if "manifest.json" not in names:
            print("[ERROR] manifest.json is missing from full-mod zip root!")
            sys.exit(1)
        if "modlist.html" not in names:
            print("[ERROR] modlist.html is missing from full-mod zip root!")
            sys.exit(1)

        mod_jars = [n for n in names if n.startswith("overrides/mods/") and n.endswith(".jar")]
        if len(mod_jars) != expected_mods_count:
            print(f"[ERROR] Expected {expected_mods_count} mods in overrides/mods/, found {len(mod_jars)}!")
            sys.exit(1)

        # Assert no top-level mods/ folder (must be inside overrides/)
        top_level_mods = [n for n in names if n.startswith("mods/")]
        if top_level_mods:
            print(f"[ERROR] Found top-level mods/ entries; must be in overrides/mods/!")
            sys.exit(1)

    print("  [Validation Passed] manifest.json present, CurseForge layout with full bundled mods verified.")


def main():
    build_full_mod_pack(VERSION)


if __name__ == "__main__":
    main()
