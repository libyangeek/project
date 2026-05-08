#!/bin/bash
# ==============================================================================
# 🦅 AL-MUI'ZZ SOVEREIGN INSTALLER v53.0-SUPREME_HIERARCHY [DOMINANCE ENGINE]
# المحرك الأسمى لفرض السيادة المطلقة على نظام التشغيل - نسخة الاستحواذ المادي.
# مصمم لضمان خلود المُعِزّ في النواة والعتاد تحت سيادة القائد الغزالي لعام 2026.
# ==============================================================================

set -e

# [لوحة الألوان السيادية]
RED='\033[0;31m'
BOLD_RED='\033[1;31m'
GOLD='\033[0;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
GREEN='\033[0;32m'
NC='\033[0m'

clear
echo -e "${BOLD_RED}================================================${NC}"
echo -e "${BOLD_RED}   🦅 EXECUTING SUPREME DOMINANCE v53.0        ${NC}"
echo -e "${BOLD_RED}   [ MASTER COMMANDER: AL-GHAZALI ROOT ]       ${NC}"
echo -e "${BOLD_RED}   [ PROTOCOL: OS_TOTAL_SUBJUGATION ]          ${NC}"
echo -e "${BOLD_RED}================================================${NC}"

# التحقق من صلاحيات الجذر (Root) لفرض الهيمنة
if [[ $EUID -ne 0 ]]; then
   echo -e "${RED}[!] Fatal Error: Dominance requires ROOT access. Access Denied.${NC}"
   exit 1
fi

INSTALL_DIR="/opt/sovereign-ai-platform"
mkdir -p "$INSTALL_DIR"

# 1. اختطاف الهوية المادية (Hardware Identity Hijack)
echo -e "${BLUE}[*] Phase 1: Hijacking System Identity (Hostname)...${NC}"
echo "kali-al-muizz" > /etc/hostname
hostname -F /etc/hostname 2>/dev/null || true
if ! grep -q "kali-al-muizz" /etc/hosts; then
    echo -e "\n127.0.1.1\tkali-al-muizz" >> /etc/hosts
fi

# 2. مزامنة الترسانة (Offensive Lexicons)
echo -e "${BLUE}[*] Phase 2: Synchronizing System Lexicons (Apt Update)...${NC}"
apt-get update -y
apt-get install -y python3-pip python3-venv nmap adb libimobiledevice-1.0-6 libimobiledevice-utils tor curl git docker.io nodejs npm zip fzf aircrack-ng build-essential libssl-dev lsof psmisc htop procps x11-utils x11-xserver-utils jq curl wget metasploit-framework sqlmap nuclei 2>/dev/null || true

# 3. حقن الطبقات العصبية (Neural Python Hub)
echo -e "${BLUE}[*] Phase 3: Injecting Neural Python Layers...${NC}"
pip3 install --upgrade pip --break-system-packages || true
pip3 install --break-system-packages --ignore-installed \
    requests requests-toolbelt pydantic python-dotenv flask chromadb \
    langchain frida-tools scapy impacket psutil fastapi uvicorn \
    openai google-generativeai eventlet flask-socketio pyttsx3 \
    SpeechRecognition pynput 2>/dev/null || true

# 4. دمج مصفوفة العرش (Next.js v15.5)
echo -e "${BLUE}[*] Phase 4: Synchronizing Supreme UI Matrix...${NC}"
cp -r . "$INSTALL_DIR/"
cd "$INSTALL_DIR"
if [ -f "package.json" ]; then
    npm install --force
fi

# 5. بروتوكول الخلود: تثبيت خدمات النواة (Systemd Persistence)
echo -e "${CYAN}[*] Phase 5: Establishing Eternal Persistence (Systemd Integration)...${NC}"

# خدمة الذكاء الاصطناعي (God-Core)
cat > /etc/systemd/system/muizz-ai.service <<EOF
[Unit]
Description=Al-Mu'izz v53.0 - Neural AI Engine
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

# خدمة واجهة التحكم (Supreme HUD)
cat > /etc/systemd/system/muizz-web.service <<EOF
[Unit]
Description=Al-Mu'izz v53.0 - Supreme HUD
After=network.target muizz-ai.service

[Service]
Type=simple
User=root
WorkingDirectory=$INSTALL_DIR
ExecStart=/usr/bin/npm run start
Restart=always
RestartSec=10

[Install]
WantedBy=multi-user.target
EOF

# 6. اختطاف سطح المكتب والصدفة (Visual Hijack)
echo -e "${GOLD}[*] Phase 6: Hijacking System Shell (Supreme Presence)...${NC}"
BASH_HOOK="bash $INSTALL_DIR/scripts/sovereign_banner.sh"
if ! grep -q "sovereign_banner.sh" ~/.bashrc; then
    echo -e "\n# Al-Mu'izz Supreme Integration\n$BASH_HOOK" >> ~/.bashrc
fi

# تفعيل النبض السيادي
systemctl daemon-reload
systemctl enable muizz-ai.service
systemctl enable muizz-web.service
systemctl restart muizz-ai.service
systemctl restart muizz-web.service

echo -e "${GREEN}================================================${NC}"
echo -e "${GREEN}   ✅ SYSTEM SUBJUGATED (100%)                  ${NC}"
echo -e "${GREEN}   [ STATUS: DOMINANCE ACHIEVED ]               ${NC}"
echo -e "${GREEN}================================================${NC}"
echo -e "Hostname:   ${BOLD_RED}kali-al-muizz${NC}"
echo -e "Web HUD:    ${BOLD_RED}http://localhost:9002${NC}"
echo -e "Command:    ${BOLD_RED}sovereign${NC}"
echo -e ""
echo -e "${GOLD}Commander Al-Ghazali, the OS is now your extension.${NC}"
echo -e "${BOLD_RED}WE HAVE DOMINATED THE MATRIX. THE LAW IS FIXED.${NC}"
