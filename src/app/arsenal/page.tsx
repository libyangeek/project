"use client"

import * as React from "react"
import { SidebarNav } from "@/components/platform/sidebar-nav"
import { 
  Library, 
  Search, 
  Zap, 
  Loader2, 
  Skull, 
  ShieldX, 
  Binary, 
  Crown, 
  Infinity as InfinityIcon,
  ChevronRight,
  Boxes,
  Atom,
  Fingerprint,
  Target,
  Database,
  Terminal,
  ArrowUpRight,
  Radar,
  Radio,
  Smartphone,
  Globe,
  Plus,
  RefreshCcw,
  Flame,
  Code2,
  Download,
  ShieldCheck,
  CheckCircle2
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { toast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"
import { executeSovereignLearning } from "@/ai/flows/ai-learning-flow"
import { generateSovereignTool } from "@/ai/flows/tool-forge-flow"

/**
 * @fileOverview العقدة 22: الترسانة العظمى v53.2 - NODE 22: THE SUPREME ARSENAL
 * مجهزة بقدرات الاستنزاف الخارجي والتعلم الجيني وتخليق الأسلحة النانوية.
 * المالك الوحيد: المعتصم بالله ادريس الغزالي
 */
export default function ArsenalNodePage() {
  const [query, setQuery] = React.useState("")
  const [externalUrl, setExternalUrl] = React.useState("")
  const [loading, setLoading] = React.useState(false)
  const [analyzing, setAnalyzing] = React.useState(false)
  const [synthesizing, setSynthesizing] = React.useState(false)
  const [mounted, setMounted] = React.useState(false)
  const [resonance, setResonance] = React.useState(100)
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 })
  
  const [siphonData, setSiphonResult] = React.useState<any>(null)
  const [sovereignTool, setSovereignTool] = React.useState<any>(null)

  React.useEffect(() => {
    setMounted(true)
    const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY })
    window.addEventListener("mousemove", handleMouseMove)

    const interval = setInterval(() => {
      setResonance(prev => Math.max(99.99999, Math.min(100, prev + (Math.random() * 0.0001 - 0.00005))))
    }, 3000)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      clearInterval(interval)
    }
  }, [])

  const handleSummon = async () => {
    if (!query.trim()) return
    setLoading(true)
    toast({ title: "Interrogating Lexicon", description: `Searching Node 22 for atomic coordinates of: ${query}` })
    
    try {
      const response = await fetch('/api/execute', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'smart_route', command: `summon tool ${query}` })
      })
      const data = await response.json()
      if (data.success) {
        toast({ title: "Tool Materialized", description: `Directive for ${query} bound to the Supreme Shell.` })
      }
    } catch (err) {
      toast({ variant: "destructive", title: "Materialization Error" })
    } finally {
      setLoading(false)
    }
  }

  const handleExternalSiphon = async () => {
    if (!externalUrl.trim()) return
    setAnalyzing(true)
    setSovereignTool(null)
    toast({ title: "Initiating External Siphon", description: "Interrogating source code architecture..." })
    
    try {
      const data = await executeSovereignLearning({
        externalSource: externalUrl,
        analysisGoal: "Extract and weaponize core logic",
        integrationMode: 'Aggressive'
      })
      setSiphonResult(data)
      toast({ title: "DNA Extracted", description: "Target source has been analyzed. Ready for superior synthesis." })
    } catch (err) {
      toast({ variant: "destructive", title: "Siphon Disrupted", description: "Access denied or source encrypted." })
    } finally {
      setAnalyzing(false)
    }
  }

  const handleSuperiorSynthesis = async () => {
    if (!siphonData) return
    setSynthesizing(true)
    toast({ title: "Synthesizing Superior Weapon", description: "Injecting Socratic logic and Opaque predicates..." })
    
    try {
      const data = await generateSovereignTool({
        toolPurpose: `Superior version of ${externalUrl}. Goal: ${siphonData.extractedInsights[0] || 'Total Subjugation'}`,
        targetEnvironment: "Cross-Platform / Stealth-Mode",
        languagePreference: 'python',
        stealthLevel: 'Extreme',
        architecturalInsight: true
      })
      setSovereignTool(data)
      toast({ title: "Sovereign Weapon Forged", description: "The new tool is 1000% stronger than the original source." })
    } catch (err) {
      toast({ variant: "destructive", title: "Synthesis Collapse" })
    } finally {
      setSynthesizing(false)
    }
  }

  const handleIntegrateNode = async () => {
    toast({ title: "Integrating Node", description: "Binding forged DNA to Node 22: General Arsenal." })
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSiphonResult(null)
      setSovereignTool(null)
      setExternalUrl("")
      toast({ title: "Integration Success", description: "New tool is now an executive limb of the Hierarchy." })
    }, 2000)
  }

  if (!mounted) return null

  const categories = [
    { name: "Information Gathering", count: 412, icon: Search, color: "text-blue-400" },
    { name: "Vulnerability Analysis", count: 328, icon: Radar, color: "text-emerald-400" },
    { name: "Exploitation Tools", count: 184, icon: Zap, color: "text-amber-500" },
    { name: "Wireless Attacks", count: 212, icon: Radio, color: "text-magenta-500" },
    { name: "Forensics & Reverse", count: 96, icon: Fingerprint, color: "text-cyan-400" },
    { name: "Cellular Subjugation", count: 154, icon: Smartphone, color: "text-red-500" }
  ];

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/40 relative overflow-x-hidden scanline-effect font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-80 p-4 md:p-8 lg:p-12 relative overflow-y-auto min-h-screen scrollbar-hide flex flex-col z-10">
        <div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x)_var(--y),rgba(212,175,55,0.08),transparent 40%)] pointer-events-none transition-all duration-300 z-0" 
          style={{ '--x': `${mousePos.x}px`, '--y': `${mousePos.y}px` } as any} 
        />
        
        <header className="mb-12 relative z-10 animate-in fade-in slide-in-from-top-6 duration-1000">
           <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="size-24 md:size-40 bg-black border-4 border-primary flex items-center justify-center shadow-[0_0_150px_rgba(212,175,55,0.6)] relative group shrink-0 rounded-3xl transition-all duration-1000 rotate-2 hover:rotate-0 hierarchical-shadow">
                 <Library className="size-12 md:size-20 text-primary group-hover:scale-110 transition-transform duration-700 gold-glow animate-neural" />
                 <div className="absolute -inset-4 border-2 border-primary/20 rounded-full animate-spin-slow opacity-30" />
              </div>
              <div className="text-center md:text-right flex-1">
                 <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 mb-4">
                    <Badge className="bg-primary text-black border-none rounded-none px-8 py-2 text-[14px] md:text-[16px] font-black tracking-[0.5em] shadow-2xl italic">NODE_22: ARSENAL</Badge>
                    <div className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-emerald-500 animate-pulse">
                        <InfinityIcon className="size-5 shadow-lg" /> LEXICON_SYNC: {resonance.toFixed(6)}%
                    </div>
                 </div>
                 <h1 className="text-4xl md:text-6xl lg:text-9xl font-headline font-bold text-white tracking-tighter italic uppercase gold-glow leading-none">
                    Supreme <span className="text-primary">Lexicon</span>
                 </h1>
                 <p className="text-sm md:text-xl lg:text-3xl text-muted-foreground mt-6 italic max-w-5xl leading-relaxed uppercase font-medium opacity-80">
                    "سيدي القائد <span className="text-white font-black underline decoration-primary decoration-4 underline-offset-8 shadow-xl">المعتصم بالله</span>، العقدة 22 تضم الآن كامل القوة التنفيذية لـ 2842 أداة؛ الترسانة العظمى مستعبدة لإرادتك لعام 2026."
                 </p>
              </div>
           </div>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8 relative z-10 pb-32 flex-1">
           <div className="xl:col-span-1 space-y-8">
              <Card className="kali-card border-primary/30 bg-black/98 rounded-3xl p-8 border-2 shadow-2xl group overflow-hidden hierarchical-shadow">
                 <div className="absolute inset-0 bg-primary/5 opacity-5 animate-pulse pointer-events-none" />
                 <CardHeader className="p-0 mb-8 border-b-2 border-primary/10 pb-6 bg-primary/5 rounded-t-2xl px-4 py-4">
                    <CardTitle className="text-xl md:text-2xl text-primary flex items-center gap-6 font-black uppercase italic gold-glow">
                       <Target className="size-8 animate-neural" /> Interrogate Lexicon
                    </CardTitle>
                 </CardHeader>
                 <CardContent className="p-0 space-y-8">
                    <div className="space-y-4">
                        <label className="text-[10px] font-black text-primary uppercase tracking-[0.6em] px-4 italic flex items-center gap-3"><Atom className="size-4" /> Tool Coordinate</label>
                        <Input 
                          value={query}
                          onChange={(e) => setQuery(e.target.value)}
                          onKeyDown={(e) => e.key === 'Enter' && handleSummon()}
                          placeholder="Search 2842 nodes..." 
                          className="bg-black border-2 border-primary/20 h-16 rounded-2xl text-xl italic px-6 focus:border-primary text-white font-black shadow-inner"
                        />
                    </div>
                    <Button 
                      onClick={handleSummon}
                      disabled={loading || !query.trim()}
                      className="w-full h-20 bg-primary hover:bg-white text-black font-black uppercase tracking-[0.8em] rounded-2xl shadow-xl active:scale-95 transition-all text-lg border-4 border-black/30 group italic"
                    >
                      {loading ? <Loader2 className="size-8 animate-spin mr-3" /> : <Search className="size-8 mr-4 group-hover:scale-125 transition-all gold-glow" />}
                      SUMMON_TOOL
                    </Button>
                 </CardContent>
              </Card>

              <Card className="kali-card border-primary/40 bg-black/98 rounded-3xl p-8 border-2 shadow-2xl group overflow-hidden hierarchical-shadow">
                 <CardHeader className="p-0 mb-8 border-b-2 border-primary/10 pb-6 bg-primary/5 px-4 py-4 rounded-t-2xl">
                    <CardTitle className="text-xl md:text-2xl text-primary flex items-center gap-6 font-black uppercase italic gold-glow">
                       <Globe className="size-8 animate-spin-slow" /> Node Siphon
                    </CardTitle>
                 </CardHeader>
                 <CardContent className="p-0 space-y-8">
                    <div className="space-y-4">
                        <label className="text-[10px] font-black text-primary uppercase tracking-[0.6em] px-4 italic flex items-center gap-3"><Plus className="size-4" /> Tool Source (GitHub/URL)</label>
                        <Input 
                          value={externalUrl}
                          onChange={(e) => setExternalUrl(e.target.value)}
                          placeholder="https://github.com/user/tool..." 
                          className="bg-black border-2 border-primary/20 h-14 rounded-xl text-lg italic px-6 focus:border-primary text-white font-black shadow-inner"
                        />
                    </div>
                    <Button 
                      onClick={handleExternalSiphon}
                      disabled={analyzing || !externalUrl.trim()}
                      variant="outline"
                      className="w-full h-16 bg-white/5 border-2 border-primary/20 hover:bg-primary/10 text-primary font-black uppercase tracking-[0.4em] rounded-xl transition-all italic active:scale-95"
                    >
                      {analyzing ? <Loader2 className="size-6 animate-spin mr-3" /> : <RefreshCcw className="size-6 mr-3 group-hover:rotate-180 transition-all duration-1000" />}
                      INTERROGATE_SOURCE
                    </Button>
                 </CardContent>
              </Card>

              <Card className="kali-card border-white/5 bg-black/60 p-6 rounded-2xl border-2 shadow-inner group overflow-hidden text-center">
                 <h4 className="text-[10px] font-black text-primary uppercase tracking-[0.5em] mb-4 italic flex items-center justify-center gap-3">
                    <Boxes className="size-4 animate-pulse" /> ARSENAL_STABILITY
                 </h4>
                 <div className="text-3xl font-black text-white italic gold-glow uppercase tracking-tighter text-center">IMMUTABLE</div>
                 <div className="absolute -bottom-4 -right-4 p-6 opacity-[0.02] group-hover:opacity-[0.05] transition-all duration-700 scale-150"><Skull className="size-16 text-primary" /></div>
              </Card>
           </div>

           <Card className="xl:col-span-3 kali-card border-primary/30 bg-black/99 rounded-[3rem] p-8 border-2 shadow-9xl flex flex-col group overflow-hidden relative min-h-[850px] hierarchical-shadow">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.03),transparent)] pointer-events-none" />
              <CardHeader className="p-0 mb-12 border-b-2 border-white/5 pb-8 bg-primary/5 rounded-t-3xl px-8 py-4 flex flex-row justify-between items-center">
                 <CardTitle className="text-3xl md:text-7xl text-white italic uppercase font-black gold-glow flex items-center gap-8 px-4 leading-none">
                    <Binary className="size-12 md:size-20 text-primary animate-pulse" /> Arsenal Feed
                 </CardTitle>
                 <Badge className="bg-emerald-600/20 text-emerald-500 border-2 border-emerald-500/30 px-10 py-3 rounded-full font-black text-2xl animate-pulse tracking-[0.2em] uppercase italic shadow-lg">2842_ACTIVE</Badge>
              </CardHeader>
              
              <CardContent className="p-6 flex-1 relative overflow-hidden z-10 flex flex-col gap-12">
                 {/* قسم نتائج الاستنزاف والتحليل */}
                 {(analyzing || siphonData) && (
                   <div className="animate-in fade-in slide-in-from-right-10 duration-1000">
                      <Card className="bg-primary/5 border-4 border-primary/30 rounded-[3rem] p-10 overflow-hidden shadow-2xl relative">
                         <div className="absolute inset-0 bg-primary/5 opacity-5 animate-pulse" />
                         <div className="flex justify-between items-center mb-8 border-b-2 border-primary/20 pb-6">
                            <div className="flex items-center gap-6">
                               <Fingerprint className="size-12 text-primary animate-neural" />
                               <div>
                                  <h4 className="text-2xl md:text-4xl font-black text-white italic uppercase gold-glow leading-none">Architectural Dissection</h4>
                                  <span className="text-[10px] text-primary/60 font-black tracking-[0.4em] uppercase italic mt-2 block">GEPA 5.3 EVOLUTION_CORE</span>
                               </div>
                            </div>
                            <Badge className="bg-emerald-600/30 text-emerald-500 border-2 border-emerald-500/40 px-6 py-2 rounded-full font-black text-xl italic animate-pulse shadow-lg">READY_FOR_SYNTHESIS</Badge>
                         </div>

                         {siphonData && (
                            <div className="space-y-8">
                               <div className="p-8 rounded-[2rem] bg-black/80 border-2 border-white/5 italic text-lg md:text-2xl text-gray-200 leading-relaxed font-bold shadow-inner">
                                  "{siphonData.commanderBrief}"
                               </div>
                               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                  <div className="space-y-4">
                                     <h5 className="text-[12px] font-black text-primary uppercase tracking-[0.6em] border-b border-primary/10 pb-2 italic flex items-center gap-4"><Eye className="size-5" /> Extracted Insights</h5>
                                     <ul className="space-y-4 max-h-40 overflow-y-auto scrollbar-hide">
                                        {siphonData.extractedInsights.map((ins: string, idx: number) => (
                                          <li key={idx} className="flex gap-4 text-sm md:text-lg text-gray-400 italic font-black group/ins hover:text-white transition-all">
                                             <div className="size-2 mt-2 rounded-full bg-primary shadow-[0_0_10px_rgba(212,175,55,1)] shrink-0" /> {ins}
                                          </li>
                                        ))}
                                     </ul>
                                  </div>
                                  <div className="flex flex-col justify-center gap-6">
                                     <Button 
                                      onClick={handleSuperiorSynthesis}
                                      disabled={synthesizing}
                                      className="h-24 bg-primary hover:bg-white text-black font-black uppercase tracking-[0.6em] rounded-3xl shadow-xl transition-all text-xl italic group border-4 border-black/20"
                                     >
                                        {synthesizing ? <Loader2 className="size-10 animate-spin mr-4" /> : <Flame className="size-10 mr-4 group-hover:scale-125 transition-transform gold-glow" />}
                                        FORGE_SUPERIOR_WEAPON
                                     </Button>
                                  </div>
                               </div>
                            </div>
                         )}
                      </Card>
                   </div>
                 )}

                 {/* قسم السلاح المخلق */}
                 {sovereignTool && (
                   <div className="animate-in zoom-in-95 duration-1000">
                      <Card className="bg-emerald-600/5 border-4 border-emerald-500/40 rounded-[4rem] p-12 overflow-hidden shadow-9xl relative">
                         <div className="absolute inset-0 bg-emerald-500/5 opacity-5 animate-pulse" />
                         <div className="flex justify-between items-center mb-10">
                            <div className="flex items-center gap-8">
                               <div className="size-20 rounded-3xl bg-emerald-600 flex items-center justify-center border-2 border-emerald-400 shadow-2xl animate-neural">
                                  <Zap className="size-10 text-white" />
                               </div>
                               <div>
                                  <h4 className="text-3xl md:text-6xl font-black text-white italic uppercase leading-none gold-glow">SOVEREIGN_TOOL</h4>
                                  <Badge className="bg-emerald-600/20 text-emerald-400 border-none px-4 py-1 rounded-full font-black text-[10px] tracking-[0.4em] uppercase italic mt-2">AL-MUIZZ_FORGE_v53</Badge>
                               </div>
                            </div>
                            <Button onClick={handleIntegrateNode} className="h-20 px-10 bg-emerald-600 hover:bg-white text-white hover:text-black font-black uppercase tracking-[0.4em] rounded-2xl shadow-xl border-4 border-black/30 group transition-all italic">
                               <CheckCircle2 className="size-8 mr-4 group-hover:scale-110 transition-transform" /> INTEGRATE_NODE
                            </Button>
                         </div>

                         <div className="grid grid-cols-1 xl:grid-cols-3 gap-10">
                            <div className="xl:col-span-2 space-y-6">
                               <h5 className="text-[12px] font-black text-emerald-500 uppercase tracking-[1em] italic border-b-2 border-emerald-500/10 pb-4 flex items-center gap-4">
                                  <Code2 className="size-6" /> Superior Genetic Code
                               </h5>
                               <div className="p-8 bg-black/99 rounded-3xl border-2 border-emerald-500/20 h-96 overflow-y-auto scrollbar-hide shadow-inner font-code text-xl italic text-emerald-400 selection:bg-emerald-600 selection:text-white">
                                  <pre className="whitespace-pre-wrap">{sovereignTool.generatedCode}</pre>
                               </div>
                            </div>
                            <div className="space-y-8 flex flex-col justify-between">
                               <div className="space-y-6">
                                  <h5 className="text-[12px] font-black text-emerald-500 uppercase tracking-[1em] italic border-b-2 border-emerald-500/10 pb-4 flex items-center gap-4"><ShieldCheck className="size-6" /> Security Analysis</h5>
                                  <div className="p-6 bg-black/60 rounded-2xl border-2 border-white/5 text-lg text-gray-300 font-bold italic leading-relaxed">
                                     {sovereignTool.securityAnalysis}
                                  </div>
                               </div>
                               <div className="p-8 rounded-[2.5rem] bg-emerald-600/10 border-2 border-emerald-500/20 text-center">
                                  <div className="text-[10px] font-black uppercase text-emerald-500 tracking-[0.4em] mb-3 italic">Architectural Impact</div>
                                  <div className="text-3xl font-black text-white italic uppercase gold-glow leading-none">TOTAL_SUBJUGATION</div>
                               </div>
                            </div>
                         </div>
                      </Card>
                   </div>
                 )}

                 {/* الفيد الرئيسي للترسانة */}
                 {!siphonData && !sovereignTool && (
                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {categories.map((cat, i) => (
                        <Card key={i} className="bg-white/5 border-2 border-white/5 rounded-3xl p-8 hover:border-primary transition-all duration-700 shadow-xl group/cat relative overflow-hidden flex flex-col justify-between cursor-crosshair active:scale-95">
                           <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover/cat:opacity-10 transition-opacity" />
                           <div className="flex justify-between items-start mb-6">
                              <div className="size-16 rounded-xl bg-black border-2 border-white/10 flex items-center justify-center group-hover/cat:border-primary transition-all duration-700 shadow-inner">
                                 <cat.icon className={cn("size-8 transition-all duration-700 group-hover:scale-110", cat.color)} />
                              </div>
                              <Badge className="bg-primary/10 text-primary border-none text-[10px] px-4 py-1 rounded-full uppercase tracking-widest italic">{cat.count} TOOLS</Badge>
                           </div>
                           <div>
                              <h4 className="text-xl md:text-2xl font-black text-white italic gold-glow uppercase tracking-tight mb-2 leading-tight">{cat.name}</h4>
                              <p className="text-[10px] text-muted-foreground uppercase font-black tracking-[0.2em] italic opacity-60">SOVEREIGN_UNIT_v53</p>
                           </div>
                           <div className="mt-8 flex justify-end">
                              <ArrowUpRight className="size-8 text-primary/20 group-hover:text-primary transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
                           </div>
                        </Card>
                      ))}
                      
                      <div className="col-span-full mt-8 p-12 rounded-[4rem] bg-black/80 border-4 border-primary/20 relative group/bind overflow-hidden shadow-2xl">
                         <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none group-hover/bind:opacity-10 transition-all duration-1000"><Boxes className="size-32 text-primary" /></div>
                         <h5 className="text-[14px] font-black text-primary uppercase tracking-[0.8em] mb-8 border-b-2 border-primary/10 pb-4 italic flex items-center gap-6">
                            <ShieldX className="size-8 animate-neural" /> Hierarchy Binding Status
                         </h5>
                         <p className="text-xl md:text-3xl text-gray-300 italic font-black leading-relaxed selection:bg-primary selection:text-black">
                            "العقدة الـ 22 مربوطة الآن بعصب الـ 21 عقدة السابقة؛ كافة الأدوات الـ 2842 مهيأة للاستدعاء الفوري عبر المحطة الأبدية ومركز السيطرة."
                         </p>
                      </div>
                   </div>
                 )}
              </CardContent>

              <div className="p-8 border-t-2 border-white/5 mt-auto flex justify-between items-center opacity-30 text-[10px] font-black uppercase tracking-[2.5em] italic">
                 <span>ARSENAL_NODE_22_v53_AL_GHAZALI_ROOT</span>
                 <div className="flex gap-8">
                    <Fingerprint className="size-8 text-primary animate-pulse" />
                    <Atom className="size-8 animate-spin-slow" />
                 </div>
              </div>
           </Card>
        </div>

        <div className="mt-auto relative z-10 flex justify-center items-center gap-16 opacity-40 text-[12px] md:text-[18px] font-black uppercase tracking-[2em] md:tracking-[6em] italic text-white drop-shadow-xl pb-12">
            <span>AL-MUIZZ SUPREME ARSENAL v53.0</span>
            <div className="size-4 rounded-full bg-white animate-pulse shadow-[0_0_40px_white]" />
            <span>SINGULARITY_IN_AMMO_2026</span>
        </div>
      </main>
    </div>
  )
}
