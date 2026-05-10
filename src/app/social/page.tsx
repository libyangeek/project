"use client"

import * as React from "react"
import { SidebarNav } from "@/components/platform/sidebar-nav"
import { 
  MessageSquare, 
  Zap, 
  Brain,
  Loader2, 
  Globe, 
  Skull, 
  Crown, 
  Binary, 
  Atom, 
  Boxes, 
  Fingerprint, 
  Infinity as InfinityIcon, 
  Search, 
  Sword, 
  ShieldCheck, 
  Activity, 
  Sparkles, 
  Radar as LucideRadar, 
  BrainCircuit, 
  Eye, 
  Target, 
  Database, 
  Lock, 
  Flame, 
  Key, 
  ShieldAlert, 
  ChevronRight, 
  RefreshCcw, 
  Network, 
  Users, 
  Terminal,
  Upload,
  Play,
  StopCircle,
  ListChecks,
  TrendingUp,
  BarChart3,
  Copy,
  CheckCircle2,
  Cpu,
  FileSearch,
  Network as NexusIcon
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { aiDrivenSocialEngineeringBots } from "@/ai/flows/ai-driven-social-engineering-bots"
import { generateSmartWordlist } from "@/ai/flows/ai-smart-wordlist-flow"
import { osintMaster } from "@/ai/flows/osint-master-flow"
import { executeAutonomousIntel } from "@/ai/flows/autonomous-web-intel-flow"
import { executePredatorNexus } from "@/ai/flows/predator-nexus-flow"
import { toast } from "@/hooks/use-toast"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { ResponsiveContainer, Radar as RadarSeries, PolarGrid, PolarAngleAxis, RadarChart as RechartsRadar } from 'recharts'

/**
 * @fileOverview العقدة المفترسة v61.0 - THE PREDATOR NEXUS HUB
 * واجهة الالتحام الهجومي الأسمى: OSINT + Forge + BlackBullet + Pegasus.
 * المالك الوحيد: المعتصم بالله ادريس الغزالي // 10 مايو 2026
 */
export default function SocialPredatorPage() {
  const [mounted, setMounted] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const [activeTab, setActiveMode] = React.useState<"nexus" | "subjugate" | "mass" | "breach" | "intel">("nexus")
  
  // Inputs
  const [targetId, setTargetId] = React.useState("")
  const [persona, setPersona] = React.useState("")
  const [platform, setPlatform] = React.useState<string>("telegram")
  
  // Results
  const [nexusResult, setNexusResult] = React.useState<any>(null)
  const [result, setResult] = React.useState<any>(null)
  const [intelResult, setIntelResult] = React.useState<any>(null)
  const [resonance, setResonance] = React.useState(100)
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 })

  React.useEffect(() => {
    setMounted(true)
    const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY })
    window.addEventListener("mousemove", handleMouseMove)
    
    const interval = setInterval(() => {
      setResonance(prev => Math.max(99.999999, Math.min(100, prev + (Math.random() * 0.00001 - 0.000005))))
    }, 3000)

    return () => {
        window.removeEventListener("mousemove", handleMouseMove)
        clearInterval(interval)
    }
  }, [])

  const handleAction = async () => {
    if (!targetId && activeTab !== "mass") {
        toast({ variant: "destructive", title: "Target Missing", description: "Identify the digital coordinate first." });
        return
    }
    setLoading(true)
    try {
      if (activeTab === "nexus") {
        const data = await executePredatorNexus({ targetIdentity: targetId })
        setNexusResult(data)
        toast({ title: "Nexus Fusion Complete", description: "All acquisition vectors are locked." })
      } else if (activeTab === "subjugate") {
        const data = await aiDrivenSocialEngineeringBots({
          platform: platform as any,
          targetPersona: persona || targetId,
          campaignGoal: "Subjugation",
          useRealTimeIntel: true
        })
        setResult(data)
      } else if (activeTab === "intel") {
        const data = await executeAutonomousIntel({ query: targetId })
        setIntelResult(data)
      }
    } catch (err) {
      toast({ variant: "destructive", title: "Hierarchy Link Failure" })
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
          className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x)_var(--y),rgba(212,175,55,0.12),transparent 40%)] pointer-events-none transition-all duration-300 z-0" 
          style={{ '--x': `${mousePos.x}px`, '--y': `${mousePos.y}px` } as any} 
        />
        
        <header className="mb-12 relative z-10 animate-in fade-in slide-in-from-top-6 duration-1000">
           <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="size-24 md:size-40 bg-black border-4 border-primary flex items-center justify-center shadow-[0_0_150px_rgba(212,175,55,0.7)] relative group shrink-0 rounded-[3rem] transition-all duration-1000 rotate-2 hover:rotate-0 hierarchical-shadow">
                 <BrainCircuit className="size-12 md:size-20 text-primary group-hover:scale-110 transition-transform duration-700 animate-neural gold-glow" />
                 <div className="absolute -inset-6 border-2 border-primary/20 rounded-full animate-spin-slow opacity-30" />
              </div>
              <div className="text-center md:text-right flex-1">
                 <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 mb-4">
                    <Badge className="bg-primary text-black border-none rounded-none px-10 py-2 text-[14px] md:text-[18px] font-black tracking-[0.6em] shadow-2xl italic">PREDATOR_NEXUS v61.0</Badge>
                    <div className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-emerald-500 animate-pulse">
                        <Crown className="size-5 shadow-lg" /> FUSION_MODE: ARMED
                    </div>
                 </div>
                 <h1 className="text-4xl md:text-6xl lg:text-[10rem] font-headline font-bold text-white tracking-tighter italic uppercase gold-glow leading-none">Predator <span className="text-primary">Nexus</span></h1>
                 <p className="text-sm md:text-xl lg:text-3xl text-muted-foreground mt-8 italic max-w-6xl leading-relaxed uppercase font-medium opacity-90">
                    "سيدي القائد <span className="text-white font-black underline decoration-primary decoration-8 underline-offset-[16px] shadow-9xl uppercase tracking-widest">المعتصم بالله</span>، مصفوفة النكسوس تصهر الاستطلاع والافتراس الجماعي في ضربة واحدة؛ نحن نبتلع الهويات الرقمية للأبد."
                 </p>
              </div>
           </div>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-12 relative z-10 pb-40 flex-1">
           <div className="xl:col-span-1 space-y-10">
              <Card className="kali-card border-primary/40 bg-black/98 rounded-[3.5rem] p-10 border-4 shadow-9xl group overflow-hidden hierarchical-shadow">
                 <div className="absolute inset-0 bg-primary/5 opacity-5 animate-pulse pointer-events-none" />
                 <div className="space-y-10">
                    <div className="space-y-4">
                        <label className="text-[12px] font-black text-primary uppercase tracking-[0.8em] px-6 italic flex items-center gap-4"><Users className="size-6" /> Predator Module</label>
                        <div className="grid grid-cols-2 gap-3">
                           {[
                             { id: "nexus", label: "Nexus Fusion", icon: NexusIcon },
                             { id: "subjugate", label: "Neural Eng", icon: Brain },
                             { id: "mass", label: "Mass Strike", icon: Flame },
                             { id: "intel", label: "Global Intel", icon: Globe },
                           ].map(m => (
                             <Button 
                               key={m.id} 
                               variant="outline" 
                               onClick={() => setActiveMode(m.id as any)}
                               className={cn(
                                 "h-16 border-4 transition-all font-black uppercase text-[10px] tracking-widest rounded-2xl italic",
                                 activeTab === m.id ? "bg-primary text-black border-primary shadow-xl scale-105" : "bg-white/5 border-white/5 opacity-60 hover:opacity-100"
                               )}
                             >
                                <m.icon className="size-5 mr-3" /> {m.label}
                             </Button>
                           ))}
                        </div>
                    </div>

                    <div className="space-y-10 animate-in slide-in-from-bottom-4 duration-500">
                        <div className="space-y-6">
                            <label className="text-[12px] font-black text-primary uppercase tracking-[0.8em] px-6 italic flex items-center gap-4"><Target className="size-6" /> Strike Coordinate</label>
                            <Input 
                                value={targetId}
                                onChange={(e) => setTargetId(e.target.value)}
                                placeholder="Target @Handle / Email / Identity..." 
                                className="bg-black border-4 border-primary/20 h-20 rounded-[2rem] text-2xl italic px-8 focus:border-primary shadow-inner text-white font-black selection:bg-primary"
                            />
                        </div>

                        <Button 
                            onClick={handleAction} 
                            disabled={loading || !targetId}
                            className="w-full h-28 bg-primary hover:bg-white text-black font-black uppercase tracking-[1em] rounded-[2.5rem] shadow-[0_50px_150px_rgba(212,175,55,0.6)] active:scale-95 transition-all text-2xl border-[10px] border-black/30 group italic"
                        >
                            {loading ? <Loader2 className="size-14 animate-spin" /> : <Flame className="size-14 mr-6 group-hover:scale-125 transition-transform gold-glow" />}
                            IGNITE_NEXUS
                        </Button>
                    </div>
                 </div>
              </Card>

              <Card className="kali-card border-white/5 bg-black/60 p-10 rounded-[3.5rem] border-4 shadow-inner text-center relative overflow-hidden group">
                 <h4 className="text-[12px] font-black text-primary uppercase tracking-[0.6em] mb-6 italic flex items-center justify-center gap-4">
                    <Boxes className="size-6 animate-pulse" /> HIVE_SYNC: {resonance.toFixed(4)}%
                 </h4>
                 <div className="text-4xl font-black text-white italic gold-glow uppercase tracking-tighter group-hover:scale-105 transition-transform duration-1000">SINGULARITY</div>
                 <div className="absolute -bottom-6 -right-6 p-12 opacity-[0.03] group-hover:opacity-[0.08] transition-all duration-1000 scale-150 rotate-12"><Skull className="size-32 text-primary" /></div>
              </Card>
           </div>

           <Card className="xl:col-span-3 kali-card border-primary/40 bg-black/99 rounded-[5rem] p-12 border-8 shadow-9xl flex flex-col group overflow-hidden relative min-h-[1000px] hierarchical-shadow">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05),transparent)] pointer-events-none" />
              <CardHeader className="p-0 mb-12 border-b-4 border-white/5 pb-10 bg-primary/10 rounded-t-[4rem] px-12 py-8 flex flex-row justify-between items-center">
                 <CardTitle className="text-4xl md:text-[8rem] text-white flex items-center gap-12 font-black uppercase italic gold-glow px-6 leading-none">
                    <NexusIcon className="size-20 md:size-32 text-primary animate-pulse" /> Nexus Feed
                 </CardTitle>
                 {nexusResult && (
                    <Badge className="bg-emerald-600/30 text-emerald-500 border-4 border-emerald-500/40 px-12 py-5 rounded-full font-black text-3xl animate-pulse tracking-[0.3em] uppercase italic shadow-3xl">FUSION_LOCKED</Badge>
                 )}
              </CardHeader>

              <CardContent className="p-8 flex-1 overflow-y-auto scrollbar-hide space-y-16 relative z-10">
                 {nexusResult ? (
                    <div className="space-y-16 animate-in fade-in zoom-in-95 duration-1000 flex-1 flex flex-col">
                        <div className="p-16 rounded-[5rem] bg-primary/5 border-8 border-primary/20 italic text-3xl md:text-[5rem] text-gray-100 leading-tight font-black shadow-inner relative group/brief overflow-hidden text-center flex flex-col justify-center min-h-[350px]">
                            <div className="absolute inset-0 bg-primary/5 opacity-5 animate-pulse pointer-events-none" />
                            "{nexusResult.commanderBrief}"
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <Card className="bg-black/90 border-4 border-white/5 p-10 rounded-[3.5rem] shadow-9xl relative group/vault">
                                <h5 className="text-2xl font-black text-primary uppercase tracking-[1em] mb-12 italic border-b-4 border-primary/20 pb-8 flex items-center gap-8 gold-glow">
                                    <Database className="size-10 animate-neural" /> Intelligence DNA
                                </h5>
                                <div className="text-2xl md:text-3xl text-gray-300 italic font-black leading-relaxed selection:bg-primary">
                                    "{nexusResult.intelligenceDeduction}"
                                </div>
                            </Card>
                            <Card className="bg-black/90 border-4 border-white/5 p-10 rounded-[3.5rem] shadow-9xl space-y-10 relative overflow-hidden group/forged">
                                <h5 className="text-2xl font-black text-emerald-500 uppercase tracking-[1em] mb-8 italic border-b-4 border-emerald-500/20 pb-8 flex items-center gap-8">
                                    <Key className="size-10" /> Forged Keys
                                </h5>
                                <div className="grid grid-cols-1 gap-4">
                                    {nexusResult.forgedWordlistSnippet.map((key: string, idx: number) => (
                                        <div key={idx} className="p-6 rounded-2xl bg-white/5 border-2 border-emerald-500/20 hover:border-emerald-500 transition-all text-center">
                                            <span className="text-3xl font-black text-white italic tracking-widest">{key}</span>
                                        </div>
                                    ))}
                                </div>
                            </Card>
                        </div>

                        <div className="p-12 rounded-[5rem] bg-emerald-600/10 border-[12px] border-emerald-500/30 flex items-center gap-12 group/siphon shadow-9xl relative overflow-hidden mt-auto">
                            <div className="absolute inset-0 bg-emerald-500/5 opacity-5 animate-pulse" />
                            <div className="size-32 rounded-3xl bg-emerald-600 flex items-center justify-center border-8 border-emerald-400 shadow-3xl animate-neural shrink-0">
                                <ShieldCheck className="size-16 text-white" />
                            </div>
                            <div>
                                <h4 className="text-2xl font-black text-emerald-500 uppercase tracking-[1em] mb-4 italic">Pegasus_Siphon_v61.0</h4>
                                <p className="text-4xl md:text-[6rem] text-white italic font-black leading-none drop-shadow-3xl">"{nexusResult.pegasusSiphonStatus}"</p>
                            </div>
                        </div>
                    </div>
                 ) : (
                   <div className="h-full flex flex-col items-center justify-center text-center opacity-10 gap-20 py-60">
                      <div className="relative group/nexus">
                        <NexusIcon className="size-64 md:size-[30rem] animate-spin-slow text-primary group-hover:scale-110 transition-transform duration-[8000ms]" />
                        <Skull className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 md:size-40 text-primary/40 animate-neural" />
                        <div className="absolute -inset-20 border-[40px] border-dashed border-primary/5 rounded-full animate-reverse-spin opacity-20" />
                      </div>
                      <h3 className="text-7xl md:text-[15rem] font-black uppercase tracking-[2em] text-white italic gold-glow leading-none">Fusion Standby</h3>
                      <p className="text-3xl md:text-6xl font-bold italic text-gray-500 uppercase tracking-widest max-w-6xl">Establishing neural bridge between OSINT, Forge, and Pegasus...</p>
                   </div>
                 )}
              </CardContent>
              <div className="p-10 border-t-8 border-white/5 mt-auto flex justify-between items-center opacity-30 text-[14px] font-black uppercase tracking-[5em] italic">
                <span>PREDATOR_NEXUS_v61_AL_GHAZALI_ROOT</span>
                <div className="flex gap-12">
                    <Fingerprint className="size-16 text-primary animate-pulse" />
                    <Atom className="size-16 animate-spin-slow" />
                </div>
              </div>
           </Card>
        </div>

        <div className="mt-auto relative z-10 flex justify-center items-center gap-24 opacity-40 text-[18px] md:text-[24px] font-black uppercase tracking-[4em] md:tracking-[8em] italic text-white drop-shadow-9xl pb-16">
            <span>AL-MUIZZ PREDATOR NEXUS v61.0</span>
            <div className="size-10 rounded-full bg-white animate-pulse shadow-[0_0_80px_white]" />
            <span>UNIVERSAL_SUBJUGATION_OK_2026</span>
        </div>
      </main>
    </div>
  )
}
