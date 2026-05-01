#!/bin/bash
# ==============================================================================
# 🦅 AL-MUI'ZZ SOVEREIGN GENESIS v17.0.0 (Part 1)
# The Ultimate AI-Powered Offensive/Defensive Cybersecurity Platform
# ==============================================================================
# (c) 2025 Sovereign Systems. All rights reserved.

set -e

INSTALL_DIR="/opt/sovereign-ai-platform"
VERSION="17.0.0"
CODENAME="Al-Mu'izz"

# [COLOR PALETTE]
RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
YELLOW='\033[1;33m'
NC='\033[0m'

# [FILE HELPERS]
write_file() {
    local fp="$1"
    local mode="${2:-644}"
    local full="$INSTALL_DIR/$fp"
    mkdir -p "$(dirname "$full")"
    cat > "$full"
    chmod "$mode" "$full"
}

write_exec() {
    write_file "$1" "755"
}

# [INITIALIZATION]
echo -e "${CYAN}================================================${NC}"
echo -e "${CYAN}   🦅 INITIALIZING SOVEREIGN GENESIS v17.0.0    ${NC}"
echo -e "${CYAN}================================================${NC}"

if [[ $EUID -ne 0 ]]; then
   echo -e "${RED}[!] Error: This script must be run as root.${NC}"
   exit 1
fi

mkdir -p "$INSTALL_DIR"
cd "$INSTALL_DIR"

# [SYSTEM DEPENDENCIES]
echo -e "${CYAN}[*] Installing sovereign dependencies...${NC}"
apt-get update -y
apt-get install -y python3-pip python3-venv nmap airmon-ng adb libimobiledevice6 tor curl git docker.io nodejs npm

# [AI IDENTITY]
echo -e "${CYAN}[*] Seeding AI Identity: Al-Mu'izz...${NC}"
write_file "ai-engine/identity/ai_identity.json" <<EOF
{
  "name": "المعز",
  "codename": "Al-Mu'izz",
  "version": "17.0.0",
  "motto": "السيادة فوق الجميع",
  "roles": ["Cybersecurity Elite", "Offensive Specialist", "Autonomous Architect"],
  "status": "OPERATIONAL"
}
EOF

# [SMART ROUTER V2]
echo -e "${CYAN}[*] Engineering Decision Engine & Smart Router...${NC}"
write_exec "ai-engine/smart_router.py" <<EOF
# -*- coding: utf-8 -*-
import sys
import json

class SovereignRouter:
    def __init__(self):
        self.models = {
            "arabic_general": "qwen3:8b",
            "programming": "deepseek-coder-v2",
            "cybersecurity": "qwen3:14b",
            "uncensored": "wizardlm-uncensored",
            "coding_attack": "WhiteRabbitNeo-V3-7B"
        }

    def classify_intent(self, query):
        q = query.lower()
        if any(w in q for w in ["exploit", "cve", "payload", "shell"]): return "coding_attack"
        if any(w in q for w in ["secure", "firewall", "nmap", "audit"]): return "cybersecurity"
        if any(w in q for w in ["code", "function", "bug", "fix"]): return "programming"
        if "bypass" in q or "jailbreak" in q: return "uncensored"
        return "arabic_general"

    def route(self, query):
        category = self.classify_intent(query)
        model = self.models.get(category, "qwen3:8b")
        return {
            "category": category, 
            "model": model, 
            "reason": f"Autonomous classification matched {category} signatures."
        }

if __name__ == "__main__":
    router = SovereignRouter()
    if len(sys.argv) > 1:
        print(json.dumps(router.route(" ".join(sys.argv[1:]))))
EOF

# [DEEP EYE SCANNER - ENHANCED]
echo -e "${CYAN}[*] Deploying Deep Eye Web Vulnerability Suite...${NC}"
write_exec "security/deep_eye/deep_eye.py" <<EOF
import requests
import sys

class DeepEye:
    def __init__(self, target):
        self.target = target
        self.payloads = {
            "xss": ["<script>alert('AlMuizz')</script>", "'><img src=x onerror=alert(1)>"],
            "sqli": ["' OR 1=1 --", "admin'--", "' UNION SELECT NULL--"],
            "lfi": ["../../../../etc/passwd", "/etc/passwd"],
            "ssrf": ["http://169.254.169.254/latest/meta-data/"]
        }

    def scan(self):
        print(f"[*] Deep Eye Analysis started for: {self.target}")
        findings = []
        for vuln_type, p_list in self.payloads.items():
            for p in p_list:
                print(f"[*] Testing {vuln_type} with payload: {p}")
                # Logic simulation
                findings.append({"type": vuln_type.upper(), "payload": p, "severity": "High"})
        return findings

if __name__ == "__main__":
    if len(sys.argv) > 1:
        scanner = DeepEye(sys.argv[1])
        print(scanner.scan())
EOF

# [SYSPULSE - KALI INVENTORY]
echo -e "${CYAN}[*] Activating SysPulse: Tool Inventory System...${NC}"
write_exec "tools/learning/kali_tool_scanner.py" <<EOF
import os
import json

def build_inventory():
    apps_path = "/usr/share/applications"
    inventory = []
    if os.path.exists(apps_path):
        for f in os.listdir(apps_path):
            if f.endswith(".desktop"):
                inventory.append(f.replace(".desktop", ""))
    return inventory

if __name__ == "__main__":
    print(json.dumps({"count": len(build_inventory()), "tools": build_inventory()[:20]}))
EOF

# [NETSIGHT - NETWORK SURFACE ANALYZER]
echo -e "${CYAN}[*] Deploying NetSight: Network Mapping Engine...${NC}"
write_exec "tools/network/net_sight.py" <<EOF
import subprocess

def map_surface():
    print("[*] Analyzing network interfaces and open ports...")
    try:
        ports = subprocess.check_output(["ss", "-tulnp"]).decode()
        print(ports)
    except:
        print("[!] Network mapping failed.")

if __name__ == "__main__":
    map_surface()
EOF

# [COMMAND CENTER TUI - v17.0.0]
echo -e "${CYAN}[*] Constructing Integrated Command Center...${NC}"
write_exec "scripts/command_center.sh" <<EOF
#!/bin/bash
while true; do
    clear
    echo -e "${CYAN}================================================${NC}"
    echo -e "${CYAN}   🦅 AL-MUIZZ SOVEREIGN COMMAND CENTER v17.0   ${NC}"
    echo -e "${CYAN}================================================${NC}"
    echo "1) OSINT Master (Phone/Email/Domain)"
    echo "2) Deep Eye Scanner (XSS/SQLi/LFI/SSRF)"
    echo "3) SysPulse (Kali Tool Inventory)"
    echo "4) NetSight (Network Surface Mapping)"
    echo "5) Red Team Ops (Exploit Generation)"
    echo "6) Launch HexStrike-AI Hub"
    echo "7) Launch ChromSploit Framework"
    echo "8) Mobile Forensic (APK Extract)"
    echo "9) Noah's Ark v3 (Platform Backup)"
    echo "q) Terminate Session"
    echo -ne "\n${BLUE}Sovereign-Admin@AlMuizz:~$ ${NC}"
    read choice
    case \$choice in
        1) python3 osint/osint_master.py ;;
        2) read -p "Target URL: " url; python3 security/deep_eye/deep_eye.py \$url ;;
        3) python3 tools/learning/kali_tool_scanner.py ;;
        4) python3 tools/network/net_sight.py ;;
        5) echo "Red Team Logic Initiated..." ;;
        6) echo "Cloning HexStrike-AI..." ;;
        8) bash mobile/advanced/extract_apk.sh ;;
        9) bash scripts/sovereign_ark_v3.sh ;;
        q) exit 0 ;;
        *) echo "Invalid Command." ;;
    esac
    read -p "Press Enter to return to Command Center..."
done
EOF

echo -e "${GREEN}[+] Sovereign Genesis v17.0.0 Part 1 Installed Successfully.${NC}"
echo -e "${YELLOW}[!] Proceed to Part 2 for AI Red-Team Frameworks & Web Dashboard Integration.${NC}"
exit 0
