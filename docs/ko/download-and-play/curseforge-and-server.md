# CurseForge 가져오기 및 서버 배포 가이드

컴파일이 필요 없는 간편 팩 외에도 GTE는 **Packwiz** 기반으로 자동 빌드된 CurseForge 규격 팩과 서버 팩을 제공합니다.

---

## 📦 CurseForge 규격 팩 가져오기

CurseForge 형식 모드팩 파일 이름은 `GTE-CurseForge-<版本号>.zip`입니다.

### 클라이언트 가져오기 방법

=== "PCL2 / HMCL 가져오기"

    1. 런처를 열고 **새 게임 버전 설치 / 모드팩 가져오기**를 선택합니다.
    2. 다운로드한 `GTE-CurseForge-<版本号>.zip` 파일을 선택합니다.
    3. 런처가 `manifest.json`을 자동으로 분석하고 고속 동시 다운로드로 의존 모드를 내려받습니다.
    4. 가져오기가 완료되면 버전 설정에서 Java 런타임을 **Java 21**로 지정합니다.
    5. 실행 메모리를 설정하고(권장 8GB ~ 12GB) 게임을 시작합니다.

=== "CurseForge App 가져오기"

    1. CurseForge App 클라이언트를 엽니다.
    2. 왼쪽의 **Minecraft** 아이콘을 클릭하고 **My Modpacks**로 들어갑니다.
    3. 오른쪽 위 설정 메뉴에서 **Create Custom Profile** ➜ **Import**를 클릭합니다.
    4. `GTE-CurseForge-<版本号>.zip`을 선택하고 자동 다운로드 및 설치가 완료될 때까지 기다립니다.

=== "Prism Launcher 가져오기"

    1. **Add Instance(인스턴스 추가)** ➜ **Import(가져오기)**를 클릭합니다.
    2. `GTE-CurseForge-<版本号>.zip`을 찾아 선택합니다.
    3. 인스턴스가 생성된 후 인스턴스 속성에서 Java를 **JDK 21** 경로로 설정합니다.

---

## 🖥️ 서버 배포 가이드

서버 팩 파일 이름은 `GTE-Server-<版本号>.zip`입니다.

### 1. 환경 준비
- 운영 체제: Linux(Ubuntu 22.04+ / Debian 12+) 또는 Windows Server 2022+
- **JDK 21이 준비되어 있어야 합니다**: 터미널에서 `java -version`을 실행하여 출력이 `openjdk version "21..."`인지 확인합니다.
- 권장 사양: 4코어 이상 CPU, 16GB 물리 메모리(Minecraft 서버에 10G ~ 14G 할당).

### 2. 배포 단계

```bash
# 1. 创建服务端工作目录
mkdir -p /opt/gte-server && cd /opt/gte-server

# 2. 解压服务端包
unzip GTE-Server-*.zip -d .

# 3. 安装 Forge 1.20.1-47.3.0 / 47.4.4 服务端核心 (若未预装)
# 运行安装脚本下载 minecraft_server 与 forge 库
java -jar forge-1.20.1-*-installer.jar --installServer

# 4. 同意 Minecraft EULA 协议
echo "eula=true" > eula.txt
```

### 3. 시작 스크립트 구성 (`run_server.sh` / `run_server.bat`)

Aikar 최적화 매개변수를 사용하여 서버를 시작하는 것을 권장합니다:

=== "Linux (`run_server.sh`)"

    ```bash
    #!/bin/bash
    JAVA_CMD="java"
    MEMORY="12G"

    FLAGS="-Xms${MEMORY} -Xmx${MEMORY} \
      -XX:+UseG1GC -XX:+ParallelRefProcEnabled -XX:MaxGCPauseMillis=200 \
      -XX:+UnlockExperimentalVMOptions -XX:+DisableExplicitGC -XX:+AlwaysPreTouch \
      -XX:G1NewSizePercent=30 -XX:G1MaxNewSizePercent=40 -XX:G1ReservePercent=20 \
      -XX:G1HeapWastePercent=5 -XX:G1MixedGCCountTarget=4 -XX:InitiatingHeapOccupancyPercent=15 \
      -XX:G1MixedGCLiveThresholdPercent=90 -XX:G1RSetUpdatingPauseTimePercent=5 \
      -XX:SurvivorRatio=32 -XX:+PerfDisableSharedMem -XX:MaxTenuringThreshold=1"

    $JAVA_CMD $FLAGS @libraries/net/minecraftforge/forge/1.20.1-47.3.0/unix_args.txt nogui
    ```

=== "Windows (`run_server.bat`)"

    ```bat
    @echo off
    set JAVA_CMD=java
    set MEMORY=12G

    set FLAGS=-Xms%MEMORY% -Xmx%MEMORY% -XX:+UseG1GC -XX:+ParallelRefProcEnabled -XX:MaxGCPauseMillis=200 -XX:+UnlockExperimentalVMOptions -XX:+DisableExplicitGC -XX:+AlwaysPreTouch

    %JAVA_CMD% %FLAGS% @libraries/net/minecraftforge/forge/1.20.1-47.3.0/win_args.txt nogui
    pause
    ```

---

## ⚙️ 자주 발생하는 문제 해결 (FAQ)

### Q1: 서버 시작 시 `UnsupportedClassVersionError: ... class file version 65.0` 오류가 발생합니다
> **원인**: 서버 실행 시 Java 버전이 Java 21보다 낮습니다(버전 65.0은 JDK 21을 의미).  
> **해결**: Linux에서 `sudo update-alternatives --config java`를 통해 OpenJDK 21로 전환합니다.

### Q2: 플레이어가 서버에 접속하면 모드 목록 불일치 메시지가 표시됩니다
> **해결**: 클라이언트 버전 번호와 서버 버전 번호가 완전히 일치하는지 확인하세요. 메인 프로젝트 CI 빌드마다 호환되는 Client 및 Server 아티팩트가 동시에 생성됩니다.