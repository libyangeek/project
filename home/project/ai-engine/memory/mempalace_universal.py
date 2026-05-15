#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
المُعِزّ – الذاكرة الدلالية الشاملة (MemPalace ULTRA v90.0)
يستخدم ChromaDB لتخليد تجارب القتال الحقيقية.
"""
import hashlib
import json
import os
import chromadb
from datetime import datetime

STORAGE_PATH = "/opt/sovereign-ai-platform/ai-engine/learning/memory"

class UniversalMemory:
    def __init__(self, path=STORAGE_PATH):
        self.path = path
        os.makedirs(path, exist_ok=True)
        # تهيئة ChromaDB للذاكرة الدلالية
        self.client = chromadb.PersistentClient(path=path)
        self.collection = self.client.get_or_create_collection("muizz_v90_dna")

    def store(self, text, metadata=None):
        """حفظ تجربة قتالية حقيقية"""
        doc_id = hashlib.sha256(text.encode()).hexdigest()[:16]
        self.collection.upsert(
            documents=[text],
            metadatas=[metadata or {"ts": datetime.now().isoformat()}],
            ids=[doc_id]
        )
        print(f"🧬 [MEMORY] DNA Serialized: {doc_id}")
        return doc_id

    def recall(self, query, top_k=5):
        """استرجاع معرفة سابقة"""
        results = self.collection.query(
            query_texts=[query],
            n_results=top_k
        )
        return results['documents'][0] if results['documents'] else []
