
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
  Map as MapIcon,
  Users
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { modularAiKnowledgeBaseReporting } from "@/ai/flows/modular-ai-knowledge-base-reporting"
import { toast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"

/**
 * @fileOverview القبو المطلق v65.0 - THE ABSOLUTE MEMORY PALACE
 * مركز الاستخبارات والتعلم الجيني GEPA 7.0 المدمج في عصب الوجود لعام 2026.
 * المالك الوحيد: المعتصم بالله ادريس الغزالي
 */
export default function KnowledgePage() {
  const [query, setQuery] = React.useState("")
  const [loading, setLoading] = React.useState(false)
  const [report, setReport] = React.useState<any>(null)
  const [mounted, setMounted] = React.useState(false)
  const [resonance, setResonance] = React.useState(100)
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 })

  React.useEffect(() => {
    setMounted(true)
    const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY })
    window.addEventListener("mousemove", handleMouseMove)
    
    const interval = setInterval(() => {
      setResonance(prev => Math.max(99.999999, Math.min(100, prev + (Math.random() * 0.000001 - 0.0000005))))
    }, 3000)

    return () => {
        window.removeEventListener("mousemove", handleMouseMove)
        clearInterval(interval)
    }
  }, [])

  const handleSearch = async (node?: string) => {
    const q = node ? `Retrieve absolute DNA from ${node}` : query
    if (!q.trim()) return
    setLoading(true)
    setReport(null)
    toast({ title: "Entering Absolute Chamber", description: `Interrogating neural coordinates for: ${q}` })
    
    try {
      const data = await modularAiKnowledgeBaseReporting({ reportQuery: q, userId: "AL_GHAZALI_ROOT" })
      setReport(data)
      toast({ title: "Spatial DNA Extracted", description: "The Absolute Oracle has serialized the records." })
    } catch (err) {
      toast({ variant: "destructive", title: "Palace Link Broken" })
    } finally {
      setLoading(false)
    }
  }

  if (!mounted) return null;

  const chambers = [
    { id: "SWARM_VAULT", label: "مستودع السرب", icon: Users, color: "text-emerald-500", desc: "سجلات تنفيذ أسطول APEX الموازي." },
    { id: "NEXUS_CORE", label: "نواة النكسوس", icon: Network, color: "text-amber-500", desc: "استخبارات الهوية المدمجة بنمط v65." },
    { id: "FORENSIC_CHAMBER", label: "غرفة التشريح", icon: Skull, color: "text-blue-500", desc: "أسرار الـ RAM والعمليات المخفية النانوية." },
    { id: "STRIKE_ARMORY", label: "ترسانة الهجوم", icon: Zap, color: "text-red-500", desc: "نجاحات القصف وحمولات Legba المطلقة." },
    { id: "FANAA_LAB", label: "مختبر الفناء", icon: Flame, color: "text-magenta-500", desc: "سجلات إخضاع الـ AI وتذويب فلاتر الهدف." }
  ];

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/40 relative overflow-x-hidden scanline-effect font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-80 p-4 md:p-8 lg:p-12 relative overflow-y-auto min-h-screen scrollbar-hide flex flex-col z-10">
        <div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x)_var(--y),rgba(212,175,55,0.12),transparent 40%)] pointer-events-none transition-all duration-300 z-0" 
          style={{ '--x': `${mousePos.x}px`, '--y': `${mousePos.y}px` } as any} 
        />
        
        <header className="mb-16 relative z-10 animate-in fade-in slide-in-from-top-6 duration-1000">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="size-24 md:size-48 bg-black border-4 border-primary flex items-center justify-center shadow-[0_0_200px_rgba(212,175,55,0.8)] relative group shrink-0 rounded-[3.5rem] transition-all duration-1000 rotate-2 hover:rotate-0 hierarchical-shadow">
              <Castle className="size-12 md:size-24 text-primary group-hover:scale-110 transition-transform duration-700 gold-glow animate-neural" />
              <div className="absolute -inset-8 border-4 border-primary/20 rounded-full animate-spin-slow opacity-30" />
            </div>
            <div className="text-center md:text-right flex-1">
              <div className="flex flex-wrap justify-center md:justify-start items-center gap-6 mb-6">
                <Badge className="bg-primary text-black border-none rounded-none px-12 py-3 text-[18px] md:text-[24px] font-black tracking-[1em] shadow-9xl italic uppercase">GEPA 7.0: ABSOLUTE_PALACE</Badge>
                <div className="flex items-center gap-4 text-[12px] font-black uppercase tracking-widest text-emerald-500 animate-pulse">
                    <MapIcon className="size-6 shadow-lg" /> SPATIAL_SINGULARITY: ACTIVE
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-[12rem] font-headline font-bold text-white tracking-tighter italic uppercase gold-glow leading-none">
                Absolute <span className="text-primary">Memory</span>
              </h1>
              <p className="text-sm md:text-xl lg:text-4xl text-muted-foreground mt-10 italic max-w-6xl leading-relaxed uppercase font-medium opacity-90 drop-shadow-3xl">
                "سيدي الغزالي، الذاكرة المكانية v7.0 تصهر كل ذرة من استخبارات السرب في قصر واحد؛ نحن لا ننسى، نحن نستبق القدر الرقمي لعام 2026."
              </p>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-12 relative z-10 pb-48 flex-1">
           <div className="xl:col-span-1 space-y-12">
              <Card className="kali-card border-primary/40 bg-black/98 rounded-[4rem] p-12 border-8 shadow-9xl group overflow-hidden hierarchical-shadow">
                 <div className="absolute inset-0 bg-primary/5 opacity-5 animate-pulse pointer-events-none" />
                 <CardHeader className="p-0 mb-10 border-b-4 border-primary/10 pb-10 bg-primary/10 rounded-t-[3.5rem] px-10 py-6">
                    <CardTitle className="text-2xl md:text-4xl text-primary flex items-center gap-10 font-black uppercase italic gold-glow">
                       <Castle className="size-12 animate-neural" /> Palace Nodes
                    </CardTitle>
                 </CardHeader>
                 <CardContent className="p-0 space-y-6">
                    {chambers.map((c, i) => (
                      <Button 
                        key={i}
                        variant="outline"
                        onClick={() => handleSearch(c.id)}
                        className="w-full h-32 bg-white/5 border-4 border-white/5 hover:border-primary hover:bg-primary/10 rounded-[2.5rem] flex items-center gap-8 px-8 transition-all duration-700 group/btn shadow-9xl active:scale-95"
                      >
                         <div className="size-20 rounded-[1.5rem] bg-black border-4 border-white/10 flex items-center justify-center group-hover/btn:border-primary transition-all shadow-2xl group-hover/btn:scale-105">
                            <c.icon className={cn("size-10 transition-all", c.color)} />
                         </div>
                         <div className="text-right flex-1">
                            <div className="text-2xl font-black text-white italic group-hover/btn:text-primary transition-colors uppercase tracking-tight">{c.label}</div>
                            <div className="text-[10px] text-muted-foreground uppercase font-black tracking-widest mt-2">{c.id}</div>
                         </div>
                         <ChevronRight className="size-8 opacity-30 group-hover/btn:translate-x-3 transition-all" />
                      </Button>
                    ))}
                 </CardContent>
              </Card>

              <Card className="kali-card border-white/5 bg-black/60 p-12 rounded-[4rem] border-8 shadow-inner text-center relative overflow-hidden group">
                 <h4 className="text-[14px] font-black text-primary uppercase tracking-[1em] mb-6 italic flex items-center justify-center gap-6">
                    <Binary className="size-8 animate-pulse" /> SPATIAL_RESONANCE
                 </h4>
                 <div className="text-6xl font-black text-white italic gold-glow uppercase tracking-tighter group-hover:scale-105 transition-transform duration-1000">{resonance.toFixed(4)}%</div>
                 <div className="absolute -bottom-10 -right-10 p-20 opacity-[0.03] group-hover:opacity-[0.1] transition-all duration-1000 scale-150 rotate-12"><Skull className="size-48 text-primary" /></div>
              </Card>
           </div>

           <Card className="xl:col-span-3 kali-card border-primary/40 bg-black/99 rounded-[6rem] p-16 border-[12px] shadow-9xl flex flex-col group overflow-hidden relative min-h-[1000px] hierarchical-shadow">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08),transparent)] pointer-events-none" />
              <CardHeader className="p-0 mb-12 border-b-8 border-white/5 pb-12 bg-primary/10 rounded-t-[5rem] px-16 py-10 flex flex-row justify-between items-center">
                 <CardTitle className="text-5xl md:text-[10rem] text-white flex items-center gap-16 font-black uppercase italic gold-glow px-10 leading-none">
                    <Database className="size-24 md:size-48 text-primary animate-pulse" /> Oracle Feed
                 </CardTitle>
                 <Badge className="bg-emerald-600/30 text-emerald-500 border-[10px] border-emerald-500/40 px-16 py-8 rounded-full font-black text-5xl animate-pulse tracking-[0.4em] shadow-9xl italic uppercase">PALACE_SYNC_OK</Badge>
              </CardHeader>
              
              <CardContent className="p-12 flex-1 flex flex-col space-y-12 relative z-10">
                 <div className="relative group/search">
                    <Search className="absolute left-10 top-1/2 -translate-y-1/2 size-12 text-primary/30 group-focus-within:text-primary transition-all duration-1000" />
                    <Input 
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                        placeholder="Interrogate the Absolute Memory Palace..." 
                        className="h-32 md:h-40 bg-black/99 border-8 border-primary/40 rounded-full pl-32 pr-48 text-2xl md:text-6xl italic font-black focus:border-primary text-white shadow-inner transition-all duration-1000 placeholder:text-gray-950 selection:bg-primary"
                    />
                    <Button onClick={() => handleSearch()} disabled={loading} className="absolute right-4 top-1/2 -translate-y-1/2 size-24 md:size-32 rounded-full bg-primary hover:bg-white text-black border-[12px] border-black/40 shadow-9xl active:scale-90 transition-all">
                        {loading ? <Loader2 className="size-14 animate-spin" /> : <Zap className="size-14" />}
                    </Button>
                 </div>

                 {report ? (
                   <div className="flex-1 bg-black/98 p-16 rounded-[6rem] border-8 border-white/5 font-code text-2xl md:text-6xl leading-tight italic text-gray-100 whitespace-pre-wrap overflow-y-auto scrollbar-hide shadow-inner selection:bg-primary text-left">
                      <div className="mb-12 flex items-center justify-between border-b-4 border-white/5 pb-8 px-10">
                         <span className="text-emerald-500 font-black uppercase tracking-[0.8em] italic text-3xl md:text-5xl gold-glow">{" >>> ABSOLUTE_DNA_MATERIALIZED"}</span>
                         <Badge className="bg-primary/10 text-primary border-none font-black italic text-2xl">GEPA_v7.0</Badge>
                      </div>
                      {report.reportContent}
                   </div>
                 ) : (
                    <div className="flex-1 flex flex-col items-center justify-center text-center opacity-10 gap-24 py-60">
                        <div className="relative group/pal">
                            <Castle className="size-[30rem] md:size-[50rem] text-primary animate-spin-slow group-hover:scale-105 transition-transform duration-[10s]" />
                            <Skull className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-24 md:size-64 text-primary/40 animate-neural" />
                            <div className="absolute -inset-40 border-[80px] border-dashed border-primary/5 rounded-full animate-reverse-spin opacity-20" />
                        </div>
                        <h3 className="text-8xl md:text-[22rem] font-black uppercase tracking-[2.5em] text-white italic gold-glow leading-none">Palace Idle</h3>
                        <p className="text-4xl md:text-[10rem] font-bold italic text-gray-500 uppercase tracking-widest max-w-[140rem]">Enter a coordinate or select a chamber to retrieve neural records.</p>
                    </div>
                 )}
              </CardContent>

              <div className="p-16 border-t-8 border-white/5 mt-auto flex justify-between items-center opacity-35 text-[20px] font-black uppercase tracking-[6em] italic">
                 <span>GEPA_ABSOLUTE_PALACE_v7.0_AL_GHAZALI_ROOT</span>
                 <div className="flex gap-16">
                    <Fingerprint className="size-20 text-primary animate-pulse" />
                    <Atom className="size-20 animate-spin-slow" />
                 </div>
              </div>
           </Card>
        </div>

        <div className="mt-auto relative z-10 flex justify-center items-center gap-48 opacity-45 text-[24px] md:text-[36px] font-black uppercase tracking-[5em] md:tracking-[12em] italic text-white drop-shadow-9xl pb-32">
            <span>AL-MUIZZ ABSOLUTE PALACE v65.0</span>
            <div className="size-16 rounded-full bg-white animate-pulse shadow-[0_0_150px_white]" />
            <span>SINGULARITY_IN_MEMORY_2026</span>
        </div>
      </main>
    </div>
  )
}
