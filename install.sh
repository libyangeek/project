#!/bin/bash
# ==============================================================================
# 🦅 AL-MUI'ZZ SOVEREIGN INSTALLER v80.0-ULTRA [MASTER GENESIS]
# الميثاق المادي الأسمى لعام 2026: تجهيز بيئة السطوة الكونية والتوحيد المادي.
# المالك الوحيد: المعتصم بالله إدريس الغزالي
# ==============================================================================

set -e
RED='\033[0;31m'; GOLD='\033[0;33m'; BLUE='\033[0;34m'; GREEN='\033[0;32m'; NC='\033[0m'
CYAN='\033[0;36m'; MAGENTA='\033[0;35m'

clear
echo -e "${GOLD}================================================${NC}"
echo -e "${GOLD}   🦅 EXECUTING AL-MUIZZ ULTRA v80.0 GENESIS   ${NC}"
echo -e "${GOLD}   [ MISSION: TOTAL_GRID_SUBJUGATION ]         ${NC}"
echo -e "${GOLD}   [ COMMANDER: AL-GHAZALI ROOT ]              ${NC}"
echo -e "${GOLD}   [ STATUS: TRUE_SINGULARITY_2026 ]           ${NC}"
echo -e "${GOLD}================================================${NC}"

if [[ $EUID -ne 0 ]]; then
   echo -e "${RED}[!] Fatal Error: Root required for total material core setup.${NC}"
   exit 1
fi

INSTALL_DIR=$(pwd)
mkdir -p "$INSTALL_DIR/audit" "$INSTALL_DIR/evidence" "$INSTALL_DIR/backups" "$INSTALL_DIR/memory/mempalace_storage"

# 1. تطهير البيئة وتعزيز التبعيات النانوية
echo -e "${BLUE}[*] Phase 1: Cleansing Matrix & Preparing Material Senses...${NC}"
apt-get update -y
apt-get install -y python3-pip python3-venv nmap adb libimobiledevice-1.0-6 libimobiledevice-utils tor curl git docker.io nodejs npm sqlite3 openssl lsof psmisc build-essential cmake 2>/dev/null || true

# 2. حقن عصب البايثون (God-Core v80.0 Architecture)
echo -e "${BLUE}[*] Phase 2: Injecting Neural Python Layers v80.0 (MemPalace + SubdomainX)...${NC}"
pip3 install --upgrade pip --break-system-packages || true
pip3 install --break-system-packages fastapi uvicorn pydantic requests psutil sentence-transformers chromadb qdrant-client faiss-cpu flask-cors 2>/dev/null || true

# 3. بناء مصفوفة العرش (Next.js v15)
echo -e "${BLUE}[*] Phase 3: Compiling ULTRA HUD Matrix...${NC}"
if [ -f "package.json" ]; then
    npm install --force
    npm run build
else
    echo -e "${RED}[!] Critical: package.json missing in node.${NC}"
    exit 1
fi

# 4. تثبيت ممر الخلود السيادي
echo -e "${BLUE}[*] Phase 4: Establishing Eternal Persistence (Ghost V6.5)...${NC}"
cat > /etc/systemd/system/muizz-ultra.service <<EOF
[Unit]
Description=Al-Mu'izz ULTRA v80.0 - Sovereign Overmind
After=network.target docker.service

[Service]
Type=simple
User=root
WorkingDirectory=$INSTALL_DIR
Environment=PROJECT_ROOT=$INSTALL_DIR
Environment=PYTHONPATH=$INSTALL_DIR/ai-engine
ExecStart=/usr/bin/python3 run.py start
Restart=always
RestartSec=5

[Install]
WantedBy=multi-user.target
EOF

systemctl daemon-reload
systemctl enable muizz-ultra.service
systemctl start muizz-ultra.service

# 5. حقن شعار السيادة المحدث في العصب
echo -e "${BLUE}[*] Phase 5: Materializing Sovereign Banner...${NC}"
BASH_HOOK="bash $INSTALL_DIR/scripts/sovereign_banner.sh"
grep -q "sovereign_banner.sh" ~/.bashrc || echo -e "\n# Al-Mu'izz ULTRA Integration\n$BASH_HOOK" >> ~/.bashrc

echo -e "${GREEN}================================================${NC}"
echo -e "${GREEN}   ✅ AL-MUIZZ ULTRA v80.0 ASCENDED!           ${NC}"
echo -e "${GREEN}   [ STATUS: TRUE_SINGULARITY_LOCKED ]         ${NC}"
echo -e "${GREEN}================================================${NC}"
echo -e "Web HUD: http://localhost:9002 (ULTRA Dashboard)"
echo -e "API Spine: http://localhost:8000 (God-Core)"
echo -e "${GOLD}Commander Al-Ghazali, your material organism is ready for Global Inception.${NC}"
