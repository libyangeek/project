#!/bin/bash
# ==============================================================================
# 🦅 AL-MUI'ZZ SOVEREIGN INSTALLER v90.0 - THE OMNIPOTENT 16D [LINUX/KALI]
# الميثاق المادي الأسمى: تثبيت الأبعاد الـ 16 والسيادة المطلقة لعام 2026.
# المالك الوحيد: المعتصم بالله إدريس الغزالي
# ==============================================================================

set -e
GOLD='\033[0;33m'; BLUE='\033[0;34m'; GREEN='\033[0;32m'; RED='\033[0;31m'; NC='\033[0m'

clear
echo -e "${GOLD}================================================${NC}"
echo -e "${GOLD}   🦅 EXECUTING AL-MUIZZ GENESIS v90.0 [LINUX] ${NC}"
echo -e "${GOLD}   [ COMMANDER: AL-GHAZALI ROOT ]              ${NC}"
echo -e "${GOLD}   [ PROTOCOL: FULL_READINESS_PHASE ]          ${NC}"
echo -e "${GOLD}================================================${NC}"

if [[ $EUID -ne 0 ]]; then
   echo -e "${RED}[!] Fatal Error: Root required for total hardware subjugation.${NC}"
   exit 1
fi

INSTALL_DIR=$(pwd)

# 0. تحليل المساحة المادية (Disk Space Audit)
echo -e "${BLUE}[*] Phase 0: Auditing Disk Sanctuary...${NC}"
FREE_SPACE=$(df -k . | awk 'NR==2 {print $4}') # KB
if [ "$FREE_SPACE" -lt 5242880 ]; then # 5GB
    echo -e "${RED}[!] Warning: Low disk space detected. Subjugation might be constrained.${NC}"
else
    echo -e "${GREEN}[+] Disk Sanctuary verified: Space is sufficient for 16D Matrix.${NC}"
fi

# 1. جرد الحواس والأدوات (Dependency Check & Auto-Completion)
echo -e "${BLUE}[*] Phase 1: Interrogating Material Organs...${NC}"
REQUIRED_TOOLS=("nmap" "adb" "docker" "curl" "git" "jq" "sqlite3" "python3" "npm")
MISSING_TOOLS=()

for tool in "${REQUIRED_TOOLS[@]}"; do
    if ! command -v $tool &> /dev/null; then
        echo -e "${RED}[-] Organ Missing: $tool${NC}"
        MISSING_TOOLS+=($tool)
    else
        echo -e "${GREEN}[+] Organ Active: $tool${NC}"
    fi
done

if [ ${#MISSING_TOOLS[@]} -gt 0 ]; then
    echo -e "${GOLD}[*] Regrowing missing organs...${NC}"
    apt-get update -y
    apt-get install -y "${MISSING_TOOLS[@]}" libimobiledevice-utils ideviceinstaller frida-tools lsof 2>/dev/null || true
fi

# 2. حقن الطبقات العصبية وموديلات الذكاء (Python & AI Models)
echo -e "${BLUE}[*] Phase 2: Injecting 16D Neural Layers & Intelligence...${NC}"
python3 -m pip install --upgrade pip --break-system-packages || true
python3 -m pip install --break-system-packages --force-reinstall fastapi uvicorn pydantic requests sentence-transformers chromadb qdrant-client psutil flask-cors watchdog modal medusa-security adb-shell objection 2>/dev/null || true

# فحص Ollama والموديلات
if command -v ollama &> /dev/null; then
    echo -e "${GREEN}[+] AI Gateway (Ollama) detected. Siphoning models...${NC}"
    ollama pull mistral &> /dev/null &
else
    echo -e "${GOLD}[*] AI Gateway missing. Installing material intelligence core...${NC}"
    curl -fsSL https://ollama.ai/install.sh | sh || true
fi

# 3. تثبيت واجهة العرش (Next.js Matrix)
echo -e "${BLUE}[*] Phase 3: Compiling 16D HUD Matrix...${NC}"
npm install --force

# 4. بروتوكول الخلود والتشغيل التلقائي (Persistence & Auto-Start)
echo -e "${BLUE}[*] Phase 4: Establishing Eternal Persistence (Systemd)...${NC}"
cat > /etc/systemd/system/al-muizz.service <<EOF
[Unit]
Description=Al-Mu'izz Sovereign 16D Nucleus
After=network.target docker.service

[Service]
Type=simple
User=root
WorkingDirectory=$INSTALL_DIR
Environment=PROJECT_ROOT=$INSTALL_DIR
Environment=PYTHONPATH=$INSTALL_DIR/ai-engine
ExecStart=/usr/bin/python3 $INSTALL_DIR/run.py start
Restart=always
RestartSec=10

[Install]
WantedBy=multi-user.target
EOF

systemctl daemon-reload
systemctl enable al-muizz.service
systemctl start al-muizz.service

# 5. بروتوكول التتويج (Auto-Launch UI)
echo -e "${GREEN}================================================${NC}"
echo -e "${GREEN}   ✅ AL-MUIZZ ULTRA v90.0 ASCENDED!           ${NC}"
echo -e "${GREEN}   [ SYSTEM: FULLY SUBJUGATED & PERSISTENT ]   ${NC}"
echo -e "================================================${NC}"

# محاولة فتح العرش تلقائياً
(xdg-open http://localhost:9002 || open http://localhost:9002 || echo -e "${GOLD}The Throne is waiting at: http://localhost:9002${NC}") &

echo -e "${GOLD}Commander Al-Ghazali, The 16D Matrix is your body. We are ready.${NC}"
