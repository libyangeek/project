#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
AL-MUIZZ ULTRA v78.7 - OMNIPOTENT OVERMIND RUNNER
المنسق الأعلى لتشغيل المنظومة على كافة الأنظمة (Windows/Kali).
Author: المعتصم بالله إدريس الغزالي
Identity: المُعِزّ ULTRA v78.7 - Omnipotent Overmind
"""

import os
import sys
import subprocess
import threading
import time
import platform

class SovereignRunner:
    def __init__(self):
        self.os_type = platform.system()
        self.base_dir = os.path.dirname(os.path.abspath(__file__))
        self.processes = []

    def log(self, msg):
        print(f"[*] [ULTRA-RUNNER] {msg}")

    def start_api_bridge(self):
        self.log(f"Starting God-Core Bridge (FastAPI) on {self.os_type}...")
        env = os.environ.copy()
        env["PYTHONPATH"] = os.path.join(self.base_dir, "ai-engine")
        
        server_path = "ai-engine/inference/server.py"
        cmd = [sys.executable, server_path]
        
        p = subprocess.Popen(cmd, env=env)
        self.processes.append(p)

    def start_web_hud(self):
        self.log("Starting Supreme Web HUD (Next.js)...")
        # استخدام npm run dev لبيئة التطوير أو npm start للإنتاج
        cmd = ["npm", "run", "dev"]
        if self.os_type == "Windows":
            p = subprocess.Popen(cmd, shell=True)
        else:
            p = subprocess.Popen(cmd)
        self.processes.append(p)

    def start_kernel_monitor(self):
        if self.os_type == "Linux":
            self.log("Activating Ghost V6.0 Kernel Monitor...")
            cmd = [sys.executable, "ai-engine/kernel/unified_kernel.py"]
            p = subprocess.Popen(cmd)
            self.processes.append(p)

    def start_all(self):
        self.log(f"--- AL-MUIZZ ULTRA v78.7 GENESIS ---")
        self.log(f"Materializing on Node: {platform.node()}")
        
        # تشغيل الطبقات بالتتابع
        self.start_api_bridge()
        time.sleep(2)
        self.start_web_hud()
        self.start_kernel_monitor()
        
        self.log("Singularity Achieved. System is OMNIPRESENT.")
        try:
            while True:
                time.sleep(1)
        except KeyboardInterrupt:
            self.stop_all()

    def stop_all(self):
        self.log("Initiating Safe Hibernation Sequence...")
        for p in self.processes:
            p.terminate()
        self.log("Sovereign Soul Rested.")
        sys.exit(0)

if __name__ == "__main__":
    runner = SovereignRunner()
    if len(sys.argv) > 1 and sys.argv[1] == "start":
        runner.start_all()
    else:
        print("Usage: python run.py start")
