
#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
🦅 n8n Memory Bridge v6.0
يربط تدفقات n8n بالذاكرة الدلالية للمُعِزّ.
"""
import requests
import json
import sys
import os

# إضافة المسار للذاكرة
sys.path.append(os.path.join(os.getenv("PROJECT_ROOT", os.getcwd()), "ai-engine/memory"))
try:
    from mempalace_universal import UniversalMemory
except ImportError:
    class UniversalMemory:
        def recall(self, q): return []
        def store(self, t, m): pass

class N8nMemoryBridge:
    def __init__(self, n8n_url="http://localhost:5678"):
        self.url = n8n_url
        self.memory = UniversalMemory()

    def execute_workflow(self, workflow_id, input_data):
        # 1. استرجاع السياق من الذاكرة
        similar_past = self.memory.recall(str(input_data))
        input_data["similar_attacks"] = similar_past
        
        # 2. استدعاء n8n
        try:
            resp = requests.post(
                f"{self.url}/api/v1/workflows/{workflow_id}/execute",
                json={"data": input_data},
                timeout=60
            )
            result = resp.json()
            
            # 3. تخليد النتيجة
            self.memory.store(json.dumps(result), {"workflow": workflow_id, "type": "n8n_execution"})
            return result
        except Exception as e:
            return {"error": str(e), "status": "NETWORK_CONFLICT"}

if __name__ == "__main__":
    bridge = N8nMemoryBridge()
    print("[+] n8n Memory Bridge: ARMED.")
