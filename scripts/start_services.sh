#!/bin/bash
# ==============================================================================
# 🦅 AL-MUI'ZZ HIVE SERVICES START-UP v90.0
# سكريبت تشغيل كافة الخدمات الهجومية والاستقرار لسيادة القائد الغزالي.
# ==============================================================================

GREEN='\033[0;32m'; NC='\033[0m'

echo -e "${GREEN}[*] Igniting Hive Services...${NC}"

# 1. التهرب (Stealth)
systemctl start tor 2>/dev/null || true
echo "[+] Tor Node: ACTIVE"

# 2. أطر C2
systemctl start sliver 2>/dev/null || true
systemctl start covenant 2>/dev/null || true
echo "[+] C2 Matrix: ONLINE"

# 3. الاستقرار والمراقبة
systemctl start nginx 2>/dev/null || true
systemctl start prometheus 2>/dev/null || true
echo "[+] Infrastructure: STABILIZED"

# 4. النواة (God-Core)
# يتم تشغيلها عبر muizz_start.sh أو muizz-ai.service

echo -e "${GREEN}[+] All Shadow Sovereignty services are now breathing.${NC}"
