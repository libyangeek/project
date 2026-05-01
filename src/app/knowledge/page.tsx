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
  Zap
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

  const handleSearch = async () => {
    if (!query.trim()) return
    setLoading(true)
    try {
      const data = await modularAiKnowledgeBaseReporting({ reportQuery: query })
      setReport(data)
      toast({ title: "Intelligence Compiled" })
    } catch (err) {
      toast({ variant: "destructive", title: "Analysis Failed" })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen bg-black">
      <SidebarNav />
      <main className="flex-1 ml-64 p-10 bg-[radial-gradient(circle_at_bottom_right,rgba(239,68,68,0.08),transparent)]">
        <header className="mb-16 flex justify-between items-center relative z-10 animate-in fade-in slide-in-from-top-4 duration-1000">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <Badge className="bg-red-600/20 text-red-500 border-red-500/30 text-[11px] uppercase font-bold tracking-[0.4em] px-3 py-0.5 animate-pulse">Neural Insight Node</Badge>
              <span className="text-[11px] text-muted-foreground uppercase font-bold tracking-[0.2em]">Predator v18.0 Intel Vault</span>
            </div>
            <h2 className="text-6xl font-headline font-bold text-white mb-3 tracking-tighter italic drop-shadow-[0_0_20px_rgba(239,68,68,0.4)]">Neural Vault</h2>
            <p className="text-muted-foreground max-w-2xl text-lg font-medium italic">Unified RAG system for high-precision forensic data and OSINT synthesis via the Alpha Core.</p>
          </div>
          <Button className="bg-red-600 hover:bg-red-700 text-white h-16 px-10 rounded-2xl font-bold uppercase tracking-[0.4em] text-[10px] shadow-2xl shadow-red-600/40">
            <Plus className="size-5 mr-4" /> Ingest Strike Intel
          </Button>
        </header>

        <div className="flex gap-6 mb-12 relative z-10">
          <div className="relative flex-1 group">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 size-7 text-red-500/40 group-focus-within:text-red-600 transition-all" />
            <Input 
              placeholder="Query the Alpha knowledge base for lethal insights..."
              className="bg-black/80 border-red-500/20 pl-16 h-20 rounded-[2.5rem] focus:ring-red-600/20 text-xl italic transition-all shadow-2xl"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            />
          </div>
          <Button 
            className="h-20 px-12 bg-red-600 hover:bg-red-700 rounded-[2.5rem] shadow-2xl shadow-red-600/40 font-bold tracking-[0.4em] text-[11px] uppercase group transition-all"
            onClick={handleSearch}
            disabled={loading}
          >
            {loading ? <Loader2 className="size-7 animate-spin mr-4" /> : <Zap className="size-7 mr-4 group-hover:scale-125 transition-transform" />}
            Synthesize
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 relative z-10">
          <div className="lg:col-span-1 space-y-8">
            <Card className="glass-card border-red-600/30 rounded-[3rem] shadow-2xl">
              <CardHeader className="p-8">
                <CardTitle className="text-white flex items-center gap-4 text-sm uppercase tracking-[0.3em] italic">
                  <Filter className="size-5 text-red-600" /> Strike Sources
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 pt-0 space-y-4">
                {[
                  { name: "Forensic Extraction", count: 142, icon: History },
                  { name: "Chat Strike Logs", count: 2891, icon: BarChart3 },
                  { name: "OSINT Repository", count: 85, icon: TrendingUp },
                  { name: "Exploit Arsenal", count: 42, icon: FileText },
                ].map((col, i) => (
                  <div key={i} className="flex items-center justify-between p-4 rounded-2xl hover:bg-red-600/10 transition-all group cursor-pointer border border-transparent hover:border-red-600/40">
                    <div className="flex items-center gap-4">
                      <col.icon className="size-5 text-muted-foreground group-hover:text-red-500 transition-colors" />
                      <span className="text-sm font-bold text-muted-foreground group-hover:text-white uppercase tracking-tighter">{col.name}</span>
                    </div>
                    <Badge variant="outline" className="text-[10px] bg-red-600/5 border-red-500/20 text-red-500">{col.count}</Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="glass-card border-red-500/10 rounded-[2.5rem]">
              <CardHeader className="p-8 pb-4">
                <CardTitle className="text-white text-[11px] uppercase tracking-[0.5em] opacity-40 font-bold italic">Recent Ingestions</CardTitle>
              </CardHeader>
              <CardContent className="p-8 pt-0 space-y-6">
                {[
                  "Telegram leak dump - 42.1MB",
                  "iOS Forensic Strike #041",
                  "ShadowAgent beacon log"
                ].map((ingest, i) => (
                  <div key={i} className="flex gap-4 text-[11px] text-muted-foreground border-b border-white/5 pb-4 last:border-0 italic font-medium">
                    <div className="size-2 mt-1.5 rounded-full bg-red-600 shadow-[0_0_8px_red] shrink-0" />
                    <span>{ingest}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-3">
            {report ? (
              <Card className="glass-card border-red-600/40 animate-in fade-in zoom-in-95 duration-1000 rounded-[3.5rem] shadow-[0_0_80px_rgba(239,68,68,0.15)] overflow-hidden">
                <CardHeader className="bg-red-950/20 border-b border-red-600/20 p-10">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-6">
                       <div className="size-16 rounded-[2rem] bg-red-600 flex items-center justify-center border border-red-400 shadow-[0_0_30px_rgba(239,68,68,0.4)]">
                          <Skull className="size-8 text-white" />
                       </div>
                       <div>
                          <Badge className="bg-red-600/20 text-red-500 border-red-500/30 mb-3 uppercase font-bold tracking-[0.4em] px-4 py-1">Automated Alpha Synthesis</Badge>
                          <CardTitle className="text-4xl text-white italic tracking-tighter uppercase">Intelligence Analysis Report</CardTitle>
                          <CardDescription className="text-red-500 font-bold text-[11px] uppercase tracking-[0.4em] mt-2">Generated via Arbiter Predator RAG</CardDescription>
                       </div>
                    </div>
                    <Button variant="outline" className="h-14 px-10 rounded-2xl border-white/10 hover:bg-red-600/20 hover:border-red-600/40 text-[10px] uppercase tracking-[0.4em] font-bold transition-all">Extract PDF</Button>
                  </div>
                </CardHeader>
                <CardContent className="p-12">
                  <div className="prose prose-invert max-w-none prose-p:text-muted-foreground prose-headings:text-white prose-code:text-red-500">
                    <div className="bg-red-600/5 rounded-3xl p-10 border border-red-600/20 mb-12 italic text-lg text-red-500 shadow-inner">
                      <strong className="uppercase tracking-widest block mb-4">Executive Strike Summary:</strong> {report.reportSummary}
                    </div>
                    <div className="font-code text-base whitespace-pre-wrap leading-loose opacity-90">
                      {report.reportContent}
                    </div>
                  </div>
                  
                  {report.reportRankings && report.reportRankings.length > 0 && (
                    <div className="mt-20">
                      <h4 className="text-xl font-bold text-white mb-8 flex items-center gap-4 uppercase tracking-[0.3em] italic">
                        <BarChart3 className="size-6 text-red-600" /> Source Relevance Ranking
                      </h4>
                      <div className="space-y-6">
                        {report.reportRankings.map((rank: any, i: number) => (
                          <div key={i} className="p-8 rounded-[2.5rem] bg-black/60 border border-white/5 flex gap-8 hover:border-red-600/40 transition-all group">
                            <div className="size-16 rounded-[1.5rem] bg-red-600/10 flex items-center justify-center font-bold text-red-500 text-2xl border border-red-500/20 shadow-2xl group-hover:scale-110 transition-transform shrink-0">
                              {rank.relevanceScore}%
                            </div>
                            <div className="flex-1">
                              <div className="text-[12px] font-bold text-white mb-2 uppercase tracking-[0.3em] opacity-60">Neural Node: {rank.documentId}</div>
                              <p className="text-sm text-muted-foreground italic leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">"...{rank.snippet}..."</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ) : (
              <div className="h-full min-h-[750px] border-2 border-dashed border-red-600/20 rounded-[5rem] flex flex-col items-center justify-center text-center p-20 bg-black/40 group transition-all hover:bg-red-950/5 relative overflow-hidden shadow-2xl">
                <div className="size-64 bg-red-600/5 rounded-full flex items-center justify-center mb-16 border border-red-600/10 group-hover:scale-110 transition-transform duration-1000 relative">
                  <Database className="size-32 text-red-600/20 transition-all duration-1000 group-hover:text-red-600/40" />
                  <div className="absolute inset-0 bg-red-600/5 rounded-full blur-[120px] animate-pulse" />
                </div>
                <h3 className="text-7xl font-headline font-bold text-white mb-10 tracking-tighter italic drop-shadow-2xl">Neural Vault Passive</h3>
                <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-16 text-3xl font-medium italic">
                   "Query the Alpha Node to synthesize lethal intelligence from billions of data points stored in the Sovereign Predator RAG."
                </p>
                <div className="flex gap-10">
                  <Badge variant="outline" className="bg-white/5 py-6 px-12 text-[14px] tracking-[0.6em] uppercase border-red-600/30 rounded-full shadow-2xl backdrop-blur-3xl group-hover:border-red-600/60 transition-colors">Forensic Core</Badge>
                  <Badge variant="outline" className="bg-white/5 py-6 px-12 text-[14px] tracking-[0.6em] uppercase border-red-600/30 rounded-full shadow-2xl backdrop-blur-3xl group-hover:border-red-600/60 transition-colors">OSINT Matrix</Badge>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}