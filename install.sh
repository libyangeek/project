#!/bin/bash
# ==============================================================================
# 🦅 AL-MUI'ZZ SOVEREIGN INSTALLER v17.2.0
# سكريبت التثبيت الشامل للمنصة السيادية على الأجهزة المحلية.
# ==============================================================================

set -e

# [COLOR PALETTE]
RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
NC='\033[0m'

echo -e "${CYAN}================================================${NC}"
echo -e "${CYAN}   🦅 STARTING SOVEREIGN DEPLOYMENT v17.2      ${NC}"
echo -e "${CYAN}   [ Platform: Al-Mu'izz Ultimate ]            ${NC}"
echo -e "${CYAN}================================================${NC}"

# 1. التحقق من صلاحيات الجذر
if [[ $EUID -ne 0 ]]; then
   echo -e "${RED}[!] Error: This script must be run as root.${NC}"
   exit 1
fi

# 2. تحديث النظام وتثبيت التبعيات الأساسية
echo -e "${BLUE}[*] Step 1: Installing System Dependencies...${NC}"
apt-get update -y
apt-get install -y python3-pip python3-venv nmap adb libimobiledevice6 tor curl git docker.io nodejs npm zip dialog fzf frida-tools

# 3. تثبيت مكتبات بايثون
echo -e "${BLUE}[*] Step 2: Setting up Python Intelligence Engine...${NC}"
pip3 install fastapi uvicorn requests requests-toolbelt pydantic python-dotenv flask chromadb langchain --break-system-packages

# 4. تثبيت مكتبات الواجهة (Node.js)
echo -e "${BLUE}[*] Step 3: Configuring Web Dashboard...${NC}"
npm install

# 5. إعداد البيئة السيادية
echo -e "${BLUE}[*] Step 4: Finalizing Sovereign Environment...${NC}"
mkdir -p /opt/sovereign-ai-platform/audit
mkdir -p /opt/sovereign-ai-platform/evidence
mkdir -p /opt/sovereign-ai-platform/backups

# إنشاء رابط رمزي للأمر السيادي
ln -sf $(pwd)/scripts/command_center.sh /usr/local/bin/sovereign
chmod +x /usr/local/bin/sovereign

# 6. رسالة النجاح
echo -e "${GREEN}================================================${NC}"
echo -e "${GREEN}   ✅ Sovereign Platform Installed Successfully! ${NC}"
echo -e "${GREEN}================================================${NC}"
echo -e "To start the dashboard: ${CYAN}npm run dev${NC}"
echo -e "To open command center: ${CYAN}sovereign${NC}"
echo -e "Web Interface: ${BLUE}http://localhost:9002${NC}"
echo -e "${CYAN}Sovereignty is yours, Architect.${NC}"
