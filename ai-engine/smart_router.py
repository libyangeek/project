# -*- coding: utf-8 -*-
"""
Sovereign AI Platform - Smart Router Hub
الموجه الذكي: يصنف الطلبات ويوجهها للنموذج الأنسب.
"""

import os
from mistral_connector import MistralConnector

class SmartRouter:
    def __init__(self):
        self.connector = MistralConnector()
        self.models = {
            "arabic": "mistral-large-latest",
            "coding": "codestral-latest",
            "hacking": "mistral-medium-latest",
            "general": "mistral-small-latest"
        }

    def classify_intent(self, query):
        """تصنيف نية المستخدم باستخدام نموذج سريع"""
        prompt = f"Classify this query into one of: arabic, coding, hacking, general. Query: {query}"
        messages = [{"role": "user", "content": prompt}]
        res = self.connector.chat_completion(model="mistral-tiny", messages=messages)
        
        category = res.get("choices", [{}])[0].get("message", {}).get("content", "general").lower()
        return category if category in self.models else "general"

    def route_query(self, query):
        """توجيه الاستفسار للنموذج المتخصص"""
        category = self.classify_intent(query)
        model = self.models.get(category)
        
        print(f"[*] Routing to {category} model: {model}")
        
        messages = [{"role": "user", "content": query}]
        return self.connector.chat_completion(model=model, messages=messages)

if __name__ == "__main__":
    router = SmartRouter()
    print(router.route_query("اكتب لي كود بايثون لفحص بورتات الشبكة"))
