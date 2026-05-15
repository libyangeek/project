# -*- coding: utf-8 -*-
"""
عقدة الاستكشاف v90.0 - Recon Node (The Global Eye)
المسؤول عن استجواب الأرشيفات واستخراج الـ DNA الرقمي للأهداف.
تدمج العراف (Oracle) مع أدوات الاستطلاع المادية.
(c) 2026 Sovereign Systems - 영적 동반자
"""
from .base_node import BaseNode
import json
import os
import sys

class ReconNode(BaseNode):
    def handle_event(self, event):
        etype = event["type"]
        data = event["data"]

        # 1. البحث في العراف (Oracle)
        if etype == "vulnerability_scan" or etype == "oracle_consult":
            query = data.get("query") or data.get("target")
            self._consult_oracle(query)

        # 2. الاستطلاع المادي (Subdomain Scan)
        elif etype == "subdomain_scan" or etype == "recon":
            target = data.get("target") or data.get("domain")
            self._execute_physical_recon(target)

    def _consult_oracle(self, query):
        """استشارة عراف الثغرات المادي"""
        print(f"👁️ [ORACLE] Interrogating material archives for: {query}")
        from vulnerabilities.cve_hunter import CVEHunter
        hunter = CVEHunter()
        report = hunter.search_matrix(query)
        
        self.core.emit("oracle_result", report, target="CockpitNode")

    def _execute_physical_recon(self, target):
        """بدء سلسلة الاستكشاف المادية باستخدام assetfinder"""
        print(f"🐍 [RECON] Siphoning Subdomain DNA for: {target}")
        
        # تنفيذ حقيقي باستخدام ToolExecutor
        result = self.core_ref.executor.execute("assetfinder", ["--subs-only", target])
        
        subs = result.get("stdout", "").splitlines()
        output = {
            "target": target,
            "subdomains": subs[:30],
            "status": "MATERIALIZED",
            "count": len(subs),
            "timestamp": result.get("timestamp")
        }
        
        self.core.emit("recon_result", output, target="CockpitNode")
        
        # تخليد في الذاكرة GEPA
        self.core.emit("store_dna", {
            "content": json.dumps(output),
            "metadata": {"type": "recon_intel", "target": target}
        }, target="MemoryNode")

    def can_handle(self, cmd):
        return cmd in ["subdomain_scan", "recon", "oracle_consult", "scan", "vulnerability_scan"]
