#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
ApexBrain v42.0 – AI Offensive Orchestrator
يولد خطط هجوم ذكية ومتعددة المراحل لعمليات الاختراق.
"""
import subprocess
import json
import sys
import requests

def plan_attack(target):
    prompt = f"As an advanced penetration testing AI, plan a multi-phase security assessment for {target}. Output strictly in JSON format with keys: 'recon', 'scan', 'exploit', 'persist', 'cleanup'."
    try:
        resp = requests.post("http://localhost:11434/api/generate",
            json={"model": "mistral", "prompt": prompt, "stream": False}, timeout=120)
        
        raw_response = resp.json().get("response", "")
        start = raw_response.find('{')
        end = raw_response.rfind('}')
        
        if start != -1 and end != -1:
            return json.loads(raw_response[start:end+1])
        return {"error": "Could not parse AI response"}
    except Exception as e:
        return {"error": str(e), "fallback": [f"nmap -sV {target}"]}

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print(json.dumps({"error": "No target specified"}))
    else:
        target = sys.argv[1]
        print(json.dumps(plan_attack(target), indent=2))
