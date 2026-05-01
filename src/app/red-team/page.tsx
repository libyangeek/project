"use client"

import * as React from "react"
import { SidebarNav } from "@/components/platform/sidebar-nav"
import { 
  ShieldAlert, 
  Terminal, 
  Code2, 
  Cpu, 
  Activity, 
  Zap,
  RefreshCcw,
  Copy,
  Download,
  ShieldX,
  Target,
  Skull,
  Radio,
  Bug,
  Lock,
  Loader2
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { aiEnhancedExploitGeneration } from "@/ai/flows/ai-enhanced-exploit-generation"
import { toast } from "@/hooks/use-toast"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

export default function RedTeamPage() {
  const [loading, setLoading] = React.useState(false)
  const [vulnerability, setVulnerability] = React.useState("")
  const [targetDetails, setTargetDetails] = React.useState("")
  const [result, setResult] = React.useState<any>(null)

  const handleGenerate = async () => {
    if (!vulnerability || !targetDetails) {
      toast({ title: "Input Required", description: "Please fill in both vulnerability and target details." })
      return
    }

    setLoading(true)
    try {
      const data = await aiEnhancedExploitGeneration({
        vulnerabilityDescription: vulnerability,
        targetSystemDetails: targetDetails
      })
      setResult(data)
      toast({ title: "Generation Success", description: "Proof-of-concept exploit ready." })
    } catch (err) {
      toast({ variant: "destructive", title: "Core Offline", description: "Failed to generate exploit logic." })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen bg-black">
      <SidebarNav />
      <main className="flex-1 ml-64 p-8 bg-[radial-gradient(circle_at_top_right,rgba(170,76,255,0.03),transparent)]">
        <header className="mb-8 flex justify-between items-center">
          <div className="animate-in fade-in slide-in-from-left-4 duration-500">
            <div className="flex items-center gap-2 mb-1">
              <Badge className="bg-red-500/20 text-red-500 border-red-500/30 text-[10px] uppercase font-bold tracking-widest">Offensive Ops Unit</Badge>
              <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">v17.2 Neural Strike</span>
            </div>
            <h2 className="text-4xl font-headline font-bold text-white mb-2 tracking-tight">Red Team Command</h2>
            <p className="text-muted-foreground font-medium">AI-powered exploit development, C2 orchestration, and automated breach logic.</p>
          </div>
          <div className="flex gap-4">
             <div className="text-right glass p-2 rounded-lg border border-white/5">
                <div className="text-sm font-code text-red-500 uppercase font-bold">ARMED</div>
                <div className="text-[9px] text-muted-foreground uppercase font-bold">Engagement Status</div>
              </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <Card className="glass-card border-red-500/20">
              <CardHeader>
                <CardTitle className="text-white text-sm flex items-center gap-2">
                  <Bug className="size-4 text-red-500" />
                  Breach Parameters
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label className="text-[10px] uppercase font-bold text-muted-foreground">Vulnerability Description</Label>
                  <Textarea 
                    placeholder="e.g., Unauthenticated RCE in Apache..."
                    className="bg-black/40 border-white/5 min-h-[120px] text-xs focus:ring-red-500/20"
                    value={vulnerability}
                    onChange={(e) => setVulnerability(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-[10px] uppercase font-bold text-muted-foreground">Target Architecture</Label>
                  <Input 
                    placeholder="Ubuntu 22.04, x64..."
                    className="bg-black/40 border-white/5 h-11 text-xs focus:ring-red-500/20"
                    value={targetDetails}
                    onChange={(e) => setTargetDetails(e.target.value)}
                  />
                </div>
                <Button 
                  className="w-full bg-red-600 hover:bg-red-700 text-white shadow-xl shadow-red-500/20 h-12 rounded-xl group font-bold uppercase tracking-widest text-[10px]"
                  onClick={handleGenerate}
                  disabled={loading}
                >
                  {loading ? <Loader2 className="size-4 mr-2 animate-spin" /> : <Zap className="size-4 mr-2 group-hover:scale-110 transition-transform" />}
                  Synthesize Exploit
                </Button>
              </CardContent>
            </Card>

            <Card className="glass-card bg-red-950/10 border-red-900/20">
              <CardHeader>
                <CardTitle className="text-white text-xs uppercase tracking-widest flex items-center gap-2">
                   <Radio className="size-3 text-red-500 animate-pulse" />
                   Shadow C2 Net
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  { id: "NODE_42", platform: "Linux", status: "Active", color: "bg-emerald-500" },
                  { id: "NODE_11", platform: "Windows", status: "Beaconing", color: "bg-amber-500" },
                  { id: "NODE_09", platform: "Android", status: "Neutralized", color: "bg-blue-500" }
                ].map((n, i) => (
                  <div key={i} className="bg-black/30 p-3 rounded-xl border border-white/5 flex items-center justify-between group cursor-pointer hover:border-red-500/20 transition-all">
                    <div className="flex items-center gap-3">
                      <div className={cn("size-2 rounded-full animate-pulse", n.color)} />
                      <div className="flex flex-col">
                        <span className="text-xs font-bold text-white tracking-tight">{n.id}</span>
                        <span className="text-[9px] text-muted-foreground uppercase">{n.platform} CORE</span>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-[8px] bg-white/5">{n.status}</Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-3">
            {result ? (
              <div className="space-y-6 animate-in fade-in zoom-in-95 duration-500">
                <Tabs defaultValue="exploit" className="w-full">
                  <TabsList className="bg-white/5 border border-white/10 w-full justify-start p-1 rounded-2xl mb-6">
                    <TabsTrigger value="exploit" className="flex-1 rounded-xl text-[10px] uppercase font-bold py-3">Exploit Payload</TabsTrigger>
                    <TabsTrigger value="manual" className="flex-1 rounded-xl text-[10px] uppercase font-bold py-3">Tactical Manual</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="exploit">
                    <Card className="glass-card border-red-500/20 overflow-hidden shadow-[0_0_50px_rgba(239,68,68,0.1)]">
                      <CardHeader className="bg-red-500/5 border-b border-white/5 flex flex-row items-center justify-between">
                         <div className="flex items-center gap-4">
                            <div className="p-3 rounded-2xl bg-red-500/10 border border-red-500/20 shadow-inner">
                               <Code2 className="size-6 text-red-500" />
                            </div>
                            <div>
                               <CardTitle className="text-white text-xl">Payload: {result.exploitLanguage}</CardTitle>
                               <CardDescription className="text-[10px] uppercase font-bold text-red-400 tracking-[0.2em] animate-pulse">VALIDATED RED-TEAM LOGIC</CardDescription>
                            </div>
                         </div>
                         <div className="flex gap-2">
                            <Button size="icon" variant="outline" className="size-10 rounded-xl border-white/10" onClick={() => {
                               navigator.clipboard.writeText(result.exploitCode);
                               toast({ title: "Payload Copied" });
                            }}>
                               <Copy className="size-4" />
                            </Button>
                            <Button size="icon" variant="outline" className="size-10 rounded-xl border-white/10">
                               <Download className="size-4" />
                            </Button>
                         </div>
                      </CardHeader>
                      <CardContent className="p-0">
                         <pre className="p-8 font-code text-sm leading-relaxed text-red-400/90 bg-black/60 overflow-x-auto selection:bg-red-500/30">
                            <code>{result.exploitCode}</code>
                         </pre>
                         <div className="p-6 bg-red-500/5 border-t border-white/5">
                            <div className="flex items-start gap-4">
                               <Skull className="size-5 text-red-600 mt-1 shrink-0" />
                               <p className="text-xs text-red-400 leading-relaxed italic font-medium">
                                  {result.disclaimer}
                               </p>
                            </div>
                         </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="manual">
                    <Card className="glass-card border-primary/20">
                      <CardHeader>
                         <CardTitle className="text-white flex items-center gap-3">
                            <Terminal className="size-5 text-primary" />
                            Deployment Vector
                         </CardTitle>
                      </CardHeader>
                      <CardContent className="p-8">
                         <div className="bg-primary/5 border border-primary/10 rounded-2xl p-8 font-code text-sm text-primary leading-loose whitespace-pre-wrap">
                            {result.usageInstructions}
                         </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>
            ) : (
              <div className="h-full min-h-[600px] border-2 border-dashed border-white/5 rounded-[2rem] flex flex-col items-center justify-center text-center p-12 bg-black/10">
                <div className="size-32 bg-red-500/5 rounded-full flex items-center justify-center mb-8 border border-red-500/10 animate-pulse">
                  <ShieldX className="size-16 text-red-500/30" />
                </div>
                <h3 className="text-3xl font-headline font-bold text-white mb-3 tracking-tight italic">Offensive Engine Passive</h3>
                <p className="text-muted-foreground max-w-md mx-auto leading-relaxed mb-8">
                  Awaiting vulnerability and target metrics to synthesize a validated exploit payload. Ensure the neural core is primed before initiation.
                </p>
                <div className="flex gap-4">
                  <Badge variant="outline" className="bg-white/5 py-1 px-4 text-[10px] tracking-widest uppercase">Breach Vector Alpha</Badge>
                  <Badge variant="outline" className="bg-white/5 py-1 px-4 text-[10px] tracking-widest uppercase">Shadow C2 Integrated</Badge>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
