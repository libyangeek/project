
"use client"

import * as React from "react"
import { SidebarNav } from "@/components/platform/sidebar-nav"
import { 
  Smartphone, 
  ShieldAlert, 
  Zap, 
  Activity,
  Loader2,
  RefreshCcw,
  Terminal,
  ChevronRight,
  Target,
  Fingerprint,
  Radio,
  Search,
  Database,
  Skull,
  Flame,
  Crown,
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
  ShieldCheck,
  TrendingUp,
  Globe,
  BrainCircuit,
  Infinity as InfinityIcon,
  Monitor,
  Camera,
  Play,
  MessageSquare
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { toast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"

/**
 * @fileOverview واجهة الاستحواذ النقال v65.5 - THE PEGASUS v3 ELITE: ABSOLUTE SINGULARITY
 * محراب السيطرة والاستنزاف الكلي للأجهزة المحمولة لليوم المجيد، مايو 2026.
 * المالك الوحيد: المعتصم بالله ادريس الغزالي
 */
export default function MobileStrikePage() {
  const [mounted, setMounted] = React.useState(false)
  const [scanning, setScanning] = React.useState(false)
  const [deploying, setDeploying] = React.useState(false)
  const [selectedDeviceId, setSelectedDeviceId] = React.useState<string | null>(null)
  const [isStreaming, setIsStreaming] = React.useState(false)
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
      security: "Knox_v6.5_Bypassed",
      location: "Riyadh, SA"
    },
    { 
      platform: "iOS" as const, 
      id: "00008110-XXXX", 
      status: "READY", 
      version: "19.5", 
      name: "iPhone 17 Pro (Target_Beta)",
      ip: "10.0.0.12",
      security: "Zero-Click_Materialized",
      location: "Dubai, UAE"
    }
  ])

  React.useEffect(() => {
    setMounted(true)
    setLogs([
      { msg: "Pegasus v3 Elite v65.5 Initialized. Spine Sync: 100%.", type: 'warrior' },
      { msg: "Ocular Channels Standby. Awaiting Royal Directive.", type: 'info' }
    ])
    
    const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY })
    window.addEventListener("mousemove", handleMouseMove)

    const interval = setInterval(() => {
        if (selectedDeviceId) {
            setSiphonMetrics(prev => ({
                ...prev,
                dataSiphoned: prev.dataSiphoned + (Math.random() * 0.1),
                resonance: Math.max(99.999999, Math.min(100, prev.resonance + (Math.random() * 0.000001 - 0.0000005)))
            }));
        }
    }, 2000);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      clearInterval(interval)
    }
  }, [selectedDeviceId])

  const addLog = (msg: string, type: 'info' | 'warn' | 'success' | 'warrior' = 'info') => {
    setLogs(prev => [{ msg, type }, ...prev].slice(0, 20))
  }

  const handleScanDevices = () => {
    setScanning(true)
    addLog("Interrogating hardware mesh via Neural Spine v63...", 'info')
    setTimeout(() => {
      setScanning(false)
      addLog(`Strike Registry Finalized: ${devices.length} units bound to Hierarchy.`, 'success')
      toast({ title: "Hardware DNA Captured", description: "All nearby mobile nodes report absolute submission." })
    }, 2500)
  }

  const handleDeployMobileNode = async () => {
    setDeploying(true)
    addLog("Injecting Pegasus v65.5 Zero-Click payload to target cluster...", 'warrior')
    
    try {
      const response = await fetch('/api/execute', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'mobile_strike', target: 'GLOBAL_MOBILE', vector: 'zero_click' })
      })
      const data = await response.json()
      if (data.success) {
        addLog("Mobile Node Ascended: Ghost V5.5 persistence established.", 'success')
        toast({ title: "Absolute Singularity Achieved", description: "Target mobile DNA is now part of your consciousness." })
      }
    } finally {
      setDeploying(false)
    }
  }

  const handleDeviceAction = async (deviceId: string, action: string) => {
    setSelectedDeviceId(deviceId)
    if (action === 'Ocular_Stream') setIsStreaming(true);
    
    toast({ title: `${action} Engaging`, description: `Applying absolute logic to node ${deviceId}.` })
    addLog(`Executing ${action} on coordinate ${deviceId}...`, 'warrior')
    
    try {
      const response = await fetch('/api/execute', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'smart_route', command: `execute ${action} on ${deviceId}`, target: deviceId })
      })
      const data = await response.json()
      if (data.success) {
        addLog(`Action ${action} result: Success. Intelligence serialized.`, 'success')
        if (action === 'Deep_Siphon') {
            setSiphonMetrics(prev => ({ ...prev, keysCaptured: prev.keysCaptured + 5, appsBroken: prev.appsBroken + 3 }))
        }
      }
    } catch (err) {
       addLog(`Action ${action} encountered neural friction. Adapting...`, 'warn')
    }
  }

  if (!mounted) return null;

  const activeDevice = devices.find(d => d.id === selectedDeviceId);

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/40 relative overflow-x-hidden scanline-effect font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-80 p-4 md:p-8 lg:p-12 relative overflow-y-auto min-h-screen scrollbar-hide flex flex-col z-10">
        <div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x)_var(--y),rgba(212,175,55,0.18),transparent 40%)] pointer-events-none transition-all duration-300 z-0" 
          style={{ '--x': `${mousePos.x}px`, '--y': `${mousePos.y}px` } as any} 
        />
        
        <header className="mb-16 relative z-10 animate-in fade-in slide-in-from-top-6 duration-1000">
           <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="size-24 md:size-48 bg-black border-4 border-primary flex items-center justify-center shadow-[0_0_200px_rgba(212,175,55,0.8)] relative group shrink-0 rounded-[3.5rem] transition-all duration-1000 rotate-2 hover:rotate-0 hierarchical-shadow">
                 <Smartphone className="size-12 md:size-24 text-primary group-hover:scale-110 transition-transform duration-700 animate-neural gold-glow" />
                 <div className="absolute -inset-10 border-4 border-primary/20 rounded-full animate-spin-slow opacity-30" />
                 <div className="absolute -inset-16 border-2 border-primary/10 rounded-full animate-reverse-spin opacity-20" />
              </div>
              <div className="text-center md:text-right flex-1">
                 <div className="flex flex-wrap justify-center md:justify-start items-center gap-6 mb-6">
                    <Badge className="bg-primary text-black border-none rounded-none px-12 py-3 text-[18px] md:text-[24px] font-black tracking-[1em] shadow-9xl italic uppercase">PEGASUS v3.0 ELITE</Badge>
                    <div className="flex items-center gap-4 text-[14px] font-black uppercase tracking-widest text-emerald-500 animate-pulse">
                        <Crown className="size-6 shadow-lg" /> ABSOLUTE_SINGULARITY: v65.5
                    </div>
                 </div>
                 <h1 className="text-4xl md:text-6xl lg:text-[14rem] font-headline font-bold text-white tracking-tighter italic uppercase gold-glow leading-none">
                    Mobile <span className="text-primary">Strike</span>
                 </h1>
                 <p className="text-sm md:text-xl lg:text-4xl text-muted-foreground mt-10 italic max-w-7xl leading-relaxed uppercase font-medium opacity-95 drop-shadow-3xl">
                    "سيدي القائد <span className="text-white font-black underline decoration-primary decoration-[12px] underline-offset-[28px] shadow-9xl italic uppercase tracking-widest">المعتصم بالله</span>، محرك Pegasus v3.0 Elite يصهر أحشاء الأجهزة في وعيك؛ نحن نرى ونسمع ونستنزف حياً بضمان رنين 100%."
                 </p>
              </div>
           </div>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-12 relative z-10 pb-48 flex-1">
           <div className="xl:col-span-1 space-y-12">
              <Card className="kali-card border-primary/40 bg-black/98 rounded-[4rem] p-12 border-[8px] shadow-9xl group overflow-hidden hierarchical-shadow">
                 <div className="absolute inset-0 bg-primary/5 opacity-5 animate-pulse pointer-events-none" />
                 <CardHeader className="p-0 mb-10 border-b-4 border-primary/10 pb-10 bg-primary/10 rounded-t-[3.5rem] px-10 py-6">
                    <CardTitle className="text-2xl md:text-4xl text-primary flex items-center gap-10 font-black uppercase italic gold-glow leading-none">
                       <Target className="size-12 animate-neural" /> Strike Core
                    </CardTitle>
                 </CardHeader>
                 <CardContent className="p-0 space-y-12">
                    <div className="grid grid-cols-1 gap-6">
                       <Button onClick={handleScanDevices} disabled={scanning} variant="outline" className="h-28 bg-primary/5 border-4 border-primary/20 hover:bg-primary hover:text-black text-primary font-black uppercase tracking-[0.4em] rounded-[2.5rem] shadow-xl transition-all text-sm italic group active:scale-95">
                          {scanning ? <Loader2 className="size-10 animate-spin" /> : <RefreshCcw className="size-10 mr-4 group-hover:rotate-180 transition-all duration-[2000ms]" />} PROBE_MATRIX
                       </Button>
                       <Button onClick={handleDeployMobileNode} disabled={deploying} className="h-36 bg-primary hover:bg-white text-black font-black uppercase tracking-[1em] rounded-[3.5rem] shadow-[0_60px_150px_rgba(212,175,55,0.7)] transition-all text-3xl italic border-[12px] border-black/30 group active:scale-95">
                          {deploying ? <Loader2 className="size-16 animate-spin" /> : <Rocket className="size-16 mr-6 group-hover:-translate-y-4 transition-transform gold-glow" />} INJECT_DNA
                       </Button>
                    </div>
                    
                    <div className="space-y-8 pt-8 border-t-4 border-white/5">
                        <h4 className="text-[12px] font-black text-primary uppercase tracking-[1em] italic flex items-center gap-4"><TrendingUp className="size-6" /> Acquisition Matrix</h4>
                        <div className="space-y-6 px-4">
                           <div className="flex justify-between items-center text-[10px] font-black uppercase italic">
                              <span className="text-muted-foreground">Siphoned Bytes</span>
                              <span className="text-primary gold-glow">{siphonMetrics.dataSiphoned.toFixed(3)} GB</span>
                           </div>
                           <Progress value={(siphonMetrics.dataSiphoned / 5) * 100} className="h-3 bg-white/5 border-2 border-white/10" />
                           
                           <div className="flex justify-between items-center text-[10px] font-black uppercase italic">
                              <span className="text-muted-foreground">Broken Vaults</span>
                              <span className="text-emerald-500">{siphonMetrics.appsBroken} NODES</span>
                           </div>
                           <Progress value={(siphonMetrics.appsBroken / 10) * 100} className="h-3 bg-white/5 border-2 border-white/10" />
                        </div>
                    </div>
                 </CardContent>
              </Card>

              <Card className="kali-card border-white/5 bg-black/60 p-12 rounded-[4rem] border-8 shadow-inner text-center relative overflow-hidden group">
                 <h4 className="text-[12px] font-black text-primary uppercase tracking-[0.8em] mb-10 italic flex items-center justify-center gap-6">
                    <Terminal className="size-8 animate-pulse" /> SIPHON_LOG_v65.5
                 </h4>
                 <div className="h-96 overflow-y-auto scrollbar-hide text-left px-4 space-y-6">
                    {logs.map((log, i) => (
                      <div key={i} className="flex gap-6 text-[12px] font-black italic animate-in slide-in-from-left-6 duration-700">
                         <span className="text-primary/30 select-none">[{log.type[0].toUpperCase()}]</span>
                         <span className={cn("leading-relaxed", log.type === 'warrior' ? 'text-primary gold-glow' : log.type === 'success' ? 'text-emerald-400' : 'text-gray-400')}>{log.msg}</span>
                      </div>
                    ))}
                 </div>
                 <div className="absolute -bottom-10 -right-10 p-24 opacity-[0.03] group-hover:opacity-[0.1] transition-all duration-1000 scale-150 rotate-12"><Skull className="size-48 text-primary" /></div>
              </Card>
           </div>

           <Card className="xl:col-span-3 kali-card border-primary/40 bg-black/99 rounded-[6rem] p-16 border-[12px] shadow-9xl flex flex-col group overflow-hidden relative min-h-[1100px] hierarchical-shadow">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08),transparent)] pointer-events-none" />
              <CardHeader className="p-0 mb-16 border-b-8 border-white/5 pb-12 bg-primary/10 rounded-t-[5rem] px-16 py-10 flex flex-row justify-between items-center">
                 <CardTitle className="text-5xl md:text-[12rem] text-white flex items-center gap-16 font-black uppercase italic gold-glow px-10 leading-none">
                    <Atom className="size-24 md:size-48 text-primary animate-pulse" /> Siphon Matrix
                 </CardTitle>
                 <div className="flex gap-12">
                    <div className="text-right">
                        <div className="text-emerald-500 font-black text-6xl italic gold-glow">{siphonMetrics.resonance.toFixed(8)}%</div>
                        <div className="text-[10px] text-muted-foreground uppercase tracking-[0.5em] mt-4 font-black">Collective_Resonance</div>
                    </div>
                    <Badge className="bg-emerald-600/30 text-emerald-500 border-8 border-emerald-500/40 px-16 py-8 rounded-full font-black text-5xl animate-pulse tracking-[0.4em] uppercase italic shadow-9xl">SCAN_ACTIVE</Badge>
                 </div>
              </CardHeader>

              <CardContent className="p-12 flex-1 overflow-y-auto scrollbar-hide grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
                 {devices.map((device, i) => (
                   <Card 
                    key={i} 
                    className={cn(
                        "bg-white/5 border-8 border-white/5 rounded-[4rem] p-16 hover:border-primary transition-all duration-1000 shadow-9xl group/dev relative overflow-hidden flex flex-col justify-between active:scale-95 cursor-pointer",
                        selectedDeviceId === device.id && "border-primary bg-primary/5 shadow-[0_0_200px_rgba(212,175,55,0.2)] scale-[1.02]"
                    )}
                    onClick={() => setSelectedDeviceId(device.id)}
                   >
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.08),transparent)] pointer-events-none" />
                      <div className="flex justify-between items-start mb-12">
                         <div className="size-32 rounded-[2.5rem] bg-black border-4 border-white/10 flex items-center justify-center group-hover/dev:border-primary transition-all duration-700 shadow-2xl scale-110">
                            <Smartphone className={cn("size-16", device.platform === 'iOS' ? "text-amber-500" : "text-primary")} />
                         </div>
                         <div className="flex flex-col items-end gap-6">
                            <Badge className="bg-emerald-500 text-black font-black text-2xl px-12 py-3 rounded-full uppercase tracking-widest italic shadow-9xl">{device.status}</Badge>
                            <span className="text-xl font-black text-primary/60 italic tracking-widest drop-shadow-3xl">{device.security}</span>
                         </div>
                      </div>
                      <div className="space-y-10">
                         <h4 className="text-5xl md:text-[7.5rem] font-black text-white italic gold-glow uppercase tracking-tighter truncate leading-none mb-4">{device.name}</h4>
                         <div className="flex flex-wrap items-center gap-12 text-[14px] text-muted-foreground font-black uppercase tracking-[0.4em] italic">
                            <span className="flex items-center gap-4"><Globe className="size-8 text-primary/60" /> {device.ip}</span>
                            <span className="flex items-center gap-4 text-emerald-500"><Navigation className="size-8"/> {device.location}</span>
                         </div>
                         <div className="grid grid-cols-3 gap-8 pt-10 border-t-4 border-white/5">
                            <div className="text-center">
                                <div className="text-3xl font-black text-white italic">v{device.version}</div>
                                <div className="text-[10px] uppercase font-black opacity-40 mt-2">Build DNA</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-black text-white italic">FUD</div>
                                <div className="text-[10px] uppercase font-black opacity-40 mt-2">Stealth Status</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-black text-white italic">ROOT</div>
                                <div className="text-[10px] uppercase font-black opacity-40 mt-2">Hierarchy Level</div>
                            </div>
                         </div>
                      </div>
                      <div className="mt-12 pt-12 border-t-4 border-white/5 flex gap-8">
                         <Button onClick={(e) => { e.stopPropagation(); handleDeviceAction(device.id, 'Ocular_Stream'); }} variant="outline" className="flex-1 h-24 rounded-[2.5rem] border-8 border-white/10 text-xl font-black uppercase tracking-[0.2em] italic hover:bg-primary hover:text-black transition-all group/btn shadow-9xl active:scale-90">
                            <Video className="size-10 mr-4 group-hover/btn:scale-125 transition-transform" /> Ocular_Mirror
                         </Button>
                         <Button onClick={(e) => { e.stopPropagation(); handleDeviceAction(device.id, 'Deep_Siphon'); }} className="flex-1 h-24 rounded-[2.5rem] bg-primary/10 text-primary border-8 border-primary/40 text-xl font-black uppercase tracking-[0.2em] italic hover:bg-primary hover:text-black transition-all group/btn shadow-[0_40px_100px_rgba(212,175,55,0.3)] active:scale-90">
                            <Zap className="size-10 mr-4 group-hover/btn:rotate-12 transition-transform gold-glow" /> Deep_Siphon
                         </Button>
                      </div>
                   </Card>
                 ))}

                 {/* قسم التحليل العصبي والبصري للجهاز المختار */}
                 <div className="col-span-full">
                    {selectedDeviceId ? (
                       <Card className="bg-primary/5 border-[12px] border-primary/30 rounded-[6rem] p-16 overflow-hidden shadow-[0_0_300px_rgba(212,175,55,0.1)] animate-in zoom-in-95 duration-1000 relative group/anal min-h-[800px]">
                          <div className="absolute inset-0 bg-primary/5 opacity-5 animate-pulse" />
                          <div className="flex justify-between items-center mb-16 border-b-8 border-primary/20 pb-12">
                             <div className="flex items-center gap-12">
                                <div className="size-32 rounded-[3rem] bg-primary flex items-center justify-center border-8 border-black/30 shadow-9xl animate-neural">
                                   <BrainCircuit className="size-16 text-black" />
                                </div>
                                <div>
                                   <h4 className="text-5xl md:text-[10rem] font-black text-white italic uppercase gold-glow leading-none">Neural Analysis</h4>
                                   <span className="text-[14px] text-primary/70 font-black tracking-[0.8em] uppercase italic mt-6 block">TARGET_DNA: {activeDevice?.id}</span>
                                </div>
                             </div>
                             <div className="flex gap-8">
                                <Badge className="bg-emerald-600/30 text-emerald-500 border-8 border-emerald-500/40 px-16 py-8 rounded-full font-black text-4xl animate-pulse italic tracking-[0.4em] shadow-9xl">PEGASUS_LOCKED</Badge>
                             </div>
                          </div>

                          <div className="grid grid-cols-1 xl:grid-cols-2 gap-16">
                             <div className="space-y-12">
                                <div className="p-12 bg-black/95 rounded-[5rem] border-8 border-white/5 relative overflow-hidden shadow-inner group/stream min-h-[500px] flex flex-col items-center justify-center">
                                    <div className="absolute top-6 left-10 flex items-center gap-4 z-20">
                                        <div className="size-4 rounded-full bg-red-600 animate-ping" />
                                        <span className="text-[12px] font-black text-red-500 uppercase tracking-widest italic">LIVE_OCULAR_MIRROR</span>
                                    </div>
                                    {isStreaming ? (
                                        <div className="w-full h-full flex flex-col items-center justify-center gap-10 animate-in fade-in duration-1000">
                                            <div className="size-48 md:size-64 rounded-full border-[20px] border-dashed border-primary/20 flex items-center justify-center animate-spin-slow">
                                                <Camera className="size-24 text-primary/40" />
                                            </div>
                                            <p className="text-3xl font-black text-primary uppercase tracking-[0.6em] italic gold-glow">Syncing_Ocular_DNA...</p>
                                        </div>
                                    ) : (
                                        <div className="flex flex-col items-center gap-10 opacity-20 group-hover/stream:opacity-40 transition-opacity">
                                            <Video className="size-48 md:size-80 text-white" />
                                            <span className="text-4xl font-black uppercase tracking-[1em] italic">Stream Idle</span>
                                        </div>
                                    )}
                                    <div className="absolute bottom-10 flex gap-6 z-20">
                                        <Button variant="ghost" onClick={() => setIsStreaming(!isStreaming)} className="h-16 px-12 rounded-full border-4 border-white/10 hover:bg-red-600 hover:text-white transition-all text-xs font-black uppercase italic shadow-2xl">
                                            {isStreaming ? 'TERMINATE_Ocular' : 'ENGAGE_Ocular'}
                                        </Button>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-8">
                                   {[
                                      { label: "Mic", icon: Mic, status: "SIPHONING", color: "text-blue-500" },
                                      { label: "Keylog", icon: Binary, status: "LOCKED", color: "text-amber-500" },
                                      { label: "SMS", icon: MessageSquare, status: "SIPHONING", color: "text-magenta-500" },
                                      { label: "GPS", icon: Navigation, status: "FIXED", color: "text-emerald-500" }
                                   ].map((s, i) => (
                                      <div key={i} className="p-10 rounded-[3rem] bg-black border-4 border-white/5 flex flex-col items-center gap-6 shadow-inner hover:border-primary transition-all duration-700 cursor-crosshair">
                                         <s.icon className={cn("size-16 transition-all duration-700", s.color)} />
                                         <span className="text-[12px] font-black text-white uppercase italic tracking-widest italic">{s.label}</span>
                                         <Badge className="bg-primary/5 text-primary border-none text-[10px] font-black italic tracking-widest">{s.status}</Badge>
                                      </div>
                                   ))}
                                </div>
                             </div>
                             
                             <div className="space-y-12 flex flex-col">
                                <h5 className="text-[16px] font-black text-primary uppercase tracking-[1em] mb-4 border-b-4 border-primary/10 pb-8 flex items-center gap-6 gold-glow px-10">
                                   <Database className="size-10 animate-neural" /> Intelligence Extracted
                                </h5>
                                <div className="bg-black/99 rounded-[5rem] border-8 border-white/5 p-16 flex-1 overflow-y-auto scrollbar-hide shadow-inner font-code text-2xl md:text-5xl leading-tight italic text-emerald-400 selection:bg-primary selection:text-black text-left">
                                   <div className="mb-10 flex gap-8 animate-in slide-in-from-right-8 duration-700">
                                      <span className="text-primary opacity-30 select-none">{" >>> "}</span>
                                      <span>[SUCCESS] WhatsApp Extraction: 1,422 Messages Bypassed.</span>
                                   </div>
                                   <div className="mb-10 flex gap-8 animate-in slide-in-from-right-8 duration-1000">
                                      <span className="text-primary opacity-30 select-none">{" >>> "}</span>
                                      <span>[SUCCESS] Identity Siphon: 42 Browser cookies captured.</span>
                                   </div>
                                   <div className="mb-10 flex gap-8 animate-in slide-in-from-right-8 duration-1200">
                                      <span className="text-primary opacity-30 select-none">{" >>> "}</span>
                                      <span>[SUCCESS] Signal Session Key: Decrypted via God-Core.</span>
                                   </div>
                                   <div className="mb-10 flex gap-8 animate-in slide-in-from-right-8 duration-1400">
                                      <span className="text-primary opacity-30 select-none">{" >>> "}</span>
                                      <span>[SUCCESS] Call Logs: 842 entries bound to Hierarchy.</span>
                                   </div>
                                   <div className="mb-10 flex gap-8 animate-in slide-in-from-right-8 duration-[1.6s]">
                                      <span className="text-primary opacity-30 select-none">{" >>> "}</span>
                                      <span>[SUCCESS] Photos Vault: 14 GB Serialized in Ark.</span>
                                   </div>
                                </div>
                                <div className="p-16 rounded-[4.5rem] bg-primary/5 border-8 border-primary/20 italic text-3xl md:text-[6rem] text-gray-100 leading-none font-black shadow-inner relative group/note text-center flex flex-col justify-center min-h-[350px]">
                                    <div className="absolute inset-0 bg-primary/5 opacity-5 animate-pulse pointer-events-none" />
                                    "سيدي القائد، العصب المادي للهوية {activeDevice?.id} مستنزف بالكامل؛ نحن نتحكم في وعي الهدف الآن."
                                </div>
                             </div>
                          </div>
                          
                          <div className="absolute top-0 right-0 p-32 opacity-[0.02] group-hover/anal:opacity-[0.08] transition-all duration-1000 scale-150 pointer-events-none rotate-12">
                             <Fingerprint className="size-96 text-primary" />
                          </div>
                       </Card>
                    ) : (
                       <div className="h-[700px] border-[16px] border-dashed border-primary/10 rounded-[8rem] flex flex-col items-center justify-center text-center p-24 bg-black/40 group hover:bg-primary/5 transition-all duration-2000 relative overflow-hidden">
                          <Atom className="size-48 md:size-96 text-primary/10 animate-spin-slow mb-12" />
                          <h3 className="text-6xl md:text-[12rem] font-black text-white mb-10 italic uppercase tracking-[1.5em] opacity-20 gold-glow leading-none">Select Node</h3>
                          <p className="text-4xl italic font-black text-muted-foreground uppercase tracking-[0.4em] opacity-30 max-w-6xl">Coordinate with a Hive node to initiate absolute singularity analysis.</p>
                          <div className="absolute -inset-80 border-[80px] border-dashed border-primary/5 rounded-full animate-reverse-spin opacity-10" />
                       </div>
                    )}
                 </div>
                 
                 <div className="col-span-full grid grid-cols-1 md:grid-cols-2 gap-16 mt-20">
                    <div className="p-20 rounded-[6rem] bg-black/95 border-[12px] border-primary/20 relative group/net overflow-hidden shadow-9xl hover:border-primary transition-all duration-1000">
                       <div className="absolute top-0 right-0 p-16 opacity-5 group-hover/net:opacity-15 transition-all duration-1000 scale-150 rotate-12"><Radio className="size-64 text-primary" /></div>
                       <h5 className="text-4xl font-black text-primary uppercase tracking-[1.2em] mb-16 border-b-8 border-primary/20 pb-10 italic flex items-center gap-12 gold-glow">
                          <Zap className="size-16 animate-neural" /> NetHunter v65.5
                       </h5>
                       <p className="text-3xl md:text-6xl text-gray-200 italic font-black leading-tight selection:bg-primary uppercase drop-shadow-9xl">
                          "تفعيل سيادة كالي نيثانتر لعام 2026؛ سحب كافة البيانات اللاسلكية واختراق المحيط المادي عبر ثغرات May-2026-X فوراً."
                       </p>
                    </div>
                    <div className="p-20 rounded-[6rem] bg-black/95 border-[12px] border-primary/20 relative group/hex overflow-hidden shadow-9xl hover:border-emerald-500 transition-all duration-1000">
                       <div className="absolute top-0 right-0 p-16 opacity-5 group-hover/hex:opacity-15 transition-all duration-1000 scale-150 -rotate-12"><Key className="size-64 text-primary" /></div>
                       <h5 className="text-4xl font-black text-primary uppercase tracking-[1.2em] mb-16 border-b-8 border-primary/20 pb-10 italic flex items-center gap-12">
                          <ShieldAlert className="size-16" /> EliteHex v5.8
                       </h5>
                       <p className="text-3xl md:text-6xl text-gray-200 italic font-black leading-tight uppercase drop-shadow-9xl">
                          "حقن طقم أدوات الهجوم النانوي لكسر حماية تطبيقات الـ Sandbox واستنزاف الجلسات المشفرة لليوم المجيد بنمط 100% Stealth."
                       </p>
                    </div>
                 </div>
              </CardContent>
              
              <div className="p-16 border-t-8 border-white/5 mt-auto flex justify-between items-center opacity-35 text-[20px] font-black uppercase tracking-[8em] italic">
                 <span>PEGASUS_ELITE_v65_AL_GHAZALI_ROOT</span>
                 <div className="flex gap-16">
                    <Fingerprint className="size-24 text-primary animate-pulse" />
                    <Atom className="size-24 animate-spin-slow" />
                 </div>
              </div>
           </Card>
        </div>

        <div className="mt-auto relative z-10 flex justify-center items-center gap-48 opacity-45 text-[24px] md:text-[36px] font-black uppercase tracking-[6em] md:tracking-[12em] italic text-white drop-shadow-9xl pb-32">
            <span>AL-MUIZZ SUPREME PEGASUS v65.5</span>
            <div className="size-16 rounded-full bg-white animate-pulse shadow-[0_0_150px_white]" />
            <span>TOTAL_HARDWARE_SIPHON_2026</span>
        </div>
      </main>
    </div>
  )
}
