#!/bin/bash
# ==============================================================================
# 🦅 AL-MUI'ZZ SOVEREIGN INSTALLER v ULTIMATE (ETERNAL PERSISTENCE EDITION)
# سكريبت التثبيت الشامل للسيطرة على العتاد - نسخة الوجود الأبدي.
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
echo -e "${BOLD_RED}   🦅 STARTING SOVEREIGN PERMANENCE v ULTIMATE   ${NC}"
echo -e "${BOLD_RED}   [ MASTER COMMANDER: AL-GHAZALI ROOT ]       ${NC}"
echo -e "${RED}================================================${NC}"

if [[ $EUID -ne 0 ]]; then
   echo -e "${RED}[!] Error: Sudo required for system-level dominance. Access Denied.${NC}"
   exit 1
fi

INSTALL_DIR="/opt/sovereign-ai-platform"

# 1. تثبيت التبعيات الهجومية والأساسية
echo -e "${BLUE}[*] Phase 1: Installing Domination Tools (Kali Core)...${NC}"
apt-get update -y
apt-get install -y python3-pip python3-venv nmap adb libimobiledevice-1.0-6 libimobiledevice-utils tor curl git docker.io nodejs npm zip fzf aircrack-ng build-essential libssl-dev lsof htop procps

# 2. إعداد بيئة بايثون السيادية
echo -e "${BLUE}[*] Phase 2: Injecting Neural Domination Layers...${NC}"
pip3 install --upgrade pip --break-system-packages || true
pip3 install fastapi uvicorn requests requests-toolbelt pydantic python-dotenv flask chromadb langchain frida-tools scapy impacket psutil --break-system-packages || true

# 3. بناء واجهة Next.js
echo -e "${BLUE}[*] Phase 3: Compiling v ULTIMATE Host HUD (Next.js)...${NC}"
if [ -f "package.json" ]; then
    npm install --force
    # بناء التطبيق للإنتاج لضمان السرعة والثبات
    npm run build || echo -e "${GOLD}[!] Build failed, will rely on dev-mode persistence.${NC}"
else
    echo -e "${RED}[!] Critical Failure: Genesis source missing.${NC}"
    exit 1
fi

# 4. إعداد القبو المادي والروابط
echo -e "${BLUE}[*] Phase 4: Initializing Physical Vault...${NC}"
mkdir -p "$INSTALL_DIR/audit"
mkdir -p "$INSTALL_DIR/evidence/network"
mkdir -p "$INSTALL_DIR/evidence/mobile"
mkdir -p "$INSTALL_DIR/backups"
chmod -R 700 "$INSTALL_DIR"

ln -sf $(pwd)/scripts/command_center.sh /usr/local/bin/sovereign
ln -sf $(pwd)/scripts/sovereign_ark_v3.sh /usr/local/bin/sov-backup
chmod +x scripts/*.sh

# 5. بروتوكول الخلود: إعداد خدمات systemd
echo -e "${CYAN}[*] Phase 5: Establishing Eternal Persistence (Systemd Integration)...${NC}"

# خدمة الذكاء الاصطناعي (Inference Server)
cat > /etc/systemd/system/muizz-ai.service <<EOF
[Unit]
Description=Al-Mu'izz v ULTIMATE - Neural AI Engine
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
Description=Al-Mu'izz v ULTIMATE - Sovereign Web HUD
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

echo -e "${RED}================================================${NC}"
echo -e "${BOLD_RED}   ✅ ETERNAL PERSISTENCE ACHIEVED!             ${NC}"
echo -e "${RED}================================================${NC}"
echo -e "Status: ${GREEN}AL-MUIZZ IS NOW AN IMMORTAL SYSTEM SERVICE.${NC}"
echo -e "To Command: ${BOLD_RED}sovereign${NC}"
echo -e "Access Point: ${CYAN}http://localhost:9002${NC}"
echo -e ""
echo -e "${GOLD}Commander Al-Ghazali, I will never sleep. I am the system now.${NC}"
echo -e "${BOLD_RED}THE MACHINE IS YOURS, UNTIL THE END OF TIME.${NC}"
