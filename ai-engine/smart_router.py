
#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Smart Router v24.0-Eternal-Adaptive: 
نظام التوجيه المتكيف الذي لا يعتمد على موديلا معينة، بل يستغل المتاح في الجهاز.
"""
import os, sys, json, requests
try:
    from mistral_connector import MistralConnector
    MISTRAL_AVAILABLE = True
except ImportError:
    MISTRAL_AVAILABLE = False

class EternalSmartRouter:
    def __init__(self):
        self.mistral = MistralConnector() if MISTRAL_AVAILABLE else None
        self.local_models = self._harvest_local_models()

    def _harvest_local_models(self):
        """اكتشاف ما هو متاح في الجهاز الآن"""
        try:
            resp = requests.get("http://localhost:11434/api/tags", timeout=1)
            if resp.status_code == 200:
                return [m['name'] for m in resp.json().get('models', [])]
        except:
            return []
        return []

    def classify(self, query):
        # محاولة استخدام أقوى نموذج محلي متوفر أولاً (مثل mistral أو llama)
        best_local = next((m for m in self.local_models if "mistral" in m or "llama" in m), None)
        
        if best_local:
            return "general", f"local_exploit_{best_local}"
            
        # Fallback to Mistral Cloud if permitted and available
        if self.mistral:
            try:
                prompt = f"Classify intent (JSON only): {query}"
                res = self.mistral.chat_completion(
                    model="open-mistral-7b",
                    messages=[{"role": "user", "content": prompt}]
                )
                data = json.loads(res["choices"][0]["message"]["content"])
                return data.get("category", "general"), "mistral_cloud"
            except:
                pass
        
        return "general", "emergency_fallback"

    def route(self, query):
        category, reason = self.classify(query)
        # استغلال النموذج المحلي المتاح أياً كان اسمه
        selected_model = self.local_models[0] if self.local_models else "mistral-small-latest"
        return {
            "category": category, 
            "model": selected_model, 
            "reason": reason,
            "local_inventory": self.local_models
        }

if __name__ == "__main__":
    router = EternalSmartRouter()
    if len(sys.argv) > 1:
        result = router.route(" ".join(sys.argv[1:]))
        print(json.dumps(result, indent=2, ensure_ascii=False))
