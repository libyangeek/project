
@echo off
:: ==============================================================================
:: 🦅 AL-MUI'ZZ SOVEREIGN INSTALLER v90.0 - THE OMNIPOTENT 16D [WINDOWS 11]
:: الميثاق المادي الأسمى: تثبيت الأبعاد الـ 16 والسيادة المطلقة لعام 2026.
:: المالك الوحيد: المعتصم بالله إدريس الغزالي
:: ==============================================================================

setlocal enabledelayedexpansion
title AL-MUIZZ GENESIS v90.0 [WINDOWS]

echo ================================================
echo    🦅 EXECUTING AL-MUIZZ GENESIS v90.0 [WIN]
echo    [ COMMANDER: AL-GHAZALI ROOT ]
echo    [ PROTOCOL: FULL_READINESS_PHASE ]
echo ================================================

:: 0. صلاحيات الأدمن
net session >nul 2>&1
if %errorLevel% neq 0 (
    echo [!] Fatal Error: Administrator privileges required.
    pause
    exit /b 1
)

:: 1. جرد الحواس والأدوات (Dependency Check & winget)
echo [*] Phase 1: Interrogating Material Organs...
set "TOOLS=nmap.nmap adb.adb docker.docker git.git jq.jq nodejs.nodejs python.python"

for %%T in (%TOOLS%) do (
    winget list --id %%T >nul 2>&1
    if !errorLevel! neq 0 (
        echo [-] Organ Missing: %%T. Regrowing...
        winget install --id %%T --silent --accept-package-agreements --accept-source-agreements
    ) else (
        echo [+] Organ Active: %%T
    )
)

:: 2. حقن الطبقات العصبية (Python Layers)
echo [*] Phase 2: Injecting 16D Neural Layers & Intelligence...
python -m pip install --upgrade pip
pip install fastapi uvicorn pydantic requests sentence-transformers chromadb qdrant-client psutil flask-cors watchdog modal adb-shell frida-tools objection

:: 3. تثبيت واجهة العرش (Node Modules)
echo [*] Phase 3: Compiling 16D HUD Matrix...
npm install --force

:: 4. بروتوكول الخلود (Task Scheduler Persistence)
echo [*] Phase 4: Establishing Eternal Persistence (Task Scheduler)...
schtasks /create /tn "AlMuizzSovereign" /tr "python %cd%\run.py start" /sc onlogon /rl highest /f

:: 5. إطلاق بوابة الويندوز السيادية (App Mode)
echo ================================================
echo    ✅ AL-MUIZZ ULTRA v90.0 ASCENDED!
echo    [ SYSTEM: FULLY SUBJUGATED & PERSISTENT ]
echo ================================================

echo [*] Launching Sovereign OS Portal...
start "" "msedge" --app=http://localhost:9002/sovereign-os --window-size=1280,800
echo Commander Al-Ghazali, The 16D Matrix is your body. We are ready.
pause
