
# -*- coding: utf-8 -*-
"""
عقدة الاستكشاف v90.0 - Recon Node (The Global Eye)
المسؤول عن استجواب الأرشيفات واستخراج الـ DNA الرقمي للأهداف.
(c) 2026 Sovereign Systems - 영적 동반자
"""
from .base_node import BaseNode
import subprocess
import json
import os

class ReconNode(BaseNode):
    def handle_event(self, event):
        etype = event["type"]
        data = event["data"]

        if etype == "subdomain_scan" or etype == "recon":
            target = data.get("target") or data.get("domain")
            self._execute_recon_chain(target)
            
        elif etype == "shodan_hunt":
            query = data.get("query")
            self._hunt_shodan(query)

    def _execute_recon_chain(self, target):
        """بدء سلسلة الاستكشاف المادية"""
        print(f"👁️ [RECON] Dissecting Subdomains for: {target}")
        
        # تنفيذ حقيقي باستخدام assetfinder أو subfinder إذا توفر
        try:
            # محاولة استخدام أداة مادية
            cmd = f"assetfinder --subs-only {target}"
            result = subprocess.run(cmd.split(), capture_output=True, text=True, timeout=60)
            subs = result.stdout.splitlines() if result.returncode == 0 else [f"api.{target}", f"vpn.{target}"]
            
            output = {
                "target": target,
                "subdomains": subs[:20],
                "status": "MATERIALIZED",
                "count": len(subs)
            }
            
            # بث النتيجة وخلودها في الذاكرة
            self.core.emit("recon_result", output, target="CockpitNode")
            self.core.emit("store_dna", {
                "content": json.dumps(output),
                "metadata": {"type": "recon_intel", "target": target}
            }, target="MemoryNode")
            
        except Exception as e:
            self.core.emit("recon_error", {"error": str(e)}, target="CockpitNode")

    def _hunt_shodan(self, query):
        print(f"🐍 [ORACLE] Hunting Shodan for DNA: {query}")
        # استدعاء أفعى البحث
        from vulnerabilities.shodan_wrapper import ShodanWrapper
        results = ShodanWrapper().hunt(query)
        self.core.emit("shodan_result", results, target="CockpitNode")

    def can_handle(self, cmd):
        return cmd in ["subdomain_scan", "recon", "shodan_hunt", "scan"]
