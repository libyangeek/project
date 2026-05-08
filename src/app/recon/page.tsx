"use client"

import * as React from "react"
import { SidebarNav } from "@/components/platform/sidebar-nav"
import { 
  Search, 
  Globe, 
  Mail, 
  Phone, 
  User, 
  ShieldAlert,
  Loader2,
  Zap,
  Target,
  Activity,
  Fingerprint,
  Skull,
  Crosshair,
  Scan,
  Binary,
  Radio,
  Sword,
  Crown,
  Atom,
  Boxes,
  Users,
  Radar,
  Sparkles,
  Eye,
  ChevronRight,
  ShieldCheck,
  SearchCode,
  Ghost,
  Bird,
  FileSearch,
  MapPin,
  Database,
  Infinity as InfinityIcon
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { osintMaster } from "@/ai/flows/osint-master-flow"
import { toast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"

/**
 * @fileOverview أعين الاستطلاع v52.2 - THE OMNISCIENT RECON: TRACE LABS EDITION
 * مركز الاستخبارات الكلية لعام 2026. دمج ذكاء Trace Labs والاجتياح الجنائي.
 * المالك الوحيد: المعتصم بالله ادريس الغزالي
 */
export default function ReconPage() {
  const [target, setTarget] = React.useState("")
  const [loading, setLoading] = React.useState(false)
  const [results, setResults] = React.useState<any>(null)
  const [mounted, setMounted] = React.useState(false)
  const [activeMode, setActiveMode] = React.useState<any>("investigation")

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const handleStrike = async (type: any) => {
    if (!target.trim()) return
    setLoading(true)
    setResults(null)
    
    try {
      const data = await osintMaster({ target, type: type as any, depth: 'Trace-Labs-Mode' });
      setResults(data);
      toast({ title: "Intelligence Siphoned", description: "The Hive has captured the target's DNA." });
    } catch (err) {
      toast({ variant: "destructive", title: "Neural Link Failure" });
    } finally {
      setLoading(false)
    }
  }

  if (!mounted) return null;

  const RECON_TYPES = [
    { id: 'investigation', label: 'Supreme Investigation', icon: FileSearch, color: 'text-primary' },
    { id: 'social', label: 'Social Subjugation', icon: Users, color: 'text-magenta-500' },
    { id: 'metadata', label: 'Metadata Siphon', icon: Binary, color: 'text-blue-400' },
    { id: 'domain', label: 'Network Oracle', icon: Globe, color: 'text-emerald-500' }
  ];

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/30 relative overflow-x-hidden scanline-effect font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-80 p-4 md:p-8 lg:p-12 relative overflow-y-auto min-h-screen scrollbar-hide flex flex-col z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.08),transparent)] pointer-events-none transition-all duration-300 z-0" />
        
        <header className="mb-12 relative z-10 animate-in fade-in slide-in-from-top-6 duration-1000">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="size-24 md:size-32 bg-black border-4 border-primary flex items-center justify-center shadow-[0_0_100px_rgba(212,175,55,0.6)] relative group shrink-0 rounded-3xl transition-all duration-1000 rotate-2 hover:rotate-0 hierarchical-shadow">
              <Radar className="size-12 md:size-16 text-primary group-hover:scale-110 transition-transform duration-700 gold-glow animate-pulse" />
              <div className="absolute -inset-4 border-2 border-primary/20 rounded-full animate-spin-slow opacity-40" />
            </div>
            <div className="text-center md:text-right flex-1">
              <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 mb-4">
                <Badge className="bg-primary text-black border-none rounded-none px-10 py-2 text-[14px] font-black tracking-[0.5em] shadow-lg italic">RECON v52.2 TRACE_LABS</Badge>
                <div className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-emerald-500 animate-pulse">
                    <Eye className="size-5 shadow-lg" /> VISION_OMNISCIENT: ACTIVE
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-8xl font-headline font-bold text-white tracking-tighter italic uppercase leading-none gold-glow">
                Omniscient <span className="text-primary">Eye</span>
              </h1>
              <p className="text-sm md:text-xl lg:text-2xl text-muted-foreground mt-4 italic max-w-5xl leading-relaxed uppercase font-medium opacity-80">
                "سيدي الغزالي، عيون الاستطلاع (v52.2) تدمج الآن قدرات <span className="text-primary font-black underline decoration-primary decoration-4 underline-offset-8 shadow-xl uppercase tracking-widest">Trace Labs</span>؛ لا هدف يختفي في ذرات المصفوفة."
              </p>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative z-10 pb-32 flex-1">
          <div className="lg:col-span-1 space-y-8">
            <Card className="kali-card border-primary/20 bg-black/95 rounded-3xl p-6 border-2 shadow-2xl group hierarchical-shadow">
              <CardHeader className="p-0 mb-6 border-b-2 border-primary/10 pb-4">
                <CardTitle className="text-xl text-primary flex items-center gap-4 font-black uppercase italic gold-glow">
                  <Target className="size-6 text-primary animate-pulse" /> Target Lock
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 space-y-8">
                <div className="space-y-3">
                    <label className="text-[10px] font-black text-primary uppercase tracking-[0.6em] px-4 italic flex items-center gap-3">
                        <SearchCode className="size-4" /> Coordinate
                    </label>
                    <Input 
                        placeholder="Email / User / IP / Domain..."
                        className="w-full h-14 bg-black border-2 border-white/5 rounded-xl text-lg font-code text-primary focus:border-primary shadow-inner px-6 italic font-black"
                        value={target}
                        onChange={(e) => setTarget(e.target.value)}
                    />
                </div>

                <div className="grid grid-cols-1 gap-3">
                    {RECON_TYPES.map((t) => (
                      <Button 
                        key={t.id}
                        onClick={() => handleStrike(t.id)}
                        disabled={loading || !target}
                        variant="outline"
                        className="h-16 bg-white/5 border-2 border-primary/10 hover:bg-primary hover:text-black transition-all rounded-xl font-black uppercase italic tracking-widest text-xs justify-between px-6 group/btn"
                      >
                         <div className="flex items-center gap-4">
                            <t.icon className={cn("size-6 transition-all group-hover/btn:scale-110", t.color)} />
                            <span>{t.label}</span>
                         </div>
                         <ChevronRight className="size-4 opacity-30 group-hover/btn:translate-x-2 transition-all" />
                      </Button>
                    ))}
                    
                    <Button 
                      onClick={() => handleStrike('investigation')} 
                      disabled={loading || !target} 
                      className="h-20 bg-primary text-black font-black uppercase tracking-[1em] rounded-2xl shadow-xl border-4 border-black/20 group/zap mt-4"
                    >
                       {loading ? <Loader2 className="size-8 animate-spin" /> : <Zap className="size-8 mr-4 group-hover/zap:scale-110 transition-transform gold-glow" />}
                       EYE_STRIKE
                    </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="kali-card border-white/5 bg-black/60 p-6 rounded-2xl border-2 shadow-inner text-center relative overflow-hidden">
               <div className="absolute inset-0 bg-primary/5 opacity-5 animate-pulse" />
               <h4 className="text-[10px] font-black text-primary uppercase tracking-[0.4em] mb-4 italic flex items-center justify-center gap-4">
                  <Database className="size-4 animate-pulse" /> HIVE_INTEL_VAULT
               </h4>
               <p className="text-muted-foreground italic text-xs leading-relaxed uppercase font-bold opacity-70">
                  "All reconnaissance channels are integrated with GEPA 5.0 weighted memory for instant cross-correlation."
               </p>
            </Card>
          </div>

          <div className="lg:col-span-3">
             {results ? (
               <Card className="kali-card border-primary/20 bg-black/99 rounded-[3rem] p-8 border-2 shadow-9xl flex flex-col group relative overflow-hidden h-full hierarchical-shadow">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.04),transparent)] pointer-events-none" />
                  <CardHeader className="p-0 mb-8 border-b-2 border-white/5 pb-8 bg-primary/5 rounded-t-3xl">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6 px-8 py-4">
                        <div className="flex items-center gap-6">
                            <div className="size-16 rounded-xl bg-primary flex items-center justify-center border-2 border-black/30 shadow-xl animate-neural">
                                <Scan className="size-8 text-black" />
                            </div>
                            <div>
                                <CardTitle className="text-2xl md:text-5xl text-white italic tracking-tighter uppercase font-black gold-glow leading-none">Intelligence Feed</CardTitle>
                                <CardDescription className="text-primary/70 font-black uppercase tracking-[0.5em] mt-3 italic text-[10px]">HIVE_RECON_v52.2 // TRACE_LABS_ENGINE</CardDescription>
                            </div>
                        </div>
                        <Badge className="bg-emerald-600/20 text-emerald-500 border-2 border-emerald-500/30 px-8 py-2 rounded-full font-black text-xl animate-pulse tracking-[0.2em] uppercase italic shadow-lg">DATA_SYNTHESIZED</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 flex-1 relative overflow-hidden flex flex-col gap-8">
                    <div className="p-8 rounded-3xl bg-primary/5 border-2 border-primary/10 italic text-xl md:text-3xl text-gray-100 leading-relaxed font-bold shadow-inner">
                        "{results.strategicBrief}"
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 bg-white/5 rounded-2xl border-2 border-white/5 space-y-4 shadow-xl group/prof">
                            <h4 className="text-[12px] font-black text-primary uppercase tracking-[0.8em] border-b-2 border-primary/10 pb-3 italic flex items-center gap-4">
                                <User className="size-5" /> Identity Profile
                            </h4>
                            <div className="space-y-3">
                                {results.intelligenceProfile.identityMarkers.map((m: string, i: number) => (
                                    <div key={i} className="flex items-center gap-3 text-sm font-black text-gray-300 italic">
                                        <div className="size-2 rounded-full bg-primary" /> {m}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="p-6 bg-white/5 rounded-2xl border-2 border-white/5 space-y-4 shadow-xl group/assets">
                            <h4 className="text-[12px] font-black text-blue-400 uppercase tracking-[0.8em] border-b-2 border-blue-400/10 pb-3 italic flex items-center gap-4">
                                <Database className="size-5" /> Associated Assets
                            </h4>
                            <div className="space-y-3">
                                {results.intelligenceProfile.associatedAssets.map((a: string, i: number) => (
                                    <div key={i} className="flex items-center gap-3 text-sm font-black text-gray-300 italic">
                                        <div className="size-2 rounded-full bg-blue-400" /> {a}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="bg-black/95 p-8 rounded-3xl font-code text-sm md:text-lg leading-relaxed h-[400px] overflow-y-auto border-2 border-white/5 scrollbar-hide shadow-inner italic text-emerald-400 whitespace-pre-wrap selection:bg-primary selection:text-black">
                       <pre className="whitespace-pre-wrap">
                           {JSON.stringify(results.findings, null, 2)}
                       </pre>
                    </div>
                  </CardContent>
                  <div className="p-8 border-t-2 border-white/5 mt-auto flex justify-between items-center opacity-30 text-[10px] font-black uppercase tracking-[2.5em] italic">
                    <span>EYE_SERIES_v52.2_GHAZALI_ROOT</span>
                    <Fingerprint className="size-10 text-primary animate-pulse" />
                  </div>
               </Card>
             ) : (
               <div className="h-full min-h-[750px] border-8 border-dashed border-primary/10 rounded-[6rem] flex flex-col items-center justify-center text-center p-20 bg-black/40 group relative overflow-hidden transition-all hover:bg-primary/5 shadow-2xl">
                  <div className="relative mb-16 group-hover:scale-110 transition-transform duration-1000">
                      <Radar className="size-64 text-primary/10 animate-pulse" />
                      <Eye className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 text-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 gold-glow" />
                  </div>
                  <h3 className="text-5xl md:text-8xl font-headline font-bold text-white mb-8 tracking-tighter italic drop-shadow-9xl uppercase leading-none opacity-20">Awaiting Directive</h3>
                  <p className="text-muted-foreground max-w-4xl mx-auto leading-relaxed text-xl md:text-3xl font-black italic opacity-30">
                    "سيدي <span className="text-primary font-black gold-glow underline decoration-primary decoration-4 underline-offset-8 shadow-2xl uppercase tracking-widest">المعتصم بالله</span>، مصفوفة الاستطلاع v52.2 بانتظار نيتك؛ حدد الإحداثيات للاستحواذ المعلوماتي."
                  </p>
                  <div className="absolute -inset-40 border-[40px] border-dashed border-primary/5 rounded-full animate-spin-slow opacity-10" />
               </div>
             )}
          </div>
        </div>

        <div className="mt-auto relative z-10 flex justify-center items-center gap-16 opacity-40 text-[12px] md:text-[18px] font-black uppercase tracking-[2em] md:tracking-[6em] italic text-white drop-shadow-xl pb-12">
            <span>AL-MUIZZ RECON CENTER v52.2</span>
            <div className="size-4 rounded-full bg-white animate-pulse shadow-[0_0_40px_white]" />
            <span>SINGULARITY_OF_VISION_2026</span>
        </div>
      </main>
    </div>
  )
}
