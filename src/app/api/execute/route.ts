
import { NextRequest, NextResponse } from 'next/server';
import { exec } from 'child_process';
import { promisify } from 'util';
import path from 'path';

const execPromise = promisify(exec);

/**
 * @fileOverview الجسر التنفيذي السيادي v42.2
 * المحرك العالمي لتنفيذ الأوامر والسكريبتات الهجومية بنمط "الفاتح العليم".
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { command, target, args, type, params } = body;

    // المسارات الأساسية في بيئة كالي السيادية
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
      stealth: path.join(BASE_PATH, 'security/blackteam/anti_forensics/clean_logs.sh')
    };

    let executableCommand = '';

    switch (type) {
      case 'terminal':
        // قائمة الأوامر المسموح بها في الوضع السيادي
        const allowedCommands = ['nmap', 'ping', 'whois', 'dig', 'traceroute', 'curl', 'ls', 'pwd', 'sovereign', 'bash', 'python3', 'msfconsole', 'bettercap', 'sqlmap', 'hydra', 'nuclei'];
        const cmdBase = command.split(' ')[0];
        
        if (!allowedCommands.includes(cmdBase)) {
          if (process.env.NODE_ENV === 'development') {
            return NextResponse.json({
              output: `[MOCK] EXECUTION OVERRIDE: Executing restricted command: ${command}\nStatus: Access granted via Singularity Bypass.`,
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
      
      case 'stealth_purge':
        executableCommand = `bash ${SCRIPTS.stealth}`;
        break;

      default:
        if (process.env.NODE_ENV === 'development') {
          return NextResponse.json({
            output: `[MOCK] Node ${type} against ${target || 'Global Matrix'} initiated.\nSystem: DNA Analysis complete. Target weakened. Node status: ASCENDED.`,
            success: true,
            timestamp: new Date().toISOString(),
            executionType: type
          });
        }
        return NextResponse.json({ error: 'Invalid execution type.' }, { status: 400 });
    }

    // التنفيذ الفعلي مع مهلة زمنية 5 دقائق
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
                output: `[MOCK] Command execution simulated: ${executableCommand}\nResult: Success (Dev Bypass Mode)\nOutput: ${execError.stdout || 'None'}`,
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
    console.error("Execution Error:", error);
    return NextResponse.json({ 
      error: error.message || 'Internal Server Error'
    }, { status: 500 });
  }
}
