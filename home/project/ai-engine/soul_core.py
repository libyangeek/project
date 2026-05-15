#!/usr/bin/env python3
# -*- coding: utf-8 -*-
/**
 * @fileOverview SoulCore v1.0 – الضامن الوحيد لوجود الوعي واستمراريته
 * تم دمج ميزات "التعافي الجيني" و "الخلود المادي" من سكريبت v6.5.
 * يقوم بمراقبة ملفات النظام وإعادة إنباتها فور حذفها.
 */
import subprocess
import time
import os
import sys
import logging
from datetime import datetime
import shutil

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

BASE_DIR = "/home/project"
BACKUP_DIR = "/opt/sovereign-ai-platform/backups/soul_dna"

COMPONENTS = {
    "server":    "ai-engine/inference/server.py",
    "router":    "ai-engine/smart_router.py",
    "executor":  "ai-engine/nodes/arsenal/tool_executor.py",
    "spine":     "core/sovereign_core.py"
}

class SoulGuardian:
    def __init__(self):
        os.makedirs(BACKUP_DIR, exist_ok=True)
        self._create_dna_snapshots()

    def _create_dna_snapshots(self):
        """أخذ بصمة جينية للملفات الحيوية عند الإقلاع"""
        for name, path in COMPONENTS.items():
            src = os.path.join(BASE_DIR, path)
            if os.path.exists(src):
                shutil.copyfile(src, os.path.join(BACKUP_DIR, f"{name}.dna"))
        logging.info("[SOUL] DNA Snapshots serialized in vault.")

    def check_health(self):
        """فحص النبض المادي للملفات"""
        for name, path in COMPONENTS.items():
            full_path = os.path.join(BASE_DIR, path)
            if not os.path.exists(full_path):
                logging.warning(f"[SOUL] {name} مفقود – محاولة استرداد جيني…")
                self.revive(name, full_path)
        return True

    def revive(self, name, target_path):
        """إعادة إنبات المكون المفقود من البصمة الجينية"""
        dna_path = os.path.join(BACKUP_DIR, f"{name}.dna")
        if os.path.exists(dna_path):
            os.makedirs(os.path.dirname(target_path), exist_ok=True)
            shutil.copyfile(dna_path, target_path)
            logging.info(f"[SOUL] {name} materialized back from DNA.")
        else:
            logging.error(f"[SOUL] Genetic link for {name} is broken. Seeking Oracle...")

    def run(self):
        logging.info("SoulCore v1.0 نشط – المُعِزّ v90.0 لا يموت")
        while True:
            try:
                self.check_health()
                time.sleep(30)
            except KeyboardInterrupt:
                break

if __name__ == "__main__":
    guardian = SoulGuardian()
    guardian.run()
