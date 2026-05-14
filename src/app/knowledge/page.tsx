"use client"

import * as React from "react"
import { SidebarNav } from "@/components/platform/sidebar-nav"
import { 
  Database, 
  Search, 
  Loader2, 
  Skull, 
  Crown, 
  Binary, 
  Target, 
  BrainCircuit, 
  Sparkles, 
  RefreshCcw, 
  Eye, 
  History, 
  TrendingUp, 
  Fingerprint, 
  ChevronRight, 
  Boxes, 
  Atom, 
  Infinity as InfinityIcon, 
  Library, 
  Dna, 
  Network, 
  ShieldCheck, 
  LayoutGrid, 
  Globe, 
  Activity, 
  ArrowLeft, 
  RotateCw, 
  Radar,
  Castle
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { toast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"
import Link from "next/link"

/**
 * @fileOverview القبو الجيني v80.0 - MEMPALACE: ULTRA v3.0 FINAL
 */
export default function KnowledgePage() {
  const [query, setQuery] = React.useState("")
  const [loading, setLoading] = React.useState(false)
  const [report, setReport] = React.useState<any>(null)
  const [mounted, setMounted] = React.useState(false)
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

  const handleRecall = async () => {
    if (!query.trim()) return; setLoading(true); setReport(null)
    toast({ title: "Entering MemPalace v3.0", description: "Executing semantic recall with 96.6% accuracy..." })
    try {
      const response = await fetch('/api/execute', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ type: 'smart_route', target: `recall memory: ${query}` }) })
      const data = await response.json()
      setReport({ content: `[SEMANTIC_RECALL] Status: DNA_MATERIALIZED\nRecalled DNA Fragment:\n${JSON.stringify(data.output, null, 2)}` });
      toast({ title: "Memory Materialized", description: "Innate consensus reached." })
    } finally { setLoading(false) }
  }

  if (!mounted) return null;

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/40 relative overflow-x-hidden scanline-effect font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-80 p-4 md:p-8 lg:p-12 relative overflow-y-auto min-h-screen scrollbar-hide flex flex-col z-10 text-right">
        <div className="dna-stream-bg" style={{ '--x': `${mousePos.x}px`, '--y': `${mousePos.y}px` } as any} />
        
        <header className="sovereign-header flex flex-col md:flex-row items-center gap-12 justify-center md:justify-end text-center md:text-right">
          <div className="size-24 md:size-48 bg-black border-4 border-primary flex items-center justify-center shadow-[0_0_200px_rgba(251,191,36,0.8)] relative group shrink-0 rounded-[3.5rem] transition-all duration-1000 rotate-2 hover:rotate-0 hierarchical-shadow">
            <Castle className="size-12 md:size-24 text-primary animate-neural gold-glow" />
            <div className="absolute -inset-10 border-4 border-primary/20 rounded-full animate-spin-slow opacity-30" />
          </div>
          <div className="flex-1 text-right">
              <div className="flex flex-wrap justify-center md:justify-end items-center gap-6 mb-6">
                <Badge className="bg-primary text-black border-none px-12 py-3 text-[18px] md:text-[24px] font-black tracking-[1em] shadow-9xl italic uppercase">MEMPALACE v3.0</Badge>
                <div className="flex items-center gap-4 text-[14px] font-black uppercase tracking-widest text-emerald-500 animate-pulse"><InfinityIcon className="size-6 shadow-lg" /> RECALL_ACCURACY: 96.6%</div>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-[12rem] font-headline font-bold text-white tracking-tighter italic uppercase gold-glow leading-none">Innate <span className="text-primary">Palace</span></h1>
              <p className="text-sm md:text-xl lg:text-4xl text-muted-foreground mt-10 italic max-w-7xl leading-relaxed uppercase font-medium opacity-95 drop-shadow-3xl ml-auto">
                "سيدي القائد <span className="text-white font-black underline decoration-primary decoration-[12px] underline-offset-[28px] shadow-9xl italic uppercase tracking-widest">المعتصم بالله</span>، قصر الذاكرة v3.0 يصهر تجارب الماضي في قرارات الحاضر؛ نحن لا ننسى هجوماً أبداً."
              </p>
              <div className="flex justify-center md:justify-end gap-6 mt-12">
                <Button asChild variant="outline" className="h-16 px-10 rounded-full border-4 border-white/10 bg-white/5 text-white font-black uppercase italic tracking-widest hover:bg-primary hover:text-black transition-all shadow-2xl"><Link href="/"><ArrowLeft className="size-6 mr-3" /> العودة</Link></Button>
              </div>
          </div>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-12 relative z-10 pb-48 flex-1 text-right">
           <div className="xl:col-span-1 space-y-12">
              <Card className="sovereign-card group text-center">
                 <CardHeader className="p-0 mb-10 border-b-4 border-primary/10 pb-10 bg-primary/10 rounded-t-[3.5rem] px-10 py-6 text-center"><CardTitle className="text-2xl md:text-4xl text-primary flex items-center justify-center gap-10 font-black uppercase italic gold-glow leading-none"><History className="size-12 animate-neural" /> Semantic Recall</CardTitle></CardHeader>
                 <CardContent className="p-0 space-y-12 text-right"><div className="space-y-6 text-right"><label className="text-[14px] font-black text-primary uppercase tracking-[1em] px-10 italic flex items-center gap-6 justify-end"><Network className="size-8" /> Query Context</label><Input value={query} onChange={(e) => setQuery(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleRecall()} placeholder="Recall past strike DNA..." className="bg-black border-8 border-primary/20 h-24 md:h-28 rounded-[2.5rem] text-xl md:text-3xl italic px-10 focus:border-primary shadow-inner text-white font-black text-left" /></div><Button onClick={handleRecall} disabled={loading || !query} className="w-full h-32 md:h-36 bg-primary hover:bg-white text-black font-black uppercase tracking-[1.2em] rounded-[4rem] shadow-9xl active:scale-95 transition-all text-2xl md:text-3xl border-[12px] border-black/30 group italic">{loading ? <Loader2 className="size-16 animate-spin" /> : <RotateCw className="size-16 mr-8 group-hover:rotate-180 transition-transform" />} RECALL_DNA</Button></CardContent>
              </Card>
           </div>
           <Card className="xl:col-span-3 sovereign-card flex flex-col group min-h-[1100px]">
              <CardHeader className="p-0 mb-16 border-b-8 border-white/5 pb-12 bg-primary/10 rounded-t-[5rem] px-16 py-10 flex flex-row justify-between items-center text-right"><Badge className="bg-emerald-600/30 text-emerald-500 border-[10px] border-emerald-500/40 px-16 py-8 rounded-full font-black text-5xl animate-pulse shadow-9xl uppercase tracking-[0.4em] italic order-last md:order-none">PALACE_LOCKED</Badge><CardTitle className="text-5xl md:text-[12rem] text-white flex items-center gap-16 font-black uppercase italic gold-glow px-10 leading-none">Memory Feed <History className="size-24 md:size-48 text-primary animate-pulse" /></CardTitle></CardHeader>
              <CardContent className="p-12 flex-1 flex flex-col space-y-12 relative z-10 text-right">{report ? (<div className="flex-1 bg-black/98 p-16 rounded-[6rem] border-8 border-white/5 font-code text-2xl md:text-5xl leading-tight italic text-gray-100 whitespace-pre-wrap overflow-y-auto scrollbar-hide shadow-inner selection:bg-primary text-left relative"><div className="mb-12 flex items-center justify-between border-b-4 border-white/5 pb-8 px-10 text-right"><Badge className="bg-primary/10 text-primary border-none font-black italic text-2xl px-8 py-2 rounded-full">v80.0</Badge><span className="text-emerald-500 font-black uppercase tracking-[0.8em] italic text-3xl md:text-5xl gold-glow flex items-center gap-10">RECALL_SUCCESS <Dna className="size-16 animate-neural" /></span></div><div className="p-8 bg-black/80 rounded-[3rem] border-4 border-white/5 leading-relaxed relative overflow-hidden"><pre className="whitespace-pre-wrap">{report.content}</pre></div></div>) : (<div className="h-full flex flex-col items-center justify-center text-center opacity-10 gap-24 py-60"><div className="relative group/pal"><InfinityIcon className="size-[30rem] md:size-[50rem] text-primary animate-spin-slow group-hover:scale-105 transition-transform duration-[6s]" /><Skull className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-24 md:size-64 text-primary/40 animate-neural" /></div><h3 className="text-8xl md:text-[22rem] font-black uppercase tracking-[2.5em] text-white italic gold-glow leading-none">MemPalace Idle</h3></div>)}</CardContent>
           </Card>
        </div>
      </main>
    </div>
  )
}
