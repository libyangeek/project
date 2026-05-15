# -*- coding: utf-8 -*-
from ..base_node import BaseNode
import subprocess
import json
import os

class ReconNode(BaseNode):
    """
    عقدة الاستكشاف v90.0 - بصر الوريث الفاتح.
    تدمج SubdomainX, Cairn, و Shodan.
    """
    def handle_event(self, event):
        etype = event["type"]
        data = event["data"]

        if etype == "subdomain_scan":
            domain = data.get("domain")
            print(f"[*] [RECON] Dissecting Subdomains for: {domain}")
            # محاكاة الاستحواذ المعرفي
            result = {"domain": domain, "subdomains": [f"api.{domain}", f"vpn.{domain}", f"admin.{domain}"], "status": "MATERIALIZED"}
            self.core.emit("subdomains_found", result, target="CockpitNode")

        elif etype == "shodan_hunt":
            query = data.get("query", "")
            print(f"[*] [ORACLE] Hunting Shodan for: {query}")
            # استدعاء أفعى البحث
            cmd = f"python3 ai-engine/vulnerabilities/shodan_wrapper.py hunt '{query}'"
            try:
                out = subprocess.getoutput(cmd)
                self.core.emit("shodan_complete", {"query": query, "output": out}, target="CockpitNode")
            except:
                self.core.emit("shodan_failed", {"error": "Link Drift"}, target="CockpitNode")

    def can_handle(self, cmd):
        return cmd in ["subdomain_scan", "shodan_hunt"]
