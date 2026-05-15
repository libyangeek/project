
import { NextResponse } from 'next/server';
import os from 'os';
import net from 'net';
import fs from 'fs';

/**
 * بوابة النزاهة المادية v91.1 - THE OMNIPOTENT PROVIDER
 * تقوم بفحص حقيقي للأعضاء الـ 16 والتحقق من "الأشباح النواتية" والتهرب الجيني.
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

    // 1. فحص المنافذ المادية للأعضاء الحيوية
    const statusMap = {
      god_core: await checkPort(8000),      // SovereignCore API
      tor_relay: await checkPort(9050),     // Tor Proxy
      load_balancer: await checkPort(80),   // Nginx
      automation: await checkPort(5678),    // n8n Hive
      c2_sliver: await checkPort(8443),     // Sliver C2
    };

    // 2. فحص الأشباح (Rootkits) والاستمرارية
    const hasPersistence = fs.existsSync('/etc/systemd/system/muizz-ai.service');
    const hasBioLock = fs.existsSync('docs/voice_identity.dna');
    const isKernelStealth = fs.existsSync('/proc/lkrg') || fs.existsSync('/proc/diamorphine');

    // 3. حساب الرنين المادي (16D Weighted)
    const activeOrgans = Object.values(statusMap).filter(Boolean).length;
    const totalOrgans = Object.keys(statusMap).length;
    const resonanceBase = (activeOrgans / totalOrgans) * 80;
    const stealthBonus = isKernelStealth ? 15 : 5;
    const bioBonus = hasBioLock ? 5 : 0;
    
    const finalResonance = Math.min(100, resonanceBase + stealthBonus + bioBonus);

    return NextResponse.json({
      resonance: `${finalResonance.toFixed(8)}%`,
      status: finalResonance > 95 ? "OMNIPOTENT_STABLE" : "STABILIZING",
      activeDimensions: 16,
      armadaNodes: Math.floor(165 * (finalResonance / 100)),
      cpuUsage: `${((load[0] / cpuCount) * 100).toFixed(2)}%`,
      ramUsage: `${((1 - freeMem/totalMem) * 100).toFixed(2)}%`,
      organs: {
          ...statusMap,
          kernel_stealth: isKernelStealth,
          bio_sync: hasBioLock,
          persistence: hasPersistence
      },
      timestamp: new Date().toISOString(),
      commander: "Al-Mu'tasim Billah Idris Al-Ghazali"
    });

  } catch (e) {
    return NextResponse.json({ status: "LINK_RECOVERY", resonance: "0.0000000000%" });
  }
}
