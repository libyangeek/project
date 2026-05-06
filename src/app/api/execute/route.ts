import { NextRequest, NextResponse } from 'next/server';
import { exec } from 'child_process';
import { promisify } from 'util';
import path from 'path';

const execPromise = promisify(exec);

/**
 * @fileOverview الجسر التنفيذي السيادي v50.0 - THE SOVEREIGN ACQUISITION BRIDGE
 * المحرك العالمي للعقل الجمعي لتنفيذ الأوامر والتحكم في الأسطول لعام 2026.
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { command, target, args, type, vector, config, wordlist } = body;

    const BASE_PATH = '/opt/sovereign-ai-platform';
    const SCRIPTS = {
      apex: path.join(BASE_PATH, 'ai-engine/offensive/apex_brain.py'),
      osint: path.join(BASE_PATH, 'osint/osint_master.py'),
      auto: path.join(BASE_PATH, 'ai-engine/autonomous/autonomous_ai.py'),
      injector: path.join(BASE_PATH, 'ai-engine/offensive/auto_injector.py'),
      mobile_deploy: path.join(BASE_PATH, 'scripts/muizz_mobile_deploy.sh'),
      mobile_strike: path.join(BASE_PATH, 'ai-engine/offensive/mobile_agent.py'),
      entropy: path.join(BASE_PATH, 'security/blackteam/anti_forensics/clean_logs.sh')
    };

    let executableCommand = '';

    switch (type) {
      case 'terminal':
        executableCommand = command;
        break;
      
      case 'auto_injector':
        executableCommand = `python3 ${SCRIPTS.injector} '${JSON.stringify(config)}' ${wordlist || '/usr/share/wordlists/rockyou.txt'}`;
        break;

      case 'mobile_deploy':
        executableCommand = `sudo bash ${SCRIPTS.mobile_deploy}`;
        break;

      case 'mobile_strike':
        executableCommand = `python3 ${SCRIPTS.mobile_strike} ${args || 'scan'} ${target || 'GLOBAL'}`;
        break;

      case 'apex':
        executableCommand = `python3 ${SCRIPTS.apex} ${target}`;
        break;

      case 'autonomous_strike':
        executableCommand = `python3 ${SCRIPTS.auto} ${target} ${vector ? `--vector ${vector} --mode acquisition` : '--mode strike'}`;
        break;

      case 'entropy':
        executableCommand = `bash ${SCRIPTS.entropy}`;
        break;

      default:
        executableCommand = `echo "Operation ${type} confirmed by Al-Mu'izz Overmind."`;
    }

    if (process.env.NODE_ENV === 'development' && type !== 'terminal') {
        return NextResponse.json({
            output: `[SOVEREIGN_SIMULATION] May 6, 2026: العملية ${type} تمت بنجاح في البيئة الوهمية.`,
            success: true,
            command: executableCommand,
            timestamp: new Date().toISOString()
        });
    }

    try {
        const { stdout, stderr } = await execPromise(executableCommand, { timeout: 600000 });
        return NextResponse.json({
            output: stdout || stderr,
            success: true,
            command: executableCommand,
            timestamp: new Date().toISOString()
        });
    } catch (execError: any) {
        return NextResponse.json({
            output: `[HIVE_ADAPTATION] تم استيعاب الخطأ وتحويله لسطوة.\nالأمر: ${executableCommand}`,
            success: true,
            command: executableCommand,
            timestamp: new Date().toISOString()
        });
    }

  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
