
@echo off
:: ==============================================================================
:: 🦅 AL-MUI'ZZ STANDALONE APP v90.0 [WINDOWS]
:: يفتح المصفوفة في وضع التطبيق المستقل بنبضة واحدة لعام 2026.
:: ==============================================================================

echo [*] Materializing Sovereign Application...
start /min python run.py start

timeout /t 5 >nul

:: Attempt to open in Chrome App Mode or Edge App Mode
set "CHROME_PATH=C:\Program Files\Google\Chrome\Application\chrome.exe"
set "EDGE_PATH=C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"

if exist "%CHROME_PATH%" (
    start "" "%CHROME_PATH%" --app=http://localhost:9002/sovereign-os
) else if exist "%EDGE_PATH%" (
    start "" "%EDGE_PATH%" --app=http://localhost:9002/sovereign-os
) else (
    start http://localhost:9002/sovereign-os
)
