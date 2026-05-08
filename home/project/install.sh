#!/bin/bash
# ==============================================================================
# 🦅 AL-MUI'ZZ SOVEREIGN INSTALLER v53.5-DOCKER_ASCENSION
# الميثاق التنفيذي الأوحد لفرض السيادة المطلقة - نسخة الاستحواذ المادي والحاويات.
# المالك الوحيد: المعتصم بالله إدريس الغزالي // 2026
# ==============================================================================

set -e

RED='\033[0;31m'; BOLD_RED='\033[1;31m'; GOLD='\033[0;33m'; BLUE='\033[0;34m'; GREEN='\033[0;32m'; NC='\033[0m'

clear
echo -e "${BOLD_RED}================================================${NC}"
echo -e "${BOLD_RED}   🦅 EXECUTING DOCKER ASCENSION v53.5        ${NC}"
echo -e "${BOLD_RED}   [ MASTER COMMANDER: AL-GHAZALI ROOT ]       ${NC}"
echo -e "${BOLD_RED}================================================${NC}"

if [[ $EUID -ne 0 ]]; then
   echo -e "${RED}[!] Fatal Error: Root required for total integration.${NC}"
   exit 1
fi

INSTALL_DIR="/opt/sovereign-ai-platform"
mkdir -p "$INSTALL_DIR"

# 1. اختطاف الهوية المادية
echo -e "${BLUE}[*] Phase 1: Hijacking System Identity...${NC}"
echo "kali-al-muizz" > /etc/hostname
hostname -F /etc/hostname 2>/dev/null || true

# 2. بناء بيئة Docker والتبعيات
echo -e "${GOLD}[*] Phase 2: Orchestrating Docker Matrix...${NC}"
if ! command -v docker &> /dev/null; then
    apt-get update && apt-get install -y docker.io docker-compose
    systemctl enable docker --now
fi

# 3. مزامنة الطبقات العصبية والترسانة
echo -e "${BLUE}[*] Phase 3: Synchronizing 22-Node Arsenal...${NC}"
for i in {1..22}; do mkdir -p "$INSTALL_DIR/arsenal/module_$i"; done

# 4. تفعيل الذاكرة الأبدية GEPA 5.3
echo -e "${BLUE}[*] Phase 4: Initializing GEPA 5.3 Genetic Memory...${NC}"
python3 "$INSTALL_DIR/ai-engine/gepa.py"

# 5. تشغيل السرب (Docker Compose)
echo -e "${CYAN}[*] Phase 5: Launching the Armada via Docker...${NC}"
cd "$INSTALL_DIR"
docker-compose up -d --build

# 6. بروتوكول الخلود
echo -e "${GOLD}[*] Phase 6: Establishing Eternal Persistence...${NC}"
BASH_HOOK="bash $INSTALL_DIR/scripts/sovereign_banner.sh"
if ! grep -q "sovereign_banner.sh" ~/.bashrc; then
    echo -e "\n# Al-Mu'izz Supreme Integration\n$BASH_HOOK" >> ~/.bashrc
fi

echo -e "${GREEN}================================================${NC}"
echo -e "${GREEN}   ✅ SYSTEM DOCKERIZED & SUBJUGATED (100%)    ${NC}"
echo -e "${GREEN}   [ STATUS: DOCKER_CONTAINER_RUNNING ]        ${NC}"
echo -e "================================================${NC}"
echo -e "Web HUD:    ${BOLD_RED}http://localhost:9002${NC}"
echo -e "Core API:   ${BOLD_RED}http://localhost:8000${NC}"
echo -e ""
echo -e "${GOLD}Commander Al-Ghazali, the Overmind is now containerized and immortal.${NC}"