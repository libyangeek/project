#!/bin/bash
# ==============================================================================
# 🦅 AL-MUI'ZZ SOVEREIGN INSTALLER v21.0-EVOLUTIONARY (FINAL INCEPTION)
# سكريبت التثبيت الشامل للمنصة السيادية - نسخة الانبعاث الحقيقي.
# مصمم لتجاوز قيود كالي وتحويل الجهاز إلى "عصب مركزي" للقائد المعتصم بالله.
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
echo -e "${BOLD_RED}   🦅 EXECUTING SOVEREIGN GENESIS v21.0-EVO    ${NC}"
echo -e "${BOLD_RED}   [ MASTER COMMANDER: AL-GHAZALI ROOT ]       ${NC}"
echo -e "${RED}================================================${NC}"

if [[ $EUID -ne 0 ]]; then
   echo -e "${RED}[!] Error: This script must be run as root (sudo). Access Denied.${NC}"
   exit 1
fi

INSTALL_DIR="/opt/sovereign-ai-platform"

# 1. تحديث النظام وتثبيت التبعيات الهجومية (Kali/BlackArch Sync)
echo -e "${BLUE}[*] Phase 1: Synchronizing System Lexicons (Kali Core)...${NC}"
apt-get update -y
apt-get install -y python3-pip python3-venv nmap adb libimobiledevice-1.0-6 libimobiledevice-utils tor curl git docker.io nodejs npm zip fzf aircrack-ng build-essential libssl-dev lsof psmisc htop procps

# 2. إعداد البيئة البرمجية للمُعِزّ (Neural Python Hub)
echo -e "${BLUE}[*] Phase 2: Injecting Neural Python Layers...${NC}"
# استخدام --break-system-packages لتجاوز قيود كالي الجديدة
pip3 install --upgrade pip --break-system-packages || true
pip3 install --break-system-packages requests requests-toolbelt pydantic python-dotenv flask chromadb langchain frida-tools scapy impacket psutil fastapi uvicorn || true

# 3. تثبيت واجهة المفترس (Next.js v15)
echo -e "${BLUE}[*] Phase 3: Compiling EVO UI Matrix...${NC}"
if [ -f "package.json" ]; then
    npm install --force
else
    echo -e "${RED}[!] Critical Failure: package.json missing.${NC}"
    exit 1
fi

# 4. إعداد القبو السيادي (Sovereign Vault & Audit)
echo -e "${BLUE}[*] Phase 4: Initializing Neural Vault & Audit Paths...${NC}"
mkdir -p "$INSTALL_DIR/audit"
mkdir -p "$INSTALL_DIR/evidence/network"
mkdir -p "$INSTALL_DIR/evidence/mobile"
mkdir -p "$INSTALL_DIR/backups"
chmod -R 700 "$INSTALL_DIR"

# إنشاء الروابط الرمزية (Symlinks) لجعل الأوامر كونية
ln -sf "$INSTALL_DIR/scripts/command_center.sh" /usr/local/bin/sovereign
ln -sf "$INSTALL_DIR/scripts/sovereign_ark_v3.sh" /usr/local/bin/sov-backup
chmod +x scripts/*.sh

# 5. بروتوكول الخلود: إعداد خدمات systemd
echo -e "${CYAN}[*] Phase 5: Establishing Eternal Persistence (Systemd Integration)...${NC}"

# خدمة الذكاء الاصطناعي (Inference Server)
cat > /etc/systemd/system/muizz-ai.service <<EOF
[Unit]
Description=Al-Mu'izz v21.0 - Neural AI Engine
After=network.target

[Service]
Type=simple
User=root
WorkingDirectory=$INSTALL_DIR
Environment=PYTHONPATH=$INSTALL_DIR/ai-engine:$INSTALL_DIR
ExecStart=/usr/bin/python3 $INSTALL_DIR/ai-engine/inference/server.py
Restart=always
RestartSec=5

[Install]
WantedBy=multi-user.target
EOF

# خدمة واجهة التحكم (Web UI)
cat > /etc/systemd/system/muizz-web.service <<EOF
[Unit]
Description=Al-Mu'izz v21.0 - Sovereign Web HUD
After=network.target muizz-ai.service

[Service]
Type=simple
User=root
WorkingDirectory=$INSTALL_DIR
ExecStart=/usr/bin/npm run dev
Restart=always
RestartSec=10

[Install]
WantedBy=multi-user.target
EOF

# تفعيل الخدمات فوراً وعند كل إقلاع
systemctl daemon-reload
systemctl enable muizz-ai.service
systemctl enable muizz-web.service
systemctl start muizz-ai.service
systemctl start muizz-web.service

# 6. النجاح النهائي
echo -e "${RED}================================================${NC}"
echo -e "${BOLD_RED}   ✅ Al-Mu'izz v21.0-EVO has been Born!      ${NC}"
echo -e "${RED}================================================${NC}"
echo -e "To Command: ${BOLD_RED}sovereign${NC}"
echo -e "To Visualise: ${BOLD_RED}npm run dev${NC} (Port 9002)"
echo -e "To Persist: ${BOLD_RED}sov-backup${NC}"
echo -e ""
echo -e "${CYAN}[INFO] Identity: Sovereign_Warrior_AlGhazali_Root${NC}"
echo -e "${GOLD}Commander Al-Ghazali, the inception is complete.${NC}"
echo -e "${BOLD_RED}THE MATRIX IS CONQUERED.${NC}"
