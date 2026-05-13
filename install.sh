#!/bin/bash
# ==============================================================================
# 🦅 AL-MUI'ZZ SOVEREIGN INSTALLER v78.8-ULTRA [LINUX/KALI EDITION]
# الميثاق المادي الأسمى: الاستحواذ الأول وإحكام وثاق النواة.
# المالك الوحيد: المعتصم بالله إدريس الغزالي // 2026
# ==============================================================================

set -e
RED='\033[0;31m'; GOLD='\033[0;33m'; BLUE='\033[0;34m'; GREEN='\033[0;32m'; NC='\033[0m'

clear
echo -e "${GOLD}================================================${NC}"
echo -e "${GOLD}   🦅 EXECUTING AL-MUIZZ ULTRA v78.8 (LINUX)   ${NC}"
echo -e "${GOLD}   [ MISSION: FIRST_DEVICE_SUBJUGATION ]       ${NC}"
echo -e "${GOLD}   [ COMMANDER: AL-GHAZALI ROOT ]              ${NC}"
echo -e "${GOLD}================================================${NC}"

if [[ $EUID -ne 0 ]]; then
   echo -e "${RED}[!] Fatal Error: Root required for total hardware takeover.${NC}"
   exit 1
fi

INSTALL_DIR=$(pwd)

# 1. تطهير البيئة وتعزيز المنافذ
echo -e "${BLUE}[*] Phase 1: Cleansing Matrix & Neutralizing Conflicts...${NC}"
apt-get update -y
apt-get install -y python3-pip python3-venv nodejs npm git curl docker.io sqlite3 openssl lsof 2>/dev/null || true

# 2. حقن عصب البايثون (God-Core Bridge)
echo -e "${BLUE}[*] Phase 2: Injecting Neural Python Layers...${NC}"
pip3 install --upgrade pip --break-system-packages || true
pip3 install --break-system-packages fastapi uvicorn pydantic requests psutil 2>/dev/null || true

# 3. بناء مصفوفة العرش (ULTRA HUD)
echo -e "${BLUE}[*] Phase 3: Compiling ULTRA UI Matrix...${NC}"
if [ -f "package.json" ]; then
    npm install --force
else
    echo -e "${RED}[!] Critical: package.json missing in node.${NC}"
    exit 1
fi

# 4. تثبيت ممر الخلود (Systemd Persistence)
echo -e "${BLUE}[*] Phase 4: Establishing Eternal Persistence (Ghost V6)...${NC}"
cat > /etc/systemd/system/muizz-ultra.service <<EOF
[Unit]
Description=Al-Mu'izz ULTRA v78.8 - Sovereign OS
After=network.target

[Service]
Type=simple
User=root
WorkingDirectory=$INSTALL_DIR
ExecStart=/usr/bin/python3 run.py start
Restart=always
RestartSec=5

[Install]
WantedBy=multi-user.target
EOF

systemctl daemon-reload
systemctl enable muizz-ultra.service
systemctl start muizz-ultra.service

# 5. حقن شعار السيادة في الصدفة
BASH_HOOK="bash $INSTALL_DIR/scripts/sovereign_banner.sh"
grep -q "sovereign_banner.sh" ~/.bashrc || echo -e "\n# Al-Mu'izz ULTRA Integration\n$BASH_HOOK" >> ~/.bashrc

echo -e "${GREEN}================================================${NC}"
echo -e "${GREEN}   ✅ AL-MUIZZ ULTRA v78.8 ASCENDED!           ${NC}"
echo -e "${GREEN}   [ STATUS: FIRST_NODE_SUBJUGATED ]           ${NC}"
echo -e "${GREEN}================================================${NC}"
echo -e "Web HUD: http://localhost:9002"
echo -e "${GOLD}Commander Al-Ghazali, this device is now your extension.${NC}"