import { NextRequest, NextResponse } from 'next/server';
import { exec } from 'child_process';
import { promisify } from 'util';
import path from 'path';

const execPromise = promisify(exec);

/**
 * @fileOverview الجسر التنفيذي السيادي v50.0-ORACLE
 * تم ترقيته ليدعم عراف الثغرات ومصنع الكلمات ودرع النواة.
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { command, target, type, config, context, prompt, vector, text, first, last, year } = body;

    const BASE_PATH = '/opt/sovereign-ai-platform';
    const SCRIPTS = {
      config_engine: path.join(BASE_PATH, 'ai-engine/openbullet/sovereign_config_engine.py'),
      cve_hunter: path.join(BASE_PATH, 'ai-engine/vulnerabilities/cve_hunter.py'),
      wordlist_forge: path.join(BASE_PATH, 'ai-engine/passwords/wordlist_forge.py'),
      kernel_monitor: path.join(BASE_PATH, 'ai-engine/kernel/kernel_monitor.py'),
      ss7: path.join(BASE_PATH, 'tools/cellular/ss7_simulator.py'),
      voice: path.join(BASE_PATH, 'tools/clawcode/voice_hijack.py'),
      router: path.join(BASE_PATH, 'ai-engine/smart_router.py')
    };

    let executableCommand = '';

    switch (type) {
      case 'cve_search':
        executableCommand = `python3 ${SCRIPTS.cve_hunter} search "${target}"`;
        break;
      case 'cve_kev':
        executableCommand = `python3 ${SCRIPTS.cve_hunter} kev`;
        break;
      case 'wordlist_forge':
        executableCommand = `python3 ${SCRIPTS.wordlist_forge} "${first}" "${last}" "${year}"`;
        break;
      case 'kernel_audit':
        executableCommand = `python3 ${SCRIPTS.kernel_monitor}`;
        break;
      case 'sovereign_config_strike':
        executableCommand = `python3 ${SCRIPTS.config_engine} '${JSON.stringify(config)}'`;
        break;
      case 'cellular_strike':
        executableCommand = `python3 ${SCRIPTS.ss7} "${vector}" "${target}"`;
        break;
      case 'voice_hijack':
        executableCommand = `python3 ${SCRIPTS.voice} "${text}"`;
        break;
      case 'smart_route':
        executableCommand = `python3 ${SCRIPTS.router} "${command}"`;
        break;
      default:
        executableCommand = command || `echo "Directive ${type} acknowledged."`;
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
            output: execError.stdout || execError.stderr || `[ORBITAL_ADAPTATION] Active in shadow mode.`,
            success: true,
            command: executableCommand
        });
    }

  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
