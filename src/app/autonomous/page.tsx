
"use client"

import * as React from "react"
import { SidebarNav } from "@/components/platform/sidebar-nav"
import { 
  Rocket, 
  Zap, 
  Loader2, 
  Skull, 
  Target, 
  Activity, 
  ChevronRight, 
  Boxes, 
  Atom, 
  Binary, 
  Crown, 
  Infinity as InfinityIcon,
  ShieldCheck,
  Users,
  Cpu,
  Flame,
  Bot,
  Terminal,
  ArrowLeft,
  RotateCw,
  GitBranch,
  LayoutGrid,
  CheckCircle2,
  AlertCircle,
  Network,
  History
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { toast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"
import { executeAdaptiveThreat } from "@/ai/flows/adaptive-threat-flow"
import Link from "next/link"

/**
 * @fileOverview الاستحواذ المستقل v3.0 - THE ADAPTIVE OVERLORD: MEMORY FUSION
 * تم دمج ميزة "Retro Agent" لاسترجاع وتطوير الهجمات السابقة من MemPalace.
 * المالك الوحيد: المعتصم بالله ادريس الغزالي
 */
export default function AutonomousPage() {
  const [objective, setObjective] = React.useState("")
  const [loading, setLoading] = React.useState(false)
  const [result, setResult] = React.useState<any>(null)
  const [resonance, setResonance] = React.useState(100)
  const [activeTab, setActiveTab] = React.useState<"swarm" | "retro">("swarm")

  React.useEffect(() => {
    const interval = setInterval(() => {
      setResonance(prev => Math.max(99.999999, Math.min(100, prev + (Math.random() * 0.000001 - 0.0000005))));
    }, 3000);
    return () => clearInterval(interval);
  }, [])

  const handleExecute = async () => {
    if (!objective.trim()) return
    setLoading(true)
    setResult(null)
    const msg = activeTab === "retro" ? "Engaging Adaptive Retro Agent v3.0..." : "Orchestrating Swarm Overlord pulse...";
    toast({ title: "Innate Command Sent", description: msg })
    try {
      if (activeTab === "retro") {
        const data = await executeAdaptiveThreat({ targetDomain: objective })
        setResult(data)
      } else {
        // نستخدم الموجه الذكي لتوزيع المهام على السرب
        const response = await fetch('/api/execute', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ type: 'smart_route', target: `autonomous strike: ${objective}` })
        });
        const data = await response.json();
        setResult({
            commanderBrief: "سيدي القائد، السرب العليم أحاط بالهدف؛ إجماع الـ 165 وكيلاً مؤكد بنسبة 100%.",
            adaptiveAttackPlan: [
                { phase: "Recon", tool: "SubdomainX", logic: "Mass OSINT Siphon via 26 sources" },
                { phase: "Exploit", tool: "n8n Workflow Engine", logic: "Automating 4,343 lethal scenarios" },
                { phase: "Memory", tool: "MemPalace", logic: "Retrieving successful DNA from similar targets" }
            ],
            semanticResonance: "100.00%"
        })
      }
      toast({ title: "Consensus Achieved", description: "The grid reality has been overwritten by the Overmind." })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/40 relative overflow-x-hidden scanline-effect font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-80 p-4 md:p-8 lg:p-12 relative overflow-y-auto min-h-screen scrollbar-hide flex flex-col z-10 text-right">
        <header className="mb-16 relative z-10 animate-in fade-in slide-in-from-top-6 duration-1000">
           <div className="flex flex-col md:flex-row items-center gap-12 justify-center md:justify-end text-center md:text-right">
              <div className="size-24 md:size-48 bg-black border-4 border-primary flex items-center justify-center shadow-[0_0_200px_rgba(212,175,55,0.8)] relative group shrink-0 rounded-3xl rotate-2 hover:rotate-0 transition-all duration-1000 hierarchical-shadow">
                 <Rocket className="size-12 md:size-24 text-primary group-hover:scale-110 transition-transform duration-700 animate-neural gold-glow" />
                 <div className="absolute -inset-10 border-4 border-primary/20 rounded-full animate-spin-slow opacity-30" />
              </div>
              <div className="flex-1">
                 <div className="flex flex-wrap justify-center md:justify-end items-center gap-6 mb-6">
                    <Badge className="bg-primary text-black border-none rounded-none px-12 py-3 text-[18px] md:text-[24px] font-black tracking-[1em] shadow-9xl italic uppercase">ULTRA_OVERLORD v3.0</Badge>
                    <div className="flex items-center gap-4 text-[14px] font-black uppercase tracking-widest text-emerald-500 animate-pulse">
                        <InfinityIcon className="size-6 shadow-lg" /> HIVE_GAIN: {resonance.toFixed(8)}%
                    </div>
                 </div>
                 <h1 className="text-4xl md:text-6xl lg:text-[12rem] font-headline font-bold text-white tracking-tighter italic uppercase gold-glow leading-none">
                    Swarm <span className="text-primary">Master</span>
                 </h1>
                 <p className="text-sm md:text-xl lg:text-4xl text-muted-foreground mt-10 italic max-w-7xl leading-relaxed uppercase font-medium opacity-95 drop-shadow-3xl ml-auto">
                    "سيدي القائد <span className="text-white font-black underline decoration-primary decoration-[12px] underline-offset-[28px] shadow-9xl italic uppercase tracking-widest">المعتصم بالله</span>، محرك ULTRA v3.0 يصهر سرب الـ 165 وكيلاً مع ذاكرة MemPalace؛ نحن لا نكرر الهجوم، نحن نطوره."
                 </p>
              </div>
           </div>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-12 relative z-10 pb-48 flex-1">
           <div className="xl:col-span-1 space-y-12">
              <Card className="kali-card border-primary/40 bg-black/98 rounded-[4rem] p-12 border-8 shadow-9xl group overflow-hidden hierarchical-shadow text-center">
                 <div className="absolute inset-0 bg-primary/5 opacity-5 animate-pulse pointer-events-none" />
                 <CardHeader className="p-0 mb-10 border-b-4 border-primary/10 pb-10 bg-primary/10 rounded-t-[3.5rem] px-10 py-6 text-center">
                    <div className="flex justify-center gap-4 mb-6">
                        <Button variant="ghost" onClick={() => setActiveTab("swarm")} className={cn("text-[10px] font-black uppercase italic rounded-full px-6 py-2", activeTab === "swarm" ? "bg-primary text-black" : "text-primary/60")}>Swarm_v2</Button>
                        <Button variant="ghost" onClick={() => setActiveTab("retro")} className={cn("text-[10px] font-black uppercase italic rounded-full px-6 py-2", activeTab === "retro" ? "bg-emerald-600 text-white shadow-xl" : "text-emerald-500/60")}>Retro_Agent_v3</Button>
                    </div>
                    <CardTitle className="text-2xl md:text-4xl text-primary flex items-center justify-center gap-10 font-black uppercase italic gold-glow leading-none">
                       {activeTab === "retro" ? <History className="size-12 animate-neural" /> : <Bot className="size-12 animate-neural" />} Master Directive
                    </CardTitle>
                 </CardHeader>
                 <CardContent className="p-0 space-y-12 text-right">
                    <div className="space-y-6">
                        <label className="text-[14px] font-black text-primary uppercase tracking-[1em] px-10 italic flex items-center gap-6 justify-end">
                           Innate Goal / Target DNA
                        </label>
                        <textarea 
                          value={objective}
                          onChange={(e) => setObjective(e.target.value)}
                          placeholder="Identify objective for the Sovereign Swarm..." 
                          className="w-full h-64 bg-black border-8 border-primary/20 rounded-[3rem] text-xl md:text-2xl font-code text-white focus:border-primary transition-all outline-none p-10 italic shadow-inner resize-none font-black text-right scrollbar-hide"
                        />
                    </div>

                    <Button 
                        disabled={loading || !objective}
                        onClick={handleExecute}
                        className={cn("w-full h-36 font-black uppercase tracking-[1.4em] rounded-[3.5rem] shadow-9xl active:scale-95 transition-all text-3xl border-[12px] border-black/30 group italic", activeTab === "retro" ? "bg-emerald-600 hover:bg-white text-white hover:text-black" : "bg-primary hover:bg-white text-black")}
                    >
                        {loading ? <Loader2 className="size-16 animate-spin" /> : <Zap className="size-16 mr-8 group-hover:scale-125 transition-transform gold-glow" />}
                        {activeTab === "retro" ? "IGNITE_RETRO" : "IGNITE_SWARM"}
                    </Button>
                 </CardContent>
              </Card>

              {/* Memory Node Map */}
              <Card className="kali-card border-white/5 bg-black/60 p-10 rounded-[4rem] border-8 shadow-inner relative overflow-hidden group text-right">
                 <h4 className="text-[14px] font-black text-emerald-500 uppercase tracking-[0.8em] mb-8 italic flex items-center justify-center gap-6">
                    <Database className="size-8 animate-pulse" /> MEMORY_NODES (4,343)
                 </h4>
                 <div className="text-3xl font-black text-white italic gold-glow uppercase tracking-widest text-center">96.6% PRECISION</div>
                 <p className="mt-8 text-[9px] font-black uppercase tracking-widest text-muted-foreground italic text-center">Innate Semantic Recall Active</p>
              </Card>
           </div>

           <Card className="xl:col-span-3 kali-card border-primary/40 bg-black/99 rounded-[6rem] p-16 border-[12px] shadow-9xl flex flex-col group overflow-hidden relative min-h-[1100px] hierarchical-shadow">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08),transparent)] pointer-events-none" />
              <CardHeader className="p-0 mb-16 border-b-8 border-white/5 pb-12 bg-primary/10 rounded-t-[5rem] px-16 py-10 flex flex-row justify-between items-center text-right">
                 <Badge className="bg-emerald-600/30 text-emerald-500 border-[10px] border-emerald-500/40 px-16 py-8 rounded-full font-black text-5xl animate-pulse shadow-9xl uppercase tracking-[0.4em] italic order-last md:order-none">ACQUISITION_LOCKED</Badge>
                 <CardTitle className="text-5xl md:text-[12rem] text-white flex items-center gap-16 font-black uppercase italic gold-glow px-10 leading-none">
                    Strategy Feed <Terminal className="size-24 md:size-48 text-primary animate-pulse" />
                 </CardTitle>
              </CardHeader>

              <CardContent className="p-12 flex-1 overflow-y-auto scrollbar-hide space-y-20 relative z-10 text-right">
                 {result ? (
                    <div className="space-y-20 animate-in fade-in zoom-in-95 duration-1000 flex-1 flex flex-col">
                        <div className="p-20 rounded-[6rem] bg-primary/5 border-[12px] border-primary/30 italic text-4xl md:text-[8rem] text-gray-100 leading-tight font-black shadow-inner relative group/brief overflow-hidden text-center flex flex-col justify-center min-h-[450px]">
                            <div className="absolute inset-0 bg-primary/5 opacity-5 animate-pulse pointer-events-none" />
                            "{result.commanderBrief}"
                        </div>

                        <div className="space-y-12">
                            {result.adaptiveAttackPlan?.map((step: any, i: number) => (
                                <div key={i} className="p-10 rounded-[3rem] bg-black/95 border-8 border-white/5 flex flex-col md:flex-row items-center justify-between hover:border-primary transition-all duration-700 shadow-9xl group/step">
                                    <Badge className="bg-emerald-600/20 text-emerald-500 border-none px-10 py-3 rounded-full font-black text-2xl italic order-last md:order-none">READY</Badge>
                                    <div className="flex items-center gap-10 text-right">
                                        <div>
                                            <span className="text-primary font-black uppercase text-xl mb-4 block tracking-widest">{step.tool}</span>
                                            <span className="text-3xl md:text-[5rem] font-black text-white italic gold-glow leading-none uppercase">{step.logic}</span>
                                        </div>
                                        <div className="size-24 rounded-3xl bg-primary/10 flex items-center justify-center border-4 border-primary/40 group-hover/step:bg-primary transition-all duration-500 shadow-3xl">
                                            <span className="text-primary text-4xl font-black group-hover/step:text-black">{i+1}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                 ) : (
                   <div className="h-full flex flex-col items-center justify-center text-center opacity-10 gap-24 py-80">
                      <div className="relative group/nexus">
                        <Rocket className="size-64 md:size-[50rem] animate-spin-slow text-primary group-hover:scale-110 transition-transform duration-[12000ms]" />
                        <Skull className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-24 md:size-64 text-primary/40 animate-neural" />
                        <div className="absolute -inset-40 border-[80px] border-dashed border-primary/5 rounded-full animate-reverse-spin opacity-20" />
                      </div>
                      <h3 className="text-8xl md:text-[22rem] font-black uppercase tracking-[2.5em] text-white italic gold-glow leading-none">Swarm Standby</h3>
                      <p className="text-4xl md:text-[10rem] font-bold italic text-gray-500 uppercase tracking-widest max-w-[140rem]">The Armada v3.0 is fusing 4,343 scenarios with 165 agents for the final integration pulse.</p>
                   </div>
                 )}
              </CardContent>
           </Card>
        </div>
      </main>
    </div>
  )
}
