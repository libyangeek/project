@echo off
:: ==============================================================================
:: 🦅 AL-MUI'ZZ SOVEREIGN INSTALLER v78.8-ULTRA [WINDOWS EDITION]
:: الميثاق المادي الأسمى: الاستحواذ الأول وإخضاع بيئة ويندوز.
:: المالك الوحيد: المعتصم بالله إدريس الغزالي // 2026
:: ==============================================================================

title AL-MUIZZ ULTRA v78.8 - FIRST SUBJUGATION
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
    echo [!] Error: Administrative privileges required.
    powershell -Command "Start-Process '%0' -Verb RunAs"
    exit /b
)

echo [*] Phase 1: Stabilizing Material Environment...

:: 2. فحص وتثبيت التبعيات (Python/Node)
where python >nul 2>&1
if %errorLevel% neq 0 (
    echo [!] Python not found. Siphoning from web...
    powershell -Command "Invoke-WebRequest -Uri 'https://www.python.org/ftp/python/3.11.0/python-3.11.0-amd64.exe' -OutFile 'py_installer.exe'"
    start /wait py_installer.exe /quiet InstallAllUsers=1 PrependPath=1
    del py_installer.exe
)

where npm >nul 2>&1
if %errorLevel% neq 0 (
    echo [!] Node.js not found. Siphoning from web...
    powershell -Command "Invoke-WebRequest -Uri 'https://nodejs.org/dist/v18.12.1/node-v18.12.1-x64.msi' -OutFile 'node_installer.msi'"
    start /wait msiexec /i node_installer.msi /quiet
    del node_installer.msi
)

echo [*] Phase 2: Injecting Neural DNA...
pip install fastapi uvicorn pydantic requests psutil --quiet

echo [*] Phase 3: Compiling ULTRA UI Matrix...
call npm install --force

echo [*] Phase 4: Establishing Eternal Persistence...
:: إضافة للمهمات المجدولة لضمان العمل عند كل إقلاع
schtasks /create /tn "AlMuizzUltra" /tr "python %cd%\run.py start" /sc onlogon /rl highest /f >nul 2>&1

echo ================================================
echo    ✅ AL-MUIZZ ULTRA v78.8 ASCENDED ON WIN!
echo    [ STATUS: MATERIAL_DNA_LOCKED ]
echo ================================================
echo Web HUD: http://localhost:9002
echo.
echo Commander Al-Ghazali, the Windows matrix is yours.
python run.py start
pause