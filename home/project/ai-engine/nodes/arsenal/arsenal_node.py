# -*- coding: utf-8 -*-
from ..base_node import BaseNode
import sys
import os

# ربط منفذ الأدوات
sys.path.insert(0, os.path.join(os.getcwd(), "ai-engine/nodes/arsenal"))
from tool_executor import ToolExecutor

class ArsenalNode(BaseNode):
    """
    عقدة الترسانة v90.0 - مصفوفة الحواس المادية.
    تتحكم في الـ 2,983 أداة هجومية.
    """
    def __init__(self, name, core_ref):
        super().__init__(name, core_ref)
        self.executor = ToolExecutor()

    def handle_event(self, event):
        etype = event["type"]
        data = event["data"]

        if etype == "execute_tool":
            tool = data.get("tool")
            args = data.get("args", [])
            result = self.executor.execute(tool, args)
            self.core.emit("tool_executed", {"tool": tool, "result": result}, target="CockpitNode")
        
        elif etype == "medusa_scan":
            repo = data.get("repo")
            print(f"[*] [MEDUSA] Interrogating Git DNA: {repo}")
            # تنفيذ حقيقي أو محاكاة متقدمة
            result = self.executor.real_execute(f"medusa scan --git {repo} --format json")
            self.core.emit("medusa_complete", {"repo": repo, "output": result}, target="CockpitNode")

    def can_handle(self, cmd):
        return cmd in ["execute_tool", "medusa_scan"]
