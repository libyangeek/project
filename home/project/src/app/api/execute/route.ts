
import { NextRequest, NextResponse } from 'next/server';

/**
 * المرحل السيادي v58.0 - SOVEREIGN RELAY
 * يقوم بتوجيه كافة طلبات الواجهة إلى "الممر السيادي" (FastAPI Bridge) حصراً.
 * مجهز للتعامل مع كافة الأسلحة المادية (Legba, PSSW, Claude, etc.)
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const BRIDGE_URL = "http://localhost:8000/v1/execute";

    // توجيه ذكي للأوامر المباشرة
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
    return NextResponse.json(data);

  } catch (error: any) {
    console.error(`[IMMUNE_CENTER] Failure in Relay: ${error.message}`);
    
    return NextResponse.json({ 
        success: false, 
        error: "Neural Link Disrupted: " + error.message,
        node: "Emergency-Relay",
        timestamp: new Date().toISOString()
    }, { status: 500 });
  }
}
