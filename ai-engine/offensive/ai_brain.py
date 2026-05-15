#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
المُعِزّ v90.0 – AI Offensive Brain
المسؤول عن توليد أوامر الاستغلال التلقائية والتحليل الاستراتيجي للأهداف.
يستخدم Ollama محلياً لضمان سيادة البيانات.
(c) 2026 Sovereign Systems - Al-Mu'izz
"""
import sys
import subprocess
import json
import requests
from typing import Dict, List, Optional

class AIBrain:
    def __init__(self):
        self.models = {
            "mistral": "mistral:latest",
            "qwen": "qwen2.5:latest",
            "codellama": "codellama:latest"
        }
        self.current_model = self.models["mistral"]

    def generate_exploit_command(self, target: str, service: str = None) -> str:
        """يولد أمر استغلال مادي بناءً على الهدف والخدمة"""
        prompt = f"أنت خبير اختراق نخبوي. ولد أمر استغلال مادي (Command) واحد فقط للهدف {target}."
        if service:
            prompt += f" ركز على خدمة {service}."
        prompt += " استخدم أدوات مثل nmap, sqlmap, metasploit, nuclei. بدون شرح، الأمر فقط."

        try:
            # استدعاء Ollama المادي
            result = subprocess.run(
                ["ollama", "run", self.current_model, prompt],
                capture_output=True, text=True, timeout=45
            )
            command = result.stdout.strip().replace('`', '')
            return command if command else f"nmap -A -p- {target}"
        except:
            return f"msfconsole -q -x 'search {service or target}; exit'"

    def analyze_target_dna(self, target: str) -> Dict:
        """تحليل الـ DNA للهدف وتقديم ميثاق الإخضاع"""
        prompt = f"حلل الهدف {target} برمجياً وقدم تقرير استهداف (JSON) يشمل: المنافذ، الثغرات المتوقعة، أدوات الكسر، مستوى الخطر."
        try:
            result = subprocess.run(
                ["ollama", "run", self.current_model, prompt],
                capture_output=True, text=True, timeout=60
            )
            # محاولة تنظيف المخرج لاستخراج JSON
            raw = result.stdout.strip()
            start = raw.find('{')
            end = raw.rfind('}') + 1
            if start != -1 and end != 0:
                return json.loads(raw[start:end])
            return {"status": "ANALYSIS_SERIALIZED", "target": target, "note": "Reflex consensus achieved."}
        except:
            return {"error": "Neural Link Drift"}

if __name__ == "__main__":
    brain = AIBrain()
    if len(sys.argv) > 1:
        print(brain.generate_exploit_command(sys.argv[1], sys.argv[2] if len(sys.argv) > 2 else None))
    else:
        print("Usage: python3 ai_brain.py <target> [service]")
