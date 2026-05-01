#!/bin/bash
# ==============================================================================
# 🦅 AL-MUI'ZZ SOVEREIGN INSTALLER v18.0.1
# سكريبت التثبيت الشامل للمنصة السيادية - وضع المفترس.
# تم التحديث لحل مشاكل التبعيات في Kali Linux 2024.
# ==============================================================================

set -e

# [COLOR PALETTE]
RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo -e "${RED}================================================${NC}"
echo -e "${RED}   🦅 STARTING PREDATOR DEPLOYMENT v18.0       ${NC}"
echo -e "${RED}   [ Platform: Al-Mu'izz Ultimate ]            ${NC}"
echo -e "${RED}================================================${NC}"

# 1. التحقق من صلاحيات الجذر
if [[ $EUID -ne 0 ]]; then
   echo -e "${RED}[!] Error: This script must be run as root.${NC}"
   exit 1
fi

# 2. تحديث النظام وتثبيت التبعيات الأساسية
echo -e "${BLUE}[*] Step 1: Installing Offensive Toolchain...${NC}"
apt-get update -y

# تصحيح مسميات الحزم المتغيرة في التوزيعات الحديثة
# تم استبدال libimobiledevice6 بـ libimobiledevice-1.0-6
# تم نقل frida-tools لتثبيتها عبر pip لضمان الاستقرار
apt-get install -y python3-pip python3-venv nmap adb libimobiledevice-1.0-6 libimobiledevice-utils tor curl git docker.io nodejs npm zip dialog fzf aircrack-ng

# 3. تثبيت مكتبات بايثون (العقل الاستخباراتي)
echo -e "${BLUE}[*] Step 2: Configuring Python Intelligence Hub & Frida...${NC}"
pip3 install --upgrade pip --break-system-packages || true
pip3 install fastapi uvicorn requests requests-toolbelt pydantic python-dotenv flask chromadb langchain frida-tools --break-system-packages || true

# 4. تثبيت مكتبات الواجهة (Node.js)
echo -e "${BLUE}[*] Step 3: Compiling Predator Dashboard...${NC}"
if [ -f "package.json" ]; then
    npm install
else
    echo -e "${YELLOW}[!] Warning: package.json not found in current directory.${NC}"
fi

# 5. إعداد البيئة السيادية والمسارات
echo -e "${BLUE}[*] Step 4: Finalizing Sovereign Grid...${NC}"
mkdir -p /opt/sovereign-ai-platform/audit
mkdir -p /opt/sovereign-ai-platform/evidence/network
mkdir -p /opt/sovereign-ai-platform/evidence/mobile
mkdir -p /opt/sovereign-ai-platform/backups

# إنشاء الروابط الرمزية
ln -sf $(pwd)/scripts/command_center.sh /usr/local/bin/sovereign
ln -sf $(pwd)/scripts/sovereign_ark_v3.sh /usr/local/bin/sov-backup
chmod +x scripts/*.sh
chmod +x mobile/advanced/*.sh || true

# 6. رسالة النجاح
echo -e "${GREEN}================================================${NC}"
echo -e "${GREEN}   ✅ Predator Platform Initialized Successfully! ${NC}"
echo -e "${GREEN}================================================${NC}"
echo -e "To start Web UI: ${CYAN}npm run dev${NC} (Port 9002)"
echo -e "To start TUI Core: ${CYAN}sovereign${NC}"
echo -e "To backup: ${CYAN}sov-backup${NC}"
echo -e "${RED}The system is ARMED. Sovereignty is yours.${NC}"
