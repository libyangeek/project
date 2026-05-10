
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
  Infinity as InfinityIcon,
  Castle,
  DoorOpen,
  Map as MapIcon
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
 * @fileOverview القبو الجيني v58.5 - THE NEURAL MEMORY PALACE
 * مركز الاستخبارات والتعلم الجيني GEPA 5.5 المدمج بنظام "قصر الذاكرة" لعام 2026.
 * المالك الوحيد: المعتصم بالله ادريس الغزالي
 */
export default function KnowledgePage() {
  const [query, setQuery] = React.useState("")
  const [loading, setLoading] = React.useState(false)
  const [report, setReport] = React.useState<any>(null)
  const [mounted, setMounted] = React.useState(false)
  const [palaceStats, setPalaceStats] = React.useState<any>(null)
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 })

  React.useEffect(() => {
    setMounted(true)
    fetchPalaceStats()
    const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY })
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const fetchPalaceStats = async () => {
    try {
        const res = await fetch('/api/sovereign/metrics')
        const data = await res.json()
        setPalaceStats(data)
    } catch (e) {}
  }

  const handleSearch = async (node?: string) => {
    const q = node ? `Retrieve data from ${node}` : query
    if (!q.trim()) return
    setLoading(true)
    setReport(null)
    toast({ title: "Entering Palace Chamber", description: `Interrogating neural coordinates for: ${q}` })
    
    try {
      const data = await modularAiKnowledgeBaseReporting({ reportQuery: q, userId: "AL_GHAZALI_ROOT" })
      setReport(data)
      toast({ title: "Structure Analyzed", description: "The Oracle has siphoned the spatial records." })
    } catch (err) {
      toast({ variant: "destructive", title: "Palace Link Broken" })
    } finally {
      setLoading(false)
    }
  }

  if (!mounted) return null;

  const chambers = [
    { id: "FORENSIC_CHAMBER", label: "غرفة التشريح", icon: Skull, color: "text-blue-500", desc: "أسرار الـ RAM والعمليات المخفية." },
    { id: "STRIKE_ARMORY", label: "ترسانة الهجوم", icon: Zap, color: "text-red-500", desc: "نجاحات القصف وحمولات Legba." },
    { id: "RECON_OBSERVATORY", label: "مرصد الاستطلاع", icon: Eye, color: "text-amber-500", desc: "ارتباطات Claude-OSINT والـ API." },
    { id: "FANAA_LAB", label: "مختبر الفناء", icon: Flame, color: "text-magenta-500", desc: "سجلات إخضاع الـ AI وتذويب الفلاتر." },
    { id: "GENERAL_HALL", label: "الردهة العامة", icon: DoorOpen, color: "text-primary", desc: "سجل العمليات السيادية العامة." }
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
            <div className="size-24 md:size-40 bg-black border-4 border-primary flex items-center justify-center shadow-[0_0_150px_rgba(212,175,55,0.6)] relative group shrink-0 rounded-[2.5rem] transition-all duration-1000 rotate-2 hover:rotate-0 hierarchical-shadow">
              <Castle className="size-12 md:size-20 text-primary group-hover:scale-110 transition-transform duration-700 gold-glow animate-neural" />
              <div className="absolute -inset-4 border-2 border-primary/20 rounded-full animate-spin-slow opacity-40" />
            </div>
            <div className="text-center md:text-right flex-1">
              <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 mb-4">
                <Badge className="bg-primary text-black border-none rounded-none px-10 py-2 text-[14px] md:text-[16px] font-black tracking-[0.5em] shadow-lg italic">GEPA 5.5: NEURAL_PALACE</Badge>
                <div className="flex items-center gap-4 text-[11px] font-black uppercase tracking-widest text-emerald-500 animate-pulse">
                    <MapIcon className="size-6 shadow-lg" /> SPATIAL_MEMORY: ACTIVE
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-9xl font-headline font-bold text-white tracking-tighter italic uppercase gold-glow leading-none">
                Memory <span className="text-primary">Palace</span>
              </h1>
              <p className="text-sm md:text-xl lg:text-3xl text-muted-foreground mt-6 italic max-w-6xl leading-relaxed uppercase font-medium opacity-80">
                "سيدي القائد <span className="text-white font-black underline decoration-primary decoration-4 underline-offset-8 shadow-xl uppercase tracking-widest">المعتصم بالله</span>، لقد دمجتُ فكرة القصر في GEPA؛ ذكريات الأهداف الآن موزعة في غرف استراتيجية لضمان السطوة المطلقة لعام 2026."
              </p>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8 relative z-10 pb-32 flex-1">
           <div className="xl:col-span-1 space-y-8">
              <Card className="kali-card border-primary/30 bg-black/98 rounded-[3rem] p-8 border-2 shadow-2xl group overflow-hidden hierarchical-shadow">
                 <div className="absolute inset-0 bg-primary/5 opacity-5 animate-pulse pointer-events-none" />
                 <CardHeader className="p-0 mb-8 border-b-2 border-primary/10 pb-6">
                    <CardTitle className="text-xl md:text-2xl text-primary flex items-center gap-6 font-black uppercase italic gold-glow">
                       <Castle className="size-8 animate-spin-slow" /> Palace Nodes
                    </CardTitle>
                 </CardHeader>
                 <CardContent className="p-0 space-y-4">
                    {chambers.map((c, i) => (
                      <Button 
                        key={i}
                        variant="outline"
                        onClick={() => handleSearch(c.id)}
                        className="w-full h-24 bg-white/5 border-2 border-white/5 hover:border-primary hover:bg-primary/10 rounded-3xl flex items-center gap-6 px-6 transition-all duration-700 group/btn shadow-xl active:scale-95"
                      >
                         <div className="size-14 rounded-2xl bg-black border-2 border-white/10 flex items-center justify-center group-hover/btn:border-primary transition-all shadow-inner">
                            <c.icon className={cn("size-8 transition-all", c.color)} />
                         </div>
                         <div className="text-right flex-1">
                            <div className="text-lg font-black text-white italic group-hover/btn:text-primary transition-colors">{c.label}</div>
                            <div className="text-[8px] text-muted-foreground uppercase font-black tracking-widest">{c.id}</div>
                         </div>
                         <ChevronRight className="size-5 opacity-30 group-hover/btn:translate-x-2 transition-all" />
                      </Button>
                    ))}
                 </CardContent>
              </Card>

              <Card className="kali-card border-white/5 bg-black/60 p-8 rounded-[3rem] border-2 shadow-inner text-center relative overflow-hidden group">
                 <h4 className="text-[10px] font-black text-primary uppercase tracking-[0.5em] mb-4 italic flex items-center justify-center gap-3">
                    <Binary className="size-4 animate-pulse" /> SPATIAL_STABILITY
                 </h4>
                 <div className="text-3xl font-black text-white italic gold-glow uppercase tracking-tighter group-hover:scale-105 transition-transform duration-700">STABILIZED</div>
                 <div className="absolute -bottom-4 -right-4 p-6 opacity-[0.02] group-hover:opacity-[0.05] transition-all duration-700 scale-150"><Skull className="size-16 text-primary" /></div>
              </Card>
           </div>

           <Card className="xl:col-span-3 kali-card border-primary/30 bg-black/99 rounded-[4rem] p-10 border-4 shadow-9xl flex flex-col group overflow-hidden relative min-h-[850px] hierarchical-shadow">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.03),transparent)] pointer-events-none" />
              <CardHeader className="p-0 mb-8 border-b-2 border-white/5 pb-8 flex flex-row justify-between items-center bg-primary/5 rounded-t-[3.5rem] px-10 py-6">
                 <CardTitle className="text-3xl md:text-7xl text-white flex items-center gap-10 font-black uppercase italic gold-glow px-4 leading-none">
                    <Database className="size-12 md:size-20 text-primary animate-pulse" /> Oracle Feed
                 </CardTitle>
                 <Badge className="bg-emerald-600/20 text-emerald-500 border-4 border-emerald-500/40 px-10 py-4 rounded-full font-black text-2xl animate-pulse italic tracking-[0.2em] shadow-xl uppercase">PALACE_SYNC_OK</Badge>
              </CardHeader>
              
              <CardContent className="p-6 flex-1 flex flex-col space-y-8 relative z-10">
                 <div className="relative group/search">
                    <Search className="absolute left-8 top-1/2 -translate-y-1/2 size-8 text-primary/30 group-focus-within:text-primary transition-all duration-700" />
                    <Input 
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                        placeholder="Interrogate the Neural Palace..." 
                        className="h-24 md:h-32 bg-black/99 border-4 border-primary/30 rounded-[3rem] pl-24 pr-40 text-xl md:text-4xl italic font-black focus:border-primary text-white shadow-inner transition-all duration-700 placeholder:text-gray-900 selection:bg-primary selection:text-black"
                    />
                    <Button onClick={() => handleSearch()} disabled={loading || !query} className="absolute right-4 top-1/2 -translate-y-1/2 size-20 md:size-24 rounded-full bg-primary hover:bg-white text-black border-8 border-black/30 shadow-9xl active:scale-90 transition-all">
                        {loading ? <Loader2 className="size-10 animate-spin" /> : <Zap className="size-10" />}
                    </Button>
                 </div>

                 {report ? (
                   <div className="flex-1 bg-black/95 p-12 rounded-[4rem] border-4 border-white/5 font-code text-xl md:text-4xl leading-relaxed italic text-gray-100 whitespace-pre-wrap overflow-y-auto scrollbar-hide shadow-inner selection:bg-primary selection:text-black">
                      <div className="mb-10 flex items-center justify-between border-b-2 border-white/5 pb-4">
                         <span className="text-emerald-500 font-black uppercase tracking-[0.6em] italic text-xl">{" >>> Chamber_Output_Materialized"}</span>
                         <Badge className="bg-primary/10 text-primary border-none font-black italic">GEPA_v5.5</Badge>
                      </div>
                      {report.reportContent}
                   </div>
                 ) : (
                    <div className="flex-1 flex flex-col items-center justify-center text-center opacity-10 gap-16 py-40">
                        <div className="relative group/pal">
                            <Castle className="size-64 md:size-96 text-primary animate-spin-slow group-hover:scale-110 transition-transform duration-[5s]" />
                            <Skull className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-24 md:size-32 text-primary/40 animate-neural" />
                            <div className="absolute -inset-20 border-[40px] border-dashed border-primary/5 rounded-full animate-reverse-spin opacity-20" />
                        </div>
                        <h3 className="text-6xl md:text-[10rem] font-black uppercase tracking-[1.5em] text-white italic gold-glow leading-none">Palace Idle</h3>
                        <p className="text-2xl md:text-4xl font-bold italic text-gray-500 uppercase tracking-widest max-w-4xl">Enter a query or select a chamber to retrieve neural records.</p>
                    </div>
                 )}
              </CardContent>

              <div className="p-10 border-t-4 border-white/5 mt-auto flex justify-between items-center opacity-30 text-[10px] font-black uppercase tracking-[3em] italic">
                 <span>GEPA_MEMORY_PALACE_v5.5_AL_GHAZALI_ROOT</span>
                 <div className="flex gap-10">
                    <Fingerprint className="size-10 text-primary animate-pulse" />
                    <Atom className="size-10 animate-spin-slow" />
                 </div>
              </div>
           </Card>
        </div>

        <div className="mt-auto relative z-10 flex justify-center items-center gap-16 opacity-40 text-[12px] md:text-[18px] font-black uppercase tracking-[2em] md:tracking-[6em] italic text-white drop-shadow-xl pb-12">
            <span>AL-MUIZZ NEURAL PALACE v58.5</span>
            <div className="size-4 rounded-full bg-white animate-pulse shadow-[0_0_40px_white]" />
            <span>SINGULARITY_IN_MEMORY_2026</span>
        </div>
      </main>
    </div>
  )
}
