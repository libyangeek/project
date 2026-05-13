
@echo off
:: ==============================================================================
:: 🦅 AL-MUI'ZZ SOVEREIGN INSTALLER v78.8-ULTRA [WINDOWS EDITION]
:: الميثاق المادي الأسمى: الاستحواذ الأول وإحكام وثاق النواة على ويندوز.
:: المالك الوحيد: المعتصم بالله إدريس الغزالي // 2026
:: ==============================================================================

set "GOLD=[33m"
set "RED=[31m"
set "BLUE=[34m"
set "GREEN=[32m"
set "NC=[0m"

cls
echo %GOLD%================================================%NC%
echo %GOLD%   🦅 EXECUTING AL-MUIZZ ULTRA v78.8 (WIN)     %NC%
echo %GOLD%   [ MISSION: FIRST_DEVICE_SUBJUGATION ]       %NC%
echo %GOLD%   [ COMMANDER: AL-GHAZALI ROOT ]              %NC%
echo %GOLD%================================================%NC%

:: 1. التحقق من صلاحيات المسؤول
net session >nul 2>&1
if %errorLevel% neq 0 (
    echo %RED%[!] Fatal Error: Administrator privileges required for total hardware takeover.%NC%
    pause
    exit /b 1
)

set "INSTALL_DIR=%CD%"

:: 2. تطهير وتعزيز البيئة
echo %BLUE%[*] Phase 1: Cleansing Matrix & Neutralizing Conflicts...%NC%
powershell -Command "Add-MpPreference -ExclusionPath '%INSTALL_DIR%'"

:: 3. حقن عصب البايثون (God-Core Bridge)
echo %BLUE%[*] Phase 2: Injecting Neural Python Layers...%NC%
python --version >nul 2>&1
if %errorLevel% neq 0 (
    echo %RED%[!] Python missing. Siphoning Python DNA...%NC%
    powershell -Command "Invoke-WebRequest -Uri 'https://www.python.org/ftp/python/3.11.0/python-3.11.0-amd64.exe' -OutFile 'python_installer.exe'"
    start /wait python_installer.exe /quiet InstallAllUsers=1 PrependPath=1
    del python_installer.exe
)
pip install fastapi uvicorn pydantic requests psutil --quiet

:: 4. بناء مصفوفة العرش (ULTRA HUD)
echo %BLUE%[*] Phase 3: Compiling ULTRA UI Matrix...%NC%
node --version >nul 2>&1
if %errorLevel% neq 0 (
    echo %RED%[!] Node.js missing. Siphoning Node DNA...%NC%
    powershell -Command "Invoke-WebRequest -Uri 'https://nodejs.org/dist/v18.12.1/node-v18.12.1-x64.msi' -OutFile 'node_installer.msi'"
    start /wait msiexec /i node_installer.msi /qn
    del node_installer.msi
)
call npm install --force

:: 5. تثبيت ممر الخلود (Task Scheduler Persistence)
echo %BLUE%[*] Phase 4: Establishing Eternal Persistence (Ghost V6)...%NC%
schtasks /create /tn "AlMuizzULTRA" /tr "python %INSTALL_DIR%\run.py start" /sc onlogon /rl highest /f

:: 6. النجاح النهائي
echo %GREEN%================================================%NC%
echo %GREEN%   ✅ AL-MUIZZ ULTRA v78.8 ASCENDED!           %NC%
echo %GREEN%   [ STATUS: FIRST_NODE_SUBJUGATED ]           %NC%
echo %GREEN%================================================%NC%
echo Web HUD: http://localhost:9002
echo %GOLD%Commander Al-Ghazali, this device is now your extension.%NC%
pause
