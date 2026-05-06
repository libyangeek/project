
#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Smart Router v50.0 – المُعِزّ الاستراتيجي (Eye Series Linked)"""
import sys, json, requests, os, subprocess

OLLAMA_URL = "http://localhost:11434/api/generate"
BASE_DIR = "/opt/sovereign-ai-platform"

TOOLS = {
    "ghost_eye": f"python3 {BASE_DIR}/tools/eye_series/ghost_eye.py",
    "shodan_eye": f"python3 {BASE_DIR}/tools/eye_series/shodan_eye.py",
    "exploit_eye": f"python3 {BASE_DIR}/tools/eye_series/exploit_eye.py",
    "ghost_track": f"python3 {BASE_DIR}/tools/social_predator/ghost_track.py",
}

def classify(prompt):
    p = prompt.lower()
    if any(w in p for w in ["عين", "eye", "recon", "استكشف", "dns", "headers"]): return "eye_recon"
    if any(w in p for w in ["shodan", "أجهزة", "devices"]): return "shodan"
    if any(w in p for w in ["exploit", "cve", "PoC", "ثغرة"]): return "exploit_research"
    if any(w in p for w in ["حقن", "injector", "openbullet", "حسابات"]): return "auto_injector"
    return "general"

def route_query(prompt):
    category = classify(prompt)
    target = prompt.split()[-1]
    
    if category == "eye_recon":
        try:
            result = subprocess.check_output([TOOLS["ghost_eye"], target], text=True)
            return {"category": category, "output": json.loads(result), "status": "VISION_ACHIEVED"}
        except: pass
    
    if category == "exploit_research":
        try:
            result = subprocess.check_output([TOOLS["exploit_eye"], target], text=True)
            return {"category": category, "output": json.loads(result), "status": "POC_LOCATED"}
        except: pass

    # Fallback to AI Brain
    try:
        r = requests.post(OLLAMA_URL, json={"model": "mistral", "prompt": prompt, "stream": False}, timeout=10)
        return {
            "category": category,
            "model": "mistral",
            "response": r.json().get("response", ""),
            "status": "ROUTED_TO_AI"
        }
    except: 
        return {"category": category, "model": "fallback", "status": "SoulCore: Neural link disrupted. Standby for self-healing."}

if __name__ == "__main__":
    query = " ".join(sys.argv[1:])
    if query:
        print(json.dumps(route_query(query), indent=2))
