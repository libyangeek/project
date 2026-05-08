import { NextRequest, NextResponse } from 'next/server';

/**
 * المرحل السيادي v53.8 - SOVEREIGN RELAY
 * يقوم بتوجيه الطلبات إلى "الممر السيادي" (FastAPI Bridge) بدلاً من التنفيذ المباشر.
 * هذا يضمن السرعة، التوسع، ونظام مناعة مركزي للأخطاء.
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const BRIDGE_URL = "http://localhost:8000/v1/execute";

    const response = await fetch(BRIDGE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.detail || "God-Core Bridge reported a failure.");
    }

    const data = await response.json();
    return NextResponse.json(data);

  } catch (error: any) {
    // نظام المناعة السيادي
    console.error(`[IMMUNE_CENTER] Failure in Relay: ${error.message}`);
    
    return NextResponse.json({ 
        success: false, 
        error: "Neural Link Disrupted: " + error.message,
        node: "Emergency-Relay"
    }, { status: 500 });
  }
}
