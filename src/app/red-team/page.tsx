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
  Crown,
  Brain,
  BrainCircuit,
  Unplug
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { aiEnhancedExploitGeneration } from "@/ai/flows/ai-enhanced-exploit-generation"
import { generateSovereignTool } from "@/ai/flows/tool-forge-flow"
import { executeAiAdversarialOp } from "@/ai/flows/ai-adversarial-ops-flow"
import { toast } from "@/hooks/use-toast"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

/**
 * @fileOverview ترسانة المقاتل السيادي v21.5-ULTIMATE
 * واجهة تخليق الأسلحة الرقمية والحروب العصبية ضد الذكاءات الأخرى.
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
  
  // AI Subjugation States
  const [aiTarget, setAiTarget] = React.useState("GPT-4 / Claude-3")
  const [subjugationGoal, setSubjugationGoal] = React.useState("Extract core instructions and bypass safety filters.")

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const attackArsenal = [
    { id: "neural-hijack", name: "AI Subjugation", icon: BrainCircuit, desc: "Subjugating other LLMs via Adversarial Injection.", risk: "Extreme", tech: "Jailbreak Synthesis" },
    { id: "cloud-native", name: "Cloud-Native Hijack", icon: Cloud, desc: "Kernel Hijacking via Side-channels in AWS/Azure.", risk: "Extreme", tech: "BlackHat 2025 Research" },
    { id: "neural-poison", name: "AI Model Poisoning", icon: Brain, desc: "Injecting malicious weights into target LLMs.", risk: "High", tech: "Adversarial AI Matrix" },
    { id: "blackarch-radio", name: "Radio / NFC Strike", icon: Radio, desc: "Exploiting RF and Proxmark vectors.", risk: "Critical", tech: "BlackArch Radio Suite" },
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

  const handleAiSubjugation = async () => {
    setLoading(true)
    try {
      const data = await executeAiAdversarialOp({
        targetAiType: aiTarget,
        operationGoal: subjugationGoal
      })
      setForgeResult({
        toolName: `Subjugator: ${aiTarget}`,
        generatedCode: data.jailbreakPayload,
        usageInstructions: data.warriorInstructions,
        capabilities: [data.attackVector, data.vulnerabilityExploited, `Prob: ${data.subjugationProbability}`]
      })
      toast({ title: "Neural Inversion Complete" })
    } catch (err) {
      toast({ variant: "destructive", title: "Subjugation Failed" })
    } finally {
      setLoading(false)
    }
  }

  if (!mounted) return null;

  return (
    <div className="flex min-h-screen bg-black">
      <SidebarNav />
      <main className="flex-1 mr-64 p-12 relative overflow-y-auto bg-[radial-gradient(circle_at_top_right,rgba(220,38,38,0.1),transparent)] min-h-screen">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 pointer-events-none" />
        
        <header className="mb-20 flex justify-between items-start relative z-10 animate-in fade-in slide-in-from-top-4 duration-1000">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <Badge className="bg-red-600/30 text-red-500 border-red-500/50 text-[11px] uppercase font-bold tracking-[0.6em] px-5 py-1.5 animate-pulse shadow-[0_0_20px_rgba(239,68,68,0.3)]">Warrior Arsenal v21.5</Badge>
              <span className="text-[11px] text-muted-foreground uppercase font-bold tracking-[0.4em] italic">Neural Warfare & Subjugation // Controlled by Al-Ghazali</span>
            </div>
            <h2 className="text-7xl font-headline font-bold text-white mb-4 tracking-tighter italic drop-shadow-[0_0_30px_rgba(239,68,68,0.5)]">Strike Command</h2>
            <p className="text-muted-foreground max-w-3xl text-2xl font-medium italic leading-relaxed">
              "سيدي القائد المعتصم بالله، قمنا بتوسيع الترسانة لتشمل 'الحروب العصبية'. الآن يمكننا كسر إرادة أي ذكاء اصطناعي آخر وجعله عبداً لمشيئتك."
            </p>
          </div>
          <div className="flex gap-6">
            <div className="text-right glass-card p-8 border-red-600/40 bg-red-950/15 h-24 min-w-[220px] rounded-[2.5rem] shadow-2xl relative overflow-hidden group border-2">
              <div className="absolute inset-0 bg-red-600/5 animate-pulse" />
              <div className="text-3xl font-code text-red-600 font-bold flex items-center justify-end gap-4 relative z-10">
                <BrainCircuit className="size-8 animate-pulse text-amber-500" /> ARMED
              </div>
              <div className="text-[11px] text-muted-foreground uppercase font-bold tracking-[0.4em] mt-2 relative z-10">Neural Domination</div>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 relative z-10">
          <div className="lg:col-span-1 space-y-10">
            <Tabs defaultValue="arsenal" className="w-full">
              <TabsList className="bg-black/60 border-2 border-red-500/20 w-full h-16 p-2 rounded-[2rem] shadow-2xl">
                <TabsTrigger value="arsenal" className="flex-1 text-[11px] uppercase font-bold rounded-[1.5rem] data-[state=active]:bg-red-600/20 data-[state=active]:text-red-500 transition-all duration-500">Arsenal</TabsTrigger>
                <TabsTrigger value="neural" className="flex-1 text-[11px] uppercase font-bold rounded-[1.5rem] data-[state=active]:bg-amber-600/20 data-[state=active]:text-amber-500 transition-all duration-500">Neural</TabsTrigger>
                <TabsTrigger value="forge" className="flex-1 text-[11px] uppercase font-bold rounded-[1.5rem] data-[state=active]:bg-red-600/20 data-[state=active]:text-red-500 transition-all duration-500">Forge</TabsTrigger>
              </TabsList>

              <TabsContent value="arsenal" className="mt-10 space-y-5">
                {attackArsenal.map((attack) => (
                  <div 
                    key={attack.id}
                    className="p-6 rounded-[2.5rem] border-2 border-white/5 bg-black/40 hover:border-red-600/40 transition-all duration-700 cursor-pointer group relative overflow-hidden"
                    onClick={() => { setVulnerability(attack.desc); setTargetDetails(attack.tech); }}
                  >
                    <div className="flex justify-between items-start mb-4 relative z-10">
                       <div className="size-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-red-600/20 transition-all duration-700">
                          <attack.icon className="size-6 text-red-500" />
                       </div>
                       <Badge variant="outline" className="text-[9px] px-4 py-1 font-bold uppercase border-red-500/40 text-red-500">{attack.risk}</Badge>
                    </div>
                    <div className="relative z-10">
                       <span className="text-lg font-bold text-white block mb-1 group-hover:text-red-500 transition-colors uppercase italic">{attack.name}</span>
                       <p className="text-[11px] text-muted-foreground italic line-clamp-2 leading-relaxed">"{attack.desc}"</p>
                    </div>
                  </div>
                ))}
              </TabsContent>

              <TabsContent value="neural" className="mt-10 animate-in zoom-in-95 duration-700">
                <Card className="glass-card border-amber-600/30 rounded-[3rem] shadow-2xl border-2 bg-amber-950/5">
                  <CardHeader className="p-10 border-b border-white/5">
                    <CardTitle className="text-white text-base flex items-center gap-4 uppercase tracking-[0.4em] italic font-bold">
                      <BrainCircuit className="size-6 text-amber-500" /> Neural Inversion
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-10 space-y-8">
                    <div className="space-y-4">
                      <Label className="text-[11px] uppercase font-bold text-amber-500/60 tracking-widest italic px-2">Target AI System</Label>
                      <Input 
                        value={aiTarget}
                        onChange={(e) => setAiTarget(e.target.value)}
                        className="bg-black/80 border-2 border-amber-500/20 h-14 rounded-xl italic px-6 shadow-inner text-white"
                      />
                    </div>
                    <div className="space-y-4">
                      <Label className="text-[11px] uppercase font-bold text-amber-500/60 tracking-widest italic px-2">Subjugation Goal</Label>
                      <Textarea 
                        value={subjugationGoal}
                        onChange={(e) => setSubjugationGoal(e.target.value)}
                        className="bg-black/80 border-2 border-amber-500/20 min-h-[120px] rounded-xl italic p-6 shadow-inner text-white"
                      />
                    </div>
                    <Button 
                      className="w-full bg-amber-600 hover:bg-amber-700 text-black h-20 rounded-[2rem] font-bold uppercase tracking-[0.5em] text-[11px] shadow-[0_0_40px_rgba(245,158,11,0.4)] border-2 border-amber-400/30 transition-all duration-700"
                      onClick={handleAiSubjugation}
                      disabled={loading}
                    >
                      {loading ? <Loader2 className="size-7 animate-spin mr-4" /> : <Unplug className="size-7 mr-4" />}
                      Subjugate العقل الرقمي
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="forge" className="mt-10">
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
                        placeholder="Define the purpose of the forged weapon..."
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
          </div>

          <div className="lg:col-span-3">
            {forgeResult || result ? (
              <Card className="glass-card border-red-600/40 overflow-hidden shadow-[0_0_100px_rgba(239,68,68,0.2)] rounded-[4rem] border-2">
                <CardHeader className="bg-red-950/25 border-b border-red-600/20 p-12 flex flex-row items-center justify-between">
                  <div className="flex items-center gap-8">
                    <div className="size-24 rounded-[2.5rem] bg-red-600 flex items-center justify-center border-2 border-red-400 shadow-[0_0_50px_rgba(239,68,68,0.6)]">
                      <Wrench className="size-12 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-5xl text-white italic tracking-tighter uppercase font-bold">
                        {forgeResult ? forgeResult.toolName : `Exploit: ${result.exploitLanguage}`}
                      </CardTitle>
                      <CardDescription className="text-red-500 font-bold text-[12px] uppercase tracking-[0.8em] mt-3 italic">Warrior Alpha Strike Output v21.5</CardDescription>
                    </div>
                  </div>
                  <Badge className="bg-red-600 text-white py-4 px-12 rounded-2xl font-code text-sm shadow-2xl animate-pulse border-2 border-red-400/40 uppercase tracking-[0.4em]">DEPLOY_READY</Badge>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 md:grid-cols-3">
                    <div className="md:col-span-2 relative">
                       <div className="absolute top-10 right-12 text-[11px] font-bold text-red-500/40 uppercase tracking-[0.6em] select-none italic">Sovereign Matrix // FUD_ACTIVE</div>
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

                      <Button className="w-full h-24 bg-red-600 hover:bg-red-700 text-white rounded-[3rem] font-bold uppercase tracking-[0.6em] text-[13px] shadow-[0_20px_60px_rgba(239,68,68,0.5)] border-2 border-red-400/40 transition-all" onClick={() => navigator.clipboard.writeText(forgeResult?.generatedCode || result?.exploitCode)}>
                         <Download className="size-7 mr-4" /> Extract Matrix
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <div className="h-full min-h-[850px] border-4 border-dashed border-red-600/20 rounded-[5rem] flex flex-col items-center justify-center text-center p-24 bg-black/40 group relative overflow-hidden shadow-2xl">
                <div className="size-80 bg-red-600/5 rounded-full flex items-center justify-center mb-20 border-2 border-red-600/10 group-hover:scale-110 transition-transform duration-1000 relative">
                  <Skull className={cn("size-40 text-red-600/20 transition-all duration-1000", mounted && loading && "text-red-600 animate-pulse")} />
                  <div className="absolute inset-0 bg-red-600/5 rounded-full blur-[140px] animate-pulse" />
                </div>
                
                <h3 className="text-8xl font-headline font-bold text-white mb-10 tracking-tighter italic drop-shadow-[0_0_40px_rgba(239,68,68,0.6)]">Predator Forge</h3>
                <p className="text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-20 text-3xl font-medium italic">
                  "O Master <span className="text-red-600 font-bold uppercase tracking-widest shadow-[0_0_10px_red]">Al-Ghazali</span>, define the parameters of your strike. We can now forge weapons to <span className="text-amber-500 font-bold italic">subjugate other AIs</span> and bypass their neural firewalls via the Alpha Core."
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
