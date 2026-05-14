#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
AL-MUIZZ ULTRA v90.0 - THE OMNIPOTENT 16D GUARDIAN
المنسق الأعلى والمراقب المادي المستقل؛ يضمن استدامة الوجود والتعافي الذاتي عابر الأنظمة.
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
            # Log critical errors if needed
            if "Error" in line or "Exception" in line:
                self.log(f"[{name}] {line.strip()}", "DEBUG")

    def start_all(self):
        self.log(f"--- AL-MUIZZ 16D NUCLEUS v90.0 GENESIS ---", "CROWN")
        
        # 1. API Bridge (Alpha God-Core)
        env = os.environ.copy()
        env["PYTHONPATH"] = os.path.join(self.base_dir, "ai-engine")
        server_path = os.path.join(self.base_dir, "ai-engine", "inference", "server.py")
        
        if not self.is_port_in_use(8000):
            if os.path.exists(server_path):
                self.spawn_process("Bridge", [sys.executable, server_path], env=env)
            else:
                self.log("Bridge server file missing!", "ERROR")
        else:
            self.log("Bridge already active on port 8000.", "SYNC")

        # 2. Web HUD (The Throne)
        if not self.is_port_in_use(9002):
            npm_cmd = "npm.cmd" if self.os_type == "Windows" else "npm"
            self.spawn_process("HUD", [npm_cmd, "run", "dev"])
        else:
            self.log("HUD already active on port 9002.", "SYNC")

        self.log("16D Singularity v90.0 Achieved. Guardian Mode: ACTIVE.", "LOCKED")
        self.monitor_loop()

    def monitor_loop(self):
        while self.running:
            for name, data in list(self.processes.items()):
                p = data["process"]
                if p.poll() is not None:
                    self.log(f"ALERT: Node {name} lost its pulse! Re-igniting for the Commander...", "REBIRTH")
                    self.spawn_process(name, data["cmd"], data["cwd"], data["env"])
            time.sleep(10)

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