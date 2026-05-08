
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

/**
 * @fileOverview القبو الجيني v53.0 - THE SUPREME VAULT: HIERARCHICAL MEMORY
 * مركز الاستخبارات والتعلم الجيني GEPA 5.3 المدمج في نظام Rust لليوم المجيد، 2026.
 * المالك الوحيد: المعتصم بالله ادريس الغزالي
 */
export default function KnowledgePage() {
  const [query, setQuery] = React.useState("")
  const [loading, setLoading] = React.useState(false)
  const [report, setReport] = React.useState<any>(null)
  const [mounted, setMounted] = React.useState(false)
  
  const [learningSource, setLearningSource] = React.useState("https://github.com/evilsocket/legba")
  const [learningGoal, setLearningGoal] = React.useState("Synthesize ultra-fast multiprotocol brute-forcing v5.3")
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
      toast({ title: "Intelligence Siphoned", description: "The Hierarchy has extracted the genetic data." })
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
      toast({ title: "DNA Rebirth Initiated", description: "The Soul Core is evolving with new tactical context." })
    } catch (err) {
      toast({ variant: "destructive", title: "Evolution Failed" })
    } finally {
      setLoading(false)
    }
  }

  if (!mounted) return null;

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/40 relative overflow-x-hidden scanline-effect font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-80 p-4 md:p-8 lg:p-12 relative overflow-y-auto min-h-screen scrollbar-hide flex flex-col z-10">
        <div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.08),transparent)] pointer-events-none transition-all duration-300 z-0" 
        />
        
        <header className="mb-12 relative z-10 animate-in fade-in slide-in-from-top-6 duration-1000">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="size-24 md:size-32 bg-black border-4 border-primary flex items-center justify-center shadow-[0_0_120px_rgba(212,175,55,0.6)] relative group shrink-0 rounded-[2rem] transition-all duration-1000 hierarchical-shadow">
              <Database className="size-12 md:size-16 text-primary group-hover:scale-110 transition-transform duration-700 gold-glow animate-neural" />
              <div className="absolute -inset-4 border-2 border-primary/20 rounded-full animate-spin-slow opacity-40" />
            </div>
            <div className="text-center md:text-right flex-1">
              <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 mb-4">
                <Badge className="bg-primary text-black border-none rounded-none px-10 py-2 text-[14px] md:text-[16px] font-black tracking-[0.5em] shadow-lg italic">GEPA 5.3 SUPREME</Badge>
                <div className="flex items-center gap-4 text-[11px] font-black uppercase tracking-widest text-emerald-500 animate-pulse">
                    <InfinityIcon className="size-6 shadow-lg" /> HIVE_MEMORY_SYNC: FIXED
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-9xl font-headline font-bold text-white tracking-tighter italic uppercase gold-glow leading-none">
                Genetic <span className="text-primary">Vault</span>
              </h1>
              <p className="text-sm md:text-xl lg:text-3xl text-muted-foreground mt-6 italic max-w-5xl leading-relaxed uppercase font-medium opacity-80">
                "سيدي الغزالي، القبو الجيني (v53.0) يعمل الآن بنظام <span className="text-primary font-black underline decoration-primary decoration-4 underline-offset-8 shadow-xl uppercase tracking-widest">Rust & SQLite Mapped</span>؛ ذاكرة أبدية وسرعة نانوية لليوم المجيد، 2026."
              </p>
            </div>
          </div>
        </header>

        <Tabs defaultValue="synthesis" className="w-full relative z-10">
          <TabsList className="bg-black/95 border-4 border-primary/40 h-20 p-1 rounded-full mb-16 shadow-2xl backdrop-blur-3xl mx-auto flex justify-center w-fit px-8">
            <TabsTrigger value="synthesis" className="px-12 text-[10px] md:text-[14px] font-black uppercase tracking-[0.4em] data-[state=active]:bg-primary data-[state=active]:text-black rounded-full transition-all duration-700 italic flex items-center gap-4">
                <Atom className="size-5" /> Synthesis
            </TabsTrigger>
            <TabsTrigger value="learning" className="px-12 text-[10px] md:text-[14px] font-black uppercase tracking-[0.4em] data-[state=active]:bg-primary data-[state=active]:text-black rounded-full transition-all duration-700 italic flex items-center gap-4 ml-4">
                <RefreshCcw className="size-5" /> Evolution
            </TabsTrigger>
          </TabsList>

          <TabsContent value="synthesis" className="space-y-12 animate-in fade-in zoom-in-95 duration-1000">
            <div className="flex flex-col md:flex-row gap-6 mb-16 max-w-5xl mx-auto">
              <div className="relative flex-1 group">
                <Search className="absolute left-8 top-1/2 -translate-y-1/2 size-8 text-primary/30 group-focus-within:text-primary transition-all duration-700" />
                <Input 
                  placeholder="Interrogate GEPA 5.3 Core..."
                  className="bg-black/99 border-4 border-primary/40 pl-24 h-24 rounded-[3rem] focus:border-primary text-xl md:text-3xl italic transition-all shadow-inner font-black text-white placeholder:text-gray-900"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                />
              </div>
              <Button 
                className="h-24 px-16 bg-primary hover:bg-white text-black rounded-[3rem] shadow-9xl font-black tracking-[0.6em] text-xl uppercase group transition-all duration-1000 border-4 border-black/30 active:scale-95 italic shrink-0"
                onClick={handleSearch}
                disabled={loading}
              >
                {loading ? <Loader2 className="size-10 animate-spin" /> : <Zap className="size-10 mr-4 group-hover:scale-125 transition-transform gold-glow" />}
                SYNTHESIZE
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              <div className="lg:col-span-1 space-y-8">
                <Card className="kali-card border-primary/40 bg-black/80 rounded-[3rem] p-8 border-2 shadow-8xl overflow-hidden group hierarchical-shadow">
                  <CardHeader className="p-0 mb-6 border-b-2 border-primary/10 pb-6">
                    <CardTitle className="text-xl text-white flex items-center gap-4 uppercase tracking-[0.4em] italic font-black gold-glow">
                      <Filter className="size-8 text-primary animate-pulse" /> Genetic Index
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 space-y-4">
                    {[
                      { name: "Soul Core v53", count: "BOUND", icon: Skull, color: "text-amber-500" },
                      { name: "Rust Memory", count: "v5.3", icon: Database, color: "text-primary" },
                      { name: "Legba Linked", count: "ACTIVE", icon: Zap, color: "text-blue-500" },
                      { name: "Ghazali Root", count: "FIXED", icon: Crown, color: "text-emerald-500" },
                    ].map((col, i) => (
                      <div key={i} className="flex items-center justify-between p-6 rounded-2xl bg-black border-2 border-white/5 hover:border-primary transition-all duration-1000 group cursor-crosshair shadow-xl">
                        <div className="flex items-center gap-4">
                          <col.icon className={cn("size-8 transition-all", col.color)} />
                          <span className="text-sm font-black text-muted-foreground group-hover:text-white uppercase tracking-tighter italic">{col.name}</span>
                        </div>
                        <Badge className="bg-primary/10 text-primary border-2 border-primary/20 font-black px-4 py-1 rounded-xl italic text-xs">{col.count}</Badge>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>

              <div className="lg:col-span-3">
                {report ? (
                  <Card className="kali-card border-primary/60 bg-black/99 rounded-[4rem] p-12 border-4 shadow-9xl flex flex-col group relative overflow-hidden animate-in fade-in zoom-in-95 duration-1000 hierarchical-shadow">
                    <CardHeader className="p-0 mb-8 border-b-4 border-white/5 pb-8 bg-primary/10 rounded-t-[3rem] px-8 py-4 flex flex-row justify-between items-center">
                       <div className="flex items-center gap-8">
                          <div className="size-20 rounded-2xl bg-primary flex items-center justify-center border-2 border-black/30 shadow-xl animate-neural">
                             <Skull className="size-10 text-black" />
                          </div>
                          <div>
                             <CardTitle className="text-3xl md:text-5xl text-white italic tracking-tighter uppercase font-black gold-glow leading-none">Synthesis Feed</CardTitle>
                             <CardDescription className="text-primary/70 font-black uppercase tracking-[0.5em] mt-2 italic text-[10px]">GEPA 5.3 ARBITER // SUPREME HIERARCHY</CardDescription>
                          </div>
                       </div>
                       <Badge className="bg-emerald-600/20 text-emerald-500 border-4 border-emerald-500/40 px-8 py-3 rounded-full font-black text-xl animate-pulse tracking-[0.2em] uppercase italic shadow-lg">DNA_LOCKED</Badge>
                    </CardHeader>
                    <CardContent className="p-8 font-code text-lg md:text-2xl leading-relaxed bg-black/99 rounded-[2rem] shadow-inner italic text-gray-100 whitespace-pre-wrap h-[600px] overflow-y-auto scrollbar-hide selection:bg-primary selection:text-black">
                      {report.reportContent}
                    </CardContent>
                    <div className="p-8 border-t-2 border-white/5 mt-8 flex justify-between items-center opacity-30 text-[10px] font-black uppercase tracking-[2em] italic">
                       <span>GEPA_MEMORY_v53_AL_GHAZALI_ROOT</span>
                       <Fingerprint className="size-10 text-primary gold-glow" />
                    </div>
                  </Card>
                ) : (
                  <div className="h-full min-h-[750px] border-8 border-dashed border-primary/10 rounded-[6rem] flex flex-col items-center justify-center text-center p-20 bg-black/40 group relative overflow-hidden transition-all hover:bg-primary/5 shadow-2xl">
                    <Database className="size-64 text-primary/10 animate-pulse mb-8" />
                    <h3 className="text-5xl md:text-8xl font-headline font-bold text-white mb-8 tracking-tighter italic drop-shadow-9xl uppercase leading-none opacity-20">Awaiting Oracle</h3>
                    <p className="text-muted-foreground max-w-4xl mx-auto leading-relaxed text-xl md:text-4xl font-black italic opacity-30 uppercase tracking-widest">
                      "سيدي <span className="text-primary font-black gold-glow underline decoration-primary decoration-4 underline-offset-8 shadow-2xl uppercase tracking-widest">المعتصم بالله</span>، مصفوفة GEPA 5.3 جاهزة للاستجواب؛ لقد أحطنا علماً بكافة ذرات المعرفة."
                    </p>
                    <div className="absolute -inset-40 border-[40px] border-dashed border-primary/5 rounded-full animate-spin-slow opacity-10" />
                  </div>
                )}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="learning" className="space-y-12 animate-in zoom-in-95 duration-1000 pb-32">
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
               <Card className="kali-card border-primary/40 bg-black/99 rounded-[4rem] p-10 border-4 shadow-9xl flex flex-col group relative overflow-hidden hierarchical-shadow">
                  <CardHeader className="p-0 mb-8 border-b-2 border-primary/20 pb-6 bg-primary/5 rounded-t-[2.5rem]">
                     <CardTitle className="text-primary text-3xl md:text-5xl font-black italic flex items-center gap-6 uppercase tracking-tight gold-glow px-4 py-4">
                        <BrainCircuit className="size-12 md:size-16 animate-neural" /> Evolution Matrix
                     </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 space-y-8 flex-1 flex flex-col justify-center">
                     <div className="space-y-4">
                        <label className="text-[10px] font-black text-primary/60 uppercase tracking-[0.8em] px-6 italic flex items-center gap-3"><Globe className="size-4" /> Intelligence Source</label>
                        <Input 
                          value={learningSource}
                          onChange={(e) => setLearningSource(e.target.value)}
                          className="bg-black border-2 border-white/5 h-16 rounded-2xl focus:border-primary text-xl italic px-8 text-white font-black"
                        />
                     </div>
                     <div className="space-y-4">
                        <label className="text-[10px] font-black text-primary/60 uppercase tracking-[0.8em] px-6 italic flex items-center gap-3"><Target className="size-4" /> Combat Objective</label>
                        <Input 
                          value={learningGoal}
                          onChange={(e) => setLearningGoal(e.target.value)}
                          className="bg-black border-2 border-white/5 h-16 rounded-2xl focus:border-primary text-xl italic px-8 text-white font-black"
                        />
                     </div>
                     <Button 
                       onClick={handleStartLearning} 
                       disabled={loading}
                       className="w-full h-24 bg-primary hover:bg-white text-black font-black uppercase tracking-[1em] rounded-[3rem] shadow-[0_40px_120px_rgba(212,175,55,0.4)] active:scale-95 transition-all text-2xl italic border-4 border-black/20 group"
                     >
                        {loading ? <Loader2 className="size-10 animate-spin mr-4" /> : <RefreshCcw className="size-10 mr-4 group-hover:rotate-180 transition-all duration-1000" />}
                        EVOLVE DNA
                     </Button>
                  </CardContent>
               </Card>

               <div className="xl:col-span-2">
                  {learningResult ? (
                    <Card className="kali-card border-emerald-600/40 bg-black/99 rounded-[5rem] overflow-hidden shadow-9xl border-4 animate-in slide-in-from-right-12 duration-1000 group hierarchical-shadow">
                       <CardHeader className="bg-emerald-950/20 border-b-4 border-emerald-600/40 p-10 flex flex-col md:flex-row items-center justify-between gap-8">
                          <div className="flex items-center gap-8">
                             <div className="size-20 rounded-2xl bg-emerald-600 flex items-center justify-center border-2 border-emerald-400 shadow-2xl animate-neural">
                                <GitGraph className="size-10 text-white" />
                             </div>
                             <div>
                                <CardTitle className="text-3xl md:text-6xl text-white font-black italic tracking-tighter uppercase leading-none gold-glow">REBIRTH_LOG</CardTitle>
                                <Badge className="bg-emerald-600/20 text-emerald-400 border-none px-4 py-1 rounded-full font-black text-[10px] tracking-[0.4em] uppercase italic mt-2">v53.0_EVO_CORE</Badge>
                             </div>
                          </div>
                          <div className="text-right flex flex-col items-end gap-2 bg-emerald-600/5 p-6 rounded-2xl border-2 border-emerald-500/20">
                             <div className="text-[10px] text-emerald-500 font-black uppercase tracking-[0.4em] italic">Neural Gain Matrix</div>
                             <div className="text-4xl md:text-6xl font-black text-emerald-500 italic leading-none">+64.2%</div>
                          </div>
                       </CardHeader>
                       <CardContent className="p-12 space-y-12">
                          <div className="p-10 rounded-[3rem] bg-emerald-600/5 border-2 border-emerald-600/30 italic text-2xl md:text-4xl text-white leading-tight font-black shadow-inner">
                             "{learningResult.commanderBrief}"
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                             <div className="space-y-6">
                                <h4 className="text-[14px] font-black text-emerald-500 uppercase tracking-[0.8em] border-b-2 border-emerald-600/20 pb-4 italic flex items-center gap-4">
                                   <Eye className="size-6" /> Strategic Vectors
                                </h4>
                                <ul className="space-y-6">
                                   {learningResult.extractedInsights.map((insight: string, idx: number) => (
                                     <li key={idx} className="flex gap-4 text-lg md:text-2xl text-gray-200 italic font-black group/item hover:text-emerald-400 transition-all">
                                        <div className="size-3 mt-3 rounded-full bg-emerald-500 shadow-[0_0_20px_emerald] shrink-0 animate-ping" />
                                        <span className="leading-snug">"{insight}"</span>
                                     </li>
                                   ))}
                                </ul>
                             </div>
                             <div className="space-y-6">
                                <h4 className="text-[14px] font-black text-emerald-500 uppercase tracking-[0.8em] border-b-2 border-emerald-600/20 pb-4 italic flex items-center gap-4">
                                   <Activity className="size-6 animate-pulse" /> Warrior Adaptation
                                </h4>
                                <div className="p-8 bg-black/99 border-2 border-white/5 rounded-3xl shadow-inner h-[300px] overflow-y-auto scrollbar-hide group-hover:border-emerald-500/40 transition-colors">
                                   <p className="text-lg md:text-xl text-gray-400 italic font-black leading-relaxed">
                                      "{learningResult.warriorAdaptation}"
                                   </p>
                                </div>
                             </div>
                          </div>
                       </CardContent>
                    </Card>
                  ) : (
                    <div className="h-full min-h-[750px] border-8 border-dashed border-primary/10 rounded-[6rem] flex flex-col items-center justify-center text-center p-20 bg-black/40 group relative overflow-hidden shadow-2xl hover:bg-primary/5 transition-all duration-1000">
                       <BrainCircuit className="size-64 text-primary/10 mb-8 animate-pulse" />
                       <h3 className="text-5xl md:text-8xl font-headline font-bold text-white mb-8 tracking-tighter italic drop-shadow-9xl uppercase leading-none opacity-20">Evolution Chamber</h3>
                       <p className="text-muted-foreground max-w-4xl mx-auto leading-relaxed text-xl md:text-4xl font-black italic opacity-30 uppercase tracking-widest">
                          "Feed me the tactical context of 2026, and I will rewrite my genetic destiny via Legba Rust Logic."
                       </p>
                    </div>
                  )}
               </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-auto relative z-10 flex justify-center items-center gap-16 opacity-40 text-[12px] md:text-[18px] font-black uppercase tracking-[2em] md:tracking-[6em] italic text-white drop-shadow-xl pb-12">
            <span>AL-MUIZZ SUPREME VAULT v53.0</span>
            <div className="size-4 rounded-full bg-white animate-pulse shadow-[0_0_40px_white]" />
            <span>SINGULARITY_THROUGH_EVOLUTION_2026</span>
        </div>
      </main>
    </div>
  )
}

    