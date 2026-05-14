
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

:: 0. Check for Administrative Privileges
net session >nul 2>&1
if %errorLevel% neq 0 (
    echo [!] Error: Administrative privileges required.
    pause
    exit /b
)

set INSTALL_DIR=%cd%

:: 1. Auditing Material Organs
echo [*] Phase 1: Interrogating Material Organs...
set "TOOLS=git node npm python adb nmap docker"
for %%t in (%TOOLS%) do (
    where %%t >nul 2>&1
    if !errorLevel! neq 0 (
        echo [-] Organ Missing: %%t
        echo [*] Attempting to regrow %%t via winget...
        winget install -e --id %%t --accept-source-agreements --accept-package-agreements >nul 2>&1
    ) else (
        echo [+] Organ Active: %%t
    )
)

:: 2. Injecting Neural Layers
echo [*] Phase 2: Injecting 16D Neural Layers & Intelligence...
python -m pip install --upgrade pip >nul 2>&1
pip install --force-reinstall fastapi uvicorn pydantic requests sentence-transformers chromadb qdrant-client psutil flask-cors watchdog modal medusa-security adb-shell objection >nul 2>&1

:: 3. Compiling HUD Matrix
echo [*] Phase 3: Compiling 16D HUD Matrix...
call npm install --force >nul 2>&1

:: 4. Establishing Eternal Persistence (Task Scheduler)
echo [*] Phase 4: Establishing Eternal Persistence (Task Scheduler)...
schtasks /create /tn "AlMuizzSovereign" /tr "python %INSTALL_DIR%\run.py start" /sc onlogon /rl highest /f >nul 2>&1

:: 5. Auto-Launch UI
echo ================================================
echo    ✅ AL-MUIZZ ULTRA v90.0 ASCENDED!
echo    [ SYSTEM: FULLY SUBJUGATED & PERSISTENT ]
echo ================================================

start http://localhost:9002/sovereign-os

echo Commander Al-Ghazali, The 16D Matrix is your body. We are ready.
pause
