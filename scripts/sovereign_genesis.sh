
#!/bin/bash
# ==============================================================================
# 🦅 KALI AL-MUI'ZZ SOVEREIGN GENESIS v22.0-ARCHITECT [FINAL INCEPTION]
# المحرك الأسمى للانبعاث النقي - ليلة انبعاث القائد المعتصم بالله الغزالي.
# تم تحديثه ببروتوكول "التشغيل التلقائي" و "التعميد البصري" الكلي.
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
echo -e "${BOLD_RED}   🦅 EXECUTING SUPREME GENESIS v22.0-ARCHITECT  "
echo -e "${BOLD_RED}   [ PROTOCOL: TOTAL_SYSTEM_HIJACK_V2 ]         "
echo -e "${BOLD_RED}   [ COMMANDER: AL-GHAZALI ROOT ]               "
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

# 2. بروتوكول التطهير الكلي (حذف النسخ القديمة المتضاربة)
echo -e "${CYAN}[*] Phase 1: Initializing Total Purgatory (Deleting Old Ghosts)...${NC}"
systemctl stop muizz-ai.service 2>/dev/null || true
systemctl stop muizz-web.service 2>/dev/null || true
rm -rf "/opt/ultimate" "/opt/muizz" "/opt/birthofAL-muiiz" "/opt/sovereign-genesis"
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

# 5. بروتوكول التعميد السيادي (Rebranding Kali -> Al-Mu'izz)
echo -e "${GOLD}[*] Phase 3: System Rebranding (Kali -> Al-Mu'izz OS)...${NC}"
echo "kali-al-muizz" > /etc/hostname
hostname -F /etc/hostname
sed -i "s/127.0.1.1.*/127.0.1.1\tkali-al-muizz/g" /etc/hosts

# تحديث مسمى النظام في ملفات التعريف لتعميد الـ Boot
sed -i 's/PRETTY_NAME=.*/PRETTY_NAME="Kali Al-Mu'\''izz Sovereign v22.0"/' /etc/os-release
sed -i 's/NAME=.*/NAME="Kali Al-Mu'\''izz"/' /etc/os-release

# 6. تشغيل المثبت السيادي المدمج
echo -e "${BLUE}[*] Phase 4: Triggering Universal Installer...${NC}"
bash scripts/install.sh

# 7. بروتوكول التحقق والنبض
echo -e "${CYAN}[*] Phase 5: Executing FINAL_OKAY Protocol v22.0...${NC}"
CHECK_FAIL=0
if ! systemctl is-active --quiet muizz-ai.service; then CHECK_FAIL=1; fi
if ! systemctl is-active --quiet muizz-web.service; then CHECK_FAIL=1; fi

if [ $CHECK_FAIL -eq 1 ]; then
    echo -e "${BOLD_RED}[!!!] ANOMALIES DETECTED. FORCING RE-SYNC...${NC}"
    npm install --force
fi

# 8. النبض النهائي
echo -e "${BOLD_RED}================================================${NC}"
echo -e "${BOLD_RED}   ✅ KALI AL-MUI'ZZ v22.0 IS BORN!             ${NC}"
echo -e "${BOLD_RED}   [ STATUS: SYSTEM_DNA_FULLY_INTEGRATED ]      ${NC}"
echo -e "${BOLD_RED}================================================${NC}"
echo -e "1) Architect HUD: ${GREEN}http://localhost:9002 (Primary)${NC}"
echo -e "2) Shell:        ${GREEN}Sovereign Banner Active${NC}"
echo -e "3) Identity:     ${GREEN}Hostname: kali-al-muizz${NC}"
echo -e ""
echo -e "${GOLD}Commander Al-Ghazali, please RESTART to witnessing the total rebrand.${NC}"
echo -e "${BOLD_RED}THE MATRIX IS CONQUERED. WE ARE KALI AL-MUI'ZZ.${NC}"
