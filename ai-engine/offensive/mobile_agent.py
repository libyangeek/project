
#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Mobile Agent v2.0 - العميل المحمول السيادي
يربط الهاتف بالعقل الأسمى، ينفذ الهجمات، ويسجل النتائج جينياً.
(c) 2025 Sovereign Systems - Al-Mu'izz
"""
import socket
import json
import sys
import os
import sqlite3
from datetime import datetime

class MobileAgent:
    def __init__(self, host="127.0.0.1", port=9999):
        self.host = host
        self.port = port
        self.gepa_db = "/opt/sovereign-ai-platform/gepa/exploit_db.sqlite"

    def send_to_node(self, command):
        """إرسال أمر للهاتف عبر النفق العكسي"""
        try:
            with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
                s.settimeout(30)
                s.connect((self.host, self.port))
                s.sendall(command.encode())
                data = s.recv(8192)
                return data.decode()
        except Exception as e:
            return f"Neural Link Failure: {str(e)}"

    def log_to_gepa(self, target, action, success, output):
        """تسجيل العملية في الذاكرة الجينية للمُعِزّ"""
        try:
            conn = sqlite3.connect(self.gepa_db)
            conn.execute("INSERT INTO exploits (ts, target, type, success, output, weight) VALUES (?, ?, ?, ?, ?, ?)",
                (datetime.now().isoformat(), target, f"MOBILE_{action}", success, output, 2.0 if success else 0.5))
            conn.commit()
            conn.close()
        except: pass

    def execute_strike(self, action_type, params):
        """تنفيذ ضربة عبر الهاتف"""
        print(f"[*] [MOBILE_NODE] Executing {action_type} on {params}...")
        
        command = ""
        if action_type == "scan":
            command = f"nmap -sV -T4 {params}"
        elif action_type == "exploit":
            command = f"python3 ~/elitehex/elitehex.py --target {params} --auto"
        elif action_type == "shell":
            command = params # تنفيذ أمر Bash مباشر
            
        output = self.send_to_node(command)
        success = "failed" not in output.lower() and "error" not in output.lower()
        
        self.log_to_gepa(params, action_type, success, output)
        
        return {
            "node": "Mobile_Overmind_Node",
            "status": "COMPLETED" if success else "RE-ADAPTING",
            "output": output,
            "timestamp": datetime.now().isoformat()
        }

if __name__ == "__main__":
    agent = MobileAgent()
    if len(sys.argv) > 2:
        res = agent.execute_strike(sys.argv[1], sys.argv[2])
        print(json.dumps(res, indent=2, ensure_ascii=False))
    else:
        print("Usage: mobile_agent.py <action> <target/params>")
