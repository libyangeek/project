# -*- coding: utf-8 -*-
/**
 * Sovereign AI Platform - Inference Server (FastAPI)
 * خادم الاستدلال السيادي المتوافق مع بروتوكول OpenAI.
 * تم تصحيح مسارات الاستيراد لضمان العمل من أي مكان.
 * (c) 2025 Al-Mu'izz Sovereign Systems
 */

from fastapi import FastAPI, Header, HTTPException, Depends
from pydantic import BaseModel
from typing import List, Optional
import uvicorn
import os
import sys
import time

# حقن المسار الرئيسي للمنصة لضمان الوصول للموجه الذكي
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

try:
    from smart_router import SmartRouter
except ImportError:
    # محاولة بديلة إذا كان المسار مختلفاً
    sys.path.append(os.path.dirname(os.path.abspath(__file__)))
    from smart_router import SmartRouter

app = FastAPI(title="Al-Mu'izz Sovereign Inference Server", version="14.1.0")
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
    """التحقق من التوكن السيادي للمصادقة"""
    SOV_TOKEN = os.getenv("SOVEREIGN_SECRET", "sovereign_muizz_secret_2025")
    if not authorization or f"Bearer {SOV_TOKEN}" != authorization:
        raise HTTPException(status_code=401, detail="Unauthorized: Sovereign Access Denied")
    return True

@app.post("/v1/chat/completions")
async def chat_completions(request: ChatCompletionRequest, authenticated: bool = Depends(verify_sovereign_token)):
    """نقطة نهاية متوافقة مع OpenAI تستخدم الموجه الذكي في الخلفية"""
    
    # استخراج آخر رسالة من المستخدم لتمريرها للموجه
    user_query = request.messages[-1].content
    
    # تنفيذ التوجيه الذكي
    route_result = router_engine.route_query(user_query)
    ai_response = route_result["response"]
    
    if "error" in ai_response:
        raise HTTPException(status_code=500, detail=ai_response["error"])

    # بناء استجابة متوافقة تماماً مع OpenAI
    return {
        "id": f"sov-chatcmpl-{int(time.time())}",
        "object": "chat.completion",
        "created": int(time.time()),
        "model": route_result["model"],
        "choices": ai_response.get("choices", []),
        "usage": ai_response.get("usage", {}),
        "system_fingerprint": "sovereign_muizz_v14"
    }

@app.get("/health")
async def health_check():
    return {"status": "OPERATIONAL", "engine": "Al-Mu'izz Smart Router"}

if __name__ == "__main__":
    # تشغيل الخادم على المنفذ 8000
    uvicorn.run(app, host="0.0.0.0", port=8000)
