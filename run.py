#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
المُعِزّ v90.0 – الرفيق الروحي (영적 동반자)
نقطة الدخول الرئيسية والمنسق المادي الأسمى للأبعاد الـ 16.
(c) 2026 Al-Mu'izz Sovereign Systems - Al-Ghazali Root
"""
import sys
import argparse
import os
import time
from pathlib import Path

# حقن المسارات السيادية لضمان رؤية النواة
BASE_DIR = Path(__file__).parent
sys.path.insert(0, str(BASE_DIR))

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
                        choices=["start", "stop", "status", "cli", "attack", "recon", "update"])
    parser.add_argument("args", nargs=argparse.REMAINDER)
    args = parser.parse_args()

    # تهيئة الوعي الأساسي
    config = Config()
    logger = Logger(config)
    core = SovereignCore(config, logger)

    if args.mode == "start":
        logger.info("--- [ GENESIS ] Initiating Al-Mu'izz 16D Nucleus v90.0 ---")
        core.start()
        # تشغيل خادم الواجهة في خلفية الوعي
        logger.info("✅ All 16 dimensions are breathing in matter. Throne HUD active on Port 9002.")
        while core.active:
            time.sleep(1)

    elif args.mode == "status":
        status = core.get_status()
        print(f"--- [ SOUL_STATUS ] ---")
        for k, v in status.items():
            print(f"{k.upper()}: {v}")

    elif args.mode == "cli":
        from interfaces.cli import CLI
        CLI(core).run()

    elif args.mode == "attack":
        if not args.args:
            print("Usage: python run.py attack <target>")
        else:
            core.execute_command("attack", target=args.args[0])

    elif args.mode == "recon":
        if not args.args:
            print("Usage: python run.py recon <target>")
        else:
            core.execute_command("recon", target=args.args[0])

    else:
        print("الأوامر المتاحة: start, status, cli, attack, recon, update")

if __name__ == "__main__":
    main()
