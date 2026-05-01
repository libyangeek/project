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
  Plus
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

export default function SocialPage() {
  const [loading, setLoading] = React.useState(false)
  const [contextLoading, setContextLoading] = React.useState(false)
  const [platform, setPlatform] = React.useState<"telegram" | "whatsapp" | "other">("telegram")
  const [persona, setPersona] = React.useState("")
  const [goal, setGoal] = React.useState("")
  const [intelQuery, setIntelQuery] = React.useState("")
  const [kbContext, setKbContext] = React.useState("")
  const [result, setResult] = React.useState<any>(null)

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
      toast({ title: "Bot Intelligence Ready", description: "Psychological vector mapped and message generated." })
    } catch (err) {
      toast({ title: "Error", description: "Failed to initialize social engineering logic." })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen">
      <SidebarNav />
      <main className="flex-1 ml-64 p-8 bg-[radial-gradient(circle_at_bottom_right,rgba(170,76,255,0.03),transparent)]">
        <header className="mb-8 flex justify-between items-center">
          <div className="animate-in fade-in slide-in-from-left-4 duration-500">
            <div className="flex items-center gap-2 mb-1">
              <Badge className="bg-primary/20 text-primary border-primary/30 text-[10px] uppercase font-bold tracking-tighter">Psychological Ops Unit</Badge>
              <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">v17.2 Neural Link</span>
            </div>
            <h2 className="text-4xl font-headline font-bold text-white mb-2 tracking-tight">Social Engineering Suite</h2>
            <p className="text-muted-foreground">Automated human intelligence (HUMINT) and persuasive engagement engine.</p>
          </div>
          <div className="flex gap-4">
             <div className="text-right glass p-2 rounded-lg border border-white/5">
                <div className="text-sm font-code text-emerald-500">ENCRYPTED</div>
                <div className="text-[9px] text-muted-foreground uppercase font-bold">Vector Status</div>
              </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <Card className="glass-card border-primary/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Brain className="size-5 text-primary" />
                  Bot Parameters
                </CardTitle>
                <CardDescription>Define the psychological vector</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label className="text-[10px] uppercase font-bold text-muted-foreground">Platform Selection</Label>
                  <Select value={platform} onValueChange={(v: any) => setPlatform(v)}>
                    <SelectTrigger className="bg-black/40 border-white/5 h-11">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="telegram">Telegram Core</SelectItem>
                      <SelectItem value="whatsapp">WhatsApp Core</SelectItem>
                      <SelectItem value="other">Custom Overlay</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label className="text-[10px] uppercase font-bold text-muted-foreground">Neural Vault Prime (Optional)</Label>
                  <div className="flex gap-2">
                    <Input 
                      placeholder="Search KB for context..."
                      className="bg-black/40 border-white/5 h-9 text-xs"
                      value={intelQuery}
                      onChange={(e) => setIntelQuery(e.target.value)}
                    />
                    <Button size="icon" variant="outline" className="size-9 shrink-0 border-white/5" onClick={fetchKbIntel} disabled={contextLoading}>
                      {contextLoading ? <Loader2 className="size-4 animate-spin" /> : <Database className="size-4 text-primary" />}
                    </Button>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-[10px] uppercase font-bold text-muted-foreground">Target Persona</Label>
                  <Textarea 
                    placeholder="e.g., IT Manager, 40s, cautious but helpful, likes technical jargon..."
                    className="bg-black/40 border-white/5 min-h-[100px] text-sm"
                    value={persona}
                    onChange={(e) => setPersona(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-[10px] uppercase font-bold text-muted-foreground">Campaign Goal</Label>
                  <Input 
                    placeholder="e.g., Extract network credentials"
                    className="bg-black/40 border-white/5 h-11 text-sm"
                    value={goal}
                    onChange={(e) => setGoal(e.target.value)}
                  />
                </div>
                <Button 
                  className="w-full bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/20 h-12 rounded-xl group"
                  onClick={handleGenerate}
                  disabled={loading}
                >
                  {loading ? <Loader2 className="size-4 mr-2 animate-spin" /> : <Zap className="size-4 mr-2 group-hover:scale-110 transition-transform" />}
                  Deploy AI Bot
                </Button>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-white text-base flex items-center gap-2">
                   <Target className="size-4 text-red-500" />
                   Active Targets
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  { id: "82", platform: "Telegram", status: "Priming", color: "bg-amber-500" },
                  { id: "15", platform: "WhatsApp", status: "Extraction", color: "bg-emerald-500" },
                  { id: "42", platform: "Custom", status: "Neutralized", color: "bg-blue-500" }
                ].map((t, i) => (
                  <div key={i} className="bg-black/30 p-3 rounded-xl border border-white/5 flex items-center justify-between group cursor-pointer hover:border-primary/20 transition-all">
                    <div className="flex items-center gap-3">
                      <div className={cn("size-2 rounded-full animate-pulse", t.color)} />
                      <div className="flex flex-col">
                        <span className="text-xs font-bold text-white tracking-tight">Target #{t.id}</span>
                        <span className="text-[9px] text-muted-foreground uppercase">{t.platform}</span>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-[8px] bg-white/5">{t.status}</Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-3">
            {result ? (
              <div className="space-y-6 animate-in fade-in zoom-in-95 duration-500">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className="glass-card border-emerald-500/20 md:col-span-2">
                    <CardHeader className="bg-white/5 border-b border-white/5 flex flex-row items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-emerald-500/20">
                          <MessageSquare className="size-5 text-emerald-500" />
                        </div>
                        <div>
                          <CardTitle className="text-white">Proposed Engagement</CardTitle>
                          <CardDescription>AI-Generated Psychological Vector</CardDescription>
                        </div>
                      </div>
                      <Badge className={cn(
                        "font-code",
                        result.riskLevel === 'Extreme' ? 'bg-red-500/20 text-red-500' : 'bg-emerald-500/20 text-emerald-500'
                      )}>
                        RISK: {result.riskLevel}
                      </Badge>
                    </CardHeader>
                    <CardContent className="p-8">
                      <div className="bg-black/40 rounded-2xl p-8 border border-white/5 relative group mb-8">
                        <div className="absolute top-4 left-4 text-[10px] font-bold text-primary uppercase tracking-[0.2em] opacity-40">Message Payload</div>
                        <p className="text-xl text-white font-medium italic leading-relaxed pt-6">
                          "{result.generatedMessage}"
                        </p>
                        <div className="flex gap-4 mt-8 pt-6 border-t border-white/5">
                          <Button variant="ghost" size="sm" className="text-xs text-muted-foreground hover:text-white" onClick={() => {
                            navigator.clipboard.writeText(result.generatedMessage);
                            toast({ title: "Copied Payload" });
                          }}>
                            <Copy className="size-3 mr-2" /> Copy Message
                          </Button>
                          <Button variant="ghost" size="sm" className="text-xs text-muted-foreground hover:text-white">
                            <History className="size-3 mr-2" /> View Variations
                          </Button>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                          <h4 className="text-[10px] font-bold text-white uppercase tracking-widest flex items-center gap-2">
                            <ShieldCheck className="size-4 text-emerald-500" />
                            Operational Rationale
                          </h4>
                          <div className="p-4 rounded-xl bg-white/5 border border-white/5 text-sm text-muted-foreground leading-relaxed whitespace-pre-wrap">
                            {result.rationale}
                          </div>
                        </div>
                        <div className="space-y-4">
                          <h4 className="text-[10px] font-bold text-white uppercase tracking-widest flex items-center gap-2">
                            <TrendingUp className="size-4 text-primary" />
                            Next Strategic Step
                          </h4>
                          <div className="p-6 rounded-xl bg-primary/5 border border-primary/10 text-sm text-primary font-medium italic">
                            {result.nextStepSuggestion}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="glass-card border-primary/20">
                    <CardHeader>
                      <CardTitle className="text-white text-sm flex items-center gap-2">
                        <Fingerprint className="size-4 text-primary" />
                        Psychological Triggers
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {result.psychologicalVectors.map((v: any, i: number) => (
                        <div key={i} className="p-4 rounded-xl bg-black/40 border border-white/5 flex flex-col gap-2 group hover:border-primary/40 transition-all">
                          <div className="flex justify-between items-center">
                            <span className="text-[10px] font-bold text-white uppercase tracking-tighter">{v.vector}</span>
                            <Badge className={cn(
                              "text-[8px] h-4",
                              v.impact === 'High' ? 'bg-red-500/20 text-red-500' : 'bg-emerald-500/20 text-emerald-500'
                            )}>
                              {v.impact} IMPACT
                            </Badge>
                          </div>
                          <p className="text-[11px] text-muted-foreground leading-tight italic">"{v.description}"</p>
                        </div>
                      ))}
                      
                      <div className="mt-6 pt-6 border-t border-white/5">
                        <div className="flex justify-between text-[10px] font-bold mb-2 uppercase text-muted-foreground tracking-widest">
                          <span>Vector Accuracy</span>
                          <span className="text-emerald-500">94.8%</span>
                        </div>
                        <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                          <div className="h-full bg-emerald-500 w-[94.8%]" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ) : (
              <div className="h-full min-h-[600px] border-2 border-dashed border-white/5 rounded-[2rem] flex flex-col items-center justify-center text-center p-12 bg-black/10 group transition-all hover:bg-black/20">
                <div className="size-32 bg-primary/5 rounded-full flex items-center justify-center mb-8 border border-primary/10 group-hover:scale-110 transition-transform duration-500">
                  <Users className="size-16 text-primary/30" />
                </div>
                <h3 className="text-3xl font-headline font-bold text-white mb-3 tracking-tight italic">Psychological Operations Center</h3>
                <p className="text-muted-foreground max-w-md mx-auto leading-relaxed mb-8">
                  Configure the target persona and campaign goal to initialize the Al-Mu'izz social engineering autonomous bot. Connect to the neural vault for high-precision vector mapping.
                </p>
                <div className="flex gap-4">
                  <Badge variant="outline" className="bg-white/5 py-1 px-4 text-[10px] tracking-widest uppercase">Human Intelligence</Badge>
                  <Badge variant="outline" className="bg-white/5 py-1 px-4 text-[10px] tracking-widest uppercase">Influence Vector</Badge>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
