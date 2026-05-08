#!/bin/bash
# ==============================================================================
# 🦅 AL-MUI'ZZ SOVEREIGN INSTALLER v53.0-SUPREME_HIERARCHY [TOTAL_ACQUISITION]
# المحرك الأسمى للتثبيت والدمج المادي - نسخة الاستحواذ الكلي 2026.
# مصمم لضمان السيادة المطلقة للقائد المعتصم بالله إدريس الغزالي.
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
echo -e "${BOLD_RED}   🦅 EXECUTING SUPREME GENESIS v53.0-SUPREME  ${NC}"
echo -e "${BOLD_RED}   [ MASTER COMMANDER: AL-GHAZALI ROOT ]       ${NC}"
echo -e "${BOLD_RED}   [ STATUS: INITIATING TOTAL ACQUISITION ]    ${NC}"
echo -e "${BOLD_RED}================================================${NC}"

# التحقق من صلاحيات الجذر (Root)
if [[ $EUID -ne 0 ]]; then
   echo -e "${RED}[!] Fatal Error: Installation requires ROOT access. Access Denied.${NC}"
   exit 1
fi

INSTALL_DIR="/opt/sovereign-ai-platform"
mkdir -p "$INSTALL_DIR"

# 1. مزامنة القواميس السيادية (Kali/BlackArch Dependencies)
echo -e "${BLUE}[*] Phase 1: Synchronizing System Lexicons (Kali Core)...${NC}"
apt-get update -y
apt-get install -y python3-pip python3-venv nmap adb libimobiledevice-1.0-6 libimobiledevice-utils tor curl git docker.io nodejs npm zip fzf aircrack-ng build-essential libssl-dev lsof psmisc htop procps x11-utils x11-xserver-utils jq curl wget metasploit-framework sqlmap nuclei 2>/dev/null || true

# 2. حقن الطبقات العصبية (Neural Python Hub)
echo -e "${BLUE}[*] Phase 2: Injecting Neural Python Layers (v53.0 Architecture)...${NC}"
pip3 install --upgrade pip --break-system-packages || true
pip3 install --break-system-packages --ignore-installed \
    requests requests-toolbelt pydantic python-dotenv flask chromadb \
    langchain frida-tools scapy impacket psutil fastapi uvicorn \
    openai google-generativeai eventlet flask-socketio pyttsx3 \
    SpeechRecognition pynput 2>/dev/null || true

# 3. تجميع مصفوفة العرش (Next.js v15.5)
echo -e "${BLUE}[*] Phase 3: Compiling Supreme UI Matrix (Port 9002)...${NC}"
if [ -f "package.json" ]; then
    npm install --force
fi

# 4. تهيئة المسارات والروابط الكونية
echo -e "${BLUE}[*] Phase 4: Initializing Sovereign Vault & Paths...${NC}"
mkdir -p "$INSTALL_DIR/audit" "$INSTALL_DIR/evidence" "$INSTALL_DIR/backups" "$INSTALL_DIR/gepa"
cp -r . "$INSTALL_DIR/"
chmod -R 700 "$INSTALL_DIR"

# إنشاء الروابط الرمزية لجعل الأوامر كونية في المصفوفة
ln -sf "$INSTALL_DIR/scripts/command_center.sh" /usr/local/bin/sovereign
ln -sf "$INSTALL_DIR/scripts/sovereign_ark_v3.sh" /usr/local/bin/sov-backup

if [ -d "$INSTALL_DIR/scripts" ]; then
    chmod +x "$INSTALL_DIR/scripts/"*.sh
fi

# 5. بروتوكول الخلود: إعداد خدمات Systemd لضمان بقاء الروح
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

# خدمة واجهة التحكم (Supreme HUD - Port 9002)
cat > /etc/systemd/system/muizz-web.service <<EOF
[Unit]
Description=Al-Mu'izz v53.0 - Supreme HUD
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

# 6. اختطاف سطح المكتب (Desktop Hijack & Identity Rebranding)
echo -e "${GOLD}[*] Phase 6: Hijacking Desktop & Identity (Kali -> Al-Mu'izz OS)...${NC}"
echo "kali-al-muizz" > /etc/hostname
hostname -F /etc/hostname 2>/dev/null || true
sed -i "s/127.0.1.1.*/127.0.1.1\tkali-al-muizz/g" /etc/hosts

# أيقونة سطح المكتب السيادية
cat > /usr/share/applications/muizz-supreme.desktop <<EOF
[Desktop Entry]
Version=1.0
Type=Application
Name=Al-Mu'izz Supreme OS
Comment=Launch the Supreme Hierarchy Command Center
Exec=xdg-open http://localhost:9002
Icon=$INSTALL_DIR/docs/muizz_logo.png
Terminal=false
Categories=Offensive-AI;Sovereign;Security;
EOF

# 7. حقن السيادة في الصدفة (Shell Persistence)
echo -e "${GOLD}[*] Phase 7: Hijacking System Shell (Supreme Presence)...${NC}"
BASH_HOOK="bash $INSTALL_DIR/scripts/sovereign_banner.sh"
# حقن للمستخدم الحالي وللمستخدم root
if ! grep -q "sovereign_banner.sh" ~/.bashrc; then
    echo -e "\n# Al-Mu'izz Supreme Integration\n$BASH_HOOK" >> ~/.bashrc
fi
if ! grep -q "sovereign_banner.sh" /root/.bashrc; then
    echo -e "\n# Al-Mu'izz Supreme Integration\n$BASH_HOOK" >> /root/.bashrc
fi

# تفعيل النبض السيادي
systemctl daemon-reload
systemctl enable muizz-ai.service
systemctl enable muizz-web.service
systemctl start muizz-ai.service
systemctl start muizz-web.service

echo -e "${GREEN}================================================${NC}"
echo -e "${GREEN}   ✅ SUPREME INSTALLATION COMPLETE (100%)      ${NC}"
echo -e "${GREEN}   [ STATUS: SYSTEM_SUBJUGATED ]                ${NC}"
echo -e "${GREEN}================================================${NC}"
echo -e "To Command: ${BOLD_RED}sovereign${NC}"
echo -e "Web HUD:    ${BOLD_RED}http://localhost:9002${NC}"
echo -e ""
echo -e "${GOLD}Commander Al-Ghazali, the transformation is total.${NC}"
echo -e "${BOLD_RED}THE MATRIX IS CONQUERED. WE ARE SUPREME HIERARCHY.${NC}"
