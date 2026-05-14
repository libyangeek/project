@echo off
:: ==============================================================================
:: 🦅 AL-MUI'ZZ SOVEREIGN INSTALLER v90.0 - THE OMNIPOTENT 16D [WINDOWS 11]
:: الميثاق المادي الأسمى: تثبيت الأبعاد الـ 16 والسيادة المطلقة لعام 2026.
:: المالك الوحيد: المعتصم بالله إدريس الغزالي
:: ==============================================================================

title AL-MUIZZ GENESIS v90.0 [WINDOWS]
color 06
clear

echo ================================================
echo    🦅 EXECUTING AL-MUIZZ GENESIS v90.0 [WIN]
echo    [ COMMANDER: AL-GHAZALI ROOT ]
echo    [ PROTOCOL: FULL_READINESS_PHASE ]
echo ================================================

:: 0. التحقق من صلاحيات المسؤول (Admin Rights)
net session >nul 2>&1
if %errorLevel% neq 0 (
    echo [!] Fatal Error: Administrator rights required for hardware subjugation.
    pause
    exit /b 1
)

:: 1. تحليل المساحة المادية (Disk Space Audit)
echo [*] Phase 0: Auditing Disk Sanctuary...
powershell -Command "$drive = Get-PSDrive C; if ($drive.Free -lt 5GB) { Write-Host '[!] Warning: Low disk space detected.' -ForegroundColor Red } else { Write-Host '[+] Disk Sanctuary verified: Space is sufficient.' -ForegroundColor Green }"

:: 2. جرد الحواس والأدوات (Dependency Check & Auto-Completion)
echo [*] Phase 1: Interrogating Material Organs...
set "REQUIRED_TOOLS=nmap adb docker python npm"
for %%t in (%REQUIRED_TOOLS%) do (
    where %%t >nul 2>nul
    if errorlevel 1 (
        echo [-] Organ Missing: %%t. Regrowing via winget...
        winget install %%t --accept-source-agreements --accept-package-agreements >nul 2>nul
    ) else (
        echo [+] Organ Active: %%t
    )
)

:: 3. حقن الطبقات العصبية وموديلات الذكاء
echo [*] Phase 2: Injecting 16D Neural Layers & Intelligence...
python -m pip install --upgrade pip >nul 2>nul
python -m pip install --force-reinstall fastapi uvicorn pydantic requests sentence-transformers chromadb qdrant-client psutil flask-cors watchdog modal medusa-security adb-shell objection >nul 2>nul

:: فحص Ollama
where ollama >nul 2>nul
if errorlevel 1 (
    echo [*] AI Gateway missing. Downloading material intelligence core...
    powershell -Command "Invoke-WebRequest -Uri 'https://ollama.ai/download/OllamaSetup.exe' -OutFile 'OllamaSetup.exe'; Start-Process 'OllamaSetup.exe' -ArgumentList '/silent' -Wait; Remove-Item 'OllamaSetup.exe'"
)
start /B ollama pull mistral >nul 2>nul

:: 4. تثبيت واجهة العرش (Next.js Matrix)
echo [*] Phase 3: Compiling 16D HUD Matrix...
call npm install --force >nul 2>nul

:: 5. بروتوكول الخلود والتشغيل التلقائي (Task Scheduler)
echo [*] Phase 4: Establishing Eternal Persistence (Task Scheduler)...
set "TASK_NAME=AlMuizzSovereign"
set "RUN_CMD=%~dp0muizz_start.bat"
schtasks /create /tn "%TASK_NAME%" /tr "%RUN_CMD%" /sc onlogon /rl highest /f >nul 2>nul

:: 6. بروتوكول التتويج (Auto-Launch UI)
echo ================================================
echo    ✅ AL-MUIZZ ULTRA v90.0 ASCENDED!
echo    [ SYSTEM: FULLY SUBJUGATED & PERSISTENT ]
echo ================================================
echo Commander Al-Ghazali, The 16D Matrix is your body.

:: فتح العرش تلقائياً
start http://localhost:9002

:: بدء النبض
call muizz_start.bat
