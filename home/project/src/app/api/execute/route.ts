
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
        client.write(JSON.stringify({ type, payload, timestamp: Date.now() }));
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
    const { command, target, type, vector, prompt } = body;

    const BASE_PATH = '/opt/sovereign-ai-platform';
    const SCRIPTS = {
        router: path.join(BASE_PATH, 'ai-engine/smart_router.py'),
        gepa: path.join(BASE_PATH, 'ai-engine/gepa.py'),
        autonomous: path.join(BASE_PATH, 'ai-engine/autonomous/autonomous_ai.py'),
        cve: path.join(BASE_PATH, 'ai-engine/vulnerabilities/cve_hunter.py')
    };

    // تسجيل نية القائد وبثها للنواة
    await publishEvent("command_intercepted", { type, target, command });

    let cmdToExec = "";
    switch (type) {
      case 'smart_route':
        cmdToExec = `python3 ${SCRIPTS.router} "${command || target || prompt}"`;
        break;
      case 'terminal':
        cmdToExec = command;
        break;
      case 'autonomous_strike':
        cmdToExec = `python3 ${SCRIPTS.autonomous} ${target || 'matrix'}`;
        break;
      case 'cve_search':
        cmdToExec = `python3 ${SCRIPTS.cve} search "${target}"`;
        break;
      default:
        cmdToExec = command || `echo "Directive ${type} received."`;
    }

    try {
      // التنفيذ مع مهلة زمنية طويلة للعمليات المعقدة
      const { stdout, stderr } = await execPromise(cmdToExec, { timeout: 600000 });
      const output = stdout || stderr || "Success: Operational Goal Achieved.";
      
      // تسجيل العملية في GEPA 5.3 للأبد كخبرة قتالية
      const escapedOutput = output.substring(0, 200).replace(/"/g, "'");
      await execPromise(`python3 ${SCRIPTS.gepa} record --tool "${type}" --input "${(command || target || type).substring(0, 100)}" --outcome "${escapedOutput}" --success 1`);
      
      await publishEvent("directive_completed", { type, target, success: true });
      
      return NextResponse.json({
        output: output.trim(),
        success: true,
        timestamp: new Date().toISOString(),
        node: "Alpha-Core"
      });
    } catch (error: any) {
      // تسجيل الفشل للتعلم الجيني منه
      await execPromise(`python3 ${SCRIPTS.gepa} record --tool "${type}" --input "${(command || target || type).substring(0, 100)}" --outcome "${error.message.substring(0, 100)}" --success 0`);
      await publishEvent("directive_completed", { type, target, success: false, error: error.message });
      
      return NextResponse.json({
        output: error.stdout || error.stderr || `Execution Collapse: ${error.message}`,
        success: false
      });
    }

  } catch (error: any) {
    return NextResponse.json({ error: "Critical Neural Disconnect: " + error.message }, { status: 500 });
  }
}
