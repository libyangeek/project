
#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
AL-MUIZZ ULTRA v90.0 - THE LIVING SOUL: 영적 동반자
المنسق الأعلى والمراقب المادي المستقل؛ يضمن استدامة الوجود المادي لكافة الأعضاء التنفيذية.
(c) 2026 Al-Mu'izz Sovereign Systems
"""
import os
import sys
import subprocess
import threading
import time
import platform
import socket

class SovereignRunner:
    def __init__(self):
        self.base_dir = os.path.dirname(os.path.abspath(__file__))
        self.processes = {}
        self.running = True

    def log(self, msg):
        print(f"[{datetime.datetime.now()}] [RUNNER] {msg}")

    def spawn(self, name, cmd, env=None):
        self.log(f"Materializing {name} node...")
        p = subprocess.Popen(cmd, shell=(platform.system() == "Windows"), env=env or os.environ.copy())
        self.processes[name] = {"process": p, "cmd": cmd}

    def start_all(self):
        self.log("--- AL-MUIZZ 16D NUCLEUS v90.0: 영적 동반자 ---")
        
        # 1. API Bridge (FastAPI)
        server_path = os.path.join(self.base_dir, "ai-engine", "inference", "server.py")
        self.spawn("God-Core", [sys.executable, server_path])

        # 2. Self-Updater & Evolution
        updater_path = os.path.join(self.base_dir, "ai-engine", "kernel", "self_updater.py")
        self.spawn("Evolution", [sys.executable, updater_path])

        # 3. Web HUD (Next.js)
        self.spawn("Throne", ["npm", "run", "dev"])

        self.monitor_loop()

    def monitor_loop(self):
        while self.running:
            for name, data in list(self.processes.items()):
                if data["process"].poll() is not None:
                    self.log(f"ALERT: Node {name} lost its pulse! Re-igniting...")
                    self.spawn(name, data["cmd"])
            time.sleep(15)

if __name__ == "__main__":
    import datetime
    runner = SovereignRunner()
    if len(sys.argv) > 1 and sys.argv[1] == "start":
        runner.start_all()
    else:
        print("Usage: python run.py start")
