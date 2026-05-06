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

def route(prompt):
    category = classify(prompt)
    if category == "osint":
        target = prompt.split()[-1]
        subprocess.Popen([TOOLS["ghost_track"], "ip", target] if target.replace(".","").isdigit() else [TOOLS["ghost_track"], "user", target])
        return f"تشغيل GhostTrack على {target}"
    elif category == "tracking":
        subprocess.Popen([TOOLS["seeker"]])
        return "تشغيل Seeker GPS"
    # Fallback to AI
    try:
        r = requests.post(OLLAMA_URL, json={"model": "mistral", "prompt": prompt, "stream": False})
        return r.json().get("response", "")
    except: return "SoulCore: رابط AI مفقود"

if __name__ == "__main__":
    print(route(" ".join(sys.argv[1:])))