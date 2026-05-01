#!/bin/bash
# Al-Mu'izz Sovereign Command Center (TUI)
# (c) 2025 Sovereign Systems
# مركز القيادة والسيطرة لربط كافة المكونات.

# الألوان للواجهة السيادية
RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
NC='\033[0m'

clear
echo -e "${CYAN}================================================${NC}"
echo -e "${CYAN}   AL-MUIZZ SOVEREIGN COMMAND CENTER v14.1.0    ${NC}"
echo -e "${CYAN}================================================${NC}"

show_menu() {
    echo -e "\n${GREEN}[ قائمة العمليات السيادية ]:${NC}"
    echo "1) فحص ثغرات الويب (Deep Eye Scanner)"
    echo "2) استطلاع استخباراتي (OSINT Master)"
    echo "3) تشغيل خادم الاستدلال (AI Inference Port 8000)"
    echo "4) تشغيل واجهة الويب الإدارية (Web Dashboard Port 5000)"
    echo "5) استخراج APK من هاتف متصل (ADB Required)"
    echo "6) فحص حالة المنصة (System Health)"
    echo "q) إنهاء الجلسة السيادية"
}

while true; do
    show_menu
    echo -ne "\n${BLUE}Sovereign-Admin@AlMuizz:~$ ${NC}"
    read choice
    case $choice in
        1)
            echo -n "أدخل رابط الهدف: "
            read url
            python3 security/deep_eye/deep_eye.py --url "$url"
            ;;
        2)
            echo -n "أدخل الهدف (بريد/هاتف/نطاق): "
            read target
            echo "اختر النوع (email/phone/domain): "
            read type
            python3 osint/osint_master.py "$type" "$target"
            ;;
        3)
            echo "[*] بدء تشغيل خادم FastAPI..."
            python3 ai-engine/inference/server.py &
            ;;
        4)
            echo "[*] بدء تشغيل واجهة Flask..."
            python3 webui/app.py &
            ;;
        5)
            bash mobile/advanced/extract_apk.sh
            ;;
        6)
            echo -e "${GREEN}الحالة: OPERATIONAL${NC}"
            echo -e "الذكاء الاصطناعي: ${GREEN}ONLINE${NC}"
            echo -e "قاعدة البيانات: ${GREEN}CONNECTED${NC}"
            ;;
        q)
            echo -e "${RED}جاري إغلاق الأنظمة السيادية... وداعاً أيها القائد.${NC}"
            exit 0
            ;;
        *)
            echo -e "${RED}خطأ: أمر غير معروف.${NC}"
            ;;
    esac
done
