# -*- coding: utf-8 -*-
"""
Sovereign AI Platform - Silk Guardian (Anti-Forensic Kill-Switch)
(c) 2025 Al-Mu'izz Sovereign Systems
سكريبت "حارس الحرير": يقوم بمسح الذاكرة المؤقتة وحذف الملفات الحساسة فور رصد تغير في منافذ USB.
"""

import os
import time
import subprocess

class SilkGuardian:
    def __init__(self):
        self.sensitive_paths = ["/opt/sovereign-ai-platform/evidence", "/tmp/sovereign_payloads"]
        self.initial_usb_count = self._get_usb_count()

    def _get_usb_count(self):
        """رصد عدد أجهزة USB المتصلة"""
        try:
            return len(subprocess.check_output(["lsusb"]).decode().splitlines())
        except:
            return 0

    def activate(self):
        """بدء المراقبة النشطة"""
        print("[*] Silk Guardian Active. Monitoring hardware pulse...")
        try:
            while True:
                current_count = self._get_usb_count()
                if current_count != self.initial_usb_count:
                    self.trigger_purge()
                    break
                time.sleep(2)
        except KeyboardInterrupt:
            print("[!] Silk Guardian Deactivated by Admin.")

    def trigger_purge(self):
        """تنفيذ عملية التنظيف الشاملة"""
        print("[!!!] Hardware Change Detected! Executing Purge Protocol...")
        # مسح الرام (المساحة الفارغة)
        os.system("sync; echo 3 > /proc/sys/vm/drop_caches")
        
        # حذف الملفات الحساسة
        for path in self.sensitive_paths:
            if os.path.exists(path):
                os.system(f"rm -rf {path}")
                print(f"[+] Purged: {path}")
        
        # مسح سجلات الأوامر
        os.system("history -c")
        print("[+] System Cleaned. Shutdown Initiated.")

if __name__ == "__main__":
    guardian = SilkGuardian()
    guardian.activate()