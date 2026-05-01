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
  Globe
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { aiDrivenSocialEngineeringBots } from "@/ai/flows/ai-driven-social-engineering-bots"
import { modularAiKnowledgeBaseReporting } from "@/ai/flows/modular-ai-knowledge-base-reporting"
import { toast } from "@/hooks/use-toast"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { ResponsiveContainer, Radar as RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, RadarChart as RechartsRadar } from 'recharts'
import Link from "next/link"

export default function SocialPage() {
  const [loading, setLoading] = React.useState(false)
  const [contextLoading, setContextLoading] = React.useState(false)
  const [platform, setPlatform] = React.useState<"telegram" | "whatsapp" | "other">("telegram")
  const [persona, setPersona] = React.useState("")
  const [goal, setGoal] = React.useState("")
  const [intelQuery, setIntelQuery] = React.useState("")
  const [kbContext, setKbContext] = React.useState("")
  const [result, setResult] = React.useState<any>(null)
  const [activePulse, setActivePulse] = React.useState(false)

  // بيانات افتراضية للرادار التحليلي
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
      toast({ title: "Intelligence Synced", description: "Knowledge base context added to the vector." })
    } catch (err) {
      toast({ variant: "destructive", title: "Intel Sync Failed", description: "Could not access the neural vault." })
    } finally {
      setContextLoading(false)
    }
  }

  const handleGenerate = async () => {
    if (!persona || !goal) {
      toast({ title: "Input Required", description: "Target persona and campaign goal are needed." })
      return
    }

    setLoading(true)
    setActivePulse(true)
    try {
      const data = await aiDrivenSocialEngineeringBots({
        platform,
        targetPersona: persona,
        campaignGoal: goal,
        knowledgeBaseContext: kbContext
      })
      setResult(data)
      toast({ title: "Bot Intelligence Ready", description: "Psychological vector mapped and message generated." })
    } catch (err) {
      toast({ title: "Error", description: "Failed to initialize social engineering logic." })
    } finally {
      setLoading(false)
      setTimeout(() => setActivePulse(false), 1500)
    }
  }

  return (
    <div className="flex min-h-screen bg-black">
      <SidebarNav />
      <main className="flex-1 ml-64 p-8 bg-[radial-gradient(circle_at_bottom_right,rgba(170,76,255,0.05),transparent)] overflow-y-auto">
        {/* Header Section */}
        <header className="mb-12 flex justify-between items-start">
          <div className="animate-in fade-in slide-in-from-left-4 duration-700">
            <div className="flex items-center gap-2 mb-2">
              <Badge className="bg-primary/20 text-primary border-primary/30 text-[10px] uppercase font-bold tracking-[0.3em] px-2 py-0 animate-pulse">Psychological Ops Center</Badge>
              <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">Al-Mu'izz Neural Link v17.2</span>
            </div>
            <h2 className="text-5xl font-headline font-bold text-white mb-2 tracking-tighter italic drop-shadow-[0_0_15px_rgba(170,76,255,0.3)]">Social Engineering Suite</h2>
            <p className="text-muted-foreground max-w-xl">Automated Human Intelligence (HUMINT) and high-precision persuasive engagement engine connected to the Sovereign Core.</p>
          </div>
          <div className="flex gap-4">
             <div className="text-right glass p-3 rounded-2xl border border-white/5 bg-black/40">
                <div className="text-lg font-code text-emerald-500 font-bold tracking-widest">ENCRYPTED</div>
                <div className="text-[9px] text-muted-foreground uppercase font-bold tracking-widest">Neural Link: AES-8192</div>
              </div>
              <Button variant="outline" className="h-16 px-6 rounded-2xl border-white/10 bg-white/5 hover:bg-white/10 group transition-all">
                <History className="size-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </Button>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Column: Command & Parameters */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="glass-card border-primary/20 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse" />
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2 text-sm uppercase tracking-[0.2em]">
                  <Brain className="size-4 text-primary" />
                  Bot Parameters
                </CardTitle>
                <CardDescription className="text-[10px] uppercase font-bold opacity-60">Initialize PsyOps Vector</CardDescription>
              </CardHeader>
              <CardContent className="space-y-5">
                <div className="space-y-2">
                  <Label className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">Platform Matrix</Label>
                  <Select value={platform} onValueChange={(v: any) => setPlatform(v)}>
                    <SelectTrigger className="bg-black/60 border-white/5 h-11 rounded-xl focus:ring-primary/20">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-black/90 border-white/10 backdrop-blur-xl">
                      <SelectItem value="telegram">Telegram Protocol</SelectItem>
                      <SelectItem value="whatsapp">WhatsApp Matrix</SelectItem>
                      <SelectItem value="other">Custom Overlay</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest flex items-center gap-2">
                    <Database className="size-3 text-primary" />
                    Neural Vault (RAG)
                  </Label>
                  <div className="flex gap-2">
                    <Input 
                      placeholder="Context query..."
                      className="bg-black/60 border-white/5 h-10 text-xs rounded-xl focus:border-primary/40"
                      value={intelQuery}
                      onChange={(e) => setIntelQuery(e.target.value)}
                    />
                    <Button size="icon" variant="outline" className="size-10 shrink-0 border-white/10 rounded-xl hover:bg-primary/20" onClick={fetchKbIntel} disabled={contextLoading}>
                      {contextLoading ? <Loader2 className="size-4 animate-spin text-primary" /> : <LinkIcon className="size-4 text-primary" />}
                    </Button>
                  </div>
                  {kbContext && (
                    <div className="flex items-center gap-1.5 animate-in slide-in-from-top-1">
                      <ShieldCheck className="size-2.5 text-emerald-500" />
                      <span className="text-[8px] text-emerald-500 font-bold uppercase tracking-tighter">Context Integrated</span>
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <Label className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">Target Persona</Label>
                  <Textarea 
                    placeholder="e.g., C-Level Executive, tech-savvy, aggressive but values loyalty..."
                    className="bg-black/60 border-white/5 min-h-[120px] text-sm rounded-xl focus:border-primary/40 transition-all resize-none"
                    value={persona}
                    onChange={(e) => setPersona(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">Campaign Goal</Label>
                  <Input 
                    placeholder="e.g., Extract VPN access credentials"
                    className="bg-black/60 border-white/5 h-11 text-sm rounded-xl focus:border-primary/40"
                    value={goal}
                    onChange={(e) => setGoal(e.target.value)}
                  />
                </div>

                <Button 
                  className="w-full bg-primary hover:bg-primary/90 text-white shadow-[0_10px_40px_rgba(170,76,255,0.25)] h-14 rounded-2xl group transition-all duration-500"
                  onClick={handleGenerate}
                  disabled={loading}
                >
                  {loading ? <Loader2 className="size-5 mr-2 animate-spin" /> : <Zap className="size-5 mr-2 group-hover:scale-125 transition-transform duration-500" />}
                  <span className="font-bold uppercase tracking-widest text-xs">Deploy AI Engagement</span>
                </Button>
              </CardContent>
            </Card>

            <Card className="glass-card bg-black/40 border-white/5">
              <CardHeader>
                <CardTitle className="text-white text-[10px] uppercase tracking-[0.3em] flex items-center gap-2 opacity-60">
                   <Target className="size-3 text-red-500" />
                   Neural Registry
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  { id: "NODE_82", platform: "Telegram", status: "Priming", level: 85, color: "bg-primary" },
                  { id: "NODE_15", platform: "WhatsApp", status: "Extraction", level: 92, color: "bg-emerald-500" },
                  { id: "NODE_42", platform: "Custom", status: "Neutralized", level: 100, color: "bg-blue-500" }
                ].map((t, i) => (
                  <div key={i} className="bg-white/5 p-3 rounded-2xl border border-white/5 flex items-center justify-between group cursor-pointer hover:border-primary/30 transition-all">
                    <div className="flex items-center gap-3">
                      <div className={cn("size-2 rounded-full animate-pulse", t.level === 100 ? "bg-blue-500" : "bg-emerald-500")} />
                      <div className="flex flex-col">
                        <span className="text-[11px] font-bold text-white tracking-tighter">TARGET_{t.id}</span>
                        <span className="text-[8px] text-muted-foreground uppercase font-bold">{t.platform}</span>
                      </div>
                    </div>
                    <div className="text-right">
                       <Badge variant="outline" className="text-[8px] bg-black/40 h-5 mb-1 px-1.5">{t.status}</Badge>
                       <div className="h-0.5 w-12 bg-white/5 rounded-full overflow-hidden">
                          <div className={cn("h-full transition-all duration-1000", t.color)} style={{ width: `${t.level}%` }} />
                       </div>
                    </div>
                  </div>
                ))}
                <Button variant="ghost" className="w-full text-[9px] uppercase tracking-widest text-muted-foreground hover:text-primary mt-2" asChild>
                   <Link href="/recon">Sync from Recon Hub <ChevronRight className="size-3 ml-1"/></Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Right Column: Dynamic Analysis & Interaction */}
          <div className="lg:col-span-3">
            {result ? (
              <div className="space-y-8 animate-in fade-in zoom-in-95 duration-700">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Strategy & Message Area */}
                  <Card className="glass-card border-emerald-500/20 md:col-span-2 overflow-hidden shadow-[0_0_50px_rgba(16,185,129,0.1)]">
                    <CardHeader className="bg-emerald-500/5 border-b border-white/5 flex flex-row items-center justify-between p-8">
                      <div className="flex items-center gap-4">
                        <div className="size-16 rounded-3xl bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                          <MessageSquare className="size-8 text-emerald-500" />
                        </div>
                        <div>
                          <CardTitle className="text-3xl text-white italic tracking-tighter">Engagement Strategy</CardTitle>
                          <CardDescription className="text-[10px] uppercase font-bold text-emerald-500 tracking-[0.4em] mt-1">Neural PsyOps Payload v17.2</CardDescription>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                         <Badge className={cn(
                           "font-code text-[10px] px-4 py-1.5 rounded-full border-white/10",
                           result.riskLevel === 'Extreme' ? 'bg-red-500/20 text-red-500 animate-pulse' : 'bg-emerald-500/20 text-emerald-500'
                         )}>
                           RISK: {result.riskLevel}
                         </Badge>
                         <span className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest">Operational Ready</span>
                      </div>
                    </CardHeader>
                    <CardContent className="p-10">
                      <div className="bg-black/60 rounded-[2.5rem] p-12 border border-white/5 relative group mb-12 overflow-hidden shadow-inner hover:border-emerald-500/30 transition-all">
                        <div className="absolute top-6 left-8 text-[10px] font-bold text-primary uppercase tracking-[0.5em] opacity-30">Strategic Communication Vector</div>
                        <p className="text-3xl text-white font-medium italic leading-relaxed pt-10 relative z-10 drop-shadow-sm">
                          "{result.generatedMessage}"
                        </p>
                        
                        <div className="flex gap-4 mt-16 pt-10 border-t border-white/5 relative z-10">
                          <Button variant="outline" className="bg-white/5 border-white/10 text-[10px] rounded-2xl h-12 px-8 hover:bg-emerald-500/10 hover:border-emerald-500/30 transition-all font-bold tracking-widest" onClick={() => {
                            navigator.clipboard.writeText(result.generatedMessage);
                            toast({ title: "Payload Extracted", description: "Vector copied to tactical clipboard." });
                          }}>
                            <Copy className="size-4 mr-3" /> COPY PAYLOAD
                          </Button>
                          <Button variant="outline" className="bg-white/5 border-white/10 text-[10px] rounded-2xl h-12 px-8 font-bold tracking-widest">
                            <Sparkles className="size-4 mr-3 text-primary" /> GENERATE VARIATIONS
                          </Button>
                          
                          <Button className="bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20 text-[10px] rounded-2xl h-12 px-8 ml-auto font-bold tracking-widest group" asChild>
                            <Link href="/red-team">
                              <Hammer className="size-4 mr-3 group-hover:rotate-45 transition-transform duration-500" /> FORGE COMPANION TOOL
                            </Link>
                          </Button>
                        </div>
                        
                        {/* Decorative Background Elements */}
                        <div className="absolute -bottom-10 -right-10 p-8 opacity-[0.03] pointer-events-none group-hover:opacity-[0.06] transition-opacity">
                           <Fingerprint className="size-64 text-emerald-500" />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="space-y-6">
                          <h4 className="text-[11px] font-bold text-emerald-500 uppercase tracking-[0.5em] flex items-center gap-3">
                            <ShieldCheck className="size-4" />
                            Tactical Rationale
                          </h4>
                          <div className="p-8 rounded-3xl bg-white/5 border border-white/5 text-sm text-muted-foreground leading-loose italic relative">
                             <div className="absolute top-4 right-4 opacity-10"><Info className="size-8"/></div>
                            {result.rationale}
                          </div>
                        </div>
                        <div className="space-y-6">
                          <h4 className="text-[11px] font-bold text-primary uppercase tracking-[0.5em] flex items-center gap-3">
                            <TrendingUp className="size-4" />
                            Next Strategic Move
                          </h4>
                          <div className="p-10 rounded-[2.5rem] bg-primary/5 border border-primary/10 text-xl text-primary font-medium italic relative overflow-hidden group hover:scale-[1.02] transition-transform">
                            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity animate-pulse" />
                            <ChevronRight className="absolute top-4 right-4 size-5 text-primary/30" />
                            {result.nextStepSuggestion}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Analytic Neural Radar Column */}
                  <div className="space-y-6">
                    <Card className="glass-card border-primary/20 h-full relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-primary/50 to-transparent" />
                      <CardHeader>
                        <CardTitle className="text-white text-[11px] uppercase tracking-[0.4em] flex items-center gap-3">
                          <Radar className="size-4 text-primary animate-pulse" />
                          Psychological Pulse
                        </CardTitle>
                        <CardDescription className="text-[9px] uppercase font-bold opacity-40">Neural Impact Matrix</CardDescription>
                      </CardHeader>
                      <CardContent className="p-6 flex flex-col items-center">
                        <div className="w-full aspect-square mb-10 relative">
                          <ResponsiveContainer width="100%" height="100%">
                            <RechartsRadar cx="50%" cy="50%" outerRadius="70%" data={radarData}>
                              <PolarGrid stroke="#ffffff08" />
                              <PolarAngleAxis dataKey="subject" tick={{ fill: '#ffffff40', fontSize: 9, fontWeight: 'bold' }} />
                              <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                              <RadarChart
                                name="Impact"
                                dataKey="A"
                                stroke="hsl(var(--primary))"
                                fill="hsl(var(--primary))"
                                fillOpacity={0.4}
                                animationBegin={300}
                                animationDuration={1500}
                              />
                            </RechartsRadar>
                          </ResponsiveContainer>
                          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
                             <Brain className="size-32 text-primary" />
                          </div>
                        </div>

                        <div className="w-full space-y-4">
                          <h4 className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-6 border-b border-white/5 pb-2">Active Influence Vectors</h4>
                          {result.psychologicalVectors.map((v: any, i: number) => (
                            <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/5 flex flex-col gap-3 hover:bg-white/[0.08] hover:border-primary/40 transition-all group relative overflow-hidden">
                              <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:scale-150 transition-transform"><Zap className="size-12"/></div>
                              <div className="flex justify-between items-center relative z-10">
                                <span className="text-[10px] font-bold text-white uppercase tracking-tighter">{v.vector}</span>
                                <Badge className={cn(
                                  "text-[8px] h-4.5 tracking-tighter px-2 font-bold",
                                  v.impact === 'High' ? 'bg-red-500/20 text-red-500' : 'bg-emerald-500/20 text-emerald-500'
                                )}>
                                  {v.impact} IMPACT
                                </Badge>
                              </div>
                              <p className="text-[11px] text-muted-foreground leading-relaxed italic relative z-10">"{v.description}"</p>
                            </div>
                          ))}
                        </div>

                        <div className="mt-10 pt-8 border-t border-white/5 w-full">
                           <div className="flex justify-between text-[11px] font-bold mb-4 uppercase text-muted-foreground tracking-[0.3em]">
                              <span>Persuasion Probability</span>
                              <span className="text-emerald-500 text-lg">94.8%</span>
                           </div>
                           <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                              <div className="h-full bg-emerald-500 w-[94.8%] animate-pulse shadow-[0_0_15px_rgba(16,185,129,0.5)]" />
                           </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            ) : (
              <div className="h-full min-h-[750px] border-2 border-dashed border-white/5 rounded-[4rem] flex flex-col items-center justify-center text-center p-12 bg-black/10 group transition-all hover:bg-black/20 relative overflow-hidden">
                {loading && (
                   <div className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-xl z-50">
                      <div className="flex flex-col items-center gap-6">
                         <div className="relative">
                            <div className="size-24 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
                            <div className="absolute inset-0 flex items-center justify-center">
                               <Brain className="size-8 text-primary animate-pulse" />
                            </div>
                         </div>
                         <div className="flex flex-col items-center gap-1">
                            <span className="text-sm font-code text-primary uppercase tracking-[0.6em] animate-pulse font-bold">Mapping Neural Vectors</span>
                            <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-medium">Synthesizing High-Precision Influence...</span>
                         </div>
                      </div>
                   </div>
                )}
                
                {/* Visual Placeholder */}
                <div className="size-48 bg-primary/5 rounded-full flex items-center justify-center mb-12 border border-primary/10 group-hover:scale-110 transition-transform duration-1000 relative">
                  <Users className="size-24 text-primary/20 transition-all group-hover:text-primary/40" />
                  <div className="absolute inset-0 bg-primary/5 rounded-full blur-[80px] animate-pulse" />
                  {activePulse && (
                    <div className="absolute inset-0 flex items-center justify-center">
                       <div className="size-64 border border-primary/20 rounded-full animate-ping" />
                    </div>
                  )}
                </div>
                
                <h3 className="text-6xl font-headline font-bold text-white mb-8 tracking-tighter italic drop-shadow-2xl">Psychological Operations Center</h3>
                <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-14 text-xl font-medium">
                  Initialize the Al-Mu'izz <span className="text-primary font-bold">Autonomous Engagement Bot</span>. Define the target persona and sync with the <span className="text-emerald-500 font-bold italic">Neural Vault</span> to map high-precision influence vectors for advanced HUMINT operations.
                </p>
                
                <div className="flex gap-8">
                  <Badge variant="outline" className="bg-white/5 py-4 px-10 text-[11px] tracking-[0.5em] uppercase border-white/10 rounded-[2rem] shadow-xl">Human Intelligence Matrix</Badge>
                  <Badge variant="outline" className="bg-white/5 py-4 px-10 text-[11px] tracking-[0.5em] uppercase border-white/10 rounded-[2rem] shadow-xl">v17.2 Tactical Link</Badge>
                </div>

                {/* Animated Spectrum at bottom of placeholder */}
                <div className="absolute bottom-12 flex gap-1 items-end h-16 opacity-10">
                   {Array.from({ length: 40 }).map((_, i) => (
                     <div key={i} className="w-1 bg-primary rounded-full" style={{ height: `${Math.random() * 100}%`, animation: `pulse 1.5s infinite ${i * 0.05}s` }} />
                   ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Unified Tactical Footer Overlay (Simulated Neural Link) */}
        <div className="fixed bottom-8 right-8 w-96 h-28 glass rounded-[2.5rem] border border-white/10 p-6 hidden 2xl:block overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-40">
           <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                 <div className="size-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_#10b981]" />
                 <span className="text-[10px] font-bold text-white uppercase tracking-[0.3em]">Neural Link Status: Stable</span>
              </div>
              <div className="flex items-center gap-2">
                 <Globe className="size-3 text-primary/60" />
                 <span className="text-[9px] font-code text-emerald-500/80">LATENCY // 4.2 ms</span>
              </div>
           </div>
           <div className="flex items-end gap-1.5 h-10 px-2">
              {Array.from({ length: 45 }).map((_, i) => (
                <div 
                  key={i} 
                  className="flex-1 bg-primary/40 rounded-full hover:bg-primary transition-colors cursor-pointer" 
                  style={{ 
                    height: `${20 + Math.random() * 80}%`,
                    animation: `pulse 2s infinite ${i * 0.04}s`
                  }} 
                />
              ))}
           </div>
           <div className="mt-2 flex justify-between px-2">
              <span className="text-[7px] text-muted-foreground uppercase font-bold tracking-widest">Spectrum Analysis Active</span>
              <span className="text-[7px] text-primary uppercase font-bold tracking-widest">Al-Mu'izz Core Sync</span>
           </div>
        </div>
      </main>
    </div>
  )
}
