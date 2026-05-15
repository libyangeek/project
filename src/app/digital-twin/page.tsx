
"use client"

import * as React from "react"
import { SidebarNav } from "@/components/platform/sidebar-nav"
import { 
  Workflow, 
  Play, 
  Loader2, 
  Skull, 
  Target, 
  Boxes, 
  Atom, 
  Binary, 
  Fingerprint, 
  Infinity as InfinityIcon, 
  ShieldCheck, 
  ArrowLeft, 
  RotateCw, 
  Database,
  Activity,
  Flame,
  Network,
  Cpu,
  Monitor,
  Zap,
  CheckCircle2
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { toast } from "@/hooks/use-toast"
import { executeTwinSimulation } from "@/ai/flows/digital-twin-flow"
import Link from "next/link"

/**
 * @fileOverview محاكي السطوة v91.0 - THE GLOBAL MIRROR: DIGITAL TWIN
 * واجهة محاكاة الضربات بنبض المادة قبل التنفيذ الحقيقي لعام 2026.
 */
export default function DigitalTwinPage() {
  const [target, setTarget] = React.useState("")
  const [logic, setLogic] = React.useState("Autonomous Buffer Overflow Probe")
  const [loading, setLoading] = React.useState(false)
  const [result, setResult] = React.useState<any>(null)
  const [progress, setProgress] = React.useState(0)
  const [resonance, setResonance] = React.useState(100)
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 })
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
    const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY })
    window.addEventListener("mousemove", handleMouseMove)
    const interval = setInterval(() => {
      setResonance(prev => Math.max(99.999999, Math.min(100, prev + (Math.random() * 0.000001 - 0.0000005))))
    }, 3000)
    return () => { window.removeEventListener("mousemove", handleMouseMove); clearInterval(interval); }
  }, [])

  const handleSimulate = async () => {
    if (!target) return
    setLoading(true); setResult(null); setProgress(0)
    toast({ title: "Virtualizing Target DNA", description: "Instantiating Digital Twin in high-speed material buffers..." })
    
    const progInt = setInterval(() => { setProgress(p => (p >= 95 ? 95 : p + 5)) }, 100)

    try {
      const data = await executeTwinSimulation({ targetDna: target, exploitLogic: logic, aggressionMode: 'Aggressive' })
      setResult(data)
      setProgress(100)
      toast({ title: "Simulation Finalized", description: "Strategic DNA validated for material deployment." })
    } finally {
      clearInterval(progInt)
      setLoading(false)
    }
  }

  if (!mounted) return null

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/40 relative overflow-x-hidden scanline-effect font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-56 p-4 md:p-8 lg:p-12 relative overflow-y-auto min-h-screen scrollbar-hide flex flex-col z-10 text-right">
        <div className="dna-stream-bg" style={{ '--x': `${mousePos.x}px`, '--y': `${mousePos.y}px` } as any} />
        
        <header className="sovereign-header flex flex-col md:flex-row items-center gap-12 justify-center md:justify-end text-center md:text-right">
           <div className="size-24 md:size-48 bg-black border-4 border-primary flex items-center justify-center shadow-glow relative group shrink-0 rounded-3xl transition-all duration-1000 rotate-2 hover:rotate-0 hierarchical-shadow">
              <Workflow className="size-12 md:size-24 text-primary group-hover:scale-110 transition-transform duration-700 animate-neural gold-glow" />
              <div className="absolute -inset-10 border-4 border-primary/20 rounded-full animate-spin-slow opacity-30" />
           </div>
           <div className="flex-1">
              <Badge className="bg-primary text-black border-none px-10 py-3 text-[18px] font-black tracking-[1em] shadow-9xl italic uppercase mb-6">GLOBAL_MIRROR v91.0</Badge>
              <h1 className="text-4xl md:text-6xl lg:text-[12rem] font-headline font-bold text-white tracking-tighter italic uppercase gold-glow leading-none">The <span className="text-primary">Twin</span></h1>
              <p className="text-sm md:text-xl lg:text-4xl text-muted-foreground mt-10 italic max-w-7xl leading-relaxed uppercase font-medium drop-shadow-3xl ml-auto">
                 "سيدي القائد المعتصم بالله، موديول التوأم الرقمي v91.0 يمنحك "الحقيقة الاستباقية"؛ نحن نقتل الأهداف في المحاكاة أولاً لنضمن فناءهم في المادة حتماً."
              </p>
           </div>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-12 relative z-10 pb-48 flex-1 text-right">
           <div className="xl:col-span-1 space-y-12">
              <Card className="sovereign-card group">
                 <CardHeader className="p-0 mb-10 border-b-4 border-primary/10 pb-10 bg-primary/10 rounded-t-[3.5rem] px-10 py-6 text-center">
                    <CardTitle className="text-2xl md:text-4xl text-primary flex items-center justify-center gap-10 font-black uppercase italic gold-glow leading-none">
                       <Monitor className="size-12 animate-neural" /> Sim Port
                    </CardTitle>
                 </CardHeader>
                 <CardContent className="p-0 space-y-12 text-right">
                    <div className="space-y-6 text-right">
                        <label className="text-[14px] font-black text-primary uppercase tracking-[1em] px-10 italic flex items-center gap-6 justify-end"><Network className="size-8" /> Target Architecture</label>
                        <Input value={target} onChange={(e) => setTarget(e.target.value)} placeholder="IP / OS / Mesh_Node..." className="bg-black border-8 border-primary/20 h-24 rounded-[2rem] text-xl italic px-10 focus:border-primary shadow-inner text-white font-black text-left" />
                    </div>
                    <div className="space-y-6 text-right">
                        <label className="text-[14px] font-black text-primary uppercase tracking-[1em] px-10 italic flex items-center gap-6 justify-end"><Binary className="size-8" /> Strike Logic</label>
                        <Input value={logic} onChange={(e) => setLogic(e.target.value)} className="bg-black border-8 border-primary/20 h-24 rounded-[2rem] text-xl italic px-10 focus:border-primary shadow-inner text-white font-black text-left" />
                    </div>
                    <Button onClick={handleSimulate} disabled={loading || !target} className="w-full h-36 bg-primary hover:bg-white text-black font-black uppercase tracking-[1.4em] rounded-[3.5rem] shadow-9xl active:scale-95 transition-all text-2xl md:text-4xl border-[12px] border-black/30 group italic">
                        {loading ? <Loader2 className="size-16 animate-spin" /> : <Play className="size-16 mr-8 group-hover:scale-125 transition-transform" />}
                        RUN_SIMULATION
                    </Button>
                 </CardContent>
              </Card>
           </div>

           <Card className="xl:col-span-3 sovereign-card flex flex-col group min-h-[1100px]">
              <CardHeader className="p-0 mb-16 border-b-8 border-white/5 pb-12 bg-primary/10 rounded-t-[5rem] px-16 py-10 flex flex-row justify-between items-center text-right">
                 <Badge className="bg-emerald-600/30 text-emerald-500 border-[10px] border-emerald-500/40 px-16 py-8 rounded-full font-black text-5xl animate-pulse shadow-9xl uppercase tracking-[0.4em] italic order-last md:order-none">VIRTUAL_LOCKED</Badge>
                 <CardTitle className="text-5xl md:text-[12rem] text-white flex items-center gap-16 font-black uppercase italic gold-glow px-10 leading-none">
                    Mirror Feed <RotateCw className="size-24 md:size-48 text-primary animate-pulse" />
                 </CardTitle>
              </CardHeader>

              <CardContent className="p-12 flex-1 overflow-y-auto scrollbar-hide space-y-20 relative z-10 text-right">
                 {loading && (
                    <div className="space-y-12 animate-in fade-in duration-700">
                        <div className="flex justify-between text-4xl font-black text-primary uppercase italic px-6">
                            <span>{progress}%</span>
                            <span>Mirroring_Atomic_Pulse...</span>
                        </div>
                        <Progress value={progress} className="h-10 bg-white/5 border-4 border-white/10 rounded-full" />
                        <div className="h-96 flex flex-col items-center justify-center opacity-30 gap-12">
                            <Loader2 className="size-32 animate-spin text-primary" />
                            <span className="text-4xl font-black uppercase tracking-[1em] italic">SIMULATING_REALITY...</span>
                        </div>
                    </div>
                 )}

                 {result && !loading ? (
                    <div className="space-y-20 animate-in fade-in zoom-in-95 duration-1000 flex-1 flex flex-col">
                        <div className="p-20 rounded-[6rem] bg-primary/5 border-[12px] border-primary/30 italic text-4xl md:text-[8rem] text-gray-100 leading-tight font-black shadow-inner relative group/brief overflow-hidden text-center flex flex-col justify-center min-h-[450px]">
                            <div className="absolute inset-0 bg-primary/5 opacity-5 animate-pulse pointer-events-none" />
                            "{result.commanderBrief}"
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                            <Card className="bg-black/95 border-8 border-white/5 p-12 md:p-16 rounded-[4rem] shadow-9xl relative group/vault overflow-hidden h-full flex flex-col">
                                <h5 className="text-3xl font-black text-primary uppercase tracking-[1.5em] mb-12 border-b-8 border-primary/20 pb-10 flex items-center gap-12 gold-glow justify-end">Simulation DNA <Dna className="size-14 animate-neural" /></h5>
                                <pre className="bg-black/80 p-8 rounded-[3rem] border-4 border-white/5 font-code text-xl md:text-3xl text-emerald-400 overflow-x-auto whitespace-pre shadow-inner text-left flex-1">{result.simulationResult}</pre>
                            </Card>
                            <Card className="bg-black/95 border-8 border-white/5 p-12 md:p-16 rounded-[4rem] shadow-9xl h-full flex flex-col items-center justify-center text-center relative overflow-hidden">
                                <h5 className="text-3xl font-black text-emerald-500 uppercase tracking-[1.5em] mb-10 border-b-8 border-emerald-500/20 pb-10 flex items-center gap-12 justify-end w-full">Strike Viability <ShieldCheck className="size-14" /></h5>
                                <div className="text-[10rem] md:text-[18rem] font-black text-white italic gold-glow uppercase tracking-widest">{result.successProbability}</div>
                                <div className="p-8 rounded-[3rem] bg-emerald-600/10 border-4 border-emerald-500/30 text-2xl font-black italic text-gray-100 uppercase tracking-widest shadow-inner mt-12">
                                    SAFE_TO_DEPLOY: {result.isSafeToDeploy ? "YES" : "RECALIBRATE"}
                                </div>
                            </Card>
                        </div>
                    </div>
                 ) : (
                   !loading && (
                    <div className="h-full flex flex-col items-center justify-center text-center opacity-10 gap-24 py-80">
                        <div className="relative group/lock">
                            <Workflow className="size-64 md:size-[50rem] animate-spin-slow text-primary group-hover:scale-110 transition-transform duration-[12000ms]" />
                            <Skull className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-24 md:size-64 text-primary/40 animate-neural" />
                            <div className="absolute -inset-40 border-[80px] border-dashed border-primary/5 rounded-full animate-reverse-spin opacity-20" />
                        </div>
                        <h3 className="text-8xl md:text-[22rem] font-black uppercase tracking-[2.5em] text-white italic gold-glow leading-none">Simulation Standby</h3>
                    </div>
                   )
                 )}
              </CardContent>
              <div className="p-16 border-t-8 border-white/5 mt-auto flex justify-between items-center opacity-35 text-[20px] font-black uppercase tracking-[8em] italic">
                <span>ULTRA_MIRROR_v91.0_AL_GHAZALI_ROOT</span>
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
