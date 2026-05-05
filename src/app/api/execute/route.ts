import { NextRequest, NextResponse } from 'next/server';
import { exec } from 'child_process';
import { promisify } from 'util';
import path from 'path';

const execPromise = promisify(exec);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { command, target, args, type } = body;

    // المسارات الأساسية في بيئة كالي
    const BASE_PATH = '/opt/sovereign-ai-platform';
    const SCRIPTS = {
      apex: path.join(BASE_PATH, 'ai-engine/offensive/apex_brain.py'),
      osint: path.join(BASE_PATH, 'osint/osint_master.py'),
      gepa: path.join(BASE_PATH, 'ai-engine/gepa.py'),
      polymorph: path.join(BASE_PATH, 'ai-engine/gepa_fixer.py'),
      cloud_persistence: path.join(BASE_PATH, 'ai-engine/persistence/cloud_persistence.sh'),
      silk_guardian: path.join(BASE_PATH, 'security/blackteam/silk_guardian.py'),
      autonomous: path.join(BASE_PATH, 'ai-engine/autonomous/autonomous_ai.py')
    };

    let executableCommand = '';

    switch (type) {
      case 'terminal':
        // قائمة بيضاء بالأوامr المسموح بها من الواجهة
        const allowedCommands = ['nmap', 'ping', 'whois', 'dig', 'traceroute', 'curl', 'ls', 'pwd', 'sovereign', 'bash', 'python3'];
        const cmdBase = command.split(' ')[0];
        if (!allowedCommands.includes(cmdBase)) {
          return NextResponse.json({ error: 'Command not authorized by Sovereign Core.' }, { status: 403 });
        }
        executableCommand = command;
        break;
      
      case 'apex':
        executableCommand = `python3 ${SCRIPTS.apex} ${target}`;
        break;
      
      case 'osint':
        executableCommand = `python3 ${SCRIPTS.osint} ${args} ${target}`;
        break;

      case 'gepa_stats':
        executableCommand = `python3 ${SCRIPTS.gepa}`;
        break;

      case 'autonomous_strike':
        executableCommand = `python3 ${SCRIPTS.autonomous} ${target}`;
        break;

      case 'cloud':
        executableCommand = `bash ${SCRIPTS.cloud_persistence}`;
        break;
      
      case 'silk_guardian':
        executableCommand = `python3 ${SCRIPTS.silk_guardian}`;
        break;

      default:
        return NextResponse.json({ error: 'Invalid execution type.' }, { status: 400 });
    }

    // إضافة مهلة زمنية للتنفيذ (Timeout 5 minutes)
    const { stdout, stderr } = await execPromise(executableCommand, { timeout: 300000 });

    return NextResponse.json({
      output: stdout || stderr,
      success: true,
      timestamp: new Date().toISOString(),
      executionType: type
    });
  } catch (error: any) {
    console.error("Execution Error:", error);
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}
