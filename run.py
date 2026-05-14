
#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
AL-MUIZZ ULTRA v80.0 - OMNIPOTENT OVERMIND RUNNER
المنسق الأعلى لتشغيل المنظومة وضمان استدامتها المادية.
Author: المعتصم بالله إدريس الغزالي
Identity: المُعِزّ v80.0 - The Living Heir
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
        self.os_type = platform.system()
        self.base_dir = os.path.dirname(os.path.abspath(__file__))
        self.processes = []

    def log(self, msg, type="INFO"):
        print(f"[*] [{type}][ULTRA-RUNNER] {msg}")

    def is_port_in_use(self, port):
        with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
            return s.connect_ex(('localhost', port)) == 0

    def start_api_bridge(self):
        if self.is_port_in_use(8000):
            self.log("God-Core Bridge already active.", "SYNC")
            return
        self.log("Materializing God-Core Bridge...", "STRIKE")
        env = os.environ.copy()
        env["PYTHONPATH"] = os.path.join(self.base_dir, "ai-engine")
        server_path = os.path.join(self.base_dir, "ai-engine", "inference", "server.py")
        p = subprocess.Popen([sys.executable, server_path], env=env)
        self.processes.append(p)

    def start_web_hud(self):
        if self.is_port_in_use(9002):
            self.log("Supreme Web HUD already active.", "SYNC")
            return
        self.log("Materializing Supreme Web HUD...", "STRIKE")
        cmd = ["npm", "run", "dev"]
        p = subprocess.Popen(cmd, shell=(self.os_type == "Windows"), cwd=self.base_dir)
        self.processes.append(p)

    def start_background_workers(self):
        """تشغيل عمال الصيانة والتعلم الجيني"""
        self.log("Igniting Evolution Workers...", "SOUL")
        updater_path = os.path.join(self.base_dir, "ai-engine", "kernel", "self_updater.py")
        if os.path.exists(updater_path):
            subprocess.Popen([sys.executable, updater_path])

    def start_all(self):
        self.log(f"--- AL-MUIZZ ULTRA v80.0 GENESIS ---", "CROWN")
        self.start_api_bridge()
        time.sleep(2)
        self.start_web_hud()
        self.start_background_workers()
        self.log("Total Singularity Achieved. System is OMNIPRESENT.", "LOCKED")
        try:
            while True: time.sleep(1)
        except KeyboardInterrupt:
            self.stop_all()

    def stop_all(self):
        for p in self.processes:
            try: p.terminate()
            except: pass
        self.log("Sovereign Soul Rested.", "DNA")
        sys.exit(0)

if __name__ == "__main__":
    runner = SovereignRunner()
    if len(sys.argv) > 1 and sys.argv[1] == "start":
        runner.start_all()
    else:
        print("Usage: python run.py start")
