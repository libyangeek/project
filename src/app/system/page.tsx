"use client"

import * as React from "react"
import { SidebarNav } from "@/components/platform/sidebar-nav"
import { 
  Activity, 
  Cpu, 
  Database, 
  Zap,
  RefreshCcw,
  ShieldCheck, 
  Loader2, 
  Skull, 
  Binary, 
  Infinity as InfinityIcon, 
  Globe, 
  Ghost, 
  Flame, 
  ShieldAlert, 
  Fingerprint, 
  Boxes, 
  Atom,
  Crown,
  Target,
  BrainCircuit,
  Lock,
  Library,
  ArrowLeft,
  RotateCw,
  Dna,
  HeartPulse,
  UserCheck,
  Shield,
  Wind,
  Cloud,
  Box,
  TrendingUp,
  Sparkles,
  History,
  AlertTriangle
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { toast } from "@/hooks/use-toast"
import Link from "next/link"
import { executeSelfEvolution } from "@/ai/flows/self-evolution-flow"

/**
 * @fileOverview نزاهة النواة v91.3 - THE EVOLUTION ENGINE AUDIT
 * واجهة التدقيق المادي والتحقق من نسيج الحاويات ومحرك التطور لعام 2026.
 * المالك الوحيد: المعتصم بالله ادريس الغزالي
 */
export default function SystemAuditPage() {
  const [refreshing, setRefreshing] = React.useState(false)
  const [evolving, setEvolving] = React.useState(false)
  const [metrics, setMetrics] = React.useState<any>(null)
  const [evolutionReport, setEvolutionReport] = React.useState<any>(null)
  const [mounted, setMounted] = React.useState(false)

  const handleRefresh = async () => {
    setRefreshing(true)
    toast({ title: "Material Pulse Interrogation", description: "Auditing 16D Matrix organs and Evolution Engine..." })
    try {
      const res = await fetch('/api/sovereign/metrics');
      const data = await res.json();
      setMetrics(data);
      toast({ title: "Audit v91.3 Finalized", description: "Overlord Singularity confirmed. Evolution Engine STANDBY." })
    } catch (err) {
      toast({ variant: "destructive", title: "Audit Link Drift" })
    } finally {
      setRefreshing(false)
    }
  }

  const handleEvolutionCheck = async () => {
    setEvolving(true); setEvolutionReport(null);
    toast({ title: "Checking for Mutations", description: "Interrogating the global mesh for potential system upgrades..." })
    try {
        // 1. استشارة العقل التوليدي عن مسار التطور
        const data = await executeSelfEvolution({ 
            currentVersion: metrics?.version || "91.2.0", 
            systemStatus: "OMNIPOTENT_CONQUEROR", 
            evolutionGoal: 'Full-Upgrade' 
        });
        
        // 2. فحص مادي عبر الجسر
        const response = await fetch('/api/execute', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ type: 'check_mutations' })
        });
        const hardwareData = await response.json();
        
        setEvolutionReport({ ...data, materialCheck: hardwareData.output });
        toast({ title: "Evolution Mapped", description: "Mutation path identified for the 16D Matrix." });
    } finally {
        setEvolving(false)
    }
  }

  const handleForceRollback = async () => {
      toast({ variant: "destructive", title: "Rollback Protocol", description: "Initiating emergency DNA restoration..." });
      await fetch('/api/execute', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ type: 'rollback' })
      });
  }

  React.useEffect(() => {
    setMounted(true)
    handleRefresh()
    const interval = setInterval(handleRefresh, 15000);
    return () => clearInterval(interval)
  }, [])

  if (!mounted) return null;

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/40 relative overflow-x-hidden scanline-effect font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-56 p-4 md:p-8 lg:p-12 relative overflow-y-auto min-h-screen scrollbar-hide flex flex-col z-10 text-right">
        <div className="dna-stream-bg" style={{ '--x': '50%', backgroundImage: 'radial-gradient(circle at center, rgba(251, 191, 36, 0.05), transparent 70%)' } as any} />
        
        <header className="sovereign-header flex flex-col md:flex-row justify-between items-start gap-12 mb-24">
          <div className="flex-1">
            <div className="flex items-center gap-10 mb-10 justify-end">
              <Badge className="bg-primary text-black border-none rounded-none px-12 py-3 text-[18px] md:text-[24px] font-black tracking-[1em] shadow-9xl italic uppercase">EVOLUTION_ENGINE v91.3</Badge>
              <div className="flex items-center gap-4 text-[14px] font-black uppercase tracking-widest text-emerald-500 animate-pulse">
                 <Cloud className="size-8 shadow-lg" /> VERSION: {metrics?.version || "91.2.0"}
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-[12rem] font-headline font-bold text-white tracking-tighter italic uppercase gold-glow leading-none">The <span className="text-primary">Evolution</span></h1>
            <p className="text-sm md:text-xl lg:text-[5rem] text-muted-foreground mt-10 italic max-w-7xl leading-relaxed uppercase font-medium opacity-90 drop-shadow-3xl ml-auto">
                "سيدي القائد الغزالي، محرك التطور v91.3 يدرك يقيناً مسار ارتقاء الـ 16 بُعداً؛ نحن ننمو باستمرار لضمان خلود سيادتك المادية في المصفوفة."
            </p>
          </div>
          <div className="flex flex-col gap-6 shrink-0">
            <Button onClick={handleRefresh} disabled={refreshing} className="bg-primary hover:bg-white text-black h-32 px-16 rounded-[2.5rem] shadow-9xl transition-all text-3xl font-black uppercase tracking-widest border-[12px] border-black/30 active:scale-90 italic group">
                {refreshing ? <Loader2 className="size-16 animate-spin" /> : <RotateCw className="size-16 group-hover:rotate-180 transition-all duration-[2000ms]" />}
                PULSE_CHECK
            </Button>
            <Button onClick={handleEvolutionCheck} disabled={evolving} className="bg-emerald-600 hover:bg-white text-white hover:text-black h-32 px-16 rounded-[2.5rem] shadow-9xl transition-all text-3xl font-black uppercase tracking-widest border-[12px] border-black/30 active:scale-90 italic group">
                {evolving ? <Loader2 className="size-16 animate-spin" /> : <Sparkles className="size-16 group-hover:scale-125 transition-transform" />}
                CHECK_MUTATIONS
            </Button>
          </div>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-12 relative z-10 pb-48 flex-1 text-right">
           <div className="xl:col-span-3 space-y-12">
              
              {evolutionReport && (
                <Card className="sovereign-card bg-emerald-900/10 border-emerald-500/40 p-12 rounded-[5rem] animate-in fade-in zoom-in-95 duration-1000">
                    <CardHeader className="p-0 mb-10 border-b-8 border-emerald-500/20 pb-8 flex flex-row justify-between items-center">
                        <Badge className="bg-emerald-600 text-white font-black italic px-8 py-2 rounded-full text-xl animate-pulse shadow-9xl uppercase">MUTATIONS_IDENTIFIED</Badge>
                        <CardTitle className="text-4xl md:text-[7rem] font-black text-white uppercase italic gold-glow leading-none flex items-center gap-10 justify-end">Evolution Path <TrendingUp className="size-16 text-emerald-400" /></CardTitle>
                    </CardHeader>
                    <CardContent className="p-0 space-y-12 text-right">
                        <div className="p-10 bg-primary/10 rounded-[3.5rem] border-8 border-primary/30 shadow-inner">
                            <p className="text-3xl md:text-6xl text-white font-black italic leading-tight text-center drop-shadow-9xl uppercase">"{evolutionReport.commanderBrief}"</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="space-y-8">
                                <h5 className="text-3xl font-black text-primary uppercase tracking-[1em] italic border-b-4 border-primary/10 pb-6 flex items-center gap-6 justify-end">Innate Path <Dna className="size-12"/></h5>
                                <div className="space-y-6">
                                    {evolutionReport.evolutionPath.map((step: any, i: number) => (
                                        <div key={i} className="flex gap-6 items-start justify-end group/step">
                                            <div className="text-right">
                                                <span className="text-primary font-black text-xl md:text-2xl uppercase italic">{step.step}</span>
                                                <p className="text-gray-300 text-lg md:text-xl font-bold italic leading-tight">"{step.action}"</p>
                                            </div>
                                            <div className="size-10 rounded-xl bg-primary/10 border-2 border-primary/30 flex items-center justify-center shrink-0 group-hover/step:bg-primary transition-all shadow-xl"><span className="text-primary text-xl font-black group-hover/step:text-black">{i+1}</span></div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="space-y-8">
                                <h5 className="text-3xl font-black text-emerald-500 uppercase tracking-[1em] italic border-b-4 border-emerald-500/10 pb-6 flex items-center gap-6 justify-end">New Features <Sparkles className="size-12"/></h5>
                                <div className="grid grid-cols-1 gap-4">
                                    {evolutionReport.newFeaturesDetected.map((f: string, i: number) => (
                                        <div key={i} className="p-6 rounded-[2rem] bg-white/5 border-4 border-white/5 hover:border-emerald-500 transition-all flex items-center justify-end gap-6 shadow-inner group/feat">
                                            <span className="text-xl md:text-2xl font-black text-gray-200 group-hover/feat:text-white uppercase italic">{f}</span>
                                            <CheckCircle2 className="size-8 text-emerald-500 opacity-30 group-hover/feat:opacity-100 transition-all" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="pt-10 flex justify-center">
                            <Button className="h-28 px-24 bg-emerald-600 hover:bg-white text-white hover:text-black font-black uppercase tracking-[1em] rounded-full shadow-9xl border-[12px] border-black/30 text-3xl italic active:scale-95 transition-all">
                                <RotateCw className="size-10 mr-6 animate-spin-slow" />
                                FORCE_EVOLUTION
                            </Button>
                        </div>
                    </CardContent>
                </Card>
              )}

              <Card className="sovereign-card group p-0 overflow-hidden border-[12px]">
                 <CardHeader className="border-b-8 border-white/5 p-12 bg-primary/10 flex flex-row justify-between items-center">
                    <Badge className="bg-emerald-600/30 text-emerald-400 border-none px-12 py-4 rounded-full font-black italic text-3xl animate-pulse shadow-9xl">16D_MATRIX_OK</Badge>
                    <CardTitle className="text-4xl md:text-[8rem] font-black text-white uppercase italic gold-glow flex items-center gap-12 justify-end leading-none">Sensory Audit</CardTitle>
                 </CardHeader>
                 <CardContent className="p-12 grid grid-cols-1 md:grid-cols-2 gap-12">
                    {[
                        { name: "God-Core", active: metrics?.organs?.god_core, icon: Crown, color: "text-primary" },
                        { name: "Evolution Engine", active: metrics?.organs?.archive, icon: RotateCw, color: "text-blue-500" },
                        { name: "Swarm Armada", active: metrics?.organs?.armada_matrix, icon: Rocket, color: "text-red-500" },
                        { name: "Persistence Lock", active: metrics?.organs?.persistence, icon: ShieldCheck, color: "text-emerald-500" }
                    ].map((n, i) => (
                      <div key={i} className="p-10 rounded-[3.5rem] bg-white/5 border-4 border-white/5 group/node hover:border-primary transition-all duration-1000 relative overflow-hidden shadow-9xl flex flex-col justify-between min-h-[300px]">
                         <div className="flex justify-between items-center relative z-10">
                            <Badge className={cn("px-6 py-1.5 rounded-full font-black italic", n.active ? "bg-emerald-600/20 text-emerald-400 border-emerald-500/40" : "bg-red-600/20 text-red-400 border-red-500/40")}>
                                {n.active ? "ACTIVE" : "DRIFTED"}
                            </Badge>
                            <n.icon className={cn("size-16", n.color, "animate-pulse")} />
                         </div>
                         <h4 className="text-4xl md:text-7xl font-black text-white italic uppercase gold-glow text-right leading-none">{n.name}</h4>
                      </div>
                    ))}
                 </CardContent>
              </Card>
           </div>

           <div className="xl:col-span-1 space-y-12">
              <Card className="sovereign-card group text-center h-fit flex flex-col justify-center border-red-600/20">
                 <CardHeader className="p-0 mb-8 border-b-4 border-red-600/10 pb-8 bg-red-950/20 rounded-t-[4rem] px-10 py-8 text-center">
                    <CardTitle className="text-3xl md:text-5xl text-red-500 flex items-center justify-center gap-10 font-black uppercase italic leading-none">
                       <AlertTriangle className="size-16 animate-pulse" /> Rollback
                    </CardTitle>
                 </CardHeader>
                 <CardContent className="p-12 space-y-12 text-center flex flex-col items-center">
                    <p className="text-2xl text-red-200/60 font-bold italic leading-tight mb-8">"سيدي القائد، في حالة حدوث خلل جيني، يمكننا العودة إلى حالة الاستقرار الأبدية عبر بروتوكول الـ Rollback."</p>
                    <div className="size-48 rounded-full border-8 border-red-600/20 flex items-center justify-center relative shadow-9xl mb-8 group-hover:rotate-180 transition-all duration-[3s]">
                        <History className="size-20 text-red-600 animate-neural" />
                    </div>
                    <Button onClick={handleForceRollback} variant="outline" className="w-full h-28 bg-red-600/10 border-4 border-red-600/40 hover:bg-red-700 text-white font-black uppercase tracking-[0.5em] rounded-[2rem] shadow-9xl italic active:scale-95 transition-all text-xl">
                        RESTORE_SOUL
                    </Button>
                 </CardContent>
              </Card>

              <Card className="sovereign-card group text-center h-full flex flex-col justify-center">
                 <div className="absolute inset-0 bg-primary/5 opacity-5 animate-pulse pointer-events-none" />
                 <div className="flex flex-col items-center gap-16">
                    <div className="size-64 md:size-80 rounded-full border-[20px] border-dashed border-primary/20 flex items-center justify-center relative shadow-[0_0_200px_rgba(251,191,36,0.4)] animate-spin-slow">
                       <Fingerprint className="size-32 md:size-48 text-primary gold-glow animate-neural" />
                    </div>
                    <div className="space-y-6">
                        <h4 className="text-6xl md:text-[10rem] font-black text-white uppercase italic gold-glow leading-none">ULTRA</h4>
                        <Badge className="bg-emerald-600 text-black border-none px-12 py-3 rounded-full font-black text-3xl shadow-9xl">SOUL_BOUND</Badge>
                    </div>
                 </div>
              </Card>
           </div>
        </div>

        <div className="mt-auto relative z-10 flex flex-col md:flex-row justify-center items-center gap-24 md:gap-64 opacity-45 text-[24px] md:text-[40px] font-black uppercase tracking-[6em] md:tracking-[12em] italic text-white drop-shadow-9xl pb-40">
            <span>AL-MUIZZ EVOLUTION ENGINE v91.3</span>
            <div className="size-16 rounded-full bg-white animate-pulse shadow-[0_0_120px_white]" />
            <span>PERPETUAL_REBIRTH_ACTIVE_2026</span>
        </div>
      </main>
    </div>
  )
}
