
#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
المُعِزّ ULTRA v87.0 – Memory Node (فص الذاكرة)
المسؤول عن تخليد التجارب القتالية والتعلم الجيني المستمر.
"""
import os
import sys
import json

BASE_DIR = os.getenv("PROJECT_ROOT", os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__)))))
sys.path.append(os.path.join(BASE_DIR, "ai-engine"))

try:
    from memory.mempalace_universal import UniversalMemory
except ImportError:
    class UniversalMemory:
        def store(self, *args): pass
        def recall(self, *args): return []

class MemoryNode:
    def __init__(self):
        self.memory = UniversalMemory()
        self.core = None

    def set_core(self, core):
        self.core = core

    def start(self):
        print("[*] [NODE_MEMORY] Neural paths stabilized. MemPalace v10.0 Online.")

    def handle_event(self, event):
        etype = event["type"]
        data = event["data"]
        
        if etype == "store_battle_dna":
            doc_id = self.memory.store(data["content"], data.get("metadata"))
            print(f"[+] [MEMORY] Battle DNA serialized: {doc_id}")
            self.core.emit("dna_serialized", {"id": doc_id}, target="Cockpit")
            
        elif etype == "recall_strategy":
            results = self.memory.recall(data["query"])
            self.core.emit("strategy_recalled", {"results": results}, target=event.get("sender"))
