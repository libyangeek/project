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
  Crosshair,
  Flame,
  Wifi,
  Mic2,
  Cpu as Chip,
  Fingerprint
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
  const [mounted, setMounted] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const [vulnerability, setVulnerability] = React.useState("")
  const [targetDetails, setTargetDetails] = React.useState("")
  const [result, setResult] = React.useState<any>(null)
  const [toolPurpose, setToolPurpose] = React.useState("")
  const [forgeTarget, setForgeTarget] = React.useState("Kali / BlackArch Environment")
  const [stealth, setStealth] = React.useState<"Standard" | "Advanced" | "Extreme">("Extreme")
  const [forgeResult, setForgeResult] = React.useState<any>(null)
  const [selectedAttack, setSelectedAttack] = React.useState<any>(null)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const attackArsenal = [
    { id: "blackarch-radio", name: "Radio / NFC Strike", icon: Radio, desc: "Exploiting RF and Proxmark vectors.", risk: "Critical", tech: "BlackArch Radio Suite" },
    { id: "ai-inversion", name: "AI Inversion", icon: Cpu, desc: "Jailbreaking & Weight theft.", risk: "High", tech: "LLM Attack v4" },
    { id: "firmware-crack", name: "Firmware Hijack", icon: Chip, desc: "Bypassing hardware root-of-trust.", risk: "Extreme", tech: "BlackArch Binary Ops" },
    { id: "polymorphic", name: "EDR Evasion", icon: ShieldX, desc: "Mutating shellcode for Falcon.", risk: "Extreme", tech: "Opaque Predicates" },
    { id: "voip-intercept", name: "VoIP Eavesdrop", icon: Mic2, desc: "Intercepting SIP/RTP traffic.", risk: "High", tech: "BlackArch Networking" }
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
      toast({ title: "Exploit Synthesized" })
    } catch (err) {
      toast({ variant: "destructive", title: "Synthesis Error" })
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
      toast({ title: "Tool Forged" })
    } catch (err) {
      toast({ variant: "destructive", title: "Forge Failed" })
    } finally {
      setLoading(false)
    }
  }

  if (!mounted) return null;

  return (
    <div className="flex min-h-screen bg-black">
      <SidebarNav />
      <main className="flex-1 ml-64 p-10 relative overflow-y-auto">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(239,68,68,0.1),transparent)] pointer-events-none" />
        
        <header className="mb-16 flex justify-between items-start relative z-10 animate-in fade-in slide-in-from-top-4 duration-1000">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <Badge className="bg-red-600/20 text-red-500 border-red-500/30 text-[11px] uppercase font-bold tracking-[0.4em] px-3 py-0.5 animate-pulse">Sovereign Arsenal v18.8</Badge>
              <span className="text-[11px] text-muted-foreground uppercase font-bold tracking-[0.2em]">Kali & BlackArch Integrated Core</span>
            </div>
            <h2 className="text-6xl font-headline font-bold text-white mb-3 tracking-tighter italic drop-shadow-[0_0_20px_rgba(239,68,68,0.4)]">Strike Command</h2>
            <p className="text-muted-foreground max-w-2xl text-lg font-medium italic">Autonomous exploit development and tool forging using the full 2800+ tool lexicon.</p>
          </div>
          <div className="text-right glass-card p-5 border-red-600/30 bg-red-950/10 h-20 min-w-[180px] rounded-[2rem] shadow-2xl">
            <div className="text-2xl font-code text-red-600 font-bold flex items-center justify-end gap-3">
              <Skull className="size-6 animate-bounce" /> ARMED
            </div>
            <div className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest mt-1">Sovereign Engagement</div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 relative z-10">
          <div className="lg:col-span-1 space-y-8">
            <Tabs defaultValue="arsenal" className="w-full">
              <TabsList className="bg-black/60 border border-red-500/20 w-full h-14 p-1.5 rounded-[1.5rem]">
                <TabsTrigger value="arsenal" className="flex-1 text-[10px] uppercase font-bold rounded-xl data-[state=active]:bg-red-600/20">Arsenal</TabsTrigger>
                <TabsTrigger value="exploit" className="flex-1 text-[10px] uppercase font-bold rounded-xl data-[state=active]:bg-red-600/20">Exploit</TabsTrigger>
                <TabsTrigger value="forge" className="flex-1 text-[10px] uppercase font-bold rounded-xl data-[state=active]:bg-red-600/20">Forge</TabsTrigger>
              </TabsList>

              <TabsContent value="arsenal" className="mt-8 space-y-4 animate-in fade-in slide-in-from-left-4">
                <label className="text-[10px] font-bold text-red-500/60 uppercase tracking-[0.4em] px-2">Elite Strike Vectors</label>
                {attackArsenal.map((attack) => (
                  <div 
                    key={attack.id}
                    onClick={() => {
                      setSelectedAttack(attack)
                      setVulnerability(attack.desc)
                      setTargetDetails(`Via ${attack.tech}`)
                      toast({ title: "Pattern Loaded" })
                    }}
                    className={cn(
                      "p-5 rounded-3xl border transition-all duration-500 cursor-pointer group relative overflow-hidden",
                      selectedAttack?.id === attack.id 
                        ? "bg-red-600/20 border-red-600/50 shadow-2xl" 
                        : "bg-white/5 border-white/5 hover:border-red-600/40 hover:bg-red-600/5"
                    )}
                  >
                    <div className="flex justify-between items-start mb-3 relative z-10">
                       <div className={cn(
                         "size-10 rounded-2xl flex items-center justify-center transition-colors",
                         selectedAttack?.id === attack.id ? "bg-red-600 text-white" : "bg-black/40 text-muted-foreground group-hover:text-red-500"
                       )}>
                          <attack.icon className="size-5" />
                       </div>
                       <Badge variant="outline" className={cn(
                         "text-[9px] px-3 font-bold uppercase",
                         attack.risk === 'Critical' || attack.risk === 'Extreme' ? 'border-red-500/40 text-red-500' : 'border-orange-500/40 text-orange-500'
                       )}>{attack.risk}</Badge>
                    </div>
                    <div className="relative z-10">
                       <span className="text-sm font-bold text-white block mb-1 group-hover:text-red-500 transition-colors uppercase tracking-tighter">{attack.name}</span>
                       <p className="text-[10px] text-muted-foreground italic line-clamp-1">{attack.desc}</p>
                    </div>
                  </div>
                ))}
              </TabsContent>

              <TabsContent value="exploit" className="mt-8 animate-in fade-in zoom-in-95">
                <Card className="glass-card border-red-600/30 rounded-[2.5rem]">
                  <CardHeader className="p-8">
                    <CardTitle className="text-white text-sm flex items-center gap-3 uppercase tracking-[0.3em]">
                      <Bug className="size-5 text-red-600" /> Payload Gen
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-8 pt-0 space-y-6">
                    <div className="space-y-3">
                      <Label className="text-[10px] uppercase font-bold text-red-500/60 tracking-widest">Context</Label>
                      <Textarea 
                        className="bg-black/80 border-red-500/20 min-h-[140px] text-xs rounded-2xl focus:border-red-600/50"
                        value={vulnerability}
                        onChange={(e) => setVulnerability(e.target.value)}
                        placeholder="Describe breach vector (e.g. NFC replay, Radio jam)..."
                      />
                    </div>
                    <Button 
                      className="w-full bg-red-600 hover:bg-red-700 h-16 rounded-2xl group font-bold uppercase tracking-[0.4em] text-[10px] shadow-2xl shadow-red-600/40"
                      onClick={handleGenerateExploit}
                      disabled={loading}
                    >
                      {loading ? <Loader2 className="size-6 animate-spin" /> : <Zap className="size-6 group-hover:scale-125 transition-transform" />}
                      Synthesize
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="forge" className="mt-8 animate-in fade-in zoom-in-95">
                <Card className="glass-card border-red-600/30 rounded-[2.5rem]">
                  <CardHeader className="p-8">
                    <CardTitle className="text-white text-sm flex items-center gap-3 uppercase tracking-[0.3em]">
                      <Hammer className="size-5 text-red-600" /> Tool Forge
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-8 pt-0 space-y-6">
                    <Textarea 
                      className="bg-black/80 border-red-500/20 min-h-[140px] text-xs rounded-2xl focus:border-red-600/50"
                      value={toolPurpose}
                      onChange={(e) => setToolPurpose(e.target.value)}
                      placeholder="Forge BlackArch-tier capability..."
                    />
                    <Button 
                      className="w-full bg-red-600 hover:bg-red-700 h-16 rounded-2xl font-bold uppercase tracking-[0.4em] text-[10px]"
                      onClick={handleForgeTool}
                      disabled={loading}
                    >
                      {loading ? <Loader2 className="size-6 animate-spin" /> : <Hammer className="size-6" />}
                      Forge Node
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          <div className="lg:col-span-3">
            {forgeResult || result ? (
              <div className="space-y-10 animate-in fade-in zoom-in-95 duration-1000">
                <Card className="glass-card border-red-600/40 overflow-hidden shadow-[0_0_80px_rgba(239,68,68,0.2)] rounded-[3rem]">
                  <CardHeader className="bg-red-950/20 border-b border-red-600/20 p-10 flex flex-row items-center justify-between">
                    <div className="flex items-center gap-6">
                      <div className="p-5 rounded-3xl bg-red-600 border border-red-400 shadow-[0_0_30px_rgba(239,68,68,0.4)]">
                        <Wrench className="size-10 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-4xl text-white italic tracking-tighter uppercase">{forgeResult ? `Forged: ${forgeResult.toolName}` : `Exploit: ${result.exploitLanguage}`}</CardTitle>
                        <CardDescription className="text-red-500 font-bold text-[11px] uppercase tracking-[0.5em] mt-2">Elite Node Strike Output v18.8</CardDescription>
                      </div>
                    </div>
                    <Badge className="bg-red-600 text-white py-3 px-8 rounded-full font-code text-xs shadow-2xl animate-pulse">READY_FOR_EXECUTION</Badge>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="grid grid-cols-1 md:grid-cols-3">
                      <div className="md:col-span-2 relative">
                         <div className="absolute top-6 right-10 text-[10px] font-bold text-red-500/40 uppercase tracking-[0.5em] select-none">Sovereign Source Matrix</div>
                         <pre className="p-12 font-code text-sm leading-relaxed text-emerald-400 bg-black/90 overflow-x-auto min-h-[650px] scrollbar-hide">
                           <code>{forgeResult ? forgeResult.generatedCode : result.exploitCode}</code>
                         </pre>
                      </div>
                      <div className="p-10 bg-red-950/5 border-l border-red-600/10 space-y-12">
                        <div>
                          <h4 className="text-[12px] font-bold text-red-500 uppercase tracking-[0.4em] mb-6 flex items-center gap-4">
                            <Flame className="size-5" /> Strike Vectors
                          </h4>
                          <div className="flex flex-wrap gap-3">
                            {(forgeResult?.capabilities || result?.stealthFeatures)?.map((cap: string, i: number) => (
                              <Badge key={i} className="bg-black border-red-600/30 text-white text-[10px] py-2 px-4 rounded-xl uppercase tracking-tighter">{cap}</Badge>
                            ))}
                          </div>
                        </div>
                        <div className="p-8 rounded-[2.5rem] bg-black/80 border border-red-600/20 shadow-inner">
                          <h4 className="text-[12px] font-bold text-red-500 uppercase tracking-[0.4em] mb-4 flex items-center gap-3">
                            <Terminal className="size-4" /> Usage Manual
                          </h4>
                          <div className="text-[11px] font-code text-emerald-500 leading-loose italic">
                            <span className="text-emerald-900 mr-2">$</span>{forgeResult ? forgeResult.usageInstructions : result.usageInstructions}
                          </div>
                        </div>
                        <Button className="w-full h-16 bg-red-600 hover:bg-red-700 text-white rounded-2xl font-bold uppercase tracking-[0.4em] text-[10px] shadow-2xl" onClick={() => {
                          navigator.clipboard.writeText(forgeResult?.generatedCode || result?.exploitCode);
                          toast({ title: "Matrix Copied" });
                        }}>
                          Extract Payload
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ) : (
              <div className="h-full min-h-[800px] border-2 border-dashed border-red-600/20 rounded-[4rem] flex flex-col items-center justify-center text-center p-16 bg-black/40 group relative overflow-hidden transition-all hover:bg-red-950/5">
                <div className="size-64 bg-red-600/5 rounded-full flex items-center justify-center mb-16 border border-red-600/10 group-hover:scale-110 transition-transform duration-1000 relative">
                  <Skull className={cn("size-32 text-red-600/20 transition-all duration-1000", mounted && loading && "text-red-600 animate-pulse")} />
                  <div className="absolute inset-0 bg-red-600/5 rounded-full blur-[100px] animate-pulse" />
                </div>
                <h3 className="text-7xl font-headline font-bold text-white mb-10 tracking-tighter italic drop-shadow-2xl">Arsenal Force</h3>
                <p className="text-muted-foreground max-w-3xl mx-auto leading-loose mb-16 text-2xl font-medium italic">
                  Select a strike vector or define custom parameters. The system is now integrated with the <span className="text-red-600 font-bold uppercase">BlackArch</span> tool lexicon for ultimate offensive sovereignty.
                </p>
                <div className="flex gap-10">
                  <Badge variant="outline" className="bg-white/5 py-5 px-12 text-[12px] tracking-[0.6em] uppercase border-red-600/30 rounded-full shadow-2xl backdrop-blur-2xl group-hover:border-red-600/60 transition-colors">BlackArch v18.8 Sync</Badge>
                  <Badge variant="outline" className="bg-white/5 py-5 px-12 text-[12px] tracking-[0.6em] uppercase border-red-600/30 rounded-full shadow-2xl backdrop-blur-2xl group-hover:border-red-600/60 transition-colors">Zero-Day Lexicon Ready</Badge>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
