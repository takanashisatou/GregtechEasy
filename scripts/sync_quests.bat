@echo off
chcp 65001 >nul
title GTE 任务与配置双向同步工具

set ROOT_DIR=%~dp0..
set OVERRIDES_DIR=%ROOT_DIR%\gte\overrides
set CONFIG_FILE=%~dp0launcher_path.txt

if not exist "%CONFIG_FILE%" (
    echo ========================================================
    echo             首次使用：请设置你的启动器游戏路径
    echo ========================================================
    set /p USER_PATH="请输入或拖入你的启动器 .minecraft 路径: "
    set USER_PATH=%USER_PATH:"=%
    echo %USER_PATH%> "%CONFIG_FILE%"
    echo 路径已保存到 scripts/launcher_path.txt
    echo.
)

set /p GAME_DIR=<"%CONFIG_FILE%"
set GAME_DIR=%GAME_DIR:"=%

echo ========================================================
echo 当前关联游戏路径: %GAME_DIR%
echo 仓库源路径: %OVERRIDES_DIR%
echo ========================================================
echo.
echo 1. 【从游戏同步到仓库】 (你在游戏里改完任务后，执行此项准备提交 Git)
echo 2. 【从仓库推送到游戏】 (你拉取了别人提交的 Git 最新内容后，推送到游戏里测试)
echo 3. 重新设置游戏路径
echo 4. 退出
echo.
set /p CHOICE="请选择操作 (1/2/3/4): "

if "%CHOICE%"=="1" goto PULL_TO_REPO
if "%CHOICE%"=="2" goto PUSH_TO_GAME
if "%CHOICE%"=="3" goto RESET_PATH
goto EXIT

:PULL_TO_REPO
echo.
echo 正在将游戏目录的 ftbquests、kubejs、config 同步到仓库...
robocopy "%GAME_DIR%\ftbquests" "%OVERRIDES_DIR%\ftbquests" /E /NFL /NDL /NJH /NJS /nc /ns /np
robocopy "%GAME_DIR%\kubejs" "%OVERRIDES_DIR%\kubejs" /E /NFL /NDL /NJH /NJS /nc /ns /np
robocopy "%GAME_DIR%\config" "%OVERRIDES_DIR%\config" /E /NFL /NDL /NJH /NJS /nc /ns /np
echo [完成] 已全部同步至 Git 仓库目录！现在打开 GitHub Desktop 即可看到修改并提交。
pause
goto EXIT

:PUSH_TO_GAME
echo.
echo 正在将仓库的最新内容推送到游戏目录...
robocopy "%OVERRIDES_DIR%\ftbquests" "%GAME_DIR%\ftbquests" /E /NFL /NDL /NJH /NJS /nc /ns /np
robocopy "%OVERRIDES_DIR%\kubejs" "%GAME_DIR%\kubejs" /E /NFL /NDL /NJH /NJS /nc /ns /np
robocopy "%OVERRIDES_DIR%\config" "%GAME_DIR%\config" /E /NFL /NDL /NJH /NJS /nc /ns /np
echo [完成] 已全部推送至游戏目录！请在游戏内使用 /ftbquests reload 刷新查看。
pause
goto EXIT

:RESET_PATH
del "%CONFIG_FILE%"
echo 路径已重置，请重新启动脚本。
pause
goto EXIT

:EXIT
exit /b 0
