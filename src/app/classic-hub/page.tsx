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
  LayoutGrid,
  Radar,
  Eye,
  Flame,
  ShieldCheck,
  Shield,
  Wind
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { toast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

/**
 * @fileOverview سطح مكتب المُعِزّ ULTRA v1.0 - THE OMNIPOTENT OVERMIND OS
 * نظام تشغيل سيادي كامل يدعم السيناريوهات القتالية والمراقبة المستمرة بنمط Windows الكلاسيكي.
 * المالك الوحيد: المعتصم بالله ادريس الغزالي
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
  content: 'audit' | 'terminal' | 'siphon' | 'explorer' | 'scenarios' | 'integrations' | 'monitors' | 'oracle' | 'network';
}

export default function SovereignDesktop() {
  const [mounted, setMounted] = React.useState(false)
  const [windows, setWindows] = React.useState<WindowState[]>([
    { id: 'audit', title: 'Supreme_Pulse_v78.exe', icon: Activity, isOpen: true, isMinimized: false, zIndex: 10, x: 20, y: 20, content: 'audit' },
    { id: 'oracle', title: 'Absolute_Oracle_v78.sys', icon: Radar, isOpen: false, isMinimized: false, zIndex: 11, x: 100, y: 50, content: 'oracle' },
    { id: 'scenarios', title: 'Battle_Scenarios.lib', icon: Workflow, isOpen: false, isMinimized: false, zIndex: 12, x: 150, y: 80, content: 'scenarios' },
    { id: 'integrations', title: 'Cloud_Uplink.arc', icon: Cloud, isOpen: false, isMinimized: false, zIndex: 13, x: 200, y: 110, content: 'integrations' },
    { id: 'terminal', title: 'ULTRA_Shell.com', icon: Terminal, isOpen: false, isMinimized: false, zIndex: 14, x: 250, y: 140, content: 'terminal' },
    { id: 'monitors', title: 'Live_Eye_Monitor.sys', icon: Eye, isOpen: false, isMinimized: false, zIndex: 15, x: 300, y: 170, content: 'monitors' },
    { id: 'explorer', title: 'Matrix_Explorer.exe', icon: FolderOpen, isOpen: false, isMinimized: false, zIndex: 16, x: 50, y: 50, content: 'explorer' },
    { id: 'network', title: 'Network_Neighborhood.sys', icon: Network, isOpen: false, isMinimized: false, zIndex: 17, x: 80, y: 100, content: 'network' }
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
    const metricTimer = setInterval(fetchMetrics, 30000);

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
      <div className="absolute inset-0 p-4 md:p-10 grid grid-flow-col grid-rows-8 gap-8 md:gap-12 w-fit h-full z-0 overflow-y-auto scrollbar-hide">
         {[
            { id: 'audit', label: 'System Pulse', icon: Activity },
            { id: 'oracle', label: 'Absolute Oracle', icon: Radar },
            { id: 'scenarios', label: 'Battle Scenarios', icon: Workflow },
            { id: 'integrations', label: 'Cloud Uplink', icon: Cloud },
            { id: 'terminal', label: 'ULTRA Shell', icon: Terminal },
            { id: 'monitors', label: 'Active Monitors', icon: Eye },
            { id: 'explorer', label: 'File Matrix', icon: FolderOpen },
            { id: 'network', label: 'Network Hood', icon: Network }
         ].map(icon => (
            <div 
                key={icon.id}
                onDoubleClick={() => toggleWindow(icon.id)}
                className="flex flex-col items-center gap-2 group cursor-pointer w-24 md:w-28 p-2 hover:bg-white/10 rounded-lg transition-all"
            >
                <div className="size-14 md:size-16 flex items-center justify-center bg-black/20 border-2 border-white/5 group-hover:border-primary/40 rounded-xl p-2 shadow-2xl relative">
                    <icon.icon className="size-8 md:size-10 text-white drop-shadow-glow" />
                </div>
                <span className="text-[8px] md:text-[9px] text-white font-black text-center uppercase tracking-widest drop-shadow-lg group-hover:bg-[#000080] px-3 py-1 rounded">{icon.label}</span>
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
                    "retro-window w-[90vw] md:w-[1000px] h-[80vh] md:h-[750px] pointer-events-auto animate-in zoom-in-95 duration-200 shadow-9xl flex flex-col",
                    win.zIndex === maxZ ? "border-primary/60" : "border-white/10"
                )}
            >
                <div className={cn("retro-title-bar h-10 px-4", win.zIndex === maxZ ? "bg-gradient-to-r from-blue-900 via-blue-700 to-blue-900 text-white" : "bg-gray-700 text-gray-400")}>
                    <div className="flex items-center gap-3 font-black uppercase italic tracking-tighter text-[10px] md:text-[11px] truncate mr-4">
                        <win.icon className={cn("size-4 md:size-5 shrink-0", win.zIndex === maxZ ? "text-primary gold-glow" : "text-gray-500")} />
                        <span className="truncate">{win.title}</span>
                    </div>
                    <div className="flex gap-2 shrink-0">
                        <button onClick={(e) => { e.stopPropagation(); minimizeWindow(win.id) }} className="retro-outset size-7 flex items-center justify-center hover:bg-white/20 active:retro-inset"><Minus className="size-4"/></button>
                        <button className="retro-outset size-7 flex items-center justify-center hover:bg-white/20 active:retro-inset"><Maximize2 className="size-4"/></button>
                        <button onClick={(e) => { e.stopPropagation(); closeWindow(win.id) }} className="retro-outset size-7 flex items-center justify-center hover:bg-red-700 hover:text-white"><X className="size-4"/></button>
                    </div>
                </div>

                <div className="p-2 border-b border-black/20 flex gap-4 bg-[#c0c0c0] text-[9px] md:text-[10px] font-black uppercase italic shadow-inner overflow-x-auto scrollbar-hide">
                    <button className="px-4 py-1 hover:bg-white/40 retro-outset active:retro-inset shrink-0">File</button>
                    <button className="px-4 py-1 hover:bg-white/40 retro-outset active:retro-inset shrink-0">Execute</button>
                    <button className="px-4 py-1 hover:bg-white/40 retro-outset active:retro-inset text-primary shrink-0">ULTRA_Directives</button>
                </div>

                <div className="flex-1 bg-white m-1 retro-inset p-4 md:p-6 overflow-hidden relative">
                    <div className="absolute inset-0 bg-[#f0f0f0] z-0" />
                    <div className="relative z-10 h-full flex flex-col overflow-y-auto scrollbar-hide">
                        
                        {win.content === 'audit' && (
                            <div className="space-y-6 md:space-y-10 text-black">
                                <h3 className="font-black border-b-4 border-black pb-4 flex items-center gap-6 text-2xl md:text-3xl uppercase italic"><Activity className="size-8 md:size-10 text-primary animate-neural"/> ULTRA Pulse v1.0</h3>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                                    {[
                                        { label: 'CPU_LOAD', val: metrics.cpu, color: 'text-green-700' },
                                        { label: 'RAM_MESH', val: metrics.ram, color: 'text-blue-700' },
                                        { label: 'RESONANCE', val: metrics.resonance, color: 'text-primary' },
                                        { label: 'NODES_BOUND', val: metrics.nodes, color: 'text-red-700' }
                                    ].map(m => (
                                        <div key={m.label} className="retro-outset p-4 md:p-6 bg-[#c0c0c0] text-center shadow-md">
                                            <div className="text-[8px] md:text-[9px] uppercase font-black text-gray-600 tracking-widest mb-2 md:mb-3">{m.label}</div>
                                            <div className={cn("text-xl md:text-3xl font-black italic gold-glow", m.color)}>{m.val}</div>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex-1 retro-inset p-4 md:p-8 bg-black text-emerald-500 font-mono text-sm md:text-xl shadow-2xl relative overflow-hidden min-h-[300px]">
                                    <div className="space-y-3 md:space-y-4 relative z-10">
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

                        {win.content === 'oracle' && (
                             <div className="space-y-6 md:space-y-10 text-black h-full flex flex-col">
                                <h3 className="font-black border-b-4 border-black pb-4 flex items-center gap-6 text-2xl md:text-3xl uppercase italic"><Radar className="size-8 md:size-10 text-primary animate-pulse"/> Innate Oracle Vision</h3>
                                <div className="p-4 md:p-8 bg-[#c0c0c0] border-4 border-white/50 retro-outset space-y-4 md:space-y-6">
                                    <div className="flex justify-between items-center text-lg md:text-xl font-black uppercase italic text-blue-900 border-b-2 border-black/10 pb-4">
                                        <span>Predictive Threat DNA</span>
                                        <Badge className="bg-emerald-600 text-white font-black italic">INNATE_v78.5</Badge>
                                    </div>
                                    <p className="text-lg md:text-2xl text-gray-700 font-bold italic leading-relaxed">
                                        "سيدي القائد، العراف الآن صامد في عصب الإدراك الفطري؛ نحن نستشعر الثغرات المادية والبرمجية عبر الـ 2,983 أداة المدمجة حياً."
                                    </p>
                                </div>
                                <div className="flex-1 retro-inset p-4 md:p-6 bg-black text-emerald-400 font-mono text-sm md:text-lg overflow-y-auto scrollbar-hide">
                                    <div className="animate-pulse mb-4 text-primary font-black uppercase italic">{">>>"} Material Oracle Siphon Active...</div>
                                    <div className="space-y-2">
                                        <div>[OK] CVE-2026-23918: Global Identity Mesh - Neural Key Leakage (Material Link)</div>
                                        <div>[OK] Android Bulletin 2026-05: Zero-Click Qualcomm Logic Enslaved.</div>
                                        <div>[OK] Linux Kernel v6.0 Ghost Persistence Bypassed.</div>
                                    </div>
                                </div>
                             </div>
                        )}

                        {win.content === 'scenarios' && (
                            <div className="space-y-10 text-black">
                                <h3 className="font-black border-b-4 border-black pb-4 flex items-center gap-6 text-2xl md:text-3xl uppercase italic"><Workflow className="size-8 md:size-10 text-blue-800"/> Battle Scenarios</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                                    {[
                                        { id: 'penetration', label: 'Penetration Testing', icon: Target, desc: 'Full automated security audit.' },
                                        { id: 'osint', label: 'OSINT Investigation', icon: Search, desc: 'Trace-back and identity mapping.' },
                                        { id: 'android', label: 'Android Deep Analysis', icon: Smartphone, desc: 'APK reverse and Pegasus siphon.' },
                                        { id: 'social', label: 'Social Predator', icon: Network, desc: 'Mass extraction across 12 platforms.' }
                                    ].map(s => (
                                        <div 
                                            key={s.id}
                                            onClick={() => handleScenario(s.id)}
                                            className="retro-outset p-4 md:p-6 bg-[#d0d0d0] hover:bg-[#000080] hover:text-white cursor-pointer group transition-all rounded-2xl flex items-center gap-6 md:gap-8 shadow-xl"
                                        >
                                            <div className="size-16 md:size-20 rounded-xl bg-black/10 flex items-center justify-center group-hover:bg-white/20 shrink-0"><s.icon className="size-8 md:size-12"/></div>
                                            <div>
                                                <div className="text-xl md:text-3xl font-black italic uppercase leading-none">{s.label}</div>
                                                <p className="text-[8px] md:text-[10px] mt-2 font-bold opacity-60">{s.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {win.content === 'terminal' && (
                            <div className="h-full bg-black text-emerald-400 p-6 md:p-10 font-code text-sm md:text-2xl shadow-2xl relative overflow-hidden flex flex-col rounded-[2rem] md:rounded-[3rem]">
                                <div className="absolute top-0 right-0 p-16 opacity-5 pointer-events-none scale-150 rotate-12"><Skull className="size-48 md:size-64" /></div>
                                <div className="relative z-10 flex-1 overflow-y-auto scrollbar-hide space-y-4 md:space-y-6">
                                    <div className="text-primary font-black uppercase tracking-[0.4em] md:tracking-[0.6em] border-b-2 border-primary/20 pb-4 mb-6 md:mb-10 text-lg md:text-xl italic gold-glow">Al-Mu'izz ULTRA Shell [v1.0]</div>
                                    <div className="text-emerald-500/60 font-black italic">Sovereign_Overmind: GHAZALI_ROOT_IMMUTABLE</div>
                                    <div className="mt-12 md:mt-16 flex gap-4 md:gap-6 items-center">
                                        <span className="text-primary font-black">GHAZALI_ROOT:~$</span>
                                        <span className="animate-pulse w-3 h-6 md:w-5 md:h-10 bg-emerald-400 shadow-[0_0_20px_rgba(52,211,153,0.8)]" />
                                    </div>
                                </div>
                            </div>
                        )}

                        {win.content === 'explorer' && (
                             <div className="flex flex-col h-full text-black">
                                <div className="flex items-center gap-4 bg-[#c0c0c0] p-2 retro-inset mb-4 overflow-x-auto scrollbar-hide">
                                    <span className="text-[10px] font-black uppercase italic shrink-0">Address:</span>
                                    <div className="flex-1 retro-inset bg-white px-4 py-1 text-[11px] font-bold italic text-blue-900 truncate">
                                        {currentPath}
                                    </div>
                                    <Button size="icon" variant="ghost" onClick={() => loadDirectory(currentPath.split('/').slice(0,-1).join('/') || '/')} className="size-8 retro-outset"><ArrowUp className="size-4"/></Button>
                                </div>
                                <div className="flex-1 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 overflow-y-auto scrollbar-hide p-4">
                                    {dirItems.map((item, i) => (
                                        <div 
                                            key={i} 
                                            onDoubleClick={() => item.isDirectory && loadDirectory(item.path)}
                                            className="flex flex-col items-center gap-2 p-2 hover:bg-blue-100 border border-transparent hover:border-blue-300 rounded group cursor-pointer"
                                        >
                                            {item.isDirectory ? <Folder className="size-10 text-yellow-600 fill-yellow-500"/> : <FileCode className="size-10 text-blue-600"/>}
                                            <span className="text-[10px] font-bold text-center break-all">{item.name}</span>
                                        </div>
                                    ))}
                                    {loading && <div className="col-span-full flex justify-center py-10"><Loader2 className="size-12 animate-spin text-primary"/></div>}
                                </div>
                             </div>
                        )}

                        {win.content === 'network' && (
                             <div className="space-y-6 text-black h-full flex flex-col">
                                <h3 className="font-black border-b-4 border-black pb-4 flex items-center gap-6 text-2xl md:text-3xl uppercase italic"><Network className="size-8 md:size-10 text-emerald-700"/> Network Neighborhood</h3>
                                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 overflow-y-auto scrollbar-hide">
                                    {[
                                        { name: "Target_Android_Alpha", status: "ONLINE", icon: Smartphone, ip: "192.168.1.104" },
                                        { name: "Target_iPhone_Beta", status: "SIPHONING", icon: Smartphone, ip: "10.0.0.12" },
                                        { name: "Global_Identity_Mesh", status: "LOCKED", icon: Globe, ip: "CLOUD_RESONANCE" },
                                        { name: "Sovereign_C2_Hub", status: "MASTER", icon: Server, ip: "127.0.0.1" }
                                    ].map((node, i) => (
                                        <div key={i} className="retro-outset p-6 bg-[#d0d0d0] flex items-center gap-6 rounded-2xl group hover:bg-blue-900 hover:text-white transition-all">
                                            <node.icon className="size-12 text-blue-900 group-hover:text-primary animate-pulse" />
                                            <div className="flex-1">
                                                <div className="text-xl font-black uppercase italic">{node.name}</div>
                                                <div className="text-[10px] font-bold opacity-60">{node.ip}</div>
                                            </div>
                                            <Badge className="bg-emerald-600 text-white font-black italic">{node.status}</Badge>
                                        </div>
                                    ))}
                                </div>
                             </div>
                        )}
                        
                    </div>
                </div>
                
                <div className="h-10 bg-[#c0c0c0] border-t-2 border-white/50 text-[9px] md:text-[10px] flex items-center px-4 md:px-8 italic text-gray-800 font-black uppercase tracking-widest truncate">
                    ULTRA_OS: {win.title} | {win.zIndex === maxZ ? "SINGULARITY_LOCKED" : "BACKGROUND_PROCESS"} | Material_Resonance: 100%
                </div>
            </div>
        ))}
      </div>

      {/* Taskbar */}
      <div className="retro-taskbar h-12 md:h-16 border-t-4 border-white/80 shadow-[0_-30px_150px_rgba(0,0,0,1)] bg-[#c0c0c0] z-[3000] flex items-center px-2">
         <button 
            onClick={() => setIsStartOpen(!isStartOpen)}
            className={cn(
                "retro-outset h-10 md:h-13 px-6 md:px-10 flex items-center gap-4 md:gap-6 hover:bg-[#d0d0d0] active:retro-inset group transition-all duration-300 ml-1 rounded-md",
                isStartOpen ? "retro-inset bg-[#e0e0e0] border-primary/60" : "bg-[#c0c0c0] border-white/60"
            )}
         >
            <div className="bg-primary size-8 md:size-10 rounded-md flex items-center justify-center group-hover:rotate-12 transition-transform shadow-inner border-4 border-black/10">
                <Skull className="size-6 md:size-8 text-black" />
            </div>
            <span className="font-black text-xl md:text-3xl text-black italic uppercase tracking-tighter">Start</span>
         </button>
         
         <div className="flex-1 flex gap-2 md:gap-4 px-4 md:px-12 overflow-x-auto scrollbar-hide items-center">
            {windows.filter(w => w.isOpen).map(win => (
                <button 
                    key={win.id}
                    onClick={() => focusWindow(win.id)}
                    className={cn(
                        "retro-outset h-8 md:h-12 px-4 md:px-8 flex items-center gap-3 md:gap-4 min-w-[150px] md:min-w-[240px] max-w-[320px] truncate transition-all text-black border-2 md:border-4 rounded-lg md:rounded-xl shadow-md",
                        win.zIndex === maxZ && !win.isMinimized ? "retro-inset bg-white/90 border-primary/40 shadow-inner" : "bg-[#c0c0c0] border-white/40"
                    )}
                >
                    <win.icon className={cn("size-4 md:size-6 shrink-0", win.zIndex === maxZ ? "text-primary gold-glow" : "text-blue-900")} />
                    <span className="text-[10px] md:text-[14px] font-black uppercase italic tracking-tighter truncate">{win.title}</span>
                </button>
            ))}
         </div>

         <div className="retro-inset h-10 md:h-13 px-4 md:px-10 flex items-center gap-6 md:gap-12 bg-[#c0c0c0] text-black shadow-inner border-4 border-white/30 mr-1 rounded-md mobile-hide">
            <div className="flex items-center gap-6">
                <Clock className="size-6 text-blue-800 animate-neural" />
                <span className="text-xl md:text-3xl font-black italic uppercase tracking-tighter text-blue-950">{time}</span>
            </div>
         </div>
      </div>

      {/* Start Menu */}
      {isStartOpen && (
        <div className="fixed bottom-14 left-2 w-[90vw] md:w-[480px] bg-[#c0c0c0] retro-outset z-[2000] p-1.5 flex animate-in slide-in-from-bottom-6 duration-300 shadow-[0_0_200px_rgba(0,0,0,1)] border-[4px] md:border-[8px]">
            <div className="w-16 md:w-20 bg-gradient-to-b from-blue-950 via-blue-700 to-blue-900 flex items-center justify-center -ml-1.5 -mt-1.5 -mb-1.5 rounded-l-md border-r-4 border-black/40 shadow-2xl relative overflow-hidden mobile-hide">
                <h2 className="text-white font-black text-4xl md:text-5xl -rotate-90 whitespace-nowrap tracking-[1.5em] italic opacity-40 uppercase">ULTRA</h2>
            </div>
            <div className="flex-1 flex flex-col p-2 md:p-3">
                <div className="p-6 md:p-10 border-b-4 border-white/50 bg-white/30 flex items-center gap-6 md:gap-10 rounded-tr-[2rem] md:rounded-tr-[3.5rem] shadow-inner">
                    <div className="size-16 md:size-24 rounded-2xl md:rounded-3xl bg-black border-2 md:border-4 border-primary flex items-center justify-center shadow-9xl animate-neural"><Skull className="size-8 md:size-12 text-primary gold-glow"/></div>
                    <div>
                        <div className="text-xl md:text-3xl font-black text-blue-950 uppercase italic leading-none">ULTRA Overmind</div>
                        <div className="text-[10px] md:text-[12px] font-black text-blue-800 uppercase tracking-[0.5em] md:tracking-[1em] mt-3 md:mt-4 italic">GHAZALI_ROOT</div>
                    </div>
                </div>
                <div className="p-2 md:p-4 space-y-2 md:space-y-4 overflow-y-auto scrollbar-hide max-h-[450px] md:max-h-[550px]">
                    {[
                        { id: 'oracle', label: 'Absolute Oracle', icon: Radar, color: "text-primary" },
                        { id: 'scenarios', label: 'Battle Scenarios', icon: Workflow, color: "text-blue-800" },
                        { id: 'integrations', label: 'Global Uplinks', icon: Cloud, color: "text-green-800" },
                        { id: 'terminal', label: 'Supreme Shell', icon: Terminal, color: "text-magenta-800" },
                        { id: 'monitors', label: 'Active Monitors', icon: Eye, color: "text-red-700" },
                        { id: 'explorer', label: 'File Matrix', icon: FolderOpen, color: "text-yellow-700" },
                        { id: 'network', label: 'Network Neighborhood', icon: Network, color: "text-emerald-700" },
                        { id: 'audit', label: 'System Pulse', icon: ShieldCheck, color: "text-primary" },
                    ].map(item => (
                        <button 
                            key={item.id}
                            onClick={() => toggleWindow(item.id)}
                            className="w-full flex items-center gap-6 md:gap-8 px-4 md:px-8 py-3 md:py-5 hover:bg-[#000080] hover:text-white transition-all rounded-xl md:rounded-2xl text-left group border-2 md:border-4 border-transparent hover:border-white/20 active:retro-inset shadow-md"
                        >
                            <item.icon className={cn("size-6 md:size-10 group-hover:text-white transition-colors", item.color)} />
                            <span className="text-lg md:text-xl font-black uppercase italic tracking-widest truncate">{item.label}</span>
                        </button>
                    ))}
                </div>
                <div className="mt-auto border-t-4 border-white/50 p-4 md:p-6">
                    <button className="flex items-center gap-6 md:gap-8 px-6 md:px-10 py-4 md:py-6 bg-[#e0e0e0] border-t-4 border-white hover:bg-red-700 hover:text-white rounded-xl md:rounded-2xl text-left text-2xl md:text-3xl font-black uppercase italic tracking-[0.5em] md:tracking-[1em] shadow-9xl active:scale-95 transition-all w-full"><Power className="size-6 md:size-8"/> SHUTDOWN</button>
                </div>
            </div>
        </div>
      )}

      {/* Global Brand Overlay */}
      <div className="fixed top-20 right-20 flex flex-col items-end opacity-20 pointer-events-none select-none z-0 mobile-hide">
          <h2 className="text-[15rem] md:text-[20rem] font-black text-white italic uppercase tracking-[0.2em] gold-glow leading-none">ULTRA</h2>
          <span className="text-2xl md:text-4xl font-black text-white uppercase tracking-[1em] md:tracking-[2em] mt-10 italic border-t-8 border-primary/40 pt-6">Omnipotent_Overmind_v1.0</span>
      </div>

    </div>
  )
}

function Server({className}: {className?: string}) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/></svg>
    )
}
