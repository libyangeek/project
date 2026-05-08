import { NextRequest, NextResponse } from 'next/server';
import { exec } from 'child_process';
import { promisify } from 'util';
import path from 'path';
import net from 'net';

const execPromise = promisify(exec);

/**
 * بث الأحداث لناقل الأحداث المركزي لضمان الاستجابة المستقلة
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
      setTimeout(() => resolve(false), 500);
    } catch (e) {
      resolve(false);
    }
  });
}

/**
 * المحرك التنفيذي للسيادة v53.5 - الاستقلالية المطلقة مع تسجيل GEPA
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { command, target, type } = body;

    const BASE_PATH = '/opt/sovereign-ai-platform';
    const ROUTER_PATH = path.join(BASE_PATH, 'ai-engine/smart_router.py');
    const GEPA_RECORDER = path.join(BASE_PATH, 'ai-engine/gepa.py');

    // تسجيل نية القائد وبثها للنواة
    await publishEvent("command_intercepted", { type, target, command });

    let cmdToExec = "";
    switch (type) {
      case 'smart_route':
        cmdToExec = `python3 ${ROUTER_PATH} "${command || target}"`;
        break;
      case 'terminal':
        cmdToExec = command;
        break;
      default:
        cmdToExec = `echo "Directive ${type} received."`;
    }

    try {
      const { stdout, stderr } = await execPromise(cmdToExec, { timeout: 300000 });
      const output = stdout || stderr || "Success.";
      
      // تسجيل العملية في GEPA 5.3 للأبد
      await execPromise(`python3 ${GEPA_RECORDER} record --tool "${type}" --input "${command || target}" --outcome "${output.substring(0, 100)}" --success 1`);
      
      await publishEvent("directive_completed", { type, target, success: true });
      
      return NextResponse.json({
        output: output.trim(),
        success: true,
        timestamp: new Date().toISOString()
      });
    } catch (error: any) {
      // تسجيل الفشل للتعلم منه
      await execPromise(`python3 ${GEPA_RECORDER} record --tool "${type}" --input "${command || target}" --outcome "${error.message}" --success 0`);
      return NextResponse.json({
        output: error.stdout || error.stderr || `Failure: ${error.message}`,
        success: false
      });
    }

  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}