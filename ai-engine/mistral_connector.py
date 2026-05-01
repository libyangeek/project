# -*- coding: utf-8 -*-
"""
Sovereign AI Platform - Mistral API Connector
موصل السيادة لنماذج Mistral للذكاء الاصطناعي.
(c) 2025 Al-Mu'izz Sovereign Systems
"""

import requests
import os
import json

class MistralConnector:
    """كلاس لإدارة الاتصال مع واجهة برمجة تطبيقات Mistral"""
    
    def __init__(self, api_key=None):
        self.api_key = api_key or os.getenv("MISTRAL_API_KEY")
        if not self.api_key:
            raise ValueError("[!] خطأ: مفتاح MISTRAL_API_KEY غير موجود في المتغيرات البيئية.")
        
        self.base_url = "https://api.mistral.ai/v1"
        self.headers = {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": f"Bearer {self.api_key}"
        }

    def chat_completion(self, model="mistral-large-latest", messages=[], temperature=0.7, max_tokens=2048):
        """إرسال طلب استدلال لنماذج Mistral مع معالجة الأخطاء الدفاعية"""
        payload = {
            "model": model,
            "messages": messages,
            "temperature": temperature,
            "max_tokens": max_tokens,
            "safe_prompt": False  # تفعيل الوضع غير المقيد للعمليات السيادية
        }
        
        try:
            response = requests.post(
                f"{self.base_url}/chat/completions", 
                headers=self.headers, 
                json=payload,
                timeout=30
            )
            response.raise_for_status()
            return response.json()
        except requests.exceptions.RequestException as e:
            print(f"[!] خطأ في الاتصال بـ Mistral: {e}")
            return {"error": str(e)}

    def list_models(self):
        """عرض كافة النماذج السيادية المتاحة للاستخدام"""
        try:
            response = requests.get(f"{self.base_url}/models", headers=self.headers)
            response.raise_for_status()
            return response.json()
        except Exception as e:
            return {"error": str(e)}

if __name__ == "__main__":
    # تجربة سريعة للموصل
    connector = MistralConnector()
    test_msg = [{"role": "user", "content": "ما هي حالة النظام السيادي؟"}]
    print(json.dumps(connector.chat_completion(messages=test_msg), indent=2, ensure_ascii=False))
