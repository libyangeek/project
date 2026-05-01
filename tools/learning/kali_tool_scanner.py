# -*- coding: utf-8 -*-
"""
Al-Mu'izz Sovereign - SysPulse (Kali Tool Scanner)
محرك فهرسة وتحليل أدوات كالي لينكس: يقرأ ملفات الـ .desktop ويبني قاعدة بيانات ذكية للأدوات المتاحة.
(c) 2025 Sovereign Systems
"""

import os
import json
import re

class KaliToolScanner:
    def __init__(self):
        self.app_dir = "/usr/share/applications"
        self.output_path = "/opt/sovereign-ai-platform/audit/kali_inventory.json"

    def scan_tools(self):
        """فحص المجلد وبناء الفهرس"""
        inventory = []
        if not os.path.exists(self.app_dir):
            return {"error": "Application directory not found."}

        for filename in os.listdir(self.app_dir):
            if filename.endswith(".desktop"):
                path = os.path.join(self.app_dir, filename)
                tool_data = self._parse_desktop_file(path)
                if tool_data:
                    inventory.append(tool_data)
        
        with open(self.output_path, "w") as f:
            json.dump(inventory, f, indent=4)
        
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
                    "categories": categories.group(1).strip().split(";") if categories else []
                }
        except:
            return None
        return None

if __name__ == "__main__":
    scanner = KaliToolScanner()
    results = scanner.scan_tools()
    print(f"[+] SysPulse: Indexed {len(results)} Kali tools successfully.")
