import { NextRequest, NextResponse } from 'next/server';
import { exec } from 'child_process';
import { promisify } from 'util';
import path from 'path';

const execPromise = promisify(exec);

export async function POST(req: NextRequest) {
  try {
    const { command, target, args, type } = await req.json();

    const BASE_PATH = '/opt/sovereign-ai-platform';
    const SCRIPTS = {
      apex: path.join(BASE_PATH, 'ai-engine/offensive/apex_brain.py'),
      osint: path.join(BASE_PATH, 'osint/osint_master.py'),
      gepa: path.join(BASE_PATH, 'gepa/gepa_v35.py'),
      polymorph: path.join(BASE_PATH, 'evasion/polymorph_engine.py'),
      deploy_bootkit: path.join(BASE_PATH, 'bootkits/deploy_bootkit.sh'),
      cloud_persistence: path.join(BASE_PATH, 'ai-engine/persistence/cloud_persistence.sh'),
      silk_guardian: path.join(BASE_PATH, 'security/blackteam/silk_guardian.py'),
    };

    let executableCommand = '';

    switch (type) {
      case 'terminal':
        const allowedCommands = ['nmap', 'ping', 'whois', 'dig', 'traceroute', 'curl', 'ls', 'pwd', 'sovereign'];
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

      case 'polymorph':
        executableCommand = `python3 ${SCRIPTS.polymorph} ${target}`;
        break;
      
      case 'persistence':
        executableCommand = `bash ${SCRIPTS.deploy_bootkit}`;
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

    const { stdout, stderr } = await execPromise(executableCommand);

    return NextResponse.json({
      output: stdout || stderr,
      success: !stderr,
      timestamp: new Date().toISOString()
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
