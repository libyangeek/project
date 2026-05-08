# -*- coding: utf-8 -*-
/**
 * @fileOverview Al-Mu'izz Sovereign - SysPulse v3 (Elite Tool Lexicon: Kali & BlackArch)
 * محرك فهرسة وتحليل الأدوات السيادي الموحد: يدمج معارف كالي و BlackArch (2800+ أداة).
 * تم استخلاص الأدوات الهجومية وزيادة قوتها وتصنيفها تحت السيادة المطلقة.
 * (c) 2026 Sovereign Systems - BlackArch Edition
 */

import os
import json
import re

class ToolLexiconScanner:
    def __init__(self):
        self.app_dirs = [
            "/usr/share/applications",
            "/usr/local/share/applications",
            "/usr/share/kali-menu/applications"
        ]
        self.output_path = "/opt/sovereign-ai-platform/audit/tool_lexicon.json"
        
        # ذكاء الأدوات الموسع: استخلاص الأوامر الأسمى (Supreme Commands) لعام 2026
        self.tool_intelligence = {
            # --- الوحدة 14: أدوات الاختراق العامة (General Hacking) ---
            "nmap": "nmap -sV -sC -O -A -T4 -p- --script=vuln {target}",
            "masscan": "masscan -p1-65535 {target} --rate=10000",
            "rustscan": "rustscan -a {target} -- -A -sC",
            "subfinder": "subfinder -d {target} -all -silent",
            "assetfinder": "assetfinder --subs-only {target}",
            "amass": "amass enum -passive -d {target}",
            "httpx": "httpx -u {target} -title -content-length -status-code",
            "nuclei": "nuclei -u {target} -t cves/ -severity critical,high",
            "sqlmap": "sqlmap -u '{target}' --batch --banner --current-user --is-dba --dbs",
            "wpscan": "wpscan --url {target} --enumerate p,t,u --aggressive",
            "dirsearch": "dirsearch -u {target} -e php,html,js,json -x 404,403",
            "ffuf": "ffuf -w /usr/share/wordlists/dirb/common.txt -u {target}/FUZZ",
            "nikto": "nikto -h {target} -Tuning 4,8,9",
            "commix": "commix -u '{target}' --batch --level=3",
            "metasploit": "msfconsole -q -x 'db_status; search type:exploit platform:linux; exit'",
            "searchsploit": "searchsploit {target}",
            "exploitdb": "searchsploit -m {id}",
            "beef": "beef-xss",
            "social-engineering-toolkit": "setoolkit",
            "responder": "responder -I {interface} -rdwv",
            "bettercap": "bettercap -iface {interface} -eval 'net.probe on; net.show'",
            "ettercap": "ettercap -T -q -i {interface}",
            "wireshark": "tshark -i {interface} -f 'tcp port 80'",
            "hydra": "hydra -l admin -P /usr/share/wordlists/rockyou.txt {target} ssh",
            "medusa": "medusa -h {target} -u admin -P wordlist.txt -M ssh",
            "john": "john --wordlist=/usr/share/wordlists/rockyou.txt {hash_file}",
            "hashcat": "hashcat -m 0 -a 0 {hash_file} /usr/share/wordlists/rockyou.txt",
            
            # --- الوحدة 15: الشبكات الخلوية (Cellular & Wireless) ---
            "aircrack-ng": "airmon-ng start {interface} && airodump-ng {interface}",
            "reaver": "reaver -i {interface} -b {bssid} -vv",
            "bully": "bully -b {bssid} -e {essid} {interface}",
            "wifite": "wifite --dict /usr/share/wordlists/rockyou.txt --kill",
            "kismet": "kismet -c {interface}",
            "gr-gsm": "grgsm_livemon -f {frequency}",
            "kalibrate-rtl": "kal -s GSM900",
            "srsran": "srsenb {config_file}",
            "openbts": "sudo ./OpenBTS",
            "sigploit": "python3 sigploit.py",
            "imsi-catcher": "python3 simple_imsi_catcher.py",
            "snarf": "snarf -i {interface}",
            "btscanner": "btscanner",
            "bluez": "hcitool scan",
            "moxie": "moxie -i {interface}",
            "gnuradio": "gnuradio-companion",
            "rtl-sdr": "rtl_test -t",
            "hackrf": "hackrf_info",
            "proxmark3": "proxmark3 /dev/ttyACM0",
        }

    def scan_all_tools(self):
        """فحص كافة المسارات وبناء فهرس سيادي شامل وخاضع"""
        inventory = []
        for app_dir in self.app_dirs:
            if not os.path.exists(app_dir): continue

            for filename in os.listdir(app_dir):
                if filename.endswith(".desktop"):
                    path = os.path.join(app_dir, filename)
                    tool_data = self._parse_desktop_file(path)
                    if tool_data:
                        tool_key = tool_data['name'].lower()
                        # مطابقة الذكاء واستخلاص "الأمر الأسمى"
                        for key in self.tool_intelligence:
                            if key in tool_key:
                                tool_data['supreme_command'] = self.tool_intelligence[key]
                                tool_data['subjugated'] = True
                                break
                        inventory.append(tool_data)
        
        os.makedirs(os.path.dirname(self.output_path), exist_ok=True)
        with open(self.output_path, "w") as f:
            json.dump(inventory, f, indent=4, ensure_ascii=False)
        
        return inventory

    def _parse_desktop_file(self, path):
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
                    "description": comment.group(1).strip() if comment else "No description.",
                    "categories": [c for c in categories.group(1).strip().split(";") if c] if categories else [],
                    "supreme_command": None,
                    "subjugated": False,
                    "module_id": self._assign_module(name.group(1).strip())
                }
        except: return None
        return None

    def _assign_module(self, name):
        n = name.lower()
        if any(x in n for x in ["gsm", "lte", "5g", "cell", "sim", "imsi", "sdr", "radio"]): return 15
        if any(x in n for x in ["scan", "recon", "enum", "exploit", "vuln", "sql", "brute"]): return 14
        return 1 # Default General Module

if __name__ == "__main__":
    scanner = ToolLexiconScanner()
    results = scanner.scan_all_tools()
    print(f"[+] Sovereign Lexicon v3: Subjugated {len(results)} tools into the Hierarchy.")
