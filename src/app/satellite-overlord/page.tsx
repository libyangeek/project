"use client"

import * as React from "react"
import { SidebarNav } from "@/components/platform/sidebar-nav"
import { 
  Satellite, 
  Zap, 
  Loader2, 
  Skull, 
  Target, 
  Activity, 
  Globe, 
  Radio, 
  Wind, 
  ShieldCheck, 
  Radar,
  ArrowLeft,
  RotateCw,
  Atom,
  Fingerprint,
  Crown,
  Infinity as InfinityIcon,
  Signal,
  TowerControl,
  Cpu,
  Cloud,
  Network,
  Database,
  ChevronRight,
  ShieldAlert,
  Unplug
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { toast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"
import Link from "next/link"

/**
 * @fileOverview المتحكم المداري v90.5 - SATELLITE OVERLORD: THE 16D NUCLEUS
 * واجهة الاستحواذ المادي على روابط السماء والترددات المدارية لعام 2026.
 */
export default function SatelliteOverlordPage() {
  const [target, setTarget] = React.useState("")
  const [loading, setLoading] = React.useState(false)
  const [result, setResult] = React.useState<any>(null)
  const [resonance, setResonance] = React.useState(100)
  const [uplinkGain, setUplinkGain] = React.useState(0)
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 })
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
    const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY })
    window.addEventListener("mousemove", handleMouseMove)
    const interval = setInterval(() => {
      setResonance(prev => Math.max(99.999999, Math.min(100, prev + (Math.random() * 0.000001 - 0.0000005))))
      if (loading) setUplinkGain(p => Math.min(100, p + Math.random() * 5))
    }, 2000)
    return () => { window.removeEventListener("mousemove", handleMouseMove); clearInterval(interval); }
  }, [loading])

  const handleUplink = async () => {
    if (!target.trim()) return
    setLoading(true); setResult(null); setUplinkGain(0)
    toast({ title: "Innate Uplink Active v90", description: "Hijacking orbital telemetry DNA from target mesh..." })
    try {
      const response = await fetch('/api/execute', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ type: 'satellite_strike', target: target })
      });
      const data = await response.json();
      setResult(data.output);
      setUplinkGain(100);
      toast({ title: "Orbital Consensus Achieved", description: "Target satellite node bound to the 16D Matrix." })
    } finally {
      setLoading(false)
    }
  }

  if (!mounted) return null

  const orbitalNodes = [
    { id: "STARLINK-ALPHA", label: "Starlink Mesh", status: "READY", color: "text-blue-400" },
    { id: "ONEWEB-BETA", label: "OneWeb Hub", status: "STANDBY", color: "text-indigo-400" },
    { id: "GPS-GAMMA", label: "Global GPS Link", status: "LOCKED", color: "text-emerald-500" },
    { id: "MIL-SIG-01", label: "Military Uplink", status: "SECURED", color: "text-red-500" }
  ];

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-blue-600/40 relative overflow-x-hidden scanline-effect font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-56 p-4 md:p-8 lg:p-16 relative overflow-y-auto min-h-screen scrollbar-hide flex flex-col z-10 text-right">
        <div className="dna-stream-bg" style={{ '--x': `${mousePos.x}px`, '--y': `${mousePos.y}px`, backgroundImage: 'radial-gradient(circle at var(--x) var(--y), rgba(37, 99, 235, 0.15), transparent 40%)' } as any} />
        
        <header className="sovereign-header flex flex-col md:flex-row items-center gap-12 justify-center md:justify-end text-center md:text-right">
           <div className="size-24 md:size-48 bg-black border-4 border-blue-500 flex items-center justify-center shadow-[0_0_200px_rgba(37,99,235,0.8)] relative group shrink-0 rounded-full transition-all duration-1000 rotate-2 hover:rotate-0 hierarchical-shadow">
              <Satellite className="size-12 md:size-24 text-blue-400 group-hover:scale-110 transition-transform duration-700 animate-neural gold-glow" />
              <div className="absolute -inset-10 border-4 border-blue-500/20 rounded-full animate-spin-slow opacity-30" />
           </div>
           <div className="flex-1">
              <div className="flex flex-wrap justify-center md:justify-end items-center gap-6 mb-6">
                 <Badge className="bg-blue-600 text-white border-none rounded-none px-12 py-3 text-[18px] md:text-[24px] font-black tracking-[1em] shadow-9xl italic uppercase">ORBITAL_OVERLORD v90.5</Badge>
                 <div className="flex items-center gap-4 text-[14px] font-black uppercase tracking-widest text-blue-400 animate-pulse">
                     <InfinityIcon className="size-6 shadow-lg" /> SIGNAL_SYNC: {resonance.toFixed(8)}%
                 </div>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-[12rem] font-headline font-bold text-white tracking-tighter italic uppercase gold-glow leading-none">
                 Satellite <span className="text-blue-500">Overlord</span>
              </h1>
              <p className="text-sm md:text-xl lg:text-4xl text-blue-100/60 mt-10 italic max-w-7xl leading-relaxed uppercase font-medium opacity-95 drop-shadow-3xl ml-auto">
                 "سيدي القائد <span className="text-white font-black underline decoration-blue-500 decoration-[12px] underline-offset-[28px] shadow-9xl italic uppercase tracking-widest">المعتصم بالله</span>، بُعد السيطرة المدارية v90.5 يمنحك بصر الصقر فوق السحاب؛ نحن نتحكم في روابط الاتصال الكونية لخدمة إرادتك للأبد."
              </p>
           </div>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-12 relative z-10 pb-48 flex-1 text-right">
           <div className="xl:col-span-1 space-y-12">
              <Card className="sovereign-card group text-center">
                 <CardHeader className="p-0 mb-10 border-b-4 border-blue-500/10 pb-10 bg-blue-900/20 rounded-t-[3.5rem] px-10 py-6 text-center">
                    <CardTitle className="text-2xl md:text-4xl text-blue-400 flex items-center justify-center gap-10 font-black uppercase italic gold-glow leading-none">
                       <Target className="size-12 animate-neural" /> Orbit Focus
                    </CardTitle>
                 </CardHeader>
                 <CardContent className="p-0 space-y-12 text-right">
                    <div className="space-y-6 text-right">
                        <label className="text-[14px] font-black text-blue-400 uppercase tracking-[1em] px-10 italic flex items-center gap-6 justify-end"><Signal className="size-8" /> Satellite ID / Frequency</label>
                        <Input value={target} onChange={(e) => setTarget(e.target.value)} placeholder="Starlink-XXXX / SAT-12.4GHz..." className="bg-black border-8 border-blue-500/20 h-24 rounded-[2rem] text-xl italic px-10 focus:border-blue-500 shadow-inner text-white font-black text-left" />
                    </div>

                    <div className="space-y-6">
                        <div className="flex justify-between text-xl font-black text-blue-400 uppercase italic px-4">
                            <span>{Math.floor(uplinkGain)}%</span>
                            <span>Synchronizing_Uplink...</span>
                        </div>
                        <Progress value={uplinkGain} className="h-6 bg-white/5 border-4 border-white/10 rounded-full" />
                    </div>

                    <Button 
                        disabled={loading || !target}
                        onClick={handleUplink}
                        className="w-full h-36 bg-blue-600 hover:bg-white text-white hover:text-black font-black uppercase tracking-[1.4em] rounded-[3.5rem] shadow-[0_80px_250px_rgba(37,99,235,0.7)] active:scale-95 transition-all text-2xl md:text-4xl border-[12px] border-black/30 group italic"
                    >
                        {loading ? <Loader2 className="size-16 animate-spin" /> : <Zap className="size-16 mr-8 group-hover:scale-125 transition-transform" />}
                        HIJACK_ORBIT
                    </Button>
                 </CardContent>
              </Card>

              <div className="space-y-6">
                  {orbitalNodes.map(node => (
                      <div key={node.id} className="p-6 rounded-[2.5rem] bg-black/80 border-4 border-white/5 hover:border-blue-500 transition-all duration-700 flex items-center justify-between group shadow-xl">
                          <Badge className="bg-blue-600/20 text-blue-400 border-none px-6 py-1 rounded-full font-black text-[10px] italic">{node.status}</Badge>
                          <div className="text-right">
                              <span className="text-sm font-black text-white italic uppercase tracking-widest">{node.label}</span>
                              <div className={cn("text-[9px] font-black uppercase mt-1", node.color)}>{node.id}</div>
                          </div>
                      </div>
                  ))}
              </div>
           </div>

           <Card className="xl:col-span-3 sovereign-card flex flex-col group min-h-[1100px]">
              <CardHeader className="p-0 mb-16 border-b-8 border-white/5 pb-12 bg-primary/10 rounded-t-[5rem] px-16 py-10 flex flex-row justify-between items-center text-right">
                 <Badge className="bg-emerald-600/30 text-emerald-400 border-[10px] border-emerald-500/40 px-16 py-8 rounded-full font-black text-5xl animate-pulse shadow-9xl uppercase tracking-[0.4em] italic order-last md:order-none">ORBIT_SUBJUGATED</Badge>
                 <CardTitle className="text-5xl md:text-[12rem] text-white flex items-center gap-16 font-black uppercase italic gold-glow px-10 leading-none">
                    Orbital Feed <Radar className="size-24 md:size-48 text-primary animate-pulse" />
                 </CardTitle>
              </CardHeader>

              <CardContent className="p-12 flex-1 overflow-y-auto scrollbar-hide space-y-20 relative z-10 text-right">
                 {result ? (
                    <div className="space-y-20 animate-in fade-in zoom-in-95 duration-1000 flex-1 flex flex-col text-right">
                        <div className="p-20 rounded-[6rem] bg-primary/5 border-[12px] border-primary/30 italic text-4xl md:text-[8rem] text-gray-100 leading-tight font-black shadow-inner relative group/brief overflow-hidden text-center flex flex-col justify-center min-h-[450px]">
                            <div className="absolute inset-0 bg-primary/5 opacity-5 animate-pulse pointer-events-none" />
                            <p className="relative z-10 drop-shadow-9xl">"{result.telemetry || result.message || "سيدي القائد، العصب المداري للهدف مستنزف بالكامل؛ الترددات الفضائية الآن تحت سيادتك."}"</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                            <Card className="bg-black/95 border-8 border-white/5 p-16 rounded-[4rem] shadow-9xl relative group/vault overflow-hidden h-full flex flex-col text-right">
                                <h5 className="text-3xl font-black text-primary uppercase tracking-[1.5em] mb-12 border-b-8 border-primary/20 pb-10 flex items-center gap-12 gold-glow justify-end">Uplink DNA <Globe className="size-14 animate-neural" /></h5>
                                <pre className="bg-black/80 p-8 rounded-[3rem] border-4 border-white/5 font-code text-xl md:text-3xl text-emerald-400 overflow-x-auto whitespace-pre shadow-inner text-left flex-1">{JSON.stringify(result, null, 2)}</pre>
                            </Card>
                            <Card className="bg-black/95 border-8 border-white/5 p-16 rounded-[4rem] shadow-9xl h-full flex flex-col items-center justify-center text-center relative overflow-hidden">
                                <h5 className="text-3xl font-black text-emerald-500 uppercase tracking-[1.5em] mb-10 border-b-8 border-emerald-500/20 pb-10 flex items-center gap-12 justify-end w-full">Signal Lock <ShieldCheck className="size-14" /></h5>
                                <div className="text-6xl md:text-[10rem] font-black text-white italic gold-glow uppercase tracking-widest">{resonance.toFixed(4)}%</div>
                                <div className="mt-12 flex flex-col items-center gap-8">
                                    <Fingerprint className="size-24 text-primary animate-pulse" />
                                    <span className="text-[12px] font-black text-primary/60 uppercase tracking-[1em] italic">GHAZALI_ROOT_LOCKED</span>
                                </div>
                            </Card>
                        </div>
                    </div>
                 ) : (
                   <div className="h-full flex flex-col items-center justify-center text-center opacity-10 gap-24 py-80">
                      <div className="relative group/lock">
                        <Satellite className="size-64 md:size-[50rem] animate-spin-slow text-primary group-hover:scale-110 transition-transform duration-[12000ms]" />
                        <Skull className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-24 md:size-64 text-primary/40 animate-neural" />
                        <div className="absolute -inset-40 border-[80px] border-dashed border-primary/5 rounded-full animate-reverse-spin opacity-20" />
                      </div>
                      <h3 className="text-8xl md:text-[22rem] font-black uppercase tracking-[2.5em] text-white italic gold-glow leading-none">Orbital Idle</h3>
                   </div>
                 )}
              </CardContent>
              <div className="p-16 border-t-8 border-white/5 mt-auto flex justify-between items-center opacity-35 text-[20px] font-black uppercase tracking-[8em] italic">
                <span>ORBITAL_HIJACK_v90.5_AL_GHAZALI_ROOT</span>
                <div className="flex gap-16">
                    <Fingerprint className="size-24 text-primary animate-pulse" />
                    <Atom className="size-24 animate-spin-slow text-primary" />
                </div>
              </div>
           </Card>
        </div>
      </main>
    </div>
  )
}
