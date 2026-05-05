
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
  Infinity as InfinityIcon,
  Info,
  GitGraph
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
 * مركز إنتاج الأسلحة الرقمية الأكثر فتكاً المدمج في العقل الجمعي. تم تحسين الخطوط والعرض.
 * Commander: المعتصم بالله ادريس الغزالي
 */
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
      toast({ variant: "destructive", title: "Missing Target" });
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
      toast({ title: "Weaponry Synthesized" });
    } catch (err) {
      toast({ variant: "destructive", title: "Forge Failure" });
    } finally {
      setLoading(false);
    }
  }

  const launchStrike = async () => {
    if (!target) return;
    toast({ title: "Collective Strike Initiated" });
    try {
        await fetch('/api/execute', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ command: `strike ${target}`, target, type: 'autonomous_strike' })
        });
        toast({ title: "Hive Strike Confirmed" });
    } catch (e) {
        toast({ variant: "destructive", title: "Hive Link Severance" });
    }
  }

  if (!mounted) return null;

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/30 relative overflow-x-hidden scanline-effect font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-80 p-4 md:p-10 relative overflow-y-auto min-h-screen scrollbar-hide flex flex-col z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.08),transparent)] pointer-events-none transition-all duration-300 z-0" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />

        <header className="mb-12 relative z-10 animate-in fade-in slide-in-from-top-12 duration-1000">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="size-24 md:size-32 bg-black border-2 border-primary flex items-center justify-center shadow-2xl relative group shrink-0 rounded-[1.5rem] rotate-3 hover:rotate-0 transition-all duration-1000">
              <Flame className="size-12 md:size-18 text-primary group-hover:scale-110 transition-transform duration-700 gold-glow animate-pulse" />
              <div className="absolute -inset-4 border border-primary/20 rounded-full animate-spin-slow opacity-40" />
            </div>
            <div className="text-center md:text-left flex-1">
              <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 mb-4">
                <Badge className="bg-primary text-black border-none rounded-none px-6 py-1.5 text-[14px] font-black tracking-[0.4em] shadow-md italic">POLYMORPH LAB v43.0</Badge>
                <div className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-emerald-500 animate-pulse">
                    <Atom className="size-4 shadow-lg" /> HIVE_AMMUNITION: ARMED
                </div>
              </div>
              <h1 className="text-4xl md:text-7xl font-headline font-bold text-white tracking-tighter italic uppercase leading-none gold-glow">
                Weaponry <span className="text-primary">Forge</span>
              </h1>
              <p className="text-lg md:text-2xl text-muted-foreground mt-4 italic max-w-4xl leading-relaxed uppercase font-medium">
                "سيدي الغزالي، مختبر التخليق السيادي يتيح لك تخليق الأسلحة الرقمية الأكثر فتكاً؛ <span className="text-primary font-black underline decoration-primary decoration-4 underline-offset-8 shadow-lg uppercase tracking-widest">Polymorph-X</span>."
              </p>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 relative z-10 pb-24 flex-1">
          <div className="xl:col-span-1 space-y-8">
            <Card className="kali-card border-primary/40 bg-black/80 rounded-[2.5rem] p-8 border-2 shadow-xl overflow-hidden group">
              <Tabs defaultValue="exploit" onValueChange={setActiveMode} className="w-full">
                <TabsList className="bg-black/99 border-2 border-primary/20 w-full h-16 p-1.5 rounded-[1.5rem] shadow-inner mb-8">
                  <TabsTrigger value="exploit" className="flex-1 text-[11px] uppercase font-black rounded-xl data-[state=active]:bg-primary data-[state=active]:text-black transition-all duration-500 italic tracking-widest">EXPLOIT</TabsTrigger>
                  <TabsTrigger value="apex" className="flex-1 text-[11px] uppercase font-black rounded-xl data-[state=active]:bg-primary data-[state=active]:text-black transition-all duration-500 italic tracking-widest">APEX</TabsTrigger>
                  <TabsTrigger value="wordlist" className="flex-1 text-[11px] uppercase font-black rounded-xl data-[state=active]:bg-primary data-[state=active]:text-black transition-all duration-500 italic tracking-widest">DNA</TabsTrigger>
                </TabsList>
                
                <div className="space-y-8">
                  <div className="space-y-4">
                    <label className="text-[11px] font-black text-primary/60 uppercase tracking-[0.4em] px-4 italic flex items-center gap-3">
                        <Target className="size-4" /> Coordinate
                    </label>
                    <Input 
                        value={target}
                        onChange={(e) => setTarget(e.target.value)}
                        placeholder="IP / Binary / Neural Path..."
                        className="bg-black border-2 border-white/10 rounded-[1.5rem] h-16 text-xl italic px-8 focus:border-primary shadow-lg text-white font-black"
                    />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[11px] font-black text-primary/60 uppercase tracking-[0.4em] px-4 italic flex items-center gap-3">
                        <Code2 className="size-4" /> Parameters
                    </label>
                    <Textarea 
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder={activeMode === 'wordlist' ? "Provide DNA data..." : "Define attack goal..."}
                      className="bg-black border-2 border-white/10 rounded-[2rem] min-h-[180px] text-lg italic p-8 focus:border-primary shadow-inner font-bold text-gray-200"
                    />
                  </div>
                  <Button 
                    onClick={handleAction} 
                    disabled={loading}
                    className="w-full h-20 bg-primary hover:bg-white text-black font-black uppercase tracking-[1em] rounded-[2rem] shadow-2xl active:scale-95 transition-all text-lg border-4 border-black/30 group italic"
                  >
                    {loading ? <Loader2 className="size-8 animate-spin" /> : <Flame className="size-8 mr-4 group-hover:scale-125 transition-transform" />}
                    Ignite Forge
                  </Button>
                </div>
              </Tabs>
            </Card>
          </div>

          <div className="xl:col-span-2">
            <Card className="kali-card border-primary/40 bg-black/99 rounded-[3rem] border-4 shadow-2xl h-full flex flex-col group relative overflow-hidden">
              <CardHeader className="p-8 border-b border-white/5 flex flex-row justify-between items-center bg-primary/5 rounded-t-[2.5rem]">
                <CardTitle className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter text-white flex items-center gap-6 gold-glow px-4">
                  <Terminal className="size-8 text-primary animate-neural" /> Output Matrix
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 flex-1 relative">
                <ScrollArea className="h-[650px] p-8">
                   {output ? (
                     <div className="space-y-10 font-code text-xl md:text-2xl animate-in fade-in zoom-in-95 duration-1000">
                        <div className="flex items-center justify-between border-b border-white/5 pb-4">
                            <span className="text-emerald-500 font-black uppercase tracking-[0.5em] italic">{" >>> SYNT_COMPLETE"}</span>
                            <span className="text-[10px] font-black text-muted-foreground uppercase italic">{new Date().toLocaleTimeString()}</span>
                        </div>

                        {activeMode === 'exploit' && (
                            <div className="space-y-10">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4 text-primary italic">
                                        <FileCode className="size-6" />
                                        <span className="text-xl font-black uppercase tracking-[0.4em]">Payload</span>
                                    </div>
                                    <div className="p-8 bg-black/90 border-2 border-primary/20 text-lg md:text-xl text-emerald-400 overflow-x-auto whitespace-pre font-code shadow-inner">
                                        {output.exploitCode}
                                    </div>
                                </div>
                                <div className="p-8 rounded-[2rem] bg-primary/5 border border-primary/20 space-y-4 shadow-inner">
                                    <h5 className="text-lg font-black text-primary uppercase tracking-[0.6em] italic border-b border-primary/10 pb-4">Bible</h5>
                                    <p className="text-xl md:text-2xl text-gray-200 italic font-black leading-relaxed">{output.usageInstructions}</p>
                                </div>
                            </div>
                        )}

                        {activeMode === 'apex' && (
                            <div className="space-y-10">
                                <div className="p-8 rounded-[2.5rem] bg-primary/10 border-2 border-primary/50 text-2xl md:text-4xl text-white italic font-black leading-snug shadow-xl">
                                    <strong className="text-primary uppercase tracking-[0.6em] block mb-4 border-b border-primary/20 pb-4 text-sm italic">Summary:</strong>
                                    "{output.summary}"
                                </div>
                                <div className="p-8 bg-black/90 border-2 border-primary/20 text-lg md:text-xl text-emerald-400 overflow-x-auto whitespace-pre font-code shadow-inner">
                                    {JSON.stringify(output.plan, null, 2)}
                                </div>
                            </div>
                        )}

                        {activeMode === 'wordlist' && (
                            <div className="space-y-10">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    {output.likelyPasswords?.map((pw: string, idx: number) => (
                                        <div key={idx} className="p-6 bg-black/80 rounded-2xl border border-white/5 text-xl text-white font-black tracking-widest italic hover:border-amber-500 transition-all cursor-pointer shadow-lg" onClick={() => {
                                          navigator.clipboard.writeText(pw);
                                          toast({ title: "Key Siphoned" });
                                        }}>
                                            {pw}
                                        </div>
                                    ))}
                                </div>
                                <div className="p-8 rounded-[2.5rem] bg-amber-500/5 border-2 border-amber-500/30">
                                    <p className="text-xl md:text-2xl text-gray-400 italic font-black leading-relaxed">"{output.psychologicalInsight}"</p>
                                </div>
                            </div>
                        )}

                        <div className="flex flex-col md:flex-row justify-end gap-6 mt-12 pb-6">
                            <Button onClick={launchStrike} className="h-20 px-12 bg-primary hover:bg-white text-black font-black uppercase tracking-[0.8em] rounded-full shadow-2xl border-4 border-black/30 active:scale-95 transition-all text-xl italic group">
                                <Rocket className="size-8 mr-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /> LAUNCH STRIKE
                            </Button>
                        </div>
                     </div>
                   ) : (
                     <div className="h-full flex flex-col items-center justify-center text-center opacity-10 py-40 gap-8 animate-in fade-in duration-1000">
                        <Skull className="size-32 text-primary animate-pulse" />
                        <div className="space-y-4">
                            <p className="text-4xl font-black uppercase tracking-[1.5em] text-white italic">READY</p>
                            <p className="text-lg italic font-bold text-gray-500">Awaiting Directives...</p>
                        </div>
                     </div>
                   )}
                </ScrollArea>
              </CardContent>
              <div className="p-6 border-t border-white/5 mt-6 flex justify-between items-center opacity-30 text-[10px] font-black uppercase tracking-[1em] italic">
                <span>HIVE_CORE_v43_AL_GHAZALI_ROOT</span>
                <Fingerprint className="size-6 text-primary animate-pulse" />
              </div>
            </Card>
          </div>
        </div>

        <div className="mt-auto relative z-10 flex justify-center items-center gap-24 opacity-40 text-[12px] font-black uppercase tracking-[2em] italic text-white drop-shadow-xl pb-6">
            <span>AL-MUIZZ POLYMORPH LAB v43.0</span>
            <div className="size-4 rounded-full bg-white animate-pulse" />
            <span>WEAPONRY_ACTIVE</span>
        </div>
      </main>
    </div>
  )
}
