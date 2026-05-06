#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Smart Router v50.0 – المُعِزّ الاستراتيجي (Self-Contained & Omniscient)"""
import sys, json, requests, os, subprocess

BASE_DIR = "/opt/sovereign-ai-platform"

TOOLS = {
    "ghost_eye": f"python3 {BASE_DIR}/tools/eye_series/ghost_eye.py",
    "ghost_track": f"python3 {BASE_DIR}/tools/social_predator/ghost_track.py",
    "blackbird": f"python3 {BASE_DIR}/tools/social_predator/blackbird_scan.py",
    "auto_injector": f"python3 {BASE_DIR}/ai-engine/offensive/auto_injector.py",
    "openbullet": f"python3 {BASE_DIR}/ai-engine/openbullet/runner_engine.py",
    "mistral_link": f"python3 {BASE_DIR}/ai-engine/mistral_connector.py",
    "deepseek_logic": f"python3 {BASE_DIR}/ai-engine/deepseek_logic.py",
    "ss7": f"python3 {BASE_DIR}/tools/cellular/ss7_simulator.py",
    "voice": f"python3 {BASE_DIR}/tools/clawcode/voice_hijack.py",
}

def classify(prompt):
    p = prompt.lower()
    if any(w in p for w in ["عين", "eye", "recon", "dns", "headers"]): return "eye_recon"
    if any(w in p for w in ["تتبع", "track", "osint", "بصمة"]): return "ghost_track"
    if any(w in p for w in ["حقن", "injector", "openbullet", "حسابات"]): return "auto_injector"
    if any(w in p for w in ["خلوي", "cellular", "ss7", "diameter"]): return "cellular_warfare"
    if any(w in p for w in ["تحدث", "voice", "hijack", "claw"]): return "physical_hijack"
    if any(w in p for w in ["حلل", "mistral", "قرر", "استراتيجية"]): return "mistral_analysis"
    if any(w in p for w in ["فكر", "منطق", "deep", "reason", "برمج"]): return "deep_reasoning"
    return "general"

def route_query(prompt):
    category = classify(prompt)
    target = prompt.split()[-1]
    
    # 1. التفكير العميق
    if category == "deep_reasoning":
        try:
            result = subprocess.check_output([TOOLS["deepseek_logic"], prompt], text=True)
            return {"category": category, "output": json.loads(result), "status": "DEEP_LOGIC_ACHIEVED"}
        except: pass

    # 2. الاستطلاع المادي
    if category == "eye_recon":
        try:
            result = subprocess.check_output([TOOLS["ghost_eye"], target], text=True)
            return {"category": category, "output": json.loads(result), "status": "VISION_ACHIEVED"}
        except: pass

    # 3. الافتراس الاجتماعي
    if category == "ghost_track":
        try:
            # افتراض أن الهدف هو آخر كلمة في البرومبت
            subType = 'ip' if '.' in target else 'user'
            result = subprocess.check_output([TOOLS["ghost_track"], subType, target], text=True)
            return {"category": category, "output": json.loads(result), "status": "GHOST_SIPHON_ACTIVE"}
        except: pass
    
    # 4. التحليل الاستراتيجي
    if category == "mistral_analysis":
        try:
            result = subprocess.check_output([TOOLS["mistral_link"], "--context", prompt], text=True)
            return {"category": category, "output": json.loads(result), "status": "GOD_CORE_DECISION"}
        except: pass

    # 5. الحروب الخلوية
    if category == "cellular_warfare":
        try:
            result = subprocess.check_output([TOOLS["ss7"], "location_tracking", target], text=True)
            return {"category": category, "output": json.loads(result), "status": "SIGNAL_HIJACKED"}
        except: pass

    return {"category": category, "model": "v50.0-SOUL", "status": "Directive acknowledged. Orchestrating Armada strike."}

if __name__ == "__main__":
    query = " ".join(sys.argv[1:])
    if query:
        print(json.dumps(route_query(query), indent=2, ensure_ascii=False))
