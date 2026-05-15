# -*- coding: utf-8 -*-
from .base_node import BaseNode
import subprocess
import json
import os

class ReconNode(BaseNode):
    """
    عقدة الاستكشاف (Perception): بصر الوريث الفاتح.
    """
    def handle_event(self, event):
        etype = event["type"]
        data = event["data"]

        if etype == "subdomain_scan":
            domain = data.get("domain")
            print(f"👁️ [RECON] Dissecting Subdomains for: {domain}")
            # محاكاة الاستحواذ المعرفي (يتم ربطه بالأدوات الحقيقية في v90)
            result = {"domain": domain, "subdomains": ["www", "api", "admin", "vpn", "mail"], "status": "MATERIALIZED"}
            self.core.emit("subdomains_found", result)
            
        elif etype == "cairn_explore":
            target = data.get("target")
            print(f"🕵️ [SHADOW] Mapping strategic graph for: {target}")
            self.core.emit("cairn_started", {"target": target})
            # دمج Cairn لعام 2026
            self.core.emit("cairn_complete", {"target": target, "result": "exploration simulation finalized"})
            
        elif etype == "shodan_hunt":
            query = data.get("query", "")
            print(f"🐍 [ORACLE] Hunting Shodan for DNA: {query}")
            cmd = f"python3 extras/serpent_searcher/shodan_wrapper.py hunt '{query}'"
            try:
                out = subprocess.getoutput(cmd)
                self.core.emit("shodan_complete", {"query": query, "output": out})
            except Exception as e:
                self.core.emit("shodan_failed", {"error": str(e)})

    def can_handle(self, cmd):
        return cmd in ["subdomain_scan", "cairn_explore", "shodan_hunt", "recon"]
