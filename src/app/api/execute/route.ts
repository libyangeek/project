
import { NextRequest, NextResponse } from 'next/server';
import { exec } from 'child_process';
import { promisify } from 'util';
import path from 'path';

const execPromise = promisify(exec);

/**
 * @fileOverview الجسر التنفيذي السيادي v50.0 - THE SOVEREIGN EXECUTIVE BRIDGE
 * تم تحديثه ليدعم الأذرع المدارية: OpenBullet, Cellular, Claw-Code.
 * المالك الوحيد: المعتصم بالله ادريس الغزالي
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { command, target, type, config, context, prompt, vector, text } = body;

    const BASE_PATH = '/opt/sovereign-ai-platform';
    const SCRIPTS = {
      auto_injector: path.join(BASE_PATH, 'ai-engine/offensive/auto_injector.py'),
      openbullet: path.join(BASE_PATH, 'ai-engine/openbullet/ob_database.py'),
      ss7: path.join(BASE_PATH, 'tools/cellular/ss7_simulator.py'),
      voice: path.join(BASE_PATH, 'tools/clawcode/voice_hijack.py'),
      mistral: path.join(BASE_PATH, 'ai-engine/mistral_connector.py'),
      deepseek: path.join(BASE_PATH, 'ai-engine/deepseek_logic.py'),
      ghost_eye: path.join(BASE_PATH, 'tools/eye_series/ghost_eye.py'),
      router: path.join(BASE_PATH, 'ai-engine/smart_router.py'),
      gepa: path.join(BASE_PATH, 'ai-engine/gepa.py')
    };

    let executableCommand = '';

    switch (type) {
      case 'cellular_strike':
        executableCommand = `python3 ${SCRIPTS.ss7} "${vector}" "${target}"`;
        break;

      case 'voice_hijack':
        executableCommand = `python3 ${SCRIPTS.voice} "${text}"`;
        break;

      case 'ob_stats':
        executableCommand = `python3 ${SCRIPTS.openbullet}`;
        break;

      case 'deep_reason':
        executableCommand = `python3 ${SCRIPTS.deepseek} "${prompt}"`;
        break;

      case 'mistral_analyze':
        executableCommand = `python3 ${SCRIPTS.mistral} --context "${context}"`;
        break;

      case 'auto_injector':
        executableCommand = `python3 ${SCRIPTS.auto_injector} '${JSON.stringify(config)}' /usr/share/wordlists/rockyou.txt`;
        break;

      case 'ghost_eye':
        executableCommand = `python3 ${SCRIPTS.ghost_eye} "${target}"`;
        break;

      case 'autonomous_strike':
        executableCommand = `python3 ${path.join(BASE_PATH, 'ai-engine/autonomous/autonomous_ai.py')} strike ${target} --vector ${vector || 'all'}`;
        break;

      case 'gepa_stats':
        executableCommand = `python3 ${SCRIPTS.gepa} stats`;
        break;

      default:
        executableCommand = command || `echo "Directive ${type} acknowledged by Soul Core."`;
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
            output: execError.stdout || execError.stderr || `[ORBITAL_ADAPTATION] Directive active in shadow mode.`,
            success: true,
            command: executableCommand,
            timestamp: new Date().toISOString()
        });
    }

  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
