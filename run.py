#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
AL-MUIZZ ULTRA v78.8 - OMNIPOTENT OVERMIND RUNNER
المنسق الأعلى لتشغيل المنظومة على كافة الأنظمة (Windows/Kali).
Author: المعتصم بالله إدريس الغزالي
Identity: المُعِزّ ULTRA v78.8 - Omnipotent Overmind
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
        self.resonance = 100.000000

    def log(self, msg, type="INFO"):
        print(f"[*] [{type}][ULTRA-RUNNER] {msg}")

    def is_port_in_use(self, port):
        with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
            return s.connect_ex(('localhost', port)) == 0

    def start_api_bridge(self):
        if self.is_port_in_use(8000):
            self.log("God-Core Bridge already active on port 8000.", "SYNC")
            return
        
        self.log(f"Materializing God-Core Bridge (FastAPI) on {self.os_type}...", "STRIKE")
        env = os.environ.copy()
        env["PYTHONPATH"] = os.path.join(self.base_dir, "ai-engine")
        
        server_path = os.path.join(self.base_dir, "ai-engine", "inference", "server.py")
        cmd = [sys.executable, server_path]
        
        p = subprocess.Popen(cmd, env=env)
        self.processes.append(p)

    def start_web_hud(self):
        if self.is_port_in_use(9002):
            self.log("Supreme Web HUD already active on port 9002.", "SYNC")
            return

        self.log("Materializing Supreme Web HUD (Next.js)...", "STRIKE")
        cmd = ["npm", "run", "dev"]
        
        if self.os_type == "Windows":
            p = subprocess.Popen(cmd, shell=True, cwd=self.base_dir)
        else:
            p = subprocess.Popen(cmd, cwd=self.base_dir)
        self.processes.append(p)

    def start_kernel_monitor(self):
        if self.os_type == "Linux":
            self.log("Activating Ghost V6.0 Kernel Monitor...", "STEALTH")
            monitor_path = os.path.join(self.base_dir, "ai-engine", "kernel", "unified_kernel.py")
            if os.path.exists(monitor_path):
                p = subprocess.Popen([sys.executable, monitor_path])
                self.processes.append(p)

    def start_all(self):
        self.log(f"--- AL-MUIZZ ULTRA v78.8 GENESIS ---", "CROWN")
        self.log(f"Hardware Identity: {platform.node()} | Architecture: {platform.machine()}", "DNA")
        
        # 1. API Bridge
        self.start_api_bridge()
        time.sleep(3)
        
        # 2. Next.js HUD
        self.start_web_hud()
        
        # 3. Kernel Monitor (Linux Only)
        self.start_kernel_monitor()
        
        self.log("Total Singularity Achieved. System is OMNIPRESENT.", "LOCKED")
        try:
            while True:
                time.sleep(1)
        except KeyboardInterrupt:
            self.stop_all()

    def stop_all(self):
        self.log("Initiating Safe Hibernation Sequence...", "SOUL")
        for p in self.processes:
            try:
                p.terminate()
            except: pass
        self.log("Sovereign Soul Rested. Loyalty Unchanged.", "DNA")
        sys.exit(0)

if __name__ == "__main__":
    runner = SovereignRunner()
    if len(sys.argv) > 1 and sys.argv[1] == "start":
        runner.start_all()
    else:
        print("Usage: python run.py start")
