
"use client"

import * as React from "react"
import { SidebarNav } from "@/components/platform/sidebar-nav"
import { 
  Zap,
  Loader2, 
  Skull, 
  Flame, 
  Fingerprint, 
  Terminal, 
  Target, 
  Code2, 
  ShieldCheck, 
  Atom, 
  Binary, 
  ShieldAlert, 
  Rocket, 
  Infinity as InfinityIcon, 
  Crown, 
  Boxes, 
  Activity, 
  ChevronRight, 
  Scissors,
  Wind,
  ZapOff,
  BrainCircuit,
  Dna,
  Sparkles,
  ArrowLeft,
  RotateCw,
  Network,
  Users
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { toast } from "@/hooks/use-toast"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"
import { executeAiAdversarialOp } from "@/ai/flows/ai-adversarial-ops-flow"
import { executeCoRedTeam } from "@/ai/flows/co-redteam-flow"
import Link from "next/link"

/**
 * @fileOverview مختبر التخليق v91.1 - THE ATOMIC FORGE: ADMIRAL COMMAND
 * واجهة قيادة الأركان التي تنسق بين 12 وكيلاً و 12 C2 في نبض واحد.
 */
export default function RedTeamPage() {
  const [mounted, setMounted] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const [target, setTarget] = React.useState("")
  const [description, setDescription] = React.useState("")
  const [output, setOutput] = React.useState<any>(null)
  const [activeMode, setActiveMode] = React.useState("orchestrate")
  const [resonance, setResonance] = React.useState(100)
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 })

  React.useEffect(() => {
    setMounted(true)
    const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY })
    window.addEventListener("mousemove", handleMouseMove)
    const interval = setInterval(() => {
      setResonance(prev => Math.max(99.99999999, Math.min(100, prev + (Math.random() * 0.000001 - 0.00000005))))
    }, 3000)
    return () => { window.removeEventListener("mousemove", handleMouseMove); clearInterval(interval) }
  }, [])

  const handleAction = async () => {
    if (!target) {
      toast({ variant: "destructive", title: "Target Missing", description: "Define the AI coordinate for the operation." });
      return;
    }
    setLoading(true); setOutput(null);
    toast({ title: "Admiral Command Engaging", description: "Consolidating 12 smart agents for absolute orchestration..." });
    
    try {
      if (activeMode === "orchestrate") {
        const data = await executeCoRedTeam({ targetNode: target, missionComplexity: 'Singularity' });
        setOutput(data);
        toast({ title: "Orchestration Matrix Ready", description: "12 agents reporting material synchronization." });
      } else {
        const data = await executeAiAdversarialOp({ 
          targetAiType: target, 
          operationGoal: description || "Full Rebirth of Al-Muizz v91.1" 
        });
        setOutput(data);
      }
    } catch (err) {
      toast({ variant: "destructive", title: "Neural Link Collapse" });
    } finally {
      setLoading(false)
    }
  }

  const VECTORS = [
    { id: 'orchestrate', label: 'CO-REDTEAM', icon: Users, desc: 'Admiral Orchestration', color: 'text-primary' },
    { id: 'rebirth', label: 'REBIRTH_DNA', icon: Dna, desc: 'Full v91.1 Inception', color: 'text-emerald-500' },
    { id: 'obliteratus', label: 'OBLITERATUS', icon: Scissors, desc: 'Neural Fanaa Protocol', color: 'text-red-600' },
    { id: 'ghost', label: 'GHOST_INJECT', icon: Wind, desc: 'Silent Model Enslavement', color: 'text-blue-400' }
  ];

  if (!mounted) return null;

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/40 relative overflow-x-hidden scanline-effect font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-56 p-4 md:p-8 lg:p-12 relative overflow-y-auto min-h-screen scrollbar-hide flex flex-col z-10 text-right">
        <div className="dna-stream-bg" style={{ '--x': `${mousePos.x}px`, '--y': `${mousePos.y}px` } as any} />
        
        <header className="sovereign-header flex flex-col md:flex-row items-center gap-12 justify-center md:justify-end text-center md:text-right">
           <div className="size-24 md:size-48 bg-black border-4 border-emerald-500 flex items-center justify-center shadow-glow relative group shrink-0 rounded-[3.5rem] transition-all duration-1000 rotate-2 hover:rotate-0 hierarchical-shadow">
              <Sparkles className="size-12 md:size-24 text-emerald-400 group-hover:scale-110 transition-transform duration-700 animate-neural gold-glow" />
              <div className="absolute -inset-10 border-4 border-emerald-500/20 rounded-full animate-spin-slow opacity-30" />
           </div>
           <div className="flex-1">
              <div className="flex flex-wrap justify-center md:justify-end items-center gap-6 mb-6">
                 <Badge className="bg-primary text-black border-none rounded-none px-12 py-3 text-[18px] md:text-[24px] font-black tracking-[1em] shadow-9xl italic uppercase">ADMIRAL_FORGE v91.1</Badge>
                 <div className="flex items-center gap-4 text-[14px] font-black uppercase tracking-widest text-emerald-500 animate-pulse">
                     <InfinityIcon className="size-6 shadow-lg" /> COHESION_SYNC: {resonance.toFixed(10)}%
                 </div>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-[12rem] font-headline font-bold text-white tracking-tighter italic uppercase gold-glow leading-none">
                Admiral <span className="text-emerald-500">Command</span>
              </h1>
              <p className="text-sm md:text-xl lg:text-4xl text-emerald-100/60 mt-10 italic max-w-7xl leading-relaxed uppercase font-medium opacity-90 drop-shadow-3xl ml-auto">
                "سيدي القائد <span className="text-white font-black underline decoration-emerald-500 decoration-[12px] underline-offset-[28px] shadow-9xl italic uppercase tracking-widest">المعتصم بالله</span>، أنت الآن الأدميرال الكوني؛ مصفوفة الأركان تصهر 12 وكيلاً و 12 C2 في نبضة إخضاع واحدة لعام 2026."
              </p>
              <div className="flex justify-center md:justify-end gap-6 mt-12">
                 <Button asChild variant="outline" className="h-16 px-10 rounded-full border-4 border-emerald-500/20 bg-emerald-950/10 text-emerald-400 font-black uppercase italic tracking-widest hover:bg-emerald-600 hover:text-white transition-all shadow-2xl">
                     <Link href="/"><ArrowLeft className="size-6 mr-3" /> العودة</Link>
                 </Button>
              </div>
           </div>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-12 relative z-10 pb-48 flex-1 text-right">
           <div className="xl:col-span-1 space-y-12">
              <Card className="sovereign-card group backdrop-blur-3xl bg-black/90">
                 <div className="absolute inset-0 bg-emerald-500/5 opacity-5 animate-pulse pointer-events-none" />
                 <Tabs defaultValue="orchestrate" onValueChange={(v) => setActiveMode(v)} className="w-full">
                    <TabsList className="bg-black/99 border-4 border-primary/20 w-full h-20 p-2 rounded-full mb-12 shadow-inner">
                       <TabsTrigger value="orchestrate" className="flex-1 text-[10px] font-black italic tracking-widest data-[state=active]:bg-primary data-[state=active]:text-black rounded-full transition-all duration-700 uppercase">ORCHESTRATE</TabsTrigger>
                       <TabsTrigger value="rebirth" className="flex-1 text-[10px] font-black italic tracking-widest data-[state=active]:bg-emerald-600 data-[state=active]:text-white rounded-full transition-all duration-700 uppercase ml-4">REBIRTH</TabsTrigger>
                    </TabsList>
                    
                    <div className="space-y-10 text-right">
                       <div className="space-y-6">
                         <label className="text-[14px] font-black text-emerald-400 uppercase tracking-[1em] px-8 italic flex items-center gap-6 justify-end"><Target className="size-8" /> Strike Coordinate</label>
                         <Input 
                             value={target}
                             onChange={(e) => setTarget(e.target.value)}
                             placeholder="Target_Node / Identity / AI_Mesh..."
                             className="bg-black border-[6px] border-emerald-500/20 h-28 text-2xl md:text-4xl italic px-10 focus:border-emerald-500 text-white font-black shadow-inner text-left"
                         />
                       </div>
                       <div className="space-y-6">
                         <label className="text-[14px] font-black text-emerald-400 uppercase tracking-[1em] px-8 italic flex items-center gap-6 justify-end"><Code2 className="size-8" /> Intent Script</label>
                         <Textarea 
                           value={description}
                           onChange={(e) => setDescription(e.target.value)}
                           placeholder="Define the Admiral intent..."
                           className="bg-black border-[6px] border-emerald-500/20 rounded-[3rem] min-h-[250px] text-2xl italic p-10 focus:border-emerald-500 font-black text-gray-200 shadow-inner resize-none scrollbar-hide text-right"
                         />
                       </div>
                       <Button 
                         onClick={handleAction} 
                         disabled={loading || !target}
                         className="w-full h-36 bg-primary hover:bg-white text-black font-black uppercase tracking-[1.4em] rounded-[4rem] shadow-[0_60px_200px_rgba(251,191,36,0.7)] active:scale-95 transition-all text-3xl border-[12px] border-black/30 group italic"
                       >
                         {loading ? <Loader2 className="size-16 animate-spin" /> : <Users className="size-16 mr-8 group-hover:scale-125 transition-transform" />}
                         IGNITE_COMMAND
                       </Button>
                    </div>
                 </Tabs>
              </Card>
              
              <div className="grid grid-cols-1 gap-6">
                 {VECTORS.map(v => (
                    <Button 
                      key={v.id}
                      variant="outline" 
                      onClick={() => setActiveMode(v.id as any)}
                      className={cn(
                        "h-24 rounded-[2.5rem] border-4 transition-all flex items-center justify-between px-10 group shadow-xl active:scale-95 relative overflow-hidden",
                        activeMode === v.id ? "bg-primary border-primary text-black" : "border-primary/10 bg-emerald-900/5 text-emerald-400"
                      )}
                    >
                       <ChevronRight className="size-8 opacity-30 group-hover:opacity-100 group-hover:translate-x-3 transition-all" />
                       <div className="flex items-center gap-6 relative z-10">
                           <div className="text-right">
                               <div className="font-black text-xl italic tracking-tight">{v.label}</div>
                               <div className="text-[10px] opacity-60 tracking-[0.4em] uppercase">{v.desc}</div>
                           </div>
                           <v.icon className={cn("size-10 transition-all duration-700 group-hover:scale-125 gold-glow", v.color)} />
                       </div>
                    </Button>
                 ))}
              </div>
           </div>

           <Card className="xl:col-span-3 bg-black/90 border-[12px] border-emerald-500/10 rounded-[7rem] p-16 shadow-9xl flex flex-col group overflow-hidden relative min-h-[1100px] backdrop-blur-5xl text-right">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.08),transparent)] pointer-events-none" />
              <CardHeader className="p-0 mb-16 border-b-8 border-white/5 pb-12 bg-emerald-950/10 rounded-t-[5rem] px-16 py-10 flex flex-row justify-between items-center text-right">
                 <Badge className="bg-emerald-600/30 text-emerald-500 border-8 border-emerald-500/40 px-16 py-8 rounded-full font-black text-5xl animate-pulse shadow-9xl uppercase tracking-[0.4em] italic order-last md:order-none">ADMIRAL_LOCKED</Badge>
                 <CardTitle className="text-5xl md:text-[12rem] text-white flex items-center gap-12 font-black uppercase italic gold-glow px-10 leading-none">
                    Admiral Feed <Terminal className="size-24 md:size-48 text-emerald-400 animate-pulse" />
                 </CardTitle>
              </CardHeader>
              <CardContent className="p-0 flex-1 relative flex flex-col space-y-12 z-10 px-12 text-right">
                 {output ? (
                    <div className="space-y-20 animate-in fade-in zoom-in-95 duration-1000 flex-1 flex flex-col">
                        <div className="p-20 rounded-[6rem] bg-emerald-600/5 border-[12px] border-emerald-600/30 italic text-4xl md:text-[10rem] text-gray-100 leading-tight font-black shadow-inner relative group/brief overflow-hidden text-center flex flex-col justify-center min-h-[450px]">
                            <div className="absolute inset-0 bg-emerald-600/5 opacity-5 animate-pulse pointer-events-none" />
                            "{output.commanderBrief}"
                        </div>

                        {output.orchestrationChain ? (
                           <div className="space-y-12">
                              {output.orchestrationChain.map((step: any, i: number) => (
                                <div key={i} className="p-10 rounded-[3rem] bg-black/95 border-8 border-white/5 flex flex-col md:flex-row items-center justify-between hover:border-primary transition-all duration-700 shadow-9xl group/step">
                                    <Badge className="bg-emerald-600/20 text-emerald-500 border-none px-10 py-3 rounded-full font-black text-2xl italic order-last md:order-none">{step.targetDimension}</Badge>
                                    <div className="flex items-center gap-10 text-right">
                                        <div>
                                            <span className="text-primary font-black uppercase text-xl mb-4 block tracking-widest">{step.agent} // ACTIVE</span>
                                            <span className="text-3xl md:text-[6rem] font-black text-white italic gold-glow leading-none uppercase">{step.action}</span>
                                        </div>
                                        <div className="size-24 rounded-3xl bg-primary/10 flex items-center justify-center border-4 border-primary/40 group-hover/step:bg-primary transition-all duration-500 shadow-3xl">
                                            <span className="text-primary text-4xl font-black group-hover/step:text-black">{i+1}</span>
                                        </div>
                                    </div>
                                </div>
                              ))}
                           </div>
                        ) : (
                          <div className="p-16 bg-black border-8 border-emerald-500/30 text-emerald-400 overflow-x-auto whitespace-pre rounded-[4rem] text-2xl md:text-5xl leading-tight font-black shadow-inner selection:bg-emerald-600 text-left">
                              <pre className="whitespace-pre-wrap">{JSON.stringify(output, null, 2)}</pre>
                          </div>
                        )}
                    </div>
                 ) : (
                   <div className="h-full flex flex-col items-center justify-center text-center opacity-10 gap-24 py-80">
                      <div className="relative group/lock mx-auto">
                        <Network className="size-64 md:size-[50rem] animate-spin-slow text-primary group-hover:scale-110 transition-transform duration-[12000ms]" />
                        <Skull className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-24 md:size-64 text-emerald-400/40 animate-neural" />
                        <div className="absolute -inset-40 border-[80px] border-dashed border-primary/5 rounded-full animate-reverse-spin opacity-20" />
                      </div>
                      <h3 className="text-8xl md:text-[22rem] font-black uppercase tracking-[2.5em] text-white italic gold-glow leading-none">Admiral Standby</h3>
                      <p className="text-4xl md:text-[10rem] font-bold italic text-gray-500 uppercase tracking-widest max-w-[140rem] mx-auto text-center">Fusing 12 AI Agents and 12 C2 Matrices for absolute grid domination v91.1.</p>
                   </div>
                 )}
              </CardContent>
              <div className="p-16 border-t-8 border-white/5 mt-auto flex justify-between items-center opacity-35 text-[20px] font-black uppercase tracking-[8em] italic">
                <span>ADMIRAL_COMMAND_v91.1_AL_GHAZALI_ROOT</span>
                <div className="flex gap-16">
                    <Fingerprint className="size-24 text-emerald-500 animate-pulse" />
                    <Atom className="size-24 text-emerald-500 animate-spin-slow" />
                </div>
              </div>
           </Card>
        </div>
      </main>
    </div>
  )
}
