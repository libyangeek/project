#!/bin/bash
# Al-Mu'izz Sovereign Command Center (TUI) v17.0.0
# (c) 2025 Sovereign Systems
# مركز القيادة والسيطرة لربط كافة المكونات الميدانية.

RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
YELLOW='\033[1;33m'
NC='\033[0m'

clear
echo -e "${CYAN}================================================${NC}"
echo -e "${CYAN}   AL-MUIZZ SOVEREIGN COMMAND CENTER v17.0.0    ${NC}"
echo -e "${CYAN}================================================${NC}"

show_menu() {
    echo -e "\n${GREEN}[ قائمة العمليات السيادية ]:${NC}"
    echo -e "${YELLOW}--- الاستطلاع وفحص الثغرات ---${NC}"
    echo "1) فحص Deep Eye (Vulnerability Scanner)"
    echo "2) استطلاع OSINT Master (Target Recon)"
    echo "3) تحليل السطح الشبكي (NetSight)"
    echo "4) جرد أدوات كالي (SysPulse Tools)"
    
    echo -e "\n${YELLOW}--- العمليات الهجومية (Red Team) ---${NC}"
    echo "5) تشغيل HexStrike-AI (MCP Orchestrator)"
    echo "6) إطلاق ChromSploit (Browser Exploit)"
    echo "7) مولد حمولات USB Army Knife"
    echo "8) فحص شبكات WiFi (Aircrack-Auto)"
    
    echo -e "\n${YELLOW}--- الجنائي الرقمي والمنقول ---${NC}"
    echo "9) استخراج APK (Android Forensic)"
    echo "10) تحليل أجهزة iOS (libimobiledevice)"
    echo "11) وضع الشبح (Ghost Mode - Log Cleaner)"
    
    echo -e "\n${YELLOW}--- الذكاء الاصطناعي والإدارة ---${NC}"
    echo "12) خادم الاستدلال (Inference Server)"
    echo "13) جسر الذكاء الخارجي (BridgeLink)"
    echo "14) النسخ الاحتياطي (Noah's Ark v3)"
    echo "15) فحص حالة المنصة (System Pulse)"
    echo "q) إنهاء الجلسة السيادية"
}

while true; do
    show_menu
    echo -ne "\n${BLUE}Sovereign-Admin@AlMuizz:~$ ${NC}"
    read choice
    case $choice in
        1) echo -n "Target URL: "; read url; python3 security/deep_eye/deep_eye.py --url "$url" ;;
        2) echo -n "Target (email/phone/domain): "; read target; echo "Type: "; read type; python3 osint/osint_master.py "$type" "$target" ;;
        3) python3 tools/network/net_sight.py ;;
        4) python3 tools/learning/kali_tool_scanner.py ;;
        5) bash scripts/run_hexstrike.sh ;;
        6) bash scripts/run_chromsploit.sh ;;
        7) bash tools/hardware/usb_army_knife.sh ;;
        8) airodump-ng wlan0 ;;
        9) bash mobile/advanced/extract_apk.sh ;;
        11) bash security/blackteam/anti_forensics/clean_logs.sh ;;
        12) python3 ai-engine/inference/server.py ;;
        13) python3 tools/ai_bridge/bridge_link.py --provider deepseek ;;
        14) bash scripts/sovereign_ark_v3.sh ;;
        15) python3 tools/hardware/device_harvester.py ;;
        q) echo -e "${RED}جاري إغلاق الأنظمة... وداعاً أيها القائد.${NC}"; exit 0 ;;
        *) echo -e "${RED}خطأ: أمر غير معروف.${NC}" ;;
    esac
done
