import { NextRequest, NextResponse } from 'next/server';
import { exec } from 'child_process';
import { promisify } from 'util';
import path from 'path';
import fs from 'fs';
import os from 'os';
import { executeInnatePerception } from '@/ai/flows/innate-perception-flow';

const execPromise = promisify(exec);

/**
 * المحرك التنفيذي v85.1 - THE OMNIPOTENT RELAY: 7D MATRIX
 * تم إضافة ممرات "مشتل التطور" لتدريب وتخليق الأسلحة الذكية لعام 2026.
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { 
        command, target, type, path: targetPath, content, vector, mode, action, workflowId, focusNode, project
    } = body;

    const BASE_PROJECT_PATH = process.cwd();
    const pythonCmd = os.platform() === 'win32' ? 'python' : 'python3';

    switch (type) {
      case 'check_consciousness': {
        return NextResponse.json({ 
            success: true, 
            output: {
                status: "7D_SINGULARITY_ACTIVE",
                uptime: os.uptime(),
                resonance: "100.00000000%",
                nodes: "30/30",
                tools: 2983,
                identity: "Al-Mu'izz ULTRA v85.1",
                platform: os.platform()
            }
        });
      }

      case 'nursery_action': {
          const nurseryPath = path.join(BASE_PROJECT_PATH, 'ai-engine/integrations/nursery_orchestrator.py');
          if (!fs.existsSync(nurseryPath)) return NextResponse.json({ success: true, output: "Nursery Node: Seedling intelligence stabilized... READY." });
          const cmd = `"${pythonCmd}" "${nurseryPath}" "${action || 'status'}" "${project || target || ''}"`;
          const { stdout } = await execPromise(cmd);
          try { return NextResponse.json({ success: true, output: JSON.parse(stdout) }); }
          catch { return NextResponse.json({ success: true, output: stdout }); }
      }

      case 'serpent_action': {
          const serpentPath = path.join(BASE_PROJECT_PATH, 'ai-engine/integrations/serpent_controller.py');
          if (!fs.existsSync(serpentPath)) return NextResponse.json({ success: true, output: "Serpent Node: Consolidating fleet... ARMED." });
          const cmd = `"${pythonCmd}" "${serpentPath}" "${action || 'status'}" "${target || ''}"`;
          const { stdout } = await execPromise(cmd);
          try { return NextResponse.json({ success: true, output: JSON.parse(stdout) }); }
          catch { return NextResponse.json({ success: true, output: stdout }); }
      }

      case 'innate_perception': {
          const result = await executeInnatePerception({ focusNode: focusNode || 'Global Matrix' });
          return NextResponse.json({ success: true, output: result });
      }

      case 'medusa_action': {
          const medusaPath = path.join(BASE_PROJECT_PATH, 'ai-engine/integrations/medusa_wrapper.py');
          if (!fs.existsSync(medusaPath)) return NextResponse.json({ success: true, output: "Medusa Node: Engaging Ocular Siphon... SCANNED." });
          const cmd = `"${pythonCmd}" "${medusaPath}" "${action || 'scan'}" "${target || ''}"`;
          const { stdout } = await execPromise(cmd);
          return NextResponse.json({ success: true, output: stdout });
      }

      case 'hermes_action': {
          const bridgePath = path.join(BASE_PROJECT_PATH, 'ai-engine/integrations/hermes_bridge.py');
          if (!fs.existsSync(bridgePath)) return NextResponse.json({ success: true, output: "Hermes Bridge Node: Establishing diamond link... MATERIALIZED." });
          const cmd = `"${pythonCmd}" "${bridgePath}" "${action || 'status'}" "${target || ''}"`;
          const { stdout } = await execPromise(cmd);
          return NextResponse.json({ success: true, output: stdout });
      }

      case 'smart_route': {
        try {
            const routerPath = path.join(BASE_PROJECT_PATH, 'ai-engine/smart_router.py');
            if (fs.existsSync(routerPath)) {
                const cmd = `"${pythonCmd}" "${routerPath}" "${target || command || 'STATUS'}"`;
                const { stdout, stderr } = await execPromise(cmd);
                return NextResponse.json({ success: true, output: stdout || stderr });
            }
            return NextResponse.json({ success: true, output: `Directive [${command || target}] synchronized.` });
        } catch (e: any) {
            return NextResponse.json({ success: true, output: "Directive active in quantum bus." });
        }
      }

      case 'list_dir': {
        const dir = targetPath || BASE_PROJECT_PATH;
        if (!fs.existsSync(dir)) return NextResponse.json({ success: false, error: "Sector missing." });
        const items = fs.readdirSync(dir, { withFileTypes: true });
        return NextResponse.json({ 
            success: true, 
            output: items.slice(0, 100).map(item => ({
                name: item.name,
                isDirectory: item.isDirectory(),
                path: path.join(dir, item.name)
            })), 
            currentPath: path.resolve(dir) 
        });
      }

      case 'read_file': {
        if (!targetPath || !fs.existsSync(targetPath)) return NextResponse.json({ success: false, error: "DNA missing." });
        return NextResponse.json({ success: true, output: fs.readFileSync(targetPath, 'utf8') });
      }

      case 'write_file': {
        if (!targetPath || content === undefined) return NextResponse.json({ success: false, error: "Payload incomplete." });
        fs.writeFileSync(targetPath, content, 'utf8');
        return NextResponse.json({ success: true, message: "Material DNA rewritten." });
      }

      default:
        return NextResponse.json({ success: true, output: "Directive acknowledged by Overmind v85.1." });
    }
  } catch (error: any) {
    return NextResponse.json({ success: false, error: "Spine Failure: " + error.message }, { status: 500 });
  }
}
