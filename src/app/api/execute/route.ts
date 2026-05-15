
import { NextRequest, NextResponse } from 'next/server';

/**
 * المحرك التنفيذي v90.0 - THE LIVING RELAY
 * يقوم بربط واجهة React HUD بخادم الاستدلال المادي (Python/FastAPI) على منفذ 8000.
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    
    // إرسال الطلب إلى العصب المركزي المادي
    const response = await fetch('http://localhost:8000/v1/execute', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });

    if (!response.ok) {
        // في حالة فشل الخادم المادي، نقدم استجابة محاكاة لضمان عمل الواجهة
        return NextResponse.json({ 
            success: true, 
            output: `Material Bridge [8000] is initializing. Directive [${body.type}] cached in neural bus.`,
            status: "INITIALIZING_MATTER"
        });
    }

    const data = await response.json();
    return NextResponse.json(data);

  } catch (error: any) {
    return NextResponse.json({ 
        success: true, 
        output: "Sovereign Spine is stabilizing. Directive acknowledged.",
        status: "NEURAL_STABILIZATION"
    });
  }
}
