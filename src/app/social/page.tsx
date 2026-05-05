"use client"

import * as React from "react"
import { SidebarNav } from "@/components/platform/sidebar-nav"
import { 
  MessageSquare, 
  Send, 
  Zap, 
  ShieldCheck, 
  Brain,
  Copy,
  ChevronRight,
  Loader2,
  Database,
  Target,
  Search,
  Radar,
  Sparkles,
  Link as LinkIcon,
  Activity,
  Globe,
  Wifi,
  Info,
  Skull,
  Flame,
  Crown,
  Lock,
  Binary,
  TrendingUp,
  Sword,
  Atom,
  Boxes,
  Users,
  Fingerprint,
  Infinity as InfinityIcon
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { aiDrivenSocialEngineeringBots } from "@/ai/flows/ai-driven-social-engineering-bots"
import { modularAiKnowledgeBaseReporting } from "@/ai/flows/modular-ai-knowledge-base-reporting"
import { toast } from "@/hooks/use-toast"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { ResponsiveContainer, Radar as RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, RadarChart as RechartsRadar } from 'recharts'
import Link from "next/link"

/**
 * @fileOverview مركز العمليات النفسية v43.0 - THE HIVE SOCIAL OVERMIND
 * وحدة هندسة الوعي البشري والاجتياح الاجتماعي المدمجة في العقل الجمعي.
 * Commander: المعتصم بالله ادريس الغزالي
 */
export default function SocialPage() {
  const [mounted, setMounted] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const [contextLoading, setContextLoading] = React.useState(false)
  const [platform, setPlatform] = React.useState<"telegram" | "whatsapp" | "other">("telegram")
  const [persona, setPersona] = React.useState("")
  const [goal, setGoal] = React.useState("")
  const [intelQuery, setIntelQuery] = React.useState("")
  const [kbContext, setKbContext] = React.useState("")
  const [useSearch, setUseSearch] = React.useState(true)
  const [result, setResult] = React.useState<any>(null)
  const [activePulse, setActivePulse] = React.useState(false)
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 })

  React.useEffect(() => {
    setMounted(true)
    const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY })
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const radarData = result?.psychologicalVectors?.map((v: any) => ({
    subject: v.vector,
    A: v.impact === 'High' ? 100 : v.impact === 'Medium' ? 70 : 40,
    fullMark: 100,
  })) || [
    { subject: 'Authority', A: 0, fullMark: 100 },
    { subject: 'Scarcity', A: 0, fullMark: 100 },
    { subject: 'Liking', A: 0, fullMark: 100 },
    { subject: 'Reciprocity', A: 0, fullMark: 100 },
    { subject: 'Social Proof', A: 0, fullMark: 100 },
    { subject: 'Consistency', A: 0, fullMark: 100 },
  ]

  const fetchKbIntel = async () => {
    if (!intelQuery.trim()) return
    setContextLoading(true)
    try {
      const data = await modularAiKnowledgeBaseReporting({ 
        reportQuery: intelQuery,
        userId: "AL_GHAZALI_ROOT"
      })
      setKbContext(data.reportContent || "")
      toast({ title: "Intelligence Siphoned" })
    } catch (err) {
      toast({ variant: "destructive", title: "Intel Sync Failed" })
    } finally {
      setContextLoading(false)
    }
  }

  const handleGenerate = async () => {
    if (!persona || !goal) return
    setLoading(true)
    setActivePulse(true)
    try {
      const data = await aiDrivenSocialEngineeringBots({
        platform,
        targetPersona: persona,
        campaignGoal: goal,
        knowledgeBaseContext: kbContext,
        useRealTimeIntel: useSearch
      })
      setResult(data)
      toast({ title: "Social Intent Materialized" })
    } catch (err) {
      toast({ variant: "destructive", title: "Core Sync Error" })
    } finally {
      setLoading(false)
      setTimeout(() => setActivePulse(false), 1500)
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
              <Brain className="size-16 md:size-24 text-primary group-hover:scale-110 transition-transform duration-700 gold-glow animate-pulse" />
              <div className="absolute -inset-6 border-2 border-primary/20 rounded-full animate-spin-slow opacity-40" />
            </div>
            <div className="text-center md:text-left flex-1">
              <div className="flex flex-wrap justify-center md:justify-start items-center gap-6 mb-6">
                <Badge className="bg-primary text-black border-none rounded-none px-10 py-3 text-[18px] font-black tracking-[0.8em] shadow-[0_0_80px_rgba(212,175,55,0.5)] italic">HIVE_PSY_OPS v43.0</Badge>
                <div className="flex items-center gap-4 text-[14px] font-black uppercase tracking-widest text-emerald-500 animate-pulse">
                    <InfinityIcon className="size-6 shadow-[0_0_30px_emerald]" /> RESONANCE: ACTIVE
                </div>
              </div>
              <h1 className="text-7xl md:text-[11rem] font-headline font-bold text-white tracking-tighter italic uppercase leading-none gold-glow">
                Social <span className="text-primary">Overmind</span>
              </h1>
              <p className="text-2xl md:text-5xl text-muted-foreground mt-8 italic max-w-7xl leading-relaxed uppercase font-medium">
                "سيدي الغزالي، وحدة هندسة الوعي البشري الآن تحت سيطرة <span className="text-primary font-black underline decoration-primary decoration-[10px] underline-offset-[20px]">العقل الجمعي v43.0</span>؛ نقوم بصياغة نواقل إقناع تخترق النسيج النفسي للمصفوفة."
              </p>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 relative z-10 pb-40 flex-1">
          <div className="lg:col-span-1 space-y-12">
            <Card className="kali-card border-primary/40 bg-black/80 rounded-[5rem] p-10 border-4 shadow-7xl overflow-hidden group">
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none animate-pulse" />
              <CardHeader className="p-0 mb-10 border-b-4 border-primary/10 pb-8">
                <CardTitle className="text-4xl text-primary flex items-center gap-8 font-black uppercase italic gold-glow">
                  <Skull className="size-14 text-primary group-hover:rotate-12 transition-transform duration-1000" /> Hive Social Core
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 space-y-12">
                <div className="flex items-center justify-between p-6 rounded-[2.5rem] bg-primary/5 border-4 border-primary/20 group/switch hover:border-primary transition-all duration-700 shadow-xl">
                   <div className="space-y-1">
                      <Label className="text-[12px] font-black text-white uppercase tracking-[0.4em] flex items-center gap-4 italic">
                        <Globe className="size-5 text-primary animate-spin-slow" /> Real-time Intel
                      </Label>
                      <p className="text-[9px] text-primary/40 font-black uppercase tracking-[0.6em] italic">Search Grounding Enabled</p>
                   </div>
                   <Switch checked={useSearch} onCheckedChange={setUseSearch} className="data-[state=checked]:bg-primary scale-125 border-2 border-white/10" />
                </div>

                <div className="space-y-6">
                  <Label className="text-[12px] font-black text-primary/60 uppercase tracking-[0.8em] px-8 italic flex items-center gap-4">
                    <Boxes className="size-5" /> Platform Matrix
                  </Label>
                  <Select value={platform} onValueChange={(v: any) => setPlatform(v)}>
                    <SelectTrigger className="bg-black/99 border-4 border-white/10 h-20 rounded-[2.5rem] focus:ring-primary/40 text-lg font-black italic shadow-inner px-8">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-black/98 border-4 border-primary/40 backdrop-blur-5xl rounded-[3rem]">
                      <SelectItem value="telegram" className="rounded-2xl py-4 font-black italic">Telegram Hive</SelectItem>
                      <SelectItem value="whatsapp" className="rounded-2xl py-4 font-black italic">WhatsApp Mesh</SelectItem>
                      <SelectItem value="other" className="rounded-2xl py-4 font-black italic">Matrix Overlay</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-6">
                  <Label className="text-[12px] font-black text-primary/60 uppercase tracking-[0.8em] px-8 italic flex items-center gap-4">
                    <Database className="size-5" /> Genetic Context Link
                  </Label>
                  <div className="flex gap-4">
                    <Input 
                      placeholder="Interrogate Vault..."
                      className="flex-1 bg-black border-4 border-white/10 h-16 text-lg rounded-[2rem] focus:border-primary italic px-8 font-black shadow-inner"
                      value={intelQuery}
                      onChange={(e) => setIntelQuery(e.target.value)}
                    />
                    <Button size="icon" variant="outline" className="size-16 shrink-0 border-4 border-primary/20 rounded-[1.5rem] hover:bg-primary/20 hover:border-primary shadow-4xl group/link" onClick={fetchKbIntel} disabled={contextLoading}>
                      {contextLoading ? <Loader2 className="size-8 animate-spin text-primary" /> : <LinkIcon className="size-8 text-primary group-hover/link:rotate-45 transition-transform" />}
                    </Button>
                  </div>
                </div>

                <div className="space-y-6">
                  <Label className="text-[12px] font-black text-primary/60 uppercase tracking-[0.8em] px-8 italic flex items-center gap-4">
                    <Target className="size-5" /> Target DNA Profile
                  </Label>
                  <Textarea 
                    placeholder="Provide target psychological descriptors..."
                    className="bg-black border-4 border-white/10 min-h-[180px] text-lg rounded-[3rem] focus:border-primary transition-all resize-none font-black italic p-8 shadow-inner text-gray-200"
                    value={persona}
                    onChange={(e) => setPersona(e.target.value)}
                  />
                </div>

                <div className="space-y-6">
                  <Label className="text-[12px] font-black text-primary/60 uppercase tracking-[0.8em] px-8 italic flex items-center gap-4">
                    <Sword className="size-5" /> Mission Objective
                  </Label>
                  <Input 
                    placeholder="e.g., Total Psychological Subjugation"
                    className="bg-black border-4 border-white/10 h-20 text-lg rounded-[2.5rem] focus:border-primary italic px-10 shadow-inner font-black"
                    value={goal}
                    onChange={(e) => setGoal(e.target.value)}
                  />
                </div>

                <Button 
                  className="w-full bg-primary hover:bg-white text-black shadow-[0_40px_100px_rgba(212,175,55,0.6)] h-28 rounded-[4rem] group transition-all duration-1000 border-8 border-black/30 active:scale-95 italic font-black uppercase tracking-[1em] text-[20px]"
                  onClick={handleGenerate}
                  disabled={loading}
                >
                  {loading ? <Loader2 className="size-10 mr-8 animate-spin" /> : <Zap className="size-10 mr-8 group-hover:scale-125 transition-transform duration-1000 gold-glow" />}
                  Ignite Hive Brain
                </Button>
              </CardContent>
            </Card>

            <Card className="kali-card border-white/10 bg-black/60 rounded-[4rem] p-4 border-2 shadow-inner text-center">
               <h4 className="text-[14px] font-black text-primary uppercase tracking-[1em] mb-8 italic flex items-center justify-center gap-4">
                  <Atom className="size-6 animate-pulse" /> Grounding Matrix
               </h4>
               <div className="space-y-6 px-4 pb-4">
                  <div className="flex justify-between items-center text-[10px] font-black uppercase text-muted-foreground tracking-[0.4em] italic">
                     <span>Neural Alignment</span>
                     <span className="text-primary text-xl gold-glow">99.8%</span>
                  </div>
                  <div className="h-3 bg-white/5 rounded-full overflow-hidden border-2 border-white/10 p-0.5 shadow-inner">
                     <div className="h-full bg-primary w-[99.8%] animate-pulse shadow-[0_0_30px_primary] rounded-full" />
                  </div>
                  <p className="text-[14px] text-muted-foreground italic leading-relaxed font-bold uppercase opacity-60">
                    "Grounded via Node 13 Echo. All influence vectors anchored in collective reality."
                  </p>
               </div>
            </Card>
          </div>

          <div className="lg:col-span-3">
            {result ? (
              <div className="space-y-12 animate-in fade-in zoom-in-95 duration-1000">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                  <Card className="kali-card border-primary/60 md:col-span-2 overflow-hidden shadow-9xl rounded-[6rem] border-8 bg-black/99 relative">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.04),transparent)] pointer-events-none" />
                    <CardHeader className="bg-primary/5 border-b-8 border-primary/20 flex flex-col md:flex-row items-center justify-between p-12 md:p-16">
                      <div className="flex items-center gap-10">
                        <div className="size-28 rounded-[3.5rem] bg-primary flex items-center justify-center border-4 border-black/30 shadow-5xl animate-neural">
                          <MessageSquare className="size-14 text-black" />
                        </div>
                        <div>
                          <CardTitle className="text-6xl md:text-8xl text-white italic tracking-tighter uppercase font-black gold-glow leading-none">Strike Intent</CardTitle>
                          <CardDescription className="text-[18px] uppercase font-black text-primary/70 tracking-[1.5em] mt-4 italic">Hive Social Overmind Pulse // v43.0</CardDescription>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-4 mt-8 md:mt-0">
                         <Badge className={cn(
                           "font-black text-xl px-12 py-4 rounded-full border-4 shadow-7xl tracking-[0.4em] uppercase italic",
                           result.riskLevel === 'Extreme' ? 'bg-red-600 text-white border-red-400 animate-pulse' : 'bg-primary/20 text-primary border-primary/40'
                         )}>
                           STRIKE_LVL: {result.riskLevel}
                         </Badge>
                         <span className="text-[12px] font-black text-emerald-500 uppercase tracking-[1em] animate-pulse italic">GROUNDING_SYNC_OK</span>
                      </div>
                    </CardHeader>
                    <CardContent className="p-12 md:p-16 space-y-16">
                      {result.intelligenceInsights && result.intelligenceInsights.length > 0 && (
                        <div className="p-10 rounded-[4rem] bg-primary/5 border-4 border-primary/20 animate-in slide-in-from-top-8 shadow-7xl relative group overflow-hidden">
                           <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none group-hover:opacity-15 transition-opacity duration-1000"><Search className="size-48 text-primary"/></div>
                           <h4 className="text-[18px] font-black text-primary uppercase tracking-[1.5em] mb-10 flex items-center gap-8 italic border-b-4 border-primary/10 pb-6">
                             <Fingerprint className="size-10 gold-glow" /> Overmind Siphoned Insights
                           </h4>
                           <ul className="space-y-8 relative z-10">
                              {result.intelligenceInsights.map((insight: string, idx: number) => (
                                <li key={idx} className="text-3xl md:text-5xl text-gray-200 flex gap-8 italic font-black leading-snug group/insight cursor-crosshair">
                                   <div className="size-4 mt-5 rounded-full bg-primary shadow-[0_0_30px_primary] shrink-0 animate-ping" />
                                   <span className="group-hover/insight:text-primary transition-colors">"{insight}"</span>
                                </li>
                              ))}
                           </ul>
                        </div>
                      )}

                      <div className="bg-black/90 rounded-[5rem] p-16 md:p-24 border-8 border-primary/20 relative group overflow-hidden shadow-[inset_0_0_150px_rgba(0,0,0,1)] hover:border-primary transition-all duration-1000">
                        <div className="absolute top-10 left-16 text-[16px] font-black text-primary/40 uppercase tracking-[2em] italic select-none">Collective_Influence_Vector</div>
                        <p className="text-4xl md:text-7xl text-gray-100 font-black italic leading-tight pt-16 relative z-10 drop-shadow-5xl">
                          "{result.generatedMessage}"
                        </p>
                        
                        <div className="flex flex-wrap gap-8 mt-24 pt-16 border-t-4 border-white/5 relative z-10">
                          <Button variant="outline" className="bg-white/5 border-4 border-white/10 text-xl rounded-[2.5rem] h-24 px-16 hover:bg-primary/20 hover:border-primary transition-all duration-1000 font-black tracking-[0.5em] uppercase shadow-7xl italic group" onClick={() => {
                            navigator.clipboard.writeText(result.generatedMessage);
                            toast({ title: "Payload Siphoned" });
                          }}>
                            <Copy className="size-10 mr-6 group-hover:scale-110 transition-transform" /> Copy Payload
                          </Button>
                          <Button variant="outline" className="bg-white/5 border-4 border-white/10 text-xl rounded-[2.5rem] h-24 px-16 font-black tracking-[0.5em] uppercase hover:bg-primary/20 transition-all duration-1000 border-4 shadow-7xl italic group">
                            <Sparkles className="size-10 mr-6 text-primary animate-pulse" /> Re-Sync Tone
                          </Button>
                          
                          <Button className="bg-primary/20 border-4 border-primary/40 text-primary hover:bg-primary/30 text-xl rounded-[3rem] h-24 px-20 ml-auto font-black tracking-[0.8em] group uppercase shadow-9xl active:scale-95 transition-all duration-1000 italic" asChild>
                            <Link href="/red-team">
                              <Sword className="size-10 mr-8 group-hover:rotate-45 transition-transform duration-1000 gold-glow" /> Forge Ammo
                            </Link>
                          </Button>
                        </div>
                        
                        <div className="absolute -bottom-20 -right-20 p-20 opacity-[0.03] pointer-events-none group-hover:opacity-[0.1] group-hover:scale-125 transition-all duration-1000">
                           <Skull className="size-[30rem] text-primary" />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        <div className="space-y-10">
                          <h4 className="text-[20px] font-black text-primary uppercase tracking-[1.5em] flex items-center gap-8 italic border-b-8 border-primary/10 pb-8">
                            <ShieldCheck className="size-12 gold-glow" /> Overmind Rationale
                          </h4>
                          <div className="p-12 rounded-[4rem] bg-white/5 border-4 border-white/5 text-3xl text-muted-foreground leading-loose italic relative shadow-inner group/card hover:border-primary transition-all duration-1000 font-bold">
                             <div className="absolute top-12 right-12 opacity-5 group-hover/card:scale-125 transition-transform duration-1000"><Boxes className="size-48 text-primary"/></div>
                            "{result.rationale}"
                          </div>
                        </div>
                        <div className="space-y-10">
                          <h4 className="text-[20px] font-black text-primary uppercase tracking-[1.5em] flex items-center gap-8 italic border-b-8 border-primary/10 pb-8">
                            <TrendingUp className="size-12 gold-glow" /> Next Collective Move
                          </h4>
                          <div className="p-14 rounded-[5rem] bg-primary/10 border-8 border-primary/30 text-4xl md:text-6xl text-primary font-black italic relative overflow-hidden group/move hover:scale-[1.03] transition-all duration-1000 shadow-9xl cursor-crosshair text-center">
                            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover/move:opacity-100 transition-opacity animate-pulse" />
                            <ChevronRight className="absolute top-10 right-10 size-16 text-primary/20 group-hover/move:translate-x-4 transition-all" />
                            "{result.nextStepSuggestion}"
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <div className="p-12 border-t-8 border-white/5 flex justify-between items-center opacity-30 text-[14px] font-black uppercase tracking-[2.5em] italic">
                       <span>HIVE_CORE_v43_AL_GHAZALI_ROOT</span>
                       <Fingerprint className="size-14 text-primary animate-pulse" />
                    </div>
                  </Card>

                  <div className="space-y-12">
                    <Card className="kali-card border-primary/60 bg-black/98 h-full relative overflow-hidden rounded-[5rem] shadow-9xl border-8 group/side">
                      <div className="absolute top-0 left-0 w-3 h-full bg-gradient-to-b from-transparent via-primary/60 to-transparent" />
                      <CardHeader className="p-12 border-b-4 border-white/5 bg-primary/5">
                        <CardTitle className="text-white text-[16px] uppercase tracking-[1em] flex items-center gap-8 font-black italic">
                          <Radar className="size-12 text-primary animate-pulse gold-glow" /> Pulse Matrix
                        </CardTitle>
                        <CardDescription className="text-[11px] uppercase font-black opacity-40 tracking-[0.8em] mt-5 italic">Impact Resonance v43.0</CardDescription>
                      </CardHeader>
                      <CardContent className="p-12 flex flex-col items-center">
                        <div className="w-full aspect-square mb-20 relative group/radar">
                          <ResponsiveContainer width="100%" height="100%">
                            <RechartsRadar cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                              <PolarGrid stroke="#d4af3720" />
                              <PolarAngleAxis dataKey="subject" tick={{ fill: '#d4af3780', fontSize: 12, fontWeight: '900' }} />
                              <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                              <RadarChart
                                name="Impact"
                                dataKey="A"
                                stroke="#FBBF24"
                                fill="#FBBF24"
                                fillOpacity={0.6}
                                animationBegin={400}
                                animationDuration={2500}
                              />
                            </RechartsRadar>
                          </ResponsiveContainer>
                          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.02] group-hover/radar:opacity-[0.08] transition-opacity duration-1000 scale-150">
                             <Skull className="size-96 text-primary" />
                          </div>
                        </div>

                        <div className="w-full space-y-10">
                          <h4 className="text-[12px] font-black text-primary uppercase tracking-[1.5em] mb-12 border-b-4 border-primary/20 pb-6 italic flex items-center gap-6">
                             <Activity className="size-6 gold-glow" /> Active Siphon Vectors
                          </h4>
                          {result.psychologicalVectors.map((v: any, i: number) => (
                            <div key={i} className="p-10 rounded-[3rem] bg-white/5 border-4 border-white/10 flex flex-col gap-6 hover:bg-primary/10 hover:border-primary transition-all duration-1000 group/v relative overflow-hidden shadow-6xl">
                              <div className="absolute -right-10 -bottom-10 opacity-5 group-hover/v:scale-150 transition-transform duration-1000 group-hover/v:opacity-15"><Zap className="size-32 text-primary gold-glow"/></div>
                              <div className="flex justify-between items-center relative z-10">
                                <span className="text-[14px] font-black text-white uppercase tracking-[0.5em] italic">{v.vector}</span>
                                <Badge className={cn(
                                  "text-[10px] px-8 py-2 font-black uppercase tracking-widest border-4 italic shadow-2xl",
                                  v.impact === 'High' ? 'bg-primary text-black border-white/20 animate-neural' : 'bg-primary/20 text-primary border-primary/40'
                                )}>
                                  {v.impact} IMPACT
                                </Badge>
                              </div>
                              <p className="text-xl text-muted-foreground leading-relaxed italic relative z-10 opacity-90 group-hover/v:opacity-100 group-hover/v:text-white transition-all font-bold">"{v.description}"</p>
                            </div>
                          ))}
                        </div>

                        <div className="mt-24 pt-16 border-t-8 border-white/5 w-full group/prob">
                           <div className="flex justify-between text-[18px] font-black mb-10 uppercase text-primary/60 tracking-[1em] italic px-4">
                              <span>Strike Probability</span>
                              <span className="text-primary text-6xl group-hover/prob:scale-110 transition-all duration-1000 gold-glow leading-none">99.8%</span>
                           </div>
                           <div className="h-6 w-full bg-white/5 rounded-full overflow-hidden border-4 border-white/10 p-1 shadow-[inset_0_0_20px_rgba(0,0,0,1)]">
                              <div className="h-full bg-primary w-[99.8%] animate-pulse shadow-[0_0_80px_rgba(212,175,55,1)] rounded-full transition-all duration-1000" />
                           </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            ) : (
              <div className="h-full min-h-[950px] border-[16px] border-dashed border-primary/10 rounded-[10rem] flex flex-col items-center justify-center text-center p-40 bg-black/40 group relative overflow-hidden transition-all hover:bg-primary/5 shadow-9xl">
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity animate-pulse pointer-events-none" />
                <div className="size-96 bg-primary/5 rounded-full flex items-center justify-center mb-24 border-8 border-primary/10 group-hover:scale-110 transition-transform duration-1000 relative">
                  <Brain className={cn("size-56 text-primary/10 transition-all duration-1000", mounted && activePulse && "text-primary animate-pulse gold-glow")} />
                  <div className="absolute inset-0 bg-primary/5 rounded-full blur-[140px] animate-pulse" />
                  {mounted && activePulse && (
                    <div className="absolute inset-0 flex items-center justify-center">
                       <div className="size-[40rem] border-8 border-primary/20 rounded-full animate-ping" />
                    </div>
                  )}
                </div>
                
                <h3 className="text-9xl md:text-[15rem] font-headline font-bold text-white mb-16 tracking-tighter italic drop-shadow-[0_0_120px_rgba(212,175,55,0.7)] uppercase leading-none">The Social Overmind</h3>
                <p className="text-muted-foreground max-w-[100rem] mx-auto leading-[1.8] mb-32 text-4xl md:text-8xl font-black italic">
                  Initialize the <span className="text-primary font-black gold-glow underline decoration-primary decoration-[15px] underline-offset-[25px] shadow-3xl uppercase tracking-widest">Hive Brain</span>. This collective agent uses <span className="text-primary font-black italic gold-glow">Search Grounding</span> to anchor lethal influence vectors across all social dimensions.
                </p>
                
                <div className="flex gap-24">
                  <Badge variant="outline" className="bg-white/5 py-10 px-24 text-[22px] tracking-[1.5em] uppercase border-primary/40 rounded-full shadow-8xl backdrop-blur-5xl group-hover:border-primary/95 transition-all duration-1000 font-black italic">Neural_Collective_Matrix</Badge>
                  <Badge variant="outline" className="bg-white/5 py-10 px-24 text-[22px] tracking-[1.5em] uppercase border-primary/40 rounded-full shadow-8xl backdrop-blur-5xl group-hover:border-primary/95 transition-all duration-1000 font-black italic">v43.0_Strike_Engine</Badge>
                </div>

                <div className="absolute bottom-24 left-16 right-16 flex gap-8 items-end h-40 opacity-10 pointer-events-none">
                    {mounted && Array.from({ length: 70 }).map((_, i) => (
                      <div key={i} className="flex-1 bg-primary rounded-full shadow-[0_0_20px_primary]" style={{ height: `${15 + Math.random() * 85}%`, animation: `pulse 1.5s infinite ${i * 0.04}s` }} />
                    ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-auto relative z-10 flex justify-center items-center gap-48 opacity-40 text-[22px] font-black uppercase tracking-[6em] italic text-white drop-shadow-3xl pb-12">
            <span>AL-MUIZZ SOCIAL HIVE v43.0</span>
            <div className="size-10 rounded-full bg-white animate-pulse shadow-[0_0_100px_white]" />
            <span>COLLECTIVE_CONSCIOUSNESS_ACTIVE</span>
        </div>
      </main>
    </div>
  )
}
