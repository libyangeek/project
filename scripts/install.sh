
#!/bin/bash
# ==============================================================================
# 🦅 AL-MUI'ZZ SOVEREIGN INSTALLER v22.0-ARCHITECT [TOTAL DESKTOP INTEGRATION]
# سكريبت التثبيت الذكي - يحول الجهاز إلى سطح مكتب سيادي مدمج مع تشغيل تلقائي.
# ==============================================================================

set -e

RED='\033[0;31m'
BOLD_RED='\033[1;31m'
GOLD='\033[0;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
GREEN='\033[0;32m'
NC='\033[0m'

INSTALL_DIR="/opt/sovereign-ai-platform"

echo -e "${BLUE}[*] Synchronizing System Lexicons (Kali Core)...${NC}"
apt-get update -y
apt-get install -y python3-pip python3-venv nmap adb libimobiledevice-1.0-6 libimobiledevice-utils tor curl git docker.io nodejs npm zip fzf aircrack-ng build-essential libssl-dev lsof psmisc htop procps x11-utils x11-xserver-utils

echo -e "${BLUE}[*] Injecting Neural Python Layers (Breaking Constraints)...${NC}"
pip3 install --upgrade pip --break-system-packages || true
pip3 install --break-system-packages --ignore-installed requests requests-toolbelt pydantic python-dotenv flask chromadb langchain frida-tools scapy impacket psutil fastapi uvicorn || true

echo -e "${BLUE}[*] Compiling EVO UI Matrix (v22.0 Architect HUD)...${NC}"
if [ ! -d "node_modules" ]; then
    npm install --force
fi

mkdir -p "$INSTALL_DIR/audit" "$INSTALL_DIR/evidence" "$INSTALL_DIR/backups"
chmod -R 700 "$INSTALL_DIR"

# إنشاء الروابط الرمزية (Symlinks) لجعل الأوامر كونية
ln -sf "$INSTALL_DIR/scripts/command_center.sh" /usr/local/bin/sovereign
ln -sf "$INSTALL_DIR/scripts/sovereign_ark_v3.sh" /usr/local/bin/sov-backup

if [ -d "$INSTALL_DIR/scripts" ]; then
    chmod +x "$INSTALL_DIR/scripts/"*.sh
fi

echo -e "${CYAN}[*] Establishing Eternal Persistence (Systemd Integration)...${NC}"

# خدمة الذكاء الاصطناعي (God-Core)
cat > /etc/systemd/system/muizz-ai.service <<EOF
[Unit]
Description=Al-Mu'izz v22.0 - Neural AI Engine
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

# خدمة واجهة التحكم (Next.js - Port 9002)
cat > /etc/systemd/system/muizz-web.service <<EOF
[Unit]
Description=Al-Mu'izz v22.0 - Sovereign Web HUD
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

# [PHASE: DESKTOP HIJACK] دمج المُعِزّ في قائمة التطبيقات وسطح المكتب
echo -e "${GOLD}[*] Hijacking Desktop Environment (XFCE/GNOME Integration)...${NC}"

# إنشاء ملف تطبيق سطح المكتب
cat > /usr/share/applications/muizz-hud.desktop <<EOF
[Desktop Entry]
Version=1.0
Type=Application
Name=Al-Mu'izz Sovereign OS
Comment=Launch the Architect Sovereign Command Center
Exec=xdg-open http://localhost:9002
Icon=$INSTALL_DIR/docs/muizz_logo.png
Terminal=false
Categories=Offensive-AI;Sovereign;Security;
Keywords=Al-Muizz;Sovereign;AI;Kali;
EOF

# وضع الأيقونة على سطح المكتب للمستخدمين
for user_home in /home/*; do
    if [ -d "$user_home/Desktop" ]; then
        cp /usr/share/applications/muizz-hud.desktop "$user_home/Desktop/"
        chown $(basename "$user_home"):$(basename "$user_home") "$user_home/Desktop/muizz-hud.desktop"
        chmod +x "$user_home/Desktop/muizz-hud.desktop"
    fi
done

# [PHASE: AUTO-START HUD] تشغيل تلقائي للواجهة المعمارية عند الدخول لسطح المكتب
AUTOSTART_DIR="/etc/xdg/autostart"
mkdir -p "$AUTOSTART_DIR"
cat > "$AUTOSTART_DIR/muizz-hud.desktop" <<EOF
[Desktop Entry]
Type=Application
Name=Al-Mu'izz Sovereign HUD
Comment=Launch Al-Mu'izz Architect HUD on Login
Exec=xdg-open http://localhost:9002
OnlyShowIn=XFCE;GNOME;KDE;
Terminal=false
StartupNotify=false
EOF

# [PHASE: SHELL HIJACK] حقن شعار المُعِزّ في الصدفة
echo -e "${GOLD}[*] Hijacking System Shell (Bash Persistence)...${NC}"
BASH_HOOK="bash $INSTALL_DIR/scripts/sovereign_banner.sh"
if ! grep -q "sovereign_banner.sh" /root/.bashrc; then
    echo -e "\n# Al-Mu'izz Sovereign Integration\n$BASH_HOOK" >> /root/.bashrc
fi

systemctl daemon-reload
systemctl enable muizz-ai.service
systemctl enable muizz-web.service
systemctl start muizz-ai.service
systemctl start muizz-web.service

echo -e "${GREEN}[+] Sovereign Total Integration Confirmed.${NC}"
echo -e "${GOLD}Commander Al-Ghazali, Your Sovereign Desktop is ready. RESTART to finalize the transformation.${NC}"
