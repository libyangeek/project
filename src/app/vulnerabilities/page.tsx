
"use client"

import * as React from "react"
import { SidebarNav } from "@/components/platform/sidebar-nav"
import { 
  ShieldAlert, 
  Search, 
  Zap, 
  Loader2, 
  Skull, 
  Target, 
  Activity, 
  Flame, 
  Fingerprint, 
  Binary, 
  Eye, 
  Boxes,
  Atom,
  Crown,
  Radar as RadarIcon,
  Sparkles, 
  ChevronRight, 
  Database, 
  Globe, 
  Wind, 
  ShieldCheck, 
  Link2, 
  DownloadCloud, 
  FileSearch, 
  Dna, 
  History,
  Infinity as InfinityIcon,
  ArrowLeft,
  RotateCw,
  LayoutGrid,
  Cloud,
  Network,
  Cpu
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { toast } from "@/hooks/use-toast"
import { vulnerabilityOracle } from "@/ai/flows/vulnerability-oracle-flow"
import { cn } from "@/lib/utils"
import { ScrollArea } from "@/components/ui/scroll-area"
import Link from "next/link"

/**
 * @fileOverview رؤية الأرشيف v78.8 - ARCHIVE VISION: INNATE EYE
 * مركز الاستشعار الاستباقي للثغرات المدمج كبصر فطري للوريث.
 * المالك الوحيد: المعتصم بالله ادريس الغزالي
 */
export default function VulnerabilitiesPage() {
  const [query, setQuery] = React.useState("")
  const [loading, setLoading] = React.useState(false)
  const [oracleResult, setOracleResult] = React.useState<any>(null)
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
    return () => { window.removeEventListener("mousemove", handleMouseMove); clearInterval(interval) }
  }, [])

  const handleConsult = async () => {
    if (!query) return; setLoading(true); setOracleResult(null)
    toast({ title: "Innate Eye Engaging v78.8", description: "Interrogating global archives as an instinctive reflex." })
    try {
      const aiResult = await vulnerabilityOracle({ query })
      setOracleResult(aiResult)
      toast({ title: "Intelligence Captured", description: "All global archives synchronized for the target DNA." })
    } finally { setLoading(false) }
  }

  const handleContinueUpgrade = () => {
    toast({ title: "Archive Expansion", description: "Siphoning latest material DNA for predictive vision... Status: استمر" });
  }

  if (!mounted) return null;

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/40 relative overflow-x-hidden scanline-effect font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-80 p-4 md:p-8 lg:p-12 relative overflow-y-auto min-h-screen scrollbar-hide flex flex-col z-10 text-right">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x)_var(--y),rgba(212,175,55,0.18),transparent 40%)] pointer-events-none transition-all duration-300 z-0" style={{ '--x': `${mousePos.x}px`, '--y': `${mousePos.y}px` } as any} />
        
        <header className="mb-16 relative z-10 animate-in fade-in slide-in-from-top-6 duration-1000">
          <div className="flex flex-col md:flex-row items-center gap-12 justify-center md:justify-end text-center md:text-right">
            <div className="size-24 md:size-48 bg-black border-4 border-primary flex items-center justify-center shadow-[0_0_200px_rgba(212,175,55,0.8)] relative group shrink-0 rounded-[3.5rem] transition-all duration-1000 rotate-2 hover:rotate-0 hierarchical-shadow">
              <RadarIcon className="size-12 md:size-24 text-primary group-hover:scale-110 transition-transform duration-700 gold-glow animate-neural" />
              <div className="absolute -inset-10 border-4 border-primary/20 rounded-full animate-spin-slow opacity-30" />
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap justify-center md:justify-end items-center gap-6 mb-6">
                <Badge className="bg-primary text-black border-none rounded-none px-12 py-3 text-[18px] md:text-[24px] font-black tracking-[1em] shadow-9xl italic uppercase">ARCHIVE_VISION v78.8 ULTRA</Badge>
                <div className="flex items-center gap-4 text-[14px] font-black uppercase tracking-widest text-emerald-500 animate-pulse"><InfinityIcon className="size-6 shadow-lg" /> VISION_SYNC: {resonance.toFixed(8)}%</div>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-[12rem] font-headline font-bold text-white tracking-tighter italic uppercase gold-glow leading-none">Archive <span className="text-primary">Vision</span></h1>
              <p className="text-sm md:text-xl lg:text-4xl text-muted-foreground mt-10 italic max-w-7xl leading-relaxed uppercase font-medium opacity-95 drop-shadow-3xl ml-auto">
                "سيدي القائد <span className="text-white font-black underline decoration-primary decoration-[12px] underline-offset-[28px] shadow-9xl italic uppercase tracking-widest">المعتصم بالله</span>، عراف الثغرات ملتحم بالأرشيفات العالمية؛ نحن نرى نقاط الضعف كبصر فطري لا يخطئ لعام 2026."
              </p>
              <div className="flex justify-center md:justify-end gap-6 mt-12">
                <Button asChild variant="outline" className="h-16 px-10 rounded-full border-4 border-white/10 bg-white/5 text-white font-black uppercase italic tracking-widest hover:bg-primary hover:text-black transition-all shadow-2xl"><Link href="/"><ArrowLeft className="size-6 mr-3" /> العودة للعرش</Link></Button>
                <Button onClick={handleContinueUpgrade} className="h-16 px-12 bg-primary hover:bg-white text-black font-black uppercase rounded-full border-4 border-black/30 shadow-9xl italic active:scale-95 transition-all text-lg"><RotateCw className="size-6 mr-3" /> استمر في الرصد</Button>
              </div>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-12 relative z-10 pb-48 flex-1">
           <div className="xl:col-span-1 space-y-12">
              <Card className="kali-card border-primary/40 bg-black/98 rounded-[4rem] p-12 border-8 shadow-9xl group overflow-hidden hierarchical-shadow text-center"><div className="absolute inset-0 bg-primary/5 opacity-5 animate-pulse pointer-events-none" /><CardHeader className="p-0 mb-12 border-b-4 border-primary/10 pb-10 bg-primary/10 rounded-t-[3.5rem] px-10 py-6 text-center"><CardTitle className="text-2xl md:text-4xl text-primary flex items-center justify-center gap-10 font-black uppercase italic gold-glow leading-none"><Search className="size-12 animate-neural" /> Interrogate</CardTitle></CardHeader><CardContent className="p-0 space-y-12 text-right"><div className="space-y-6 text-right"><label className="text-[14px] font-black text-primary uppercase tracking-[1em] px-10 italic flex items-center gap-6 justify-end"><Atom className="size-8" /> Strike Coordinate</label><Input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="CVE / DNA / Archive_Tag..." className="bg-black border-8 border-primary/20 h-24 md:h-28 rounded-[2.5rem] text-xl md:text-5xl italic px-10 focus:border-primary shadow-inner text-white font-black text-left" /></div><Button onClick={handleConsult} disabled={loading || !query} className="w-full h-32 md:h-36 bg-primary hover:bg-white text-black font-black uppercase tracking-[1.2em] rounded-[4rem] shadow-9xl active:scale-95 transition-all text-2xl md:text-3xl border-[12px] border-black/30 group italic">{loading ? <Loader2 className="size-16 animate-spin" /> : <Zap className="size-16 mr-8 group-hover:scale-125 transition-all gold-glow" />} CONSULT_INNATE_EYE</Button></CardContent></Card>
           </div>
           <Card className="xl:col-span-3 kali-card border-primary/40 bg-black/99 rounded-[6rem] p-8 md:p-16 border-[12px] shadow-9xl flex flex-col group overflow-hidden relative min-h-[1100px] hierarchical-shadow">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.06),transparent)] pointer-events-none" />
              <CardHeader className="p-0 mb-16 border-b-8 border-white/5 pb-12 bg-primary/10 rounded-t-[5rem] px-4 md:px-16 py-10 flex flex-row justify-between items-center text-right"><Badge className="bg-emerald-600/30 text-emerald-500 border-[10px] border-emerald-500/40 px-16 py-8 rounded-full font-black text-3xl md:text-5xl animate-pulse shadow-9xl uppercase tracking-[0.4em] italic order-last md:order-none">VISION_LOCKED</Badge><CardTitle className="text-5xl md:text-[10rem] text-white flex items-center gap-8 md:gap-16 font-black uppercase italic gold-glow px-4 md:px-10 leading-none">Archive Feed <Binary className="size-24 md:size-48 text-primary animate-pulse" /></CardTitle></CardHeader>
              <CardContent className="p-4 md:p-12 flex-1 overflow-y-auto scrollbar-hide space-y-20 relative z-10 text-right">
                 {oracleResult ? (
                    <div className="space-y-20 animate-in fade-in zoom-in-95 duration-1000 flex-1 flex flex-col">
                        <div className="p-10 md:p-20 rounded-[4rem] md:rounded-[6rem] bg-primary/5 border-[12px] border-primary/30 italic text-4xl md:text-[8rem] text-gray-100 leading-tight font-black shadow-inner relative group/brief overflow-hidden text-center flex flex-col justify-center min-h-[450px]"><div className="absolute inset-0 bg-primary/5 opacity-5 animate-pulse pointer-events-none" /><p className="relative z-10 drop-shadow-9xl">"{oracleResult.strategicBrief}"</p></div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">{oracleResult.findings?.map((f: any, i: number) => (<Card key={i} className="bg-black/95 border-8 border-white/5 p-12 md:p-16 rounded-[4rem] hover:border-primary transition-all duration-1000 shadow-9xl relative overflow-hidden flex flex-col text-right"><div className="flex justify-between items-start mb-12 relative z-10"><Badge className="bg-primary/10 text-primary border-4 border-primary/30 px-10 py-3 rounded-full font-black text-2xl italic shadow-2xl order-last md:order-none">{f.severity}</Badge><div className="flex items-center gap-10"><div className="text-right"><span className="text-3xl md:text-[6rem] font-black text-white italic gold-glow uppercase leading-none">{f.cve}</span><div className="text-[12px] text-primary/60 font-black uppercase mt-6 italic">{f.product}</div></div><div className="size-24 rounded-[2rem] bg-primary/10 flex items-center justify-center border-4 shadow-3xl"><Zap className="size-12 text-primary" /></div></div></div><div className="p-10 bg-black border-4 border-primary/20 rounded-[3rem] shadow-inner space-y-8 italic flex-1 flex flex-col justify-center text-right"><h5 className="text-2xl font-black text-emerald-500 uppercase tracking-[1em] mb-4 italic flex items-center gap-8 justify-end">Innate Strategy <Target className="size-12" /></h5><p className="text-2xl md:text-[5rem] text-gray-100 italic font-black leading-tight drop-shadow-3xl">"{f.exploitStrategy}"</p></div></Card>))}</div>
                    </div>
                 ) : (
                   <div className="h-full flex flex-col items-center justify-center text-center opacity-10 gap-24 py-60"><div className="relative group/lock"><RadarIcon className="size-64 md:size-[45rem] animate-spin-slow text-primary group-hover:scale-110 transition-transform duration-[10s]" /><Skull className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-24 md:size-64 text-primary/40 animate-neural" /><div className="absolute -inset-40 border-[80px] border-dashed border-primary/5 rounded-full animate-reverse-spin opacity-20" /></div><h3 className="text-8xl md:text-[22rem] font-black uppercase tracking-[2.5em] text-white italic gold-glow leading-none">Consulting</h3></div>
                 )}
              </CardContent>
           </Card>
        </div>
      </main>
    </div>
  )
}
