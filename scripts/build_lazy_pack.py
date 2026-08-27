#!/usr/bin/env python3
"""
scripts/build_lazy_pack.py
CI helper: 将项目打包成面向普通玩家的"开箱即用"免编译完整整合包（懒人包）
包含完整的 .minecraft 目录与所有预编译模组 jar、配置、魔改脚本，玩家解压直接拖入 PCL2 / HMCL 即可游玩。
运行方式: python scripts/build_lazy_pack.py [version]
"""
import os
import re
import shutil
import sys
import zipfile
from pathlib import Path

ROOT = Path(__file__).parent.parent.resolve()
BUILD_DIR = ROOT / "build" / "artifacts"
BUILD_DIR.mkdir(parents=True, exist_ok=True)

VERSION = sys.argv[1] if len(sys.argv) > 1 else "dev"
OUT_ZIP = BUILD_DIR / f"GTE-LazyPack-{VERSION}.zip"

# 匹配 gtecore-1.20.1-2.2.5.1-slim.jar / ...-dev-slim.jar，
# 但不误伤名字里正好含 "slim" 的第三方 mod。
SLIM_JAR = re.compile(r"-(dev-)?slim\.jar$", re.IGNORECASE)

README_CN = f"""====================================================
GregTech Easy (GTE) 完整懒人整合包 v{VERSION}
====================================================

【使用说明】
本整合包为已完成全量编译与配置的完整独立客户端，无需任何开发环境或编译工具。

────────────────────────────────────────────────────
方式一：双击 run_game.bat 直接开玩（无需启动器）
────────────────────────────────────────────────────
1. 把本压缩包【完整解压】到一个英文路径的文件夹（例如 D:\\GTE）。
   注意：run_game.bat、gte_launcher.ps1 和 .minecraft 必须在同一层目录里，
   不要只解压 .minecraft。
2. 双击 run_game.bat。
3. 第一次启动时脚本会自动完成以下工作（全部下载到 .minecraft 内）：
   - 找不到 Java 21 时提供自动下载（清华镜像 / Adoptium 官方）
   - 下载原版 Minecraft 1.20.1 客户端
   - 运行 Forge 47.3.0 官方安装器
   - 下载全部依赖库、native 库与资源文件（约 3600 个，取决于网速）
   - 询问你的游戏角色名（离线模式），保存在 .gte_username
4. 之后再次双击 run_game.bat 会跳过已下载的内容，直接进入游戏。

首次启动大约需要 5~20 分钟（视网络而定），中断后重新运行会自动续传。
脚本会自动检测本机代理端口（7890/7897/10809/10808）；没有代理时自动改用
BMCLAPI 镜像加速。

────────────────────────────────────────────────────
方式二：用启动器导入（PCL2 / HMCL / BakaXL / CurseForge App）
────────────────────────────────────────────────────
- 整体拖入：直接将本压缩包拖入 PCL2 / HMCL 界面，按提示导入。
- 解压即用：解压后在启动器里把游戏目录指向解压出来的 `.minecraft` 文件夹。

【Java 版本要求（极其重要）】
⚠️ 本整合包严格要求运行环境为 【Java 21 / JDK 21】！
⚠️ 切勿使用 Java 17 或 Java 8，否则游戏无法启动！
用启动器游玩时，请在版本设置里把 Java 路径指定为 Java 21。
推荐内存分配：8GB ~ 12GB（run_game.bat 会根据你的物理内存自动选择）。

【常见问题】
- 双击 run_game.bat 一闪而过：请在文件夹里按住 Shift 右键 →「在此处打开
  PowerShell 窗口」，然后输入 .\\run_game.bat 运行，即可看到完整报错信息。
- 想换角色名：删除 .gte_username 后重新运行。
- 想换 Java：运行 run_game.bat --reset-jdk 后重新运行。

祝您游戏愉快！
"""

# run_game.bat 是双模脚本：在源码仓库里走 Gradle 热编译，在懒人包里走
# gte_launcher.ps1 独立启动。懒人包缺了 gte_launcher.ps1 就等于双击没反应，
# 所以这里逐个校验，缺失即失败，而不是静默产出一个跑不起来的包。
LAUNCH_SCRIPTS = {
    "run_game.bat": ROOT / "run_game.bat",
    "run_game.sh": ROOT / "run_game.sh",
    "gte_launcher.ps1": ROOT / "scripts" / "gte_launcher.ps1",
}

PACK_TOML = ROOT / "gte" / "pack.toml"


def read_pack_versions():
    """从 gte/pack.toml 读出 minecraft / forge 版本。"""
    text = PACK_TOML.read_text(encoding="utf-8")
    mc = re.search(r'(?m)^\s*minecraft\s*=\s*"([^"]+)"', text)
    forge = re.search(r'(?m)^\s*forge\s*=\s*"([^"]+)"', text)
    if not mc or not forge:
        print(f"[ERROR] Cannot read minecraft/forge versions from {PACK_TOML}")
        sys.exit(1)
    return mc.group(1), forge.group(1)


def pin_launcher_versions(source: str, mc_version: str, forge_version: str) -> str:
    """把 pack.toml 的版本写进 launcher 里带走的常量。

    懒人包里没有 gte/pack.toml，launcher 只能靠自己那两行常量。如果它们和
    pack.toml 不一致，玩家装到的就是另一个 Forge —— 比如 47.4.10 会让
    appliedenergistics2 的 mixin 失配、开不到主菜单。所以这里在打包时改写，
    并且改不动就直接失败，绝不产出一个版本错位的包。
    """
    out, n_mc = re.subn(
        r"(?m)^\$MC_VERSION\s*=\s*'[^']*'",
        f"$MC_VERSION    = '{mc_version}'",
        source,
        count=1,
    )
    out, n_fg = re.subn(
        r"(?m)^\$FORGE_VERSION\s*=\s*'[^']*'",
        f"$FORGE_VERSION = '{forge_version}'",
        out,
        count=1,
    )
    if n_mc != 1 or n_fg != 1:
        print("[ERROR] Could not pin versions into gte_launcher.ps1 "
              f"(matched MC_VERSION={n_mc}, FORGE_VERSION={n_fg}).")
        print("        The $MC_VERSION / $FORGE_VERSION assignment lines changed shape.")
        sys.exit(1)
    return out

def main():
    print(f"Building Player Lazy Pack -> {OUT_ZIP}")

    mc_version, forge_version = read_pack_versions()
    print(f"  pack targets Minecraft {mc_version} / Forge {forge_version}")

    # 1. 确保 overrides/mods 存在
    overrides_dir = ROOT / "gte" / "overrides"
    mods_dest = overrides_dir / "mods"
    mods_dest.mkdir(parents=True, exist_ok=True)

    # 2. 从 gradle/libs 复制关键扩展模组 (GT--, GTMThings 等) 到 overrides/mods
    libs_dir = ROOT / "modules" / "gtecore" / "gradle" / "libs"
    if libs_dir.exists():
        for jar in libs_dir.glob("*.jar"):
            if "gtmthings" in jar.name.lower() or "gtnn" in jar.name.lower() or "jecharacters" in jar.name.lower():
                target = mods_dest / jar.name
                shutil.copy2(jar, target)
                print(f"  + Synced addon jar: {jar.name}")

    # 3. 从 submodule build/libs 收集最新编译的 core jars
    for mod_name in ["gtm-reborn", "gtecore"]:
        mod_build_libs = ROOT / "modules" / mod_name / "build" / "libs"
        if mod_build_libs.exists():
            for jar in mod_build_libs.glob("*.jar"):
                if not any(k in jar.name for k in ["-sources", "-dev", "-all", "-slim"]):
                    shutil.copy2(jar, mods_dest / jar.name)
                    print(f"  + Synced core jar: {jar.name}")

    # 3b. 清掉 mods/ 里遗留的 slim jar。它们曾被 i18n 步骤误提交进 git，
    #     留在这里会让 Forge 挑中缺依赖的 slim jar 而直接崩溃。
    for stale in sorted(mods_dest.glob("*.jar")):
        if SLIM_JAR.search(stale.name):
            stale.unlink()
            print(f"  - Removed non-runnable jar from mods/: {stale.name}")

    # 4. 打包完整的 .minecraft 目录结构
    with zipfile.ZipFile(OUT_ZIP, "w", compression=zipfile.ZIP_DEFLATED, compresslevel=6) as zf:
        # 写入说明文件
        zf.writestr("README_启动必看.txt", README_CN)
        zf.writestr(".minecraft/README_启动必看.txt", README_CN)

        # 携带本地启动脚本 + 独立启动器
        for script_name, script_path in LAUNCH_SCRIPTS.items():
            if not script_path.exists():
                print(f"[ERROR] Missing launch script: {script_path}")
                print("        The Lazy Pack would not be able to start without it.")
                sys.exit(1)
            if script_name == "gte_launcher.ps1":
                # 懒人包里没有 pack.toml，所以把版本固化进 launcher 常量
                text = pin_launcher_versions(
                    script_path.read_text(encoding="utf-8"), mc_version, forge_version
                )
                zf.writestr(script_name, text)
                print(f"  + {script_name}  (pinned MC {mc_version} / Forge {forge_version})")
            else:
                zf.write(script_path, script_name)
                print(f"  + {script_name}")

        # 打包 overrides 目录下的所有内容到 .minecraft/
        if overrides_dir.exists():
            for item in overrides_dir.rglob("*"):
                if item.is_file():
                    # 排除日志和崩溃报告
                    rel = item.relative_to(overrides_dir)
                    if any(part in ["logs", "crash-reports", ".git"] for part in rel.parts):
                        continue
                    # -slim / -dev-slim jar 是给 Maven 消费者的，故意不打包
                    # jar-in-jar 依赖（ldlib / configuration / Registrate ...）。
                    # 一旦进了 mods/，Forge 会看到三个都声明 modId "gtceu"
                    # 的文件、挑中 slim 的那个，然后报
                    #   Missing or unsupported mandatory dependencies:
                    #     Mod ID: 'ldlib', Requested by: 'gtceu' ... [MISSING]
                    # 导致玩家双击后只看到崩溃报告。可玩的包里只能有 fat jar。
                    if rel.parts and rel.parts[0] == "mods" and SLIM_JAR.search(item.name):
                        print(f"  - skipped non-runnable jar: {rel.as_posix()}")
                        continue
                    arcname = f".minecraft/{rel.as_posix()}"
                    zf.write(item, arcname)
                    print(f"  + {arcname}")

    size_mb = OUT_ZIP.stat().st_size / 1024 / 1024
    print(f"\n[SUCCESS] Player Lazy Pack created: {OUT_ZIP.name} ({size_mb:.2f} MB)")

if __name__ == "__main__":
    main()
