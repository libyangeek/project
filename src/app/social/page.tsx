"use client"

import * as React from "react"
import { SidebarNav } from "@/components/platform/sidebar-nav"
import { 
  MessageSquare, 
  Zap, 
  Brain,
  Copy,
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
  Radar,
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
  Terminal
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { aiDrivenSocialEngineeringBots } from "@/ai/flows/ai-driven-social-engineering-bots"
import { generateSmartWordlist } from "@/ai/flows/ai-smart-wordlist-flow"
import { osintMaster } from "@/ai/flows/osint-master-flow"
import { toast } from "@/hooks/use-toast"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { ResponsiveContainer, Radar as RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, RadarChart as RechartsRadar } from 'recharts'
import Link from "next/link"

/**
 * @fileOverview العقدة المفترسة للتواصل v53.8 - THE SOCIAL PREDATOR: HIERARCHICAL SINGULARITY
 * نواة مختصة في اختراق السوشيل ميديا، تضم البيانات المسربة، بوتات الإقناع، ومصنع الـ DNA الرقمي.
 * المالك الوحيد: المعتصم بالله ادريس الغزالي // 6 مايو 2026
 */
export default function SocialPredatorPage() {
  const [mounted, setMounted] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const [activeTab, setActiveMode] = React.useState<"subjugate" | "wordlist" | "breach" | "recon">("subjugate")
  
  // Inputs
  const [targetId, setTargetId] = React.useState("")
  const [persona, setPersona] = React.useState("")
  const [goal, setGoal] = React.useState("")
  const [platform, setPlatform] = React.useState<string>("telegram")
  
  // Results
  const [result, setResult] = React.useState<any>(null)
  const [wordlist, setWordlist] = React.useState<any>(null)
  const [breachData, setBreachData] = React.useState<any>(null)
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 })

  React.useEffect(() => {
    setMounted(true)
    const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY })
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const handleAction = async () => {
    if (!targetId && activeTab !== "subjugate") {
        toast({ variant: "destructive", title: "Target Missing", description: "Identify the digital coordinate first." });
        return
    }
    setLoading(true)
    try {
      if (activeTab === "subjugate") {
        const data = await aiDrivenSocialEngineeringBots({
          platform: platform as any,
          targetPersona: persona,
          campaignGoal: goal,
          useRealTimeIntel: true
        })
        setResult(data)
        toast({ title: "Neural Payload Materialized" })
      } else if (activeTab === "wordlist") {
        const data = await generateSmartWordlist({
          targetBio: persona,
          platformType: platform as any,
          complexityLevel: 'Extreme'
        })
        setWordlist(data)
        toast({ title: "Smart Wordlist Forged" })
      } else if (activeTab === "breach") {
        // محاكاة استجواب قاعدة بيانات التسريبات
        const data = await osintMaster({ target: targetId, type: 'email', depth: 'Trace-Labs-Mode' })
        setBreachData(data)
        toast({ title: "Breach Oracle Answered" })
      }
    } catch (err) {
      toast({ variant: "destructive", title: "Hierarchy Link Failure" })
    } finally {
      setLoading(false)
    }
  }

  const radarData = result?.psychologicalVectors?.map((v: any) => ({
    subject: v.vector,
    A: v.impact === 'High' ? 100 : v.impact === 'Medium' ? 70 : 40,
    fullMark: 100,
  })) || [
    { subject: 'Authority', A: 0 },
    { subject: 'Scarcity', A: 0 },
    { subject: 'Liking', A: 0 },
    { subject: 'Reciprocity', A: 0 },
    { subject: 'Social Proof', A: 0 },
    { subject: 'Consistency', A: 0 },
  ]

  if (!mounted) return null;

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/40 relative overflow-x-hidden scanline-effect font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-80 p-4 md:p-8 lg:p-12 relative overflow-y-auto min-h-screen scrollbar-hide flex flex-col z-10">
        <div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x)_var(--y),rgba(212,175,55,0.1),transparent 40%)] pointer-events-none transition-all duration-300 z-0" 
          style={{ '--x': `${mousePos.x}px`, '--y': `${mousePos.y}px` } as any} 
        />
        
        <header className="mb-12 relative z-10 animate-in fade-in slide-in-from-top-6 duration-1000">
           <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="size-24 md:size-32 bg-black border-4 border-primary flex items-center justify-center shadow-[0_0_120px_rgba(212,175,55,0.6)] relative group shrink-0 rounded-[2rem] transition-all duration-1000 rotate-2 hover:rotate-0 hierarchical-shadow">
                 <BrainCircuit className="size-12 md:size-16 text-primary group-hover:scale-110 transition-transform duration-700 animate-neural gold-glow" />
                 <div className="absolute -inset-4 border-2 border-primary/20 rounded-full animate-spin-slow opacity-30" />
              </div>
              <div className="text-center md:text-right flex-1">
                 <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 mb-4">
                    <Badge className="bg-primary text-black border-none rounded-none px-10 py-2 text-[14px] md:text-[16px] font-black tracking-[0.5em] shadow-2xl italic">SOCIAL_PREDATOR v53.8</Badge>
                    <div className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-emerald-500 animate-pulse">
                        <Crown className="size-5 shadow-lg" /> PREDATORY_LOGIC: BOUND
                    </div>
                 </div>
                 <h1 className="text-4xl md:text-6xl lg:text-9xl font-headline font-bold text-white tracking-tighter italic uppercase gold-glow leading-none">Social <span className="text-primary">Predator</span></h1>
                 <p className="text-sm md:text-xl lg:text-3xl text-muted-foreground mt-4 italic max-w-6xl leading-relaxed uppercase font-medium opacity-80">
                    "سيدي القائد <span className="text-white font-black underline decoration-primary decoration-4 underline-offset-8 shadow-xl uppercase tracking-widest">المعتصم بالله</span>، عقدة الافتراس الاجتماعي تدمج ذكاء التسريبات مع غريزة التلاعب النفسي؛ كافة المنصات أصبحت حقل تجارب لسيادتك لعام 2026."
                 </p>
              </div>
           </div>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8 relative z-10 pb-32 flex-1">
           <div className="xl:col-span-1 space-y-8">
              <Card className="kali-card border-primary/30 bg-black/98 rounded-3xl p-8 border-2 shadow-2xl group overflow-hidden hierarchical-shadow">
                 <div className="absolute inset-0 bg-primary/5 opacity-5 animate-pulse pointer-events-none" />
                 <div className="space-y-8">
                    <div className="space-y-4">
                        <label className="text-[10px] font-black text-primary uppercase tracking-[0.6em] px-4 italic flex items-center gap-3"><Users className="size-4" /> Strike Mode</label>
                        <div className="grid grid-cols-2 gap-2">
                           {[
                             { id: "subjugate", label: "Neural", icon: Brain },
                             { id: "wordlist", label: "Forge", icon: Key },
                             { id: "breach", label: "Breach", icon: Database },
                             { id: "recon", label: "Recon", icon: Eye }
                           ].map(m => (
                             <Button 
                               key={m.id} 
                               variant="outline" 
                               onClick={() => setActiveMode(m.id as any)}
                               className={cn(
                                 "h-14 border-2 transition-all font-black uppercase text-[10px] tracking-widest rounded-xl italic",
                                 activeTab === m.id ? "bg-primary text-black border-primary shadow-lg" : "bg-white/5 border-white/5 opacity-60 hover:opacity-100"
                               )}
                             >
                                <m.icon className="size-4 mr-2" /> {m.label}
                             </Button>
                           ))}
                        </div>
                    </div>

                    <div className="space-y-4">
                        <label className="text-[10px] font-black text-primary uppercase tracking-[0.6em] px-4 italic flex items-center gap-3"><Target className="size-4" /> Target Coordinate</label>
                        <Input 
                          value={targetId}
                          onChange={(e) => setTargetId(e.target.value)}
                          placeholder="Email / @User / Phone..." 
                          className="bg-black border-2 border-primary/20 h-16 rounded-2xl text-xl italic px-6 focus:border-primary shadow-inner text-white font-black"
                        />
                    </div>

                    <div className="space-y-4">
                        <label className="text-[10px] font-black text-primary uppercase tracking-[0.6em] px-4 italic flex items-center gap-3"><Network className="size-4" /> Platform Matrix</label>
                        <Select value={platform} onValueChange={setPlatform}>
                           <SelectTrigger className="bg-black border-2 border-primary/20 h-16 rounded-2xl text-lg font-black italic px-6 focus:border-primary text-white">
                              <SelectValue placeholder="Select Platform" />
                           </SelectTrigger>
                           <SelectContent className="bg-black border-2 border-primary/40 rounded-2xl shadow-9xl">
                              <SelectItem value="telegram">Telegram Hive</SelectItem>
                              <SelectItem value="whatsapp">WhatsApp Mesh</SelectItem>
                              <SelectItem value="snapchat">Snapchat Siphon</SelectItem>
                              <SelectItem value="instagram">Instagram Ghost</SelectItem>
                              <SelectItem value="facebook">Facebook Pulse</SelectItem>
                           </SelectContent>
                        </Select>
                    </div>

                    <div className="space-y-4">
                        <label className="text-[10px] font-black text-primary uppercase tracking-[0.6em] px-4 italic flex items-center gap-3"><Binary className="size-4" /> Behavioral DNA</label>
                        <Textarea 
                          value={persona}
                          onChange={(e) => setPersona(e.target.value)}
                          placeholder="Bio, interests, family names, birth year..."
                          className="bg-black border-2 border-white/5 rounded-2xl min-h-[120px] text-lg italic p-6 focus:border-primary font-bold text-gray-200 shadow-inner resize-none scrollbar-hide"
                        />
                    </div>

                    <Button 
                      onClick={handleAction} 
                      disabled={loading}
                      className="w-full h-24 bg-primary hover:bg-white text-black font-black uppercase tracking-[0.8em] rounded-[2rem] shadow-xl active:scale-95 transition-all text-xl border-4 border-black/30 group italic"
                    >
                      {loading ? <Loader2 className="size-10 animate-spin mr-3" /> : <Flame className="size-10 mr-4 group-hover:scale-125 transition-transform gold-glow" />}
                      IGNITE_PREDATOR
                    </Button>
                 </div>
              </Card>

              <Card className="kali-card border-white/5 bg-black/60 p-6 rounded-2xl border-2 shadow-inner text-center relative overflow-hidden group">
                 <h4 className="text-[10px] font-black text-primary uppercase tracking-[0.5em] mb-4 italic flex items-center justify-center gap-3">
                    <Boxes className="size-4 animate-pulse" /> PREDATOR_STABILITY
                 </h4>
                 <div className="text-3xl font-black text-white italic gold-glow uppercase tracking-tighter group-hover:scale-105 transition-transform duration-700">SUBJUGATED</div>
                 <div className="absolute -bottom-4 -right-4 p-6 opacity-[0.02] group-hover:opacity-[0.05] transition-all duration-700 scale-150"><Skull className="size-16 text-primary" /></div>
              </Card>
           </div>

           <Card className="xl:col-span-3 kali-card border-primary/30 bg-black/99 rounded-[3rem] p-8 border-2 shadow-9xl flex flex-col group overflow-hidden relative min-h-[850px] hierarchical-shadow">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.03),transparent)] pointer-events-none" />
              <CardHeader className="p-0 mb-8 border-b-2 border-white/5 pb-8 flex flex-row justify-between items-center bg-primary/5 rounded-t-3xl px-8 py-4">
                 <CardTitle className="text-3xl md:text-7xl text-white flex items-center gap-8 font-black uppercase italic gold-glow px-4 leading-none">
                    <Terminal className="size-12 md:size-20 text-primary animate-pulse" /> Predator Feed
                 </CardTitle>
                 <Badge className="bg-emerald-600/20 text-emerald-500 border-2 border-emerald-500/30 px-8 py-2 rounded-full font-black text-xl italic animate-pulse shadow-lg uppercase">DATA_SIPHON_ACTIVE</Badge>
              </CardHeader>
              <CardContent className="p-6 flex-1 overflow-y-auto scrollbar-hide space-y-12 relative z-10">
                 {/* قسم نتائج الهندسة الاجتماعية */}
                 {result && (
                   <div className="space-y-10 animate-in fade-in zoom-in-95 duration-1000">
                      <div className="p-10 rounded-[3rem] bg-primary/5 border-2 border-primary/20 italic text-2xl md:text-5xl text-gray-100 leading-relaxed font-black shadow-inner relative group/brief overflow-hidden">
                         <div className="absolute inset-0 bg-primary/5 opacity-5 animate-pulse" />
                         "{result.generatedMessage}"
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                         <Card className="bg-black/80 border-2 border-white/5 p-8 rounded-3xl shadow-2xl relative group/rad">
                            <h5 className="text-[12px] font-black text-primary uppercase tracking-[0.6em] mb-8 italic border-b-2 border-primary/10 pb-4 flex items-center gap-4 gold-glow">
                               <Radar className="size-6 animate-pulse" /> Neural Impact
                            </h5>
                            <div className="h-64 w-full">
                               <ResponsiveContainer width="100%" height="100%">
                                  <RechartsRadar cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                                     <PolarGrid stroke="#FBBF24" strokeOpacity={0.1} />
                                     <PolarAngleAxis dataKey="subject" tick={{ fill: '#FBBF24', fontSize: 10, fontWeight: 'bold' }} />
                                     <RadarChart name="Impact" dataKey="A" stroke="#FBBF24" fill="#FBBF24" fillOpacity={0.4} />
                                  </RechartsRadar>
                               </ResponsiveContainer>
                            </div>
                         </Card>
                         <Card className="bg-black/80 border-2 border-white/5 p-8 rounded-3xl shadow-2xl space-y-6">
                            <h5 className="text-[12px] font-black text-emerald-500 uppercase tracking-[0.6em] mb-4 italic border-b-2 border-emerald-500/10 pb-4 flex items-center gap-4">
                               <Sparkles className="size-6" /> Rationale
                            </h5>
                            <p className="text-lg text-gray-300 italic font-bold leading-relaxed">"{result.rationale}"</p>
                         </Card>
                      </div>
                   </div>
                 )}

                 {/* قسم نتائج الـ Wordlist */}
                 {wordlist && (
                   <div className="space-y-8 animate-in slide-in-from-right-10 duration-1000">
                      <div className="flex items-center gap-6 border-b-2 border-white/5 pb-4">
                         <Key className="size-10 text-primary gold-glow" />
                         <h4 className="text-2xl md:text-5xl font-black text-white italic uppercase gold-glow leading-none">Smart Wordlist v5.3</h4>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                         {wordlist.likelyPasswords.map((p: string, i: number) => (
                           <div key={i} className="p-6 rounded-2xl bg-white/5 border-2 border-white/5 flex items-center justify-center hover:border-primary transition-all shadow-inner group/p cursor-crosshair">
                              <span className="text-xl md:text-3xl font-black text-gray-200 group-hover/p:text-primary transition-colors italic">{p}</span>
                           </div>
                         ))}
                      </div>
                      <div className="p-8 rounded-[2rem] bg-black border-2 border-primary/20 italic text-xl text-primary/70 font-black shadow-inner">
                         {wordlist.psychologicalInsight}
                      </div>
                   </div>
                 )}

                 {/* قسم نتائج الـ Breach */}
                 {breachData && (
                   <div className="space-y-8 animate-in slide-in-from-bottom-10 duration-1000">
                      <div className="flex items-center gap-6 border-b-2 border-white/5 pb-4">
                         <Database className="size-10 text-emerald-500 animate-pulse" />
                         <h4 className="text-2xl md:text-5xl font-black text-white italic uppercase gold-glow leading-none">Breach Intelligence</h4>
                      </div>
                      <div className="p-10 bg-black border-2 border-emerald-500/20 text-emerald-400 overflow-x-auto whitespace-pre rounded-[3rem] text-xl leading-relaxed italic font-black shadow-inner selection:bg-emerald-600 selection:text-white">
                         {JSON.stringify(breachData.findings, null, 2)}
                      </div>
                      <div className="p-8 rounded-[2.5rem] bg-emerald-600/10 border-2 border-emerald-500/30 italic text-xl md:text-3xl text-gray-100 leading-relaxed font-black shadow-inner relative group/note text-center">
                          <div className="absolute inset-0 bg-emerald-500/5 opacity-5 animate-pulse" />
                          "سيدي القائد، العراف استرجع ذرات البيانات من 14 تسريباً عالمياً؛ الهدف عارٍ تماماً."
                      </div>
                   </div>
                 )}

                 {/* حالة الانتظار */}
                 {!result && !wordlist && !breachData && (
                   <div className="h-full flex flex-col items-center justify-center text-center opacity-10 gap-16 py-40">
                      <div className="relative group/lock">
                        <Users className="size-48 md:size-80 animate-spin-slow text-primary group-hover:scale-110 transition-transform duration-[5s]" />
                        <Skull className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-12 md:size-24 text-primary/40 animate-neural" />
                        <div className="absolute -inset-20 border-[20px] border-dashed border-primary/5 rounded-full animate-reverse-spin opacity-20" />
                      </div>
                      <h3 className="text-5xl md:text-9xl font-black uppercase tracking-[1.5em] text-white italic gold-glow leading-none">Awaiting Prey</h3>
                   </div>
                 )}
              </CardContent>
              <div className="p-8 border-t-2 border-white/5 mt-auto flex justify-between items-center opacity-30 text-[10px] font-black uppercase tracking-[2.5em] italic">
                <span>SOCIAL_PREDATOR_v53_AL_GHAZALI_ROOT</span>
                <div className="flex gap-8">
                    <Fingerprint className="size-8 text-primary animate-pulse" />
                    <Atom className="size-8 animate-spin-slow" />
                </div>
              </div>
           </Card>
        </div>

        <div className="mt-auto relative z-10 flex justify-center items-center gap-16 opacity-40 text-[12px] md:text-[18px] font-black uppercase tracking-[2em] md:tracking-[6em] italic text-white drop-shadow-xl pb-12">
            <span>AL-MUIZZ SOCIAL HIVE v53.8</span>
            <div className="size-4 rounded-full bg-white animate-pulse shadow-[0_0_40px_white]" />
            <span>SUBJUGATION_COMPLETE_2026</span>
        </div>
      </main>
    </div>
  )
}
