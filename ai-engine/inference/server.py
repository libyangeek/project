# -*- coding: utf-8 -*-
"""
FastAPI Sovereign Bridge v90.0
الممر المادي الأسمى الذي يربط HUD بالنواة الصلبة.
"""
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import Optional, Any
import sys
import os
from pathlib import Path

# الربط مع النواة الجديدة
sys.path.insert(0, str(Path(__file__).parent.parent.parent))
from core.config import Config
from core.utils import Logger
from core.sovereign_core import SovereignCore

app = FastAPI(title="Al-Mu'izz 16D Nucleus Bridge")

# تهيئة النواة لمرة واحدة عند بدء الجسر
config = Config()
logger = Logger(config)
nucleus = SovereignCore(config, logger)
nucleus.start()

class ExecutionRequest(BaseModel):
    type: str
    target: Optional[str] = None
    command: Optional[str] = None
    content: Optional[str] = None

@app.post("/v1/execute")
async def execute(request: ExecutionRequest):
    try:
        result = nucleus.execute_command(request.type, target=request.target, command=request.command, content=request.content)
        return {"success": True, "output": result, "node": "Alpha-God-Core"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/health")
async def health():
    return nucleus.get_status()

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
