
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
  ChevronRight,
  Database,
  Cloud,
  Smartphone,
  ShieldCheck,
  Search,
  Crosshair
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

/**
 * @fileOverview مركز العمليات الهجومية v17.5 - نسخة الترسانة المحدثة
 * يجمع بين توليد الثغرات، تخليق الأدوات، ومكتبة الهجمات السيادية الحديثة 2025.
 */
export default function RedTeamPage() {
  const [mounted, setMounted] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const [vulnerability, setVulnerability] = React.useState("")
  const [targetDetails, setTargetDetails] = React.useState("")
  const [result, setResult] = React.useState<any>(null)

  // Tool Forge States
  const [toolPurpose, setToolPurpose] = React.useState("")
  const [forgeTarget, setForgeTarget] = React.useState("Kali Linux / Ubuntu")
  const [stealth, setStealth] = React.useState<"Standard" | "Advanced" | "Extreme">("Advanced")
  const [forgeResult, setForgeResult] = React.useState<any>(null)

  // Arsenal Selection
  const [selectedAttack, setSelectedAttack] = React.useState<any>(null)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const attackArsenal = [
    { 
      id: "cloud-bypass", 
      name: "Cloud-Native Hijacking", 
      icon: Cloud, 
      desc: "Exploiting S3 misconfigs & Serverless privilege escalation.", 
      risk: "Critical",
      tech: "2025 Multi-Cloud Vectors"
    },
    { 
      id: "ai-inversion", 
      name: "Adversarial AI Inversion", 
      icon: Cpu, 
      desc: "Prompt injection and model-weight exfiltration techniques.", 
      risk: "High",
      tech: "LLM Jailbreaking v4"
    },
    { 
      id: "shadow-mobile", 
      name: "Shadow Harvest Deep Dump", 
      icon: Smartphone, 
      desc: "Bypassing app sandboxing on iOS 18+ and Android 15.", 
      risk: "Critical",
      tech: "Kernel-Level Forensic Hooking"
    },
    { 
      id: "polymorphic-evasion", 
      name: "EDR Polymorphic Evasion", 
      icon: ShieldX, 
      desc: "Generating mutating shellcode that evades Falcon/SentinelOne.", 
      risk: "Extreme",
      tech: "Opaque Predicate Logic"
    },
    { 
      id: "supply-chain", 
      name: "NPM Supply Chain Poisoning", 
      icon: Database, 
      desc: "Injecting latent payloads into internal package registries.", 
      risk: "High",
      tech: "Dependency Confusion v2"
    }
  ]

  const handleGenerateExploit = async () => {
    if (!vulnerability || !targetDetails) return
    setLoading(true)
    try {
      const data = await aiEnhancedExploitGeneration({
        vulnerabilityDescription: vulnerability,
        targetSystemDetails: targetDetails
      })
      setResult(data)
      toast({ title: "Exploit Synthesized", description: "The neural core has mapped the breach vector." })
    } catch (err) {
      toast({ variant: "destructive", title: "Synthesis Error", description: "Failed to generate exploit payload." })
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
      toast({ title: "Tool Forged Successfully", description: "Sovereign code compiled and analyzed." })
    } catch (err) {
      toast({ variant: "destructive", title: "Forge Failed", description: "The Al-Mu'izz forge encountered an error." })
    } finally {
      setLoading(false)
    }
  }

  const loadAttackPattern = (attack: any) => {
    setSelectedAttack(attack)
    setVulnerability(attack.desc)
    setTargetDetails(`Targeting: ${attack.name} via ${attack.tech}`)
    toast({ title: "Pattern Loaded", description: `Tactical parameters set for ${attack.name}` })
  }

  return (
    <div className="flex min-h-screen bg-black">
      <SidebarNav />
      <main className="flex-1 ml-64 p-8 bg-[radial-gradient(circle_at_top_right,rgba(170,76,255,0.03),transparent)] overflow-y-auto">
        <header className="mb-12 flex justify-between items-start animate-in fade-in slide-in-from-top-4 duration-700">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Badge className="bg-red-500/20 text-red-500 border-red-500/30 text-[10px] uppercase font-bold tracking-[0.3em] px-2 py-0 animate-pulse">Offensive Ops Unit</Badge>
              <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">Al-Mu'izz Neural Strike v17.5-ULTIMATE</span>
            </div>
            <h2 className="text-5xl font-headline font-bold text-white mb-2 tracking-tighter italic drop-shadow-[0_0_15px_rgba(239,68,68,0.3)]">Red Team Command</h2>
            <p className="text-muted-foreground max-w-2xl font-medium">Autonomous exploit development, polymorphic tool forging, and integrated multi-vector attack arsenal.</p>
          </div>
          <div className="flex gap-4">
             <div className="text-right glass p-3 rounded-2xl border border-red-500/20 bg-red-500/5 h-16 min-w-[140px]">
                <div className="text-lg font-code text-red-500 font-bold flex items-center gap-2">
                  <Skull className="size-4 animate-bounce" /> ARMED
                </div>
                <div className="text-[9px] text-muted-foreground uppercase font-bold tracking-widest">Engagement Status</div>
              </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Column: Tactics & Inputs */}
          <div className="lg:col-span-1 space-y-6">
            <Tabs defaultValue="arsenal" className="w-full">
              <TabsList className="bg-black/40 border border-white/5 w-full h-12 p-1 rounded-2xl">
                <TabsTrigger value="arsenal" className="flex-1 text-[9px] uppercase font-bold rounded-xl">Arsenal</TabsTrigger>
                <TabsTrigger value="exploit" className="flex-1 text-[9px] uppercase font-bold rounded-xl">Exploit</TabsTrigger>
                <TabsTrigger value="forge" className="flex-1 text-[9px] uppercase font-bold rounded-xl">Forge</TabsTrigger>
              </TabsList>

              <TabsContent value="arsenal" className="mt-6 space-y-3 animate-in fade-in slide-in-from-left-2">
                <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest px-1">Sovereign Strike Vectors</label>
                {attackArsenal.map((attack) => (
                  <div 
                    key={attack.id}
                    onClick={() => loadAttackPattern(attack)}
                    className={cn(
                      "p-4 rounded-2xl border transition-all cursor-pointer group relative overflow-hidden",
                      selectedAttack?.id === attack.id 
                        ? "bg-red-500/20 border-red-500/40 shadow-[0_0_20px_rgba(239,68,68,0.1)]" 
                        : "bg-white/5 border-white/5 hover:border-red-500/20 hover:bg-red-500/5"
                    )}
                  >
                    <div className="flex justify-between items-start mb-2 relative z-10">
                       <div className={cn(
                         "size-8 rounded-xl flex items-center justify-center transition-colors",
                         selectedAttack?.id === attack.id ? "bg-red-500 text-white" : "bg-white/5 text-muted-foreground group-hover:text-red-400"
                       )}>
                          <attack.icon className="size-4" />
                       </div>
                       <Badge variant="outline" className={cn(
                         "text-[8px] h-4.5 px-2 font-bold uppercase",
                         attack.risk === 'Critical' || attack.risk === 'Extreme' ? 'border-red-500/30 text-red-500' : 'border-amber-500/30 text-amber-500'
                       )}>{attack.risk}</Badge>
                    </div>
                    <div className="relative z-10">
                       <span className="text-[11px] font-bold text-white block mb-0.5 group-hover:text-red-400 transition-colors">{attack.name}</span>
                       <p className="text-[9px] text-muted-foreground italic line-clamp-1">{attack.desc}</p>
                    </div>
                  </div>
                ))}
              </TabsContent>

              <TabsContent value="exploit" className="mt-6 space-y-4 animate-in fade-in slide-in-from-left-2">
                <Card className="glass-card border-red-500/20 bg-red-500/5">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-white text-xs flex items-center gap-2 uppercase tracking-[0.2em]">
                      <Bug className="size-4 text-red-500" />
                      Payload Synthesis
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">Vulnerability Context</Label>
                      <Textarea 
                        placeholder="e.g., Unauthenticated RCE in vCenter 8.0..."
                        className="bg-black/60 border-white/5 min-h-[100px] text-xs rounded-xl focus:border-red-500/40"
                        value={vulnerability}
                        onChange={(e) => setVulnerability(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                       <Label className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">Target Specs</Label>
                       <Input 
                         value={targetDetails}
                         onChange={(e) => setTargetDetails(e.target.value)}
                         className="bg-black/60 border-white/5 h-10 text-xs rounded-xl"
                         placeholder="Kernel version, OS, etc."
                       />
                    </div>
                    <Button 
                      className="w-full bg-red-600 hover:bg-red-700 text-white h-12 rounded-xl group font-bold uppercase tracking-widest text-[10px] shadow-lg shadow-red-600/20"
                      onClick={handleGenerateExploit}
                      disabled={loading}
                    >
                      {loading ? <Loader2 className="size-5 mr-2 animate-spin" /> : <Zap className="size-5 mr-2 group-hover:scale-125 transition-transform" />}
                      Synthesize Exploit
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="forge" className="mt-6 space-y-4 animate-in fade-in slide-in-from-left-2">
                <Card className="glass-card border-primary/20">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-white text-xs flex items-center gap-2 uppercase tracking-[0.2em]">
                      <Hammer className="size-4 text-primary" />
                      Sovereign Tool Forge
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">Purpose & Logic</Label>
                      <Textarea 
                        placeholder="e.g., Create a stealthy Wi-Fi sniffer that bypasses WPA3 logging..."
                        className="bg-black/60 border-white/5 min-h-[120px] text-xs rounded-xl focus:border-primary/40"
                        value={toolPurpose}
                        onChange={(e) => setToolPurpose(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">Stealth Protocol</Label>
                      <Select value={stealth} onValueChange={(v: any) => setStealth(v)}>
                        <SelectTrigger className="bg-black/60 border-white/5 h-10 text-[10px] rounded-xl">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-black/90 border-white/10 backdrop-blur-xl">
                          <SelectItem value="Standard">Standard Ops</SelectItem>
                          <SelectItem value="Advanced">Advanced (Obfuscated)</SelectItem>
                          <SelectItem value="Extreme">Extreme (Polymorphic)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Button 
                      className="w-full bg-primary hover:bg-primary/90 text-white h-12 rounded-xl group font-bold uppercase tracking-widest text-[10px] shadow-lg shadow-primary/20"
                      onClick={handleForgeTool}
                      disabled={loading}
                    >
                      {loading ? <Loader2 className="size-5 mr-2 animate-spin" /> : <Hammer className="size-5 mr-2 group-hover:rotate-45 transition-transform" />}
                      Forge New Tool
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            <Card className="glass-card bg-red-950/5 border-red-500/10">
              <CardHeader className="pb-3">
                <CardTitle className="text-white text-[10px] uppercase tracking-[0.3em] flex items-center gap-2">
                   <Radio className="size-3 text-red-500 animate-pulse" />
                   Shadow C2 Network
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  { id: "NODE_42", platform: "Linux", status: "Active", color: "bg-emerald-500" },
                  { id: "NODE_11", platform: "Windows", status: "Beaconing", color: "bg-amber-500" }
                ].map((n, i) => (
                  <div key={i} className="bg-black/40 p-3 rounded-2xl border border-white/5 flex items-center justify-between group hover:border-red-500/30 transition-all cursor-pointer">
                    <div className="flex items-center gap-3">
                      <div className={cn("size-1.5 rounded-full animate-pulse", n.color)} />
                      <span className="text-[10px] font-bold text-white group-hover:text-red-400 transition-colors">{n.id}</span>
                    </div>
                    <Badge variant="outline" className="text-[8px] bg-white/5 border-white/5 h-4.5 px-2">{n.status}</Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Right Column: Results & Analysis */}
          <div className="lg:col-span-3">
            {forgeResult ? (
              <div className="space-y-8 animate-in fade-in zoom-in-95 duration-700">
                <Card className="glass-card border-primary/40 overflow-hidden shadow-[0_0_60px_rgba(170,76,255,0.15)]">
                  <CardHeader className="bg-primary/5 border-b border-white/5 flex flex-row items-center justify-between p-8">
                    <div className="flex items-center gap-5">
                      <div className="p-4 rounded-3xl bg-primary/20 border border-primary/30 shadow-[0_0_25px_rgba(170,76,255,0.3)]">
                        <Wrench className="size-8 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-3xl text-white italic tracking-tighter">Forged: {forgeResult.toolName}</CardTitle>
                        <CardDescription className="text-primary font-bold text-[10px] uppercase tracking-[0.4em] mt-1">Al-Mu'izz Sovereign Forge Output v17.5</CardDescription>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Badge className={cn(
                        "font-code py-2.5 px-6 rounded-full border-white/10 text-xs",
                        forgeResult.operationalRisk === 'Critical' ? 'bg-red-500 text-white animate-pulse' : 'bg-emerald-500/20 text-emerald-500'
                      )}>
                        RISK_FACTOR: {forgeResult.operationalRisk}
                      </Badge>
                      <Button variant="outline" size="icon" className="size-12 rounded-2xl border-white/10 bg-white/5 hover:bg-primary/20 transition-all" onClick={() => {
                        navigator.clipboard.writeText(forgeResult.generatedCode);
                        toast({ title: "Tool Code Copied" });
                      }}>
                        <Copy className="size-5" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="grid grid-cols-1 md:grid-cols-3">
                      <div className="md:col-span-2 p-0">
                        <div className="relative">
                           <div className="absolute top-4 right-6 text-[8px] font-bold text-emerald-500/50 uppercase tracking-widest z-10 select-none">Sovereign Source Code</div>
                           <pre className="p-10 font-code text-xs leading-relaxed text-emerald-400 bg-black/60 overflow-x-auto min-h-[600px] scrollbar-hide">
                             <code>{forgeResult.generatedCode}</code>
                           </pre>
                        </div>
                      </div>
                      <div className="p-8 bg-white/5 border-l border-white/5 space-y-8">
                        <div>
                          <h4 className="text-[11px] font-bold text-primary uppercase tracking-[0.3em] mb-4 flex items-center gap-2">
                            <Zap className="size-3" /> Capabilities
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {forgeResult.capabilities.map((cap: string, i: number) => (
                              <Badge key={i} variant="secondary" className="bg-black/40 text-[9px] py-1 px-3 border-white/5 rounded-lg">{cap}</Badge>
                            ))}
                          </div>
                        </div>
                        <div className="p-6 rounded-2xl bg-black/40 border border-white/5">
                          <h4 className="text-[11px] font-bold text-primary uppercase tracking-[0.3em] mb-3 flex items-center gap-2">
                            <ShieldCheck className="size-3" /> Security Analysis
                          </h4>
                          <p className="text-[11px] text-muted-foreground leading-relaxed italic">"{forgeResult.securityAnalysis}"</p>
                        </div>
                        <div className="space-y-3">
                          <h4 className="text-[11px] font-bold text-primary uppercase tracking-[0.3em] flex items-center gap-2">
                            <Terminal className="size-3" /> Usage Manual
                          </h4>
                          <div className="p-4 rounded-2xl bg-black/80 border border-emerald-500/20 text-[10px] font-code text-emerald-500 shadow-inner">
                            <span className="text-emerald-900 mr-2">$</span>{forgeResult.usageInstructions}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ) : result ? (
              <div className="space-y-8 animate-in fade-in zoom-in-95 duration-700">
                <Card className="glass-card border-red-500/30 overflow-hidden shadow-[0_0_60px_rgba(239,68,68,0.15)]">
                   <CardHeader className="bg-red-500/5 border-b border-white/5 p-8 flex flex-row items-center justify-between">
                      <div className="flex items-center gap-5">
                         <div className="p-4 rounded-3xl bg-red-500/20 border border-red-500/30 shadow-[0_0_25px_rgba(239,68,68,0.3)]">
                            <Code2 className="size-8 text-red-500" />
                         </div>
                         <div>
                            <CardTitle className="text-3xl text-white italic tracking-tighter">Exploit: {result.exploitLanguage}</CardTitle>
                            <CardDescription className="text-red-400 font-bold text-[10px] uppercase tracking-[0.4em] mt-1">Validated Strike Payload v17.5</CardDescription>
                         </div>
                      </div>
                      <div className="flex gap-3">
                         <Badge className="bg-red-600 text-white py-2 px-6 rounded-full font-code text-xs">STATUS: READY_FOR_INJECTION</Badge>
                         <Button variant="outline" size="icon" className="size-12 rounded-2xl border-white/10 hover:bg-red-500/20" onClick={() => navigator.clipboard.writeText(result.exploitCode)}>
                            <Copy className="size-5" />
                         </Button>
                      </div>
                   </CardHeader>
                   <CardContent className="p-0">
                      <div className="grid grid-cols-1 md:grid-cols-3">
                         <div className="md:col-span-2">
                           <pre className="p-10 font-code text-sm text-red-400/90 bg-black/70 overflow-x-auto min-h-[500px]">
                              <code>{result.exploitCode}</code>
                           </pre>
                         </div>
                         <div className="p-8 bg-white/5 border-l border-white/5 space-y-8">
                            <div>
                               <h4 className="text-[11px] font-bold text-red-400 uppercase tracking-[0.3em] mb-4">Stealth Features</h4>
                               <div className="space-y-3">
                                  {result.stealthFeatures.map((f: string, i: number) => (
                                    <div key={i} className="flex gap-3 text-[11px] text-muted-foreground italic border-b border-white/5 pb-2">
                                       <div className="size-1 mt-1.5 rounded-full bg-red-500" />
                                       {f}
                                    </div>
                                  ))}
                               </div>
                            </div>
                            <div className="p-6 rounded-2xl bg-black/40 border border-white/5">
                               <h4 className="text-[11px] font-bold text-red-400 uppercase tracking-[0.3em] mb-3">Tactical Instructions</h4>
                               <p className="text-[11px] text-muted-foreground leading-relaxed italic">{result.usageInstructions}</p>
                            </div>
                         </div>
                      </div>
                   </CardContent>
                </Card>
              </div>
            ) : (
              <div className="h-full min-h-[750px] border-2 border-dashed border-white/5 rounded-[4rem] flex flex-col items-center justify-center text-center p-12 bg-black/10 relative overflow-hidden group transition-all hover:bg-black/20">
                {mounted && loading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-xl z-50">
                     <div className="flex flex-col items-center gap-6">
                        <div className="relative">
                           <div className="size-24 border-4 border-red-500/20 border-t-red-500 rounded-full animate-spin" />
                           <div className="absolute inset-0 flex items-center justify-center">
                              <Crosshair className="size-8 text-red-500 animate-pulse" />
                           </div>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                           <span className="text-sm font-code text-red-500 uppercase tracking-[0.6em] animate-pulse font-bold">Synthesizing Strike Vector</span>
                           <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-medium">Mapping Zero-Day Logic via Al-Mu'izz Neural Core...</span>
                        </div>
                     </div>
                  </div>
                )}
                
                <div className="size-56 bg-red-500/5 rounded-full flex items-center justify-center mb-12 border border-red-500/10 group-hover:scale-110 transition-transform duration-1000 relative">
                  <Skull className={cn("size-28 text-red-500/20 transition-all duration-700", mounted && loading && "text-red-500 animate-pulse")} />
                  <div className="absolute inset-0 bg-red-500/5 rounded-full blur-[80px] animate-pulse" />
                </div>
                
                <h3 className="text-6xl font-headline font-bold text-white mb-8 tracking-tighter italic drop-shadow-2xl">Offensive Engine Passive</h3>
                <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-14 text-xl font-medium">
                  Awaiting instructions to <span className="text-red-500 font-bold italic">Synthesize</span> an exploit or <span className="text-primary font-bold italic">Forge</span> a custom tool. Choose a vector from the <span className="text-white font-bold">Attack Arsenal</span> to initialize the strike sequence.
                </p>
                
                <div className="flex gap-8">
                  <Badge variant="outline" className="bg-white/5 py-4 px-10 text-[11px] tracking-[0.5em] uppercase border-white/10 rounded-[2rem] shadow-xl group-hover:border-red-500/30 transition-colors">Tactical Forge Matrix v17.5</Badge>
                  <Badge variant="outline" className="bg-white/5 py-4 px-10 text-[11px] tracking-[0.5em] uppercase border-white/10 rounded-[2rem] shadow-xl group-hover:border-red-500/30 transition-colors">Zero-Day Logic Ready</Badge>
                </div>

                {/* Waveform Visualization */}
                <div className="absolute bottom-16 flex gap-1.5 items-end h-24 opacity-10">
                   {mounted && Array.from({ length: 60 }).map((_, i) => (
                     <div key={i} className="w-1.5 bg-red-500 rounded-full" 
                      style={{ 
                        height: `${20 + Math.random() * 80}%`, 
                        animation: `pulse 1s infinite ${i * 0.05}s` 
                      }} 
                     />
                   ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Tactical Footer Overlay */}
        <div className="fixed bottom-8 right-8 w-96 h-28 glass rounded-[2.5rem] border border-white/10 p-6 hidden 2xl:block overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-40">
           <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                 <div className="size-2 rounded-full bg-red-500 animate-pulse shadow-[0_0_10px_#ef4444]" />
                 <span className="text-[10px] font-bold text-white uppercase tracking-[0.3em]">Neural Core: ENGAGED</span>
              </div>
              <div className="flex items-center gap-2">
                 <Activity className="size-3 text-red-500/60 animate-pulse" />
                 <span className="text-[9px] font-code text-red-500/80">THREAT_LVL // CRITICAL</span>
              </div>
           </div>
           <div className="flex items-end gap-1.5 h-10 px-2">
              {mounted && Array.from({ length: 45 }).map((_, i) => (
                <div 
                  key={i} 
                  className="flex-1 bg-red-500/40 rounded-full hover:bg-red-500 transition-colors cursor-pointer" 
                  style={{ 
                    height: `${10 + Math.random() * 90}%`,
                    animation: `pulse 1.5s infinite ${i * 0.03}s`
                  }} 
                />
              ))}
           </div>
           <div className="mt-2 flex justify-between px-2">
              <span className="text-[7px] text-muted-foreground uppercase font-bold tracking-widest">Arsenal Linked v17.5</span>
              <span className="text-[7px] text-red-500 uppercase font-bold tracking-widest">Al-Mu'izz Tactical Hub</span>
           </div>
        </div>
      </main>
    </div>
  )
}
