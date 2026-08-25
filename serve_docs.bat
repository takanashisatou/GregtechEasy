@echo off
title GTE Documentation Server
cd /d "%~dp0"

echo ========================================================
echo        GregTech Easy (GTE) Documentation Server
echo ========================================================
echo.

where python >nul 2>nul
if %errorlevel% equ 0 (
    set PY_CMD=python
    goto START_SERVER
)

where py >nul 2>nul
if %errorlevel% equ 0 (
    set PY_CMD=py -3
    goto START_SERVER
)

where python3 >nul 2>nul
if %errorlevel% equ 0 (
    set PY_CMD=python3
    goto START_SERVER
)

echo [ERROR] Python not found. Please install Python 3.10+.
pause
exit /b 1

:START_SERVER
set MKDOCS_CFG=mkdocs.yml
if not exist "%MKDOCS_CFG%" (
    if exist "modules\docs\mkdocs.yml" (
        set MKDOCS_CFG=modules\docs\mkdocs.yml
    )
)

echo [INFO] Starting MkDocs live documentation server...
echo [INFO] Configuration: %MKDOCS_CFG%
echo [INFO] Local URL: http://127.0.0.1:8000/GregtechEasy/
echo.

%PY_CMD% -m mkdocs serve -f "%MKDOCS_CFG%" --open
if %errorlevel% neq 0 (
    echo.
    echo [WARN] Server stopped. Installing dependencies from Tsinghua mirror...
    if exist "modules\docs\requirements.txt" (
        %PY_CMD% -m pip install -r modules\docs\requirements.txt -i https://pypi.tuna.tsinghua.edu.cn/simple --trusted-host pypi.tuna.tsinghua.edu.cn
    ) else (
        %PY_CMD% -m pip install -r requirements.txt -i https://pypi.tuna.tsinghua.edu.cn/simple --trusted-host pypi.tuna.tsinghua.edu.cn
    )
    %PY_CMD% -m mkdocs serve -f "%MKDOCS_CFG%" --open
)
pause
