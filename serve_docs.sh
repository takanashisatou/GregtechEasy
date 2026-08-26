#!/usr/bin/env bash
# ========================================================
#   GregTech Easy (GTE) Local Documentation Server
#   Linux / macOS / WSL Support
# ========================================================

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "${SCRIPT_DIR}"

echo "========================================================"
echo "       GregTech Easy (GTE) 官方文档本地实时预览"
echo "========================================================"
echo ""

# 1. Detect Python 3
PY_CMD=""
if command -v python3 >/dev/null 2>&1; then
    PY_CMD="python3"
elif command -v python >/dev/null 2>&1; then
    PY_CMD="python"
fi

if [ -z "${PY_CMD}" ]; then
    echo "[错误] 未检测到 Python 环境！请先安装 Python 3.10+。"
    echo "Linux (Debian/Ubuntu): sudo apt update && sudo apt install -y python3 python3-pip python3-venv"
    echo "macOS: brew install python3"
    exit 1
fi

echo "[1/2] 检查 Python 运行环境: $(${PY_CMD} --version)"

# 2. Check if required packages are installed
if ! ${PY_CMD} -c "import mkdocs, material, mkdocs_static_i18n, pymdownx" >/dev/null 2>&1; then
    echo "[提示] 正在安装/补全 MkDocs 文档依赖库..."
    REQ_FILE="requirements.txt"
    [ -f "modules/docs/requirements.txt" ] && REQ_FILE="modules/docs/requirements.txt"
    ${PY_CMD} -m pip install -r "${REQ_FILE}" -i https://pypi.tuna.tsinghua.edu.cn/simple --trusted-host pypi.tuna.tsinghua.edu.cn || \
    ${PY_CMD} -m pip install -r "${REQ_FILE}"
fi

MKDOCS_CFG="mkdocs.yml"
if [ ! -f "${MKDOCS_CFG}" ] && [ -f "modules/docs/mkdocs.yml" ]; then
    MKDOCS_CFG="modules/docs/mkdocs.yml"
fi

echo ""
echo "[2/2] 正在启动 MkDocs 本地实时预览服务器 (配置: ${MKDOCS_CFG})..."
echo "本地访问地址: http://127.0.0.1:8000/GregtechEasy/"
echo "网页将在编译完成后自动在浏览器中打开！"
echo ""
echo "[提示] 修改 docs/ 目录下的 Markdown 文档将自动热重载刷新浏览器。"
echo "按 Ctrl + C 即可停止服务器。"
echo "========================================================"
echo ""

${PY_CMD} -m mkdocs serve -f "${MKDOCS_CFG}" --open
