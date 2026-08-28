@echo off
chcp 65001 >nul
setlocal enabledelayedexpansion
title GTE Game Dev Runtime

if "%1"=="--reset-jdk" (
    if exist "%~dp0.jdk_path" del "%~dp0.jdk_path"
    echo [OK] JDK path reset.
)

set "ROOT_DIR=%~dp0"
set "FOUND_JDK="

REM 1. Check saved .jdk_path file
if exist "%ROOT_DIR%.jdk_path" (
    set /p SAVED_JDK=<"%ROOT_DIR%.jdk_path"
    if exist "!SAVED_JDK!\bin\java.exe" (
        set "FOUND_JDK=!SAVED_JDK!"
        goto JDK_READY
    )
)

REM 2. Check local project .jdk directory
if exist "%ROOT_DIR%.jdk" (
    if exist "%ROOT_DIR%.jdk\bin\java.exe" (
        set "FOUND_JDK=%ROOT_DIR%.jdk"
        goto JDK_READY
    )
    for /d %%D in ("%ROOT_DIR%.jdk\*") do (
        if exist "%%D\bin\java.exe" (
            set "FOUND_JDK=%%D"
            goto JDK_READY
        )
    )
)

REM 3. Check JAVA_HOME if version 21
if defined JAVA_HOME (
    if exist "%JAVA_HOME%\bin\java.exe" (
        "%JAVA_HOME%\bin\java.exe" -version 2>&1 | findstr /R /C:"version \"21\." /C:"version \"21\-" /C:"build 21\." /C:"build 21\-" >nul
        if !errorlevel! equ 0 (
            set "FOUND_JDK=%JAVA_HOME%"
            goto JDK_READY
        )
    )
)

REM 4. Search common JDK 21 installation locations on Windows
for /d %%D in ("%USERPROFILE%\.jdks\*21*") do (
    if exist "%%D\bin\java.exe" (
        set "FOUND_JDK=%%D"
        goto JDK_READY
    )
)

for /d %%D in ("%ProgramFiles%\Java\*21*", "%ProgramFiles%\Eclipse Adoptium\*21*", "%ProgramFiles%\Microsoft\*21*", "%ProgramFiles%\Zulu\*21*", "%ProgramFiles%\BellSoft\*21*", "%LOCALAPPDATA%\Programs\Eclipse Adoptium\*21*") do (
    if exist "%%D\bin\java.exe" (
        set "FOUND_JDK=%%D"
        goto JDK_READY
    )
)

REM If not found, show interactive menu
echo ========================================================
echo        GTE Client Dev Runtime - JDK 21 Setup
echo ========================================================
echo.
echo [!] JDK 21 was not found automatically on your system.
echo.
echo Please choose an option:
echo  [1] Auto-download JDK 21 - China Mirror (Recommended for CN users)
echo  [2] Auto-download JDK 21 - Official Adoptium (International)
echo  [3] Manually specify local JDK 21 path
echo  [4] Open download page in browser
echo  [5] Exit
echo.
set /p USER_CHOICE="Enter choice [1/2/3/4/5]: "

if "%USER_CHOICE%"=="1" goto DOWNLOAD_CN
if "%USER_CHOICE%"=="2" goto DOWNLOAD_INTL
if "%USER_CHOICE%"=="3" goto MANUAL_JDK
if "%USER_CHOICE%"=="4" goto BROWSER_JDK
exit /b 0

:DOWNLOAD_CN
echo.
echo Downloading JDK 21 from Tsinghua University mirror (mirrors.tuna.tsinghua.edu.cn)...
echo This is usually fast for users in mainland China.
echo.
powershell -NoProfile -ExecutionPolicy Bypass -Command "$ErrorActionPreference = 'Stop'; [Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12; $mirror = 'https://mirrors.tuna.tsinghua.edu.cn/Adoptium/21/jdk/x64/windows/'; Write-Host 'Fetching file list from Tsinghua mirror...'; try { $html = (New-Object Net.WebClient).DownloadString($mirror); $m = [regex]::Match($html, '(OpenJDK21U-jdk_x64_windows_hotspot_[0-9._]+\.zip)'); if (-not $m.Success) { throw 'Could not find JDK zip filename' }; $fname = $m.Groups[1].Value; $url = $mirror + $fname; $zip = Join-Path $env:TEMP $fname; $out = '%ROOT_DIR%.jdk'; Write-Host ('Downloading ' + $fname + '...'); (New-Object Net.WebClient).DownloadFile($url, $zip); Write-Host 'Extracting...'; if (Test-Path $out) { Remove-Item -Recurse -Force $out }; Expand-Archive -Path $zip -DestinationPath $out; Remove-Item $zip; Write-Host 'Done!' } catch { Write-Host ('Mirror failed: ' + $_.Exception.Message); Write-Host 'Falling back to official Adoptium API...'; $url2 = 'https://api.adoptium.net/v3/binary/latest/21/ga/windows/x64/jdk/hotspot/normal/eclipse'; $zip2 = Join-Path $env:TEMP 'temurin_jdk21.zip'; $out2 = '%ROOT_DIR%.jdk'; $wc = New-Object Net.WebClient; $wc.Headers.Add('User-Agent', 'Mozilla/5.0'); $wc.DownloadFile($url2, $zip2); if (Test-Path $out2) { Remove-Item -Recurse -Force $out2 }; Expand-Archive -Path $zip2 -DestinationPath $out2; Remove-Item $zip2; Write-Host 'Done (fallback)!' }"
goto AFTER_DOWNLOAD

:DOWNLOAD_INTL
echo.
echo Downloading JDK 21 from official Adoptium (GitHub)...
echo.
powershell -NoProfile -ExecutionPolicy Bypass -Command "$ErrorActionPreference = 'Stop'; [Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12; $url = 'https://api.adoptium.net/v3/binary/latest/21/ga/windows/x64/jdk/hotspot/normal/eclipse'; $zip = Join-Path $env:TEMP 'temurin_jdk21.zip'; $out = '%ROOT_DIR%.jdk'; Write-Host 'Downloading from Adoptium...'; $wc = New-Object Net.WebClient; $wc.Headers.Add('User-Agent', 'Mozilla/5.0'); $wc.DownloadFile($url, $zip); Write-Host 'Extracting...'; if (Test-Path $out) { Remove-Item -Recurse -Force $out }; Expand-Archive -Path $zip -DestinationPath $out; Remove-Item $zip; Write-Host 'Done!'"
goto AFTER_DOWNLOAD

:AFTER_DOWNLOAD
if exist "%ROOT_DIR%.jdk" (
    for /d %%D in ("%ROOT_DIR%.jdk\*") do (
        if exist "%%D\bin\java.exe" (
            set "FOUND_JDK=%%D"
            echo %%D> "%ROOT_DIR%.jdk_path"
            goto JDK_READY
        )
    )
)
echo [Error] Failed to download or extract JDK 21.
pause
exit /b 1

:MANUAL_JDK
echo.
set /p USER_JDK="Please enter or drag your JDK 21 folder path here: "
set USER_JDK=%USER_JDK:"=%
if exist "%USER_JDK%\bin\java.exe" (
    set "FOUND_JDK=%USER_JDK%"
    echo %USER_JDK%> "%ROOT_DIR%.jdk_path"
    echo [OK] JDK 21 path saved!
    goto JDK_READY
) else (
    echo [Error] bin\java.exe not found in "%USER_JDK%".
    pause
    exit /b 1
)

:BROWSER_JDK
start https://adoptium.net/temurin/releases/?version=21
echo.
echo Please install JDK 21 and run this script again!
pause
exit /b 0

:JDK_READY
set "JAVA_HOME=%FOUND_JDK%"
set "PATH=%FOUND_JDK%\bin;%PATH%"

REM ---------------------------------------------------------------------------
REM Decide which mode we are in.
REM
REM This one script serves two very different layouts:
REM   * the source checkout, where gradlew.bat + modules/ exist and the point is
REM     to hot-compile gtecore/gtm-reborn and launch the dev runtime;
REM   * a local standalone directory holding a prepared .minecraft, with no
REM     Gradle wrapper and no sources.
REM
REM It used to unconditionally call gradlew.bat, so in the second layout it
REM printed "'...gradlew.bat' is not recognized as an internal or external
REM command", fell into the pause below, and looked like nothing had happened.
REM Pick the mode from what is actually on disk.
REM
REM Note: no released artifact ships this script any more. The distributed packs
REM are GTE-CurseForge-*.zip (launcher import), GTE-FullMod-*.zip (flat game
REM content for a self-made instance) and GTE-Server-*.zip. PLAYER_MODE below is
REM kept for launching a locally prepared .minecraft without a launcher, which is
REM how a pack is smoke-tested before release.
REM ---------------------------------------------------------------------------
if exist "%ROOT_DIR%gradlew.bat" if exist "%ROOT_DIR%settings.gradle" goto DEV_MODE
if exist "%ROOT_DIR%.minecraft" goto PLAYER_MODE

echo ========================================================
echo [Error] Cannot tell what to launch.
echo ========================================================
echo This folder has neither a Gradle wrapper (developer checkout)
echo nor a .minecraft folder (prepared standalone game directory).
echo.
echo If you are a player: this script is not part of any released
echo pack. Use GTE-CurseForge-*.zip and import it in your launcher,
echo or GTE-FullMod-*.zip if you already made a Forge 47.4.1 instance.
echo.
pause
exit /b 1

REM ===========================================================================
REM Standalone mode: launch a prepared .minecraft directly, without a launcher
REM ===========================================================================
:PLAYER_MODE
echo ========================================================
echo        GTE Standalone Start (No Launcher)
echo ========================================================
echo Game Directory : %ROOT_DIR%.minecraft
echo Java 21 Runtime: %JAVA_HOME%
echo.

call :DETECT_HARDWARE

set "LAUNCHER_PS1=%ROOT_DIR%gte_launcher.ps1"
if not exist "%LAUNCHER_PS1%" set "LAUNCHER_PS1=%ROOT_DIR%scripts\gte_launcher.ps1"
if not exist "%LAUNCHER_PS1%" (
    echo [Error] gte_launcher.ps1 not found next to this script or under scripts\.
    pause
    exit /b 1
)

REM Remember the player name between launches so worlds keep the same player data.
set "GTE_USERNAME="
if exist "%ROOT_DIR%.gte_username" set /p GTE_USERNAME=<"%ROOT_DIR%.gte_username"
if not defined GTE_USERNAME (
    echo Enter your in-game name for offline play.
    set /p GTE_USERNAME="Player name [Player]: "
    if not defined GTE_USERNAME set "GTE_USERNAME=Player"
    echo !GTE_USERNAME!> "%ROOT_DIR%.gte_username"
)
echo Player name    : !GTE_USERNAME!  (change it: delete .gte_username)
echo.

call :DETECT_PROXY
set "MIRROR_FLAG=-UseMirror"
if defined DETECTED_PROXY_PORT set "MIRROR_FLAG="

powershell -NoProfile -ExecutionPolicy Bypass -File "%LAUNCHER_PS1%" ^
    -PackRoot "%ROOT_DIR%." ^
    -JavaHome "%JAVA_HOME%" ^
    -Username "!GTE_USERNAME!" ^
    -MaxMemory "!RUNTIME_XMX!" ^
    !MIRROR_FLAG!

set "GAME_EXIT=!errorlevel!"
if !GAME_EXIT! neq 0 (
    echo.
    echo ========================================================
    echo [Info] Game exited with code !GAME_EXIT!.
    echo Log: %ROOT_DIR%.minecraft\logs\latest.log
    echo (Reset JDK: run_game.bat --reset-jdk)
    echo ========================================================
    pause
)
exit /b !GAME_EXIT!

REM ===========================================================================
REM Developer mode: hot-compile the mods and run the dev runtime through Gradle
REM ===========================================================================
:DEV_MODE
echo ========================================================
echo        GTE Client Dev Runtime (hot compile)
echo ========================================================
echo Game Directory : gte\overrides
echo Java 21 Runtime: %JAVA_HOME%
echo.

call :DETECT_HARDWARE
echo Gradle workers: !WORKERS! ^| Game heap: !GTE_RUNTIME_XMX!
echo.

call :DETECT_PROXY
set "GRADLE_PROXY_OPTS="
if defined DETECTED_PROXY_PORT (
    echo [Network] Detected local proxy on port !DETECTED_PROXY_PORT!, auto-accelerating Gradle...
    set "GRADLE_PROXY_OPTS=-Dhttp.proxyHost=127.0.0.1 -Dhttp.proxyPort=!DETECTED_PROXY_PORT! -Dhttps.proxyHost=127.0.0.1 -Dhttps.proxyPort=!DETECTED_PROXY_PORT!"
) else (
    echo [Network] Applying China mirrors: BMCLAPI, Aliyun, Tencent Cloud...
)
echo.
echo Starting Minecraft client [hot compiling gtecore + gtm-reborn]...
echo.

call "%ROOT_DIR%gradlew.bat" -I "%ROOT_DIR%gradle\init.d\cn-mirrors.gradle" !GRADLE_PROXY_OPTS! --max-workers=!WORKERS! :modules:gte-dev-runtime:runClient

if !errorlevel! neq 0 (
    echo.
    echo ========================================================
    echo [Info] Game exited. (Reset JDK: run_game.bat --reset-jdk)
    echo ========================================================
    pause
)
exit /b !errorlevel!

REM ===========================================================================
REM Shared subroutines
REM ===========================================================================

REM Auto-detect local hardware for Gradle workers and game heap
:DETECT_HARDWARE
set "CPU_CORES=%NUMBER_OF_PROCESSORS%"
if not defined CPU_CORES set "CPU_CORES=4"
set /a WORKERS=%CPU_CORES%/2
if !WORKERS! LSS 2 set "WORKERS=2"
if !WORKERS! GTR 16 set "WORKERS=16"

set "TOTAL_RAM_GB=16"
for /f "delims=" %%M in ('powershell -NoProfile -ExecutionPolicy Bypass -Command "try { [int][math]::Ceiling((Get-CimInstance Win32_ComputerSystem).TotalPhysicalMemory/1GB) } catch { 16 }"') do set "TOTAL_RAM_GB=%%M"
if not defined TOTAL_RAM_GB set "TOTAL_RAM_GB=16"

set "RUNTIME_XMX=8G"
if !TOTAL_RAM_GB! LSS 8 ( set "RUNTIME_XMX=4G" ) else if !TOTAL_RAM_GB! LSS 16 ( set "RUNTIME_XMX=6G" ) else if !TOTAL_RAM_GB! LSS 32 ( set "RUNTIME_XMX=8G" ) else ( set "RUNTIME_XMX=12G" )
set "GTE_RUNTIME_XMX=!RUNTIME_XMX!"

echo Hardware: !CPU_CORES! logical cores / ~!TOTAL_RAM_GB! GB RAM ^| Game heap: !RUNTIME_XMX!
goto :eof

REM Auto-detect a local proxy for faster downloads
:DETECT_PROXY
set "DETECTED_PROXY_PORT="
for %%P in (7890 7897 10809 10808) do (
    if not defined DETECTED_PROXY_PORT (
        netstat -ano | findstr "127.0.0.1:%%P" | findstr "LISTENING" >nul 2>&1
        if !errorlevel! equ 0 set "DETECTED_PROXY_PORT=%%P"
    )
)
goto :eof
