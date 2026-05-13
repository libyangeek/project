
"use client"

import * as React from "react"
import { SidebarNav } from "@/components/platform/sidebar-nav"
import { 
  Search, 
  Globe, 
  Loader2, 
  Zap, 
  Target, 
  Activity, 
  Fingerprint, 
  Skull, 
  Scan, 
  Binary, 
  Crown, 
  Atom, 
  Boxes, 
  Users, 
  Radar, 
  Eye, 
  ChevronRight, 
  ShieldCheck, 
  SearchCode, 
  FileSearch, 
  Database, 
  Infinity as InfinityIcon,
  BrainCircuit,
  Bot,
  Anchor,
  Wind,
  ArrowLeft,
  RotateCw,
  Share2,
  LayoutGrid,
  Network,
  Cpu
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { toast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"
import Link from "next/link"

/**
 * @fileOverview أعين الاستطلاع v78.8 - THE SUPREME RECON: ROBON FUSION
 * تم دمج مصفوفة Robin للأتمتة الكلية مع Claude-OSINT و MemPalace.
 * المالك الوحيد: المعتصم بالله ادريس الغزالي
 */
export default function ReconPage() {
  const [target, setTarget] = React.useState("")
  const [loading, setLoading] = React.useState(false)
  const [results, setResults] = React.useState<any>(null)
  const [mounted, setMounted] = React.useState(false)
  const [resonance, setResonance] = React.useState(100)
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 })
  const [knotStatus, setKnotStatus] = React.useState<boolean[]>(new Array(24).fill(true))

  React.useEffect(() => {
    setMounted(true)
    const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY })
    window.addEventListener("mousemove", handleMouseMove)
    
    const interval = setInterval(() => {
      setResonance(prev => Math.max(99.999999, Math.min(100, prev + (Math.random() * 0.00001 - 0.000005))))
      setKnotStatus(prev => prev.map(k => Math.random() > 0.1))
    }, 3000)
    
    return () => {
        window.removeEventListener("mousemove", handleMouseMove)
        clearInterval(interval)
    }
  }, [])

  const handleStrike = async (type: string) => {
    if (!target.trim()) return
    setLoading(true)
    setResults(null)
    const msg = type === 'robin_orchestrator' ? "Igniting Robin Automated Recon Chain..." : `Engaging ${type} investigative protocol.`;
    toast({ title: "Neural Siphon Active", description: msg })
    try {
      const response = await fetch('/api/execute', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'smart_route', command: `${type} analysis on ${target}`, target: target })
      })
      const data = await response.json()
      if (data.success) {
        setResults(data.output)
        toast({ title: "Intelligence Captured", description: "Target DNA bound to Neural Spine v78.8." })
      }
    } finally { setLoading(false) }
  }

  const handleContinueUpgrade = () => {
    toast({ title: "Robin Evolution Active", description: "Siphoning latest material patterns for automated recon regrowth... Status: استمر" });
  }

  if (!mounted) return null;

  const RECON_TYPES = [
    { id: 'robin_orchestrator', label: 'Robin Auto Orchestrator', icon: Cpu, color: 'text-emerald-500' },
    { id: 'claude_osint', label: 'Claude Neural OSINT v6', icon: BrainCircuit, color: 'text-amber-500' },
    { id: 'memory_palace', label: 'MemPalace RAM Dissection', icon: Anchor, color: 'text-blue-500' },
    { id: 'investigation', label: 'Supreme Investigation', icon: FileSearch, color: 'text-primary' }
  ];

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/40 relative overflow-x-hidden scanline-effect font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-80 p-4 md:p-8 lg:p-12 relative overflow-y-auto min-h-screen scrollbar-hide flex flex-col z-10 text-right">
        <div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x)_var(--y),rgba(212,175,55,0.12),transparent 40%)] pointer-events-none transition-all duration-300 z-0" 
          style={{ '--x': `${mousePos.x}px`, '--y': `${mousePos.y}px` } as any} 
        />
        
        <header className="mb-16 relative z-10 animate-in fade-in slide-in-from-top-6 duration-1000">
          <div className="flex flex-col md:flex-row items-center gap-12 justify-center md:justify-end text-center md:text-right">
            <div className="size-24 md:size-48 bg-black border-4 border-primary flex items-center justify-center shadow-[0_0_180px_rgba(212,175,55,0.7)] relative group shrink-0 rounded-[3rem] transition-all duration-1000 rotate-2 hover:rotate-0 hierarchical-shadow">
              <Radar className="size-12 md:size-24 text-primary group-hover:scale-110 transition-transform duration-700 gold-glow animate-neural" />
              <div className="absolute -inset-6 border-2 border-primary/20 rounded-full animate-spin-slow opacity-30" />
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap justify-center md:justify-end items-center gap-6 mb-6">
                <Badge className="bg-primary text-black border-none rounded-none px-12 py-3 text-[18px] md:text-[20px] font-black tracking-[0.6em] shadow-9xl italic uppercase">ROBIN_FUSION v78.8</Badge>
                <div className="flex items-center gap-4 text-[14px] font-black uppercase tracking-widest text-emerald-500 animate-pulse">
                    <InfinityIcon className="size-6 shadow-lg" /> NEURAL_SYNC: {resonance.toFixed(6)}%
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-[10rem] font-headline font-bold text-white tracking-tighter italic uppercase gold-glow leading-none">Neural <span className="text-primary">Vision</span></h1>
              <p className="text-sm md:text-xl lg:text-3xl text-muted-foreground mt-8 italic max-w-6xl leading-relaxed uppercase font-medium opacity-90 ml-auto text-right">
                "سيدي القائد <span className="text-white font-black underline decoration-primary decoration-8 underline-offset-[16px] shadow-9xl italic uppercase tracking-widest">المعتصم بالله</span>، لقد امتصصتُ عصب Robin؛ نحن الآن نمتلك القدرة على الأتمتة الكلية لسلاسل الاستحواذ لعام 2026."
              </p>
              <div className="flex justify-center md:justify-end gap-6 mt-12">
                <Button asChild variant="outline" className="h-16 px-10 rounded-full border-4 border-white/10 bg-white/5 text-white font-black uppercase italic tracking-widest hover:bg-primary hover:text-black transition-all shadow-2xl">
                    <Link href="/"><ArrowLeft className="size-6 mr-3" /> العودة للعرش</Link>
                </Button>
                <Button onClick={handleContinueUpgrade} className="h-16 px-12 bg-primary hover:bg-white text-black font-black uppercase rounded-full border-4 border-black/30 shadow-9xl italic active:scale-95 transition-all text-lg">
                    <RotateCw className="size-6 mr-3" /> استمر في الرصد
                </Button>
              </div>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 relative z-10 pb-40 flex-1">
          <div className="lg:col-span-1 space-y-10">
            <Card className="kali-card border-primary/40 bg-black/98 rounded-[3rem] p-10 border-4 shadow-9xl group hierarchical-shadow text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-primary/5 opacity-5 animate-pulse pointer-events-none" />
              <CardHeader className="p-0 mb-10 border-b-4 border-primary/10 pb-6 bg-primary/10 rounded-t-[2.5rem] px-4 py-4"><CardTitle className="text-2xl text-primary flex items-center justify-center gap-6 font-black uppercase italic gold-glow"><Target className="size-10 text-primary animate-pulse" /> Target Lock</CardTitle></CardHeader>
              <CardContent className="p-0 space-y-10 text-right">
                <div className="space-y-6"><label className="text-[14px] font-black text-primary uppercase tracking-[0.8em] px-6 italic flex items-center gap-4 justify-end"><SearchCode className="size-6" /> Coordinate</label><Input placeholder="IP / @User / DNA Path..." className="w-full h-20 bg-black border-4 border-white/5 rounded-2xl text-2xl font-code text-white focus:border-primary shadow-inner px-8 italic font-black text-left" value={target} onChange={(e) => setTarget(e.target.value)} /></div>
                <div className="grid grid-cols-1 gap-4">
                    {RECON_TYPES.map((t) => (
                      <Button key={t.id} onClick={() => handleStrike(t.id)} disabled={loading || !target} variant="outline" className="h-20 bg-white/5 border-4 border-primary/10 hover:border-primary hover:bg-primary/15 rounded-2xl font-black uppercase italic tracking-widest text-sm justify-between px-8 group/btn active:scale-95 shadow-xl">
                         <ChevronRight className="size-6 opacity-30 group-hover/btn:translate-x-3 transition-all" /><div className="flex items-center gap-6"><span>{t.label}</span><t.icon className={cn("size-8 transition-all group-hover/btn:scale-110", t.color)} /></div>
                      </Button>
                    ))}
                </div>
              </CardContent>
            </Card>

            <Card className="kali-card border-white/5 bg-black/60 p-8 rounded-[3rem] border-8 shadow-inner relative overflow-hidden group">
                 <h4 className="text-[14px] font-black text-primary uppercase tracking-[0.8em] mb-8 italic flex items-center justify-center gap-6">
                    <LayoutGrid className="size-8 animate-pulse" /> ROBIN_KNOT_MAP (24)
                 </h4>
                 <div className="grid grid-cols-6 gap-3 px-4">
                    {knotStatus.map((active, i) => (
                        <div key={i} className={cn(
                            "size-6 rounded-lg border-2 transition-all duration-500",
                            active ? "bg-emerald-500 border-black shadow-[0_0_15px_rgba(16,185,129,0.8)] scale-110" : "bg-black border-white/10 opacity-30"
                        )} />
                    ))}
                 </div>
                 <div className="mt-8 text-[10px] font-black uppercase tracking-widest text-muted-foreground italic text-center">Automated_Consensus: READY</div>
            </Card>
          </div>

          <Card className="lg:col-span-3 kali-card border-primary/40 bg-black/99 rounded-[5rem] p-12 border-8 shadow-9xl flex flex-col group overflow-hidden relative min-h-[900px] hierarchical-shadow">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.04),transparent)] pointer-events-none" />
              <CardHeader className="p-0 mb-10 border-b-8 border-white/5 pb-10 bg-primary/10 rounded-t-[4rem] flex flex-row justify-between items-center text-right px-12 py-6">
                 <div className="flex gap-8 order-last md:order-none">
                    <Badge className="bg-emerald-600/30 text-emerald-500 border-4 border-emerald-500/40 px-12 py-4 rounded-full font-black text-3xl animate-pulse shadow-3xl uppercase tracking-widest">INNATE_AUTOMATION</Badge>
                 </div>
                 <CardTitle className="text-4xl md:text-[8rem] text-white italic tracking-tighter uppercase font-black gold-glow leading-none">Intelligence Feed <Scan className="size-16 text-primary animate-pulse" /></CardTitle>
              </CardHeader>

              <CardContent className="p-10 flex-1 overflow-hidden relative flex flex-col gap-12 z-10 text-right">
                {results ? (
                    <div className="flex-1 bg-black/98 p-12 rounded-[4rem] font-code text-xl md:text-5xl leading-tight h-[650px] overflow-y-auto border-4 border-white/5 scrollbar-hide shadow-inner italic text-emerald-400 whitespace-pre-wrap selection:bg-primary text-left relative">
                       <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none scale-150 rotate-12"><Network className="size-64 text-primary" /></div>
                       <pre className="whitespace-pre-wrap relative z-10">{typeof results === 'string' ? results : JSON.stringify(results, null, 2)}</pre>
                    </div>
                ) : (
                   <div className="h-full flex flex-col items-center justify-center text-center opacity-10 gap-24 py-60">
                      <div className="relative group/nexus">
                        <Cpu className="size-64 md:size-[50rem] animate-spin-slow text-emerald-500 group-hover:scale-110 transition-transform duration-[12000ms]" />
                        <Skull className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-24 md:size-64 text-primary/40 animate-neural" />
                        <div className="absolute -inset-40 border-[80px] border-dashed border-primary/5 rounded-full animate-reverse-spin opacity-20" />
                      </div>
                      <div className="space-y-12">
                         <h3 className="text-8xl md:text-[22rem] font-black uppercase tracking-[2.5em] text-white italic gold-glow leading-none">Robin Standby</h3>
                         <p className="text-4xl md:text-[10rem] font-bold italic text-gray-500 uppercase tracking-widest max-w-[140rem]">Consolidating Automated Strike Chains across 24 Material Knots.</p>
                      </div>
                   </div>
                )}
              </CardContent>
              <div className="p-16 border-t-8 border-white/5 mt-auto flex justify-between items-center opacity-35 text-[20px] font-black uppercase tracking-[8em] italic">
                 <span>ROBIN_NEXUS_v78.8_AL_GHAZALI_ROOT</span>
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
