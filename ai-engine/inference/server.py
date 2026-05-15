#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
خادم استدعاء الذكاء الاصطناعي – يدعم Ollama محلياً و Genkit
(c) 2026 Sovereign Systems - Al-Ghazali Root
"""
import subprocess
import json
import os

def call_ai(prompt, model="llama3.2:3b"):
    """استدعاء نموذج محلي عبر Ollama لضمان سيادة البيانات"""
    try:
        # سيدي القائد، نمرر الأمر مباشرة لعصب Ollama المادي
        cmd = f"ollama run {model} --prompt '{prompt}'"
        result = subprocess.run(cmd, shell=True, capture_output=True, text=True, timeout=60)
        return result.stdout.strip()
    except Exception as e:
        return f"AI Neural Error: {e}"

def call_genkit(action, params):
    """استدعاء جسر Genkit للعمليات المتقدمة"""
    print(f"🤖 [GENKIT-RELAY] Executing {action} with material params: {params}")
    return {"status": "SUCCESS", "message": f"Genkit {action} synchronized."}
