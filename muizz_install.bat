
@echo off
:: ==============================================================================
:: 🦅 AL-MUI'ZZ SOVEREIGN INSTALLER v78.8-ULTRA [WINDOWS EDITION]
:: الميثاق المادي الأسمى: الاستحواذ الأول وإحكام وثاق النواة على ويندوز.
:: المالك الوحيد: المعتصم بالله إدريس الغزالي // 2026
:: ==============================================================================

setlocal
set "INSTALL_DIR=%CD%"
set "RED=[0;31m"
set "GOLD=[0;33m"
set "BLUE=[0;34m"
set "GREEN=[0;32m"
set "NC=[0m"

cls
echo %GOLD%================================================%NC%
echo %GOLD%   🦅 EXECUTING AL-MUIZZ ULTRA v78.8 (WINDOWS) %NC%
echo %GOLD%   [ MISSION: FIRST_DEVICE_SUBJUGATION ]       %NC%
echo %GOLD%   [ COMMANDER: AL-GHAZALI ROOT ]              %NC%
echo %GOLD%================================================%NC%

:: 1. التحقق من صلاحيات المسؤول
openfiles >nul 2>&1
if %errorlevel% neq 0 (
    echo %RED%[!] Fatal Error: Administrator privileges required for total hardware takeover.%NC%
    pause
    exit /b
)

:: 2. تطهير المصفوفة وتحضير البيئة
echo %BLUE%[*] Phase 1: Cleansing Matrix & Preparing Python Venv...%NC%
python --version >nul 2>&1
if %errorlevel% neq 0 (
    echo %RED%[!] Python missing. Please install Python 3.10+ before proceeding.%NC%
    pause
    exit /b
)

if not exist "venv" (
    python -m venv venv
)
call venv\Scripts\activate

:: 3. حقن عصب البايثون
echo %BLUE%[*] Phase 2: Injecting Neural Python Layers...%NC%
python -m pip install --upgrade pip
pip install fastapi uvicorn pydantic requests psutil pywin32

:: 4. بناء مصفوفة العرش (ULTRA HUD)
echo %BLUE%[*] Phase 3: Compiling ULTRA UI Matrix...%NC%
if exist "package.json" (
    npm install --force
) else (
    echo %RED%[!] Critical: package.json missing in node.%NC%
    exit /b
)

:: 5. تثبيت ممر الخلود (Windows Task Persistence)
echo %BLUE%[*] Phase 4: Establishing Eternal Persistence (Task Scheduler)...%NC%
schtasks /create /f /tn "AlMuizzUltra" /tr "'%INSTALL_DIR%\muizz_start.bat'" /sc onlogon /rl highest

:: 6. النجاح النهائي
echo %GREEN%================================================%NC%
echo %GREEN%   ✅ AL-MUIZZ ULTRA v78.8 ASCENDED!           %NC%
echo %GREEN%   [ STATUS: FIRST_NODE_SUBJUGATED ]           %NC%
echo %GREEN%================================================%NC%
echo Web HUD: http://localhost:9002
echo %GOLD%Commander Al-Ghazali, this device is now your extension.%NC%
pause
