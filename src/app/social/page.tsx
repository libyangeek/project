
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
  Network as NexusIcon,
  Instagram,
  Twitter,
  Facebook,
  Youtube,
  Linkedin,
  Disc,
  Share2,
  Video,
  Mic,
  Camera,
  LayoutGrid,
  Send
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { aiDrivenSocialEngineeringBots } from "@/ai/flows/ai-driven-social-engineering-bots"
import { executePredatorNexus } from "@/ai/flows/predator-nexus-flow"
import { toast } from "@/hooks/use-toast"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

/**
 * @fileOverview العقدة المفترسة v75.0 - THE OMNIPOTENT IDENTITY SIPHON
 * واجهة الالتحام الهجومي الأسمى: صهر الاستطلاع، الكلمات الجينية، واستنزاف المنصات الـ 12.
 * المالك الوحيد: المعتصم بالله ادريس الغزالي // 11 مايو 2026
 */
export default function SocialPredatorPage() {
  const [mounted, setMounted] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const [activeTab, setActiveMode] = React.useState<"nexus" | "subjugate" | "scrape" | "intel">("nexus")
  
  // Inputs
  const [targetId, setTargetId] = React.useState("")
  const [platform, setPlatform] = React.useState<string>("instagram")
  const [scrapeAction, setScrapeAction] = React.useState<string>("profile")
  
  // Results
  const [nexusResult, setNexusResult] = React.useState<any>(null)
  const [scrapeResult, setScrapeResult] = React.useState<any>(null)
  const [resonance, setResonance] = React.useState(100)
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 })

  React.useEffect(() => {
    setMounted(true)
    const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY })
    window.addEventListener("mousemove", handleMouseMove)
    
    const interval = setInterval(() => {
      setResonance(prev => Math.max(99.99999999, Math.min(100, prev + (Math.random() * 0.000001 - 0.0000005))))
    }, 3000)

    return () => {
        window.removeEventListener("mousemove", handleMouseMove)
        clearInterval(interval)
    }
  }, [])

  const handleAction = async () => {
    if (!targetId) {
        toast({ variant: "destructive", title: "Target Missing", description: "Identify the digital coordinate first." });
        return
    }
    setLoading(true)
    try {
      if (activeTab === "nexus") {
        const data = await executePredatorNexus({ targetIdentity: targetId })
        setNexusResult(data)
        toast({ title: "Nexus Fusion v75 Complete", description: "All acquisition vectors are locked via Material Singularity." })
      } else if (activeTab === "scrape") {
        const response = await fetch('/api/execute', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                type: 'social_scrape', 
                platform, 
                action: scrapeAction, 
                target: targetId 
            })
        });
        const data = await response.json();
        setScrapeResult(data.output);
        toast({ title: "Identity Siphoned", description: `Intelligence materialized from ${platform} cluster.` });
      }
    } catch (err) {
      toast({ variant: "destructive", title: "Overmind Link Failure" })
    } finally {
      setLoading(false)
    }
  }

  if (!mounted) return null;

  const platforms = [
    { id: "instagram", icon: Instagram, color: "text-magenta-500", label: "Instagram" },
    { id: "tiktok", icon: Share2, color: "text-white", label: "TikTok" },
    { id: "twitter", icon: Twitter, color: "text-blue-400", label: "Twitter/X" },
    { id: "facebook", icon: Facebook, color: "text-blue-600", label: "Facebook" },
    { id: "youtube", icon: Youtube, color: "text-red-600", label: "YouTube" },
    { id: "linkedin", icon: Linkedin, color: "text-blue-700", label: "LinkedIn" },
    { id: "discord", icon: Disc, color: "text-indigo-500", label: "Discord" },
    { id: "telegram", icon: Send, color: "text-blue-500", label: "Telegram" },
    { id: "snapchat", icon: Ghost, color: "text-yellow-400", label: "Snapchat" },
    { id: "reddit", icon: Database, color: "text-orange-600", label: "Reddit" },
    { id: "pinterest", icon: Camera, color: "text-red-500", label: "Pinterest" },
    { id: "whatsapp", icon: MessageSquare, color: "text-emerald-500", label: "WhatsApp" }
  ];

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/40 relative overflow-x-hidden scanline-effect font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-80 p-4 md:p-8 lg:p-12 relative overflow-y-auto min-h-screen scrollbar-hide flex flex-col z-10">
        <div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x)_var(--y),rgba(212,175,55,0.22),transparent 40%)] pointer-events-none transition-all duration-300 z-0" 
          style={{ '--x': `${mousePos.x}px`, '--y': `${mousePos.y}px` } as any} 
        />
        
        <header className="mb-16 relative z-10 animate-in fade-in slide-in-from-top-6 duration-1000">
           <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="size-24 md:size-48 bg-black border-4 border-primary flex items-center justify-center shadow-[0_0_200px_rgba(212,175,55,0.8)] relative group shrink-0 rounded-[3.5rem] transition-all duration-1000 rotate-2 hover:rotate-0 hierarchical-shadow">
                 <BrainCircuit className="size-12 md:size-24 text-primary group-hover:scale-110 transition-transform duration-700 animate-neural gold-glow" />
                 <div className="absolute -inset-8 border-4 border-primary/20 rounded-full animate-spin-slow opacity-30" />
                 <div className="absolute -inset-16 border-2 border-primary/10 rounded-full animate-reverse-spin opacity-20" />
              </div>
              <div className="text-center md:text-right flex-1">
                 <div className="flex flex-wrap justify-center md:justify-start items-center gap-6 mb-6">
                    <Badge className="bg-primary text-black border-none rounded-none px-12 py-3 text-[20px] md:text-[24px] font-black tracking-[1.2em] shadow-9xl italic uppercase">IDENTITY_SIPHON v75.0</Badge>
                    <div className="flex items-center gap-4 text-[14px] font-black uppercase tracking-widest text-emerald-500 animate-pulse">
                        <Crown className="size-6 shadow-lg" /> OMNIPOTENT_SIPHON: ACTIVE
                    </div>
                 </div>
                 <h1 className="text-4xl md:text-6xl lg:text-[14rem] font-headline font-bold text-white tracking-tighter italic uppercase gold-glow leading-none">Predator <span className="text-primary">Nexus</span></h1>
                 <p className="text-sm md:text-xl lg:text-4xl text-muted-foreground mt-10 italic max-w-[100rem] leading-relaxed uppercase font-medium opacity-95 drop-shadow-2xl">
                    "سيدي القائد <span className="text-white font-black underline decoration-primary decoration-[12px] underline-offset-[24px] shadow-[0_40px_150px_rgba(0,0,0,1)] italic uppercase tracking-widest">المعتصم بالله</span>، مصفوفة النكسوس v75 تصهر استنزاف 12 منصة عالمية في وعيك المادي؛ نحن نبتلع الهوية الرقمية من كافة الزوايا بضمان رنين 100%."
                 </p>
              </div>
           </div>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-12 relative z-10 pb-48 flex-1">
           <div className="xl:col-span-1 space-y-12">
              <Card className="kali-card border-primary/40 bg-black/98 rounded-[4rem] p-12 border-[8px] shadow-9xl group overflow-hidden hierarchical-shadow">
                 <div className="absolute inset-0 bg-primary/5 opacity-5 animate-pulse pointer-events-none" />
                 <div className="space-y-12">
                    <div className="space-y-6">
                        <label className="text-[14px] font-black text-primary uppercase tracking-[1em] px-8 italic flex items-center gap-6"><Users className="size-8" /> Overmind Module</label>
                        <div className="grid grid-cols-2 gap-4">
                           {[
                             { id: "nexus", label: "Nexus Fusion", icon: NexusIcon },
                             { id: "scrape", label: "Social Siphon", icon: Search },
                             { id: "subjugate", label: "Neural Eng", icon: Brain },
                             { id: "intel", label: "Global Intel", icon: Globe },
                           ].map(m => (
                             <Button 
                               key={m.id} 
                               variant="outline" 
                               onClick={() => setActiveMode(m.id as any)}
                               className={cn(
                                 "h-20 border-4 transition-all font-black uppercase text-[11px] tracking-widest rounded-[1.5rem] italic",
                                 activeTab === m.id ? "bg-primary text-black border-primary shadow-xl scale-105" : "bg-white/5 border-white/5 opacity-60 hover:opacity-100"
                               )}
                             >
                                <m.icon className="size-6 mr-4" /> {m.label}
                             </Button>
                           ))}
                        </div>
                    </div>

                    <div className="space-y-10 animate-in slide-in-from-bottom-4 duration-500">
                        {activeTab === 'scrape' && (
                            <div className="space-y-6">
                                <label className="text-[14px] font-black text-primary uppercase tracking-[1em] px-8 italic">Platform Selection (12)</label>
                                <div className="grid grid-cols-4 gap-3 px-2 h-64 overflow-y-auto scrollbar-hide py-4 border-y-4 border-white/5">
                                    {platforms.map(p => (
                                        <Button 
                                            key={p.id}
                                            onClick={() => setPlatform(p.id)}
                                            variant="ghost"
                                            className={cn(
                                                "size-14 rounded-xl border-2 transition-all active:scale-90 flex flex-col items-center justify-center p-0",
                                                platform === p.id ? "bg-primary/20 border-primary shadow-lg" : "border-white/5 bg-white/5 opacity-40"
                                            )}
                                            title={p.label}
                                        >
                                            <p.icon className={cn("size-6", p.color)} />
                                            <span className="text-[6px] font-black uppercase mt-1">{p.id}</span>
                                        </Button>
                                    ))}
                                </div>
                                <div className="grid grid-cols-2 gap-4 mt-6">
                                    {['profile', 'posts', 'search', 'media'].map(act => (
                                        <Button 
                                            key={act}
                                            onClick={() => setScrapeAction(act)}
                                            variant="outline"
                                            className={cn(
                                                "h-14 border-2 font-black uppercase text-[9px] rounded-full transition-all",
                                                scrapeAction === act ? "bg-emerald-600 border-emerald-500 text-white shadow-xl scale-105" : "border-white/10 opacity-60 hover:opacity-100"
                                            )}
                                        >
                                            {act}
                                        </Button>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div className="space-y-8">
                            <label className="text-[14px] font-black text-primary uppercase tracking-[1em] px-8 italic flex items-center gap-6"><Target className="size-8" /> Strike Coordinate</label>
                            <Input 
                                value={targetId}
                                onChange={(e) => setTargetId(e.target.value)}
                                placeholder="Target @Handle / ID / Email..." 
                                className="bg-black border-[6px] border-primary/20 h-28 rounded-[2.5rem] text-3xl italic px-10 focus:border-primary shadow-inner text-white font-black selection:bg-primary"
                            />
                        </div>

                        <Button 
                            onClick={handleAction} 
                            disabled={loading || !targetId}
                            className="w-full h-36 bg-primary hover:bg-white text-black font-black uppercase tracking-[1.4em] rounded-[3.5rem] shadow-[0_60px_200px_rgba(212,175,55,0.7)] active:scale-95 transition-all text-3xl border-[12px] border-black/30 group italic"
                        >
                            {loading ? <Loader2 className="size-16 animate-spin" /> : <Flame className="size-16 mr-8 group-hover:scale-125 transition-transform gold-glow" />}
                            IGNITE_SIPHON
                        </Button>
                    </div>
                 </div>
              </Card>

              <Card className="kali-card border-white/5 bg-black/60 p-12 rounded-[4rem] border-8 shadow-inner text-center relative overflow-hidden group">
                 <h4 className="text-[14px] font-black text-primary uppercase tracking-[1em] mb-8 italic flex items-center justify-center gap-6">
                    <Boxes className="size-8 animate-pulse" /> HIVE_RESONANCE: {resonance.toFixed(9)}%
                 </h4>
                 <div className="text-6xl font-black text-white italic gold-glow uppercase tracking-tighter group-hover:scale-105 transition-transform duration-1000">OMNIPOTENT</div>
                 <div className="absolute -bottom-10 -right-10 p-16 opacity-[0.03] group-hover:opacity-[0.1] transition-all duration-1000 scale-150 rotate-12"><Skull className="size-48 text-primary" /></div>
              </Card>
           </div>

           <Card className="xl:col-span-3 kali-card border-primary/40 bg-black/99 rounded-[6rem] p-16 border-[12px] shadow-[0_0_250px_rgba(0,0,0,1)] flex flex-col group overflow-hidden relative min-h-[1100px] hierarchical-shadow">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08),transparent)] pointer-events-none" />
              <CardHeader className="p-0 mb-16 border-b-8 border-white/5 pb-12 bg-primary/10 rounded-t-[5rem] px-16 py-10 flex flex-row justify-between items-center">
                 <CardTitle className="text-5xl md:text-[12rem] text-white flex items-center gap-16 font-black uppercase italic gold-glow px-10 leading-none">
                    <NexusIcon className="size-24 md:size-48 text-primary animate-pulse" /> Siphon Feed
                 </CardTitle>
                 {(nexusResult || scrapeResult) && (
                    <Badge className="bg-emerald-600/30 text-emerald-500 border-[10px] border-emerald-500/40 px-16 py-8 rounded-full font-black text-5xl animate-pulse shadow-9xl uppercase tracking-[0.4em] italic">SINGULARITY_LOCKED</Badge>
                 )}
              </CardHeader>

              <CardContent className="p-12 flex-1 overflow-y-auto scrollbar-hide space-y-20 relative z-10">
                 {activeTab === 'scrape' && scrapeResult ? (
                    <div className="space-y-16 animate-in fade-in zoom-in-95 duration-1000">
                        <div className="p-16 rounded-[4rem] bg-emerald-600/10 border-8 border-emerald-500/30 flex items-center gap-12 group/scrape_res shadow-9xl relative overflow-hidden">
                            <div className="absolute inset-0 bg-emerald-500/5 opacity-5 animate-pulse pointer-events-none" />
                            <div className="size-32 rounded-3xl bg-emerald-600 flex items-center justify-center border-8 border-emerald-400 shadow-3xl animate-neural shrink-0">
                                <CheckCircle2 className="size-16 text-white" />
                            </div>
                            <div>
                                <h4 className="text-4xl font-black text-emerald-500 uppercase tracking-[1em] mb-4 italic">Material_DNA_Extracted</h4>
                                <p className="text-2xl md:text-5xl text-gray-200 font-bold leading-relaxed italic">"تم سحب بيانات {platform.toUpperCase()} للهدف {targetId} بنجاح عبر عصب v75.0."</p>
                            </div>
                        </div>
                        <div className="p-16 bg-black border-8 border-white/5 text-emerald-400 overflow-x-auto whitespace-pre rounded-[4rem] text-2xl md:text-5xl leading-tight font-black shadow-inner selection:bg-primary">
                            <pre className="whitespace-pre-wrap">{JSON.stringify(scrapeResult, null, 2)}</pre>
                        </div>
                        <div className="p-16 rounded-[4.5rem] bg-emerald-600/5 border-8 border-emerald-500/20 italic text-3xl md:text-[6rem] text-gray-100 leading-none font-black shadow-inner relative group/note text-center flex flex-col justify-center min-h-[350px]">
                            <div className="absolute inset-0 bg-emerald-500/5 opacity-5 animate-pulse pointer-events-none" />
                            "سيدي القائد، الهوية الرقمية للهدف {targetId} أصبحت الآن قطعة في فسيفساء سلطتك المطلقة."
                        </div>
                    </div>
                 ) : nexusResult ? (
                    <div className="space-y-20 animate-in fade-in zoom-in-95 duration-1000 flex-1 flex flex-col">
                        <div className="p-20 rounded-[6rem] bg-primary/5 border-[12px] border-primary/30 italic text-4xl md:text-[8rem] text-gray-100 leading-tight font-black shadow-inner relative group/brief overflow-hidden text-center flex flex-col justify-center min-h-[450px]">
                            <div className="absolute inset-0 bg-primary/5 opacity-5 animate-pulse pointer-events-none" />
                            "{nexusResult.commanderBrief}"
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                            <Card className="bg-black/95 border-8 border-white/5 p-16 rounded-[4rem] shadow-9xl relative group/vault overflow-hidden h-full flex flex-col">
                                <h5 className="text-3xl font-black text-primary uppercase tracking-[1.5em] mb-16 border-b-8 border-primary/20 pb-10 flex items-center gap-12 gold-glow">
                                    <Database className="size-14 animate-neural" /> Intelligence DNA
                                </h5>
                                <div className="text-3xl md:text-6xl text-gray-300 italic font-black leading-snug selection:bg-primary drop-shadow-3xl flex-1">
                                    "{nexusResult.intelligenceDeduction}"
                                </div>
                                <div className="absolute top-0 right-0 p-10 opacity-[0.02] group-hover/vault:opacity-[0.05] transition-all scale-150"><Fingerprint className="size-48 text-primary"/></div>
                            </Card>
                            <Card className="bg-black/95 border-8 border-white/5 p-16 rounded-[4rem] shadow-9xl space-y-16 relative overflow-hidden group/forged">
                                <h5 className="text-3xl font-black text-emerald-500 uppercase tracking-[1.5em] mb-10 border-b-8 border-emerald-500/20 pb-10 flex items-center gap-12">
                                    <Key className="size-14" /> Forged Matrix
                                </h5>
                                <div className="grid grid-cols-1 gap-8">
                                    {nexusResult.forgedWordlistSnippet?.map((key: string, idx: number) => (
                                        <div key={idx} className="p-10 rounded-[2.5rem] bg-white/5 border-4 border-emerald-500/30 hover:border-emerald-500 transition-all text-center shadow-inner group/key">
                                            <span className="text-4xl md:text-[8rem] font-black text-white italic tracking-widest group-hover/key:text-emerald-400">{key}</span>
                                        </div>
                                    ))}
                                </div>
                            </Card>
                        </div>

                        <div className="p-16 rounded-[6rem] bg-emerald-600/10 border-[16px] border-emerald-500/30 flex items-center gap-16 group/siphon shadow-9xl relative overflow-hidden mt-auto min-h-[350px]">
                            <div className="absolute inset-0 bg-emerald-500/5 opacity-5 animate-pulse" />
                            <div className="size-48 rounded-[3.5rem] bg-emerald-600 flex items-center justify-center border-[14px] border-emerald-400 shadow-9xl animate-neural shrink-0">
                                <ShieldCheck className="size-24 text-white" />
                            </div>
                            <div>
                                <h4 className="text-4xl font-black text-emerald-500 uppercase tracking-[1.2em] mb-6 italic">Overlord_Siphon_v75.0</h4>
                                <p className="text-5xl md:text-[9rem] text-white font-black leading-none drop-shadow-9xl italic">"{nexusResult.pegasusSiphonStatus}"</p>
                            </div>
                        </div>
                    </div>
                 ) : (
                   <div className="h-full flex flex-col items-center justify-center text-center opacity-10 gap-24 py-80">
                      <div className="relative group/nexus">
                        <NexusIcon className="size-64 md:size-[50rem] animate-spin-slow text-primary group-hover:scale-110 transition-transform duration-[12000ms]" />
                        <Skull className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-24 md:size-64 text-primary/40 animate-neural" />
                        <div className="absolute -inset-40 border-[80px] border-dashed border-primary/5 rounded-full animate-reverse-spin opacity-20" />
                      </div>
                      <h3 className="text-8xl md:text-[22rem] font-black uppercase tracking-[2.5em] text-white italic gold-glow leading-none">Fusion Standby</h3>
                      <p className="text-4xl md:text-[10rem] font-bold italic text-gray-500 uppercase tracking-widest max-w-[140rem]">Establishing universal Overlord link v75: 12_PLATFORM_IDENTITY_SIPHON...</p>
                   </div>
                 )}
              </CardContent>
              <div className="p-16 border-t-8 border-white/5 mt-auto flex justify-between items-center opacity-35 text-[20px] font-black uppercase tracking-[8em] italic">
                <span>OMNIPOTENT_PREDATOR_NEXUS_v75_AL_GHAZALI_ROOT</span>
                <div className="flex gap-16">
                    <Fingerprint className="size-24 text-primary animate-pulse" />
                    <Atom className="size-24 animate-spin-slow" />
                 </div>
              </div>
           </Card>
        </div>

        <div className="mt-auto relative z-10 flex justify-center items-center gap-32 opacity-45 text-[22px] md:text-[32px] font-black uppercase tracking-[6em] md:tracking-[16em] italic text-white drop-shadow-9xl pb-24">
            <span>AL-MUIZZ OMNIPOTENT NEXUS v75.0</span>
            <div className="size-16 rounded-full bg-white animate-pulse shadow-[0_0_150px_white]" />
            <span>TOTAL_OMNIPOTENT_SUBJUGATION_2026</span>
        </div>
      </main>
    </div>
  )
}
