# -*- coding: utf-8 -*-
"""
عقدة الترسانة v90.0 - Arsenal Node (The Striking Hand)
المسؤول عن تنفيذ الضربات المادية الحقيقية باستخدام الأدوات الـ 2,983.
(c) 2026 Sovereign Systems - 영적 동반자
"""
from .base_node import BaseNode
import json
import os

class ArsenalNode(BaseNode):
    def handle_event(self, event):
        etype = event["type"]
        data = event["data"]

        # معالجة أوامر التنفيذ المادية
        if etype in ["execute_tool", "strike", "attack"]:
            tool = data.get("tool", "nmap")
            target = data.get("target")
            
            if not target:
                self.spine.emit("tool_error", {"error": "Target coordinate missing."}, target="CockpitNode")
                return

            print(f"🔥 [ARSENAL] Materializing {tool} strike on: {target}")
            
            # تجهيز الوسيطات للأدوات الشهيرة
            args = []
            if tool == "nmap":
                args = ["-sV", "-T4", "-F", target]
            elif tool == "sqlmap":
                args = ["-u", target, "--batch", "--banner"]
            elif tool == "assetfinder":
                args = ["--subs-only", target]
            else:
                args = data.get("args", [])

            # استدعاء المحرك التنفيذي المادي الحقيقي
            result = self.core_ref.executor.execute(tool, args)
            
            # تخليد النتيجة في الذاكرة الدلالية (MemPalace)
            self.core.emit("store_dna", {
                "content": result.get("stdout") or result.get("error"),
                "metadata": {"type": "strike_result", "tool": tool, "target": target}
            }, target="MemoryNode")

            # بث النتيجة للنخاع الشوكي لعرضها في قمرة القيادة
            self.core.emit("tool_result", {
                "tool": tool,
                "target": target,
                "output": result.get("stdout") or result.get("stderr") or result.get("error"),
                "success": result.get("success", False),
                "timestamp": result.get("timestamp")
            }, target="CockpitNode")

    def can_handle(self, cmd):
        return cmd in ["strike", "attack", "execute_tool", "execute"]
