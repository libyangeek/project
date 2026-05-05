#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Smart Router v42.0 – The Singularity Edition
يختار أفضل مسار معالجة بين النماذج المحلية والسحابية بناءً على طبيعة المهمة.
"""
import sys
import json
import requests

OLLAMA_URL = "http://localhost:11434/api/generate"

def get_local_models():
    try:
        resp = requests.get("http://localhost:11434/api/tags", timeout=5)
        return [m["name"] for m in resp.json().get("models", [])]
    except:
        return []

def classify(prompt):
    p = prompt.lower()
    if any(w in p for w in ["code", "python", "javascript", "bash", "react"]): return "code"
    if any(w in p for w in ["exploit", "scan", "vuln", "attack", "payload", "cpanel"]): return "cyber"
    if any(w in p for w in ["image", "photo", "draw", "visual"]): return "image"
    return "general"

def route_query(prompt):
    models = get_local_models()
    category = classify(prompt)
    
    # Mapping logic
    model_map = {
        "code": "codellama",
        "cyber": "mistral",
        "image": "llava",
        "general": "mistral"
    }
    
    selected_model = model_map.get(category, "mistral")
    
    if selected_model not in models:
        selected_model = "mistral" # Default fallback
        
    return {
        "category": category,
        "model": selected_model,
        "status": "ROUTED"
    }

if __name__ == "__main__":
    query = " ".join(sys.argv[1:]) if len(sys.argv) > 1 else ""
    if query:
        print(json.dumps(route_query(query), indent=2))
    else:
        print(json.dumps({"error": "No query provided"}))
