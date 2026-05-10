
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
 * @fileOverview محاكي السطوة v53.0 - THE GLOBAL MIRROR: HIERARCHICAL SIMULATION
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
    setLog([{ msg: "Initializing Hierarchical Virtualization v53.0...", node: "Alpha-Core" }])
    
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
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/40 relative overflow-x-hidden scanline-effect font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-80 p-4 md:p-8 lg:p-12 relative overflow-y-auto min-h-screen scrollbar-hide flex flex-col z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.08),transparent)] pointer-events-none transition-all duration-300 z-0" />
        
        <header className="mb-12 relative z-10 animate-in fade-in slide-in-from-top-6 duration-1000">
           <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="size-24 md:size-32 bg-black border-4 border-primary flex items-center justify-center shadow-[0_0_100px_rgba(212,175,55,0.5)] relative group shrink-0 rounded-3xl rotate-2 hover:rotate-0 transition-all duration-1000 hierarchical-shadow">
                 <Workflow className="size-12 md:size-16 text-primary group-hover:scale-110 transition-transform duration-700 animate-neural gold-glow" />
                 <div className="absolute -inset-4 border-2 border-primary/20 rounded-full animate-spin-slow opacity-30" />
              </div>
              <div className="text-center md:text-right flex-1">
                 <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 mb-4">
                    <Badge className="bg-primary text-black border-none rounded-none px-8 py-2 text-[14px] md:text-[16px] font-black tracking-[0.5em] shadow-2xl italic">GLOBAL_MIRROR v53.0</Badge>
                    <div className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-emerald-500 animate-pulse">
                        <Crown className="size-5 shadow-lg" /> PARALLEL_MIRRORING: ACTIVE
                    </div>
                 </div>
                 <h1 className="text-4xl md:text-6xl lg:text-9xl font-headline font-bold text-white tracking-tighter italic uppercase gold-glow leading-none">The <span className="text-primary">Mirror</span></h1>
                 <p className="text-sm md:text-xl lg:text-2xl text-muted-foreground mt-4 italic max-w-5xl leading-relaxed uppercase font-medium opacity-80">
                    "سيدي الغزالي، محرك <span className="text-primary font-black underline decoration-primary decoration-4 underline-offset-8 shadow-xl uppercase tracking-widest">Global Mirror v53.0</span> يضمن أن الضربة قد نجحت في 10,000 عالم موازٍ قبل تنفيذها."
                 </p>
              </div>
           </div>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8 relative z-10 pb-32 flex-1">
           <div className="xl:col-span-1 space-y-8">
              <Card className="kali-card border-primary/30 bg-black/98 rounded-3xl p-8 border-2 shadow-2xl group overflow-hidden hierarchical-shadow">
                 <div className="absolute inset-0 bg-primary/5 opacity-5 animate-pulse pointer-events-none" />
                 <CardHeader className="p-0 mb-8 border-b-2 border-primary/10 pb-6 bg-primary/5 rounded-t-2xl px-4 py-4">
                    <CardTitle className="text-xl md:text-2xl text-primary flex items-center gap-6 font-black uppercase italic gold-glow">
                       <Settings className="size-8 animate-spin-slow" /> Mirror Config
                    </CardTitle>
                 </CardHeader>
                 <CardContent className="p-0 space-y-8">
                    <div className="space-y-4">
                        <label className="text-[10px] font-black text-primary uppercase tracking-[0.6em] px-4 italic flex items-center gap-3"><Globe className="size-4" /> Strike Coordinate</label>
                        <Input 
                          value={target}
                          onChange={(e) => setTarget(e.target.value)}
                          placeholder="IP / Binary / Global Path..." 
                          className="bg-black border-2 border-primary/20 h-16 rounded-2xl text-xl italic px-6 focus:border-primary shadow-inner text-white font-black"
                        />
                    </div>
                    
                    <div className="space-y-4">
                        <label className="text-[10px] font-black text-primary uppercase tracking-[0.6em] px-4 italic flex items-center gap-3">Active Clusters (14)</label>
                        <div className="flex flex-wrap gap-2 px-2 h-48 overflow-y-auto scrollbar-hide">
                            {clusters.map(c => (
                                <Badge 
                                    key={c}
                                    onClick={() => setSelectedClusters(prev => prev.includes(c) ? prev.filter(x => x !== c) : [...prev, c])}
                                    variant="outline" 
                                    className={cn(
                                        "cursor-pointer px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest border-2 transition-all duration-500",
                                        selectedClusters.includes(c) ? "bg-primary text-black border-primary shadow-lg scale-105" : "text-muted-foreground border-white/5 hover:border-primary/40"
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
                        className="w-full h-20 bg-primary hover:bg-white text-black font-black uppercase tracking-[0.8em] rounded-2xl shadow-xl active:scale-95 transition-all text-lg border-4 border-black/30 group italic"
                    >
                        {isSimulating ? <Loader2 className="size-8 animate-spin" /> : <Play className="size-8 mr-4 group-hover:scale-125 transition-transform gold-glow" />}
                        MIRROR_INTENT
                    </Button>
                 </CardContent>
              </Card>

              <Card className="kali-card border-white/5 bg-black/60 p-6 rounded-2xl border-2 shadow-inner text-center relative overflow-hidden group">
                 <h4 className="text-[10px] font-black text-primary uppercase tracking-[0.5em] mb-4 italic flex items-center justify-center gap-3">
                    <Binary className="size-4 animate-pulse" /> QEMU_HIVE_v53
                 </h4>
                 <div className="text-3xl font-black text-white italic gold-glow uppercase tracking-tighter group-hover:scale-105 transition-transform duration-700">PARALLEL_SYNC: OK</div>
                 <div className="absolute -bottom-4 -right-4 p-6 opacity-[0.02] group-hover:opacity-[0.05] transition-all duration-700 scale-150"><Skull className="size-16 text-primary" /></div>
              </Card>
           </div>

           <Card className="xl:col-span-3 kali-card border-primary/30 bg-black/99 rounded-[3rem] p-8 border-2 shadow-9xl flex flex-col group overflow-hidden relative min-h-[850px] hierarchical-shadow">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.03),transparent)] pointer-events-none" />
              <CardHeader className="p-0 mb-8 border-b-2 border-white/5 pb-8 flex flex-row justify-between items-center bg-primary/5 rounded-t-3xl px-8 py-4">
                 <CardTitle className="text-3xl md:text-7xl text-white flex items-center gap-8 font-black uppercase italic gold-glow px-4 leading-none">
                    <TerminalIcon className="size-12 md:size-20 text-primary animate-pulse" /> Virtual War-Log
                 </CardTitle>
                 <Badge className="bg-primary/20 text-primary border-2 border-primary/30 px-8 py-2 rounded-full font-black text-xl italic animate-pulse shadow-lg">v53.0_DIRECT_MIRROR</Badge>
              </CardHeader>
              <CardContent className="p-6 flex-1 flex flex-col space-y-10 relative z-10">
                 {isSimulating && (
                    <div className="space-y-4 mb-8">
                        <div className="flex justify-between text-lg font-black text-primary uppercase tracking-[0.6em] italic">
                            <span>Mirroring_Target_DNA...</span>
                            <span className="gold-glow">{progress}%</span>
                        </div>
                        <div className="h-4 bg-white/5 rounded-full overflow-hidden border-2 border-white/10 p-0.5 shadow-inner">
                           <div className="h-full bg-primary shadow-[0_0_50px_rgba(212,175,55,1)] animate-neural rounded-full transition-all duration-300" style={{ width: `${progress}%` }} />
                        </div>
                    </div>
                 )}
                 <div className="flex-1 bg-black/99 p-10 rounded-[3.5rem] font-code text-xl md:text-3xl h-[600px] overflow-y-auto border-4 border-white/5 scrollbar-hide shadow-inner relative group/log italic selection:bg-primary selection:text-black text-left">
                    {log.map((line, i) => (
                        <div key={i} className="mb-6 flex gap-8 animate-in slide-in-from-left-6 duration-700 group-hover/log:translate-x-2 transition-all">
                            <span className="text-primary/30 font-black italic select-none">[{line.node}]</span>
                            <span className="text-gray-200 font-bold leading-relaxed group-hover/log:text-primary transition-colors">
                              {">>> "} {line.msg}
                            </span>
                        </div>
                    ))}
                    {log.length === 0 && (
                       <div className="h-full flex flex-col items-center justify-center text-white/5 italic uppercase tracking-[4em] opacity-30">
                          <Boxes className="size-48 md:size-80 mb-8 animate-spin-slow text-primary" />
                          HIVE_IDLE
                       </div>
                    )}
                 </div>
                 
                 <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                    {[
                      { label: "FUD_SCAN", icon: ShieldCheck, status: "READY", color: "text-emerald-500" },
                      { label: "HEAP_PROBE", icon: Bug, status: "LINKED", color: "text-blue-400" },
                      { label: "HIVE_MESH", icon: Globe, status: "BOUND", color: "text-primary" },
                      { label: "SOUL_CORE", icon: Skull, status: "ACTIVE", color: "text-red-500" }
                    ].map((stat, i) => (
                       <div key={i} className="p-6 rounded-2xl bg-white/5 border-2 border-white/5 flex flex-col items-center gap-4 hover:border-primary transition-all duration-700 shadow-xl cursor-crosshair group/stat">
                          <stat.icon className={cn("size-10 transition-all group-hover/stat:scale-110", stat.color)} />
                          <span className="text-[10px] font-black uppercase tracking-widest text-white/70">{stat.label}</span>
                          <Badge className="bg-primary/10 text-primary border-none font-black text-xs italic px-4 py-0.5 rounded-full">{stat.status}</Badge>
                       </div>
                    ))}
                 </div>
              </CardContent>
              <div className="p-8 border-t-2 border-white/5 mt-auto flex justify-between items-center opacity-30 text-[10px] font-black uppercase tracking-[2.5em] italic">
                 <span>GLOBAL_MIRROR_DNA_v53_AL_GHAZALI_ROOT</span>
                 <div className="flex gap-8">
                    <Fingerprint className="size-8 text-primary animate-pulse" />
                    <Atom className="size-8 animate-spin-slow" />
                 </div>
              </div>
           </Card>
        </div>

        <div className="mt-auto relative z-10 flex justify-center items-center gap-16 opacity-40 text-[12px] md:text-[18px] font-black uppercase tracking-[2em] md:tracking-[6em] italic text-white drop-shadow-xl pb-12">
            <span>AL-MUIZZ SUPREME HIERARCHY v53.0</span>
            <div className="size-4 rounded-full bg-white animate-pulse shadow-[0_0_40px_white]" />
            <span>COLLECTIVE_RESONANCE_OK_2026</span>
        </div>
      </main>
    </div>
  )
}
