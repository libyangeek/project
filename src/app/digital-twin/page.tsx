
"use client"

import * as React from "react"
import { SidebarNav } from "@/components/platform/sidebar-nav"
import { 
  Workflow, 
  Play, 
  ShieldCheck, 
  Terminal as TerminalIcon,
  Search,
  Activity,
  Zap,
  Box,
  Cpu,
  RefreshCcw,
  Bug,
  Settings,
  Loader2,
  Globe,
  Skull,
  Atom,
  Boxes,
  Users,
  Binary,
  Fingerprint,
  Crown,
  Infinity as InfinityIcon,
  ChevronRight,
  Wind
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { toast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"

/**
 * @fileOverview محاكي السطوة v78.0 - THE GLOBAL MIRROR: ULTRA SIMULATION
 * يتيح للقائد محاكاة الضربات عبر الـ 14 عنقوداً عالمياً بنبض المادة لعام 2026.
 * المالك الوحيد: المعتصم بالله ادريس الغزالي
 */
export default function DigitalTwinPage() {
  const [mounted, setMounted] = React.useState(false)
  const [isSimulating, setIsSimulating] = React.useState(false)
  const [progress, setProgress] = React.useState(0)
  const [target, setTarget] = React.useState("")
  const [log, setLog] = React.useState<{msg: string, node: string}[]>([])
  const [selectedClusters, setSelectedClusters] = React.useState<string[]>(["Riyadh", "Cairo", "London", "Dubai", "New York"])
  const [resonance, setResonance] = React.useState(100)

  const clusters = ["Riyadh", "Cairo", "London", "Dubai", "New York", "Tokyo", "Berlin", "Singapore", "Sydney", "Moscow", "Paris", "Toronto", "Seoul", "Mumbai"]

  React.useEffect(() => {
    setMounted(true)
    const interval = setInterval(() => {
      setResonance(prev => Math.max(99.999999, Math.min(100, prev + (Math.random() * 0.000001 - 0.0000005))));
    }, 3000);
    return () => clearInterval(interval);
  }, [])

  const startSimulation = () => {
    if (!target) {
        toast({ variant: "destructive", title: "Missing Coordinate", description: "Define a target for the ULTRA hive simulation." })
        return
    }
    setIsSimulating(true)
    setProgress(0)
    setLog([{ msg: "Initializing Material Virtualization v78.0...", node: "Alpha-Core" }])
    
    const interval = setInterval(() => {
        setProgress(prev => {
            if (prev >= 100) {
                clearInterval(interval)
                setIsSimulating(false)
                setLog(l => [{ msg: "Global Consensus: VECTORS VERIFIED. MATERIAL_SINGULARITY_READY.", node: "ULTRA_HIVE" }, ...l])
                toast({ title: "Simulation 100% Success", description: "All 14 clusters report synchronized strike readiness." })
                return 100
            }
            const currentCluster = clusters[Math.floor((prev/100) * clusters.length)] || "HIVE"
            if (prev % 5 === 0) {
                setLog(l => [{ msg: `Cluster ${currentCluster} mirroring material DNA...`, node: currentCluster }, ...l])
            }
            return prev + 1
        })
    }, 100)
  }

  if (!mounted) return null

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/40 relative overflow-x-hidden scanline-effect font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-80 p-4 md:p-8 lg:p-12 relative overflow-y-auto min-h-screen scrollbar-hide flex flex-col z-10 text-right">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.15),transparent)] pointer-events-none transition-all duration-300 z-0" />
        
        <header className="mb-16 relative z-10 animate-in fade-in slide-in-from-top-6 duration-1000">
           <div className="flex flex-col md:flex-row items-center gap-12 justify-center md:justify-end text-center md:text-right">
              <div className="size-24 md:size-48 bg-black border-4 border-primary flex items-center justify-center shadow-[0_0_200px_rgba(212,175,55,0.8)] relative group shrink-0 rounded-[3.5rem] transition-all duration-1000 rotate-2 hover:rotate-0 hierarchical-shadow">
                 <Workflow className="size-12 md:size-24 text-primary group-hover:scale-110 transition-transform duration-700 animate-neural gold-glow" />
                 <div className="absolute -inset-10 border-4 border-primary/20 rounded-full animate-spin-slow opacity-30" />
              </div>
              <div className="flex-1">
                 <div className="flex flex-wrap justify-center md:justify-end items-center gap-6 mb-6">
                    <Badge className="bg-primary text-black border-none rounded-none px-12 py-3 text-[18px] md:text-[24px] font-black tracking-[1em] shadow-9xl italic uppercase">GLOBAL_MIRROR v78.0 ULTRA</Badge>
                    <div className="flex items-center gap-4 text-[14px] font-black uppercase tracking-widest text-emerald-500 animate-pulse">
                        <InfinityIcon className="size-6 shadow-lg" /> HIERARCHY_SYNC: {resonance.toFixed(8)}%
                    </div>
                 </div>
                 <h1 className="text-4xl md:text-6xl lg:text-[12rem] font-headline font-bold text-white tracking-tighter italic uppercase gold-glow leading-none">The <span className="text-primary">Mirror</span></h1>
                 <p className="text-sm md:text-xl lg:text-4xl text-muted-foreground mt-10 italic max-w-7xl leading-relaxed uppercase font-medium opacity-95 drop-shadow-3xl">
                    "سيدي الغزالي، محرك <span className="text-primary font-black underline decoration-primary decoration-[12px] underline-offset-[28px] shadow-9xl uppercase tracking-widest">Global Mirror v78.0</span> يضمن أن الضربة قد نجحت في مادة المصفوفة قبل تنفيذها الفعلي."
                 </p>
              </div>
           </div>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-12 relative z-10 pb-48 flex-1">
           <div className="xl:col-span-1 space-y-12">
              <Card className="kali-card border-primary/40 bg-black/98 rounded-[4rem] p-12 border-8 shadow-9xl group overflow-hidden hierarchical-shadow">
                 <div className="absolute inset-0 bg-primary/5 opacity-5 animate-pulse pointer-events-none" />
                 <CardHeader className="p-0 mb-12 border-b-4 border-primary/10 pb-10 bg-primary/10 rounded-t-[3.5rem] px-10 py-6 text-center">
                    <CardTitle className="text-2xl md:text-4xl text-primary flex items-center justify-center gap-10 font-black uppercase italic gold-glow leading-none">
                       <Settings className="size-12 animate-spin-slow" /> Mirror Config
                    </CardTitle>
                 </CardHeader>
                 <CardContent className="p-0 space-y-12">
                    <div className="space-y-8">
                        <label className="text-[14px] font-black text-primary uppercase tracking-[1em] px-10 italic flex items-center gap-6 justify-end"><Globe className="size-8" /> Strike Coordinate</label>
                        <Input 
                          value={target}
                          onChange={(e) => setTarget(e.target.value)}
                          placeholder="IP / Binary / Material Path..." 
                          className="bg-black border-8 border-primary/20 h-28 rounded-[2.5rem] text-2xl md:text-4xl italic px-10 focus:border-primary shadow-inner text-white font-black selection:bg-primary text-left"
                        />
                    </div>
                    
                    <div className="space-y-8">
                        <label className="text-[14px] font-black text-primary uppercase tracking-[1em] px-10 italic flex items-center gap-6 justify-end">Active Clusters (14)</label>
                        <div className="flex flex-wrap gap-4 px-4 h-64 overflow-y-auto scrollbar-hide justify-end">
                            {clusters.map(c => (
                                <Badge 
                                    key={c}
                                    onClick={() => setSelectedClusters(prev => prev.includes(c) ? prev.filter(x => x !== c) : [...prev, c])}
                                    variant="outline" 
                                    className={cn(
                                        "cursor-pointer px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest border-4 transition-all duration-700",
                                        selectedClusters.includes(c) ? "bg-primary text-black border-primary shadow-9xl scale-110" : "text-muted-foreground border-white/5 hover:border-primary/40"
                                    )}
                                >
                                    {c}_CLUSTER
                                </Badge>
                            ))}
                        </div>
                    </div>

                    <Button 
                        disabled={isSimulating}
                        onClick={startSimulation}
                        className="w-full h-36 bg-primary hover:bg-white text-black font-black uppercase tracking-[1.4em] rounded-[3.5rem] shadow-[0_60px_200px_rgba(212,175,55,0.7)] active:scale-95 transition-all text-3xl border-[12px] border-black/30 group italic"
                    >
                        {isSimulating ? <Loader2 className="size-16 animate-spin" /> : <Play className="size-16 mr-8 group-hover:scale-125 transition-transform gold-glow" />}
                        MIRROR_DNA
                    </Button>
                 </CardContent>
              </Card>

              <Card className="kali-card border-white/5 bg-black/60 p-12 rounded-[4rem] border-8 shadow-inner text-center relative overflow-hidden group">
                 <h4 className="text-[14px] font-black text-primary uppercase tracking-[1em] mb-8 italic flex items-center justify-center gap-6">
                    <Binary className="size-8 animate-pulse" /> QEMU_HIVE_v78
                 </h4>
                 <div className="text-6xl font-black text-white italic gold-glow uppercase tracking-tighter group-hover:scale-105 transition-transform duration-1000">READY</div>
                 <div className="absolute -bottom-10 -right-10 p-24 opacity-[0.03] group-hover:opacity-[0.1] transition-all duration-1000 scale-150 rotate-12"><Skull className="size-48 text-primary" /></div>
              </Card>
           </div>

           <Card className="xl:col-span-3 kali-card border-primary/40 bg-black/99 rounded-[6rem] p-16 border-[12px] shadow-[0_0_250px_rgba(0,0,0,1)] flex flex-col group overflow-hidden relative min-h-[1100px] hierarchical-shadow">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08),transparent)] pointer-events-none" />
              <CardHeader className="p-0 mb-16 border-b-8 border-white/5 pb-12 bg-primary/10 rounded-t-[5rem] px-16 py-10 flex flex-row justify-between items-center">
                 <CardTitle className="text-5xl md:text-[12rem] text-white flex items-center gap-16 font-black uppercase italic gold-glow px-10 leading-none">
                    <TerminalIcon className="size-24 md:size-48 text-primary animate-pulse" /> Simulation Feed
                 </CardTitle>
                 <Badge className="bg-primary/20 text-primary border-[10px] border-primary/30 px-16 py-8 rounded-full font-black text-3xl md:text-5xl animate-pulse shadow-9xl uppercase tracking-[0.4em] italic">ULTRA_MIRROR_v78</Badge>
              </CardHeader>
              <CardContent className="p-12 flex-1 flex flex-col space-y-16 relative z-10">
                 {isSimulating && (
                    <div className="space-y-8 mb-8">
                        <div className="flex justify-between text-3xl font-black text-primary uppercase tracking-[0.6em] italic">
                            <span>Mirroring_Target_DNA...</span>
                            <span className="gold-glow">{progress}%</span>
                        </div>
                        <div className="h-6 bg-white/5 rounded-full overflow-hidden border-4 border-white/10 p-1 shadow-inner">
                           <div className="h-full bg-primary shadow-[0_0_80px_rgba(212,175,55,1)] animate-neural rounded-full transition-all duration-300" style={{ width: `${progress}%` }} />
                        </div>
                    </div>
                 )}
                 <div className="flex-1 bg-black/99 p-16 rounded-[4rem] font-code text-2xl md:text-5xl h-[750px] overflow-y-auto border-8 border-white/5 scrollbar-hide shadow-inner relative group/log italic selection:bg-primary selection:text-black text-left">
                    {log.map((line, i) => (
                        <div key={i} className="mb-8 flex gap-10 animate-in slide-in-from-left-8 duration-700 group-hover/log:translate-x-4 transition-all">
                            <span className="text-primary/30 font-black italic select-none">[{line.node}]</span>
                            <span className="text-gray-200 font-bold leading-tight group-hover/log:text-primary transition-colors drop-shadow-3xl">
                              {">>> "} {line.msg}
                            </span>
                        </div>
                    ))}
                    {log.length === 0 && (
                       <div className="h-full flex flex-col items-center justify-center text-white/5 italic uppercase tracking-[6em] opacity-30">
                          <Boxes className="size-64 md:size-[40rem] mb-12 animate-spin-slow text-primary" />
                          HIVE_IDLE
                       </div>
                    )}
                 </div>
                 
                 <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
                    {[
                      { label: "FUD_SCAN", icon: ShieldCheck, status: "ULTRA", color: "text-emerald-500" },
                      { label: "HEAP_PROBE", icon: Bug, status: "LINKED", color: "text-blue-400" },
                      { label: "HIVE_MESH", icon: Globe, status: "BOUND", color: "text-primary" },
                      { label: "SOUL_CORE", icon: Skull, status: "ACTIVE", color: "text-red-500" }
                    ].map((stat, i) => (
                       <div key={i} className="p-10 rounded-[3rem] bg-white/5 border-4 border-white/5 flex flex-col items-center gap-8 hover:border-primary transition-all duration-1000 shadow-9xl cursor-crosshair group/stat">
                          <stat.icon className={cn("size-16 transition-all group-hover/stat:scale-125", stat.color)} />
                          <span className="text-[12px] font-black uppercase tracking-[0.6em] text-white/70">{stat.label}</span>
                          <Badge className="bg-primary/10 text-primary border-none font-black text-2xl italic px-8 py-2 rounded-full shadow-3xl">{stat.status}</Badge>
                       </div>
                    ))}
                 </div>
              </CardContent>
              <div className="p-16 border-t-8 border-white/5 mt-auto flex justify-between items-center opacity-35 text-[18px] font-black uppercase tracking-[6em] italic">
                 <span>ULTRA_MIRROR_DNA_v78_AL_GHAZALI_ROOT</span>
                 <div className="flex gap-16">
                    <Fingerprint className="size-20 text-primary animate-pulse" />
                    <Atom className="size-20 animate-spin-slow text-primary" />
                 </div>
              </div>
           </Card>
        </div>

        <div className="mt-auto relative z-10 flex justify-center items-center gap-48 opacity-45 text-[24px] md:text-[36px] font-black uppercase tracking-[6em] md:tracking-[12em] italic text-white drop-shadow-9xl pb-32">
            <span>AL-MUIZZ SUPREME ULTRA v1.0</span>
            <div className="size-16 rounded-full bg-white animate-pulse shadow-[0_0_150px_white]" />
            <span>MATERIAL_RESONANCE_TOTAL_2026</span>
        </div>
      </main>
    </div>
  )
}
