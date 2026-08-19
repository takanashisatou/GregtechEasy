@echo off
title GTE Directory Link Tool

echo ========================================================
echo        GTE Quest / Config Zero-Copy Link Tool
echo ========================================================
echo.
echo This tool links your launcher's .minecraft directory directly
echo to the repository's gte/overrides folder.
echo Any in-game changes will be saved directly into Git repository!
echo.
echo ========================================================
echo.

set /p GAME_DIR="Please drag and drop your .minecraft folder path here and press Enter: "

set GAME_DIR=%GAME_DIR:"=%

if not exist "%GAME_DIR%" (
    echo.
    echo [Error] Path does not exist: "%GAME_DIR%"
    pause
    exit /b 1
)

set ROOT_DIR=%~dp0
set OVERRIDES_DIR=%ROOT_DIR%gte\overrides

echo.
echo Creating junctions...
echo Repo directory: %OVERRIDES_DIR%
echo Target game directory: %GAME_DIR%
echo.

call :link_folder config
call :link_folder kubejs
call :link_folder ftbquests
call :link_folder defaultconfigs

echo.
echo ========================================================
echo [Success] All folders linked successfully!
echo You can now edit in-game and commit directly in GitHub Desktop!
echo ========================================================
echo.
pause
exit /b 0

:link_folder
set FOLDER_NAME=%1
set TARGET_PATH=%GAME_DIR%\%FOLDER_NAME%
set SOURCE_PATH=%OVERRIDES_DIR%\%FOLDER_NAME%

if not exist "%SOURCE_PATH%" (
    mkdir "%SOURCE_PATH%"
)

if exist "%TARGET_PATH%" (
    echo [Info] Existing %FOLDER_NAME% found, backing up to %FOLDER_NAME%_backup...
    if exist "%TARGET_PATH%_backup" rmdir /s /q "%TARGET_PATH%_backup"
    ren "%TARGET_PATH%" "%FOLDER_NAME%_backup"
)

mklink /J "%TARGET_PATH%" "%SOURCE_PATH%" >nul
if %errorlevel% equ 0 (
    echo  [OK] Linked %FOLDER_NAME%
) else (
    echo  [FAILED] Failed to link %FOLDER_NAME%, please try running as Administrator.
)
goto :eof
