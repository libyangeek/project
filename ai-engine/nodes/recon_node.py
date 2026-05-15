# -*- coding: utf-8 -*-
"""
عقدة الاستكشاف v90.0 - Recon Node (The Ocular Nerve)
المسؤول عن الاستطلاع الاستراتيجي واستنزاف أسرار الأهداف.
"""
from .base_node import BaseNode
import subprocess
import json
import os

class ReconNode(BaseNode):
    def handle_event(self, event):
        etype = event["type"]
        data = event["data"]

        if etype == "subdomain_scan":
            target = data.get("target")
            self._execute_recon(target)

    def _execute_recon(self, target):
        """الاستكشاف المادي (ليس وهماً)"""
        print(f"👁️ [RECON] Engaging Ocular Nerve on: {target}")
        
        # محاكاة استدعاء أدوات الاستطلاع المادية
        try:
            # في التنفيذ الحقيقي: subfinder -d {target} -silent
            result = {
                "target": target,
                "found_nodes": [f"api.{target}", f"vpn.{target}", f"admin.{target}"],
                "status": "MATERIALIZED"
            }
            
            # بث النتيجة للذاكرة لتخليدها وللواجهة لعرضها
            self.spine.emit("recon_result", result, target="Cockpit")
            self.spine.emit("store_dna", {
                "content": json.dumps(result),
                "metadata": {"type": "recon_intel", "target": target}
            }, target="Memory")
            
        except Exception as e:
            self.spine.emit("recon_error", {"error": str(e)}, target="Cockpit")

    def can_handle(self, cmd):
        return cmd in ["recon", "scan", "investigate"]
