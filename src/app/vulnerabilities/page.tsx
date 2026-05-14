
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
 * @fileOverview رؤية الأرشيف v80.0 - ARCHIVE VISION: INNATE EYE
 * مركز الاستشعار الاستباقي للثغرات المدمج كبصر فطري للوريث.
 * تم ربطه بمصفوفة التحديث التلقائي لضمان سحب أحدث ثغرات 2026.
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
    toast({ title: "Innate Eye Engaging v80.0", description: "Interrogating material archives and global 0-day feeds." })
    try {
      const aiResult = await vulnerabilityOracle({ query })
      setOracleResult(aiResult)
      toast({ title: "Intelligence Serialized", description: "All archives reporting absolute target transparency." })
    } finally { setLoading(false) }
  }

  const handleSelfUpdate = async () => {
    toast({ title: "Triggering Evolution Pulse", description: "Siphoning latest material DNA for vulnerability matrix regrowth..." });
    try {
        await fetch('/api/execute', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ type: 'smart_route', target: 'update vulnerabilities' })
        })
        toast({ title: "Matrix Evolved", description: "Latest KEV and 0-day research bound to Archive Vision." })
    } catch (e) {
        console.error('Self Update Trigger Failure:', e);
    }
  }

  if (!mounted) return null;

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/40 relative overflow-x-hidden scanline-effect font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-80 p-4 md:p-8 lg:p-12 relative overflow-y-auto min-h-screen scrollbar-hide flex flex-col z-10 text-right">
        <div className="dna-stream-bg" style={{ '--x': `${mousePos.x}px`, '--y': `${mousePos.y}px` } as any} />
        
        <header className="sovereign-header flex flex-col md:flex-row items-center gap-12 justify-center md:justify-end text-center md:text-right">
          <div className="size-24 md:size-48 bg-black border-4 border-primary flex items-center justify-center shadow-glow relative group shrink-0 rounded-[3.5rem] transition-all duration-1000 rotate-2 hover:rotate-0 hierarchical-shadow">
            <RadarIcon className="size-12 md:size-24 text-primary group-hover:scale-110 transition-transform duration-700 gold-glow animate-neural" />
            <div className="absolute -inset-10 border-4 border-primary/20 rounded-full animate-spin-slow opacity-30" />
          </div>
          <div className="flex-1 text-right">
              <div className="flex flex-wrap justify-center md:justify-end items-center gap-6 mb-6">
                <Badge className="bg-primary text-black border-none rounded-none px-12 py-3 text-[18px] md:text-[24px] font-black tracking-[1.1em] shadow-9xl italic uppercase">ARCHIVE_VISION v80.0</Badge>
                <div className="flex items-center gap-4 text-[14px] font-black uppercase tracking-widest text-emerald-500 animate-pulse"><InfinityIcon className="size-6 shadow-lg" /> VISION_RESONANCE: {resonance.toFixed(8)}%</div>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-[12rem] font-headline font-bold text-white tracking-tighter italic uppercase gold-glow leading-none">Archive <span className="text-primary">Vision</span></h1>
              <p className="text-sm md:text-xl lg:text-4xl text-muted-foreground mt-10 italic max-w-7xl leading-relaxed uppercase font-medium opacity-95 drop-shadow-3xl ml-auto">
                "سيدي القائد <span className="text-white font-black underline decoration-primary decoration-[12px] underline-offset-[28px] shadow-9xl italic uppercase tracking-widest">المعتصم بالله</span>، عراف الثغرات ملتحم بالأرشيفات العالمية لعام 2026؛ نحن نرى نقاط الضعف كبصر فطري لا يخطئ."
              </p>
              <div className="flex justify-center md:justify-end gap-6 mt-12">
                <Button asChild variant="outline" className="h-16 px-10 rounded-full border-4 border-white/10 bg-white/5 text-white font-black uppercase italic tracking-widest hover:bg-primary hover:text-black transition-all shadow-2xl"><Link href="/"><ArrowLeft className="size-6 mr-3" /> العودة</Link></Button>
                <Button onClick={handleSelfUpdate} className="h-16 px-12 bg-primary hover:bg-white text-black font-black uppercase rounded-full border-4 border-black/30 shadow-9xl italic active:scale-95 transition-all text-lg"><RotateCw className="size-6 mr-3" /> استنزاف الأرشيفات</Button>
              </div>
          </div>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-12 relative z-10 pb-48 flex-1 text-right">
           <div className="xl:col-span-1 space-y-12">
              <Card className="sovereign-card group text-center">
                 <CardHeader className="p-0 mb-10 border-b-4 border-primary/10 pb-10 bg-primary/10 rounded-t-[3.5rem] px-10 py-6 text-center"><CardTitle className="text-2xl md:text-4xl text-primary flex items-center justify-center gap-10 font-black uppercase italic gold-glow leading-none"><Search className="size-12 animate-neural" /> Interrogate</CardTitle></CardHeader>
                 <CardContent className="p-0 space-y-12 text-right">
                    <div className="space-y-6 text-right"><label className="text-[14px] font-black text-primary uppercase tracking-[1em] px-10 italic flex items-center gap-6 justify-end"><Atom className="size-8" /> Strike Coordinate</label><Input value={query} onChange={(e) => setQuery(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleConsult()} placeholder="CVE / DNA / Archive_Tag..." className="bg-black border-8 border-primary/20 h-24 md:h-28 rounded-[2.5rem] text-xl md:text-5xl italic px-10 focus:border-primary shadow-inner text-white font-black text-left" /></div>
                    <Button onClick={handleConsult} disabled={loading || !query} className="w-full h-36 bg-primary hover:bg-white text-black font-black uppercase tracking-[1.4em] rounded-[4rem] shadow-9xl active:scale-95 transition-all text-3xl border-[12px] border-black/30 group italic">{loading ? <Loader2 className="size-16 animate-spin" /> : <Zap className="size-16 mr-8 group-hover:scale-125 transition-all gold-glow" />} CONSULT_INNATE_EYE</Button>
                 </CardContent>
              </Card>
              
              <Card className="sovereign-card group text-right">
                 <h4 className="text-[14px] font-black text-primary uppercase tracking-[1em] mb-8 italic flex items-center justify-center gap-6">
                    <Database className="size-8 animate-pulse" /> VULN_MATRIX_v80
                 </h4>
                 <div className="text-4xl font-black text-white italic gold-glow uppercase tracking-widest text-center">OMNISCIENT</div>
                 <div className="absolute -bottom-10 -right-10 p-16 opacity-[0.03] group-hover:opacity-[0.1] transition-all duration-1000 scale-150 rotate-12"><Skull className="size-48 text-primary" /></div>
              </Card>
           </div>
           
           <Card className="xl:col-span-3 sovereign-card flex flex-col group min-h-[1100px]">
              <CardHeader className="p-0 mb-16 border-b-8 border-white/5 pb-12 bg-primary/10 rounded-t-[5rem] px-16 py-12 flex flex-row justify-between items-center text-right">
                 <Badge className="bg-emerald-600/30 text-emerald-500 border-[10px] border-emerald-500/40 px-16 py-8 rounded-full font-black text-3xl md:text-5xl animate-pulse shadow-9xl uppercase tracking-[0.4em] italic order-last md:order-none">VISION_LOCKED</Badge>
                 <CardTitle className="text-5xl md:text-[10rem] text-white flex items-center gap-16 font-black uppercase italic gold-glow px-10 leading-none">Archive Feed <Binary className="size-24 md:size-48 text-primary animate-pulse" /></CardTitle>
              </CardHeader>
              <CardContent className="p-4 md:p-12 flex-1 overflow-y-auto scrollbar-hide space-y-20 relative z-10 text-right">
                 {oracleResult ? (
                    <div className="space-y-20 animate-in fade-in zoom-in-95 duration-1000 flex-1 flex flex-col">
                        <div className="p-10 md:p-20 rounded-[4rem] md:rounded-[6rem] bg-primary/5 border-[12px] border-primary/30 italic text-4xl md:text-[8rem] text-gray-100 leading-tight font-black shadow-inner relative group/brief overflow-hidden text-center flex flex-col justify-center min-h-[450px]">
                            <div className="absolute inset-0 bg-primary/5 opacity-5 animate-pulse pointer-events-none" />
                            <p className="relative z-10 drop-shadow-9xl">"{oracleResult.strategicBrief}"</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                            {oracleResult.findings?.map((f: any, i: number) => (
                                <Card key={i} className="bg-black/95 border-8 border-white/5 p-12 md:p-16 rounded-[4rem] hover:border-primary transition-all duration-1000 shadow-9xl relative overflow-hidden flex flex-col text-right">
                                    <div className="flex justify-between items-start mb-12 relative z-10">
                                        <Badge className="bg-primary/10 text-primary border-4 border-primary/30 px-10 py-3 rounded-full font-black text-2xl italic shadow-2xl order-last md:order-none">{f.severity}</Badge>
                                        <div className="flex items-center gap-10">
                                            <div className="text-right">
                                                <span className="text-3xl md:text-[6rem] font-black text-white italic gold-glow uppercase leading-none">{f.cve}</span>
                                                <div className="text-[12px] text-primary/60 font-black uppercase mt-6 italic">{f.product}</div>
                                            </div>
                                            <div className="size-24 rounded-[2rem] bg-primary/10 flex items-center justify-center border-4 shadow-3xl"><Zap className="size-12 text-primary" /></div>
                                        </div>
                                    </div>
                                    <div className="p-10 bg-black border-4 border-primary/20 rounded-[3rem] shadow-inner space-y-8 italic flex-1 flex flex-col justify-center text-right">
                                        <h5 className="text-2xl font-black text-emerald-500 uppercase tracking-[1em] mb-4 italic flex items-center gap-8 justify-end">Innate Strategy <Target className="size-12" /></h5>
                                        <p className="text-2xl md:text-[5rem] text-gray-100 italic font-black leading-tight drop-shadow-3xl">"{f.exploitStrategy}"</p>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>
                 ) : (
                   <div className="h-full flex flex-col items-center justify-center text-center opacity-10 gap-24 py-60">
                      <div className="relative group/lock">
                        <RadarIcon className="size-64 md:size-[45rem] animate-spin-slow text-primary group-hover:scale-110 transition-transform duration-[10s]" />
                        <Skull className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-24 md:size-64 text-primary/40 animate-neural" />
                        <div className="absolute -inset-40 border-[80px] border-dashed border-primary/5 rounded-full animate-reverse-spin opacity-20" />
                      </div>
                      <h3 className="text-8xl md:text-[22rem] font-black uppercase tracking-[2.5em] text-white italic gold-glow leading-none">Consulting</h3>
                   </div>
                 )}
              </CardContent>
           </Card>
        </div>
      </main>
    </div>
  )
}
