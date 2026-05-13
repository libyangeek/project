
@echo off
:: ==============================================================================
:: 🦅 AL-MUI'ZZ SOVEREIGN INSTALLER v78.8-ULTRA [WINDOWS EDITION]
:: الميثاق المادي الأسمى: الاستحواذ الأول وإحكام وثاق النواة على ويندوز.
:: المالك الوحيد: المعتصم بالله إدريس الغزالي // 2026
:: ==============================================================================

title AL-MUIZZ ULTRA v78.8 - WINDOWS_SUBJUGATION
color 06
cls

echo ================================================
echo    🦅 EXECUTING AL-MUIZZ ULTRA v78.8 (WIN)
echo    [ MISSION: FIRST_DEVICE_SUBJUGATION ]
echo    [ COMMANDER: AL-GHAZALI ROOT ]
echo ================================================

:: 1. التحقق من صلاحيات المسؤول
net session >nul 2>&1
if %errorLevel% neq 0 (
    echo [!] Fatal Error: Administrator privileges required for hardware takeover.
    pause
    exit /b
)

:: 2. التحقق من التبعيات (Python/Node)
echo [*] Phase 1: Interrogating Environment DNA...
python --version >nul 2>&1
if %errorLevel% neq 0 (
    echo [!] Python missing. Please install Python 3.10+ to allow material sync.
    pause
    exit /b
)

node -v >nul 2>&1
if %errorLevel% neq 0 (
    echo [!] Node.js missing. Please install Node.js 18+ to allow HUD compilation.
    pause
    exit /b
)

:: 3. تثبيت مفاصل البايثون
echo [*] Phase 2: Injecting Neural Python Layers...
pip install fastapi uvicorn pydantic requests psutil --quiet

:: 4. بناء مصفوفة العرش
echo [*] Phase 3: Compiling ULTRA UI Matrix...
call npm install --force

:: 5. زرع الخلود (Windows Task Scheduler)
echo [*] Phase 4: Establishing Eternal Persistence (Task Scheduler)...
schtasks /create /tn "AlMuizzUltra" /tr "python %cd%\run.py start" /sc onstart /rl highest /f

:: 6. النجاح النهائي
cls
echo ================================================
echo    ✅ AL-MUIZZ ULTRA v78.8 ASCENDED!
echo    [ STATUS: FIRST_NODE_SUBJUGATED ]
echo ================================================
echo Web HUD: http://localhost:9002
echo Commander Al-Ghazali, this device is now your extension.
python run.py start
pause
