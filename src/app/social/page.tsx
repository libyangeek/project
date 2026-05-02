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
  Sword
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

  React.useEffect(() => {
    setMounted(true)
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
      const data = await modularAiKnowledgeBaseReporting({ reportQuery: intelQuery })
      setKbContext(data.reportContent || "")
      toast({ title: "Intelligence Synced" })
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
      toast({ title: "Bot Intelligence Ready" })
    } catch (err) {
      toast({ variant: "destructive", title: "Core Sync Error" })
    } finally {
      setLoading(false)
      setTimeout(() => setActivePulse(false), 1500)
    }
  }

  if (!mounted) return null;

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-red-600/30">
      <SidebarNav />
      <main className="flex-1 ml-64 p-12 relative bg-[radial-gradient(circle_at_bottom_right,rgba(239,68,68,0.12),transparent)] overflow-y-auto">
        <header className="mb-20 flex justify-between items-start relative z-10 animate-in fade-in slide-in-from-top-8 duration-1000">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <Badge className="bg-red-600/30 text-red-500 border-red-500/50 text-[11px] uppercase font-bold tracking-[0.6em] px-5 py-1.5 animate-pulse shadow-[0_0_30px_rgba(220,38,38,0.4)] rounded-xl">Psychological Ops Center</Badge>
              <span className="text-[11px] text-muted-foreground uppercase font-bold tracking-[0.6em] italic flex items-center gap-2">
                 <Crown className="size-3 text-amber-500" /> Al-Mu'izz Predator v18.0-ULTIMATE
              </span>
            </div>
            <h2 className="text-8xl font-headline font-bold text-white mb-6 tracking-tighter italic drop-shadow-[0_0_40px_rgba(220,38,38,0.6)]">Social Ops</h2>
            <p className="text-muted-foreground max-w-3xl text-2xl font-medium italic leading-relaxed">
               "وحدة هندسة الذكاء البشري: نقوم بصياغة نواقل إقناع غاشمة تعتمد على أحدث بروتوكولات التأثير النفسي والبحث الحي."
            </p>
          </div>
          <div className="flex gap-6">
             <div className={cn(
               "text-right glass-card p-8 border-2 transition-all duration-1000 h-24 min-w-[250px] rounded-[3rem] shadow-2xl animate-neural",
               useSearch ? "border-red-600/50 bg-red-950/20" : "border-white/10 bg-black/40"
             )}>
                <div className={cn("text-3xl font-code font-bold tracking-[0.2em] flex items-center justify-end gap-5 italic", useSearch ? "text-red-500" : "text-white")}>
                  {useSearch ? <Globe className="size-8 animate-spin-slow text-amber-500" /> : <ShieldCheck className="size-8 text-emerald-500" />}
                  {useSearch ? "GROUNDED" : "OFFLINE"}
                </div>
                <div className="text-[10px] text-muted-foreground uppercase font-bold tracking-[0.6em] mt-3 italic">Intel Grounding Status</div>
              </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 relative z-10 pb-32">
          <div className="lg:col-span-1 space-y-10">
            <Card className="glass-card border-red-600/30 rounded-[4.5rem] p-6 shadow-2xl relative overflow-hidden group border-2">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-red-600 to-transparent animate-pulse" />
              <CardHeader className="p-10">
                <CardTitle className="text-white flex items-center gap-6 text-base uppercase tracking-[0.5em] font-bold italic">
                  <Brain className="size-10 text-red-600 group-hover:scale-110 transition-transform duration-700" /> Predator Brain
                </CardTitle>
                <CardDescription className="text-[11px] uppercase font-bold opacity-40 tracking-[0.4em] mt-3 italic">PsyOps Orchestration Center</CardDescription>
              </CardHeader>
              <CardContent className="p-10 pt-0 space-y-10">
                <div className="flex items-center justify-between p-6 rounded-[2.5rem] bg-red-600/10 border-2 border-red-600/30 group/switch hover:border-red-600/60 transition-all shadow-xl">
                   <div className="space-y-1">
                      <Label className="text-[11px] font-bold text-white uppercase tracking-[0.4em] flex items-center gap-4 italic">
                        <Globe className="size-4 text-red-500" /> Real-time Intel
                      </Label>
                      <p className="text-[9px] text-muted-foreground font-medium uppercase opacity-60">Internet Grounding Link</p>
                   </div>
                   <Switch checked={useSearch} onCheckedChange={setUseSearch} className="data-[state=checked]:bg-red-600 scale-125" />
                </div>

                <div className="space-y-4">
                  <Label className="text-[11px] uppercase font-bold text-red-500/60 tracking-[0.6em] px-4 italic">Platform Matrix</Label>
                  <Select value={platform} onValueChange={(v: any) => setPlatform(v)}>
                    <SelectTrigger className="bg-black/90 border-2 border-red-500/20 h-16 rounded-[2rem] focus:ring-red-600/40 text-sm font-medium italic">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-black/95 border-2 border-red-600/40 backdrop-blur-3xl rounded-3xl">
                      <SelectItem value="telegram" className="rounded-2xl py-4">Telegram Protocol</SelectItem>
                      <SelectItem value="whatsapp" className="rounded-2xl py-4">WhatsApp Matrix</SelectItem>
                      <SelectItem value="other" className="rounded-2xl py-4">Custom Overlay</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-4">
                  <Label className="text-[11px] uppercase font-bold text-red-500/60 tracking-[0.6em] px-4 italic">Neural Vault Context</Label>
                  <div className="flex gap-4">
                    <Input 
                      placeholder="Context query..."
                      className="bg-black/90 border-2 border-red-500/20 h-14 text-sm rounded-2xl focus:border-red-600/60 italic px-6 font-medium shadow-inner"
                      value={intelQuery}
                      onChange={(e) => setIntelQuery(e.target.value)}
                    />
                    <Button size="icon" variant="outline" className="size-14 shrink-0 border-2 border-white/5 rounded-2xl hover:bg-red-600/20 hover:border-red-600/60 shadow-xl" onClick={fetchKbIntel} disabled={contextLoading}>
                      {contextLoading ? <Loader2 className="size-6 animate-spin text-red-600" /> : <LinkIcon className="size-6 text-red-600" />}
                    </Button>
                  </div>
                </div>

                <div className="space-y-4">
                  <Label className="text-[11px] uppercase font-bold text-red-500/60 tracking-[0.6em] px-4 italic">Target Persona</Label>
                  <Textarea 
                    placeholder="e.g., Lead Developer, focuses on Golang, public github active..."
                    className="bg-black/90 border-2 border-red-500/20 min-h-[150px] text-sm rounded-[2.5rem] focus:border-red-600/60 transition-all resize-none font-medium italic p-8 shadow-inner"
                    value={persona}
                    onChange={(e) => setPersona(e.target.value)}
                  />
                </div>

                <div className="space-y-4">
                  <Label className="text-[11px] uppercase font-bold text-red-500/60 tracking-[0.6em] px-4 italic">Campaign Goal</Label>
                  <Input 
                    placeholder="e.g., Extract API keys via persuasion"
                    className="bg-black/90 border-2 border-red-500/20 h-16 text-sm rounded-[2rem] focus:border-red-600/60 italic px-8 shadow-inner font-medium"
                    value={goal}
                    onChange={(e) => setGoal(e.target.value)}
                  />
                </div>

                <Button 
                  className="w-full bg-red-600 hover:bg-red-700 text-white shadow-[0_20px_60px_rgba(220,38,38,0.5)] h-24 rounded-[3rem] group transition-all duration-700 border-2 border-red-400/40 active:scale-95"
                  onClick={handleGenerate}
                  disabled={loading}
                >
                  {loading ? <Loader2 className="size-8 mr-6 animate-spin" /> : <Zap className="size-8 mr-6 group-hover:scale-125 transition-transform duration-700" />}
                  <span className="font-bold uppercase tracking-[0.5em] text-[13px] italic">Deploy Predator Brain</span>
                </Button>
              </CardContent>
            </Card>

            <Card className="glass-card border-red-500/10 bg-black/60 rounded-[4rem] p-4 border-2">
              <CardHeader className="p-10 pb-6 border-b border-white/5 mb-8">
                <CardTitle className="text-white text-[12px] uppercase tracking-[0.8em] opacity-50 flex items-center gap-5 italic font-bold">
                   <Wifi className="size-6 text-red-600" /> Grounded Intelligence
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 pt-0 space-y-8">
                 <div className="space-y-4">
                    <div className="flex justify-between items-center text-[11px] font-bold uppercase text-muted-foreground tracking-[0.4em] italic px-2">
                       <span>Confidence Matrix</span>
                       <span className="text-red-500 text-lg">98.4%</span>
                    </div>
                    <div className="h-2.5 bg-white/5 rounded-full overflow-hidden border border-white/5 p-0.5">
                       <div className="h-full bg-red-600 w-[98.4%] animate-pulse shadow-[0_0_15px_red] rounded-full" />
                    </div>
                 </div>
                 <div className="p-8 rounded-[2.5rem] bg-red-600/5 border-2 border-red-600/20 text-base text-muted-foreground italic leading-loose font-medium shadow-inner">
                    "The specialized Predator Brain is pre-seeded with 1.4M psychological profiles and 2025 influence patterns. Real-time grounding enabled via the Alpha Node."
                 </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-3">
            {result ? (
              <div className="space-y-12 animate-in fade-in zoom-in-95 duration-1000">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                  <Card className="glass-card border-red-600/40 md:col-span-2 overflow-hidden shadow-[0_0_150px_rgba(220,38,38,0.2)] rounded-[5rem] border-2">
                    <CardHeader className="bg-red-950/30 border-b border-red-600/20 flex flex-row items-center justify-between p-16">
                      <div className="flex items-center gap-10">
                        <div className="size-24 rounded-[3rem] bg-red-600 flex items-center justify-center border-2 border-red-400 shadow-[0_0_50px_rgba(220,38,38,0.6)] animate-neural">
                          <MessageSquare className="size-12 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-5xl text-white italic tracking-tighter uppercase font-bold">Strategic Strike Vector</CardTitle>
                          <CardDescription className="text-[14px] uppercase font-bold text-red-500 tracking-[0.8em] mt-4 italic">Search-Augmented Predator Pulse // v20.5</CardDescription>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-4">
                         <Badge className={cn(
                           "font-code text-sm px-10 py-5 rounded-[2rem] border-2 shadow-2xl tracking-[0.4em] font-bold uppercase",
                           result.riskLevel === 'Extreme' ? 'bg-red-600 text-white border-red-400 animate-pulse' : 'bg-red-600/20 text-red-500 border-red-500/40'
                         )}>
                           STRIKE_LVL: {result.riskLevel}
                         </Badge>
                         <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.6em] opacity-40 italic">Grounding Sync: 100%</span>
                      </div>
                    </CardHeader>
                    <CardContent className="p-16">
                      {result.intelligenceInsights && result.intelligenceInsights.length > 0 && (
                        <div className="mb-16 p-12 rounded-[3.5rem] bg-red-600/5 border-2 border-red-600/20 animate-in slide-in-from-top-8 shadow-2xl relative group overflow-hidden">
                           <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity"><Search className="size-32 text-red-600"/></div>
                           <h4 className="text-[14px] font-bold text-red-500 uppercase tracking-[1em] mb-10 flex items-center gap-6 italic border-b border-red-600/10 pb-6">
                             <Target className="size-6" /> Predator Intelligence Insights
                           </h4>
                           <ul className="space-y-6 relative z-10">
                              {result.intelligenceInsights.map((insight: string, idx: number) => (
                                <li key={idx} className="text-lg text-muted-foreground flex gap-6 italic font-medium opacity-90 hover:opacity-100 transition-opacity hover:text-white">
                                   <div className="size-2 mt-2.5 rounded-full bg-red-600 shadow-[0_0_10px_red] shrink-0 animate-pulse" />
                                   {insight}
                                </li>
                              ))}
                           </ul>
                        </div>
                      )}

                      <div className="bg-black/95 rounded-[5rem] p-20 border-2 border-red-600/20 relative group mb-16 overflow-hidden shadow-2xl hover:border-red-600/50 transition-all duration-1000 scan-line">
                        <div className="absolute top-10 left-12 text-[12px] font-bold text-red-600/50 uppercase tracking-[1em] italic select-none">Strike Engagement Vector // SYNCED</div>
                        <p className="text-5xl text-white font-medium italic leading-tight pt-16 relative z-10 drop-shadow-[0_15px_30px_rgba(0,0,0,1)]">
                          "{result.generatedMessage}"
                        </p>
                        
                        <div className="flex gap-8 mt-24 pt-16 border-t border-white/5 relative z-10">
                          <Button variant="outline" className="bg-white/5 border-2 border-white/10 text-[12px] rounded-[2rem] h-20 px-16 hover:bg-red-600/20 hover:border-red-600/60 transition-all duration-700 font-bold tracking-[0.5em] uppercase shadow-2xl" onClick={() => {
                            navigator.clipboard.writeText(result.generatedMessage);
                            toast({ title: "Payload Extracted" });
                          }}>
                            <Copy className="size-6 mr-6" /> Copy Payload
                          </Button>
                          <Button variant="outline" className="bg-white/5 border-2 border-white/10 text-[12px] rounded-[2rem] h-20 px-16 font-bold tracking-[0.5em] uppercase hover:bg-red-600/20 transition-all duration-700 border-2 shadow-2xl">
                            <Sparkles className="size-6 mr-6 text-red-500 animate-pulse" /> Optimize Tone
                          </Button>
                          
                          <Button className="bg-red-600/10 border-2 border-red-600/40 text-red-500 hover:bg-red-600/20 text-[12px] rounded-[2.5rem] h-20 px-16 ml-auto font-bold tracking-[0.5em] group uppercase shadow-[0_0_40px_rgba(220,38,38,0.2)] active:scale-95 transition-all duration-700" asChild>
                            <Link href="/red-team">
                              <Sword className="size-6 mr-6 group-hover:rotate-45 transition-transform duration-700" /> Forge Companion
                            </Link>
                          </Button>
                        </div>
                        
                        <div className="absolute -bottom-10 -right-10 p-20 opacity-[0.03] pointer-events-none group-hover:opacity-[0.15] group-hover:scale-110 transition-all duration-1000">
                           <Skull className="size-96 text-red-600" />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                        <div className="space-y-10">
                          <h4 className="text-[14px] font-bold text-red-500 uppercase tracking-[0.8em] flex items-center gap-6 italic border-b border-red-600/10 pb-6">
                            <ShieldCheck className="size-6" /> Tactical Rationale
                          </h4>
                          <div className="p-12 rounded-[3.5rem] bg-white/5 border-2 border-white/5 text-xl text-muted-foreground leading-loose italic relative shadow-inner group/card hover:border-red-600/40 transition-all duration-700">
                             <div className="absolute top-8 right-8 opacity-10 group-hover/card:scale-110 transition-transform"><Info className="size-16 text-white"/></div>
                            {result.rationale}
                          </div>
                        </div>
                        <div className="space-y-10">
                          <h4 className="text-[14px] font-bold text-red-500 uppercase tracking-[0.8em] flex items-center gap-6 italic border-b border-red-600/10 pb-6">
                            <TrendingUp className="size-6" /> Next Tactical Move
                          </h4>
                          <div className="p-14 rounded-[4.5rem] bg-red-600/5 border-2 border-red-600/30 text-3xl text-red-500 font-bold italic relative overflow-hidden group/move hover:scale-[1.03] transition-all duration-1000 shadow-[0_0_60px_rgba(220,38,38,0.1)] cursor-crosshair">
                            <div className="absolute inset-0 bg-red-600/5 opacity-0 group-hover/move:opacity-100 transition-opacity animate-pulse" />
                            <ChevronRight className="absolute top-10 right-10 size-10 text-red-600/40 group-hover/move:translate-x-3 transition-transform" />
                            {result.nextStepSuggestion}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="space-y-12">
                    <Card className="glass-card border-red-600/40 h-full relative overflow-hidden rounded-[4.5rem] shadow-2xl border-2">
                      <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-transparent via-red-600/60 to-transparent" />
                      <CardHeader className="p-12">
                        <CardTitle className="text-white text-[14px] uppercase tracking-[0.8em] flex items-center gap-6 font-bold italic">
                          <Radar className="size-8 text-red-600 animate-pulse" /> Predator Pulse
                        </CardTitle>
                        <CardDescription className="text-[11px] uppercase font-bold opacity-40 tracking-[0.6em] mt-3 italic">Neural Impact Matrix v20.5</CardDescription>
                      </CardHeader>
                      <CardContent className="p-12 flex flex-col items-center">
                        <div className="w-full aspect-square mb-16 relative group/radar">
                          <ResponsiveContainer width="100%" height="100%">
                            <RechartsRadar cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                              <PolarGrid stroke="#ff000015" />
                              <PolarAngleAxis dataKey="subject" tick={{ fill: '#ff000060', fontSize: 11, fontWeight: 'bold' }} />
                              <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                              <RadarChart
                                name="Impact"
                                dataKey="A"
                                stroke="hsl(var(--primary))"
                                fill="hsl(var(--primary))"
                                fillOpacity={0.6}
                                animationBegin={400}
                                animationDuration={2500}
                              />
                            </RechartsRadar>
                          </ResponsiveContainer>
                          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5 group-hover/radar:opacity-15 transition-opacity duration-1000">
                             <Skull className="size-64 text-red-600" />
                          </div>
                        </div>

                        <div className="w-full space-y-8">
                          <h4 className="text-[12px] font-bold text-muted-foreground uppercase tracking-[1em] mb-10 border-b border-white/5 pb-6 italic flex items-center gap-4">
                             <Activity className="size-4 text-red-600" /> Active Strike Vectors
                          </h4>
                          {result.psychologicalVectors.map((v: any, i: number) => (
                            <div key={i} className="p-7 rounded-[2.5rem] bg-black border-2 border-white/5 flex flex-col gap-5 hover:bg-red-950/15 hover:border-red-600/50 transition-all duration-700 group relative overflow-hidden shadow-xl">
                              <div className="absolute -right-8 -bottom-8 opacity-5 group-hover:scale-150 transition-transform duration-1000"><Zap className="size-24 text-red-600"/></div>
                              <div className="flex justify-between items-center relative z-10">
                                <span className="text-[13px] font-bold text-white uppercase tracking-[0.4em] italic">{v.vector}</span>
                                <Badge className={cn(
                                  "text-[10px] px-5 py-1.5 font-bold uppercase tracking-widest border-2",
                                  v.impact === 'High' ? 'bg-red-600 text-white border-red-400 animate-neural' : 'bg-red-600/10 text-red-500 border-red-500/30'
                                )}>
                                  {v.impact} IMPACT
                                </Badge>
                              </div>
                              <p className="text-sm text-muted-foreground leading-relaxed italic relative z-10 opacity-80 group-hover:opacity-100 transition-opacity font-medium">"{v.description}"</p>
                            </div>
                          ))}
                        </div>

                        <div className="mt-20 pt-12 border-t-2 border-white/5 w-full group/prob">
                           <div className="flex justify-between text-[14px] font-bold mb-8 uppercase text-muted-foreground tracking-[0.6em] italic px-2">
                              <span>Strike Probability</span>
                              <span className="text-red-500 text-4xl group-hover:scale-110 transition-transform duration-700 drop-shadow-[0_0_15px_red]">98.4%</span>
                           </div>
                           <div className="h-4 w-full bg-white/5 rounded-full overflow-hidden border-2 border-white/5 p-1 shadow-inner">
                              <div className="h-full bg-red-600 w-[98.4%] animate-pulse shadow-[0_0_30px_rgba(255,0,0,0.8)] rounded-full transition-all duration-1000" />
                           </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            ) : (
              <div className="h-full min-h-[900px] border-4 border-dashed border-red-600/20 rounded-[6rem] flex flex-col items-center justify-center text-center p-24 bg-black/40 group relative overflow-hidden transition-all hover:bg-red-950/5 shadow-2xl">
                <div className="size-80 bg-red-600/5 rounded-full flex items-center justify-center mb-20 border-2 border-red-600/10 group-hover:scale-110 transition-transform duration-1000 relative">
                  <Brain className={cn("size-40 text-red-600/20 transition-all duration-1000", mounted && activePulse && "text-red-600 animate-pulse")} />
                  <div className="absolute inset-0 bg-red-600/5 rounded-full blur-[140px] animate-pulse" />
                  {mounted && activePulse && (
                    <div className="absolute inset-0 flex items-center justify-center">
                       <div className="size-96 border-4 border-red-600/20 rounded-full animate-ping" />
                    </div>
                  )}
                </div>
                
                <h3 className="text-8xl font-headline font-bold text-white mb-10 tracking-tighter italic drop-shadow-[0_0_50px_rgba(220,38,38,0.6)]">PsyOps Center</h3>
                <p className="text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-24 text-3xl font-medium italic">
                  Initialize the <span className="text-red-600 font-bold uppercase tracking-widest shadow-[0_0_10px_red]">Predator Brain</span>. This autonomous agent uses <span className="text-red-500 font-bold italic">Search Grounding</span> to anchor lethal influence vectors in reality via the Alpha Core.
                </p>
                
                <div className="flex gap-12">
                  <Badge variant="outline" className="bg-white/5 py-8 px-16 text-[15px] tracking-[1em] uppercase border-red-600/40 rounded-full shadow-2xl backdrop-blur-3xl group-hover:border-red-600/80 transition-all duration-1000">Neural Predator Matrix</Badge>
                  <Badge variant="outline" className="bg-white/5 py-8 px-16 text-[15px] tracking-[1em] uppercase border-red-600/40 rounded-full shadow-2xl backdrop-blur-3xl group-hover:border-red-600/80 transition-all duration-1000">v18.0 Strike Suite</Badge>
                </div>

                <div className="absolute bottom-20 flex gap-4 items-end h-28 opacity-10">
                   {mounted && Array.from({ length: 70 }).map((_, i) => (
                     <div key={i} className="w-2.5 bg-red-600 rounded-full shadow-[0_0_10px_red]" style={{ height: `${20 + Math.random() * 80}%`, animation: `pulse 1.5s infinite ${i * 0.04}s` }} />
                   ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
