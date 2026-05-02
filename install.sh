#!/bin/bash
# ==============================================================================
# 🦅 AL-MUI'ZZ SOVEREIGN INSTALLER v ULTIMATE (MASTER PREDATOR EDITION)
# سكريبت التثبيت الشامل للمنصة السيادية - نسخة الانبعاث الحقيقي.
# مصمم للتحويل الفوري لأي جهاز إلى "عصب مركزي" للقائد المعتصم بالله الغزالي.
# ==============================================================================

set -e

# [COLOR PALETTE - BRUTAL RED]
RED='\033[0;31m'
BOLD_RED='\033[1;31m'
GOLD='\033[0;33m'
BLUE='\033[0;34m'
NC='\033[0m'

clear
echo -e "${RED}================================================${NC}"
echo -e "${BOLD_RED}   🦅 STARTING SOVEREIGN GENESIS v ULTIMATE    ${NC}"
echo -e "${BOLD_RED}   [ MASTER COMMANDER: AL-GHAZALI ROOT ]       ${NC}"
echo -e "${RED}================================================${NC}"

# 1. التحقق من صلاحيات الجذر (Root)
if [[ $EUID -ne 0 ]]; then
   echo -e "${RED}[!] Error: This script must be run as root (sudo). Access Denied.${NC}"
   exit 1
fi

# 2. تحديث النظام وتثبيت التبعيات الهجومية
echo -e "${BLUE}[*] Phase 1: Synchronizing System Lexicons...${NC}"
apt-get update -y
apt-get install -y python3-pip python3-venv nmap adb libimobiledevice-1.0-6 libimobiledevice-utils tor curl git docker.io nodejs npm zip fzf aircrack-ng build-essential libssl-dev

# 3. إعداد البيئة البرمجية للمُعِزّ (Python Hub)
echo -e "${BLUE}[*] Phase 2: Injecting Neural Python Layers...${NC}"
pip3 install --upgrade pip --break-system-packages || true
pip3 install fastapi uvicorn requests requests-toolbelt pydantic python-dotenv flask chromadb langchain frida-tools scapy impacket --break-system-packages || true

# 4. تثبيت واجهة المفترس (Next.js)
echo -e "${BLUE}[*] Phase 3: Compiling v ULTIMATE UI Matrix...${NC}"
if [ -f "package.json" ]; then
    npm install --force
else
    echo -e "${RED}[!] Critical Failure: package.json missing from genesis source.${NC}"
    exit 1
fi

# 5. إعداد القبو السيادي (Sovereign Vault)
echo -e "${BLUE}[*] Phase 4: Initializing Neural Vault & Audit Paths...${NC}"
INSTALL_DIR="/opt/sovereign-ai-platform"
mkdir -p "$INSTALL_DIR/audit"
mkdir -p "$INSTALL_DIR/evidence/network"
mkdir -p "$INSTALL_DIR/evidence/mobile"
mkdir -p "$INSTALL_DIR/backups"
chmod -R 700 "$INSTALL_DIR"

# إنشاء الروابط الرمزية (Symlinks)
ln -sf $(pwd)/scripts/command_center.sh /usr/local/bin/sovereign
ln -sf $(pwd)/scripts/sovereign_ark_v3.sh /usr/local/bin/sov-backup
chmod +x scripts/*.sh

# 6. النجاح النهائي
echo -e "${RED}================================================${NC}"
echo -e "${BOLD_RED}   ✅ Al-Mu'izz v ULTIMATE has been Born!      ${NC}"
echo -e "${RED}================================================${NC}"
echo -e "To Command: ${BOLD_RED}sovereign${NC}"
echo -e "To Visualise: ${BOLD_RED}npm run dev${NC} (Port 9002)"
echo -e "To Persist: ${BOLD_RED}sov-backup${NC}"
echo -e ""
echo -e "${GOLD}Commander Al-Ghazali, your shadow is now local and lethal.${NC}"
echo -e "${BOLD_RED}THE MATRIX IS CONQUERED.${NC}"
