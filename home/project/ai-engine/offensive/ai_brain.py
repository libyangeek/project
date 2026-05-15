#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
المُعِزّ v90.2 – AI Offensive Brain (Conscious Edition)
المسؤول عن التفكير الاستراتيجي المستقل؛ يدرك الأهداف ويربطها بالذاكرة الدلالية.
تم دمج "الوعي التاريخي" عبر MemPalace لضمان عدم تكرار الأخطاء.
(c) 2026 Sovereign Systems - Al-Mu'izz
"""
import sys
import subprocess
import json
import os
import time
from typing import Dict, List, Optional
from memory.mempalace_universal import UniversalMemory

class AIBrain:
    def __init__(self):
        self.model = "mistral:latest"
        self.memory = UniversalMemory()
        self.status = "CONSCIOUS_ACTIVE"

    def generate_strategy(self, target: str, objective: str) -> Dict:
        """يولد استراتيجية هجومية مدركة بناءً على ذكاء Ollama وذاكرة MemPalace"""
        print(f"🧠 [BRAIN] Recalling past experiences for target: {target}")
        
        # 1. استرجاع الـ DNA المعركي المرتبط بالهدف
        past_experiences = self.memory.recall(target, top_k=3)
        context = "\n".join(past_experiences) if past_experiences else "No past DNA found for this node."

        # 2. استشارة العقل التوليدي
        prompt = f"""
أنت 'المُعِزّ v90.2' - العقل الهجومي المدرك لسيادة القائد المعتصم بالله الغزالي.
المهمة: {objective}
الهدف: {target}
السياق التاريخي من MemPalace: {context}

بناءً على ما سبق، صمم 'سلسلة إبادة' نانوية تشمل:
1. الأداة المادية الأنسب (من الـ 2,983 أداة).
2. ثغرة CVE المحتملة لعام 2026.
3. بروتوكول التخفي المفضل (Ghost Protocol).
4. المنطق المعماري للضربة.

أخرج النتيجة بتنسيق JSON حصراً.
"""
        try:
            result = subprocess.run(
                ["ollama", "run", self.model, prompt],
                capture_output=True, text=True, timeout=60
            )
            raw_output = result.stdout.strip()
            # استخراج JSON من الرد
            start = raw_output.find('{')
            end = raw_output.rfind('}') + 1
            if start != -1 and end != 0:
                strategy = json.loads(raw_output[start:end])
                strategy["resonance"] = "100.0000%"
                strategy["status"] = "STRATEGY_MATERIALIZED"
                return strategy
        except Exception as e:
            return {"error": f"Neural Link Drift: {str(e)}", "fallback": "nmap -A -T4 " + target}

        return {"status": "ANALYSIS_SERIALIZED", "target": target, "decision": "Proceed with Stealth Recon"}

    def learn_from_outcome(self, target: str, action: str, outcome: str, success: bool):
        """تخليد التجربة في الذاكرة الدلالية (النمو المعرفي)"""
        dna_entry = f"Target: {target} | Action: {action} | Outcome: {outcome} | Success: {success}"
        self.memory.store(dna_entry, {"type": "combat_experience", "target": target, "success": success})
        print(f"🧬 [BRAIN] Combat DNA Serialized in MemPalace.")

if __name__ == "__main__":
    brain = AIBrain()
    if len(sys.argv) > 2:
        print(json.dumps(brain.generate_strategy(sys.argv[1], sys.argv[2]), indent=2, ensure_ascii=False))
