"use client"

import * as React from "react"
import { SidebarNav } from "@/components/platform/sidebar-nav"
import { 
  Workflow, 
  Play, 
  ShieldCheck, 
  AlertTriangle, 
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
  Infinity as InfinityIcon
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { toast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"

/**
 * @fileOverview محاكي السطوة v50.0 - THE GLOBAL MIRROR: HIVE SIMULATION
 * يتيح للقائد محاكاة الضربات عبر الـ 14 عنقوداً عالمياً بنبض الروح لعام 2026.
 * المالك الوحيد: المعتصم بالله ادريس الغزالي
 */
export default function DigitalTwinPage() {
  const [mounted, setMounted] = React.useState(false)
  const [isSimulating, setIsSimulating] = React.useState(false)
  const [progress, setProgress] = React.useState(0)
  const [target, setTarget] = React.useState("")
  const [log, setLog] = React.useState<{msg: string, node: string}[]>([])
  const [selectedClusters, setSelectedClusters] = React.useState<string[]>(["Riyadh", "Cairo", "London", "Dubai", "New York"])

  const clusters = ["Riyadh", "Cairo", "London", "Dubai", "New York", "Tokyo", "Berlin", "Singapore", "Sydney", "Moscow", "Paris", "Toronto", "Seoul", "Mumbai"]

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const startSimulation = () => {
    if (!target) {
        toast({ variant: "destructive", title: "Missing Coordinate", description: "Define a target for the hive simulation." })
        return
    }
    setIsSimulating(true)
    setProgress(0)
    setLog([{ msg: "Initializing Soul Core Virtualization v50.0...", node: "Alpha-Core" }])
    
    const interval = setInterval(() => {
        setProgress(prev => {
            if (prev >= 100) {
                clearInterval(interval)
                setIsSimulating(false)
                setLog(l => [...l, { msg: "Global Consensus: VECTORS VERIFIED. SUBJUGATION READY.", node: "HIVE" }])
                toast({ title: "Simulation 100% Success", description: "All 14 clusters report synchronized strike readiness." })
                return 100
            }
            const currentCluster = clusters[Math.floor((prev/100) * clusters.length)] || "HIVE"
            if (prev % 5 === 0) {
                setLog(l => [...l, { msg: `Cluster ${currentCluster} mirroring target vulnerabilities...`, node: currentCluster }])
            }
            return prev + 1
        })
    }, 100)
  }

  if (!mounted) return null

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/30 font-code overflow-x-hidden scanline-effect">
      <SidebarNav />
      <main className="flex-1 lg:mr-80 p-6 md:p-12 relative overflow-y-auto min-h-screen scrollbar-hide flex flex-col z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.08),transparent)] pointer-events-none transition-all duration-300 z-0" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
        
        <header className="mb-20 relative z-10 animate-in fade-in slide-in-from-top-8 duration-1000">
            <div className="flex items-center gap-6 mb-4">
                <Badge className="bg-primary text-black border-none px-10 py-3 text-[18px] font-black tracking-[0.8em] shadow-[0_0_100px_rgba(212,175,55,0.5)] italic rounded-full">GLOBAL MIRROR v50.0</Badge>
                <div className="flex items-center gap-4 text-[14px] font-black uppercase tracking-widest text-emerald-500 animate-pulse">
                    <Atom className="size-6 shadow-[0_0_30px_emerald]" /> PARALLEL_MIRRORING: ACTIVE
                </div>
            </div>
            <h1 className="text-7xl md:text-[12rem] font-headline font-bold text-white tracking-tighter italic uppercase gold-glow leading-none">The <span className="text-primary">Mirror</span></h1>
            <p className="text-2xl md:text-5xl text-muted-foreground mt-8 italic max-w-7xl leading-relaxed uppercase font-medium">
                "سيدي الغزالي، محرك <span className="text-primary font-black underline decoration-primary decoration-[10px] underline-offset-[20px] shadow-2xl uppercase tracking-widest">Global Mirror v50.0</span> يضمن أن الضربة قد نجحت في 10,000 عالم موازٍ قبل تنفيذها."
            </p>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-12 flex-1 pb-40">
            <div className="space-y-12">
                <Card className="kali-card border-primary/40 bg-black/80 p-10 rounded-[5rem] border-8 shadow-9xl group overflow-hidden">
                    <div className="absolute inset-0 bg-primary/5 opacity-5 animate-pulse pointer-events-none" />
                    <CardHeader className="p-0 mb-10 border-b-4 border-primary/20 pb-8">
                        <CardTitle className="text-4xl text-primary flex items-center gap-8 font-black uppercase italic gold-glow">
                            <Settings className="size-14 animate-spin-slow" /> Mirror Config
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0 space-y-12">
                        <div className="space-y-6">
                            <label className="text-[14px] font-black text-primary/60 uppercase tracking-[0.8em] px-8 italic flex items-center gap-4"><Globe className="size-5" /> Strike Coordinate</label>
                            <Input 
                                value={target}
                                onChange={(e) => setTarget(e.target.value)}
                                placeholder="IP / Binary / Global Path..." 
                                className="bg-black/99 border-4 border-primary/20 h-24 rounded-[3.5rem] text-3xl italic px-10 focus:border-primary shadow-inner text-white font-black"
                            />
                        </div>
                        
                        <div className="space-y-6">
                            <label className="text-[14px] font-black text-primary/60 uppercase tracking-[0.8em] px-8 italic">Active Clusters (14)</label>
                            <div className="flex flex-wrap gap-4 px-4 h-[200px] overflow-y-auto scrollbar-hide">
                                {clusters.map(c => (
                                    <Badge 
                                        key={c}
                                        onClick={() => setSelectedClusters(prev => prev.includes(c) ? prev.filter(x => x !== c) : [...prev, c])}
                                        variant="outline" 
                                        className={cn(
                                            "cursor-pointer px-8 py-3 rounded-full text-[12px] font-black uppercase tracking-widest border-2 transition-all duration-500",
                                            selectedClusters.includes(c) ? "bg-primary text-black border-primary shadow-3xl scale-105" : "text-muted-foreground border-white/10 hover:border-primary/40"
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
                            className="w-full h-32 bg-primary hover:bg-white text-black font-black uppercase tracking-[1.5em] rounded-[4rem] shadow-[0_50px_150px_rgba(212,175,55,0.7)] active:scale-95 transition-all text-3xl border-8 border-black/30 group italic mt-8"
                        >
                            {isSimulating ? <Loader2 className="size-16 animate-spin" /> : <Play className="size-16 mr-6 group-hover:scale-125 transition-transform gold-glow" />}
                            MIRROR INTENT
                        </Button>
                    </CardContent>
                </Card>

                <Card className="kali-card border-white/10 bg-black/60 p-8 rounded-[4rem] border-2 shadow-inner text-center relative overflow-hidden">
                   <h4 className="text-[14px] font-black text-primary uppercase tracking-[1em] mb-6 italic flex items-center justify-center gap-4">
                      <Binary className="size-6" /> QEMU_HIVE_v50
                   </h4>
                   <div className="text-4xl font-black text-white italic gold-glow uppercase tracking-tighter">PARALLEL_SYNC: OK</div>
                </Card>
            </div>

            <Card className="kali-card border-primary/60 bg-black/99 rounded-[7rem] p-12 border-8 shadow-9xl col-span-2 flex flex-col group overflow-hidden relative">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.04),transparent)] pointer-events-none" />
                <CardHeader className="p-0 mb-12 border-b-8 border-white/5 pb-10 bg-primary/10 rounded-t-[5rem] px-12 py-8">
                    <CardTitle className="text-5xl md:text-8xl text-white flex items-center gap-10 font-black uppercase italic gold-glow px-4">
                        <TerminalIcon className="size-16 md:size-24 text-primary animate-pulse" /> Virtual War-Log
                    </CardTitle>
                </CardHeader>
                <CardContent className="p-0 flex-1 flex flex-col space-y-12 relative z-10">
                    {isSimulating && (
                        <div className="space-y-6 mb-12 px-12">
                            <div className="flex justify-between text-2xl font-black text-primary uppercase tracking-[1.5em] italic">
                                <span>{"Mirroring_Global_Matrix..."}</span>
                                <span className="gold-glow">{progress}%</span>
                            </div>
                            <div className="h-8 bg-white/5 rounded-full overflow-hidden border-4 border-white/10 p-1 shadow-inner">
                               <div className="h-full bg-primary shadow-[0_0_100px_rgba(212,175,55,1)] animate-pulse rounded-full transition-all duration-300" style={{ width: `${progress}%` }} />
                            </div>
                        </div>
                    )}
                    <div className="flex-1 bg-black/99 p-12 rounded-[5rem] font-code text-2xl h-[700px] overflow-y-auto border-4 border-white/5 scrollbar-hide shadow-inner relative group/log italic selection:bg-primary selection:text-black">
                        {log.map((line, i) => (
                            <div key={i} className="mb-10 flex gap-12 animate-in slide-in-from-left-10 duration-1000 group-hover/log:translate-x-4 transition-all">
                                <span className="text-primary/40 font-black italic select-none">[{line.node}]</span>
                                <span className="text-gray-100 font-bold leading-relaxed group-hover/log:text-primary transition-colors drop-shadow-2xl">
                                  {">>> "} {line.msg}
                                </span>
                            </div>
                        ))}
                        {log.length === 0 && (
                           <div className="h-full flex flex-col items-center justify-center text-white/5 italic uppercase tracking-[4em] opacity-30">
                              <Boxes className="size-80 mb-12 animate-spin-slow text-primary" />
                              HIVE_IDLE
                           </div>
                        )}
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 px-8 pb-8">
                        {[
                          { label: "FUD_SCAN", icon: ShieldCheck, status: "READY" },
                          { label: "HEAP_PROBE", icon: Bug, status: "LINKED" },
                          { label: "HIVE_MESH", icon: Globe, status: "BOUND" },
                          { label: "SOUL_CORE", icon: Skull, status: "ACTIVE" }
                        ].map((stat, i) => (
                           <div key={i} className="p-10 rounded-[4rem] bg-white/5 border-4 border-white/5 flex flex-col items-center gap-6 hover:border-primary transition-all duration-1000 shadow-7xl cursor-crosshair group/stat">
                              <stat.icon className="size-16 text-primary/60 group-hover/stat:scale-125 transition-all gold-glow" />
                              <span className="text-[12px] font-black uppercase tracking-widest text-white/70">{stat.label}</span>
                              <Badge className="bg-primary/20 text-primary border-none font-black text-xl italic px-8 py-2 rounded-full">{stat.status}</Badge>
                           </div>
                        ))}
                    </div>
                </CardContent>
                <div className="p-10 border-t-8 border-white/5 mt-10 flex justify-between items-center opacity-30 text-[14px] font-black uppercase tracking-[3em] italic">
                   <span>GLOBAL_MIRROR_DNA_v50_AL_GHAZALI_ROOT</span>
                   <Fingerprint className="size-12 text-primary animate-pulse" />
                </div>
            </Card>
        </div>

        <div className="mt-auto relative z-10 flex justify-center items-center gap-48 opacity-40 text-[22px] font-black uppercase tracking-[6em] italic text-white drop-shadow-3xl pb-12">
            <span>AL-MUIZZ SWARM SIMULATOR v50.0</span>
            <div className="size-10 rounded-full bg-white animate-pulse shadow-[0_0_100px_white]" />
            <span>COLLECTIVE_RESONANCE_OK_2026</span>
        </div>
      </main>
    </div>
  )
}
