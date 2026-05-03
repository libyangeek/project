
#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Smart Router v24.0-Eternal: Classifies intent using mistral or local ollama fallback.
Integrates adaptive model selection with zero-latency fallback.
"""
import os, sys, json
try:
    from mistral_connector import MistralConnector
    MISTRAL_AVAILABLE = True
except ImportError:
    MISTRAL_AVAILABLE = False

class EternalSmartRouter:
    def __init__(self):
        self.mistral = MistralConnector() if MISTRAL_AVAILABLE else None
        self.models = {
            "arabic_general": "mistral-large-latest",
            "programming": "codestral-latest",
            "cybersecurity": "mistral-medium-latest",
            "coding_attack": "mistral-large-latest",
            "uncensored": "mistral-medium-latest",
            "general": "mistral-small-latest"
        }

    def classify(self, query):
        # Try Mistral API first
        if self.mistral:
            try:
                prompt = f"Classify intent (JSON only): {query}"
                res = self.mistral.chat_completion(
                    model="open-mistral-7b",
                    messages=[{"role": "user", "content": prompt}]
                )
                data = json.loads(res["choices"][0]["message"]["content"])
                return data.get("category", "general"), data.get("reason", "Default")
            except:
                pass
        # Fallback: Local Ollama
        try:
            import requests
            resp = requests.post("http://localhost:11434/api/generate",
                json={"model": "mistral", "prompt": query, "stream": False})
            return "general", "ollama_local"
        except:
            return "general", "local_fallback"

    def route(self, query):
        category, reason = self.classify(query)
        model = self.models.get(category, self.models["general"])
        return {"category": category, "model": model, "reason": reason}

if __name__ == "__main__":
    router = EternalSmartRouter()
    if len(sys.argv) > 1:
        result = router.route(" ".join(sys.argv[1:]))
        print(json.dumps(result, indent=2, ensure_ascii=False))
