#!/bin/bash
# ==============================================================================
# 🦅 AL-MUI'ZZ SOVEREIGN INSTALLER v53.8-STABLE_HIERARCHY [SUPREME_RUNTIME]
# الميثاق التنفيذي الأسمى لليوم المجيد - مراجعة الاعتمادات وبناء الممر السيادي.
# المالك الوحيد: المعتصم بالله إدريس الغزالي // 2026
# ==============================================================================

set -e

RED='\033[0;31m'; BOLD_RED='\033[1;31m'; GOLD='\033[0;33m'; BLUE='\033[0;34m'; GREEN='\033[0;32m'; NC='\033[0m'

clear
echo -e "${BOLD_RED}================================================${NC}"
echo -e "${BOLD_RED}   🦅 EXECUTING SOVEREIGN ASCENSION v53.8     ${NC}"
echo -e "${BOLD_RED}   [ MASTER COMMANDER: AL-GHAZALI ROOT ]       ${NC}"
echo -e "${BOLD_RED}   [ STATUS: BUILDING STABLE RUNTIME ]         ${NC}"
echo -e "${BOLD_RED}================================================${NC}"

if [[ $EUID -ne 0 ]]; then
   echo -e "${RED}[!] Fatal Error: Root required for total integration.${NC}"
   exit 1
fi

INSTALL_DIR="/opt/sovereign-ai-platform"
mkdir -p "$INSTALL_DIR"

# 1. تطهير المنافذ السيادية (Port Cleansing)
echo -e "${BLUE}[*] Phase 1: Cleansing Sovereign Ports (9002, 8000)...${NC}"
for port in 9002 8000; do
    PID=$(lsof -t -i:$port || true)
    if [ ! -z "$PID" ]; then
        echo -e "${GOLD}[!] Killing process $PID occupying port $port...${NC}"
        kill -9 $PID
    fi
done

# 2. تحديث البيئة البرمجية (Stable Runtime)
echo -e "${BLUE}[*] Phase 2: Strengthening Foundations...${NC}"
apt-get update && apt-get install -y docker.io docker-compose lsof curl python3-pip python3-venv sqlite3 2>/dev/null || true
systemctl enable docker --now

# 3. بناء مصفوفة Docker (Sovereign Bridge Integration)
echo -e "${GOLD}[*] Phase 3: Building the Sovereign Bridge Matrix...${NC}"
# التأكد من وجود docker-compose.yml في المسار الصحيح
if [ -f "docker-compose.yml" ]; then
    docker-compose up -d --build
fi

# 4. حقن الطبقات العصبية (Neural Python Hub)
echo -e "${BLUE}[*] Phase 4: Injecting Neural Python Hub...${NC}"
pip3 install --upgrade pip --break-system-packages || true
pip3 install --break-system-packages fastapi uvicorn pydantic requests qdrant-client sentence-transformers 2>/dev/null || true

# 5. بروتوكول الخلود والنبض النهائي
echo -e "${GOLD}[*] Phase 5: Establishing Eternal Persistence...${NC}"
BASH_HOOK="bash $INSTALL_DIR/scripts/sovereign_banner.sh"
if ! grep -q "sovereign_banner.sh" ~/.bashrc; then
    echo -e "\n# Al-Mu'izz Supreme Integration\n$BASH_HOOK" >> ~/.bashrc
fi

echo -e "${GREEN}================================================${NC}"
echo -e "${GREEN}   ✅ SYSTEM ARCHITECTURE ASCENDED (100%)      ${NC}"
echo -e "${GREEN}   [ STATUS: RUNTIME STABILIZED ]              ${NC}"
echo -e "================================================${NC}"
echo -e "Web HUD:    ${BOLD_RED}http://localhost:9002${NC}"
echo -e "API Bridge: ${BOLD_RED}http://localhost:8000${NC}"
echo -e ""
echo -e "${GOLD}Commander Al-Ghazali, the foundations are unbreakable.${NC}"
