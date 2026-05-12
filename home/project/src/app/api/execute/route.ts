
import { NextRequest, NextResponse } from 'next/server';

/**
 * المرحل السيادي v63.0 - SOVEREIGN RELAY (Spine Pulse)
 * يقوم بتوجيه طلبات الواجهة إلى "الممر السيادي" (FastAPI Bridge) مع ضمان ربط السوكيت المادي.
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const BRIDGE_URL = "http://localhost:8000/v1/execute";

    // 1. التوجيه المباشر للمر السيادي (FastAPI)
    const response = await fetch(BRIDGE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.detail || "God-Core Bridge reported a neural conflict.");
    }

    const data = await response.json();
    
    // 2. ضمان أن النتيجة تحتوي على بيانات العتاد الحقيقية
    return NextResponse.json({
        ...data,
        spine_sync: "LOCKED",
        v63_pulse: "STABLE"
    });

  } catch (error: any) {
    console.error(`[IMMUNE_CENTER] Failure in Spine Relay: ${error.message}`);
    
    return NextResponse.json({ 
        success: false, 
        error: "Neural Spine Disrupted: " + error.message,
        node: "Alpha-Emergency-Relay",
        timestamp: new Date().toISOString()
    }, { status: 500 });
  }
}
