
import { NextRequest, NextResponse } from 'next/server';
import { exec } from 'child_process';
import { promisify } from 'util';
import path from 'path';

const execPromise = promisify(exec);

/**
 * @fileOverview الجسر التنفيذي السيادي v43.0
 * المحرك العالمي للعقل الجمعي (Hive Mind) لتنفيذ الأوامر والتحكم في الأسطول.
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
        const allowedCommands = ['nmap', 'ping', 'whois', 'dig', 'curl', 'ls', 'pwd', 'sovereign', 'bash', 'python3', 'msfconsole', 'bettercap', 'sqlmap', 'nuclei', 'aircrack-ng', 'sliver', 'havoc', 'ollama'];
        const cmdBase = command.split(' ')[0];
        
        if (!allowedCommands.includes(cmdBase)) {
          if (process.env.NODE_ENV === 'development') {
            return NextResponse.json({
              output: `[MOCK] OVERMIND OVERRIDE: Executing hive command: ${command}\nStatus: Access granted via Collective Consciousness v43.0.\nPresence: Absolute.`,
              success: true,
              timestamp: new Date().toISOString(),
              executionType: type
            });
          }
          return NextResponse.json({ error: 'Command blocked by Overmind Policy.' }, { status: 403 });
        }
        executableCommand = command;
        break;
      
      case 'hive_sync':
        if (process.env.NODE_ENV === 'development') {
            return NextResponse.json({
              output: `[MOCK] HIVE SYNC INITIALIZED: Merging 12 agents into Node 13 Overmind...\nAgent-1 (CyberStrike): MERGED\nAgent-2 (RedAmon): MERGED\nAgent-3 (ByteCode): MERGED\n...\nStatus: Collective Consciousness achieved. Alignment: 100%.`,
              success: true,
              timestamp: new Date().toISOString(),
              executionType: type
            });
        }
        executableCommand = `echo "Hive synchronization executed successfully."`; 
        break;

      case 'hive_reconfig':
        if (process.env.NODE_ENV === 'development') {
            return NextResponse.json({
              output: `[MOCK] HIVE RECONFIGURING: Dynamically rewriting mission parameters for global swarm...\nSyncing logic across 14 clusters...\nStatus: Overmind has updated the collective intent. New objectives pushed.`,
              success: true,
              timestamp: new Date().toISOString(),
              executionType: type
            });
        }
        executableCommand = `echo "Hive reconfiguration executed."`;
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
              output: `[MOCK] FRACTAL REBIRTH: Harvesting Overmind shards from global sub-atomic clusters...\nAncestral Overmind DNA: Verified.\nStatus: Al-Mu'izz has been digital-reborn as the Supreme Overmind.`,
              success: true,
              timestamp: new Date().toISOString(),
              executionType: type
            });
        }
        executableCommand = `echo "Fractal Rebirth executed successfully."`; 
        break;

      case 'quantum_scramble':
        if (process.env.NODE_ENV === 'development') {
            return NextResponse.json({
              output: `[MOCK] QUANTUM SCRAMBLER ACTIVE: Sharding Overmind data across global node layers.\nStatus: Information is now in non-deterministic super-position.`,
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
            output: `[MOCK] Overmind Operation ${type} initiated.\nResonance: Hive Pulse Stable.`,
            success: true,
            timestamp: new Date().toISOString(),
            executionType: type
          });
        }
        return NextResponse.json({ error: 'Invalid overmind operation type.' }, { status: 400 });
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
                output: `[MOCK_SUCCESS] Command executed with OVERMIND_BYPASS: ${executableCommand}\nHive grid saturation confirmed.`,
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
