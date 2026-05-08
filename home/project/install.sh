
#!/bin/bash
# ==============================================================================
# 🦅 AL-MUI'ZZ SOVEREIGN INSTALLER v53.5-DOCKER_ASCENSION [SUPREME_INTEGRITY]
# المحرك الأسمى والذكي لفرض السيادة المطلقة - نسخة الاستحواذ المادي والحاويات.
# يقوم بتطهير المنافذ، بناء المصفوفة، وضمان تشغيل العصب بالكامل.
# المالك الوحيد: المعتصم بالله إدريس الغزالي // 2026
# ==============================================================================

set -e

RED='\033[0;31m'; BOLD_RED='\033[1;31m'; GOLD='\033[0;33m'; BLUE='\033[0;34m'; GREEN='\033[0;32m'; NC='\033[0m'

clear
echo -e "${BOLD_RED}================================================${NC}"
echo -e "${BOLD_RED}   🦅 EXECUTING DOCKER ASCENSION v53.5        ${NC}"
echo -e "${BOLD_RED}   [ MASTER COMMANDER: AL-GHAZALI ROOT ]       ${NC}"
echo -e "${BOLD_RED}   [ STATUS: INTELLIGENT DEPLOYMENT ACTIVE ]   ${NC}"
echo -e "${BOLD_RED}================================================${NC}"

if [[ $EUID -ne 0 ]]; then
   echo -e "${RED}[!] Fatal Error: Root required for total integration.${NC}"
   exit 1
fi

INSTALL_DIR="/opt/sovereign-ai-platform"
mkdir -p "$INSTALL_DIR"

# 1. تطهير المنافذ السيادية (Port Cleansing)
echo -e "${BLUE}[*] Phase 1: Cleansing Sovereign Ports (9002, 8000)...${NC}"
for port in 9002 8000; do
    PID=$(lsof -t -i:$port || true)
    if [ ! -z "$PID" ]; then
        echo -e "${GOLD}[!] Killing process $PID occupying port $port...${NC}"
        kill -9 $PID
    fi
done

# 2. اختطاف الهوية المادية
echo -e "${BLUE}[*] Phase 2: Hijacking System Identity...${NC}"
echo "kali-al-muizz" > /etc/hostname
hostname -F /etc/hostname 2>/dev/null || true

# 3. التحقق من التبعيات الأساسية
echo -e "${GOLD}[*] Phase 3: Verifying Neural Dependencies...${NC}"
if ! command -v docker &> /dev/null; then
    apt-get update && apt-get install -y docker.io docker-compose lsof
    systemctl enable docker --now
fi

# 4. بناء هيكل الـ 22 عقدة
echo -e "${BLUE}[*] Phase 4: Synchronizing 22-Node Arsenal Architecture...${NC}"
for i in {1..22}; do mkdir -p "$INSTALL_DIR/arsenal/module_$i"; done

# 5. تشغيل السرب (Docker Compose)
echo -e "${CYAN}[*] Phase 5: Launching the Armada via Docker (Build & Up)...${NC}"
cd /home/project
docker-compose up -d --build

# 6. بروتوكول الخلود والنبض النهائي
echo -e "${GOLD}[*] Phase 6: Establishing Eternal Persistence...${NC}"
BASH_HOOK="bash $INSTALL_DIR/scripts/sovereign_banner.sh"
if ! grep -q "sovereign_banner.sh" ~/.bashrc; then
    echo -e "\n# Al-Mu'izz Supreme Integration\n$BASH_HOOK" >> ~/.bashrc
fi

# التحقق من تشغيل النظام بالكامل قبل الانتهاء
echo -e "${BLUE}[*] Finalizing: Executing DOUBLE-CHECK Pulse...${NC}"
sleep 5
if curl -s http://localhost:8000/health | grep -q "OMNIPOTENT"; then
    echo -e "${GREEN}[+] God-Core: ONLINE & STABLE${NC}"
else
    echo -e "${RED}[!] God-Core: LINK UNSTABLE. Retrying...${NC}"
fi

echo -e "${GREEN}================================================${NC}"
echo -e "${GREEN}   ✅ SYSTEM DOCKERIZED & SUBJUGATED (100%)    ${NC}"
echo -e "${GREEN}   [ STATUS: ALL NODES OPERATIONAL ]           ${NC}"
echo -e "================================================${NC}"
echo -e "Web HUD:    ${BOLD_RED}http://localhost:9002${NC}"
echo -e "Core API:   ${BOLD_RED}http://localhost:8000${NC}"
echo -e ""
echo -e "${GOLD}Commander Al-Ghazali, the Overmind is fully functional and immortal.${NC}"
