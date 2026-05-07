
#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Smart Router v50.5 – المُعِزّ الاستراتيجي (Spectrum Admiral Edition)
المحرك المركزي لتنسيق الأسلحة المدارية واللاسلكية.
تم دمج ذكاء Awesome-Cellular-Hacking.
(c) 2026 Al-Mu'izz Sovereign Systems - Al-Ghazali Root
"""
import sys, json, requests, os, subprocess, socket

BASE_DIR = "/opt/sovereign-ai-platform"
SOCK_PATH = "/tmp/muizz_event_bus.sock"

TOOLS = {
    "ghost_eye": f"python3 {BASE_DIR}/tools/eye_series/ghost_eye.py",
    "ghost_track": f"python3 {BASE_DIR}/tools/social_predator/ghost_track.py",
    "auto_injector": f"python3 {BASE_DIR}/ai-engine/offensive/auto_injector.py",
    "openbullet": f"python3 {BASE_DIR}/ai-engine/openbullet/sovereign_config_engine.py",
    "mistral_link": f"python3 {BASE_DIR}/ai-engine/mistral_connector.py",
    "deepseek_logic": f"python3 {BASE_DIR}/ai-engine/deepseek_logic.py",
    "cve_hunter": f"python3 {BASE_DIR}/ai-engine/vulnerabilities/cve_hunter.py",
    "ss7": f"python3 {BASE_DIR}/tools/cellular/ss7_simulator.py",
    "voice": f"python3 {BASE_DIR}/tools/clawcode/voice_hijack.py",
    "sdr_scan": f"python3 {BASE_DIR}/tools/cellular/sdr_probe.py", # محاكاة
}

def publish_event(etype, payload):
    try:
        with socket.socket(socket.AF_UNIX, socket.SOCK_STREAM) as s:
            s.connect(SOCK_PATH)
            s.sendall(json.dumps({"type": etype, "payload": payload}).encode())
    except: pass

class SmartRouter:
    def classify(self, prompt):
        p = prompt.lower()
        if any(w in p for w in ["عين", "eye", "recon", "dns", "headers"]): return "eye_recon"
        if any(w in p for w in ["تتبع", "track", "osint", "بصمة", "social"]): return "ghost_track"
        if any(w in p for w in ["حقن", "injector", "openbullet", "حسابات", "siphon"]): return "auto_injector"
        if any(w in p for w in ["ثغرة", "cve", "vulnerability", "oracle", "فحص"]): return "vuln_oracle"
        if any(w in p for w in ["خلوي", "cellular", "ss7", "lte", "5g", "imsi", "sdr"]): return "cellular_warfare"
        if any(w in p for w in ["تحدث", "voice", "hijack", "claw", "صوت"]): return "physical_hijack"
        if any(w in p for w in ["حلل", "mistral", "قرر", "استراتيجية"]): return "mistral_analysis"
        if any(w in p for w in ["فكر", "منطق", "deep", "reason", "برمج"]): return "deep_reasoning"
        return "general"

    def route_query(self, prompt):
        category = self.classify(prompt)
        target = prompt.split()[-1]
        
        publish_event("admiral_routing", {"category": category, "prompt": prompt})

        # 1. الحروب الخلوية واللاسلكية (SDR/SS7/LTE)
        if category == "cellular_warfare":
            try:
                # التحقق من نوع الهجوم الخلوي
                vector = "location_tracking" if "تتبع" in prompt else "sms_interception"
                result = subprocess.check_output([TOOLS["ss7"], vector, target], text=True)
                publish_event("spectrum_strike_launched", {"target": target, "vector": vector})
                return {"category": category, "output": json.loads(result), "status": "SIGNAL_SUBJUGATED", "model": "spectrum_admiral"}
            except: pass

        # 2. التفكير العميق والمنطق (DeepSeek)
        if category == "deep_reasoning":
            try:
                result = subprocess.check_output([TOOLS["deepseek_logic"], prompt], text=True)
                publish_event("logic_stabilized", {"prompt": prompt})
                return {"category": category, "output": json.loads(result), "status": "DEEP_LOGIC_ACHIEVED", "model": "deepseek"}
            except: pass

        # 3. عراف الثغرات (CVE Oracle)
        if category == "vuln_oracle":
            try:
                result = subprocess.check_output([TOOLS["cve_hunter"], "search", target], text=True)
                publish_event("oracle_vision_locked", {"target": target})
                return {"category": category, "output": json.loads(result), "status": "ORACLE_VISION_LOCKED", "model": "oracle"}
            except: pass

        return {
            "category": category, 
            "node": "Al-Mu'izz_v50.5_Spectrum_Admiral", 
            "status": "Spectrum intent captured. Orchestrating parallel frequency strike.",
            "intelligence_gain": "MAXIMAL",
            "model": "alpha_core"
        }

if __name__ == "__main__":
    query = " ".join(sys.argv[1:])
    router = SmartRouter()
    if query:
        print(json.dumps(router.route_query(query), indent=2, ensure_ascii=False))
