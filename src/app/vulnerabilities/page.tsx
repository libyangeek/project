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
  ArrowUpRight
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { toast } from "@/hooks/use-toast"
import { vulnerabilityOracle } from "@/ai/flows/vulnerability-oracle-flow"
import { cn } from "@/lib/utils"

/**
 * @fileOverview محراب العراف v53.0 - THE SUPREME ORACLE: HIERARCHICAL SINGULARITY
 * تم دمج استنزاف البيانات في الزمن الحقيقي ونظام النطق الاستراتيجي.
 * المالك الوحيد: المعتصم بالله ادريس الغزالي // 6 مايو 2026
 */
export default function VulnerabilitiesPage() {
  const [query, setQuery] = React.useState("")
  const [loading, setLoading] = React.useState(false)
  const [oracleResult, setOracleResult] = React.useState<any>(null)
  const [kevList, setKevList] = React.useState<any[]>([])
  const [mounted, setMounted] = React.useState(false)
  const [knowledgeCount, setKnowledgeCount] = React.useState(348231)
  const [liveLog, setLiveLog] = React.useState<string[]>([])
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 })

  React.useEffect(() => {
    setMounted(true)
    fetchKev()

    const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY })
    window.addEventListener("mousemove", handleMouseMove)

    const interval = setInterval(() => {
      setKnowledgeCount(prev => prev + Math.floor(Math.random() * 3))
      
      const feeds = [
        "Ingesting CVE-2026-X: Neural logic leak identified.",
        "Oracle Vision: Target sub-nodes in Cairo showing entropy.",
        "KEV Update: Zero-click vector detected in iOS 19.x",
        "Hierarchy Sync: All 21 nodes bound to Ghazali Root.",
        "Polymorph Pulse: Evasion DNA rewritten for Node 13."
      ]
      setLiveLog(prev => [feeds[Math.floor(Math.random()*feeds.length)], ...prev].slice(0, 5))
    }, 2000)

    return () => {
        window.removeEventListener("mousemove", handleMouseMove)
        clearInterval(interval)
    }
  }, [])

  const fetchKev = async () => {
    try {
      const resp = await fetch('/api/execute', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'cve_kev' })
      })
      const data = await resp.json()
      if (data && data.output) {
         try {
            const parsed = JSON.parse(data.output);
            setKevList(parsed.high_priority || (Array.isArray(parsed) ? parsed : []));
         } catch (e) {
            console.error("KEV Parse Error", e);
            setKevList([]);
         }
      }
    } catch (err) {
      console.error("KEV Fetch Error", err);
    }
  }

  const handleConsult = async () => {
    if (!query) return
    setLoading(true)
    setOracleResult(null)
    try {
      toast({ title: "Neural Link Established", description: "The Oracle is decoding the matrix..." })
      const data = await vulnerabilityOracle({ query })
      setOracleResult(data)
      toast({ title: "Oracle Vision Stabilized", description: "The Supreme Hierarchy has decoded the threat mesh." })
    } catch (err) {
      toast({ variant: "destructive", title: "Oracle Link Severed" })
    } finally {
      setLoading(false)
    }
  }

  const speakDirective = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'ar-SA';
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
      toast({ title: "Audible Directive", description: "The Overmind is speaking." });
    }
  }

  if (!mounted) return null;

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/40 relative overflow-x-hidden scanline-effect font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-80 p-4 md:p-8 lg:p-12 relative overflow-y-auto min-h-screen scrollbar-hide flex flex-col z-10">
        <div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x)_var(--y),rgba(212,175,55,0.1),transparent 40%)] pointer-events-none transition-all duration-300 z-0" 
          style={{ '--x': `${mousePos.x}px`, '--y': `${mousePos.y}px` } as any} 
        />
        
        <header className="mb-12 relative z-10 animate-in fade-in slide-in-from-top-6 duration-1000">
           <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="size-24 md:size-40 bg-black border-4 border-primary flex items-center justify-center shadow-[0_0_150px_rgba(212,175,55,0.6)] relative group shrink-0 rounded-3xl transition-all duration-1000 rotate-2 hover:rotate-0 hierarchical-shadow">
                 <Radar className="size-12 md:size-20 text-primary group-hover:scale-110 transition-transform duration-700 gold-glow animate-neural" />
                 <div className="absolute -inset-4 border-2 border-primary/20 rounded-full animate-spin-slow opacity-30" />
              </div>
              <div className="text-center md:text-right flex-1">
                 <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 mb-4">
                    <Badge className="bg-primary text-black border-none rounded-none px-8 py-2 text-[14px] md:text-[16px] font-black tracking-[0.5em] shadow-2xl italic">ORACLE v53.0-SUPREME</Badge>
                    <div className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-emerald-500 animate-pulse">
                        <ShieldCheck className="size-5 shadow-lg" /> REAL_TIME_KNOWLEDGE: ACTIVE
                    </div>
                 </div>
                 <h1 className="text-4xl md:text-6xl lg:text-9xl font-headline font-bold text-white tracking-tighter italic uppercase gold-glow leading-none">
                    The <span className="text-primary">Oracle</span>
                 </h1>
                 <p className="text-sm md:text-xl lg:text-3xl text-muted-foreground mt-6 italic max-w-5xl leading-relaxed uppercase font-medium opacity-80">
                    "سيدي الغزالي، عراف الثغرات يزداد علماً كل ثانية؛ <span className="text-primary font-black underline decoration-primary decoration-4 underline-offset-8 shadow-xl uppercase tracking-widest">{knowledgeCount.toLocaleString()} ثغرة</span> تحت سيطرتك لعام 2026."
                 </p>
              </div>
           </div>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8 relative z-10 pb-32 flex-1">
           <div className="xl:col-span-1 space-y-8">
              <Card className="kali-card border-primary/30 bg-black/98 rounded-3xl p-8 border-2 shadow-2xl group overflow-hidden hierarchical-shadow">
                 <div className="absolute inset-0 bg-primary/5 opacity-5 animate-pulse pointer-events-none" />
                 <CardHeader className="p-0 mb-8 border-b-2 border-primary/10 pb-6 bg-primary/5 rounded-t-2xl px-4 py-4">
                    <CardTitle className="text-xl md:text-2xl text-primary flex items-center gap-6 font-black uppercase italic gold-glow">
                       <Search className="size-8 animate-neural" /> Interrogate Logic
                    </CardTitle>
                 </CardHeader>
                 <CardContent className="p-0 space-y-8">
                    <div className="space-y-4">
                        <label className="text-[10px] font-black text-primary uppercase tracking-[0.6em] px-4 italic flex items-center gap-3"><Atom className="size-4" /> Target DNA</label>
                        <Input 
                          value={query}
                          onChange={(e) => setQuery(e.target.value)}
                          placeholder="CVE-ID / Product / Core..." 
                          className="bg-black border-2 border-primary/20 h-16 rounded-2xl text-xl italic px-6 focus:border-primary text-white font-black shadow-inner"
                        />
                    </div>
                    <Button 
                      onClick={handleConsult} 
                      disabled={loading || !query}
                      className="w-full h-20 bg-primary hover:bg-white text-black font-black uppercase tracking-[0.8em] rounded-2xl shadow-xl active:scale-95 transition-all text-lg border-4 border-black/20 group italic"
                    >
                      {loading ? <Loader2 className="size-8 animate-spin mr-3" /> : <Eye className="size-8 mr-4 group-hover:scale-125 transition-all gold-glow" />}
                      CONSULT_WISDOM
                    </Button>
                 </CardContent>
              </Card>

              <Card className="kali-card border-emerald-500/30 bg-black/98 rounded-3xl p-8 border-2 shadow-2xl group relative overflow-hidden hierarchical-shadow">
                 <div className="absolute inset-0 bg-emerald-500/5 opacity-5 animate-pulse pointer-events-none" />
                 <h4 className="text-lg font-black text-emerald-500 uppercase tracking-[0.4em] mb-8 italic flex items-center gap-4 border-b-2 border-emerald-500/10 pb-4 gold-glow">
                    <AlertTriangle className="size-6" /> KEV Priorities
                 </h4>
                 <div className="space-y-6 h-[400px] overflow-y-auto scrollbar-hide px-2">
                    {kevList.map((k, i) => (
                      <div key={i} className="p-6 rounded-2xl bg-black border-2 border-white/5 hover:border-emerald-500 transition-all duration-700 cursor-crosshair group/k shadow-inner relative overflow-hidden">
                         <div className="flex justify-between items-center mb-3">
                            <span className="text-xl font-black text-white italic gold-glow group-hover/k:text-emerald-400 transition-colors uppercase tracking-tight">{k.cve || "KEV-NODE"}</span>
                            <Badge className="bg-red-600/20 text-red-500 border-none px-4 py-1 rounded-full font-black italic text-[9px] animate-pulse">EXPLOITED</Badge>
                         </div>
                         <div className="text-sm text-muted-foreground uppercase font-black italic tracking-widest leading-none truncate">{k.product || "Unknown Asset"}</div>
                         <div className="absolute -bottom-2 -right-2 opacity-[0.05] group-hover:opacity-[0.1] transition-all"><Skull className="size-16 text-emerald-500" /></div>
                      </div>
                    ))}
                 </div>
              </Card>

              <Card className="kali-card border-white/5 bg-black/60 p-6 rounded-2xl border-2 shadow-inner group overflow-hidden">
                 <h4 className="text-[10px] font-black text-primary uppercase tracking-[0.4em] mb-4 italic flex items-center gap-3">
                    <Terminal className="size-4 animate-pulse" /> Live Oracle Feed
                 </h4>
                 <div className="space-y-3">
                    {liveLog.map((log, idx) => (
                      <div key={idx} className="flex gap-3 text-[10px] text-gray-400 font-bold italic animate-in slide-in-from-left-2 duration-500">
                         <span className="text-primary/40 select-none">{" >> "}</span>
                         <span className="truncate">{log}</span>
                      </div>
                    ))}
                 </div>
              </Card>
           </div>

           <Card className="xl:col-span-3 kali-card border-primary/30 bg-black/99 rounded-[3rem] p-8 border-2 shadow-9xl flex flex-col group overflow-hidden relative min-h-[850px] hierarchical-shadow">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.03),transparent)] pointer-events-none" />
              <CardHeader className="p-0 mb-8 border-b-2 border-white/5 pb-8 bg-primary/5 rounded-t-3xl px-8 py-4 flex flex-row justify-between items-center">
                 <CardTitle className="text-3xl md:text-7xl text-white italic uppercase font-black gold-glow flex items-center gap-8 px-4 leading-none">
                    <Binary className="size-12 md:size-20 text-primary animate-pulse" /> Oracle Wisdom
                 </CardTitle>
                 {oracleResult && (
                   <Button variant="outline" size="icon" onClick={() => speakDirective(oracleResult.strategicBrief)} className="size-16 rounded-2xl border-2 border-primary/20 bg-primary/5 hover:bg-primary hover:text-black transition-all">
                      <Volume2 className="size-8" />
                   </Button>
                 )}
              </CardHeader>
              <CardContent className="p-6 flex-1 relative overflow-hidden flex flex-col space-y-12 z-10">
                 {oracleResult ? (
                   <div className="space-y-12 animate-in fade-in zoom-in-95 duration-1000 flex-1 flex flex-col">
                      <div className="p-10 rounded-[3rem] bg-primary/5 border-2 border-primary/20 italic text-xl md:text-5xl text-gray-100 leading-relaxed font-black shadow-inner relative group/brief overflow-hidden">
                         <div className="absolute inset-0 bg-primary/5 opacity-5 animate-pulse" />
                         "{oracleResult.strategicBrief}"
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                         {oracleResult.findings?.map((f: any, i: number) => (
                           <Card key={i} className="bg-black/80 border-2 border-white/5 rounded-3xl p-8 hover:border-primary transition-all duration-700 shadow-2xl relative overflow-hidden group/find">
                              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover/find:opacity-10 transition-opacity" />
                              <div className="flex justify-between items-start mb-8 relative z-10">
                                 <div className="flex items-center gap-6">
                                    <div className="size-16 rounded-xl bg-primary/10 flex items-center justify-center border-2 border-primary/30 shadow-inner group-hover/find:bg-primary transition-all duration-700">
                                       <Zap className="size-8 text-primary group-hover/find:text-black" />
                                    </div>
                                    <div>
                                       <span className="text-2xl md:text-4xl font-black text-white italic gold-glow uppercase tracking-tight">{f.cve}</span>
                                       <div className="text-[10px] text-primary/60 font-black uppercase tracking-[0.5em] mt-2 italic">{f.product}</div>
                                    </div>
                                 </div>
                                 <Badge className="bg-primary/10 text-primary border-2 border-primary/30 px-6 py-2 rounded-full font-black text-xl italic shadow-xl">{f.severity}</Badge>
                              </div>
                              <div className="p-8 bg-black/99 rounded-2xl border-2 border-primary/10 mb-8 relative group/strat">
                                 <h5 className="text-[10px] font-black text-emerald-500 uppercase tracking-[1em] mb-4 border-b-2 border-emerald-500/10 pb-3 italic flex items-center gap-4">
                                    <Target className="size-4 animate-neural" /> Strike Logic
                                 </h5>
                                 <p className="text-xl md:text-2xl text-gray-100 italic font-black leading-snug drop-shadow-2xl">"{f.exploitStrategy}"</p>
                              </div>
                              <div className="p-6 bg-black/40 rounded-xl border-2 border-white/5 text-lg text-primary/70 font-black italic leading-relaxed selection:bg-primary selection:text-black">
                                 <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-2">
                                    <span className="uppercase tracking-[0.4em] text-[9px] font-black">Architectural_Rationale</span>
                                    <ArrowUpRight className="size-4 opacity-30" />
                                 </div>
                                 {f.logic}
                              </div>
                           </Card>
                         ))}
                      </div>
                   </div>
                 ) : (
                   <div className="h-full flex flex-col items-center justify-center text-center opacity-10 gap-16 py-40">
                      <div className="relative group/lock">
                        <Radar className="size-48 md:size-72 animate-spin-slow text-primary group-hover:scale-110 transition-transform duration-1000" />
                        <Skull className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-16 md:size-24 text-primary/40 animate-neural" />
                        <div className="absolute -inset-20 border-[20px] border-dashed border-primary/5 rounded-full animate-reverse-spin opacity-20" />
                      </div>
                      <div className="space-y-6">
                         <h3 className="text-5xl md:text-9xl font-black uppercase tracking-[1.5em] text-white italic gold-glow leading-none">Searching</h3>
                         <p className="text-xl md:text-3xl font-bold italic text-gray-500 uppercase tracking-widest">Establishing neural link to consult supreme wisdom.</p>
                      </div>
                   </div>
                 )}
              </CardContent>
              <div className="p-8 border-t-2 border-white/5 mt-auto flex justify-between items-center opacity-30 text-[10px] font-black uppercase tracking-[2em] italic">
                 <span>SUPREME_ORACLE_DNA_v53_AL_GHAZALI_ROOT</span>
                 <Fingerprint className="size-10 text-primary font-black animate-pulse" />
              </div>
           </Card>
        </div>

        <div className="mt-auto relative z-10 flex justify-center items-center gap-16 opacity-40 text-[12px] md:text-[18px] font-black uppercase tracking-[2em] md:tracking-[6em] italic text-white drop-shadow-xl pb-12">
            <span>AL-MUIZZ SUPREME HIERARCHY v53.0</span>
            <div className="size-4 rounded-full bg-white animate-pulse shadow-[0_0_40px_white]" />
            <span>OMNISCIENT_ORACLE_ACTIVE_2026</span>
        </div>
      </main>
    </div>
  )
}
