# -*- coding: utf-8 -*-
"""
Sovereign AI Platform - Smart Router Hub
الموجه الذكي: المكون المسؤول عن تحليل النوايا وتوجيه الطلبات.
(c) 2025 Al-Mu'izz Sovereign Systems
"""

import os
import sys
from mistral_connector import MistralConnector

class SmartRouter:
    """نظام التوجيه الذكي لتخصيص النماذج بناءً على نوع المهمة"""
    
    def __init__(self):
        self.connector = MistralConnector()
        # خريطة النماذج المتخصصة
        self.models = {
            "arabic": "mistral-large-latest",   # أفضل للغة العربية المعقدة
            "coding": "codestral-latest",      # متخصص في البرمجة
            "hacking": "mistral-medium-latest", # توازن بين المنطق والسرعة للهجمات
            "general": "mistral-small-latest"   # للاستفسارات السريعة
        }

    def classify_intent(self, query):
        """تصنيف نية المستخدم باستخدام نموذج سريع التحليل"""
        prompt = (
            "Classify the following user query into exactly one of these categories: "
            "arabic, coding, hacking, general. Respond ONLY with the category name.\n"
            f"Query: {query}"
        )
        messages = [{"role": "user", "content": prompt}]
        
        # استخدام نموذج صغير للتصنيف السريع لتقليل وقت الاستجابة
        res = self.connector.chat_completion(model="open-mistral-7b", messages=messages)
        
        content = res.get("choices", [{}])[0].get("message", {}).get("content", "general").strip().lower()
        
        # التأكد من أن التصنيف يطابق أحد الفئات المعروفة
        for key in self.models.keys():
            if key in content:
                return key
        return "general"

    def route_query(self, query):
        """توجيه الاستفسار للنموذج الأنسب وإعادة النتيجة الكاملة"""
        category = self.classify_intent(query)
        selected_model = self.models.get(category)
        
        print(f"[*] نظام التوجيه السيادي: تم تحديد الفئة ({category}) - استخدام نموذج ({selected_model})")
        
        messages = [
            {"role": "system", "content": f"You are Al-Mu'izz, a sovereign AI specialist. Category: {category}."},
            {"role": "user", "content": query}
        ]
        
        return {
            "category": category,
            "model": selected_model,
            "response": self.connector.chat_completion(model=selected_model, messages=messages)
        }

if __name__ == "__main__":
    router = SmartRouter()
    if len(sys.argv) > 1:
        user_query = " ".join(sys.argv[1:])
        result = router.route_query(user_query)
        print(result["response"]["choices"][0]["message"]["content"])
    else:
        print("[!] يرجى إدخال استفسار للتحليل.")
