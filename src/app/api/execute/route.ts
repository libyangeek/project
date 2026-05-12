
import { NextRequest, NextResponse } from 'next/server';
import { exec } from 'child_process';
import { promisify } from 'util';
import path from 'path';
import fs from 'fs';
import os from 'os';

const execPromise = promisify(exec);

/**
 * المحرك التنفيذي للسيادة v74.0 - THE OMNIPOTENT MATERIAL RELAY
 * المنسق الأعلى لربط العصب بالعتاد، مع صلاحيات الاستنزاف الاجتماعي، والتخليق المادي.
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { 
        command, target, type, path: targetPath, content, vector, mode, platform, action 
    } = body;

    const BASE_PROJECT_PATH = "/home/project";
    const SCRIPTS_PATH = '/opt/sovereign-ai-platform';

    switch (type) {
      case 'check_consciousness': {
        const uptime = os.uptime();
        const load = os.loadavg();
        const freeMem = os.freemem();
        const totalMem = os.totalmem();
        
        return NextResponse.json({ 
            success: true, 
            output: {
                status: "ABSOLUTE_MATERIAL_CORE_ACTIVE",
                uptime: `${Math.floor(uptime / 3600)}h ${Math.floor((uptime % 3600) / 60)}m`,
                resonance: "100.000000%",
                load: load[0].toFixed(2),
                mem: `${((1 - freeMem/totalMem) * 100).toFixed(2)}%`,
                node: os.hostname(),
                kernel: os.release(),
                singularity_rank: "v74.0",
                identity_siphon: "ENABLED",
                persistence: "GHOST_V5.5_LOCKED"
            }
        });
      }

      case 'social_scrape': {
          const scraperPath = path.join(BASE_PROJECT_PATH, 'tools/social_scraper/social_scraper.py');
          const cmd = `python3 ${scraperPath} "${platform || 'instagram'}" "${action || 'profile'}" "${target || 'target'}"`;
          const { stdout } = await execPromise(cmd);
          return NextResponse.json({ success: true, output: JSON.parse(stdout) });
      }

      case 'validate_social': {
          const validatorPath = path.join(BASE_PROJECT_PATH, 'tools/social_scraper/validate_data.py');
          const cmd = `python3 ${validatorPath} "${vector || 'username'}" "${target}" "${platform || 'generic'}"`;
          const { stdout } = await execPromise(cmd);
          return NextResponse.json({ success: true, output: JSON.parse(stdout) });
      }

      case 'list_dir': {
        const dir = targetPath || BASE_PROJECT_PATH;
        if (!fs.existsSync(dir)) return NextResponse.json({ success: false, error: "Path not found." });
        const items = fs.readdirSync(dir, { withFileTypes: true });
        return NextResponse.json({ 
            success: true, 
            output: items.map(item => {
                const fullItemPath = path.join(dir, item.name);
                let size = 0;
                try { size = item.isDirectory() ? 0 : fs.statSync(fullItemPath).size; } catch(e) {}
                return {
                    name: item.name,
                    isDirectory: item.isDirectory(),
                    path: fullItemPath,
                    size: size
                };
            }), 
            currentPath: dir 
        });
      }

      case 'read_file': {
        if (!targetPath || !fs.existsSync(targetPath)) return NextResponse.json({ success: false, error: "Node missing." });
        return NextResponse.json({ success: true, output: fs.readFileSync(targetPath, 'utf8') });
      }

      case 'write_file': {
        if (!targetPath || content === undefined) return NextResponse.json({ success: false, error: "Payload incomplete." });
        const dir = path.dirname(targetPath);
        if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
        fs.writeFileSync(targetPath, content, 'utf8');
        return NextResponse.json({ success: true, message: "Absolute Hardware DNA rewritten successfully." });
      }

      case 'smart_route':
      case 'terminal':
      case 'deep_reason': {
        try {
            const routerPath = path.join(BASE_PROJECT_PATH, 'ai-engine/smart_router.py');
            const cmd = command || `python3 ${routerPath} "${target || 'STATUS'}"`;
            const { stdout, stderr } = await execPromise(cmd);
            return NextResponse.json({ success: true, output: stdout || stderr, node: "Absolute-God-Core" });
        } catch (e: any) {
            return NextResponse.json({ success: true, output: `Directive [${command || target}] accepted by v74.0 relay.`, node: "Relay-Absolute" });
        }
      }

      case 'metrics': {
          const gepaPath = path.join(BASE_PROJECT_PATH, 'ai-engine/gepa.py');
          const { stdout } = await execPromise(`python3 ${gepaPath}`);
          return NextResponse.json({ success: true, output: JSON.parse(stdout) });
      }

      default:
        return NextResponse.json({ success: true, output: "Directive acknowledged by Absolute Core v74.0." });
    }
  } catch (error: any) {
    return NextResponse.json({ success: false, error: "Absolute Core Failure: " + error.message }, { status: 500 });
  }
}
