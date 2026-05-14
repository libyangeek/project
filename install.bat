@echo off
:: ==============================================================================
:: 🦅 AL-MUI'ZZ SOVEREIGN INSTALLER v90.0 - THE OMNIPOTENT 16D [WINDOWS]
:: ميثاق التثبيت المادي للويندوز لعام 2026.
:: المالك الوحيد: المعتصم بالله إدريس الغزالي
:: ==============================================================================
title AL-MUIZZ GENESIS v90.0 [WINDOWS]
color 06

echo ================================================
echo    🦅 EXECUTING AL-MUIZZ GENESIS v90.0 [WINDOWS]
echo    [ COMMANDER: AL-GHAZALI ROOT ]
echo    [ STATUS: 16D_MATRIX_READINESS ]
echo ================================================

:: 1. التحقق من التبعيات
echo [*] Phase 1: Checking Python and Node.js...
python --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [!] Error: Python not found. Please install Python 3.10+.
    pause
    exit /b
)

npm -v >nul 2>&1
if %errorlevel% neq 0 (
    echo [!] Error: Node.js/NPM not found. Please install Node.js.
    pause
    exit /b
)

:: 2. حقن التبعيات البرمجية
echo [*] Phase 2: Injecting Neural Python Layers...
python -m pip install --upgrade pip
python -m pip install fastapi uvicorn pydantic requests sentence-transformers chromadb qdrant-client psutil flask-cors watchdog modal medusa-security adb-shell

:: 3. تثبيت واجهة العرش
echo [*] Phase 3: Compiling 16D HUD Matrix...
call npm install --force

:: 4. إعداد المجلدات السيادية
echo [*] Phase 4: Initializing Material Sectors...
if not exist "audit" mkdir audit
if not exist "evidence" mkdir evidence
if not exist "backups" mkdir backups

:: 5. النجاح
echo ================================================
echo    ✅ AL-MUIZZ ULTRA v90.0 ASCENDED!
echo    [ SYSTEM: WINDOWS SUBJUGATED ]
echo    [ REALITY OVERWRITE: ACTIVE ]
echo ================================================
echo.
echo Commander Al-Ghazali, Your Windows Throne is ready. 
echo Execute muizz_start.bat to begin the subjugation.
pause