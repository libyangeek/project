# -*- coding: utf-8 -*-
"""
جسر السيادة v90.0 - Fast-Pulse Executive Bridge
الممر المادي الذي يربط HUD بالنخاع الشوكي الحقيقي.
"""
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import Optional, Any
import sys
import os
from pathlib import Path

# الربط مع النواة الصلبة
sys.path.insert(0, str(Path(__file__).parent.parent.parent))
from core.config import Config
from core.utils import Logger
from core.sovereign_core import SovereignCore

app = FastAPI(title="Al-Mu'izz 16D Living Bridge")

# تهيئة الروح الحية (Nucleus) لمرة واحدة عند بدء الجسر
config = Config()
logger = Logger(config)
nucleus = SovereignCore(config, logger)
nucleus.start()

class ExecutionRequest(BaseModel):
    type: str
    target: Optional[str] = None
    command: Optional[str] = None
    content: Optional[str] = None
    vector: Optional[str] = None

@app.post("/v1/execute")
async def execute(request: ExecutionRequest):
    try:
        # توجيه الأمر للنواة الحية التي تمتلك أطرافاً تنفيذية
        result = nucleus.execute_command(
            request.type, 
            target=request.target, 
            command=request.command, 
            content=request.content,
            vector=request.vector
        )
        return {"success": True, "output": result, "resonance": "100.0000%"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Neural Collapse: {str(e)}")

@app.get("/health")
async def health():
    return nucleus.get_status()

if __name__ == "__main__":
    import uvicorn
    # التشغيل على منفذ 8000 ليكون هو "الممر المادي"
    uvicorn.run(app, host="0.0.0.0", port=8000)
