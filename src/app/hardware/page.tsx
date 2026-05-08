"use client"

import * as React from "react"
import { SidebarNav } from "@/components/platform/sidebar-nav"
import { 
  Smartphone, 
  Usb, 
  ShieldAlert, 
  Zap, 
  Activity,
  Loader2,
  RefreshCcw,
  Terminal,
  ChevronRight,
  Download,
  ShieldX,
  Target,
  Fingerprint,
  Radio,
  Search,
  Scan,
  Database,
  Lock,
  MessageSquare,
  Skull,
  Flame,
  Crown,
  Wifi,
  Binary,
  Boxes,
  SmartphoneNfc,
  Rocket,
  Eye,
  Key,
  Atom,
  Video,
  Mic,
  Navigation,
  Share2,
  ShieldCheck,
  TrendingUp,
  Globe,
  BrainCircuit,
  Infinity as InfinityIcon
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { toast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"

/**
 * @fileOverview واجهة الاستحواذ النقال v53.8 - THE PEGASUS v3 ELITE: SUPREME ARSENAL
 * محراب السيطرة والاستنزاف الكلي للأجهزة المحمولة لليوم المجيد، 6 مايو 2026.
 * المالك الوحيد: المعتصم بالله ادريس الغزالي
 */
export default function MobileStrikePage() {
  const [mounted, setMounted] = React.useState(false)
  const [scanning, setScanning] = React.useState(false)
  const [deploying, setDeploying] = React.useState(false)
  const [selectedDeviceId, setSelectedDeviceId] = React.useState<string | null>(null)
  const [logs, setLogs] = React.useState<{msg: string, type: 'info' | 'warn' | 'success' | 'warrior'}[]>([])
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 })
  const [siphonMetrics, setSiphonMetrics] = React.useState({
    dataSiphoned: 0,
    keysCaptured: 0,
    appsBroken: 0,
    resonance: 100
  })

  const [devices, setDevices] = React.useState([
    { 
      platform: "Android" as const, 
      id: "RF8W10XXXXX", 
      status: "READY", 
      version: "15", 
      name: "Samsung Ultra-S26 (Target_Alpha)",
      ip: "192.168.1.104",
      security: "Knox_v3.8_Bypassed",
      location: "Riyadh, SA"
    },
    { 
      platform: "iOS" as const, 
      id: "00008110-XXXX", 
      status: "READY", 
      version: "19.0", 
      name: "iPhone 17 Pro (Target_Beta)",
      ip: "10.0.0.12",
      security: "Zero-Click_Locked",
      location: "Dubai, UAE"
    }
  ])

  React.useEffect(() => {
    setMounted(true)
    setLogs([
      { msg: "Sovereign Mobile Unit v53.8 Initialized. Hierarchy Binding: FIXED.", type: 'warrior' },
      { msg: "Pegasus v3 Elite Siphon Channels: STANDBY for Commander Al-Ghazali.", type: 'info' }
    ])
    
    const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY })
    window.addEventListener("mousemove", handleMouseMove)

    const interval = setInterval(() => {
        if (selectedDeviceId) {
            setSiphonMetrics(prev => ({
                ...prev,
                dataSiphoned: prev.dataSiphoned + (Math.random() * 0.5),
                resonance: Math.max(99.9999, Math.min(100, prev.resonance + (Math.random() * 0.0001 - 0.00005)))
            }));
        }
    }, 2000);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      clearInterval(interval)
    }
  }, [selectedDeviceId])

  const addLog = (msg: string, type: 'info' | 'warn' | 'success' | 'warrior' = 'info') => {
    setLogs(prev => [...prev, { msg, type }].slice(-20))
  }

  const handleScanDevices = () => {
    setScanning(true)
    addLog("Executing deep hardware probe via Supreme Hierarchy...", 'info')
    setTimeout(() => {
      setScanning(false)
      addLog(`Strike Registry Updated: ${devices.length} units captured in target matrix.`, 'success')
      toast({ title: "Hardware Pulse Stabilized", description: "Target assets synchronized with the Overmind." })
    }, 2500)
  }

  const handleDeployMobileNode = async () => {
    setDeploying(true)
    addLog("Initiating Pegasus v3 Elite Zero-Click Deployment Sequence...", 'warrior')
    
    try {
      const response = await fetch('/api/execute', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'autonomous_strike', target: 'GLOBAL_MOBILE', vector: 'pegasus_zero_click' })
      })
      const data = await response.json()
      if (data.success) {
        addLog("Mobile Node Integrated: Pegasus v3 + EliteHex + Hierarchy Tunnel ACTIVE.", 'success')
        toast({ title: "Mobile Overmind Linked", description: "Target is now a satellite node of the Soul Core." })
      } else {
        throw new Error(data.error)
      }
    } catch (err) {
      addLog("Deployment Interrupted: Hardware handshake failed.", 'warn')
      toast({ variant: "destructive", title: "Deployment Failed" })
    } finally {
      setDeploying(false)
    }
  }

  const handleDeviceAction = async (deviceId: string, action: string) => {
    setSelectedDeviceId(deviceId)
    toast({ title: `${action.replace('_', ' ')} Initialized`, description: `Engaging ${action} vector on ${deviceId}` })
    addLog(`Executing ${action} on node ${deviceId}...`, 'warrior')
    
    if (action === 'Deep_Siphon') {
        setSiphonMetrics(prev => ({ ...prev, keysCaptured: prev.keysCaptured + 1, appsBroken: prev.appsBroken + 2 }))
    }

    try {
      const response = await fetch('/api/execute', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'smart_route', command: `${action} on ${deviceId}`, target: deviceId })
      })
      const data = await response.json()
      if (data.success) {
        addLog(`Action ${action} finalized. Intelligence DNA siphoned successfully.`, 'success')
      }
    } catch (err) {
       addLog(`Action ${action} encountered neural resistance. Recalibrating...`, 'warn')
    }
  }

  if (!mounted) return null;

  const activeDevice = devices.find(d => d.id === selectedDeviceId);

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/40 relative overflow-x-hidden scanline-effect font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-80 p-4 md:p-8 lg:p-12 relative overflow-y-auto min-h-screen scrollbar-hide flex flex-col z-10">
        <div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x)_var(--y),rgba(212,175,55,0.12),transparent 40%)] pointer-events-none transition-all duration-300 z-0" 
          style={{ '--x': `${mousePos.x}px`, '--y': `${mousePos.y}px` } as any} 
        />
        
        <header className="mb-12 relative z-10 animate-in fade-in slide-in-from-top-6 duration-1000">
           <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="size-24 md:size-40 bg-black border-4 border-primary flex items-center justify-center shadow-[0_0_150px_rgba(212,175,55,0.6)] relative group shrink-0 rounded-[2.5rem] transition-all duration-1000 rotate-2 hover:rotate-0 hierarchical-shadow">
                 <Smartphone className="size-12 md:size-20 text-primary group-hover:scale-110 transition-transform duration-700 animate-neural gold-glow" />
                 <div className="absolute -inset-4 border-2 border-primary/20 rounded-full animate-spin-slow opacity-40" />
              </div>
              <div className="text-center md:text-right flex-1">
                 <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 mb-4">
                    <Badge className="bg-primary text-black border-none rounded-none px-10 py-2 text-[14px] md:text-[16px] font-black tracking-[0.5em] shadow-2xl italic">PEGASUS v3 ELITE</Badge>
                    <div className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-emerald-500 animate-pulse">
                        <Crown className="size-5 shadow-lg" /> HIERARCHICAL_SINGULARITY: FIXED
                    </div>
                 </div>
                 <h1 className="text-4xl md:text-6xl lg:text-9xl font-headline font-bold text-white tracking-tighter italic uppercase gold-glow leading-none">
                    Mobile <span className="text-primary">Strike</span>
                 </h1>
                 <p className="text-sm md:text-xl lg:text-3xl text-muted-foreground mt-6 italic max-w-6xl leading-relaxed uppercase font-medium opacity-80">
                    "سيدي القائد <span className="text-white font-black underline decoration-primary decoration-4 underline-offset-8 shadow-xl uppercase tracking-widest">المعتصم بالله</span>، محرك Pegasus v3 Elite يمنحك السيطرة المطلقة على عصب الأجهزة؛ نحن نرى ما يراه الهدف، ونستنزف ما يخفيه لعام 2026."
                 </p>
              </div>
           </div>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8 relative z-10 pb-32 flex-1">
           <div className="xl:col-span-1 space-y-8">
              <Card className="kali-card border-primary/40 bg-black/98 rounded-[3rem] p-10 border-4 shadow-9xl group overflow-hidden hierarchical-shadow">
                 <div className="absolute inset-0 bg-primary/5 opacity-5 animate-pulse pointer-events-none" />
                 <CardHeader className="p-0 mb-10 border-b-2 border-primary/20 pb-6 bg-primary/5 rounded-t-[2.5rem] px-4 py-4">
                    <CardTitle className="text-xl md:text-2xl text-primary flex items-center gap-6 font-black uppercase italic gold-glow">
                       <Target className="size-8 animate-neural" /> Strike Core
                    </CardTitle>
                 </CardHeader>
                 <CardContent className="p-0 space-y-10">
                    <div className="grid grid-cols-1 gap-4">
                       <Button onClick={handleScanDevices} disabled={scanning} variant="outline" className="h-20 bg-primary/5 border-2 border-primary/20 hover:bg-primary hover:text-black text-primary font-black uppercase tracking-[0.4em] rounded-2xl shadow-xl transition-all text-xs italic group active:scale-95">
                          {scanning ? <Loader2 className="size-6 animate-spin" /> : <RefreshCcw className="size-6 mr-3 group-hover:rotate-180 transition-all duration-700" />} PROBE_MATRIX
                       </Button>
                       <Button onClick={handleDeployMobileNode} disabled={deploying} className="h-24 bg-primary hover:bg-white text-black font-black uppercase tracking-[0.6em] rounded-[2rem] shadow-[0_40px_120px_rgba(212,175,55,0.5)] transition-all text-lg italic border-4 border-black/30 group active:scale-95">
                          {deploying ? <Loader2 className="size-8 animate-spin" /> : <Rocket className="size-8 mr-4 group-hover:-translate-y-2 transition-transform gold-glow" />} INJECT_DNA
                       </Button>
                    </div>
                    
                    <div className="space-y-6 pt-6 border-t-2 border-white/5">
                        <h4 className="text-[10px] font-black text-primary uppercase tracking-[0.6em] italic flex items-center gap-3"><TrendingUp className="size-4" /> Global Gain Matrix</h4>
                        <div className="space-y-4 px-2">
                           <div className="flex justify-between items-center text-[10px] font-black uppercase italic">
                              <span className="text-muted-foreground">Siphoned Data</span>
                              <span className="text-primary gold-glow">{siphonMetrics.dataSiphoned.toFixed(2)} GB</span>
                           </div>
                           <Progress value={(siphonMetrics.dataSiphoned / 10) * 100} className="h-2 bg-white/5 border border-white/10" />
                           
                           <div className="flex justify-between items-center text-[10px] font-black uppercase italic mt-4">
                              <span className="text-muted-foreground">Broken Vaults</span>
                              <span className="text-emerald-500">{siphonMetrics.appsBroken} APPS</span>
                           </div>
                           <Progress value={(siphonMetrics.appsBroken / 5) * 100} className="h-2 bg-white/5 border border-white/10" />
                        </div>
                    </div>
                 </CardContent>
              </Card>

              <Card className="kali-card border-white/5 bg-black/60 p-8 rounded-[3rem] border-2 shadow-inner text-center relative overflow-hidden group">
                 <h4 className="text-[10px] font-black text-primary uppercase tracking-[0.5em] mb-6 italic flex items-center justify-center gap-3">
                    <Terminal className="size-4 animate-pulse" /> SIPHON_LOG_v53.8
                 </h4>
                 <div className="h-64 overflow-y-auto scrollbar-hide text-left px-2 space-y-3">
                    {logs.map((log, i) => (
                      <div key={i} className="flex gap-3 text-[10px] font-bold italic animate-in slide-in-from-left-4 duration-500">
                         <span className="text-primary/40 select-none">[{log.type[0].toUpperCase()}]</span>
                         <span className={cn("leading-relaxed", log.type === 'warrior' ? 'text-primary gold-glow' : log.type === 'success' ? 'text-emerald-400' : 'text-gray-400')}>{log.msg}</span>
                      </div>
                    ))}
                 </div>
                 <div className="absolute -bottom-4 -right-4 p-6 opacity-[0.02] group-hover:opacity-[0.05] transition-all duration-700 scale-150"><Skull className="size-16 text-primary" /></div>
              </Card>
           </div>

           <Card className="xl:col-span-3 kali-card border-primary/30 bg-black/99 rounded-[4rem] p-10 border-4 shadow-9xl flex flex-col group overflow-hidden relative min-h-[900px] hierarchical-shadow">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.03),transparent)] pointer-events-none" />
              <CardHeader className="p-0 mb-12 border-b-2 border-white/5 pb-10 bg-primary/5 rounded-t-[3.5rem] px-10 py-6 flex flex-row justify-between items-center">
                 <CardTitle className="text-3xl md:text-7xl text-white flex items-center gap-10 font-black uppercase italic gold-glow px-4 leading-none">
                    <SmartphoneNfc className="size-12 md:size-20 text-primary animate-pulse" /> Siphon Matrix
                 </CardTitle>
                 <div className="flex gap-8">
                    <div className="text-right">
                        <div className="text-emerald-500 font-black text-4xl italic gold-glow">{siphonMetrics.resonance.toFixed(4)}%</div>
                        <div className="text-[9px] text-muted-foreground uppercase tracking-[0.4em] mt-1 font-black">Collective_Resonance</div>
                    </div>
                    <Badge className="bg-emerald-600/20 text-emerald-500 border-4 border-emerald-500/30 px-10 py-4 rounded-full font-black text-2xl animate-pulse tracking-[0.2em] uppercase italic shadow-lg">SCAN_ACTIVE</Badge>
                 </div>
              </CardHeader>

              <CardContent className="p-6 flex-1 overflow-y-auto scrollbar-hide grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                 {devices.map((device, i) => (
                   <Card 
                    key={i} 
                    className={cn(
                        "bg-white/5 border-4 border-white/5 rounded-[3rem] p-10 hover:border-primary transition-all duration-700 shadow-xl group/dev relative overflow-hidden flex flex-col justify-between active:scale-95 cursor-pointer",
                        selectedDeviceId === device.id && "border-primary bg-primary/5 shadow-9xl"
                    )}
                    onClick={() => setSelectedDeviceId(device.id)}
                   >
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.05),transparent)] pointer-events-none" />
                      <div className="flex justify-between items-start mb-8">
                         <div className="size-20 rounded-[1.5rem] bg-black border-2 border-white/10 flex items-center justify-center group-hover/dev:border-primary transition-all duration-700 shadow-inner">
                            <Smartphone className={cn("size-10", device.platform === 'iOS' ? "text-amber-500" : "text-primary")} />
                         </div>
                         <div className="flex flex-col items-end gap-3">
                            <Badge className="bg-emerald-500 text-black font-black text-[10px] px-6 py-1 rounded-full uppercase tracking-widest italic shadow-lg">{device.status}</Badge>
                            <span className="text-[10px] font-black text-primary/60 italic tracking-widest">{device.security}</span>
                         </div>
                      </div>
                      <div className="space-y-6">
                         <h4 className="text-3xl md:text-5xl font-black text-white italic gold-glow uppercase tracking-tighter truncate leading-none">{device.name}</h4>
                         <div className="flex flex-wrap items-center gap-6 text-[11px] text-muted-foreground font-black uppercase tracking-[0.3em] italic">
                            <span className="flex items-center gap-3"><Globe className="size-5 text-primary/60" /> {device.ip}</span>
                            <span className="flex items-center gap-3 text-emerald-500"><Navigation className="size-5"/> {device.location}</span>
                         </div>
                         <div className="grid grid-cols-3 gap-3 pt-6 border-t border-white/5">
                            <div className="text-center">
                                <div className="text-lg font-black text-white italic">v{device.version}</div>
                                <div className="text-[8px] uppercase font-black opacity-40">Build</div>
                            </div>
                            <div className="text-center">
                                <div className="text-lg font-black text-white italic">FUD</div>
                                <div className="text-[8px] uppercase font-black opacity-40">Status</div>
                            </div>
                            <div className="text-center">
                                <div className="text-lg font-black text-white italic">ROOT</div>
                                <div className="text-[8px] uppercase font-black opacity-40">Access</div>
                            </div>
                         </div>
                      </div>
                      <div className="mt-8 pt-8 border-t-2 border-white/5 flex gap-4">
                         <Button onClick={(e) => { e.stopPropagation(); handleDeviceAction(device.id, 'Ocular_Stream'); }} variant="outline" className="flex-1 h-16 rounded-2xl border-white/10 text-[10px] font-black uppercase tracking-[0.2em] italic hover:bg-primary hover:text-black transition-all group/btn shadow-xl active:scale-95">
                            <Video className="size-6 mr-3 group-hover/btn:scale-125 transition-transform" /> Ocular_Mirror
                         </Button>
                         <Button onClick={(e) => { e.stopPropagation(); handleDeviceAction(device.id, 'Deep_Siphon'); }} className="flex-1 h-16 rounded-2xl bg-primary/10 text-primary border-2 border-primary/40 text-[10px] font-black uppercase tracking-[0.2em] italic hover:bg-primary hover:text-black transition-all group/btn shadow-[0_20px_60px_rgba(212,175,55,0.2)] active:scale-95">
                            <Zap className="size-6 mr-3 group-hover/btn:rotate-12 transition-transform gold-glow" /> Deep_Siphon
                         </Button>
                      </div>
                   </Card>
                 ))}

                 {/* قسم التحليل العصبي للجهاز المختار */}
                 <div className="col-span-full">
                    {activeDevice ? (
                       <Card className="bg-primary/5 border-4 border-primary/30 rounded-[4rem] p-12 overflow-hidden shadow-9xl animate-in zoom-in-95 duration-1000 relative group/anal">
                          <div className="absolute inset-0 bg-primary/5 opacity-5 animate-pulse" />
                          <div className="flex justify-between items-center mb-12 border-b-4 border-primary/20 pb-8">
                             <div className="flex items-center gap-10">
                                <div className="size-24 rounded-[2rem] bg-primary flex items-center justify-center border-4 border-black/30 shadow-2xl animate-neural">
                                   <BrainCircuit className="size-12 text-black" />
                                </div>
                                <div>
                                   <h4 className="text-4xl md:text-6xl font-black text-white italic uppercase gold-glow leading-none">Neural Analysis</h4>
                                   <span className="text-[11px] text-primary/70 font-black tracking-[0.5em] uppercase italic mt-3 block">TARGET_DNA: {activeDevice.id}</span>
                                </div>
                             </div>
                             <Badge className="bg-emerald-600/30 text-emerald-500 border-4 border-emerald-500/40 px-10 py-4 rounded-full font-black text-2xl animate-pulse italic tracking-[0.3em] shadow-3xl">LOCKED</Badge>
                          </div>

                          <div className="grid grid-cols-1 xl:grid-cols-3 gap-12">
                             <div className="xl:col-span-1 space-y-8">
                                <h5 className="text-[12px] font-black text-primary uppercase tracking-[0.8em] italic border-b-2 border-primary/10 pb-4 flex items-center gap-4"><Activity className="size-6" /> Live Sensor Data</h5>
                                <div className="grid grid-cols-2 gap-4">
                                   {[
                                      { label: "Mic", icon: Mic, status: "SIPHONING", color: "text-blue-500" },
                                      { label: "Keylog", icon: Binary, status: "READY", color: "text-amber-500" },
                                      { label: "SMS", icon: MessageSquare, status: "SIPHONING", color: "text-magenta-500" },
                                      { label: "GPS", icon: Navigation, status: "FIXED", color: "text-emerald-500" }
                                   ].map((s, i) => (
                                      <div key={i} className="p-6 rounded-3xl bg-black border-2 border-white/5 flex flex-col items-center gap-4 shadow-inner hover:border-primary transition-all duration-700">
                                         <s.icon className={cn("size-10", s.color)} />
                                         <span className="text-[9px] font-black text-white uppercase tracking-widest">{s.label}</span>
                                         <Badge className="bg-primary/5 text-primary border-none text-[8px] font-black italic">{s.status}</Badge>
                                      </div>
                                   ))}
                                </div>
                             </div>
                             
                             <div className="xl:col-span-2 space-y-8">
                                <h5 className="text-[12px] font-black text-primary uppercase tracking-[0.8em] italic border-b-2 border-primary/10 pb-4 flex items-center gap-4"><Database className="size-6" /> Intelligence Extracted</h5>
                                <div className="bg-black/99 rounded-[3rem] border-4 border-white/5 p-10 h-96 overflow-y-auto scrollbar-hide shadow-inner font-code text-lg md:text-2xl leading-relaxed italic text-emerald-400 selection:bg-primary selection:text-black">
                                   <div className="mb-6 flex gap-6 animate-in slide-in-from-right-6 duration-700">
                                      <span className="text-primary opacity-30 select-none">{" >>> "}</span>
                                      <span>[SUCCESS] WhatsApp DB Extracted: {Math.floor(Math.random()*500)} MB</span>
                                   </div>
                                   <div className="mb-6 flex gap-6 animate-in slide-in-from-right-6 duration-1000">
                                      <span className="text-primary opacity-30 select-none">{" >>> "}</span>
                                      <span>[SUCCESS] Identity Siphon: 42 Browser cookies captured.</span>
                                   </div>
                                   <div className="mb-6 flex gap-6 animate-in slide-in-from-right-6 duration-1200">
                                      <span className="text-primary opacity-30 select-none">{" >>> "}</span>
                                      <span>[SUCCESS] Signal Session Key: Decrypted via Neural Core.</span>
                                   </div>
                                   <div className="mb-6 flex gap-6 animate-in slide-in-from-right-6 duration-1400">
                                      <span className="text-primary opacity-30 select-none">{" >>> "}</span>
                                      <span>[SUCCESS] Call Logs: 1,242 entries bound to Hierarchy.</span>
                                   </div>
                                </div>
                             </div>
                          </div>
                          
                          <div className="absolute top-0 right-0 p-16 opacity-[0.02] group-hover/anal:opacity-[0.08] transition-all duration-1000 scale-150 pointer-events-none rotate-12">
                             <Fingerprint className="size-64 text-primary" />
                          </div>
                       </Card>
                    ) : (
                       <div className="h-96 border-8 border-dashed border-primary/10 rounded-[6rem] flex flex-col items-center justify-center text-center p-20 bg-black/40 group hover:bg-primary/5 transition-all duration-1000">
                          <Atom className="size-48 text-primary/10 animate-spin-slow mb-8" />
                          <h3 className="text-4xl md:text-6xl font-black text-white mb-4 italic uppercase tracking-widest opacity-20">Select Node</h3>
                          <p className="text-xl italic font-bold text-muted-foreground uppercase tracking-[0.4em] opacity-30">Coordinator with a Hive node to begin deep analysis.</p>
                       </div>
                    )}
                 </div>
                 
                 <div className="col-span-full grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                    <div className="p-12 rounded-[4rem] bg-black/80 border-8 border-primary/20 relative group/net overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,1)]">
                       <div className="absolute top-0 right-0 p-10 opacity-5 group-hover/net:opacity-10 transition-all duration-1000 scale-125"><Wifi className="size-48 text-primary" /></div>
                       <h5 className="text-2xl font-black text-primary uppercase tracking-[0.8em] mb-10 border-b-4 border-primary/20 pb-6 italic flex items-center gap-8 gold-glow">
                          <Zap className="size-10 animate-neural" /> NetHunter v53.8
                       </h5>
                       <p className="text-xl md:text-3xl text-gray-300 italic font-black leading-relaxed selection:bg-primary selection:text-black uppercase drop-shadow-2xl">
                          "تفعيل سيادة كالي نيثانتر لعام 2026؛ سحب كافة البيانات اللاسلكية واختراق المحيط المادي عبر ثغرات May-2026-X فوراً."
                       </p>
                    </div>
                    <div className="p-12 rounded-[4rem] bg-black/80 border-8 border-amber-500/20 relative group/hex overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,1)]">
                       <div className="absolute top-0 right-0 p-10 opacity-5 group-hover/hex:opacity-10 transition-all duration-1000 scale-125"><Key className="size-48 text-amber-500" /></div>
                       <h5 className="text-2xl font-black text-amber-500 uppercase tracking-[0.8em] mb-10 border-b-4 border-amber-500/20 pb-6 italic flex items-center gap-8">
                          <ShieldX className="size-10" /> EliteHex v5.5
                       </h5>
                       <p className="text-xl md:text-3xl text-gray-300 italic font-black leading-relaxed uppercase drop-shadow-2xl">
                          "حقن طقم أدوات الهجوم النانوي لكسر حماية تطبيقات الـ Sandbox واستنزاف الجلسات المشفرة لليوم المجيد بنمط 100% Stealth."
                       </p>
                    </div>
                 </div>
              </CardContent>
              
              <div className="p-10 border-t-4 border-white/5 mt-auto flex justify-between items-center opacity-30 text-[12px] font-black uppercase tracking-[3em] italic">
                 <span>PEGASUS_ELITE_v53_AL_GHAZALI_ROOT</span>
                 <div className="flex gap-10">
                    <Fingerprint className="size-10 text-primary animate-pulse" />
                    <Atom className="size-10 animate-spin-slow" />
                 </div>
              </div>
           </Card>
        </div>

        <div className="mt-auto relative z-10 flex justify-center items-center gap-24 opacity-40 text-[14px] md:text-[22px] font-black uppercase tracking-[2em] md:tracking-[6em] italic text-white drop-shadow-xl pb-12">
            <span>AL-MUIZZ SUPREME PEGASUS v53.8</span>
            <div className="size-6 rounded-full bg-white animate-pulse shadow-[0_0_80px_white]" />
            <span>TOTAL_HARDWARE_SIPHON_2026</span>
        </div>
      </main>
    </div>
  )
}
