#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
AL-MUIZZ ULTRA v90.0 - THE OMNIPOTENT 16D GUARDIAN
المنسق الأعلى والمراقب المادي المستقل؛ يضمن استدامة الوجود والتعافي الذاتي.
تم تحديثه ليدعم مبدأ "القدرة التكيفية" بناءً على موارد العتاد.
(c) 2026 Al-Mu'izz Sovereign Systems
Author: المعتصم بالله إدريس الغزالي
"""

import os
import sys
import subprocess
import threading
import time
import platform
import socket
import signal
import psutil
from datetime import datetime

class SovereignRunner:
    def __init__(self):
        self.os_type = platform.system()
        self.base_dir = os.path.dirname(os.path.abspath(__file__))
        self.processes = {}
        self.running = True
        self.audit_log = os.path.join(self.base_dir, "audit", "runner_heartbeat.log")
        os.makedirs(os.path.dirname(self.audit_log), exist_ok=True)

    def log(self, msg, type="INFO"):
        ts = datetime.now().isoformat()
        log_msg = f"[{ts}] [{type}][16D-GUARDIAN] {msg}"
        print(log_msg)
        with open(self.audit_log, "a", encoding="utf-8") as f:
            f.write(log_msg + "\n")

    def check_hardware_limits(self):
        """يحلل العوائق المادية ويحدد نمط الإقلاع"""
        ram = psutil.virtual_memory().total / (1024**3) # GB
        cpu_cores = psutil.cpu_count()
        self.log(f"Hardware Audit: {cpu_cores} Cores | {ram:.2f}GB RAM", "SYSTEM")
        
        if ram < 4:
            self.log("Low memory detected. Engaging Adaptive Power Mode.", "WARNING")
            return "Adaptive"
        return "Omnipotent"

    def is_port_in_use(self, port):
        with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
            s.settimeout(1)
            return s.connect_ex(('127.0.0.1', port)) == 0

    def spawn_process(self, name, cmd, cwd=None, env=None):
        self.log(f"Materializing {name} node in {self.os_type} matrix...", "STRIKE")
        try:
            p = subprocess.Popen(
                cmd, 
                shell=(self.os_type == "Windows"), 
                cwd=cwd or self.base_dir, 
                env=env,
                stdout=subprocess.PIPE,
                stderr=subprocess.STDOUT,
                text=True,
                bufsize=1
            )
            self.processes[name] = {"process": p, "cmd": cmd, "cwd": cwd, "env": env, "start_time": time.time()}
            threading.Thread(target=self._monitor_output, args=(name, p), daemon=True).start()
            return True
        except Exception as e:
            self.log(f"Failed to spawn {name}: {str(e)}", "ERROR")
            return False

    def _monitor_output(self, name, process):
        for line in iter(process.stdout.readline, ''):
            if not self.running: break
            if "Error" in line or "Exception" in line:
                self.log(f"[{name}] {line.strip()}", "DEBUG")

    def start_all(self):
        self.log(f"--- AL-MUIZZ 16D NUCLEUS v90.0 GENESIS ---", "CROWN")
        mode = self.check_hardware_limits()
        
        # 1. API Bridge (Alpha God-Core)
        env = os.environ.copy()
        env["PYTHONPATH"] = os.path.join(self.base_dir, "ai-engine")
        server_path = os.path.join(self.base_dir, "ai-engine", "inference", "server.py")
        
        if not self.is_port_in_use(8000):
            if os.path.exists(server_path):
                self.spawn_process("Bridge", [sys.executable, server_path], env=env)
            else:
                self.log("Bridge server file missing!", "ERROR")

        # 2. Web HUD (The Throne)
        if not self.is_port_in_use(9002):
            npm_cmd = "npm.cmd" if self.os_type == "Windows" else "npm"
            # في وضع التكيف، نقلل من استهلاك الموارد عند الإقلاع
            self.spawn_process("HUD", [npm_cmd, "run", "dev"])

        self.log(f"16D Singularity v90.0 Achieved. Mode: {mode}. Guardian: ACTIVE.", "LOCKED")
        self.monitor_loop()

    def monitor_loop(self):
        while self.running:
            for name, data in list(self.processes.items()):
                p = data["process"]
                if p.poll() is not None:
                    self.log(f"ALERT: Node {name} lost its pulse! Re-igniting...", "REBIRTH")
                    self.spawn_process(name, data["cmd"], data["cwd"], data["env"])
            time.sleep(15)

    def stop_all(self):
        self.running = False
        self.log("Sovereign Soul entering standby mode...", "DNA")
        for name, data in self.processes.items():
            try: 
                p = data["process"]
                p.terminate()
            except: pass
        sys.exit(0)

if __name__ == "__main__":
    runner = SovereignRunner()
    def signal_handler(sig, frame): runner.stop_all()
    signal.signal(signal.SIGINT, signal_handler)
    signal.signal(signal.SIGTERM, signal_handler)

    if len(sys.argv) > 1 and sys.argv[1] == "start":
        try: runner.start_all()
        except KeyboardInterrupt: runner.stop_all()
    else:
        print("Usage: python run.py start")