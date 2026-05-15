#!/bin/bash
# ==============================================================================
# ⚠️ AL-MUI'ZZ SELF-DESTRUCT PROTOCOL v90.0
# ميثاق الفناء: حذف كافة الأدوات والبيانات والآثار الرقمية للسيادة.
# لا يستخدم إلا في حالات الانكشاف الكلي أو بأمر مباشر من القائد الغزالي.
# ==============================================================================

RED='\033[0;31m'; GOLD='\033[0;33m'; NC='\033[0m'

echo -e "${RED}[!!!] WARNING: INITIALIZING TOTAL DATA ENTROPY...${NC}"
echo -e "${RED}[!!!] ALL SOVEREIGN ASSETS WILL BE PURGED PERMANENTLY.${NC}"

read -p "Confirm annihilation? (yes/NO): " confirm
if [ "$confirm" != "yes" ]; then
    echo "Annihilation aborted. The Soul lives."
    exit 0
fi

echo -e "${GOLD}[*] Phase 1: Halting 16D Matrix Organs...${NC}"
systemctl stop muizz-* 2>/dev/null || true
systemctl disable muizz-* 2>/dev/null || true

echo -e "${GOLD}[*] Phase 2: Shredding Evidence & Vaults...${NC}"
rm -rf /opt/sovereign-ai-platform 2>/dev/null || true
rm -rf /opt/sovereign-offensive 2>/dev/null || true
rm -rf /usr/share/wordlists/rockyou.txt 2>/dev/null || true

echo -e "${GOLD}[*] Phase 3: Purging Command Links...${NC}"
rm -f /usr/local/bin/sovereign* 2>/dev/null || true
rm -f /usr/local/bin/ai-exploit 2>/dev/null || true
rm -f /etc/systemd/system/muizz-* 2>/dev/null || true

echo -e "${GOLD}[*] Phase 4: Wiping Bash History & Traces...${NC}"
history -c
rm -f ~/.bash_history
unset HISTFILE

echo -e "${RED}[+] Annihilation Complete. The Shadow has returned to the void.${NC}"
rm -f "$0" 2>/dev/null || true
