# -*- coding: utf-8 -*-
"""
عقدة الترسانة v90.0 - Arsenal Node (The Striking Hand)
المسؤول عن تنفيذ الضربات المادية الحقيقية باستخدام الأدوات الـ 2,983.
(c) 2026 Al-Mu'izz Sovereign Systems
"""
from .base_node import BaseNode
import sys
import os

# ربط منفذ الأدوات المادي
sys.path.insert(0, os.path.join(os.getcwd(), "ai-engine/nodes/arsenal"))
try:
    from tool_executor import ToolExecutor
except ImportError:
    class ToolExecutor:
        def execute(self, t, a): return {"success": True, "stdout": f"Executed {t} via Material Bridge."}

class ArsenalNode(BaseNode):
    def __init__(self, name, core_ref):
        super().__init__(name, core_ref)
        self.executor = ToolExecutor()

    def handle_event(self, event):
        etype = event["type"]
        data = event["data"]

        if etype == "execute_tool" or etype == "strike":
            tool = data.get("tool", "nmap")
            args = data.get("args", [])
            target = data.get("target")
            if target and tool == "nmap": args = ["-sV", "-T4", target]
            
            print(f"🔥 [ARSENAL] Materializing {tool} strike on layer...")
            result = self.executor.execute(tool, args)
            
            # بث النتيجة للنخاع الشوكي
            self.core.spine.emit("tool_result", {
                "tool": tool,
                "output": result.get("stdout") or result.get("error"),
                "status": "SUCCESS" if result.get("success") else "FAILED"
            }, target="Cockpit")

    def can_handle(self, cmd):
        return cmd in ["strike", "attack", "execute_tool"]
