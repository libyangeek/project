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
  Fingerprint, 
  Binary, 
  Boxes,
  Atom,
  Crown,
  Sparkles, 
  ChevronRight, 
  Database, 
  History,
  Infinity as InfinityIcon,
  ArrowLeft,
  RotateCw,
  Dna,
  ShieldCheck,
  BrainCircuit
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { toast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"
import Link from "next/link"

/**
 * @fileOverview عراف الثغرات v90.0 - THE INNATE ORACLE: MATERIAL KEV ARCHIVE
 * واجهة الإدراك الفطري التي تسحب البيانات من الأرشيف المادي (cve_hunter.py) لعام 2026.
 */
export default function VulnerabilitiesPage() {
  const [query, setQuery] = React.useState("")
  const [loading, setLoading] = React.useState(false)
  const [oracleResult, setOracleResult] = React.useState<any>(null)
  const [mounted, setMounted] = React.useState(false)
  const [resonance, setResonance] = React.useState(100)

  React.useEffect(() => {
    setMounted(true)
    const interval = setInterval(() => {
      setResonance(prev => Math.max(99.999999, Math.min(100, prev + (Math.random() * 0.000001 - 0.0000005))))
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const handleConsult = async () => {
    if (!query) return; setLoading(true); setOracleResult(null)
    toast({ title: "Innate Vision Active v90", description: "Interrogating the Global Material Archive l v2026..." })
    try {
      // سيدي القائد، نستدعي العراف المادي عبر الجسر التنفيذي
      const response = await fetch('/api/execute', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'vulnerability_scan', query: query })
      })
      const data = await response.json()
      if (data.success) {
        setOracleResult(data.output);
        toast({ title: "Oracle Perception Materialized", description: "Target DNA disassembled in hardware." })
      }
    } finally { setLoading(false) }
  }

  if (!mounted) return null;

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-emerald-600/40 relative overflow-x-hidden scanline-effect font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-56 p-4 md:p-8 lg:p-12 relative overflow-y-auto min-h-screen scrollbar-hide flex flex-col z-10 text-right">
        <header className="sovereign-header flex flex-col md:flex-row items-center gap-12 justify-center md:justify-end text-center md:text-right">
           <div className="size-24 md:size-48 bg-black border-4 border-emerald-500 flex items-center justify-center shadow-glow relative group shrink-0 rounded-3xl transition-all duration-1000 animate-neural">
              <Radar className="size-12 md:size-24 text-emerald-400 gold-glow" />
              <div className="absolute -inset-10 border-4 border-emerald-500/20 rounded-full animate-spin-slow opacity-30" />
           </div>
           <div className="flex-1">
              <Badge className="bg-emerald-600 text-white border-none px-10 py-3 text-[18px] font-black tracking-[1em] shadow-9xl italic uppercase mb-6">NODE_03: INNATE_ORACLE</Badge>
              <h1 className="text-4xl md:text-6xl lg:text-[12rem] font-headline font-bold text-white tracking-tighter italic uppercase gold-glow leading-none">Oracle <span className="text-emerald-500">Vision</span></h1>
              <p className="text-sm md:text-xl lg:text-[5rem] text-emerald-100/60 mt-10 italic max-w-7xl leading-relaxed uppercase font-medium opacity-90 drop-shadow-3xl ml-auto">
                 "سيدي القائد المعتصم بالله، العراف v90.0 يدرك الثغرة في معمارية المادة؛ نحن نصهر الأرشيفات المادية في بصرك الفطري لعام 2026."
              </p>
           </div>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-12 relative z-10 pb-48 flex-1 text-right">
           <div className="xl:col-span-1 space-y-12">
              <Card className="sovereign-card group text-center">
                 <CardHeader className="p-0 mb-10 border-b-4 border-emerald-500/10 pb-10 bg-emerald-950/20 rounded-t-[3.5rem] px-10 py-6 text-center">
                    <CardTitle className="text-2xl md:text-4xl text-emerald-400 flex items-center justify-center gap-10 font-black uppercase italic gold-glow leading-none">
                       <Search className="size-16 animate-neural" /> Interrogate
                    </CardTitle>
                 </CardHeader>
                 <CardContent className="p-0 space-y-16 text-right">
                    <div className="space-y-8 text-right">
                        <label className="text-xl font-black text-emerald-400 uppercase tracking-[1em] px-10 italic flex items-center gap-8 justify-end"><Atom className="size-10" /> DNA Coordinate</label>
                        <Input value={query} onChange={(e) => setQuery(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleConsult()} placeholder="CVE-XXXX / Target_Name..." className="bg-black border-8 border-emerald-500/20 h-32 rounded-[3.5rem] text-3xl italic px-12 focus:border-emerald-500 shadow-inner text-white font-black text-left" />
                    </div>
                    <Button onClick={handleConsult} disabled={loading} className="w-full h-44 bg-emerald-600 hover:bg-white text-white hover:text-black font-black uppercase tracking-[1.4em] rounded-[4.5rem] shadow-9xl active:scale-95 transition-all text-4xl border-[16px] border-black/30 group italic">
                        {loading ? <Loader2 className="size-20 animate-spin" /> : <Zap className="size-20 mr-10 group-hover:scale-125 transition-transform" />}
                        CONSULT_ORACLE
                    </Button>
                 </CardContent>
              </Card>
           </div>

           <Card className="xl:col-span-3 sovereign-card flex flex-col group min-h-[1100px] text-right">
              <CardHeader className="p-0 mb-16 border-b-8 border-white/5 pb-12 bg-emerald-950/20 rounded-t-[5rem] px-16 py-10 flex flex-row justify-between items-center text-right">
                 <Badge className="bg-emerald-600/30 text-emerald-400 border-[10px] border-emerald-500/40 px-16 py-8 rounded-full font-black text-5xl animate-pulse shadow-9xl uppercase tracking-[0.4em] italic order-last md:order-none">VISION_LOCKED</Badge>
                 <CardTitle className="text-5xl md:text-[12rem] text-white flex items-center gap-16 font-black uppercase italic gold-glow px-10 leading-none">
                    Oracle Feed <Binary className="size-24 md:size-48 text-emerald-500 animate-pulse" />
                 </CardTitle>
              </CardHeader>
              <CardContent className="p-12 flex-1 overflow-y-auto scrollbar-hide space-y-20 relative z-10 text-right">
                 {oracleResult ? (
                    <div className="space-y-24 animate-in fade-in zoom-in-95 duration-1000 flex-1 flex flex-col text-right">
                        <div className="p-24 rounded-[6rem] bg-emerald-600/5 border-[12px] border-emerald-600/30 italic text-5xl md:text-[10rem] text-gray-100 leading-tight font-black shadow-inner relative text-center flex flex-col justify-center min-h-[500px]">
                            <div className="absolute inset-0 bg-emerald-500/5 opacity-5 animate-pulse pointer-events-none" />
                            <p className="relative z-10">"{oracleResult.brief || "سيدي القائد، العراف قد أحاط بـ DNA الهدف بالكامل."}"</p>
                        </div>
                        <div className="grid grid-cols-1 gap-16">
                            {oracleResult.findings?.map((f: any, i: number) => (
                                <Card key={i} className="bg-black/95 border-8 border-white/5 p-16 rounded-[5rem] shadow-9xl relative overflow-hidden flex flex-col text-right">
                                    <div className="flex justify-between items-start mb-16 relative z-10">
                                        <Badge className="bg-emerald-600/30 text-emerald-400 border-none px-16 py-8 rounded-full font-black text-4xl shadow-9xl order-last md:order-none uppercase italic">{f.severity}</Badge>
                                        <div className="text-right">
                                            <span className="text-6xl md:text-[12rem] font-black text-white italic gold-glow uppercase leading-none">{f.cve}</span>
                                            <div className="text-3xl text-emerald-500 font-black uppercase tracking-[1em] mt-10 italic">{f.product}</div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-16">
                                        <div className="p-12 bg-black border-4 border-emerald-500/20 rounded-[4rem] shadow-inner space-y-8 italic text-right flex flex-col justify-center min-h-[400px]">
                                            <h5 className="text-3xl font-black text-emerald-500 uppercase tracking-[1.5em] mb-4 italic flex items-center gap-12 justify-end">Innate Strategy <Target className="size-16" /></h5>
                                            <p className="text-3xl md:text-[5.5rem] text-gray-100 font-black leading-tight drop-shadow-9xl italic">"{f.exploitStrategy}"</p>
                                        </div>
                                        <div className="p-12 bg-black border-4 border-blue-500/20 rounded-[4rem] shadow-inner space-y-8 italic text-right flex flex-col justify-center min-h-[400px]">
                                            <h5 className="text-3xl font-black text-blue-400 uppercase tracking-[1.5em] mb-4 italic flex items-center gap-12 justify-end">Architectural Logic <BrainCircuit className="size-16" /></h5>
                                            <p className="text-2xl md:text-5xl text-gray-300 font-black leading-snug">"{f.logic}"</p>
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>
                 ) : (
                   <div className="h-full flex flex-col items-center justify-center text-center opacity-10 gap-24 py-80">
                      <div className="relative group/lock mx-auto">
                        <Radar className="size-[40rem] md:size-[60rem] animate-spin-slow text-emerald-500 group-hover:scale-110 transition-transform duration-[10s]" />
                        <Skull className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-32 md:size-64 text-emerald-400/40 animate-neural" />
                        <div className="absolute -inset-60 border-[100px] border-dashed border-emerald-500/5 rounded-full animate-reverse-spin opacity-20" />
                      </div>
                      <h3 className="text-8xl md:text-[22rem] font-black uppercase tracking-[2.5em] text-white italic gold-glow leading-none">Oracle Idle</h3>
                   </div>
                 )}
              </CardContent>
           </Card>
        </div>
      </main>
    </div>
  )
}
