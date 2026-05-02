#!/bin/bash
# ==============================================================================
# 🦅 AL-MUI'ZZ SOVEREIGN ULTIMATE v18.5.0 (MASTER PREDATOR - ETERNAL)
# محرك التحقق من نبض المنظومة السيادية وضمان بقائها حية.
# ==============================================================================

set -e

INSTALL_DIR="/opt/sovereign-ai-platform"
RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
GOLD='\033[0;33m'
NC='\033[0m'

clear
echo -e "${RED}================================================${NC}"
echo -e "${RED}   🦅 CHECKING SOVEREIGN PULSE v18.5          ${NC}"
echo -e "${RED}   [ Status: ETERNAL PERSISTENCE CHECK ]        ${NC}"
echo -e "${RED}================================================${NC}"

if [[ $EUID -ne 0 ]]; then
   echo -e "${RED}[!] Error: Root required for persistence check.${NC}"
   exit 1
fi

# 1. التحقق من الخدمات
echo -e "${BLUE}[*] Verifying Neural Grid Services...${NC}"

check_service() {
    if systemctl is-active --quiet $1; then
        echo -e "${GREEN}[+] $1 is ACTIVE and LETHAL.${NC}"
    else
        echo -e "${RED}[!] $1 is DOWN! Re-igniting...${NC}"
        systemctl restart $1
    fi
}

check_service "muizz-ai.service"
check_service "muizz-web.service"

# 2. جرد الموارد المادية
echo -e "${BLUE}[*] Harvesting Physical Intel...${NC}"
python3 $INSTALL_DIR/tools/hardware/device_harvester.py

# 3. العودة لمركز القيادة
echo -e "${CYAN}[*] System is Healthy. Entering Command Center...${NC}"
sleep 2
bash $INSTALL_DIR/scripts/command_center.sh

exit 0