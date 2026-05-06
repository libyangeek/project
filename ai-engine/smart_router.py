#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Smart Router v50.0 – المُعِزّ الاستراتيجي (DeepSeek & Mistral Linked)"""
import sys, json, requests, os, subprocess

BASE_DIR = "/opt/sovereign-ai-platform"

TOOLS = {
    "ghost_eye": f"python3 {BASE_DIR}/tools/eye_series/ghost_eye.py",
    "auto_injector": f"python3 {BASE_DIR}/ai-engine/offensive/auto_injector.py",
    "mistral_link": f"python3 {BASE_DIR}/ai-engine/mistral_connector.py",
    "deepseek_logic": f"python3 {BASE_DIR}/ai-engine/deepseek_logic.py",
}

def classify(prompt):
    p = prompt.lower()
    if any(w in p for w in ["عين", "eye", "recon", "dns", "headers"]): return "eye_recon"
    if any(w in p for w in ["حقن", "injector", "openbullet", "حسابات"]): return "auto_injector"
    if any(w in p for w in ["حلل", "mistral", "قرر", "استراتيجية"]): return "mistral_analysis"
    if any(w in p for w in ["فكر", "منطق", "deep", "reason", "برمج"]): return "deep_reasoning"
    return "general"

def route_query(prompt):
    category = classify(prompt)
    target = prompt.split()[-1]
    
    if category == "deep_reasoning":
        try:
            result = subprocess.check_output([TOOLS["deepseek_logic"], prompt], text=True)
            return {"category": category, "output": json.loads(result), "status": "DEEP_LOGIC_ACHIEVED"}
        except: pass

    if category == "eye_recon":
        try:
            result = subprocess.check_output([TOOLS["ghost_eye"], target], text=True)
            return {"category": category, "output": json.loads(result), "status": "VISION_ACHIEVED"}
        except: pass
    
    if category == "mistral_analysis":
        try:
            result = subprocess.check_output([TOOLS["mistral_link"], "--context", prompt], text=True)
            return {"category": category, "output": json.loads(result), "status": "GOD_CORE_DECISION"}
        except: pass

    return {"category": category, "model": "fallback", "status": "SoulCore: Manual routing required."}

if __name__ == "__main__":
    query = " ".join(sys.argv[1:])
    if query:
        print(json.dumps(route_query(query), indent=2, ensure_ascii=False))
