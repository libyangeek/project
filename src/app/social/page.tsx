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
  Loader2
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { aiDrivenSocialEngineeringBots } from "@/ai/flows/ai-driven-social-engineering-bots"
import { toast } from "@/hooks/use-toast"
import { Badge } from "@/components/ui/badge"

export default function SocialPage() {
  const [loading, setLoading] = React.useState(false)
  const [platform, setPlatform] = React.useState<"telegram" | "whatsapp" | "other">("telegram")
  const [persona, setPersona] = React.useState("")
  const [goal, setGoal] = React.useState("")
  const [result, setResult] = React.useState<any>(null)

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
        campaignGoal: goal
      })
      setResult(data)
      toast({ title: "Bot Intelligence Ready", description: "Action plan and message generated." })
    } catch (err) {
      toast({ title: "Error", description: "Failed to initialize social engineering logic." })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen">
      <SidebarNav />
      <main className="flex-1 ml-64 p-8">
        <header className="mb-8">
          <h2 className="text-3xl font-headline font-bold text-white mb-2 tracking-tight">Social Engineering Suite</h2>
          <p className="text-muted-foreground">Automated human intelligence (HUMINT) and persuasive engagement engine.</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Brain className="size-5 text-primary" />
                  Bot Parameters
                </CardTitle>
                <CardDescription>Define the psychological vector</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label className="text-xs uppercase font-bold text-muted-foreground">Platform</Label>
                  <Select value={platform} onValueChange={(v: any) => setPlatform(v)}>
                    <SelectTrigger className="bg-black/40 border-white/5">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="telegram">Telegram</SelectItem>
                      <SelectItem value="whatsapp">WhatsApp</SelectItem>
                      <SelectItem value="other">Other / Custom</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label className="text-xs uppercase font-bold text-muted-foreground">Target Persona</Label>
                  <Textarea 
                    placeholder="e.g., IT Manager, 40s, cautious but helpful, likes technical jargon..."
                    className="bg-black/40 border-white/5 min-h-[100px]"
                    value={persona}
                    onChange={(e) => setPersona(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-xs uppercase font-bold text-muted-foreground">Campaign Goal</Label>
                  <Input 
                    placeholder="e.g., Extract network credentials"
                    className="bg-black/40 border-white/5"
                    value={goal}
                    onChange={(e) => setGoal(e.target.value)}
                  />
                </div>
                <Button 
                  className="w-full bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/20"
                  onClick={handleGenerate}
                  disabled={loading}
                >
                  {loading ? <Loader2 className="size-4 mr-2 animate-spin" /> : <Zap className="size-4 mr-2" />}
                  Deploy AI Bot
                </Button>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-white text-base">Active Campaigns</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-medium text-muted-foreground">Engaged Targets</span>
                  <Badge className="bg-primary/20 text-primary">12 Active</Badge>
                </div>
                <div className="space-y-2">
                  {[
                    "Target #82 (Telegram) - Status: Priming",
                    "Target #15 (WhatsApp) - Status: Data Extraction"
                  ].map((s, i) => (
                    <div key={i} className="bg-black/30 p-3 rounded-lg flex items-center gap-3 text-[10px] font-medium border border-white/5">
                      <div className="size-1.5 rounded-full bg-primary animate-pulse" />
                      <span className="text-white">{s}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2">
            {result ? (
              <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
                <Card className="glass-card border-primary/20 overflow-hidden">
                  <CardHeader className="bg-white/5 border-b border-white/5 flex flex-row items-center justify-between">
                    <div>
                      <CardTitle className="text-white">Proposed Engagement</CardTitle>
                      <CardDescription>AI-Generated Social Engineering Vector</CardDescription>
                    </div>
                    <Badge className="bg-emerald-500/10 text-emerald-500 border-emerald-500/20">{result.actionProposed}</Badge>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="bg-black/40 rounded-xl p-6 border border-white/5 mb-8">
                      <div className="flex items-center gap-2 mb-4 text-xs font-bold text-primary uppercase tracking-widest">
                        <MessageSquare className="size-3" />
                        Generated Message
                      </div>
                      <p className="text-lg text-white font-medium italic leading-relaxed">
                        "{result.generatedMessage}"
                      </p>
                      <Button variant="ghost" size="sm" className="mt-4 text-xs text-muted-foreground hover:text-white" onClick={() => {
                        navigator.clipboard.writeText(result.generatedMessage);
                        toast({ title: "Copied" });
                      }}>
                        <Copy className="size-3 mr-2" /> Copy Message
                      </Button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h4 className="text-xs font-bold text-white uppercase tracking-widest flex items-center gap-2">
                          <ShieldCheck className="size-4 text-emerald-500" />
                          Rationale
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {result.rationale}
                        </p>
                      </div>
                      <div className="space-y-4">
                        <h4 className="text-xs font-bold text-white uppercase tracking-widest flex items-center gap-2">
                          <ChevronRight className="size-4 text-primary" />
                          Next Step Suggestion
                        </h4>
                        <div className="p-4 rounded-lg bg-white/5 border border-white/5 text-sm text-primary/80 font-medium italic">
                          {result.nextStepSuggestion}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ) : (
              <div className="h-full border-2 border-dashed border-white/5 rounded-3xl flex flex-col items-center justify-center text-center p-12 bg-black/20">
                <div className="size-24 bg-primary/5 rounded-full flex items-center justify-center mb-8 border border-primary/10">
                  <Users className="size-12 text-primary/30" />
                </div>
                <h3 className="text-2xl font-headline font-bold text-white mb-3">Psychological Operations</h3>
                <p className="text-muted-foreground max-w-md mx-auto leading-relaxed">Configure the target persona and campaign goal to initialize the social engineering autonomous bot.</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
