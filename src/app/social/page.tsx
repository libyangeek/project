"use client"

import * as React from "react"
import { SidebarNav } from "@/components/platform/sidebar-nav"
import { 
  MessageSquare, 
  Users, 
  Send, 
  Zap, 
  ShieldCheck, 
  Brain,
  History,
  Copy,
  ChevronRight,
  Loader2,
  Database,
  Target,
  ShieldAlert,
  Fingerprint,
  TrendingUp,
  Search,
  Plus,
  BarChart3,
  Radar,
  Wrench,
  Hammer,
  Sparkles,
  Link as LinkIcon,
  Activity,
  ShieldX,
  Globe,
  Wifi,
  Info,
  Skull,
  Flame
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

  return (
    <div className="flex min-h-screen bg-black">
      <SidebarNav />
      <main className="flex-1 ml-64 p-10 bg-[radial-gradient(circle_at_bottom_right,rgba(239,68,68,0.08),transparent)] overflow-y-auto">
        <header className="mb-16 flex justify-between items-start relative z-10 animate-in fade-in slide-in-from-top-4 duration-1000">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <Badge className="bg-red-600/20 text-red-500 border-red-500/30 text-[11px] uppercase font-bold tracking-[0.4em] px-3 py-0.5 animate-pulse">Psychological Ops Center</Badge>
              <span className="text-[11px] text-muted-foreground uppercase font-bold tracking-[0.2em]">Al-Mu'izz Predator v18.0-ULTIMATE</span>
            </div>
            <h2 className="text-6xl font-headline font-bold text-white mb-3 tracking-tighter italic drop-shadow-[0_0_20px_rgba(239,68,68,0.4)]">Social Ops</h2>
            <p className="text-muted-foreground max-w-2xl text-lg font-medium italic">Automated HUMAN-Intelligence (HUMINT) and aggressive persuasion engine connected to the Alpha Core.</p>
          </div>
          <div className="flex gap-6">
             <div className={cn(
               "text-right glass-card p-5 border transition-all duration-700 h-20 min-w-[200px] rounded-[2rem] shadow-2xl",
               useSearch ? "border-red-600/40 bg-red-950/20" : "border-white/10 bg-black/40"
             )}>
                <div className={cn("text-2xl font-code font-bold tracking-widest flex items-center justify-end gap-3", useSearch ? "text-red-500" : "text-white")}>
                  {useSearch ? <Globe className="size-6 animate-spin-slow" /> : <ShieldCheck className="size-6" />}
                  {useSearch ? "SEARCH_ON" : "OFFLINE"}
                </div>
                <div className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest mt-1">Grounded Intel Status</div>
              </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 relative z-10">
          <div className="lg:col-span-1 space-y-8">
            <Card className="glass-card border-red-600/30 rounded-[3rem] p-4 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent animate-pulse" />
              <CardHeader className="p-8 pb-4">
                <CardTitle className="text-white flex items-center gap-4 text-sm uppercase tracking-[0.3em]">
                  <Brain className="size-5 text-red-600" /> Predator Brain v18
                </CardTitle>
                <CardDescription className="text-[11px] uppercase font-bold opacity-40 italic">PsyOps Orchestration</CardDescription>
              </CardHeader>
              <CardContent className="p-8 pt-0 space-y-8">
                <div className="flex items-center justify-between p-5 rounded-2xl bg-red-600/5 border border-red-600/20 group hover:border-red-600/40 transition-all">
                   <div className="space-y-1">
                      <Label className="text-[11px] font-bold text-white uppercase tracking-widest flex items-center gap-3 italic">
                        <Globe className="size-4 text-red-600" /> Real-time Intel
                      </Label>
                      <p className="text-[9px] text-muted-foreground font-medium uppercase opacity-60">Internet Grounding Active</p>
                   </div>
                   <Switch checked={useSearch} onCheckedChange={setUseSearch} className="data-[state=checked]:bg-red-600" />
                </div>

                <div className="space-y-3">
                  <Label className="text-[10px] uppercase font-bold text-red-500/60 tracking-widest px-2">Platform Matrix</Label>
                  <Select value={platform} onValueChange={(v: any) => setPlatform(v)}>
                    <SelectTrigger className="bg-black/80 border-red-500/20 h-14 rounded-2xl focus:ring-red-600/20">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-black/95 border-red-600/30 backdrop-blur-3xl rounded-2xl">
                      <SelectItem value="telegram" className="rounded-xl">Telegram Protocol</SelectItem>
                      <SelectItem value="whatsapp" className="rounded-xl">WhatsApp Matrix</SelectItem>
                      <SelectItem value="other" className="rounded-xl">Custom Overlay</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-3">
                  <Label className="text-[10px] uppercase font-bold text-red-500/60 tracking-widest px-2">Neural Vault (RAG)</Label>
                  <div className="flex gap-3">
                    <Input 
                      placeholder="Context query..."
                      className="bg-black/80 border-red-500/20 h-12 text-sm rounded-2xl focus:border-red-600/50"
                      value={intelQuery}
                      onChange={(e) => setIntelQuery(e.target.value)}
                    />
                    <Button size="icon" variant="outline" className="size-12 shrink-0 border-white/10 rounded-2xl hover:bg-red-600/20 hover:border-red-600/40" onClick={fetchKbIntel} disabled={contextLoading}>
                      {contextLoading ? <Loader2 className="size-5 animate-spin text-red-600" /> : <LinkIcon className="size-5 text-red-600" />}
                    </Button>
                  </div>
                </div>

                <div className="space-y-3">
                  <Label className="text-[10px] uppercase font-bold text-red-500/60 tracking-widest px-2">Target Persona</Label>
                  <Textarea 
                    placeholder="e.g., Lead Developer, focuses on Golang, public github active..."
                    className="bg-black/80 border-red-500/20 min-h-[120px] text-sm rounded-2xl focus:border-red-600/50 transition-all resize-none font-medium italic"
                    value={persona}
                    onChange={(e) => setPersona(e.target.value)}
                  />
                </div>

                <div className="space-y-3">
                  <Label className="text-[10px] uppercase font-bold text-red-500/60 tracking-widest px-2">Campaign Goal</Label>
                  <Input 
                    placeholder="e.g., Extract API keys via phishing"
                    className="bg-black/80 border-red-500/20 h-14 text-sm rounded-2xl focus:border-red-600/50 italic"
                    value={goal}
                    onChange={(e) => setGoal(e.target.value)}
                  />
                </div>

                <Button 
                  className="w-full bg-red-600 hover:bg-red-700 text-white shadow-2xl shadow-red-600/40 h-20 rounded-[2rem] group transition-all duration-700"
                  onClick={handleGenerate}
                  disabled={loading}
                >
                  {loading ? <Loader2 className="size-7 mr-4 animate-spin" /> : <Zap className="size-7 mr-4 group-hover:scale-125 transition-transform duration-700" />}
                  <span className="font-bold uppercase tracking-[0.4em] text-xs">Deploy Predator Brain</span>
                </Button>
              </CardContent>
            </Card>

            <Card className="glass-card border-red-500/10 bg-black/60 rounded-[3rem]">
              <CardHeader className="p-8 pb-4">
                <CardTitle className="text-white text-[11px] uppercase tracking-[0.5em] flex items-center gap-4 opacity-40 italic font-bold">
                   <Wifi className="size-4 text-red-600" /> Grounded Intelligence
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 pt-0 space-y-6">
                 <div className="space-y-3">
                    <div className="flex justify-between items-center text-[10px] font-bold uppercase text-muted-foreground tracking-[0.3em]">
                       <span>Confidence Matrix</span>
                       <span className="text-red-500">98.2%</span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden border border-white/5">
                       <div className="h-full bg-red-600 w-[98.2%] animate-pulse shadow-[0_0_10px_red]" />
                    </div>
                 </div>
                 <div className="p-5 rounded-2xl bg-white/5 border border-white/5 text-[11px] text-muted-foreground italic leading-relaxed font-medium">
                    "The specialized Predator Brain is pre-seeded with 1.4M psychological profiles and 2025 influence patterns. Real-time grounding enabled via the Alpha Node."
                 </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-3">
            {result ? (
              <div className="space-y-10 animate-in fade-in zoom-in-95 duration-1000">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                  <Card className="glass-card border-red-600/40 md:col-span-2 overflow-hidden shadow-[0_0_80px_rgba(239,68,68,0.2)] rounded-[3.5rem]">
                    <CardHeader className="bg-red-950/20 border-b border-red-600/20 flex flex-row items-center justify-between p-10">
                      <div className="flex items-center gap-6">
                        <div className="size-20 rounded-[2.5rem] bg-red-600 flex items-center justify-center border border-red-400 shadow-[0_0_30px_rgba(239,68,68,0.4)]">
                          <MessageSquare className="size-10 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-4xl text-white italic tracking-tighter uppercase">Strategic Strike</CardTitle>
                          <CardDescription className="text-[12px] uppercase font-bold text-red-500 tracking-[0.6em] mt-2 italic">Search-Augmented Predator Vector</CardDescription>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-3">
                         <Badge className={cn(
                           "font-code text-[11px] px-6 py-2 rounded-full border-red-500/30 shadow-2xl",
                           result.riskLevel === 'Extreme' ? 'bg-red-600 text-white animate-pulse' : 'bg-red-600/20 text-red-500'
                         )}>
                           STRIKE_LVL: {result.riskLevel}
                         </Badge>
                         <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.4em] opacity-40">Grounding Sync: 100%</span>
                      </div>
                    </CardHeader>
                    <CardContent className="p-12">
                      {result.intelligenceInsights && result.intelligenceInsights.length > 0 && (
                        <div className="mb-10 p-8 rounded-[2rem] bg-red-600/5 border border-red-600/20 animate-in slide-in-from-top-4 shadow-inner">
                           <h4 className="text-[12px] font-bold text-red-500 uppercase tracking-[0.6em] mb-6 flex items-center gap-4 italic">
                             <Search className="size-4" /> Predator Intelligence Insights
                           </h4>
                           <ul className="space-y-4">
                              {result.intelligenceInsights.map((insight: string, idx: number) => (
                                <li key={idx} className="text-sm text-muted-foreground flex gap-4 italic font-medium opacity-80 hover:opacity-100 transition-opacity">
                                   <div className="size-1.5 mt-2 rounded-full bg-red-600 shadow-[0_0_5px_red] shrink-0" />
                                   {insight}
                                </li>
                              ))}
                           </ul>
                        </div>
                      )}

                      <div className="bg-black/90 rounded-[4rem] p-16 border border-red-600/20 relative group mb-12 overflow-hidden shadow-2xl hover:border-red-600/40 transition-all duration-700">
                        <div className="absolute top-8 left-10 text-[11px] font-bold text-red-600/40 uppercase tracking-[0.8em] italic">Strike Engagement Vector</div>
                        <p className="text-4xl text-white font-medium italic leading-relaxed pt-12 relative z-10 drop-shadow-2xl">
                          "{result.generatedMessage}"
                        </p>
                        
                        <div className="flex gap-6 mt-20 pt-12 border-t border-white/5 relative z-10">
                          <Button variant="outline" className="bg-white/5 border-white/10 text-[11px] rounded-2xl h-16 px-12 hover:bg-red-600/20 hover:border-red-600/40 transition-all font-bold tracking-[0.4em] uppercase" onClick={() => {
                            navigator.clipboard.writeText(result.generatedMessage);
                            toast({ title: "Payload Extracted" });
                          }}>
                            <Copy className="size-5 mr-4" /> Copy Payload
                          </Button>
                          <Button variant="outline" className="bg-white/5 border-white/10 text-[11px] rounded-2xl h-16 px-12 font-bold tracking-[0.4em] uppercase hover:bg-red-600/20 transition-all">
                            <Sparkles className="size-5 mr-4 text-red-600" /> Optimize Tone
                          </Button>
                          
                          <Button className="bg-red-600/10 border border-red-600/30 text-red-500 hover:bg-red-600/20 text-[11px] rounded-2xl h-16 px-12 ml-auto font-bold tracking-[0.4em] group uppercase" asChild>
                            <Link href="/red-team">
                              <Hammer className="size-5 mr-4 group-hover:rotate-45 transition-transform duration-700" /> Forge Companion
                            </Link>
                          </Button>
                        </div>
                        
                        <div className="absolute -bottom-10 -right-10 p-12 opacity-[0.03] pointer-events-none group-hover:opacity-[0.1] transition-opacity">
                           <Skull className="size-72 text-red-600" />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        <div className="space-y-8">
                          <h4 className="text-[12px] font-bold text-red-500 uppercase tracking-[0.6em] flex items-center gap-4 italic">
                            <ShieldCheck className="size-5" /> Tactical Rationale
                          </h4>
                          <div className="p-10 rounded-[2.5rem] bg-white/5 border border-white/5 text-lg text-muted-foreground leading-loose italic relative shadow-inner">
                             <div className="absolute top-6 right-6 opacity-10"><Info className="size-10"/></div>
                            {result.rationale}
                          </div>
                        </div>
                        <div className="space-y-8">
                          <h4 className="text-[12px] font-bold text-red-500 uppercase tracking-[0.6em] flex items-center gap-4 italic">
                            <TrendingUp className="size-5" /> Next Tactical Move
                          </h4>
                          <div className="p-12 rounded-[3.5rem] bg-red-600/5 border border-red-600/20 text-2xl text-red-500 font-medium italic relative overflow-hidden group hover:scale-[1.03] transition-all duration-700 shadow-2xl">
                            <div className="absolute inset-0 bg-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity animate-pulse" />
                            <ChevronRight className="absolute top-6 right-6 size-6 text-red-600/30" />
                            {result.nextStepSuggestion}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="space-y-8">
                    <Card className="glass-card border-red-600/30 h-full relative overflow-hidden rounded-[3rem] shadow-2xl">
                      <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-transparent via-red-600/60 to-transparent" />
                      <CardHeader className="p-8">
                        <CardTitle className="text-white text-[12px] uppercase tracking-[0.5em] flex items-center gap-4 font-bold italic">
                          <Radar className="size-5 text-red-600 animate-pulse" /> Predator Pulse
                        </CardTitle>
                        <CardDescription className="text-[10px] uppercase font-bold opacity-40 tracking-widest mt-1">Neural Impact Matrix</CardDescription>
                      </CardHeader>
                      <CardContent className="p-8 flex flex-col items-center">
                        <div className="w-full aspect-square mb-12 relative">
                          <ResponsiveContainer width="100%" height="100%">
                            <RechartsRadar cx="50%" cy="50%" outerRadius="75%" data={radarData}>
                              <PolarGrid stroke="#ff000015" />
                              <PolarAngleAxis dataKey="subject" tick={{ fill: '#ff000060', fontSize: 10, fontWeight: 'bold' }} />
                              <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                              <RadarChart
                                name="Impact"
                                dataKey="A"
                                stroke="hsl(var(--primary))"
                                fill="hsl(var(--primary))"
                                fillOpacity={0.5}
                                animationBegin={400}
                                animationDuration={2000}
                              />
                            </RechartsRadar>
                          </ResponsiveContainer>
                          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
                             <Skull className="size-48 text-red-600" />
                          </div>
                        </div>

                        <div className="w-full space-y-6">
                          <h4 className="text-[11px] font-bold text-muted-foreground uppercase tracking-[0.6em] mb-8 border-b border-white/5 pb-4 italic">Active Strike Vectors</h4>
                          {result.psychologicalVectors.map((v: any, i: number) => (
                            <div key={i} className="p-5 rounded-3xl bg-black/60 border border-white/5 flex flex-col gap-4 hover:bg-red-950/10 hover:border-red-600/40 transition-all duration-500 group relative overflow-hidden">
                              <div className="absolute -right-6 -bottom-6 opacity-5 group-hover:scale-150 transition-transform"><Zap className="size-16 text-red-600"/></div>
                              <div className="flex justify-between items-center relative z-10">
                                <span className="text-[11px] font-bold text-white uppercase tracking-widest italic">{v.vector}</span>
                                <Badge className={cn(
                                  "text-[9px] px-3 font-bold uppercase tracking-tighter",
                                  v.impact === 'High' ? 'bg-red-600 text-white shadow-[0_0_10px_red]' : 'bg-red-600/20 text-red-500'
                                )}>
                                  {v.impact} IMPACT
                                </Badge>
                              </div>
                              <p className="text-xs text-muted-foreground leading-relaxed italic relative z-10 opacity-70 group-hover:opacity-100 transition-opacity">"{v.description}"</p>
                            </div>
                          ))}
                        </div>

                        <div className="mt-12 pt-10 border-t border-white/5 w-full">
                           <div className="flex justify-between text-[12px] font-bold mb-5 uppercase text-muted-foreground tracking-[0.4em] italic">
                              <span>Strike Probability</span>
                              <span className="text-red-500 text-2xl">98.4%</span>
                           </div>
                           <div className="h-3 w-full bg-white/5 rounded-full overflow-hidden border border-white/5 p-0.5">
                              <div className="h-full bg-red-600 w-[98.4%] animate-pulse shadow-[0_0_20px_rgba(255,0,0,0.6)] rounded-full" />
                           </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            ) : (
              <div className="h-full min-h-[850px] border-2 border-dashed border-red-600/20 rounded-[5rem] flex flex-col items-center justify-center text-center p-20 bg-black/40 group transition-all hover:bg-red-950/5 relative overflow-hidden shadow-2xl">
                <div className="size-64 bg-red-600/5 rounded-full flex items-center justify-center mb-16 border border-red-600/10 group-hover:scale-110 transition-transform duration-1000 relative">
                  <Brain className={cn("size-32 text-red-600/20 transition-all duration-1000", mounted && activePulse && "text-red-600 animate-pulse")} />
                  <div className="absolute inset-0 bg-red-600/5 rounded-full blur-[100px] animate-pulse" />
                  {mounted && activePulse && (
                    <div className="absolute inset-0 flex items-center justify-center">
                       <div className="size-80 border border-red-600/20 rounded-full animate-ping" />
                    </div>
                  )}
                </div>
                
                <h3 className="text-7xl font-headline font-bold text-white mb-10 tracking-tighter italic drop-shadow-2xl">PsyOps Center</h3>
                <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-20 text-3xl font-medium italic">
                  Initialize the <span className="text-red-600 font-bold uppercase tracking-widest">Predator Brain</span>. This autonomous agent uses <span className="text-red-500 font-bold italic">Search Grounding</span> to anchor lethal influence vectors in reality via the Alpha Core.
                </p>
                
                <div className="flex gap-10">
                  <Badge variant="outline" className="bg-white/5 py-6 px-12 text-[14px] tracking-[0.6em] uppercase border-red-600/30 rounded-full shadow-2xl backdrop-blur-3xl group-hover:border-red-600/60 transition-colors">Neural Predator Matrix</Badge>
                  <Badge variant="outline" className="bg-white/5 py-6 px-12 text-[14px] tracking-[0.6em] uppercase border-red-600/30 rounded-full shadow-2xl backdrop-blur-3xl group-hover:border-red-600/60 transition-colors">v18.0 Strike Suite</Badge>
                </div>

                <div className="absolute bottom-16 flex gap-2 items-end h-20 opacity-10">
                   {mounted && Array.from({ length: 50 }).map((_, i) => (
                     <div key={i} className="w-1.5 bg-red-600 rounded-full" style={{ height: `${Math.random() * 100}%`, animation: `pulse 1.5s infinite ${i * 0.05}s` }} />
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