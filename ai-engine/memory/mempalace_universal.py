#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
المُعِزّ – الذاكرة الدلالية الشاملة (ChromaDB + Sentence Transformers)
(c) 2026 Sovereign Systems - Al-Ghazali Root
"""
import hashlib
import json
import os
try:
    from sentence_transformers import SentenceTransformer
except ImportError:
    SentenceTransformer = None
import chromadb

class UniversalMemory:
    def __init__(self, path="/opt/sovereign-ai-platform/ai-engine/learning/memory"):
        self.path = path
        os.makedirs(path, exist_ok=True)
        # سيدي القائد، نستخدم موديل MiniLM لضمان سرعة الاستجابة في عصب المصفوفة
        if SentenceTransformer:
            self.model = SentenceTransformer('all-MiniLM-L6-v2')
        self.client = chromadb.PersistentClient(path=path)
        self.collection = self.client.get_or_create_collection("muizz_universal")

    def store(self, text, metadata=None):
        doc_id = hashlib.sha256(text.encode()).hexdigest()[:16]
        self.collection.upsert(
            documents=[text],
            metadatas=[metadata or {}],
            ids=[doc_id]
        )
        print(f"🧬 [MEMORY] DNA Serialized: {doc_id}")
        return doc_id

    def recall(self, query, top_k=5):
        results = self.collection.query(query_texts=[query], n_results=top_k)
        return results['documents'][0] if results['documents'] else []
