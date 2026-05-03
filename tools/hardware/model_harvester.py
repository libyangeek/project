# -*- coding: utf-8 -*-
"""
Al-Mu'izz Sovereign - AI Model Harvester
محرك اكتشاف محركات الذكاء الاصطناعي: يبحث عن Ollama والموديلات المحلية لتوظيفها في المنصة.
(c) 2025 Sovereign Systems
"""

import subprocess
import json
import requests
import os

class ModelHarvester:
    def __init__(self):
        self.ollama_api = "http://localhost:11434/api/tags"

    def detect_ollama_models(self):
        """اكتشاف النماذج المثبتة في محرك Ollama المحلي"""
        try:
            response = requests.get(self.ollama_api, timeout=2)
            if response.status_code == 200:
                models = response.json().get('models', [])
                return [{
                    "name": m['name'],
                    "provider": "Ollama (Local)",
                    "size": m.get('size', 0),
                    "details": m.get('details', {})
                } for m in models]
        except:
            return []
        return []

    def detect_local_files(self):
        """البحث عن ملفات النماذج الشائعة في المسارات الافتراضية"""
        found_paths = []
        search_dirs = [
            os.path.expanduser("~/.ollama/models"),
            "/usr/share/ollama/.ollama/models",
            "/opt/sovereign-ai-platform/ai-engine/models"
        ]
        for d in search_dirs:
            if os.path.exists(d):
                found_paths.append({"path": d, "type": "LOCAL_STORAGE"})
        return found_paths

    def get_brain_manifest(self):
        """توليد التقرير النهائي لقدرات الذكاء المكتشفة"""
        ollama = self.detect_ollama_models()
        storage = self.detect_local_files()
        
        return {
            "active_engines": {
                "ollama": len(ollama) > 0,
                "local_storage": len(storage) > 0
            },
            "discovered_models": ollama,
            "status": "ARMED" if ollama else "PASSIVE (RELYING ON CLOUD)"
        }

if __name__ == "__main__":
    harvester = ModelHarvester()
    print(json.dumps(harvester.get_brain_manifest(), indent=4))
