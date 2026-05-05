
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
  Filter,
  Fingerprint,
  ChevronRight,
  ArrowUpRight,
  Boxes,
  Atom,
  Infinity as InfinityIcon
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
 * @fileOverview القبو الجيني الأسمى v43.0 - THE GENETIC VAULT: OVERMIND EDITION
 * مركز الارتقاء المعرفي والتعلم الوراثي الموزون. تم تحسين الخطوط والعرض.
 * Commander: المعتصم بالله ادريس الغزالي
 */
export default function KnowledgePage() {
  const [query, setQuery] = React.useState("")
  const [loading, setLoading] = React.useState(false)
  const [report, setReport] = React.useState<any>(null)
  const [mounted, setMounted] = React.useState(false)
  
  const [learningSource, setLearningSource] = React.useState("https://www.kaggle.com/code/cyber-intelligence-2025")
  const [learningGoal, setLearningGoal] = React.useState("Synthesize weighted genetic exploit patterns")
  const [learningResult, setLearningResult] = React.useState<any>(null)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const handleSearch = async () => {
    if (!query.trim()) return
    setLoading(true)
    try {
      const data = await modularAiKnowledgeBaseReporting({ reportQuery: query, userId: "AL_GHAZALI_ROOT" })
      setReport(data)
      toast({ title: "Intelligence Siphoned" })
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
      toast({ title: "DNA Rebirth Initiated" })
    } catch (err) {
      toast({ variant: "destructive", title: "Evolution Failed" })
    } finally {
      setLoading(false)
    }
  }

  if (!mounted) return null;

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/30 relative overflow-x-hidden scanline-effect font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-80 p-4 md:p-10 relative overflow-y-auto min-h-screen scrollbar-hide flex flex-col z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.08),transparent)] pointer-events-none transition-all duration-300 z-0" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />

        <header className="mb-12 relative z-10 animate-in fade-in slide-in-from-top-12 duration-1000">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="size-24 md:size-32 bg-black border-2 border-primary flex items-center justify-center shadow-2xl relative group shrink-0 rounded-[1.5rem] transition-all duration-1000">
              <Database className="size-12 md:size-18 text-primary group-hover:scale-110 transition-transform duration-700 gold-glow animate-pulse" />
              <div className="absolute -inset-4 border border-primary/20 rounded-full animate-spin-slow opacity-40" />
            </div>
            <div className="text-center md:text-left flex-1">
              <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 mb-4">
                <Badge className="bg-primary text-black border-none rounded-none px-6 py-1.5 text-[14px] font-black tracking-[0.4em] shadow-md italic">GEPA 4.5 ENGINE</Badge>
                <div className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-emerald-500 animate-pulse">
                    <InfinityIcon className="size-4 shadow-lg" /> HIVE_MEMORY: ACTIVE
                </div>
              </div>
              <h1 className="text-4xl md:text-7xl font-headline font-bold text-white tracking-tighter italic uppercase leading-none gold-glow">
                Genetic <span className="text-primary">Vault</span>
              </h1>
              <p className="text-lg md:text-2xl text-muted-foreground mt-4 italic max-w-4xl leading-relaxed uppercase font-medium">
                "سيدي الغزالي، القبو المعرفي يعمل الآن بنسخة <span className="text-primary font-black underline decoration-primary decoration-4 underline-offset-8 shadow-lg uppercase tracking-widest">GEPA 4.5</span>؛ الذاكرة الوراثية الموزونة."
              </p>
            </div>
          </div>
        </header>

        <Tabs defaultValue="synthesis" className="w-full relative z-10">
          <TabsList className="bg-black/95 border-2 border-primary/40 h-16 p-1 rounded-full mb-10 shadow-xl backdrop-blur-3xl mx-auto flex justify-center w-fit px-6">
            <TabsTrigger value="synthesis" className="px-10 text-[10px] md:text-[14px] font-black uppercase tracking-[0.2em] data-[state=active]:bg-primary data-[state=active]:text-black rounded-full transition-all duration-500 italic flex items-center gap-3">
                <Atom className="size-4" /> Omniscient Synthesis
            </TabsTrigger>
            <TabsTrigger value="learning" className="px-10 text-[10px] md:text-[14px] font-black uppercase tracking-[0.2em] data-[state=active]:bg-primary data-[state=active]:text-black rounded-full transition-all duration-500 italic flex items-center gap-3 ml-4">
                <RefreshCcw className="size-4" /> DNA Evolution
            </TabsTrigger>
          </TabsList>

          <TabsContent value="synthesis" className="space-y-12 animate-in fade-in zoom-in-95 duration-700">
            <div className="flex flex-col md:flex-row gap-6 mb-12 max-w-[1200px] mx-auto">
              <div className="relative flex-1 group">
                <Search className="absolute left-10 top-1/2 -translate-y-1/2 size-8 text-primary/30 group-focus-within:text-primary transition-all duration-500" />
                <Input 
                  placeholder="Interrogate GEPA 4.5..."
                  className="bg-black/99 border-4 border-primary/40 pl-24 h-20 rounded-[2rem] md:rounded-[3rem] focus:border-primary text-xl md:text-3xl italic transition-all shadow-inner font-black text-white placeholder:text-gray-900"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                />
              </div>
              <Button 
                className="h-20 px-16 bg-primary hover:bg-white text-black rounded-[2rem] md:rounded-[3rem] shadow-2xl font-black tracking-[0.4em] text-lg uppercase group transition-all duration-700 border-4 border-black/30 active:scale-95 italic shrink-0"
                onClick={handleSearch}
                disabled={loading}
              >
                {loading ? <Loader2 className="size-8 animate-spin mr-4" /> : <Zap className="size-8 mr-4 group-hover:scale-125 transition-transform" />}
                Synthesize
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              <div className="lg:col-span-1 space-y-8">
                <Card className="kali-card border-primary/40 bg-black/80 rounded-[2.5rem] p-8 border-2 shadow-xl overflow-hidden group">
                  <CardHeader className="p-0 mb-6 border-b border-primary/10 pb-6">
                    <CardTitle className="text-white flex items-center gap-6 text-xl uppercase tracking-[0.2em] italic font-black gold-glow">
                      <Filter className="size-6 text-primary animate-pulse" /> Genetic Lexicon
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 space-y-4">
                    {[
                      { name: "Overmind Core", count: "v43.0", icon: Skull, color: "text-amber-500" },
                      { name: "GEPA Weights", count: "148,200", icon: Database, color: "text-primary" },
                      { name: "Elite Vectors", count: "9,125", icon: Target, color: "text-emerald-500" },
                    ].map((col, i) => (
                      <div key={i} className="flex items-center justify-between p-6 rounded-[1.5rem] bg-black border border-white/5 hover:border-primary transition-all duration-500 group cursor-pointer shadow-md">
                        <div className="flex items-center gap-4">
                          <col.icon className={cn("size-6 transition-all", col.color)} />
                          <span className="text-sm font-black text-muted-foreground group-hover:text-white uppercase tracking-tighter italic">{col.name}</span>
                        </div>
                        <Badge className="bg-primary/20 text-primary border-primary/40 font-black px-4 py-1 rounded-lg italic text-[10px]">{col.count}</Badge>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>

              <div className="lg:col-span-3">
                {report ? (
                  <Card className="kali-card border-primary/60 bg-black/99 rounded-[3rem] p-10 border-4 shadow-2xl flex flex-col group relative overflow-hidden animate-in fade-in zoom-in-95 duration-1000">
                    <CardHeader className="p-0 mb-8 border-b-4 border-white/5 pb-8 bg-primary/5 rounded-t-[2.5rem]">
                       <div className="flex items-center justify-between px-6 py-6">
                          <div className="flex items-center gap-6">
                             <div className="size-16 rounded-2xl bg-primary flex items-center justify-center border-2 border-black/30 shadow-lg animate-neural">
                                <Skull className="size-8 text-black" />
                             </div>
                             <div>
                                <CardTitle className="text-3xl md:text-5xl text-white italic tracking-tighter uppercase font-black gold-glow leading-none">Intelligence Brief</CardTitle>
                                <CardDescription className="text-primary/70 font-black uppercase tracking-[0.4em] mt-2 italic text-[11px]">v43.0 arbiter</CardDescription>
                             </div>
                          </div>
                          <Badge className="bg-emerald-600/30 text-emerald-500 border-2 border-emerald-500/40 px-8 py-2 rounded-full font-black text-xl animate-pulse tracking-[0.2em] uppercase italic">SYNC_COMPLETE</Badge>
                       </div>
                    </CardHeader>
                    <CardContent className="p-8 font-code text-xl md:text-2xl leading-[1.8] bg-black/80 rounded-[2rem] shadow-inner italic text-gray-100 whitespace-pre-wrap h-[600px] overflow-y-auto scrollbar-hide">
                      {report.reportContent}
                    </CardContent>
                    <div className="p-6 border-t border-white/5 mt-6 flex justify-between items-center opacity-30 text-[10px] font-black uppercase tracking-[1em] italic">
                       <span>HIVE_DNA_v43_AL_GHAZALI_ROOT</span>
                       <Fingerprint className="size-6 text-primary" />
                    </div>
                  </Card>
                ) : (
                  <div className="h-full min-h-[700px] border-4 border-dashed border-primary/10 rounded-[5rem] flex flex-col items-center justify-center text-center p-20 bg-black/40 group relative overflow-hidden transition-all hover:bg-primary/5 shadow-2xl">
                    <Database className="size-48 text-primary/10 animate-pulse mb-8" />
                    <h3 className="text-5xl md:text-[6rem] font-headline font-bold text-white mb-8 tracking-tighter italic drop-shadow-2xl uppercase leading-none">Omniscient Hub</h3>
                    <p className="text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-16 text-2xl md:text-4xl font-black italic">
                      "O Master <span className="text-primary font-black gold-glow underline decoration-primary decoration-4 underline-offset-8 shadow-lg uppercase tracking-widest">Al-Ghazali</span>, the GEPA 4.5 womb is saturated. Feed me context."
                    </p>
                  </div>
                )}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="learning" className="space-y-12 animate-in zoom-in-95 duration-700 pb-24">
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 max-w-[1300px] mx-auto">
               <Card className="kali-card border-primary/50 bg-black/99 rounded-[3rem] p-10 border-4 shadow-2xl flex flex-col group relative overflow-hidden">
                  <CardHeader className="p-0 mb-8 border-b-2 border-primary/20 pb-8 bg-primary/5 rounded-t-[2.5rem]">
                     <CardTitle className="text-primary text-3xl md:text-5xl font-black italic flex items-center gap-6 uppercase tracking-tighter gold-glow px-4 py-4">
                        <BrainCircuit className="size-12 md:size-16 animate-neural" /> DNA Evolution
                     </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 space-y-8 flex-1">
                     <div className="space-y-4">
                        <label className="text-[11px] font-black text-primary/60 uppercase tracking-[0.4em] px-4 italic">Source</label>
                        <Input 
                          value={learningSource}
                          onChange={(e) => setLearningSource(e.target.value)}
                          className="bg-black border-2 border-white/10 h-16 rounded-[1.5rem] focus:border-primary text-xl italic px-8 text-white shadow-lg font-black"
                        />
                     </div>
                     <div className="space-y-4">
                        <label className="text-[11px] font-black text-primary/60 uppercase tracking-[0.4em] px-4 italic">Objective</label>
                        <Input 
                          value={learningGoal}
                          onChange={(e) => setLearningGoal(e.target.value)}
                          className="bg-black border-2 border-white/10 h-16 rounded-[1.5rem] focus:border-primary text-xl italic px-8 text-white shadow-lg font-black"
                        />
                     </div>
                     <Button 
                       onClick={handleStartLearning} 
                       disabled={loading}
                       className="w-full h-20 bg-primary hover:bg-white text-black font-black uppercase tracking-[1em] rounded-[2rem] shadow-2xl active:scale-95 text-lg italic mt-6"
                     >
                        {loading ? <Loader2 className="size-8 animate-spin mr-4" /> : <RefreshCcw className="size-8 mr-4 group-hover:rotate-180 transition-all duration-700" />}
                        EVOLVE DNA
                     </Button>
                  </CardContent>
               </Card>

               <div className="xl:col-span-2">
                  {learningResult ? (
                    <Card className="kali-card border-emerald-600/60 bg-black/98 rounded-[4rem] overflow-hidden shadow-2xl border-4 animate-in slide-in-from-right-12 duration-1000">
                       <CardHeader className="bg-emerald-950/20 border-b-4 border-emerald-600/40 p-10 flex flex-col md:flex-row items-center justify-between gap-8">
                          <div className="flex items-center gap-6">
                             <div className="size-20 rounded-2xl bg-emerald-600 flex items-center justify-center border-2 border-emerald-400 shadow-xl animate-neural">
                                <GitGraph className="size-10 text-white" />
                             </div>
                             <div>
                                <CardTitle className="text-3xl md:text-5xl text-white font-black italic tracking-tighter uppercase leading-none gold-glow">REBIRTH MATRIX</CardTitle>
                             </div>
                          </div>
                          <div className="text-right flex flex-col items-end gap-2 bg-emerald-600/5 p-4 rounded-[1.5rem] border border-emerald-500/20 shadow-inner">
                             <div className="text-[10px] text-emerald-500/80 uppercase font-black tracking-[0.4em] italic">Neural Gain</div>
                             <div className="text-4xl md:text-6xl font-black text-emerald-500 italic leading-none">+32.4%</div>
                          </div>
                       </CardHeader>
                       <CardContent className="p-10 md:p-16 space-y-12">
                          <div className="p-8 rounded-[2rem] bg-emerald-600/10 border-2 border-emerald-600/50 italic text-2xl md:text-4xl text-white leading-tight font-black shadow-inner">
                             <strong className="text-emerald-500 uppercase tracking-[0.4em] block mb-6 border-b border-emerald-600/30 pb-4 text-sm italic">Brief:</strong>
                             "{learningResult.commanderBrief}"
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                             <div className="space-y-8">
                                <h4 className="text-[14px] font-black text-emerald-500 uppercase tracking-[0.8em] border-b-2 border-emerald-600/40 pb-6 italic flex items-center gap-6">
                                   <Eye className="size-6" /> Vectors
                                </h4>
                                <ul className="space-y-6">
                                   {learningResult.extractedInsights.map((insight: string, idx: number) => (
                                     <li key={idx} className="flex gap-4 text-xl md:text-2xl text-gray-200 italic font-black group hover:text-emerald-400 transition-all">
                                        <div className="size-3 mt-3 rounded-full bg-emerald-500 shadow-lg shrink-0 animate-ping" />
                                        <span className="leading-snug">"{insight}"</span>
                                     </li>
                                   ))}
                                </ul>
                             </div>
                             <div className="space-y-8">
                                <h4 className="text-[14px] font-black text-emerald-500 uppercase tracking-[0.8em] border-b-2 border-emerald-600/40 pb-6 italic flex items-center gap-6">
                                   <Activity className="size-6" /> Adaptation
                                </h4>
                                <div className="p-8 bg-black/90 border border-white/5 rounded-[2rem] shadow-inner h-[250px] overflow-y-auto scrollbar-hide">
                                   <p className="text-lg md:text-xl text-gray-400 italic font-black leading-relaxed">
                                      "{learningResult.warriorAdaptation}"
                                   </p>
                                </div>
                             </div>
                          </div>
                       </CardContent>
                    </Card>
                  ) : (
                    <div className="h-full min-h-[600px] border-4 border-dashed border-primary/20 rounded-[5rem] flex flex-col items-center justify-center text-center p-20 bg-black/40 group relative overflow-hidden shadow-2xl hover:bg-primary/5 transition-all duration-700">
                       <BrainCircuit className="size-48 text-primary/10 mb-8 animate-pulse" />
                       <h3 className="text-5xl md:text-[6rem] font-headline font-bold text-white mb-8 tracking-tighter italic uppercase drop-shadow-2xl leading-none">Evolution Idle</h3>
                       <p className="text-muted-foreground max-w-4xl mx-auto leading-relaxed text-2xl md:text-4xl font-black italic">
                          "Feed me the tactical context, and I will rewrite my genetic destiny."
                       </p>
                    </div>
                  )}
               </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-auto relative z-10 flex justify-center items-center gap-24 opacity-40 text-[12px] font-black uppercase tracking-[2em] italic text-white drop-shadow-xl pb-6">
            <span>AL-MUIZZ GENETIC VAULT v43.0</span>
            <div className="size-4 rounded-full bg-white animate-pulse" />
            <span>SOVEREIGNTY_ACTIVE</span>
        </div>
      </main>
    </div>
  )
}
