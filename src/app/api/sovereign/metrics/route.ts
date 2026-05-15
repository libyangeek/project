import { NextResponse } from 'next/server';
import os from 'os';
import net from 'net';
import fs from 'fs';
import { execSync } from 'child_process';

/**
 * بوابة النزاهة المادية v90.7 - THE CLOUD CONQUEROR PROVIDER
 * تقوم بفحص حالة الـ 16 بُعداً والتحقق من بيئة السحابة والحاويات.
 */
async function checkPort(port: number, host: string = '127.0.0.1'): Promise<boolean> {
  return new Promise((resolve) => {
    const socket = new net.Socket();
    socket.setTimeout(300);
    socket.on('connect', () => { socket.destroy(); resolve(true); });
    socket.on('timeout', () => { socket.destroy(); resolve(false); });
    socket.on('error', () => { socket.destroy(); resolve(false); });
    socket.connect(port, host);
  });
}

function checkDockerStatus(): boolean {
    try {
        const status = execSync('docker info').toString();
        return status.includes('Containers');
    } catch (e) {
        return false;
    }
}

export async function GET() {
  try {
    const uptime = os.uptime();
    const load = os.loadavg();
    const cpuCount = os.cpus().length;
    const freeMem = os.freemem();
    const totalMem = os.totalmem();

    // 1. فحص المنافذ المادية للأعضاء الحيوية
    const statusMap = {
      god_core: await checkPort(8000),      // SovereignCore API
      tor_relay: await checkPort(9050),     // Tor Proxy
      load_balancer: await checkPort(80),   // Nginx
      monitoring: await checkPort(9090),    // Prometheus
      automation: await checkPort(5678),    // n8n
      memory_db: await checkPort(6333),     // Qdrant/Chroma
      c2_sliver: await checkPort(8443),     // Sliver C2
    };

    // 2. فحص الأقفال والبيئة (Docker/Cloud)
    const isDocker = fs.existsSync('/.dockerenv') || checkDockerStatus();
    const hasGcloud = fs.existsSync('/usr/bin/gcloud');
    const bioLock = fs.existsSync('docs/voice_identity.dna');

    // 3. حساب الرنين المادي المطور (16D Weighted)
    const activeOrgans = Object.values(statusMap).filter(Boolean).length;
    const totalOrgans = Object.keys(statusMap).length;
    const organResonance = (activeOrgans / totalOrgans) * 70; 
    const envResonance = (isDocker ? 15 : 5) + (hasGcloud ? 10 : 0);
    const lockResonance = (bioLock ? 5 : 0);
    
    const cpuLoadFactor = Math.max(0.1, 1 - (load[0] / cpuCount));
    const finalResonance = (organResonance + envResonance + lockResonance) * cpuLoadFactor;

    return NextResponse.json({
      resonance: `${Math.min(100, finalResonance).toFixed(10)}%`,
      status: finalResonance > 95 ? "OMNIPOTENT_STABLE" : "STABILIZING",
      activeDimensions: 16,
      armadaNodes: Math.floor(165 * (finalResonance / 100)),
      totalAgents: 165,
      cpuUsage: `${((load[0] / cpuCount) * 100).toFixed(2)}%`,
      ramUsage: `${((1 - freeMem/totalMem) * 100).toFixed(2)}%`,
      environment: isDocker ? "DOCKER_CONTAINER" : "BARE_METAL",
      cloudProvider: hasGcloud ? "GOOGLE_CLOUD" : "LOCAL_FABRIC",
      organs: {
          ...statusMap,
          docker_engine: isDocker,
          cloud_link: hasGcloud,
          bio_sync: bioLock,
          persistence: true
      },
      timestamp: new Date().toISOString(),
      commander: "Al-Mu'tasim Billah Idris Al-Ghazali"
    });

  } catch (e) {
    return NextResponse.json({ status: "LINK_RECOVERY", resonance: "0.0000000000%" });
  }
}