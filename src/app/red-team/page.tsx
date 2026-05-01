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
  Loader2,
  Hammer,
  Wrench,
  ChevronRight
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { aiEnhancedExploitGeneration } from "@/ai/flows/ai-enhanced-exploit-generation"
import { generateSovereignTool } from "@/ai/flows/tool-forge-flow"
import { toast } from "@/hooks/use-toast"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

export default function RedTeamPage() {
  const [loading, setLoading] = React.useState(false)
  const [vulnerability, setVulnerability] = React.useState("")
  const [targetDetails, setTargetDetails] = React.useState("")
  const [result, setResult] = React.useState<any>(null)

  // Tool Forge States
  const [toolPurpose, setToolPurpose] = React.useState("")
  const [forgeTarget, setForgeTarget] = React.useState("Kali Linux / Ubuntu")
  const [stealth, setStealth] = React.useState<"Standard" | "Advanced" | "Extreme">("Advanced")
  const [forgeResult, setForgeResult] = React.useState<any>(null)

  const handleGenerateExploit = async () => {
    if (!vulnerability || !targetDetails) return
    setLoading(true)
    try {
      const data = await aiEnhancedExploitGeneration({
        vulnerabilityDescription: vulnerability,
        targetSystemDetails: targetDetails
      })
      setResult(data)
      toast({ title: "Exploit Synthesized" })
    } catch (err) {
      toast({ variant: "destructive", title: "Core Offline" })
    } finally {
      setLoading(false)
    }
  }

  const handleForgeTool = async () => {
    if (!toolPurpose) return
    setLoading(true)
    try {
      const data = await generateSovereignTool({
        toolPurpose,
        targetEnvironment: forgeTarget,
        stealthLevel: stealth
      })
      setForgeResult(data)
      toast({ title: "Tool Forged Successfully", description: "Sovereign code compiled." })
    } catch (err) {
      toast({ variant: "destructive", title: "Forge Failed" })
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
            <p className="text-muted-foreground font-medium">AI-powered exploit development, autonomous tool forging, and C2 orchestration.</p>
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
            <Tabs defaultValue="exploit" className="w-full">
              <TabsList className="bg-black/40 border border-white/5 w-full h-11 p-1">
                <TabsTrigger value="exploit" className="flex-1 text-[10px] uppercase font-bold">Exploit Gen</TabsTrigger>
                <TabsTrigger value="forge" className="flex-1 text-[10px] uppercase font-bold">Tool Forge</TabsTrigger>
              </TabsList>

              <TabsContent value="exploit" className="mt-6 space-y-4">
                <Card className="glass-card border-red-500/20">
                  <CardHeader>
                    <CardTitle className="text-white text-sm flex items-center gap-2">
                      <Bug className="size-4 text-red-500" />
                      Breach Parameters
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label className="text-[10px] uppercase font-bold text-muted-foreground">Vulnerability</Label>
                      <Textarea 
                        placeholder="e.g., Unauthenticated RCE..."
                        className="bg-black/40 border-white/5 min-h-[80px] text-xs"
                        value={vulnerability}
                        onChange={(e) => setVulnerability(e.target.value)}
                      />
                    </div>
                    <Button 
                      className="w-full bg-red-600 hover:bg-red-700 text-white h-11 rounded-xl group font-bold uppercase tracking-widest text-[9px]"
                      onClick={handleGenerateExploit}
                      disabled={loading}
                    >
                      {loading ? <Loader2 className="size-4 mr-2 animate-spin" /> : <Zap className="size-4 mr-2" />}
                      Synthesize Exploit
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="forge" className="mt-6 space-y-4">
                <Card className="glass-card border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-white text-sm flex items-center gap-2">
                      <Hammer className="size-4 text-primary" />
                      Sovereign Tool Forge
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label className="text-[10px] uppercase font-bold text-muted-foreground">Purpose & Logic</Label>
                      <Textarea 
                        placeholder="e.g., Create a stealthy Wi-Fi sniffer that bypasses WPA3 logging..."
                        className="bg-black/40 border-white/5 min-h-[100px] text-xs"
                        value={toolPurpose}
                        onChange={(e) => setToolPurpose(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-[10px] uppercase font-bold text-muted-foreground">Stealth Protocol</Label>
                      <Select value={stealth} onValueChange={(v: any) => setStealth(v)}>
                        <SelectTrigger className="bg-black/40 border-white/5 h-9 text-[10px]">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Standard">Standard Ops</SelectItem>
                          <SelectItem value="Advanced">Advanced (Obfuscated)</SelectItem>
                          <SelectItem value="Extreme">Extreme (Polymorphic)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Button 
                      className="w-full bg-primary hover:bg-primary/90 text-white h-11 rounded-xl group font-bold uppercase tracking-widest text-[9px]"
                      onClick={handleForgeTool}
                      disabled={loading}
                    >
                      {loading ? <Loader2 className="size-4 mr-2 animate-spin" /> : <Hammer className="size-4 mr-2" />}
                      Forge New Tool
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

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
                  { id: "NODE_11", platform: "Windows", status: "Beaconing", color: "bg-amber-500" }
                ].map((n, i) => (
                  <div key={i} className="bg-black/30 p-3 rounded-xl border border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={cn("size-2 rounded-full animate-pulse", n.color)} />
                      <span className="text-xs font-bold text-white">{n.id}</span>
                    </div>
                    <Badge variant="outline" className="text-[8px] bg-white/5">{n.status}</Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-3">
            {/* Display Forged Tool Results */}
            {forgeResult ? (
              <div className="space-y-6 animate-in fade-in zoom-in-95 duration-500">
                <Card className="glass-card border-primary/40 overflow-hidden shadow-[0_0_50px_rgba(170,76,255,0.1)]">
                  <CardHeader className="bg-primary/5 border-b border-white/5 flex flex-row items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-2xl bg-primary/20 border border-primary/30">
                        <Wrench className="size-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-white text-xl">Forged: {forgeResult.toolName}</CardTitle>
                        <CardDescription className="text-[10px] uppercase font-bold text-primary tracking-widest">Al-Mu'izz Sovereign Forge Output</CardDescription>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Badge className={cn(
                        "font-code",
                        forgeResult.operationalRisk === 'Critical' ? 'bg-red-500/20 text-red-500' : 'bg-emerald-500/20 text-emerald-500'
                      )}>
                        RISK: {forgeResult.operationalRisk}
                      </Badge>
                      <Button variant="outline" size="icon" className="size-10 border-white/10" onClick={() => navigator.clipboard.writeText(forgeResult.generatedCode)}>
                        <Copy className="size-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="grid grid-cols-1 md:grid-cols-3">
                      <div className="md:col-span-2 p-0">
                        <pre className="p-8 font-code text-xs leading-relaxed text-emerald-400 bg-black/60 overflow-x-auto min-h-[500px]">
                          <code>{forgeResult.generatedCode}</code>
                        </pre>
                      </div>
                      <div className="p-6 bg-white/5 border-l border-white/5 space-y-6">
                        <div>
                          <h4 className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-3">Capabilities</h4>
                          <div className="flex flex-wrap gap-2">
                            {forgeResult.capabilities.map((cap: string, i: number) => (
                              <Badge key={i} variant="secondary" className="bg-black/40 text-[9px]">{cap}</Badge>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-3">Security Analysis</h4>
                          <p className="text-[11px] text-muted-foreground leading-relaxed italic">"{forgeResult.securityAnalysis}"</p>
                        </div>
                        <div>
                          <h4 className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-3">Usage</h4>
                          <div className="p-3 rounded bg-black/40 border border-white/5 text-[10px] font-code text-white">
                            {forgeResult.usageInstructions}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ) : result ? (
              <div className="space-y-6 animate-in fade-in zoom-in-95 duration-500">
                <Tabs defaultValue="exploit" className="w-full">
                  <TabsList className="bg-white/5 border border-white/10 w-full justify-start p-1 rounded-2xl mb-6">
                    <TabsTrigger value="exploit" className="flex-1 rounded-xl text-[10px] uppercase font-bold py-3">Exploit Payload</TabsTrigger>
                    <TabsTrigger value="manual" className="flex-1 rounded-xl text-[10px] uppercase font-bold py-3">Tactical Manual</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="exploit">
                    <Card className="glass-card border-red-500/20 overflow-hidden">
                      <CardHeader className="bg-red-500/5 border-b border-white/5 flex flex-row items-center justify-between">
                         <div className="flex items-center gap-4">
                            <div className="p-3 rounded-2xl bg-red-500/10 border border-red-500/20">
                               <Code2 className="size-6 text-red-500" />
                            </div>
                            <div>
                               <CardTitle className="text-white text-xl">Payload: {result.exploitLanguage}</CardTitle>
                               <CardDescription className="text-[10px] uppercase font-bold text-red-400">Validated Strike Logic</CardDescription>
                            </div>
                         </div>
                         <Button size="icon" variant="outline" className="size-10 rounded-xl" onClick={() => navigator.clipboard.writeText(result.exploitCode)}>
                            <Copy className="size-4" />
                         </Button>
                      </CardHeader>
                      <CardContent className="p-0">
                         <pre className="p-8 font-code text-sm text-red-400/90 bg-black/60 overflow-x-auto">
                            <code>{result.exploitCode}</code>
                         </pre>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>
            ) : (
              <div className="h-full min-h-[600px] border-2 border-dashed border-white/5 rounded-[3rem] flex flex-col items-center justify-center text-center p-12 bg-black/10">
                <div className="size-32 bg-primary/5 rounded-full flex items-center justify-center mb-8 border border-primary/10">
                  <Zap className="size-16 text-primary/30" />
                </div>
                <h3 className="text-3xl font-headline font-bold text-white mb-3 tracking-tight italic">Offensive Engine Passive</h3>
                <p className="text-muted-foreground max-w-md mx-auto leading-relaxed mb-8">
                  Awaiting instructions to synthesize an exploit or forge a custom tool. The neural core is ready for code generation.
                </p>
                <div className="flex gap-4">
                  <Badge variant="outline" className="bg-white/5 py-1 px-4 text-[10px] tracking-widest uppercase">Forge Vector Alpha</Badge>
                  <Badge variant="outline" className="bg-white/5 py-1 px-4 text-[10px] tracking-widest uppercase">Stealth Code Injection</Badge>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
