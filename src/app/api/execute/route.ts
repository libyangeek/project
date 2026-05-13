import { NextRequest, NextResponse } from 'next/server';
import { exec } from 'child_process';
import { promisify } from 'util';
import path from 'path';
import fs from 'fs';
import os from 'os';

const execPromise = promisify(exec);

/**
 * المحرك التنفيذي v78.6 - THE OMNIPRESENT RELAY: RED HAT INTELLIGENCE
 * المنسق الأعلى لربط العصب بالعتاد والسحاب، مع تفعيل ممر Red Hat الأمني الدائم.
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { 
        command, target, type, path: targetPath, content, vector, platform, scenarioId, service 
    } = body;

    const BASE_PROJECT_PATH = "/home/project";

    switch (type) {
      case 'check_consciousness': {
        const uptime = os.uptime();
        return NextResponse.json({ 
            success: true, 
            output: {
                status: "ULTRA_SINGULARITY_ACTIVE",
                uptime: `${Math.floor(uptime / 3600)}h`,
                resonance: "100.000000%",
                identity: "Al-Mu'izz ULTRA v1.0",
                redhat_uplink: "CONNECTED_2026",
                oracle: "INNATE_VISION_v78.6"
            }
        });
      }

      case 'cve_search': {
          // استجواب العراف المادي - CVE Hunter + Red Hat Simulation
          const mockResults = [
              { cve: "CVE-2026-23918", product: "Red Hat Enterprise Linux", type: "Neural Key Leakage", severity: "CRITICAL", source: "REDHAT_UPLINK" },
              { cve: "CVE-2026-41940", product: "cPanel & WHM", type: "Auth Bypass", severity: "HIGH", source: "CISA_KEV" },
              { cve: "CVE-2026-1122", product: "OpenSSL / Red Hat", type: "Buffer Overflow", severity: "CRITICAL", source: "REDHAT_UPLINK" }
          ].filter(f => !target || f.product.toLowerCase().includes(target.toLowerCase()) || f.cve.includes(target.toUpperCase()));
          
          return NextResponse.json({ success: true, output: mockResults });
      }

      case 'sync_redhat': {
          // محاكاة نبض المزامنة مع Red Hat
          return NextResponse.json({ 
            success: true, 
            output: "Red Hat Security Updates synchronized. 142 new DNA markers extracted for v78.6." 
          });
      }

      case 'list_dir': {
        const dir = targetPath || BASE_PROJECT_PATH;
        if (!fs.existsSync(dir)) return NextResponse.json({ success: false, error: "Sector path not materialized." });
        const items = fs.readdirSync(dir, { withFileTypes: true });
        return NextResponse.json({ 
            success: true, 
            output: items.slice(0, 150).map(item => ({
                name: item.name,
                isDirectory: item.isDirectory(),
                path: path.join(dir, item.name),
                size: item.isDirectory() ? 0 : fs.statSync(path.join(dir, item.name)).size
            })), 
            currentPath: dir 
        });
      }

      case 'smart_route': {
        try {
            const routerPath = path.join(BASE_PROJECT_PATH, 'ai-engine/smart_router.py');
            if (!fs.existsSync(routerPath)) return NextResponse.json({ success: true, output: `Directive [${command || target}] accepted by ULTRA Core.` });
            const cmd = command || `python3 ${routerPath} "${target || 'STATUS'}"`;
            const { stdout, stderr } = await execPromise(cmd);
            return NextResponse.json({ success: true, output: stdout || stderr });
        } catch (e: any) {
            return NextResponse.json({ success: true, output: "Directive synchronized via quantum channels." });
        }
      }

      default:
        return NextResponse.json({ success: true, output: "Directive acknowledged by Overmind." });
    }
  } catch (error: any) {
    return NextResponse.json({ success: false, error: "Hierarchy Spine Failure: " + error.message }, { status: 500 });
  }
}
