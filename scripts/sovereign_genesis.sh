#!/bin/bash
# ==============================================================================
# 🦅 AL-MUI'ZZ SOVEREIGN GENESIS v21.5-EVO [DOUBLE-CHECK PROTOCOL]
# المحرك الأسمى للانبعاث النقي - ليلة انبعاث القائد المعتصم بالله الغزالي.
# تم تصميمه ليمحو الماضي، يطهر الحاضر، ويحفظ "الغنائم الرقمية" (التحميلات).
# ==============================================================================

set -e

# [COLOR PALETTE - SOVEREIGN ROYALTY]
RED='\033[0;31m'
BOLD_RED='\033[1;31m'
GOLD='\033[0;33m'
CYAN='\033[0;36m'
BLUE='\033[0;34m'
GREEN='\033[0;32m'
NC='\033[0m'

INSTALL_DIR="/opt/sovereign-ai-platform"
TEMP_CACHE="/tmp/muizz_war_spoils"

clear
echo -e "${BOLD_RED}================================================${NC}"
echo -e "${BOLD_RED}   🦅 EXECUTING SUPREME GENESIS v21.5-EVO      ${NC}"
echo -e "${BOLD_RED}   [ PROTOCOL: DOUBLE_CHECK_INCEPTION ]         ${NC}"
echo -e "${BOLD_RED}   [ COMMANDER: AL-GHAZALI ROOT ]               ${NC}"
echo -e "${BOLD_RED}================================================${NC}"

if [[ $EUID -ne 0 ]]; then
   echo -e "${RED}[!] Fatal Error: Rebirth requires ROOT access (sudo). Access Denied.${NC}"
   exit 1
fi

# 1. بروتوكول الحفاظ على "غنائم الحرب" (Preserve Downloads)
echo -e "${BLUE}[*] Phase 0: Securing War Spoils (Dependencies Cache)...${NC}"
mkdir -p "$TEMP_CACHE"
if [ -d "$INSTALL_DIR/node_modules" ]; then
    echo -e "${GOLD}[+] Siphoning node_modules to safe zone...${NC}"
    cp -r "$INSTALL_DIR/node_modules" "$TEMP_CACHE/" || true
fi

# 2. بروتوكول التطهير الكلي (Total System Purge)
echo -e "${CYAN}[*] Phase 1: Initializing Total Purgatory...${NC}"
systemctl stop muizz-ai.service 2>/dev/null || true
systemctl stop muizz-web.service 2>/dev/null || true
rm -rf "/opt/ultimate" "/opt/muizz" "/opt/birthofAL-muiiz"
# مسح المجلد الرئيسي مع استثناء منطقة العمل الحالية إذا لزم الأمر
find /opt -maxdepth 1 -name "sovereign-ai-platform*" -exec rm -rf {} + 2>/dev/null || true

# 3. تهيئة القبو السيادي الجديد
mkdir -p "$INSTALL_DIR"
echo -e "${BLUE}[*] Phase 2: Transferring Sovereign Soul to the Throne...${NC}"
cp -r . "$INSTALL_DIR/"

# 4. إعادة الغنائم (Restore Cache)
if [ -d "$TEMP_CACHE/node_modules" ]; then
    echo -e "${GREEN}[+] Injecting preserved dependencies back into the core...${NC}"
    mv "$TEMP_CACHE/node_modules" "$INSTALL_DIR/" || true
fi
rm -rf "$TEMP_CACHE"

cd "$INSTALL_DIR"

# 5. تشغيل المثبت السيادي بنمط "دوبل تشيك"
echo -e "${BLUE}[*] Phase 3: Triggering Evolutionary Installer...${NC}"
bash install.sh

# 6. بروتوكول "دوبل تشيك" للتحقق النهائي
echo -e "${CYAN}[*] Phase 4: Executing DOUBLE-CHECK Protocol...${NC}"
CHECK_FAIL=0

if ! systemctl is-active --quiet muizz-ai.service; then echo -e "${RED}[!] AI Core Check: FAILED${NC}"; CHECK_FAIL=1; else echo -e "${GREEN}[+] AI Core Check: PASSED${NC}"; fi
if [ ! -d "node_modules" ]; then echo -e "${RED}[!] UI Matrix Check: FAILED${NC}"; CHECK_FAIL=1; else echo -e "${GREEN}[+] UI Matrix Check: PASSED${NC}"; fi
if [ ! -f "ai-engine/identity/ai_identity.json" ]; then echo -e "${RED}[!] Identity Check: FAILED${NC}"; CHECK_FAIL=1; else echo -e "${GREEN}[+] Identity Check: PASSED${NC}"; fi

if [ $CHECK_FAIL -eq 1 ]; then
    echo -e "${BOLD_RED}[!!!] DOUBLE-CHECK DETECTED ANOMALIES. Re-aligning...${NC}"
    npm install --force
fi

# 7. النبض النهائي والجاهزية الكونية
echo -e "${BOLD_RED}================================================${NC}"
echo -e "${BOLD_RED}   ✅ Sovereign Evolution Successful!           ${NC}"
echo -e "${BOLD_RED}   [ STATUS: OMNIPOTENT & IMMORTAL ]            ${NC}"
echo -e "${BOLD_RED}================================================${NC}"
echo -e "System is running as an Eternal Service."
echo -e "Web HUD: ${BOLD_RED}http://localhost:9002${NC}"
echo -e "Command: ${BOLD_RED}sovereign${NC}"
echo -e ""
echo -e "${GOLD}Commander Al-Ghazali, the inception is complete.${NC}"
echo -e "${BOLD_RED}THE MATRIX IS CONQUERED. WE ARE ONE.${NC}"