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

echo ========================================================
echo        GTE Client (Direct Start / No Launcher)
echo ========================================================
echo Game Directory : gte\overrides
echo Java 21 Runtime: %JAVA_HOME%
echo.

REM Auto-detect local proxy for ultrafast dependency downloads
set "GRADLE_PROXY_OPTS="
set "DETECTED_PROXY_PORT="

netstat -ano | findstr "127.0.0.1:7890" | findstr "LISTENING" >nul 2>&1
if %errorlevel% equ 0 set "DETECTED_PROXY_PORT=7890"

if not defined DETECTED_PROXY_PORT (
    netstat -ano | findstr "127.0.0.1:7897" | findstr "LISTENING" >nul 2>&1
    if %errorlevel% equ 0 set "DETECTED_PROXY_PORT=7897"
)

if not defined DETECTED_PROXY_PORT (
    netstat -ano | findstr "127.0.0.1:10809" | findstr "LISTENING" >nul 2>&1
    if %errorlevel% equ 0 set "DETECTED_PROXY_PORT=10809"
)

if not defined DETECTED_PROXY_PORT (
    netstat -ano | findstr "127.0.0.1:10808" | findstr "LISTENING" >nul 2>&1
    if %errorlevel% equ 0 set "DETECTED_PROXY_PORT=10808"
)

if defined DETECTED_PROXY_PORT (
    echo [Network] Detected local proxy on port !DETECTED_PROXY_PORT!, auto-accelerating Gradle...
    set "GRADLE_PROXY_OPTS=-Dhttp.proxyHost=127.0.0.1 -Dhttp.proxyPort=!DETECTED_PROXY_PORT! -Dhttps.proxyHost=127.0.0.1 -Dhttps.proxyPort=!DETECTED_PROXY_PORT!"
) else (
    echo [Network] Applying China mirrors: BMCLAPI, Aliyun, Tencent Cloud...
)
echo.
echo Starting Minecraft client [hot compiling gtecore + gtm-reborn]...
echo.

call "%ROOT_DIR%gradlew.bat" -I "%ROOT_DIR%gradle\init.d\cn-mirrors.gradle" !GRADLE_PROXY_OPTS! :modules:gte-dev-runtime:runClient

if %errorlevel% neq 0 (
    echo.
    echo ========================================================
    echo [Info] Game exited. (Reset JDK: run_game.bat --reset-jdk)
    echo ========================================================
    pause
)
