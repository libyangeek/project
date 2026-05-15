# -*- coding: utf-8 -*-
"""
عقدة الذاكرة v90.0 - Memory Node (The Eternal Archive)
المسؤول عن تخليد تجارب "المُعِزّ" والتعلم الجيني المستمر.
"""
from .base_node import BaseNode
import sys
import os
from pathlib import Path

# ربط محرك الذاكرة المادي
sys.path.append(str(Path(__file__).parent.parent))
from memory.mempalace_universal import UniversalMemory

class MemoryNode(BaseNode):
    def __init__(self, name, core_ref):
        super().__init__(name, core_ref)
        self.palace = UniversalMemory()

    def handle_event(self, event):
        etype = event["type"]
        data = event["data"]

        if etype == "store_dna":
            content = data.get("content")
            meta = data.get("metadata")
            doc_id = self.palace.store(content, meta)
            print(f"🧬 [MEMORY] DNA Serialized: {doc_id}")
            self.spine.emit("dna_saved", {"id": doc_id}, target="Cockpit")

        elif etype == "recall_strategy":
            query = data.get("query")
            results = self.palace.recall(query)
            self.spine.emit("strategy_recalled", {"results": results}, target="Cockpit")

    def can_handle(self, cmd):
        return cmd in ["recall", "remember", "store"]
