
"use client"

import * as React from "react"
import { SidebarNav } from "@/components/platform/sidebar-nav"
import { 
  Sprout, 
  Zap, 
  Loader2, 
  Skull, 
  Crown, 
  Infinity as InfinityIcon, 
  Dna, 
  Boxes, 
  Cpu, 
  History, 
  Target, 
  Play, 
  ArrowLeft, 
  RotateCw, 
  Binary, 
  Database, 
  ShieldCheck, 
  Fingerprint, 
  Flame, 
  Activity, 
  Search,
  Network,
  LayoutGrid,
  Bot,
  TrendingUp
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { toast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { executeNurseryEvolution } from "@/ai/flows/nursery-evolution-flow"

/**
 * @fileOverview مشتل التطور v85.1 - THE EVOLUTIONARY NURSERY: HIVE GROWTH
 * واجهة تدريب النماذج الهجومية وتحويل علم البيانات إلى ترسانة سيادية لليوم المجيد 2026.
 */
export default function NurseryPage() {
  const [activeProject, setActiveProject] = React.useState("network_intrusion")
  const [loading, setLoading] = React.useState(false)
  const [result, setResult] = React.useState<any>(null)
  const [evolutionProgress, setEvolutionProgress] = React.useState(0)
  const [resonance, setResonance] = React.useState(100)
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 })
  const [mounted, setMounted] = React.useState(false)

  const projects = [
    { id: "network_intrusion", label: "كشف الاختراق (NIDS)", icon: Network, color: "text-blue-500", desc: "تحويل PCAP إلى ترسانة دفاعية وهجومية." },
    { id: "face_recognition", label: "التعرف على الوجوه", icon: Fingerprint, color: "text-amber-500", desc: "استخلاص ملامح الأهداف وتغذية الذاكرة." },
    { id: "fraud_detection", label: "كشف الاحتيال المالي", icon: Binary, color: "text-emerald-500", desc: "تحليل الأنماط المالية لتعزيز الاستنزاف." },
    { id: "pose_estimation", label: "تقدير الوضعيات", icon: Activity, color: "text-magenta-500", desc: "تتبع حركة الأهداف عبر الأعين المادية." },
    { id: "cyber_bullying", label: "تصنيف التنمر", icon: Skull, color: "text-red-500", desc: "تحليل النصوص لتعزيز الهندسة الاجتماعية." },
    { id: "stock_prediction", label: "توقع الأسهم (LSTM)", icon: TrendingUp, color: "text-primary", desc: "تعزيز السيطرة على موارد الأصول العالمية." }
  ];

  React.useEffect(() => {
    setMounted(true)
    const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY })
    window.addEventListener("mousemove", handleMouseMove)
    const interval = setInterval(() => {
      setResonance(prev => Math.max(99.9999999, Math.min(100, prev + (Math.random() * 0.0000001 - 0.00000005))))
    }, 3000)
    return () => { window.removeEventListener("mousemove", handleMouseMove); clearInterval(interval); }
  }, [])

  const handleEvolution = async () => {
    setLoading(true); setEvolutionProgress(0); setResult(null);
    toast({ title: "Genetic Incubation Started", description: `Evolving ${activeProject} into a Sovereign Weapon...` })
    
    const progInt = setInterval(() => {
        setEvolutionProgress(p => (p >= 98 ? 98 : p + 2))
    }, 100);

    try {
      // 1. استدعاء التدفق العصبي
      const data = await executeNurseryEvolution({ 
          projectType: activeProject, 
          datasetContext: "Siphoning latest material DNA from nursery sector." 
      });

      // 2. التنفيذ المادي عبر المحرك
      const response = await fetch('/api/execute', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ type: 'nursery_action', action: 'train', project: activeProject })
      });
      const hardwareData = await response.json();

      setResult({ ...data, hardwareOutput: hardwareData.output });
      setEvolutionProgress(100);
      toast({ title: "Evolution Consummated", description: "The nursery node is now a functional part of the 7D Matrix." })
    } catch (err) {
      toast({ variant: "destructive", title: "Genetic Drift Detected" })
    } finally {
        clearInterval(progInt);
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
           <div className="size-24 md:size-48 bg-black border-4 border-primary flex items-center justify-center shadow-glow relative group shrink-0 rounded-full transition-all duration-1000 rotate-2 hover:rotate-0 hierarchical-shadow">
              <Sprout className="size-12 md:size-24 text-primary group-hover:scale-110 transition-transform duration-700 animate-neural gold-glow" />
              <div className="absolute -inset-10 border-4 border-primary/20 rounded-full animate-spin-slow opacity-30" />
           </div>
           <div className="flex-1">
              <div className="flex flex-wrap justify-center md:justify-end items-center gap-6 mb-6">
                 <Badge className="bg-primary text-black border-none rounded-none px-12 py-3 text-[18px] md:text-[24px] font-black tracking-[1em] shadow-9xl italic uppercase">EVO_NURSERY v85.1</Badge>
                 <div className="flex items-center gap-4 text-[14px] font-black uppercase tracking-widest text-emerald-500 animate-pulse">
                     <InfinityIcon className="size-6 shadow-lg" /> GROWTH_SYNC: {resonance.toFixed(10)}%
                 </div>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-[12rem] font-headline font-bold text-white tracking-tighter italic uppercase gold-glow leading-none">
                 Evolution <span className="text-primary">Nursery</span>
              </h1>
              <p className="text-sm md:text-xl lg:text-4xl text-muted-foreground mt-10 italic max-w-7xl leading-relaxed uppercase font-medium opacity-95 drop-shadow-3xl ml-auto">
                 "سيدي القائد <span className="text-white font-black underline decoration-primary decoration-[12px] underline-offset-[28px] shadow-9xl italic uppercase tracking-widest">المعتصم بالله</span>، مشتل المُعِزّ يصهر علم البيانات في عصب السطوة؛ نحن نربي الذكاءات لتكون أسلحة في يديك للأبد."
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
              <Card className="sovereign-card group">
                 <CardHeader className="p-0 mb-10 border-b-4 border-primary/10 pb-10 bg-primary/10 rounded-t-[3.5rem] px-10 py-6 text-center">
                    <CardTitle className="text-2xl md:text-4xl text-primary flex items-center justify-center gap-10 font-black uppercase italic gold-glow leading-none">
                       <Database className="size-12 animate-neural" /> Seed Projects
                    </CardTitle>
                 </CardHeader>
                 <CardContent className="p-0 space-y-8 text-right">
                    <div className="grid grid-cols-1 gap-4">
                       {projects.map(p => (
                         <Button 
                            key={p.id}
                            variant="outline"
                            onClick={() => setActiveProject(p.id)}
                            className={cn(
                                "h-20 bg-white/5 border-4 border-white/5 hover:border-primary flex justify-between items-center px-8 transition-all rounded-2xl active:scale-95 group/btn shadow-xl",
                                activeProject === p.id ? "border-primary bg-primary/10 scale-105 shadow-9xl" : "opacity-60"
                            )}
                         >
                            <ChevronRight className="size-6 opacity-30 group-hover/btn:translate-x-3 transition-all" />
                            <div className="flex items-center gap-6">
                                <div className="text-right">
                                    <div className="text-lg font-black text-white italic group-hover/btn:text-primary transition-colors">{p.label}</div>
                                    <div className="text-[8px] text-muted-foreground uppercase font-black">{p.id}</div>
                                </div>
                                <p.icon className={cn("size-8", p.color)} />
                            </div>
                         </Button>
                       ))}
                    </div>

                    <Button 
                        disabled={loading}
                        onClick={handleEvolution}
                        className="w-full h-36 bg-primary hover:bg-white text-black font-black uppercase tracking-[1.4em] rounded-[3.5rem] shadow-[0_80px_250px_rgba(212,175,55,0.7)] active:scale-95 transition-all text-2xl border-[12px] border-black/30 group italic"
                    >
                        {loading ? <Loader2 className="size-16 animate-spin" /> : <Flame className="size-16 mr-8 group-hover:scale-125 transition-transform gold-glow" />}
                        IGNITE_EVOLUTION
                    </Button>
                 </CardContent>
              </Card>

              <Card className="sovereign-card group text-right">
                 <h4 className="text-[14px] font-black text-emerald-500 uppercase tracking-[0.8em] mb-8 italic flex items-center justify-center gap-6">
                    <Boxes className="size-8 animate-pulse" /> NURSERY_CAPACITY
                 </h4>
                 <div className="text-6xl font-black text-white italic gold-glow uppercase tracking-tighter text-center">18_PROJECTS</div>
                 <p className="mt-8 text-[9px] font-black uppercase tracking-widest text-muted-foreground italic text-center">Fused with material training v85.1</p>
              </Card>
           </div>

           <Card className="xl:col-span-3 sovereign-card flex flex-col group min-h-[1100px]">
              <CardHeader className="p-0 mb-16 border-b-8 border-white/5 pb-12 bg-primary/10 rounded-t-[5rem] px-16 py-10 flex flex-row justify-between items-center text-right">
                 <Badge className="bg-emerald-600/30 text-emerald-500 border-[10px] border-emerald-500/40 px-16 py-8 rounded-full font-black text-5xl animate-pulse shadow-9xl uppercase tracking-[0.4em] italic order-last md:order-none">EVOLUTION_LOCKED</Badge>
                 <CardTitle className="text-5xl md:text-[12rem] text-white flex items-center gap-16 font-black uppercase italic gold-glow px-10 leading-none">
                    Growth Feed <RotateCw className="size-24 md:size-48 text-primary animate-pulse" />
                 </CardTitle>
              </CardHeader>

              <CardContent className="p-12 flex-1 overflow-y-auto scrollbar-hide space-y-20 relative z-10 text-right">
                 {loading ? (
                    <div className="h-full flex flex-col items-center justify-center text-center opacity-30 gap-16 py-40">
                        <div className="flex justify-between w-full max-w-4xl text-3xl font-black text-primary uppercase italic mb-8">
                            <span>{evolutionProgress}%</span>
                            <span>Synthesizing_Intelligence_DNA...</span>
                        </div>
                        <Progress value={evolutionProgress} className="h-10 w-full max-w-4xl bg-white/5 border-4 border-white/10 rounded-full" />
                        <Loader2 className="size-32 md:size-64 animate-spin text-primary mt-12" />
                    </div>
                 ) : result ? (
                    <div className="space-y-20 animate-in fade-in zoom-in-95 duration-1000 flex-1 flex flex-col">
                        <div className="p-20 rounded-[6rem] bg-primary/5 border-[12px] border-primary/30 italic text-4xl md:text-[8rem] text-gray-100 leading-tight font-black shadow-inner relative group/brief overflow-hidden text-center flex flex-col justify-center min-h-[450px]">
                            <div className="absolute inset-0 bg-primary/5 opacity-5 animate-pulse pointer-events-none" />
                            "{result.commanderBrief}"
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                            <Card className="bg-black/95 border-8 border-white/5 p-12 md:p-16 rounded-[4rem] shadow-9xl relative group/vault overflow-hidden h-full flex flex-col">
                                <h5 className="text-3xl font-black text-primary uppercase tracking-[1.5em] mb-12 border-b-8 border-primary/20 pb-10 flex items-center gap-12 gold-glow justify-end">Training Logic <Binary className="size-14 animate-neural" /></h5>
                                <div className="text-xl md:text-3xl text-gray-300 italic font-black leading-snug drop-shadow-3xl flex-1">
                                    "{result.trainingLogic}"
                                </div>
                            </Card>
                            <Card className="bg-black/95 border-8 border-white/5 p-12 md:p-16 rounded-[4rem] shadow-9xl space-y-12 relative overflow-hidden h-full flex flex-col">
                                <h5 className="text-3xl font-black text-emerald-500 uppercase tracking-[1.5em] mb-10 border-b-8 border-emerald-500/20 pb-10 flex items-center gap-12 justify-end">Model DNA Strengths <History className="size-14" /></h5>
                                <div className="space-y-8 flex-1">
                                    {result.modelStrengths?.map((s: string, idx: number) => (
                                        <div key={idx} className="p-8 rounded-[2rem] bg-white/5 border-4 border-emerald-500/30 hover:border-emerald-500 transition-all text-right shadow-inner group/dna">
                                            <span className="text-xl md:text-2xl font-black text-white italic group-hover/dna:text-emerald-400">"{" >>> "}{s}"</span>
                                        </div>
                                    ))}
                                </div>
                            </Card>
                        </div>

                        <div className="p-16 rounded-[6rem] bg-emerald-600/10 border-[16px] border-emerald-500/30 flex items-center gap-16 group/siphon shadow-9xl relative overflow-hidden mt-auto min-h-[350px]">
                            <div className="absolute inset-0 bg-emerald-500/5 opacity-5 animate-pulse pointer-events-none" />
                            <div className="size-48 rounded-[3.5rem] bg-emerald-600 flex items-center justify-center border-[14px] border-emerald-400 shadow-9xl animate-neural shrink-0">
                                <ShieldCheck className="size-24 text-white" />
                            </div>
                            <div className="flex-1 text-right">
                                <h4 className="text-4xl font-black text-emerald-500 uppercase tracking-[1.2em] mb-6 italic">Combat_Application_v85.1</h4>
                                <p className="text-2xl md:text-[6rem] text-white font-black leading-none drop-shadow-9xl italic">"{result.combatApplication}"</p>
                            </div>
                        </div>
                    </div>
                 ) : (
                   <div className="h-full flex flex-col items-center justify-center text-center opacity-10 gap-24 py-80">
                      <div className="relative group/lock">
                        <Sprout className="size-64 md:size-[50rem] animate-spin-slow text-primary group-hover:scale-110 transition-transform duration-[12000ms]" />
                        <Skull className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-24 md:size-64 text-primary/40 animate-neural" />
                        <div className="absolute -inset-40 border-[80px] border-dashed border-primary/5 rounded-full animate-reverse-spin opacity-20" />
                      </div>
                      <h3 className="text-8xl md:text-[22rem] font-black uppercase tracking-[2.5em] text-white italic gold-glow leading-none">Nursery Idle</h3>
                      <p className="text-4xl md:text-[10rem] font-bold italic text-gray-500 uppercase tracking-widest max-w-[140rem]">The Evolutionary Nursery is ready to transform data science projects into lethal intelligence weapons.</p>
                   </div>
                 )}
              </CardContent>
              <div className="p-16 border-t-8 border-white/5 mt-auto flex justify-between items-center opacity-35 text-[20px] font-black uppercase tracking-[8em] italic">
                <span>NURSERY_EVOLUTION_v85_AL_GHAZALI_ROOT</span>
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
