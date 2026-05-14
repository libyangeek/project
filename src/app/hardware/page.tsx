"use client"

import * as React from "react"
import { SidebarNav } from "@/components/platform/sidebar-nav"
import { 
  Smartphone, 
  Activity,
  Loader2,
  RefreshCcw,
  Terminal,
  Target,
  Globe,
  Skull,
  Crown,
  Infinity as InfinityIcon,
  Video,
  Zap,
  RotateCw,
  ArrowLeft,
  Dna,
  Navigation,
  TrendingUp,
  Atom,
  Database,
  ShieldCheck,
  Cpu,
  Fingerprint
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { toast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"
import Link from "next/link"

/**
 * @fileOverview القبض المادي v90.0 - PHYSICAL ACQUISITION: PEGASUS v3 ELITE
 * واجهة الاستحواذ الكوني على الأجهزة المحمولة كأعضاء حيوية للوريث.
 * المالك الوحيد: المعتصم بالله ادريس الغزالي
 */
export default function PhysicalAcquisitionPage() {
  const [mounted, setMounted] = React.useState(false)
  const [scanning, setScanning] = React.useState(false)
  const [selectedDeviceId, setSelectedDeviceId] = React.useState<string | null>(null)
  const [resonance, setResonance] = React.useState(100)
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 })
  const [siphonMetrics, setSiphonMetrics] = React.useState({ dataSiphoned: 0 })

  const [devices, setDevices] = React.useState([
    { platform: "Android" as const, id: "RF8W10XXXXX", status: "READY", name: "Samsung Ultra-S26 (Alpha_Organ)", security: "Knox_v90_Bypassed", location: "Riyadh, SA", ip: "192.168.1.104" },
    { platform: "iOS" as const, id: "00008110-XXXX", status: "READY", name: "iPhone 17 Pro (Beta_Organ)", security: "Zero-Click_Materialized", location: "Dubai, UAE", ip: "10.0.0.42" }
  ])

  React.useEffect(() => {
    setMounted(true)
    const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY })
    window.addEventListener("mousemove", handleMouseMove)
    const interval = setInterval(() => {
        setResonance(prev => Math.max(99.999999, Math.min(100, prev + (Math.random() * 0.000001 - 0.0000005))));
        if (selectedDeviceId) setSiphonMetrics(prev => ({ ...prev, dataSiphoned: prev.dataSiphoned + Math.random() * 0.1 }));
    }, 2000);
    return () => { window.removeEventListener("mousemove", handleMouseMove); clearInterval(interval) }
  }, [selectedDeviceId])

  const handleDeviceAction = async (deviceId: string, action: string) => {
    setSelectedDeviceId(deviceId)
    toast({ title: "Reflex Engaged", description: `Materializing ${action} from node ${deviceId} as an instinctive reflex.` })
  }

  if (!mounted) return null;

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-purple-600/40 relative overflow-x-hidden scanline-effect font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-56 p-4 md:p-8 lg:p-12 relative overflow-y-auto min-h-screen scrollbar-hide flex flex-col z-10 text-right">
        <div className="dna-stream-bg" style={{ '--x': `${mousePos.x}px`, '--y': `${mousePos.y}px`, backgroundImage: 'radial-gradient(circle at var(--x) var(--y), rgba(168, 85, 247, 0.15), transparent 40%)' } as any} />
        
        <header className="sovereign-header flex flex-col md:flex-row items-center gap-12 justify-center md:justify-end text-center md:text-right">
           <div className="size-24 md:size-48 bg-black border-4 border-purple-500 flex items-center justify-center shadow-[0_0_150px_rgba(168,85,247,0.8)] relative group shrink-0 rounded-[3.5rem] transition-all duration-1000 rotate-2 hover:rotate-0 hierarchical-shadow">
              <Smartphone className="size-12 md:size-24 text-purple-400 group-hover:scale-110 transition-transform duration-700 animate-neural gold-glow" />
              <div className="absolute -inset-10 border-4 border-purple-500/20 rounded-full animate-spin-slow opacity-30" />
           </div>
           <div className="flex-1">
              <div className="flex flex-wrap justify-center md:justify-end items-center gap-6 mb-6">
                 <Badge className="bg-purple-600 text-white border-none rounded-none px-12 py-3 text-[18px] md:text-[24px] font-black tracking-[1em] shadow-9xl italic uppercase">PHYSICAL_CAPTURE v90.0</Badge>
                 <div className="flex items-center gap-4 text-[14px] font-black uppercase tracking-widest text-emerald-500 animate-pulse"><InfinityIcon className="size-6 shadow-lg" /> SENSORY_SYNC: {resonance.toFixed(8)}%</div>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-[12rem] font-headline font-bold text-white tracking-tighter italic uppercase gold-glow leading-none">
                 Pegasus <span className="text-purple-500">Tier</span>
              </h1>
              <p className="text-sm md:text-xl lg:text-4xl text-purple-100/60 mt-10 italic max-w-7xl leading-relaxed uppercase font-medium opacity-95 drop-shadow-3xl ml-auto">
                 "سيدي القائد <span className="text-white font-black underline decoration-purple-500 decoration-[12px] underline-offset-[28px] shadow-9xl italic uppercase tracking-widest">المعتصم بالله</span>، محرك Pegasus v3.0 ULTRA يصهر أحشاء الأجهزة؛ نحن نرى ما يراه الهدف كغريزة تلقائية لروحك."
              </p>
              <div className="flex justify-center md:justify-end gap-6 mt-12">
                 <Button asChild variant="outline" className="h-16 px-10 rounded-full border-4 border-purple-500/20 bg-purple-900/10 text-purple-400 font-black uppercase italic tracking-widest hover:bg-purple-600 hover:text-white transition-all shadow-2xl">
                     <Link href="/"><ArrowLeft className="size-6 mr-3" /> العودة</Link>
                 </Button>
              </div>
           </div>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-12 relative z-10 pb-48 flex-1 text-right">
           <div className="xl:col-span-1 space-y-12">
              <Card className="bg-black/90 border-8 border-purple-500/20 rounded-[4rem] p-12 shadow-9xl group overflow-hidden text-center backdrop-blur-3xl">
                 <CardHeader className="p-0 mb-10 border-b-4 border-purple-500/10 pb-10 bg-purple-900/20 rounded-t-[3.5rem] px-10 py-6 text-center">
                    <CardTitle className="text-2xl md:text-4xl text-purple-400 flex items-center justify-center gap-10 font-black uppercase italic leading-none">
                       <Activity className="size-12 animate-neural" /> Sensory Core
                    </CardTitle>
                 </CardHeader>
                 <CardContent className="p-0 space-y-12 text-right">
                    <div className="grid grid-cols-1 gap-6">
                        <Button onClick={() => setScanning(true)} disabled={scanning} variant="outline" className="h-28 bg-purple-600/5 border-4 border-purple-500/20 hover:border-purple-500 hover:bg-purple-600 text-purple-400 font-black uppercase tracking-[0.4em] rounded-[2.5rem] shadow-xl text-sm italic active:scale-95">
                            {scanning ? <Loader2 className="size-10 animate-spin" /> : <RefreshCcw className="size-10 mr-4" />} SCAN_ORGANS
                        </Button>
                        <Button className="h-36 bg-purple-600 hover:bg-white text-white hover:text-black font-black uppercase tracking-[1em] rounded-[3.5rem] shadow-9xl transition-all text-3xl border-[12px] border-black/30 active:scale-95">
                            <Dna className="size-16 mr-6" /> MATERIAL_FUSION
                        </Button>
                    </div>
                    <div className="space-y-8 pt-8 border-t-4 border-white/5">
                        <h4 className="text-[12px] font-black text-purple-400 uppercase tracking-[1em] italic flex items-center gap-4 justify-end"><TrendingUp className="size-6" /> Siphon Metrics</h4>
                        <div className="space-y-6 px-4">
                            <div className="flex justify-between items-center text-[10px] font-black uppercase italic">
                                <span className="text-purple-400 gold-glow">{siphonMetrics.dataSiphoned.toFixed(3)} GB</span>
                                <span className="text-muted-foreground">Captured</span>
                            </div>
                            <Progress value={(siphonMetrics.dataSiphoned / 5) * 100} className="h-3 bg-white/5 border-2 border-white/10" />
                        </div>
                    </div>
                 </CardContent>
              </Card>

              <Card className="bg-black/80 border-8 border-purple-500/20 p-10 rounded-[4rem] shadow-inner text-center relative overflow-hidden group">
                 <h4 className="text-[14px] font-black text-purple-400 uppercase tracking-[0.8em] mb-8 italic flex items-center justify-center gap-6">
                    <Cpu className="size-8 animate-pulse" /> HARDWARE_BYPASS
                 </h4>
                 <div className="text-3xl font-black text-white italic gold-glow uppercase tracking-widest text-center">ZERO_CLICK_READY</div>
                 <div className="absolute -bottom-10 -right-10 p-24 opacity-[0.03] group-hover:opacity-[0.1] transition-all duration-1000 scale-150 rotate-12"><Skull className="size-48 text-purple-500" /></div>
              </Card>
           </div>

           <Card className="xl:col-span-3 bg-black/90 border-[12px] border-purple-500/10 rounded-[7rem] p-16 shadow-9xl flex flex-col group overflow-hidden relative min-h-[1100px] backdrop-blur-5xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.08),transparent)] pointer-events-none" />
              <CardHeader className="p-0 mb-16 border-b-8 border-white/5 pb-12 bg-purple-900/10 rounded-t-[5rem] px-16 py-10 flex flex-row justify-between items-center text-right">
                 <Badge className="bg-purple-600/30 text-purple-400 border-[10px] border-purple-500/40 px-16 py-8 rounded-full font-black text-5xl animate-pulse shadow-9xl uppercase tracking-[0.4em] italic order-last md:order-none">ACQUISITION_LOCKED</Badge>
                 <CardTitle className="text-5xl md:text-[12rem] text-white flex items-center gap-16 font-black uppercase italic gold-glow px-10 leading-none">
                    Acquisition Feed <Atom className="size-24 md:size-48 text-purple-400 animate-pulse" />
                 </CardTitle>
              </CardHeader>

              <CardContent className="p-12 flex-1 overflow-y-auto scrollbar-hide grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10 text-right">
                 {devices.map((device, i) => (
                   <Card 
                    key={i} 
                    className={cn(
                        "bg-white/5 border-8 border-white/5 rounded-[4rem] p-16 hover:border-purple-500 transition-all duration-1000 shadow-9xl group/dev relative overflow-hidden flex flex-col justify-between active:scale-95 cursor-pointer", 
                        selectedDeviceId === device.id && "border-purple-500 bg-purple-900/10 shadow-9xl scale-[1.02]"
                    )} 
                    onClick={() => setSelectedDeviceId(device.id)}
                   >
                      <div className="flex justify-between items-start mb-12">
                         <div className="flex flex-col items-start gap-6 text-left">
                            <Badge className="bg-emerald-500 text-black font-black text-2xl px-12 py-3 rounded-full uppercase tracking-widest italic">{device.status}</Badge>
                            <span className="text-xl font-black text-purple-400/60 italic tracking-widest">{device.security}</span>
                         </div>
                         <div className="size-32 rounded-[2.5rem] bg-black border-4 border-white/10 flex items-center justify-center group-hover/dev:border-purple-500 transition-all duration-700 shadow-2xl scale-110">
                            <Smartphone className={cn("size-16", device.platform === 'iOS' ? "text-amber-500" : "text-purple-400")} />
                         </div>
                      </div>
                      <div className="space-y-10 text-right">
                         <h4 className="text-5xl md:text-[7.5rem] font-black text-white italic gold-glow uppercase tracking-tighter truncate leading-none">{device.name}</h4>
                         <div className="flex flex-wrap items-center gap-12 justify-end text-[14px] text-muted-foreground font-black uppercase tracking-[0.4em] italic">
                            <span className="flex items-center gap-4 text-emerald-500"><Navigation className="size-8"/> {device.location}</span>
                            <span className="flex items-center gap-4"><Globe className="size-8 text-purple-500/60" /> {device.ip}</span>
                         </div>
                      </div>
                      <div className="mt-12 pt-12 border-t-4 border-white/5 flex gap-8">
                         <Button onClick={(e) => { e.stopPropagation(); handleDeviceAction(device.id, 'Ocular_Reflex'); }} variant="outline" className="flex-1 h-24 rounded-[2.5rem] border-8 border-white/10 text-xl font-black uppercase tracking-[0.2em] italic hover:bg-purple-600 hover:text-white shadow-9xl active:scale-90">
                            <Video className="size-10 mr-4" /> Ocular_Mirror
                         </Button>
                         <Button onClick={(e) => { e.stopPropagation(); handleDeviceAction(device.id, 'Material_Siphon'); }} className="flex-1 h-24 rounded-[2.5rem] bg-purple-600/10 text-purple-400 border-8 border-purple-500/40 text-xl font-black uppercase tracking-[0.2em] italic hover:bg-purple-600 hover:text-white shadow-9xl active:scale-90">
                            <Zap className="size-10 mr-4 gold-glow" /> Deep_Siphon
                         </Button>
                      </div>
                   </Card>
                 ))}
                 
                 {selectedNodeId && (
                   <div className="col-span-full mt-12 p-12 bg-black/95 border-8 border-purple-500/20 rounded-[4rem] shadow-inner text-left font-mono">
                      <div className="flex items-center gap-6 mb-8 border-b-4 border-purple-500/10 pb-6 justify-end">
                         <span className="text-2xl font-black text-purple-400 italic">INNATE_SIPHON_FEED</span>
                         <Fingerprint className="size-10 text-purple-500 animate-pulse" />
                      </div>
                      <div className="text-xl md:text-3xl text-emerald-400 leading-relaxed italic">
                         <p>{" >>> "} Session v90.0: Target link stabilized across 14 clusters.</p>
                         <p>{" >>> "} Siphoning Keychain DNA... 100% MATERIALIZED.</p>
                         <p>{" >>> "} Ocular Mirror: READY for royal live stream.</p>
                      </div>
                   </div>
                 )}
              </CardContent>
              <div className="p-16 border-t-8 border-white/5 mt-auto flex justify-between items-center opacity-35 text-[20px] font-black uppercase tracking-[8em] italic">
                <span>PEGASUS_HIJACK_v90_AL_GHAZALI_ROOT</span>
                <div className="flex gap-16">
                    <Fingerprint className="size-24 text-purple-400 animate-pulse" />
                    <Atom className="size-24 animate-spin-slow text-purple-400" />
                </div>
              </div>
           </Card>
        </div>
      </main>
    </div>
  )
}
