@echo off
title GTE Art Assets Synchronizer
cd /d "%~dp0"

echo ========================================================
echo        GregTech Easy (GTE) 美术资产一键同步路由
echo ========================================================
echo.

where python >nul 2>nul
if %errorlevel% equ 0 (
    set PY_CMD=python
    goto RUN_SYNC
)

where py >nul 2>nul
if %errorlevel% equ 0 (
    set PY_CMD=py -3
    goto RUN_SYNC
)

where python3 >nul 2>nul
if %errorlevel% equ 0 (
    set PY_CMD=python3
    goto RUN_SYNC
)

echo [错误] 未检测到 Python 环境！请安装 Python 3.10+。
pause
exit /b 1

:RUN_SYNC
echo [1/3] 正在审查贴图尺寸与 Blockbench 模型语法合规性...
%PY_CMD% scripts/audit_art.py
if %errorlevel% neq 0 (
    echo.
    echo [警告] 发现不合规美术资产，请检查上方提示并修正！
    pause
    exit /b %errorlevel%
)

echo.
echo [2/3] 正在分发与同步多命名空间美术资源...
%PY_CMD% scripts/sync_art_assets.py

echo.
echo [3/3] 同步完成！
echo [提示] 若游戏已在运行中，请在游戏内按下 F3 + T 即可秒级热重载贴图！
echo ========================================================
pause
