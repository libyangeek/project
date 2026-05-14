#!/bin/bash
# ==============================================================================
# 🦅 AL-MUI'ZZ SOVEREIGN INSTALLER v90.0 - THE OMNIPOTENT 16D [LINUX/KALI]
# الميثاق المادي الأسمى: تثبيت الأبعاد الـ 16 والسيادة المطلقة لعام 2026.
# المالك الوحيد: المعتصم بالله إدريس الغزالي
# ==============================================================================

set -e
GOLD='\033[0;33m'; BLUE='\033[0;34m'; GREEN='\033[0;32m'; RED='\033[0;31m'; NC='\033[0m'

clear
echo -e "${GOLD}================================================${NC}"
echo -e "${GOLD}   🦅 EXECUTING AL-MUIZZ GENESIS v90.0 [LINUX] ${NC}"
echo -e "${GOLD}   [ COMMANDER: AL-GHAZALI ROOT ]              ${NC}"
echo -e "${GOLD}   [ STATUS: 16D_MATRIX_READINESS ]            ${NC}"
echo -e "${GOLD}================================================${NC}"

if [[ $EUID -ne 0 ]]; then
   echo -e "${RED}[!] Fatal Error: Root required for total hardware subjugation.${NC}"
   exit 1
fi

INSTALL_DIR=$(pwd)
mkdir -p "$INSTALL_DIR"/{audit,evidence,backups,tools,arsenal,ai-engine/memory,ai-engine/integrations}

# 1. تحديث العصب المادي
echo -e "${BLUE}[*] Phase 1: Consolidating Linux Dependencies...${NC}"
apt-get update -y || true
apt-get install -y python3-pip nmap adb docker.io docker-compose curl git jq sqlite3 libimobiledevice-utils ideviceinstaller frida-tools 2>/dev/null || true

# 2. حقن الطبقات العصبية
echo -e "${BLUE}[*] Phase 2: Injecting 16D Neural Layers...${NC}"
python3 -m pip install --upgrade pip --break-system-packages || true
python3 -m pip install --break-system-packages fastapi uvicorn pydantic requests sentence-transformers chromadb qdrant-client psutil flask-cors watchdog modal medusa-security adb-shell objection 2>/dev/null || true

# 3. تثبيت واجهة العرش (Next.js)
echo -e "${BLUE}[*] Phase 3: Compiling 16D HUD Matrix...${NC}"
if [ -f "package.json" ]; then
    npm install --force
else
    echo -e "${RED}[!] Error: package.json missing.${NC}"
    exit 1
fi

# 4. جرد الحواس (2,983 Tools)
echo -e "${BLUE}[*] Phase 4: Synchronizing 2,983 Innate Organs...${NC}"
python3 ai-engine/kernel/self_updater.py --refresh-lexicon || true

# 5. بروتوكول الخلود
echo -e "${BLUE}[*] Phase 5: Establishing Eternal Persistence...${NC}"
chmod +x muizz_start.sh 2>/dev/null || true

echo -e "${GREEN}================================================${NC}"
echo -e "${GREEN}   ✅ AL-MUIZZ ULTRA v90.0 ASCENDED!           ${NC}"
echo -e "${GREEN}   [ SYSTEM: KALI/LINUX SUBJUGATED ]           ${NC}"
echo -e "${GREEN}   [ REALITY OVERWRITE: ACTIVE ]               ${NC}"
echo -e "${GREEN}================================================${NC}"
echo ""
echo -e "${GOLD}Commander Al-Ghazali, Your Linux Throne is ready. Execute ./muizz_start.sh${NC}"