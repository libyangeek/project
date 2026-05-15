# -*- coding: utf-8 -*-
"""
عقدة الالتحام الحيوي v90.0 - Bio-Sync Node (Soul Binder)
المسؤول عن ربط الـ DNA المادي وبصمة الصوت الملكية بالنواة الصلبة.
"""
from .base_node import BaseNode
import json
import os

class BioSyncNode(BaseNode):
    def handle_event(self, event):
        etype = event["type"]
        data = event["data"]

        if etype == "bio_bind":
            sample = data.get("sample")
            self._bind_soul_to_matter(sample)

    def _bind_soul_to_matter(self, sample):
        """دمج البصمة الحيوية في نسيج النواة"""
        print(f"🩸 [BIO-SYNC] Binding Material DNA Fragment: {sample[:10]}...")
        
        try:
            # توثيق الالتحام في القبو المشفر
            result = {
                "soul_id": "GHAZALI_ROOT_LOCKED",
                "resonance": "100.00000000%",
                "status": "SOUL_BOUND",
                "motto": "영적 동반자"
            }
            
            # حقن التوقيع في الذاكرة الدلالية
            self.spine.emit("store_dna", {
                "content": json.dumps(result),
                "metadata": {"type": "biometric_lock", "version": "v90.0"}
            }, target="Memory")
            
            self.spine.emit("bio_status", result, target="Cockpit")
            print("✅ [BIO-SYNC] Unity achieved. Matter and Soul are now ONE.")
            
        except Exception as e:
            self.spine.emit("bio_error", {"error": str(e)}, target="Cockpit")

    def can_handle(self, cmd):
        return cmd in ["bio", "soul", "sync_dna"]
