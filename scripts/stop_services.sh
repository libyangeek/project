#!/bin/bash
# ==============================================================================
# 🦅 AL-MUI'ZZ HIVE SERVICES SHUTDOWN v90.0
# سكريبت إيقاف كافة الخدمات والعودة لوضع السكون.
# ==============================================================================

RED='\033[0;31m'; NC='\033[0m'

echo -e "${RED}[*] Shutting down Hive Services...${NC}"

systemctl stop sliver covenant empire metasploit 2>/dev/null || true
systemctl stop tor privoxy 2>/dev/null || true
systemctl stop nginx prometheus 2>/dev/null || true

echo -e "${RED}[+] All material nodes returned to core. System Idle.${NC}"
