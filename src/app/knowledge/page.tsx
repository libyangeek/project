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
  Shield,
  BrainCircuit,
  Sparkles,
  RefreshCcw,
  BookOpen
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { modularAiKnowledgeBaseReporting } from "@/ai/flows/modular-ai-knowledge-base-reporting"
import { executeSovereignLearning } from "@/ai/flows/ai-learning-flow"
import { toast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"

export default function KnowledgePage() {
  const [query, setQuery] = React.useState("")
  const [loading, setLoading] = React.useState(false)
  const [report, setReport] = React.useState<any>(null)
  const [mounted, setMounted] = React.useState(false)
  
  // Learning State
  const [learningSource, setLearningSource] = React.useState("https://www.kaggle.com/code")
  const [learningGoal, setLearningGoal] = React.useState("Extract advanced pattern recognition for cyber-recon")
  const [learningResult, setLearningResult] = React.useState<any>(null)

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

  const handleStartLearning = async () => {
    setLoading(true)
    try {
      const data = await executeSovereignLearning({
        externalSource: learningSource,
        analysisGoal: learningGoal,
        integrationMode: 'Aggressive'
      })
      setLearningResult(data)
      toast({ title: "Neural Evolution Complete", description: "System has absorbed external insights." })
    } catch (err) {
      toast({ variant: "destructive", title: "Learning Interrupted" })
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
              <Badge className="bg-red-600/30 text-red-500 border-red-500/50 text-[11px] uppercase font-bold tracking-[0.6em] px-5 py-1.5 animate-pulse shadow-[0_0_30px_rgba(220,38,38,0.4)] rounded-xl">Neural Evolutionary Node v21.0</Badge>
              <span className="text-[11px] text-muted-foreground uppercase font-bold tracking-[0.6em] italic flex items-center gap-2">
                 <Crown className="size-3 text-amber-500" /> Predator Learning Grid
              </span>
            </div>
            <h2 className="text-8xl font-headline font-bold text-white mb-6 tracking-tighter italic drop-shadow-[0_0_40px_rgba(220,38,38,0.6)]">Neural Vault</h2>
            <p className="text-muted-foreground max-w-3xl text-2xl font-medium italic leading-relaxed">
               "سيدي الغزالي، لقد قمنا بدمج 'محرك التعلم السيادي'. الآن أستطيع اجتياح حقول التجارب العالمية مثل Kaggle واستنزاف علومها لتعزيز سطوتك."
            </p>
          </div>
          <div className="flex gap-6">
             <div className="kali-card p-6 border-red-600/30 bg-red-950/10 min-w-[280px] shadow-2xl">
                <div className="flex items-center justify-between mb-4">
                   <span className="text-[10px] text-red-500 uppercase font-bold tracking-widest">Evolution Level</span>
                   <Sparkles className="size-4 text-amber-500 animate-pulse" />
                </div>
                <div className="text-3xl font-code text-white font-bold italic">GOD_TIER_21</div>
                <div className="mt-3 h-1 bg-white/5 overflow-hidden">
                   <div className="h-full bg-red-600 w-[92%] shadow-[0_0_15px_red] animate-pulse" />
                </div>
             </div>
          </div>
        </header>

        <Tabs defaultValue="synthesis" className="w-full relative z-10">
          <TabsList className="bg-black/60 border-2 border-red-500/20 h-20 p-2 rounded-[2.5rem] mb-12 shadow-2xl">
            <TabsTrigger value="synthesis" className="px-12 text-xs font-bold uppercase tracking-widest data-[state=active]:bg-red-600/20 data-[state=active]:text-red-500 rounded-[2rem] transition-all">Strike Synthesis</TabsTrigger>
            <TabsTrigger value="learning" className="px-12 text-xs font-bold uppercase tracking-widest data-[state=active]:bg-amber-600/20 data-[state=active]:text-amber-500 rounded-[2rem] transition-all">Neural Evolution (Kaggle Sync)</TabsTrigger>
          </TabsList>

          <TabsContent value="synthesis" className="space-y-12 animate-in fade-in duration-700">
            <div className="flex gap-8 mb-16">
              <div className="relative flex-1 group">
                <Search className="absolute left-8 top-1/2 -translate-y-1/2 size-8 text-red-500/40 group-focus-within:text-red-600 transition-all duration-700" />
                <Input 
                  placeholder="Query the Evolutionary Vault for tactical dominance..."
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

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
              <div className="lg:col-span-1 space-y-10">
                <Card className="glass-card border-red-600/30 rounded-[4rem] p-6 shadow-2xl border-2 group overflow-hidden">
                  <CardHeader className="p-10">
                    <CardTitle className="text-white flex items-center gap-6 text-sm uppercase tracking-[0.5em] italic font-bold">
                      <Filter className="size-7 text-red-600 group-hover:rotate-180 transition-transform duration-700" /> Strike Sources
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-10 pt-0 space-y-5">
                    {[
                      { name: "Evolutionary Core", count: 21, icon: RefreshCcw, color: "text-amber-500" },
                      { name: "Kaggle Insights", count: 158, icon: BookOpen, color: "text-emerald-500" },
                      { name: "Forensic Dumps", count: 142, icon: History, color: "text-red-500" },
                      { name: "Global Kill-Chains", count: 42, icon: Target, color: "text-blue-500" },
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
              </div>

              <div className="lg:col-span-3">
                {report ? (
                  <Card className="glass-card border-red-600/40 animate-in fade-in zoom-in-95 duration-1000 rounded-[5rem] shadow-[0_0_120px_rgba(220,38,38,0.2)] overflow-hidden border-2">
                    <CardHeader className="bg-red-950/30 border-b border-red-600/20 p-16">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-10">
                           <div className="size-20 rounded-[2.5rem] bg-red-600 flex items-center justify-center border-2 border-red-400 shadow-[0_0_50px_rgba(220,38,38,0.5)]">
                              <Skull className="size-10 text-white" />
                           </div>
                           <div>
                              <Badge className="bg-red-600/30 text-red-500 border-red-500/40 mb-4 uppercase font-bold tracking-[0.6em] px-6 py-2 rounded-2xl">Evolutionary Alpha Synthesis</Badge>
                              <CardTitle className="text-5xl text-white italic tracking-tighter uppercase font-bold">Lethal Analysis Report</CardTitle>
                              <CardDescription className="text-red-500 font-bold text-[13px] uppercase tracking-[0.8em] mt-3 italic">Arbiter Evolutionary Engine // v21.0</CardDescription>
                           </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-16 font-code text-lg leading-loose opacity-90 p-10 bg-black/40 rounded-[3rem] border border-white/5 shadow-inner">
                      {report.reportContent}
                    </CardContent>
                  </Card>
                ) : (
                  <div className="h-full min-h-[700px] border-4 border-dashed border-red-600/20 rounded-[6rem] flex flex-col items-center justify-center text-center p-24 bg-black/40 shadow-2xl">
                    <Database className="size-40 text-red-600/20 mb-12 animate-pulse" />
                    <h3 className="text-7xl font-headline font-bold text-white mb-10 tracking-tighter italic">Vault Idle</h3>
                    <p className="text-muted-foreground max-w-4xl text-2xl font-medium italic">"بانتظار أوامر الاستقراء السيادي لمسح المصفوفة المعرفية."</p>
                  </div>
                )}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="learning" className="space-y-12 animate-in zoom-in-95 duration-700">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
               <Card className="glass-card border-amber-600/30 rounded-[4rem] p-12 border-2 shadow-[0_0_100px_rgba(245,158,11,0.1)]">
                  <CardHeader className="p-0 mb-12 border-b border-amber-500/10 pb-8">
                     <CardTitle className="text-amber-500 text-3xl font-bold italic flex items-center gap-8 uppercase tracking-tighter">
                        <BrainCircuit className="size-12 animate-pulse" /> Neural Ingestion
                     </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 space-y-10">
                     <div className="space-y-4">
                        <label className="text-[11px] font-bold text-amber-500/60 uppercase tracking-[0.5em] px-4 italic">Experiment Source (Kaggle/GitHub)</label>
                        <Input 
                          value={learningSource}
                          onChange={(e) => setLearningSource(e.target.value)}
                          className="bg-black border-2 border-amber-500/20 h-16 rounded-[2rem] focus:border-amber-600 text-sm italic px-8"
                        />
                     </div>
                     <div className="space-y-4">
                        <label className="text-[11px] font-bold text-amber-500/60 uppercase tracking-[0.5em] px-4 italic">Analysis Objective</label>
                        <Input 
                          value={learningGoal}
                          onChange={(e) => setLearningGoal(e.target.value)}
                          className="bg-black border-2 border-amber-500/20 h-16 rounded-[2rem] focus:border-amber-600 text-sm italic px-8"
                        />
                     </div>
                     <Button 
                       onClick={handleStartLearning} 
                       disabled={loading}
                       className="w-full h-24 bg-amber-600 hover:bg-amber-700 text-black font-bold uppercase tracking-[0.8em] rounded-[3rem] shadow-[0_20px_50px_rgba(245,158,11,0.3)] transition-all duration-700 border-2 border-amber-400/50"
                     >
                        {loading ? <Loader2 className="size-8 animate-spin mr-6" /> : <RefreshCcw className="size-8 mr-6" />}
                        Evolve Neural Gene
                     </Button>
                  </CardContent>
               </Card>

               <div className="lg:col-span-2">
                  {learningResult ? (
                    <Card className="glass-card border-emerald-600/40 rounded-[5rem] overflow-hidden shadow-2xl border-2 animate-in slide-in-from-right-12">
                       <CardHeader className="bg-emerald-950/20 border-b border-emerald-600/20 p-16">
                          <div className="flex justify-between items-center">
                             <div>
                                <Badge className="bg-emerald-600/30 text-emerald-500 border-emerald-500/40 mb-4 px-6 py-2 rounded-2xl font-bold uppercase tracking-widest italic">Evolution Successful</Badge>
                                <CardTitle className="text-5xl text-white font-bold italic tracking-tighter uppercase">Neural Adaptation Matrix</CardTitle>
                             </div>
                             <div className="text-right">
                                <div className="text-[10px] text-emerald-500/60 uppercase font-bold tracking-widest mb-2">Confidence Gain</div>
                                <div className="text-4xl font-bold text-emerald-500 font-code italic">+14.8%</div>
                             </div>
                          </div>
                       </CardHeader>
                       <CardContent className="p-16 space-y-16">
                          <div className="p-12 rounded-[3.5rem] bg-emerald-600/5 border-2 border-emerald-600/20 italic text-2xl text-white leading-loose shadow-inner">
                             <strong className="text-emerald-500 uppercase tracking-widest block mb-4">Commander Brief:</strong>
                             "{learningResult.commanderBrief}"
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                             <div className="space-y-8">
                                <h4 className="text-[12px] font-bold text-emerald-500 uppercase tracking-[0.8em] border-b border-emerald-600/10 pb-4 italic">Extracted Insights</h4>
                                <ul className="space-y-5">
                                   {learningResult.extractedInsights.map((insight: string, idx: number) => (
                                     <li key={idx} className="flex gap-6 text-base text-muted-foreground italic font-medium group hover:text-white transition-colors">
                                        <div className="size-2 mt-2.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_emerald]" />
                                        {insight}
                                     </li>
                                   ))}
                                </ul>
                             </div>
                             <div className="space-y-8">
                                <h4 className="text-[12px] font-bold text-emerald-500 uppercase tracking-[0.8em] border-b border-emerald-600/10 pb-4 italic">Behavioral Adaptation</h4>
                                <p className="text-base text-muted-foreground italic leading-loose p-8 bg-black border-2 border-white/5 rounded-[2.5rem]">
                                   "{learningResult.warriorAdaptation}"
                                </p>
                             </div>
                          </div>
                       </CardContent>
                    </Card>
                  ) : (
                    <div className="h-full min-h-[600px] border-4 border-dashed border-amber-600/20 rounded-[6rem] flex flex-col items-center justify-center text-center p-24 bg-black/40">
                       <BrainCircuit className="size-40 text-amber-600/20 mb-12" />
                       <h3 className="text-6xl font-headline font-bold text-white mb-10 tracking-tighter italic">Evolution Pending</h3>
                       <p className="text-muted-foreground max-w-3xl text-xl italic font-medium">
                          "O Master <span className="text-amber-500 font-bold italic">Al-Ghazali</span>, point me to a source of intelligence. I will disassemble its logic and rebuild my core to surpass it."
                       </p>
                    </div>
                  )}
               </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
