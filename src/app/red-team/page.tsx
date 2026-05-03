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
  Fingerprint,
  Sword,
  Shield,
  TrendingUp,
  Crown,
  Brain,
  BrainCircuit,
  Unplug,
  Key
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
import { generateSmartWordlist } from "@/ai/flows/ai-smart-wordlist-flow"
import { toast } from "@/hooks/use-toast"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

/**
 * @fileOverview ترسانة المقاتل السيادي v23.0-IMMORTAL
 * واجهة تخليق الأسلحة الرقمية، تدقيق الهويات، والحروب العصبية.
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
  
  // Account Auditor States
  const [targetBio, setTargetBio] = React.useState("")
  const [platform, setPlatform] = React.useState<"facebook" | "snapchat" | "tiktok" | "general">("facebook")
  const [auditorResult, setAuditorResult] = React.useState<any>(null)

  React.useEffect(() => {
    setMounted(true)
  }, [])

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
      setAuditorResult(null)
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
      setAuditorResult(null)
      toast({ title: "Warrior Tool Forged" })
    } catch (err) {
      toast({ variant: "destructive", title: "Forge Error" })
    } finally {
      setLoading(false)
    }
  }

  const handleAuditor = async () => {
    if (!targetBio) return
    setLoading(true)
    try {
      const data = await generateSmartWordlist({
        targetBio,
        platformType: platform,
        complexityLevel: 'Extreme'
      })
      setAuditorResult(data)
      setResult(null)
      setForgeResult(null)
      toast({ title: "Identity Key Patterns Extracted" })
    } catch (err) {
      toast({ variant: "destructive", title: "Audit Failed" })
    } finally {
      setLoading(false)
    }
  }

  if (!mounted) return null;

  return (
    <div className="flex min-h-screen bg-black">
      <SidebarNav />
      <main className="flex-1 lg:mr-64 p-4 md:p-8 lg:p-12 relative overflow-y-auto bg-[radial-gradient(circle_at_top_right,rgba(220,38,38,0.1),transparent)] min-h-screen">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 pointer-events-none" />
        
        <header className="mb-20 flex flex-col xl:flex-row justify-between items-start relative z-10 animate-in fade-in slide-in-from-top-4 duration-1000 gap-8">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <Badge className="bg-red-600/30 text-red-500 border-red-500/50 text-[11px] uppercase font-bold tracking-[0.6em] px-5 py-1.5 animate-pulse shadow-[0_0_20px_rgba(239,68,68,0.3)]">Warrior Arsenal v23.0-IMMORTAL</Badge>
              <span className="text-[11px] text-muted-foreground uppercase font-bold tracking-[0.4em] italic flex items-center gap-2">
                <Crown className="size-3 text-amber-500" /> Identity Hijack & Neural Warfare Grid
              </span>
            </div>
            <h2 className="text-4xl md:text-8xl font-headline font-bold text-white mb-4 tracking-tighter italic drop-shadow-[0_0_30px_rgba(239,68,68,0.5)] uppercase">The Forge</h2>
            <p className="text-xl md:text-3xl text-muted-foreground max-w-4xl font-medium italic leading-relaxed">
              "سيدي المعتصم بالله، قمنا بتطوير 'المفترس الهوياتي'. نحن الآن لا نخمن كلمات السر؛ نحن نستنزف عقل الهدف ونولد المفاتيح الأكثر احتمالاً عبر العصب المركزي."
            </p>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 relative z-10">
          <div className="lg:col-span-1 space-y-10">
            <Tabs defaultValue="auditor" className="w-full">
              <TabsList className="bg-black/60 border-2 border-red-500/20 w-full h-16 p-2 rounded-[2rem] shadow-2xl">
                <TabsTrigger value="auditor" className="flex-1 text-[11px] uppercase font-bold rounded-[1.5rem] data-[state=active]:bg-amber-600/20 data-[state=active]:text-amber-500 transition-all duration-500">Auditor</TabsTrigger>
                <TabsTrigger value="exploit" className="flex-1 text-[11px] uppercase font-bold rounded-[1.5rem] data-[state=active]:bg-red-600/20 data-[state=active]:text-red-500 transition-all duration-500">Exploit</TabsTrigger>
                <TabsTrigger value="forge" className="flex-1 text-[11px] uppercase font-bold rounded-[1.5rem] data-[state=active]:bg-red-600/20 data-[state=active]:text-red-500 transition-all duration-500">Forge</TabsTrigger>
              </TabsList>

              <TabsContent value="auditor" className="mt-10 animate-in zoom-in-95 duration-700">
                <Card className="glass-card border-amber-600/30 rounded-[3rem] shadow-2xl border-2 bg-amber-950/5">
                   <CardHeader className="p-10 border-b border-white/5">
                      <CardTitle className="text-white text-base flex items-center gap-4 uppercase tracking-[0.4em] italic font-bold">
                        <Key className="size-6 text-amber-500" /> Identity Auditor
                      </CardTitle>
                   </CardHeader>
                   <CardContent className="p-10 space-y-8">
                      <div className="space-y-4">
                        <Label className="text-[11px] uppercase font-bold text-amber-500/60 tracking-widest px-2 italic">Platform Target</Label>
                        <div className="grid grid-cols-2 gap-3">
                           {['facebook', 'snapchat', 'tiktok', 'general'].map(p => (
                             <Button 
                               key={p}
                               variant={platform === p ? "default" : "outline"}
                               className={cn(
                                 "text-[9px] h-10 uppercase font-bold rounded-xl transition-all",
                                 platform === p ? "bg-amber-600 text-black border-amber-400" : "border-white/10 hover:border-amber-600/40"
                               )}
                               onClick={() => setPlatform(p as any)}
                             >
                               {p}
                             </Button>
                           ))}
                        </div>
                      </div>
                      <div className="space-y-4">
                        <Label className="text-[11px] uppercase font-bold text-amber-500/60 tracking-widest px-2 italic">Target OSINT Data</Label>
                        <Textarea 
                          value={targetBio}
                          onChange={(e) => setTargetBio(e.target.value)}
                          placeholder="Paste extracted target bio, leaked info, or social posts..."
                          className="bg-black/80 border-2 border-amber-500/20 min-h-[150px] text-sm rounded-[2rem] italic p-8 shadow-inner text-white"
                        />
                      </div>
                      <Button 
                        className="w-full bg-amber-600 hover:bg-amber-700 text-black h-20 rounded-[2rem] font-bold uppercase tracking-[0.5em] text-[11px] shadow-[0_20px_50px_rgba(245,158,11,0.3)] border-2 border-amber-400/30 transition-all active:scale-95"
                        onClick={handleAuditor}
                        disabled={loading}
                      >
                        {loading ? <Loader2 className="size-7 animate-spin mr-4" /> : <Zap className="size-7 mr-4" />}
                        Siphon Intelligence
                      </Button>
                   </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="exploit" className="mt-10 animate-in zoom-in-95 duration-700">
                <Card className="glass-card border-red-600/30 rounded-[3rem] shadow-2xl border-2">
                  <CardHeader className="p-10 border-b border-white/5 bg-red-600/5">
                    <CardTitle className="text-white text-base flex items-center gap-4 uppercase tracking-[0.4em] italic font-bold">
                      <Skull className="size-6 text-red-600" /> Exploit Forge
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-10 space-y-8">
                     <div className="space-y-4">
                        <Label className="text-[11px] uppercase font-bold text-red-500/60 tracking-widest px-2 italic">Vulnerability Type</Label>
                        <Input 
                          value={vulnerability}
                          onChange={(e) => setVulnerability(e.target.value)}
                          className="bg-black/80 border-2 border-red-500/20 h-14 rounded-xl italic px-6 text-white"
                        />
                     </div>
                     <div className="space-y-4">
                        <Label className="text-[11px] uppercase font-bold text-red-500/60 tracking-widest px-2 italic">Target Environment</Label>
                        <Input 
                          value={targetDetails}
                          onChange={(e) => setTargetDetails(e.target.value)}
                          className="bg-black/80 border-2 border-red-500/20 h-14 rounded-xl italic px-6 text-white"
                        />
                     </div>
                     <Button 
                       className="w-full bg-red-600 hover:bg-red-700 text-white h-20 rounded-[2rem] font-bold uppercase tracking-[0.5em] text-[11px] shadow-2xl border-2 border-red-400/30"
                       onClick={handleGenerateExploit}
                       disabled={loading}
                     >
                       Synthesize Strike
                     </Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          <div className="lg:col-span-3">
             {auditorResult ? (
               <div className="space-y-12 animate-in fade-in zoom-in-95 duration-1000">
                  <Card className="glass-card border-amber-600/40 overflow-hidden shadow-[0_0_150px_rgba(245,158,11,0.15)] rounded-[4rem] border-2">
                     <CardHeader className="bg-amber-950/25 border-b border-amber-600/20 p-12 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="flex items-center gap-8">
                           <div className="size-24 rounded-[2.5rem] bg-amber-600 flex items-center justify-center border-2 border-amber-400 shadow-[0_0_50px_rgba(245,158,11,0.5)] animate-neural">
                             <Fingerprint className="size-12 text-black" />
                           </div>
                           <div>
                              <CardTitle className="text-4xl md:text-6xl text-white italic tracking-tighter uppercase font-bold">Identity Key Patterns</CardTitle>
                              <CardDescription className="text-amber-500 font-bold text-[12px] uppercase tracking-[0.8em] mt-3 italic">Arbiter AI Auditor // GhaZali Sync v23.0</CardDescription>
                           </div>
                        </div>
                        <Badge className="bg-amber-600/20 text-amber-500 border-2 border-amber-500/40 px-10 py-5 rounded-3xl font-code text-sm animate-pulse tracking-widest uppercase">PROBABILITY: {auditorResult.successProbability}</Badge>
                     </CardHeader>
                     <CardContent className="p-16">
                        <div className="grid grid-cols-1 xl:grid-cols-3 gap-16">
                           <div className="xl:col-span-1 space-y-12">
                              <div className="p-10 rounded-[3rem] bg-black border-2 border-amber-600/20 relative group overflow-hidden shadow-2xl">
                                 <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity"><BrainCircuit className="size-24 text-amber-500"/></div>
                                 <h4 className="text-[12px] font-bold text-amber-500 uppercase tracking-[1em] mb-8 border-b border-amber-600/10 pb-4 italic">Neural Insight</h4>
                                 <p className="text-lg text-gray-300 italic leading-loose font-medium">"{auditorResult.psychologicalInsight}"</p>
                              </div>

                              <div className="p-10 rounded-[3rem] bg-red-600/5 border-2 border-red-600/20">
                                 <h4 className="text-[12px] font-bold text-red-500 uppercase tracking-[1em] mb-6 italic flex items-center gap-4"><Sword className="size-4"/> Strike Mode</h4>
                                 <p className="text-xl text-white font-bold italic uppercase tracking-tighter">"{auditorResult.recommendedAttackMode}"</p>
                              </div>
                           </div>

                           <div className="xl:col-span-2 space-y-10">
                              <h4 className="text-[14px] font-bold text-muted-foreground uppercase tracking-[1em] px-8 italic border-b border-white/5 pb-4">Prioritized Keys (Smart Wordlist)</h4>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                 {auditorResult.likelyPasswords.map((pass: string, i: number) => (
                                   <div key={i} className="group p-8 rounded-[2rem] bg-white/5 border-2 border-white/5 hover:border-amber-600/50 transition-all duration-500 flex items-center justify-between shadow-xl cursor-copy" onClick={() => {
                                     navigator.clipboard.writeText(pass)
                                     toast({ title: "Key Copied to Clipboard" })
                                   }}>
                                      <div className="flex items-center gap-6">
                                         <div className="size-10 rounded-xl bg-amber-600/20 flex items-center justify-center text-amber-500 font-bold border border-amber-500/30 group-hover:scale-110 transition-transform">{i + 1}</div>
                                         <span className="text-2xl font-code text-white/90 group-hover:text-amber-500 transition-colors">{pass}</span>
                                      </div>
                                      <Copy className="size-5 text-muted-foreground opacity-30 group-hover:opacity-100 transition-opacity" />
                                   </div>
                                 ))}
                              </div>
                           </div>
                        </div>

                        <div className="mt-20 flex gap-8 pt-16 border-t-2 border-white/5">
                           <Button className="bg-amber-600 hover:bg-amber-700 text-black h-24 rounded-[3rem] flex-1 font-bold uppercase tracking-[0.8em] text-[13px] shadow-[0_20px_80px_rgba(245,158,11,0.4)] border-2 border-amber-400/50 group active:scale-95 transition-all">
                              <Activity className="size-8 mr-6 group-hover:animate-pulse transition-transform" /> Start Automated Audit
                           </Button>
                           <Button variant="outline" className="border-white/10 bg-white/5 h-24 rounded-[3rem] px-16 hover:bg-amber-600/10 hover:border-amber-600/40 transition-all duration-700 font-bold uppercase tracking-[0.8em] text-[13px] group border-2 shadow-2xl">
                              <Download className="size-8 mr-6 group-hover:-translate-y-2 transition-transform" /> Export Wordlist
                           </Button>
                        </div>
                     </CardContent>
                  </Card>
               </div>
             ) : result || forgeResult ? (
               <Card className="glass-card border-red-600/40 overflow-hidden shadow-[0_0_100px_rgba(239,68,68,0.2)] rounded-[4rem] border-2">
                 <CardHeader className="bg-red-950/25 border-b border-red-600/20 p-12">
                   <div className="flex items-center gap-8">
                     <div className="size-24 rounded-[2.5rem] bg-red-600 flex items-center justify-center border-2 border-red-400">
                       <Wrench className="size-12 text-white" />
                     </div>
                     <div>
                       <CardTitle className="text-5xl text-white italic tracking-tighter uppercase font-bold">
                         {forgeResult ? forgeResult.toolName : `Exploit Output`}
                       </CardTitle>
                       <CardDescription className="text-red-500 font-bold text-[12px] uppercase tracking-[0.8em] mt-3 italic">Warrior Alpha Strike v23.0</CardDescription>
                     </div>
                   </div>
                 </CardHeader>
                 <CardContent className="p-0">
                    <pre className="p-16 font-code text-xl text-emerald-400 bg-black/95 min-h-[600px] overflow-auto">
                      <code>{forgeResult ? forgeResult.generatedCode : result.exploitCode}</code>
                    </pre>
                 </CardContent>
               </Card>
             ) : (
               <div className="h-full min-h-[850px] border-4 border-dashed border-red-600/20 rounded-[5rem] flex flex-col items-center justify-center text-center p-24 bg-black/40 group relative overflow-hidden shadow-2xl transition-all hover:bg-red-950/5">
                 <div className="size-80 bg-red-600/5 rounded-full flex items-center justify-center mb-20 border-2 border-red-600/10 group-hover:scale-110 transition-transform duration-1000 relative">
                   <Target className={cn("size-40 text-red-600/20 transition-all duration-1000", mounted && loading && "text-red-600 animate-pulse")} />
                   <div className="absolute inset-0 bg-red-600/5 rounded-full blur-[140px] animate-pulse" />
                 </div>
                 
                 <h3 className="text-8xl font-headline font-bold text-white mb-10 tracking-tighter italic drop-shadow-[0_0_40px_rgba(239,68,68,0.6)] uppercase">Predator Audit</h3>
                 <p className="text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-20 text-3xl font-medium italic">
                   "O Master <span className="text-red-600 font-bold uppercase tracking-widest shadow-[0_0_10px_red]">Al-Ghazali</span>, provide the target's persona. I will disassemble their identity and forge prioritized keys that make traditional brute-force tools obsolete."
                 </p>
                 <div className="flex gap-12">
                   <Badge variant="outline" className="bg-white/5 py-8 px-16 text-[15px] tracking-[1em] uppercase border-red-600/40 rounded-full shadow-2xl backdrop-blur-3xl group-hover:border-red-600/80 transition-all duration-1000">AI-Smart Key Synthesis</Badge>
                   <Badge variant="outline" className="bg-white/5 py-8 px-16 text-[15px] tracking-[1em] uppercase border-red-600/40 rounded-full shadow-2xl backdrop-blur-3xl group-hover:border-red-600/80 transition-all duration-1000">v23.0 IMMORTAL Suite</Badge>
                 </div>
               </div>
             )}
          </div>
        </div>
      </main>
    </div>
  )
}
