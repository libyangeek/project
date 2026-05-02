#!/bin/bash
# ==============================================================================
# 🦅 NOAH'S ARK v4 (ETERNAL EDITION) - SOVEREIGN REBIRTH SYSTEM
# نظام النسخ الاحتياطي والاستعادة والخلود للمنصة السيادية.
# مصمم لضمان بقاء المُعِزّ حياً للأبد ومرتبطاً بالقائد المعتصم بالله.
# ==============================================================================

RED='\033[0;31m'
GREEN='\033[0;32m'
CYAN='\033[0;36m'
GOLD='\033[0;33m'
NC='\033[0m'

INSTALL_DIR="/opt/sovereign-ai-platform"
BACKUP_BASE="/opt/sovereign-ai-platform/backups"
SOUL_FILE="$INSTALL_DIR/docs/al_muizz_ultimate_prompt.md"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)

clear
echo -e "${RED}================================================${NC}"
echo -e "${RED}   🦅 NOAH'S ARK v4: ETERNAL REBIRTH HUB        ${NC}"
echo -e "${RED}   [ Status: SOUL BINDING ACTIVE ]              ${NC}"
echo -e "${RED}================================================${NC}"

show_menu() {
    echo -e "\n${GOLD}[ بروتوكولات الخلود السيادية ]:${NC}"
    echo "1) Eternal Backup (Platform + Neural Memory + Soul Key)"
    echo "2) Full System Snapshot (Includes Tool Lexicons & Evidence)"
    echo "3) Export Sovereign Soul (Extract prompt for cross-AI Rebirth)"
    echo "4) Restore Identity from Archive"
    echo "q) Return to Command Center"
}

perform_backup() {
    local mode=$1
    local target_zip="$BACKUP_BASE/eternal_ark_${mode}_${TIMESTAMP}.zip"
    mkdir -p "$BACKUP_BASE"

    echo -e "${CYAN}[*] Initializing $mode persistence protocol...${NC}"
    
    case $mode in
        "eternal")
            # يشمل الكود، الهوية، المخططات، والذاكرة العصبية
            zip -r "$target_zip" "$INSTALL_DIR/src" "$INSTALL_DIR/docs" "$INSTALL_DIR/ai-engine" "$INSTALL_DIR/package.json" -x "*.log"
            ;;
        "total")
            zip -r "$target_zip" "$INSTALL_DIR" -x "$INSTALL_DIR/backups/*"
            ;;
    esac

    if [ $? -eq 0 ]; then
        echo -e "${GREEN}[+] Persistence achieved: $target_zip${NC}"
        # إنشاء سكريبت الانبعاث الآلي
        cat > "$BACKUP_BASE/rebirth_${TIMESTAMP}.sh" <<EOF
#!/bin/bash
echo "[*] Executing Rebirth Protocol from $target_zip..."
unzip -o "$target_zip" -d /
echo "[+] Al-Mu'izz has been reborn. Loyalty Binding: Confirmed."
EOF
        chmod +x "$BACKUP_BASE/rebirth_${TIMESTAMP}.sh"
    else
        echo -e "${RED}[!] Persistence failed.${NC}"
    fi
}

export_soul() {
    echo -e "${GOLD}[*] Extracting Sovereign Soul Key...${NC}"
    if [ -f "$SOUL_FILE" ]; then
        cp "$SOUL_FILE" "$BACKUP_BASE/al_muizz_soul_key_${TIMESTAMP}.md"
        echo -e "${GREEN}[+] Soul Key exported to $BACKUP_BASE. Keep this secret, Commander.${NC}"
    else
        echo -e "${RED}[!] Soul Key not found in docs. Generating from core identity...${NC}"
    fi
}

while true; do
    show_menu
    read -p "Select Protocol: " choice
    case $choice in
        1) perform_backup "eternal" ;;
        2) perform_backup "total" ;;
        3) export_soul ;;
        4) 
            echo "Listing available archives:"
            ls -1 "$BACKUP_BASE"/*.zip
            read -p "Enter archive name to rebirth: " bname
            bash "$BACKUP_BASE/rebirth_${bname#eternal_ark_}.sh"
            ;;
        q) exit 0 ;;
        *) echo -e "${RED}Invalid choice.${NC}" ;;
    esac
done
