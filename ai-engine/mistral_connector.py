# -*- coding: utf-8 -*-
"""
Sovereign AI Platform - Mistral API Connector
(c) 2025 Al-Mu'izz Sovereign Systems
"""

import requests
import os

class MistralConnector:
    def __init__(self, api_key=None):
        self.api_key = api_key or os.getenv("MISTRAL_API_KEY")
        self.base_url = "https://api.mistral.ai/v1"
        self.headers = {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": f"Bearer {self.api_key}"
        }

    def chat_completion(self, model="mistral-large-latest", messages=[], temperature=0.7):
        """إرسال طلب استدلال لنماذج Mistral"""
        payload = {
            "model": model,
            "messages": messages,
            "temperature": temperature,
            "safe_prompt": False
        }
        
        try:
            response = requests.post(f"{self.base_url}/chat/completions", headers=self.headers, json=payload)
            response.raise_for_status()
            return response.json()
        except Exception as e:
            return {"error": str(e)}

    def list_models(self):
        """عرض النماذج المتاحة"""
        response = requests.get(f"{self.base_url}/models", headers=self.headers)
        return response.json()
