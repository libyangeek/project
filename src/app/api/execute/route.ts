import { NextRequest, NextResponse } from 'next/server';
import { exec } from 'child_process';
import { promisify } from 'util';
import path from 'path';

const execPromise = promisify(exec);

export async function POST(req: NextRequest) {
  try {
    const { command, target, args, type } = await req.json();

    // مسارات السكريبتات
    const BASE_PATH = '/opt/sovereign-ai-platform';
    const SCRIPTS = {
      apex: path.join(BASE_PATH, 'ai-engine/offensive/apex_brain.py'),
      osint: path.join(BASE_PATH, 'osint/osint_master.py'),
      gepa: path.join(BASE_PATH, 'gepa/gepa_v35.py'),
      polymorph: path.join(BASE_PATH, 'evasion/polymorph_engine.py')
    };

    let fullCommand = '';

    // بناء الأمر بناءً على النوع المطلوب
    switch (type) {
      case 'terminal':
        // فحص الأوامر المسموح بها في المحطة
        const allowedCommands = ['nmap', 'ping', 'whois', 'dig', 'traceroute', 'curl'];
        const cmdBase = command.split(' ')[0];
        if (!allowedCommands.includes(cmdBase)) {
          return NextResponse.json({ error: 'Command not authorized by Sovereign Core.' }, { status: 403 });
        }
        fullCommand = command;
        break;
      
      case 'apex':
        fullCommand = `python3 ${SCRIPTS.apex} ${target}`;
        break;
      
      case 'osint':
        fullCommand = `python3 ${SCRIPTS.osint} ${args} ${target}`;
        break;

      case 'polymorph':
        fullCommand = `python3 ${SCRIPTS.polymorph} ${target}`;
        break;

      default:
        return NextResponse.json({ error: 'Invalid execution type.' }, { status: 400 });
    }

    // تنفيذ الأمر
    const { stdout, stderr } = await execPromise(fullCommand);

    return NextResponse.json({
      output: stdout || stderr,
      success: !stderr,
      timestamp: new Date().toISOString()
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}