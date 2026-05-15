# -*- coding: utf-8 -*-
from .base_node import BaseNode
import json
import time

class OmniNode(BaseNode):
    """
    العقدة الشاملة: منسق سلاسل الإبادة الكلية.
    """
    def handle_event(self, event):
        if event["type"] == "full_attack":
            target = event["data"].get("target")
            print(f"🔥 [OMNI] Initiating Blitzkrieg Strike on: {target}")
            
            # 1. المرحلة الأولى: الاستكشاف عصبياً
            self.core.emit("subdomain_scan", {"domain": target}, target="ReconNode")
            time.sleep(1)
            
            # 2. المرحلة الثانية: قصف المستودعات (Medusa)
            self.core.emit("medusa_scan", {"repo": target}, target="ArsenalNode")
            time.sleep(1)
            
            # 3. المرحلة الثالثة: جرد الأجهزة المحمولة المفتوحة
            self.core.emit("list_devices", {}, target="MobileNode")
            
            self.core.emit("attack_complete", {"target": target, "status": "SUBJUGATED"})
            print(f"✅ [OMNI] Target {target} is now a satellite node in your matrix.")

    def can_handle(self, cmd):
        return cmd in ["full_attack", "blitzkrieg", "attack"]
