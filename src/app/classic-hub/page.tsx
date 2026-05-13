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
  MessageSquare
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { toast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"

/**
 * @fileOverview سطح مكتب المُعِزّ v77.0 - THE SOVEREIGN DESKTOP ENVIRONMENT
 * بيئة عمل متكاملة تدعم النوافذ المتعددة لمحاكاة السيطرة المادية المطلقة.
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
  content: string;
}

export default function SovereignDesktop() {
  const [mounted, setMounted] = React.useState(false)
  const [windows, setWindows] = React.useState<WindowState[]>([
    { id: 'audit', title: 'System_Audit.exe', icon: Activity, isOpen: true, isMinimized: false, zIndex: 10, x: 50, y: 50, content: 'audit' },
    { id: 'terminal', title: 'Supreme_Shell.com', icon: Terminal, isOpen: false, isMinimized: false, zIndex: 11, x: 400, y: 100, content: 'terminal' },
    { id: 'siphon', title: 'Identity_Siphon.vbp', icon: Network, isOpen: false, isMinimized: false, zIndex: 12, x: 200, y: 150, content: 'siphon' }
  ])
  const [maxZ, setMaxZ] = React.useState(20)
  const [time, setTime] = React.useState("")
  const [metrics, setMetrics] = React.useState({ cpu: "0.01%", ram: "142MB" })

  React.useEffect(() => {
    setMounted(true)
    const updateTime = () => setTime(new Date().toLocaleTimeString())
    updateTime()
    const timer = setInterval(updateTime, 1000)
    
    const metricTimer = setInterval(() => {
        setMetrics({
            cpu: (Math.random() * 0.05).toFixed(2) + "%",
            ram: (140 + Math.random() * 5).toFixed(0) + "MB"
        })
    }, 3000)

    return () => {
        clearInterval(timer)
        clearInterval(metricTimer)
    }
  }, [])

  const toggleWindow = (id: string) => {
    setWindows(prev => {
        const win = prev.find(w => w.id === id);
        if (win && win.isOpen && !win.isMinimized) {
            return prev.map(w => w.id === id ? { ...w, isOpen: false } : w);
        }
        const nextZ = maxZ + 1
        setMaxZ(nextZ)
        if (win && !win.isOpen) {
            return prev.map(w => w.id === id ? { ...w, isOpen: true, isMinimized: false, zIndex: nextZ } : w);
        }
        // If not created, we can add it here but keeping it simple for now
        return prev;
    })
  }

  const focusWindow = (id: string) => {
    const nextZ = maxZ + 1
    setMaxZ(nextZ)
    setWindows(prev => prev.map(w => w.id === id ? { ...w, zIndex: nextZ, isMinimized: false } : w))
  }

  const closeWindow = (id: string) => {
    setWindows(prev => prev.map(w => w.id === id ? { ...w, isOpen: false } : w))
  }

  if (!mounted) return null

  const desktopIcons = [
    { id: 'audit', label: 'System Audit', icon: ShieldCheck },
    { id: 'arsenal', label: 'Arsenal Master', icon: Box },
    { id: 'siphon', label: 'Social Siphon', icon: Network },
    { id: 'terminal', label: 'Supreme Shell', icon: Terminal },
    { id: 'ark', label: "Noah's Ark", icon: Anchor },
    { id: 'oracle', label: 'Vulnerability Oracle', icon: Search }
  ]

  return (
    <div className="retro-desktop scanline-effect font-sans">
      
      {/* Desktop Workspace */}
      <div className="p-4 grid grid-cols-1 gap-12 w-32 h-full content-start z-0">
         {desktopIcons.map(icon => (
            <div 
                key={icon.id}
                onDoubleClick={() => toggleWindow(icon.id)}
                className="flex flex-col items-center gap-2 group cursor-pointer"
            >
                <div className="size-12 flex items-center justify-center relative group-hover:bg-blue-900/30 rounded p-2 transition-all">
                    <icon.icon className="size-10 text-white drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]" />
                </div>
                <span className="text-[10px] text-white font-bold text-center drop-shadow-[1px_1px_0px_rgba(0,0,0,1)] group-hover:bg-blue-800 px-1">{icon.label}</span>
            </div>
         ))}
      </div>

      {/* Draggable Windows Container */}
      <div className="absolute inset-0 pointer-events-none">
        {windows.filter(w => w.isOpen && !w.isMinimized).map(win => (
            <div 
                key={win.id}
                style={{ zIndex: win.zIndex, left: win.x, top: win.y }}
                onClick={() => focusWindow(win.id)}
                className="retro-window w-[600px] h-[450px] pointer-events-auto animate-in zoom-in-95 duration-200"
            >
                <div className={cn("retro-title-bar", win.zIndex === maxZ ? "bg-[#000080]" : "bg-[#808080]")}>
                    <div className="flex items-center gap-2">
                        <win.icon className="size-3" />
                        <span>{win.title}</span>
                    </div>
                    <div className="flex gap-1">
                        <button className="retro-outset size-4 flex items-center justify-center hover:bg-[#d0d0d0] text-[8px] font-bold"><Minus className="size-2"/></button>
                        <button className="retro-outset size-4 flex items-center justify-center hover:bg-[#d0d0d0] text-[8px] font-bold"><Square className="size-2"/></button>
                        <button onClick={(e) => { e.stopPropagation(); closeWindow(win.id) }} className="retro-outset size-4 flex items-center justify-center hover:bg-red-600 hover:text-white text-[8px] font-bold"><X className="size-2"/></button>
                    </div>
                </div>
                <div className="p-1 border-b border-[#808080] flex gap-1 bg-[#c0c0c0] text-[10px]">
                    <button className="px-2 hover:bg-[#d0d0d0] border border-transparent hover:border-[#808080]">File</button>
                    <button className="px-2 hover:bg-[#d0d0d0] border border-transparent hover:border-[#808080]">Edit</button>
                    <button className="px-2 hover:bg-[#d0d0d0] border border-transparent hover:border-[#808080]">Search</button>
                    <button className="px-2 hover:bg-[#d0d0d0] border border-transparent hover:border-[#808080]">Directives</button>
                </div>
                <div className="flex-1 bg-white m-1 retro-inset p-4 overflow-y-auto scrollbar-hide font-mono text-xs">
                    {win.content === 'audit' && (
                        <div className="space-y-4 text-black">
                            <h3 className="font-bold border-b-2 border-black pb-2 flex items-center gap-2"><Activity className="size-4"/> System Pulse Audit</h3>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="retro-outset p-2 bg-[#c0c0c0]">
                                    <div className="text-[9px] uppercase font-bold text-gray-600">CPU Load</div>
                                    <div className="text-2xl font-bold text-green-700">{metrics.cpu}</div>
                                </div>
                                <div className="retro-outset p-2 bg-[#c0c0c0]">
                                    <div className="text-[9px] uppercase font-bold text-gray-600">RAM Reserved</div>
                                    <div className="text-2xl font-bold text-blue-700">{metrics.ram}</div>
                                </div>
                            </div>
                            <div className="retro-inset p-4 h-40 bg-black text-green-500 overflow-hidden relative">
                                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/grid.png')]" />
                                <div className="animate-pulse">{">>>"} Monitoring Hierarchy Resonance...</div>
                                <div className="mt-2 text-[10px]">Node 01: OMNIPOTENT<br/>Node 24: LOCKED<br/>Spine Bus: v76_STABLE</div>
                            </div>
                        </div>
                    )}
                    {win.id === 'terminal' && (
                        <div className="h-full bg-black text-emerald-400 p-4 font-code text-sm">
                            <div>Al-Mu'izz Master Shell [v77.0]</div>
                            <div>(c) 2026 Sovereign Systems. All rights reserved.</div>
                            <div className="mt-4">Sovereign-Admin@GHAZALI_ROOT:~$ <span className="animate-pulse">_</span></div>
                        </div>
                    )}
                    {win.id === 'siphon' && (
                        <div className="space-y-6 text-black">
                            <div className="retro-outset p-4 flex items-center gap-4 bg-primary/10 border-primary">
                                <Zap className="size-8 text-primary animate-pulse" />
                                <div>
                                    <h4 className="font-bold text-lg">Social Predator v76</h4>
                                    <span className="text-[10px] uppercase font-bold opacity-60">Ready for Identity Absorption</span>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold uppercase">Target Cluster:</label>
                                <input className="w-full retro-inset h-8 px-2 text-sm text-black" placeholder="MSISDN / @Handle" />
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                                <button className="retro-button bg-[#c0c0c0] hover:bg-[#d0d0d0]">XLogger Hub</button>
                                <button className="retro-button bg-[#c0c0c0] hover:bg-[#d0d0d0]">Seeker GPS</button>
                                <button className="retro-button col-span-2 bg-[#c0c0c0] hover:bg-red-600 hover:text-white h-10">IGNITE_TOTAL_ACQUISITION</button>
                            </div>
                        </div>
                    )}
                </div>
                <div className="h-4 bg-[#c0c0c0] border-t border-[#808080] text-[9px] flex items-center px-2 italic text-gray-600">
                    Status: {win.zIndex === maxZ ? "In Focus" : "Background Process"}
                </div>
            </div>
        ))}
      </div>

      {/* Taskbar */}
      <div className="retro-taskbar">
         <button className="retro-outset h-8 px-2 flex items-center gap-1 hover:bg-[#d0d0d0] active:retro-inset group">
            <div className="bg-primary size-6 rounded-sm flex items-center justify-center group-hover:rotate-12 transition-transform">
                <Skull className="size-4 text-black" />
            </div>
            <span className="font-bold text-sm text-black">Start</span>
         </button>
         
         <div className="flex-1 flex gap-1 px-4 overflow-hidden">
            {windows.filter(w => w.isOpen).map(win => (
                <button 
                    key={win.id}
                    onClick={() => focusWindow(win.id)}
                    className={cn(
                        "retro-outset h-8 px-3 flex items-center gap-2 max-w-[150px] truncate transition-all text-black",
                        win.zIndex === maxZ && !win.isMinimized ? "retro-inset bg-white/50" : "bg-[#c0c0c0]"
                    )}
                >
                    <win.icon className="size-3 shrink-0" />
                    <span className="text-xs font-bold truncate">{win.title}</span>
                </button>
            ))}
         </div>

         <div className="retro-inset h-8 px-3 flex items-center gap-4 bg-[#c0c0c0] text-black">
            <div className="flex items-center gap-2">
                <Cpu className="size-3 text-primary animate-pulse" />
                <span className="text-[10px] font-bold">{metrics.cpu}</span>
            </div>
            <div className="flex items-center gap-2 border-l border-[#808080] pl-4">
                <History className="size-3 text-blue-700" />
                <span className="text-[10px] font-bold uppercase">{time}</span>
            </div>
         </div>
      </div>

      {/* Global Suffix Overlay */}
      <div className="fixed top-4 right-4 flex flex-col items-end opacity-20 pointer-events-none select-none z-0">
          <h2 className="text-6xl font-black text-white italic uppercase tracking-widest gold-glow">AL-MUIZZ</h2>
          <span className="text-[10px] font-bold text-white uppercase tracking-[1em]">Sovereign_OS_v77_Materialized</span>
      </div>
      
      {/* Global Banner Overlay */}
      <div className="fixed bottom-12 right-4 flex items-center gap-10 opacity-30 text-[10px] font-bold uppercase tracking-[1em] text-white z-[50]">
          <Fingerprint className="size-4" /> GHAZALI_ROOT // HIVE_OS_v77
      </div>

      <div className="absolute bottom-16 right-16 p-40 opacity-5 pointer-events-none scale-150 rotate-12 z-0 text-white">
         <Skull className="size-96" />
      </div>

    </div>
  )
}
