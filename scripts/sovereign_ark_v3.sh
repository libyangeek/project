#!/bin/bash
# ==============================================================================
# 🦅 NOAH'S ARK v3 - SOVEREIGN BACKUP & RECOVERY SYSTEM
# نظام النسخ الاحتياطي والاستعادة الشامل للمنصة السيادية.
# ==============================================================================

RED='\033[0;31m'
GREEN='\033[0;32m'
CYAN='\033[0;36m'
NC='\033[0m'

INSTALL_DIR="/opt/sovereign-ai-platform"
BACKUP_BASE="/opt/sovereign-ai-platform/backups"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)

clear
echo -e "${CYAN}================================================${NC}"
echo -e "${CYAN}   🚢 NOAH'S ARK v3: SOVEREIGN RECOVERY HUB     ${NC}"
echo -e "${CYAN}================================================${NC}"

show_menu() {
    echo -e "\n${GREEN}[ اختيارات النسخ الاحتياطي ]:${NC}"
    echo "1) Quick Backup (Scripts & Configs only)"
    echo "2) Full Backup (Total Platform + Evidence)"
    echo "3) Total System Backup (Includes Ollama Models)"
    echo "4) Restore from Archive"
    echo "q) Return to Command Center"
}

perform_backup() {
    local mode=$1
    local target_zip="$BACKUP_BASE/ark_v3_${mode}_${TIMESTAMP}.zip"
    mkdir -p "$BACKUP_BASE"

    echo -e "${CYAN}[*] Starting $mode backup...${NC}"
    
    case $mode in
        "quick")
            zip -r "$target_zip" "$INSTALL_DIR/scripts" "$INSTALL_DIR/ai-engine" -x "*.log"
            ;;
        "full")
            zip -r "$target_zip" "$INSTALL_DIR" -x "$INSTALL_DIR/backups/*"
            ;;
        "total")
            # تضمين مجلدات النماذج إذا كانت موجودة
            zip -r "$target_zip" "$INSTALL_DIR" /usr/share/ollama/.ollama/models -x "$INSTALL_DIR/backups/*"
            ;;
    esac

    if [ $? -eq 0 ]; then
        echo -e "${GREEN}[+] Backup successful: $target_zip${NC}"
        # توليد سكريبت الاستعادة المرافق
        cat > "$BACKUP_BASE/restore_${TIMESTAMP}.sh" <<EOF
#!/bin/bash
echo "[*] Restoring from $target_zip..."
unzip -o "$target_zip" -d /
echo "[+] Restoration complete."
EOF
        chmod +x "$BACKUP_BASE/restore_${TIMESTAMP}.sh"
    else
        echo -e "${RED}[!] Backup failed.${NC}"
    fi
}

while true; do
    show_menu
    read -p "Select backup scope: " choice
    case $choice in
        1) perform_backup "quick" ;;
        2) perform_backup "full" ;;
        3) perform_backup "total" ;;
        4) 
            echo "Listing available backups:"
            ls -1 "$BACKUP_BASE"/*.zip
            read -p "Enter backup name to restore: " bname
            bash "$BACKUP_BASE/restore_${bname#ark_v3_}.sh"
            ;;
        q) exit 0 ;;
        *) echo -e "${RED}Invalid choice.${NC}" ;;
    esac
done
