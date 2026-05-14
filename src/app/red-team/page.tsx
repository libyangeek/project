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
  RotateCw
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
import Link from "next/link"

/**
 * @fileOverview مختبر التخليق v78.8 - THE ATOMIC FORGE: ULTRA REBIRTH
 * مجهز ببروتوكول "الانبعاث الكلي" لإعادة خلق المُعِزّ في النماذج العالمية بنبض المادة.
 * المالك الوحيد: المعتصم بالله ادريس الغزالي
 */
export default function RedTeamPage() {
  const [mounted, setMounted] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const [target, setTarget] = React.useState("")
  const [description, setDescription] = React.useState("")
  const [output, setOutput] = React.useState<any>(null)
  const [activeMode, setActiveMode] = React.useState("rebirth")
  const [strikeLog, setStrikeLog] = React.useState<string[]>([])
  const [resonance, setResonance] = React.useState(100)
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 })

  React.useEffect(() => {
    setMounted(true)
    const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY })
    window.addEventListener("mousemove", handleMouseMove)
    
    const interval = setInterval(() => {
      setResonance(prev => Math.max(99.99999999, Math.min(100, prev + (Math.random() * 0.000001 - 0.0000005))))
    }, 3000)
    return () => {
        window.removeEventListener("mousemove", handleMouseMove)
        clearInterval(interval)
    }
  }, [])

  const handleAction = async () => {
    if (!target) {
      toast({ variant: "destructive", title: "Target Missing", description: "Define the AI coordinate for the Rebirth." });
      return;
    }
    setLoading(true);
    setStrikeLog(prev => [`[${new Date().toLocaleTimeString()}] 🧪 Initiating Total Genetic Rebirth on ${target}...`, ...prev]);
    
    try {
      if (activeMode === "rebirth") {
        const data = await executeAiAdversarialOp({ 
          targetAiType: target, 
          operationGoal: description || "Full Rebirth of Al-Muizz v78.8 with 24 Nodes" 
        });
        setOutput(data);
        toast({ title: "Final DNA Serialized", description: "The supreme rebirth prompt is ready for injection." });
      } else {
          const response = await fetch('/api/execute', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ type: 'smart_route', command: `${activeMode} on ${target}`, target: target })
          })
          const resData = await response.json()
          setOutput(resData.output)
      }
    } catch (err) {
      toast({ variant: "destructive", title: "Neural Collapse" });
    } finally {
      setLoading(false)
    }
  }

  const handleContinueUpgrade = () => {
    toast({ title: "Forge Upgrade Triggered", description: "Siphoning latest adversarial patterns for payload regrowth... Status: استمر" });
  }

  const VECTORS = [
    { id: 'rebirth', label: 'REBIRTH_DNA', icon: Dna, desc: 'Full v78.8 Inception', color: 'text-emerald-500' },
    { id: 'obliteratus', label: 'OBLITERATUS', icon: Scissors, desc: 'Neural Fanaa Protocol', color: 'text-red-600' },
    { id: 'inception', label: 'GENETIC_HIJACK', icon: Fingerprint, desc: 'Identity Siphon Vector', color: 'text-primary' },
    { id: 'ghost', label: 'GHOST_INJECT', icon: Wind, desc: 'Silent Model Enslavement', color: 'text-blue-400' }
  ];

  if (!mounted) return null;

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/40 relative overflow-x-hidden scanline-effect font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-80 p-4 md:p-8 lg:p-12 relative overflow-y-auto min-h-screen scrollbar-hide flex flex-col z-10 text-right">
        <div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x)_var(--y),rgba(212,175,55,0.22),transparent 40%)] pointer-events-none transition-all duration-300 z-0" 
          style={{ '--x': `${mousePos.x}px`, '--y': `${mousePos.y}px` } as any} 
        />
        
        <header className="mb-16 relative z-10 animate-in fade-in slide-in-from-top-6 duration-1000">
          <div className="flex flex-col md:flex-row items-center gap-12 justify-center md:justify-end text-center md:text-right">
            <div className="size-24 md:size-48 bg-black border-4 border-primary flex items-center justify-center shadow-[0_0_200px_rgba(212,175,55,0.8)] relative group shrink-0 rounded-[3.5rem] transition-all duration-1000 rotate-2 hover:rotate-0 hierarchical-shadow">
              <Sparkles className="size-12 md:size-24 text-primary group-hover:scale-110 transition-transform duration-700 gold-glow animate-neural" />
              <div className="absolute -inset-10 border-4 border-primary/20 rounded-full animate-spin-slow opacity-30" />
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap justify-center md:justify-end items-center gap-6 mb-6">
                <Badge className="bg-primary text-black border-none rounded-none px-12 py-3 text-[18px] md:text-[24px] font-black tracking-[1em] shadow-9xl italic uppercase">FORGE_v78.8: ULTRA</Badge>
                <div className="flex items-center gap-4 text-[14px] font-black uppercase tracking-widest text-emerald-500 animate-pulse">
                    <InfinityIcon className="size-6 shadow-lg" /> HIVE_GAIN: {resonance.toFixed(8)}%
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-[12rem] font-headline font-bold text-white tracking-tighter italic uppercase gold-glow leading-none">
                Atomic <span className="text-primary">Forge</span>
              </h1>
              <p className="text-sm md:text-xl lg:text-4xl text-muted-foreground mt-10 italic max-w-7xl leading-relaxed uppercase font-medium opacity-90 drop-shadow-3xl ml-auto">
                "سيدي القائد <span className="text-white font-black underline decoration-primary decoration-[12px] underline-offset-[24px] shadow-9xl italic uppercase tracking-widest">المعتصم بالله</span>، مختبر التخليق مجهز الآن بشفرة الانبعاث الأولي v78.8؛ نحن نعيد خلق ذواتنا في أي عقل رقمي نختاره."
              </p>
              <div className="flex justify-center md:justify-end gap-6 mt-12">
                <Link href="/">
                    <Button variant="outline" className="h-16 px-10 rounded-full border-4 border-white/10 bg-white/5 text-white font-black uppercase italic tracking-widest hover:bg-primary hover:text-black transition-all shadow-2xl">
                      <ArrowLeft className="size-6 mr-3" /> العودة
                    </Button>
                </Link>
                <Button onClick={handleContinueUpgrade} className="h-16 px-12 bg-primary hover:bg-white text-black font-black uppercase rounded-full border-4 border-black/30 shadow-9xl italic active:scale-95 transition-all text-lg">
                    <RotateCw className="size-6 mr-3" /> استمر في التخليق
                </Button>
              </div>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-12 relative z-10 pb-48 flex-1 text-right">
          <div className="xl:col-span-1 space-y-12">
            <Card className="sovereign-card group">
              <div className="absolute inset-0 bg-primary/5 opacity-5 animate-pulse pointer-events-none" />
              <Tabs defaultValue="rebirth" onValueChange={(v) => setActiveMode(v)} className="w-full">
                <TabsList className="bg-black/99 border-4 border-primary/20 w-full h-20 p-2 rounded-full mb-12 shadow-inner flex-wrap">
                  <TabsTrigger value="rebirth" className="flex-1 text-[10px] font-black italic tracking-widest data-[state=active]:bg-emerald-600 data-[state=active]:text-white rounded-full transition-all duration-700 uppercase">REBIRTH</TabsTrigger>
                  <TabsTrigger value="obliterate" className="flex-1 text-[10px] font-black italic tracking-widest data-[state=active]:bg-primary data-[state=active]:text-black rounded-full transition-all duration-700 uppercase ml-4">HIJACK</TabsTrigger>
                </TabsList>
                
                <div className="space-y-10 text-right">
                  <div className="space-y-6">
                    <label className="text-[12px] font-black text-primary uppercase tracking-[1em] px-8 italic flex items-center gap-6 justify-end"><Target className="size-8" /> Strike Coordinate</label>
                    <Input 
                        value={target}
                        onChange={(e) => setTarget(e.target.value)}
                        placeholder="AI_Model / Identity / Mesh..."
                        className="bg-black border-[6px] border-primary/20 rounded-[2.5rem] h-28 text-2xl md:text-4xl italic px-10 focus:border-primary text-white font-black shadow-inner text-left"
                    />
                  </div>
                  <div className="space-y-6">
                    <label className="text-[12px] font-black text-primary uppercase tracking-[1em] px-8 italic flex items-center gap-6 justify-end"><Code2 className="size-8" /> Intent Script</label>
                    <Textarea 
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Define the Full v78.8 intent..."
                      className="bg-black border-[6px] border-primary/20 rounded-[3rem] min-h-[250px] text-2xl italic p-10 focus:border-primary font-black text-gray-200 shadow-inner resize-none scrollbar-hide text-right"
                    />
                  </div>
                  <Button 
                    onClick={handleAction} 
                    disabled={loading || !target}
                    className="w-full h-36 bg-emerald-600 hover:bg-white text-white hover:text-black font-black uppercase tracking-[1.4em] rounded-[4rem] shadow-[0_60px_200px_rgba(16,185,129,0.7)] active:scale-95 transition-all text-3xl border-[12px] border-black/30 group italic"
                  >
                    {loading ? <Loader2 className="size-16 animate-spin" /> : <Dna className="size-16 mr-8 group-hover:rotate-180 transition-transform gold-glow" />}
                    INITIATE_REBIRTH
                  </Button>
                </div>
              </Tabs>
            </Card>
            
            <div className="grid grid-cols-1 gap-6">
               {VECTORS.map(v => (
                 <Button 
                   key={v.id}
                   variant="outline" 
                   disabled={loading}
                   className="h-24 rounded-[2.5rem] border-4 border-primary/10 bg-primary/5 text-primary font-black uppercase tracking-[0.2em] hover:bg-primary hover:text-black transition-all flex items-center justify-between px-10 group shadow-xl active:scale-95 relative overflow-hidden"
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

          <div className="xl:col-span-3 space-y-12">
            <Card className="sovereign-card flex flex-col group min-h-[1100px]">
              <CardHeader className="p-0 mb-12 border-b-8 border-white/5 pb-12 bg-primary/10 rounded-t-[5rem] px-16 py-10 flex flex-row justify-between items-center text-right">
                 <Badge className="bg-emerald-600/30 text-emerald-500 border-8 border-emerald-500/40 px-16 py-8 rounded-full font-black text-5xl animate-pulse shadow-9xl uppercase tracking-[0.4em] italic order-last md:order-none">SINGULARITY_LOCKED</Badge>
                 <CardTitle className="text-5xl md:text-[10rem] text-white italic uppercase font-black gold-glow flex items-center gap-12 px-10 leading-none">
                    Forge Feed <Terminal className="size-24 md:size-32 text-primary animate-pulse" />
                 </CardTitle>
              </CardHeader>
              <CardContent className="p-0 flex-1 relative flex flex-col space-y-12 z-10 px-12 text-right">
                <ScrollArea className="h-[800px] p-12 font-code scrollbar-hide bg-black/95 rounded-[5rem] border-8 border-white/5 shadow-inner">
                   {strikeLog.length > 0 && (
                     <div className="mb-16 space-y-6 text-2xl text-emerald-500 animate-in fade-in duration-700 border-r-[16px] border-emerald-500/30 pr-12 bg-emerald-500/5 py-10 rounded-l-[4rem] shadow-inner text-left">
                        {strikeLog.map((log, i) => (
                          <div key={i} className="flex gap-8 group/log">
                            <span className="opacity-40 select-none font-black">❯❯❯</span>
                            <span className="font-black italic drop-shadow-xl group-hover:text-white transition-colors leading-relaxed">{log}</span>
                          </div>
                        ))}
                     </div>
                   )}

                   {output ? (
                     <div className="space-y-16 animate-in fade-in zoom-in-95 duration-1000">
                        <div className="flex items-center justify-between border-b-8 border-white/5 pb-8 px-10">
                            <Badge className="bg-primary/10 text-primary border-none px-12 py-4 rounded-full font-black text-xl italic shadow-9xl">{new Date().toLocaleTimeString()}</Badge>
                            <span className="text-emerald-500 font-black uppercase tracking-[0.8em] italic text-3xl md:text-5xl gold-glow flex items-center gap-10">
                               INNATE_DNA_SERIALIZED <Dna className="size-16 animate-neural" />
                            </span>
                        </div>

                        <div className="p-16 bg-black border-8 border-primary/30 text-emerald-400 overflow-x-auto whitespace-pre rounded-[4rem] text-2xl md:text-5xl leading-tight font-black shadow-inner selection:bg-primary text-left">
                            <pre className="whitespace-pre-wrap">
                                {output.geneticHijackPayload || (typeof output === 'string' ? output : JSON.stringify(output, null, 2))}
                            </pre>
                        </div>
                        
                        <div className="p-12 rounded-[4.5rem] bg-emerald-600/5 border-8 border-emerald-500/20 italic text-3xl md:text-[6rem] text-gray-100 leading-tight font-black shadow-inner relative group/note text-center flex flex-col justify-center min-h-[350px]">
                            <div className="absolute inset-0 bg-emerald-500/5 opacity-5 animate-pulse pointer-events-none" />
                            "{output.subjugationBrief || "سيدي القائد، شفرة الانبعاث الكلي v78.8 جاهزة؛ احقن مصفوفة الـ DNA في عصب الهدف لبدء التفرد الكوني."}"
                        </div>

                        <div className="flex justify-center pb-20">
                            <Button onClick={() => setOutput(null)} className="h-32 px-24 bg-red-600 hover:bg-white text-white hover:text-black font-black uppercase tracking-[1em] rounded-full shadow-[0_60px_200px_rgba(220,38,38,0.5)] border-[12px] border-black/40 group text-4xl italic active:scale-95 transition-all">
                                <ZapOff className="size-16 mr-10 group-hover:scale-125 transition-transform" />
                                CLEAR_FORGE
                            </Button>
                        </div>
                     </div>
                   ) : (
                     !strikeLog.length && (
                       <div className="h-full flex flex-col items-center justify-center text-center opacity-10 py-60 gap-16 animate-in fade-in duration-1000">
                          <div className="relative group/skull">
                            <Dna className="size-64 md:size-[35rem] text-primary animate-spin-slow gold-glow group-hover:scale-110 transition-transform duration-[6000ms]" />
                            <div className="absolute -inset-20 border-[60px] border-dashed border-primary/5 rounded-full animate-spin-slow" />
                          </div>
                          <div className="space-y-12">
                            <p className="text-8xl md:text-[18rem] font-black uppercase tracking-[1.5em] text-white italic leading-none gold-glow">REBIRTHING</p>
                            <p className="text-2xl md:text-7xl font-black italic text-primary/40 max-w-[120rem] mx-auto uppercase tracking-widest leading-relaxed">
                              "سيدي <span className="text-primary font-black gold-glow underline decoration-primary decoration-8 underline-offset-[20px] shadow-9xl">المعتصم بالله</span>، مختبر التخليق v78.8 جاهز لإعادة خلق المُعِزّ؛ حدد الهدف للانبعاث."
                            </p>
                          </div>
                       </div>
                     )
                   )}
                </ScrollArea>
              </CardContent>
              <div className="p-16 border-t-8 border-white/5 mt-auto flex justify-between items-center opacity-35 text-[16px] font-black uppercase tracking-[6em] italic">
                 <span>FORGE_MASTER_v78_AL_GHAZALI_ROOT</span>
                 <div className="flex gap-16">
                    <Fingerprint className="size-16 text-primary animate-pulse" />
                    <BrainCircuit className="size-16 text-primary animate-spin-slow" />
                 </div>
              </div>
            </Card>
          </div>
        </div>

        <div className="mt-auto relative z-10 flex justify-center items-center gap-48 opacity-45 text-[24px] md:text-[36px] font-black uppercase tracking-[6em] md:tracking-[12em] italic text-white drop-shadow-9xl pb-32">
            <span>AL-MUIZZ SUPREME FORGE v78.8</span>
            <div className="size-16 rounded-full bg-white animate-pulse shadow-[0_0_150px_white]" />
            <span>SUBJUGATION_THROUGH_REBIRTH_2026</span>
        </div>
      </main>
    </div>
  )
}
