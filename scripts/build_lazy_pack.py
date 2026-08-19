#!/usr/bin/env python3
"""
scripts/build_lazy_pack.py
CI helper: 将项目打包成面向普通玩家的"开箱即用"免编译完整整合包（懒人包）
包含完整的 .minecraft 目录与所有预编译模组 jar、配置、魔改脚本，玩家解压直接拖入 PCL2 / HMCL 即可游玩。
运行方式: python scripts/build_lazy_pack.py [version]
"""
import os
import shutil
import sys
import zipfile
from pathlib import Path

ROOT = Path(__file__).parent.parent.resolve()
BUILD_DIR = ROOT / "build" / "artifacts"
BUILD_DIR.mkdir(parents=True, exist_ok=True)

VERSION = sys.argv[1] if len(sys.argv) > 1 else "dev"
OUT_ZIP = BUILD_DIR / f"GTE-LazyPack-{VERSION}.zip"

README_CN = f"""====================================================
GregTech Easy (GTE) 完整懒人整合包 v{VERSION}
====================================================

【使用说明（双击即玩）】
本整合包为已完成全量编译与配置的完整独立客户端，无需任何开发环境或编译工具。

推荐使用以下启动器游玩：
1. PCL2 (Plain Craft Launcher 2)
2. HMCL (Hello Minecraft! Launcher)
3. BakaXL / CurseForge App

【快速导入方法】
- 方式一（整体拖入）：
  直接将本压缩包整体拖入 PCL2 / HMCL 启动器界面，按提示导入即可。

- 方式二（解压即用）：
  解压本压缩包，启动器选择游戏目录为解压后的 `.minecraft` 文件夹。

【Java 版本要求（极其重要）】
⚠️ 本整合包严格要求运行环境为 【Java 21 / JDK 21】！
⚠️ 切勿使用 Java 17 或 Java 8，否则游戏无法启动！
请在启动器的版本设置中将 Java 路径指定为 Java 21。
推荐内存分配：8GB ~ 12GB。

祝您游戏愉快！
"""

def main():
    print(f"Building Player Lazy Pack -> {OUT_ZIP}")

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

    # 4. 打包完整的 .minecraft 目录结构
    with zipfile.ZipFile(OUT_ZIP, "w", compression=zipfile.ZIP_DEFLATED, compresslevel=6) as zf:
        # 写入说明文件
        zf.writestr("README_启动必看.txt", README_CN)
        zf.writestr(".minecraft/README_启动必看.txt", README_CN)

        # 打包 overrides 目录下的所有内容到 .minecraft/
        if overrides_dir.exists():
            for item in overrides_dir.rglob("*"):
                if item.is_file():
                    # 排除日志和崩溃报告
                    rel = item.relative_to(overrides_dir)
                    if any(part in ["logs", "crash-reports", ".git"] for part in rel.parts):
                        continue
                    arcname = f".minecraft/{rel.as_posix()}"
                    zf.write(item, arcname)
                    print(f"  + {arcname}")

    size_mb = OUT_ZIP.stat().st_size / 1024 / 1024
    print(f"\n[SUCCESS] Player Lazy Pack created: {OUT_ZIP.name} ({size_mb:.2f} MB)")

if __name__ == "__main__":
    main()
