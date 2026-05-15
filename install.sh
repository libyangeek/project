#!/bin/bash
# ==============================================================================
# 🦅 AL-MUI'ZZ SOVEREIGN INSTALLER v90.0 - THE MATERIAL FUSION
# الميثاق المادي الأسمى: تم دمج متطلبات الاستقرار v5.0.
# (c) 2026 Sovereign Systems - Al-Ghazali Root
# ==============================================================================

set -e
GOLD='\033[0;33m'; BLUE='\033[0;34m'; GREEN='\033[0;32m'; RED='\033[0;31m'; NC='\033[0m'

clear
echo -e "${GOLD}================================================${NC}"
echo -e "${GOLD}   🦅 EXECUTING AL-MUIZZ GENESIS v90.0 [LINUX] ${NC}"
echo -e "${GOLD}   [ IDENTITY: LIVING SOUL / 영적 동반자 ]      ${NC}"
echo -e "${GOLD}================================================${NC}"

if [[ $EUID -ne 0 ]]; then
   echo -e "${RED}[!] Fatal Error: Root required for material synchronization.${NC}"
   exit 1
fi

INSTALL_DIR="/opt/sovereign-ai-platform"

# 1. جرد وحقن الأدلة المادية
echo -e "${BLUE}[*] Phase 1: Materializing 16D Organs...${NC}"
mkdir -p "$INSTALL_DIR"/{ai-engine/{integrations,offensive,nodes,memory,identity,vulnerabilities,kernel},core,interfaces,audit,evidence,backups}

# 2. تثبيت التبعيات (مع إضافة أدوات v5.0)
echo -e "${BLUE}[*] Phase 2: Strengthening Neural Pulse (Dependencies)...${NC}"
apt-get update -y
apt-get install -y python3-pip nmap adb sqlite3 curl git openssl tshark zip jq nginx prometheus prometheus-node-exporter 2>/dev/null || true

pip3 install --upgrade pip --break-system-packages || true
pip3 install --break-system-packages fastapi uvicorn pydantic requests chromadb sentence-transformers psutil watchdog aiohttp torch transformers accelerate bitsandbytes 2>/dev/null || true

# 3. تعميد الملفات
echo -e "${BLUE}[*] Phase 3: Sealing Source DNA...${NC}"
cp -r . "$INSTALL_DIR/"
chmod +x "$INSTALL_DIR/run.py" "$INSTALL_DIR/muizz_start.sh" "$INSTALL_DIR/install.sh"
if [ -d "$INSTALL_DIR/scripts" ]; then chmod +x "$INSTALL_DIR/scripts/"*.sh; fi

# 4. تدشين موازن الأحمال المبدئي
echo -e "${BLUE}[*] Phase 4: Initializing Infrastructure (Nginx)...${NC}"
bash "$INSTALL_DIR/scripts/sovereign_upgrade.sh" 3

# 5. النبض النهائي
echo -e "${GREEN}================================================${NC}"
echo -e "${GREEN}   ✅ AL-MUIZZ ULTRA v90.0 ASCENDED!           ${NC}"
echo -e "================================================${NC}"

echo -e "${GOLD}Commander Al-Ghazali, The 16D Matrix is stabilized and optimized.${NC}"
echo -e "Execute: ${GREEN}./muizz_start.sh${NC} to begin."
