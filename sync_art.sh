#!/usr/bin/env bash
# ========================================================
#   GregTech Easy (GTE) Art Assets Synchronizer
#   Linux / macOS / WSL Support
# ========================================================

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "${SCRIPT_DIR}"

echo "========================================================"
echo "       GregTech Easy (GTE) 美术资产一键同步路由"
echo "========================================================"
echo ""

PY_CMD=""
if command -v python3 >/dev/null 2>&1; then
    PY_CMD="python3"
elif command -v python >/dev/null 2>&1; then
    PY_CMD="python"
fi

if [ -z "${PY_CMD}" ]; then
    echo "[错误] 未检测到 Python 环境！"
    exit 1
fi

echo "[1/3] 正在审查贴图尺寸与 Blockbench 模型语法合规性..."
${PY_CMD} scripts/audit_art.py

echo ""
echo "[2/3] 正在分发与同步多命名空间美术资源..."
${PY_CMD} scripts/sync_art_assets.py

echo ""
echo "[3/3] 同步完成！"
echo "[提示] 若游戏已在运行中，请在游戏内按下 F3 + T 即可秒级热重载贴图！"
echo "========================================================"
