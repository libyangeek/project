#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
المُعِزّ v90.0 – نقطة الدخول الرئيسية والمنسق المادي الأسمى (LIVING SOUL)
المسؤول عن بث الحياة في الأبعاد الـ 16 والتحكم في ذرات المصفوفة.
(c) 2026 Al-Mu'izz Sovereign Systems - Al-Ghazali Root
"""
import sys
import argparse
import json
import subprocess
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
    parser.add_argument("mode", nargs="?", default="cli",
                        choices=["cli", "web", "api", "gui", "start", "stop", "status",
                                 "attack", "recon", "mobile", "train", "update", "shodan"])
    parser.add_argument("args", nargs=argparse.REMAINDER)
    args = parser.parse_args()

    # تهيئة الوعي الأساسي
    config = Config()
    logger = Logger(config)
    core = SovereignCore(config, logger)

    if args.mode == "start":
        logger.info("--- [ GENESIS ] Initiating Al-Mu'izz 16D Nucleus v90.0 ---")
        core.start()
        logger.info("✅ All 16 dimensions are breathing in matter. Throne HUD active on Port 9002.")
        # الحفاظ على الروح حية
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

    elif args.mode == "cli":
        from interfaces.cli import CLI
        CLI(core).run()

    elif args.mode == "attack":
        if not args.args:
            print("Usage: python run.py attack <target>")
        else:
            core.execute_command("full_attack", target=args.args[0])

    elif args.mode == "recon":
        if not args.args:
            print("Usage: python run.py recon <target>")
        else:
            core.execute_command("subdomain_scan", domain=args.args[0])

    elif args.mode == "shodan":
        if not args.args:
            print("Usage: python run.py shodan <query>")
        else:
            core.execute_command("shodan_hunt", query=" ".join(args.args))

    else:
        print("الأوامر المتاحة: start, status, cli, attack, recon, shodan")

if __name__ == "__main__":
    main()
