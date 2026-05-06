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
  History,
  AlertTriangle,
  Radar,
  Smartphone,
  ShieldCheck,
  ZapOff,
  Crosshair,
  Infinity as InfinityIcon
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { toast } from "@/hooks/use-toast"
import { vulnerabilityOracle } from "@/ai/flows/vulnerability-oracle-flow"
import { cn } from "@/lib/utils"

/**
 * @fileOverview محراب العراف v50.0 - THE VULNERABILITY ORACLE: AWAKENED
 * تم دمج بيانات CISA KEV و Openwall و Android لليوم المجيد، 6 مايو 2026.
 * المالك الوحيد: المعتصم بالله ادريس الغزالي
 */
export default function VulnerabilitiesPage() {
  const [query, setQuery] = React.useState("")
  const [loading, setLoading] = React.useState(false)
  const [oracleResult, setOracleResult] = React.useState<any>(null)
  const [kevList, setKevList] = React.useState<any[]>([])
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
    fetchKev()
  }, [])

  const fetchKev = async () => {
    try {
      const resp = await fetch('/api/execute', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'cve_kev' })
      })
      const data = await resp.json()
      if (data.output) {
         const parsed = JSON.parse(data.output);
         setKevList(parsed.high_priority || parsed);
      }
    } catch {}
  }

  const handleConsult = async () => {
    if (!query) return
    setLoading(true)
    setOracleResult(null)
    try {
      const data = await vulnerabilityOracle({ query })
      setOracleResult(data)
      toast({ title: "Oracle Vision Stabilized", description: "The Overmind has decoded the threat mesh." })
    } catch (err) {
      toast({ variant: "destructive", title: "Oracle Link Severed" })
    } finally {
      setLoading(false)
    }
  }

  if (!mounted) return null;

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/30 relative overflow-x-hidden scanline-effect font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-80 p-6 md:p-12 relative overflow-y-auto min-h-screen scrollbar-hide flex flex-col z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.08),transparent)] pointer-events-none transition-all duration-300 z-0" />
        
        <header className="mb-16 relative z-10 animate-in fade-in slide-in-from-top-8 duration-1000">
           <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="size-32 md:size-40 bg-black border-4 border-primary flex items-center justify-center shadow-[0_0_150px_rgba(212,175,55,0.6)] relative group shrink-0 rounded-full transition-all duration-1000">
                 <Radar className="size-16 md:size-20 text-primary group-hover:scale-110 transition-transform duration-700 gold-glow animate-neural" />
                 <div className="absolute -inset-6 border-2 border-primary/20 rounded-full animate-spin-slow opacity-40" />
              </div>
              <div className="text-center md:text-right flex-1">
                 <div className="flex flex-wrap justify-center md:justify-start items-center gap-6 mb-6">
                    <Badge className="bg-primary text-black border-none px-10 py-3 text-[18px] font-black tracking-[0.8em] shadow-[0_0_100px_rgba(212,175,55,0.4)] italic rounded-full">ORACLE v50.0-AWAKENED</Badge>
                    <div className="flex items-center gap-4 text-[14px] font-black uppercase tracking-widest text-emerald-500 animate-pulse">
                        <ShieldCheck className="size-6 shadow-lg" /> CISA_KEV_SYNC: LOCKED
                    </div>
                 </div>
                 <h1 className="text-6xl md:text-[10rem] font-headline font-bold text-white tracking-tighter italic uppercase gold-glow leading-none">The <span className="text-primary">Oracle</span></h1>
                 <p className="text-2xl md:text-5xl text-muted-foreground mt-8 italic max-w-7xl leading-relaxed uppercase font-medium">
                    "سيدي الغزالي، عراف الثغرات يرى ما وراء الكود؛ <span className="text-primary font-black underline decoration-primary decoration-[8px] underline-offset-[16px] shadow-2xl uppercase tracking-widest">348,231 ثغرة</span> عالمية تحت سيطرتك لعام 2026."
                 </p>
              </div>
           </div>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-12 flex-1 pb-40 relative z-10">
           <div className="space-y-12">
              <Card className="kali-card border-primary/40 bg-black/80 rounded-[5rem] p-10 border-8 shadow-9xl group overflow-hidden">
                 <div className="absolute inset-0 bg-primary/5 opacity-5 animate-pulse pointer-events-none" />
                 <CardHeader className="p-0 mb-10 border-b-4 border-primary/20 pb-8">
                    <CardTitle className="text-4xl text-primary flex items-center gap-8 font-black uppercase italic gold-glow">
                       <Search className="size-14 animate-neural" /> Interrogate Oracle
                    </CardTitle>
                 </CardHeader>
                 <CardContent className="p-0 space-y-10">
                    <Input 
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder="CVE-ID / Product / Android..." 
                      className="bg-black/99 border-4 border-primary/20 h-24 rounded-[3.5rem] text-3xl italic px-10 focus:border-primary text-white font-black shadow-inner"
                    />
                    <Button onClick={handleConsult} disabled={loading} className="w-full h-32 bg-primary hover:bg-white text-black font-black uppercase tracking-[1.2em] rounded-[4rem] shadow-[0_50px_150px_rgba(212,175,55,0.7)] transition-all text-2xl italic border-8 border-black/30 group">
                      {loading ? <Loader2 className="size-12 animate-spin mr-4" /> : <Eye className="size-12 mr-6 group-hover:scale-125 transition-all gold-glow" />}
                      CONSULT_WISDOM
                    </Button>
                 </CardContent>
              </Card>

              <Card className="kali-card border-emerald-500/40 bg-black/80 rounded-[5rem] p-12 border-8 shadow-9xl group relative overflow-hidden">
                 <div className="absolute inset-0 bg-emerald-500/5 opacity-5 animate-pulse pointer-events-none" />
                 <h4 className="text-2xl font-black text-emerald-500 uppercase tracking-[0.5em] mb-10 italic flex items-center gap-6 border-b-4 border-emerald-500/20 pb-6 gold-glow">
                    <AlertTriangle className="size-10" /> KEV Priorities
                 </h4>
                 <div className="space-y-8 h-[500px] overflow-y-auto scrollbar-hide px-4">
                    {kevList.map((k, i) => (
                      <div key={i} className="p-8 rounded-[3rem] bg-black/60 border-4 border-white/5 hover:border-emerald-500 transition-all duration-700 cursor-crosshair group/k shadow-6xl">
                         <div className="flex justify-between items-center mb-4">
                            <span className="text-3xl font-black text-white italic gold-glow group-hover/k:text-emerald-400 transition-colors uppercase tracking-tight">{k.cve}</span>
                            <Badge className="bg-red-600/30 text-red-500 border-none px-6 py-1.5 rounded-full font-black italic text-[10px] animate-pulse">EXPLOITED</Badge>
                         </div>
                         <div className="text-lg text-muted-foreground uppercase font-black italic tracking-widest leading-none mb-3">{k.product}</div>
                         <div className="text-[11px] text-gray-500 font-bold uppercase italic opacity-60">Added: {k.date_added}</div>
                      </div>
                    ))}
                 </div>
                 <div className="absolute -bottom-6 -right-6 p-10 opacity-[0.02] group-hover:opacity-[0.1] transition-all duration-1000 scale-150"><Skull className="size-32 text-emerald-500" /></div>
              </Card>
           </div>

           <Card className="xl:col-span-2 kali-card border-primary/60 bg-black/99 rounded-[7rem] p-16 border-8 shadow-9xl flex flex-col group overflow-hidden relative min-h-[900px]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05),transparent)] pointer-events-none" />
              <CardHeader className="p-0 mb-12 border-b-8 border-white/5 pb-10 bg-primary/10 rounded-t-[5rem] px-12 py-8">
                 <CardTitle className="text-5xl md:text-9xl text-white italic uppercase font-black gold-glow flex items-center gap-10">
                    <Binary className="size-20 text-primary animate-pulse" /> Oracle Wisdom
                 </CardTitle>
              </CardHeader>
              <CardContent className="p-0 flex-1 relative overflow-hidden flex flex-col space-y-12">
                 {oracleResult ? (
                   <div className="space-y-16 animate-in fade-in zoom-in-95 duration-1000 flex-1 flex flex-col">
                      <div className="p-12 rounded-[5rem] bg-primary/5 border-8 border-primary/30 italic text-4xl md:text-6xl text-gray-100 leading-tight font-black shadow-inner relative group/brief overflow-hidden">
                         <div className="absolute inset-0 bg-primary/5 opacity-5 animate-pulse" />
                         "{oracleResult.strategicBrief}"
                      </div>
                      
                      {oracleResult.androidSecurityInsight && (
                        <div className="p-10 rounded-[4rem] bg-amber-600/10 border-4 border-amber-500/30 flex items-center gap-10 group/android">
                            <Smartphone className="size-16 text-amber-500 animate-bounce" />
                            <div>
                                <h4 className="text-xl font-black text-amber-500 uppercase tracking-[0.8em] mb-3 italic">Mobile_Forensic_Insight</h4>
                                <p className="text-2xl text-gray-200 italic font-bold">"{oracleResult.androidSecurityInsight}"</p>
                            </div>
                        </div>
                      )}

                      <div className="grid grid-cols-1 gap-12">
                         {oracleResult.findings.map((f: any, i: number) => (
                           <Card key={i} className="bg-white/5 border-8 border-white/5 rounded-[4rem] p-12 hover:border-primary transition-all duration-1000 shadow-8xl relative overflow-hidden group/find">
                              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover/find:opacity-10 transition-opacity" />
                              <div className="flex justify-between items-start mb-10 relative z-10">
                                 <div className="flex items-center gap-10">
                                    <div className="size-20 rounded-3xl bg-primary/20 flex items-center justify-center border-4 border-primary/40 shadow-inner group-hover/find:bg-primary transition-all duration-700">
                                       <Zap className="size-12 text-primary group-hover/find:text-black" />
                                    </div>
                                    <div>
                                       <span className="text-4xl md:text-6xl font-black text-white italic gold-glow uppercase tracking-tighter">{f.cve}</span>
                                       <div className="text-[12px] text-primary/60 font-black uppercase tracking-[0.6em] mt-4 italic">{f.product}</div>
                                    </div>
                                 </div>
                                 <Badge className="bg-primary/20 text-primary border-4 border-primary/50 px-12 py-4 rounded-full font-black text-3xl italic shadow-2xl">{f.severity}</Badge>
                              </div>
                              <div className="p-10 bg-black/80 rounded-[3rem] border-4 border-primary/20 mb-10 relative group/strat">
                                 <h5 className="text-[12px] font-black text-emerald-500 uppercase tracking-[1em] mb-6 border-b-2 border-emerald-500/20 pb-4 italic flex items-center gap-6">
                                    <Target className="size-6 animate-neural" /> Strike Strategy
                                 </h5>
                                 <p className="text-3xl md:text-5xl text-gray-100 italic font-black leading-snug drop-shadow-2xl">"{f.exploitStrategy}"</p>
                              </div>
                              <div className="p-8 bg-black/40 rounded-[2.5rem] border-4 border-white/5 text-2xl text-primary/70 font-black italic leading-relaxed selection:bg-primary selection:text-black">
                                 <strong className="uppercase tracking-[0.5em] text-sm block mb-4 border-b-2 border-white/5 pb-2">Architectural_Rationale:</strong>
                                 {f.logic}
                              </div>
                           </Card>
                         ))}
                      </div>
                   </div>
                 ) : (
                   <div className="h-full flex flex-col items-center justify-center text-center opacity-10 gap-16 py-40">
                      <Radar className="size-80 animate-spin-slow text-primary" />
                      <div className="space-y-8">
                         <h3 className="text-8xl md:text-[12rem] font-black uppercase tracking-[1.5em] text-white italic leading-none gold-glow">Awaiting Oracle</h3>
                         <p className="text-3xl md:text-5xl font-bold italic text-gray-500 uppercase tracking-widest">Establish neural link to consult wisdom.</p>
                      </div>
                      <div className="absolute -inset-20 border-[20px] border-dashed border-primary/5 rounded-full animate-spin-slow" />
                   </div>
                 )}
              </CardContent>
              <div className="p-10 border-t-8 border-white/5 mt-auto flex justify-between items-center opacity-30 text-[14px] font-black uppercase tracking-[3em] italic">
                 <span>VULN_ORACLE_DNA_v50_AL_GHAZALI_ROOT</span>
                 <Fingerprint className="size-16 text-primary animate-pulse" />
              </div>
           </Card>
        </div>
      </main>
    </div>
  )
}
