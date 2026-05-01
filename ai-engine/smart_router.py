# -*- coding: utf-8 -*-
"""
Sovereign AI Platform - Smart Router Hub v3
الموجه الذكي: المكون المسؤول عن تحليل النوايا وتوجيه الطلبات مع التبرير المنطقي.
(c) 2025 Al-Mu'izz Sovereign Systems
"""

import os
import sys
import json
from mistral_connector import MistralConnector

class SmartRouter:
    """نظام التوجيه الذكي لتخصيص النماذج بناءً على نوع المهمة مع شرح السبب"""
    
    def __init__(self):
        self.connector = MistralConnector()
        # خريطة النماذج المتخصصة v17.2.0
        self.models = {
            "arabic_general": "mistral-large-latest",   # أفضل للغة العربية والمعالجة اللغوية
            "programming": "codestral-latest",         # متخصص في هندسة البرمجيات
            "cybersecurity": "mistral-medium-latest",  # توازن للعمليات الدفاعية
            "coding_attack": "mistral-large-latest",   # للثغرات المعقدة (بديل لـ WhiteRabbitNeo)
            "uncensored": "mistral-medium-latest",     # للبحث غير المقيد
            "general": "mistral-small-latest"          # للاستفسارات السريعة
        }

    def classify_intent(self, query):
        """تصنيف نية المستخدم واستخراج التبرير المنطقي عبر نموذج سريع"""
        prompt = (
            "You are the Al-Mu'izz Intent Classifier v17. Classify this query and explain why.\n"
            "Categories: arabic_general, programming, cybersecurity, coding_attack, uncensored, general.\n"
            "Query: " + query + "\n"
            "Response Format (JSON only): {\"category\": \"...\", \"reason\": \"...\"}"
        )
        messages = [{"role": "user", "content": prompt}]
        
        # استخدام نموذج صغير للتصنيف السريع
        res = self.connector.chat_completion(model="open-mistral-7b", messages=messages)
        
        try:
            content = res.get("choices", [{}])[0].get("message", {}).get("content", "{}")
            if "```json" in content:
                content = content.split("```json")[1].split("```")[0]
            data = json.loads(content)
            return data.get("category", "general"), data.get("reason", "Matched default signatures.")
        except:
            return "general", "Fallback to default due to parsing error."

    def route_query(self, query):
        """توجيه الاستفسار للنموذج الأنسب وإعادة النتيجة مع التبرير"""
        category, reason = self.classify_intent(query)
        selected_model = self.models.get(category, self.models["general"])
        
        print(f"[*] Routing to: {selected_model} (Reason: {reason})")
        
        messages = [
            {"role": "system", "content": f"You are Al-Mu'izz, a sovereign AI specialist. Mode: {category}. Reasoning: {reason}"},
            {"role": "user", "content": query}
        ]
        
        return {
            "category": category,
            "model": selected_model,
            "reasoning": reason,
            "response": self.connector.chat_completion(model=selected_model, messages=messages)
        }

if __name__ == "__main__":
    router = SmartRouter()
    if len(sys.argv) > 1:
        user_query = " ".join(sys.argv[1:])
        result = router.route_query(user_query)
        print(json.dumps(result, indent=2, ensure_ascii=False))
