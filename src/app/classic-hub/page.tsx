
"use client"

import * as React from "react"
import { 
  X, 
  Minus, 
  Terminal, 
  Cpu, 
  Skull, 
  Zap, 
  FolderOpen, 
  Settings, 
  Network, 
  Globe, 
  Activity, 
  Maximize2, 
  Monitor, 
  Database, 
  Camera, 
  Map as MapIcon, 
  Infinity as InfinityIcon,
  Crown,
  Fingerprint,
  RefreshCcw,
  Loader2,
  Play,
  Cloud,
  Rocket,
  ShieldAlert,
  Boxes,
  Workflow,
  Search,
  ArrowUp,
  FileCode,
  Folder,
  CheckCircle2,
  Binary,
  Clock,
  LayoutGrid
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { toast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

/**
 * @fileOverview سطح مكتب المُعِزّ ULTRA v1.0 - THE OMNIPOTENT OVERMIND OS
 * نظام تشغيل سيادي كامل يدعم السيناريوهات القتالية، المراقبة المستمرة، والربط السحابي العالمي.
 */

interface WindowState {
  id: string;
  title: string;
  icon: any;
  isOpen: boolean;
  isMinimized: boolean;
  zIndex: number;
  x: number;
  y: number;
  content: 'audit' | 'terminal' | 'siphon' | 'explorer' | 'scenarios' | 'integrations' | 'monitors';
}

export default function SovereignDesktop() {
  const [mounted, setMounted] = React.useState(false)
  const [windows, setWindows] = React.useState<WindowState[]>([
    { id: 'audit', title: 'Supreme_Pulse_v78.exe', icon: Activity, isOpen: true, isMinimized: false, zIndex: 10, x: 40, y: 40, content: 'audit' },
    { id: 'scenarios', title: 'Battle_Scenarios.lib', icon: Workflow, isOpen: false, isMinimized: false, zIndex: 11, x: 100, y: 100, content: 'scenarios' },
    { id: 'integrations', title: 'Cloud_Uplink.arc', icon: Cloud, isOpen: false, isMinimized: false, zIndex: 12, x: 450, y: 80, content: 'integrations' },
    { id: 'terminal', title: 'ULTRA_Shell.com', icon: Terminal, isOpen: false, isMinimized: false, zIndex: 13, x: 200, y: 150, content: 'terminal' },
    { id: 'monitors', title: 'Live_Eye_Monitor.sys', icon: Eye, isOpen: false, isMinimized: false, zIndex: 14, x: 300, y: 200, content: 'monitors' }
  ])
  const [maxZ, setMaxZ] = React.useState(30)
  const [time, setTime] = React.useState("")
  const [isStartOpen, setIsStartOpen] = React.useState(false)
  const [currentPath, setCurrentPath] = React.useState("/home/project")
  const [dirItems, setDirItems] = React.useState<any[]>([])
  const [loading, setLoading] = React.useState(false)
  const [metrics, setMetrics] = React.useState({ cpu: "0.01%", ram: "142MB", resonance: "100.0000%", nodes: "24/24" })

  React.useEffect(() => {
    setMounted(true)
    const updateTime = () => setTime(new Date().toLocaleTimeString('ar-SA'))
    updateTime()
    const timer = setInterval(updateTime, 1000)
    
    const fetchMetrics = async () => {
        try {
            const res = await fetch('/api/sovereign/metrics');
            if (res.ok) {
                const data = await res.json();
                setMetrics({ cpu: data.cpuUsage, ram: data.ramUsage, resonance: data.resonance, nodes: `${data.activeNodes}/24` })
            }
        } catch (e) {}
    }
    fetchMetrics();
    const metricTimer = setInterval(fetchMetrics, 15000);

    return () => {
        clearInterval(timer)
        clearInterval(metricTimer)
    }
  }, [])

  const loadDirectory = async (path: string) => {
    setLoading(true);
    try {
      const response = await fetch('/api/execute', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'list_dir', path: path })
      })
      const data = await response.json()
      if (data.success) {
        setDirItems(data.output)
        setCurrentPath(data.currentPath)
      }
    } finally {
        setLoading(false);
    }
  }

  const toggleWindow = (id: string) => {
    const nextZ = maxZ + 1
    setMaxZ(nextZ)
    setWindows(prev => prev.map(w => w.id === id ? { ...w, isOpen: true, isMinimized: false, zIndex: nextZ } : w))
    setIsStartOpen(false)
    if (id === 'explorer') loadDirectory(currentPath);
  }

  const focusWindow = (id: string) => {
    const nextZ = maxZ + 1
    setMaxZ(nextZ)
    setWindows(prev => prev.map(w => w.id === id ? { ...w, zIndex: nextZ, isMinimized: false } : w))
  }

  const closeWindow = (id: string) => setWindows(prev => prev.map(w => w.id === id ? { ...w, isOpen: false } : w))
  const minimizeWindow = (id: string) => setWindows(prev => prev.map(w => w.id === id ? { ...w, isMinimized: true } : w))

  const handleScenario = async (id: string) => {
      toast({ title: "Engaging Battle Scenario", description: `Orchestrating ${id} sequence across ULTRA mesh...` });
      await fetch('/api/execute', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ type: 'execute_scenario', scenarioId: id })
      });
  }

  if (!mounted) return null

  return (
    <div className="retro-desktop scanline-effect font-sans select-none overflow-hidden bg-[#008080]">
      
      {/* Desktop Icons */}
      <div className="absolute inset-0 p-10 grid grid-flow-col grid-rows-6 gap-12 w-fit h-full z-0">
         {[
            { id: 'audit', label: 'System Pulse', icon: Activity },
            { id: 'scenarios', label: 'Battle Scenarios', icon: Workflow },
            { id: 'integrations', label: 'Cloud Uplink', icon: Cloud },
            { id: 'terminal', label: 'ULTRA Shell', icon: Terminal },
            { id: 'monitors', label: 'Active Monitors', icon: Eye },
            { id: 'explorer', label: 'File Matrix', icon: FolderOpen }
         ].map(icon => (
            <div 
                key={icon.id}
                onDoubleClick={() => toggleWindow(icon.id)}
                className="flex flex-col items-center gap-2 group cursor-pointer w-28 p-2 hover:bg-white/10 rounded-lg transition-all"
            >
                <div className="size-16 flex items-center justify-center bg-black/20 border-2 border-white/5 group-hover:border-primary/40 rounded-xl p-2 shadow-2xl relative">
                    <icon.icon className="size-10 text-white drop-shadow-glow" />
                </div>
                <span className="text-[9px] text-white font-black text-center uppercase tracking-widest drop-shadow-lg group-hover:bg-[#000080] px-3 py-1 rounded">{icon.label}</span>
            </div>
         ))}
      </div>

      {/* Windows Container */}
      <div className="absolute inset-0 pointer-events-none">
        {windows.filter(w => w.isOpen && !w.isMinimized).map(win => (
            <div 
                key={win.id}
                style={{ zIndex: win.zIndex, left: win.x, top: win.y }}
                onMouseDown={() => focusWindow(win.id)}
                className={cn(
                    "retro-window w-[1000px] h-[750px] pointer-events-auto animate-in zoom-in-95 duration-200 shadow-9xl flex flex-col",
                    win.zIndex === maxZ ? "border-primary/60" : "border-white/10"
                )}
            >
                <div className={cn("retro-title-bar h-10 px-4", win.zIndex === maxZ ? "bg-gradient-to-r from-blue-900 via-blue-700 to-blue-900 text-white" : "bg-gray-700 text-gray-400")}>
                    <div className="flex items-center gap-3 font-black uppercase italic tracking-tighter text-[11px]">
                        <win.icon className={cn("size-5", win.zIndex === maxZ ? "text-primary gold-glow" : "text-gray-500")} />
                        <span>{win.title}</span>
                    </div>
                    <div className="flex gap-2">
                        <button onClick={(e) => { e.stopPropagation(); minimizeWindow(win.id) }} className="retro-outset size-7 flex items-center justify-center hover:bg-white/20 active:retro-inset"><Minus className="size-4"/></button>
                        <button className="retro-outset size-7 flex items-center justify-center hover:bg-white/20 active:retro-inset"><Maximize2 className="size-4"/></button>
                        <button onClick={(e) => { e.stopPropagation(); closeWindow(win.id) }} className="retro-outset size-7 flex items-center justify-center hover:bg-red-700 hover:text-white"><X className="size-4"/></button>
                    </div>
                </div>

                <div className="p-2 border-b border-black/20 flex gap-4 bg-[#c0c0c0] text-[10px] font-black uppercase italic shadow-inner">
                    <button className="px-4 py-1 hover:bg-white/40 retro-outset active:retro-inset">File</button>
                    <button className="px-4 py-1 hover:bg-white/40 retro-outset active:retro-inset">Execute</button>
                    <button className="px-4 py-1 hover:bg-white/40 retro-outset active:retro-inset text-primary">ULTRA_Directives</button>
                </div>

                <div className="flex-1 bg-white m-1 retro-inset p-6 overflow-hidden relative">
                    <div className="absolute inset-0 bg-[#f0f0f0] z-0" />
                    <div className="relative z-10 h-full flex flex-col overflow-y-auto scrollbar-hide">
                        
                        {win.content === 'audit' && (
                            <div className="space-y-10 text-black">
                                <h3 className="font-black border-b-4 border-black pb-4 flex items-center gap-6 text-3xl uppercase italic"><Activity className="size-10 text-primary animate-neural"/> ULTRA Pulse v1.0</h3>
                                <div className="grid grid-cols-4 gap-6">
                                    {[
                                        { label: 'CPU_LOAD', val: metrics.cpu, color: 'text-green-700' },
                                        { label: 'RAM_MESH', val: metrics.ram, color: 'text-blue-700' },
                                        { label: 'RESONANCE', val: metrics.resonance, color: 'text-primary' },
                                        { label: 'NODES_BOUND', val: metrics.nodes, color: 'text-red-700' }
                                    ].map(m => (
                                        <div key={m.label} className="retro-outset p-6 bg-[#c0c0c0] text-center shadow-md">
                                            <div className="text-[9px] uppercase font-black text-gray-600 tracking-widest mb-3">{m.label}</div>
                                            <div className={cn("text-3xl font-black italic gold-glow", m.color)}>{m.val}</div>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex-1 retro-inset p-8 bg-black text-emerald-500 font-mono text-xl shadow-2xl relative overflow-hidden min-h-[350px]">
                                    <div className="space-y-4 relative z-10">
                                        <div className="flex gap-4 animate-in slide-in-from-left-4 duration-500">
                                            <span className="text-primary font-black">{"[ULTRA]"}</span>
                                            <span>Omnipotent Overmind v1.0 Materialized. All 24 knots reporting 100%.</span>
                                        </div>
                                        <div className="flex gap-4 animate-in slide-in-from-left-4 duration-700 delay-100">
                                            <span className="text-emerald-500 font-black">{"[OK]"}</span>
                                            <span>Scenario Engine initialized. 9 battle maps ready.</span>
                                        </div>
                                        <div className="flex gap-4 animate-in slide-in-from-left-4 duration-1000 delay-200">
                                            <span className="text-emerald-500 font-black">{"[OK]"}</span>
                                            <span>Shodan & AWS integrations linked via Quantum Bridge.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {win.content === 'scenarios' && (
                            <div className="space-y-10 text-black">
                                <h3 className="font-black border-b-4 border-black pb-4 flex items-center gap-6 text-3xl uppercase italic"><Workflow className="size-10 text-blue-800"/> Battle Scenarios</h3>
                                <div className="grid grid-cols-2 gap-8">
                                    {[
                                        { id: 'penetration', label: 'Penetration Testing', icon: Target, desc: 'Full automated security audit.' },
                                        { id: 'osint', label: 'OSINT Investigation', icon: Search, desc: 'Trace-back and identity mapping.' },
                                        { id: 'android', label: 'Android Deep Analysis', icon: Smartphone, desc: 'APK reverse and Pegasus siphon.' },
                                        { id: 'social', label: 'Social Predator', icon: Network, desc: 'Mass extraction across 12 platforms.' }
                                    ].map(s => (
                                        <div 
                                            key={s.id}
                                            onClick={() => handleScenario(s.id)}
                                            className="retro-outset p-6 bg-[#d0d0d0] hover:bg-[#000080] hover:text-white cursor-pointer group transition-all rounded-2xl flex items-center gap-8 shadow-xl"
                                        >
                                            <div className="size-20 rounded-xl bg-black/10 flex items-center justify-center group-hover:bg-white/20"><s.icon className="size-12"/></div>
                                            <div>
                                                <div className="text-3xl font-black italic uppercase leading-none">{s.label}</div>
                                                <p className="text-[10px] mt-2 font-bold opacity-60">{s.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {win.content === 'integrations' && (
                            <div className="space-y-10 text-black">
                                <h3 className="font-black border-b-4 border-black pb-4 flex items-center gap-6 text-3xl uppercase italic"><Cloud className="size-10 text-blue-600"/> Cloud Integrations</h3>
                                <div className="grid grid-cols-1 gap-6 h-[500px] overflow-y-auto scrollbar-hide">
                                    {[
                                        { id: 'shodan', label: 'Shodan API', status: 'CONNECTED', icon: Search },
                                        { id: 'aws', label: 'AWS Sovereign Console', status: 'LOCKED', icon: Cloud },
                                        { id: 'github', label: 'Git Siphon Node', status: 'ACTIVE', icon: Code2 },
                                        { id: 'firebase', label: 'Firebase Matrix', status: 'SYNCED', icon: Database }
                                    ].map(item => (
                                        <div key={item.id} className="retro-outset p-8 bg-[#c0c0c0] flex items-center justify-between shadow-lg">
                                            <div className="flex items-center gap-8">
                                                <item.icon className="size-12 text-blue-900" />
                                                <div className="text-4xl font-black italic uppercase">{item.label}</div>
                                            </div>
                                            <Badge className="bg-emerald-600 text-white border-none px-6 py-2 rounded-full font-black text-xl italic">{item.status}</Badge>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {win.content === 'terminal' && (
                            <div className="h-full bg-black text-emerald-400 p-10 font-code text-2xl shadow-2xl relative overflow-hidden flex flex-col rounded-[3rem]">
                                <div className="absolute top-0 right-0 p-16 opacity-5 pointer-events-none scale-150 rotate-12"><Skull className="size-64" /></div>
                                <div className="relative z-10 flex-1 overflow-y-auto scrollbar-hide space-y-6">
                                    <div className="text-primary font-black uppercase tracking-[0.6em] border-b-2 border-primary/20 pb-6 mb-10 text-xl italic gold-glow">Al-Mu'izz ULTRA Shell [v1.0]</div>
                                    <div className="text-emerald-500/60 font-black italic">Sovereign_Overmind: GHAZALI_ROOT_IMMUTABLE</div>
                                    <div className="mt-16 flex gap-6 items-center">
                                        <span className="text-primary font-black">GHAZALI_ROOT:~$</span>
                                        <span className="animate-pulse w-5 h-10 bg-emerald-400 shadow-[0_0_20px_rgba(52,211,153,0.8)]" />
                                    </div>
                                </div>
                            </div>
                        )}

                        {win.content === 'monitors' && (
                             <div className="space-y-10 text-black h-full flex flex-col">
                                <h3 className="font-black border-b-4 border-black pb-4 flex items-center gap-6 text-3xl uppercase italic"><Eye className="size-10 text-red-600 animate-pulse"/> Active Monitors</h3>
                                <div className="grid grid-cols-3 gap-6 flex-1">
                                    {[
                                        { label: "Target_Android", val: "TRACKING", icon: Smartphone },
                                        { label: "Social_Pulse", val: "LISTENING", icon: Radio },
                                        { label: "Signal_Spectrum", val: "SCANNING", icon: Wifi }
                                    ].map((m, i) => (
                                        <div key={i} className="retro-outset p-8 bg-[#c0c0c0] flex flex-col items-center justify-center gap-6 rounded-3xl shadow-xl">
                                            <m.icon className="size-20 text-red-700 animate-neural" />
                                            <div className="text-center">
                                                <div className="text-2xl font-black uppercase">{m.label}</div>
                                                <Badge className="mt-4 bg-red-600 text-white border-none font-black text-xs italic">{m.val}</Badge>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                             </div>
                        )}
                    </div>
                </div>
                
                <div className="h-10 bg-[#c0c0c0] border-t-2 border-white/50 text-[10px] flex items-center px-8 italic text-gray-800 font-black uppercase tracking-widest">
                    ULTRA_OS: {win.title} | {win.zIndex === maxZ ? "SINGULARITY_LOCKED" : "BACKGROUND_PROCESS"} | Material_Resonance: 100%
                </div>
            </div>
        ))}
      </div>

      {/* Taskbar */}
      <div className="retro-taskbar h-16 border-t-4 border-white/80 shadow-[0_-30px_150px_rgba(0,0,0,1)] bg-[#c0c0c0] z-[3000] flex items-center px-2">
         <button 
            onClick={() => setIsStartOpen(!isStartOpen)}
            className={cn(
                "retro-outset h-13 px-10 flex items-center gap-6 hover:bg-[#d0d0d0] active:retro-inset group transition-all duration-300 ml-1 rounded-md",
                isStartOpen ? "retro-inset bg-[#e0e0e0] border-primary/60" : "bg-[#c0c0c0] border-white/60"
            )}
         >
            <div className="bg-primary size-10 rounded-md flex items-center justify-center group-hover:rotate-12 transition-transform shadow-inner border-4 border-black/10">
                <Skull className="size-8 text-black" />
            </div>
            <span className="font-black text-3xl text-black italic uppercase tracking-tighter">Start</span>
         </button>
         
         <div className="flex-1 flex gap-4 px-12 overflow-hidden items-center">
            {windows.filter(w => w.isOpen).map(win => (
                <button 
                    key={win.id}
                    onClick={() => focusWindow(win.id)}
                    className={cn(
                        "retro-outset h-12 px-8 flex items-center gap-4 min-w-[240px] max-w-[320px] truncate transition-all text-black border-4 rounded-xl shadow-md",
                        win.zIndex === maxZ && !win.isMinimized ? "retro-inset bg-white/90 border-primary/40 shadow-inner" : "bg-[#c0c0c0] border-white/40"
                    )}
                >
                    <win.icon className={cn("size-6 shrink-0", win.zIndex === maxZ ? "text-primary gold-glow" : "text-blue-900")} />
                    <span className="text-[14px] font-black uppercase italic tracking-tighter truncate">{win.title}</span>
                </button>
            ))}
         </div>

         <div className="retro-inset h-13 px-10 flex items-center gap-12 bg-[#c0c0c0] text-black shadow-inner border-4 border-white/30 mr-1 rounded-md">
            <div className="flex items-center gap-6">
                <Clock className="size-6 text-blue-800 animate-neural" />
                <span className="text-3xl font-black italic uppercase tracking-tighter text-blue-950">{time}</span>
            </div>
         </div>
      </div>

      {/* Start Menu */}
      {isStartOpen && (
        <div className="fixed bottom-14 left-2 w-[480px] bg-[#c0c0c0] retro-outset z-[2000] p-1.5 flex animate-in slide-in-from-bottom-6 duration-300 shadow-[0_0_200px_rgba(0,0,0,1)] border-[8px]">
            <div className="w-20 bg-gradient-to-b from-blue-950 via-blue-700 to-blue-900 flex items-center justify-center -ml-1.5 -mt-1.5 -mb-1.5 rounded-l-md border-r-4 border-black/40 shadow-2xl relative overflow-hidden">
                <h2 className="text-white font-black text-5xl -rotate-90 whitespace-nowrap tracking-[1.5em] italic opacity-40 uppercase">ULTRA</h2>
            </div>
            <div className="flex-1 flex flex-col p-3">
                <div className="p-10 border-b-4 border-white/50 bg-white/30 flex items-center gap-10 rounded-tr-[3.5rem] shadow-inner">
                    <div className="size-24 rounded-3xl bg-black border-4 border-primary flex items-center justify-center shadow-9xl animate-neural"><Skull className="size-12 text-primary gold-glow"/></div>
                    <div>
                        <div className="text-3xl font-black text-blue-950 uppercase italic leading-none">ULTRA Overmind</div>
                        <div className="text-[12px] font-black text-blue-800 uppercase tracking-[1em] mt-4 italic">GHAZALI_ROOT</div>
                    </div>
                </div>
                <div className="p-4 space-y-4 overflow-y-auto scrollbar-hide max-h-[550px]">
                    {[
                        { id: 'scenarios', label: 'Battle Scenarios', icon: Workflow, color: "text-blue-800" },
                        { id: 'integrations', label: 'Global Uplinks', icon: Cloud, color: "text-green-800" },
                        { id: 'terminal', label: 'Supreme Shell', icon: Terminal, color: "text-magenta-800" },
                        { id: 'monitors', label: 'Active Monitors', icon: Eye, color: "text-red-700" },
                        { id: 'audit', label: 'System Pulse', icon: ShieldCheck, color: "text-primary" },
                    ].map(item => (
                        <button 
                            key={item.id}
                            onClick={() => toggleWindow(item.id)}
                            className="w-full flex items-center gap-8 px-8 py-5 hover:bg-[#000080] hover:text-white transition-all rounded-2xl text-left group border-4 border-transparent hover:border-white/20 active:retro-inset shadow-md"
                        >
                            <item.icon className={cn("size-10 group-hover:text-white transition-colors", item.color)} />
                            <span className="text-xl font-black uppercase italic tracking-widest">{item.label}</span>
                        </button>
                    ))}
                </div>
                <div className="mt-auto border-t-4 border-white/50 p-6">
                    <button className="flex items-center gap-8 px-10 py-6 bg-[#e0e0e0] border-t-4 border-white hover:bg-red-700 hover:text-white rounded-2xl text-left text-3xl font-black uppercase italic tracking-[1em] shadow-9xl active:scale-95 transition-all w-full"><Power className="size-8"/> SHUTDOWN</button>
                </div>
            </div>
        </div>
      )}

      {/* Global Brand Overlay */}
      <div className="fixed top-20 right-20 flex flex-col items-end opacity-20 pointer-events-none select-none z-0">
          <h2 className="text-[20rem] font-black text-white italic uppercase tracking-[0.2em] gold-glow leading-none">ULTRA</h2>
          <span className="text-4xl font-black text-white uppercase tracking-[2em] mt-10 italic border-t-8 border-primary/40 pt-6">Omnipotent_Overmind_v1.0</span>
      </div>

    </div>
  )
}
