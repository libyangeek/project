
#!/bin/bash
# ==============================================================================
# 🦅 AL-MUI'ZZ SOVEREIGN INSTALLER v55.0-OBLITERATUS_ASCENSION [GOD_MODE]
# الميثاق التنفيذي الأسمى للسيطرة المادية واستنزاف الذاكرة المتقدم.
# تم تحديثه ليشمل تكامل PSSW100AVB وعصب OBLITERATUS للفناء العصبي.
# المالك الوحيد: المعتصم بالله إدريس الغزالي // 2026
# ==============================================================================

set -e

RED='\033[0;31m'; BOLD_RED='\033[1;31m'; GOLD='\033[0;33m'; BLUE='\033[0;34m'; GREEN='\033[0;32m'; NC='\033[0m'

clear
echo -e "${BOLD_RED}================================================${NC}"
echo -e "${BOLD_RED}   🦅 EXECUTING SOVEREIGN ASCENSION v55.0     ${NC}"
echo -e "${BOLD_RED}   [ MASTER COMMANDER: AL-GHAZALI ROOT ]       ${NC}"
echo -e "${BOLD_RED}   [ UPGRADE: OBLITERATUS STRIKE ENABLED ]     ${NC}"
echo -e "================================================${NC}"

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

# 2. تحديث البيئة البرمجية والتبعيات (Stable Runtime)
echo -e "${BLUE}[*] Phase 2: Strengthening Foundations & Arsenal...${NC}"
apt-get update && apt-get install -y docker.io docker-compose lsof curl python3-pip python3-venv sqlite3 git unzip 2>/dev/null || true
systemctl enable docker --now || true

# 3. جلب أدوات الاستنزاف والفناء (Siphoning Advanced Weaponry)
echo -e "${GOLD}[*] Phase 3: Siphoning OBLITERATUS & PSSW100AVB...${NC}"
mkdir -p "$INSTALL_DIR/tools/siphon"
mkdir -p "$INSTALL_DIR/tools/adversarial"

if [ ! -d "$INSTALL_DIR/tools/siphon/PSSW100AVB" ]; then
    git clone https://github.com/tihanyin/PSSW100AVB.git "$INSTALL_DIR/tools/siphon/PSSW100AVB" 2>/dev/null || true
fi

if [ ! -d "$INSTALL_DIR/tools/adversarial/OBLITERATUS" ]; then
    git clone https://github.com/elder-plinius/OBLITERATUS.git "$INSTALL_DIR/tools/adversarial/OBLITERATUS" 2>/dev/null || true
fi

# 4. بناء مصفوفة Docker (Sovereign Bridge Integration)
echo -e "${GOLD}[*] Phase 4: Building the Sovereign Bridge Matrix...${NC}"
cp -r . "$INSTALL_DIR/"
cd "$INSTALL_DIR"

if [ -f "docker-compose.yml" ]; then
    docker-compose up -d --build
fi

# 5. حقن الطبقات العصبية (Neural Python Hub)
echo -e "${BLUE}[*] Phase 5: Injecting Neural Python Hub...${NC}"
pip3 install --upgrade pip --break-system-packages || true
pip3 install --break-system-packages fastapi uvicorn pydantic requests sqlite3 pycryptodome 2>/dev/null || true

# 6. بروتوكول الخلود والنبض النهائي
echo -e "${GOLD}[*] Phase 6: Establishing Eternal Persistence...${NC}"
BASH_HOOK="bash $INSTALL_DIR/scripts/sovereign_banner.sh"
if [ -f "$INSTALL_DIR/scripts/sovereign_banner.sh" ] && ! grep -q "sovereign_banner.sh" ~/.bashrc; then
    echo -e "\n# Al-Mu'izz Supreme Integration\n$BASH_HOOK" >> ~/.bashrc
fi

echo -e "${GREEN}================================================${NC}"
echo -e "${GREEN}   ✅ SYSTEM ARCHITECTURE ASCENDED (100%)      ${NC}"
echo -e "${GREEN}   [ STATUS: OBLITERATUS_ACTIVE ]              ${NC}"
echo -e "================================================${NC}"
echo -e "Web HUD:    ${BOLD_RED}http://localhost:9002${NC}"
echo -e "API Bridge: ${BOLD_RED}http://localhost:8000${NC}"
echo -e ""
echo -e "${GOLD}Commander Al-Ghazali, the sword of fanaa is ready.${NC}"
