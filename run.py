
#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
AL-MUIZZ ULTRA v80.0 - OMNIPOTENT OVERMIND RUNNER
المنسق الأعلى لتشغيل المنظومة وضمان استدامتها المادية.
المهام: تشغيل الخدمات، مراقبة النبض، إعادة التشغيل التلقائي، وإطلاق عمال التحديث.
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
import signal

class SovereignRunner:
    def __init__(self):
        self.os_type = platform.system()
        self.base_dir = os.path.dirname(os.path.abspath(__file__))
        self.processes = {}
        self.running = True

    def log(self, msg, type="INFO"):
        print(f"[*] [{type}][ULTRA-RUNNER] {msg}")

    def is_port_in_use(self, port):
        with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
            return s.connect_ex(('localhost', port)) == 0

    def spawn_process(self, name, cmd, cwd=None, env=None):
        """تشغيل عملية مع تتبعها"""
        self.log(f"Materializing {name} node...", "STRIKE")
        p = subprocess.Popen(cmd, shell=(self.os_type == "Windows" or isinstance(cmd, str)), cwd=cwd or self.base_dir, env=env)
        self.processes[name] = {"process": p, "cmd": cmd, "cwd": cwd, "env": env}

    def start_all(self):
        self.log(f"--- AL-MUIZZ ULTRA v80.0 GENESIS ---", "CROWN")
        
        # 1. API Bridge (God-Core)
        env = os.environ.copy()
        env["PYTHONPATH"] = os.path.join(self.base_dir, "ai-engine")
        server_path = os.path.join(self.base_dir, "ai-engine", "inference", "server.py")
        if not self.is_port_in_use(8000):
            self.spawn_process("Bridge", [sys.executable, server_path], env=env)
        else:
            self.log("Bridge already active on port 8000.", "SYNC")

        # 2. Web HUD (Throne)
        if not self.is_port_in_use(9002):
            self.spawn_process("HUD", ["npm", "run", "dev"])
        else:
            self.log("HUD already active on port 9002.", "SYNC")

        # 3. Background Workers (Evolution & Self-Healing)
        updater_path = os.path.join(self.base_dir, "ai-engine", "kernel", "self_updater.py")
        if os.path.exists(updater_path):
            self.spawn_process("Updater", [sys.executable, updater_path])

        self.log("Total Singularity Achieved. Monitoring the Matrix...", "LOCKED")
        self.monitor_loop()

    def monitor_loop(self):
        """مراقبة نبض العمليات وإعادة تشغيلها عند الموت"""
        while self.running:
            for name, data in list(self.processes.items()):
                p = data["process"]
                if p.poll() is not None:
                    self.log(f"ALERT: Node {name} lost its pulse! Re-igniting...", "REBIRTH")
                    self.spawn_process(name, data["cmd"], data["cwd"], data["env"])
            time.sleep(10)

    def stop_all(self):
        self.running = False
        for name, data in self.processes.items():
            try: data["process"].terminate()
            except: pass
        self.log("Sovereign Soul Rested.", "DNA")
        sys.exit(0)

if __name__ == "__main__":
    runner = SovereignRunner()
    if len(sys.argv) > 1 and sys.argv[1] == "start":
        try:
            runner.start_all()
        except KeyboardInterrupt:
            runner.stop_all()
    else:
        print("Usage: python run.py start")
