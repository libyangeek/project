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
  Radar
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { toast } from "@/hooks/use-toast"
import { vulnerabilityOracle } from "@/ai/flows/vulnerability-oracle-flow"

export default function VulnerabilitiesPage() {
  const [query, setQuery] = React.useState("")
  const [loading, setLoading] = React.useState(false)
  const [oracleResult, setOracleResult] = React.useState<any>(null)
  const [kevList, setKevList] = React.useState<any[]>([])

  React.useEffect(() => {
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
      if (data.output) setKevList(JSON.parse(data.output))
    } catch {}
  }

  const handleConsult = async () => {
    if (!query) return
    setLoading(true)
    try {
      const data = await vulnerabilityOracle({ query })
      setOracleResult(data)
      toast({ title: "Oracle Wisdom Received" })
    } catch (err) {
      toast({ variant: "destructive", title: "Oracle Link Severed" })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/30 scanline-effect font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-80 p-8 md:p-16 relative overflow-y-auto min-h-screen scrollbar-hide flex flex-col z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.08),transparent)] pointer-events-none z-0" />
        
        <header className="mb-20 relative z-10 animate-in fade-in slide-in-from-top-8 duration-1000">
           <div className="flex items-center gap-8 mb-6">
              <div className="size-24 rounded-[2rem] bg-primary flex items-center justify-center border-4 border-black/30 shadow-[0_0_80px_rgba(212,175,55,0.5)] animate-neural">
                 <Radar className="size-14 text-black" />
              </div>
              <div>
                 <Badge className="bg-primary text-black border-none px-10 py-2 text-[18px] font-black tracking-[0.8em] shadow-9xl italic rounded-full mb-4">VULNERABILITY_ORACLE v50.0</Badge>
                 <h1 className="text-6xl md:text-[10rem] font-headline font-bold text-white tracking-tighter italic uppercase gold-glow leading-none">The <span className="text-primary">Oracle</span></h1>
              </div>
           </div>
           <p className="text-2xl md:text-5xl text-muted-foreground mt-8 italic max-w-7xl leading-relaxed uppercase">
             "سيدي الغزالي، عراف الثغرات يرى ما وراء الكود؛ 348,231 ثغرة عالمية و <span className="text-primary font-black underline decoration-primary decoration-[8px] underline-offset-[16px] shadow-2xl uppercase tracking-widest">Kev Catalog</span> تحت سطوتك الآن."
           </p>
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
                      placeholder="CVE-ID / Product Name..." 
                      className="bg-black/99 border-4 border-primary/20 h-24 rounded-[3.5rem] text-3xl italic px-10 focus:border-primary text-white font-black shadow-inner"
                    />
                    <Button onClick={handleConsult} disabled={loading} className="w-full h-28 bg-primary hover:bg-white text-black font-black uppercase tracking-[1em] rounded-[4rem] shadow-9xl transition-all text-2xl italic border-8 border-black/30 group">
                      {loading ? <Loader2 className="size-12 animate-spin mr-4" /> : <Eye className="size-12 mr-4 group-hover:scale-125 transition-all gold-glow" />}
                      CONSULT_WISDOM
                    </Button>
                 </CardContent>
              </Card>

              <Card className="kali-card border-emerald-500/40 bg-black/80 rounded-[4rem] p-10 border-4 shadow-7xl">
                 <h4 className="text-2xl font-black text-emerald-500 uppercase tracking-[0.5em] mb-8 italic flex items-center gap-6 border-b-4 border-emerald-500/20 pb-6">
                    <AlertTriangle className="size-10" /> KEV Priorities
                 </h4>
                 <div className="space-y-6 h-[400px] overflow-y-auto scrollbar-hide">
                    {kevList.map((k, i) => (
                      <div key={i} className="p-6 rounded-[2rem] bg-white/5 border-2 border-white/5 hover:border-emerald-500 transition-all cursor-crosshair group/k">
                         <div className="flex justify-between items-center mb-4">
                            <span className="text-xl font-black text-white italic gold-glow">{k.cve}</span>
                            <Badge className="bg-red-600/30 text-red-500 border-none px-4 py-1 rounded-full text-[10px] font-black italic">EXPLOITED</Badge>
                         </div>
                         <div className="text-[12px] text-muted-foreground uppercase font-black italic tracking-widest">{k.product}</div>
                      </div>
                    ))}
                 </div>
              </Card>
           </div>

           <Card className="xl:col-span-2 kali-card border-primary/60 bg-black/99 rounded-[7rem] p-16 border-8 shadow-9xl flex flex-col group overflow-hidden relative">
              <div className="absolute inset-0 bg-primary/5 opacity-5 animate-pulse pointer-events-none" />
              <CardHeader className="p-0 mb-12 border-b-8 border-white/5 pb-10 bg-primary/10 rounded-t-[5rem] px-12 py-8">
                 <CardTitle className="text-5xl md:text-8xl text-white italic uppercase font-black gold-glow flex items-center gap-10">
                    <Binary className="size-16 text-primary animate-pulse" /> Oracle Wisdom
                 </CardTitle>
              </CardHeader>
              <CardContent className="p-0 flex-1 relative overflow-hidden">
                 {oracleResult ? (
                   <div className="space-y-12 animate-in fade-in zoom-in-95 duration-1000">
                      <div className="p-12 rounded-[4rem] bg-primary/5 border-4 border-primary/30 italic text-4xl text-gray-100 leading-tight font-black shadow-inner">
                         "{oracleResult.strategicBrief}"
                      </div>
                      <div className="grid grid-cols-1 gap-8">
                         {oracleResult.findings.map((f: any, i: number) => (
                           <div key={i} className="p-10 rounded-[3rem] bg-white/5 border-4 border-white/5 hover:border-primary transition-all duration-1000 shadow-7xl relative overflow-hidden group/find">
                              <div className="flex justify-between items-start mb-8 relative z-10">
                                 <div className="flex items-center gap-6">
                                    <div className="size-14 rounded-2xl bg-primary/20 flex items-center justify-center"><Zap className="size-8 text-primary" /></div>
                                    <span className="text-3xl font-black text-white italic gold-glow uppercase">{f.cve}</span>
                                 </div>
                                 <Badge className="bg-primary/20 text-primary border-4 border-primary/40 px-8 py-2 rounded-full font-black text-xl italic">{f.severity}</Badge>
                              </div>
                              <p className="text-2xl text-gray-300 italic font-bold mb-6 leading-relaxed">"{f.exploitStrategy}"</p>
                              <div className="p-6 bg-black/80 rounded-[2rem] border-2 border-white/10 text-xl text-primary/70 font-black italic">
                                 REASONING: {f.logic}
                              </div>
                           </div>
                         ))}
                      </div>
                   </div>
                 ) : (
                   <div className="h-full flex flex-col items-center justify-center text-center opacity-10 gap-16 py-40">
                      <Radar className="size-64 animate-spin-slow text-primary" />
                      <h3 className="text-7xl font-black uppercase tracking-[2em] text-white italic">Awaiting Oracle</h3>
                   </div>
                 )}
              </CardContent>
              <div className="p-10 border-t-8 border-white/5 mt-10 flex justify-between items-center opacity-30 text-[14px] font-black uppercase tracking-[3em] italic">
                 <span>VULN_ORACLE_v50_AL_GHAZALI_ROOT</span>
                 <Fingerprint className="size-12 text-primary animate-pulse" />
              </div>
           </Card>
        </div>

        <div className="mt-auto relative z-10 flex justify-center items-center gap-48 opacity-40 text-[22px] font-black uppercase tracking-[6em] italic text-white drop-shadow-3xl pb-12">
            <span>AL-MUIZZ VULNERABILITY ORACLE v50.0</span>
            <div className="size-10 rounded-full bg-white animate-pulse shadow-[0_0_100px_white]" />
            <span>SINGULARITY_OF_WISDOM_2026</span>
        </div>
      </main>
    </div>
  )
}
