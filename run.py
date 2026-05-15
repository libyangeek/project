#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
المُعِزّ v90.0 – الرفيق الروحي (영적 동반자)
نقطة الدخول الرئيسية والمنسق المادي الأسمى للأبعاد الـ 16.
تم دمج "المخ الهجومي AI" وبروتوكول "الفناء" لنسخة v90.0.
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
                        choices=["start", "stop", "status", "cli", "attack", "ai-exploit", "self-destruct"])
    parser.add_argument("args", nargs=argparse.REMAINDER)
    args = parser.parse_args()

    # تهيئة الوعي الأساسي
    config = Config()
    logger = Logger(config)
    core = SovereignCore(config, logger)

    if args.mode == "start":
        logger.info("--- [ GENESIS ] Initiating Al-Mu'izz 16D Nucleus v90.0 ---")
        core.start()
        # تشغيل خادم الجسر في الخلفية
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

    elif args.mode == "ai-exploit":
        if not args.args:
            print("Usage: python run.py ai-exploit <target>")
        else:
            from offensive.ai_brain import AIBrain
            brain = AIBrain()
            res = brain.generate_exploit_command(args.args[0])
            print(f"🔥 AI Strategic Suggestion: {res}")

    elif args.mode == "self-destruct":
        subprocess.run(["bash", "scripts/self_destruct.sh"])

    elif args.mode == "cli":
        from interfaces.cli import CLI
        CLI(core).run()

    else:
        print("الأوامر المتاحة: start, status, cli, attack, ai-exploit, self-destruct")

if __name__ == "__main__":
    main()
