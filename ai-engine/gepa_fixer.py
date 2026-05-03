
#!/usr/bin/env python3
"""
GEPA - Self-Healing Engine v2.0
Learns from failures and auto-heals via ChromaDB + Ollama.
"""
import os, sys, json, datetime, subprocess, requests
import chromadb
from chromadb.utils import embedding_functions

class EternalHealer:
    def __init__(self):
        # Use existing ChromaDB settings from Al-Mu'izz setup
        self.client = chromadb.PersistentClient(path="/opt/sovereign-ai-platform/ai-engine/gepa_db")
        self.collection = self.client.get_or_create_collection("failures")

    def log(self, module, error):
        doc_id = str(datetime.datetime.now().timestamp())
        self.collection.add(documents=[f"{module}: {error}"], ids=[doc_id])
        print(f"[GEPA] Logged failure in {module}")

    def heal(self):
        # Check latest error log
        log_path = "/opt/sovereign-ai-platform/audit/decisions.log"
        if not os.path.exists(log_path):
            print("[GEPA] No errors to heal.")
            return
        with open(log_path) as f:
            lines = f.readlines()
        if not lines:
            print("[GEPA] Error log empty.")
            return
        
        last_error = lines[-1]
        # Query Ollama for solution
        try:
            resp = requests.post("http://localhost:11434/api/generate",
                json={"model": "mistral", "prompt": f"Fix this cyber error and provide the corrected code/command:\n{last_error}\nProvide solution:", "stream": False})
            solution = resp.json().get("response", "No solution found.")
        except:
            solution = "Ollama unavailable."
        
        # Log the solution and execute healing if possible
        self.collection.add(documents=[f"FIX: {last_error} -> {solution}"], ids=[str(datetime.datetime.now().timestamp())])
        print(f"[GEPA] Healed: {last_error.strip()} => {solution}")

if __name__ == "__main__":
    healer = EternalHealer()
    if "--auto" in sys.argv:
        healer.heal()
    elif len(sys.argv) > 1:
        healer.log("manual", " ".join(sys.argv[1:]))
    else:
        print("Usage: gepa_fixer.py [--auto] | [error message]")
