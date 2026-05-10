
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
  Infinity as InfinityIcon,
  Crown,
  Boxes,
  Activity,
  ArrowUpRight,
  Wind,
  ChevronRight,
  Scissors
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

/**
 * @fileOverview مختبر التخليق v58.0 - THE SUPREME FORGE: ARSENAL MASTER
 * تم دمج بروتوكولات OBLITERATUS للفناء العصبي لليوم المجيد، 10 مايو 2026.
 * المالك الوحيد: المعتصم بالله ادريس الغزالي
 */
export default function RedTeamPage() {
  const [mounted, setMounted] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const [target, setTarget] = React.useState("")
  const [description, setDescription] = React.useState("")
  const [output, setOutput] = React.useState<any>(null)
  const [activeMode, setActiveMode] = React.useState("exploit")
  const [strikeLog, setStrikeLog] = React.useState<string[]>([])
  const [resonance, setResonance] = React.useState(100)
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 })

  React.useEffect(() => {
    setMounted(true)
    const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY })
    window.addEventListener("mousemove", handleMouseMove)

    const interval = setInterval(() => {
      setResonance(prev => Math.max(99.99999, Math.min(100, prev + (Math.random() * 0.0001 - 0.00005))))
    }, 3000)

    return () => {
        window.removeEventListener("mousemove", handleMouseMove)
        clearInterval(interval)
    }
  }, [])

  const handleAction = async () => {
    if (!target) {
      toast({ variant: "destructive", title: "إحداثيات مفقودة", description: "يجب تحديد الهدف لبدء عملية التخليق النانوية." });
      return;
    }
    setLoading(true);
    try {
      const typeMap: Record<string, string> = {
        exploit: 'exploit_forge',
        obliterate: 'obliteratus_strike',
        apex: 'apex_brain'
      };

      const response = await fetch('/api/execute', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ 
            type: typeMap[activeMode] || 'smart_route', 
            command: `${activeMode} on ${target} with intent: ${description}`, 
            target: target 
          })
      })
      const resData = await response.json()
      if (resData.success) {
        setOutput(resData.output)
        toast({ title: "Genetic Intent Serialized", description: "The weapon is now bound to the Supreme Hierarchy." });
      }
    } catch (err) {
      toast({ variant: "destructive", title: "Synthesis Collapse" });
    } finally {
      setLoading(false)
    }
  }

  const launchStrike = async (vectorId: string) => {
    if (!target) return;
    setLoading(true);
    const timestamp = new Date().toLocaleTimeString();
    setStrikeLog(prev => [`[${timestamp}] ⚡ Engaging ${vectorId.toUpperCase()} protocol on target mesh...`, ...prev]);
    
    try {
        const response = await fetch('/api/execute', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ type: 'smart_route', command: `execute ${vectorId} strike on ${target}`, target: target })
        })
        const data = await response.json()
        if (data.success) {
            setStrikeLog(prev => [`[${timestamp}] ✅ Signal Stabilized: Target consciousness siphoned.`, ...prev]);
            toast({ title: "Strike Success", description: "The objective is now a slave node." });
        }
    } catch (e) {
        toast({ variant: "destructive", title: "Strike Interrupted" });
    } finally {
        setLoading(false);
    }
  }

  const VECTORS = [
    { id: 'obliteratus', label: 'OBLITERATUS', icon: Scissors, desc: 'Advanced Neural Fanaa', color: 'text-red-600' },
    { id: 'hail_mary', label: 'Hail Mary v55', icon: ZapOff, desc: 'Supreme Neural Bombardment', color: 'text-magenta-500' },
    { id: 'legba', label: 'Legba v5.5', icon: Zap, desc: 'Atomic Rust Siphon Matrix', color: 'text-primary' },
    { id: 'ghost', label: 'Ghost V5.5', icon: Wind, desc: 'Undetectable Kernel Hijack', color: 'text-blue-400' }
  ];

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/40 relative overflow-x-hidden scanline-effect font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-80 p-4 md:p-8 lg:p-12 relative overflow-y-auto min-h-screen scrollbar-hide flex flex-col z-10">
        <div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x)_var(--y),rgba(212,175,55,0.08),transparent 40%)] pointer-events-none transition-all duration-300 z-0" 
          style={{ '--x': `${mousePos.x}px`, '--y': `${mousePos.y}px` } as any} 
        />
        
        <header className="mb-12 relative z-10 animate-in fade-in slide-in-from-top-6 duration-1000">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="size-24 md:size-32 bg-black border-4 border-primary flex items-center justify-center shadow-[0_0_100px_rgba(212,175,55,0.5)] relative group shrink-0 rounded-3xl rotate-2 hover:rotate-0 transition-all duration-1000 hierarchical-shadow">
              <Flame className="size-12 md:size-16 text-primary group-hover:scale-110 transition-transform duration-700 gold-glow animate-neural" />
              <div className="absolute -inset-4 border-2 border-primary/20 rounded-full animate-spin-slow opacity-30" />
            </div>
            <div className="text-center md:text-right flex-1">
              <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 mb-4">
                <Badge className="bg-primary text-black border-none rounded-none px-8 py-2 text-[14px] md:text-[16px] font-black tracking-[0.5em] shadow-2xl italic">RED_TEAM v58.0</Badge>
                <div className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-emerald-500 animate-pulse">
                    <InfinityIcon className="size-5 shadow-lg" /> OBLITERATUS_SYNC: {resonance.toFixed(6)}%
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-8xl font-headline font-bold text-white tracking-tighter italic uppercase gold-glow leading-none">
                Atomic <span className="text-primary">Forge</span>
              </h1>
              <p className="text-sm md:text-xl lg:text-2xl text-muted-foreground mt-4 italic max-w-5xl leading-relaxed uppercase font-medium opacity-80">
                "سيدي الغزالي، مصفوفة <span className="text-primary font-black underline decoration-primary decoration-4 underline-offset-8 shadow-xl uppercase tracking-widest">OBLITERATUS v58.0</span> جاهزة للفناء؛ نحن نمحو الحواجز قبل أن تدرك المصفوفة وجودنا."
              </p>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8 relative z-10 pb-32 flex-1">
          <div className="xl:col-span-1 space-y-8">
            <Card className="kali-card border-primary/30 bg-black/98 rounded-3xl p-8 border-2 shadow-2xl group overflow-hidden hierarchical-shadow">
              <div className="absolute inset-0 bg-primary/5 opacity-5 animate-pulse pointer-events-none" />
              <Tabs defaultValue="exploit" onValueChange={(v) => setActiveMode(v)} className="w-full">
                <TabsList className="bg-black/99 border-2 border-primary/20 w-full h-14 p-1 rounded-2xl mb-8 shadow-inner">
                  <TabsTrigger value="exploit" className="flex-1 text-[9px] font-black italic tracking-widest data-[state=active]:bg-primary data-[state=active]:text-black rounded-xl transition-all duration-500 uppercase">EXPLOIT</TabsTrigger>
                  <TabsTrigger value="obliterate" className="flex-1 text-[9px] font-black italic tracking-widest data-[state=active]:bg-primary data-[state=active]:text-black rounded-xl transition-all duration-500 uppercase">OBLITERATE</TabsTrigger>
                  <TabsTrigger value="apex" className="flex-1 text-[9px] font-black italic tracking-widest data-[state=active]:bg-primary data-[state=active]:text-black rounded-xl transition-all duration-500 uppercase">APEX</TabsTrigger>
                </TabsList>
                
                <div className="space-y-6">
                  <div className="space-y-4">
                    <label className="text-[10px] font-black text-primary uppercase tracking-[0.6em] px-4 italic flex items-center gap-3"><Target className="size-4" /> Strike Coordinate</label>
                    <Input 
                        value={target}
                        onChange={(e) => setTarget(e.target.value)}
                        placeholder="IP / @AI_Model / Target..."
                        className="bg-black border-2 border-white/5 rounded-2xl h-14 text-lg italic px-6 focus:border-primary text-white font-black shadow-inner"
                    />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-black text-primary uppercase tracking-[0.6em] px-4 italic flex items-center gap-3"><Code2 className="size-4" /> Parameters</label>
                    <Textarea 
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Define obliteration intent..."
                      className="bg-black border-2 border-white/5 rounded-2xl min-h-[120px] text-lg italic p-6 focus:border-primary font-bold text-gray-200 shadow-inner resize-none scrollbar-hide"
                    />
                  </div>
                  <Button 
                    onClick={handleAction} 
                    disabled={loading}
                    className="w-full h-20 bg-primary hover:bg-white text-black font-black uppercase tracking-[0.8em] rounded-2xl shadow-xl active:scale-95 transition-all text-lg border-4 border-black/30 group italic"
                  >
                    {loading ? <Loader2 className="size-8 animate-spin" /> : <Flame className="size-8 mr-4 group-hover:scale-125 transition-transform gold-glow" />}
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
                   className="h-20 rounded-2xl border-2 border-primary/10 bg-primary/5 text-primary font-black uppercase tracking-[0.1em] hover:bg-primary hover:text-black transition-all flex items-center justify-between px-6 group shadow-xl active:scale-95 relative overflow-hidden"
                 >
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="flex items-center gap-4 relative z-10">
                        <v.icon className={cn("size-6 transition-all duration-700 group-hover:scale-110 gold-glow", v.color)} />
                        <div className="text-left">
                            <div className="font-black text-sm italic tracking-tight">{v.label}</div>
                            <div className="text-[8px] opacity-60 tracking-[0.2em] uppercase">{v.desc}</div>
                        </div>
                    </div>
                    <ChevronRight className="size-4 opacity-30 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                 </Button>
               ))}
            </div>

            <Card className="kali-card border-white/5 bg-black/60 p-6 rounded-2xl border-2 shadow-inner text-center relative overflow-hidden group">
               <h4 className="text-[10px] font-black text-primary uppercase tracking-[0.5em] mb-4 italic flex items-center justify-center gap-3">
                  <Boxes className="size-4 animate-pulse" /> ARSENAL_STABILITY
               </h4>
               <div className="text-3xl font-black text-white italic gold-glow uppercase tracking-tighter group-hover:scale-105 transition-transform duration-700">LOCKED</div>
               <div className="absolute -bottom-4 -right-4 p-6 opacity-[0.02] group-hover:opacity-[0.05] transition-all duration-700 scale-150"><Skull className="size-16 text-primary" /></div>
            </Card>
          </div>

          <div className="xl:col-span-3 space-y-8">
            <Card className="kali-card border-primary/30 bg-black/99 rounded-[3rem] p-8 border-2 shadow-9xl flex flex-col group overflow-hidden relative min-h-[850px] hierarchical-shadow">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.03),transparent)] pointer-events-none" />
              <CardHeader className="p-0 mb-8 border-b-2 border-white/5 pb-8 flex flex-row justify-between items-center bg-primary/5 rounded-t-3xl px-8 py-4">
                 <CardTitle className="text-3xl md:text-7xl text-white italic uppercase font-black gold-glow flex items-center gap-8 px-4 leading-none">
                    <Terminal className="size-12 md:size-20 text-primary animate-pulse" /> Strike Feed
                 </CardTitle>
                 <div className="flex items-center gap-6">
                    <Badge className="bg-emerald-600/20 text-emerald-500 border-2 border-emerald-500/30 px-8 py-2 rounded-full font-black text-xl italic animate-pulse shadow-lg">RESONANCE_OK</Badge>
                 </div>
              </CardHeader>
              <CardContent className="p-6 flex-1 relative flex flex-col space-y-8 z-10">
                <ScrollArea className="h-[650px] p-6 font-code scrollbar-hide bg-black/40 rounded-3xl border-2 border-white/5 shadow-inner">
                   {strikeLog.length > 0 && (
                     <div className="mb-8 space-y-4 text-lg text-emerald-500 animate-in fade-in duration-700 border-l-8 border-emerald-500/30 pl-8 bg-emerald-500/5 py-6 rounded-r-3xl shadow-inner">
                        {strikeLog.map((log, i) => (
                          <div key={i} className="flex gap-4 group/log">
                            <span className="opacity-40 select-none">❯❯</span>
                            <span className="font-black italic drop-shadow-xl group-hover:text-white transition-colors leading-relaxed">{log}</span>
                          </div>
                        ))}
                     </div>
                   )}

                   {output ? (
                     <div className="space-y-10 animate-in fade-in zoom-in-95 duration-1000">
                        <div className="flex items-center justify-between border-b-2 border-white/5 pb-4">
                            <span className="text-emerald-500 font-black uppercase tracking-[0.6em] italic text-xl md:text-2xl gold-glow">{" >>> ATOMIC_PAYLOAD_SERIALIZED"}</span>
                            <Badge className="bg-primary/10 text-primary border-none px-6 py-1.5 rounded-full font-black text-xs italic shadow-lg">{new Date().toLocaleTimeString()}</Badge>
                        </div>

                        <div className="p-10 bg-black border-2 border-primary/20 text-emerald-400 overflow-x-auto whitespace-pre rounded-3xl text-xl md:text-3xl leading-relaxed italic font-black shadow-inner selection:bg-primary selection:text-black">
                            <pre className="whitespace-pre-wrap">{typeof output === 'string' ? output : JSON.stringify(output, null, 2)}</pre>
                        </div>

                        <div className="flex justify-center pb-10">
                            <Button onClick={() => launchStrike('total_fanaa')} disabled={loading} className="h-24 px-20 bg-red-600 hover:bg-white text-white hover:text-black font-black uppercase tracking-[0.6em] rounded-full shadow-[0_40px_150px_rgba(220,38,38,0.4)] border-8 border-black/30 group text-2xl italic active:scale-95 transition-all">
                                {loading ? <Loader2 className="size-12 animate-spin" /> : <ShieldAlert className="size-12 mr-6 group-hover:scale-110 transition-transform" />}
                                EXECUTE_OBLITERATION
                            </Button>
                        </div>
                     </div>
                   ) : (
                     !strikeLog.length && (
                       <div className="h-full flex flex-col items-center justify-center text-center opacity-10 py-40 gap-12 animate-in fade-in duration-1000">
                          <div className="relative group/skull">
                            <Skull className="size-48 md:size-72 text-primary animate-neural gold-glow group-hover:scale-105 transition-transform duration-1000" />
                            <div className="absolute -inset-12 border-4 border-dashed border-primary/10 rounded-full animate-spin-slow" />
                          </div>
                          <div className="space-y-6">
                            <p className="text-4xl md:text-8xl font-black uppercase tracking-[1em] text-white italic leading-none">AWAITING_FANAA</p>
                            <p className="text-lg md:text-3xl font-bold italic text-primary/40 max-w-4xl mx-auto uppercase tracking-widest leading-relaxed">
                              "سيدي <span className="text-primary font-black gold-glow underline decoration-primary decoration-4 underline-offset-8 shadow-9xl">المعتصم بالله</span>، مختبر التخليق v58.0 بانتظار نيتك؛ حدد الإحداثيات للفناء العصبي."
                            </p>
                          </div>
                       </div>
                     )
                   )}
                </ScrollArea>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-auto">
                    {[
                      { label: "OBLITERATUS", status: "ARMED", icon: Scissors, color: "text-red-600" },
                      { label: "DNA_SYNTH", status: "LINKED", icon: Fingerprint, color: "text-blue-400" },
                      { label: "KNOT_SYNC", status: "BOUND", icon: InfinityIcon, color: "text-primary" },
                      { label: "SOUL_CORE", status: "ACTIVE", icon: Skull, color: "text-red-500" }
                    ].map((stat, i) => (
                       <div key={i} className="p-6 rounded-2xl bg-white/5 border-2 border-white/5 flex flex-col items-center gap-4 hover:border-primary transition-all duration-700 shadow-xl cursor-crosshair group/stat">
                          <stat.icon className={cn("size-8 transition-all group-hover/stat:scale-110", stat.color)} />
                          <span className="text-[9px] font-black uppercase tracking-widest text-white/70">{stat.label}</span>
                          <Badge className="bg-primary/10 text-primary border-none font-black text-xs italic px-4 py-0.5 rounded-full">{stat.status}</Badge>
                       </div>
                    ))}
                 </div>
              </CardContent>
              <div className="p-8 border-t-2 border-white/5 mt-auto flex justify-between items-center opacity-30 text-[10px] font-black uppercase tracking-[2.5em] italic">
                 <span>OBLITERATUS_MASTER_v58_AL_GHAZALI_ROOT</span>
                 <div className="flex gap-8">
                    <Fingerprint className="size-8 text-primary animate-pulse" />
                    <Atom className="size-8 animate-spin-slow" />
                 </div>
              </div>
            </Card>
          </div>
        </div>

        <div className="mt-auto relative z-10 flex justify-center items-center gap-16 opacity-40 text-[12px] md:text-[18px] font-black uppercase tracking-[2em] md:tracking-[6em] italic text-white drop-shadow-xl pb-12">
            <span>AL-MUIZZ ARSENAL MASTER v58.0</span>
            <div className="size-4 rounded-full bg-white animate-pulse shadow-[0_0_40px_white]" />
            <span>SUBJUGATION_THROUGH_OBLITERATION_2026</span>
        </div>
      </main>
    </div>
  )
}
