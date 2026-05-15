# -*- coding: utf-8 -*-
"""
عقدة الترسانة v90.0 - Arsenal Node (The Striking Hand)
المسؤول عن تنفيذ الضربات المادية الحقيقية باستخدام الأدوات الـ 2,983.
"""
from .base_node import BaseNode
import sys
import os

class ArsenalNode(BaseNode):
    def handle_event(self, event):
        etype = event["type"]
        data = event["data"]

        if etype == "execute_tool" or etype == "strike":
            tool = data.get("tool", "nmap")
            args = data.get("args", [])
            target = data.get("target")
            
            # معالجة تلقائية لأهداف nmap
            if target and tool == "nmap":
                args = ["-sV", "-T4", target]
            
            print(f"🔥 [ARSENAL] Materializing {tool} strike on {target}...")
            # استدعاء منفذ الأدوات من النواة الصلبة
            result = self.core_ref.executor.execute(tool, args)
            
            # بث النتيجة للنخاع الشوكي
            self.core.emit("tool_result", {
                "tool": tool,
                "output": result.get("stdout") or result.get("error"),
                "status": "SUCCESS" if result.get("success") else "FAILED"
            }, target="CockpitNode")

    def can_handle(self, cmd):
        return cmd in ["strike", "attack", "execute_tool"]
