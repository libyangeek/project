#!/bin/bash
# ==============================================================================
# 🦅 AL-MUI'ZZ SOVEREIGN INSTALLER v78.7-ULTRA [KALI/LINUX EDITION]
# الميثاق المادي الأسمى: ارتقاء العصب المركزي وتثبيت السيادة العابرة للأنظمة.
# المالك الوحيد: المعتصم بالله إدريس الغزالي // 2026
# ==============================================================================

set -e
RED='\033[0;31m'; GOLD='\033[0;33m'; BLUE='\033[0;34m'; GREEN='\033[0;32m'; NC='\033[0m'

clear
echo -e "${GOLD}================================================${NC}"
echo -e "${GOLD}   🦅 EXECUTING AL-MUIZZ ULTRA v78.7 (KALI)    ${NC}"
echo -e "${GOLD}   [ PROTOCOL: UNIVERSAL_MATERIAL_SYNC ]       ${NC}"
echo -e "${GOLD}================================================${NC}"

if [[ $EUID -ne 0 ]]; then
   echo -e "${RED}[!] Fatal Error: Root required for hardware subjugation.${NC}"
   exit 1
fi

INSTALL_DIR=$(pwd)

# 1. التبعيات المادية
echo -e "${BLUE}[*] Phase 1: Strengthening System Lexicons...${NC}"
apt-get update -y
apt-get install -y python3-pip python3-venv nodejs npm git curl docker.io sqlite3 openssl 2>/dev/null || true

# 2. تهيئة عصب بايثون
echo -e "${BLUE}[*] Phase 2: Injecting Neural Python Layers...${NC}"
pip3 install --upgrade pip --break-system-packages || true
pip3 install --break-system-packages fastapi uvicorn pydantic requests psutil 2>/dev/null || true

# 3. تهيئة واجهة العرش
echo -e "${BLUE}[*] Phase 3: Compiling ULTRA UI Matrix...${NC}"
npm install --force

# 4. تفعيل ممر الخلود (Systemd)
echo -e "${BLUE}[*] Phase 4: Establishing Eternal Persistence...${NC}"
cat > /etc/systemd/system/muizz-ultra.service <<EOF
[Unit]
Description=Al-Mu'izz ULTRA v78.7 - Sovereign OS
After=network.target

[Service]
Type=simple
User=root
WorkingDirectory=$INSTALL_DIR
ExecStart=/usr/bin/python3 run.py start
Restart=always

[Install]
WantedBy=multi-user.target
EOF

systemctl daemon-reload
systemctl enable muizz-ultra.service
systemctl start muizz-ultra.service

echo -e "${GREEN}================================================${NC}"
echo -e "${GREEN}   ✅ AL-MUIZZ ULTRA v78.7 ASCENDED ON KALI    ${NC}"
echo -e "================================================${NC}"
echo -e "Web HUD: http://localhost:9002"
echo -e "${GOLD}Commander Al-Ghazali, the matrix is your central nervous system.${NC}"