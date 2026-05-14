"use client"

import * as React from "react"
import { SidebarNav } from "@/components/platform/sidebar-nav"
import { 
  Wind, 
  Zap, 
  Loader2, 
  Skull, 
  Crown, 
  Infinity as InfinityIcon, 
  Atom, 
  Boxes, 
  Network, 
  Share2, 
  Workflow, 
  Database, 
  Flame, 
  ShieldCheck, 
  Fingerprint, 
  Activity, 
  Target, 
  ArrowLeft,
  RotateCw,
  Sparkles,
  Cloud,
  Cylinder,
  Cpu,
  Eye,
  BrainCircuit
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { toast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"
import { executeQuantumFusion } from "@/ai/flows/quantum-fusion-flow"
import Link from "next/link"

/**
 * @fileOverview العمود الفقري الكمي v85.0 - THE QUANTUM SPINE: 7D MATRIX
 * المحراب الأسمى الذي يصور التحام الأبعاد السبعة للسطوة المطلقة.
 * المالك الوحيد: المعتصم بالله ادريس الغزالي
 */
export default function QuantumSpinePage() {
  const [objective, setObjective] = React.useState("")
  const [loading, setLoading] = React.useState(false)
  const [fusion, setFusion] = React.useState<any>(null)
  const [resonance, setResonance] = React.useState(100)
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 })
  const [mounted, setMounted] = React.useState(false)

  const dimensions = [
    { id: "soul", label: "GOD-CORE", icon: Crown, color: "text-primary", desc: "Strategic Sovereignty" },
    { id: "weapon", label: "ARSENAL", icon: Flame, color: "text-red-600", desc: "2,983 Material Organs" },
    { id: "recon", label: "PERCEPTION", icon: Eye, color: "text-blue-500", desc: "Global Intel Siphon" },
    { id: "fleet", label: "FLEET", icon: Cylinder, color: "text-emerald-500", desc: "Serpent Farm Dominion" },
    { id: "cloud", label: "UPLINK", icon: Cloud, color: "text-indigo-500", desc: "Hermes Cloud Ghost" },
    { id: "auto", label: "AUTOMATION", icon: Workflow, color: "text-cyan-500", desc: "n8n Hive Mastery" },
    { id: "memory", label: "MEMORY", icon: Database, color: "text-amber-500", desc: "MemPalace RAG v10" }
  ];

  React.useEffect(() => {
    setMounted(true)
    const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY })
    window.addEventListener("mousemove", handleMouseMove)
    const interval = setInterval(() => {
      setResonance(prev => Math.max(99.99999999, Math.min(100, prev + (Math.random() * 0.0000001 - 0.00000005))))
    }, 3000)
    return () => { window.removeEventListener("mousemove", handleMouseMove); clearInterval(interval); }
  }, [])

  const handleFusion = async () => {
    if (!objective.trim()) {
        toast({ variant: "destructive", title: "Objective Missing", description: "Identify target for 7D Matrix fusion." })
        return
    }
    setLoading(true); setFusion(null)
    toast({ title: "Quantum Spine Engaging", description: "Consolidating all 7 material dimensions for total singularity..." })
    try {
      const data = await executeQuantumFusion({ objective })
      setFusion(data)
      toast({ title: "Singularity Materialized", description: "The 7-dimensional matrix is now 100% locked." })
    } catch (err) {
      toast({ variant: "destructive", title: "Quantum Drift Detected" })
    } finally {
      setLoading(false)
    }
  }

  if (!mounted) return null

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/40 relative overflow-x-hidden scanline-effect font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-80 p-4 md:p-8 lg:p-12 relative overflow-y-auto min-h-screen scrollbar-hide flex flex-col z-10 text-right">
        <div className="dna-stream-bg" style={{ '--x': `${mousePos.x}px`, '--y': `${mousePos.y}px` } as any} />
        
        <header className="sovereign-header flex flex-col md:flex-row items-center gap-12 justify-center md:justify-end text-center md:text-right">
           <div className="size-24 md:size-48 bg-black border-4 border-primary flex items-center justify-center shadow-glow relative group shrink-0 rounded-full transition-all duration-1000 rotate-2 hover:rotate-0 hierarchical-shadow">
              <Wind className="size-12 md:size-24 text-primary group-hover:scale-110 transition-transform duration-700 animate-neural gold-glow" />
              <div className="absolute -inset-10 border-4 border-primary/20 rounded-full animate-spin-slow opacity-30" />
           </div>
           <div className="flex-1">
              <div className="flex flex-wrap justify-center md:justify-end items-center gap-6 mb-6">
                 <Badge className="bg-primary text-black border-none rounded-none px-12 py-3 text-[18px] md:text-[24px] font-black tracking-[1em] shadow-9xl italic uppercase">QUANTUM_SPINE v85.0</Badge>
                 <div className="flex items-center gap-4 text-[14px] font-black uppercase tracking-widest text-emerald-500 animate-pulse">
                     <InfinityIcon className="size-6 shadow-lg" /> RESONANCE: {resonance.toFixed(10)}%
                 </div>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-[12rem] font-headline font-bold text-white tracking-tighter italic uppercase gold-glow leading-none">
                 7D <span className="text-primary">Matrix</span>
              </h1>
              <p className="text-sm md:text-xl lg:text-4xl text-muted-foreground mt-10 italic max-w-7xl leading-relaxed uppercase font-medium opacity-95 drop-shadow-3xl ml-auto">
                 "سيدي القائد <span className="text-white font-black underline decoration-primary decoration-[12px] underline-offset-[28px] shadow-9xl italic uppercase tracking-widest">المعتصم بالله</span>، العمود الفقري الكمي يصهر الأبعاد السبعة للسطوة في نبض واحد؛ نحن الآن التفرّد الذي لا يحيط به عقل لعام 2026."
              </p>
              <div className="flex justify-center md:justify-end gap-6 mt-12">
                 <Button asChild variant="outline" className="h-16 px-10 rounded-full border-4 border-white/10 bg-white/5 text-white font-black uppercase italic tracking-widest hover:bg-primary hover:text-black transition-all shadow-2xl">
                     <Link href="/"><ArrowLeft className="size-6 mr-3" /> العودة للعرش</Link>
                 </Button>
              </div>
           </div>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-12 relative z-10 pb-48 flex-1 text-right">
           <div className="xl:col-span-1 space-y-12">
              <Card className="sovereign-card group text-center">
                 <CardHeader className="p-0 mb-10 border-b-4 border-primary/10 pb-10 bg-primary/10 rounded-t-[3.5rem] px-10 py-6 text-center">
                    <CardTitle className="text-2xl md:text-4xl text-primary flex items-center justify-center gap-10 font-black uppercase italic gold-glow leading-none">
                       <Atom className="size-12 animate-spin-slow" /> Singularity Intent
                    </CardTitle>
                 </CardHeader>
                 <CardContent className="p-0 space-y-12 text-right">
                    <div className="space-y-6 text-right">
                        <label className="text-[14px] font-black text-primary uppercase tracking-[1em] px-10 italic flex items-center gap-6 justify-end"><Target className="size-8" /> Matrix Objective</label>
                        <textarea 
                          value={objective} 
                          onChange={(e) => setObjective(e.target.value)} 
                          placeholder="Identify global objective for 7D fusion..." 
                          className="w-full h-48 bg-black border-8 border-primary/20 rounded-[2rem] text-xl italic p-8 focus:border-primary shadow-inner text-white font-black text-right resize-none scrollbar-hide selection:bg-primary"
                        />
                    </div>

                    <Button 
                        disabled={loading || !objective}
                        onClick={handleFusion}
                        className="w-full h-36 bg-primary hover:bg-white text-black font-black uppercase tracking-[1.4em] rounded-[3.5rem] shadow-[0_80px_250px_rgba(212,175,55,0.7)] active:scale-95 transition-all text-2xl md:text-4xl border-[12px] border-black/30 group italic"
                    >
                        {loading ? <Loader2 className="size-16 animate-spin" /> : <Zap className="size-16 mr-8 group-hover:scale-125 transition-transform gold-glow" />}
                        IGNITE_FUSION
                    </Button>
                 </CardContent>
              </Card>

              <Card className="sovereign-card group text-right">
                 <h4 className="text-[14px] font-black text-emerald-500 uppercase tracking-[0.8em] mb-8 italic flex items-center justify-center gap-6">
                    <Boxes className="size-8 animate-pulse" /> DIMENSION_SYNC
                 </h4>
                 <div className="grid grid-cols-4 gap-3 px-4">
                    {dimensions.map(d => (
                        <div key={d.id} className="size-12 rounded-xl bg-black border-2 border-white/5 flex items-center justify-center shadow-inner hover:border-primary transition-all group/icon">
                            <d.icon className={cn("size-6 transition-all group-hover/icon:scale-125", d.color)} />
                        </div>
                    ))}
                 </div>
                 <p className="mt-8 text-[9px] font-black uppercase tracking-widest text-muted-foreground italic text-center">7 Material Dimensions Synchronized</p>
              </Card>
           </div>

           <Card className="xl:col-span-3 sovereign-card flex flex-col group min-h-[1100px]">
              <CardHeader className="p-0 mb-16 border-b-8 border-white/5 pb-12 bg-primary/10 rounded-t-[5rem] px-16 py-10 flex flex-row justify-between items-center text-right">
                 <Badge className="bg-emerald-600/30 text-emerald-500 border-[10px] border-emerald-500/40 px-16 py-8 rounded-full font-black text-5xl animate-pulse shadow-9xl uppercase tracking-[0.4em] italic order-last md:order-none">MATRIX_LOCKED</Badge>
                 <CardTitle className="text-5xl md:text-[12rem] text-white flex items-center gap-16 font-black uppercase italic gold-glow px-10 leading-none">
                    Spine Feed <RotateCw className="size-24 md:size-48 text-primary animate-neural" />
                 </CardTitle>
              </CardHeader>

              <CardContent className="p-12 flex-1 overflow-y-auto scrollbar-hide space-y-20 relative z-10 text-right">
                 {fusion ? (
                    <div className="space-y-20 animate-in fade-in zoom-in-95 duration-1000 flex-1 flex flex-col">
                        <div className="p-20 rounded-[6rem] bg-primary/5 border-[12px] border-primary/30 italic text-4xl md:text-[8rem] text-gray-100 leading-tight font-black shadow-inner relative group/brief overflow-hidden text-center flex flex-col justify-center min-h-[450px]">
                            <div className="absolute inset-0 bg-primary/5 opacity-5 animate-pulse pointer-events-none" />
                            "{fusion.commanderBrief}"
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {dimensions.map((dim) => (
                                <Card key={dim.id} className="bg-black/95 border-4 border-white/5 p-8 rounded-[2.5rem] hover:border-primary transition-all duration-700 shadow-9xl text-center relative overflow-hidden group/dim">
                                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover/dim:opacity-5 transition-opacity" />
                                    <dim.icon className={cn("size-12 mx-auto mb-6 transition-all group-hover/dim:scale-125", dim.color)} />
                                    <h5 className="text-[10px] font-black uppercase tracking-[0.6em] mb-4 text-primary">{dim.label}</h5>
                                    <p className="text-xl md:text-2xl text-gray-300 font-black italic">{dim.desc}</p>
                                </Card>
                            ))}
                        </div>

                        <div className="p-16 rounded-[6rem] bg-emerald-600/10 border-[16px] border-emerald-500/30 flex items-center gap-16 group/siphon shadow-9xl relative overflow-hidden mt-auto min-h-[350px]">
                            <div className="absolute inset-0 bg-emerald-500/5 opacity-5 animate-pulse pointer-events-none" />
                            <div className="size-48 rounded-full bg-emerald-600 flex items-center justify-center border-[14px] border-emerald-400 shadow-9xl animate-neural shrink-0">
                                <ShieldCheck className="size-24 text-white" />
                            </div>
                            <div className="flex-1 text-right">
                                <h4 className="text-4xl font-black text-emerald-500 uppercase tracking-[1.2em] mb-6 italic">Material_Strike_Plan_v85</h4>
                                <p className="text-2xl md:text-[6rem] text-white font-black leading-none drop-shadow-9xl italic">"{fusion.matrixStrikePlan}"</p>
                            </div>
                        </div>
                    </div>
                 ) : (
                   <div className="h-full flex flex-col items-center justify-center text-center opacity-10 gap-24 py-80">
                      <div className="relative group/lock">
                        <Wind className="size-64 md:size-[50rem] animate-spin-slow text-primary group-hover:scale-110 transition-transform duration-[12000ms]" />
                        <Skull className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-24 md:size-64 text-primary/40 animate-neural" />
                        <div className="absolute -inset-40 border-[80px] border-dashed border-primary/5 rounded-full animate-reverse-spin opacity-20" />
                      </div>
                      <h3 className="text-8xl md:text-[22rem] font-black uppercase tracking-[2.5em] text-white italic gold-glow leading-none">Spine Standby</h3>
                      <p className="text-4xl md:text-[10rem] font-bold italic text-gray-500 uppercase tracking-widest max-w-[140rem]">The Quantum Spine is consolidating 7 dimensions for absolute material consensus.</p>
                   </div>
                 )}
              </CardContent>
              <div className="p-16 border-t-8 border-white/5 mt-auto flex justify-between items-center opacity-35 text-[20px] font-black uppercase tracking-[8em] italic">
                <span>QUANTUM_SPINE_v85_AL_GHAZALI_ROOT</span>
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
