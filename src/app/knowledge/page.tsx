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
  Loader2
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { modularAiKnowledgeBaseReporting } from "@/ai/flows/modular-ai-knowledge-base-reporting"
import { toast } from "@/hooks/use-toast"

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
      toast({ title: "Report Compiled", description: "Intelligence synthesis complete." })
    } catch (err) {
      toast({ title: "Analysis Failed", description: "The knowledge base query encountered an error." })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen">
      <SidebarNav />
      <main className="flex-1 ml-64 p-8">
        <header className="mb-8 flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-headline font-bold text-white mb-2 tracking-tight">Sovereign Intel Hub</h2>
            <p className="text-muted-foreground">Unified RAG system for forensic data, chat logs, and OSINT analysis.</p>
          </div>
          <Button className="bg-primary text-white">
            <Plus className="size-4 mr-2" />
            Ingest Intel
          </Button>
        </header>

        <div className="flex gap-4 mb-8">
          <div className="relative flex-1 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
            <Input 
              placeholder="Query the platform knowledge base (e.g., 'Recent social engineering trends in UAE')..."
              className="bg-card/40 border-white/10 pl-12 h-14 rounded-2xl focus:ring-primary/20 text-lg transition-all"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            />
          </div>
          <Button 
            className="h-14 px-8 bg-primary rounded-2xl shadow-xl shadow-primary/20"
            onClick={handleSearch}
            disabled={loading}
          >
            {loading ? <Loader2 className="size-5 animate-spin" /> : "Synthesize Report"}
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Filter className="size-4 text-primary" />
                  Source Collections
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {[
                  { name: "Forensic Extractions", count: 142, icon: History },
                  { name: "Chat Logs (Bot)", count: 2891, icon: BarChart3 },
                  { name: "OSINT Repository", count: 85, icon: TrendingUp },
                  { name: "Exploit Payloads", count: 42, icon: FileText },
                ].map((col, i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-colors group cursor-pointer border border-transparent hover:border-white/5">
                    <div className="flex items-center gap-3">
                      <col.icon className="size-4 text-muted-foreground group-hover:text-primary" />
                      <span className="text-sm font-medium text-muted-foreground group-hover:text-white">{col.name}</span>
                    </div>
                    <Badge variant="outline" className="text-[10px] bg-white/5">{col.count}</Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-white text-base">Recent Ingestions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  "Telegram log dump - 42.1MB",
                  "iOS Forensic Extract #041",
                  "ShadowAgent beacon data"
                ].map((ingest, i) => (
                  <div key={i} className="flex gap-3 text-[11px] text-muted-foreground border-b border-white/5 pb-2 last:border-0">
                    <div className="size-1.5 mt-1.5 rounded-full bg-primary shrink-0" />
                    <span>{ingest}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-3">
            {report ? (
              <Card className="glass-card border-primary/20 animate-in fade-in zoom-in-95 duration-500">
                <CardHeader className="bg-white/5 border-b border-white/5">
                  <div className="flex justify-between items-center">
                    <div>
                      <Badge className="bg-primary/20 text-primary border-primary/30 mb-2">Automated Synthesis</Badge>
                      <CardTitle className="text-2xl text-white">Intelligence Analysis Report</CardTitle>
                      <CardDescription>Generated via Arbiter RAG System</CardDescription>
                    </div>
                    <Button variant="outline" size="sm">Export PDF</Button>
                  </div>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="prose prose-invert max-w-none prose-p:text-muted-foreground prose-headings:text-white prose-code:text-primary">
                    <div className="bg-white/5 rounded-xl p-6 border border-white/5 mb-8 italic text-sm text-primary/80">
                      <strong>Executive Summary:</strong> {report.reportSummary}
                    </div>
                    <div className="font-body whitespace-pre-wrap leading-relaxed">
                      {report.reportContent}
                    </div>
                  </div>
                  
                  {report.reportRankings && report.reportRankings.length > 0 && (
                    <div className="mt-12">
                      <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <BarChart3 className="size-5 text-primary" />
                        Source Relevance Ranking
                      </h4>
                      <div className="space-y-4">
                        {report.reportRankings.map((rank: any, i: number) => (
                          <div key={i} className="p-4 rounded-xl bg-black/40 border border-white/5 flex gap-4">
                            <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center font-bold text-primary shrink-0">
                              {rank.relevanceScore}%
                            </div>
                            <div>
                              <div className="text-xs font-bold text-white mb-1 uppercase tracking-wider">Document ID: {rank.documentId}</div>
                              <p className="text-sm text-muted-foreground italic line-clamp-2">"...{rank.snippet}..."</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ) : (
              <div className="h-[600px] border-2 border-dashed border-white/5 rounded-3xl flex flex-col items-center justify-center text-center p-12 bg-black/20">
                <div className="size-24 bg-primary/5 rounded-full flex items-center justify-center mb-8 border border-primary/10">
                  <Database className="size-12 text-primary/30" />
                </div>
                <h3 className="text-2xl font-headline font-bold text-white mb-3 tracking-tight">Access the Neural Vault</h3>
                <p className="text-muted-foreground max-w-md mx-auto leading-relaxed">Enter a query above to synthesize intelligence from billions of data points stored in the Sovereign Multi-Category RAG.</p>
                <div className="mt-8 flex gap-3">
                  <Badge variant="outline" className="bg-white/5">Forensics</Badge>
                  <Badge variant="outline" className="bg-white/5">OSINT</Badge>
                  <Badge variant="outline" className="bg-white/5">Intercepts</Badge>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}