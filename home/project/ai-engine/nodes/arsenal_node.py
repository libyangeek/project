# -*- coding: utf-8 -*-
"""
عقدة الترسانة v90.0 - Arsenal Node (The Striking Hand)
المسؤول عن تنفيذ الضربات المادية الحقيقية باستخدام الأدوات الـ 2,983.
"""
from .base_node import BaseNode
import subprocess
import shlex
import os

class ArsenalNode(BaseNode):
    def handle_event(self, event):
        etype = event["type"]
        data = event["data"]

        if "execute" in etype or etype == "strike" or etype == "execute_tool":
            tool = data.get("tool", "nmap")
            target = data.get("target", "127.0.0.1")
            self._materialize_strike(tool, target)

    def _materialize_strike(self, tool, target):
        """التنفيذ المادي للأداة في طبقة العتاد"""
        print(f"🔥 [ARSENAL] Materializing strike: {tool} on {target}")
        
        # خارطة الأوامر الحقيقية
        commands = {
            "nmap": f"nmap -sV -T4 {target}",
            "sqlmap": f"sqlmap -u {target} --batch",
            "medusa": f"medusa -h {target} -u admin -P wordlist.txt -M ssh"
        }
        
        cmd = commands.get(tool, f"ping -c 4 {target}")
        
        try:
            # تنفيذ حقيقي
            process = subprocess.Popen(shlex.split(cmd), stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)
            stdout, stderr = process.communicate()
            
            # بث النتيجة للنخاع الشوكي
            self.spine.emit("tool_result", {
                "tool": tool,
                "output": stdout or stderr,
                "status": "SUCCESS" if process.returncode == 0 else "DRIFTED"
            })
            
        except Exception as e:
            self.spine.emit("tool_error", {"error": str(e)})

    def can_handle(self, cmd):
        return cmd in ["strike", "attack", "execute", "execute_tool"]
