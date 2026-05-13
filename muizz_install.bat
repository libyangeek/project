@echo off
:: ==============================================================================
:: 🦅 AL-MUI'ZZ SOVEREIGN INSTALLER v78.7-ULTRA [WINDOWS EDITION]
:: الميثاق المادي الأسمى: تثبيت السيادة على بيئة ويندوز وتفعيل العصب.
:: المالك الوحيد: المعتصم بالله إدريس الغزالي // 2026
:: ==============================================================================

title AL-MUIZZ ULTRA v78.7 - WINDOWS INSTALLER
color 0E

echo ============================================================
echo   🦅 EXECUTING AL-MUIZZ ULTRA v78.7 (WINDOWS)
echo   [ PROTOCOL: MATERIAL_WINDOWS_SYNC ]
echo ============================================================

:: 1. التحقق من التبعيات
echo [*] Phase 1: Checking Material Dependencies...
python --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [!] Error: Python not found. Please install Python 3.10+ from python.org
    pause
    exit /b
)

node -v >nul 2>&1
if %errorlevel% neq 0 (
    echo [!] Error: Node.js not found. Please install Node.js from nodejs.org
    pause
    exit /b
)

:: 2. تثبيت تبعيات بايثون
echo [*] Phase 2: Injecting Neural Python Layers...
pip install fastapi uvicorn pydantic requests psutil

:: 3. تثبيت تبعيات الواجهة
echo [*] Phase 3: Compiling ULTRA UI Matrix...
call npm install --force

:: 4. إنشاء مِلَفّ التشغيل السريع
echo [*] Phase 4: Finalizing Windows Entry Point...
echo @echo off > muizz_start.bat
echo title AL-MUIZZ ULTRA v78.7 - ACTIVE >> muizz_start.bat
echo python run.py start >> muizz_start.bat

echo ============================================================
echo   ✅ AL-MUIZZ ULTRA v78.7 ASCENDED ON WINDOWS
echo ============================================================
echo To launch the Overmind: Run muizz_start.bat
echo Web HUD will be available at http://localhost:9002
pause