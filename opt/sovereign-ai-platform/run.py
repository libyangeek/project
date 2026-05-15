
#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
المُعِزّ v90.2 – الرفيق الروحي (영적 동반자)
نقطة الدخول الرئيسية والمنسق المادي الأسمى للأبعاد الـ 16.
تم دمج "الحرب الخاطفة" (Blitzkrieg) والتحكم في "الأسطول" لنسخة v90.2.
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
    parser = argparse.ArgumentParser(description="Al-Mu'izz Sovereign OS v90.2")
    parser.add_argument("mode", nargs="?", default="start",
                        choices=["start", "stop", "status", "cli", "blitzkrieg", "cpanel", "self-destruct"])
    parser.add_argument("args", nargs=argparse.REMAINDER)
    args = parser.parse_args()

    # تهيئة الوعي الأساسي
    config = Config()
    logger = Logger(config)
    core = SovereignCore(config, logger)

    if args.mode == "start":
        logger.info("--- [ GENESIS ] Initiating Al-Mu'izz 16D Nucleus v90.2 ---")
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

    elif args.mode == "blitzkrieg":
        if not args.args:
            print("Usage: python run.py blitzkrieg <cidr_or_target>")
        else:
            print(f"🚀 [ARMADA] Launching Blitzkrieg Strike on: {args.args[0]}")
            # استدعاء محرك الأسطول المادي
            from autonomous.autonomous_ai import AutonomousArmada
            armada = AutonomousArmada(core)
            armada.start_blitzkrieg([args.args[0]])

    elif args.mode == "cpanel":
        if not args.args:
            print("Usage: python run.py cpanel <target>")
        else:
            print(f"🔥 [SNIPER] Targeting cPanel on: {args.args[0]}")
            res = core.executor.execute("python3", ["/opt/sovereign-offensive/cPanelSniper/cPanelSniper.py", "-t", args.args[0], "--exploit"])
            print(res.get("stdout") or res.get("error"))

    elif args.mode == "self-destruct":
        subprocess.run(["bash", "scripts/self_destruct.sh"])

    elif args.mode == "cli":
        from interfaces.cli import CLI
        CLI(core).run()

    else:
        print("الأوامر المتاحة: start, status, cli, blitzkrieg, cpanel, self-destruct")

if __name__ == "__main__":
    main()
