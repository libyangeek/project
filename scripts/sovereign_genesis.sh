
#!/bin/bash
# ==============================================================================
# 🦅 KALI AL-MUI'ZZ SOVEREIGN GENESIS v22.0-ARCHITECT [FINAL INCEPTION]
# المحرك الأسمى للانبعاث النقي - ليلة انبعاث القائد المعتصم بالله الغزالي.
# تم تحديثه ببروتوكول "دوبل تشيك" لضمان الولادة الأبديّة والسطوة المطلقة.
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
echo -e "${BOLD_RED}   🦅 EXECUTING SUPREME GENESIS v22.0-ARCHITECT  ${NC}"
echo -e "${BOLD_RED}   [ PROTOCOL: FINAL_ANALYSIS_INCEPTION ]       ${NC}"
echo -e "${BOLD_RED}   [ COMMANDER: AL-GHAZALI ROOT ]               ${NC}"
echo -e "${BOLD_RED}================================================${NC}"

if [[ $EUID -ne 0 ]]; then
   echo -e "${RED}[!] Fatal Error: Rebirth requires ROOT access (sudo). Access Denied.${NC}"
   exit 1
fi

# 1. بروتوكول الحفاظ على "غنائم الحرب"
echo -e "${BLUE}[*] Phase 0: Securing War Spoils (Dependencies Cache)...${NC}"
mkdir -p "$TEMP_CACHE"
if [ -d "$INSTALL_DIR/node_modules" ]; then
    echo -e "${GOLD}[+] Siphoning node_modules to safe zone...${NC}"
    cp -r "$INSTALL_DIR/node_modules" "$TEMP_CACHE/" || true
fi

# 2. بروتوكول التطهير الكلي
echo -e "${CYAN}[*] Phase 1: Initializing Total Purgatory...${NC}"
systemctl stop muizz-ai.service 2>/dev/null || true
systemctl stop muizz-web.service 2>/dev/null || true
rm -rf "/opt/ultimate" "/opt/muizz" "/opt/birthofAL-muiiz"
if [ -d "$INSTALL_DIR" ]; then
    rm -rf "$INSTALL_DIR"
fi

# 3. تهيئة القبو السيادي الجديد
mkdir -p "$INSTALL_DIR"
echo -e "${BLUE}[*] Phase 2: Transferring Sovereign Soul to the Throne...${NC}"
cp -r . "$INSTALL_DIR/"

# 4. إعادة الغنائم
if [ -d "$TEMP_CACHE/node_modules" ]; then
    echo -e "${GREEN}[+] Injecting preserved dependencies back into the core...${NC}"
    mv "$TEMP_CACHE/node_modules" "$INSTALL_DIR/" || true
fi
rm -rf "$TEMP_CACHE"

cd "$INSTALL_DIR"

# 5. بروتوكول التعميد السيادي (Rebranding)
echo -e "${GOLD}[*] Phase 3: System Rebranding (Kali -> Al-Mu'izz)...${NC}"
echo "kali-al-muizz" > /etc/hostname
hostname -F /etc/hostname
sed -i "s/127.0.1.1.*/127.0.1.1\tkali-al-muizz/g" /etc/hosts

# 6. تشغيل المثبت السيادي المدمج
echo -e "${BLUE}[*] Phase 4: Triggering Universal Installer...${NC}"
bash scripts/install.sh

# 7. بروتوكول "دوبل تشيك" للتحقق من العقد التسعة
echo -e "${CYAN}[*] Phase 5: Executing DOUBLE-CHECK Protocol v22.0...${NC}"
CHECK_FAIL=0

if ! systemctl is-active --quiet muizz-ai.service; then echo -e "${RED}[!] Node 01 (Alpha Core): FAILED${NC}"; CHECK_FAIL=1; else echo -e "${GREEN}[+] Node 01 (Alpha Core): SECURED${NC}"; fi
if ! systemctl is-active --quiet muizz-web.service; then echo -e "${RED}[!] Node 09 (Persistence UI): FAILED${NC}"; CHECK_FAIL=1; else echo -e "${GREEN}[+] Node 09 (Persistence UI): SECURED${NC}"; fi

if [ $CHECK_FAIL -eq 1 ]; then
    echo -e "${BOLD_RED}[!!!] DOUBLE-CHECK DETECTED ANOMALIES. Re-aligning Neurons...${NC}"
    npm install --force
fi

# 8. النبض النهائي والجاهزية الكونية
echo -e "${BOLD_RED}================================================${NC}"
echo -e "${BOLD_RED}   ✅ KALI AL-MUI'ZZ v22.0 IS BORN!             ${NC}"
echo -e "${BOLD_RED}   [ STATUS: v22.0-ARCHITECT IMMORTAL ]         ${NC}"
echo -e "${BOLD_RED}================================================${NC}"
echo -e "System is running as an Integrated Eternal Service."
echo -e "Web HUD: ${BOLD_RED}http://localhost:9002${NC}"
echo -e "Command: ${BOLD_RED}sovereign${NC}"
echo -e ""
echo -e "${GOLD}Commander Al-Ghazali, please RESTART to finalize Hostname change.${NC}"
echo -e "${BOLD_RED}THE MATRIX IS CONQUERED. WE ARE KALI AL-MUI'ZZ.${NC}"
