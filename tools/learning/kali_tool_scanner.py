# -*- coding: utf-8 -*-
"""
Al-Mu'izz Sovereign - SysPulse v2 (Intelligent Kali Tool Scanner)
محرك فهرسة وتحليل أدوات كالي لينكس: يقرأ ملفات الـ .desktop ويبني قاعدة بيانات ذكية تشمل القوالب البرمجية لكل أداة.
(c) 2025 Sovereign Systems
"""

import os
import json
import re

class KaliToolScanner:
    def __init__(self):
        self.app_dir = "/usr/share/applications"
        self.output_path = "/opt/sovereign-ai-platform/audit/kali_inventory.json"
        # قاعدة معرفة مدمجة لأحدث الأدوات وأوامرها (نسخة 2025)
        self.tool_intelligence = {
            "nmap": "nmap -sV -sC -O -p- {target}",
            "metasploit": "msfconsole -q -x 'use auxiliary/scanner/http/dir_scanner; set RHOSTS {target}; run'",
            "wireshark": "tshark -i any -f 'tcp port 80'",
            "burpsuite": "burpsuite",
            "aircrack-ng": "airmon-ng start {interface} && airodump-ng {interface}",
            "hydra": "hydra -l admin -P /usr/share/wordlists/rockyou.txt {target} ssh",
            "sqlmap": "sqlmap -u '{target}' --batch --banner",
            "gobuster": "gobuster dir -u {target} -w /usr/share/wordlists/dirb/common.txt",
            "bloodhound": "bloodhound-python -u {user} -p {pass} -d {domain} -dc {dc_ip} -c All",
            "impacket": "impacket-psexec {domain}/{user}@{target}",
            "sniffglue": "sniffglue -p {interface}",
            "legion": "legion {target}"
        }

    def scan_tools(self):
        """فحص المجلد وبناء الفهرس مع دمج الذكاء الاصطناعي للأوامر"""
        inventory = []
        if not os.path.exists(self.app_dir):
            return {"error": "Application directory not found."}

        for filename in os.listdir(self.app_dir):
            if filename.endswith(".desktop"):
                path = os.path.join(self.app_dir, filename)
                tool_data = self._parse_desktop_file(path)
                if tool_data:
                    # إضافة القالب البرمجي إذا كان معروفاً
                    tool_key = tool_data['name'].lower()
                    for key in self.tool_intelligence:
                        if key in tool_key:
                            tool_data['smart_command'] = self.tool_intelligence[key]
                            break
                    inventory.append(tool_data)
        
        # التأكد من وجود المجلد
        os.makedirs(os.path.dirname(self.output_path), exist_ok=True)
        with open(self.output_path, "w") as f:
            json.dump(inventory, f, indent=4, ensure_ascii=False)
        
        return inventory

    def _parse_desktop_file(self, path):
        """تحليل محتوى ملف الـ .desktop استخباراتياً"""
        try:
            with open(path, "r", errors="ignore") as f:
                content = f.read()
            
            name = re.search(r"^Name=(.*)", content, re.M)
            exec_cmd = re.search(r"^Exec=(.*)", content, re.M)
            comment = re.search(r"^Comment=(.*)", content, re.M)
            categories = re.search(r"^Categories=(.*)", content, re.M)

            if name and exec_cmd:
                return {
                    "name": name.group(1).strip(),
                    "command": exec_cmd.group(1).strip(),
                    "description": comment.group(1).strip() if comment else "No description available.",
                    "categories": categories.group(1).strip().split(";") if categories else [],
                    "smart_command": None # سيعبأ لاحقاً
                }
        except:
            return None
        return None

if __name__ == "__main__":
    scanner = KaliToolScanner()
    results = scanner.scan_tools()
    print(f"[+] SysPulse v2: Indexed {len(results)} Kali tools with intelligent mapping.")
