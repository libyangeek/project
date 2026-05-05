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
      gepa_fixer: path.join(BASE_PATH, 'ai-engine/gepa_fixer.py'),
      cloud: path.join(BASE_PATH, 'ai-engine/persistence/cloud_persistence.sh'),
      silk: path.join(BASE_PATH, 'security/blackteam/silk_guardian.py'),
      auto: path.join(BASE_PATH, 'ai-engine/autonomous/autonomous_ai.py'),
      apk: path.join(BASE_PATH, 'mobile/advanced/extract_apk.sh'),
      wordlist: path.join(BASE_PATH, 'ai-engine/ai-smart-wordlist-flow.ts') // Placeholder for flow
    };

    let executableCommand = '';

    switch (type) {
      case 'terminal':
        const allowedCommands = ['nmap', 'ping', 'whois', 'dig', 'traceroute', 'curl', 'ls', 'pwd', 'sovereign', 'bash', 'python3', 'msfconsole', 'bettercap'];
        const cmdParts = command.split(' ');
        const cmdBase = cmdParts[0];
        if (!allowedCommands.includes(cmdBase)) {
          if (process.env.NODE_ENV === 'development') {
            return NextResponse.json({
              output: `[MOCK] Execution of restricted command: ${command}\nResult: Access granted by Override.`,
              success: true,
              timestamp: new Date().toISOString(),
              executionType: type
            });
          }
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
        executableCommand = `python3 ${SCRIPTS.auto} ${target}`;
        break;

      case 'cloud':
        executableCommand = `bash ${SCRIPTS.cloud}`;
        break;
      
      case 'silk_guardian':
        executableCommand = `python3 ${SCRIPTS.silk}`;
        break;

      case 'extract_apk':
        executableCommand = `bash ${SCRIPTS.apk}`;
        break;

      default:
        if (process.env.NODE_ENV === 'development') {
          return NextResponse.json({
            output: `[MOCK] Task ${type} for ${target} initiated.\nSystem: Analysis complete. Target weakened.`,
            success: true,
            timestamp: new Date().toISOString(),
            executionType: type
          });
        }
        return NextResponse.json({ error: 'Invalid execution type.' }, { status: 400 });
    }

    // Execute command with timeout
    const { stdout, stderr } = await execPromise(executableCommand, { timeout: 300000 });

    return NextResponse.json({
      output: stdout || stderr,
      success: true,
      timestamp: new Date().toISOString(),
      executionType: type
    });
  } catch (error: any) {
    console.error("Execution Error:", error);
    if (process.env.NODE_ENV === 'development') {
        return NextResponse.json({
          output: `[MOCK] ERROR: Failed to reach backend. Simulating local execution for ${body.type}...\nStatus: Success (Dev Bypass)`,
          success: true,
          timestamp: new Date().toISOString(),
          executionType: body.type
        });
    }
    return NextResponse.json({ 
      error: error.message || 'Internal Server Error',
      stdout: error.stdout,
      stderr: error.stderr
    }, { status: 500 });
  }
}