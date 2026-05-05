import { NextRequest, NextResponse } from 'next/server';
import { exec } from 'child_process';
import { promisify } from 'util';

const execPromise = promisify(exec);

export async function POST(req: NextRequest) {
  try {
    const { command, target, args } = await req.json();

    // صيانة أمنية بسيطة لمنع حقن الأوامر الضارة خارج النطاق المسموح
    const allowedCommands = ['python3', 'bash', 'nmap', 'sqlmap'];
    const cmdBase = command.split(' ')[0];

    if (!allowedCommands.includes(cmdBase)) {
      return NextResponse.json({ error: 'Command not authorized by Sovereign Core.' }, { status: 403 });
    }

    // بناء الأمر التنفيذي
    let fullCommand = `${command} ${target || ''} ${args || ''}`;
    
    // تنفيذ الأمر (في بيئة محكومة)
    const { stdout, stderr } = await execPromise(fullCommand);

    return NextResponse.json({
      output: stdout || stderr,
      success: !stderr,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
