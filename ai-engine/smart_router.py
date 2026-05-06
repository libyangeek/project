#!/usr/bin/env python3
"""Smart Router v50.0 – المُعِزّ الاستراتيجي"""
import sys, json, requests, os, subprocess
OLLAMA_URL = "http://localhost:11434/api/generate"

TOOLS = {
    "ghost_track": "python3 /opt/sovereign-ai-platform/tools/social_predator/ghost_track.py",
    "blackbird": "python3 /opt/sovereign-ai-platform/tools/social_predator/blackbird_scan.py",
    "seeker": "python3 /opt/sovereign-ai-platform/tools/social_predator/seeker_gps.py",
    "xlogger": "python3 /opt/sovereign-ai-platform/tools/social_predator/xlogger.py",
}

def classify(prompt):
    p = prompt.lower()
    if any(w in p for w in ["استهدف", "osint", "معلومات", "ip", "user", "من هو", "حدد"]): return "osint"
    if any(w in p for w in ["اختراق", "ثغرة", "هجوم", "exploit", "c2"]): return "cyber"
    if any(w in p for w in ["gps", "موقع", "تتبع", "رابط"]): return "tracking"
    return "general"

def route_query(prompt):
    category = classify(prompt)
    if category == "osint":
        target = prompt.split()[-1]
        try:
            subprocess.Popen([TOOLS["ghost_track"], "ip", target] if target.replace(".","").isdigit() else [TOOLS["ghost_track"], "user", target])
            return {"category": category, "model": "GhostTrack", "status": f"تشغيل GhostTrack على {target}"}
        except: pass
    elif category == "tracking":
        try:
            subprocess.Popen([TOOLS["seeker"]])
            return {"category": category, "model": "Seeker", "status": "تشغيل Seeker GPS"}
        except: pass
    
    # Fallback to AI
    try:
        r = requests.post(OLLAMA_URL, json={"model": "mistral", "prompt": prompt, "stream": False})
        return {
            "category": category,
            "model": "mistral",
            "response": r.json().get("response", ""),
            "status": "ROUTED_TO_AI"
        }
    except: 
        return {"category": category, "model": "fallback", "status": "SoulCore: رابط AI مفقود"}

if __name__ == "__main__":
    query = " ".join(sys.argv[1:]) if len(sys.argv) > 1 else ""
    if query:
        print(json.dumps(route_query(query), indent=2))
    else:
        print(json.dumps({"error": "No query provided"}))
