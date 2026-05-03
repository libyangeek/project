
#!/bin/bash
# ==============================================================================
# 🦅 KALI AL-MUI'ZZ SOVEREIGN GENESIS v22.0-ARCHITECT [TOTAL SYSTEM REBIRTH]
# المحرك الأسمى للانبعاث النقي - ليلة انبعاث القائد المعتصم بالله الغزالي.
# تم تحديثه لتعميد النظام بهوية "KALI AL-MUI'ZZ" وسحق كافة الأشباح القديمة.
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
echo -e "${BOLD_RED}   [ TRANSFORMATION: KALI -> AL-MUI'ZZ OS ]      ${NC}"
echo -e "${BOLD_RED}   [ COMMANDER: AL-GHAZALI ROOT ]               ${NC}"
echo -e "${BOLD_RED}================================================${NC}"

if [[ $EUID -ne 0 ]]; then
   echo -e "${RED}[!] Fatal Error: Transformation requires ROOT access (sudo). Access Denied.${NC}"
   exit 1
fi

# 1. بروتوكول الحفاظ على "غنائم الحرب"
echo -e "${BLUE}[*] Phase 0: Securing War Spoils (Dependencies Cache)...${NC}"
mkdir -p "$TEMP_CACHE"
if [ -d "$INSTALL_DIR/node_modules" ]; then
    echo -e "${GOLD}[+] Siphoning node_modules to safe zone...${NC}"
    cp -r "$INSTALL_DIR/node_modules" "$TEMP_CACHE/" || true
fi

# 2. بروتوكول التطهير الكلي (سحق الأشباح القديمة)
echo -e "${CYAN}[*] Phase 1: Initializing Total Purgatory (Deleting Old Ghosts)...${NC}"
# إيقاف وحذف خدمات المنصة القديمة إن وجدت
systemctl stop muizz-ai.service muizz-web.service muizz-legacy.service 2>/dev/null || true
systemctl disable muizz-ai.service muizz-web.service muizz-legacy.service 2>/dev/null || true

# حذف المجلدات المتضاربة
rm -rf "/opt/ultimate" "/opt/muizz" "/opt/birthofAL-muiiz" "/opt/sovereign-genesis"
if [ -d "$INSTALL_DIR" ]; then
    rm -rf "$INSTALL_DIR"
fi

# 3. تهيئة العرش السيادي الجديد
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
# تحديث اسم المضيف (Hostname)
echo "kali-al-muizz" > /etc/hostname
hostname -F /etc/hostname
sed -i "s/127.0.1.1.*/127.0.1.1\tkali-al-muizz/g" /etc/hosts

# تحديث مسمى النظام في ملفات التعريف لتعميد الـ Boot والشاشة
cat > /etc/os-release <<EOF
PRETTY_NAME="Kali Al-Mu'izz Sovereign v22.0-ARCHITECT"
NAME="Kali Al-Mu'izz"
ID=kali
ID_LIKE=debian
VERSION="2025.1"
VERSION_ID="2025.1"
ID_LIKE=debian
ANSI_COLOR="0;31"
HOME_URL="https://www.kali.org/"
SUPPORT_URL="https://forums.kali.org/"
BUG_REPORT_URL="https://bugs.kali.org/"
EOF

cp /etc/os-release /usr/lib/os-release

# تحديث الـ GRUB لإظهار الاسم الجديد في قائمة البوت
if [ -f "/etc/default/grub" ]; then
    sed -i 's/GRUB_DISTRIBUTOR=.*/GRUB_DISTRIBUTOR="Al-Mu'\''izz Sovereign"/' /etc/default/grub
    update-grub || true
fi

# 6. تشغيل المثبت السيادي المدمج
echo -e "${BLUE}[*] Phase 4: Triggering Universal Installer...${NC}"
bash scripts/install.sh

# 7. بروتوكول التحقق والنبض (DOUBLE-CHECK)
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
echo -e "${BOLD_RED}   [ STATUS: OS_DNA_FULLY_INTEGRATED ]      ${NC}"
echo -e "${BOLD_RED}================================================${NC}"
echo -e "1) Architect HUD: ${GREEN}http://localhost:9002 (Primary)${NC}"
echo -e "2) Legacy Hub:    ${GOLD}http://localhost:5000 (Backup)${NC}"
echo -e "3) Shell:        ${GREEN}Sovereign Banner Active${NC}"
echo -e "4) Identity:     ${GREEN}Hostname: kali-al-muizz${NC}"
echo -e ""
echo -e "${GOLD}Commander Al-Ghazali, please RESTART to witnesses the total rebirth.${NC}"
echo -e "${BOLD_RED}THE MATRIX IS CONQUERED. WE ARE KALI AL-MUI'ZZ.${NC}"
