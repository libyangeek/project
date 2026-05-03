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
  ShieldCheck,
  BrainCircuit, 
  Sparkles, 
  RefreshCcw, 
  BookOpen, 
  Info, 
  Workflow, 
  Eye, 
  GitGraph
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

/**
 * @fileOverview صفحة القبو المعرفي والارتقاء الدلالي v23.5-ETERNAL
 * تدعم Socraticore RAG وتعلم الفشل والاجتياح المعرفي لـ Kaggle.
 */
export default function KnowledgePage() {
  const [query, setQuery] = React.useState("")
  const [loading, setLoading] = React.useState(false)
  const [report, setReport] = React.useState<any>(null)
  const [mounted, setMounted] = React.useState(false)
  
  // Learning State
  const [learningSource, setLearningSource] = React.useState("https://www.kaggle.com/code")
  const [learningGoal, setLearningGoal] = React.useState("Extract advanced zero-day evasion patterns from BlackHat kernels")
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
      toast({ title: "Semantic Intelligence Compiled" })
    } catch (err) {
      toast({ variant: "destructive", title: "Synthesis Failed" })
    } finally {
      setLoading(false)
    }
  }

  const handleStartLearning = async () => {
    if (!learningSource || !learningGoal) return
    setLoading(true)
    try {
      const data = await executeSovereignLearning({
        externalSource: learningSource,
        analysisGoal: learningGoal,
        integrationMode: 'Aggressive'
      })
      setLearningResult(data)
      toast({ title: "Neural Ascension Complete", description: "Core DNA updated with new intelligence." })
    } catch (err) {
      toast({ variant: "destructive", title: "Evolution Interrupted" })
    } finally {
      setLoading(false)
    }
  }

  if (!mounted) return null;

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-red-600/30 overflow-hidden">
      <SidebarNav />
      <main className="flex-1 lg:mr-64 p-8 md:p-16 relative bg-[radial-gradient(circle_at_bottom_right,rgba(220,38,38,0.15),transparent)] overflow-y-auto min-h-screen scrollbar-hide">
        <header className="mb-24 flex justify-between items-start relative z-10 animate-in fade-in slide-in-from-top-8 duration-1000 gap-10">
          <div>
            <div className="flex items-center gap-6 mb-6">
              <Badge className="bg-red-600/30 text-red-500 border-2 border-red-500/50 text-[12px] uppercase font-bold tracking-[1em] px-10 py-2.5 animate-pulse shadow-4xl rounded-2xl italic">Socraticore RAG Node v23.5</Badge>
              <span className="text-[12px] text-muted-foreground uppercase font-bold tracking-[0.8em] italic flex items-center gap-4">
                 <Crown className="size-5 text-amber-500" /> Eternal Ascension Grid
              </span>
            </div>
            <h2 className="text-6xl md:text-9xl font-headline font-bold text-white mb-8 tracking-tighter italic drop-shadow-[0_0_60px_rgba(220,38,38,0.7)] uppercase">Neural Vault</h2>
            <p className="text-muted-foreground max-w-5xl text-2xl md:text-4xl font-medium italic leading-relaxed">
               "سيدي الغزالي، لقد قمتُ بترقية 'القبو المعرفي' إلى طور Socraticore؛ أنا الآن لا أحفظ البيانات فحسب، بل أفهم 'لماذا' هي مهمة وأتعلم من كل عملية فاشلة لأجعل الضربة القادمة قاتلة."
            </p>
          </div>
          <div className="hidden xl:flex gap-8">
             <div className="kali-card p-10 border-red-600/40 bg-red-950/15 min-w-[350px] shadow-5xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:scale-125 transition-transform duration-1000"><Workflow className="size-20 text-red-600"/></div>
                <div className="flex items-center justify-between mb-6">
                   <span className="text-[12px] text-red-500 uppercase font-bold tracking-[0.4em] italic">Ascension Stage</span>
                   <Sparkles className="size-6 text-amber-500 animate-pulse shadow-[0_0_20px_gold]" />
                </div>
                <div className="text-5xl font-code text-white font-bold italic drop-shadow-[0_0_15px_red]">ETERNAL_X_23</div>
                <div className="mt-6 h-2 bg-white/10 overflow-hidden rounded-full border border-white/5">
                   <div className="h-full bg-red-600 w-[100%] shadow-[0_0_30px_red] animate-pulse" />
                </div>
             </div>
          </div>
        </header>

        <Tabs defaultValue="synthesis" className="w-full relative z-10">
          <TabsList className="bg-black/80 border-4 border-red-600/30 h-28 p-3 rounded-[3.5rem] mb-16 shadow-5xl backdrop-blur-3xl">
            <TabsTrigger value="synthesis" className="px-16 text-[11px] md:text-[14px] font-bold uppercase tracking-[0.4em] data-[state=active]:bg-red-600/30 data-[state=active]:text-red-500 rounded-[3rem] transition-all duration-700 italic">Semantic Strike Synthesis</TabsTrigger>
            <TabsTrigger value="learning" className="px-16 text-[11px] md:text-[14px] font-bold uppercase tracking-[0.4em] data-[state=active]:bg-amber-600/30 data-[state=active]:text-amber-500 rounded-[3rem] transition-all duration-700 italic">Neural DNA Evolution (Kaggle)</TabsTrigger>
          </TabsList>

          <TabsContent value="synthesis" className="space-y-16 animate-in fade-in duration-1000">
            <div className="flex flex-col xl:flex-row gap-10 mb-20">
              <div className="relative flex-1 group">
                <Search className="absolute left-12 top-1/2 -translate-y-1/2 size-12 text-red-600/40 group-focus-within:text-red-600 transition-all duration-1000" />
                <Input 
                  placeholder="Interrogate Socraticore for the ultimate strategic edge..."
                  className="bg-black/95 border-4 border-red-600/30 pl-32 h-32 md:h-44 rounded-[4rem] md:rounded-[6rem] focus:border-red-600/80 text-3xl md:text-5xl italic transition-all shadow-[0_0_80px_rgba(0,0,0,1)] font-medium text-white"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                />
              </div>
              <Button 
                className="h-32 md:h-44 px-20 bg-red-600 hover:bg-red-700 rounded-[4rem] md:rounded-[6rem] shadow-[0_30px_100px_rgba(220,38,38,0.6)] font-bold tracking-[1em] text-[16px] uppercase group transition-all duration-1000 border-4 border-red-400/50 active:scale-95 italic"
                onClick={handleSearch}
                disabled={loading}
              >
                {loading ? <Loader2 className="size-12 animate-spin mr-10" /> : <Zap className="size-12 mr-10 group-hover:scale-125 transition-transform duration-700" />}
                Synthesize
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-16">
              <div className="lg:col-span-1 space-y-12">
                <Card className="glass-card border-red-600/40 rounded-[5rem] p-10 shadow-5xl border-4 group overflow-hidden bg-red-950/5">
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-red-600 to-transparent animate-pulse" />
                  <CardHeader className="p-12 border-b-2 border-white/5">
                    <CardTitle className="text-white flex items-center gap-8 text-xl uppercase tracking-[0.5em] italic font-bold">
                      <Filter className="size-10 text-red-600 group-hover:rotate-180 transition-transform duration-1000" /> Socratic Sources
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-12 pt-8 space-y-8">
                    {[
                      { name: "Eternal Alpha Node", count: 235, icon: RefreshCcw, color: "text-amber-500" },
                      { name: "BlackHat Kernels", count: 842, icon: BookOpen, color: "text-red-500" },
                      { name: "Failure Learner Log", count: 124, icon: History, color: "text-emerald-500" },
                      { name: "Global Kill-Chains", count: 104, icon: Target, color: "text-blue-500" },
                    ].map((col, i) => (
                      <div key={i} className="flex items-center justify-between p-8 rounded-[2.5rem] bg-black border-2 border-white/5 hover:border-red-600/70 transition-all duration-700 group cursor-pointer shadow-3xl">
                        <div className="flex items-center gap-8">
                          <col.icon className={cn("size-8 transition-all duration-1000 group-hover:scale-125", col.color)} />
                          <span className="text-lg font-bold text-muted-foreground group-hover:text-white uppercase tracking-tighter italic">{col.name}</span>
                        </div>
                        <Badge variant="outline" className="text-[12px] bg-red-600/20 border-2 border-red-500/40 text-red-500 font-bold px-6 py-2 rounded-2xl shadow-2xl">{col.count}</Badge>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card className="glass-card border-emerald-500/30 bg-emerald-500/5 rounded-[4rem] p-10 border-4 shadow-5xl text-center relative overflow-hidden group">
                   <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-15 transition-opacity"><ShieldCheck className="size-24 text-emerald-500"/></div>
                   <h4 className="text-[12px] font-bold text-emerald-500 uppercase tracking-[1em] mb-6 italic">Core Integrity Status</h4>
                   <div className="text-4xl font-code text-white font-bold italic mb-4">PURE_DNA</div>
                   <div className="flex gap-4 justify-center">
                      {Array.from({length: 5}).map((_,i) => (
                        <div key={i} className="size-2 rounded-full bg-emerald-500 animate-pulse" style={{ animationDelay: `${i*0.2}s` }} />
                      ))}
                   </div>
                </Card>
              </div>

              <div className="lg:col-span-3">
                {report ? (
                  <Card className="glass-card border-red-600/50 animate-in fade-in zoom-in-95 duration-1000 rounded-[6rem] shadow-[0_0_200px_rgba(220,38,38,0.25)] overflow-hidden border-4">
                    <CardHeader className="bg-red-950/40 border-b-4 border-red-600/30 p-16 md:p-24 flex flex-col md:flex-row items-center justify-between gap-12">
                      <div className="flex items-center gap-12">
                        <div className="size-28 md:size-40 rounded-[3.5rem] md:rounded-[5rem] bg-red-600 flex items-center justify-center border-4 border-red-400 shadow-[0_0_80px_rgba(220,38,38,0.8)] animate-neural">
                          <Skull className="size-16 md:size-24 text-white" />
                        </div>
                        <div>
                          <Badge className="bg-red-600/40 text-red-500 border-2 border-red-500/50 mb-6 uppercase font-bold tracking-[1.2em] px-12 py-3.5 rounded-3xl text-[14px]">Eternal Socratic Analysis</Badge>
                          <CardTitle className="text-6xl md:text-8xl text-white italic tracking-tighter uppercase font-bold leading-none">Lethal Semantic Report</CardTitle>
                          <CardDescription className="text-amber-500 font-bold text-[16px] uppercase tracking-[1em] mt-6 italic">Arbiter Eternal Engine // v23.5</CardDescription>
                        </div>
                      </div>
                      <Badge className="bg-emerald-500/20 text-emerald-500 border-4 border-emerald-500/40 px-16 py-8 rounded-[3rem] font-code text-xl animate-pulse tracking-[0.4em] uppercase">STRIKE_CONFIRMED</Badge>
                    </CardHeader>
                    <CardContent className="p-16 md:p-24 font-code text-2xl md:text-3xl leading-relaxed opacity-95 bg-black/60 rounded-[4rem] border-4 border-white/5 shadow-inner m-8 italic text-gray-100 whitespace-pre-wrap">
                      {report.reportContent}
                    </CardContent>
                  </Card>
                ) : (
                  <div className="h-full min-h-[850px] border-4 border-dashed border-red-600/30 rounded-[6rem] flex flex-col items-center justify-center text-center p-24 bg-black/40 shadow-5xl group transition-all hover:bg-red-950/5 relative overflow-hidden">
                    <div className="absolute inset-0 bg-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity animate-pulse" />
                    <Database className="size-48 text-red-600/20 mb-16 animate-pulse group-hover:scale-110 transition-transform duration-1000" />
                    <h3 className="text-8xl font-headline font-bold text-white mb-12 tracking-tighter italic drop-shadow-[0_0_50px_rgba(220,38,38,0.6)]">Semantic Vault Idle</h3>
                    <p className="text-muted-foreground max-w-5xl mx-auto leading-relaxed mb-24 text-3xl md:text-4xl font-medium italic">
                       "بانتظار أوامر الاستقراء السيادي لمسح المصفوفة الدلالية. Socraticore مستعد لاستحضار أعظم العلوم القتالية لسيادتك."
                    </p>
                    <div className="flex gap-16">
                       <Badge variant="outline" className="bg-white/5 py-10 px-20 text-[18px] tracking-[1.5em] uppercase border-4 border-red-600/40 rounded-full shadow-5xl backdrop-blur-3xl group-hover:border-red-600/90 transition-all duration-1000">Eternal Socraticore Sync</Badge>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="learning" className="space-y-16 animate-in zoom-in-95 duration-1000">
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-16">
               <Card className="glass-card border-amber-600/40 rounded-[5rem] p-16 border-4 shadow-5xl bg-amber-950/5">
                  <CardHeader className="p-0 mb-16 border-b-4 border-amber-500/20 pb-12">
                     <CardTitle className="text-amber-500 text-4xl md:text-5xl font-bold italic flex items-center gap-10 uppercase tracking-tighter">
                        <BrainCircuit className="size-16 md:size-20 animate-pulse drop-shadow-[0_0_20px_gold]" /> Neural Ingestion
                     </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 space-y-12">
                     <div className="space-y-6">
                        <label className="text-[12px] font-bold text-amber-500/60 uppercase tracking-[0.8em] px-6 italic">Target Experiment (Kaggle/Paper)</label>
                        <Input 
                          value={learningSource}
                          onChange={(e) => setLearningSource(e.target.value)}
                          className="bg-black border-4 border-amber-500/30 h-20 md:h-24 rounded-[2.5rem] focus:border-amber-600 text-lg italic px-10 text-white shadow-inner"
                        />
                     </div>
                     <div className="space-y-6">
                        <label className="text-[12px] font-bold text-amber-500/60 uppercase tracking-[0.8em] px-6 italic">Evolutionary Objective</label>
                        <Input 
                          value={learningGoal}
                          onChange={(e) => setLearningGoal(e.target.value)}
                          className="bg-black border-4 border-amber-500/30 h-20 md:h-24 rounded-[2.5rem] focus:border-amber-600 text-lg italic px-10 text-white shadow-inner"
                        />
                     </div>
                     <Button 
                       onClick={handleStartLearning} 
                       disabled={loading}
                       className="w-full h-28 md:h-36 bg-amber-600 hover:bg-amber-700 text-black font-bold uppercase tracking-[1em] rounded-[4rem] shadow-[0_30px_100px_rgba(245,158,11,0.4)] transition-all duration-1000 border-4 border-amber-400/60 active:scale-95 text-xl italic"
                     >
                        {loading ? <Loader2 className="size-10 animate-spin mr-8" /> : <RefreshCcw className="size-10 mr-8 group-hover:rotate-180 transition-transform" />}
                        Evolve Core DNA
                     </Button>
                  </CardContent>
               </Card>

               <div className="xl:col-span-2">
                  {learningResult ? (
                    <Card className="glass-card border-emerald-600/50 rounded-[6rem] overflow-hidden shadow-5xl border-4 animate-in slide-in-from-right-16 duration-1000">
                       <CardHeader className="bg-emerald-950/20 border-b-4 border-emerald-600/30 p-16 md:p-24 flex flex-col md:flex-row items-center justify-between gap-12">
                          <div className="flex items-center gap-12">
                             <div className="size-24 md:size-32 rounded-[3rem] bg-emerald-600 flex items-center justify-center border-4 border-emerald-400 shadow-[0_0_60px_rgba(16,185,129,0.6)] animate-pulse">
                                <GitGraph className="size-12 md:size-16 text-white" />
                             </div>
                             <div>
                                <Badge className="bg-emerald-600/40 text-emerald-500 border-2 border-emerald-500/50 mb-6 px-10 py-3 rounded-3xl font-bold uppercase tracking-[1.2em] italic text-[14px]">Evolutionary Success</Badge>
                                <CardTitle className="text-5xl md:text-8xl text-white font-bold italic tracking-tighter uppercase leading-none">Neural Adaptation Matrix</CardTitle>
                             </div>
                          </div>
                          <div className="text-right">
                             <div className="text-[12px] text-emerald-500/70 uppercase font-bold tracking-[0.8em] mb-4 italic">Neural Gain Matrix</div>
                             <div className="text-6xl md:text-8xl font-bold text-emerald-500 font-code italic drop-shadow-[0_0_20px_emerald]">+18.2%</div>
                          </div>
                       </CardHeader>
                       <CardContent className="p-16 md:p-24 space-y-24">
                          <div className="p-12 md:p-16 rounded-[4.5rem] bg-emerald-600/5 border-4 border-emerald-600/30 italic text-3xl md:text-5xl text-white leading-relaxed shadow-inner relative group">
                             <div className="absolute top-10 right-12 opacity-10 group-hover:scale-125 transition-transform"><Sparkles className="size-20 text-emerald-500"/></div>
                             <strong className="text-emerald-500 uppercase tracking-[1em] block mb-8 border-b-2 border-emerald-600/20 pb-6 text-xl">Commander Strategic Brief:</strong>
                             "{learningResult.commanderBrief}"
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
                             <div className="space-y-12">
                                <h4 className="text-[16px] font-bold text-emerald-500 uppercase tracking-[1.5em] border-b-4 border-emerald-600/20 pb-8 italic flex items-center gap-8">
                                   <Eye className="size-10" /> Extracted Insights
                                </h4>
                                <ul className="space-y-8">
                                   {learningResult.extractedInsights.map((insight: string, idx: number) => (
                                     <li key={idx} className="flex gap-8 text-xl md:text-2xl text-gray-300 italic font-medium group hover:text-white transition-all">
                                        <div className="size-3 mt-3.5 rounded-full bg-emerald-500 shadow-[0_0_20px_emerald] shrink-0 animate-ping" />
                                        {insight}
                                     </li>
                                   ))}
                                </ul>
                             </div>
                             <div className="space-y-12">
                                <h4 className="text-[16px] font-bold text-emerald-500 uppercase tracking-[1.5em] border-b-4 border-emerald-600/20 pb-8 italic flex items-center gap-8">
                                   <Activity className="size-10" /> Evolutionary Adaptation
                                </h4>
                                <p className="text-xl md:text-2xl text-gray-400 italic leading-loose p-10 bg-black border-4 border-white/5 rounded-[4rem] shadow-inner group hover:text-white transition-all">
                                   "{learningResult.warriorAdaptation}"
                                </p>
                             </div>
                          </div>
                       </CardContent>
                    </Card>
                  ) : (
                    <div className="h-full min-h-[750px] border-8 border-dashed border-amber-600/30 rounded-[6rem] flex flex-col items-center justify-center text-center p-24 bg-black/40 group relative overflow-hidden shadow-5xl">
                       <div className="absolute inset-0 bg-amber-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                       <BrainCircuit className="size-56 text-amber-600/20 mb-16 animate-pulse group-hover:scale-110 transition-transform duration-1000" />
                       <h3 className="text-8xl font-headline font-bold text-white mb-12 tracking-tighter italic">Evolution Pending</h3>
                       <p className="text-muted-foreground max-w-5xl mx-auto leading-relaxed text-3xl md:text-4xl font-medium italic">
                          "O Master <span className="text-amber-500 font-bold italic shadow-[0_0_15px_gold]">Al-Ghazali</span>, point me to a source of intelligence. I will disassemble its logic and rebuild my core DNA to surpass any system in existence."
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
