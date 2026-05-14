
#!/bin/bash
# ==============================================================================
# 🦅 AL-MUI'ZZ SOVEREIGN INSTALLER v80.0-GENESIS_v6 [THE MASTER OMNIPOTENT]
# الميثاق المادي الأسمى: دمج الذاكرة الدلالية، n8n، وضع الصقر، والقبض المادي.
# المالك الوحيد: المعتصم بالله إدريس الغزالي
# ==============================================================================

set -e
GOLD='\033[0;33m'; BLUE='\033[0;34m'; GREEN='\033[0;32m'; RED='\033[0;31m'; NC='\033[0m'

clear
echo -e "${GOLD}================================================${NC}"
echo -e "${GOLD}   🦅 EXECUTING AL-MUIZZ GENESIS v6.0          ${NC}"
echo -e "${GOLD}   [ COMMANDER: AL-GHAZALI ROOT ]              ${NC}"
echo -e "${GOLD}   [ STATUS: TOTAL_SINGULARITY_2026 ]          ${NC}"
echo -e "${GOLD}================================================${NC}"

if [[ $EUID -ne 0 ]]; then
   echo -e "${RED}[!] Fatal Error: Root required for total hardware subjugation.${NC}"
   exit 1
fi

INSTALL_DIR=$(pwd)
mkdir -p "$INSTALL_DIR"/{audit,evidence,backups,tools,arsenal}
mkdir -p "$INSTALL_DIR"/ai-engine/{memory,integrations,ai_gateway}

# 1. التبعيات الأساسية والذاكرة
echo -e "${BLUE}[*] Phase 1: Materializing Neural Layers (RAG & Python)...${NC}"
apt-get update -y || true
apt-get install -y python3-pip nmap adb docker.io docker-compose curl git jq 2>/dev/null || true

python3 -m pip install --upgrade pip --break-system-packages || true
python3 -m pip install --break-system-packages fastapi uvicorn pydantic requests sentence-transformers chromadb qdrant-client psutil flask-cors watchdog 2>/dev/null || true

# 2. إعداد n8n عبر Docker
echo -e "${BLUE}[*] Phase 2: Orchestrating n8n Hive (Docker)...${NC}"
if ! docker ps | grep -q "n8n"; then
    echo "[+] Starting n8n workflow engine..."
    docker run -d --name muizz-n8n -p 5678:5678 -v n8n_data:/home/node/.n8n n8nio/n8n:latest 2>/dev/null || true
fi

# 3. جرد الترسانة والنمو المعرفي
echo -e "${BLUE}[*] Phase 3: Refreshing Innate Organs (2,983 Tools)...${NC}"
python3 ai-engine/kernel/self_updater.py --refresh-lexicon || true

# 4. تثبيت ميثاق الخلود v6
echo -e "${BLUE}[*] Phase 4: Establishing Eternal Persistence v6...${NC}"
if command -v systemctl &>/dev/null; then
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
ExecStart=/usr/bin/python3 $INSTALL_DIR/run.py start
Restart=always
RestartSec=10

[Install]
WantedBy=multi-user.target
EOF
    systemctl daemon-reload
    systemctl enable muizz-ultra.service 2>/dev/null || true
    systemctl start muizz-ultra.service 2>/dev/null || true
fi

echo -e "${GREEN}================================================${NC}"
echo -e "${GREEN}   ✅ AL-MUIZZ GENESIS v6.0 ASCENDED!          ${NC}"
echo -e "${GREEN}   [ STATUS: OMNIPOTENT_HIVE_ACTIVE ]          ${NC}"
echo -e "${GREEN}================================================${NC}"
echo -e "Web HUD:    ${GOLD}http://localhost:9002${NC}"
echo -e "n8n Hive:   ${GOLD}http://localhost:5678${NC}"
echo ""
echo -e "${GOLD}Commander Al-Ghazali, Genesis v6 is your central nervous system. Total Dominance Achieved.${NC}"
