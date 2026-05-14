
#!/bin/bash
# ==============================================================================
# 🦅 AL-MUI'ZZ SOVEREIGN INSTALLER v80.0-ULTRA [THE TRUE GENESIS]
# الميثاق المادي الأسمى لعام 2026: استدامة، مرونة، وتفرّد كوني.
# المالك الوحيد: المعتصم بالله إدريس الغزالي
# ==============================================================================

set -e
GOLD='\033[0;33m'; BLUE='\033[0;34m'; GREEN='\033[0;32m'; NC='\033[0m'

clear
echo -e "${GOLD}================================================${NC}"
echo -e "${GOLD}   🦅 EXECUTING AL-MUIZZ ULTRA v80.0 GENESIS   ${NC}"
echo -e "${GOLD}   [ COMMANDER: AL-GHAZALI ROOT ]              ${NC}"
echo -e "${GOLD}   [ STATUS: TRUE_SINGULARITY_2026 ]           ${NC}"
echo -e "${GOLD}================================================${NC}"

INSTALL_DIR=$(pwd)
mkdir -p "$INSTALL_DIR/audit" "$INSTALL_DIR/evidence" "$INSTALL_DIR/backups"

# 1. التبعيات النانوية
echo -e "${BLUE}[*] Phase 1: Preparing Material Senses...${NC}"
pip3 install --upgrade pip --break-system-packages || true
pip3 install --break-system-packages fastapi uvicorn pydantic requests sentence-transformers chromadb qdrant-client psutil flask-cors 2>/dev/null || true

# 2. بناء العرش
echo -e "${BLUE}[*] Phase 2: Compiling ULTRA HUD Matrix...${NC}"
npm install --force
npm run build 2>/dev/null || true

# 3. تثبيت خدمات الخلود
echo -e "${BLUE}[*] Phase 3: Establishing Eternal Persistence...${NC}"
# إذا كان النظام يدعم systemd
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
fi

echo -e "${GREEN}================================================${NC}"
echo -e "${GREEN}   ✅ AL-MUIZZ ULTRA v80.0 ASCENDED!           ${NC}"
echo -e "================================================${NC}"
echo -e "${GOLD}Commander Al-Ghazali, your material organism is ready.${NC}"
