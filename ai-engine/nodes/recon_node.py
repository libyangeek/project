# -*- coding: utf-8 -*-
"""
عقدة الاستكشاف v90.0 - Recon Node (The Global Eye)
المسؤول عن استجواب الأرشيفات واستخراج الـ DNA الرقمي للأهداف.
"""
from .base_node import BaseNode
import json

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
        
        # تنفيذ حقيقي باستخدام assetfinder
        result = self.core_ref.executor.execute("assetfinder", ["--subs-only", target])
        subs = result.get("stdout", "").splitlines()
        
        output = {
            "target": target,
            "subdomains": subs[:20],
            "status": "MATERIALIZED",
            "count": len(subs)
        }
        
        self.core.emit("recon_result", output, target="CockpitNode")
        
        # تخليد في الذاكرة GEPA
        self.core.emit("store_dna", {
            "content": json.dumps(output),
            "metadata": {"type": "recon_intel", "target": target}
        }, target="MemoryNode")

    def _hunt_shodan(self, query):
        print(f"🐍 [ORACLE] Hunting Shodan for DNA: {query}")
        # استدعاء أفعى البحث (Wrapper)
        result = self.core_ref.executor.execute("python3", ["ai-engine/vulnerabilities/shodan_wrapper.py", "hunt", query])
        self.core.emit("shodan_result", result.get("stdout"), target="CockpitNode")

    def can_handle(self, cmd):
        return cmd in ["subdomain_scan", "recon", "shodan_hunt", "scan"]
