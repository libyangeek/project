# -*- coding: utf-8 -*-
"""
Al-Mu'izz Sovereign - DeviceHarvester
محرك اكتشاف الأجهزة: يحلل منافذ USB، يحدد أنواع الهواتف (Android/iOS)، ويقترح خطوات العمل.
(c) 2025 Sovereign Systems
"""

import subprocess
import json
import re

class DeviceHarvester:
    def detect_usb_devices(self):
        """رصد كافة أجهزة USB المتصلة حالياً"""
        try:
            output = subprocess.check_output(["lsusb"]).decode()
            devices = []
            for line in output.splitlines():
                devices.append({"raw": line, "type": "USB_GENERIC"})
            return devices
        except:
            return []

    def detect_mobile_devices(self):
        """تحديد الهواتف الذكية المتصلة (Android/iOS)"""
        mobiles = []
        
        # محاولة رصد أندرويد عبر ADB
        try:
            adb_out = subprocess.check_output(["adb", "devices", "-l"]).decode()
            for line in adb_out.splitlines()[1:]:
                if "device" in line and not line.startswith("*"):
                    mobiles.append({
                        "platform": "Android",
                        "id": line.split()[0],
                        "details": line,
                        "status": "READY"
                    })
        except: pass

        # محاولة رصد آيفون عبر libimobiledevice
        try:
            ios_out = subprocess.check_output(["idevice_id", "-l"]).decode()
            for udid in ios_out.splitlines():
                if udid:
                    mobiles.append({
                        "platform": "iOS",
                        "id": udid,
                        "details": "Apple Mobile Device Detected",
                        "status": "LOCKED/TRUST_REQUIRED"
                    })
        except: pass

        return mobiles

    def get_full_hardware_report(self):
        return {
            "usb_generic": self.detect_usb_devices(),
            "mobile_units": self.detect_mobile_devices(),
            "system_ports": self._get_open_ports()
        }

    def _get_open_ports(self):
        """رصد المنافذ المفتوحة على الجهاز المضيف"""
        try:
            output = subprocess.check_output(["ss", "-tulnp"]).decode()
            return output
        except: return "Unable to read ports."

if __name__ == "__main__":
    harvester = DeviceHarvester()
    print(json.dumps(harvester.get_full_hardware_report(), indent=4))
