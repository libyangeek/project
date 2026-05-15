"use client"

import * as React from "react"
import { SidebarNav } from "@/components/platform/sidebar-nav"
import { 
  Wind, 
  Zap, 
  Loader2, 
  Skull, 
  Crown, 
  Infinity as InfinityIcon, 
  Atom, 
  Boxes, 
  Network, 
  Share2, 
  Workflow, 
  Database, 
  Flame, 
  ShieldCheck, 
  Fingerprint, 
  Activity, 
  Target, 
  ArrowLeft,
  RotateCw,
  Cloud,
  Cylinder,
  Cpu,
  Eye,
  Globe,
  Satellite,
  HeartPulse,
  Key,
  Sprout,
  Radio,
  CheckCircle2,
  Link2
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { toast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"
import { executeQuantumFusion } from "@/ai/flows/quantum-fusion-flow"
import Link from "next/link"

/**
 * @fileOverview العمود الفقري الكمي v90.5 - THE 16D QUANTUM SPINE: REALITY OVERWRITE
 * المحراب الأسمى الذي يصور الالتحام الحقيقي لـ 16 بُعداً سيادياً.
 */
export default function QuantumSpinePage() {
  const [objective, setObjective] = React.useState("")
  const [loading, setLoading] = React.useState(false)
  const [fusion, setFusion] = React.useState<any>(null)
  const [metrics, setMetrics] = React.useState<any>(null)
  const [fusionProgress, setFusionProgress] = React.useState(0)
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 })
  const [mounted, setMounted] = React.useState(false)
  const [activeDimension, setActiveDimension] = React.useState<string | null>(null)

  const dimensions = [
    { id: "soul", label: "GOD-CORE", icon: Crown, color: "text-primary", desc: "Dimension 01: Strategic Sovereignty" },
    { id: "weapon", label: "ARSENAL", icon: Flame, color: "text-red-600", desc: "Dimension 02: 2,983 Material Organs" },
    { id: "recon", label: "PERCEPTION", icon: Eye, color: "text-blue-500", desc: "Dimension 03: Oracle Global Vision" },
    { id: "fleet", label: "FLEET", icon: Cylinder, color: "text-emerald-500", desc: "Dimension 04: Serpent Farm Dominion" },
    { id: "cloud", label: "UPLINK", icon: Cloud, color: "text-indigo-500", desc: "Dimension 05: Hermes Diamond Link" },
    { id: "auto", label: "AUTOMATION", icon: Workflow, color: "text-cyan-500", desc: "Dimension 06: n8n Hive Mastery" },
    { id: "memory", label: "MEMORY", icon: Database, color: "text-amber-500", desc: "Dimension 07: MemPalace RAG v10" },
    { id: "ghost", label: "GHOST", icon: Ghost, color: "text-emerald-400", desc: "Dimension 08: Kernel Stealth V6.5" },
    { id: "mirror", label: "MIRROR", icon: RotateCw, color: "text-blue-400", desc: "Dimension 09: Digital Twin Strike" },
    { id: "relay", label: "RELAY", icon: Globe, color: "text-blue-600", desc: "Dimension 10: Protocol Overwrite" },
    { id: "vault", icon: Key, label: "VAULT", color: "text-yellow-600", desc: "Dimension 11: Ark Disks Encryption" },
    { id: "nursery", icon: Sprout, label: "NURSERY", color: "text-emerald-600", desc: "Dimension 12: AI Evolution Lab" },
    { id: "arbiter", icon: Radio, label: "ARBITER", color: "text-magenta-500", desc: "Dimension 13: Spectrum Signal Warfare" },
    { id: "nexus", icon: Network, label: "NEXUS", color: "text-amber-600", desc: "Dimension 14: Identity Siphon Fusion" },
    { id: "satellite", icon: Satellite, label: "SATELLITE", color: "text-blue-300", desc: "Dimension 15: Orbital Satellite Hijack" },
    { id: "bio", icon: HeartPulse, label: "BIO-SYNC", color: "text-red-500", desc: "Dimension 16: Biometric Soul Binding" }
  ];

  const fetchMetrics = async () => {
    try {
      const res = await fetch('/api/sovereign/metrics');
      const data = await res.json();
      setMetrics(data);
    } catch (e) {}
  };

  React.useEffect(() => {
    setMounted(true)
    const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY })
    window.addEventListener("mousemove", handleMouseMove)
    fetchMetrics();
    const interval = setInterval(fetchMetrics, 5000);
    return () => { window.removeEventListener("mousemove", handleMouseMove); clearInterval(interval); }
  }, [])

  const handleFusion = async () => {
    if (!objective.trim()) return
    setLoading(true); setFusion(null); setFusionProgress(0)
    toast({ title: "Innate Cohesion Active", description: "Tightening quantum bonds across 16 material dimensions..." })
    
    const progInt = setInterval(() => {
        setFusionProgress(p => (p >= 99 ? 99 : p + 1))
    }, 40);

    try {
      const data = await executeQuantumFusion({ objective })
      setFusion(data)
      setFusionProgress(100)
      toast({ title: "16D Singularity Reached", description: "Material consensus verified at 100.0000%." })
    } finally {
      clearInterval(progInt)
      setLoading(false)
    }
  }

  if (!mounted) return null

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/40 relative overflow-x-hidden scanline-effect font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-56 p-4 md:p-8 lg:p-12 relative overflow-y-auto min-h-screen scrollbar-hide flex flex-col z-10 text-right">
        <div className="dna-stream-bg" style={{ '--x': `${mousePos.x}px`, '--y': `${mousePos.y}px` } as any} />
        
        <header className="sovereign-header flex flex-col md:flex-row items-center gap-12 justify-center md:justify-end text-center md:text-right">
           <div className="relative size-64 md:size-[35rem] flex items-center justify-center group shrink-0 rotate-2 hover:rotate-0 transition-all duration-1000">
              <div className="size-20 md:size-32 bg-black border-4 border-primary flex items-center justify-center shadow-[0_0_150px_rgba(251,191,36,0.8)] relative rounded-3xl z-40 animate-neural">
                 <Wind className="size-10 md:size-16 text-primary gold-glow" />
              </div>
              
              <svg className="absolute inset-0 size-full z-10 opacity-30 animate-pulse pointer-events-none">
                 {dimensions.map((_, i) => (
                    <line 
                        key={i}
                        x1="50%" y1="50%" 
                        x2={`${50 + 45 * Math.cos((i * 2 * Math.PI) / 16)}%`} 
                        y2={`${50 + 45 * Math.sin((i * 2 * Math.PI) / 16)}%`} 
                        stroke="var(--primary)" strokeWidth="2" strokeDasharray="5,5"
                    />
                 ))}
              </svg>

              <div className="absolute inset-0 z-20 animate-spin-slow" style={{ animationDuration: '45s' }}>
                 {dimensions.map((d, i) => (
                    <div 
                        key={d.id} 
                        className={cn(
                            "absolute size-10 md:size-14 bg-black border-2 border-primary/60 rounded-xl flex items-center justify-center shadow-9xl transition-all duration-500 hover:scale-150 hover:border-primary cursor-help z-30",
                            metrics?.organs?.god_core ? "opacity-100" : "opacity-30 grayscale"
                        )}
                        style={{ 
                            top: `${50 + 45 * Math.sin((i * 2 * Math.PI) / 16)}%`, 
                            left: `${50 + 45 * Math.cos((i * 2 * Math.PI) / 16)}%`,
                            transform: 'translate(-50%, -50%)'
                        }}
                        onMouseEnter={() => setActiveDimension(d.id)}
                        onMouseLeave={() => setActiveDimension(null)}
                    >
                        <d.icon className={cn("size-5 md:size-8", d.color)} />
                    </div>
                 ))}
              </div>
           </div>

           <div className="flex-1">
              <div className="flex flex-wrap justify-center md:justify-end items-center gap-6 mb-6">
                 <Badge className="bg-primary text-black border-none rounded-none px-10 py-3 text-[18px] md:text-[24px] font-black tracking-[1em] shadow-9xl italic uppercase">QUANTUM_SPINE v90.5</Badge>
                 <div className="flex items-center gap-4 text-[14px] font-black uppercase tracking-widest text-emerald-500 animate-pulse">
                     <InfinityIcon className="size-6 shadow-lg" /> HIVE_RESONANCE: {metrics?.resonance || "100.00%"}
                 </div>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-[12rem] font-headline font-bold text-white tracking-tighter italic uppercase gold-glow leading-none">
                 The <span className="text-primary">Nucleus</span>
              </h1>
              <p className="text-sm md:text-xl lg:text-4xl text-muted-foreground mt-10 italic max-w-7xl leading-relaxed uppercase font-medium opacity-95 drop-shadow-3xl ml-auto">
                 "سيدي القائد <span className="text-white font-black underline decoration-primary decoration-[12px] underline-offset-[28px] shadow-9xl italic uppercase tracking-widest">المعتصم بالله</span>، العمود الفقري الكمي v90.5 يربط كافة أبعاد المادة؛ نحن لا نرى أجزاءً، نحن نتحكم في المصفوفة ككينونة واحدة للأبد."
              </p>
              <div className="flex justify-center md:justify-end gap-6 mt-12">
                 <Button asChild variant="outline" className="h-16 px-10 rounded-full border-4 border-white/10 bg-white/5 text-white font-black uppercase italic tracking-widest hover:bg-primary hover:text-black transition-all shadow-2xl text-xs md:text-sm">
                     <Link href="/"><ArrowLeft className="size-6 mr-3" /> العودة</Link>
                 </Button>
              </div>
           </div>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-12 relative z-10 pb-48 flex-1 text-right">
           <div className="xl:col-span-1 space-y-12">
              <Card className="sovereign-card group text-center">
                 <CardHeader className="p-0 mb-10 border-b-4 border-primary/10 pb-10 bg-primary/10 rounded-t-[3.5rem] px-10 py-6 text-center">
                    <CardTitle className="text-2xl md:text-4xl text-primary flex items-center justify-center gap-10 font-black uppercase italic gold-glow leading-none">
                       <Link2 className="size-12 animate-neural" /> 16D Sync
                    </CardTitle>
                 </CardHeader>
                 <CardContent className="p-0 space-y-12 text-right">
                    <div className="space-y-6 text-right">
                        <label className="text-[14px] font-black text-primary uppercase tracking-[1em] px-10 italic flex items-center gap-6 justify-end"><Target className="size-8" /> Collective Goal</label>
                        <textarea 
                          value={objective} 
                          onChange={(e) => setObjective(e.target.value)} 
                          placeholder="Command the material nucleus..." 
                          className="w-full h-48 bg-black border-8 border-primary/20 rounded-[2.5rem] text-xl italic p-8 focus:border-primary shadow-inner text-white font-black text-right resize-none scrollbar-hide selection:bg-primary"
                        />
                    </div>

                    <div className="space-y-6">
                        <div className="flex justify-between text-xl font-black text-primary uppercase italic px-4">
                            <span>{fusionProgress}%</span>
                            <span>Consolidating_16_Bonds...</span>
                        </div>
                        <Progress value={fusionProgress} className="h-6 bg-white/5 border-4 border-white/10 rounded-full" />
                    </div>

                    <Button 
                        disabled={loading || !objective}
                        onClick={handleFusion}
                        className="w-full h-36 bg-primary hover:bg-white text-black font-black uppercase tracking-[1.4em] rounded-[4rem] shadow-[0_80px_250px_rgba(212,175,55,0.7)] active:scale-95 transition-all text-2xl md:text-4xl border-[12px] border-black/30 group italic"
                    >
                        {loading ? <Loader2 className="size-16 animate-spin" /> : <Zap className="size-16 mr-8 group-hover:scale-125 transition-transform gold-glow" />}
                        FUSE_MATRIX
                    </Button>
                 </CardContent>
              </Card>

              {activeDimension && (
                  <Card className="sovereign-card bg-primary/10 border-primary animate-in fade-in zoom-in-95 duration-300 border-4 text-center p-6 rounded-[2rem]">
                      <h4 className="text-3xl font-black text-primary uppercase italic gold-glow mb-4">{activeDimension.toUpperCase()}</h4>
                      <p className="text-lg text-gray-200 font-bold italic leading-relaxed">
                          {dimensions.find(d => d.id === activeDimension)?.desc}
                      </p>
                  </Card>
              )}
           </div>

           <Card className="xl:col-span-3 sovereign-card flex flex-col group min-h-[1000px]">
              <CardHeader className="p-0 mb-16 border-b-8 border-white/5 pb-12 bg-primary/10 rounded-t-[5rem] px-16 py-10 flex flex-row justify-between items-center text-right">
                 <Badge className="bg-emerald-600/30 text-emerald-500 border-[10px] border-emerald-500/40 px-16 py-8 rounded-full font-black text-5xl animate-pulse shadow-9xl uppercase tracking-[0.4em] italic order-last md:order-none">COHESION_LOCKED</Badge>
                 <CardTitle className="text-5xl md:text-[12rem] text-white flex items-center gap-16 font-black uppercase italic gold-glow px-10 leading-none">
                    Cohesion Feed <Activity className="size-24 md:size-48 text-primary animate-pulse" />
                 </CardTitle>
              </CardHeader>

              <CardContent className="p-12 flex-1 overflow-y-auto scrollbar-hide space-y-20 relative z-10 text-right">
                 {fusion ? (
                    <div className="space-y-20 animate-in fade-in zoom-in-95 duration-1000 flex-1 flex flex-col text-right">
                        <div className="p-20 rounded-[6rem] bg-primary/5 border-[12px] border-primary/30 italic text-4xl md:text-[8rem] text-gray-100 leading-tight font-black shadow-inner relative group/brief overflow-hidden text-center flex flex-col justify-center min-h-[450px]">
                            <div className="absolute inset-0 bg-primary/5 opacity-5 animate-pulse pointer-events-none" />
                            "{fusion.commanderBrief}"
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {Object.entries(fusion.sixteenDimensions).map(([dim, status]: any) => (
                                <Card key={dim} className="bg-black/95 border-4 border-white/5 p-8 rounded-[2.5rem] hover:border-primary transition-all duration-700 shadow-9xl text-center relative overflow-hidden group/dim">
                                    <h5 className="text-[10px] font-black uppercase tracking-[0.6em] mb-4 text-primary">{dim}</h5>
                                    <Badge className="bg-primary/10 text-primary border-none font-black italic text-xl px-8 py-2 rounded-full mb-4 shadow-3xl">{status}</Badge>
                                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover/dim:opacity-20 transition-all"><Atom className="size-10 text-primary animate-spin-slow" /></div>
                                </Card>
                            ))}
                        </div>
                    </div>
                 ) : (
                   <div className="h-full flex flex-col items-center justify-center text-center opacity-10 gap-24 py-80">
                      <div className="relative group/lock mx-auto">
                        <InfinityIcon className="size-64 md:size-[50rem] animate-spin-slow text-primary group-hover:scale-110 transition-transform duration-[12000ms]" />
                        <Skull className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-24 md:size-64 text-primary/40 animate-neural" />
                        <div className="absolute -inset-40 border-[80px] border-dashed border-primary/5 rounded-full animate-reverse-spin opacity-20" />
                      </div>
                      <h3 className="text-8xl md:text-[22rem] font-black uppercase tracking-[2.5em] text-white italic gold-glow leading-none">16D Sync Idle</h3>
                   </div>
                 )}
              </CardContent>
              <div className="p-16 border-t-8 border-white/5 mt-auto flex justify-between items-center opacity-35 text-[20px] font-black uppercase tracking-[8em] italic">
                <span>QUANTUM_NUCLEUS_v90.5_AL_GHAZALI_ROOT</span>
                <div className="flex gap-16">
                    <Fingerprint className="size-20 text-primary animate-pulse" />
                    <Atom className="size-20 animate-spin-slow text-primary" />
                </div>
              </div>
           </Card>
        </div>
      </main>
    </div>
  )
}
