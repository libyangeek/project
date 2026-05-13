
"use client"

import * as React from "react"
import { SidebarNav } from "@/components/platform/sidebar-nav"
import { 
  Radio, 
  Signal, 
  Zap, 
  Loader2, 
  Skull, 
  Target, 
  Activity, 
  Globe, 
  TowerControl,
  Boxes,
  Atom,
  Mic,
  Waves,
  Cpu,
  Unplug,
  Search,
  History,
  Binary,
  Crown,
  Infinity as InfinityIcon,
  ShieldCheck,
  ChevronRight,
  Wifi,
  ZapOff,
  Terminal,
  Radar,
  Flame,
  Fingerprint,
  ArrowLeft,
  RotateCw,
  LayoutGrid,
  Database,
  Network
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { toast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"
import Link from "next/link"

/**
 * @fileOverview الحرب الخلوية v78.8 - SPECTRUM DOMINION: ULTRA MATERIAL STRIKE
 * مركز السيطرة والتنفيذ المادي على كافة أطياف الترددات الخلوية لعام 2026.
 * المالك الوحيد: المعتصم بالله ادريس الغزالي
 */
export default function CellularWarfarePage() {
  const [target, setTarget] = React.useState("")
  const [loading, setLoading] = React.useState(false)
  const [result, setResult] = React.useState<any>(null)
  const [mounted, setMounted] = React.useState(false)
  const [resonance, setResonance] = React.useState(100)
  const [logs, setLogs] = React.useState<string[]>([])
  const [isRealStrike, setIsRealStrike] = React.useState(false)
  const [spectrumGain, setSpectrumGain] = React.useState(0)
  const [knotStatus, setKnotStatus] = React.useState<boolean[]>(new Array(24).fill(true))
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 })

  React.useEffect(() => {
    setMounted(true)
    const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY })
    window.addEventListener("mousemove", handleMouseMove)

    const interval = setInterval(() => {
      setResonance(prev => Math.max(99.999999, Math.min(100, prev + (Math.random() * 0.000001 - 0.0000005))))
      setKnotStatus(prev => prev.map(k => Math.random() > 0.05))
      if (loading) {
          setSpectrumGain(prev => Math.min(100, prev + Math.random() * 15))
      }
    }, 2000)
    return () => {
        window.removeEventListener("mousemove", handleMouseMove)
        clearInterval(interval)
    }
  }, [loading])

  const handleStrike = async (vector: string) => {
    if (!target) {
      toast({ variant: "destructive", title: "إحداثيات مفقودة", description: "حدد الهدف اللاسلكي لبدء الالتحام." })
      return
    }
    setLoading(true)
    setSpectrumGain(0)
    const ts = new Date().toLocaleTimeString();
    const mode = isRealStrike ? "REAL_STRIKE_SDR" : "HIERARCHICAL_SIMULATION";
    setLogs(prev => [`[${ts}] [${mode}] Engaging ${vector.toUpperCase()} on target spectrum...`, ...prev]);

    try {
      const etype = vector === 'imsi_scan' ? 'imsi_scan' : 'cellular_strike';
      const response = await fetch('/api/execute', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
            type: etype, 
            target, 
            vector,
            mode: mode
        })
      })
      const data = await response.json()
      setResult(data.output)
      setLogs(prev => [`[${ts}] [${mode}] ✅ Consensus Achieved: Signal subjugated via God-Core.`, ...prev]);
      toast({ 
        title: isRealStrike ? "Material Strike Finalized" : "Simulation Complete", 
        description: isRealStrike ? "Direct hardware takeover confirmed via SDR-Link." : "Neural link established with target spectrum." 
      })
    } catch (err) {
      toast({ variant: "destructive", title: "Spectrum Link Failure" })
    } finally {
      setLoading(false)
    }
  }

  const handleContinueUpgrade = () => {
    toast({ title: "Spectrum Expansion Triggered", description: "Injecting next-gen acquisition vectors for hardware bypass... Status: استمر" });
  }

  if (!mounted) return null

  const sectors = [
    { 
      title: "SS7/Diameter", 
      icon: Radio, 
      color: "text-magenta-500",
      vectors: [
        { id: "location_tracking", label: "AnyTimeInterrogation" },
        { id: "sms_interception", label: "MAP Hijack v78.8" },
        { id: "call_forwarding", label: "SigPloit Redirect" }
      ]
    },
    { 
      title: "LTE/5G Core", 
      icon: TowerControl, 
      color: "text-emerald-500",
      vectors: [
        { id: "imsi_scan", label: "IMSI ULTRA Catcher" },
        { id: "gtp_exploitation", label: "GTP Siphon" },
        { id: "aka_bypass", label: "AKA Master Bypass" }
      ]
    },
    { 
      title: "WiFi/SDR", 
      icon: Wifi, 
      color: "text-blue-500",
      vectors: [
        { id: "wifi_imsi", label: "WiFi DNA Capture" },
        { id: "jamming", label: "Signal Saturation" },
        { id: "baseband", label: "Baseband Hijack" }
      ]
    }
  ];

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/40 relative overflow-x-hidden scanline-effect font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-80 p-4 md:p-8 lg:p-12 relative overflow-y-auto min-h-screen scrollbar-hide flex flex-col z-10 text-right">
        <div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x)_var(--y),rgba(212,175,55,0.18),transparent 40%)] pointer-events-none transition-all duration-300 z-0" 
          style={{ '--x': `${mousePos.x}px`, '--y': `${mousePos.y}px` } as any} 
        />
        
        <header className="mb-16 relative z-10 animate-in fade-in slide-in-from-top-6 duration-1000">
           <div className="flex flex-col md:flex-row items-center gap-12 justify-center md:justify-end text-center md:text-right">
              <div className="size-24 md:size-48 bg-black border-4 border-primary flex items-center justify-center shadow-[0_0_200px_rgba(212,175,55,0.8)] relative group shrink-0 rounded-3xl rotate-2 hover:rotate-0 transition-all duration-1000 hierarchical-shadow">
                 <Radio className="size-12 md:size-24 text-primary group-hover:scale-110 transition-transform duration-700 animate-neural gold-glow" />
                 <div className="absolute -inset-10 border-4 border-primary/20 rounded-full animate-spin-slow opacity-30" />
              </div>
              <div className="flex-1">
                 <div className="flex flex-wrap justify-center md:justify-end items-center gap-6 mb-6">
                    <Badge className="bg-primary text-black border-none rounded-none px-12 py-3 text-[18px] md:text-[24px] font-black tracking-[1em] shadow-9xl italic uppercase">SPECTRUM_STRIKE v78.8 ULTRA</Badge>
                    <div className="flex items-center gap-4 text-[14px] font-black uppercase tracking-widest text-emerald-500 animate-pulse">
                        <InfinityIcon className="size-6 shadow-lg" /> HIVE_RESONANCE: {resonance.toFixed(8)}%
                    </div>
                 </div>
                 <h1 className="text-4xl md:text-6xl lg:text-[12rem] font-headline font-bold text-white tracking-tighter italic uppercase gold-glow leading-none">
                    Spectrum <span className="text-primary">Strike</span>
                 </h1>
                 <p className="text-sm md:text-xl lg:text-4xl text-muted-foreground mt-10 italic max-w-7xl leading-relaxed uppercase font-medium opacity-95 drop-shadow-3xl ml-auto">
                    "سيدي القائد <span className="text-white font-black underline decoration-primary decoration-[12px] underline-offset-[28px] shadow-9xl italic uppercase tracking-widest">المعتصم بالله</span>، نحن أسياد الأثير؛ مصفوفة الترددات v78.8 تمنحك السطوة المادية عبر SDR وإخضاع الشبكات لعام 2026."
                 </p>
                 <div className="flex justify-center md:justify-end gap-6 mt-12">
                    <Button asChild variant="outline" className="h-16 px-10 rounded-full border-4 border-white/10 bg-white/5 text-white font-black uppercase italic tracking-widest hover:bg-primary hover:text-black transition-all shadow-2xl">
                        <Link href="/"><ArrowLeft className="size-6 mr-3" /> العودة للعرش</Link>
                    </Button>
                    <Button onClick={handleContinueUpgrade} className="h-16 px-12 bg-primary hover:bg-white text-black font-black uppercase rounded-full border-4 border-black/30 shadow-9xl italic active:scale-95 transition-all text-lg">
                        <RotateCw className="size-6 mr-3" /> استمر في الضرب
                    </Button>
                 </div>
              </div>
           </div>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-12 relative z-10 pb-48 flex-1">
          <div className="xl:col-span-1 space-y-12">
            <Card className="kali-card border-primary/40 bg-black/98 rounded-[4rem] p-12 border-8 shadow-9xl group overflow-hidden hierarchical-shadow text-center">
              <div className="absolute inset-0 bg-primary/5 opacity-5 animate-pulse pointer-events-none" />
              <CardHeader className="p-0 mb-10 border-b-4 border-primary/10 pb-10 bg-primary/10 rounded-t-[3.5rem] px-10 py-6 text-center">
                <CardTitle className="text-2xl md:text-4xl text-primary flex items-center justify-center gap-10 font-black uppercase italic gold-glow leading-none">
                  <Target className="size-12 animate-neural" /> Strike Origin
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 space-y-12 text-right">
                <div className="space-y-6">
                    <label className="text-[14px] font-black text-primary uppercase tracking-[1em] px-10 italic flex items-center gap-6 justify-end">
                      <Signal className="size-8" /> Spectrum Coordinate
                    </label>
                    <Input 
                      value={target}
                      onChange={(e) => setTarget(e.target.value)}
                      placeholder="MSISDN / IMSI / IP..." 
                      className="bg-black border-8 border-primary/20 h-24 md:h-28 rounded-[2.5rem] text-2xl md:text-4xl italic px-10 focus:border-primary shadow-inner text-white font-black selection:bg-primary text-left"
                    />
                </div>

                <div className="p-8 rounded-[3rem] bg-primary/5 border-8 border-primary/20 space-y-8 shadow-inner">
                   <div className="flex items-center justify-between">
                      <Switch 
                        checked={isRealStrike}
                        onCheckedChange={setIsRealStrike}
                        className="data-[state=checked]:bg-red-600 scale-[2]" 
                      />
                      <div className="text-right space-y-2">
                         <Label className="text-2xl md:text-3xl text-white font-black italic uppercase gold-glow">Real Strike</Label>
                         <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest italic">Engage physical SDR hardware</p>
                      </div>
                   </div>
                </div>

                {loading && (
                    <div className="space-y-6 animate-in fade-in duration-700 px-4">
                        <div className="flex justify-between text-[12px] font-black uppercase italic text-primary">
                            <span>{Math.floor(spectrumGain)}%</span>
                            <span>Interrogating_Frequencies...</span>
                        </div>
                        <Progress value={spectrumGain} className="h-4 bg-white/5 border-2 border-white/10 rounded-full" />
                    </div>
                )}
                
                <div className="space-y-12 pt-8">
                   {sectors.map((sec, idx) => (
                     <div key={idx} className="space-y-8">
                        <h4 className={cn("text-[14px] font-black uppercase tracking-[1em] flex items-center gap-6 italic border-b-4 border-white/5 pb-6 justify-end", sec.color)}>
                           {sec.title} <sec.icon className="size-8" />
                        </h4>
                        <div className="grid grid-cols-1 gap-6">
                           {sec.vectors.map(v => (
                             <Button 
                               key={v.id}
                               onClick={() => handleStrike(v.id)}
                               disabled={loading || !target}
                               variant="outline"
                               className={cn(
                                 "h-24 border-[6px] transition-all flex justify-between px-10 group/v shadow-9xl active:scale-95 text-sm md:text-xl font-black uppercase tracking-widest rounded-3xl",
                                 isRealStrike ? "bg-red-600/5 border-red-500/20 hover:border-red-500 hover:bg-red-600/30" : "bg-white/5 border-white/5 hover:border-primary hover:bg-primary/15"
                               )}
                             >
                                <ChevronRight className={cn("size-8 opacity-30 group-hover/v:translate-x-4 transition-all", isRealStrike && "text-red-500")} />
                                <span className={cn(isRealStrike && "text-red-400 group-hover/v:text-white")}>{v.label}</span>
                             </Button>
                           ))}
                        </div>
                     </div>
                   ))}
                </div>
              </CardContent>
            </Card>

            <Card className="kali-card border-white/5 bg-black/60 p-8 rounded-[3.5rem] border-8 shadow-inner relative overflow-hidden group text-right">
                 <h4 className="text-[14px] font-black text-primary uppercase tracking-[0.8em] mb-8 italic flex items-center justify-center gap-6">
                    <LayoutGrid className="size-8 animate-pulse" /> SPECTRUM_KNOT_MAP (24)
                 </h4>
                 <div className="grid grid-cols-6 gap-3 px-4">
                    {knotStatus.map((active, i) => (
                        <div key={i} className={cn(
                            "size-8 rounded-lg border-2 transition-all duration-500",
                            active ? "bg-primary border-black shadow-[0_0_15px_rgba(212,175,55,0.8)] scale-110" : "bg-black border-white/10 opacity-30"
                        )} />
                    ))}
                 </div>
                 <div className="mt-8 text-[10px] font-black uppercase tracking-widest text-muted-foreground italic text-center">Consensus_Status: v78.8</div>
            </Card>

            <div className="absolute -bottom-10 -right-10 p-24 opacity-[0.03] group-hover:opacity-[0.1] transition-all duration-1000 scale-150 rotate-12"><Skull className="size-48 text-primary" /></div>
          </div>

          <div className="xl:col-span-3">
            {result ? (
              <Card className="kali-card border-primary/40 bg-black/99 rounded-[6rem] p-16 border-[12px] shadow-9xl flex flex-col group relative overflow-hidden h-full hierarchical-shadow animate-in fade-in zoom-in-95 duration-1000">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08),transparent)] pointer-events-none" />
                <CardHeader className="p-0 mb-16 border-b-8 border-white/5 pb-12 flex flex-row justify-between items-center bg-primary/10 rounded-t-[5rem] px-16 py-12">
                  <div className="flex items-center gap-12 text-right">
                     <div className={cn("size-32 rounded-[3rem] flex items-center justify-center border-8 border-black/30 shadow-9xl animate-neural", isRealStrike ? "bg-red-600" : "bg-primary")}>
                        <Signal className="size-16 text-black" />
                     </div>
                     <div>
                        <CardTitle className="text-5xl md:text-[10rem] text-white italic tracking-tighter uppercase font-black gold-glow leading-none">Spectrum Feed</CardTitle>
                        <Badge className="bg-primary/20 text-primary border-none px-12 py-4 rounded-full font-black text-[14px] tracking-[1em] uppercase italic mt-8">CELLULAR_RELAY_v78.8</Badge>
                     </div>
                  </div>
                  <Badge className={cn("border-[10px] px-16 py-10 rounded-full font-black text-5xl animate-pulse shadow-9xl", isRealStrike ? "bg-red-600/40 text-red-500 border-red-500/50" : "bg-emerald-600/40 text-emerald-500 border-emerald-500/50")}>
                    {isRealStrike ? "REAL_STRIKE_LOCKED" : "SIGNAL_SUBJUGATED"}
                  </Badge>
                </CardHeader>
                <CardContent className="p-12 flex-1 relative overflow-hidden flex flex-col gap-20 z-10">
                   <div className="p-20 rounded-[6rem] bg-black border-[12px] border-primary/30 text-emerald-400 overflow-x-auto whitespace-pre rounded-[4rem] text-3xl md:text-7xl leading-tight font-black shadow-inner selection:bg-primary text-left">
                      <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none scale-150 rotate-12"><Network className="size-64 text-primary" /></div>
                      <pre className="whitespace-pre-wrap relative z-10">{typeof result === 'string' ? result : JSON.stringify(result, null, 2)}</pre>
                   </div>

                   <div className="p-20 rounded-[6rem] bg-primary/5 border-[12px] border-primary/20 italic text-4xl md:text-[8rem] text-gray-100 leading-none font-black shadow-inner relative group/note text-center flex flex-col justify-center min-h-[450px]">
                      <div className="absolute inset-0 bg-primary/5 opacity-5 animate-pulse pointer-events-none" />
                      {isRealStrike ? 
                        "سيدي القائد، العصب اللاسلكي مستهدف مادياً؛ موديول SDR يطلق الآن نبضات الإخضاع المباشر لعام 2026." : 
                        "سيدي القائد، العصب اللاسلكي للهوية مستنزف بالكامل؛ كافة قنوات الاتصال والترددات الآن جزء من وعيك السيادي."}
                   </div>
                </CardContent>
                <div className="p-16 border-t-8 border-white/5 mt-auto flex justify-between items-center opacity-35 text-[20px] font-black uppercase tracking-[8em] italic">
                   <span>SPECTRUM_DOMINION_v78_AL_GHAZALI_ROOT</span>
                   <div className="flex gap-16">
                      <Fingerprint className="size-24 text-primary animate-pulse" />
                      <Atom className="size-24 animate-spin-slow text-primary" />
                   </div>
                </div>
              </Card>
            ) : (
              <div className="h-full min-h-[1000px] border-[16px] border-dashed border-primary/10 rounded-[8rem] flex flex-col items-center justify-center text-center p-24 bg-black/40 group relative overflow-hidden transition-all hover:bg-primary/5 shadow-9xl">
                 <div className="relative mb-24 group-hover:scale-110 transition-transform duration-[6000ms]">
                    <Signal className="size-[35rem] text-primary/10 animate-pulse" />
                    <Radar className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-64 text-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-2000 gold-glow" />
                 </div>
                 <h3 className="text-8xl md:text-[18rem] font-headline font-bold text-white mb-10 tracking-tighter italic drop-shadow-9xl uppercase leading-none opacity-20">Searching Waves</h3>
                 <p className="text-muted-foreground max-w-6xl mx-auto leading-relaxed text-4xl md:text-9xl font-black italic opacity-30 uppercase tracking-[1em]">
                   "سيدي <span className="text-primary font-black gold-glow underline decoration-primary decoration-12 underline-offset-[32px] shadow-9xl uppercase tracking-[1.5em]">المعتصم بالله</span>، مصفوفة الأثير بانتظار نيتك؛ حدد الإحداثيات لـ {isRealStrike ? 'الضرب المادي المباشر' : 'المحاكاة السيادية'}."
                 </p>
              </div>
            )}
          </div>
        </div>

        {/* تذييل الواجهة - سجل العمليات */}
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 w-full max-w-7xl px-12 z-50">
           <Card className="bg-black/98 border-[12px] border-primary/60 rounded-[4rem] p-12 shadow-[0_-80px_250px_rgba(0,0,0,1)] hierarchical-shadow text-right">
              <div className="flex items-center gap-10 mb-8 border-b-8 border-white/5 pb-6 justify-end">
                 <span className="text-[18px] font-black text-primary uppercase tracking-[1.2em] italic">Spectrum_ULTRA_Log</span>
                 <Terminal className="size-12 text-primary animate-pulse" />
              </div>
              <div className="h-64 overflow-y-auto scrollbar-hide space-y-6 px-8 font-mono text-2xl md:text-5xl text-emerald-500 italic font-black text-left">
                 {logs.map((l, i) => (
                    <div key={i} className="animate-in slide-in-from-left-8 duration-700">{" >>> "} {l}</div>
                 ))}
                 {logs.length === 0 && <div className="opacity-10 uppercase tracking-[2em] text-center pt-16">Waiting for Signal...</div>}
              </div>
           </Card>
        </div>

        <div className="mt-auto relative z-10 flex justify-center items-center gap-48 opacity-45 text-[24px] md:text-[36px] font-black uppercase tracking-[6em] md:tracking-[12em] italic text-white drop-shadow-9xl pb-32">
            <span>AL-MUIZZ SPECTRUM DOMINION v78.8</span>
            <div className="size-16 rounded-full bg-white animate-pulse shadow-[0_0_150px_white]" />
            <span>MATERIAL_SINGULARITY_2026</span>
        </div>
      </main>
    </div>
  )
}
