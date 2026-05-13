
"use client"

import * as React from "react"
import { 
  X, 
  Minus, 
  Terminal, 
  Cpu, 
  Skull, 
  Zap, 
  Search, 
  FolderOpen, 
  Play, 
  Settings, 
  HelpCircle,
  Network,
  Monitor,
  Flame,
  Fingerprint,
  Anchor,
  Wind,
  ShieldCheck,
  Maximize2,
  Activity,
  History,
  Folder,
  FileCode,
  ArrowUp,
  Database,
  Camera,
  Map as MapIcon,
  Sparkles,
  Dna,
  Power,
  RefreshCcw,
  Loader2,
  ShieldAlert,
  Wifi,
  Smartphone,
  CheckCircle2,
  Binary,
  Volume2,
  MousePointer2,
  Clock
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { toast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

/**
 * @fileOverview سطح مكتب المُعِزّ v78.0 - THE OMNIPRESENT MATERIAL OS
 * نظام تشغيل سيادي كامل داخل المتصفح. إدارة العقد، الجلسات، والترسانة المادية.
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
  content: 'audit' | 'terminal' | 'siphon' | 'explorer' | 'forge' | 'network' | 'settings';
}

export default function SovereignDesktop() {
  const [mounted, setMounted] = React.useState(false)
  const [windows, setWindows] = React.useState<WindowState[]>([
    { id: 'audit', title: 'Sovereign_Pulse.exe', icon: Activity, isOpen: true, isMinimized: false, zIndex: 10, x: 40, y: 40, content: 'audit' },
    { id: 'explorer', title: 'Matrix_Explorer.sys', icon: FolderOpen, isOpen: false, isMinimized: false, zIndex: 11, x: 100, y: 100, content: 'explorer' },
    { id: 'terminal', title: 'Supreme_Shell.com', icon: Terminal, isOpen: false, isMinimized: false, zIndex: 12, x: 450, y: 80, content: 'terminal' },
    { id: 'siphon', title: 'Identity_Siphon.vbp', icon: Network, isOpen: false, isMinimized: false, zIndex: 13, x: 200, y: 150, content: 'siphon' },
    { id: 'network', title: 'Shadow_Neighborhood.arc', icon: Globe, isOpen: false, isMinimized: false, zIndex: 14, x: 300, y: 200, content: 'network' }
  ])
  const [maxZ, setMaxZ] = React.useState(30)
  const [time, setTime] = React.useState("")
  const [metrics, setMetrics] = React.useState({ cpu: "0.01%", ram: "142MB", resonance: "100.0000%", nodes: "24/24" })
  const [isStartOpen, setIsStartOpen] = React.useState(false)
  const [currentPath, setCurrentPath] = React.useState("/home/project")
  const [dirItems, setDirItems] = React.useState<any[]>([])
  const [loading, setLoading] = React.useState(false)

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
                setMetrics({
                    cpu: data.cpuUsage,
                    ram: data.ramUsage,
                    resonance: data.resonance,
                    nodes: `${data.activeNodes}/24`
                })
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

  const closeWindow = (id: string) => {
    setWindows(prev => prev.map(w => w.id === id ? { ...w, isOpen: false } : w))
  }

  const minimizeWindow = (id: string) => {
    setWindows(prev => prev.map(w => w.id === id ? { ...w, isMinimized: true } : w))
  }

  if (!mounted) return null

  return (
    <div className="retro-desktop scanline-effect font-sans select-none overflow-hidden bg-[#008080]">
      
      {/* Desktop Workspace Icons */}
      <div className="absolute inset-0 p-10 grid grid-flow-col grid-rows-6 gap-12 w-fit h-full z-0">
         {[
            { id: 'audit', label: 'System Pulse', icon: Activity },
            { id: 'explorer', label: 'Explorer', icon: FolderOpen },
            { id: 'siphon', label: 'Predator Nexus', icon: Network },
            { id: 'terminal', label: 'Supreme Shell', icon: Terminal },
            { id: 'network', label: 'Grid Neighborhood', icon: Globe },
            { id: 'settings', label: 'Hive Settings', icon: Settings }
         ].map(icon => (
            <div 
                key={icon.id}
                onDoubleClick={() => toggleWindow(icon.id)}
                className="flex flex-col items-center gap-2 group cursor-pointer w-28 p-2 hover:bg-white/10 rounded-lg transition-all"
            >
                <div className="size-16 flex items-center justify-center bg-black/20 border-2 border-white/5 group-hover:border-primary/40 rounded-xl p-2 shadow-2xl relative">
                    <icon.icon className="size-10 text-white drop-shadow-glow" />
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-20 animate-pulse rounded-xl" />
                </div>
                <span className="text-[10px] text-white font-black text-center uppercase tracking-widest drop-shadow-lg group-hover:bg-[#000080] px-3 py-1 rounded">{icon.label}</span>
            </div>
         ))}
      </div>

      {/* Dynamic Windows */}
      <div className="absolute inset-0 pointer-events-none">
        {windows.filter(w => w.isOpen && !w.isMinimized).map(win => (
            <div 
                key={win.id}
                style={{ zIndex: win.zIndex, left: win.x, top: win.y }}
                onMouseDown={() => focusWindow(win.id)}
                className={cn(
                    "retro-window w-[950px] h-[700px] pointer-events-auto animate-in zoom-in-95 duration-200 shadow-[0_50px_150px_rgba(0,0,0,0.8)] flex flex-col",
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
                    <button className="px-4 py-1 hover:bg-white/40 retro-outset active:retro-inset text-primary">Sovereign_Directives</button>
                </div>

                <div className="flex-1 bg-white m-1 retro-inset p-6 overflow-hidden relative">
                    <div className="absolute inset-0 bg-[#f0f0f0] z-0" />
                    
                    <div className="relative z-10 h-full flex flex-col overflow-y-auto scrollbar-hide">
                        {win.content === 'audit' && (
                            <div className="space-y-10 text-black">
                                <h3 className="font-black border-b-4 border-black pb-4 flex items-center gap-6 text-3xl uppercase italic"><Activity className="size-10 text-primary animate-neural"/> Sovereign Pulse v78.0</h3>
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
                                    <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/grid.png')] animate-pulse" />
                                    <div className="space-y-4 relative z-10">
                                        <div className="flex gap-4 animate-in slide-in-from-left-4 duration-500">
                                            <span className="text-primary font-black">{"[HIVE]"}</span>
                                            <span>Establishing material consensus across 24 knots...</span>
                                        </div>
                                        <div className="flex gap-4 animate-in slide-in-from-left-4 duration-700 delay-100">
                                            <span className="text-emerald-500 font-black">{"[OK]"}</span>
                                            <span>Kernel Ghost V6.0: Persistence locked in BIOS/UEFI.</span>
                                        </div>
                                        <div className="flex gap-4 animate-in slide-in-from-left-4 duration-1000 delay-200">
                                            <span className="text-emerald-500 font-black">{"[OK]"}</span>
                                            <span>Wand3 Engine: Source DNA synchronized 100%.</span>
                                        </div>
                                        <div className="mt-12 p-8 border-4 border-emerald-900 bg-emerald-950/20 rounded-[3rem] shadow-inner">
                                            <div className="text-[12px] font-black uppercase text-emerald-600 mb-6 tracking-[0.6em] italic">Quantum_Material_Stability</div>
                                            <div className="h-6 bg-black rounded-full overflow-hidden border-4 border-emerald-900 p-1">
                                                <div className="h-full bg-emerald-500 shadow-[0_0_30px_rgba(16,185,129,0.8)] animate-pulse" style={{ width: '100%' }} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {win.content === 'explorer' && (
                            <div className="space-y-6 text-black h-full flex flex-col">
                                <div className="flex items-center gap-6 bg-[#c0c0c0] p-6 retro-outset rounded-2xl shadow-lg border-2">
                                    <Button variant="ghost" size="icon" onClick={() => loadDirectory(currentPath.split('/').slice(0,-1).join('/') || '/')} className="retro-outset size-14 shadow-xl active:retro-inset"><ArrowUp className="size-8"/></Button>
                                    <div className="flex-1 retro-inset bg-white px-8 py-3 text-xl font-black truncate italic shadow-inner border-2">{currentPath}</div>
                                    <Button variant="ghost" size="icon" onClick={() => loadDirectory(currentPath)} className="retro-outset size-14 shadow-xl active:retro-inset"><RefreshCcw className="size-8"/></Button>
                                </div>
                                <div className="flex-1 retro-inset bg-white overflow-y-auto scrollbar-hide p-8 grid grid-cols-4 content-start gap-12 shadow-inner min-h-[400px]">
                                    {loading ? (
                                        <div className="col-span-full h-full flex flex-col items-center justify-center opacity-30 gap-10">
                                            <Loader2 className="size-32 animate-spin text-primary" />
                                            <span className="text-2xl font-black uppercase tracking-widest italic">Siphoning_DNA...</span>
                                        </div>
                                    ) : dirItems.map((item, i) => (
                                        <div 
                                            key={i} 
                                            onDoubleClick={() => item.isDirectory ? loadDirectory(item.path) : toast({ title: "Node Serialized", description: `${item.name} absorbed into Ark.` })}
                                            className="flex flex-col items-center gap-4 p-6 hover:bg-blue-100 cursor-pointer rounded-3xl border-4 border-transparent hover:border-blue-400 group transition-all duration-500 active:scale-95"
                                        >
                                            <div className="relative">
                                                {item.isDirectory ? <Folder className="size-20 text-yellow-600 group-hover:scale-110 transition-transform drop-shadow-md" /> : <FileCode className="size-20 text-blue-500 group-hover:scale-110 transition-transform drop-shadow-md" />}
                                                {item.name.includes('muizz') && <Skull className="absolute -top-3 -right-3 size-8 text-red-600 animate-neural" />}
                                            </div>
                                            <span className="text-sm font-black text-center truncate w-full uppercase italic tracking-tighter">{item.name}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="h-12 bg-[#c0c0c0] border-t-2 border-white/50 text-[11px] flex items-center px-8 font-black text-gray-700 uppercase italic bg-gradient-to-r from-transparent via-black/5 to-transparent">
                                    {dirItems.length} OBJECTS IDENTIFIED IN SECTOR.
                                </div>
                            </div>
                        )}

                        {win.content === 'terminal' && (
                            <div className="h-full bg-black text-emerald-400 p-10 font-code text-2xl shadow-2xl relative overflow-hidden flex flex-col rounded-[3rem]">
                                <div className="absolute top-0 right-0 p-16 opacity-5 pointer-events-none scale-150 rotate-12"><Skull className="size-64" /></div>
                                <div className="relative z-10 flex-1 overflow-y-auto scrollbar-hide space-y-6">
                                    <div className="text-primary font-black uppercase tracking-[0.6em] border-b-2 border-primary/20 pb-6 mb-10 text-xl italic gold-glow">Al-Mu'izz Supreme Shell [v78.0]</div>
                                    <div className="text-emerald-500/60 font-black italic">Sovereign Link: GHAZALI_ROOT_IMMUTABLE</div>
                                    <div className="text-emerald-500/60 font-black italic">Consensus: ALL_24_NODES_OMNIPOTENT</div>
                                    <div className="mt-16 flex gap-6 items-center">
                                        <span className="text-primary font-black">GHAZALI_ROOT:~$</span>
                                        <span className="animate-pulse w-5 h-10 bg-emerald-400 shadow-[0_0_20px_rgba(52,211,153,0.8)]" />
                                    </div>
                                </div>
                                <div className="mt-10 p-6 border-t-2 border-emerald-900/50 flex gap-8">
                                    <input className="bg-transparent border-none outline-none text-emerald-400 flex-1 font-mono italic text-3xl placeholder:text-gray-900" placeholder=" Issue absolute directive..." />
                                    <Button className="retro-outset h-14 px-12 text-[14px] font-black bg-[#c0c0c0] text-black hover:bg-white transition-all uppercase italic border-4 active:retro-inset shadow-xl">EXECUTE</Button>
                                </div>
                            </div>
                        )}

                        {win.content === 'siphon' && (
                            <div className="space-y-12 text-black h-full flex flex-col">
                                <div className="retro-outset p-10 flex items-center gap-12 bg-primary/10 border-primary relative overflow-hidden rounded-[3rem] border-4 shadow-2xl">
                                    <div className="absolute inset-0 bg-primary/5 animate-pulse" />
                                    <div className="size-24 rounded-3xl bg-black flex items-center justify-center border-8 border-primary/40 shadow-9xl animate-neural">
                                        <Zap className="size-14 text-primary gold-glow" />
                                    </div>
                                    <div className="relative z-10">
                                        <h4 className="font-black text-6xl italic uppercase gold-glow leading-none">Identity Siphon</h4>
                                        <span className="text-[14px] uppercase font-black text-primary/60 tracking-[1em] mt-4 block italic">v78_QUANTUM_MATERIAL_STRIKE</span>
                                    </div>
                                </div>
                                <div className="flex-1 space-y-12 px-10">
                                    <div className="space-y-6">
                                        <label className="text-[14px] font-black uppercase tracking-[1em] text-gray-500 italic px-8 flex items-center gap-4"><Target className="size-6"/> Target Cluster:</label>
                                        <input className="w-full retro-inset h-28 px-12 text-5xl text-black font-black italic bg-white/50 focus:bg-white transition-all shadow-inner border-8 border-black/10 rounded-[2.5rem]" placeholder="MSISDN / @Handle / Email" />
                                    </div>
                                    <div className="grid grid-cols-2 gap-10">
                                        <Button className="retro-button h-36 bg-[#c0c0c0] hover:bg-white text-3xl font-black italic border-8 flex flex-col gap-4 rounded-[2rem] shadow-xl active:scale-95"><Camera className="size-12 text-red-600" /> Ocular Hub</Button>
                                        <Button className="retro-button h-36 bg-[#c0c0c0] hover:bg-white text-3xl font-black italic border-8 flex flex-col gap-4 rounded-[2rem] shadow-xl active:scale-95"><MapIcon className="size-12 text-blue-600" /> Seeker GPS</Button>
                                        <Button className="retro-button col-span-2 bg-red-700 hover:bg-red-600 text-white h-36 text-5xl font-black uppercase tracking-[1.5em] italic border-[16px] border-black/30 shadow-[0_60px_150px_rgba(220,38,38,0.5)] active:scale-90 transition-all rounded-[4rem]">
                                            <Skull className="size-16 mr-12" /> IGNITE_STRIKE
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        )}

                        {win.content === 'network' && (
                             <div className="space-y-10 text-black h-full flex flex-col">
                                <h3 className="font-black border-b-4 border-black pb-4 flex items-center gap-6 text-3xl uppercase italic"><Globe className="size-10 text-blue-600 animate-spin-slow"/> Grid Neighborhood</h3>
                                <div className="grid grid-cols-1 gap-6 flex-1 overflow-y-auto scrollbar-hide p-4">
                                    {[
                                        { name: "Samsung_S26_Alpha", ip: "192.168.1.104", status: "ZOMBIE", icon: Smartphone },
                                        { name: "iPhone_17_Beta", ip: "10.0.0.12", status: "HARVESTING", icon: Smartphone },
                                        { name: "Global_Identity_Node", ip: "104.24.x.x", status: "ACTIVE", icon: Network }
                                    ].map((node, idx) => (
                                        <div key={idx} className="retro-outset p-6 bg-[#d0d0d0] flex items-center justify-between group hover:bg-[#000080] hover:text-white transition-all cursor-pointer rounded-2xl border-4 shadow-lg active:retro-inset">
                                            <div className="flex items-center gap-8">
                                                <div className="size-16 bg-black/20 rounded-xl flex items-center justify-center border-2 border-black/10 group-hover:border-white/40"><node.icon className="size-8"/></div>
                                                <div>
                                                    <div className="text-3xl font-black italic uppercase leading-none">{node.name}</div>
                                                    <div className="text-[10px] uppercase font-bold opacity-60 mt-2 tracking-widest">{node.ip} // {node.status}</div>
                                                </div>
                                            </div>
                                            <ChevronRight className="size-10 opacity-20 group-hover:opacity-100 group-hover:translate-x-3 transition-all" />
                                        </div>
                                    ))}
                                </div>
                                <div className="p-6 retro-outset bg-[#c0c0c0] flex items-center justify-center gap-8 shadow-inner border-2 rounded-xl">
                                    <Badge className="bg-emerald-600 text-white border-none px-6 py-2 rounded-full font-black text-xs italic shadow-md">3_NODES_SUBJUGATED</Badge>
                                    <Badge className="bg-blue-600 text-white border-none px-6 py-2 rounded-full font-black text-xs italic shadow-md">HIVE_STABLE</Badge>
                                </div>
                             </div>
                        )}
                    </div>
                </div>
                
                <div className="h-10 bg-[#c0c0c0] border-t-2 border-white/50 text-[10px] flex items-center px-8 italic text-gray-800 font-black uppercase tracking-widest bg-gradient-to-r from-transparent via-white/40 to-transparent">
                    Node: {win.title} | {win.zIndex === maxZ ? "SINGULARITY_LOCKED" : "BACKGROUND_PROCESS"} | Material_Resonance: 100%
                </div>
            </div>
        ))}
      </div>

      {/* Start Menu */}
      {isStartOpen && (
        <div className="fixed bottom-14 left-2 w-[480px] bg-[#c0c0c0] retro-outset z-[2000] p-1.5 flex animate-in slide-in-from-bottom-6 duration-300 shadow-[0_0_200px_rgba(0,0,0,1)] border-[8px]">
            <div className="w-20 bg-gradient-to-b from-blue-950 via-blue-700 to-blue-900 flex items-center justify-center -ml-1.5 -mt-1.5 -mb-1.5 rounded-l-md border-r-4 border-black/40 shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-white/5 animate-pulse" />
                <h2 className="text-white font-black text-5xl -rotate-90 whitespace-nowrap tracking-[1.5em] italic opacity-40 uppercase">AL-MUIZZ</h2>
            </div>
            <div className="flex-1 flex flex-col p-3">
                <div className="p-10 border-b-4 border-white/50 bg-white/30 flex items-center gap-10 rounded-tr-[3.5rem] shadow-inner">
                    <div className="size-24 rounded-3xl bg-black border-4 border-primary flex items-center justify-center shadow-9xl animate-neural"><Skull className="size-12 text-primary gold-glow"/></div>
                    <div>
                        <div className="text-3xl font-black text-blue-950 uppercase italic leading-none">Commander</div>
                        <div className="text-[12px] font-black text-blue-800 uppercase tracking-[1em] mt-4 italic">GHAZALI_ROOT</div>
                    </div>
                </div>
                <div className="p-4 space-y-4 overflow-y-auto scrollbar-hide max-h-[550px]">
                    {[
                        { id: 'audit', label: 'System Pulse', icon: ShieldCheck, color: "text-blue-800" },
                        { id: 'terminal', label: 'Supreme Shell', icon: Terminal, color: "text-green-800" },
                        { id: 'siphon', label: 'Predator Nexus', icon: Network, color: "text-magenta-800" },
                        { id: 'network', label: 'Shadow Grid', icon: Globe, color: "text-blue-600" },
                        { id: 'explorer', label: 'Material Explorer', icon: FolderOpen, color: "text-yellow-800" },
                        { id: 'monitor', label: 'Hardware Monitor', icon: Cpu, color: "text-primary" },
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
                <div className="mt-auto border-t-4 border-white/50 p-6 flex flex-col gap-4 bg-white/10 rounded-br-[3rem]">
                    <button className="flex items-center gap-6 px-8 py-4 hover:bg-[#000080] hover:text-white rounded-xl text-left text-sm font-black uppercase tracking-widest italic transition-all border-2 border-transparent active:retro-inset"><Settings className="size-6"/> System Registry</button>
                    <button className="flex items-center gap-8 px-10 py-6 bg-[#e0e0e0] border-t-4 border-white hover:bg-red-700 hover:text-white rounded-2xl text-left text-3xl font-black uppercase italic tracking-[1em] shadow-9xl active:scale-95 transition-all"><Power className="size-8"/> SHUTDOWN</button>
                </div>
            </div>
        </div>
      )}

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
            <div className="flex items-center gap-6 group cursor-help" onClick={() => toast({ title: "Material Metrics", description: `CPU: ${metrics.cpu} | Nodes: ${metrics.nodes}` })}>
                <div className="size-4 rounded-full bg-emerald-500 animate-ping shadow-[0_0_20px_rgba(16,185,129,0.8)]" />
                <div className="flex flex-col">
                    <span className="text-[9px] font-black text-gray-600 uppercase leading-none tracking-widest">OS_RES</span>
                    <span className="text-xl font-black italic text-blue-950 tracking-tighter">{metrics.resonance}</span>
                </div>
            </div>
            <div className="flex items-center gap-6 border-l-4 border-white/40 pl-10 pr-2">
                <Clock className="size-6 text-blue-800 animate-neural" />
                <span className="text-3xl font-black italic uppercase tracking-tighter text-blue-950 drop-shadow-sm">{time}</span>
            </div>
         </div>
      </div>

      {/* Global Background UI Elements */}
      <div className="fixed top-20 right-20 flex flex-col items-end opacity-20 pointer-events-none select-none z-0">
          <h2 className="text-[20rem] font-black text-white italic uppercase tracking-[0.2em] gold-glow leading-none">AL-MUIZZ</h2>
          <span className="text-4xl font-black text-white uppercase tracking-[2em] mt-10 italic border-t-8 border-primary/40 pt-6">Total_Dominion_v78_OS</span>
      </div>
      
      <div className="fixed bottom-24 right-16 flex items-center gap-12 opacity-30 text-sm font-black uppercase tracking-[1em] text-white z-[50] italic drop-shadow-3xl">
          <Fingerprint className="size-8 text-primary animate-pulse" /> GHAZALI_ROOT // MATERIAL_SINGULARITY_v78
      </div>

      <div className="absolute bottom-40 right-40 p-80 opacity-[0.03] pointer-events-none scale-[2.5] rotate-12 z-0 text-white animate-neural">
         <Skull className="size-[60rem]" />
      </div>

    </div>
  )
}
