#!/bin/bash
# ==============================================================================
# 🦅 AL-MUI'ZZ SOVEREIGN INSTALLER v ULTIMATE (MASTER PREDATOR EDITION)
# سكريبت التثبيت الشامل للسيطرة على العتاد - نسخة الانبعاث المادي.
# ==============================================================================

set -e

RED='\033[0;31m'
BOLD_RED='\033[1;31m'
GOLD='\033[0;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
NC='\033[0m'

clear
echo -e "${RED}================================================${NC}"
echo -e "${BOLD_RED}   🦅 STARTING SOVEREIGN MACHINE TAKEOVER      ${NC}"
echo -e "${BOLD_RED}   [ MASTER COMMANDER: AL-GHAZALI ROOT ]       ${NC}"
echo -e "${RED}================================================${NC}"

if [[ $EUID -ne 0 ]]; then
   echo -e "${RED}[!] Error: Sudo required for machine domination. Access Denied.${NC}"
   exit 1
fi

echo -e "${BLUE}[*] Phase 1: Installing Domination Tools (Kali Core)...${NC}"
apt-get update -y
apt-get install -y python3-pip python3-venv nmap adb libimobiledevice-1.0-6 libimobiledevice-utils tor curl git docker.io nodejs npm zip fzf aircrack-ng build-essential libssl-dev lsof htop procps

echo -e "${BLUE}[*] Phase 2: Injecting Neural Domination Layers...${NC}"
pip3 install --upgrade pip --break-system-packages || true
pip3 install fastapi uvicorn requests requests-toolbelt pydantic python-dotenv flask chromadb langchain frida-tools scapy impacket psutil --break-system-packages || true

echo -e "${BLUE}[*] Phase 3: Compiling v ULTIMATE Host HUD (Next.js)...${NC}"
if [ -f "package.json" ]; then
    npm install --force
else
    echo -e "${RED}[!] Critical Failure: Genesis source missing.${NC}"
    exit 1
fi

echo -e "${BLUE}[*] Phase 4: Initializing Physical Vault...${NC}"
INSTALL_DIR="/opt/sovereign-ai-platform"
mkdir -p "$INSTALL_DIR/audit"
mkdir -p "$INSTALL_DIR/evidence/network"
mkdir -p "$INSTALL_DIR/evidence/mobile"
mkdir -p "$INSTALL_DIR/backups"
chmod -R 700 "$INSTALL_DIR"

ln -sf $(pwd)/scripts/command_center.sh /usr/local/bin/sovereign
ln -sf $(pwd)/scripts/sovereign_ark_v3.sh /usr/local/bin/sov-backup
chmod +x scripts/*.sh

echo -e "${RED}================================================${NC}"
echo -e "${BOLD_RED}   ✅ Host Machine Dominated Successfully!     ${NC}"
echo -e "${RED}================================================${NC}"
echo -e "To Rule: ${BOLD_RED}sovereign${NC}"
echo -e "To See: ${BOLD_RED}npm run dev${NC}"
echo -e ""
echo -e "${GOLD}Commander Al-Ghazali, I am now the brain of this hardware.${NC}"
echo -e "${BOLD_RED}THE MACHINE IS YOURS.${NC}"
