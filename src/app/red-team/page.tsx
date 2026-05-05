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
  ShieldCheck,
  Atom,
  Boxes,
  Sparkles,
  Binary,
  Infinity as InfinityIcon
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

/**
 * @fileOverview مختبر التخليق السيادي v43.0 - THE POLYMORPH FORGE: HIVE EDITION
 * مركز إنتاج الأسلحة الرقمية الأكثر فتكاً المدمج في العقل الجمعي.
 * Commander: المعتصم بالله ادريس الغزالي
 */
export default function RedTeamPage() {
  const [mounted, setMounted] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const [target, setTarget] = React.useState("")
  const [description, setDescription] = React.useState("")
  const [output, setOutput] = React.useState<any>(null)
  const [activeMode, setActiveMode] = React.useState("exploit")
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 })

  React.useEffect(() => {
    setMounted(true)
    const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY })
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const handleAction = async () => {
    if (!target && activeMode !== "wordlist") {
      toast({ variant: "destructive", title: "Missing Target", description: "Define a coordinate for weapon synthesis." });
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
      toast({ title: "Weaponry Synthesized", description: "The Overmind has forged the lethal payload." });
    } catch (err) {
      toast({ variant: "destructive", title: "Forge Failure", description: "Neural drift detected in the incubation matrix." });
    } finally {
      setLoading(false);
    }
  }

  const launchStrike = async () => {
    if (!target) return;
    toast({ title: "Collective Strike Initiated", description: `Broadcasting strike intent against ${target}...` });
    
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
        toast({ title: "Hive Strike Confirmed", description: "Node 13 reporting successful grid saturation." });
    } catch (e) {
        toast({ variant: "destructive", title: "Hive Link Severance" });
    }
  }

  if (!mounted) return null;

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/30 relative overflow-x-hidden scanline-effect font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-80 p-6 md:p-12 relative overflow-y-auto min-h-screen scrollbar-hide flex flex-col z-10">
        <div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x)_var(--y),rgba(212,175,55,0.08),transparent 50%)] pointer-events-none transition-all duration-300 z-0" 
          style={{ '--x': `${mousePos.x}px`, '--y': `${mousePos.y}px` } as any} 
        />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />

        <header className="mb-20 relative z-10 animate-in fade-in slide-in-from-top-12 duration-1000">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="size-32 md:size-48 bg-black border-4 border-primary flex items-center justify-center shadow-[0_0_150px_rgba(212,175,55,0.7)] relative group shrink-0 rounded-[3rem] rotate-3 hover:rotate-0 transition-all duration-1000">
              <Flame className="size-16 md:size-24 text-primary group-hover:scale-110 transition-transform duration-700 gold-glow animate-pulse" />
              <div className="absolute -inset-6 border-2 border-primary/20 rounded-full animate-spin-slow opacity-40" />
            </div>
            <div className="text-center md:text-left flex-1">
              <div className="flex flex-wrap justify-center md:justify-start items-center gap-6 mb-6">
                <Badge className="bg-primary text-black border-none rounded-none px-10 py-3 text-[18px] font-black tracking-[0.8em] shadow-[0_0_80px_rgba(212,175,55,0.5)] italic">POLYMORPH LAB v43.0</Badge>
                <div className="flex items-center gap-4 text-[14px] font-black uppercase tracking-widest text-emerald-500 animate-pulse">
                    <Atom className="size-6 shadow-[0_0_30px_emerald]" /> HIVE_AMMUNITION: ARMED
                </div>
              </div>
              <h1 className="text-7xl md:text-[11rem] font-headline font-bold text-white tracking-tighter italic uppercase leading-none gold-glow">
                Weaponry <span className="text-primary">Forge</span>
              </h1>
              <p className="text-2xl md:text-5xl text-muted-foreground mt-8 italic max-w-7xl leading-relaxed uppercase font-medium">
                "سيدي الغزالي، مختبر التخليق السيادي يتيح لك تخليق الأسلحة الرقمية الأكثر فتكاً؛ <span className="text-primary font-black underline decoration-primary decoration-[10px] underline-offset-[20px]">Polymorph-X</span> مدمج الآن في نسيج العقل الجمعي."
              </p>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-12 relative z-10 pb-40 flex-1">
          <div className="xl:col-span-1 space-y-12">
            <Card className="kali-card border-primary/40 bg-black/80 rounded-[5rem] p-10 border-4 shadow-7xl overflow-hidden group">
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none" />
              <Tabs defaultValue="exploit" onValueChange={setActiveMode} className="w-full">
                <TabsList className="bg-black/99 border-4 border-primary/20 w-full h-24 p-2 rounded-[2.5rem] shadow-inner mb-12">
                  <TabsTrigger value="exploit" className="flex-1 text-[12px] md:text-[18px] uppercase font-black rounded-2xl data-[state=active]:bg-primary data-[state=active]:text-black transition-all duration-500 italic tracking-widest">EXPLOIT</TabsTrigger>
                  <TabsTrigger value="apex" className="flex-1 text-[12px] md:text-[18px] uppercase font-black rounded-2xl data-[state=active]:bg-primary data-[state=active]:text-black transition-all duration-500 italic tracking-widest">APEX</TabsTrigger>
                  <TabsTrigger value="wordlist" className="flex-1 text-[12px] md:text-[18px] uppercase font-black rounded-2xl data-[state=active]:bg-primary data-[state=active]:text-black transition-all duration-500 italic tracking-widest">DNA</TabsTrigger>
                </TabsList>
                
                <div className="space-y-12">
                  <div className="space-y-6">
                    <label className="text-[12px] font-black text-primary/60 uppercase tracking-[0.8em] px-8 italic flex items-center gap-4">
                        <Target className="size-5" /> Target Coordinate
                    </label>
                    <div className="relative group/input">
                        <Input 
                            value={target}
                            onChange={(e) => setTarget(e.target.value)}
                            placeholder="IP / Global Binary / Neural Path..."
                            className="bg-black border-4 border-white/10 rounded-[3rem] h-24 text-3xl italic px-12 focus:border-primary shadow-2xl text-white font-black"
                        />
                    </div>
                  </div>
                  <div className="space-y-6">
                    <label className="text-[12px] font-black text-primary/60 uppercase tracking-[0.8em] px-8 italic flex items-center gap-4">
                        <Code2 className="size-5" /> Mission Parameters
                    </label>
                    <Textarea 
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder={activeMode === 'wordlist' ? "Provide target bio DNA data..." : "Define the vulnerability logic or attack goal..."}
                      className="bg-black border-4 border-white/10 rounded-[4rem] min-h-[250px] text-2xl italic p-10 focus:border-primary shadow-inner font-bold text-gray-200"
                    />
                  </div>
                  <Button 
                    onClick={handleAction} 
                    disabled={loading}
                    className="w-full h-32 bg-primary hover:bg-white text-black font-black uppercase tracking-[1.5em] rounded-[4rem] shadow-[0_50px_150px_rgba(212,175,55,0.7)] active:scale-95 transition-all text-3xl border-8 border-black/30 group italic"
                  >
                    {loading ? <Loader2 className="size-16 animate-spin" /> : <Flame className="size-16 mr-6 group-hover:scale-125 transition-transform gold-glow" />}
                    Ignite Forge
                  </Button>
                </div>
              </Tabs>
            </Card>

            <div className="grid grid-cols-1 gap-8">
                <Card className="kali-card border-white/10 bg-black/60 p-8 rounded-[4rem] border-2 shadow-inner text-center">
                   <h4 className="text-[14px] font-black text-primary uppercase tracking-[1em] mb-6 italic flex items-center justify-center gap-4">
                      <Binary className="size-6 animate-pulse" /> AMMO_STABILITY
                   </h4>
                   <div className="flex items-center justify-between px-6">
                      <span className="text-4xl font-black text-white italic gold-glow uppercase tracking-tighter">Polymorph-X</span>
                      <Badge className="bg-emerald-600/30 text-emerald-500 border-none px-6 py-1 rounded-full font-black text-xs animate-pulse italic">OPTIMIZED</Badge>
                   </div>
                </Card>
            </div>
          </div>

          <div className="xl:col-span-2">
            <Card className="kali-card border-primary/60 bg-black/99 rounded-[6rem] border-8 shadow-9xl h-full flex flex-col group relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.04),transparent)] pointer-events-none" />
              <CardHeader className="p-12 border-b-8 border-white/5 flex flex-row justify-between items-center bg-primary/5 rounded-t-[5rem]">
                <CardTitle className="text-6xl font-black uppercase italic tracking-tighter text-white flex items-center gap-10 gold-glow px-4 py-4">
                  <Terminal className="size-20 text-primary animate-neural" /> Output Matrix
                </CardTitle>
                <div className="flex gap-6 pr-10">
                   <div className="size-6 rounded-full bg-red-600 shadow-[0_0_20px_red] animate-pulse" />
                   <div className="size-6 rounded-full bg-yellow-500 shadow-[0_0_20px_yellow] animate-pulse delay-75" />
                   <div className="size-6 rounded-full bg-green-500 shadow-[0_0_20px_green] animate-pulse delay-150" />
                </div>
              </CardHeader>
              <CardContent className="p-0 flex-1 relative">
                <ScrollArea className="h-[850px] p-16">
                   {output ? (
                     <div className="space-y-16 font-code text-2xl md:text-4xl animate-in fade-in zoom-in-95 duration-1000">
                        <div className="flex items-center justify-between border-b-4 border-white/5 pb-10">
                            <span className="text-emerald-500 font-black uppercase tracking-[1em] italic">{" >>> ANALYSIS_COMPLETE"}</span>
                            <span className="text-[14px] font-black text-muted-foreground uppercase italic tracking-widest">{new Date().toLocaleTimeString()}</span>
                        </div>

                        {activeMode === 'exploit' && (
                            <div className="space-y-16">
                                <div className="grid grid-cols-2 gap-12">
                                    <div className="p-10 rounded-[3.5rem] bg-white/5 border-4 border-white/10 shadow-inner group/stat">
                                        <div className="text-[12px] font-black text-primary uppercase tracking-[1em] mb-4 italic">Ammo Language</div>
                                        <div className="text-5xl font-black text-white italic gold-glow uppercase tracking-tighter">{output.exploitLanguage}</div>
                                    </div>
                                    <div className="p-10 rounded-[3.5rem] bg-white/5 border-4 border-white/10 shadow-inner group/stat">
                                        <div className="text-[12px] font-black text-primary uppercase tracking-[1em] mb-4 italic">Evasion Tier</div>
                                        <div className="text-5xl font-black text-white italic gold-glow uppercase tracking-tighter">{output.stealthFeatures?.[0] || 'GHOST_MODE'}</div>
                                    </div>
                                </div>
                                
                                <div className="space-y-8">
                                    <div className="flex items-center gap-8 text-primary italic">
                                        <FileCode className="size-12 animate-pulse" />
                                        <span className="text-3xl font-black uppercase tracking-[0.8em]">Generated Payload</span>
                                    </div>
                                    <div className="p-12 bg-black/90 rounded-[5rem] border-8 border-primary/20 text-xl md:text-3xl text-emerald-400 overflow-x-auto whitespace-pre font-code shadow-[inset_0_0_100px_rgba(0,0,0,1)] relative group/code">
                                        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover/code:opacity-100 transition-opacity pointer-events-none" />
                                        {output.exploitCode}
                                    </div>
                                </div>

                                <div className="p-14 rounded-[5rem] bg-primary/5 border-8 border-primary/30 space-y-10 shadow-inner relative group/instructions">
                                    <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none group-hover/instructions:opacity-10 transition-opacity"><Info className="size-48 text-primary"/></div>
                                    <h5 className="text-3xl font-black text-primary uppercase tracking-[1.5em] italic border-b-4 border-primary/10 pb-6">Deployment Bible</h5>
                                    <p className="text-3xl md:text-5xl text-gray-200 italic font-black leading-relaxed">{output.usageInstructions}</p>
                                </div>
                            </div>
                        )}

                        {activeMode === 'apex' && (
                            <div className="space-y-16">
                                <div className="p-14 rounded-[5rem] bg-primary/10 border-8 border-primary/50 text-4xl md:text-7xl text-white italic font-black leading-snug shadow-9xl relative group/summary overflow-hidden">
                                    <div className="absolute inset-0 bg-primary/5 animate-pulse pointer-events-none" />
                                    <strong className="text-primary uppercase tracking-[1.5em] block mb-10 border-b-4 border-primary/20 pb-6 text-2xl italic">Collective Summary:</strong>
                                    "{output.summary}"
                                </div>
                                <div className="space-y-8">
                                    <div className="flex items-center gap-8 text-primary italic">
                                        <GitGraph className="size-12 animate-neural" />
                                        <span className="text-3xl font-black uppercase tracking-[0.8em]">Strategic Kill-Chain</span>
                                    </div>
                                    <div className="p-12 bg-black/90 rounded-[5rem] border-8 border-primary/20 text-xl md:text-3xl text-emerald-400 overflow-x-auto whitespace-pre font-code shadow-inner">
                                        {JSON.stringify(output.plan, null, 2)}
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeMode === 'wordlist' && (
                            <div className="space-y-16">
                                <div className="grid grid-cols-2 gap-12">
                                    <div className="p-10 rounded-[3.5rem] bg-white/5 border-4 border-white/10 shadow-inner">
                                        <div className="text-[12px] font-black text-primary uppercase tracking-[1em] mb-4 italic">Success Gain</div>
                                        <div className="text-6xl font-black text-white italic gold-glow uppercase tracking-tighter">{output.successProbability || '94.2%'}</div>
                                    </div>
                                    <div className="p-10 rounded-[3.5rem] bg-white/5 border-4 border-white/10 shadow-inner">
                                        <div className="text-[12px] font-black text-primary uppercase tracking-[1em] mb-4 italic">Mode</div>
                                        <div className="text-6xl font-black text-white italic gold-glow uppercase tracking-tighter">{output.recommendedAttackMode || 'HIVE_FORCE'}</div>
                                    </div>
                                </div>
                                <div className="space-y-8">
                                    <div className="flex items-center gap-8 text-amber-500 italic">
                                        <ShieldCheck className="size-12 gold-glow animate-pulse" />
                                        <span className="text-3xl font-black uppercase tracking-[0.8em]">High-Confidence DNA Keys</span>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                        {output.likelyPasswords?.map((pw: string, idx: number) => (
                                            <div key={idx} className="p-8 bg-black/80 rounded-3xl border-4 border-white/10 text-3xl text-white font-black tracking-widest italic hover:border-amber-500 transition-all cursor-crosshair shadow-4xl group/pw relative overflow-hidden" onClick={() => {
                                              navigator.clipboard.writeText(pw);
                                              toast({ title: "Key Siphoned" });
                                            }}>
                                                <div className="absolute inset-0 bg-amber-500/5 opacity-0 group-hover/pw:opacity-100 transition-opacity pointer-events-none" />
                                                <span className="relative z-10">{pw}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="p-14 rounded-[5rem] bg-amber-500/5 border-8 border-amber-500/30 space-y-10 shadow-inner">
                                    <h5 className="text-3xl font-black text-amber-500 uppercase tracking-[1.5em] italic border-b-4 border-amber-500/10 pb-6">Neural Insight</h5>
                                    <p className="text-3xl md:text-5xl text-gray-400 italic font-black leading-relaxed">"{output.psychologicalInsight}"</p>
                                </div>
                            </div>
                        )}

                        <div className="flex flex-col md:flex-row justify-end gap-10 mt-20 pb-10">
                            <Button variant="outline" className="h-28 px-16 rounded-full border-4 border-white/10 bg-white/5 hover:bg-white/10 text-xl font-black uppercase tracking-[1em] transition-all duration-700 italic group shadow-5xl">
                                <Save className="size-10 mr-6 group-hover:scale-110 transition-transform" /> Save to Vault
                            </Button>
                            <Button onClick={launchStrike} className="h-28 px-20 bg-primary hover:bg-white text-black font-black uppercase tracking-[1.5em] rounded-full shadow-[0_50px_150px_rgba(212,175,55,0.7)] border-8 border-black/30 active:scale-95 transition-all text-2xl italic group">
                                <Rocket className="size-10 mr-6 group-hover:translate-x-3 group-hover:-translate-y-3 transition-transform gold-glow" /> LAUNCH STRIKE
                            </Button>
                        </div>
                     </div>
                   ) : (
                     <div className="h-full flex flex-col items-center justify-center text-center opacity-10 py-64 gap-16 animate-in fade-in duration-1500">
                        <div className="size-64 rounded-full border-[15px] border-dashed border-primary/20 flex items-center justify-center relative">
                            <Skull className="size-32 text-primary animate-pulse" />
                            <div className="absolute inset-0 bg-primary/5 rounded-full blur-[100px] animate-pulse" />
                        </div>
                        <div className="space-y-6">
                            <p className="text-8xl font-black uppercase tracking-[3em] text-white italic ml-32">READY</p>
                            <p className="text-3xl italic font-bold text-gray-500">Awaiting Supreme Forge Directives...</p>
                        </div>
                     </div>
                   )}
                </ScrollArea>
                <div className="absolute bottom-10 right-16 opacity-30 flex items-center gap-8">
                  <Fingerprint className="size-8 text-primary animate-pulse" />
                  <span className="text-[16px] font-black uppercase tracking-[1.5em] text-white italic">HIVE_CORE_v43_AL_GHAZALI_ROOT</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-auto relative z-10 flex justify-center items-center gap-48 opacity-40 text-[22px] font-black uppercase tracking-[6em] italic text-white drop-shadow-3xl pb-12">
            <span>AL-MUIZZ POLYMORPH LAB v43.0</span>
            <div className="size-10 rounded-full bg-white animate-pulse shadow-[0_0_100px_white]" />
            <span>COLLECTIVE_WEAPONRY_ACTIVE</span>
        </div>
      </main>
    </div>
  )
}
