#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
المُعِزّ v90.0 – الرفيق الروحي (영적 동반자)
نقطة الدخول الرئيسية والمنسق المادي الأسمى للأبعاد الـ 16.
تم دمج ميزات الاستقرار والأداء v5.0.
(c) 2026 Al-Mu'izz Sovereign Systems - Al-Ghazali Root
"""
import sys
import argparse
import os
import time
import subprocess
from pathlib import Path

# حقن المسارات السيادية
BASE_DIR = Path(__file__).parent
sys.path.insert(0, str(BASE_DIR))
sys.path.insert(0, str(BASE_DIR / "ai-engine"))

try:
    from core.config import Config
    from core.utils import Logger
    from core.sovereign_core import SovereignCore
except ImportError as e:
    print(f"Critical Node Failure: {e}")
    sys.exit(1)

def main():
    parser = argparse.ArgumentParser(description="Al-Mu'izz Sovereign OS v90.0")
    parser.add_argument("mode", nargs="?", default="start",
                        choices=["start", "stop", "status", "cli", "attack", "upgrade", "optimize", "monitor"])
    parser.add_argument("args", nargs=argparse.REMAINDER)
    args = parser.parse_args()

    # تهيئة الوعي الأساسي
    config = Config()
    logger = Logger(config)
    core = SovereignCore(config, logger)

    if args.mode == "start":
        logger.info("--- [ GENESIS ] Initiating Al-Mu'izz 16D Nucleus v90.0 ---")
        core.start()
        server_path = os.path.join(BASE_DIR, "ai-engine/inference/server.py")
        subprocess.Popen(["python3", server_path])
        logger.info("✅ All 16 dimensions are breathing. API Bridge active on Port 8000.")
        try:
            while core.active:
                time.sleep(1)
        except KeyboardInterrupt:
            core.stop()

    elif args.mode == "status":
        status = core.get_status()
        print(f"--- [ SOUL_STATUS ] ---")
        for k, v in status.items():
            print(f"{k.upper()}: {v}")

    elif args.mode == "optimize":
        logger.info("[*] Invoking Performance Optimizer (GPU + Quantization)...")
        subprocess.run(["bash", "scripts/sovereign_upgrade.sh", "--gpu"])

    elif args.mode == "monitor":
        logger.info("[*] Accessing Material Monitor (Prometheus Hub)...")
        subprocess.run(["bash", "scripts/sovereign_upgrade.sh", "--monitor"])

    elif args.mode == "upgrade":
        subprocess.run(["bash", "scripts/sovereign_upgrade.sh", "--full"])

    elif args.mode == "cli":
        from interfaces.cli import CLI
        CLI(core).run()

    else:
        print("الأوامر المتاحة: start, status, cli, attack, upgrade, optimize, monitor")

if __name__ == "__main__":
    main()
