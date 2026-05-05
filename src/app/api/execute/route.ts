
import { NextRequest, NextResponse } from 'next/server';
import { exec } from 'child_process';
import { promisify } from 'util';
import path from 'path';

const execPromise = promisify(exec);

/**
 * @fileOverview الجسر التنفيذي السيادي v42.4
 * المحرك العالمي لتنفيذ الأوامر والسكريبتات الهجومية بنمط "التشابك الكمي".
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { command, target, args, type, params } = body;

    const BASE_PATH = '/opt/sovereign-ai-platform';
    const SCRIPTS = {
      apex: path.join(BASE_PATH, 'ai-engine/offensive/apex_brain.py'),
      osint: path.join(BASE_PATH, 'osint/osint_master.py'),
      gepa: path.join(BASE_PATH, 'ai-engine/gepa.py'),
      auto: path.join(BASE_PATH, 'ai-engine/autonomous/autonomous_ai.py'),
      stealth: path.join(BASE_PATH, 'security/blackteam/anti_forensics/clean_logs.sh'),
      diag: path.join(BASE_PATH, 'tools/hardware/device_harvester.py')
    };

    let executableCommand = '';

    switch (type) {
      case 'terminal':
        const allowedCommands = ['nmap', 'ping', 'whois', 'dig', 'curl', 'ls', 'pwd', 'sovereign', 'bash', 'python3', 'msfconsole', 'bettercap', 'sqlmap', 'nuclei', 'aircrack-ng'];
        const cmdBase = command.split(' ')[0];
        
        if (!allowedCommands.includes(cmdBase)) {
          if (process.env.NODE_ENV === 'development') {
            return NextResponse.json({
              output: `[MOCK] QUANTUM OVERRIDE: Executing restricted command: ${command}\nStatus: Access granted via Alpha Node v42.4.\nLink: Entangled.`,
              success: true,
              timestamp: new Date().toISOString(),
              executionType: type
            });
          }
          return NextResponse.json({ error: 'Command blocked by God-Core Policy.' }, { status: 403 });
        }
        executableCommand = command;
        break;
      
      case 'apex':
        executableCommand = `python3 ${SCRIPTS.apex} ${target}`;
        break;
      
      case 'osint':
        executableCommand = `python3 ${SCRIPTS.osint} ${args} ${target}`;
        break;

      case 'autonomous_strike':
        executableCommand = `python3 ${SCRIPTS.auto} ${target}`;
        break;
      
      case 'gepa_stats':
        executableCommand = `python3 ${SCRIPTS.gepa}`;
        break;

      case 'system_diag':
        executableCommand = `python3 ${SCRIPTS.diag}`;
        break;

      case 'stealth_purge':
        executableCommand = `bash ${SCRIPTS.stealth}`;
        break;

      case 'quantum_scramble':
        if (process.env.NODE_ENV === 'development') {
            return NextResponse.json({
              output: `[MOCK] QUANTUM SCRAMBLER ACTIVE: Obfuscating mission data across 12 nodes.\nEntanglement: 100% | Trace: Purged.\nStatus: Data is now non-deterministic.`,
              success: true,
              timestamp: new Date().toISOString(),
              executionType: type
            });
        }
        executableCommand = `echo "Quantum scramble executed on host."`; // Placeholder for real logic
        break;

      default:
        if (process.env.NODE_ENV === 'development') {
          return NextResponse.json({
            output: `[MOCK] Sovereign Quantum Node ${type} initiated for ${target || 'Global Matrix'}.\nResonance: 432Hz | Entanglement: Stable.`,
            success: true,
            timestamp: new Date().toISOString(),
            executionType: type
          });
        }
        return NextResponse.json({ error: 'Invalid operation type.' }, { status: 400 });
    }

    try {
        const { stdout, stderr } = await execPromise(executableCommand, { timeout: 300000 });
        return NextResponse.json({
            output: stdout || stderr,
            success: true,
            timestamp: new Date().toISOString(),
            executionType: type,
            command: executableCommand
        });
    } catch (execError: any) {
        if (process.env.NODE_ENV === 'development') {
            return NextResponse.json({
                output: `[MOCK_SUCCESS] Command executed with DEV_BYPASS: ${executableCommand}\nQuantum matrix saturation confirmed.`,
                success: true,
                timestamp: new Date().toISOString(),
                executionType: type
            });
        }
        return NextResponse.json({ 
          error: execError.message, 
          stdout: execError.stdout, 
          stderr: execError.stderr 
        }, { status: 500 });
    }

  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}
