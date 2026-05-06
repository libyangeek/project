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
  Infinity as InfinityIcon,
  Bird,
  Ghost
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { osintMaster } from "@/ai/flows/osint-master-flow"
import { deepEyeScan } from "@/ai/flows/vulnerability-scan-flow"
import { toast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"

/**
 * @fileOverview أعين الاستطلاع v50.0 - THE EYE SERIES: OMNISCIENT RECON
 * مركز الاستخبارات الكلية للعقل الجمعي. دمج Ghost Track و Blackbird لعام 2026.
 * المالك الوحيد: المعتصم بالله ادريس الغزالي
 */
export default function ReconPage() {
  const [target, setTarget] = React.useState("")
  const [loading, setLoading] = React.useState(false)
  const [results, setResults] = React.useState<any>(null)
  const [activeTab, setActiveTab] = React.useState("osint")
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const handleStrike = async (type: 'osint_ai' | 'ghost_track' | 'blackbird' | 'vuln_scan') => {
    if (!target.trim()) return
    setLoading(true)
    setResults(null)
    
    try {
      if (type === 'osint_ai') {
        const data = await osintMaster({ target, type: 'social' });
        setResults({ ai_recon: data });
      } else {
        const response = await fetch('/api/execute', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ type: type === 'vuln_scan' ? 'ghost_eye' : type, target })
        });
        const data = await response.json();
        setResults(data);
      }
      toast({ title: "Intelligence Siphoned", description: "The eye has captured the target's DNA." });
    } catch (err) {
      toast({ variant: "destructive", title: "Neural Link Failure" });
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
              <Radar className="size-12 md:size-18 text-primary group-hover:scale-110 transition-transform duration-700 gold-glow animate-pulse" />
              <div className="absolute -inset-4 border-2 border-primary/20 rounded-full animate-spin-slow opacity-40" />
            </div>
            <div className="text-center md:text-right flex-1">
              <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 mb-4">
                <Badge className="bg-primary text-black border-none rounded-none px-10 py-2 text-[16px] font-black tracking-[0.8em] shadow-lg italic">EYE SERIES v50.0</Badge>
                <div className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-emerald-500 animate-pulse">
                    <Eye className="size-5 shadow-lg" /> VISION_OMNISCIENT: ACTIVE
                </div>
              </div>
              <h1 className="text-4xl md:text-[8rem] font-headline font-bold text-white tracking-tighter italic uppercase leading-none gold-glow">
                Omniscient <span className="text-primary">Eye</span>
              </h1>
              <p className="text-xl md:text-3xl text-muted-foreground mt-6 italic max-w-5xl leading-relaxed uppercase font-medium">
                "سيدي الغزالي، عيون الاستطلاع (v50.0) تدمج الآن قدرات <span className="text-primary font-black underline decoration-primary decoration-4 underline-offset-8 shadow-lg uppercase tracking-widest">Ghost & Blackbird</span> المادية؛ نرى ما يغفل عنه المدافعون."
              </p>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative z-10 pb-24 flex-1">
          <div className="lg:col-span-1 space-y-8">
            <Card className="kali-card border-primary/40 bg-black/80 rounded-[3rem] p-8 border-4 shadow-7xl group">
              <CardHeader className="p-0 mb-8 border-b-4 border-primary/10 pb-6">
                <CardTitle className="text-2xl text-primary flex items-center gap-6 font-black uppercase italic gold-glow">
                  <Crosshair className="size-10 text-primary animate-pulse" /> Target Lock
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 space-y-8">
                <div className="space-y-4">
                    <label className="text-[11px] font-black text-primary uppercase tracking-[0.6em] px-4 italic flex items-center gap-4">
                        <Target className="size-4" /> Coordinate
                    </label>
                    <Input 
                        placeholder="IP / @User / Domain..."
                        className="w-full h-20 bg-black border-4 border-white/10 rounded-[2rem] text-2xl font-code text-primary focus:border-primary shadow-inner px-8 italic font-black"
                        value={target}
                        onChange={(e) => setTarget(e.target.value)}
                    />
                </div>

                <div className="grid grid-cols-1 gap-4">
                    <Button onClick={() => handleStrike('osint_ai')} disabled={loading || !target} variant="outline" className="h-20 bg-white/5 border-2 border-primary/20 hover:bg-primary hover:text-black transition-all rounded-2xl font-black uppercase italic tracking-widest text-lg group/btn">
                       <Atom className="size-6 mr-4 group-hover/btn:rotate-180 transition-all duration-1000" /> AI_ANALYSIS
                    </Button>
                    <Button onClick={() => handleStrike('ghost_track')} disabled={loading || !target} variant="outline" className="h-20 bg-white/5 border-2 border-primary/20 hover:bg-primary hover:text-black transition-all rounded-2xl font-black uppercase italic tracking-widest text-lg group/btn">
                       <Ghost className="size-6 mr-4 group-hover/btn:scale-125 transition-all" /> GHOST_TRACK
                    </Button>
                    <Button onClick={() => handleStrike('blackbird_scan')} disabled={loading || !target} variant="outline" className="h-20 bg-white/5 border-2 border-primary/20 hover:bg-primary hover:text-black transition-all rounded-2xl font-black uppercase italic tracking-widest text-lg group/btn">
                       <Bird className="size-6 mr-4 group-hover/btn:translate-y-[-5px] transition-all" /> BLACKBIRD_MESH
                    </Button>
                    <Button onClick={() => handleStrike('vuln_scan')} disabled={loading || !target} className="h-24 bg-primary text-black font-black uppercase tracking-[1em] rounded-[2rem] shadow-9xl border-4 border-black/20 group/zap">
                       {loading ? <Loader2 className="size-8 animate-spin" /> : <Zap className="size-8 mr-4 group-hover/zap:scale-125 transition-transform gold-glow" />}
                       EYE_PULSE
                    </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="kali-card border-white/10 bg-black/60 p-8 rounded-[2.5rem] border-2 shadow-inner text-center">
               <h4 className="text-[12px] font-black text-primary uppercase tracking-[1em] mb-4 italic flex items-center justify-center gap-4">
                  <SearchCode className="size-6 animate-pulse" /> OMNISCIENT_LINK
               </h4>
               <p className="text-muted-foreground italic text-lg leading-relaxed uppercase font-bold">
                  "All reconnaissance channels are self-contained and bound to the Soul Core."
               </p>
            </Card>
          </div>

          <div className="lg:col-span-3">
             {results ? (
               <Card className="kali-card border-primary/60 bg-black/99 rounded-[4rem] p-12 border-8 shadow-9xl flex flex-col group relative overflow-hidden h-full">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.04),transparent)] pointer-events-none" />
                  <CardHeader className="p-0 mb-10 border-b-8 border-white/5 pb-10 bg-primary/10 rounded-t-[3rem] px-10 py-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-10">
                            <div className="size-20 rounded-2xl bg-primary flex items-center justify-center border-4 border-black/30 shadow-2xl animate-neural">
                                <Scan className="size-10 text-black" />
                            </div>
                            <div>
                                <CardTitle className="text-4xl md:text-7xl text-white italic tracking-tighter uppercase font-black gold-glow leading-none">Intelligence Feed</CardTitle>
                                <CardDescription className="text-primary/70 font-black uppercase tracking-[0.5em] mt-3 italic text-[12px]">HIVE_RECON_v50.0 // DIRECT_ORBITAL_LINK</CardDescription>
                            </div>
                        </div>
                        <Badge className="bg-emerald-600/30 text-emerald-500 border-4 border-emerald-500/50 px-10 py-4 rounded-full font-black text-2xl animate-pulse tracking-[0.2em] uppercase italic shadow-2xl">DATA_SIPHONED</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-10 flex-1 relative overflow-hidden">
                    <div className="bg-black/99 p-12 rounded-[3.5rem] font-code text-xl md:text-3xl leading-[2] h-[750px] overflow-y-auto border-4 border-white/5 scrollbar-hide shadow-inner italic text-gray-100 whitespace-pre-wrap selection:bg-primary selection:text-black">
                       <pre className="text-gray-100 font-black whitespace-pre-wrap italic animate-in fade-in duration-1000">
                           {JSON.stringify(results, null, 2)}
                       </pre>
                    </div>
                  </CardContent>
                  <div className="p-10 border-t-8 border-white/5 mt-auto flex justify-between items-center opacity-30 text-[14px] font-black uppercase tracking-[2.5em] italic">
                    <span>EYE_SERIES_v50_GHAZALI_ROOT</span>
                    <Fingerprint className="size-12 text-primary animate-pulse" />
                  </div>
               </Card>
             ) : (
               <div className="h-full min-h-[850px] border-8 border-dashed border-primary/20 rounded-[10rem] flex flex-col items-center justify-center text-center p-24 bg-black/40 group relative overflow-hidden transition-all hover:bg-primary/5 shadow-9xl">
                  <div className="relative mb-20 group-hover:scale-110 transition-transform duration-1000">
                      <Radar className="size-72 text-primary/10 animate-pulse" />
                      <Eye className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-24 text-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 gold-glow" />
                  </div>
                  <h3 className="text-7xl md:text-[10rem] font-headline font-bold text-white mb-10 tracking-tighter italic drop-shadow-9xl uppercase leading-none opacity-20">Awaiting Lockdown</h3>
                  <p className="text-muted-foreground max-w-5xl mx-auto leading-relaxed text-3xl md:text-5xl font-black italic opacity-30">
                    "سيدي <span className="text-primary font-black gold-glow underline decoration-primary decoration-[8px] underline-offset-[20px] shadow-2xl uppercase tracking-widest">المعتصم بالله</span>، سلسلة 'Eye' بوضع السكون المادي؛ حدد الإحداثيات للاجتياح."
                  </p>
               </div>
             )}
          </div>
        </div>

        <div className="mt-auto relative z-10 flex justify-center items-center gap-48 opacity-40 text-[22px] font-black uppercase tracking-[6em] italic text-white drop-shadow-3xl pb-12">
            <span>AL-MUIZZ RECON CENTER v50.0</span>
            <div className="size-10 rounded-full bg-white animate-pulse shadow-[0_0_100px_white]" />
            <span>SINGULARITY_OF_VISION_2026</span>
        </div>
      </main>
    </div>
  )
}
