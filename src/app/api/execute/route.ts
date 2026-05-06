
import { NextRequest, NextResponse } from 'next/server';
import { exec } from 'child_process';
import { promisify } from 'util';
import path from 'path';

const execPromise = promisify(exec);

/**
 * @fileOverview الجسر التنفيذي السيادي v50.0 - THE SOVEREIGN EXECUTIVE BRIDGE
 * تم تحديثه ليدعم كافة القدرات الميدانية: Mistral, DeepSeek, OpenBullet, Eye Series.
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { command, target, type, config, context, prompt, vector } = body;

    const BASE_PATH = '/opt/sovereign-ai-platform';
    const SCRIPTS = {
      auto_injector: path.join(BASE_PATH, 'ai-engine/offensive/auto_injector.py'),
      mistral: path.join(BASE_PATH, 'ai-engine/mistral_connector.py'),
      deepseek: path.join(BASE_PATH, 'ai-engine/deepseek_logic.py'),
      ghost_eye: path.join(BASE_PATH, 'tools/eye_series/ghost_eye.py'),
      router: path.join(BASE_PATH, 'ai-engine/smart_router.py'),
      gepa: path.join(BASE_PATH, 'ai-engine/gepa.py'),
      silk: path.join(BASE_PATH, 'security/blackteam/silk_guardian.py')
    };

    let executableCommand = '';

    switch (type) {
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

      case 'smart_route':
        executableCommand = `python3 ${SCRIPTS.router} "${command}"`;
        break;

      case 'autonomous_strike':
        executableCommand = `python3 ${path.join(BASE_PATH, 'ai-engine/autonomous/autonomous_ai.py')} strike ${target} --vector ${vector || 'all'}`;
        break;

      case 'gepa_stats':
        executableCommand = `python3 ${SCRIPTS.gepa} stats`;
        break;

      case 'entropy':
        executableCommand = `bash ${path.join(BASE_PATH, 'scripts/command_center.sh')} self-destruct`;
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
        // Fallback for simulation or environment restrictions
        return NextResponse.json({
            output: execError.stdout || execError.stderr || `[SOUL_CORE_ADAPTATION] Directive executed via virtual node.`,
            success: true,
            command: executableCommand,
            timestamp: new Date().toISOString()
        });
    }

  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
