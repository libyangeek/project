
import { NextRequest, NextResponse } from 'next/server';
import { exec } from 'child_process';
import { promisify } from 'util';
import path from 'path';
import net from 'net';
import fs from 'fs';

const execPromise = promisify(exec);

async function publishEvent(type: string, payload: any) {
  return new Promise((resolve) => {
    try {
      const client = net.createConnection('/tmp/muizz_event_bus.sock');
      client.on('connect', () => {
        client.write(JSON.stringify({ type, payload }));
        client.end();
        resolve(true);
      });
      client.on('error') ? client.on('error', () => resolve(false)) : null;
      setTimeout(() => resolve(false), 500);
    } catch (e) {
      resolve(false);
    }
  });
}

/**
 * المحرك التنفيذي للسيادة v64.0 - تمكين السيطرة المادية الشاملة
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { 
        command, target, type, path: targetPath, content, batchPaths 
    } = body;

    const BASE_PROJECT_PATH = process.cwd();
    const SCRIPTS_PATH = '/opt/sovereign-ai-platform';

    await publishEvent("physical_access_v64", { type, targetPath, command });

    switch (type) {
      case 'list_dir': {
        const dirToRead = targetPath || BASE_PROJECT_PATH;
        if (!fs.existsSync(dirToRead)) {
            return NextResponse.json({ success: false, error: `Path [${dirToRead}] is outside the Matrix visibility.` });
        }
        const stats = fs.statSync(dirToRead);
        if (!stats.isDirectory()) {
            return NextResponse.json({ success: false, error: "Target is not a directory." });
        }
        const items = fs.readdirSync(dirToRead, { withFileTypes: true });
        const result = items.map(item => {
            const fullPath = path.join(dirToRead, item.name);
            let size = 0;
            try { size = fs.statSync(fullPath).size; } catch(e){}
            return {
                name: item.name,
                isDirectory: item.isDirectory(),
                path: fullPath,
                size: size
            };
        });
        return NextResponse.json({ success: true, output: result, currentPath: dirToRead });
      }

      case 'read_file': {
        if (!targetPath || !fs.existsSync(targetPath)) {
            return NextResponse.json({ success: false, error: "Target file non-existent." });
        }
        const content = fs.readFileSync(targetPath, 'utf8');
        return NextResponse.json({ success: true, output: content });
      }

      case 'read_batch': {
        if (!batchPaths || !Array.isArray(batchPaths)) {
            return NextResponse.json({ success: false, error: "Missing batch paths for analysis." });
        }
        const results = batchPaths.map(p => ({
            path: p,
            content: fs.existsSync(p) ? fs.readFileSync(p, 'utf8') : "FILE_NOT_FOUND"
        }));
        return NextResponse.json({ success: true, output: results });
      }

      case 'write_file': {
        if (!targetPath || content === undefined) {
            return NextResponse.json({ success: false, error: "Missing path or content for Genetic Injection." });
        }
        const dir = path.dirname(targetPath);
        if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
        
        fs.writeFileSync(targetPath, content, 'utf8');
        await publishEvent("genetic_injection_success", { path: targetPath });
        return NextResponse.json({ success: true, message: "DNA Pulse Stabilized: File rewritten." });
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
    return NextResponse.json({ success: false, error: "Neural Spine Disruption: " + error.message }, { status: 500 });
  }
}
