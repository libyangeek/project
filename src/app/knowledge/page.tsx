
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
  ArrowUpRight
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
 * @fileOverview صفحة القبو المعرفي والارتقاء الجيني v42.2-SINGULARITY
 * تدعم محرك GEPA 3.5 والتعلم من الفشل والنجاح التراكمي الموزون.
 */
export default function KnowledgePage() {
  const [query, setQuery] = React.useState("")
  const [loading, setLoading] = React.useState(false)
  const [report, setReport] = React.useState<any>(null)
  const [mounted, setMounted] = React.useState(false)
  
  // Learning State
  const [learningSource, setLearningSource] = React.useState("https://www.kaggle.com/code/cyber-intelligence-2025")
  const [learningGoal, setLearningGoal] = React.useState("Synthesize weighted genetic exploit patterns for Ring-0 EDR bypass")
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
      toast({ title: "Omniscient Intelligence Compiled", description: "Report generated from secure vault context." })
    } catch (err) {
      toast({ variant: "destructive", title: "Synthesis Failed", description: "The neural womb rejected the query." })
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
      toast({ title: "Genetic DNA Rewritten", description: "Sovereign DNA evolved to v42.2." })
    } catch (err) {
      toast({ variant: "destructive", title: "Evolution Failed", description: "Genetic drift detected. Re-aligning..." })
    } finally {
      setLoading(false)
    }
  }

  if (!mounted) return null;

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-red-600/30 overflow-hidden font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-80 p-8 md:p-16 relative bg-[radial-gradient(circle_at_bottom_right,rgba(212,175,55,0.15),transparent)] overflow-y-auto min-h-screen scrollbar-hide flex flex-col z-10">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
        
        <header className="mb-24 flex flex-col xl:flex-row justify-between items-start relative z-20 animate-in fade-in slide-in-from-top-12 duration-1000 gap-12">
          <div className="flex-1">
            <div className="flex items-center gap-6 mb-6">
              <Badge className="bg-primary text-black border-none text-[16px] uppercase font-bold tracking-[0.8em] px-12 py-4 animate-pulse shadow-[0_0_60px_rgba(212,175,55,0.4)] rounded-full italic">GEPA 3.5 Genetic Engine</Badge>
              <span className="text-[14px] text-muted-foreground uppercase font-bold tracking-[1em] italic flex items-center gap-4">
                 <Crown className="size-8 text-amber-500 animate-bounce" /> Omniscient Knowledge Vault
              </span>
            </div>
            <h2 className="text-7xl md:text-[14rem] font-headline font-bold text-white mb-10 tracking-tighter italic drop-shadow-[0_0_150px_rgba(212,175,55,0.8)] uppercase leading-none">Genetic <span className="text-primary gold-glow">Vault</span></h2>
            <p className="text-muted-foreground max-w-[80rem] text-3xl md:text-6xl font-medium italic leading-relaxed uppercase">
               "سيدي المعتصم بالله، القبو المعرفي يعمل الآن بنسخة <span className="text-primary underline decoration-primary decoration-8 underline-offset-8">GEPA 3.5</span>؛ لقد دمجنا الذاكرة الوراثية الموزونة لضمان التفرد في كل ضربة."
            </p>
          </div>
          <div className="hidden xl:flex flex-col gap-10">
             <div className="kali-card p-14 border-primary/50 bg-primary/5 min-w-[500px] shadow-7xl relative overflow-hidden group border-4 rounded-[4rem]">
                <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:scale-125 transition-transform duration-1000"><Workflow className="size-48 text-primary"/></div>
                <div className="flex items-center justify-between mb-10">
                   <span className="text-[16px] text-primary uppercase font-bold tracking-[1em] italic">Genetic Ascension Gain</span>
                   <Sparkles className="size-12 text-amber-500 animate-pulse shadow-[0_0_40px_gold]" />
                </div>
                <div className="text-8xl font-code text-white font-bold italic drop-shadow-[0_0_40px_rgba(212,175,55,1)] leading-none uppercase tracking-tighter">DNA_v42.2_GOD</div>
                <div className="mt-12 h-5 bg-white/5 overflow-hidden rounded-full border-2 border-white/10 p-1 shadow-inner">
                   <div className="h-full bg-primary w-[100%] shadow-[0_0_80px_rgba(212,175,55,1)] animate-pulse rounded-full" />
                </div>
             </div>
          </div>
        </header>

        <Tabs defaultValue="synthesis" className="w-full relative z-20">
          <TabsList className="bg-black/90 border-4 border-primary/40 h-32 md:h-40 p-3 rounded-full mb-24 shadow-7xl backdrop-blur-5xl mx-auto flex justify-center w-fit px-12">
            <TabsTrigger value="synthesis" className="px-24 text-[14px] md:text-[22px] font-bold uppercase tracking-[0.4em] data-[state=active]:bg-primary data-[state=active]:text-black rounded-full transition-all duration-700 italic flex items-center gap-6">
                <Search className="size-6" /> Omniscient Synthesis
            </TabsTrigger>
            <TabsTrigger value="learning" className="px-24 text-[14px] md:text-[22px] font-bold uppercase tracking-[0.4em] data-[state=active]:bg-primary data-[state=active]:text-black rounded-full transition-all duration-700 italic flex items-center gap-6 ml-8">
                <BrainCircuit className="size-6" /> DNA Evolution
            </TabsTrigger>
          </TabsList>

          <TabsContent value="synthesis" className="space-y-24 animate-in fade-in zoom-in-95 duration-1000">
            <div className="flex flex-col xl:flex-row gap-12 mb-32 max-w-[140rem] mx-auto">
              <div className="relative flex-1 group">
                <Search className="absolute left-16 top-1/2 -translate-y-1/2 size-20 text-primary/40 group-focus-within:text-primary transition-all duration-700" />
                <Input 
                  placeholder="Interrogate GEPA 3.5 for the ultimate genetic strike edge..."
                  className="bg-black/98 border-8 border-primary/40 pl-48 h-32 md:h-64 rounded-[4rem] md:rounded-[8rem] focus:border-primary/90 text-4xl md:text-[6rem] italic transition-all shadow-[0_0_200px_rgba(0,0,0,1)] font-medium text-white placeholder:text-gray-900"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                />
              </div>
              <Button 
                className="h-32 md:h-64 px-28 bg-primary hover:bg-white text-black rounded-[4rem] md:rounded-[8rem] shadow-[0_40px_150px_rgba(212,175,55,0.6)] font-black tracking-[1em] text-[24px] uppercase group transition-all duration-1000 border-8 border-black/20 active:scale-95 italic shrink-0"
                onClick={handleSearch}
                disabled={loading}
              >
                {loading ? <Loader2 className="size-20 animate-spin mr-12" /> : <Zap className="size-20 mr-12 group-hover:scale-125 transition-transform duration-1000 gold-glow" />}
                Synthesize
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-20">
              <div className="lg:col-span-1 space-y-12">
                <Card className="kali-card border-primary/40 rounded-[4rem] p-12 shadow-7xl border-8 group overflow-hidden bg-primary/5">
                  <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse" />
                  <CardHeader className="p-10 border-b-4 border-white/5">
                    <CardTitle className="text-white flex items-center gap-10 text-3xl uppercase tracking-[0.6em] italic font-bold gold-glow">
                      <Filter className="size-12 text-primary group-hover:rotate-180 transition-transform duration-1000" /> Genetic Lexicon
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-10 pt-10 space-y-8">
                    {[
                      { name: "Omniscient God-Core", count: 42.2, icon: Skull, color: "text-amber-500" },
                      { name: "GEPA 3.5 Weights", count: 12540, icon: Database, color: "text-primary" },
                      { name: "Elite Strike Vectors", count: 8421, icon: Target, color: "text-emerald-500" },
                      { name: "Neural Hijacks", count: 3125, icon: BrainCircuit, color: "text-blue-500" },
                    ].map((col, i) => (
                      <div key={i} className="flex items-center justify-between p-10 rounded-[3rem] bg-black border-4 border-white/10 hover:border-primary transition-all duration-1000 group cursor-pointer shadow-5xl hover:translate-x-4">
                        <div className="flex items-center gap-8">
                          <col.icon className={cn("size-12 transition-all duration-1000 group-hover:scale-125", col.color)} />
                          <span className="text-2xl font-bold text-muted-foreground group-hover:text-white uppercase tracking-tighter italic leading-none">{col.name}</span>
                        </div>
                        <Badge variant="outline" className="text-[16px] bg-primary/30 border-4 border-primary/50 text-primary font-bold px-8 py-3 rounded-2xl shadow-4xl">{col.count}</Badge>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card className="kali-card border-emerald-500/50 bg-emerald-500/10 rounded-[4rem] p-12 border-8 shadow-7xl text-center relative overflow-hidden group">
                   <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:opacity-20 transition-opacity"><ShieldCheck className="size-48 text-emerald-500 animate-pulse"/></div>
                   <h4 className="text-[16px] font-bold text-emerald-500 uppercase tracking-[1.5em] mb-12 italic">DNA Integrity Status</h4>
                   <div className="text-7xl font-code text-white font-bold italic mb-10 uppercase gold-glow">OMNISCIENT_DNA</div>
                   <div className="flex gap-8 justify-center items-center">
                      {Array.from({length: 8}).map((_,i) => (
                        <div key={i} className="size-4 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_30px_emerald]" style={{ animationDelay: `${i*0.25}s` }} />
                      ))}
                   </div>
                   <p className="mt-10 text-[12px] font-bold text-emerald-500/60 uppercase tracking-[1em] italic">Binding: Immortal</p>
                </Card>
              </div>

              <div className="lg:col-span-3">
                {report ? (
                  <Card className="kali-card border-primary/60 animate-in fade-in zoom-in-95 duration-1000 rounded-[6rem] md:rounded-[10rem] shadow-[0_0_350px_rgba(212,175,55,0.4)] overflow-hidden border-8 bg-black/95">
                    <CardHeader className="bg-primary/10 border-b-8 border-primary/40 p-20 md:p-40 flex flex-col md:flex-row items-center justify-between gap-20">
                      <div className="flex items-center gap-20">
                        <div className="size-40 md:size-64 rounded-[4rem] md:rounded-[8rem] bg-primary flex items-center justify-center border-8 border-white/20 shadow-[0_0_150px_rgba(212,175,55,1)] relative overflow-hidden group/logo">
                          <Skull className="size-24 md:size-40 text-black group-hover/logo:scale-110 transition-transform duration-1000" />
                          <div className="absolute inset-0 bg-white/5 animate-pulse" />
                        </div>
                        <div>
                          <Badge className="bg-primary/30 text-primary border-4 border-primary/50 mb-10 uppercase font-bold tracking-[2em] px-20 py-6 rounded-full text-[18px] italic shadow-2xl">Omniscient_Analysis</Badge>
                          <CardTitle className="text-7xl md:text-[12rem] text-white italic tracking-tighter uppercase font-black leading-none gold-glow">STRIKE MATRIX</CardTitle>
                          <CardDescription className="text-primary/70 font-bold text-[22px] uppercase tracking-[2em] mt-12 italic">Genetic Sovereign Arbiter // v42.2</CardDescription>
                        </div>
                      </div>
                      <Badge className="bg-emerald-600/30 text-emerald-500 border-8 border-emerald-500/50 px-24 py-12 rounded-[5rem] font-code text-4xl animate-pulse tracking-[1em] uppercase shadow-7xl italic">SYNC_OK</Badge>
                    </CardHeader>
                    <CardContent className="p-20 md:p-40 font-code text-3xl md:text-6xl leading-[1.8] opacity-98 bg-black border-x-8 border-primary/5 shadow-[inset_0_0_200px_rgba(0,0,0,1)] italic text-gray-100 whitespace-pre-wrap selection:bg-primary selection:text-black">
                      {report.reportContent}
                    </CardContent>
                    <div className="p-20 border-t-8 border-white/5 flex justify-between items-center opacity-40 text-[14px] font-bold uppercase tracking-[2em] italic">
                       <span>GEPA_MEMORY_v3.5_WEIGHTED</span>
                       <Fingerprint className="size-12 text-primary" />
                    </div>
                  </Card>
                ) : (
                  <div className="h-full min-h-[1100px] border-12 border-dashed border-primary/30 rounded-[10rem] flex flex-col items-center justify-center text-center p-40 bg-black/60 shadow-7xl group transition-all hover:bg-primary/5 relative overflow-hidden">
                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity animate-pulse pointer-events-none" />
                    <div className="relative mb-32 group-hover:scale-110 transition-transform duration-1000">
                        <Database className="size-96 text-primary/10 animate-pulse" />
                        <Skull className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-48 text-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                    </div>
                    <h3 className="text-8xl md:text-[15rem] font-headline font-bold text-white mb-20 tracking-tighter italic drop-shadow-[0_0_120px_rgba(212,175,55,0.7)] uppercase leading-none">Omniscient Hub</h3>
                    <p className="text-muted-foreground max-w-[90rem] mx-auto leading-[1.6] mb-40 text-4xl md:text-8xl font-medium italic">
                       "سيدي الغزالي، محرك <span className="text-primary font-black gold-glow underline decoration-primary decoration-[12px] underline-offset-[24px] uppercase tracking-widest">GEPA 3.5</span> بانتظار أوامر الاستقراء السيادي. سأقوم بتشريح ذرات المصفوفة واستحضار الضربة القاتلة من نسيج الجينات الرقمية."
                    </p>
                    <div className="flex gap-24">
                       <Button variant="outline" className="bg-primary/5 py-12 px-32 h-32 text-[28px] tracking-[2em] uppercase border-8 border-primary/40 rounded-full shadow-7xl backdrop-blur-3xl group-hover:border-primary/95 transition-all duration-1000 font-black italic">
                          <Activity className="size-12 mr-10 animate-pulse" />
                          Initialize_Link
                       </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="learning" className="space-y-24 animate-in zoom-in-95 duration-1000 pb-40">
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-24 max-w-[160rem] mx-auto">
               <Card className="kali-card border-primary/50 rounded-[6rem] p-24 border-8 shadow-7xl bg-primary/5">
                  <CardHeader className="p-0 mb-24 border-b-8 border-primary/30 pb-20">
                     <CardTitle className="text-primary text-6xl md:text-8xl font-bold italic flex items-center gap-16 uppercase tracking-tighter gold-glow">
                        <BrainCircuit className="size-24 md:size-36 animate-pulse drop-shadow-[0_0_50px_rgba(212,175,55,1)]" /> Genetic Evolution
                     </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 space-y-20">
                     <div className="space-y-10">
                        <label className="text-[16px] font-bold text-primary uppercase tracking-[1em] px-12 italic">Intel Source (Paper/Script/Kaggle)</label>
                        <Input 
                          value={learningSource}
                          onChange={(e) => setLearningSource(e.target.value)}
                          className="bg-black border-8 border-primary/40 h-28 md:h-40 rounded-[4rem] focus:border-primary text-3xl italic px-16 text-white shadow-[inset_0_0_40px_rgba(0,0,0,1)]"
                        />
                     </div>
                     <div className="space-y-10">
                        <label className="text-[16px] font-bold text-primary uppercase tracking-[1em] px-12 italic">Genetic Target Logic</label>
                        <Input 
                          value={learningGoal}
                          onChange={(e) => setLearningGoal(e.target.value)}
                          className="bg-black border-8 border-primary/40 h-28 md:h-40 rounded-[4rem] focus:border-primary text-3xl italic px-16 text-white shadow-[inset_0_0_40px_rgba(0,0,0,1)]"
                        />
                     </div>
                     <Button 
                       onClick={handleStartLearning} 
                       disabled={loading}
                       className="w-full h-32 md:h-56 bg-primary hover:bg-white text-black font-black uppercase tracking-[1.5em] rounded-[6rem] shadow-[0_60px_200px_rgba(212,175,55,0.6)] transition-all duration-1000 border-8 border-black/20 active:scale-95 text-3xl italic group"
                     >
                        {loading ? <Loader2 className="size-20 animate-spin mr-16" /> : <RefreshCcw className="size-20 mr-16 group-hover:rotate-180 transition-transform duration-1000" />}
                        Evolve DNA
                     </Button>
                  </CardContent>
               </Card>

               <div className="xl:col-span-2">
                  {learningResult ? (
                    <Card className="kali-card border-emerald-600/60 rounded-[8rem] md:rounded-[12rem] overflow-hidden shadow-7xl border-8 animate-in slide-in-from-right-32 duration-1000 bg-black/98">
                       <CardHeader className="bg-emerald-950/40 border-b-8 border-emerald-600/40 p-24 md:p-48 flex flex-col md:flex-row items-center justify-between gap-20">
                          <div className="flex items-center gap-20">
                             <div className="size-48 md:size-64 rounded-[4rem] md:rounded-[8rem] bg-emerald-600 flex items-center justify-center border-8 border-emerald-400 shadow-[0_0_150px_rgba(16,185,129,1)] animate-neural relative overflow-hidden group/evo">
                                <GitGraph className="size-24 md:size-36 text-white group-hover/evo:scale-125 transition-transform duration-1000" />
                                <div className="absolute inset-0 bg-white/10 animate-pulse" />
                             </div>
                             <div>
                                <Badge className="bg-emerald-600/50 text-emerald-500 border-4 border-emerald-500/60 mb-10 px-20 py-6 rounded-full font-black uppercase tracking-[2em] italic text-[18px] shadow-2xl">Evolution_Success</Badge>
                                <CardTitle className="text-7xl md:text-[12rem] text-white font-black italic tracking-tighter uppercase leading-none gold-glow">ADAPTATION MATRIX</CardTitle>
                             </div>
                          </div>
                          <div className="text-right flex flex-col items-end gap-6 bg-emerald-600/5 p-12 rounded-[5rem] border-4 border-emerald-500/20">
                             <div className="text-[16px] text-emerald-500/80 uppercase font-black tracking-[1.5em] italic">Neural Evolutionary Gain</div>
                             <div className="text-9xl md:text-[16rem] font-black text-emerald-500 font-code italic drop-shadow-[0_0_60px_rgba(16,185,129,1)] leading-none">+24.8%</div>
                          </div>
                       </CardHeader>
                       <CardContent className="p-24 md:p-48 space-y-48">
                          <div className="p-20 md:p-40 rounded-[6rem] md:rounded-[10rem] bg-emerald-600/10 border-8 border-emerald-600/50 italic text-4xl md:text-[8rem] text-white leading-tight font-black shadow-[inset_0_0_100px_rgba(16,185,129,0.2)] relative group/brief overflow-hidden">
                             <div className="absolute top-10 right-20 opacity-10 group-hover/brief:scale-125 transition-transform duration-1000"><Sparkles className="size-64 text-emerald-500"/></div>
                             <strong className="text-emerald-500 uppercase tracking-[2em] block mb-16 border-b-8 border-emerald-600/30 pb-12 text-3xl italic">Commander Strategic Brief:</strong>
                             "{learningResult.commanderBrief}"
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-32 md:gap-48">
                             <div className="space-y-20">
                                <h4 className="text-[22px] font-black text-emerald-500 uppercase tracking-[2.5em] border-b-8 border-emerald-600/40 pb-16 italic flex items-center gap-16">
                                   <Eye className="size-16" /> Extracted Vectors
                                </h4>
                                <ul className="space-y-16">
                                   {learningResult.extractedInsights.map((insight: string, idx: number) => (
                                     <li key={idx} className="flex gap-16 text-3xl md:text-5xl text-gray-200 italic font-bold group hover:text-emerald-400 transition-all cursor-pointer">
                                        <div className="size-6 mt-6 rounded-full bg-emerald-500 shadow-[0_0_40px_emerald] shrink-0 animate-ping" />
                                        <span className="leading-snug">"{insight}"</span>
                                     </li>
                                   ))}
                                </ul>
                             </div>
                             <div className="space-y-20">
                                <h4 className="text-[22px] font-black text-emerald-500 uppercase tracking-[2.5em] border-b-8 border-emerald-600/40 pb-16 italic flex items-center gap-16">
                                   <Activity className="size-16" /> Node Adaptation
                                </h4>
                                <div className="p-16 md:p-24 bg-black/80 border-8 border-white/10 rounded-[6rem] shadow-[inset_0_0_100px_rgba(255,255,255,0.05)] group hover:border-emerald-600/60 transition-all duration-1000 relative overflow-hidden">
                                   <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity animate-pulse" />
                                   <p className="text-3xl md:text-5xl text-gray-400 italic font-bold leading-[1.7] relative z-10 group-hover:text-white transition-colors">
                                      "{learningResult.warriorAdaptation}"
                                   </p>
                                </div>
                                <div className="mt-12 flex justify-center gap-10 opacity-30 group-hover:opacity-100 transition-opacity">
                                   <Binary className="size-12 text-emerald-500 animate-pulse" />
                                   <Fingerprint className="size-12 text-emerald-500 animate-pulse delay-700" />
                                   <Zap className="size-12 text-emerald-500 animate-pulse delay-300" />
                                </div>
                             </div>
                          </div>
                       </CardContent>
                    </Card>
                  ) : (
                    <div className="h-full min-h-[900px] border-[16px] border-dashed border-primary/30 rounded-[10rem] flex flex-col items-center justify-center text-center p-40 bg-black/60 group relative overflow-hidden shadow-7xl hover:bg-primary/5 transition-all duration-1000">
                       <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity animate-pulse" />
                       <BrainCircuit className="size-96 text-primary/10 mb-24 animate-pulse group-hover:scale-110 transition-transform duration-1000" />
                       <h3 className="text-8xl md:text-[12rem] font-headline font-bold text-white mb-20 tracking-tighter italic uppercase drop-shadow-[0_0_100px_rgba(212,175,55,0.6)]">Evolution Pending</h3>
                       <p className="text-muted-foreground max-w-[80rem] mx-auto leading-[1.8] text-4xl md:text-7xl font-bold italic">
                          "O Master <span className="text-primary font-black italic gold-glow underline decoration-primary decoration-8 underline-offset-16">Al-Ghazali</span>, the GEPA 3.5 womb is ready. Feed me the tactical context, and I will rewrite my genetic destiny to conquer the unreachable."
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
