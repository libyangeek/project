"use client"

import * as React from "react"
import { SidebarNav } from "@/components/platform/sidebar-nav"
import { 
  Database, 
  Search, 
  FileText, 
  Plus, 
  Filter, 
  BarChart3,
  TrendingUp,
  History,
  Loader2,
  Skull,
  Flame,
  Zap,
  Crown,
  Lock,
  Binary,
  Target,
  Sword,
  Shield
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { modularAiKnowledgeBaseReporting } from "@/ai/flows/modular-ai-knowledge-base-reporting"
import { toast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"

export default function KnowledgePage() {
  const [query, setQuery] = React.useState("")
  const [loading, setLoading] = React.useState(false)
  const [report, setReport] = React.useState<any>(null)
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const handleSearch = async () => {
    if (!query.trim()) return
    setLoading(true)
    try {
      const data = await modularAiKnowledgeBaseReporting({ reportQuery: query })
      setReport(data)
      toast({ title: "Intelligence Compiled" })
    } catch (err) {
      toast({ variant: "destructive", title: "Synthesis Failed" })
    } finally {
      setLoading(false)
    }
  }

  if (!mounted) return null;

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-red-600/30">
      <SidebarNav />
      <main className="flex-1 ml-64 p-12 relative bg-[radial-gradient(circle_at_bottom_right,rgba(239,68,68,0.12),transparent)] overflow-y-auto">
        <header className="mb-20 flex justify-between items-start relative z-10 animate-in fade-in slide-in-from-top-8 duration-1000">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <Badge className="bg-red-600/30 text-red-500 border-red-500/50 text-[11px] uppercase font-bold tracking-[0.6em] px-5 py-1.5 animate-pulse shadow-[0_0_30px_rgba(220,38,38,0.4)] rounded-xl">Neural Insight Node v18.0</Badge>
              <span className="text-[11px] text-muted-foreground uppercase font-bold tracking-[0.6em] italic flex items-center gap-2">
                 <Crown className="size-3 text-amber-500" /> Predator Intel Vault
              </span>
            </div>
            <h2 className="text-8xl font-headline font-bold text-white mb-6 tracking-tighter italic drop-shadow-[0_0_40px_rgba(220,38,38,0.6)]">Neural Vault</h2>
            <p className="text-muted-foreground max-w-3xl text-2xl font-medium italic leading-relaxed">
               "القبو المعرفي الموحد: هنا نقوم بتركيب المعلومات المستنزفة من الضحايا وتحويلها إلى رؤى تكتيكية غاشمة."
            </p>
          </div>
          <div className="flex gap-6">
             <Button className="bg-red-600 hover:bg-red-700 text-white h-24 px-12 rounded-[2.5rem] font-bold uppercase tracking-[0.6em] text-[12px] shadow-[0_20px_50px_rgba(220,38,38,0.5)] border-2 border-red-400/40 group transition-all duration-700 active:scale-95">
                <Plus className="size-8 mr-6 group-hover:rotate-90 transition-transform" /> Ingest Strike Intel
             </Button>
          </div>
        </header>

        <div className="flex gap-8 mb-16 relative z-10 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
          <div className="relative flex-1 group">
            <Search className="absolute left-8 top-1/2 -translate-y-1/2 size-8 text-red-500/40 group-focus-within:text-red-600 transition-all duration-700" />
            <Input 
              placeholder="Query the Alpha knowledge base for lethal insights..."
              className="bg-black/90 border-2 border-red-500/20 pl-24 h-24 rounded-[3rem] focus:border-red-600/60 text-2xl italic transition-all shadow-[0_0_50px_rgba(0,0,0,0.5)] font-medium"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            />
          </div>
          <Button 
            className="h-24 px-16 bg-red-600 hover:bg-red-700 rounded-[3rem] shadow-[0_0_60px_rgba(220,38,38,0.5)] font-bold tracking-[0.6em] text-[13px] uppercase group transition-all duration-700 border-2 border-red-400/30"
            onClick={handleSearch}
            disabled={loading}
          >
            {loading ? <Loader2 className="size-8 animate-spin mr-6" /> : <Zap className="size-8 mr-6 group-hover:scale-125 transition-transform duration-700" />}
            Synthesize
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 relative z-10 pb-32">
          <div className="lg:col-span-1 space-y-10">
            <Card className="glass-card border-red-600/30 rounded-[4rem] p-6 shadow-2xl border-2 group overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-1.5 bg-red-600/20 group-hover:bg-red-600 animate-pulse transition-colors" />
              <CardHeader className="p-10">
                <CardTitle className="text-white flex items-center gap-6 text-sm uppercase tracking-[0.5em] italic font-bold">
                  <Filter className="size-7 text-red-600 group-hover:rotate-180 transition-transform duration-700" /> Strike Sources
                </CardTitle>
              </CardHeader>
              <CardContent className="p-10 pt-0 space-y-5">
                {[
                  { name: "Forensic Core", count: 142, icon: History, color: "text-red-500" },
                  { name: "Chat Strike Logs", count: 2891, icon: BarChart3, color: "text-amber-500" },
                  { name: "OSINT Database", count: 85, icon: TrendingUp, color: "text-emerald-500" },
                  { name: "Exploit Arsenal", count: 42, icon: FileText, color: "text-blue-500" },
                ].map((col, i) => (
                  <div key={i} className="flex items-center justify-between p-6 rounded-[2rem] bg-black border-2 border-white/5 hover:border-red-600/50 transition-all group cursor-pointer shadow-xl">
                    <div className="flex items-center gap-6">
                      <col.icon className={cn("size-6 transition-colors duration-500", col.color)} />
                      <span className="text-sm font-bold text-muted-foreground group-hover:text-white uppercase tracking-tight italic">{col.name}</span>
                    </div>
                    <Badge variant="outline" className="text-[11px] bg-red-600/10 border-red-500/30 text-red-500 font-bold px-4 py-1 rounded-xl shadow-lg">{col.count}</Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="glass-card border-red-500/10 rounded-[3.5rem] p-4 border-2">
              <CardHeader className="p-10 pb-6 border-b border-white/5 mb-8">
                <CardTitle className="text-white text-[12px] uppercase tracking-[0.8em] opacity-50 font-bold italic flex items-center gap-5">
                   <Activity className="size-5 text-red-600" /> Recent Ingestions
                </CardTitle>
              </CardHeader>
              <CardContent className="p-10 pt-0 space-y-8">
                {[
                  "Telegram leak dump - 42.1MB",
                  "iOS Forensic Strike #041",
                  "ShadowAgent beacon log",
                  "Al-Ghazali Directive #Master"
                ].map((ingest, i) => (
                  <div key={i} className="flex gap-6 text-[12px] text-muted-foreground border-b border-white/5 pb-6 last:border-0 italic font-medium group hover:text-white transition-colors cursor-default">
                    <div className="size-2.5 mt-2 rounded-full bg-red-600 shadow-[0_0_12px_red] shrink-0 animate-pulse" />
                    <span className="tracking-tight">{ingest}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-3">
            {report ? (
              <Card className="glass-card border-red-600/40 animate-in fade-in zoom-in-95 duration-1000 rounded-[5rem] shadow-[0_0_120px_rgba(220,38,38,0.2)] overflow-hidden border-2">
                <CardHeader className="bg-red-950/30 border-b border-red-600/20 p-16">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-10">
                       <div className="size-20 rounded-[2.5rem] bg-red-600 flex items-center justify-center border-2 border-red-400 shadow-[0_0_50px_rgba(220,38,38,0.5)] animate-neural">
                          <Skull className="size-10 text-white" />
                       </div>
                       <div>
                          <Badge className="bg-red-600/30 text-red-500 border-red-500/40 mb-4 uppercase font-bold tracking-[0.6em] px-6 py-2 rounded-2xl shadow-xl">Automated Alpha Synthesis</Badge>
                          <CardTitle className="text-5xl text-white italic tracking-tighter uppercase font-bold">Intelligence Analysis Report</CardTitle>
                          <CardDescription className="text-red-500 font-bold text-[13px] uppercase tracking-[0.8em] mt-3 italic">Generated via Arbiter Predator RAG // Sync: v20.5</CardDescription>
                       </div>
                    </div>
                    <Button variant="outline" className="h-16 px-12 rounded-[2rem] border-white/10 bg-white/5 hover:bg-red-600/20 hover:border-red-600/50 text-[11px] uppercase tracking-[0.6em] font-bold transition-all duration-700 border-2">Extract PDF</Button>
                  </div>
                </CardHeader>
                <CardContent className="p-16">
                  <div className="prose prose-invert max-w-none prose-p:text-muted-foreground prose-headings:text-white prose-code:text-red-500 font-body">
                    <div className="bg-red-600/5 rounded-[3rem] p-12 border-2 border-red-600/20 mb-16 italic text-2xl text-red-500 shadow-inner leading-relaxed">
                      <strong className="uppercase tracking-[0.4em] block mb-6 text-sm text-white flex items-center gap-4">
                         <Target className="size-5 text-red-600" /> Executive Strike Summary:
                      </strong> 
                      "{report.reportSummary}"
                    </div>
                    <div className="font-code text-lg whitespace-pre-wrap leading-loose opacity-90 p-10 bg-black/40 rounded-[3rem] border border-white/5 shadow-inner">
                      {report.reportContent}
                    </div>
                  </div>
                  
                  {report.reportRankings && report.reportRankings.length > 0 && (
                    <div className="mt-24">
                      <h4 className="text-3xl font-bold text-white mb-12 flex items-center gap-6 uppercase tracking-[0.4em] italic border-b border-red-600/10 pb-6">
                        <BarChart3 className="size-10 text-red-600" /> Source Relevance Ranking
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {report.reportRankings.map((rank: any, i: number) => (
                          <div key={i} className="p-10 rounded-[3.5rem] bg-white/5 border-2 border-white/5 flex gap-10 hover:border-red-600/60 transition-all duration-700 group relative overflow-hidden shadow-2xl">
                            <div className="absolute -top-10 -right-10 size-48 bg-red-600/5 rounded-full blur-3xl group-hover:bg-red-600/10 transition-colors" />
                            <div className="size-20 rounded-[2rem] bg-red-600/15 flex items-center justify-center font-bold text-red-500 text-3xl border-2 border-red-500/30 shadow-2xl group-hover:scale-110 transition-transform shrink-0">
                              {rank.relevanceScore}%
                            </div>
                            <div className="flex-1 relative z-10">
                              <div className="text-[13px] font-bold text-white mb-3 uppercase tracking-[0.4em] opacity-60 italic flex items-center gap-3">
                                 <Binary className="size-4" /> Neural Node: {rank.documentId}
                              </div>
                              <p className="text-base text-muted-foreground italic leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity font-medium">"...{rank.snippet}..."</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ) : (
              <div className="h-full min-h-[850px] border-4 border-dashed border-red-600/20 rounded-[6rem] flex flex-col items-center justify-center text-center p-24 bg-black/40 group transition-all hover:bg-red-950/5 relative overflow-hidden shadow-2xl">
                <div className="size-80 bg-red-600/5 rounded-full flex items-center justify-center mb-20 border-2 border-red-600/10 group-hover:scale-110 transition-transform duration-1000 relative">
                  <Database className="size-40 text-red-600/20 transition-all duration-1000 group-hover:text-red-600/40" />
                  <div className="absolute inset-0 bg-red-600/5 rounded-full blur-[140px] animate-pulse" />
                  {mounted && loading && (
                    <div className="absolute inset-0 flex items-center justify-center">
                       <div className="size-96 border-2 border-red-600/20 rounded-full animate-ping" />
                    </div>
                  )}
                </div>
                <h3 className="text-8xl font-headline font-bold text-white mb-10 tracking-tighter italic drop-shadow-[0_0_50px_rgba(220,38,38,0.6)]">Neural Vault</h3>
                <p className="text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-20 text-3xl font-medium italic">
                   "Query the Alpha Node to synthesize lethal intelligence from billions of data points stored in the Sovereign Predator RAG."
                </p>
                <div className="flex gap-12">
                  <Badge variant="outline" className="bg-white/5 py-8 px-16 text-[15px] tracking-[0.8em] uppercase border-red-600/40 rounded-full shadow-2xl backdrop-blur-3xl group-hover:border-red-600/80 transition-all duration-1000">Forensic Core Active</Badge>
                  <Badge variant="outline" className="bg-white/5 py-8 px-16 text-[15px] tracking-[0.8em] uppercase border-red-600/40 rounded-full shadow-2xl backdrop-blur-3xl group-hover:border-red-600/80 transition-all duration-1000">OSINT Matrix Armed</Badge>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
