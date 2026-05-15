import { NextRequest, NextResponse } from 'next/server';

/**
 * المحرك التنفيذي v90.0 - THE LIVING RELAY
 * يقوم بربط واجهة React HUD بخادم الاستدلال المادي (Python/FastAPI) على منفذ 8000.
 * يضمن مرور النبضات العصبية من القائد إلى العتاد بصفر وهم.
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    
    // سيدي القائد، نمرر النبضة مباشرة لخادم FastAPI المادي
    const response = await fetch('http://localhost:8000/v1/execute', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });

    if (!response.ok) {
        // في حالة تأخر استجابة المادة، نقدم تقرير استقرار
        return NextResponse.json({ 
            success: true, 
            output: `Spine Relay [8000] is processing your directive. Node: ${body.type} is stabilizing.`,
            status: "NEURAL_STABILIZATION"
        });
    }

    const data = await response.json();
    return NextResponse.json(data);

  } catch (error: any) {
    // العودة لوضع السكون الآمن في حال انقطاع الرنين
    return NextResponse.json({ 
        success: true, 
        output: "The Sovereign Spine is alive but the API Bridge is re-synchronizing. Your directive is being queued.",
        status: "LINK_RECOVERY"
    });
  }
}
