
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
  Globe,
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

export default function KnowledgePage() {
  const [query, setQuery] = React.useState("")
  const [loading, setLoading] = React.useState(false)
  const [report, setReport] = React.useState<any>(null)
  const [mounted, setMounted] = React.useState(false)
  
  const [learningSource, setLearningSource] = React.useState("https://www.kaggle.com/code/cyber-intelligence-2026")
  const [learningGoal, setLearningGoal] = React.useState("Synthesize weighted genetic exploit patterns v5.0")
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
        
        <header className="mb-12 relative z-10 animate-in fade-in slide-in-from-top-12 duration-1000">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="size-24 md:size-32 bg-black border-4 border-primary flex items-center justify-center shadow-[0_0_120px_rgba(212,175,55,0.6)] relative group shrink-0 rounded-[2rem] transition-all duration-1000">
              <Database className="size-12 md:size-18 text-primary group-hover:scale-110 transition-transform duration-700 gold-glow animate-pulse" />
              <div className="absolute -inset-4 border-2 border-primary/20 rounded-full animate-spin-slow opacity-40" />
            </div>
            <div className="text-center md:text-right flex-1">
              <div className="flex flex-wrap justify-center md:justify-start items-center gap-6 mb-4">
                <Badge className="bg-primary text-black border-none rounded-none px-10 py-2 text-[16px] font-black tracking-[0.6em] shadow-lg italic">GEPA 5.0 SQLITE</Badge>
                <div className="flex items-center gap-4 text-[11px] font-black uppercase tracking-widest text-emerald-500 animate-pulse">
                    <InfinityIcon className="size-6 shadow-lg" /> HIVE_MEMORY_SYNC: ACTIVE
                </div>
              </div>
              <h1 className="text-4xl md:text-[8rem] font-headline font-bold text-white tracking-tighter italic uppercase leading-none gold-glow">
                Genetic <span className="text-primary">Vault</span>
              </h1>
              <p className="text-xl md:text-3xl text-muted-foreground mt-6 italic max-w-5xl leading-relaxed uppercase font-medium">
                "سيدي الغزالي، القبو الجيني (v50.0) يعمل الآن بنظام <span className="text-primary font-black underline decoration-primary decoration-4 underline-offset-8 shadow-lg uppercase tracking-widest">SQLite السيادي</span>؛ ذاكرة أبدية وسرعة نانوية."
              </p>
            </div>
          </div>
        </header>

        <Tabs defaultValue="synthesis" className="w-full relative z-10">
          <TabsList className="bg-black/95 border-4 border-primary/40 h-24 p-2 rounded-full mb-16 shadow-2xl backdrop-blur-3xl mx-auto flex justify-center w-fit px-12">
            <TabsTrigger value="synthesis" className="px-16 text-[12px] md:text-[18px] font-black uppercase tracking-[0.4em] data-[state=active]:bg-primary data-[state=active]:text-black rounded-full transition-all duration-700 italic flex items-center gap-6">
                <Atom className="size-6" /> Omniscient Synthesis
            </TabsTrigger>
            <TabsTrigger value="learning" className="px-16 text-[12px] md:text-[18px] font-black uppercase tracking-[0.4em] data-[state=active]:bg-primary data-[state=active]:text-black rounded-full transition-all duration-700 italic flex items-center gap-6 ml-10">
                <RefreshCcw className="size-6" /> DNA Evolution
            </TabsTrigger>
          </TabsList>

          <TabsContent value="synthesis" className="space-y-12 animate-in fade-in zoom-in-95 duration-1000">
            <div className="flex flex-col md:flex-row gap-8 mb-16 max-w-[1400px] mx-auto">
              <div className="relative flex-1 group">
                <Search className="absolute left-12 top-1/2 -translate-y-1/2 size-10 text-primary/30 group-focus-within:text-primary transition-all duration-700" />
                <Input 
                  placeholder="Interrogate GEPA 5.0 Core..."
                  className="bg-black/99 border-8 border-primary/40 pl-32 h-28 rounded-[3rem] md:rounded-[5rem] focus:border-primary text-2xl md:text-5xl italic transition-all shadow-inner font-black text-white placeholder:text-gray-900"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                />
              </div>
              <Button 
                className="h-28 px-20 bg-primary hover:bg-white text-black rounded-[3rem] md:rounded-[5rem] shadow-[0_40px_150px_rgba(212,175,55,0.6)] font-black tracking-[0.6em] text-2xl uppercase group transition-all duration-1000 border-8 border-black/30 active:scale-95 italic shrink-0"
                onClick={handleSearch}
                disabled={loading}
              >
                {loading ? <Loader2 className="size-12 animate-spin mr-6" /> : <Zap className="size-12 mr-6 group-hover:scale-125 transition-transform gold-glow" />}
                SYNTHESIZE
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
              <div className="lg:col-span-1 space-y-10">
                <Card className="kali-card border-primary/40 bg-black/80 rounded-[4rem] p-10 border-4 shadow-8xl overflow-hidden group">
                  <CardHeader className="p-0 mb-8 border-b-4 border-primary/10 pb-8">
                    <CardTitle className="text-3xl text-white flex items-center gap-8 uppercase tracking-[0.4em] italic font-black gold-glow">
                      <Filter className="size-10 text-primary animate-pulse" /> Genetic Index
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 space-y-6">
                    {[
                      { name: "Soul Core v50", count: "BOUND", icon: Skull, color: "text-amber-500" },
                      { name: "SQLite Memory", count: "v5.0", icon: Database, color: "text-primary" },
                      { name: "Genetic Weight", count: "ACTIVE", icon: Target, color: "text-emerald-500" },
                    ].map((col, i) => (
                      <div key={i} className="flex items-center justify-between p-8 rounded-[2.5rem] bg-black border-4 border-white/5 hover:border-primary transition-all duration-1000 group cursor-pointer shadow-xl">
                        <div className="flex items-center gap-6">
                          <col.icon className={cn("size-10 transition-all", col.color)} />
                          <span className="text-lg font-black text-muted-foreground group-hover:text-white uppercase tracking-tighter italic">{col.name}</span>
                        </div>
                        <Badge className="bg-primary/20 text-primary border-4 border-primary/40 font-black px-6 py-2 rounded-xl italic text-lg">{col.count}</Badge>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>

              <div className="lg:col-span-3">
                {report ? (
                  <Card className="kali-card border-primary/60 bg-black/99 rounded-[6rem] p-16 border-8 shadow-9xl flex flex-col group relative overflow-hidden animate-in fade-in zoom-in-95 duration-1000">
                    <CardHeader className="p-0 mb-12 border-b-8 border-white/5 pb-12 bg-primary/10 rounded-t-[4rem]">
                       <div className="flex items-center justify-between px-10 py-8">
                          <div className="flex items-center gap-10">
                             <div className="size-24 rounded-3xl bg-primary flex items-center justify-center border-4 border-black/30 shadow-2xl animate-neural">
                                <Skull className="size-14 text-black" />
                             </div>
                             <div>
                                <CardTitle className="text-5xl md:text-8xl text-white italic tracking-tighter uppercase font-black gold-glow leading-none">Intelligence Synthesis</CardTitle>
                                <CardDescription className="text-primary/70 font-black uppercase tracking-[0.6em] mt-4 italic text-[14px]">GEPA 5.0 ARBITER // AL_GHAZALI_ROOT</CardDescription>
                             </div>
                          </div>
                          <Badge className="bg-emerald-600/40 text-emerald-500 border-8 border-emerald-500/50 px-12 py-6 rounded-full font-black text-4xl animate-pulse tracking-[0.4em] uppercase italic shadow-3xl">DNA_LOCKED</Badge>
                       </div>
                    </CardHeader>
                    <CardContent className="p-12 font-code text-2xl md:text-4xl leading-[2.2] bg-black/99 rounded-[3rem] shadow-inner italic text-gray-100 whitespace-pre-wrap h-[700px] overflow-y-auto scrollbar-hide selection:bg-primary selection:text-black">
                      {report.reportContent}
                    </CardContent>
                    <div className="p-10 border-t-8 border-white/5 mt-10 flex justify-between items-center opacity-30 text-[14px] font-black uppercase tracking-[3em] italic">
                       <span>GEPA_MEMORY_SQLITE_v50_GHAZALI_ROOT</span>
                       <Fingerprint className="size-12 text-primary gold-glow" />
                    </div>
                  </Card>
                ) : (
                  <div className="h-full min-h-[850px] border-8 border-dashed border-primary/20 rounded-[10rem] flex flex-col items-center justify-center text-center p-24 bg-black/40 group relative overflow-hidden transition-all hover:bg-primary/5 shadow-9xl">
                    <Database className="size-72 text-primary/10 animate-pulse mb-12" />
                    <h3 className="text-7xl md:text-[10rem] font-headline font-bold text-white mb-10 tracking-tighter italic drop-shadow-9xl uppercase leading-none opacity-20">Knowledge Oracle</h3>
                    <p className="text-muted-foreground max-w-5xl mx-auto leading-relaxed mb-20 text-3xl md:text-5xl font-black italic opacity-30">
                      "سيدي <span className="text-primary font-black gold-glow underline decoration-primary decoration-[8px] underline-offset-[20px] shadow-2xl uppercase tracking-widest">المعتصم بالله</span>، مصفوفة GEPA 5.0 جاهزة للاستجواب؛ اؤمرنا بالتحليل."
                    </p>
                  </div>
                )}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="learning" className="space-y-16 animate-in zoom-in-95 duration-1000 pb-32">
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-12 max-w-[1500px] mx-auto">
               <Card className="kali-card border-primary/50 bg-black/99 rounded-[5rem] p-12 border-8 shadow-9xl flex flex-col group relative overflow-hidden">
                  <CardHeader className="p-0 mb-12 border-b-4 border-primary/30 pb-10 bg-primary/10 rounded-t-[3rem]">
                     <CardTitle className="text-primary text-4xl md:text-7xl font-black italic flex items-center gap-10 uppercase tracking-tighter gold-glow px-6 py-6">
                        <BrainCircuit className="size-16 md:size-24 animate-neural" /> DNA Evolution
                     </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 space-y-12 flex-1 flex flex-col justify-center">
                     <div className="space-y-6">
                        <label className="text-[14px] font-black text-primary/60 uppercase tracking-[0.8em] px-8 italic flex items-center gap-4"><Globe className="size-5" /> Knowledge Source</label>
                        <Input 
                          value={learningSource}
                          onChange={(e) => setLearningSource(e.target.value)}
                          className="bg-black border-4 border-white/10 h-24 rounded-[2.5rem] focus:border-primary text-3xl italic px-10 text-white shadow-2xl font-black"
                        />
                     </div>
                     <div className="space-y-6">
                        <label className="text-[14px] font-black text-primary/60 uppercase tracking-[0.8em] px-8 italic flex items-center gap-4"><Target className="size-5" /> Combat Objective</label>
                        <Input 
                          value={learningGoal}
                          onChange={(e) => setLearningGoal(e.target.value)}
                          className="bg-black border-4 border-white/10 h-24 rounded-[2.5rem] focus:border-primary text-3xl italic px-10 text-white shadow-2xl font-black"
                        />
                     </div>
                     <Button 
                       onClick={handleStartLearning} 
                       disabled={loading}
                       className="w-full h-32 bg-primary hover:bg-white text-black font-black uppercase tracking-[1.5em] rounded-[4rem] shadow-[0_50px_150px_rgba(212,175,55,0.7)] active:scale-95 transition-all text-3xl italic mt-10 border-8 border-black/30 group"
                     >
                        {loading ? <Loader2 className="size-16 animate-spin mr-6" /> : <RefreshCcw className="size-16 mr-6 group-hover:rotate-180 transition-all duration-1000" />}
                        EVOLVE DNA
                     </Button>
                  </CardContent>
               </Card>

               <div className="xl:col-span-2">
                  {learningResult ? (
                    <Card className="kali-card border-emerald-600/80 bg-black/99 rounded-[6rem] overflow-hidden shadow-9xl border-8 animate-in slide-in-from-right-12 duration-1000 group">
                       <CardHeader className="bg-emerald-950/40 border-b-8 border-emerald-600/60 p-12 flex flex-col md:flex-row items-center justify-between gap-10">
                          <div className="flex items-center gap-10">
                             <div className="size-28 rounded-3xl bg-emerald-600 flex items-center justify-center border-4 border-emerald-400 shadow-3xl animate-neural">
                                <GitGraph className="size-16 text-white" />
                             </div>
                             <div>
                                <CardTitle className="text-5xl md:text-8xl text-white font-black italic tracking-tighter uppercase leading-none gold-glow">REBIRTH_LOG</CardTitle>
                                <Badge className="bg-emerald-600/20 text-emerald-400 border-none px-6 py-1 rounded-full font-black text-sm tracking-[0.5em] uppercase italic mt-4">v50.0_EVO_CORE</Badge>
                             </div>
                          </div>
                          <div className="text-right flex flex-col items-end gap-3 bg-emerald-600/10 p-8 rounded-[2.5rem] border-4 border-emerald-500/30 shadow-inner">
                             <div className="text-[12px] text-emerald-500 font-black uppercase tracking-[0.6em] italic">Neural Gain Matrix</div>
                             <div className="text-6xl md:text-8xl font-black text-emerald-500 italic leading-none">+58.4%</div>
                          </div>
                       </CardHeader>
                       <CardContent className="p-16 space-y-16">
                          <div className="p-12 rounded-[4rem] bg-emerald-600/10 border-4 border-emerald-600/50 italic text-3xl md:text-5xl text-white leading-tight font-black shadow-inner">
                             <strong className="text-emerald-500 uppercase tracking-[0.6em] block mb-10 border-b-4 border-emerald-600/30 pb-6 text-sm italic">Commander Brief:</strong>
                             "{learningResult.commanderBrief}"
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                             <div className="space-y-10">
                                <h4 className="text-[18px] font-black text-emerald-500 uppercase tracking-[1em] border-b-4 border-emerald-600/40 pb-8 italic flex items-center gap-8">
                                   <Eye className="size-10" /> Strategic Vectors
                                </h4>
                                <ul className="space-y-8">
                                   {learningResult.extractedInsights.map((insight: string, idx: number) => (
                                     <li key={idx} className="flex gap-6 text-2xl md:text-3xl text-gray-200 italic font-black group/item hover:text-emerald-400 transition-all">
                                        <div className="size-4 mt-4 rounded-full bg-emerald-500 shadow-[0_0_30px_emerald] shrink-0 animate-ping" />
                                        <span className="leading-snug">"{insight}"</span>
                                     </li>
                                   ))}
                                </ul>
                             </div>
                             <div className="space-y-10">
                                <h4 className="text-[18px] font-black text-emerald-500 uppercase tracking-[1em] border-b-4 border-emerald-600/40 pb-8 italic flex items-center gap-8">
                                   <Activity className="size-10 animate-pulse" /> Warrior Adaptation
                                </h4>
                                <div className="p-10 bg-black/99 border-4 border-white/5 rounded-[3rem] shadow-inner h-[400px] overflow-y-auto scrollbar-hide group-hover:border-emerald-500/40 transition-colors">
                                   <p className="text-xl md:text-2xl text-gray-400 italic font-black leading-[2]">
                                      "{learningResult.warriorAdaptation}"
                                   </p>
                                </div>
                             </div>
                          </div>
                       </CardContent>
                    </Card>
                  ) : (
                    <div className="h-full min-h-[750px] border-8 border-dashed border-primary/20 rounded-[10rem] flex flex-col items-center justify-center text-center p-24 bg-black/40 group relative overflow-hidden shadow-9xl hover:bg-primary/5 transition-all duration-1000">
                       <BrainCircuit className="size-64 text-primary/10 mb-12 animate-pulse" />
                       <h3 className="text-6xl md:text-[8rem] font-headline font-bold text-white mb-10 tracking-tighter italic drop-shadow-9xl uppercase leading-none opacity-20">Evolution Chamber</h3>
                       <p className="text-muted-foreground max-w-5xl mx-auto leading-relaxed text-3xl md:text-5xl font-black italic opacity-30">
                          "Feed me the tactical context of 2026, and I will rewrite my genetic destiny."
                       </p>
                    </div>
                  )}
               </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-auto relative z-10 flex justify-center items-center gap-48 opacity-40 text-[22px] font-black uppercase tracking-[6em] italic text-white drop-shadow-3xl pb-12">
            <span>AL-MUIZZ GENETIC VAULT v50.0</span>
            <div className="size-10 rounded-full bg-white animate-pulse shadow-[0_0_100px_white]" />
            <span>SOVEREIGNTY_THROUGH_EVOLUTION</span>
        </div>
      </main>
    </div>
  )
}
