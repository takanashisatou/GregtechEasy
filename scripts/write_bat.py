import os

bat_content = """@echo off
title GTE Game Dev Runtime

echo ========================================================
echo        GTE Client (Direct Start / No Launcher)
echo ========================================================
echo.
echo Launching Minecraft Client...
echo Game Directory: gte\\overrides
echo.

if defined JAVA_HOME (
    if exist "%JAVA_HOME%\\bin\\java.exe" goto FOUND_JAVA
)

for /d %%D in ("%USERPROFILE%\\.jdks\\*21*") do (
    if exist "%%D\\bin\\java.exe" (
        set "JAVA_HOME=%%D"
        goto FOUND_JAVA
    )
)

for /d %%D in ("%ProgramFiles%\\Java\\*21*", "%ProgramFiles%\\Eclipse Adoptium\\*21*", "%ProgramFiles%\\Microsoft\\*21*", "%ProgramFiles%\\Zulu\\*21*", "%ProgramFiles%\\BellSoft\\*21*") do (
    if exist "%%D\\bin\\java.exe" (
        set "JAVA_HOME=%%D"
        goto FOUND_JAVA
    )
)

:FOUND_JAVA
if defined JAVA_HOME (
    echo [OK] Found JDK 21: %JAVA_HOME%
    set "PATH=%JAVA_HOME%\\bin;%PATH%"
) else (
    echo [WARN] JDK 21 not found in default paths, trying system PATH...
)
echo.
echo Compiling and starting Minecraft client...
echo.

call "%~dp0gradlew.bat" :modules:gte-dev-runtime:runClient

if %errorlevel% neq 0 (
    echo.
    echo ========================================================
    echo [Error] Client exited with error code.
    echo Please make sure JDK 21 is installed and JAVA_HOME is configured.
    echo ========================================================
    pause
)
"""

with open("run_game.bat", "w", encoding="ascii") as f:
    f.write(bat_content)

print("run_game.bat successfully created in pure ASCII!")
