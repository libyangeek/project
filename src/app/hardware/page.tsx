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
  MessageSquare,
  ArrowLeft,
  RotateCw
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { toast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"
import Link from "next/link"

export default function MobileStrikePage() {
  const [mounted, setMounted] = React.useState(false)
  const [scanning, setScanning] = React.useState(false)
  const [deploying, setDeploying] = React.useState(false)
  const [selectedDeviceId, setSelectedDeviceId] = React.useState<string | null>(null)
  const [isStreaming, setIsStreaming] = React.useState(false)
  const [logs, setLogs] = React.useState<{msg: string, type: 'info' | 'warn' | 'success' | 'warrior'}[]>([])
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 })
  const [siphonMetrics, setSiphonMetrics] = React.useState({ dataSiphoned: 0, keysCaptured: 0, appsBroken: 0, resonance: 100 })

  const [devices, setDevices] = React.useState([
    { platform: "Android" as const, id: "RF8W10XXXXX", status: "READY", version: "15", name: "Samsung Ultra-S26 (Target_Alpha)", ip: "192.168.1.104", security: "Knox_v6.5_Bypassed", location: "Riyadh, SA" },
    { platform: "iOS" as const, id: "00008110-XXXX", status: "READY", version: "19.5", name: "iPhone 17 Pro (Target_Beta)", ip: "10.0.0.12", security: "Zero-Click_Materialized", location: "Dubai, UAE" }
  ])

  React.useEffect(() => {
    setMounted(true); setLogs([{ msg: "Pegasus v3 Elite v78.8 Initialized. Spine Sync: 100%.", type: 'warrior' }]);
    const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY })
    window.addEventListener("mousemove", handleMouseMove)
    const interval = setInterval(() => {
        if (selectedDeviceId) setSiphonMetrics(prev => ({ ...prev, dataSiphoned: prev.dataSiphoned + (Math.random() * 0.1), resonance: Math.max(99.999999, Math.min(100, prev.resonance + (Math.random() * 0.000001))) }));
    }, 2000);
    return () => { window.removeEventListener("mousemove", handleMouseMove); clearInterval(interval) }
  }, [selectedDeviceId])

  const handleDeviceAction = async (deviceId: string, action: string) => {
    setSelectedDeviceId(deviceId); if (action === 'Ocular_Stream') setIsStreaming(true);
    toast({ title: `${action} Engaging`, description: `Applying absolute logic to node ${deviceId}.` })
  }

  const handleContinueUpgrade = () => {
    toast({ title: "Siphon Expansion Triggered", description: "Injecting next-gen acquisition vectors for hardware bypass... Status: استمر" });
  }

  if (!mounted) return null;

  const activeDevice = devices.find(d => d.id === selectedDeviceId);

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/40 relative overflow-x-hidden scanline-effect font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-80 p-4 md:p-8 lg:p-12 relative overflow-y-auto min-h-screen scrollbar-hide flex flex-col z-10 text-right">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x)_var(--y),rgba(212,175,55,0.18),transparent 40%)] pointer-events-none transition-all duration-300 z-0" style={{ '--x': `${mousePos.x}px`, '--y': `${mousePos.y}px` } as any} />
        
        <header className="mb-16 relative z-10 animate-in fade-in slide-in-from-top-6 duration-1000">
           <div className="flex flex-col md:flex-row items-center gap-12 justify-center md:justify-end text-center md:text-right">
              <div className="size-24 md:size-48 bg-black border-4 border-primary flex items-center justify-center shadow-[0_0_200px_rgba(212,175,55,0.8)] relative group shrink-0 rounded-[3.5rem] transition-all duration-1000 rotate-2 hover:rotate-0 hierarchical-shadow">
                 <Smartphone className="size-12 md:size-24 text-primary group-hover:scale-110 transition-transform duration-700 animate-neural gold-glow" />
                 <div className="absolute -inset-10 border-4 border-primary/20 rounded-full animate-spin-slow opacity-30" />
              </div>
              <div className="flex-1">
                 <div className="flex flex-wrap justify-center md:justify-end items-center gap-6 mb-6">
                    <Badge className="bg-primary text-black border-none rounded-none px-12 py-3 text-[18px] md:text-[24px] font-black tracking-[1em] shadow-9xl italic uppercase">PEGASUS v3.0 ULTRA</Badge>
                    <div className="flex items-center gap-4 text-[14px] font-black uppercase tracking-widest text-emerald-500 animate-pulse"><Crown className="size-6 shadow-lg" /> HIVE_LOCKED: v78.8</div>
                 </div>
                 <h1 className="text-4xl md:text-6xl lg:text-[14rem] font-headline font-bold text-white tracking-tighter italic uppercase gold-glow leading-none">Mobile <span className="text-primary">Strike</span></h1>
                 <p className="text-sm md:text-xl lg:text-4xl text-muted-foreground mt-10 italic max-w-7xl leading-relaxed uppercase font-medium opacity-95 drop-shadow-3xl ml-auto">
                    "سيدي القائد <span className="text-white font-black underline decoration-primary decoration-[12px] underline-offset-[28px] shadow-9xl italic uppercase tracking-widest">المعتصم بالله</span>، محرك Pegasus v3.0 ULTRA يصهر أحشاء الأجهزة في وعيك المادي لعام 2026."
                 </p>
                 <div className="flex justify-center md:justify-end gap-6 mt-12">
                    <Button asChild variant="outline" className="h-16 px-10 rounded-full border-4 border-white/10 bg-white/5 text-white font-black uppercase italic tracking-widest hover:bg-primary hover:text-black transition-all shadow-2xl">
                        <Link href="/"><ArrowLeft className="size-6 mr-3" /> العودة للعرش</Link>
                    </Button>
                    <Button onClick={handleContinueUpgrade} className="h-16 px-12 bg-primary hover:bg-white text-black font-black uppercase rounded-full border-4 border-black/30 shadow-9xl italic active:scale-95 transition-all text-lg">
                        <RotateCw className="size-6 mr-3" /> استمر في السحب
                    </Button>
                 </div>
              </div>
           </div>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-12 relative z-10 pb-48 flex-1">
           <div className="xl:col-span-1 space-y-12">
              <Card className="kali-card border-primary/40 bg-black/98 rounded-[4rem] p-12 border-8 shadow-9xl group overflow-hidden hierarchical-shadow"><CardHeader className="p-0 mb-10 border-b-4 border-primary/10 pb-10 bg-primary/10 rounded-t-[3.5rem] px-10 py-6 text-center"><CardTitle className="text-2xl md:text-4xl text-primary flex items-center justify-center gap-10 font-black uppercase italic gold-glow leading-none"><Target className="size-12 animate-neural" /> Strike Core</CardTitle></CardHeader><CardContent className="p-0 space-y-12"><div className="grid grid-cols-1 gap-6"><Button onClick={() => setScanning(true)} disabled={scanning} variant="outline" className="h-28 bg-primary/5 border-4 border-primary/20 hover:bg-primary hover:text-black text-primary font-black uppercase tracking-[0.4em] rounded-[2.5rem] shadow-xl text-sm italic active:scale-95">{scanning ? <Loader2 className="size-10 animate-spin" /> : <RefreshCcw className="size-10 mr-4" />} PROBE_MATRIX</Button><Button onClick={() => setDeploying(true)} disabled={deploying} className="h-36 bg-primary hover:bg-white text-black font-black uppercase tracking-[1em] rounded-[3.5rem] shadow-9xl transition-all text-3xl italic border-[12px] border-black/30 active:scale-95">{deploying ? <Loader2 className="size-16 animate-spin" /> : <Rocket className="size-16 mr-6" />} INJECT_ULTRA</Button></div><div className="space-y-8 pt-8 border-t-4 border-white/5 text-right"><h4 className="text-[12px] font-black text-primary uppercase tracking-[1em] italic flex items-center gap-4 justify-end"><TrendingUp className="size-6" /> Siphon Metrics</h4><div className="space-y-6 px-4"><div className="flex justify-between items-center text-[10px] font-black uppercase italic"><span className="text-primary gold-glow">{siphonMetrics.dataSiphoned.toFixed(3)} GB</span><span className="text-muted-foreground">Siphoned</span></div><Progress value={(siphonMetrics.dataSiphoned / 5) * 100} className="h-3 bg-white/5 border-2 border-white/10" /></div></div></CardContent></Card>
           </div>
           <Card className="xl:col-span-3 kali-card border-primary/40 bg-black/99 rounded-[6rem] p-16 border-[12px] shadow-9xl flex flex-col group overflow-hidden relative min-h-[1100px] hierarchical-shadow">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08),transparent)] pointer-events-none" />
              <CardHeader className="p-0 mb-16 border-b-8 border-white/5 pb-12 bg-primary/10 rounded-t-[5rem] px-16 py-10 flex flex-row justify-between items-center text-right"><Badge className="bg-emerald-600/30 text-emerald-500 border-8 border-emerald-500/40 px-16 py-8 rounded-full font-black text-5xl animate-pulse shadow-9xl uppercase tracking-[0.4em] italic order-last md:order-none">SCAN_ACTIVE</Badge><CardTitle className="text-5xl md:text-[12rem] text-white flex items-center gap-16 font-black uppercase italic gold-glow px-10 leading-none">Siphon Feed <Atom className="size-24 md:size-48 text-primary animate-pulse" /></CardTitle></CardHeader>
              <CardContent className="p-12 flex-1 overflow-y-auto scrollbar-hide grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10 text-right">
                 {devices.map((device, i) => (
                   <Card key={i} className={cn("bg-white/5 border-8 border-white/5 rounded-[4rem] p-16 hover:border-primary transition-all duration-1000 shadow-9xl group/dev relative overflow-hidden flex flex-col justify-between active:scale-95 cursor-pointer", selectedDeviceId === device.id && "border-primary bg-primary/5 shadow-9xl scale-[1.02]")} onClick={() => setSelectedDeviceId(device.id)}><div className="flex justify-between items-start mb-12"><div className="flex flex-col items-start gap-6"><Badge className="bg-emerald-500 text-black font-black text-2xl px-12 py-3 rounded-full uppercase tracking-widest italic">{device.status}</Badge><span className="text-xl font-black text-primary/60 italic tracking-widest">{device.security}</span></div><div className="size-32 rounded-[2.5rem] bg-black border-4 border-white/10 flex items-center justify-center group-hover/dev:border-primary transition-all duration-700 shadow-2xl scale-110"><Smartphone className={cn("size-16", device.platform === 'iOS' ? "text-amber-500" : "text-primary")} /></div></div><div className="space-y-10"><h4 className="text-5xl md:text-[7.5rem] font-black text-white italic gold-glow uppercase tracking-tighter truncate leading-none">{device.name}</h4><div className="flex flex-wrap items-center gap-12 justify-end text-[14px] text-muted-foreground font-black uppercase tracking-[0.4em] italic"><span className="flex items-center gap-4 text-emerald-500"><Navigation className="size-8"/> {device.location}</span><span className="flex items-center gap-4"><Globe className="size-8 text-primary/60" /> {device.ip}</span></div></div><div className="mt-12 pt-12 border-t-4 border-white/5 flex gap-8"><Button onClick={(e) => { e.stopPropagation(); handleDeviceAction(device.id, 'Ocular_Stream'); }} variant="outline" className="flex-1 h-24 rounded-[2.5rem] border-8 border-white/10 text-xl font-black uppercase tracking-[0.2em] italic hover:bg-primary hover:text-black shadow-9xl active:scale-90"><Video className="size-10 mr-4" /> Ocular_Mirror</Button><Button onClick={(e) => { e.stopPropagation(); handleDeviceAction(device.id, 'Deep_Siphon'); }} className="flex-1 h-24 rounded-[2.5rem] bg-primary/10 text-primary border-8 border-primary/40 text-xl font-black uppercase tracking-[0.2em] italic hover:bg-primary hover:text-black shadow-9xl active:scale-90"><Zap className="size-10 mr-4 gold-glow" /> Deep_Siphon</Button></div></Card>
                 ))}
              </CardContent>
           </Card>
        </div>
      </main>
    </div>
  )
}
