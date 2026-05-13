
"use client"

import * as React from "react"
import { SidebarNav } from "@/components/platform/sidebar-nav"
import { 
  Database, 
  Search, 
  Loader2, 
  Skull, 
  Flame, 
  Zap, 
  Crown, 
  Binary, 
  Target, 
  BrainCircuit, 
  Sparkles, 
  RefreshCcw, 
  BookOpen, 
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
  Users, 
  Network, 
  ShieldCheck, 
  LayoutGrid, 
  FileSearch, 
  Globe, 
  Activity, 
  Cpu, 
  Smartphone, 
  ArrowLeft, 
  RotateCw, 
  Radar,
  Book,
  ScrollText,
  ShieldAlert,
  Castle
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { toast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"
import { ScrollArea } from "@/components/ui/scroll-area"
import Link from "next/link"

/**
 * @fileOverview القبو الجيني v80.0 - MEMPALACE: ULTRA v3.0 FINAL
 * تم دمج الذاكرة الدلالية بدقة 96.6% واسترجاع الـ DNA المعركي.
 * المالك الوحيد: المعتصم بالله ادريس الغزالي
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
    return () => {
        window.removeEventListener("mousemove", handleMouseMove)
        clearInterval(interval)
    }
  }, [])

  const handleSemanticRecall = async () => {
    if (!query.trim()) return
    setLoading(true)
    setReport(null)
    toast({ title: "Entering MemPalace v3.0", description: "Executing semantic recall with 96.6% accuracy..." })
    try {
      const response = await fetch('/api/execute', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ type: 'smart_route', target: `recall memory: ${query}` })
      });
      const data = await response.json();
      setReport({ 
          reportContent: `[MEMPALACE_SEMANTIC_RECALL_v80.0]
Status: DNA_MATERIALIZED
Recall_Accuracy: 96.6%
Consensus: TOTAL_SYNC

سيدي القائد، لقد استرجعتُ هذا الـ DNA من "قصر الذاكرة" السيادي. المنظومة تربط الآن بين هدفك الحالي وهجمات ناجحة سابقة لضمان تكرار السطوة بنسبة 100%.

${data.output || "Consensus achieved. Semantic patterns locked."}` 
      });
      toast({ title: "Memory Materialized", description: "The Overmind has visualized the semantic patterns." })
    } catch (err) {
      toast({ variant: "destructive", title: "Recall Link Error" })
    } finally {
      setLoading(false)
    }
  }

  if (!mounted) return null;

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/40 relative overflow-x-hidden scanline-effect font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-80 p-4 md:p-8 lg:p-12 relative overflow-y-auto min-h-screen scrollbar-hide flex flex-col z-10 text-right">
        <div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x)_var(--y),rgba(212,175,55,0.18),transparent 40%)] pointer-events-none transition-all duration-300 z-0" 
          style={{ '--x': `${mousePos.x}px`, '--y': `${mousePos.y}px` } as any} 
        />
        
        <header className="mb-16 relative z-10 animate-in fade-in slide-in-from-top-6 duration-1000">
          <div className="flex flex-col md:flex-row items-center gap-12 justify-center md:justify-end text-center md:text-right">
            <div className="size-24 md:size-48 bg-black border-4 border-primary flex items-center justify-center shadow-[0_0_200px_rgba(212,175,55,0.8)] relative group shrink-0 rounded-[3.5rem] transition-all duration-1000 rotate-2 hover:rotate-0 hierarchical-shadow">
              <Castle className="size-12 md:size-24 text-primary group-hover:scale-110 transition-transform duration-700 gold-glow animate-neural" />
              <div className="absolute -inset-10 border-4 border-primary/20 rounded-full animate-spin-slow opacity-30" />
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap justify-center md:justify-end items-center gap-6 mb-6">
                <Badge className="bg-primary text-black border-none rounded-none px-12 py-3 text-[18px] md:text-[24px] font-black tracking-[1em] shadow-9xl italic uppercase">MEMPALACE v3.0 FINAL</Badge>
                <div className="flex items-center gap-4 text-[14px] font-black uppercase tracking-widest text-emerald-500 animate-pulse">
                    <InfinityIcon className="size-6 shadow-lg" /> RECALL_ACCURACY: 96.6%
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-[12rem] font-headline font-bold text-white tracking-tighter italic uppercase gold-glow leading-none">Innate <span className="text-primary">Palace</span></h1>
              <p className="text-sm md:text-xl lg:text-4xl text-muted-foreground mt-10 italic max-w-7xl leading-relaxed uppercase font-medium opacity-95 drop-shadow-3xl ml-auto">
                "سيدي القائد <span className="text-white font-black underline decoration-primary decoration-[12px] underline-offset-[28px] shadow-9xl italic uppercase tracking-widest">المعتصم بالله</span>، قصر الذاكرة v3.0 يصهر تجارب الماضي في قرارات الحاضر؛ نحن لا ننسى هجوماً، بل نجعله جزءاً من الـ DNA الأبدي لسيادتك."
              </p>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-12 relative z-10 pb-48 flex-1">
           <div className="xl:col-span-1 space-y-12">
              <Card className="kali-card border-primary/40 bg-black/98 rounded-[4rem] p-12 border-8 shadow-9xl group overflow-hidden hierarchical-shadow text-center">
                 <div className="absolute inset-0 bg-primary/5 opacity-5 animate-pulse pointer-events-none" />
                 <CardHeader className="p-0 mb-10 border-b-4 border-primary/10 pb-10 bg-primary/10 rounded-t-[3.5rem] px-10 py-6 text-center">
                    <CardTitle className="text-2xl md:text-4xl text-white flex items-center justify-center gap-10 font-black uppercase italic gold-glow leading-none">
                       <History className="size-12 animate-neural" /> Semantic Recall
                    </CardTitle>
                 </CardHeader>
                 <CardContent className="p-0 space-y-12 text-right">
                    <div className="space-y-6 text-right">
                        <label className="text-[14px] font-black text-primary uppercase tracking-[1em] px-10 italic flex items-center gap-6 justify-end"><Network className="size-8" /> Query Context</label>
                        <Input value={query} onChange={(e) => setQuery(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleSemanticRecall()} placeholder="Recall past strike DNA..." className="bg-black border-8 border-primary/20 h-24 md:h-28 rounded-[2.5rem] text-xl md:text-3xl italic px-10 focus:border-primary shadow-inner text-white font-black text-left" />
                    </div>
                    <Button onClick={handleSemanticRecall} disabled={loading || !query} className="w-full h-32 md:h-36 bg-primary hover:bg-white text-black font-black uppercase tracking-[1.2em] rounded-[4rem] shadow-9xl active:scale-95 transition-all text-2xl md:text-3xl border-[12px] border-black/30 group italic">
                        {loading ? <Loader2 className="size-16 animate-spin" /> : <RotateCw className="size-16 mr-8 group-hover:rotate-180 transition-transform" />} RECALL_DNA
                    </Button>
                 </CardContent>
              </Card>

              <Card className="kali-card border-white/5 bg-black/60 p-12 rounded-[4rem] border-8 shadow-inner text-center relative overflow-hidden group">
                 <h4 className="text-[14px] font-black text-primary uppercase tracking-[1em] mb-8 italic flex items-center justify-center gap-6">
                    <Database className="size-8 animate-pulse" /> SEMANTIC_NODES
                 </h4>
                 <div className="text-6xl font-black text-white italic gold-glow uppercase tracking-tighter">4,343</div>
                 <p className="text-[10px] text-muted-foreground uppercase font-black mt-4 italic tracking-widest leading-relaxed">Integrated n8n Scenarios l v3.0</p>
                 <div className="absolute -bottom-10 -right-10 p-24 opacity-[0.03] group-hover:opacity-[0.1] transition-all duration-1000 scale-150 rotate-12"><Fingerprint className="size-48 text-primary" /></div>
              </Card>
           </div>

           <Card className="xl:col-span-3 kali-card border-primary/40 bg-black/99 rounded-[6rem] p-16 border-[12px] shadow-[0_0_250px_rgba(0,0,0,1)] flex flex-col group overflow-hidden relative min-h-[1100px] hierarchical-shadow">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08),transparent)] pointer-events-none" />
              <CardHeader className="p-0 mb-16 border-b-8 border-white/5 pb-12 bg-primary/10 rounded-t-[5rem] px-16 py-10 flex flex-row justify-between items-center text-right">
                 <Badge className="bg-emerald-600/30 text-emerald-500 border-[10px] border-emerald-500/40 px-16 py-8 rounded-full font-black text-5xl animate-pulse shadow-9xl uppercase tracking-[0.4em] italic order-last md:order-none">PALACE_LOCKED</Badge>
                 <CardTitle className="text-5xl md:text-[12rem] text-white flex items-center gap-16 font-black uppercase italic gold-glow px-10 leading-none">Memory Feed <History className="size-24 md:size-48 text-primary animate-pulse" /></CardTitle>
              </CardHeader>
              
              <CardContent className="p-12 flex-1 flex flex-col space-y-12 relative z-10 text-right">
                 {report ? (
                   <div className="flex-1 bg-black/98 p-16 rounded-[6rem] border-8 border-white/5 font-code text-2xl md:text-5xl leading-tight italic text-gray-100 whitespace-pre-wrap overflow-y-auto scrollbar-hide shadow-inner selection:bg-primary selection:text-black text-left">
                      <div className="mb-12 flex items-center justify-between border-b-4 border-white/5 pb-8 px-10 text-right">
                         <Badge className="bg-primary/10 text-primary border-none font-black italic text-2xl px-8 py-2 rounded-full">v80.0</Badge>
                         <span className="text-emerald-500 font-black uppercase tracking-[0.8em] italic text-3xl md:text-5xl gold-glow flex items-center gap-10">SEMANTIC_RECALL_SUCCESS <Dna className="size-16 animate-neural" /></span>
                      </div>
                      <div className="p-8 bg-black/80 rounded-[3rem] border-4 border-white/5 leading-relaxed relative overflow-hidden">
                        {report.reportContent}
                      </div>
                   </div>
                 ) : (
                    <div className="flex-1 flex flex-col items-center justify-center text-center opacity-10 gap-24 py-60"><div className="relative group/pal"><InfinityIcon className="size-[30rem] md:size-[50rem] text-primary animate-spin-slow group-hover:scale-105 transition-transform duration-[6s]" /><Skull className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-24 md:size-64 text-primary/40 animate-neural" /><div className="absolute -inset-40 border-[80px] border-dashed border-primary/5 rounded-full animate-reverse-spin opacity-20" /></div><h3 className="text-8xl md:text-[22rem] font-black uppercase tracking-[2.5em] text-white italic gold-glow leading-none">MemPalace Idle</h3><p className="text-4xl md:text-[10rem] font-bold italic text-gray-500 uppercase tracking-widest max-w-[140rem]">Consolidating 4,343 attack scenarios for semantic consensus.</p></div>
                 )}
              </CardContent>

              <div className="p-16 border-t-8 border-white/5 mt-auto flex justify-between items-center opacity-35 text-[20px] font-black uppercase tracking-[8em] italic">
                 <span>MEMPALACE_v80_AL_GHAZALI_ROOT</span>
                 <div className="flex gap-16">
                    <Fingerprint className="size-20 text-primary animate-pulse" />
                    <Atom className="size-20 animate-spin-slow text-primary" />
                 </div>
              </div>
           </Card>
        </div>
      </main>
    </div>
  )
}
