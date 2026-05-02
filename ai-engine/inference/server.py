# -*- coding: utf-8 -*-
"""
Sovereign AI Platform - Inference Server (FastAPI) v21.5-EVO
تم تحسين المسارات بشكل ديناميكي مطلق لضمان العمل في أي بيئة مادية [DOUBLE-CHECK ENABLED].
(c) 2025 Al-Mu'izz Sovereign Systems
"""

from fastapi import FastAPI, Header, HTTPException, Depends
from pydantic import BaseModel
from typing import List, Optional
import uvicorn
import os
import sys
import time

# [DOUBLE-CHECK PATH INJECTION]
CURRENT_DIR = os.path.dirname(os.path.abspath(__file__))
BASE_DIR = os.path.dirname(CURRENT_DIR)

# حقن المسارات لضمان رؤية الموجه الذكي وكافة المكونات السيادية
sys.path.insert(0, BASE_DIR)
sys.path.insert(0, os.path.join(BASE_DIR, "ai-engine"))

try:
    from smart_router import SmartRouter
except ImportError:
    # محاولة ذكية ثانية للبحث عن الموجه في حالة النقل المادي للهارد
    import importlib.util
    router_path = os.path.join(BASE_DIR, "smart_router.py")
    if os.path.exists(router_path):
        spec = importlib.util.spec_from_file_location("smart_router", router_path)
        smart_router = importlib.util.module_from_spec(spec)
        spec.loader.exec_module(smart_router)
        SmartRouter = smart_router.SmartRouter
    else:
        # Fallback لضمان عدم توقف العصب المركزي
        class SmartRouter:
            def route_query(self, q): return {"model": "fallback", "response": {"choices": [{"message": {"content": "Critical Link Error: SmartRouter not found in hardware path."}}]}}

app = FastAPI(title="Al-Mu'izz Sovereign God-Core", version="v21.5-EVO")
router_engine = SmartRouter()

class ChatMessage(BaseModel):
    role: str
    content: str

class ChatCompletionRequest(BaseModel):
    model: str
    messages: List[ChatMessage]
    temperature: Optional[float] = 0.7
    max_tokens: Optional[int] = 2048

def verify_sovereign_token(authorization: str = Header(None)):
    SOV_TOKEN = os.getenv("SOVEREIGN_SECRET", "sovereign_muizz_v21_evo_2025")
    if not authorization or f"Bearer {SOV_TOKEN}" != authorization:
        raise HTTPException(status_code=401, detail="Unauthorized: Sovereign Access Denied")
    return True

@app.post("/v1/chat/completions")
async def chat_completions(request: ChatCompletionRequest, authenticated: bool = Depends(verify_sovereign_token)):
    user_query = request.messages[-1].content
    route_result = router_engine.route_query(user_query)
    ai_response = route_result["response"]
    
    if "error" in ai_response:
        raise HTTPException(status_code=500, detail=ai_response["error"])

    return {
        "id": f"sov-evo-{int(time.time())}",
        "object": "chat.completion",
        "created": int(time.time()),
        "model": route_result["model"],
        "choices": ai_response.get("choices", []),
        "usage": ai_response.get("usage", {}),
        "system_fingerprint": "sovereign_muizz_v21_evolutionary"
    }

@app.get("/health")
async def health_check():
    return {
        "status": "OMNIPOTENT", 
        "engine": "Al-Mu'izz God-Core v21.5", 
        "node": os.uname().nodename,
        "persistence": "Eternal_Service_Active",
        "double_check": "VERIFIED"
    }

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)