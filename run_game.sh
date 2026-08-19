#!/usr/bin/env bash
# ========================================================
#   GTE Client Launcher (Linux & macOS)
#   Direct Start / No Launcher / Zero Setup
# ========================================================

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="${SCRIPT_DIR}"
FOUND_JDK=""

if [ "$1" == "--reset-jdk" ]; then
    rm -f "${ROOT_DIR}/.jdk_path"
    echo "[OK] JDK path reset."
fi

# 1. Check saved .jdk_path file
if [ -f "${ROOT_DIR}/.jdk_path" ]; then
    SAVED_JDK=$(cat "${ROOT_DIR}/.jdk_path" | tr -d '\r\n')
    if [ -x "${SAVED_JDK}/bin/java" ]; then
        FOUND_JDK="${SAVED_JDK}"
    fi
fi

# 2. Check local project .jdk directory
if [ -z "${FOUND_JDK}" ] && [ -d "${ROOT_DIR}/.jdk" ]; then
    if [ -x "${ROOT_DIR}/.jdk/bin/java" ]; then
        FOUND_JDK="${ROOT_DIR}/.jdk"
    else
        for dir in "${ROOT_DIR}/.jdk"/*; do
            # Handle macOS Contents/Home structure inside .jdk if present
            if [ -x "${dir}/Contents/Home/bin/java" ]; then
                FOUND_JDK="${dir}/Contents/Home"
                break
            elif [ -x "${dir}/bin/java" ]; then
                FOUND_JDK="${dir}"
                break
            fi
        done
    fi
fi

# 3. Check JAVA_HOME if version 21
if [ -z "${FOUND_JDK}" ] && [ -n "${JAVA_HOME}" ] && [ -x "${JAVA_HOME}/bin/java" ]; then
    JAVA_VER=$("${JAVA_HOME}/bin/java" -version 2>&1 | head -n 1)
    if [[ "${JAVA_VER}" =~ "21." || "${JAVA_VER}" =~ "21-" ]]; then
        FOUND_JDK="${JAVA_HOME}"
    fi
fi

# 4. macOS specific java_home detection
if [ -z "${FOUND_JDK}" ] && [ "$(uname -s)" == "Darwin" ]; then
    if command -v /usr/libexec/java_home &>/dev/null; then
        MAC_JAVA=$(/usr/libexec/java_home -v 21 2>/dev/null || true)
        if [ -n "${MAC_JAVA}" ] && [ -x "${MAC_JAVA}/bin/java" ]; then
            FOUND_JDK="${MAC_JAVA}"
        fi
    fi
fi

# 5. Search standard Linux and macOS JVM directories
if [ -z "${FOUND_JDK}" ]; then
    SEARCH_DIRS=(
        "${HOME}/.jdks"/*21*
        "${HOME}/.sdkman/candidates/java"/*21*
        "/Library/Java/JavaVirtualMachines"/*21*/Contents/Home
        "${HOME}/Library/Java/JavaVirtualMachines"/*21*/Contents/Home
        "/opt/homebrew/opt/openjdk@21"
        "/usr/lib/jvm"/*21*
        "/usr/lib64/jvm"/*21*
        "/opt/jdk"/*21*
    )
    for dir in "${SEARCH_DIRS[@]}"; do
        if [ -x "${dir}/bin/java" ]; then
            FOUND_JDK="${dir}"
            break
        fi
    done
fi

# If not found, show interactive menu
if [ -z "${FOUND_JDK}" ]; then
    echo "========================================================"
    echo "       GTE Client Dev Runtime - JDK 21 Setup"
    echo "========================================================"
    echo ""
    echo "[!] JDK 21 was not found automatically on your system."
    echo ""
    echo "Please choose an option:"
    echo " [1] Auto-download JDK 21 - China Mirror (Recommended for CN users)"
    echo " [2] Auto-download JDK 21 - Official Adoptium (International)"
    echo " [3] Manually specify local JDK 21 path"
    echo " [4] Open download page in browser"
    echo " [5] Exit"
    echo ""
    read -p "Enter choice [1/2/3/4/5]: " USER_CHOICE

    case "${USER_CHOICE}" in
        1|2)
            OS_NAME="$(uname -s)"
            ARCH_NAME="$(uname -m)"
            
            # Map OS
            if [ "${OS_NAME}" == "Darwin" ]; then
                ADOPT_OS="mac"
            elif [ "${OS_NAME}" == "Linux" ]; then
                ADOPT_OS="linux"
            else
                echo "[Error] Unsupported OS: ${OS_NAME}"
                exit 1
            fi
            
            # Map Arch
            if [ "${ARCH_NAME}" == "x86_64" ]; then
                ADOPT_ARCH="x64"
            elif [[ "${ARCH_NAME}" == "arm64" || "${ARCH_NAME}" == "aarch64" ]]; then
                ADOPT_ARCH="aarch64"
            else
                echo "[Error] Unsupported Architecture: ${ARCH_NAME}"
                exit 1
            fi

            TAR_FILE="/tmp/gte_jdk21.tar.gz"
            DOWNLOAD_OK=false

            if [ "${USER_CHOICE}" == "1" ]; then
                # Try China mirror (Tsinghua TUNA) first
                MIRROR_URL="https://mirrors.tuna.tsinghua.edu.cn/Adoptium/21/jdk/${ADOPT_ARCH}/${ADOPT_OS}/"
                echo ""
                echo "Fetching file list from Tsinghua mirror..."
                FILENAME=$(curl -sL "${MIRROR_URL}" | grep -oP "OpenJDK21U-jdk_${ADOPT_ARCH}_${ADOPT_OS}_hotspot_[0-9._]+\.tar\.gz" | head -n 1)
                if [ -n "${FILENAME}" ]; then
                    echo "Downloading ${FILENAME} from Tsinghua mirror..."
                    curl -L "${MIRROR_URL}${FILENAME}" -o "${TAR_FILE}" && DOWNLOAD_OK=true
                fi
                if [ "${DOWNLOAD_OK}" != "true" ]; then
                    echo "[Info] China mirror failed, falling back to official Adoptium..."
                fi
            fi

            if [ "${DOWNLOAD_OK}" != "true" ]; then
                DOWNLOAD_URL="https://api.adoptium.net/v3/binary/latest/21/ga/${ADOPT_OS}/${ADOPT_ARCH}/jdk/hotspot/normal/eclipse"
                echo "Downloading from official Adoptium..."
                curl -L -A "Mozilla/5.0" "${DOWNLOAD_URL}" -o "${TAR_FILE}" && DOWNLOAD_OK=true
            fi
            
            echo "Extracting to .jdk folder..."
            mkdir -p "${ROOT_DIR}/.jdk"
            tar -xzf "${TAR_FILE}" -C "${ROOT_DIR}/.jdk"
            rm -f "${TAR_FILE}"
            
            for dir in "${ROOT_DIR}/.jdk"/*; do
                if [ -x "${dir}/Contents/Home/bin/java" ]; then
                    FOUND_JDK="${dir}/Contents/Home"
                    break
                elif [ -x "${dir}/bin/java" ]; then
                    FOUND_JDK="${dir}"
                    break
                fi
            done
            
            if [ -n "${FOUND_JDK}" ]; then
                echo "${FOUND_JDK}" > "${ROOT_DIR}/.jdk_path"
                echo "[OK] JDK 21 downloaded and configured successfully!"
            else
                echo "[Error] Failed to locate extracted JDK binary."
                exit 1
            fi
            ;;
        3)
            echo ""
            read -p "Please enter your JDK 21 folder path: " USER_JDK
            USER_JDK="${USER_JDK//\"/}"
            if [ -x "${USER_JDK}/bin/java" ]; then
                FOUND_JDK="${USER_JDK}"
                echo "${USER_JDK}" > "${ROOT_DIR}/.jdk_path"
                echo "[OK] JDK path saved to .jdk_path!"
            else
                echo "[Error] bin/java not found in ${USER_JDK}"
                exit 1
            fi
            ;;
        4)
            URL="https://adoptium.net/temurin/releases/?version=21"
            if [ "$(uname -s)" == "Darwin" ]; then
                open "${URL}"
            elif command -v xdg-open &>/dev/null; then
                xdg-open "${URL}"
            else
                echo "Please open ${URL} in your browser."
            fi
            exit 0
            ;;
        *)
            echo "Exiting."
            exit 0
            ;;
    esac
fi

export JAVA_HOME="${FOUND_JDK}"
export PATH="${FOUND_JDK}/bin:${PATH}"

# Auto-detect local hardware for Gradle workers and game heap
CPU_CORES="$(nproc 2>/dev/null || sysctl -n hw.ncpu 2>/dev/null || echo 4)"
TOTAL_RAM_GB=""
if command -v free >/dev/null 2>&1; then
    TOTAL_RAM_GB="$(free -g 2>/dev/null | awk '/Mem:/{print $2; exit}')"
elif command -v sysctl >/dev/null 2>&1; then
    TOTAL_RAM_GB="$(sysctl -n hw.memsize 2>/dev/null | awk '{print int($1/1073741824)}')"
fi
[ -z "${TOTAL_RAM_GB}" ] && TOTAL_RAM_GB=16

WORKERS=$((CPU_CORES / 2))
[ "${WORKERS}" -lt 2 ] && WORKERS=2
[ "${WORKERS}" -gt 16 ] && WORKERS=16

if [ "${TOTAL_RAM_GB}" -lt 8 ]; then
    RUNTIME_XMX=4
elif [ "${TOTAL_RAM_GB}" -lt 16 ]; then
    RUNTIME_XMX=6
elif [ "${TOTAL_RAM_GB}" -lt 32 ]; then
    RUNTIME_XMX=8
else
    RUNTIME_XMX=12
fi
export GTE_RUNTIME_XMX="${RUNTIME_XMX}G"

echo "Hardware: ${CPU_CORES} logical cores / ~${TOTAL_RAM_GB} GB RAM"
echo "Gradle workers: ${WORKERS} | Game heap: ${GTE_RUNTIME_XMX}"
echo ""

# Auto-detect local proxy for ultrafast dependency downloads
GRADLE_PROXY_OPTS=""
DETECTED_PROXY_PORT=""
for port in 7890 7897 10809 10808 1080; do
    if nc -z 127.0.0.1 ${port} 2>/dev/null || (exec 3<>/dev/tcp/127.0.0.1/${port}) 2>/dev/null; then
        DETECTED_PROXY_PORT="${port}"
        break
    fi
done

if [ -n "${DETECTED_PROXY_PORT}" ]; then
    echo "[Network] Detected active proxy on port ${DETECTED_PROXY_PORT}, auto-accelerating Gradle..."
    GRADLE_PROXY_OPTS="-Dhttp.proxyHost=127.0.0.1 -Dhttp.proxyPort=${DETECTED_PROXY_PORT} -Dhttps.proxyHost=127.0.0.1 -Dhttps.proxyPort=${DETECTED_PROXY_PORT}"
else
    echo "[Network] Applying China mirrors (BMCLAPI + Aliyun + Tencent Cloud)..."
fi

echo ""
echo "Starting Minecraft client (hot compiling gtecore + gtm-reborn)..."
echo ""

chmod +x "${ROOT_DIR}/gradlew"
"${ROOT_DIR}/gradlew" -I "${ROOT_DIR}/gradle/init.d/cn-mirrors.gradle" ${GRADLE_PROXY_OPTS} --max-workers="${WORKERS}" :modules:gte-dev-runtime:runClient
