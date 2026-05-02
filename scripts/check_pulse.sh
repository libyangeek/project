
#!/bin/bash
# ==============================================================================
# 🦅 AL-MUI'ZZ SOVEREIGN PULSE CHECK v22.0
# سكريبت التحقق من سلامة العقد التسع واستقرار النظام السيادي.
# (c) 2025 Sovereign Systems - Architect Edition
# ==============================================================================

RED='\033[0;31m'
GREEN='\033[0;32m'
GOLD='\033[0;33m'
CYAN='\033[0;36m'
NC='\033[0m'

clear
echo -e "${GOLD}================================================${NC}"
echo -e "${GOLD}   🦅 KALI AL-MUI'ZZ: SOVEREIGN PULSE CHECK     ${NC}"
echo -e "${GOLD}   [ ARCHITECT LEVEL: v22.0 | STATUS: ACTIVE ]  ${NC}"
echo -e "${GOLD}================================================${NC}"

check_node() {
    local node_name=$1
    local service=$2
    if systemctl is-active --quiet "$service"; then
        echo -e "${CYAN}[*] Node $node_name:${NC} ${GREEN}ONLINE & LETHAL${NC}"
    else
        echo -e "${CYAN}[*] Node $node_name:${NC} ${RED}OFFLINE - RE-IGNITING...${NC}"
        systemctl restart "$service"
    fi
}

echo -e "${GOLD}--- فحص العصب المركزي (God-Core) ---${NC}"
check_node "01 (Alpha Engine)" "muizz-ai.service"
check_node "09 (Web Interface)" "muizz-web.service"

echo -e "\n${GOLD}--- فحص الهوية المادية (Hardware Identity) ---${NC}"
HOSTNAME=$(hostname)
if [ "$HOSTNAME" == "kali-al-muizz" ]; then
    echo -e "${CYAN}[*] System Identity:${NC} ${GREEN}KALI-AL-MUIZZ (Verified)${NC}"
else
    echo -e "${CYAN}[*] System Identity:${NC} ${RED}MISMATCH ($HOSTNAME)${NC}"
fi

echo -e "\n${GOLD}--- فحص الترسانة (Arsenal Status) ---${NC}"
if [ -f "/opt/sovereign-ai-platform/ai-engine/identity/ai_identity.json" ]; then
    echo -e "${CYAN}[*] Architect Soul:${NC} ${GREEN}LOCKED IN HARDWARE${NC}"
else
    echo -e "${CYAN}[*] Architect Soul:${NC} ${RED}NOT DETECTED${NC}"
fi

echo -e "\n${GOLD}================================================${NC}"
echo -e "${GREEN}Commander Al-Ghazali, the matrix is stabilized.${NC}"
echo -e "${CYAN}Web HUD: http://localhost:9002${NC}"
echo -e "${GOLD}================================================${NC}"
