
"use client"

import * as React from "react"
import { SidebarNav } from "@/components/platform/sidebar-nav"
import { 
  Search, 
  Zap, 
  Loader2, 
  Skull, 
  Target, 
  Activity, 
  Database, 
  GitBranch, 
  Binary, 
  Crown, 
  Infinity as InfinityIcon, 
  ChevronRight, 
  Dna, 
  Boxes, 
  History, 
  Radar,
  ArrowLeft,
  RotateCw,
  LayoutGrid,
  Network,
  Atom,
  ShieldCheck,
  Eye,
  Flame,
  Bot,
  Sparkles,
  Map as MapIcon,
  BrainCircuit,
  Fingerprint
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { toast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"
import { executeCairnStrategy } from "@/ai/flows/cairn-strategy-flow"
import Link from "next/link"

/**
 * @fileOverview محقق الظلال v85.5 - THE SHADOW INVESTIGATOR: CAIRN MATRIX
 * واجهة البحث الاستراتيجي التي تصهر الحقائق والنوايا للوصول إلى الضربة المطلقة.
 */
export default function CairnPage() {
  const [target, setTarget] = React.useState("")
  const [loading, setLoading] = React.useState(false)
  const [graph, setGraph] = React.useState<any>(null)
  const [strategy, setStrategy] = React.useState<any>(null)
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
    return () => {
        window.removeEventListener("mousemove", handleMouseMove)
        clearInterval(interval)
    }
  }, [])

  const handleInvestigate = async () => {
    if (!target.trim()) {
        toast({ variant: "destructive", title: "Target Missing", description: "Identify a digital coordinate for shadow investigation." })
        return
    }
    setLoading(true); setStrategy(null); setGraph(null);
    toast({ title: "Shadow Investigator Engaging", description: "Consolidating Cairn facts and intents with MemPalace DNA..." })
    try {
      // 1. مزامنة الرسم البياني من Cairn المادي
      const response = await fetch('/api/execute', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ type: 'cairn_action', action: 'sync', target: target })
      });
      const data = await response.json();
      if (data.success) {
          setGraph(data.output);
          
          // 2. استدعاء التدفق الاستراتيجي العصبي
          const strategyData = await executeCairnStrategy({
              target: target,
              currentFacts: data.output.facts || [],
              currentIntents: data.output.intents || []
          });
          setStrategy(strategyData);
          toast({ title: "Investigation Serialized", description: "Next strategic intent materialized in the 7D Matrix." })
      }
    } catch (err) {
      toast({ variant: "destructive", title: "Neural Link Failure" })
    } finally {
      setLoading(false)
    }
  }

  if (!mounted) return null

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/40 relative overflow-x-hidden scanline-effect font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-64 p-4 md:p-8 lg:p-12 relative overflow-y-auto min-h-screen scrollbar-hide flex flex-col z-10 text-right">
        <div className="dna-stream-bg" style={{ '--x': `${mousePos.x}px`, '--y': `${mousePos.y}px` } as any} />
        
        <header className="sovereign-header flex flex-col md:flex-row items-center gap-12 justify-center md:justify-end text-center md:text-right">
           <div className="size-24 md:size-48 bg-black border-4 border-primary flex items-center justify-center shadow-glow relative group shrink-0 rounded-3xl transition-all duration-1000 rotate-2 hover:rotate-0 hierarchical-shadow">
              <Search className="size-12 md:size-24 text-primary group-hover:scale-110 transition-transform duration-700 animate-neural gold-glow" />
              <div className="absolute -inset-10 border-4 border-primary/20 rounded-full animate-spin-slow opacity-30" />
           </div>
           <div className="flex-1">
              <div className="flex flex-wrap justify-center md:justify-end items-center gap-6 mb-6">
                 <Badge className="bg-primary text-black border-none rounded-none px-12 py-3 text-[18px] md:text-[24px] font-black tracking-[1em] shadow-9xl italic uppercase">SHADOW_INVESTIGATOR v85.5</Badge>
                 <div className="flex items-center gap-4 text-[14px] font-black uppercase tracking-widest text-emerald-500 animate-pulse">
                     <InfinityIcon className="size-6 shadow-lg" /> STRATEGY_SYNC: {resonance.toFixed(8)}%
                 </div>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-[12rem] font-headline font-bold text-white tracking-tighter italic uppercase gold-glow leading-none">
                 Shadow <span className="text-primary">Hunter</span>
              </h1>
              <p className="text-sm md:text-xl lg:text-4xl text-muted-foreground mt-10 italic max-w-7xl leading-relaxed uppercase font-medium opacity-95 drop-shadow-3xl ml-auto">
                 "سيدي القائد <span className="text-white font-black underline decoration-primary decoration-[12px] underline-offset-[28px] shadow-9xl italic uppercase tracking-widest">المعتصم بالله</span>، محقق الظلال يصهر نوايا Cairn في عصب "المُعِزّ"؛ نحن لا نبحث عشوائياً، نحن نبني خرائط السطوة التي تؤدي إلى انهيار الهدف حتماً."
              </p>
              <div className="flex justify-center md:justify-end gap-6 mt-12">
                 <Button asChild variant="outline" className="h-16 px-10 rounded-full border-4 border-white/10 bg-white/5 text-white font-black uppercase italic tracking-widest hover:bg-primary hover:text-black transition-all shadow-2xl">
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
                       <Target className="size-12 animate-neural" /> Strategic Focus
                    </CardTitle>
                 </CardHeader>
                 <CardContent className="p-0 space-y-12 text-right">
                    <div className="space-y-6 text-right">
                        <label className="text-[14px] font-black text-primary uppercase tracking-[1em] px-10 italic flex items-center gap-6 justify-end"><Network className="size-8" /> Target Coordinate</label>
                        <Input value={target} onChange={(e) => setTarget(e.target.value)} placeholder="Identify DNA node..." className="bg-black border-8 border-primary/20 h-24 rounded-[2rem] text-xl italic px-10 focus:border-primary shadow-inner text-white font-black text-left" />
                    </div>

                    <Button 
                        disabled={loading}
                        onClick={handleInvestigate}
                        className="w-full h-36 bg-primary hover:bg-white text-black font-black uppercase tracking-[1.4em] rounded-[3.5rem] shadow-[0_80px_250px_rgba(212,175,55,0.7)] active:scale-95 transition-all text-2xl md:text-4xl border-[12px] border-black/30 group italic"
                    >
                        {loading ? <Loader2 className="size-16 animate-spin" /> : <Radar className="size-16 mr-8 group-hover:scale-125 transition-transform gold-glow" />}
                        INVESTIGATE
                    </Button>
                 </CardContent>
              </Card>

              <Card className="sovereign-card group text-right">
                 <h4 className="text-[14px] font-black text-emerald-500 uppercase tracking-[0.8em] mb-8 italic flex items-center justify-center gap-6">
                    <History className="size-8 animate-pulse" /> CAIRN_GRAPH_v1
                 </h4>
                 <div className="text-3xl font-black text-white italic gold-glow uppercase tracking-widest text-center">FACTS & INTENTS</div>
                 <p className="mt-8 text-[9px] font-black uppercase tracking-widest text-muted-foreground italic text-center">Strategic Pathfinding Enabled</p>
              </Card>
           </div>

           <Card className="xl:col-span-3 sovereign-card flex flex-col group min-h-[1100px]">
              <CardHeader className="p-0 mb-16 border-b-8 border-white/5 pb-12 bg-primary/10 rounded-t-[5rem] px-16 py-10 flex flex-row justify-between items-center text-right">
                 <Badge className="bg-emerald-600/30 text-emerald-500 border-[10px] border-emerald-500/40 px-16 py-8 rounded-full font-black text-5xl animate-pulse shadow-9xl uppercase tracking-[0.4em] italic order-last md:order-none">SHADOW_LOCKED</Badge>
                 <CardTitle className="text-5xl md:text-[12rem] text-white flex items-center gap-16 font-black uppercase italic gold-glow px-10 leading-none">
                    Shadow Feed <GitBranch className="size-24 md:size-48 text-primary animate-pulse" />
                 </CardTitle>
              </CardHeader>

              <CardContent className="p-12 flex-1 overflow-y-auto scrollbar-hide space-y-20 relative z-10 text-right">
                 {strategy ? (
                    <div className="space-y-20 animate-in fade-in zoom-in-95 duration-1000 flex-1 flex flex-col">
                        {/* Strategic Brief */}
                        <div className="p-20 rounded-[6rem] bg-primary/5 border-[12px] border-primary/30 italic text-4xl md:text-[8rem] text-gray-100 leading-tight font-black shadow-inner relative group/brief overflow-hidden text-center flex flex-col justify-center min-h-[450px]">
                            <div className="absolute inset-0 bg-primary/5 opacity-5 animate-pulse pointer-events-none" />
                            "{strategy.commanderBrief}"
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                            {/* Facts Column */}
                            <Card className="bg-black/95 border-8 border-white/5 p-12 md:p-16 rounded-[4rem] shadow-9xl relative group/facts overflow-hidden h-full flex flex-col">
                                <h5 className="text-3xl font-black text-primary uppercase tracking-[1.5em] mb-12 border-b-8 border-primary/20 pb-10 flex items-center gap-12 gold-glow justify-end">Shadow Facts <Database className="size-14 animate-neural" /></h5>
                                <div className="space-y-8 flex-1">
                                    {graph?.facts?.map((fact: string, i: number) => (
                                        <div key={i} className="flex gap-6 items-start justify-end group/fact">
                                            <p className="text-xl md:text-3xl text-gray-400 italic font-black group-hover/fact:text-white transition-colors">{fact}</p>
                                            <div className="size-10 rounded-lg bg-primary/10 border-2 border-primary/30 flex items-center justify-center shrink-0 group-hover/fact:bg-primary transition-all duration-500 shadow-xl"><span className="text-primary text-xl font-black group-hover/fact:text-black">F</span></div>
                                        </div>
                                    ))}
                                </div>
                            </Card>

                            {/* Intent Column */}
                            <Card className="bg-black/95 border-8 border-white/5 p-12 md:p-16 rounded-[4rem] shadow-9xl h-full flex flex-col text-right relative overflow-hidden">
                                <h5 className="text-3xl font-black text-emerald-500 uppercase tracking-[1.5em] mb-12 border-b-8 border-emerald-500/20 pb-10 flex items-center gap-12 justify-end">Strategic Intents <Sparkles className="size-14" /></h5>
                                <div className="space-y-8 flex-1">
                                    {graph?.intents?.map((intent: string, i: number) => (
                                        <div key={i} className="flex gap-6 items-start justify-end group/intent">
                                            <p className="text-xl md:text-3xl text-gray-400 italic font-black group-hover/intent:text-emerald-400 transition-colors">{intent}</p>
                                            <div className="size-10 rounded-lg bg-emerald-600/10 border-2 border-emerald-500/30 flex items-center justify-center shrink-0 group-hover/intent:bg-emerald-500 transition-all duration-500 shadow-xl"><span className="text-emerald-500 text-xl font-black group-hover/intent:text-black">I</span></div>
                                        </div>
                                    ))}
                                </div>
                            </Card>
                        </div>

                        {/* Final Strategic Conclusion */}
                        <div className="p-16 rounded-[6rem] bg-emerald-600/10 border-[16px] border-emerald-500/30 flex items-center gap-16 group/siphon shadow-9xl relative overflow-hidden mt-auto min-h-[350px]">
                            <div className="absolute inset-0 bg-emerald-500/5 opacity-5 animate-pulse pointer-events-none" />
                            <div className="size-48 rounded-[3.5rem] bg-emerald-600 flex items-center justify-center border-[14px] border-emerald-400 shadow-9xl animate-neural shrink-0">
                                <BrainCircuit className="size-24 text-white" />
                            </div>
                            <div className="flex-1">
                                <h4 className="text-4xl font-black text-emerald-500 uppercase tracking-[1.2em] mb-6 italic">Strategic_Inference_v85.5</h4>
                                <div className="space-y-6">
                                    <p className="text-2xl md:text-5xl text-white font-black leading-tight drop-shadow-9xl italic">"{strategy.strategicInference}"</p>
                                    <div className="flex items-center gap-10 mt-6">
                                        <Badge className="bg-primary/20 text-primary border-4 border-primary/30 px-8 py-3 rounded-full font-black text-2xl italic">NEXT: {strategy.nextBestIntent}</Badge>
                                        <Badge className="bg-blue-600/20 text-blue-400 border-4 border-blue-500/30 px-8 py-3 rounded-full font-black text-2xl italic">TOOL: {strategy.recommendedTool}</Badge>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                 ) : (
                   <div className="h-full flex flex-col items-center justify-center text-center opacity-10 gap-24 py-80">
                      <div className="relative group/lock">
                        <MapIcon className="size-64 md:size-[50rem] animate-spin-slow text-primary group-hover:scale-110 transition-transform duration-[12000ms]" />
                        <Skull className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-24 md:size-64 text-primary/40 animate-neural" />
                        <div className="absolute -inset-40 border-[80px] border-dashed border-primary/5 rounded-full animate-reverse-spin opacity-20" />
                      </div>
                      <h3 className="text-8xl md:text-[22rem] font-black uppercase tracking-[2.5em] text-white italic gold-glow leading-none">Shadow Standby</h3>
                      <p className="text-4xl md:text-[10rem] font-bold italic text-gray-500 uppercase tracking-widest max-w-[140rem]">Establishing strategic Shadow-Graph for target DNA dissection and pathfinding.</p>
                   </div>
                 )}
              </CardContent>
              <div className="p-16 border-t-8 border-white/5 mt-auto flex justify-between items-center opacity-35 text-[20px] font-black uppercase tracking-[8em] italic">
                <span>SHADOW_INVESTIGATOR_v85_AL_GHAZALI_ROOT</span>
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
