#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
المُعِزّ – ذاكرة القائد (تسجيل المعارك وتقديم التوصيات)
"""
import chromadb
import hashlib
import json
from datetime import datetime
import os

class CommanderMemory:
    def __init__(self, path="/opt/sovereign-ai-platform/ai-engine/learning/commander_memory"):
        os.makedirs(path, exist_ok=True)
        self.client = chromadb.PersistentClient(path=path)
        self.collection = self.client.get_or_create_collection("commander_logs")

    def log_battle(self, battle_summary, outcome, target):
        doc = f"{battle_summary}\nOutcome: {outcome}\nTarget: {target}"
        doc_id = hashlib.sha256(doc.encode()).hexdigest()[:16]
        self.collection.upsert(
            documents=[doc],
            metadatas=[{"timestamp": datetime.now().isoformat(), "outcome": outcome, "target": target}],
            ids=[doc_id]
        )
        print(f"⚔️ [COMMANDER-MEMORY] Battle Logged: {target} | Outcome: {outcome}")

    def recommend(self, current_target, top_k=3):
        results = self.collection.query(query_texts=[current_target], n_results=top_k)
        if results['documents']:
            return [{"attack": d, "metadata": m} for d, m in zip(results['documents'][0], results['metadatas'][0])]
        return []
