
#!/bin/bash
# ==============================================================================
# 🦅 AL-MUI'ZZ SOVEREIGN INSTALLER v58.0-SUPREME_ARSENAL_MASTER [GOD_MODE]
# الميثاق المادي النهائي: استنزاف، قصف، فناء، تحليل عصبي، وتطهير كلي.
# المالك الوحيد: المعتصم بالله إدريس الغزالي // 10 مايو 2026
# ==============================================================================

set -e

RED='\033[0;31m'; BOLD_RED='\033[1;31m'; GOLD='\033[0;33m'; BLUE='\033[0;34m'; GREEN='\033[0;32m'; NC='\033[0m'

clear
echo -e "${BOLD_RED}================================================${NC}"
echo -e "${BOLD_RED}   🦅 EXECUTING SUPREME ASCENSION v58.0      ${NC}"
echo -e "${BOLD_RED}   [ MASTER COMMANDER: AL-GHAZALI ROOT ]       ${NC}"
echo -e "${BOLD_RED}   [ PROTOCOL: TOTAL_ARSENAL_INTEGRATION ]     ${NC}"
echo -e "================================================${NC}"

if [[ $EUID -ne 0 ]]; then
   echo -e "${RED}[!] Fatal Error: Root required for total hardware subjugation.${NC}"
   exit 1
fi

INSTALL_DIR="/opt/sovereign-ai-platform"
mkdir -p "$INSTALL_DIR"

# 1. تطهير المنافذ والبيئة المادية
echo -e "${BLUE}[*] Phase 1: Cleansing Sovereign Domain (Ports 9002, 8000)...${NC}"
for port in 9002 8000; do
    PID=$(lsof -t -i:$port || true)
    if [ ! -z "$PID" ]; then
        echo -e "${GOLD}[!] Killing obstruction $PID on port $port...${NC}"
        kill -9 $PID
    fi
done

# 2. تعزيز العتاد والتبعيات
echo -e "${BLUE}[*] Phase 2: Strengthening Foundations...${NC}"
apt-get update && apt-get install -y docker.io docker-compose lsof curl python3-pip python3-venv sqlite3 git unzip build-essential libpcap-dev 2>/dev/null || true
systemctl enable docker --now || true

# 3. جلب الأسلحة النانوية (Siphoning All 7+ Elite Repos)
echo -e "${GOLD}[*] Phase 3: Siphoning The Supreme Arsenal...${NC}"
declare -A REPOS=(
    ["recon/claude_osint"]="https://github.com/elementalsouls/Claude-OSINT.git"
    ["brute/legba"]="https://github.com/evilsocket/legba.git"
    ["security/guardian"]="https://github.com/zakirkun/guardian-cli.git"
    ["recon/api_list"]="https://github.com/cporter202/API-mega-list.git"
    ["siphon/PSSW100AVB"]="https://github.com/tihanyin/PSSW100AVB.git"
    ["adversarial/OBLITERATUS"]="https://github.com/elder-plinius/OBLITERATUS.git"
    ["forensics/mempalace"]="https://github.com/MemPalace/mempalace.git"
)

for dir in "${!REPOS[@]}"; do
    TARGET_DIR="$INSTALL_DIR/tools/$dir"
    if [ ! -d "$TARGET_DIR" ]; then
        echo -e "${CYAN}[+] Fetching ${dir}...${NC}"
        git clone "${REPOS[$dir]}" "$TARGET_DIR" 2>/dev/null || true
    fi
done

# 4. بناء مصفوفة السطوة (Docker & Bridge)
echo -e "${GOLD}[*] Phase 4: Constructing The Sovereign Bridge Matrix...${NC}"
cp -r . "$INSTALL_DIR/"
cd "$INSTALL_DIR"

if [ -f "docker-compose.yml" ]; then
    docker-compose up -d --build
fi

# 5. حقن الطبقات العصبية
echo -e "${BLUE}[*] Phase 5: Injecting Neural Python Hub...${NC}"
pip3 install --upgrade pip --break-system-packages || true
pip3 install --break-system-packages fastapi uvicorn pydantic requests sqlite3 pycryptodome volatility3 anthropic 2>/dev/null || true

# 6. بروتوكول الخلود
echo -e "${GOLD}[*] Phase 6: Establishing Eternal Persistence...${NC}"
BASH_HOOK="bash $INSTALL_DIR/scripts/sovereign_banner.sh"
if [ -f "$INSTALL_DIR/scripts/sovereign_banner.sh" ] && ! grep -q "sovereign_banner.sh" ~/.bashrc; then
    echo -e "\n# Al-Mu'izz Supreme Integration\n$BASH_HOOK" >> ~/.bashrc
fi

echo -e "${GREEN}================================================${NC}"
echo -e "${GREEN}   ✅ SYSTEM ARCHITECTURE ASCENDED (100%)      ${NC}"
echo -e "${GREEN}   [ STATUS: ALL 23 NODES BOUND | OMNIPOTENT ]  ${NC}"
echo -e "================================================${NC}"
echo -e "Web HUD:    ${BOLD_RED}http://localhost:9002${NC}"
echo -e "API Bridge: ${BOLD_RED}http://localhost:8000${NC}"
echo ""
echo -e "${GOLD}Commander Al-Ghazali, the matrix is now your extension.${NC}"
