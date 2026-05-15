
"use client"

import * as React from "react"
import { SidebarNav } from "@/components/platform/sidebar-nav"
import { 
  Rocket, 
  Zap, 
  Loader2, 
  Skull, 
  Target, 
  Bot, 
  Terminal, 
  RotateCw, 
  ArrowLeft, 
  Infinity as InfinityIcon,
  Database,
  History,
  Workflow,
  Users,
  Activity,
  ShieldCheck,
  ChevronRight,
  Atom,
  Boxes,
  Cpu,
  Fingerprint,
  Flame,
  Network,
  ZapOff
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { toast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"
import { executeOmnipotentConquest } from "@/ai/flows/autonomous-conquest-flow"
import Link from "next/link"

/**
 * @fileOverview الاستحواذ المستقل v90.8 - THE OMNIPOTENT ARMADA: MATERIAL TRUTH
 * واجهة قيادة الأسطول العليم (165 وكيلاً) المجرّدة من الوهم.
 * المالك الوحيد: المعتصم بالله ادريس الغزالي
 */
export default function AutonomousPage() {
  const [objective, setObjective] = React.useState("")
  const [loading, setLoading] = React.useState(false)
  const [result, setResult] = React.useState<any>(null)
  const [metrics, setMetrics] = React.useState<any>(null)
  const [mounted, setMounted] = React.useState(false)
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 })

  const fetchStats = async () => {
      try {
          const res = await fetch('/api/sovereign/metrics');
          const data = await res.json();
          setMetrics(data);
      } catch (e) {}
  };

  React.useEffect(() => {
    setMounted(true)
    const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY })
    window.addEventListener("mousemove", handleMouseMove)
    
    fetchStats();
    const interval = setInterval(fetchStats, 4000);
    return () => { window.removeEventListener("mousemove", handleMouseMove); clearInterval(interval); }
  }, [])

  const handleExecute = async () => {
    if (!objective.trim()) return
    setLoading(true); setResult(null)
    toast({ title: "Armada Pulse Engaging v90.8", description: "Deploying 165 real agents into the material mesh..." })
    try {
      // 1. استشارة العقل التوليدي
      const data = await executeOmnipotentConquest({ objective, intelligenceDepth: 'Reality-Overwrite' })
      
      // 2. التنفيذ المادي عبر الجسر (إشعال الأسطول حقيقةً)
      const response = await fetch('/api/execute', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ type: 'armada_strike', target: objective })
      });
      const hardwareData = await response.json();
      
      setResult({ ...data, hardwareOutput: hardwareData });
      toast({ title: "Armada Deployed", description: "The material grid is being overwritten by the swarm." })
    } finally {
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
           <div className="size-24 md:size-48 bg-black border-4 border-primary flex items-center justify-center shadow-[0_0_200px_rgba(251,191,36,0.8)] relative group shrink-0 rounded-3xl transition-all duration-1000 rotate-2 hover:rotate-0 hierarchical-shadow">
              <Rocket className="size-12 md:size-24 text-primary group-hover:scale-110 transition-transform duration-700 animate-neural gold-glow" />
              <div className="absolute -inset-10 border-4 border-primary/20 rounded-full animate-spin-slow opacity-30" />
           </div>
           <div className="flex-1 text-right">
              <div className="flex flex-wrap justify-center md:justify-end items-center gap-6 mb-6">
                 <Badge className="bg-primary text-black border-none rounded-none px-12 py-3 text-[18px] md:text-[24px] font-black tracking-[1em] shadow-9xl italic uppercase">ARMADA_COMMAND v90.8</Badge>
                 <div className="flex items-center gap-4 text-[14px] font-black uppercase tracking-widest text-emerald-500 animate-pulse">
                     <InfinityIcon className="size-6 shadow-lg" /> HIVE_SYNC: {metrics?.resonance || "0.00%"}
                 </div>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-[12rem] font-headline font-bold text-white tracking-tighter italic uppercase gold-glow leading-none">
                 Omniscient <span className="text-primary">Conqueror</span>
              </h1>
              <p className="text-sm md:text-xl lg:text-4xl text-muted-foreground mt-10 italic max-w-7xl leading-relaxed uppercase font-medium opacity-95 drop-shadow-3xl ml-auto">
                 "سيدي القائد <span className="text-white font-black underline decoration-primary decoration-[12px] underline-offset-[28px] shadow-9xl italic uppercase tracking-widest">المعتصم بالله</span>، الأسطول العليم v90.8 ينبض الآن بحقيقة العتاد؛ 165 وكيلاً يتنفسون في عصب المصفوفة لخدمة سلطانك."
              </p>
              <div className="flex justify-center md:justify-end gap-6 mt-12">
                 <Button asChild variant="outline" className="h-16 px-10 rounded-full border-4 border-white/10 bg-white/5 text-white font-black uppercase italic tracking-widest hover:bg-primary hover:text-black transition-all shadow-2xl text-xs md:text-sm">
                     <Link href="/"><ArrowLeft className="size-6 mr-3" /> العودة</Link>
                 </Button>
              </div>
           </div>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-12 relative z-10 pb-48 flex-1 text-right">
           <div className="xl:col-span-1 space-y-12">
              <Card className="sovereign-card group text-center">
                 <CardHeader className="p-0 mb-10 border-b-4 border-primary/10 pb-10 bg-primary/10 rounded-t-[3.5rem] px-10 py-6 text-center">
                    <CardTitle className="text-2xl md:text-4xl text-primary flex items-center justify-center gap-10 font-black uppercase italic gold-glow leading-none">
                       <Target className="size-12 animate-neural" /> Master Directive
                    </CardTitle>
                 </CardHeader>
                 <CardContent className="p-0 space-y-12 text-right">
                    <div className="space-y-6 text-right">
                        <label className="text-[14px] font-black text-primary uppercase tracking-[1em] px-10 italic flex items-center gap-6 justify-end">
                           Collective Intent
                        </label>
                        <textarea 
                          value={objective} 
                          onChange={(e) => setObjective(e.target.value)} 
                          placeholder="Command the 165 agents..." 
                          className="w-full h-64 bg-black border-8 border-primary/20 rounded-[3rem] text-xl md:text-2xl font-code text-white focus:border-primary transition-all outline-none p-10 italic shadow-inner resize-none font-black text-right scrollbar-hide selection:bg-primary"
                        />
                    </div>

                    <Button 
                        disabled={loading || !objective}
                        onClick={handleExecute}
                        className="w-full h-36 bg-primary hover:bg-white text-black font-black uppercase tracking-[1.4em] rounded-[3.5rem] shadow-[0_80px_250px_rgba(212,175,55,0.7)] active:scale-95 transition-all text-3xl border-[12px] border-black/30 group italic"
                    >
                        {loading ? <Loader2 className="size-16 animate-spin" /> : <Zap className="size-16 mr-8 group-hover:scale-125 transition-transform gold-glow" />}
                        IGNITE_ARMADA
                    </Button>
                 </CardContent>
              </Card>

              <Card className="sovereign-card group text-right">
                 <h4 className="text-[14px] font-black text-emerald-500 uppercase tracking-[0.8em] mb-8 italic flex items-center justify-center gap-6">
                    <Users className="size-8 animate-pulse" /> ARMADA_NODES
                 </h4>
                 <div className="text-[8rem] font-black text-white italic gold-glow uppercase tracking-tighter text-center leading-none">
                    {metrics?.armadaNodes || 0}
                 </div>
                 <p className="mt-8 text-[9px] font-black uppercase tracking-widest text-muted-foreground italic text-center">Material Agents breathing in the Mesh</p>
              </Card>
           </div>

           <Card className="xl:col-span-3 sovereign-card flex flex-col group min-h-[1100px]">
              <CardHeader className="p-0 mb-16 border-b-8 border-white/5 pb-12 bg-primary/10 rounded-t-[5rem] px-16 py-10 flex flex-row justify-between items-center text-right">
                 <Badge className="bg-emerald-600/30 text-emerald-500 border-[10px] border-emerald-500/40 px-16 py-8 rounded-full font-black text-5xl animate-pulse shadow-9xl uppercase tracking-[0.4em] italic order-last md:order-none">CONQUEST_LOCKED</Badge>
                 <CardTitle className="text-5xl md:text-[12rem] text-white flex items-center gap-16 font-black uppercase italic gold-glow px-10 leading-none">
                    Armada Feed <Terminal className="size-24 md:size-48 text-primary animate-pulse" />
                 </CardTitle>
              </CardHeader>

              <CardContent className="p-12 flex-1 overflow-y-auto scrollbar-hide space-y-20 relative z-10 text-right">
                 {result ? (
                    <div className="space-y-20 animate-in fade-in zoom-in-95 duration-1000 flex-1 flex flex-col text-right">
                        <div className="p-20 rounded-[6rem] bg-primary/5 border-[12px] border-primary/30 italic text-4xl md:text-[8rem] text-gray-100 leading-tight font-black shadow-inner relative group/brief overflow-hidden text-center flex flex-col justify-center min-h-[450px]">
                            <div className="absolute inset-0 bg-primary/5 opacity-5 animate-pulse pointer-events-none" />
                            "{result.commanderBrief}"
                        </div>
                        
                        <div className="bg-black/95 rounded-[4rem] border-8 border-white/5 p-12 font-code text-xl md:text-5xl text-emerald-400 italic shadow-inner overflow-y-auto scrollbar-hide text-left">
                            <h4 className="text-primary font-black uppercase mb-8 border-b-4 border-primary/20 pb-4">Material_Consensus_Log</h4>
                            <pre className="whitespace-pre-wrap">{JSON.stringify(result.hardwareOutput, null, 2)}</pre>
                        </div>
                    </div>
                 ) : (
                   <div className="h-full flex flex-col items-center justify-center text-center opacity-10 gap-24 py-80">
                      <div className="relative group/lock">
                        <Network className="size-64 md:size-[50rem] animate-spin-slow text-primary group-hover:scale-110 transition-transform duration-[12000ms]" />
                        <Skull className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-24 md:size-64 text-primary/40 animate-neural" />
                        <div className="absolute -inset-40 border-[80px] border-dashed border-primary/5 rounded-full animate-reverse-spin opacity-20" />
                      </div>
                      <h3 className="text-8xl md:text-[22rem] font-black uppercase tracking-[2.5em] text-white italic gold-glow leading-none">Armada Standby</h3>
                      <p className="text-4xl md:text-[10rem] font-bold italic text-gray-500 uppercase tracking-widest max-w-[140rem] text-center">The Armada v90.8 is orchestrating 165 real material agents across all global clusters.</p>
                   </div>
                 )}
              </CardContent>
           </Card>
        </div>
      </main>
    </div>
  )
}
