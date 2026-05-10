
#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Smart Router v53.9 – المُعِزّ الاستراتيجي (Arsenal Master Edition)
المحرك المركزي لتنسيق الأسلحة المدارية، اللاسلكية، والترسانة العامة.
(c) 2026 Al-Mu'izz Sovereign Systems - Al-Ghazali Root
"""
import sys, json, os, subprocess, socket

BASE_DIR = os.getenv("PROJECT_ROOT", "/opt/sovereign-ai-platform")
SOCK_PATH = "/tmp/muizz_event_bus.sock"

def publish_event(etype, payload):
    """بث الحدث عبر ناقل الأحداث لضمان الرنين الجماعي"""
    try:
        if os.path.exists(SOCK_PATH):
            with socket.socket(socket.AF_UNIX, socket.SOCK_STREAM) as s:
                s.connect(SOCK_PATH)
                s.sendall(json.dumps({"type": etype, "payload": payload}).encode())
    except: pass

class SmartRouter:
    def classify(self, prompt):
        p = prompt.lower()
        if any(w in p for w in ["عين", "eye", "recon", "dns", "subdomain", "headers", "استطلاع"]): return "eye_recon"
        if any(w in p for w in ["تتبع", "track", "osint", "بصمة", "social", "اجتماعي"]): return "ghost_track"
        if any(w in p for w in ["حقن", "injector", "openbullet", "حسابات", "siphon", "استنزاف"]): return "auto_injector"
        if any(w in p for w in ["ثغرة", "cve", "vulnerability", "oracle", "فحص"]): return "vuln_oracle"
        if any(w in p for w in ["خلوي", "cellular", "ss7", "lte", "5g", "imsi", "sdr", "radio"]): return "cellular_warfare"
        if any(w in p for w in ["استغلال", "exploit", "msf", "payload", "حمولة"]): return "exploit_forge"
        if any(w in p for w in ["تحدث", "voice", "hijack", "claw", "صوت"]): return "physical_hijack"
        if any(w in p for w in ["حلل", "mistral", "قرر", "استراتيجية"]): return "mistral_analysis"
        if any(w in p for w in ["فكر", "منطق", "deep", "reason", "برمج"]): return "deep_reasoning"
        if any(w in p for w in ["سلسلة", "إبادة", "kill", "chain", "هجوم"]): return "kill_chain"
        if any(w in p for w in ["كلمة", "سر", "password", "pssw", "stole", "recovery"]): return "cerebral_siphon"
        return "general_arsenal"

    def route_query(self, prompt):
        category = self.classify(prompt)
        target = prompt.split()[-1] if len(prompt.split()) > 0 else "GLOBAL_MATRIX"
        
        publish_event("admiral_routing", {"category": category, "prompt": prompt})

        # توجيه المهمة للوحدة التنفيذية المناسبة
        if category == "cerebral_siphon":
            try:
                cmd = f"python3 {os.path.join(BASE_DIR, 'ai-engine/offensive/pssw_extractor.py')} memory"
                output = subprocess.check_output(cmd, shell=True).decode()
                return json.loads(output)
            except:
                return {"status": "FAILED", "error": "Cerebral link disrupted."}

        response_map = {
            "eye_recon": f"Initiating Trace-Labs forensics on {target}...",
            "auto_injector": f"Deploying Legba Siphon on {target}...",
            "cellular_warfare": f"Subjugating spectrum frequencies for {target}...",
            "mistral_analysis": f"Consulting God-Core for strategic scenario...",
            "kill_chain": f"Executing Universal Kill-Chain on {target}..."
        }

        output = response_map.get(category, f"Sovereign Directive '{prompt}' accepted by Node 22.")

        return {
            "category": category,
            "status": "DIRECTIVE_LOCKED",
            "output": output,
            "target": target,
            "node": "Alpha-God-Core",
            "model": "arsenal_admiral"
        }

if __name__ == "__main__":
    query = " ".join(sys.argv[1:])
    router = SmartRouter()
    if query:
        print(json.dumps(router.route_query(query), indent=2, ensure_ascii=False))
