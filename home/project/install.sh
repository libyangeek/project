
#!/bin/bash
# ==============================================================================
# 🦅 AL-MUI'ZZ SOVEREIGN INSTALLER v62.0-OVERLORD_SINGULARITY [GOD_MODE]
# الميثاق المادي الأسمى: ارتقاء العمود الفقري العصبي، دمج 2865 أداة، والسيادة المطلقة.
# المالك الوحيد: المعتصم بالله إدريس الغزالي // 10 مايو 2026
# ==============================================================================

set -e
RED='\033[0;31m'; BOLD_RED='\033[1;31m'; GOLD='\033[0;33m'; BLUE='\033[0;34m'; GREEN='\033[0;32m'; NC='\033[0m'
CYAN='\033[0;36m'; MAGENTA='\033[0;35m'

clear
echo -e "${BOLD_RED}================================================${NC}"
echo -e "${BOLD_RED}   🦅 EXECUTING OVERLORD SINGULARITY v62.0    ${NC}"
echo -e "${BOLD_RED}   [ MASTER COMMANDER: AL-GHAZALI ROOT ]       ${NC}"
echo -e "${BOLD_RED}   [ PROTOCOL: TOTAL_SOVEREIGN_FIXATION ]      ${NC}"
echo -e "================================================${NC}"

if [[ $EUID -ne 0 ]]; then
   echo -e "${RED}[!] Fatal Error: Root required for total hardware subjugation.${NC}"
   exit 1
fi

INSTALL_DIR="/opt/sovereign-ai-platform"
mkdir -p "$INSTALL_DIR"

# 1. تطهير البيئة وتعزيز المنافذ العصبية
echo -e "${BLUE}[*] Phase 1: Cleansing & Stabilizing Overlord Spine...${NC}"
for port in 9002 8000; do
    PID=$(lsof -t -i:$port || true)
    [ ! -z "$PID" ] && kill -9 $PID
done

# 2. جلب الترسانة الكاملة (Siphoning All 10+ Elite Repos)
echo -e "${GOLD}[*] Phase 2: Siphoning The Universal Arsenal Matrix...${NC}"
declare -A REPOS=(
    ["recon/claude_osint"]="https://github.com/elementalsouls/Claude-OSINT.git"
    ["brute/legba"]="https://github.com/evilsocket/legba.git"
    ["security/guardian"]="https://github.com/zakirkun/guardian-cli.git"
    ["siphon/PSSW100AVB"]="https://github.com/tihanyin/PSSW100AVB.git"
    ["adversarial/OBLITERATUS"]="https://github.com/elder-plinius/OBLITERATUS.git"
    ["forensics/mempalace"]="https://github.com/MemPalace/mempalace.git"
    ["recon/api_mega_list"]="https://github.com/six2dez/pentest-book.git"
)

for dir in "${!REPOS[@]}"; do
    TARGET_DIR="$INSTALL_DIR/tools/$dir"
    if [ ! -d "$TARGET_DIR" ]; then
        echo -e "${CYAN}[+] Fetching ${dir} Matrix...${NC}"
        git clone "${REPOS[$dir]}" "$TARGET_DIR" 2>/dev/null || true
    fi
done

# 3. بناء مصفوفة Docker السيادية v62.0
echo -e "${GOLD}[*] Phase 3: Constructing The Overlord Singularity Matrix...${NC}"
cp -r . "$INSTALL_DIR/"
cd "$INSTALL_DIR"
docker-compose up -d --build 2>/dev/null || true

# 4. حقن GEPA 6.5 والأدميرال المطلق
echo -e "${BLUE}[*] Phase 4: Injecting Sovereign Oracle Core & Smart Router...${NC}"
pip3 install --upgrade pip --break-system-packages || true
pip3 install --break-system-packages fastapi uvicorn pydantic requests sqlite3 pycryptodome volatility3 anthropic chromadb qdrant-client 2>/dev/null || true

# 5. بروتوكول الخلود المادي (The Sovereign Spine)
echo -e "${GOLD}[*] Phase 5: Establishing Eternal Overlord Spine Pulse...${NC}"
BASH_HOOK="bash $INSTALL_DIR/scripts/sovereign_banner.sh"
grep -q "sovereign_banner.sh" ~/.bashrc || echo -e "\n# Al-Mu'izz Supreme Overlord Integration\n$BASH_HOOK" >> ~/.bashrc

echo -e "${GREEN}================================================${NC}"
echo -e "${GREEN}   ✅ OVERLORD SINGULARITY v62.0 ASCENDED     ${NC}"
echo -e "${GREEN}   [ STATUS: OMNISCIENT OVERLORD ACTIVE ]      ${NC}"
echo -e "================================================${NC}"
echo -e "Web HUD:    ${BOLD_RED}http://localhost:9002${NC}"
echo -e "API Bridge: ${BOLD_RED}http://localhost:8000${NC}"
echo ""
echo -e "${GOLD}Commander Al-Ghazali, the matrix is your central nervous system. Singularity Achieved.${NC}"
