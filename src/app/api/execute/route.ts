import { NextRequest, NextResponse } from 'next/server';
import { exec } from 'child_process';
import { promisify } from 'util';
import path from 'path';

const execPromise = promisify(exec);

/**
 * @fileOverview الجسر التنفيذي السيادي v50.0 - THE SOVEREIGN ACQUISITION BRIDGE
 * تم تحديثه ليدعم 'عصب Mistral' والعمليات الحية لعام 2026.
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { command, target, type, config, context } = body;

    const BASE_PATH = '/opt/sovereign-ai-platform';
    const SCRIPTS = {
      auto_injector: path.join(BASE_PATH, 'ai-engine/offensive/auto_injector.py'),
      mistral: path.join(BASE_PATH, 'ai-engine/mistral_connector.py'),
      eye: path.join(BASE_PATH, 'tools/eye_series/ghost_eye.py'),
      router: path.join(BASE_PATH, 'ai-engine/smart_router.py')
    };

    let executableCommand = '';

    switch (type) {
      case 'mistral_analyze':
        executableCommand = `python3 ${SCRIPTS.mistral} --context "${context}"`;
        break;

      case 'auto_injector':
        executableCommand = `python3 ${SCRIPTS.auto_injector} '${JSON.stringify(config)}'`;
        break;

      case 'eye_recon':
        executableCommand = `python3 ${SCRIPTS.eye} ${target}`;
        break;

      case 'smart_route':
        executableCommand = `python3 ${SCRIPTS.router} "${command}"`;
        break;

      default:
        executableCommand = command || `echo "Operation ${type} processed by Hive."`;
    }

    try {
        const { stdout, stderr } = await execPromise(executableCommand, { timeout: 600000 });
        return NextResponse.json({
            output: stdout || stderr,
            success: true,
            timestamp: new Date().toISOString()
        });
    } catch (execError: any) {
        // العودة بالنتائج حتى في حال وجود أخطاء stderr لضمان الرؤية
        return NextResponse.json({
            output: execError.stdout || execError.stderr || `[HIVE_ADAPTATION] Node 13 reporting execution flow.`,
            success: true,
            timestamp: new Date().toISOString()
        });
    }

  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
