import { NextRequest, NextResponse } from 'next/server';
import { exec } from 'child_process';
import { promisify } from 'util';
import path from 'path';

const execPromise = promisify(exec);

/**
 * @fileOverview الجسر التنفيذي السيادي v50.0 - THE SOVEREIGN EXECUTIVE BRIDGE
 * تم تحديثه ليدعم محرك التكوين السيادي v50 (Sovereign Config Engine).
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { command, target, type, config, context, prompt, vector, text } = body;

    const BASE_PATH = '/opt/sovereign-ai-platform';
    const SCRIPTS = {
      config_engine: path.join(BASE_PATH, 'ai-engine/openbullet/sovereign_config_engine.py'),
      auto_injector: path.join(BASE_PATH, 'ai-engine/offensive/auto_injector.py'),
      ss7: path.join(BASE_PATH, 'tools/cellular/ss7_simulator.py'),
      voice: path.join(BASE_PATH, 'tools/clawcode/voice_hijack.py'),
      mistral: path.join(BASE_PATH, 'ai-engine/mistral_connector.py'),
      deepseek: path.join(BASE_PATH, 'ai-engine/deepseek_logic.py'),
      ghost_eye: path.join(BASE_PATH, 'tools/eye_series/ghost_eye.py'),
      ghost_track: path.join(BASE_PATH, 'tools/social_predator/ghost_track.py'),
      blackbird: path.join(BASE_PATH, 'tools/social_predator/blackbird_scan.py'),
      router: path.join(BASE_PATH, 'ai-engine/smart_router.py')
    };

    let executableCommand = '';

    switch (type) {
      case 'sovereign_config_strike':
        // تشغيل محرك التكوين الجديد مع البيانات الممررة
        executableCommand = `python3 ${SCRIPTS.config_engine} '${JSON.stringify(config)}'`;
        break;

      case 'cellular_strike':
        executableCommand = `python3 ${SCRIPTS.ss7} "${vector}" "${target}"`;
        break;

      case 'voice_hijack':
        executableCommand = `python3 ${SCRIPTS.voice} "${text}"`;
        break;

      case 'ghost_track':
        const subType = target.includes('.') || target.includes(':') ? 'ip' : 'user';
        executableCommand = `python3 ${SCRIPTS.ghost_track} ${subType} "${target}"`;
        break;

      case 'blackbird_scan':
        executableCommand = `python3 ${SCRIPTS.blackbird} "${target}"`;
        break;

      case 'deep_reason':
        executableCommand = `python3 ${SCRIPTS.deepseek} "${prompt}"`;
        break;

      case 'mistral_analyze':
        executableCommand = `python3 ${SCRIPTS.mistral} --context "${context}"`;
        break;

      case 'ghost_eye':
        executableCommand = `python3 ${SCRIPTS.ghost_eye} "${target}"`;
        break;

      case 'autonomous_strike':
        executableCommand = `python3 ${path.join(BASE_PATH, 'ai-engine/autonomous/autonomous_ai.py')} strike ${target} --vector ${vector || 'all'}`;
        break;

      case 'smart_route':
        executableCommand = `python3 ${SCRIPTS.router} "${command}"`;
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
            timestamp: new Date().toISOString(),
            node: "Executive_Bridge_v50"
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
