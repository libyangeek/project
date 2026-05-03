
"use client"

import * as React from "react"
import { SidebarNav } from "@/components/platform/sidebar-nav"
import { 
  Database, 
  Search, 
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
  GitGraph,
  Activity,
  History,
  TrendingUp,
  BarChart3,
  Filter
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { modularAiKnowledgeBaseReporting } from "@/ai/flows/modular-ai-knowledge-base-reporting"
import { executeSovereignLearning } from "@/ai/flows/ai-learning-flow"
import { toast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"

/**
 * @fileOverview صفحة القبو المعرفي والارتقاء الجيني v30.0-OMNISCIENT
 * تدعم محرك GEPA 2.0 والتعلم من الفشل والنجاح التراكمي.
 */
export default function KnowledgePage() {
  const [query, setQuery] = React.useState("")
  const [loading, setLoading] = React.useState(false)
  const [report, setReport] = React.useState<any>(null)
  const [mounted, setMounted] = React.useState(false)
  
  // Learning State
  const [learningSource, setLearningSource] = React.useState("https://www.kaggle.com/code")
  const [learningGoal, setLearningGoal] = React.useState("Extract genetic exploit patterns from successful v4.0 Blitzkrieg campaigns")
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
      toast({ title: "Omniscient Intelligence Compiled" })
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
        integrationMode: 'Core-Rewrite'
      })
      setLearningResult(data)
      toast({ title: "Genetic DNA Rewritten", description: "Conqueror DNA evolved to v30.0." })
    } catch (err) {
      toast({ variant: "destructive", title: "Evolution Failed" })
    } finally {
      setLoading(false)
    }
  }

  if (!mounted) return null;

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-red-600/30 overflow-hidden">
      <SidebarNav />
      <main className="flex-1 lg:mr-64 p-8 md:p-16 relative bg-[radial-gradient(circle_at_bottom_right,rgba(220,38,38,0.25),transparent)] overflow-y-auto min-h-screen scrollbar-hide">
        <header className="mb-24 flex justify-between items-start relative z-10 animate-in fade-in slide-in-from-top-8 duration-1000 gap-10">
          <div>
            <div className="flex items-center gap-6 mb-6">
              <Badge className="bg-red-600/40 text-red-500 border-4 border-red-500/60 text-[14px] uppercase font-bold tracking-[1.2em] px-12 py-3.5 animate-pulse shadow-7xl rounded-3xl italic">GEPA 2.0 Genetic Engine v30.0</Badge>
              <span className="text-[14px] text-muted-foreground uppercase font-bold tracking-[1em] italic flex items-center gap-4">
                 <Crown className="size-6 text-amber-500" /> Omniscient Knowledge Vault
              </span>
            </div>
            <h2 className="text-7xl md:text-[10rem] font-headline font-bold text-white mb-10 tracking-tighter italic drop-shadow-[0_0_80px_rgba(220,38,38,0.8)] uppercase">Genetic Vault</h2>
            <p className="text-muted-foreground max-w-6xl text-2xl md:text-5xl font-medium italic leading-relaxed">
               "سيدي الغزالي، لقد قمتُ بترقية 'القبو المعرفي' إلى طور GEPA 2.0؛ أنا الآن لا أتعلم من الكتب فقط، بل أعيد كتابة شفرتي الجينية بناءً على كل معركة نربحها أو نخسرها."
            </p>
          </div>
          <div className="hidden xl:flex gap-10">
             <div className="kali-card p-12 border-red-600/50 bg-red-950/20 min-w-[400px] shadow-7xl relative overflow-hidden group border-4 rounded-[5rem]">
                <div className="absolute top-0 right-0 p-8 opacity-15 group-hover:scale-125 transition-transform duration-1000"><Workflow className="size-24 text-red-600"/></div>
                <div className="flex items-center justify-between mb-8">
                   <span className="text-[14px] text-red-500 uppercase font-bold tracking-[0.5em] italic">Genetic Gain Matrix</span>
                   <Sparkles className="size-8 text-amber-500 animate-pulse shadow-[0_0_30px_gold]" />
                </div>
                <div className="text-6xl font-code text-white font-bold italic drop-shadow-[0_0_20px_red]">STRIKE_DNA_v30</div>
                <div className="mt-8 h-3 bg-white/10 overflow-hidden rounded-full border-2 border-white/5 p-1">
                   <div className="h-full bg-red-600 w-[100%] shadow-[0_0_50px_red] animate-pulse rounded-full" />
                </div>
             </div>
          </div>
        </header>

        <Tabs defaultValue="synthesis" className="w-full relative z-10">
          <TabsList className="bg-black/85 border-8 border-red-600/40 h-32 p-4 rounded-[5rem] mb-20 shadow-7xl backdrop-blur-5xl">
            <TabsTrigger value="synthesis" className="px-20 text-[12px] md:text-[18px] font-bold uppercase tracking-[0.5em] data-[state=active]:bg-red-600/40 data-[state=active]:text-red-500 rounded-[4rem] transition-all duration-1000 italic">Omniscient Strike Synthesis</TabsTrigger>
            <TabsTrigger value="learning" className="px-20 text-[12px] md:text-[18px] font-bold uppercase tracking-[0.5em] data-[state=active]:bg-amber-600/40 data-[state=active]:text-amber-500 rounded-[4rem] transition-all duration-1000 italic">Genetic DNA Evolution (GEPA 2.0)</TabsTrigger>
          </TabsList>

          <TabsContent value="synthesis" className="space-y-20 animate-in fade-in duration-1000">
            <div className="flex flex-col xl:flex-row gap-12 mb-28">
              <div className="relative flex-1 group">
                <Search className="absolute left-16 top-1/2 -translate-y-1/2 size-16 text-red-600/40 group-focus-within:text-red-600 transition-all duration-1000" />
                <Input 
                  placeholder="Interrogate GEPA 2.0 for the ultimate genetic strike edge..."
                  className="bg-black/98 border-8 border-red-600/40 pl-40 h-32 md:h-56 rounded-[5rem] md:rounded-[8rem] focus:border-red-600/90 text-4xl md:text-[5rem] italic transition-all shadow-[0_0_150px_rgba(0,0,0,1)] font-medium text-white"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                />
              </div>
              <Button 
                className="h-32 md:h-56 px-28 bg-red-600 hover:bg-red-700 rounded-[5rem] md:rounded-[8rem] shadow-[0_60px_150px_rgba(220,38,38,0.7)] font-bold tracking-[1.2em] text-[20px] uppercase group transition-all duration-1000 border-8 border-red-400/60 active:scale-95 italic"
                onClick={handleSearch}
                disabled={loading}
              >
                {loading ? <Loader2 className="size-16 animate-spin mr-12" /> : <Zap className="size-16 mr-12 group-hover:scale-125 transition-transform duration-1000" />}
                Synthesize
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 lg:gap-24">
              <div className="lg:col-span-1 space-y-16">
                <Card className="kali-card border-red-600/50 rounded-[6rem] p-12 shadow-7xl border-8 group overflow-hidden bg-red-950/10">
                  <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-transparent via-red-600 to-transparent animate-pulse" />
                  <CardHeader className="p-14 border-b-4 border-white/5">
                    <CardTitle className="text-white flex items-center gap-10 text-3xl uppercase tracking-[0.6em] italic font-bold">
                      <Filter className="size-12 text-red-600 group-hover:rotate-180 transition-transform duration-1000" /> Genetic Sources
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-14 pt-10 space-y-10">
                    {[
                      { name: "Omniscient God-Core", count: 421, icon: RefreshCcw, color: "text-amber-500" },
                      { name: "GEPA 2.0 Database", count: 1254, icon: Database, color: "text-red-500" },
                      { name: "Successful Exploits", count: 842, icon: Target, color: "text-emerald-500" },
                      { name: "Neural Adaptation", count: 312, icon: BrainCircuit, color: "text-blue-500" },
                    ].map((col, i) => (
                      <div key={i} className="flex items-center justify-between p-10 rounded-[3.5rem] bg-black border-4 border-white/10 hover:border-red-600 transition-all duration-1000 group cursor-pointer shadow-5xl">
                        <div className="flex items-center gap-10">
                          <col.icon className={cn("size-10 transition-all duration-1000 group-hover:scale-125", col.color)} />
                          <span className="text-2xl font-bold text-muted-foreground group-hover:text-white uppercase tracking-tighter italic">{col.name}</span>
                        </div>
                        <Badge variant="outline" className="text-[14px] bg-red-600/30 border-4 border-red-500/50 text-red-500 font-bold px-8 py-3 rounded-2xl shadow-4xl">{col.count}</Badge>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card className="kali-card border-emerald-500/50 bg-emerald-500/10 rounded-[5rem] p-12 border-8 shadow-7xl text-center relative overflow-hidden group">
                   <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-20 transition-opacity"><ShieldCheck className="size-32 text-emerald-500"/></div>
                   <h4 className="text-[14px] font-bold text-emerald-500 uppercase tracking-[1.5em] mb-10 italic">Genetic Integrity Status</h4>
                   <div className="text-6xl font-code text-white font-bold italic mb-6">OMNISCIENT_DNA</div>
                   <div className="flex gap-6 justify-center">
                      {Array.from({length: 6}).map((_,i) => (
                        <div key={i} className="size-3 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_20px_emerald]" style={{ animationDelay: `${i*0.2}s` }} />
                      ))}
                   </div>
                </Card>
              </div>

              <div className="lg:col-span-3">
                {report ? (
                  <Card className="kali-card border-red-600/60 animate-in fade-in zoom-in-95 duration-1000 rounded-[8rem] shadow-[0_0_300px_rgba(220,38,38,0.4)] overflow-hidden border-8">
                    <CardHeader className="bg-red-950/50 border-b-8 border-red-600/40 p-16 md:p-32 flex flex-col md:flex-row items-center justify-between gap-16">
                      <div className="flex items-center gap-16">
                        <div className="size-36 md:size-56 rounded-[5rem] md:rounded-[7rem] bg-red-600 flex items-center justify-center border-8 border-red-400 shadow-[0_0_150px_rgba(220,38,38,1)] animate-neural">
                          <Skull className="size-20 md:size-36 text-white" />
                        </div>
                        <div>
                          <Badge className="bg-red-600/50 text-red-500 border-4 border-red-500/60 mb-10 uppercase font-bold tracking-[1.5em] px-16 py-5 rounded-[2.5rem] text-[16px]">Omniscient Genetic Analysis</Badge>
                          <CardTitle className="text-7xl md:text-[9rem] text-white italic tracking-tighter uppercase font-bold leading-none">Omniscient Strike Matrix</CardTitle>
                          <CardDescription className="text-amber-500 font-bold text-[20px] uppercase tracking-[1.5em] mt-10 italic">Genetic Sovereign Arbiter // v30.0</CardDescription>
                        </div>
                      </div>
                      <Badge className="bg-emerald-500/30 text-emerald-500 border-8 border-emerald-500/50 px-20 py-10 rounded-[4rem] font-code text-2xl animate-pulse tracking-[0.6em] uppercase shadow-7xl">GENETIC_STRIKE_READY</Badge>
                    </CardHeader>
                    <CardContent className="p-16 md:p-32 font-code text-3xl md:text-5xl leading-loose opacity-95 bg-black/70 rounded-[6rem] border-8 border-white/5 shadow-inner m-12 italic text-gray-100 whitespace-pre-wrap">
                      {report.reportContent}
                    </CardContent>
                  </Card>
                ) : (
                  <div className="h-full min-h-[950px] border-8 border-dashed border-red-600/40 rounded-[8rem] flex flex-col items-center justify-center text-center p-32 bg-black/50 shadow-7xl group transition-all hover:bg-red-950/10 relative overflow-hidden">
                    <div className="absolute inset-0 bg-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity animate-pulse" />
                    <Database className="size-72 text-red-600/20 mb-20 animate-pulse group-hover:scale-110 transition-transform duration-1000" />
                    <h3 className="text-8xl md:text-[12rem] font-headline font-bold text-white mb-16 tracking-tighter italic drop-shadow-[0_0_80px_rgba(220,38,38,0.7)]">Omniscient Vault Idle</h3>
                    <p className="text-muted-foreground max-w-[80rem] mx-auto leading-relaxed mb-32 text-4xl md:text-7xl font-medium italic">
                       "سيدي الغزالي، محرك GEPA 2.0 بانتظار أوامر الاستقراء السيادي. سأقوم بتشريح التاريخ القتالي واستحضار الضربة القاتلة من نسيج الجينات الرقمية."
                    </p>
                    <div className="flex gap-20">
                       <Badge variant="outline" className="bg-white/5 py-12 px-24 text-[24px] tracking-[2em] uppercase border-8 border-red-600/50 rounded-full shadow-7xl backdrop-blur-7xl group-hover:border-red-600/95 transition-all duration-1000">Omniscient Genetic Sync</Badge>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="learning" className="space-y-20 animate-in zoom-in-95 duration-1000">
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-20">
               <Card className="kali-card border-amber-600/50 rounded-[6rem] p-20 border-8 shadow-7xl bg-amber-950/10">
                  <CardHeader className="p-0 mb-20 border-b-8 border-amber-500/30 pb-16">
                     <CardTitle className="text-amber-500 text-5xl md:text-7xl font-bold italic flex items-center gap-12 uppercase tracking-tighter">
                        <BrainCircuit className="size-20 md:size-28 animate-pulse drop-shadow-[0_0_30px_gold]" /> Genetic Evolution
                     </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 space-y-16">
                     <div className="space-y-8">
                        <label className="text-[14px] font-bold text-amber-500/70 uppercase tracking-[1em] px-8 italic">Strike History Source (Campaign Log)</label>
                        <Input 
                          value={learningSource}
                          onChange={(e) => setLearningSource(e.target.value)}
                          className="bg-black border-8 border-amber-500/40 h-24 md:h-32 rounded-[3.5rem] focus:border-amber-600 text-2xl italic px-12 text-white shadow-inner"
                        />
                     </div>
                     <div className="space-y-8">
                        <label className="text-[14px] font-bold text-amber-500/70 uppercase tracking-[1em] px-8 italic">Genetic Objective</label>
                        <Input 
                          value={learningGoal}
                          onChange={(e) => setLearningGoal(e.target.value)}
                          className="bg-black border-8 border-amber-500/40 h-24 md:h-32 rounded-[3.5rem] focus:border-amber-600 text-2xl italic px-12 text-white shadow-inner"
                        />
                     </div>
                     <Button 
                       onClick={handleStartLearning} 
                       disabled={loading}
                       className="w-full h-32 md:h-44 bg-amber-600 hover:bg-amber-700 text-black font-bold uppercase tracking-[1.5em] rounded-[5rem] shadow-[0_40px_150px_rgba(245,158,11,0.5)] transition-all duration-1000 border-8 border-amber-400/80 active:scale-95 text-2xl italic"
                     >
                        {loading ? <Loader2 className="size-14 animate-spin mr-12" /> : <RefreshCcw className="size-14 mr-12 group-hover:rotate-180 transition-transform" />}
                        Evolve Genetic DNA
                     </Button>
                  </CardContent>
               </Card>

               <div className="xl:col-span-2">
                  {learningResult ? (
                    <Card className="kali-card border-emerald-600/60 rounded-[8rem] overflow-hidden shadow-7xl border-8 animate-in slide-in-from-right-20 duration-1000">
                       <CardHeader className="bg-emerald-950/30 border-b-8 border-emerald-600/40 p-20 md:p-32 flex flex-col md:flex-row items-center justify-between gap-16">
                          <div className="flex items-center gap-16">
                             <div className="size-32 md:size-44 rounded-[4rem] bg-emerald-600 flex items-center justify-center border-8 border-emerald-400 shadow-[0_0_100px_rgba(16,185,129,0.8)] animate-pulse">
                                <GitGraph className="size-16 md:size-24 text-white" />
                             </div>
                             <div>
                                <Badge className="bg-emerald-600/50 text-emerald-500 border-4 border-emerald-500/60 mb-8 px-14 py-4 rounded-[2rem] font-bold uppercase tracking-[1.5em] italic text-[16px]">Genetic Rewritten Successful</Badge>
                                <CardTitle className="text-6xl md:text-[10rem] text-white font-bold italic tracking-tighter uppercase leading-none">Genetic Adaptation Matrix</CardTitle>
                             </div>
                          </div>
                          <div className="text-right">
                             <div className="text-[14px] text-emerald-500/80 uppercase font-bold tracking-[1em] mb-6 italic">Neural Evolution Gain</div>
                             <div className="text-7xl md:text-[12rem] font-bold text-emerald-500 font-code italic drop-shadow-[0_0_40px_emerald]">+24.8%</div>
                          </div>
                       </CardHeader>
                       <CardContent className="p-20 md:p-32 space-y-32">
                          <div className="p-16 md:p-24 rounded-[6rem] bg-emerald-600/5 border-8 border-emerald-600/40 italic text-4xl md:text-[7rem] text-white leading-relaxed shadow-inner relative group">
                             <div className="absolute top-14 right-16 opacity-15 group-hover:scale-125 transition-transform"><Sparkles className="size-32 text-emerald-500"/></div>
                             <strong className="text-emerald-500 uppercase tracking-[1.5em] block mb-12 border-b-4 border-emerald-600/30 pb-8 text-2xl">Commander Strategic Brief:</strong>
                             "{learningResult.commanderBrief}"
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 md:gap-36">
                             <div className="space-y-16">
                                <h4 className="text-[18px] font-bold text-emerald-500 uppercase tracking-[2em] border-b-8 border-emerald-600/30 pb-12 italic flex items-center gap-12">
                                   <Eye className="size-14" /> Extracted Patterns
                                </h4>
                                <ul className="space-y-12">
                                   {learningResult.extractedInsights.map((insight: string, idx: number) => (
                                     <li key={idx} className="flex gap-12 text-2xl md:text-4xl text-gray-300 italic font-medium group hover:text-white transition-all">
                                        <div className="size-4 mt-4.5 rounded-full bg-emerald-500 shadow-[0_0_30px_emerald] shrink-0 animate-ping" />
                                        {insight}
                                     </li>
                                   ))}
                                </ul>
                             </div>
                             <div className="space-y-16">
                                <h4 className="text-[18px] font-bold text-emerald-500 uppercase tracking-[2em] border-b-8 border-emerald-600/30 pb-12 italic flex items-center gap-12">
                                   <Activity className="size-14" /> DNA Adaptation
                                </h4>
                                <p className="text-2xl md:text-4xl text-gray-400 italic leading-loose p-14 bg-black border-8 border-white/10 rounded-[5rem] shadow-inner group hover:text-white transition-all">
                                   "{learningResult.warriorAdaptation}"
                                </p>
                             </div>
                          </div>
                       </CardContent>
                    </Card>
                  ) : (
                    <div className="h-full min-h-[850px] border-[12px] border-dashed border-amber-600/40 rounded-[8rem] flex flex-col items-center justify-center text-center p-32 bg-black/50 group relative overflow-hidden shadow-7xl">
                       <div className="absolute inset-0 bg-amber-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                       <BrainCircuit className="size-80 text-amber-600/20 mb-20 animate-pulse group-hover:scale-110 transition-transform duration-1000" />
                       <h3 className="text-8xl md:text-[12rem] font-headline font-bold text-white mb-16 tracking-tighter italic">Evolution Pending</h3>
                       <p className="text-muted-foreground max-w-[70rem] mx-auto leading-relaxed text-4xl md:text-6xl font-medium italic">
                          "O Master <span className="text-amber-500 font-bold italic shadow-[0_0_20px_gold]">Al-Ghazali</span>, the GEPA 2.0 womb is ready. Provide a success or failure context, and I will rewrite my genetic destiny to conquer the impossible."
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
