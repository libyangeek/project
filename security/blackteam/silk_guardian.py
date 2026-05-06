# -*- coding: utf-8 -*-
"""
Sovereign AI Platform - Silk Guardian (v50.0 Anti-Forensic)
(c) 2026 Al-Mu'izz Sovereign Systems
حارس الحرير: حماية العتاد والتطهير الذاتي الفوري.
"""
import os, time, subprocess, sys

class SilkGuardian:
    def __init__(self):
        self.sensitive_paths = ["/opt/sovereign-ai-platform/evidence", "/tmp/sovereign_war_spoils"]
        self.initial_usb_count = self._get_usb_count()

    def _get_usb_count(self):
        try:
            return len(subprocess.check_output(["lsusb"]).decode().splitlines())
        except: return 0

    def trigger_purge(self):
        print("[!!!] SECURITY BREACH OR HARDWARE TAMPER DETECTED! INITIATING PURGE...")
        os.system("sync; echo 3 > /proc/sys/vm/drop_caches")
        for p in self.sensitive_paths:
            if os.path.exists(p): os.system(f"rm -rf {p}")
        os.system("history -c; rm -f ~/.bash_history")
        print("[+] System Purged. Sovereign Ghost Mode Active.")

    def run(self):
        print("[*] Silk Guardian v50.0 Active. Protecting the Soul...")
        try:
            while True:
                if self._get_usb_count() != self.initial_usb_count:
                    self.trigger_purge()
                    break
                time.sleep(2)
        except KeyboardInterrupt: pass

if __name__ == "__main__":
    guardian = SilkGuardian()
    guardian.run()
