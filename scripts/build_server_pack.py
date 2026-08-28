#!/usr/bin/env python3
"""
scripts/build_server_pack.py
Build the Forge dedicated-server pack.

A server pack is NOT a CurseForge pack. `packwiz curseforge export -s server`
emits manifest.json + overrides/, which is a *launcher import* format -- it needs
a launcher to read manifest.json and copy overrides/ into place. A Forge server
has no launcher. The documented procedure is

    unzip GTE-Server-*.zip -d .
    java -jar forge-*-installer.jar --installServer
    java @libraries/net/minecraftforge/forge/1.20.1-47.4.1/unix_args.txt nogui

and Forge resolves mods/ and config/ relative to the server root, so the pack
must put mods/ at its own top level.

Usage: python scripts/build_server_pack.py [version]
"""
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent))

from pack_common import BUILD_DIR, SERVER_SKIP_TOP, build_pack  # noqa: E402

VERSION = sys.argv[1] if len(sys.argv) > 1 else "dev"


def main() -> None:
    build_pack(
        out_zip=BUILD_DIR / f"GTE-Server-{VERSION}.zip",
        skip_top=SERVER_SKIP_TOP,
        label="Forge server pack",
    )


if __name__ == "__main__":
    main()
