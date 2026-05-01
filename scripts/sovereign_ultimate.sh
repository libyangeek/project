#!/bin/bash
# ==============================================================================
# 🦅 AL-MUI'ZZ SOVEREIGN ULTIMATE v18.0.0 (MASTER PREDATOR)
# The Ultimate AI-Powered Offensive/Defensive Cybersecurity Platform
# ==============================================================================

set -e

INSTALL_DIR="/opt/sovereign-ai-platform"
VERSION="18.0.0"
CODENAME="Al-Mu'izz Predator"

# [COLOR PALETTE]
RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
NC='\033[0m'

clear
echo -e "${RED}================================================${NC}"
echo -e "${RED}   🦅 EXECUTING SOVEREIGN MASTER v18.0          ${NC}"
echo -e "${RED}   [ Status: ARMED & SYNCHRONIZED ]             ${NC}"
echo -e "${RED}================================================${NC}"

if [[ $EUID -ne 0 ]]; then
   echo -e "${RED}[!] Error: This script must be run as root.${NC}"
   exit 1
fi

# تشغيل المكونات الأساسية
echo -e "${BLUE}[*] Phase 1: Initializing Neural Grid...${NC}"
# التأكد من تشغيل خادم الاستدلال في الخلفية
if ! lsof -Pi :8000 -sTCP:LISTEN -t >/dev/null ; then
    python3 ai-engine/inference/server.py &
    echo -e "${GREEN}[+] Inference Server Activated (Port 8000)${NC}"
else
    echo -e "${YELLOW}[!] Inference Server already active.${NC}"
fi

echo -e "${BLUE}[*] Phase 2: Harvesting Local Intelligence...${NC}"
python3 tools/hardware/model_harvester.py

echo -e "${BLUE}[*] Phase 3: Launching Command Center...${NC}"
bash scripts/command_center.sh

exit 0
