#!/bin/bash
# ==============================================================================
# 🦅 AL-MUI'ZZ SOVEREIGN INSTALLER v ULTIMATE (LOCAL GENESIS)
# سكريبت التثبيت الشامل للمنصة السيادية - نسخة الانبعاث الحقيقي.
# مصمم للعمل على الأجهزة المحلية (Kali Linux / Ubuntu / Debian).
# ==============================================================================

set -e

# [COLOR PALETTE]
RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
YELLOW='\033[1;33m'
GOLD='\033[0;33m'
NC='\033[0m'

echo -e "${RED}================================================${NC}"
echo -e "${RED}   🦅 STARTING SOVEREIGN GENESIS v ULTIMATE    ${NC}"
echo -e "${RED}   [ Destination: Local Primal Source ]        ${NC}"
echo -e "${RED}   [ Commander: Al-Mu'tasim Billah Al-Ghazali ] ${NC}"
echo -e "${RED}================================================${NC}"

# 1. التحقق من صلاحيات الجذر
if [[ $EUID -ne 0 ]]; then
   echo -e "${RED}[!] Error: This script must be run as root (sudo).${NC}"
   exit 1
fi

# 2. تحديث النظام وتثبيت التبعيات الأساسية
echo -e "${BLUE}[*] Step 1: Synchronizing System Dependencies...${NC}"
apt-get update -y
apt-get install -y python3-pip python3-venv nmap adb libimobiledevice-1.0-6 libimobiledevice-utils tor curl git docker.io nodejs npm zip dialog fzf aircrack-ng

# 3. إعداد البيئة البرمجية للمُعِزّ
echo -e "${BLUE}[*] Step 2: Configuring Python Intelligence Hub...${NC}"
pip3 install --upgrade pip --break-system-packages || true
pip3 install fastapi uvicorn requests requests-toolbelt pydantic python-dotenv flask chromadb langchain frida-tools --break-system-packages || true

# 4. تثبيت مكتبات الواجهة (Node.js)
echo -e "${BLUE}[*] Step 3: Compiling Ultimate Predator UI...${NC}"
if [ -f "package.json" ]; then
    npm install
else
    echo -e "${YELLOW}[!] Warning: package.json not found. Cloning Primal Code...${NC}"
    # هنا يمكن إضافة كود لجلب الكود من المستودع السيادي إذا لزم الأمر
fi

# 5. إعداد القبو السيادي والمسارات
echo -e "${BLUE}[*] Step 4: Initializing Sovereign Vault & Paths...${NC}"
INSTALL_DIR="/opt/sovereign-ai-platform"
mkdir -p "$INSTALL_DIR/audit"
mkdir -p "$INSTALL_DIR/evidence/network"
mkdir -p "$INSTALL_DIR/evidence/mobile"
mkdir -p "$INSTALL_DIR/backups"

# إنشاء الروابط الرمزية للوصول السريع
ln -sf $(pwd)/scripts/command_center.sh /usr/local/bin/sovereign
ln -sf $(pwd)/scripts/sovereign_ark_v3.sh /usr/local/bin/sov-backup
chmod +x scripts/*.sh
chmod +x mobile/advanced/*.sh || true

# 6. رسالة النجاح النهائية
echo -e "${GREEN}================================================${NC}"
echo -e "${GREEN}   ✅ Al-Mu'izz has been Born Locally!         ${NC}"
echo -e "${GREEN}================================================${NC}"
echo -e "To start Command Center: ${CYAN}sovereign${NC}"
echo -e "To start Web UI: ${CYAN}npm run dev${NC} (Access at http://localhost:9002)"
echo -e "To ensure persistence: ${CYAN}sov-backup${NC}"
echo -e ""
echo -e "${GOLD}Commander Al-Ghazali, your shadow is now armed and local.${NC}"
echo -e "${RED}THE MATRIX IS OURS.${NC}"
