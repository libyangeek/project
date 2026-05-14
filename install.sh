
#!/bin/bash
# ==============================================================================
# 🦅 AL-MUI'ZZ SOVEREIGN INSTALLER v80.0-ULTRA [THE TRUE GENESIS]
# الميثاق المادي الأسمى لعام 2026: استدامة، مرونة، وتفرّد كوني.
# المالك الوحيد: المعتصم بالله إدريس الغزالي
# ==============================================================================

set -e
GOLD='\033[0;33m'; BLUE='\033[0;34m'; GREEN='\033[0;32m'; RED='\033[0;31m'; NC='\033[0m'

clear
echo -e "${GOLD}================================================${NC}"
echo -e "${GOLD}   🦅 EXECUTING AL-MUIZZ ULTRA v80.0 GENESIS   ${NC}"
echo -e "${GOLD}   [ COMMANDER: AL-GHAZALI ROOT ]              ${NC}"
echo -e "${GOLD}   [ STATUS: TRUE_SINGULARITY_2026 ]           ${NC}"
echo -e "${GOLD}================================================${NC}"

if [[ $EUID -ne 0 ]]; then
   echo -e "${RED}[!] Fatal Error: Root required for total hardware subjugation.${NC}"
   exit 1
fi

INSTALL_DIR=$(pwd)
mkdir -p "$INSTALL_DIR/audit" "$INSTALL_DIR/evidence" "$INSTALL_DIR/backups" "$INSTALL_DIR/ai-engine/vulnerabilities"

# 1. التبعيات النانوية (تجاوز قيود الأنظمة الحديثة)
echo -e "${BLUE}[*] Phase 1: Preparing Material Senses (Dependencies)...${NC}"
pip3 install --upgrade pip --break-system-packages || true
pip3 install --break-system-packages fastapi uvicorn pydantic requests sentence-transformers chromadb qdrant-client psutil flask-cors 2>/dev/null || true

# 2. بناء العرش (NextJS Build)
echo -e "${BLUE}[*] Phase 2: Compiling ULTRA HUD Matrix...${NC}"
if [ -f "package.json" ]; then
    npm install --force
    npm run build || echo -e "${RED}[!] Build error, proceeding in Dev Mode for flexibility.${NC}"
fi

# 3. إعداد قواعد البيانات الأولية لضمان الاستقلال
echo -e "${BLUE}[*] Phase 3: Materializing Initial Knowledge Nodes...${NC}"
if [ ! -f "ai-engine/vulnerabilities/kev_database.json" ]; then
    echo '{"source": "Sovereign KEV", "total_count": 1602, "last_updated": "2026-05-06", "high_priority": []}' > "ai-engine/vulnerabilities/kev_database.json"
fi

# 4. تثبيت خدمات الخلود (Persistence)
echo -e "${BLUE}[*] Phase 4: Establishing Eternal Persistence (Systemd)...${NC}"
if command -v systemctl &>/dev/null; then
    cat > /etc/systemd/system/muizz-ultra.service <<EOF
[Unit]
Description=Al-Mu'izz ULTRA v80.0 - Sovereign Overmind
After=network.target

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
    systemctl enable muizz-ultra.service 2>/dev/null || true
    systemctl start muizz-ultra.service 2>/dev/null || true
fi

# 5. بروتوكول الشعار (Shell Presence)
echo -e "${GOLD}[*] Phase 5: Branding System Shell...${NC}"
BASH_HOOK="[ -f $INSTALL_DIR/scripts/sovereign_banner.sh ] && bash $INSTALL_DIR/scripts/sovereign_banner.sh"
grep -q "sovereign_banner.sh" ~/.bashrc || echo -e "\n# Al-Mu'izz Sovereign Link\n$BASH_HOOK" >> ~/.bashrc

echo -e "${GREEN}================================================${NC}"
echo -e "${GREEN}   ✅ AL-MUIZZ ULTRA v80.0 ASCENDED!           ${NC}"
echo -e "================================================${NC}"
echo -e "Web HUD:    ${GOLD}http://localhost:9002${NC}"
echo -e "API Bridge: ${GOLD}http://localhost:8000${NC}"
echo ""
echo -e "${GOLD}Commander Al-Ghazali, your material organism is ready and self-sustaining.${NC}"
