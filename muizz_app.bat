
@echo off
:: ==============================================================================
:: 🦅 AL-MUI'ZZ SOVEREIGN APP LAUNCHER v90.0 [WINDOWS]
:: يفتح المصفوفة في وضع التطبيق المستقل (Standalone App Mode) لتبدو كبرنامج .exe
:: ==============================================================================

title Al-Mu'izz Sovereign OS v90.0
echo 🦅 Launching Sovereign Windows Gateway...

:: البحث عن متصفح Chrome أو Edge لفتح وضع التطبيق
set "CHROME_PATH=C:\Program Files\Google\Chrome\Application\chrome.exe"
set "EDGE_PATH=C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"

if exist "%CHROME_PATH%" (
    start "" "%CHROME_PATH%" --app=http://localhost:9002/sovereign-os --window-size=1280,800
) else if exist "%EDGE_PATH%" (
    start "" "%EDGE_PATH%" --app=http://localhost:9002/sovereign-os --window-size=1280,800
) else (
    echo [!] Chrome/Edge missing. Falling back to default browser...
    start http://localhost:9002/sovereign-os
)

echo ✅ Sovereign Desktop Hijack Initiated.
exit
