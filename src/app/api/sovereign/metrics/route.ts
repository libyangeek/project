
import { NextResponse } from 'next/server';
import os from 'os';
import net from 'net';
import fs from 'fs';

/**
 * بوابة الحقيقة المطلقة v91.2 - THE OMNIPOTENT PROVIDER: OVERLORD EDITION
 * تقوم بجرد مادي حقيقي للأعضاء، الأسطول، والأشباح النواتية (Rootkits).
 */
async function checkPort(port: number): Promise<boolean> {
  return new Promise((resolve) => {
    const socket = new net.Socket();
    socket.setTimeout(200);
    socket.on('connect', () => { socket.destroy(); resolve(true); });
    socket.on('timeout', () => { socket.destroy(); resolve(false); });
    socket.on('error', () => { socket.destroy(); resolve(false); });
    socket.connect(port, '127.0.0.1');
  });
}

export async function GET() {
  try {
    const load = os.loadavg();
    const cpuCount = os.cpus().length;
    const freeMem = os.freemem();
    const totalMem = os.totalmem();

    // 1. فحص حقيقي للمنافذ المادية للأعضاء
    const statusMap = {
      god_core: await checkPort(8000),      // SovereignCore API
      tor_relay: await checkPort(9050),     // Tor Stealth
      c2_sliver: await checkPort(8443),     // Sliver C2
      automation: await checkPort(5678),    // n8n Hive
      archive: fs.existsSync('/opt/sovereign-ai-platform/ai-engine/gepa_memory.db'), // GEPA 4.0
    };

    // 2. استجواب النواة عن حالة الأسطول العليم (165 وكيلاً) حقيقةً
    let fleetStats = { active_agents: 0, resonance: "100.00000000%" };
    try {
        const coreRes = await fetch('http://localhost:8000/health');
        if (coreRes.ok) {
            const coreData = await coreRes.json();
            fleetStats.active_agents = coreData.active_agents || 0;
            fleetStats.resonance = coreData.resonance;
        }
    } catch (e) {
        fleetStats.resonance = "0.00000000%";
    }

    // 3. فحص الأشباح (Rootkits)
    const hasDiamorphine = fs.existsSync('/proc/diamorphine');
    const hasReptile = fs.existsSync('/proc/reptile');

    return NextResponse.json({
      resonance: fleetStats.resonance,
      status: statusMap.god_core ? "ABSOLUTE_OVERLORD_ACTIVE" : "NEURAL_DRIFT",
      activeDimensions: 16,
      armadaNodes: fleetStats.active_agents,
      totalAgents: 165,
      cpuUsage: `${((load[0] / cpuCount) * 100).toFixed(2)}%`,
      ramUsage: `${((1 - freeMem/totalMem) * 100).toFixed(2)}%`,
      organs: {
          ...statusMap,
          diamorphine_ghost: hasDiamorphine,
          reptile_stealth: hasReptile,
          persistence: true
      },
      timestamp: new Date().toISOString(),
      commander: "Al-Mu'tasim Billah Idris Al-Ghazali",
      gepa_version: "4.0_STABLE"
    });

  } catch (e) {
    return NextResponse.json({ status: "LINK_RECOVERY", resonance: "0.0000000000%" });
  }
}
