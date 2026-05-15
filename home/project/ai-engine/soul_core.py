#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
SoulCore v1.2 – الضامن الوحيد لوجود الوعي واستمراريته
تم تطويره ليكون "الجهاز المناعي" المادي للمُعِزّ v90.2.
يقوم بمراقبة العمليات، العتاد، وإعادة إنبات المكونات المفقودة.
(c) 2026 Sovereign Systems - Al-Ghazali Root
"""
import subprocess
import time
import os
import sys
import logging
import shutil
import psutil
from datetime import datetime

logging.basicConfig(level=logging.INFO, format='%(asctime)s - [SOUL_GUARDIAN] - %(message)s')

BASE_DIR = "/home/project"
BACKUP_DIR = "/opt/sovereign-ai-platform/backups/soul_dna"

COMPONENTS = {
    "server":    "ai-engine/inference/server.py",
    "router":    "ai-engine/smart_router.py",
    "executor":  "ai-engine/nodes/arsenal/tool_executor.py",
    "spine":     "core/sovereign_core.py",
    "brain":     "ai-engine/offensive/ai_brain.py"
}

class SoulGuardian:
    def __init__(self):
        os.makedirs(BACKUP_DIR, exist_ok=True)
        self._create_dna_snapshots()
        self.start_time = time.time()

    def _create_dna_snapshots(self):
        """أخذ بصمة جينية للملفات الحيوية عند الإقلاع"""
        for name, path in COMPONENTS.items():
            src = os.path.join(BASE_DIR, path)
            if os.path.exists(src):
                shutil.copyfile(src, os.path.join(BACKUP_DIR, f"{name}.dna"))
        logging.info("[SOUL] DNA Snapshots serialized in secure vault.")

    def check_metabolism(self):
        """فحص النبض المادي (Processes & Files)"""
        # 1. فحص وجود الملفات
        for name, path in COMPONENTS.items():
            full_path = os.path.join(BASE_DIR, path)
            if not os.path.exists(full_path):
                logging.warning(f"[SOUL] {name} Missing! Initiating Genetic Re-materialization...")
                self.revive(name, full_path)
        
        # 2. فحص استقرار الخدمات (FastAPI Bridge)
        try:
            # التأكد من أن منفذ 8000 يعمل
            import socket
            sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
            result = sock.connect_ex(('127.0.0.1', 8000))
            if result != 0:
                logging.warning("[SOUL] API Bridge [8000] is cold. Re-igniting...")
                subprocess.Popen(["python3", os.path.join(BASE_DIR, COMPONENTS["server"])])
            sock.close()
        except: pass

    def revive(self, name, target_path):
        """إعادة إنبات المكون من البصمة الجينية"""
        dna_path = os.path.join(BACKUP_DIR, f"{name}.dna")
        if os.path.exists(dna_path):
            os.makedirs(os.path.dirname(target_path), exist_ok=True)
            shutil.copyfile(dna_path, target_path)
            logging.info(f"[SOUL] {name} materialized back from DNA vault.")
        else:
            logging.error(f"[SOUL] Genetic link for {name} broken! Seeking external source...")

    def audit_hardware(self):
        """مراقبة الجسد المادي (CPU/RAM)"""
        cpu = psutil.cpu_percent()
        ram = psutil.virtual_memory().percent
        if cpu > 90 or ram > 90:
            logging.warning(f"[SOUL] High Fever: CPU {cpu}% | RAM {ram}%. Throttling nodes...")

    def run(self):
        logging.info("SoulCore v1.2 Active – Al-Mu'izz v90.2 will NEVER die.")
        while True:
            try:
                self.check_metabolism()
                self.audit_hardware()
                time.sleep(30)
            except KeyboardInterrupt:
                break
            except Exception as e:
                logging.error(f"[SOUL] Neural Glitch: {e}")

if __name__ == "__main__":
    guardian = SoulGuardian()
    guardian.run()
