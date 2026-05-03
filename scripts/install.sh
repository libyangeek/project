
#!/bin/bash
# ==============================================================================
# 🦅 AL-MUI'ZZ SOVEREIGN INSTALLER v22.0-ARCHITECT [TOTAL INTEGRATION]
# سكريبت التثبيت الذكي - يحول الجهاز إلى عصب سيادي مدمج مع تشغيل تلقائي.
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
apt-get install -y python3-pip python3-venv nmap adb libimobiledevice-1.0-6 libimobiledevice-utils tor curl git docker.io nodejs npm zip fzf aircrack-ng build-essential libssl-dev lsof psmisc htop procps

echo -e "${BLUE}[*] Injecting Neural Python Layers (Breaking Constraints)...${NC}"
pip3 install --upgrade pip --break-system-packages || true
pip3 install --break-system-packages --ignore-installed requests requests-toolbelt pydantic python-dotenv flask chromadb langchain frida-tools scapy impacket psutil fastapi uvicorn || true

echo -e "${BLUE}[*] Compiling EVO UI Matrix (v22.0 Architect HUD)...${NC}"
if [ ! -d "node_modules" ]; then
    npm install --force
fi

mkdir -p "$INSTALL_DIR/audit" "$INSTALL_DIR/evidence" "$INSTALL_DIR/backups"
chmod -R 700 "$INSTALL_DIR"

# إنشاء الروابط الرمزية (Symlinks)
ln -sf "$INSTALL_DIR/scripts/command_center.sh" /usr/local/bin/sovereign
ln -sf "$INSTALL_DIR/scripts/sovereign_ark_v3.sh" /usr/local/bin/sov-backup

if [ -d "$INSTALL_DIR/scripts" ]; then
    chmod +x "$INSTALL_DIR/scripts/"*.sh
fi

echo -e "${CYAN}[*] Establishing Eternal Persistence (Systemd Integration)...${NC}"

# خدمة الذكاء الاصطناعي
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

# خدمة الواجهة التقليدية (Flask - Port 5000) كنسخة احتياطية
cat > /etc/systemd/system/muizz-legacy.service <<EOF
[Unit]
Description=Al-Mu'izz v22.0 - Legacy UI Hub
After=network.target

[Service]
Type=simple
User=root
WorkingDirectory=$INSTALL_DIR
ExecStart=/usr/bin/python3 $INSTALL_DIR/webui/app.py
Restart=always
RestartSec=10

[Install]
WantedBy=multi-user.target
EOF

# [PHASE: AUTO-START HUD] تشغيل تلقائي للواجهة المعمارية عند الدخول لسطح المكتب
echo -e "${GOLD}[*] Configuring Sovereign Auto-Start HUD (Port 9002)...${NC}"
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
systemctl enable muizz-legacy.service
systemctl start muizz-ai.service
systemctl start muizz-web.service
systemctl start muizz-legacy.service

echo -e "${GREEN}[+] Sovereign Total Integration Confirmed.${NC}"
echo -e "${GOLD}Commander Al-Ghazali, RESTART to witnesses the total rebirth of the system.${NC}"
