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
  Link as LinkIcon
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
  const [activeTab, setActiveTab] = React.useState("compose")

  // بيانات افتراضية للرادار التحليلي
  const radarData = result?.psychologicalVectors?.map((v: any) => ({
    subject: v.vector,
    A: v.impact === 'High' ? 100 : v.impact === 'Medium' ? 70 : 40,
    fullMark: 100,
  })) || []

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
    try {
      const data = await aiDrivenSocialEngineeringBots({
        platform,
        targetPersona: persona,
        campaignGoal: goal,
        knowledgeBaseContext: kbContext
      })
      setResult(data)
      setActiveTab("analysis")
      toast({ title: "Bot Intelligence Ready", description: "Psychological vector mapped and message generated." })
    } catch (err) {
      toast({ title: "Error", description: "Failed to initialize social engineering logic." })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen bg-black">
      <SidebarNav />
      <main className="flex-1 ml-64 p-8 bg-[radial-gradient(circle_at_bottom_right,rgba(170,76,255,0.05),transparent)]">
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
                <div className="text-[9px] text-muted-foreground uppercase font-bold tracking-widest">Neural Encryption: AES-8K</div>
              </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Column: Parameters & Target Selection */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="glass-card border-primary/20 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse" />
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2 text-sm uppercase tracking-widest">
                  <Brain className="size-4 text-primary" />
                  Bot Parameters
                </CardTitle>
                <CardDescription className="text-[10px] uppercase">Initialize PsyOps Vector</CardDescription>
              </CardHeader>
              <CardContent className="space-y-5">
                <div className="space-y-2">
                  <Label className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">Platform Selection</Label>
                  <Select value={platform} onValueChange={(v: any) => setPlatform(v)}>
                    <SelectTrigger className="bg-black/60 border-white/5 h-11 rounded-xl focus:ring-primary/20">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-black/90 border-white/10">
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
                      className="bg-black/60 border-white/5 h-10 text-xs rounded-xl"
                      value={intelQuery}
                      onChange={(e) => setIntelQuery(e.target.value)}
                    />
                    <Button size="icon" variant="outline" className="size-10 shrink-0 border-white/10 rounded-xl hover:bg-primary/20" onClick={fetchKbIntel} disabled={contextLoading}>
                      {contextLoading ? <Loader2 className="size-4 animate-spin" /> : <LinkIcon className="size-4 text-primary" />}
                    </Button>
                  </div>
                  {kbContext && <div className="text-[8px] text-emerald-500 font-bold uppercase mt-1 animate-pulse">✓ Context Integrated</div>}
                </div>

                <div className="space-y-2">
                  <Label className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">Target Persona</Label>
                  <Textarea 
                    placeholder="e.g., C-Level Executive, tech-savvy, aggressive but values loyalty..."
                    className="bg-black/60 border-white/5 min-h-[120px] text-sm rounded-xl focus:border-primary/40 transition-all"
                    value={persona}
                    onChange={(e) => setPersona(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">Campaign Goal</Label>
                  <Input 
                    placeholder="e.g., Extract VPN access credentials"
                    className="bg-black/60 border-white/5 h-11 text-sm rounded-xl"
                    value={goal}
                    onChange={(e) => setGoal(e.target.value)}
                  />
                </div>

                <Button 
                  className="w-full bg-primary hover:bg-primary/90 text-white shadow-[0_10px_30px_rgba(170,76,255,0.2)] h-14 rounded-2xl group transition-all"
                  onClick={handleGenerate}
                  disabled={loading}
                >
                  {loading ? <Loader2 className="size-5 mr-2 animate-spin" /> : <Zap className="size-5 mr-2 group-hover:scale-110 transition-transform" />}
                  <span className="font-bold uppercase tracking-widest text-xs">Deploy AI Bot</span>
                </Button>
              </CardContent>
            </Card>

            <Card className="glass-card bg-black/40">
              <CardHeader>
                <CardTitle className="text-white text-xs uppercase tracking-widest flex items-center gap-2">
                   <Target className="size-4 text-red-500" />
                   Active Targets Registry
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  { id: "NODE_82", platform: "Telegram", status: "Priming", level: 85 },
                  { id: "NODE_15", platform: "WhatsApp", status: "Extraction", level: 92 },
                  { id: "NODE_42", platform: "Custom", status: "Neutralized", level: 100 }
                ].map((t, i) => (
                  <div key={i} className="bg-white/5 p-3 rounded-2xl border border-white/5 flex items-center justify-between group cursor-pointer hover:border-primary/30 transition-all">
                    <div className="flex items-center gap-3">
                      <div className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                      <div className="flex flex-col">
                        <span className="text-xs font-bold text-white tracking-tighter">#{t.id}</span>
                        <span className="text-[9px] text-muted-foreground uppercase">{t.platform}</span>
                      </div>
                    </div>
                    <div className="text-right">
                       <Badge variant="outline" className="text-[8px] bg-black/40 h-5 mb-1">{t.status}</Badge>
                       <div className="h-0.5 w-12 bg-white/5 rounded-full overflow-hidden">
                          <div className="h-full bg-primary" style={{ width: `${t.level}%` }} />
                       </div>
                    </div>
                  </div>
                ))}
                <Button variant="ghost" className="w-full text-[9px] uppercase tracking-widest text-muted-foreground hover:text-primary" asChild>
                   <Link href="/recon">Sync from Recon Registry <ChevronRight className="size-3 ml-1"/></Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Right Column: Analysis & Output */}
          <div className="lg:col-span-3">
            {result ? (
              <div className="space-y-8 animate-in fade-in zoom-in-95 duration-700">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Message Payload Area */}
                  <Card className="glass-card border-emerald-500/20 md:col-span-2 overflow-hidden">
                    <CardHeader className="bg-emerald-500/5 border-b border-white/5 flex flex-row items-center justify-between p-8">
                      <div className="flex items-center gap-4">
                        <div className="size-14 rounded-2xl bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30">
                          <MessageSquare className="size-8 text-emerald-500" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl text-white italic">Engagement Strategy</CardTitle>
                          <CardDescription className="text-[10px] uppercase font-bold text-emerald-500 tracking-[0.2em]">Neural PsyOps Output v17.2</CardDescription>
                        </div>
                      </div>
                      <Badge className={cn(
                        "font-code text-[10px] px-3 py-1",
                        result.riskLevel === 'Extreme' ? 'bg-red-500/20 text-red-500 animate-pulse' : 'bg-emerald-500/20 text-emerald-500'
                      )}>
                        RISK LEVEL: {result.riskLevel}
                      </Badge>
                    </CardHeader>
                    <CardContent className="p-8">
                      <div className="bg-black/60 rounded-[2rem] p-10 border border-white/5 relative group mb-10 overflow-hidden shadow-inner">
                        <div className="absolute top-4 left-6 text-[10px] font-bold text-primary uppercase tracking-[0.4em] opacity-40">Tactical Message Payload</div>
                        <p className="text-2xl text-white font-medium italic leading-relaxed pt-8 relative z-10">
                          "{result.generatedMessage}"
                        </p>
                        <div className="flex gap-4 mt-12 pt-8 border-t border-white/5 relative z-10">
                          <Button variant="outline" size="sm" className="bg-white/5 border-white/10 text-[10px] rounded-xl h-10 px-6 hover:bg-emerald-500/10" onClick={() => {
                            navigator.clipboard.writeText(result.generatedMessage);
                            toast({ title: "Payload Extracted", description: "Message copied to tactical clipboard." });
                          }}>
                            <Copy className="size-4 mr-2" /> COPY PAYLOAD
                          </Button>
                          <Button variant="outline" size="sm" className="bg-white/5 border-white/10 text-[10px] rounded-xl h-10 px-6">
                            <History className="size-4 mr-2" /> VARIATIONS
                          </Button>
                          <Button variant="outline" size="sm" className="bg-primary/10 border-primary/20 text-primary text-[10px] rounded-xl h-10 px-6 ml-auto group" asChild>
                            <Link href="/red-team">
                              <Hammer className="size-4 mr-2 group-hover:rotate-12 transition-transform" /> FORGE COMPANION TOOL
                            </Link>
                          </Button>
                        </div>
                        <div className="absolute bottom-0 right-0 p-8 opacity-[0.03] pointer-events-none">
                           <Fingerprint className="size-48 text-emerald-500" />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="space-y-5">
                          <h4 className="text-[10px] font-bold text-emerald-500 uppercase tracking-[0.4em] flex items-center gap-3">
                            <ShieldCheck className="size-4" />
                            Operational Rationale
                          </h4>
                          <div className="p-6 rounded-2xl bg-white/5 border border-white/5 text-sm text-muted-foreground leading-loose italic">
                            {result.rationale}
                          </div>
                        </div>
                        <div className="space-y-5">
                          <h4 className="text-[10px] font-bold text-primary uppercase tracking-[0.4em] flex items-center gap-3">
                            <TrendingUp className="size-4" />
                            Next Strategic Step
                          </h4>
                          <div className="p-8 rounded-[2rem] bg-primary/5 border border-primary/10 text-lg text-primary font-medium italic relative overflow-hidden group">
                            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity animate-pulse" />
                            <Sparkles className="absolute top-2 right-2 size-4 opacity-20" />
                            {result.nextStepSuggestion}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Analytic Radar Column */}
                  <div className="space-y-6">
                    <Card className="glass-card border-primary/20 h-full">
                      <CardHeader>
                        <CardTitle className="text-white text-xs uppercase tracking-[0.3em] flex items-center gap-2">
                          <Radar className="size-4 text-primary animate-pulse" />
                          Neural Vector Mapping
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-4 flex flex-col items-center">
                        <div className="w-full aspect-square mb-8">
                          <ResponsiveContainer width="100%" height="100%">
                            <RechartsRadar cx="50%" cy="50%" outerRadius="70%" data={radarData}>
                              <PolarGrid stroke="#ffffff10" />
                              <PolarAngleAxis dataKey="subject" tick={{ fill: '#ffffff50', fontSize: 8 }} />
                              <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                              <RadarChart
                                name="Impact"
                                dataKey="A"
                                stroke="hsl(var(--primary))"
                                fill="hsl(var(--primary))"
                                fillOpacity={0.4}
                              />
                            </RechartsRadar>
                          </ResponsiveContainer>
                        </div>

                        <div className="w-full space-y-4">
                          <h4 className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-4">Psychological Triggers</h4>
                          {result.psychologicalVectors.map((v: any, i: number) => (
                            <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/5 flex flex-col gap-2 hover:border-primary/40 transition-all group">
                              <div className="flex justify-between items-center">
                                <span className="text-[9px] font-bold text-white uppercase tracking-tighter">{v.vector}</span>
                                <Badge className={cn(
                                  "text-[7px] h-4 tracking-tighter px-1",
                                  v.impact === 'High' ? 'bg-red-500/20 text-red-500' : 'bg-emerald-500/20 text-emerald-500'
                                )}>
                                  {v.impact} IMPACT
                                </Badge>
                              </div>
                              <p className="text-[10px] text-muted-foreground leading-relaxed italic">"{v.description}"</p>
                            </div>
                          ))}
                        </div>

                        <div className="mt-8 pt-8 border-t border-white/5 w-full">
                           <div className="flex justify-between text-[10px] font-bold mb-3 uppercase text-muted-foreground tracking-[0.2em]">
                              <span>Vector Accuracy</span>
                              <span className="text-emerald-500">94.8%</span>
                           </div>
                           <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                              <div className="h-full bg-emerald-500 w-[94.8%] animate-pulse" />
                           </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            ) : (
              <div className="h-full min-h-[700px] border-2 border-dashed border-white/5 rounded-[3rem] flex flex-col items-center justify-center text-center p-12 bg-black/10 group transition-all hover:bg-black/20 relative overflow-hidden">
                {loading && (
                   <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50">
                      <div className="flex flex-col items-center gap-4">
                         <div className="size-20 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
                         <span className="text-xs font-code text-primary uppercase tracking-[0.5em] animate-pulse">Mapping Neural Vectors...</span>
                      </div>
                   </div>
                )}
                <div className="size-40 bg-primary/5 rounded-full flex items-center justify-center mb-10 border border-primary/10 group-hover:scale-110 transition-transform duration-700 relative">
                  <Users className="size-20 text-primary/30 transition-all" />
                  <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl animate-pulse" />
                </div>
                <h3 className="text-5xl font-headline font-bold text-white mb-6 tracking-tighter italic">Psychological Operations Center</h3>
                <p className="text-muted-foreground max-w-lg mx-auto leading-relaxed mb-12 text-lg">
                  Initialize the Al-Mu'izz <span className="text-primary font-bold">Autonomous Engagement Bot</span>. Define the target persona and sync with the <span className="text-emerald-500 font-bold">Neural Vault</span> to map high-precision influence vectors.
                </p>
                <div className="flex gap-6">
                  <Badge variant="outline" className="bg-white/5 py-3 px-8 text-[10px] tracking-[0.4em] uppercase border-white/10 rounded-2xl">Human Intelligence Matrix</Badge>
                  <Badge variant="outline" className="bg-white/5 py-3 px-8 text-[10px] tracking-[0.4em] uppercase border-white/10 rounded-2xl">v17.2 Tactical Link</Badge>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Tactical Overlay: Bottom Spectrum (Simulated) */}
        <div className="fixed bottom-8 right-8 w-80 h-24 glass rounded-3xl border border-white/5 p-4 hidden 2xl:block overflow-hidden shadow-2xl">
           <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                 <Fingerprint className="size-3 text-primary animate-pulse" />
                 <span className="text-[8px] font-bold text-white uppercase tracking-widest">Neural Link Sync</span>
              </div>
              <span className="text-[8px] font-code text-emerald-500">STABLE // 8.2 ms</span>
           </div>
           <div className="flex items-end gap-1 h-8">
              {Array.from({ length: 30 }).map((_, i) => (
                <div 
                  key={i} 
                  className="flex-1 bg-primary/30 rounded-full" 
                  style={{ 
                    height: `${Math.random() * 100}%`,
                    animation: `pulse 1.5s infinite ${i * 0.05}s`
                  }} 
                />
              ))}
           </div>
        </div>
      </main>
    </div>
  )
}
