"use client"

import * as React from "react"
import { SidebarNav } from "@/components/platform/sidebar-nav"
import { 
  Workflow, 
  Play, 
  Loader2, 
  Skull, 
  Target, 
  Database, 
  Zap, 
  Network, 
  ArrowLeft, 
  Infinity as InfinityIcon,
  ShieldCheck,
  Binary,
  Atom,
  Crown,
  History,
  Terminal,
  RotateCw,
  LayoutGrid,
  Sparkles,
  Fingerprint,
  Cpu
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { toast } from "@/hooks/use-toast"
import { executeN8nStrike } from "@/ai/flows/n8n-automation-flow"
import { cn } from "@/lib/utils"
import Link from "next/link"

/**
 * @fileOverview محراب n8n v90.0 - THE HIVE AUTOMATION: OMNIPOTENT HIVE
 * واجهة قيادة الـ 4,343 سيناريو هجومي مدمجة بذاكرة RAG والمحرك المادي.
 * تم التحديث للنمط السياني المتدفق (Flow Cyan) لعام 2026.
 */
export default function N8nHivePage() {
  const [target, setTarget] = React.useState("")
  const [workflow, setWorkflow] = React.useState("ULTRA_STRIKE_v90")
  const [loading, setLoading] = React.useState(false)
  const [result, setResult] = React.useState<any>(null)
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

  const handleStrike = async () => {
    if (!target) {
        toast({ variant: "destructive", title: "الهدف مفقود", description: "حدد عقدة الـ DNA للبدء بالأتمتة." })
        return
    }
    setLoading(true); setResult(null)
    toast({ title: "خلية n8n تنشط v90", description: `جاري تنسيق السيناريو ${workflow} لهدفك...` })
    try {
      const data = await executeN8nStrike({ targetNode: target, workflowId: workflow })
      const response = await fetch('/api/execute', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ type: 'n8n_strike', workflowId: workflow, target: target })
      });
      const hardwareData = await response.json();
      setResult({ ...data, hiveConsensus: hardwareData.output });
      toast({ title: "اكتملت الأتمتة", description: "تم تحقيق الإجماع الشبكي للخلية." })
    } catch (e) {
      toast({ variant: "destructive", title: "تعارض عصبي في الخلية" })
    } finally {
      setLoading(false)
    }
  }

  if (!mounted) return null

  return (
    <div className="flex min-h-screen bg-[#000a0a] text-white selection:bg-cyan-600/40 relative overflow-x-hidden scanline-effect font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-56 p-4 md:p-8 lg:p-12 relative overflow-y-auto min-h-screen scrollbar-hide flex flex-col z-10 text-right">
        <div className="dna-stream-bg" style={{ '--x': `${mousePos.x}px`, '--y': `${mousePos.y}px`, backgroundImage: 'radial-gradient(circle at var(--x) var(--y), rgba(6, 182, 212, 0.15), transparent 40%)' } as any} />
        
        <header className="sovereign-header flex flex-col md:flex-row items-center gap-12 justify-center md:justify-end text-center md:text-right">
           <div className="size-24 md:size-48 bg-black border-4 border-cyan-500 flex items-center justify-center shadow-[0_0_200px_rgba(6,182,212,0.8)] relative group shrink-0 rounded-[3rem] transition-all duration-1000 rotate-2 hover:rotate-0 hierarchical-shadow">
              <Workflow className="size-12 md:size-24 text-cyan-400 group-hover:scale-110 transition-transform duration-700 animate-neural gold-glow" />
              <div className="absolute -inset-10 border-4 border-cyan-500/20 rounded-full animate-spin-slow opacity-30" />
           </div>
           <div className="flex-1">
              <div className="flex flex-wrap justify-center md:justify-end items-center gap-6 mb-6">
                 <Badge className="bg-cyan-600 text-black border-none rounded-none px-12 py-3 text-[18px] md:text-[24px] font-black tracking-[1em] shadow-9xl italic uppercase">HIVE_AUTO v90.0</Badge>
                 <div className="flex items-center gap-4 text-[14px] font-black uppercase tracking-widest text-cyan-400 animate-pulse">
                     <InfinityIcon className="size-6 shadow-lg" /> FLOW_SYNC: {resonance.toFixed(8)}%
                 </div>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-[12rem] font-headline font-bold text-white tracking-tighter italic uppercase gold-glow leading-none">
                 The <span className="text-cyan-500">Hive</span>
              </h1>
              <p className="text-sm md:text-xl lg:text-4xl text-cyan-100/60 mt-10 italic max-w-7xl leading-relaxed uppercase font-medium opacity-95 drop-shadow-3xl ml-auto">
                 "سيدي القائد <span className="text-white font-black underline decoration-cyan-500 decoration-[12px] underline-offset-[28px] shadow-9xl italic uppercase tracking-widest">المعتصم بالله</span>، مصفوفة n8n تصهر 4,343 سيناريو مع ذاكرة MemPalace؛ نحن لا نكرر التنفيذ، نحن نطوره بذكائك المطلق لعام 2026."
              </p>
              <div className="flex justify-center md:justify-end gap-6 mt-12">
                 <Button asChild variant="outline" className="h-16 px-10 rounded-full border-4 border-cyan-500/20 bg-cyan-950/10 text-cyan-400 font-black uppercase italic tracking-widest hover:bg-cyan-600 hover:text-white transition-all shadow-2xl">
                     <Link href="/"><ArrowLeft className="size-6 mr-3" /> العودة</Link>
                 </Button>
              </div>
           </div>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-12 relative z-10 pb-48 flex-1 text-right">
           <div className="xl:col-span-1 space-y-12">
              <Card className="bg-black/90 border-8 border-cyan-500/20 rounded-[4rem] p-12 shadow-9xl group overflow-hidden text-center backdrop-blur-3xl">
                 <CardHeader className="p-0 mb-10 border-b-4 border-cyan-500/10 pb-10 bg-cyan-950/20 rounded-t-[3.5rem] px-10 py-6 text-center">
                    <CardTitle className="text-2xl md:text-4xl text-cyan-400 flex items-center justify-center gap-10 font-black uppercase italic gold-glow leading-none">
                       <Target className="size-12 animate-neural" /> Hive Command
                    </CardTitle>
                 </CardHeader>
                 <CardContent className="p-0 space-y-12 text-right">
                    <div className="space-y-6 text-right">
                        <label className="text-[14px] font-black text-cyan-400 uppercase tracking-[1em] px-10 italic flex items-center gap-6 justify-end"><Network className="size-8" /> Target Coordinate</label>
                        <Input value={target} onChange={(e) => setTarget(e.target.value)} placeholder="Identify target DNA..." className="bg-black border-8 border-cyan-500/20 h-24 rounded-[2rem] text-xl italic px-10 focus:border-cyan-500 shadow-inner text-white font-black text-left" />
                    </div>
                    <div className="space-y-6 text-right">
                        <label className="text-[14px] font-black text-cyan-400 uppercase tracking-[1em] px-10 italic flex items-center gap-6 justify-end"><Binary className="size-8" /> Workflow ID</label>
                        <Input value={workflow} onChange={(e) => setWorkflow(e.target.value)} className="bg-black border-8 border-cyan-500/20 h-24 rounded-[2rem] text-xl italic px-10 focus:border-cyan-500 shadow-inner text-white font-black text-left" />
                    </div>

                    <Button 
                        disabled={loading || !target}
                        onClick={handleStrike}
                        className="w-full h-36 bg-cyan-600 hover:bg-white text-white hover:text-black font-black uppercase tracking-[1.4em] rounded-[3.5rem] shadow-[0_80px_250px_rgba(6,182,212,0.7)] active:scale-95 transition-all text-2xl md:text-4xl border-[12px] border-black/30 group italic"
                    >
                        {loading ? <Loader2 className="size-16 animate-spin" /> : <Play className="size-16 mr-8 group-hover:scale-125 transition-transform gold-glow" />}
                        IGNITE_HIVE
                    </Button>
                 </CardContent>
              </Card>

              <Card className="bg-black/80 border-8 border-cyan-500/20 p-10 rounded-[4rem] shadow-inner text-center relative overflow-hidden group">
                 <h4 className="text-[14px] font-black text-cyan-400 uppercase tracking-[0.8em] mb-8 italic flex items-center justify-center gap-6">
                    <History className="size-8 animate-pulse" /> MEMORY_RECALL
                 </h4>
                 <div className="text-3xl font-black text-white italic gold-glow uppercase tracking-widest text-center">SINGULARITY: ACTIVE</div>
                 <div className="absolute -bottom-10 -right-10 p-24 opacity-[0.03] group-hover:opacity-[0.1] transition-all duration-1000 scale-150 rotate-12"><Skull className="size-48 text-cyan-500" /></div>
              </Card>
           </div>

           <Card className="xl:col-span-3 bg-black/90 border-[12px] border-cyan-500/10 rounded-[6rem] p-16 shadow-9xl flex flex-col group overflow-hidden relative min-h-[1100px] backdrop-blur-5xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.08),transparent)] pointer-events-none" />
              <CardHeader className="p-0 mb-16 border-b-8 border-white/5 pb-12 bg-cyan-950/20 rounded-t-[5rem] px-16 py-10 flex flex-row justify-between items-center text-right">
                 <Badge className="bg-emerald-600/30 text-emerald-400 border-[10px] border-emerald-500/40 px-16 py-8 rounded-full font-black text-5xl animate-pulse shadow-9xl uppercase tracking-[0.4em] italic order-last md:order-none">HIVE_LOCKED</Badge>
                 <CardTitle className="text-5xl md:text-[12rem] text-white flex items-center gap-16 font-black uppercase italic gold-glow px-10 leading-none">
                    Workflow Feed <Terminal className="size-24 md:size-48 text-cyan-400 animate-pulse" />
                 </CardTitle>
              </CardHeader>

              <CardContent className="p-12 flex-1 overflow-y-auto scrollbar-hide space-y-20 relative z-10 text-right">
                 {result ? (
                    <div className="space-y-20 animate-in fade-in zoom-in-95 duration-1000 flex-1 flex flex-col">
                        <div className="p-20 rounded-[6rem] bg-cyan-600/5 border-[12px] border-cyan-600/30 italic text-4xl md:text-[8rem] text-gray-100 leading-tight font-black shadow-inner relative group/brief overflow-hidden text-center flex flex-col justify-center min-h-[450px]">
                            <div className="absolute inset-0 bg-cyan-600/5 opacity-5 animate-pulse pointer-events-none" />
                            "{result.commanderBrief}"
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                            <Card className="bg-black/95 border-8 border-white/5 p-12 md:p-16 rounded-[4rem] shadow-9xl relative group/vault overflow-hidden h-full flex flex-col">
                                <h5 className="text-3xl font-black text-cyan-400 uppercase tracking-[1.5em] mb-16 border-b-8 border-cyan-500/20 pb-10 flex items-center gap-12 gold-glow justify-end">Recalled DNA <History className="size-14 animate-neural" /></h5>
                                <div className="text-xl md:text-3xl text-cyan-400 italic font-black leading-snug flex-1 text-left whitespace-pre-wrap">
                                    {result.recalledAmmunition?.map((dna: string, i: number) => (
                                        <div key={i} className="mb-4">{" >>> "} {dna}</div>
                                    ))}
                                </div>
                            </Card>
                            <Card className="bg-black/95 border-8 border-white/5 p-12 md:p-16 rounded-[4rem] shadow-9xl h-full flex flex-col overflow-hidden">
                                <h5 className="text-3xl font-black text-emerald-500 uppercase tracking-[1.5em] mb-10 border-b-8 border-emerald-500/20 pb-10 flex items-center gap-12 justify-end">Consensus Status <ShieldCheck className="size-14" /></h5>
                                <div className="p-8 bg-black/80 rounded-[3rem] border-4 border-emerald-500/20 text-emerald-400 font-code text-xl md:text-2xl overflow-y-auto scrollbar-hide text-left flex-1">
                                    <pre className="whitespace-pre-wrap">
                                        {typeof result.hiveConsensus === 'string' ? result.hiveConsensus : JSON.stringify(result.hiveConsensus, null, 2)}
                                    </pre>
                                </div>
                            </Card>
                        </div>
                    </div>
                 ) : (
                   <div className="h-full flex flex-col items-center justify-center text-center opacity-10 gap-24 py-80">
                      <div className="relative group/lock">
                        <RotateCw className="size-64 md:size-[50rem] animate-spin-slow text-cyan-500 group-hover:scale-110 transition-transform duration-[12000ms]" />
                        <Skull className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-24 md:size-64 text-cyan-400/40 animate-neural" />
                        <div className="absolute -inset-40 border-[80px] border-dashed border-cyan-500/5 rounded-full animate-reverse-spin opacity-20" />
                      </div>
                      <h3 className="text-8xl md:text-[22rem] font-black uppercase tracking-[2.5em] text-white italic gold-glow leading-none">Hive Standby</h3>
                      <p className="text-4xl md:text-[10rem] font-bold italic text-gray-500 uppercase tracking-widest max-w-[140rem]">The Overmind is fusing 4,343 n8n scenarios with semantic memory v90.0.</p>
                   </div>
                 )}
              </CardContent>
              <div className="p-16 border-t-8 border-white/5 mt-auto flex justify-between items-center opacity-35 text-[20px] font-black uppercase tracking-[8em] italic">
                <span>HIVE_AUTOMATION_v90_AL_GHAZALI_ROOT</span>
                <div className="flex gap-16">
                    <Fingerprint className="size-24 text-cyan-400 animate-pulse" />
                    <Atom className="size-24 animate-spin-slow text-cyan-400" />
                </div>
              </div>
           </Card>
        </div>
      </main>
    </div>
  )
}
