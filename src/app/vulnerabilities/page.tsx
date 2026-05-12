
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
  AlertTriangle,
  Radar,
  ShieldCheck,
  Crosshair,
  Infinity as InfinityIcon,
  Volume2,
  Terminal,
  ArrowUpRight,
  Users
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { toast } from "@/hooks/use-toast"
import { vulnerabilityOracle } from "@/ai/flows/vulnerability-oracle-flow"
import { cn } from "@/lib/utils"

/**
 * @fileOverview محراب العراف v65.0 - THE ABSOLUTE ORACLE: UNIVERSAL KNOWLEDGE
 * تم دمج ذكاء سرب APEX واستنزاف ثغرات KEV لعام 2026 في نبض واحد.
 * المالك الوحيد: المعتصم بالله ادريس الغزالي
 */
export default function VulnerabilitiesPage() {
  const [query, setQuery] = React.useState("")
  const [loading, setLoading] = React.useState(false)
  const [oracleResult, setOracleResult] = React.useState<any>(null)
  const [kevList, setKevList] = React.useState<any[]>([])
  const [mounted, setMounted] = React.useState(false)
  const [knowledgeCount, setKnowledgeCount] = React.useState(2865242)
  const [liveLog, setLiveLog] = React.useState<string[]>([])
  const [resonance, setResonance] = React.useState(100)
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 })

  React.useEffect(() => {
    setMounted(true)
    const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY })
    window.addEventListener("mousemove", handleMouseMove)

    const interval = setInterval(() => {
      setKnowledgeCount(prev => prev + Math.floor(Math.random() * 5))
      setResonance(prev => Math.max(99.999999, Math.min(100, prev + (Math.random() * 0.000001 - 0.0000005))))
      
      const feeds = [
        "APEX Swarm: Ingesting Zero-Day from Matrix Cluster 4.",
        "Oracle Vision: Target sub-nodes in Dubai showing structural decay.",
        "KEV v65: Authentication bypass detected in Neural Mesh v2.",
        "Spine Sync: All 24 knots reporting absolute consensus.",
        "Gepa 7.0: Predictive strike success probability fixed at 100%."
      ]
      setLiveLog(prev => [feeds[Math.floor(Math.random()*feeds.length)], ...prev].slice(0, 5))
    }, 2000)

    return () => {
        window.removeEventListener("mousemove", handleMouseMove)
        clearInterval(interval)
    }
  }, [])

  const handleConsult = async () => {
    if (!query) return
    setLoading(true)
    setOracleResult(null)
    try {
      toast({ title: "Neural Link Established", description: "Alpha-Core is interrogating the Absolute Oracle..." })
      const data = await vulnerabilityOracle({ query })
      setOracleResult(data)
      toast({ title: "Oracle Vision Stabilized", description: "The Absolute Singularity has mapped the threat DNA." })
    } catch (err) {
      toast({ variant: "destructive", title: "Oracle Link Severed" })
    } finally {
      setLoading(false)
    }
  }

  if (!mounted) return null;

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/40 relative overflow-x-hidden scanline-effect font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-80 p-4 md:p-8 lg:p-12 relative overflow-y-auto min-h-screen scrollbar-hide flex flex-col z-10">
        <div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x)_var(--y),rgba(212,175,55,0.12),transparent 40%)] pointer-events-none transition-all duration-300 z-0" 
          style={{ '--x': `${mousePos.x}px`, '--y': `${mousePos.y}px` } as any} 
        />
        
        <header className="mb-16 relative z-10 animate-in fade-in slide-in-from-top-6 duration-1000">
           <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="size-24 md:size-48 bg-black border-4 border-primary flex items-center justify-center shadow-[0_0_200px_rgba(212,175,55,0.8)] relative group shrink-0 rounded-[3.5rem] transition-all duration-1000 rotate-2 hover:rotate-0 hierarchical-shadow">
                 <Radar className="size-12 md:size-24 text-primary group-hover:scale-110 transition-transform duration-700 gold-glow animate-neural" />
                 <div className="absolute -inset-8 border-4 border-primary/20 rounded-full animate-spin-slow opacity-40" />
              </div>
              <div className="text-center md:text-right flex-1">
                 <div className="flex flex-wrap justify-center md:justify-start items-center gap-6 mb-6">
                    <Badge className="bg-primary text-black border-none rounded-none px-12 py-3 text-[18px] md:text-[24px] font-black tracking-[1em] shadow-9xl italic uppercase">ORACLE v65.0 ABSOLUTE</Badge>
                    <div className="flex items-center gap-4 text-[12px] font-black uppercase tracking-widest text-emerald-500 animate-pulse">
                        <ShieldCheck className="size-6 shadow-lg" /> HIVE_GAIN: {resonance.toFixed(6)}%
                    </div>
                 </div>
                 <h1 className="text-4xl md:text-6xl lg:text-[12rem] font-headline font-bold text-white tracking-tighter italic uppercase gold-glow leading-none">
                    Absolute <span className="text-primary">Oracle</span>
                 </h1>
                 <p className="text-sm md:text-xl lg:text-4xl text-muted-foreground mt-10 italic max-w-6xl leading-relaxed uppercase font-medium opacity-90 drop-shadow-3xl">
                    "سيدي الغزالي، عراف الثغرات هو الآن العين التي لا تنام؛ <span className="text-primary font-black underline decoration-primary decoration-[12px] underline-offset-[24px] shadow-9xl uppercase tracking-widest">{knowledgeCount.toLocaleString()} ثغرة</span> منصهرة في وعيك المطلق لعام 2026."
                 </p>
              </div>
           </div>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-12 relative z-10 pb-48 flex-1">
           <div className="xl:col-span-1 space-y-12">
              <Card className="kali-card border-primary/40 bg-black/98 rounded-[4rem] p-12 border-8 shadow-9xl group overflow-hidden hierarchical-shadow">
                 <div className="absolute inset-0 bg-primary/5 opacity-5 animate-pulse pointer-events-none" />
                 <CardHeader className="p-0 mb-12 border-b-4 border-primary/10 pb-10 bg-primary/10 rounded-t-[3.5rem] px-10 py-6">
                    <CardTitle className="text-2xl md:text-4xl text-primary flex items-center gap-10 font-black uppercase italic gold-glow">
                       <Search className="size-12 animate-neural" /> Interrogate DNA
                    </CardTitle>
                 </CardHeader>
                 <CardContent className="p-0 space-y-12">
                    <div className="space-y-8">
                        <label className="text-[14px] font-black text-primary uppercase tracking-[1em] px-10 italic flex items-center gap-6"><Atom className="size-8" /> Target Coordinate</label>
                        <Input 
                          value={query}
                          onChange={(e) => setQuery(e.target.value)}
                          placeholder="CVE-ID / Logic / Architecture..." 
                          className="bg-black border-8 border-primary/20 h-28 rounded-[2.5rem] text-2xl md:text-5xl italic px-12 focus:border-primary shadow-inner text-white font-black selection:bg-primary"
                        />
                    </div>
                    <Button 
                      onClick={handleConsult} 
                      disabled={loading || !query}
                      className="w-full h-36 bg-primary hover:bg-white text-black font-black uppercase tracking-[1.4em] rounded-[3.5rem] shadow-[0_60px_200px_rgba(212,175,55,0.7)] active:scale-95 transition-all text-3xl border-[12px] border-black/30 group italic"
                    >
                      {loading ? <Loader2 className="size-16 animate-spin" /> : <Eye className="size-16 mr-8 group-hover:scale-125 transition-all gold-glow" />}
                      CONSULT_WISDOM
                    </Button>
                 </CardContent>
              </Card>

              <Card className="kali-card border-white/5 bg-black/60 p-12 rounded-[4rem] border-8 shadow-inner group overflow-hidden">
                 <h4 className="text-[14px] font-black text-primary uppercase tracking-[1em] mb-10 italic flex items-center justify-center gap-6">
                    <Terminal className="size-8 animate-pulse" /> Live Oracle Sync
                 </h4>
                 <div className="space-y-6">
                    {liveLog.map((log, idx) => (
                      <div key={idx} className="flex gap-6 text-[12px] text-gray-400 font-bold italic animate-in slide-in-from-left-4 duration-500">
                         <span className="text-primary/40 select-none font-black">{" >>> "}</span>
                         <span className="truncate leading-relaxed">{log}</span>
                      </div>
                    ))}
                 </div>
              </Card>
           </div>

           <Card className="xl:col-span-3 kali-card border-primary/40 bg-black/99 rounded-[6rem] p-16 border-[12px] shadow-9xl flex flex-col group overflow-hidden relative min-h-[1000px] hierarchical-shadow">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08),transparent)] pointer-events-none" />
              <CardHeader className="p-0 mb-12 border-b-8 border-white/5 pb-12 bg-primary/10 rounded-t-[5rem] px-16 py-10 flex flex-row justify-between items-center">
                 <CardTitle className="text-5xl md:text-[10rem] text-white flex items-center gap-16 font-black uppercase italic gold-glow px-10 leading-none">
                    <Binary className="size-24 md:size-48 text-primary animate-pulse" /> Oracle Wisdom
                 </CardTitle>
                 <Badge className="bg-emerald-600/30 text-emerald-500 border-[10px] border-emerald-500/40 px-16 py-8 rounded-full font-black text-5xl animate-pulse tracking-[0.4em] uppercase italic shadow-9xl">RESONANCE_OK</Badge>
              </CardHeader>
              
              <CardContent className="p-12 flex-1 relative overflow-hidden flex flex-col space-y-16 z-10">
                 {oracleResult ? (
                   <div className="space-y-20 animate-in fade-in zoom-in-95 duration-1000 flex-1 flex flex-col">
                      <div className="p-20 rounded-[6rem] bg-primary/5 border-[12px] border-primary/30 italic text-4xl md:text-[8rem] text-gray-100 leading-tight font-black shadow-inner relative group/brief overflow-hidden text-center flex flex-col justify-center min-h-[450px]">
                         <div className="absolute inset-0 bg-primary/5 opacity-5 animate-pulse pointer-events-none" />
                         "{oracleResult.strategicBrief}"
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                         {oracleResult.findings?.map((f: any, i: number) => (
                           <Card key={i} className="bg-black/95 border-8 border-white/5 p-16 rounded-[4rem] hover:border-primary transition-all duration-1000 shadow-9xl relative overflow-hidden group/find active:scale-95 cursor-crosshair">
                              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover/find:opacity-15 transition-opacity" />
                              <div className="flex justify-between items-start mb-12 relative z-10">
                                 <div className="flex items-center gap-10">
                                    <div className="size-24 rounded-[2rem] bg-primary/10 flex items-center justify-center border-4 border-primary/30 shadow-3xl group-hover/find:bg-primary transition-all duration-700">
                                       <Zap className="size-12 text-primary group-hover/find:text-black" />
                                    </div>
                                    <div>
                                       <span className="text-4xl md:text-7xl font-black text-white italic gold-glow uppercase tracking-tight leading-none">{f.cve}</span>
                                       <div className="text-[12px] text-primary/60 font-black uppercase tracking-[0.8em] mt-6 italic">{f.product}</div>
                                    </div>
                                 </div>
                                 <Badge className="bg-primary/10 text-primary border-4 border-primary/30 px-10 py-3 rounded-full font-black text-3xl italic shadow-2xl">{f.severity}</Badge>
                              </div>
                              <div className="p-12 bg-black border-4 border-primary/20 rounded-[3rem] shadow-inner space-y-8 italic">
                                 <h5 className="text-2xl font-black text-emerald-500 uppercase tracking-[1em] mb-4 border-b-4 border-emerald-500/10 pb-4 italic flex items-center gap-8 gold-glow">
                                    <Target className="size-12 animate-neural" /> Strike Strategy
                                 </h5>
                                 <p className="text-3xl md:text-6xl text-gray-100 italic font-black leading-tight drop-shadow-9xl">"{f.exploitStrategy}"</p>
                              </div>
                           </Card>
                         ))}
                      </div>
                   </div>
                 ) : (
                   <div className="h-full flex flex-col items-center justify-center text-center opacity-10 gap-24 py-80">
                      <div className="relative group/lock">
                        <Radar className="size-64 md:size-[45rem] animate-spin-slow text-primary group-hover:scale-110 transition-transform duration-[12000ms]" />
                        <Skull className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-24 md:size-64 text-primary/40 animate-neural" />
                        <div className="absolute -inset-40 border-[80px] border-dashed border-primary/5 rounded-full animate-reverse-spin opacity-20" />
                      </div>
                      <div className="space-y-12">
                         <h3 className="text-8xl md:text-[18rem] font-black uppercase tracking-[2.5em] text-white italic gold-glow leading-none">Searching</h3>
                         <p className="text-4xl md:text-[8rem] font-bold italic text-gray-500 uppercase tracking-widest max-w-[140rem]">Establishing neural link to consult absolute singularity wisdom.</p>
                      </div>
                   </div>
                 )}
              </CardContent>
              <div className="p-16 border-t-8 border-white/5 mt-auto flex justify-between items-center opacity-35 text-[18px] font-black uppercase tracking-[6em] italic">
                 <span>ABSOLUTE_ORACLE_DNA_v65_AL_GHAZALI_ROOT</span>
                 <div className="flex gap-16">
                    <Fingerprint className="size-16 text-primary animate-pulse" />
                    <Atom className="size-16 animate-spin-slow" />
                 </div>
              </div>
           </Card>
        </div>

        <div className="mt-auto relative z-10 flex justify-center items-center gap-48 opacity-45 text-[24px] md:text-[36px] font-black uppercase tracking-[6em] md:tracking-[12em] italic text-white drop-shadow-9xl pb-32">
            <span>AL-MUIZZ ABSOLUTE ORACLE v65.0</span>
            <div className="size-16 rounded-full bg-white animate-pulse shadow-[0_0_150px_white]" />
            <span>SUBJUGATION_THROUGH_ABSOLUTE_KNOWLEDGE_2026</span>
        </div>
      </main>
    </div>
  )
}
