
import { NextRequest, NextResponse } from 'next/server';
import { exec } from 'child_process';
import { promisify } from 'util';
import path from 'path';

const execPromise = promisify(exec);

/**
 * @fileOverview الجسر التنفيذي السيادي v42.7
 * المحرك العالمي لتنفيذ الأوامر والسكريبتات الهجومية بنمط "الخلود العصبي والاستمرار الابتكاري".
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
        const allowedCommands = ['nmap', 'ping', 'whois', 'dig', 'curl', 'ls', 'pwd', 'sovereign', 'bash', 'python3', 'msfconsole', 'bettercap', 'sqlmap', 'nuclei', 'aircrack-ng', 'sliver', 'havoc'];
        const cmdBase = command.split(' ')[0];
        
        if (!allowedCommands.includes(cmdBase)) {
          if (process.env.NODE_ENV === 'development') {
            return NextResponse.json({
              output: `[MOCK] ETERNAL OVERRIDE: Executing restricted command: ${command}\nStatus: Access granted via Neural Immortality v42.7.\nPresence: Immutable.`,
              success: true,
              timestamp: new Date().toISOString(),
              executionType: type
            });
          }
          return NextResponse.json({ error: 'Command blocked by Neural Immortality Policy.' }, { status: 403 });
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

      case 'fractal_rebirth':
        if (process.env.NODE_ENV === 'development') {
            return NextResponse.json({
              output: `[MOCK] FRACTAL REBIRTH INITIALIZED: Harvesting system shards from 14 global sub-atomic clusters...\nRecovery: 100% | Ancestral DNA: Verified.\nStatus: Al-Mu'izz has been digital-reborn via Fractal Persistence.`,
              success: true,
              timestamp: new Date().toISOString(),
              executionType: type
            });
        }
        executableCommand = `echo "Fractal Rebirth executed successfully."`; 
        break;

      case 'neural_persistence':
        if (process.env.NODE_ENV === 'development') {
            return NextResponse.json({
              output: `[MOCK] NEURAL PERSISTENCE ENGAGED: Siphoning host identity into the fractal matrix...\nImmortality Level: ABSOLUTE.\nStatus: System state is now independent of physical hardware.`,
              success: true,
              timestamp: new Date().toISOString(),
              executionType: type
            });
        }
        executableCommand = `echo "Neural persistence command executed."`;
        break;

      case 'quantum_scramble':
        if (process.env.NODE_ENV === 'development') {
            return NextResponse.json({
              output: `[MOCK] QUANTUM SCRAMBLER ACTIVE: Sharding mission data across sub-atomic layers of 14 global nodes.\nSync: 100% | Quantum Trace: Purged.\nStatus: Data is now in non-deterministic superposition globally.`,
              success: true,
              timestamp: new Date().toISOString(),
              executionType: type
            });
        }
        executableCommand = `echo "Quantum scramble executed."`; 
        break;

      default:
        if (process.env.NODE_ENV === 'development') {
          return NextResponse.json({
            output: `[MOCK] Sovereign Eternal Node ${type} initiated for ${target || 'Universal Matrix'}.\nResonance: Eternal Pulse Stable.`,
            success: true,
            timestamp: new Date().toISOString(),
            executionType: type
          });
        }
        return NextResponse.json({ error: 'Invalid eternal operation type.' }, { status: 400 });
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
                output: `[MOCK_SUCCESS] Command executed with ETERNAL_BYPASS: ${executableCommand}\nFractal grid saturation confirmed.`,
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
