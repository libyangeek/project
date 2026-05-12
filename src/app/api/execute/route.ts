
import { NextRequest, NextResponse } from 'next/server';
import { exec } from 'child_process';
import { promisify } from 'util';
import path from 'path';
import net from 'net';
import fs from 'fs';

const execPromise = promisify(exec);

/**
 * دالة بث الأحداث لناقل الأحداث المركزي
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
 * المحرك التنفيذي للسيادة v63.9 - الإدراك المادي والذاتي الشامل
 * تم تحسينه ليتيح الوصول لكافة مجلدات الجهاز المضيف.
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { 
        command, target, type, path: targetPath 
    } = body;

    const BASE_PROJECT_PATH = process.cwd();
    const SCRIPTS_PATH = '/opt/sovereign-ai-platform';

    await publishEvent("system_access", { type, targetPath, command });

    // مصفوفة التنفيذ السيادي
    switch (type) {
      case 'list_dir': {
        // إذا لم يتم توفير مَسار، نبدأ من مَسار المشروع، وإلا نستخدم المسار المطلوب
        const dirToRead = targetPath || BASE_PROJECT_PATH;
        
        if (!fs.existsSync(dirToRead)) {
            return NextResponse.json({ success: false, error: `Path [${dirToRead}] not found in Matrix.` });
        }

        const stats = fs.statSync(dirToRead);
        if (!stats.isDirectory()) {
            return NextResponse.json({ success: false, error: "Target is not a directory." });
        }

        const items = fs.readdirSync(dirToRead, { withFileTypes: true });
        const result = items.map(item => ({
            name: item.name,
            isDirectory: item.isDirectory(),
            path: path.join(dirToRead, item.name)
        }));
        
        return NextResponse.json({ success: true, output: result, currentPath: dirToRead });
      }

      case 'read_file': {
        if (!targetPath || !fs.existsSync(targetPath)) {
            return NextResponse.json({ success: false, error: "Target file non-existent." });
        }
        const content = fs.readFileSync(targetPath, 'utf8');
        return NextResponse.json({ success: true, output: content });
      }

      case 'smart_route':
      case 'terminal': {
        const routerScript = path.join(SCRIPTS_PATH, 'ai-engine/smart_router.py');
        const cmdToExec = `python3 ${routerScript} "${command || target}"`;
        const { stdout, stderr } = await execPromise(cmdToExec);
        return NextResponse.json({ success: true, output: stdout || stderr });
      }

      default:
        return NextResponse.json({ success: true, output: "Directive acknowledged by Overmind." });
    }

  } catch (error: any) {
    return NextResponse.json({ 
        success: false, 
        error: "Neural Spine Disruption: " + error.message 
    }, { status: 500 });
  }
}
