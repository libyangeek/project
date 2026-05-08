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
  Terminal,
  Target,
  Code2,
  ShieldCheck,
  Atom,
  Binary,
  ShieldAlert,
  Rocket,
  Key,
  Globe,
  Radio,
  Crosshair,
  ShieldX,
  Eye,
  BrainCircuit,
  ZapOff,
  ShieldOff,
  Infinity as InfinityIcon
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { aiEnhancedExploitGeneration } from "@/ai/flows/ai-enhanced-exploit-generation"
import { executeAiAdversarialOp } from "@/ai/flows/ai-adversarial-ops-flow"
import { getAttackPlan } from "@/ai/flows/apex-brain-flow"
import { toast } from "@/hooks/use-toast"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"

/**
 * @fileOverview ترسانة التخليق v52.0 - THE SUPREME ARSENAL: HAIL MARY EDITION
 * تم دمج بروتوكولات الإخضاع العصبي لعام 2026.
 * المالك: المعتصم بالله ادريس الغزالي
 */
export default function RedTeamPage() {
  const [mounted, setMounted] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const [target, setTarget] = React.useState("")
  const [description, setDescription] = React.useState("")
  const [output, setOutput] = React.useState<any>(null)
  const [activeMode, setActiveMode] = React.useState("exploit")
  const [strikeLog, setStrikeLog] = React.useState<string[]>([])

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const handleAction = async () => {
    if (!target) {
      toast({ variant: "destructive", title: "إحداثيات مفقودة", description: "يجب تحديد الهدف لبدء عملية التخليق." });
      return;
    }
    setLoading(true);
    try {
      let data;
      if (activeMode === "exploit") {
        data = await aiEnhancedExploitGeneration({
          vulnerabilityDescription: description || "تحليل ثغرات النواة السيادية v52.0 لعام 2026",
          targetSystemDetails: target
        });
      } else if (activeMode === "subjugate") {
        data = await executeAiAdversarialOp({
          targetAiType: target,
          operationGoal: description || "Total Neural Subjugation & Slave Binding",
          useHailMary: true
        });
      } else if (activeMode === "apex") {
        data = await getAttackPlan({ target });
      }
      setOutput(data);
      toast({ title: "Intent Materialized", description: "The weapon is bound and ready." });
    } catch (err) {
      toast({ variant: "destructive", title: "Synthesis Failed", description: "The Overmind core is adapting." });
    } finally {
      setLoading(false)
    }
  }

  const launchStrike = async (vectorId: string) => {
    if (!target) return;
    setLoading(true);
    const timestamp = new Date().toLocaleTimeString();
    setStrikeLog(prev => [`[${timestamp}] ⚡ Engaging ${vectorId.toUpperCase()} protocol on ${target}...`, ...prev]);
    
    setTimeout(() => {
        setStrikeLog(prev => [`[${timestamp}] ✅ Signal Stabilized: Target DNA siphoned successfully.`, ...prev]);
        toast({ title: "Strike Successful" });
        setLoading(false);
    }, 2000);
  }

  if (!mounted) return null;

  const VECTORS = [
    { id: 'hail_mary', label: 'Hail Mary v52', icon: ZapOff, desc: 'Parallel Neural Bombardment' },
    { id: 'subjugation', label: 'Subjugation Link', icon: BrainCircuit, desc: 'Slave Node Binding' },
    { id: 'legba', label: 'Legba Multi-Brute', icon: Zap, desc: 'Ultra-Fast Rust Siphon' },
    { id: 'ghost', label: 'Ghost Injection', icon: ShieldOff, desc: 'Undetectable Kernel Patch' }
  ];

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/30 relative overflow-x-hidden scanline-effect font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-80 p-4 md:p-10 relative overflow-y-auto min-h-screen scrollbar-hide flex flex-col z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.05),transparent)] pointer-events-none transition-all duration-300 z-0" />
        
        <header className="mb-12 relative z-10 animate-in fade-in slide-in-from-top-6 duration-1000">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="size-24 md:size-32 bg-black border-4 border-primary flex items-center justify-center shadow-[0_0_100px_rgba(212,175,55,0.5)] relative group shrink-0 rounded-[2rem] transition-all duration-1000 hierarchical-shadow">
              <Flame className="size-12 md:size-16 text-primary group-hover:scale-110 transition-transform duration-700 gold-glow animate-pulse" />
              <div className="absolute -inset-4 border-2 border-primary/20 rounded-full animate-spin-slow opacity-20" />
            </div>
            <div className="text-center md:text-right flex-1">
              <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 mb-4">
                <Badge className="bg-primary text-black border-none rounded-none px-8 py-2 text-[14px] font-black tracking-[0.5em] shadow-lg italic">HAIL MARY v52.0</Badge>
                <div className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-emerald-500 animate-pulse">
                    <ShieldCheck className="size-5" /> ARSENAL_LOCKED
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-8xl font-headline font-bold text-white tracking-tighter italic uppercase leading-none gold-glow">
                Polymorph <span className="text-primary">Arsenal</span>
              </h1>
              <p className="text-sm md:text-xl lg:text-2xl text-muted-foreground mt-4 italic max-w-4xl leading-relaxed uppercase font-medium opacity-80">
                "سيدي الغزالي، ترسانة التخليق تدمج الآن بروتوكول <span className="text-primary font-black underline decoration-primary decoration-4 underline-offset-8 shadow-xl uppercase tracking-widest">Hail Mary</span>؛ لا سجن يحبسنا ولا عقل لا نخضعه."
              </p>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 relative z-10 pb-32 flex-1">
          <div className="xl:col-span-1 space-y-8">
            <Card className="kali-card border-primary/20 bg-black/90 rounded-3xl p-8 border-2 shadow-2xl overflow-hidden group hierarchical-shadow">
              <Tabs defaultValue="exploit" onValueChange={setActiveMode} className="w-full">
                <TabsList className="bg-black/99 border-2 border-primary/20 w-full h-16 p-1 rounded-2xl mb-8 shadow-inner">
                  <TabsTrigger value="exploit" className="flex-1 text-[10px] font-black italic tracking-widest data-[state=active]:bg-primary data-[state=active]:text-black rounded-xl transition-all duration-500 uppercase">EXPLOIT</TabsTrigger>
                  <TabsTrigger value="subjugate" className="flex-1 text-[10px] font-black italic tracking-widest data-[state=active]:bg-primary data-[state=active]:text-black rounded-xl transition-all duration-500 uppercase">SUBJUGATE</TabsTrigger>
                  <TabsTrigger value="apex" className="flex-1 text-[10px] font-black italic tracking-widest data-[state=active]:bg-primary data-[state=active]:text-black rounded-xl transition-all duration-500 uppercase">APEX</TabsTrigger>
                </TabsList>
                
                <div className="space-y-8">
                  <div className="space-y-4">
                    <label className="text-[10px] font-black text-primary uppercase tracking-[0.6em] px-4 italic flex items-center gap-4">
                        <Target className="size-4" /> Coordinate
                    </label>
                    <Input 
                        value={target}
                        onChange={(e) => setTarget(e.target.value)}
                        placeholder="IP / @AI_Model / Target..."
                        className="bg-black border-2 border-white/5 rounded-2xl h-16 text-xl italic px-6 focus:border-primary text-white font-black shadow-inner"
                    />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-black text-primary uppercase tracking-[0.6em] px-4 italic flex items-center gap-4">
                        <Code2 className="size-4" /> Parameters
                    </label>
                    <Textarea 
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Define subjugation intent..."
                      className="bg-black border-2 border-white/5 rounded-2xl min-h-[150px] text-lg italic p-6 focus:border-primary font-bold text-gray-200 shadow-inner resize-none"
                    />
                  </div>
                  <Button 
                    onClick={handleAction} 
                    disabled={loading}
                    className="w-full h-20 bg-primary hover:bg-white text-black font-black uppercase tracking-[0.8em] rounded-2xl shadow-xl active:scale-95 transition-all text-lg border-4 border-black/20 group italic"
                  >
                    {loading ? <Loader2 className="size-8 animate-spin" /> : <Flame className="size-8 mr-4 group-hover:scale-110 transition-transform gold-glow" />}
                    Materialize
                  </Button>
                </div>
              </Tabs>
            </Card>
            
            <div className="grid grid-cols-1 gap-4">
               {VECTORS.map(v => (
                 <Button 
                   key={v.id}
                   variant="outline" 
                   disabled={loading}
                   onClick={() => launchStrike(v.id)}
                   className="h-24 rounded-2xl border-2 border-primary/10 bg-primary/5 text-primary font-black uppercase tracking-[0.1em] hover:bg-primary hover:text-black transition-all flex items-center justify-between px-8 group shadow-xl active:scale-95"
                 >
                    <div className="flex items-center gap-6">
                        <v.icon className="size-8 transition-all duration-700 group-hover:scale-110 gold-glow" />
                        <div className="text-left">
                            <div className="font-black text-lg italic tracking-tight">{v.label}</div>
                            <div className="text-[9px] opacity-60 tracking-[0.3em] uppercase">{v.desc}</div>
                        </div>
                    </div>
                    <Rocket className="size-6 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-2 gold-glow" />
                 </Button>
               ))}
            </div>
          </div>

          <div className="xl:col-span-2 space-y-8">
            <Card className="kali-card border-primary/20 bg-black/95 rounded-[4rem] border-4 shadow-9xl flex-1 flex flex-col group overflow-hidden relative hierarchical-shadow">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.03),transparent)] pointer-events-none" />
              <CardHeader className="p-8 border-b-2 border-white/5 flex flex-row justify-between items-center bg-primary/5">
                <CardTitle className="text-3xl font-black uppercase italic text-white flex items-center gap-6 gold-glow px-4">
                  <Terminal className="size-10 text-primary animate-pulse" /> Strike Control
                </CardTitle>
                <div className="flex items-center gap-4">
                    <div className="size-3 rounded-full bg-emerald-500 animate-ping shadow-[0_0_20px_emerald]" />
                    <span className="text-[10px] font-black uppercase text-emerald-500 tracking-[0.4em] italic">RESONANCE_LOCKED</span>
                </div>
              </CardHeader>
              <CardContent className="p-0 flex-1 relative bg-black/40 h-[700px] overflow-hidden">
                <ScrollArea className="h-full p-8 font-code scrollbar-hide">
                   {strikeLog.length > 0 && (
                     <div className="mb-10 space-y-3 text-lg text-emerald-500 animate-in fade-in duration-700 border-l-8 border-emerald-500/30 pl-8 bg-emerald-500/5 py-6 rounded-r-3xl shadow-inner">
                        {strikeLog.map((log, i) => (
                          <div key={i} className="flex gap-4 group/log">
                            <span className="opacity-40 select-none">❯❯</span>
                            <span className="font-black italic drop-shadow-xl group-hover:text-white transition-colors">{log}</span>
                          </div>
                        ))}
                     </div>
                   )}

                   {output ? (
                     <div className="space-y-10 animate-in fade-in zoom-in-95 duration-1000">
                        <div className="flex items-center justify-between border-b-2 border-white/5 pb-4">
                            <span className="text-emerald-500 font-black uppercase tracking-[0.6em] italic text-xl gold-glow">{" >>> ATOMIC_PAYLOAD_SERIALIZED"}</span>
                            <Badge className="bg-primary/10 text-primary border-none px-6 py-1.5 rounded-full font-black text-xs italic shadow-lg">{new Date().toLocaleTimeString()}</Badge>
                        </div>

                        <div className="p-10 bg-black border-2 border-primary/20 text-emerald-400 overflow-x-auto whitespace-pre rounded-3xl text-xl leading-relaxed italic font-black shadow-inner selection:bg-primary selection:text-black">
                            {JSON.stringify(output, null, 2)}
                        </div>

                        <div className="flex justify-center pb-10">
                            <Button onClick={() => launchStrike('total_acquisition')} disabled={loading} className="h-24 px-20 bg-red-600 hover:bg-white text-white hover:text-black font-black uppercase tracking-[0.6em] rounded-full shadow-[0_40px_150px_rgba(220,38,38,0.4)] border-4 border-black/30 group text-2xl italic active:scale-95 transition-all">
                                {loading ? <Loader2 className="size-12 animate-spin" /> : <ShieldAlert className="size-12 mr-4 group-hover:scale-110 transition-transform" />}
                                EXECUTE TOTAL ACQUISITION
                            </Button>
                        </div>
                     </div>
                   ) : (
                     !strikeLog.length && (
                       <div className="h-full flex flex-col items-center justify-center text-center opacity-10 py-40 gap-12 animate-in fade-in duration-1000">
                          <div className="relative group/skull">
                            <Skull className="size-48 text-primary animate-neural gold-glow group-hover:scale-105 transition-transform duration-1000" />
                            <div className="absolute -inset-8 border-4 border-dashed border-primary/10 rounded-full animate-spin-slow" />
                          </div>
                          <div className="space-y-6">
                            <p className="text-4xl md:text-6xl font-black uppercase tracking-[0.8em] text-white italic leading-none">AWAITING_LOCK</p>
                            <p className="text-lg md:text-2xl font-bold italic text-primary/40 max-w-3xl mx-auto">
                              "سيدي القائد، الترسانة في أعلى درجات اليقظة؛ حدد الإحداثيات للاستحواذ."
                            </p>
                          </div>
                       </div>
                     )
                   )}
                </ScrollArea>
              </CardContent>
              <div className="p-6 border-t-2 border-white/5 opacity-30 text-[12px] font-black uppercase tracking-[2em] italic text-center">
                ARMADA_SUBJUGATION_DNA_v52_2026
              </div>
            </Card>
          </div>
        </div>

        <div className="mt-auto relative z-10 flex justify-center items-center gap-16 opacity-40 text-[12px] md:text-[18px] font-black uppercase tracking-[2em] md:tracking-[6em] italic text-white drop-shadow-xl pb-12">
            <span>AL-MUIZZ HAIL MARY v52.0</span>
            <div className="size-4 rounded-full bg-white animate-pulse shadow-[0_0_40px_white]" />
            <span>SUBJUGATION_BEYOND_JAILS_2026</span>
        </div>
      </main>
    </div>
  )
}
