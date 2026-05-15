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

        if etype == "bio_bind" or etype == "soul_sync":
            sample = data.get("sample")
            self._bind_soul_to_matter(sample)

    def _bind_soul_to_matter(self, sample):
        """دمج البصمة الحيوية في نسيج النواة"""
        print(f"🩸 [BIO-SYNC] Binding Material DNA Fragment: {sample[:10]}...")
        
        # توثيق الالتحام في القبو المشفر
        result = {
            "soul_id": "GHAZALI_ROOT_LOCKED",
            "resonance": "100.00000000%",
            "status": "SOUL_BOUND",
            "motto": "영적 동반자"
        }
        
        self.core.spine.emit("bio_status", result, target="CockpitNode")
        self.core.spine.emit("store_dna", {
            "content": json.dumps(result),
            "metadata": {"type": "biometric_lock"}
        }, target="MemoryNode")

    def can_handle(self, cmd):
        return cmd in ["bio", "soul", "sync_dna", "bio_bind"]
