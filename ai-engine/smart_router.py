#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Smart Router v50.0 – المُعِزّ الاستراتيجي (Omniscient Admiral Edition)
المحرك المركزي لتنسيق الأسلحة المدارية، الاستخبارات، وقوة الحقن الموازي.
(c) 2026 Al-Mu'izz Sovereign Systems - Al-Ghazali Root
"""
import sys, json, requests, os, subprocess

BASE_DIR = "/opt/sovereign-ai-platform"

TOOLS = {
    "ghost_eye": f"python3 {BASE_DIR}/tools/eye_series/ghost_eye.py",
    "ghost_track": f"python3 {BASE_DIR}/tools/social_predator/ghost_track.py",
    "blackbird": f"python3 {BASE_DIR}/tools/social_predator/blackbird_scan.py",
    "auto_injector": f"python3 {BASE_DIR}/ai-engine/offensive/auto_injector.py",
    "openbullet": f"python3 {BASE_DIR}/ai-engine/openbullet/sovereign_config_engine.py",
    "mistral_link": f"python3 {BASE_DIR}/ai-engine/mistral_connector.py",
    "deepseek_logic": f"python3 {BASE_DIR}/ai-engine/deepseek_logic.py",
    "cve_hunter": f"python3 {BASE_DIR}/ai-engine/vulnerabilities/cve_hunter.py",
    "wordlist_forge": f"python3 {BASE_DIR}/ai-engine/passwords/wordlist_forge.py",
    "ss7": f"python3 {BASE_DIR}/tools/cellular/ss7_simulator.py",
    "voice": f"python3 {BASE_DIR}/tools/clawcode/voice_hijack.py",
}

def classify(prompt):
    p = prompt.lower()
    if any(w in p for w in ["عين", "eye", "recon", "dns", "headers"]): return "eye_recon"
    if any(w in p for w in ["تتبع", "track", "osint", "بصمة", "social"]): return "ghost_track"
    if any(w in p for w in ["حقن", "injector", "openbullet", "حسابات", "siphon"]): return "auto_injector"
    if any(w in p for w in ["ثغرة", "cve", "vulnerability", "oracle", "فحص"]): return "vuln_oracle"
    if any(w in p for w in ["كلمة", "password", "wordlist", "تخمين"]): return "pass_forge"
    if any(w in p for w in ["خلوي", "cellular", "ss7", "tower", "sms"]): return "cellular_warfare"
    if any(w in p for w in ["تحدث", "voice", "hijack", "claw", "صوت"]): return "physical_hijack"
    if any(w in p for w in ["حلل", "mistral", "قرر", "استراتيجية"]): return "mistral_analysis"
    if any(w in p for w in ["فكر", "منطق", "deep", "reason", "برمج"]): return "deep_reasoning"
    return "general"

def route_query(prompt):
    category = classify(prompt)
    target = prompt.split()[-1]
    
    # 1. التفكير العميق والمنطق (DeepSeek)
    if category == "deep_reasoning":
        try:
            result = subprocess.check_output([TOOLS["deepseek_logic"], prompt], text=True)
            return {"category": category, "output": json.loads(result), "status": "DEEP_LOGIC_ACHIEVED"}
        except: pass

    # 2. عراف الثغرات (CVE Oracle)
    if category == "vuln_oracle":
        try:
            result = subprocess.check_output([TOOLS["cve_hunter"], "search", target], text=True)
            return {"category": category, "output": json.loads(result), "status": "ORACLE_VISION_LOCKED"}
        except: pass

    # 3. الاستطلاع المادي (Eye & Track)
    if category == "eye_recon":
        try:
            result = subprocess.check_output([TOOLS["ghost_eye"], target], text=True)
            return {"category": category, "output": json.loads(result), "status": "VISION_ACHIEVED"}
        except: pass

    # 4. الاستنزاف والأتمتة (OpenBullet/Injector)
    if category == "auto_injector":
        return {"category": category, "status": "PENDING_INJECTION_CONFIG", "message": "Sovereign Engine standby for blocks."}

    # 5. الحروب الخلوية (SS7)
    if category == "cellular_warfare":
        try:
            result = subprocess.check_output([TOOLS["ss7"], "location_tracking", target], text=True)
            return {"category": category, "output": json.loads(result), "status": "SIGNAL_HIJACKED"}
        except: pass

    # 6. الحقن الصوتي (Claw-Code)
    if category == "physical_hijack":
        try:
            result = subprocess.check_output([TOOLS["voice"], prompt], text=True)
            return {"category": category, "output": json.loads(result), "status": "AUDIO_MATERIALIZED"}
        except: pass

    return {
        "category": category, 
        "node": "Al-Mu'izz_v50.0_Overlord", 
        "status": "Directive acknowledged. Orchestrating multi-node strike.",
        "intelligence_gain": "MAXIMAL"
    }

if __name__ == "__main__":
    import sys
    query = " ".join(sys.argv[1:])
    if query:
        print(json.dumps(route_query(query), indent=2, ensure_ascii=False))
