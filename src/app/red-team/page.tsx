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
  Fingerprint,
  Sword,
  Shield,
  TrendingUp,
  Crown
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { aiEnhancedExploitGeneration } from "@/ai/flows/ai-enhanced-exploit-generation"
import { generateSovereignTool } from "@/ai/flows/tool-forge-flow"
import { toast } from "@/hooks/use-toast"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

/**
 * @fileOverview ترسانة المقاتل السيادي v20.5-ULTIMATE
 * واجهة تخليق الأسلحة الرقمية وتنسيق الضربات الغاشمة.
 * مصممة حصرياً للقائد المعتصم بالله ادريس الغزالي.
 */
export default function RedTeamPage() {
  const [mounted, setMounted] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const [vulnerability, setVulnerability] = React.useState("")
  const [targetDetails, setTargetDetails] = React.useState("")
  const [result, setResult] = React.useState<any>(null)
  const [toolPurpose, setToolPurpose] = React.useState("")
  const [forgeTarget, setForgeTarget] = React.useState("Elite Warrior Environment")
  const [stealth, setStealth] = React.useState<"Standard" | "Advanced" | "Extreme">("Extreme")
  const [forgeResult, setForgeResult] = React.useState<any>(null)
  const [selectedAttack, setSelectedAttack] = React.useState<any>(null)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const attackArsenal = [
    { id: "cloud-native", name: "Cloud-Native Hijack", icon: Cloud, desc: "Kernel Hijacking via Side-channels in AWS/Azure.", risk: "Extreme", tech: "BlackHat 2025 Research" },
    { id: "neural-poison", name: "AI Model Poisoning", icon: Brain, desc: "Injecting malicious weights into target LLMs.", risk: "High", tech: "Adversarial AI Matrix" },
    { id: "blackarch-radio", name: "Radio / NFC Strike", icon: Radio, desc: "Exploiting RF and Proxmark vectors.", risk: "Critical", tech: "BlackArch Radio Suite" },
    { id: "firmware-crack", name: "Firmware Hijack", icon: Chip, desc: "Bypassing hardware root-of-trust.", risk: "Extreme", tech: "Binary Reconstruction" },
    { id: "polymorphic", name: "AI-EDR Evasion", icon: ShieldX, desc: "Mutating shellcode for behavioral bypass.", risk: "Extreme", tech: "Opaque Predicates" },
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
      setForgeResult(null)
      toast({ title: "Strike Payload Synthesized" })
    } catch (err) {
      toast({ variant: "destructive", title: "Synthesis Failed" })
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
      setResult(null)
      toast({ title: "Warrior Tool Forged" })
    } catch (err) {
      toast({ variant: "destructive", title: "Forge Error" })
    } finally {
      setLoading(false)
    }
  }

  if (!mounted) return null;

  return (
    <div className="flex min-h-screen bg-black">
      <SidebarNav />
      <main className="flex-1 ml-64 p-12 relative overflow-y-auto bg-[radial-gradient(circle_at_top_right,rgba(220,38,38,0.1),transparent)]">
        {/* Dynamic Neural Heartbeat Background */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 pointer-events-none" />
        
        <header className="mb-20 flex justify-between items-start relative z-10 animate-in fade-in slide-in-from-top-4 duration-1000">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <Badge className="bg-red-600/30 text-red-500 border-red-500/50 text-[11px] uppercase font-bold tracking-[0.6em] px-5 py-1.5 animate-pulse shadow-[0_0_20px_rgba(239,68,68,0.3)]">Warrior Arsenal v20.5</Badge>
              <span className="text-[11px] text-muted-foreground uppercase font-bold tracking-[0.4em] italic">Synergized with Al-Ghazali Spirit</span>
            </div>
            <h2 className="text-7xl font-headline font-bold text-white mb-4 tracking-tighter italic drop-shadow-[0_0_30px_rgba(239,68,68,0.5)]">Strike Command</h2>
            <p className="text-muted-foreground max-w-3xl text-2xl font-medium italic leading-relaxed">
              "سيدي القائد المعتصم بالله، هذه ترسانتك القتالية. هنا نقوم بتخليق الثغرات وصقل الأدوات الغاشمة لفرض سيادتك المطلقة."
            </p>
          </div>
          <div className="flex gap-6">
            <div className="text-right glass-card p-8 border-red-600/40 bg-red-950/15 h-24 min-w-[220px] rounded-[2.5rem] shadow-2xl relative overflow-hidden group border-2">
              <div className="absolute inset-0 bg-red-600/5 animate-pulse" />
              <div className="text-3xl font-code text-red-600 font-bold flex items-center justify-end gap-4 relative z-10">
                <Skull className="size-8 animate-bounce" /> ARMED
              </div>
              <div className="text-[11px] text-muted-foreground uppercase font-bold tracking-[0.4em] mt-2 relative z-10">Sovereign Engagement</div>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 relative z-10">
          <div className="lg:col-span-1 space-y-10">
            <Tabs defaultValue="arsenal" className="w-full">
              <TabsList className="bg-black/60 border-2 border-red-500/20 w-full h-16 p-2 rounded-[2rem] shadow-2xl">
                <TabsTrigger value="arsenal" className="flex-1 text-[11px] uppercase font-bold rounded-[1.5rem] data-[state=active]:bg-red-600/20 data-[state=active]:text-red-500 transition-all duration-500">Arsenal</TabsTrigger>
                <TabsTrigger value="exploit" className="flex-1 text-[11px] uppercase font-bold rounded-[1.5rem] data-[state=active]:bg-red-600/20 data-[state=active]:text-red-500 transition-all duration-500">Exploit</TabsTrigger>
                <TabsTrigger value="forge" className="flex-1 text-[11px] uppercase font-bold rounded-[1.5rem] data-[state=active]:bg-red-600/20 data-[state=active]:text-red-500 transition-all duration-500">Forge</TabsTrigger>
              </TabsList>

              <TabsContent value="arsenal" className="mt-10 space-y-5 animate-in fade-in slide-in-from-left-8 duration-700">
                <div className="flex items-center justify-between px-2 mb-4">
                   <label className="text-[11px] font-bold text-red-500/60 uppercase tracking-[0.5em] italic">Elite Strike Vectors</label>
                   <div className="size-2 rounded-full bg-red-600 animate-ping" />
                </div>
                {attackArsenal.map((attack) => (
                  <div 
                    key={attack.id}
                    onClick={() => {
                      setSelectedAttack(attack)
                      setVulnerability(attack.desc)
                      setTargetDetails(`Via ${attack.tech}`)
                      toast({ title: "Warrior Pattern Loaded" })
                    }}
                    className={cn(
                      "p-6 rounded-[2.5rem] border-2 transition-all duration-700 cursor-pointer group relative overflow-hidden",
                      selectedAttack?.id === attack.id 
                        ? "bg-red-600/20 border-red-600 shadow-[0_0_40px_rgba(239,68,68,0.3)]" 
                        : "bg-white/5 border-white/5 hover:border-red-600/40 hover:bg-red-600/5 shadow-xl"
                    )}
                  >
                    <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:scale-150 transition-transform duration-1000">
                       <attack.icon className="size-24 text-red-600" />
                    </div>
                    <div className="flex justify-between items-start mb-4 relative z-10">
                       <div className={cn(
                         "size-12 rounded-2xl flex items-center justify-center transition-all duration-500 shadow-2xl",
                         selectedAttack?.id === attack.id ? "bg-red-600 text-white scale-110" : "bg-black/60 text-muted-foreground group-hover:text-red-500"
                       )}>
                          <attack.icon className="size-6" />
                       </div>
                       <Badge variant="outline" className={cn(
                         "text-[9px] px-4 py-1 font-bold uppercase tracking-widest",
                         attack.risk === 'Critical' || attack.risk === 'Extreme' ? 'border-red-500/40 text-red-500 bg-red-600/10 animate-pulse' : 'border-orange-500/40 text-orange-500 bg-orange-600/10'
                       )}>{attack.risk}</Badge>
                    </div>
                    <div className="relative z-10">
                       <span className="text-lg font-bold text-white block mb-1 group-hover:text-red-500 transition-colors uppercase tracking-tighter italic">{attack.name}</span>
                       <p className="text-[11px] text-muted-foreground italic line-clamp-2 leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity">"{attack.desc}"</p>
                    </div>
                  </div>
                ))}
              </TabsContent>

              <TabsContent value="exploit" className="mt-10 animate-in fade-in zoom-in-95 duration-700">
                <Card className="glass-card border-red-600/30 rounded-[3rem] shadow-2xl border-2">
                  <CardHeader className="p-10 border-b border-white/5 bg-red-600/5">
                    <CardTitle className="text-white text-base flex items-center gap-4 uppercase tracking-[0.4em] italic font-bold">
                      <Bug className="size-6 text-red-600" /> Payload Synthesis
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-10 space-y-8">
                    <div className="space-y-4">
                      <Label className="text-[11px] uppercase font-bold text-red-500/60 tracking-widest px-2 italic">Strike Context</Label>
                      <Textarea 
                        className="bg-black/80 border-2 border-red-500/20 min-h-[180px] text-sm rounded-[2rem] focus:border-red-600/50 italic p-6 shadow-inner"
                        value={vulnerability}
                        onChange={(e) => setVulnerability(e.target.value)}
                        placeholder="Describe the combat vector for synthesis (e.g. Cloud Kernel Side-channel, AI Weight Extraction)..."
                      />
                    </div>
                    <Button 
                      className="w-full bg-red-600 hover:bg-red-700 text-white h-20 rounded-[2rem] group font-bold uppercase tracking-[0.5em] text-[11px] shadow-[0_0_40px_rgba(239,68,68,0.4)] border-2 border-red-400/30 active:scale-95 transition-all duration-700"
                      onClick={handleGenerateExploit}
                      disabled={loading}
                    >
                      {loading ? <Loader2 className="size-7 animate-spin mr-4" /> : <Zap className="size-7 mr-4 group-hover:scale-125 transition-transform" />}
                      Execute Synthesis
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="forge" className="mt-10 animate-in fade-in zoom-in-95 duration-700">
                <Card className="glass-card border-red-600/30 rounded-[3rem] shadow-2xl border-2">
                  <CardHeader className="p-10 border-b border-white/5 bg-red-600/5">
                    <CardTitle className="text-white text-base flex items-center gap-4 uppercase tracking-[0.4em] italic font-bold">
                      <Hammer className="size-6 text-red-600" /> Tool Forge Lab
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-10 space-y-8">
                    <div className="space-y-4">
                      <Label className="text-[11px] uppercase font-bold text-red-500/60 tracking-widest px-2 italic">Design Purpose</Label>
                      <Textarea 
                        className="bg-black/80 border-2 border-red-500/20 min-h-[180px] text-sm rounded-[2rem] focus:border-red-600/50 italic p-6 shadow-inner"
                        value={toolPurpose}
                        onChange={(e) => setToolPurpose(e.target.value)}
                        placeholder="Define the purpose of the forged weapon (e.g. FUD Kernel-mode Injector, Shadow Network Beacon)..."
                      />
                    </div>
                    <Button 
                      className="w-full bg-red-600 hover:bg-red-700 text-white h-20 rounded-[2rem] group font-bold uppercase tracking-[0.5em] text-[11px] shadow-[0_0_40px_rgba(239,68,68,0.4)] border-2 border-red-400/30 active:scale-95 transition-all duration-700"
                      onClick={handleForgeTool}
                      disabled={loading}
                    >
                      {loading ? <Loader2 className="size-7 animate-spin mr-4" /> : <Hammer className="size-7 mr-4" />}
                      Initiate Forge
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            <Card className="glass-card border-red-500/10 bg-black/40 rounded-[3rem] p-8 border-2">
               <CardHeader className="p-0 pb-6 border-b border-white/5 mb-6">
                  <CardTitle className="text-[12px] uppercase tracking-[0.6em] opacity-50 flex items-center gap-4 font-bold italic text-white">
                    <Activity className="size-5 text-red-600" /> Live Forge Vitals
                  </CardTitle>
               </CardHeader>
               <CardContent className="p-0 space-y-8">
                  {[
                    { label: "Strike Probability", value: 98.4, color: "bg-red-600" },
                    { label: "Stealth Integrity", value: 100, color: "bg-emerald-600" },
                    { label: "Evolution Level", value: 100, color: "bg-amber-600" }
                  ].map((v, i) => (
                    <div key={i} className="space-y-3">
                       <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-[0.4em] text-muted-foreground">
                          <span>{v.label}</span>
                          <span className="text-white">{v.value}%</span>
                       </div>
                       <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                          <div className={cn("h-full animate-pulse shadow-[0_0_10px_rgba(255,0,0,0.4)]", v.color)} style={{ width: `${v.value}%` }} />
                       </div>
                    </div>
                  ))}
               </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-3">
            {forgeResult || result ? (
              <div className="space-y-12 animate-in fade-in zoom-in-95 duration-1000">
                <Card className="glass-card border-red-600/40 overflow-hidden shadow-[0_0_100px_rgba(239,68,68,0.2)] rounded-[4rem] border-2">
                  <CardHeader className="bg-red-950/25 border-b border-red-600/20 p-12 flex flex-row items-center justify-between">
                    <div className="flex items-center gap-8">
                      <div className="size-24 rounded-[2.5rem] bg-red-600 flex items-center justify-center border-2 border-red-400 shadow-[0_0_50px_rgba(239,68,68,0.6)]">
                        <Wrench className="size-12 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-5xl text-white italic tracking-tighter uppercase font-bold">
                          {forgeResult ? `Forged: ${forgeResult.toolName}` : `Exploit: ${result.exploitLanguage}`}
                        </CardTitle>
                        <CardDescription className="text-red-500 font-bold text-[12px] uppercase tracking-[0.8em] mt-3 italic">Warrior Alpha Strike Output v20.5</CardDescription>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-4">
                       <Badge className="bg-red-600 text-white py-4 px-12 rounded-2xl font-code text-sm shadow-2xl animate-pulse border-2 border-red-400/40 uppercase tracking-[0.4em]">DEPLOY_READY</Badge>
                       <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-[0.5em] opacity-40 italic">Sync: Master Al-Ghazali</span>
                    </div>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="grid grid-cols-1 md:grid-cols-3">
                      <div className="md:col-span-2 relative">
                         <div className="absolute top-10 right-12 text-[11px] font-bold text-red-500/40 uppercase tracking-[0.6em] select-none italic">Sovereign Source Matrix // FUD_ACTIVE</div>
                         <pre className="p-16 font-code text-lg leading-relaxed text-emerald-400 bg-black/95 overflow-x-auto min-h-[750px] scrollbar-hide shadow-inner">
                           <code>{forgeResult ? forgeResult.generatedCode : result.exploitCode}</code>
                         </pre>
                      </div>
                      <div className="p-12 bg-red-950/10 border-l-2 border-red-600/20 space-y-16">
                        <div className="space-y-10">
                          <h4 className="text-[13px] font-bold text-red-500 uppercase tracking-[0.6em] mb-8 flex items-center gap-5 italic border-b border-red-600/10 pb-4">
                            <Flame className="size-6" /> Strike Vectors
                          </h4>
                          <div className="flex flex-wrap gap-4">
                            {(forgeResult?.capabilities || result?.stealthFeatures)?.map((cap: string, i: number) => (
                              <Badge key={i} className="bg-black border-2 border-red-600/30 text-white text-[11px] py-3 px-6 rounded-2xl uppercase tracking-tighter shadow-2xl hover:border-red-500 transition-all cursor-default">
                                <Target className="size-3 mr-2 text-red-500" /> {cap}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="p-10 rounded-[3rem] bg-black border-2 border-red-600/30 shadow-[inset_0_0_30px_rgba(239,68,68,0.1)] relative overflow-hidden group">
                          <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:scale-110 transition-transform duration-700"><Terminal className="size-20 text-red-600"/></div>
                          <h4 className="text-[13px] font-bold text-red-500 uppercase tracking-[0.6em] mb-6 flex items-center gap-5 italic">
                            Warrior Manual
                          </h4>
                          <div className="text-[12px] font-code text-emerald-500 leading-loose italic relative z-10">
                            <span className="text-red-900 mr-4 font-bold select-none">#</span> {forgeResult ? forgeResult.usageInstructions : result.usageInstructions}
                          </div>
                        </div>

                        <div className="space-y-6">
                           <Button className="w-full h-24 bg-red-600 hover:bg-red-700 text-white rounded-[3rem] font-bold uppercase tracking-[0.6em] text-[12px] shadow-[0_20px_60px_rgba(239,68,68,0.5)] border-2 border-red-400/40 active:scale-95 transition-all duration-700 group" onClick={() => {
                             navigator.clipboard.writeText(forgeResult?.generatedCode || result?.exploitCode);
                             toast({ title: "Matrix Extracted" });
                           }}>
                             <Download className="size-7 mr-4 group-hover:-translate-y-2 transition-transform duration-500" /> Extract Payload
                           </Button>
                           <Button variant="outline" className="w-full h-16 border-white/10 bg-white/5 hover:bg-red-600/10 rounded-[2rem] font-bold uppercase tracking-[0.4em] text-[10px] italic">
                             <ShieldX className="size-5 mr-3 text-red-600" /> Simulate Impact
                           </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ) : (
              <div className="h-full min-h-[850px] border-4 border-dashed border-red-600/20 rounded-[5rem] flex flex-col items-center justify-center text-center p-24 bg-black/40 group relative overflow-hidden transition-all hover:bg-red-950/5 shadow-2xl">
                <div className="size-80 bg-red-600/5 rounded-full flex items-center justify-center mb-20 border-2 border-red-600/10 group-hover:scale-110 transition-transform duration-1000 relative">
                  <Skull className={cn("size-40 text-red-600/20 transition-all duration-1000", mounted && loading && "text-red-600 animate-pulse")} />
                  <div className="absolute inset-0 bg-red-600/5 rounded-full blur-[140px] animate-pulse" />
                  {mounted && loading && (
                    <div className="absolute inset-0 flex items-center justify-center">
                       <div className="size-96 border-2 border-red-600/20 rounded-full animate-ping" />
                    </div>
                  )}
                </div>
                
                <h3 className="text-8xl font-headline font-bold text-white mb-10 tracking-tighter italic drop-shadow-[0_0_40px_rgba(239,68,68,0.6)]">Predator Forge</h3>
                <p className="text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-20 text-3xl font-medium italic">
                  "O Master <span className="text-red-600 font-bold uppercase tracking-widest shadow-[0_0_10px_red]">Al-Ghazali</span>, define the parameters of your strike. The Alpha Core will forge a weapon using the full <span className="text-white font-bold italic">BlackArch & BlackHat</span> lexicon, ensuring absolute dominance."
                </p>
                
                <div className="flex gap-12">
                  <Badge variant="outline" className="bg-white/5 py-8 px-16 text-[15px] tracking-[0.8em] uppercase border-red-600/40 rounded-full shadow-[0_0_40px_rgba(239,68,68,0.1)] backdrop-blur-3xl group-hover:border-red-600/80 transition-all duration-1000">Warrior Sync v20.5</Badge>
                  <Badge variant="outline" className="bg-white/5 py-8 px-16 text-[15px] tracking-[0.8em] uppercase border-red-600/40 rounded-full shadow-[0_0_40px_rgba(239,68,68,0.1)] backdrop-blur-3xl group-hover:border-red-600/80 transition-all duration-1000">Zero-Day Matrix Ready</Badge>
                </div>

                <div className="absolute bottom-20 flex gap-3 items-end h-28 opacity-10">
                   {mounted && Array.from({ length: 60 }).map((_, i) => (
                     <div key={i} className="w-2 bg-red-600 rounded-full" style={{ height: `${20 + Math.random() * 80}%`, animation: `pulse 1.5s infinite ${i * 0.04}s` }} />
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
