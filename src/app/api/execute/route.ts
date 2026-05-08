
import { NextRequest, NextResponse } from 'next/server';
import { exec } from 'child_process';
import { promisify } from 'util';
import path from 'path';
import net from 'net';

const execPromise = promisify(exec);

/**
 * دالة بث الأحداث لناقل الأحداث المركزي لضمان الاستجابة المستقلة
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
 * المحرك التنفيذي للسيادة v53.5 - الاستقلالية المطلقة
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
      router: path.join(BASE_PATH, 'ai-engine/smart_router.py'),
      cve: path.join(BASE_PATH, 'ai-engine/vulnerabilities/cve_hunter.py'),
      audit: path.join(BASE_PATH, 'ai-engine/kernel/kernel_monitor.py'),
      autonomous: path.join(BASE_PATH, 'ai-engine/autonomous/autonomous_ai.py')
    };

    // تسجيل نية القائد وبثها للنواة المستقلة
    await publishEvent("command_intercepted", { type, target, command });

    let cmdToExec = "";

    switch (type) {
      case 'smart_route':
      case 'terminal':
        cmdToExec = `python3 ${SCRIPTS.router} "${command || target}"`;
        break;
      case 'kill_chain':
        // استدعاء سلسلة الإبادة المستقلة
        cmdToExec = `python3 ${SCRIPTS.autonomous} ${target}`;
        break;
      case 'kernel_audit':
        cmdToExec = `python3 ${SCRIPTS.audit}`;
        break;
      case 'cve_search':
        cmdToExec = `python3 ${SCRIPTS.cve} search "${target}"`;
        break;
      default:
        cmdToExec = command ? command : `echo "Directive ${type} acknowledged by Overmind."`;
    }

    // التنفيذ مع حماية ضد أخطاء الـ JSON
    try {
      const { stdout, stderr } = await execPromise(cmdToExec, { timeout: 300000 });
      const output = stdout || stderr || "Success: Objective Neutralized.";
      
      await publishEvent("directive_completed", { type, target, success: true });
      
      return NextResponse.json({
        output: output.trim(),
        success: true,
        node: "Alpha-Core",
        timestamp: new Date().toISOString()
      });
    } catch (error: any) {
      await publishEvent("directive_completed", { type, target, success: false, error: error.message });
      return NextResponse.json({
        output: error.stdout || error.stderr || `Execution Failure: ${error.message}`,
        success: false,
        error: error.message
      });
    }

  } catch (error: any) {
    return NextResponse.json({ 
        output: "Critical Neural Link Error.", 
        success: false, 
        error: error.message 
    }, { status: 500 });
  }
}
