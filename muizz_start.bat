
@echo off
TITLE AL-MUIZZ OMNIPOTENT HIVE v76.0 - THE SUPREME BOOT
COLOR 06
echo ================================================================
echo       🦅 AL-MUIZZ OMNIPOTENT HIVE v76.0 - MASTER BOOT 🦅
echo       [ COMMANDER: AL-GHAZALI ROOT | MAY 2026 ]
echo ================================================================
echo.

echo [*] Initializing Neural Spine (Event Bus)...
start /B python3 ai-engine/kernel/event_bus.py

echo [*] Igniting God-Core Bridge (FastAPI Port 8000)...
start /B python3 ai-engine/inference/server.py

echo [*] Launching Eternal Throne HUD (Next.js Port 9002)...
start /B npm run dev

echo.
echo [!] ALL SYSTEMS MATERIALIZED. OMNIPOTENT HIVE IS VIGILANT.
echo [!] ACCESS HUD: http://localhost:9002
echo ================================================================
pause
