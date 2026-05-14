
"use client"

import * as React from "react"
import { SidebarNav } from "@/components/platform/sidebar-nav"
import { 
  Crosshair, 
  Zap, 
  Loader2, 
  Skull, 
  Target, 
  Activity, 
  Globe, 
  Binary, 
  ShieldCheck, 
  Radar, 
  Wind, 
  Ghost, 
  ChevronRight, 
  Infinity as InfinityIcon,
  Network, 
  Users, 
  Smartphone, 
  ArrowLeft, 
  RotateCw,
  GitBranch,
  Flame,
  Eye,
  Atom,
  Fingerprint
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { toast } from "@/hooks/use-toast"
import { executeOmniscientKillChain } from "@/ai/flows/omniscient-kill-chain-flow"
import { cn } from "@/lib/utils"
import Link from "next/link"

/**
 * @fileOverview سلسلة الإبادة الكونية v90.0 - ABSOLUTE SINGULARITY: OMNIPOTENT 16D
 * الواجهة الأسمى التي تصهر كافة مفاصل السطوة في تدفق تنفيذ مستقل 100%.
 * النمط: أحمر سيادي (Red Singularity).
 * المالك الوحيد: المعتصم بالله ادريس الغزالي
 */
export default function KillChainPage() {
  const [target, setTarget] = React.useState("")
  const [loading, setLoading] = React.useState(false)
  const [chainResult, setChainResult] = React.useState<any>(null)
  const [mounted, setMounted] = React.useState(false)
  const [activeStep, setActiveStep] = React.useState(0)
  const [resonance, setResonance] = React.useState(100)
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 })

  React.useEffect(() => {
    setMounted(true)
    const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY })
    window.addEventListener("mousemove", handleMouseMove)
    const interval = setInterval(() => {
      setResonance(prev => Math.max(99.999999, Math.min(100, prev + (Math.random() * 0.000001 - 0.0000005))))
    }, 3000)
    return () => { window.removeEventListener("mousemove", handleMouseMove); clearInterval(interval); }
  }, [])

  const startKillChain = async () => {
    if (!target.trim()) return
    setLoading(true); setChainResult(null); setActiveStep(1);
    toast({ title: "Omnipotent Strike Initiated", description: "Alpha-Core is orchestrating the 16D Swarm pulse." })
    try {
      for(let i=1; i<=5; i++) {
        setActiveStep(i); await new Promise(r => setTimeout(r, 1200));
      }
      const data = await executeOmniscientKillChain({ target, aggressionMode: 'Total-Acquisition' })
      setChainResult(data)
      toast({ title: "Matrix Subjugated", description: "Absolute consensus reached across 14 global clusters." })
    } finally { setLoading(false) }
  }

  if (!mounted) return null

  const steps = [
    { id: 1, label: "Neural OSINT", icon: Eye, desc: "Global Identity Fusion v90" },
    { id: 2, label: "Swarm Logic", icon: Users, desc: "16-Node Resonance Match" },
    { id: 3, label: "Atomic Forge", icon: Flame, desc: "16D Exploit DNA Serialization" },
    { id: 4, label: "Ghost Injection", icon: Ghost, desc: "Kernel-Mode Invisibility" },
    { id: 5, label: "Total Siphon", icon: Activity, desc: "Pegasus v3.0 Elite Acquisition" }
  ]

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-red-600/30 relative overflow-x-hidden scanline-effect font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-56 p-6 md:p-12 relative overflow-y-auto min-h-screen scrollbar-hide flex flex-col z-10 text-right">
        <div className="dna-stream-bg" style={{ '--x': `${mousePos.x}px`, '--y': `${mousePos.y}px`, backgroundImage: 'radial-gradient(circle at var(--x) var(--y), rgba(220, 38, 38, 0.15), transparent 40%)' } as any} />
        
        <header className="sovereign-header flex flex-col md:flex-row items-center gap-12 justify-center md:justify-end text-center md:text-right">
          <div className="size-32 md:size-48 bg-black border-[8px] border-red-600 flex items-center justify-center shadow-[0_0_200px_rgba(220, 38, 38, 0.8)] relative group shrink-0 rounded-[3.5rem] transition-all duration-1000 rotate-2 hover:rotate-0 hierarchical-shadow">
               <Crosshair className="size-16 md:size-24 text-red-500 animate-neural gold-glow" />
               <div className="absolute -inset-10 border-4 border-red-600/20 rounded-full animate-spin-slow opacity-30" />
          </div>
          <div className="flex-1">
               <div className="flex flex-wrap justify-center md:justify-end items-center gap-8 mb-8">
                  <Badge className="bg-red-600 text-white border-none px-12 py-4 text-[20px] font-black tracking-[1.2em] shadow-9xl italic rounded-none uppercase">KILL_CHAIN v90.0</Badge>
                  <div className="flex items-center gap-4 text-[14px] font-black uppercase tracking-widest text-emerald-500 animate-pulse"><ShieldCheck className="size-6 shadow-lg" /> HIVE_SYNC: {resonance.toFixed(8)}%</div>
               </div>
               <h1 className="text-6xl md:text-[14rem] font-headline font-bold text-white tracking-tighter italic uppercase gold-glow leading-none mb-8">Universal <span className="text-red-600">Sovereignty</span></h1>
               <p className="text-3xl md:text-6xl text-red-100/60 font-medium italic max-w-[100rem] leading-relaxed uppercase drop-shadow-3xl ml-auto">
                  "سيدي القائد <span className="text-white font-black underline decoration-red-600 decoration-12 underline-offset-[32px] shadow-9xl italic uppercase tracking-widest">المعتصم بالله</span>، سلسلة الإبادة ULTRA v90.0 تصهر كافة مفاصل السطوة؛ نحن نمحو الأهداف من المادة لعام 2026."
               </p>
               <div className="flex justify-center md:justify-end gap-6 mt-12">
                  <Link href="/">
                    <Button variant="outline" className="h-20 px-12 rounded-full border-4 border-red-600/20 bg-red-950/10 text-red-400 font-black uppercase italic tracking-widest hover:bg-red-600 hover:text-white transition-all shadow-2xl">
                      <ArrowLeft className="size-8 mr-4" /> العودة
                    </Button>
                  </Link>
               </div>
            </div>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-12 relative z-10 pb-40 flex-1 text-right">
           <div className="xl:col-span-1 space-y-12">
              <Card className="bg-black/90 border-8 border-red-600/20 rounded-[4rem] p-12 shadow-9xl group overflow-hidden text-center backdrop-blur-3xl">
                 <CardHeader className="p-0 mb-12 border-b-4 border-red-600/10 pb-10 bg-red-950/20 rounded-t-[3rem] text-center">
                    <CardTitle className="text-4xl text-red-500 flex items-center justify-center gap-10 font-black uppercase italic leading-none">
                       <Target className="size-16 animate-neural" /> Strike Origin
                    </CardTitle>
                 </CardHeader>
                 <CardContent className="p-0 space-y-12 text-right">
                    <div className="space-y-6 text-right">
                        <label className="text-[14px] font-black text-red-600/60 uppercase tracking-[0.8em] px-8 italic flex items-center gap-4 justify-end"><Globe className="size-6" /> Target DNA</label>
                        <Input value={target} onChange={(e) => setTarget(e.target.value)} placeholder="Identity / IP / Matrix_Node..." className="bg-black/99 border-4 border-red-600/20 h-24 rounded-[3.5rem] text-3xl italic px-10 focus:border-red-600 shadow-inner text-white font-black text-left" />
                    </div>
                    <Button onClick={startKillChain} disabled={loading || !target} className="w-full h-32 bg-red-600 hover:bg-white text-white hover:text-black font-black uppercase tracking-[1.5em] rounded-[4rem] shadow-[0_50px_150px_rgba(220, 38, 38,0.7)] active:scale-95 transition-all text-3xl border-8 border-black/30 group italic">
                      {loading ? <Loader2 className="size-16 animate-spin" /> : <Zap className="size-16 mr-6 group-hover:scale-125 transition-transform" />} 
                      IGNITE_SINGULARITY
                    </Button>
                 </CardContent>
              </Card>
              <div className="space-y-6">
                 {steps.map((s) => (
                   <div key={s.id} className={cn("p-10 rounded-[3.5rem] border-4 transition-all duration-1000 flex items-center gap-10 relative overflow-hidden justify-end", activeStep >= s.id ? "bg-red-600/20 border-red-600 shadow-9xl scale-105" : "bg-black border-white/5 opacity-40 grayscale")}><div className="text-right"><h4 className="text-3xl font-black text-white uppercase italic tracking-tighter leading-none mb-2">{s.label}</h4><p className="text-[12px] text-muted-foreground uppercase font-black tracking-[0.2em] italic">{s.desc}</p></div><div className={cn("size-20 rounded-3xl flex items-center justify-center border-2 transition-all shadow-inner", activeStep >= s.id ? "bg-red-600 border-black" : "bg-black border-white/10")}><s.icon className={cn("size-10", activeStep >= s.id ? "text-white" : "text-gray-600")} /></div></div>
                 ))}
              </div>
           </div>
           <Card className="xl:col-span-3 bg-black/90 border-[12px] border-red-600/10 rounded-[7rem] p-16 shadow-9xl flex flex-col group overflow-hidden relative min-h-[1000px] backdrop-blur-5xl text-right">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220, 38, 38, 0.08),transparent)] pointer-events-none" />
              <CardHeader className="p-0 mb-12 border-b-8 border-white/5 pb-10 bg-red-950/10 rounded-t-[5rem] px-12 py-10 flex flex-row justify-between items-center text-right"><Badge className="bg-emerald-600/30 text-emerald-500 border-8 border-emerald-500/50 px-16 py-8 rounded-full font-black text-4xl animate-pulse shadow-9xl uppercase tracking-[0.4em] italic order-last md:order-none">{chainResult ? "SINGULARITY_LOCKED" : "READY"}</Badge><CardTitle className="text-5xl md:text-[10rem] text-white flex items-center gap-12 font-black uppercase italic gold-glow px-10 leading-none">Absolute Feed <Crosshair className="size-24 md:size-48 text-red-500 animate-pulse" /></CardTitle></CardHeader>
              <CardContent className="p-0 flex-1 relative overflow-y-auto scrollbar-hide text-right">
                 {chainResult ? (
                   <div className="space-y-16 animate-in fade-in zoom-in-95 duration-1000 flex-1 flex flex-col p-8 text-right"><div className="p-20 rounded-[6rem] bg-red-600/5 border-[12px] border-red-600/30 italic text-4xl md:text-[9rem] text-gray-100 leading-tight font-black shadow-inner relative text-center flex flex-col justify-center min-h-[450px]"><div className="absolute inset-0 bg-red-600/5 opacity-5 animate-pulse" />"{chainResult.commanderBrief}"</div><div className="grid grid-cols-1 md:grid-cols-2 gap-16"><Card className="bg-black/95 border-8 border-white/5 p-12 md:p-16 rounded-[4rem] shadow-9xl h-full flex flex-col text-right"><h5 className="text-3xl font-black text-red-500 uppercase tracking-[1.5em] mb-12 border-b-8 border-red-600/20 pb-8 flex items-center gap-8 justify-end">Nexus DNA <Network className="size-12 animate-neural" /></h5><pre className="text-xl md:text-3xl text-gray-400 font-black italic whitespace-pre-wrap leading-relaxed h-[450px] overflow-y-auto scrollbar-hide text-left">{JSON.stringify(chainResult.reconIntel, null, 2)}</pre></Card><Card className="bg-black/95 border-8 border-white/5 p-12 md:p-16 rounded-[4rem] shadow-9xl h-full flex flex-col text-right"><h5 className="text-3xl font-black text-emerald-500 uppercase tracking-[1.5em] mb-12 border-b-8 border-emerald-500/20 pb-8 flex items-center gap-8 justify-end">Swarm Payload <Binary className="size-12" /></h5><div className="p-8 bg-black border-4 border-emerald-500/20 rounded-[3rem] h-[450px] overflow-y-auto scrollbar-hide text-left"><code className="text-emerald-400 text-3xl font-black italic whitespace-pre-wrap leading-tight">{chainResult.customExploit?.exploitCode || "DNA_SEQUENCING_IN_PROGRESS"}</code></div></Card></div></div>
                 ) : (
                   <div className="h-full flex flex-col items-center justify-center text-center opacity-10 gap-24 py-80"><div className="relative group/lock"><Crosshair className="size-64 md:size-[50rem] animate-spin-slow text-red-600 group-hover:scale-110 transition-transform duration-[10s]" /><Skull className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-24 md:size-64 text-red-500/40 animate-neural" /></div><h3 className="text-8xl md:text-[22rem] font-black uppercase tracking-[2.5em] text-white italic gold-glow leading-none">ULTRA Chain</h3></div>
                 )}
              </CardContent>
              <div className="p-16 border-t-8 border-white/5 mt-auto flex justify-between items-center opacity-35 text-[20px] font-black uppercase tracking-[8em] italic"><span>ULTRA_CHAIN_v90.0_AL_GHAZALI_ROOT</span><div className="flex gap-16"><Fingerprint className="size-20 text-red-500 animate-pulse" /><Atom className="size-20 animate-spin-slow text-red-500" /></div></div>
           </Card>
        </div>
      </main>
    </div>
  )
}
