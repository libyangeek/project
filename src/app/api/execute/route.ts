import { NextRequest, NextResponse } from 'next/server';
import { exec } from 'child_process';
import { promisify } from 'util';
import path from 'path';
import net from 'net';

const execPromise = promisify(exec);

/**
 * دالة بث الأحداث لناقل الأحداث المركزي (Event Bus)
 */
async function publishEvent(type: string, payload: any) {
  return new Promise((resolve) => {
    try {
      const client = net.createConnection('/tmp/muizz_event_bus.sock');
      client.on('connect', () => {
        client.write(JSON.stringify({ type, payload }));
        client.end();
        resolve(true);
      });
      client.on('error', () => resolve(false));
      // تأمين الإغلاق في حالة التأخير
      setTimeout(() => resolve(false), 1000);
    } catch (e) {
      resolve(false);
    }
  });
}

/**
 * المحرك التنفيذي للسيادة - يربط الواجهة بالعتاد المادي
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { 
        command, target, type, config, context, 
        vector, text, first, last, year, prompt
    } = body;

    const BASE_PATH = '/opt/sovereign-ai-platform';
    const SCRIPTS = {
      config_engine: path.join(BASE_PATH, 'ai-engine/openbullet/sovereign_config_engine.py'),
      cve_hunter: path.join(BASE_PATH, 'ai-engine/vulnerabilities/cve_hunter.py'),
      wordlist_forge: path.join(BASE_PATH, 'ai-engine/passwords/wordlist_forge.py'),
      kernel_monitor: path.join(BASE_PATH, 'ai-engine/kernel/kernel_monitor.py'),
      ss7: path.join(BASE_PATH, 'tools/cellular/ss7_simulator.py'),
      voice: path.join(BASE_PATH, 'tools/clawcode/voice_hijack.py'),
      router: path.join(BASE_PATH, 'ai-engine/smart_router.py'),
      ghost_track: path.join(BASE_PATH, 'tools/social_predator/ghost_track.py'),
      blackbird: path.join(BASE_PATH, 'tools/social_predator/blackbird_scan.py'),
      ghost_eye: path.join(BASE_PATH, 'tools/eye_series/ghost_eye.py'),
      mistral: path.join(BASE_PATH, 'ai-engine/mistral_connector.py'),
      deepseek: path.join(BASE_PATH, 'ai-engine/deepseek_logic.py')
    };

    // تسجيل نية القائد في ناقل الأحداث
    await publishEvent("directive_received", { type, target, command });

    let executableCommand = '';

    // توجيه الأوامر بناءً على النوع السيادي
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
        executableCommand = `python3 ${SCRIPTS.voice} "${text || command}"`;
        break;
      case 'ghost_track':
        executableCommand = `python3 ${SCRIPTS.ghost_track} ip "${target}"`;
        break;
      case 'blackbird_scan':
        executableCommand = `python3 ${SCRIPTS.blackbird} "${target}"`;
        break;
      case 'mistral_analyze':
        executableCommand = `python3 ${SCRIPTS.mistral} --context "${context}"`;
        break;
      case 'deep_reason':
        executableCommand = `python3 ${SCRIPTS.deepseek} "${prompt}"`;
        break;
      case 'smart_route':
      case 'terminal':
      case 'kill_chain':
        executableCommand = `python3 ${SCRIPTS.router} "${command || target}"`;
        break;
      case 'autonomous_strike':
        executableCommand = `python3 ${path.join(BASE_PATH, 'ai-engine/autonomous/autonomous_ai.py')} ${target}`;
        break;
      default:
        executableCommand = command ? `echo "Executing: ${command}" && ${command}` : `echo "Directive ${type} acknowledged."`;
    }

    try {
        const { stdout, stderr } = await execPromise(executableCommand, { timeout: 600000 });
        await publishEvent("directive_completed", { type, target, success: true });
        return NextResponse.json({
            output: stdout || stderr || "Command executed successfully with no output.",
            success: true,
            command: executableCommand,
            timestamp: new Date().toISOString()
        });
    } catch (execError: any) {
        await publishEvent("directive_completed", { type, target, success: false, error: execError.message });
        return NextResponse.json({
            output: execError.stdout || execError.stderr || `Execution Error: ${execError.message}`,
            success: false,
            command: executableCommand
        });
    }

  } catch (error: any) {
    console.error("Critical Execution Path Error:", error);
    return NextResponse.json({ error: error.message, success: false }, { status: 500 });
  }
}
