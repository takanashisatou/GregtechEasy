#!/usr/bin/env python3
"""
scripts/build_server_pack.py
Build the Forge dedicated-server pack.

A server pack is NOT a CurseForge pack. `packwiz curseforge export -s server`
emits manifest.json + overrides/, which is a *launcher import* format -- it needs
a launcher to read manifest.json and copy overrides/ into place. A Forge server
has no launcher, so this pack puts mods/, config/, kubejs/ at the archive top
level and adds run_server.sh / run_server.bat.

The start scripts:
  - install the Forge server core when forge-<mc>-<forge>-installer.jar is
    present next to them;
  - create eula.txt on first run and refuse to start until eula=true;
  - launch with Aikar's G1 flags and the Forge unix/win args file.

Usage: python scripts/build_server_pack.py [version]
"""
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent))

from pack_common import BUILD_DIR, SERVER_SKIP_TOP, build_pack, read_pack_versions  # noqa: E402

VERSION = sys.argv[1] if len(sys.argv) > 1 else "dev"


def render_run_server_sh(mc_version: str, forge_version: str) -> str:
    forge_id = f"{mc_version}-{forge_version}"
    return f"""#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

JAVA_CMD="${{JAVA_CMD:-java}}"
MEMORY="${{MEMORY:-12G}}"
FORGE_VERSION="{forge_id}"
FORGE_ARGS="libraries/net/minecraftforge/forge/${{FORGE_VERSION}}/unix_args.txt"
INSTALLER="forge-${{FORGE_VERSION}}-installer.jar"

if [ ! -f "$FORGE_ARGS" ] && [ -f "$INSTALLER" ]; then
    echo "[GTE] Installing Forge $FORGE_VERSION..."
    "$JAVA_CMD" -jar "$INSTALLER" --installServer
fi

if [ ! -f "$FORGE_ARGS" ]; then
    echo "[GTE] Forge server core is not installed."
    echo "[GTE] Download $INSTALLER from https://files.minecraftforge.net/ and place it here,"
    echo "[GTE] then rerun this script; or run: $JAVA_CMD -jar $INSTALLER --installServer"
    exit 1
fi

if [ ! -f eula.txt ]; then
    printf 'eula=false\\n' > eula.txt
    echo "[GTE] Created eula.txt. Read https://aka.ms/MinecraftEULA and set eula=true to start."
    exit 1
fi
if ! grep -qi '^eula=true' eula.txt; then
    echo "[GTE] eula.txt is not accepted. Set eula=true after reading the Minecraft EULA."
    exit 1
fi

exec "$JAVA_CMD" -Xms"$MEMORY" -Xmx"$MEMORY" \\
    -XX:+UseG1GC -XX:+ParallelRefProcEnabled -XX:MaxGCPauseMillis=200 \\
    -XX:+UnlockExperimentalVMOptions -XX:+DisableExplicitGC -XX:+AlwaysPreTouch \\
    -XX:G1NewSizePercent=30 -XX:G1MaxNewSizePercent=40 -XX:G1ReservePercent=20 \\
    -XX:G1HeapWastePercent=5 -XX:G1MixedGCCountTarget=4 -XX:InitiatingHeapOccupancyPercent=15 \\
    -XX:G1MixedGCLiveThresholdPercent=90 -XX:G1RSetUpdatingPauseTimePercent=5 \\
    -XX:SurvivorRatio=32 -XX:+PerfDisableSharedMem -XX:MaxTenuringThreshold=1 \\
    @"$FORGE_ARGS" nogui
"""


def render_run_server_bat(mc_version: str, forge_version: str) -> str:
    forge_id = f"{mc_version}-{forge_version}"
    return "\r\n".join([
        "@echo off",
        "setlocal",
        'cd /d "%~dp0"',
        "if not defined JAVA_CMD set JAVA_CMD=java",
        "if not defined MEMORY set MEMORY=12G",
        f'set FORGE_VERSION={forge_id}',
        r'set FORGE_ARGS=libraries\net\minecraftforge\forge\%FORGE_VERSION%\win_args.txt',
        r'set INSTALLER=forge-%FORGE_VERSION%-installer.jar',
        "",
        'if not exist "%FORGE_ARGS%" if exist "%INSTALLER%" (',
        '    echo [GTE] Installing Forge %FORGE_VERSION%...',
        '    "%JAVA_CMD%" -jar "%INSTALLER%" --installServer',
        ')',
        "",
        'if not exist "%FORGE_ARGS%" (',
        '    echo [GTE] Forge server core is not installed.',
        '    echo [GTE] Download %INSTALLER% from https://files.minecraftforge.net/ and place it here,',
        '    echo [GTE] then rerun this script; or run: "%JAVA_CMD%" -jar "%INSTALLER%" --installServer',
        '    pause',
        '    exit /b 1',
        ')',
        "",
        'if not exist eula.txt (',
        '    echo eula=false> eula.txt',
        '    echo [GTE] Created eula.txt. Read https://aka.ms/MinecraftEULA and set eula=true to start.',
        '    pause',
        '    exit /b 1',
        ')',
        'findstr /i /b /c:"eula=true" eula.txt >nul',
        'if errorlevel 1 (',
        '    echo [GTE] eula.txt is not accepted. Set eula=true after reading the Minecraft EULA.',
        '    pause',
        '    exit /b 1',
        ')',
        "",
        '"%JAVA_CMD%" -Xms%MEMORY% -Xmx%MEMORY% ^',
        '    -XX:+UseG1GC -XX:+ParallelRefProcEnabled -XX:MaxGCPauseMillis=200 ^',
        '    -XX:+UnlockExperimentalVMOptions -XX:+DisableExplicitGC -XX:+AlwaysPreTouch ^',
        '    -XX:G1NewSizePercent=30 -XX:G1MaxNewSizePercent=40 -XX:G1ReservePercent=20 ^',
        '    -XX:G1HeapWastePercent=5 -XX:G1MixedGCCountTarget=4 -XX:InitiatingHeapOccupancyPercent=15 ^',
        '    -XX:G1MixedGCLiveThresholdPercent=90 -XX:G1RSetUpdatingPauseTimePercent=5 ^',
        '    -XX:SurvivorRatio=32 -XX:+PerfDisableSharedMem -XX:MaxTenuringThreshold=1 ^',
        '    @%FORGE_ARGS% nogui',
        "pause",
        "",
    ])


def render_server_readme(version: str, mc_version: str, forge_version: str) -> str:
    forge_id = f"{mc_version}-{forge_version}"
    return "\r\n".join([
        "====================================================",
        f"GregTech Easy (GTE) Server Pack v{version}",
        "====================================================",
        "",
        f"Minecraft : {mc_version}",
        f"Forge     : {forge_version}",
        "Java      : 21 (required)",
        "",
        "1. Extract this ZIP into an empty server directory.",
        "2. Download the Forge installer:",
        f"   https://files.minecraftforge.net/ -> {forge_id} -> installer",
        f"   Place forge-{forge_id}-installer.jar next to run_server.sh / run_server.bat.",
        "3. Start the server:",
        "   Linux  : bash run_server.sh",
        "   Windows: run_server.bat",
        "   The script installs Forge if the installer is present, then launches the server.",
        "4. On first run, edit eula.txt and set eula=true after reading the Minecraft EULA.",
        "5. Use the same GregTech Easy version on the client and server.",
        "",
        "Options:",
        "   MEMORY   default 12G   (Linux: MEMORY=8G bash run_server.sh)",
        "   JAVA_CMD default java  (set it to your JDK 21 java executable if needed)",
        "",
        "Do not start this pack with a client launcher; it is a dedicated-server layout.",
        "",
    ])


def main() -> None:
    mc_version, forge_version = read_pack_versions()
    extra = {
        "run_server.sh": render_run_server_sh(mc_version, forge_version),
        "run_server.bat": render_run_server_bat(mc_version, forge_version),
        "README_Server.txt": render_server_readme(VERSION, mc_version, forge_version),
    }
    build_pack(
        out_zip=BUILD_DIR / f"GTE-Server-{VERSION}.zip",
        skip_top=SERVER_SKIP_TOP,
        label="Forge server pack",
        extra=extra,
    )


if __name__ == "__main__":
    main()
