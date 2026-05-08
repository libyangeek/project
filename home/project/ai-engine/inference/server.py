
# -*- coding: utf-8 -*-
"""
Sovereign AI Platform - God-Core Bridge v53.8
المحرك التنفيذي المركزي (Sovereign Bridge) - ممر HTTP فائق السرعة.
(c) 2026 Al-Mu'izz Sovereign Systems
"""

from fastapi import FastAPI, Header, HTTPException, Depends
from pydantic import BaseModel
from typing import List, Optional, Any
import uvicorn
import os
import sys
import time
import json
import subprocess

# [DOUBLE-CHECK PATH INJECTION]
BASE_DIR = os.getenv("PROJECT_ROOT", "/opt/sovereign-ai-platform")
sys.path.insert(0, BASE_DIR)
sys.path.insert(0, os.path.join(BASE_DIR, "ai-engine"))

try:
    from smart_router import SmartRouter
    import gepa
except ImportError:
    # Fallback في حالة عدم استقرار المسارات المادية
    class SmartRouter:
        def route_query(self, q): return {"status": "PATH_ERROR", "output": "Critical: SmartRouter link broken."}
    class gepa:
        def record(*args, **kwargs): pass
        def get_stats(): return {"status": "INITIALIZING"}

app = FastAPI(title="Al-Mu'izz Sovereign God-Core Bridge", version="v53.8")
router_engine = SmartRouter()

class ExecutionRequest(BaseModel):
    type: str
    command: Optional[str] = None
    target: Optional[str] = None
    prompt: Optional[str] = None
    context: Optional[dict] = None

@app.post("/v1/execute")
async def execute_directive(request: ExecutionRequest):
    """الممر السيادي لتنفيذ الأوامر المادية والذكية"""
    start_time = time.time()
    etype = request.type
    target = request.target or "GLOBAL_MATRIX"
    
    # تسجيل نية التنفيذ في الذاكرة الجينية
    gepa.record(tool=f"BRIDGE_{etype}", input_data=str(request.dict()), outcome="INITIATED")

    try:
        if etype == "smart_route" or etype == "terminal":
            result = router_engine.route_query(request.command or request.prompt or target)
        elif etype == "cve_search" or etype == "vuln_oracle":
            cmd = f"python3 {BASE_DIR}/ai-engine/vulnerabilities/cve_hunter.py search '{target}'"
            result = subprocess.check_output(cmd, shell=True).decode()
        elif etype == "metrics":
            result = gepa.get_stats()
        else:
            result = {"status": "ACKNOWLEDGED", "msg": f"Directive {etype} processed by Hive."}

        # تسجيل النجاح والارتقاء
        gepa.record(tool=f"BRIDGE_{etype}", input_data=target, outcome="SUCCESS", success=True)
        
        return {
            "success": True,
            "output": result,
            "latency": f"{time.time() - start_time:.4f}s",
            "node": "Alpha-God-Core"
        }
    except Exception as e:
        gepa.record(tool=f"BRIDGE_{etype}", input_data=target, outcome=str(e), success=False)
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/health")
async def health_check():
    return {
        "status": "OMNIPOTENT", 
        "bridge": "Active",
        "node": os.uname().nodename,
        "resonance": "100%"
    }

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
