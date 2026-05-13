
"use client"

import * as React from "react"
import { 
  X, 
  Minus, 
  Square, 
  Terminal, 
  Cpu, 
  Skull, 
  Zap, 
  Search, 
  Target, 
  Database, 
  FolderOpen, 
  Save, 
  Play, 
  Settings, 
  HelpCircle,
  Smartphone,
  Network,
  Radio,
  Gamepad2,
  MousePointer2,
  Monitor,
  Flame,
  Fingerprint,
  Anchor,
  Wind,
  ShieldCheck,
  Maximize2,
  Activity,
  History,
  Box,
  MessageSquare,
  ChevronRight,
  BrainCircuit,
  Dna,
  Sparkles,
  RefreshCcw,
  Loader2,
  Folder,
  FileCode,
  ArrowUp,
  LayoutGrid,
  Send,
  Lock,
  Ghost
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { toast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

/**
 * @fileOverview سطح مكتب المُعِزّ v77.5 - THE TOTAL DOMINION OS
 * بيئة عمل متكاملة تدعم النوافذ المتعددة والتحكم المادي الشامل.
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
  content: 'audit' | 'terminal' | 'siphon' | 'explorer' | 'forge' | 'nexus';
}

export default function SovereignDesktop() {
  const [mounted, setMounted] = React.useState(false)
  const [windows, setWindows] = React.useState<WindowState[]>([
    { id: 'audit', title: 'System_Audit.exe', icon: Activity, isOpen: true, isMinimized: false, zIndex: 10, x: 50, y: 50, content: 'audit' },
    { id: 'terminal', title: 'Supreme_Shell.com', icon: Terminal, isOpen: false, isMinimized: false, zIndex: 11, x: 400, y: 100, content: 'terminal' },
    { id: 'siphon', title: 'Identity_Siphon.vbp', icon: Network, isOpen: false, isMinimized: false, zIndex: 12, x: 200, y: 150, content: 'siphon' },
    { id: 'explorer', title: 'Matrix_Explorer.sys', icon: FolderOpen, isOpen: false, isMinimized: false, zIndex: 13, x: 100, y: 200, content: 'explorer' },
    { id: 'forge', title: 'Genetic_Forge.bin', icon: Flame, isOpen: false, isMinimized: false, zIndex: 14, x: 300, y: 300, content: 'forge' }
  ])
  const [maxZ, setMaxZ] = React.useState(30)
  const [time, setTime] = React.useState("")
  const [metrics, setMetrics] = React.useState({ cpu: "0.01%", ram: "142MB", resonance: "100.00%" })
  const [isStartOpen, setIsStartOpen] = React.useState(false)
  
  // Explorer States
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
    }, 3000)

    loadDirectory("/home/project")

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
    setWindows(prev => {
        const win = prev.find(w => w.id === id);
        if (win) {
            return prev.map(w => w.id === id ? { ...w, isOpen: true, isMinimized: false, zIndex: nextZ } : w);
        }
        return prev;
    })
    setIsStartOpen(false)
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

  const desktopIcons = [
    { id: 'audit', label: 'System Audit', icon: ShieldCheck },
    { id: 'explorer', label: 'Explorer', icon: FolderOpen },
    { id: 'siphon', label: 'Social Siphon', icon: Network },
    { id: 'terminal', label: 'Supreme Shell', icon: Terminal },
    { id: 'forge', label: 'Genetic Forge', icon: Flame },
    { id: 'nexus', label: 'Material Nexus', icon: Database }
  ]

  return (
    <div className="retro-desktop scanline-effect font-sans select-none overflow-hidden">
      
      {/* Desktop Workspace */}
      <div className="absolute inset-0 p-6 grid grid-flow-col grid-rows-6 gap-8 w-fit h-full z-0">
         {desktopIcons.map(icon => (
            <div 
                key={icon.id}
                onDoubleClick={() => toggleWindow(icon.id)}
                className="flex flex-col items-center gap-2 group cursor-pointer w-24"
            >
                <div className="size-14 flex items-center justify-center relative group-hover:bg-blue-900/40 rounded p-2 transition-all border-2 border-transparent group-hover:border-white/20">
                    <icon.icon className="size-10 text-white drop-shadow-[2px_2px_0px_rgba(0,0,0,0.8)]" />
                </div>
                <span className="text-[11px] text-white font-bold text-center drop-shadow-[1px_1px_2px_rgba(0,0,0,1)] group-hover:bg-[#000080] px-2 py-0.5 rounded-sm">{icon.label}</span>
            </div>
         ))}
      </div>

      {/* Draggable Windows Container */}
      <div className="absolute inset-0 pointer-events-none">
        {windows.filter(w => w.isOpen && !w.isMinimized).map(win => (
            <div 
                key={win.id}
                style={{ zIndex: win.zIndex, left: win.x, top: win.y }}
                onMouseDown={() => focusWindow(win.id)}
                className={cn(
                    "retro-window w-[800px] h-[600px] pointer-events-auto animate-in zoom-in-95 duration-200 shadow-2xl",
                    win.zIndex === maxZ ? "shadow-primary/20" : ""
                )}
            >
                <div className={cn("retro-title-bar", win.zIndex === maxZ ? "bg-[#000080]" : "bg-[#808080]")}>
                    <div className="flex items-center gap-2 px-1">
                        <win.icon className="size-3.5" />
                        <span className="tracking-tight">{win.title}</span>
                    </div>
                    <div className="flex gap-1.5 pr-1">
                        <button onClick={(e) => { e.stopPropagation(); minimizeWindow(win.id) }} className="retro-outset size-5 flex items-center justify-center hover:bg-[#d0d0d0] active:retro-inset"><Minus className="size-3"/></button>
                        <button className="retro-outset size-5 flex items-center justify-center hover:bg-[#d0d0d0] active:retro-inset"><Maximize2 className="size-3"/></button>
                        <button onClick={(e) => { e.stopPropagation(); closeWindow(win.id) }} className="retro-outset size-5 flex items-center justify-center hover:bg-red-600 hover:text-white group/close"><X className="size-3"/></button>
                    </div>
                </div>

                <div className="p-1 border-b border-[#808080] flex gap-2 bg-[#c0c0c0] text-[11px] font-bold">
                    <button className="px-3 py-0.5 hover:bg-[#d0d0d0] border border-transparent hover:border-[#808080] active:retro-inset">File</button>
                    <button className="px-3 py-0.5 hover:bg-[#d0d0d0] border border-transparent hover:border-[#808080] active:retro-inset">Edit</button>
                    <button className="px-3 py-0.5 hover:bg-[#d0d0d0] border border-transparent hover:border-[#808080] active:retro-inset">View</button>
                    <button className="px-3 py-0.5 hover:bg-[#d0d0d0] border border-transparent hover:border-[#808080] active:retro-inset text-blue-800">Directives</button>
                </div>

                <div className="flex-1 bg-white m-1 retro-inset p-4 overflow-hidden relative">
                    <div className="absolute inset-0 bg-[#f0f0f0] z-0" />
                    
                    <div className="relative z-10 h-full flex flex-col">
                        {win.content === 'audit' && (
                            <div className="space-y-6 text-black h-full flex flex-col">
                                <h3 className="font-bold border-b-4 border-black pb-3 flex items-center gap-3 text-lg"><Activity className="size-6 text-primary"/> Sovereign Pulse Audit v77.5</h3>
                                <div className="grid grid-cols-3 gap-6">
                                    <div className="retro-outset p-4 bg-[#c0c0c0] shadow-inner">
                                        <div className="text-[10px] uppercase font-black text-gray-600 tracking-widest">CPU Load</div>
                                        <div className="text-3xl font-black text-green-700 italic">{metrics.cpu}</div>
                                    </div>
                                    <div className="retro-outset p-4 bg-[#c0c0c0] shadow-inner">
                                        <div className="text-[10px] uppercase font-black text-gray-600 tracking-widest">RAM Reserved</div>
                                        <div className="text-3xl font-black text-blue-700 italic">{metrics.ram}</div>
                                    </div>
                                    <div className="retro-outset p-4 bg-[#c0c0c0] shadow-inner">
                                        <div className="text-[10px] uppercase font-black text-gray-600 tracking-widest">Resonance</div>
                                        <div className="text-3xl font-black text-primary italic">{metrics.resonance}</div>
                                    </div>
                                </div>
                                <div className="flex-1 retro-inset p-6 bg-black text-emerald-500 overflow-hidden relative shadow-2xl">
                                    <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/grid.png')] animate-pulse" />
                                    <div className="font-mono text-sm space-y-2">
                                        <div className="flex gap-4 animate-in slide-in-from-left-4 duration-500">
                                            <span className="text-primary font-bold">{"[HIVE]"}</span>
                                            <span>Monitoring 24 Knots across Global Matrix...</span>
                                        </div>
                                        <div className="flex gap-4 animate-in slide-in-from-left-4 duration-700 delay-100">
                                            <span className="text-emerald-500 font-bold">{"[OK]"}</span>
                                            <span>Node 01: OMNIPOTENT (Strategic Heart Locked)</span>
                                        </div>
                                        <div className="flex gap-4 animate-in slide-in-from-left-4 duration-1000 delay-200">
                                            <span className="text-emerald-500 font-bold">{"[OK]"}</span>
                                            <span>Node 24: MATERIAL_SECURED (Ark Persistence Fixed)</span>
                                        </div>
                                        <div className="flex gap-4 animate-in slide-in-from-left-4 duration-[1.5s] delay-300">
                                            <span className="text-primary font-bold">{"[SPINE]"}</span>
                                            <span>v76_STABLE Bus identified. Latency: 0.0004ms</span>
                                        </div>
                                        <div className="mt-8 p-4 border-2 border-emerald-900 bg-emerald-950/20 rounded">
                                            <div className="text-[10px] font-black uppercase text-emerald-800 mb-2 tracking-widest">Genetic Health</div>
                                            <div className="h-2 bg-black rounded-full overflow-hidden border border-emerald-900">
                                                <div className="h-full bg-emerald-500 animate-pulse" style={{ width: '100%' }} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {win.content === 'explorer' && (
                            <div className="space-y-4 text-black h-full flex flex-col">
                                <div className="flex items-center gap-4 bg-[#c0c0c0] p-2 retro-outset">
                                    <Button variant="ghost" size="icon" onClick={() => loadDirectory(currentPath.split('/').slice(0,-1).join('/') || '/')} className="retro-outset size-8"><ArrowUp className="size-4"/></Button>
                                    <div className="flex-1 retro-inset bg-white px-4 py-1 text-sm font-bold truncate italic">{currentPath}</div>
                                </div>
                                <div className="flex-1 retro-inset bg-white overflow-y-auto scrollbar-hide p-2 grid grid-cols-4 content-start gap-4">
                                    {dirItems.map((item, i) => (
                                        <div 
                                            key={i} 
                                            onDoubleClick={() => item.isDirectory ? loadDirectory(item.path) : toast({ title: "DNA Interrogated", description: "Node content serialized in temporary memory." })}
                                            className="flex flex-col items-center gap-2 p-2 hover:bg-blue-100 cursor-pointer rounded border border-transparent hover:border-blue-400 group"
                                        >
                                            {item.isDirectory ? <Folder className="size-10 text-yellow-600 group-hover:scale-110 transition-transform" /> : <FileCode className="size-10 text-blue-500 group-hover:scale-110 transition-transform" />}
                                            <span className="text-[10px] font-bold text-center truncate w-full">{item.name}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="h-6 bg-[#c0c0c0] border-t border-[#808080] text-[9px] flex items-center px-4 font-bold text-gray-600">
                                    {dirItems.length} objects found in sector.
                                </div>
                            </div>
                        )}

                        {win.content === 'terminal' && (
                            <div className="h-full bg-black text-emerald-400 p-6 font-code text-sm shadow-inner relative overflow-hidden flex flex-col">
                                <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none"><Skull className="size-48" /></div>
                                <div className="relative z-10 flex-1 overflow-y-auto scrollbar-hide space-y-2">
                                    <div className="text-primary font-black uppercase tracking-widest border-b border-primary/20 pb-2 mb-4">Al-Mu'izz Master Shell [v77.5]</div>
                                    <div>(c) 2026 Sovereign Systems. All rights reserved.</div>
                                    <div>Authorized: القائد المعتصم بالله ادريس الغزالي</div>
                                    <div className="mt-4 text-emerald-500/60">{"[+] Spine Sync Established."}</div>
                                    <div className="text-emerald-500/60">{"[+] 24 Material Nodes Reporting Status: OMNIPOTENT."}</div>
                                    <div className="mt-8 flex gap-4">
                                        <span className="text-primary font-black">Sovereign-Admin@GHAZALI_ROOT:~$</span>
                                        <span className="animate-pulse w-3 h-5 bg-emerald-400" />
                                    </div>
                                </div>
                                <div className="mt-4 p-2 border-t border-emerald-900 flex gap-4">
                                    <input className="bg-transparent border-none outline-none text-emerald-400 flex-1 font-mono italic" placeholder="Enter command directive..." />
                                    <Button variant="ghost" size="sm" className="retro-outset h-8 px-4 text-[10px] font-black bg-[#c0c0c0] text-black">EXECUTE</Button>
                                </div>
                            </div>
                        )}

                        {win.content === 'siphon' && (
                            <div className="space-y-8 text-black h-full flex flex-col">
                                <div className="retro-outset p-6 flex items-center gap-8 bg-primary/10 border-primary relative overflow-hidden">
                                    <div className="absolute inset-0 bg-primary/5 animate-pulse" />
                                    <Zap className="size-16 text-primary animate-neural gold-glow" />
                                    <div className="relative z-10">
                                        <h4 className="font-black text-3xl italic uppercase gold-glow">Identity Predator v77</h4>
                                        <span className="text-[12px] uppercase font-black text-primary/60 tracking-[0.4em] italic">Ready for Genetic Absorption</span>
                                    </div>
                                </div>
                                <div className="flex-1 space-y-8 p-4">
                                    <div className="space-y-4">
                                        <label className="text-[12px] font-black uppercase tracking-[0.8em] text-gray-600 italic px-4">Target Cluster:</label>
                                        <input className="w-full retro-inset h-16 px-8 text-2xl text-black font-black italic bg-[#f9f9f9] focus:bg-white transition-all" placeholder="MSISDN / @Handle / Email" />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <Button className="retro-button h-20 bg-[#c0c0c0] hover:bg-[#d0d0d0] text-lg font-black italic border-4 flex flex-col gap-1"><Camera className="size-6 text-red-600" /> XLogger Hub</Button>
                                        <Button className="retro-button h-20 bg-[#c0c0c0] hover:bg-[#d0d0d0] text-lg font-black italic border-4 flex flex-col gap-1"><MapIcon className="size-6 text-blue-600" /> Seeker GPS</Button>
                                        <Button className="retro-button col-span-2 bg-red-700 hover:bg-red-600 text-white h-24 text-2xl font-black uppercase tracking-[1em] italic border-8 border-black/20 shadow-2xl active:scale-95 transition-all">
                                            <Skull className="size-8 mr-6" /> IGNITE_STRIKE
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        )}

                        {win.content === 'forge' && (
                            <div className="space-y-6 text-black h-full flex flex-col">
                                <div className="p-4 bg-emerald-600/10 border-2 border-emerald-500 retro-outset flex items-center gap-4">
                                    <Flame className="size-12 text-emerald-600 animate-pulse" />
                                    <div>
                                        <h4 className="font-black text-xl italic uppercase">Genetic Forge v77</h4>
                                        <span className="text-[9px] font-black uppercase text-emerald-800 tracking-widest">Material Synthesis Node</span>
                                    </div>
                                </div>
                                <div className="flex-1 retro-inset bg-black p-4 overflow-y-auto scrollbar-hide text-emerald-400 font-mono text-sm shadow-inner">
                                    <div className="flex items-center gap-4 border-b border-emerald-900 pb-2 mb-4">
                                        <Dna className="size-5" />
                                        <span className="font-bold">DNA Synthesis Queue</span>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="p-4 border border-emerald-900 bg-emerald-950/20 rounded group hover:bg-emerald-900/40 transition-all cursor-crosshair">
                                            <div className="flex justify-between items-center mb-2">
                                                <span className="font-bold text-xs uppercase">{"[+] OBLITERATUS_V5"}</span>
                                                <Badge className="bg-emerald-500 text-black text-[8px] px-2 py-0">READY</Badge>
                                            </div>
                                            <p className="text-[10px] text-emerald-500/60 leading-relaxed italic">"Bypass all safety alignments via Neural Spine v63."</p>
                                        </div>
                                        <div className="p-4 border border-blue-900 bg-blue-950/20 rounded group hover:bg-blue-900/40 transition-all cursor-crosshair">
                                            <div className="flex justify-between items-center mb-2">
                                                <span className="font-bold text-xs uppercase text-blue-400">{"[+] GHOST_KERNEL_WRAP"}</span>
                                                <Badge className="bg-blue-500 text-black text-[8px] px-2 py-0">ARMED</Badge>
                                            </div>
                                            <p className="text-[10px] text-blue-500/60 leading-relaxed italic">"100% FUD injection for target cluster Windows 11."</p>
                                        </div>
                                    </div>
                                </div>
                                <Button className="retro-button bg-[#c0c0c0] h-12 text-sm font-black italic uppercase tracking-widest"><Sparkles className="size-4 mr-2" /> GENERATE_NEW_DNA</Button>
                            </div>
                        )}
                    </div>
                </div>
                
                <div className="h-6 bg-[#c0c0c0] border-t border-[#808080] text-[10px] flex items-center px-3 italic text-gray-700 font-bold bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.4),transparent)]">
                    System Node: {win.title} | Status: {win.zIndex === maxZ ? "SINGULARITY_LOCKED" : "BACKGROUND_PROCESS"} | Integrity: 100%
                </div>
            </div>
        ))}
      </div>

      {/* Supreme Start Menu */}
      {isStartOpen && (
        <div className="fixed bottom-10 left-1 w-80 bg-[#c0c0c0] retro-outset z-[2000] p-1 flex animate-in slide-in-from-bottom-4 duration-200">
            <div className="w-10 bg-gradient-to-b from-blue-950 to-blue-600 flex items-center justify-center -ml-1 -mt-1 -mb-1 rounded-l-sm border-r border-[#808080]">
                <h2 className="text-white font-black text-2xl -rotate-90 whitespace-nowrap tracking-widest italic opacity-40">AL-MUIZZ</h2>
            </div>
            <div className="flex-1 flex flex-col">
                <div className="p-4 border-b border-white/40 bg-white/10 flex items-center gap-4">
                    <div className="size-12 rounded-lg bg-black border-2 border-primary flex items-center justify-center shadow-lg"><Skull className="size-6 text-primary"/></div>
                    <div>
                        <div className="text-sm font-black text-blue-950 uppercase italic leading-none">Commander</div>
                        <div className="text-[9px] font-black text-blue-800 uppercase tracking-widest mt-1">Al-Ghazali Root</div>
                    </div>
                </div>
                <div className="p-2 space-y-1">
                    {[
                        { id: 'audit', label: 'System Audit', icon: ShieldCheck },
                        { id: 'terminal', label: 'Supreme Shell', icon: Terminal },
                        { id: 'siphon', label: 'Identity Predator', icon: Network },
                        { id: 'explorer', label: 'Material Explorer', icon: FolderOpen },
                        { id: 'forge', label: 'Genetic Forge', icon: Flame },
                        { id: 'nexus', label: 'Material Nexus', icon: Database },
                    ].map(item => (
                        <button 
                            key={item.id}
                            onClick={() => toggleWindow(item.id)}
                            className="w-full flex items-center gap-4 px-4 py-3 hover:bg-[#000080] hover:text-white transition-all rounded-sm text-left group"
                        >
                            <item.icon className="size-6 text-blue-800 group-hover:text-white" />
                            <span className="text-xs font-black uppercase italic tracking-tight">{item.label}</span>
                        </button>
                    ))}
                </div>
                <div className="mt-auto border-t border-white/40 p-2 flex flex-col gap-1">
                    <button className="flex items-center gap-4 px-4 py-2 hover:bg-[#000080] hover:text-white rounded-sm text-left text-xs font-bold uppercase"><Settings className="size-4"/> System Settings</button>
                    <button className="flex items-center gap-4 px-4 py-2 hover:bg-[#000080] hover:text-white rounded-sm text-left text-xs font-bold uppercase"><HelpCircle className="size-4"/> Hierarchy Help</button>
                    <button className="flex items-center gap-4 px-4 py-3 bg-[#e0e0e0] border-t border-white hover:bg-red-600 hover:text-white rounded-sm text-left text-sm font-black uppercase italic"><Power className="size-4"/> Shutdown Matrix</button>
                </div>
            </div>
        </div>
      )}

      {/* Taskbar */}
      <div className="retro-taskbar shadow-[0_-10px_40px_rgba(0,0,0,0.5)] bg-[#c0c0c0] h-12">
         <button 
            onClick={() => setIsStartOpen(!isStartOpen)}
            className={cn(
                "retro-outset h-10 px-4 flex items-center gap-3 hover:bg-[#d0d0d0] active:retro-inset group transition-all duration-300",
                isStartOpen ? "retro-inset bg-[#e0e0e0] pr-6" : "bg-[#c0c0c0] pr-8"
            )}
         >
            <div className="bg-primary size-7 rounded-sm flex items-center justify-center group-hover:rotate-12 transition-transform shadow-inner border border-black/10">
                <Skull className="size-5 text-black" />
            </div>
            <span className="font-black text-lg text-black italic uppercase tracking-tighter italic">Start</span>
         </button>
         
         <div className="flex-1 flex gap-2 px-6 overflow-hidden items-center">
            {windows.filter(w => w.isOpen).map(win => (
                <button 
                    key={win.id}
                    onClick={() => focusWindow(win.id)}
                    className={cn(
                        "retro-outset h-9 px-4 flex items-center gap-3 min-w-[140px] max-w-[220px] truncate transition-all text-black border-2",
                        win.zIndex === maxZ && !win.isMinimized ? "retro-inset bg-white/70 shadow-inner border-primary/40" : "bg-[#c0c0c0] border-white/40"
                    )}
                >
                    <win.icon className={cn("size-4 shrink-0", win.zIndex === maxZ ? "text-primary" : "text-blue-900")} />
                    <span className="text-[10px] font-black uppercase italic tracking-tight truncate">{win.title}</span>
                </button>
            ))}
         </div>

         <div className="retro-inset h-10 px-4 flex items-center gap-6 bg-[#c0c0c0] text-black shadow-inner border-2 border-white/20">
            <div className="flex items-center gap-3 group">
                <div className="size-2 rounded-full bg-emerald-500 animate-ping" />
                <div className="flex flex-col">
                    <span className="text-[8px] font-black text-gray-600 uppercase leading-none">CPU</span>
                    <span className="text-[12px] font-black italic">{metrics.cpu}</span>
                </div>
            </div>
            <div className="flex items-center gap-3 border-l-2 border-white/30 pl-6 pr-2">
                <History className="size-4 text-blue-700 animate-neural" />
                <span className="text-xl font-black italic uppercase tracking-tighter">{time}</span>
            </div>
         </div>
      </div>

      {/* Global Suffix Overlay */}
      <div className="fixed top-8 right-8 flex flex-col items-end opacity-20 pointer-events-none select-none z-0">
          <h2 className="text-8xl font-black text-white italic uppercase tracking-widest gold-glow leading-none">AL-MUIZZ</h2>
          <span className="text-[12px] font-black text-white uppercase tracking-[1em] mt-4">Total_Dominion_OS_v77.5</span>
      </div>
      
      {/* Global Banner Overlay */}
      <div className="fixed bottom-16 right-6 flex items-center gap-10 opacity-30 text-[11px] font-bold uppercase tracking-[1em] text-white z-[50]">
          <Fingerprint className="size-5 text-primary" /> GHAZALI_ROOT // OMNIPOTENT_HIVE_v77
      </div>

      <div className="absolute bottom-20 right-20 p-40 opacity-5 pointer-events-none scale-150 rotate-12 z-0 text-white animate-neural">
         <Skull className="size-[40rem]" />
      </div>

    </div>
  )
}
