
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
  Loader2
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { toast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

/**
 * @fileOverview سطح مكتب المُعِزّ v77.5 - THE TOTAL DOMINION OS
 * تم تحسين النبض لتقليل استهلاك الذاكرة وإصلاح أخطاء JSX.
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
  content: 'audit' | 'terminal' | 'siphon' | 'explorer' | 'forge' | 'monitor';
}

export default function SovereignDesktop() {
  const [mounted, setMounted] = React.useState(false)
  const [windows, setWindows] = React.useState<WindowState[]>([
    { id: 'audit', title: 'System_Audit.exe', icon: Activity, isOpen: true, isMinimized: false, zIndex: 10, x: 50, y: 50, content: 'audit' },
    { id: 'terminal', title: 'Supreme_Shell.com', icon: Terminal, isOpen: false, isMinimized: false, zIndex: 11, x: 400, y: 100, content: 'terminal' },
    { id: 'siphon', title: 'Identity_Siphon.vbp', icon: Network, isOpen: false, isMinimized: false, zIndex: 12, x: 200, y: 150, content: 'siphon' },
    { id: 'explorer', title: 'Matrix_Explorer.sys', icon: FolderOpen, isOpen: false, isMinimized: false, zIndex: 13, x: 100, y: 200, content: 'explorer' },
    { id: 'monitor', title: 'Hive_Monitor.bin', icon: Cpu, isOpen: false, isMinimized: false, zIndex: 14, x: 300, y: 300, content: 'monitor' }
  ])
  const [maxZ, setMaxZ] = React.useState(30)
  const [time, setTime] = React.useState("")
  const [metrics, setMetrics] = React.useState({ cpu: "0.01%", ram: "142MB", resonance: "100.00%" })
  const [isStartOpen, setIsStartOpen] = React.useState(false)
  
  const [currentPath, setCurrentPath] = React.useState("/home/project")
  const [dirItems, setDirItems] = React.useState<any[]>([])

  React.useEffect(() => {
    setMounted(true)
    const updateTime = () => setTime(new Date().toLocaleTimeString('ar-SA'))
    updateTime()
    const timer = setInterval(updateTime, 1000)
    
    const metricTimer = setInterval(() => {
        setMetrics({
            cpu: (Math.random() * 0.05).toFixed(2) + "%",
            ram: (140 + Math.random() * 5).toFixed(0) + "MB",
            resonance: (99.999 + Math.random() * 0.001).toFixed(4) + "%"
        })
    }, 15000); // تقليل التكرار لتوفير الذاكرة

    return () => {
        clearInterval(timer)
        clearInterval(metricTimer)
    }
  }, [])

  const loadDirectory = async (path: string) => {
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
    } catch (e) {}
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
    <div className="retro-desktop scanline-effect font-sans select-none overflow-hidden bg-black">
      
      {/* Desktop Workspace Icons */}
      <div className="absolute inset-0 p-10 grid grid-flow-col grid-rows-6 gap-12 w-fit h-full z-0">
         {[
            { id: 'audit', label: 'System Audit', icon: ShieldCheck },
            { id: 'explorer', label: 'Explorer', icon: FolderOpen },
            { id: 'siphon', label: 'Social Siphon', icon: Network },
            { id: 'terminal', label: 'Supreme Shell', icon: Terminal },
            { id: 'monitor', label: 'Hive Monitor', icon: Cpu },
            { id: 'ark', label: 'Noah\'s Ark', icon: Anchor }
         ].map(icon => (
            <div 
                key={icon.id}
                onDoubleClick={() => toggleWindow(icon.id)}
                className="flex flex-col items-center gap-2 group cursor-pointer w-28 p-2 hover:bg-blue-900/30 rounded-lg transition-all"
            >
                <div className="size-16 flex items-center justify-center bg-black/40 border-2 border-white/5 group-hover:border-primary/40 rounded-xl p-2 shadow-2xl">
                    <icon.icon className="size-10 text-white drop-shadow-glow" />
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
                    "retro-window w-[850px] h-[650px] pointer-events-auto animate-in zoom-in-95 duration-200 shadow-9xl flex flex-col",
                    win.zIndex === maxZ ? "border-primary/60" : "border-white/10"
                )}
            >
                <div className={cn("retro-title-bar h-10 px-4", win.zIndex === maxZ ? "bg-primary text-black" : "bg-gray-800 text-white")}>
                    <div className="flex items-center gap-3 font-black uppercase italic tracking-tight">
                        <win.icon className="size-5" />
                        <span>{win.title}</span>
                    </div>
                    <div className="flex gap-2">
                        <button onClick={(e) => { e.stopPropagation(); minimizeWindow(win.id) }} className="retro-outset size-6 flex items-center justify-center hover:bg-white/20 active:retro-inset"><Minus className="size-4"/></button>
                        <button className="retro-outset size-6 flex items-center justify-center hover:bg-white/20 active:retro-inset"><Maximize2 className="size-4"/></button>
                        <button onClick={(e) => { e.stopPropagation(); closeWindow(win.id) }} className="retro-outset size-6 flex items-center justify-center hover:bg-red-600 hover:text-white"><X className="size-4"/></button>
                    </div>
                </div>

                <div className="p-2 border-b border-black/20 flex gap-4 bg-[#c0c0c0] text-[10px] font-black uppercase italic">
                    <button className="px-4 py-1 hover:bg-white/40 retro-outset active:retro-inset">File</button>
                    <button className="px-4 py-1 hover:bg-white/40 retro-outset active:retro-inset">Execute</button>
                    <button className="px-4 py-1 hover:bg-white/40 retro-outset active:retro-inset text-primary">Sovereign_Directives</button>
                </div>

                <div className="flex-1 bg-white m-1 retro-inset p-6 overflow-hidden relative shadow-inner">
                    <div className="absolute inset-0 bg-[#f5f5f5] z-0" />
                    
                    <div className="relative z-10 h-full flex flex-col overflow-y-auto scrollbar-hide">
                        {win.content === 'audit' && (
                            <div className="space-y-8 text-black">
                                <h3 className="font-black border-b-4 border-black pb-4 flex items-center gap-4 text-2xl uppercase italic"><Activity className="size-8 text-primary"/> Sovereign Pulse v77.5</h3>
                                <div className="grid grid-cols-3 gap-8">
                                    <div className="retro-outset p-6 bg-[#c0c0c0] shadow-inner text-center">
                                        <div className="text-[10px] uppercase font-black text-gray-600 tracking-widest mb-2">CPU_RESERVE</div>
                                        <div className="text-4xl font-black text-green-700 italic gold-glow">{metrics.cpu}</div>
                                    </div>
                                    <div className="retro-outset p-6 bg-[#c0c0c0] shadow-inner text-center">
                                        <div className="text-[10px] uppercase font-black text-gray-600 tracking-widest mb-2">RAM_CLUSTERS</div>
                                        <div className="text-4xl font-black text-blue-700 italic gold-glow">{metrics.ram}</div>
                                    </div>
                                    <div className="retro-outset p-6 bg-[#c0c0c0] shadow-inner text-center">
                                        <div className="text-[10px] uppercase font-black text-gray-600 tracking-widest mb-2">HIVE_RESONANCE</div>
                                        <div className="text-4xl font-black text-primary italic gold-glow">{metrics.resonance}</div>
                                    </div>
                                </div>
                                <div className="flex-1 retro-inset p-8 bg-black text-emerald-500 font-mono text-xl shadow-2xl relative overflow-hidden min-h-[300px]">
                                    <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/grid.png')] animate-pulse" />
                                    <div className="space-y-4 relative z-10">
                                        <div className="flex gap-4 animate-in slide-in-from-left-4 duration-500">
                                            <span className="text-primary font-black">{"[HIVE]"}</span>
                                            <span>Monitoring 24 Material Knots...</span>
                                        </div>
                                        <div className="flex gap-4 animate-in slide-in-from-left-4 duration-700 delay-100">
                                            <span className="text-emerald-500 font-black">{"[OK]"}</span>
                                            <span>Node 01: OMNIPOTENT (Strategic Heart Locked)</span>
                                        </div>
                                        <div className="flex gap-4 animate-in slide-in-from-left-4 duration-1000 delay-200">
                                            <span className="text-emerald-500 font-black">{"[OK]"}</span>
                                            <span>Node 24: MATERIAL_SECURED (Ark Persistence Fixed)</span>
                                        </div>
                                        <div className="mt-10 p-6 border-4 border-emerald-900 bg-emerald-950/40 rounded-3xl">
                                            <div className="text-[12px] font-black uppercase text-emerald-600 mb-4 tracking-[0.4em] italic">Genetic_Material_Stability</div>
                                            <div className="h-4 bg-black rounded-full overflow-hidden border-2 border-emerald-900 p-0.5">
                                                <div className="h-full bg-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.8)] animate-pulse" style={{ width: '100%' }} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {win.content === 'explorer' && (
                            <div className="space-y-6 text-black h-full flex flex-col">
                                <div className="flex items-center gap-6 bg-[#c0c0c0] p-4 retro-outset rounded-xl shadow-md">
                                    <Button variant="ghost" size="icon" onClick={() => loadDirectory(currentPath.split('/').slice(0,-1).join('/') || '/')} className="retro-outset size-12 shadow-xl"><ArrowUp className="size-6"/></Button>
                                    <div className="flex-1 retro-inset bg-white px-6 py-2 text-lg font-black truncate italic shadow-inner">{currentPath}</div>
                                    <Button variant="ghost" size="icon" onClick={() => loadDirectory(currentPath)} className="retro-outset size-12 shadow-xl"><RefreshCcw className="size-6"/></Button>
                                </div>
                                <div className="flex-1 retro-inset bg-white overflow-y-auto scrollbar-hide p-6 grid grid-cols-4 content-start gap-10 shadow-2xl">
                                    {dirItems.map((item, i) => (
                                        <div 
                                            key={i} 
                                            onDoubleClick={() => item.isDirectory ? loadDirectory(item.path) : toast({ title: "DNA Siphoned", description: "Node content serialized." })}
                                            className="flex flex-col items-center gap-4 p-4 hover:bg-blue-100 cursor-pointer rounded-2xl border-2 border-transparent hover:border-blue-400 group transition-all"
                                        >
                                            <div className="relative">
                                                {item.isDirectory ? <Folder className="size-16 text-yellow-600 group-hover:scale-110 transition-transform" /> : <FileCode className="size-16 text-blue-500 group-hover:scale-110 transition-transform" />}
                                                {item.name.includes('al-muizz') && <Skull className="absolute -top-2 -right-2 size-6 text-red-600 animate-pulse" />}
                                            </div>
                                            <span className="text-xs font-black text-center truncate w-full uppercase italic">{item.name}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="h-10 bg-[#c0c0c0] border-t-2 border-white/50 text-[10px] flex items-center px-6 font-black text-gray-700 uppercase italic">
                                    {dirItems.length} OBJECTS MATERIALIZED IN SECTOR.
                                </div>
                            </div>
                        )}

                        {win.content === 'terminal' && (
                            <div className="h-full bg-black text-emerald-400 p-8 font-code text-xl shadow-2xl relative overflow-hidden flex flex-col rounded-2xl">
                                <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none scale-150 rotate-12"><Skull className="size-48" /></div>
                                <div className="relative z-10 flex-1 overflow-y-auto scrollbar-hide space-y-4">
                                    <div className="text-primary font-black uppercase tracking-[0.5em] border-b-2 border-primary/20 pb-4 mb-6">Al-Mu'izz Supreme Shell [v77.5]</div>
                                    <div className="text-emerald-500/60 font-black italic">Authorized: القائد المعتصم بالله ادريس الغزالي</div>
                                    <div className="text-emerald-500/60 font-black italic">Consensus: ALL_NODES_OMNIPOTENT</div>
                                    <div className="mt-12 flex gap-4 items-center">
                                        <span className="text-primary font-black">GHAZALI_ROOT:~$</span>
                                        <span className="animate-pulse w-4 h-8 bg-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.8)]" />
                                    </div>
                                </div>
                                <div className="mt-6 p-4 border-t-2 border-emerald-900/50 flex gap-6">
                                    <input className="bg-transparent border-none outline-none text-emerald-400 flex-1 font-mono italic text-2xl" placeholder="Issue absolute directive..." />
                                    <Button className="retro-outset h-12 px-10 text-[12px] font-black bg-[#c0c0c0] text-black hover:bg-white transition-all uppercase italic">EXECUTE</Button>
                                </div>
                            </div>
                        )}

                        {win.content === 'siphon' && (
                            <div className="space-y-10 text-black h-full flex flex-col">
                                <div className="retro-outset p-8 flex items-center gap-10 bg-primary/10 border-primary relative overflow-hidden rounded-3xl">
                                    <div className="absolute inset-0 bg-primary/5 animate-pulse" />
                                    <div className="size-20 rounded-2xl bg-black flex items-center justify-center border-4 border-primary/40 shadow-2xl animate-neural">
                                        <Zap className="size-12 text-primary gold-glow" />
                                    </div>
                                    <div className="relative z-10">
                                        <h4 className="font-black text-5xl italic uppercase gold-glow leading-none">Identity Siphon</h4>
                                        <span className="text-[12px] uppercase font-black text-primary/60 tracking-[0.8em] mt-4 block italic">v77_QUANTUM_STRIKE</span>
                                    </div>
                                </div>
                                <div className="flex-1 space-y-10 px-6">
                                    <div className="space-y-4">
                                        <label className="text-[12px] font-black uppercase tracking-[1em] text-gray-500 italic px-6">Target Cluster Coordinate:</label>
                                        <input className="w-full retro-inset h-24 px-10 text-4xl text-black font-black italic bg-white/50 focus:bg-white transition-all shadow-inner border-4 border-black/10 rounded-3xl" placeholder="MSISDN / @Handle / Email" />
                                    </div>
                                    <div className="grid grid-cols-2 gap-8">
                                        <Button className="retro-button h-32 bg-[#c0c0c0] hover:bg-white text-2xl font-black italic border-8 flex flex-col gap-2 rounded-3xl shadow-xl active:scale-95"><Camera className="size-10 text-red-600" /> Ocular Hub</Button>
                                        <Button className="retro-button h-32 bg-[#c0c0c0] hover:bg-white text-2xl font-black italic border-8 flex flex-col gap-2 rounded-3xl shadow-xl active:scale-95"><MapIcon className="size-10 text-blue-600" /> Seeker GPS</Button>
                                        <Button className="retro-button col-span-2 bg-red-700 hover:bg-red-600 text-white h-32 text-4xl font-black uppercase tracking-[1.2em] italic border-[12px] border-black/30 shadow-[0_40px_100px_rgba(220,38,38,0.4)] active:scale-95 transition-all rounded-[3.5rem]">
                                            <Skull className="size-14 mr-10" /> IGNITE
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                
                <div className="h-8 bg-[#c0c0c0] border-t-2 border-white/50 text-[10px] flex items-center px-6 italic text-gray-800 font-black uppercase tracking-widest bg-gradient-to-r from-transparent via-white/20 to-transparent">
                    Node: {win.title} | {win.zIndex === maxZ ? "SINGULARITY_LOCKED" : "BACKGROUND_PROCESS"} | Consensus: 100%
                </div>
            </div>
        ))}
      </div>

      {/* Start Menu */}
      {isStartOpen && (
        <div className="fixed bottom-14 left-2 w-[450px] bg-[#c0c0c0] retro-outset z-[2000] p-1 flex animate-in slide-in-from-bottom-6 duration-300 shadow-[0_0_150px_rgba(0,0,0,0.8)] border-[6px]">
            <div className="w-16 bg-gradient-to-b from-blue-950 via-blue-700 to-blue-900 flex items-center justify-center -ml-1.5 -mt-1.5 -mb-1.5 rounded-l-md border-r-4 border-black/20 shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-white/5 animate-pulse" />
                <h2 className="text-white font-black text-4xl -rotate-90 whitespace-nowrap tracking-[1.5em] italic opacity-40">AL-MUIZZ</h2>
            </div>
            <div className="flex-1 flex flex-col p-2">
                <div className="p-8 border-b-4 border-white/40 bg-white/20 flex items-center gap-8 rounded-tr-3xl">
                    <div className="size-20 rounded-2xl bg-black border-4 border-primary flex items-center justify-center shadow-9xl animate-neural"><Skull className="size-10 text-primary gold-glow"/></div>
                    <div>
                        <div className="text-2xl font-black text-blue-950 uppercase italic leading-none">Commander</div>
                        <div className="text-[12px] font-black text-blue-800 uppercase tracking-[0.8em] mt-3 italic">GHAZALI_ROOT</div>
                    </div>
                </div>
                <div className="p-4 space-y-3 overflow-y-auto scrollbar-hide max-h-[500px]">
                    {[
                        { id: 'audit', label: 'System Audit', icon: ShieldCheck, color: "text-blue-800" },
                        { id: 'terminal', label: 'Supreme Shell', icon: Terminal, color: "text-green-800" },
                        { id: 'siphon', label: 'Identity Predator', icon: Network, color: "text-magenta-800" },
                        { id: 'explorer', label: 'Material Explorer', icon: FolderOpen, color: "text-yellow-800" },
                        { id: 'monitor', label: 'Hive Monitor', icon: Cpu, color: "text-primary" },
                        { id: 'ark', label: 'Noah\'s Ark', icon: Anchor, color: "text-blue-500" },
                    ].map(item => (
                        <button 
                            key={item.id}
                            onClick={() => toggleWindow(item.id)}
                            className="w-full flex items-center gap-6 px-6 py-4 hover:bg-[#000080] hover:text-white transition-all rounded-xl text-left group border-2 border-transparent hover:border-white/20 active:retro-inset"
                        >
                            <item.icon className={cn("size-8 group-hover:text-white transition-colors", item.color)} />
                            <span className="text-lg font-black uppercase italic tracking-widest">{item.label}</span>
                        </button>
                    ))}
                </div>
                <div className="mt-auto border-t-4 border-white/40 p-4 flex flex-col gap-2 bg-white/10 rounded-br-2xl">
                    <button className="flex items-center gap-4 px-6 py-3 hover:bg-[#000080] hover:text-white rounded-lg text-left text-xs font-black uppercase tracking-widest italic transition-all"><Settings className="size-5"/> System Config</button>
                    <button className="flex items-center gap-4 px-6 py-5 bg-[#e0e0e0] border-t-2 border-white hover:bg-red-700 hover:text-white rounded-xl text-left text-xl font-black uppercase italic tracking-[1em] shadow-2xl active:scale-95 transition-all"><Power className="size-6"/> SHUTDOWN</button>
                </div>
            </div>
        </div>
      )}

      {/* Taskbar */}
      <div className="retro-taskbar h-14 border-t-4 border-white/80 shadow-[0_-20px_100px_rgba(0,0,0,1)] bg-[#c0c0c0] z-[3000]">
         <button 
            onClick={() => setIsStartOpen(!isStartOpen)}
            className={cn(
                "retro-outset h-11 px-8 flex items-center gap-4 hover:bg-[#d0d0d0] active:retro-inset group transition-all duration-300 ml-1 rounded-sm",
                isStartOpen ? "retro-inset bg-[#e0e0e0] border-primary/60" : "bg-[#c0c0c0] border-white/60"
            )}
         >
            <div className="bg-primary size-8 rounded-sm flex items-center justify-center group-hover:rotate-12 transition-transform shadow-inner border-2 border-black/10">
                <Skull className="size-6 text-black" />
            </div>
            <span className="font-black text-2xl text-black italic uppercase tracking-tighter">Start</span>
         </button>
         
         <div className="flex-1 flex gap-3 px-10 overflow-hidden items-center">
            {windows.filter(w => w.isOpen).map(win => (
                <button 
                    key={win.id}
                    onClick={() => focusWindow(win.id)}
                    className={cn(
                        "retro-outset h-10 px-6 flex items-center gap-4 min-w-[200px] max-w-[280px] truncate transition-all text-black border-4 rounded-md",
                        win.zIndex === maxZ && !win.isMinimized ? "retro-inset bg-white/90 border-primary/40 shadow-inner" : "bg-[#c0c0c0] border-white/40"
                    )}
                >
                    <win.icon className={cn("size-5 shrink-0", win.zIndex === maxZ ? "text-primary" : "text-blue-900")} />
                    <span className="text-[12px] font-black uppercase italic tracking-tight truncate">{win.title}</span>
                </button>
            ))}
         </div>

         <div className="retro-inset h-11 px-8 flex items-center gap-10 bg-[#c0c0c0] text-black shadow-inner border-4 border-white/30 mr-1 rounded-sm">
            <div className="flex items-center gap-4 group">
                <div className="size-3 rounded-full bg-emerald-500 animate-ping shadow-[0_0_15px_rgba(16,185,129,0.8)]" />
                <div className="flex flex-col">
                    <span className="text-[8px] font-black text-gray-600 uppercase leading-none">Material Load</span>
                    <span className="text-[14px] font-black italic text-blue-900 tracking-tighter">{metrics.cpu}</span>
                </div>
            </div>
            <div className="flex items-center gap-4 border-l-4 border-white/40 pl-8 pr-2">
                <History className="size-5 text-blue-800 animate-neural" />
                <span className="text-2xl font-black italic uppercase tracking-tighter text-blue-950">{time}</span>
            </div>
         </div>
      </div>

      {/* Global Background UI Elements */}
      <div className="fixed top-12 right-12 flex flex-col items-end opacity-20 pointer-events-none select-none z-0">
          <h2 className="text-[15rem] font-black text-white italic uppercase tracking-[0.2em] gold-glow leading-none">AL-MUIZZ</h2>
          <span className="text-2xl font-black text-white uppercase tracking-[2em] mt-8 italic">Total_Dominion_v77.5_OS</span>
      </div>
      
      <div className="fixed bottom-20 right-10 flex items-center gap-10 opacity-30 text-xs font-black uppercase tracking-[1em] text-white z-[50] italic drop-shadow-3xl">
          <Fingerprint className="size-6 text-primary" /> GHAZALI_ROOT // MATERIAL_HIVE_v77
      </div>

      <div className="absolute bottom-24 right-24 p-60 opacity-5 pointer-events-none scale-[2] rotate-12 z-0 text-white animate-neural">
         <Skull className="size-[50rem]" />
      </div>

    </div>
  )
}
