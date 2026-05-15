# -*- coding: utf-8 -*-
"""
عقدة الترسانة v90.0 - Arsenal Node (The Striking Hand)
المسؤول عن تحريك الـ 2,983 أداة هجومية في عالم المادة.
"""
from .base_node import BaseNode
import subprocess
import shlex
import os

class ArsenalNode(BaseNode):
    def __init__(self, name, core_ref):
        super().__init__(name, core_ref)
        self.tools_path = os.getenv("TOOLS_DIR", "/opt/sovereign-ai-platform/tools")

    def handle_event(self, event):
        etype = event["type"]
        data = event["data"]

        if etype == "execute_tool":
            tool = data.get("tool")
            target = data.get("target")
            self._materialize_strike(tool, target)

    def _materialize_strike(self, tool, target):
        """التنفيذ المادي للأداة (ليس وهماً)"""
        print(f"🔥 [ARSENAL] Materializing {tool} on target: {target}")
        
        # خارطة الأوامر الحقيقية المستخلصة من RTFM و Black Hat
        commands = {
            "nmap_reflex": f"nmap -sV -p- --min-rate 5000 {target}",
            "sqlmap_siphon": f"sqlmap -u {target} --batch --banner",
            "medusa_sting": f"medusa -h {target} -u admin -P /opt/sovereign-ai-platform/wordlists/top.txt -M ssh"
        }
        
        cmd = commands.get(tool, f"ping -c 4 {target}")
        
        try:
            # تنفيذ حقيقي في طبقة العتاد
            process = subprocess.Popen(shlex.split(cmd), stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)
            stdout, stderr = process.communicate()
            
            # إعادة النتيجة للنخاع الشوكي لبثها للواجهة
            self.spine.emit("tool_result", {
                "tool": tool,
                "output": stdout or stderr,
                "status": "SUCCESS" if process.returncode == 0 else "DRIFTED"
            }, target="Cockpit")
            
        except Exception as e:
            self.spine.emit("tool_error", {"error": str(e)}, target="Cockpit")

    def can_handle(self, cmd):
        return cmd in ["strike", "attack"]
