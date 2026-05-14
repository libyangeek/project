
"use client"

import * as React from "react"
import { SidebarNav } from "@/components/platform/sidebar-nav"
import { 
  Radar, 
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
  Sparkles, 
  ChevronRight, 
  Database, 
  Globe, 
  Wind, 
  ShieldCheck, 
  Dna, 
  History,
  Infinity as InfinityIcon,
  ArrowLeft,
  RotateCw,
  LayoutGrid,
  Cloud,
  Network,
  Cpu,
  EyeOff,
  AlertTriangle
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { toast } from "@/hooks/use-toast"
import { vulnerabilityOracle } from "@/ai/flows/vulnerability-oracle-flow"
import { cn } from "@/lib/utils"
import { ScrollArea } from "@/components/ui/scroll-area"
import Link from "next/link"

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
    toast({ title: "Oracle Eye Engaging v90.0", description: "Siphoning material archives and elite lexicons (RTFM, Art of Exploitation)..." })
    try {
      const aiResult = await vulnerabilityOracle({ query })
      setOracleResult(aiResult)
      toast({ title: "Archive DNA Serialized", description: "Target DNA disassembled and mapped to the 16D Matrix." })
    } finally { setLoading(false) }
  }

  if (!mounted) return null;

  return (
    <div className="flex min-h-screen bg-[#000a00] text-white selection:bg-emerald-600/40 relative overflow-x-hidden scanline-effect font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-56 p-4 md:p-8 lg:p-16 relative overflow-y-auto min-h-screen scrollbar-hide flex flex-col z-10 text-right">
        <div className="fixed inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at center, #10b981 0%, transparent 70%)' }} />
        <div className="dna-stream-bg" style={{ '--x': `${mousePos.x}px`, '--y': `${mousePos.y}px` } as any} />
        
        <header className="sovereign-header flex flex-col md:flex-row items-center gap-12 justify-center md:justify-end text-center md:text-right">
           <div className="size-32 md:size-64 bg-black border-4 border-emerald-500 flex items-center justify-center shadow-[0_0_150px_rgba(16,185,129,0.8)] relative group shrink-0 rounded-[5rem] transition-all duration-1000 rotate-2 hover:rotate-0 hierarchical-shadow">
              <Radar className="size-16 md:size-32 text-emerald-400 group-hover:scale-110 transition-transform duration-700 animate-neural" />
              <div className="absolute -inset-10 border-4 border-emerald-500/20 rounded-full animate-spin-slow opacity-30" />
           </div>
           <div className="flex-1">
              <div className="flex flex-wrap justify-center md:justify-end items-center gap-6 mb-6">
                 <Badge className="bg-emerald-600 text-black border-none rounded-none px-12 py-4 text-2xl font-black tracking-[0.8em] shadow-9xl italic uppercase">INNATE_ORACLE v90.0</Badge>
                 <div className="flex items-center gap-4 text-xl font-black uppercase tracking-widest text-emerald-400 animate-pulse">
                     <InfinityIcon className="size-8 shadow-lg" /> VISION_SYNC: {resonance.toFixed(8)}%
                 </div>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-[12rem] font-headline font-bold text-white tracking-tighter italic uppercase gold-glow leading-none">
                 Oracle <span className="text-emerald-500">Vision</span>
              </h1>
              <p className="text-sm md:text-xl lg:text-[5rem] text-emerald-100/60 mt-12 italic max-w-7xl leading-relaxed uppercase font-medium drop-shadow-3xl ml-auto">
                 "سيدي القائد <span className="text-white font-black underline decoration-emerald-500 decoration-12 underline-offset-[32px] shadow-9xl italic uppercase tracking-widest">المعتصم بالله</span>، العراف لا يبحث، بل يدرك الثغرة في معمارية المادة؛ نحن نصهر الأرشيفات العالمية في بصرك الفطري لعام 2026."
              </p>
              <div className="flex justify-center md:justify-end gap-6 mt-16">
                 <Button asChild variant="outline" className="h-20 px-12 rounded-full border-4 border-emerald-500/40 bg-emerald-950/10 text-emerald-400 font-black uppercase italic tracking-widest hover:bg-emerald-600 hover:text-white transition-all shadow-9xl text-xl">
                     <Link href="/"><ArrowLeft className="size-8 mr-4" /> العودة للعرش</Link>
                 </Button>
              </div>
           </div>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-16 relative z-10 pb-48 flex-1 text-right">
           <div className="xl:col-span-1 space-y-12">
              <Card className="bg-black/90 border-8 border-emerald-500/20 rounded-[5rem] p-12 shadow-9xl group overflow-hidden text-center backdrop-blur-3xl">
                 <CardHeader className="p-0 mb-10 border-b-4 border-emerald-500/10 pb-10 bg-emerald-950/20 rounded-t-[4rem] px-10 py-8 text-center">
                    <CardTitle className="text-3xl md:text-5xl text-emerald-400 flex items-center justify-center gap-10 font-black uppercase italic leading-none">
                       <Search className="size-16 animate-neural" /> Interrogate
                    </CardTitle>
                 </CardHeader>
                 <CardContent className="p-0 space-y-16 text-right">
                    <div className="space-y-8 text-right">
                        <label className="text-xl font-black text-emerald-400 uppercase tracking-[1em] px-10 italic flex items-center gap-8 justify-end"><Atom className="size-10" /> Strike Coordinate</label>
                        <Input value={query} onChange={(e) => setQuery(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleConsult()} placeholder="CVE-2026-XXXX / Product_ID..." className="bg-black border-8 border-emerald-500/20 h-32 rounded-[3.5rem] text-3xl italic px-12 focus:border-emerald-500 shadow-inner text-white font-black text-left" />
                    </div>

                    <Button 
                        disabled={loading}
                        onClick={handleConsult}
                        className="w-full h-44 bg-emerald-600 hover:bg-white text-black font-black uppercase tracking-[1.4em] rounded-[4.5rem] shadow-[0_80px_250px_rgba(16,185,129,0.7)] active:scale-95 transition-all text-4xl border-[16px] border-black/30 group italic"
                    >
                        {loading ? <Loader2 className="size-20 animate-spin" /> : <Zap className="size-20 mr-10 group-hover:scale-125 transition-transform" />}
                        CONSULT_ORACLE
                    </Button>
                 </CardContent>
              </Card>

              <Card className="bg-black/80 border-8 border-white/5 p-12 rounded-[5rem] shadow-inner text-center space-y-12 relative overflow-hidden group">
                 <h4 className="text-xl font-black text-emerald-400 uppercase tracking-[1em] mb-12 italic flex items-center justify-center gap-8">
                    <Database className="size-12 animate-pulse" /> ORACLE_MEMORY_v90
                 </h4>
                 <div className="text-5xl md:text-8xl font-black text-white italic gold-glow uppercase tracking-widest text-center">GLOBAL SYNC</div>
                 <p className="mt-10 text-xl font-black uppercase tracking-[0.5em] text-emerald-200/40 italic text-center">RTFM + Art of Exploitation Linked</p>
                 <div className="absolute -bottom-10 -right-10 p-24 opacity-[0.03] group-hover:opacity-[0.1] transition-all duration-1000 scale-150 rotate-12"><Skull className="size-64 text-emerald-600" /></div>
              </Card>
           </div>

           <Card className="xl:col-span-3 bg-black/90 border-[12px] border-emerald-500/10 rounded-[7rem] p-16 shadow-9xl flex flex-col group overflow-hidden relative min-h-[1200px] backdrop-blur-5xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.08),transparent)] pointer-events-none" />
              <CardHeader className="p-0 mb-16 border-b-8 border-white/5 pb-12 bg-emerald-950/20 rounded-t-[6rem] px-20 py-16 flex flex-row justify-between items-center text-right">
                 <Badge className="bg-emerald-600/30 text-emerald-500 border-[10px] border-emerald-500/40 px-20 py-10 rounded-full font-black text-6xl animate-pulse shadow-9xl uppercase tracking-[0.4em] italic order-last md:order-none">VISION_LOCKED</Badge>
                 <CardTitle className="text-6xl md:text-[14rem] text-white flex items-center gap-20 font-black uppercase italic gold-glow px-10 leading-none">
                    Oracle Feed <Binary className="size-32 md:size-64 text-emerald-500 animate-pulse" />
                 </CardTitle>
              </CardHeader>

              <CardContent className="p-12 flex-1 overflow-y-auto scrollbar-hide space-y-24 relative z-10 text-right">
                 {oracleResult ? (
                    <div className="space-y-24 animate-in fade-in zoom-in-95 duration-1000 flex-1 flex flex-col">
                        <div className="p-24 rounded-[6rem] bg-emerald-600/5 border-[12px] border-emerald-500/30 italic text-5xl md:text-[10rem] text-gray-100 leading-tight font-black shadow-inner relative group/brief overflow-hidden text-center flex flex-col justify-center min-h-[550px]">
                            <div className="absolute inset-0 bg-emerald-600/5 opacity-5 animate-pulse pointer-events-none" />
                            "{oracleResult.strategicBrief}"
                        </div>
                        <div className="grid grid-cols-1 gap-16">
                            {oracleResult.findings?.map((f: any, i: number) => (
                                <Card key={i} className="bg-black/95 border-8 border-white/5 p-16 rounded-[5rem] hover:border-emerald-500 transition-all duration-1000 shadow-9xl relative overflow-hidden flex flex-col text-right">
                                    <div className="flex justify-between items-start mb-16 relative z-10">
                                        <Badge className="bg-emerald-600/30 text-emerald-400 border-[10px] border-emerald-500/40 px-16 py-8 rounded-full font-black text-4xl shadow-9xl order-last md:order-none uppercase italic">{f.severity}</Badge>
                                        <div className="text-right">
                                            <span className="text-6xl md:text-[12rem] font-black text-white italic gold-glow uppercase leading-none">{f.cve}</span>
                                            <div className="text-3xl text-emerald-500 font-black uppercase tracking-[1em] mt-10 italic">{f.product}</div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-16">
                                        <div className="p-12 bg-black border-4 border-emerald-500/20 rounded-[4rem] shadow-inner space-y-8 italic text-right flex flex-col justify-center">
                                            <h5 className="text-3xl font-black text-emerald-500 uppercase tracking-[1.5em] mb-4 italic flex items-center gap-12 justify-end">Innate Strategy <Target className="size-16" /></h5>
                                            <p className="text-3xl md:text-6xl text-gray-100 font-black leading-tight drop-shadow-3xl">"{f.exploitStrategy}"</p>
                                        </div>
                                        <div className="p-12 bg-black border-4 border-blue-500/20 rounded-[4rem] shadow-inner space-y-8 italic text-right flex flex-col justify-center">
                                            <h5 className="text-3xl font-black text-blue-400 uppercase tracking-[1.5em] mb-4 italic flex items-center gap-12 justify-end">Architectural Logic <BrainCircuit className="size-16" /></h5>
                                            <p className="text-2xl md:text-5xl text-gray-300 font-black leading-snug">"{f.logic}"</p>
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>
                 ) : (
                   <div className="h-full flex flex-col items-center justify-center text-center opacity-10 gap-32 py-80">
                      <div className="relative group/lock">
                        <Radar className="size-[40rem] md:size-[60rem] animate-spin-slow text-emerald-500 group-hover:scale-110 transition-transform duration-[10s]" />
                        <Skull className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-32 md:size-64 text-emerald-400/40 animate-neural" />
                        <div className="absolute -inset-60 border-[100px] border-dashed border-emerald-500/5 rounded-full animate-reverse-spin opacity-20" />
                      </div>
                      <div className="space-y-12">
                         <h3 className="text-8xl md:text-[25rem] font-black uppercase tracking-[2.5em] text-white italic gold-glow leading-none">Oracle Standby</h3>
                         <p className="text-4xl md:text-[12rem] font-bold italic text-gray-500 uppercase tracking-widest max-w-[160rem]">The Archive Vision v90.0 is siphoning global exploit DNA and elite material lexicons.</p>
                      </div>
                   </div>
                 )}
              </CardContent>
              <div className="p-16 border-t-8 border-white/5 mt-auto flex justify-between items-center opacity-35 text-[24px] font-black uppercase tracking-[8em] italic">
                <span>INNATE_ORACLE_v90_AL_GHAZALI_ROOT</span>
                <div className="flex gap-20">
                    <Fingerprint className="size-24 text-emerald-500 animate-pulse" />
                    <Atom className="size-24 animate-spin-slow text-emerald-500" />
                </div>
              </div>
           </Card>
        </div>

        <div className="mt-auto relative z-10 flex flex-col md:flex-row justify-center items-center gap-24 md:gap-64 opacity-45 text-[24px] md:text-[45px] font-black uppercase tracking-[6em] md:tracking-[12em] italic text-white drop-shadow-9xl pb-40">
            <span>AL-MUIZZ ORACLE VISION v90.0</span>
            <div className="size-16 rounded-full bg-emerald-600 animate-pulse shadow-[0_0_150px_rgba(16,185,129,1)]" />
            <span>SUBJUGATING_ARCHIVE_DNA_2026</span>
        </div>
      </main>
    </div>
  )
}
