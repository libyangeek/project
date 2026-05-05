"use client"

import * as React from "react"
import { SidebarNav } from "@/components/platform/sidebar-nav"
import { 
  Zap,
  Loader2,
  Skull,
  Flame,
  Fingerprint,
  Sword,
  Shield,
  Brain,
  Terminal,
  Target,
  FileCode,
  Share2,
  Cpu,
  ShieldAlert,
  Ghost,
  Save,
  Rocket,
  Search,
  Code2,
  ChevronRight,
  ShieldCheck
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { aiEnhancedExploitGeneration } from "@/ai/flows/ai-enhanced-exploit-generation"
import { generateSmartWordlist } from "@/ai/flows/ai-smart-wordlist-flow"
import { getAttackPlan } from "@/ai/flows/apex-brain-flow"
import { toast } from "@/hooks/use-toast"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"

export default function RedTeamPage() {
  const [mounted, setMounted] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const [target, setTarget] = React.useState("")
  const [description, setDescription] = React.useState("")
  const [output, setOutput] = React.useState<any>(null)
  const [activeMode, setActiveMode] = React.useState("exploit")

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const handleAction = async () => {
    if (!target && activeMode !== "wordlist") {
      toast({ variant: "destructive", title: "Missing Target", description: "Please enter a target." });
      return;
    }
    setLoading(true);
    try {
      let data;
      if (activeMode === "exploit") {
        data = await aiEnhancedExploitGeneration({
          vulnerabilityDescription: description,
          targetSystemDetails: target
        });
      } else if (activeMode === "apex") {
        data = await getAttackPlan({ target });
      } else if (activeMode === "wordlist") {
        data = await generateSmartWordlist({
          targetBio: description,
          complexityLevel: 'Extreme'
        });
      }
      setOutput(data);
      toast({ title: "Operation Complete", description: "Weaponry synthesized in the forge." });
    } catch (err) {
      toast({ variant: "destructive", title: "Forge Failure", description: "Failed to materialize the payload." });
    } finally {
      setLoading(false);
    }
  }

  const launchStrike = async () => {
    if (!target) return;
    toast({ title: "Strike Initiated", description: `Launching automated offensive against ${target}...` });
    
    try {
        const response = await fetch('/api/execute', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                command: `strike ${target}`, 
                target, 
                type: 'autonomous_strike' 
            })
        });
        const data = await response.json();
        toast({ title: "Strike Report Received", description: "Check terminal for live output." });
    } catch (e) {
        toast({ variant: "destructive", title: "Strike Link Failure" });
    }
  }

  if (!mounted) return null;

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/30 font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-80 p-6 md:p-12 relative bg-black overflow-y-auto min-h-screen scrollbar-hide flex flex-col z-10">
        <div className="absolute inset-0 pointer-events-none opacity-10 bg-[url('https://www.transparenttextures.com/patterns/pixel-weave.png')]"></div>
        
        <header className="mb-16 relative z-10 animate-in fade-in slide-in-from-top-4 duration-1000">
          <div className="flex items-center gap-4 mb-4">
            <Badge className="bg-red-600 text-white border-none rounded-full px-6 py-1.5 text-xs font-bold tracking-[0.4em] shadow-lg italic">CYBER WEAPONRY FORGE</Badge>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-red-500">
              <Flame className="size-4 animate-pulse" /> ENGINE AT 5000% CAPACITY
            </div>
          </div>
          <h1 className="text-6xl md:text-8xl font-headline font-bold text-white tracking-tighter italic uppercase">Polymorph <span className="text-red-600">Lab</span></h1>
          <p className="text-xl md:text-2xl text-muted-foreground mt-4 italic max-w-4xl leading-relaxed">
            "مختبر التخليق السيادي: هنا تُصنع الأسلحة الرقمية الأكثر فتكاً. تجاوز الـ EDR، توليد الثغرات، وتدمير الدفاعات بذكاء متفرد."
          </p>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 flex-1">
          <div className="xl:col-span-1 space-y-8">
            <Card className="kali-card border-red-600/40 bg-black/60 p-8 rounded-[3rem] border-2 shadow-2xl">
              <Tabs defaultValue="exploit" onValueChange={setActiveMode} className="w-full">
                <TabsList className="grid grid-cols-3 gap-4 bg-white/5 p-2 rounded-[2rem] mb-8 border-2 border-white/5">
                  <TabsTrigger value="exploit" className="text-[11px] py-4 uppercase font-bold rounded-2xl data-[state=active]:bg-red-600 data-[state=active]:text-white transition-all">EXPLOIT</TabsTrigger>
                  <TabsTrigger value="apex" className="text-[11px] py-4 uppercase font-bold rounded-2xl data-[state=active]:bg-red-600 data-[state=active]:text-white transition-all">APEX</TabsTrigger>
                  <TabsTrigger value="wordlist" className="text-[11px] py-4 uppercase font-bold rounded-2xl data-[state=active]:bg-red-600 data-[state=active]:text-white transition-all">WORDLIST</TabsTrigger>
                </TabsList>
                
                <div className="space-y-8">
                  <div className="space-y-4">
                    <Label className="text-[11px] uppercase font-bold text-red-500/80 ml-6 tracking-widest italic">Target Coordinate</Label>
                    <div className="relative">
                        <Target className="absolute left-6 top-1/2 -translate-y-1/2 size-6 text-red-600/50" />
                        <Input 
                        value={target}
                        onChange={(e) => setTarget(e.target.value)}
                        placeholder="IP / Domain / Network"
                        className="bg-black border-2 border-white/10 rounded-[2.5rem] h-16 md:h-20 text-xl italic pl-16 pr-8 focus:border-red-600 shadow-inner"
                        />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <Label className="text-[11px] uppercase font-bold text-red-500/80 ml-6 tracking-widest italic">Mission Parameters</Label>
                    <Textarea 
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder={activeMode === 'wordlist' ? "Provide target bio data..." : "Define vulnerability or attack goal..."}
                      className="bg-black border-2 border-white/10 rounded-[2.5rem] min-h-[200px] text-lg italic p-8 focus:border-red-600 shadow-inner"
                    />
                  </div>
                  <Button 
                    onClick={handleAction} 
                    disabled={loading}
                    className="w-full h-24 bg-red-600 hover:bg-red-700 text-white font-black uppercase tracking-[0.8em] rounded-[3rem] shadow-[0_40px_100px_rgba(220,38,38,0.5)] border-4 border-red-400/40 active:scale-95 transition-all"
                  >
                    {loading ? <Loader2 className="size-10 animate-spin" /> : <Flame className="size-10 mr-4" />}
                    Ignite Forge
                  </Button>
                </div>
              </Tabs>
            </Card>

            <div className="grid grid-cols-1 gap-6">
                <Card className="kali-card border-white/10 bg-black/60 p-6 rounded-[2.5rem] border-2 shadow-2xl">
                    <h4 className="text-[10px] font-bold text-red-500 uppercase tracking-[1em] mb-6 italic">Active Payload Engine</h4>
                    <div className="flex items-center justify-between px-4">
                        <span className="text-3xl font-bold text-white uppercase italic tracking-tighter">Polymorph-X</span>
                        <Badge className="bg-emerald-600/30 text-emerald-500 border border-emerald-500/40 animate-pulse">OPTIMIZED</Badge>
                    </div>
                </Card>
                <Card className="kali-card border-white/10 bg-black/60 p-6 rounded-[2.5rem] border-2 shadow-2xl">
                    <h4 className="text-[10px] font-bold text-blue-500 uppercase tracking-[1em] mb-6 italic">Threat Level</h4>
                    <div className="flex items-center justify-between px-4">
                        <span className="text-3xl font-bold text-white uppercase italic tracking-tighter">Class 5</span>
                        <div className="flex gap-2">
                            <div className="size-3 rounded-full bg-red-600 shadow-[0_0_10px_red]" />
                            <div className="size-3 rounded-full bg-red-600 shadow-[0_0_10px_red]" />
                            <div className="size-3 rounded-full bg-red-600 shadow-[0_0_10px_red]" />
                        </div>
                    </div>
                </Card>
            </div>
          </div>

          <div className="xl:col-span-2">
            <Card className="kali-card border-white/10 bg-black/90 rounded-[4rem] border-4 shadow-[0_0_200px_rgba(0,0,0,0.8)] h-full flex flex-col">
              <CardHeader className="p-10 border-b-2 border-white/5 flex flex-row justify-between items-center bg-white/5">
                <CardTitle className="text-4xl font-bold uppercase italic tracking-tighter text-white flex items-center gap-6">
                  <Terminal className="size-10 text-red-500" /> Output Matrix
                </CardTitle>
                <div className="flex gap-4">
                   <div className="size-4 rounded-full bg-red-600 shadow-[0_0_15px_red] animate-pulse" />
                   <div className="size-4 rounded-full bg-yellow-500 shadow-[0_0_15px_yellow]" />
                   <div className="size-4 rounded-full bg-green-500 shadow-[0_0_15px_green]" />
                </div>
              </CardHeader>
              <CardContent className="p-0 flex-1 relative">
                <ScrollArea className="h-[750px] p-12">
                   {output ? (
                     <div className="space-y-12 font-mono text-xl animate-in fade-in slide-in-from-bottom-10 duration-700">
                        <div className="flex items-center justify-between border-b-2 border-white/10 pb-6">
                            <span className="text-emerald-500 font-black uppercase tracking-[0.5em] italic">>>> ANALYSIS COMPLETE</span>
                            <span className="text-[12px] font-bold text-muted-foreground uppercase">{new Date().toLocaleTimeString()}</span>
                        </div>

                        {activeMode === 'exploit' && (
                            <div className="space-y-10">
                                <div className="grid grid-cols-2 gap-8">
                                    <div className="p-6 rounded-3xl bg-white/5 border border-white/10">
                                        <div className="text-[10px] font-bold text-red-500 uppercase tracking-widest mb-2">Language</div>
                                        <div className="text-2xl font-bold text-white">{output.exploitLanguage}</div>
                                    </div>
                                    <div className="p-6 rounded-3xl bg-white/5 border border-white/10">
                                        <div className="text-[10px] font-bold text-red-500 uppercase tracking-widest mb-2">Evasion</div>
                                        <div className="text-2xl font-bold text-white">{output.stealthFeatures?.[0] || 'Unknown'}</div>
                                    </div>
                                </div>
                                
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4 text-emerald-500">
                                        <FileCode className="size-6" />
                                        <span className="text-sm font-bold uppercase tracking-widest italic">Generated Payload</span>
                                    </div>
                                    <div className="p-10 bg-black/80 rounded-[3rem] border-2 border-emerald-500/20 text-base text-emerald-400 overflow-x-auto whitespace-pre font-code shadow-inner">
                                        {output.exploitCode}
                                    </div>
                                </div>

                                <div className="p-10 rounded-[3rem] bg-white/5 border-2 border-white/10 space-y-6">
                                    <h5 className="text-[12px] font-bold text-blue-500 uppercase tracking-[1em] italic">Deployment Instructions</h5>
                                    <p className="text-lg text-gray-300 italic leading-relaxed">{output.usageInstructions}</p>
                                </div>
                            </div>
                        )}

                        {activeMode === 'apex' && (
                            <div className="space-y-10">
                                <div className="p-10 rounded-[3rem] bg-blue-600/10 border-2 border-blue-600/30 text-2xl md:text-4xl text-gray-200 italic font-medium leading-snug">
                                    "{output.summary}"
                                </div>
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4 text-blue-500">
                                        <GitGraph className="size-6" />
                                        <span className="text-sm font-bold uppercase tracking-widest italic">Strategic Graph</span>
                                    </div>
                                    <div className="p-10 bg-black/80 rounded-[3rem] border-2 border-blue-500/20 text-base text-blue-400 overflow-x-auto whitespace-pre font-code">
                                        {JSON.stringify(output.plan, null, 2)}
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeMode === 'wordlist' && (
                            <div className="space-y-10">
                                <div className="grid grid-cols-2 gap-8">
                                    <div className="p-6 rounded-3xl bg-white/5 border border-white/10">
                                        <div className="text-[10px] font-bold text-amber-500 uppercase tracking-widest mb-2">Probability</div>
                                        <div className="text-2xl font-bold text-white">{output.successProbability || '89%'}</div>
                                    </div>
                                    <div className="p-6 rounded-3xl bg-white/5 border border-white/10">
                                        <div className="text-[10px] font-bold text-amber-500 uppercase tracking-widest mb-2">Mode</div>
                                        <div className="text-2xl font-bold text-white">{output.recommendedAttackMode || 'Brute Force'}</div>
                                    </div>
                                </div>
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4 text-amber-500">
                                        <ShieldCheck className="size-6" />
                                        <span className="text-sm font-bold uppercase tracking-widest italic">High-Confidence Passwords</span>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {output.likelyPasswords?.map((pw: string, idx: number) => (
                                            <div key={idx} className="p-6 bg-white/5 rounded-2xl border-2 border-white/10 text-xl text-white font-bold tracking-widest italic hover:border-amber-500 transition-all cursor-copy" onClick={() => navigator.clipboard.writeText(pw)}>
                                                {pw}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="p-10 rounded-[3rem] bg-white/5 border-2 border-white/10">
                                    <h5 className="text-[12px] font-bold text-amber-500 uppercase tracking-[1em] italic mb-6">Psychological Insight</h5>
                                    <p className="text-lg text-gray-400 italic leading-relaxed">{output.psychologicalInsight}</p>
                                </div>
                            </div>
                        )}

                        <div className="flex justify-end gap-8 mt-12">
                            <Button variant="outline" className="h-16 rounded-full border-2 border-white/10 bg-white/5 hover:bg-white/10 text-[11px] font-bold uppercase tracking-widest px-10">
                                <Save className="size-5 mr-3" /> Save to Vault
                            </Button>
                            <Button onClick={launchStrike} className="h-16 rounded-full bg-red-600 hover:bg-red-700 text-white font-bold uppercase tracking-[1em] px-14 shadow-4xl animate-pulse">
                                <Rocket className="size-6 mr-4" /> LAUNCH STRIKE
                            </Button>
                        </div>
                     </div>
                   ) : (
                     <div className="h-full flex flex-col items-center justify-center text-center opacity-10 py-48">
                        <Skull className="size-48 mb-8 text-red-500 animate-pulse" />
                        <p className="text-4xl font-black uppercase tracking-[2em] text-white">READY</p>
                        <p className="text-lg mt-4 text-gray-400">Waiting for Alpha Command Input...</p>
                     </div>
                   )}
                </ScrollArea>
                <div className="absolute bottom-8 right-12 opacity-30 flex items-center gap-4">
                  <Cpu className="size-5 text-red-500" />
                  <span className="text-[12px] font-black uppercase tracking-[1em] text-white">AL-MUIZZ_CORE_v42</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}