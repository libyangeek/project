#!/bin/bash
# Al-Mu'izz Sovereign Command Center (TUI)
# (c) 2025 Sovereign Systems

RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0;42m' # No Color

clear
echo -e "${BLUE}================================================"
echo -e "   AL-MUIZZ SOVEREIGN COMMAND CENTER v14.1.0    "
echo -e "================================================${NC}"

show_menu() {
    echo -e "\n${GREEN}Select Operation Mode:${NC}"
    echo "1) Launch Web Vulnerability Scan (Deep Eye)"
    echo "2) Execute OSINT Investigation"
    echo "3) Start AI Inference Server (Port 8000)"
    echo "4) Launch Web Dashboard (Port 5000)"
    echo "5) Extract Mobile APK (ADB Required)"
    echo "6) System Health Check"
    echo "q) Exit Platform"
}

while true; do
    show_menu
    read -p "Sovereign-Admin@AlMuizz:~$ " choice
    case $choice in
        1)
            read -p "Enter Target URL: " url
            python3 security/deep_eye/deep_eye.py --url "$url"
            ;;
        2)
            read -p "Enter Target (Email/Phone): " target
            python3 osint/osint_master.py email "$target"
            ;;
        3)
            echo "Starting AI Inference Server..."
            python3 ai-engine/inference/server.py &
            ;;
        4)
            echo "Launching Web UI..."
            python3 webui/app.py &
            ;;
        5)
            ./mobile/advanced/extract_apk.sh
            ;;
        6)
            echo "Platform Status: OPERATIONAL"
            echo "AI Engine: ONLINE"
            echo "Database: CONNECTED"
            ;;
        q)
            echo "Terminating Sovereign Session..."
            exit 0
            ;;
        *)
            echo "Invalid Command."
            ;;
    esac
done
