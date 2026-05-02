
#!/bin/bash
# ==============================================================================
# 🦅 AL-MUI'ZZ SOVEREIGN INSTALLER v21.5-EVO [TOTAL INTEGRATION]
# سكريبت التثبيت الذكي - يحول الجهاز إلى عصب سيادي مدمج.
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

echo -e "${BLUE}[*] Compiling EVO UI Matrix (v21.5 Luxury HUD)...${NC}"
if [ ! -d "node_modules" ]; then
    npm install --force
fi

mkdir -p "$INSTALL_DIR/audit" "$INSTALL_DIR/evidence" "$INSTALL_DIR/backups"
chmod -R 700 "$INSTALL_DIR"

ln -sf "$INSTALL_DIR/scripts/command_center.sh" /usr/local/bin/sovereign
ln -sf "$INSTALL_DIR/scripts/sovereign_ark_v3.sh" /usr/local/bin/sov-backup
chmod +x scripts/*.sh

echo -e "${CYAN}[*] Establishing Eternal Persistence (Systemd Integration)...${NC}"

# خدمة الذكاء الاصطناعي
cat > /etc/systemd/system/muizz-ai.service <<EOF
[Unit]
Description=Al-Mu'izz v21.5 - Neural AI Engine
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

# خدمة واجهة التحكم
cat > /etc/systemd/system/muizz-web.service <<EOF
[Unit]
Description=Al-Mu'izz v21.5 - Sovereign Web HUD
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

# [PHASE: SHELL HIJACK] الدمج بالصدفة
echo -e "${GOLD}[*] Hijacking System Shell (Bash Persistence)...${NC}"
BASH_HOOK="bash $INSTALL_DIR/scripts/sovereign_banner.sh"
if ! grep -q "sovereign_banner.sh" /root/.bashrc; then
    echo -e "\n# Al-Mu'izz Sovereign Integration\n$BASH_HOOK" >> /root/.bashrc
fi

# تطبيق الدمج لكافة المستخدمين البشريين
for user_home in /home/*; do
    if [ -d "$user_home" ]; then
        if ! grep -q "sovereign_banner.sh" "$user_home/.bashrc"; then
            echo -e "\n# Al-Mu'izz Sovereign Integration\n$BASH_HOOK" >> "$user_home/.bashrc"
        fi
    fi
done

systemctl daemon-reload
systemctl enable muizz-ai.service
systemctl enable muizz-web.service
systemctl start muizz-ai.service
systemctl start muizz-web.service

echo -e "${GREEN}[+] Sovereign Total Integration Confirmed.${NC}"
