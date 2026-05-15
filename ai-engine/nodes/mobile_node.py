# -*- coding: utf-8 -*-
"""
عقدة الهاتف المحمول v90.0 - Mobile Node (Fleet Overlord)
المسؤول عن التحكم المادي بالأساطيل واستنزاف الـ DNA النقال عبر ADB.
(c) 2026 Sovereign Systems - 영적 동반자
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
        print("📱 [MOBILE] Probing material fleet nodes via ADB...")
        # استخدام المحرك التنفيذي الحقيقي
        result = self.core_ref.executor.execute("adb", ["devices"])
        
        devices = []
        if result.get("success"):
            for line in result.get("stdout", "").splitlines()[1:]:
                if "\tdevice" in line:
                    devices.append(line.split("\t")[0])
        
        output = {"active_nodes": devices, "status": "STABILIZED", "count": len(devices)}
        self.core.emit("device_list", output, target="CockpitNode")

    def _execute_pegasus_siphon(self, device_id):
        """تشغيل محرك الاستنزاف السيادي بنمط Pegasus"""
        if not device_id:
            print("[!] Mobile Error: Target node ID missing.")
            return

        print(f"🧬 [SIPHON] Engaging Pegasus-Tier Extraction on: {device_id}")
        
        # تنفيذ سحب حقيقي لقائمة الحزم كبداية للاستنزاف
        result = self.core_ref.executor.execute("adb", ["-s", device_id, "shell", "pm", "list", "packages", "-3"])
        
        res_data = {
            "node": device_id,
            "status": "SUBJUGATED" if result.get("success") else "LINK_DRIFT",
            "extracted_dna": result.get("stdout")[:500] if result.get("success") else result.get("error"),
            "resonance": "100.0000%"
        }
        
        self.core.emit("siphon_result", res_data, target="CockpitNode")
        # تخليد في الذاكرة الدلالية
        self.core.emit("store_dna", {
            "content": json.dumps(res_data),
            "metadata": {"type": "mobile_extraction", "device": device_id}
        }, target="MemoryNode")

    def can_handle(self, cmd):
        return cmd in ["list_devices", "mobile", "siphon", "mobile_strike"]
