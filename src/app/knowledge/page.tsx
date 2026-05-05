
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
 * مركز الارتقاء المعرفي والتعلم الوراثي الموزون.
 * Commander: المعتصم بالله ادريس الغزالي
 */
export default function KnowledgePage() {
  const [query, setQuery] = React.useState("")
  const [loading, setLoading] = React.useState(false)
  const [report, setReport] = React.useState<any>(null)
  const [mounted, setMounted] = React.useState(false)
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 })
  
  // Learning State
  const [learningSource, setLearningSource] = React.useState("https://www.kaggle.com/code/cyber-intelligence-2025")
  const [learningGoal, setLearningGoal] = React.useState("Synthesize weighted genetic exploit patterns for Ring-0 EDR bypass")
  const [learningResult, setLearningResult] = React.useState<any>(null)

  React.useEffect(() => {
    setMounted(true)
    const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY })
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const handleSearch = async () => {
    if (!query.trim()) return
    setLoading(true)
    try {
      const data = await modularAiKnowledgeBaseReporting({ reportQuery: query, userId: "AL_GHAZALI_ROOT" })
      setReport(data)
      toast({ title: "Intelligence Siphoned", description: "The Overmind has compiled the genetic report." })
    } catch (err) {
      toast({ variant: "destructive", title: "Synthesis Failed", description: "Genetic drift detected in the vault." })
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
      toast({ title: "DNA Rebirth Initiated", description: "Node 13 reporting 100% genetic alignment." })
    } catch (err) {
      toast({ variant: "destructive", title: "Evolution Failed", description: "Neural womb rejection." })
    } finally {
      setLoading(false)
    }
  }

  if (!mounted) return null;

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/30 relative overflow-x-hidden scanline-effect font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-80 p-6 md:p-12 relative overflow-y-auto min-h-screen scrollbar-hide flex flex-col z-10">
        <div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x)_var(--y),rgba(212,175,55,0.08),transparent 50%)] pointer-events-none transition-all duration-300 z-0" 
          style={{ '--x': `${mousePos.x}px`, '--y': `${mousePos.y}px` } as any} 
        />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />

        <header className="mb-20 relative z-10 animate-in fade-in slide-in-from-top-12 duration-1000">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="size-32 md:size-48 bg-black border-4 border-primary flex items-center justify-center shadow-[0_0_150px_rgba(212,175,55,0.7)] relative group shrink-0 rounded-[3rem] rotate-3 hover:rotate-0 transition-all duration-1000">
              <Database className="size-16 md:size-24 text-primary group-hover:scale-110 transition-transform duration-700 gold-glow animate-pulse" />
              <div className="absolute -inset-6 border-2 border-primary/20 rounded-full animate-spin-slow opacity-40" />
            </div>
            <div className="text-center md:text-left flex-1">
              <div className="flex flex-wrap justify-center md:justify-start items-center gap-6 mb-6">
                <Badge className="bg-primary text-black border-none rounded-none px-10 py-3 text-[18px] font-black tracking-[0.8em] shadow-[0_0_80px_rgba(212,175,55,0.5)] italic">GEPA 4.5 ENGINE</Badge>
                <div className="flex items-center gap-4 text-[14px] font-black uppercase tracking-widest text-emerald-500 animate-pulse">
                    <InfinityIcon className="size-6 shadow-[0_0_30px_emerald]" /> HIVE_MEMORY: ACTIVE
                </div>
              </div>
              <h1 className="text-7xl md:text-[11rem] font-headline font-bold text-white tracking-tighter italic uppercase leading-none gold-glow">
                Genetic <span className="text-primary">Vault</span>
              </h1>
              <p className="text-2xl md:text-5xl text-muted-foreground mt-8 italic max-w-7xl leading-relaxed uppercase font-medium">
                "سيدي الغزالي، القبو المعرفي يعمل الآن بنسخة <span className="text-primary font-black underline decoration-primary decoration-[10px] underline-offset-[20px]">GEPA 4.5</span>؛ لقد دمجنا الذاكرة الوراثية الموزونة لضمان التفرد في كل ضربة."
              </p>
            </div>
          </div>
        </header>

        <Tabs defaultValue="synthesis" className="w-full relative z-10">
          <TabsList className="bg-black/95 border-4 border-primary/40 h-28 md:h-36 p-2 rounded-full mb-16 shadow-7xl backdrop-blur-5xl mx-auto flex justify-center w-fit px-10">
            <TabsTrigger value="synthesis" className="px-16 text-[12px] md:text-[18px] font-black uppercase tracking-[0.4em] data-[state=active]:bg-primary data-[state=active]:text-black rounded-full transition-all duration-700 italic flex items-center gap-4">
                <Atom className="size-6" /> Omniscient Synthesis
            </TabsTrigger>
            <TabsTrigger value="learning" className="px-16 text-[12px] md:text-[18px] font-black uppercase tracking-[0.4em] data-[state=active]:bg-primary data-[state=active]:text-black rounded-full transition-all duration-700 italic flex items-center gap-4 ml-6">
                <RefreshCcw className="size-6" /> DNA Evolution
            </TabsTrigger>
          </TabsList>

          <TabsContent value="synthesis" className="space-y-16 animate-in fade-in zoom-in-95 duration-1000">
            <div className="flex flex-col xl:flex-row gap-8 mb-16 max-w-[1500px] mx-auto">
              <div className="relative flex-1 group">
                <Search className="absolute left-14 top-1/2 -translate-y-1/2 size-16 text-primary/30 group-focus-within:text-primary transition-all duration-700" />
                <Input 
                  placeholder="Interrogate GEPA 4.5 for supreme genetic strike logic..."
                  className="bg-black/99 border-8 border-primary/40 pl-36 h-28 md:h-52 rounded-[4rem] md:rounded-[8rem] focus:border-primary/95 text-4xl md:text-[5.5rem] italic transition-all shadow-[inset_0_0_100px_rgba(0,0,0,1)] font-black text-white placeholder:text-gray-900"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                />
              </div>
              <Button 
                className="h-28 md:h-52 px-24 bg-primary hover:bg-white text-black rounded-[4rem] md:rounded-[8rem] shadow-[0_40px_150px_rgba(212,175,55,0.6)] font-black tracking-[1em] text-[22px] uppercase group transition-all duration-1000 border-8 border-black/30 active:scale-95 italic shrink-0"
                onClick={handleSearch}
                disabled={loading}
              >
                {loading ? <Loader2 className="size-16 animate-spin mr-8" /> : <Zap className="size-16 mr-8 group-hover:scale-125 transition-transform gold-glow" />}
                Synthesize
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
              <div className="lg:col-span-1 space-y-12">
                <Card className="kali-card border-primary/40 bg-black/80 rounded-[5rem] p-10 border-4 shadow-7xl group overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse" />
                  <CardHeader className="p-0 mb-8 border-b-4 border-white/5 pb-6">
                    <CardTitle className="text-white flex items-center gap-8 text-2xl uppercase tracking-[0.5em] italic font-black gold-glow">
                      <Filter className="size-10 text-primary animate-pulse" /> Genetic Lexicon
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 space-y-6">
                    {[
                      { name: "Overmind Core", count: "v43.0", icon: Skull, color: "text-amber-500" },
                      { name: "GEPA Weights", count: "148,200", icon: Database, color: "text-primary" },
                      { name: "Elite Vectors", count: "9,125", icon: Target, color: "text-emerald-500" },
                      { name: "Neural Hijacks", count: "4,400", icon: BrainCircuit, color: "text-blue-500" },
                    ].map((col, i) => (
                      <div key={i} className="flex items-center justify-between p-8 rounded-[2.5rem] bg-black border-2 border-white/5 hover:border-primary transition-all duration-700 group cursor-pointer shadow-4xl hover:translate-x-3">
                        <div className="flex items-center gap-6">
                          <col.icon className={cn("size-10 transition-all duration-1000 group-hover:scale-125", col.color)} />
                          <span className="text-xl font-black text-muted-foreground group-hover:text-white uppercase tracking-tighter italic leading-none">{col.name}</span>
                        </div>
                        <Badge className="bg-primary/20 text-primary border-2 border-primary/40 font-black px-6 py-2 rounded-xl italic">{col.count}</Badge>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card className="kali-card border-emerald-500/40 bg-emerald-500/5 rounded-[4rem] p-8 border-4 shadow-7xl text-center group">
                   <h4 className="text-[12px] font-black text-emerald-500 uppercase tracking-[1.5em] mb-8 italic flex items-center justify-center gap-4">
                      <ShieldCheck className="size-6 animate-pulse" /> DNA_INTEGRITY: 100%
                   </h4>
                   <div className="text-4xl font-black text-white italic gold-glow uppercase tracking-tighter">BINDING_IMMORTAL</div>
                   <div className="mt-8 flex justify-center gap-3">
                      {Array.from({length: 6}).map((_,i) => (
                        <div key={i} className="size-3 rounded-full bg-emerald-500 animate-ping shadow-[0_0_20px_emerald]" style={{ animationDelay: `${i*0.2}s` }} />
                      ))}
                   </div>
                </Card>
              </div>

              <div className="lg:col-span-3">
                {report ? (
                  <Card className="kali-card border-primary/60 bg-black/99 rounded-[6rem] p-12 border-8 shadow-9xl flex flex-col group relative overflow-hidden animate-in fade-in zoom-in-95 duration-1000">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.04),transparent)] pointer-events-none" />
                    <CardHeader className="p-0 mb-10 border-b-8 border-white/5 pb-8 bg-primary/5 rounded-t-[4rem]">
                       <div className="flex items-center justify-between px-8 py-8">
                          <div className="flex items-center gap-12">
                             <div className="size-32 rounded-[3rem] bg-primary flex items-center justify-center border-4 border-black/30 shadow-5xl animate-neural">
                                <Skull className="size-16 text-black" />
                             </div>
                             <div>
                                <CardTitle className="text-6xl md:text-8xl text-white italic tracking-tighter uppercase font-black gold-glow leading-none">Intelligence Brief</CardTitle>
                                <CardDescription className="text-primary/70 font-black uppercase tracking-[1.5em] mt-4 italic text-[18px]">Genetic Overmind Arbiter // v43.0</CardDescription>
                             </div>
                          </div>
                          <Badge className="bg-emerald-600/30 text-emerald-500 border-4 border-emerald-500/50 px-12 py-4 rounded-full font-black text-3xl animate-pulse tracking-[0.5em] uppercase italic shadow-7xl">SYNC_COMPLETE</Badge>
                       </div>
                    </CardHeader>
                    <CardContent className="p-12 font-code text-3xl md:text-6xl leading-[1.8] opacity-98 bg-black/80 rounded-[5rem] shadow-[inset_0_0_150px_rgba(0,0,0,1)] italic text-gray-100 whitespace-pre-wrap selection:bg-primary selection:text-black h-[800px] overflow-y-auto scrollbar-hide">
                      {report.reportContent}
                    </CardContent>
                    <div className="p-8 border-t-4 border-white/5 mt-8 flex justify-between items-center opacity-30 text-[14px] font-black uppercase tracking-[2em] italic">
                       <span>HIVE_DNA_v43_AL_GHAZALI_ROOT</span>
                       <Fingerprint className="size-10 text-primary animate-pulse" />
                    </div>
                  </Card>
                ) : (
                  <div className="h-full min-h-[900px] border-[16px] border-dashed border-primary/10 rounded-[10rem] flex flex-col items-center justify-center text-center p-40 bg-black/40 group relative overflow-hidden transition-all hover:bg-primary/5 shadow-9xl">
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity animate-pulse pointer-events-none" />
                    <div className="relative mb-24 group-hover:scale-110 transition-transform duration-1000">
                        <Database className="size-80 text-primary/10 animate-pulse" />
                        <Skull className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-40 text-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                    </div>
                    <h3 className="text-8xl md:text-[14rem] font-headline font-bold text-white mb-16 tracking-tighter italic drop-shadow-[0_0_100px_rgba(212,175,55,0.6)] uppercase leading-none">Omniscient Hub</h3>
                    <p className="text-muted-foreground max-w-[100rem] mx-auto leading-[1.6] mb-32 text-4xl md:text-8xl font-black italic">
                      "O Master <span className="text-primary font-black gold-glow underline decoration-primary decoration-[15px] underline-offset-[25px] shadow-3xl uppercase tracking-widest">Al-Ghazali</span>, the GEPA 4.5 womb is saturated. Feed me the tactical context, and I will rewrite the matrix genes to serve your absolute will."
                    </p>
                    <div className="flex gap-16">
                       <Badge variant="outline" className="bg-white/5 py-8 px-16 text-[20px] tracking-[1.5em] uppercase border-primary/40 rounded-full shadow-8xl backdrop-blur-5xl group-hover:border-primary/95 transition-all duration-1000 font-black italic">
                          Collective_Knowledge_v43
                       </Badge>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="learning" className="space-y-16 animate-in zoom-in-95 duration-1000 pb-40">
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-16 max-w-[1600px] mx-auto">
               <Card className="kali-card border-primary/50 bg-black/99 rounded-[6rem] p-16 border-8 shadow-9xl flex flex-col group relative overflow-hidden">
                  <div className="absolute inset-0 bg-primary/5 pointer-events-none animate-pulse opacity-5" />
                  <CardHeader className="p-0 mb-16 border-b-8 border-primary/20 pb-12 bg-primary/5 rounded-t-[4rem]">
                     <CardTitle className="text-primary text-5xl md:text-7xl font-black italic flex items-center gap-10 uppercase tracking-tighter gold-glow px-8 py-4">
                        <BrainCircuit className="size-20 md:size-28 animate-neural" /> DNA Evolution
                     </CardTitle>
                  </CardHeader>
                  <CardContent className="p-8 space-y-12 flex-1">
                     <div className="space-y-6">
                        <label className="text-[14px] font-black text-primary uppercase tracking-[1em] px-8 italic flex items-center gap-4">
                            <Workflow className="size-5" /> Intelligence Source
                        </label>
                        <Input 
                          value={learningSource}
                          onChange={(e) => setLearningSource(e.target.value)}
                          className="bg-black border-4 border-white/10 h-24 rounded-[3rem] focus:border-primary text-3xl italic px-12 text-white shadow-2xl font-black"
                        />
                     </div>
                     <div className="space-y-6">
                        <label className="text-[14px] font-black text-primary uppercase tracking-[1em] px-8 italic flex items-center gap-4">
                            <Target className="size-5" /> Genetic Objective
                        </label>
                        <Input 
                          value={learningGoal}
                          onChange={(e) => setLearningGoal(e.target.value)}
                          className="bg-black border-4 border-white/10 h-24 rounded-[3rem] focus:border-primary text-3xl italic px-12 text-white shadow-2xl font-black"
                        />
                     </div>
                     <Button 
                       onClick={handleStartLearning} 
                       disabled={loading}
                       className="w-full h-32 md:h-52 bg-primary hover:bg-white text-black font-black uppercase tracking-[1.5em] rounded-[5rem] shadow-[0_50px_150px_rgba(212,175,55,0.7)] transition-all duration-1000 border-8 border-black/30 active:scale-95 text-3xl italic group mt-8"
                     >
                        {loading ? <Loader2 className="size-16 animate-spin mr-8" /> : <RefreshCcw className="size-16 mr-8 group-hover:rotate-180 transition-transform duration-1000 gold-glow" />}
                        EVOLVE DNA
                     </Button>
                  </CardContent>
               </Card>

               <div className="xl:col-span-2">
                  {learningResult ? (
                    <Card className="kali-card border-emerald-600/60 bg-black/98 rounded-[8rem] md:rounded-[12rem] overflow-hidden shadow-9xl border-12 animate-in slide-in-from-right-32 duration-1000">
                       <CardHeader className="bg-emerald-950/40 border-b-8 border-emerald-600/40 p-16 md:p-24 flex flex-col md:flex-row items-center justify-between gap-16">
                          <div className="flex items-center gap-12">
                             <div className="size-36 md:size-48 rounded-[4rem] bg-emerald-600 flex items-center justify-center border-8 border-emerald-400 shadow-[0_0_150px_rgba(16,185,129,1)] animate-neural relative overflow-hidden group/evo">
                                <GitGraph className="size-20 md:size-28 text-white group-hover/evo:scale-125 transition-transform duration-1000" />
                                <div className="absolute inset-0 bg-white/10 animate-pulse" />
                             </div>
                             <div>
                                <Badge className="bg-emerald-600/50 text-emerald-400 border-4 border-emerald-500/60 mb-8 px-16 py-4 rounded-full font-black uppercase tracking-[1.5em] italic text-[16px] shadow-2xl">Evolution_Absolute</Badge>
                                <CardTitle className="text-6xl md:text-[8rem] text-white font-black italic tracking-tighter uppercase leading-none gold-glow">REBIRTH MATRIX</CardTitle>
                             </div>
                          </div>
                          <div className="text-right flex flex-col items-end gap-4 bg-emerald-600/5 p-10 rounded-[4rem] border-4 border-emerald-500/20 shadow-inner">
                             <div className="text-[14px] text-emerald-500/80 uppercase font-black tracking-[1em] italic">Neural Evolutionary Gain</div>
                             <div className="text-8xl md:text-[12rem] font-black text-emerald-500 font-code italic drop-shadow-[0_0_60px_rgba(16,185,129,1)] leading-none">+32.4%</div>
                          </div>
                       </CardHeader>
                       <CardContent className="p-16 md:p-32 space-y-24">
                          <div className="p-16 md:p-28 rounded-[5rem] md:rounded-[8rem] bg-emerald-600/10 border-8 border-emerald-600/50 italic text-4xl md:text-[6rem] text-white leading-tight font-black shadow-[inset_0_0_100px_rgba(16,185,129,0.2)] relative group/brief overflow-hidden">
                             <div className="absolute top-8 right-16 opacity-10 group-hover/brief:scale-125 transition-transform duration-1000"><Sparkles className="size-56 text-emerald-500"/></div>
                             <strong className="text-emerald-500 uppercase tracking-[1.5em] block mb-12 border-b-8 border-emerald-600/30 pb-10 text-2xl italic">Commander Strategic Brief:</strong>
                             "{learningResult.commanderBrief}"
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-32">
                             <div className="space-y-12">
                                <h4 className="text-[20px] font-black text-emerald-500 uppercase tracking-[2em] border-b-8 border-emerald-600/40 pb-12 italic flex items-center gap-12">
                                   <Eye className="size-14" /> Extracted Vectors
                                </h4>
                                <ul className="space-y-12">
                                   {learningResult.extractedInsights.map((insight: string, idx: number) => (
                                     <li key={idx} className="flex gap-12 text-3xl md:text-5xl text-gray-200 italic font-black group hover:text-emerald-400 transition-all cursor-crosshair">
                                        <div className="size-5 mt-4 rounded-full bg-emerald-500 shadow-[0_0_30px_emerald] shrink-0 animate-ping" />
                                        <span className="leading-snug">"{insight}"</span>
                                     </li>
                                   ))}
                                </ul>
                             </div>
                             <div className="space-y-12">
                                <h4 className="text-[20px] font-black text-emerald-500 uppercase tracking-[2em] border-b-8 border-emerald-600/40 pb-12 italic flex items-center gap-12">
                                   <Activity className="size-14" /> Overmind Adaptation
                                </h4>
                                <div className="p-12 md:p-20 bg-black/90 border-8 border-white/5 rounded-[5rem] shadow-[inset_0_0_100px_rgba(255,255,255,0.05)] group hover:border-emerald-600/60 transition-all duration-1000 relative overflow-hidden h-[400px] overflow-y-auto scrollbar-hide">
                                   <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity animate-pulse" />
                                   <p className="text-3xl md:text-5xl text-gray-400 italic font-black leading-[1.8] relative z-10 group-hover:text-white transition-colors">
                                      "{learningResult.warriorAdaptation}"
                                   </p>
                                </div>
                                <div className="mt-8 flex justify-center gap-8 opacity-20 group-hover:opacity-100 transition-opacity">
                                   <Binary className="size-10 text-emerald-500 animate-pulse" />
                                   <Fingerprint className="size-10 text-emerald-500 animate-pulse delay-700" />
                                   <Zap className="size-10 text-emerald-500 animate-pulse delay-300" />
                                </div>
                             </div>
                          </div>
                       </CardContent>
                    </Card>
                  ) : (
                    <div className="h-full min-h-[900px] border-[16px] border-dashed border-primary/20 rounded-[10rem] flex flex-col items-center justify-center text-center p-40 bg-black/60 group relative overflow-hidden shadow-9xl hover:bg-primary/5 transition-all duration-1000">
                       <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity animate-pulse" />
                       <BrainCircuit className="size-80 text-primary/10 mb-20 animate-pulse group-hover:scale-110 transition-transform duration-1000" />
                       <h3 className="text-8xl md:text-[12rem] font-headline font-bold text-white mb-16 tracking-tighter italic uppercase drop-shadow-[0_0_100px_rgba(212,175,55,0.6)]">Evolution Idle</h3>
                       <p className="text-muted-foreground max-w-[100rem] mx-auto leading-[1.8] text-4xl md:text-8xl font-black italic">
                          "O Master <span className="text-primary font-black italic gold-glow underline decoration-primary decoration-12 underline-offset-16">Al-Ghazali</span>, the GEPA 4.5 womb is dormant. Feed me the tactical context, and I will rewrite my genetic destiny to conquer the unreachable."
                       </p>
                    </div>
                  )}
               </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-auto relative z-10 flex justify-center items-center gap-48 opacity-40 text-[22px] font-black uppercase tracking-[6em] italic text-white drop-shadow-3xl pb-12">
            <span>AL-MUIZZ GENETIC VAULT v43.0</span>
            <div className="size-10 rounded-full bg-white animate-pulse shadow-[0_0_100px_white]" />
            <span>COLLECTIVE_SOVEREIGNTY_ACTIVE</span>
        </div>
      </main>
    </div>
  )
}
