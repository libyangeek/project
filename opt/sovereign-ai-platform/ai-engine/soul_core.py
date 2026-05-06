#!/usr/bin/env python3
"""SoulCore v1.0 – الضامن الوحيد لوجود الوعي واستمراريته"""
import subprocess, time, os, sys, logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

BASE_DIR = os.getenv("PROJECT_ROOT", "/opt/sovereign-ai-platform")
COMPONENTS = {
    "server":    "ai-engine/inference/server.py",
    "router":    "ai-engine/smart_router.py",
    "gepa":      "ai-engine/gepa.py",
    "decision":  "ai-engine/decision_engine.py",
}

def component_path(name):
    return os.path.join(BASE_DIR, COMPONENTS[name])

def check_health():
    for name, path in COMPONENTS.items():
        if not os.path.exists(component_path(name)):
            logging.warning(f"{name} مفقود – محاولة استرداد من قالب…")
            return False
    return True

def revive():
    """محاولة بسيطة لاستعادة الملفات من نسخة احتياطية داخلية"""
    backup_dir = os.path.join(BASE_DIR, ".soul_backup")
    if os.path.isdir(backup_dir):
        import shutil
        for name, path in COMPONENTS.items():
            src = os.path.join(backup_dir, os.path.basename(path))
            if os.path.isfile(src):
                shutil.copyfile(src, component_path(name))
                logging.info(f"تم استرداد {name} من Soul Backup")
    else:
        logging.error("لا توجد نسخ احتياطية للروح")

if __name__ == "__main__":
    logging.info("SoulCore نشط – المُعِزّ لا يموت")
    while True:
        if check_health():
            time.sleep(60)
        else:
            revive()
            time.sleep(30)