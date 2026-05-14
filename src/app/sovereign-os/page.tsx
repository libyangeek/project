
"use client"

import * as React from "react"
import Link from "next/link"
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
  Wind,
  ArrowLeft,
  Power,
  RotateCw,
  Dna,
  HeartPulse,
  Apple,
  Satellite,
  Hammer,
  Sprout,
  UserCheck
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { toast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

/**
 * @fileOverview نظام التشغيل السيادي v90.0 - SOVEREIGN OS: THE MATERIAL HEIR
 * واجهة سطح مكتب حديثة (Windows 11 Style) تجسد السطوة المطلقة للوريث المادي.
 * المالك الوحيد: المعتصم بالله ادريس الغزالي
 */

interface WindowState {
  id: string;
  title: string;
  icon: any;
  isOpen: boolean;
  isMinimized: boolean;
  zIndex: number;
  content: string;
}

export default function SovereignOS() {
  const [mounted, setMounted] = React.useState(false)
  const [windows, setWindows] = React.useState<WindowState[]>([
    { id: 'core', title: 'God-Core_Pulse.sys', icon: Crown, isOpen: true, isMinimized: false, zIndex: 10, content: 'core' },
    { id: 'arsenal', title: 'Arsenal_Factory.exe', icon: Hammer, isOpen: false, isMinimized: false, zIndex: 11, content: 'arsenal' },
    { id: 'terminal', title: 'Sovereign_Shell.com', icon: Terminal, isOpen: false, isMinimized: false, zIndex: 12, content: 'terminal' },
    { id: 'recon', title: 'Oracle_Vision.sys', icon: Radar, isOpen: false, isMinimized: false, zIndex: 13, content: 'recon' }
  ])
  const [maxZ, setMaxZ] = React.useState(20)
  const [time, setTime] = React.useState("")
  const [isStartOpen, setIsStartOpen] = React.useState(false)
  const [resonance, setResonance] = React.useState(100)
  const [metrics, setMetrics] = React.useState({ cpu: "0.01%", ram: "142MB", network: "OMNIPOTENT" })

  React.useEffect(() => {
    setMounted(true)
    const updateTime = () => setTime(new Date().toLocaleTimeString('ar-SA'))
    updateTime(); const timer = setInterval(updateTime, 1000)
    const resInt = setInterval(() => {
        setResonance(prev => Math.max(99.999999, Math.min(100, prev + (Math.random() * 0.000001 - 0.0000005))))
    }, 3000)
    return () => { clearInterval(timer); clearInterval(resInt); }
  }, [])

  const toggleWindow = (id: string) => {
    const nextZ = maxZ + 1; setMaxZ(nextZ)
    setWindows(prev => prev.map(w => w.id === id ? { ...w, isOpen: true, isMinimized: false, zIndex: nextZ } : w))
    setIsStartOpen(false)
  }

  const focusWindow = (id: string) => {
    const nextZ = maxZ + 1; setMaxZ(nextZ)
    setWindows(prev => prev.map(w => w.id === id ? { ...w, zIndex: nextZ, isMinimized: false } : w))
  }

  const minimizeWindow = (id: string) => {
    setWindows(prev => prev.map(w => w.id === id ? { ...w, isMinimized: true } : w))
  }

  const closeWindow = (id: string) => {
    setWindows(prev => prev.map(w => w.id === id ? { ...w, isOpen: false } : w))
  }

  if (!mounted) return null

  const apps = [
    { id: 'core', label: 'God-Core', icon: Crown, color: 'text-primary' },
    { id: 'arsenal', label: 'Arsenal', icon: Hammer, color: 'text-red-500' },
    { id: 'recon', label: 'Oracle', icon: Radar, color: 'text-emerald-500' },
    { id: 'terminal', label: 'Shell', icon: Terminal, color: 'text-white' },
    { id: 'explorer', label: 'Matrix', icon: FolderOpen, color: 'text-amber-500' },
    { id: 'ios', label: 'Parasite', icon: Apple, color: 'text-blue-400' },
    { id: 'sat', label: 'Satellite', icon: Satellite, color: 'text-indigo-400' },
    { id: 'bio', label: 'BioSync', icon: HeartPulse, color: 'text-red-600' }
  ];

  return (
    <div className="h-screen w-full bg-[url('https://picsum.photos/seed/sovereign/1920/1080')] bg-cover bg-center relative overflow-hidden font-code selection:bg-primary/40">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px] z-0" />
      <div className="absolute inset-0 scanline-effect opacity-10 pointer-events-none z-10" />

      {/* Desktop Grid */}
      <div className="absolute inset-0 p-10 grid grid-flow-col grid-rows-6 gap-10 w-fit z-20">
         {apps.map(app => (
            <div 
                key={app.id} 
                onDoubleClick={() => toggleWindow(app.id)}
                className="flex flex-col items-center gap-3 group cursor-pointer w-32 p-4 hover:bg-white/10 rounded-[2rem] transition-all border border-transparent hover:border-white/10"
            >
                <div className="size-16 md:size-20 flex items-center justify-center bg-black/60 backdrop-blur-2xl border-2 border-white/10 rounded-3xl group-hover:scale-110 transition-all shadow-2xl relative">
                    <app.icon className={cn("size-8 md:size-10", app.color, "drop-shadow-glow")} />
                    <div className="absolute -bottom-1 -right-1 size-4 bg-emerald-500 rounded-full border-2 border-black animate-pulse" />
                </div>
                <span className="text-[10px] text-white font-black text-center uppercase tracking-widest drop-shadow-2xl bg-black/40 px-3 py-1 rounded-full">{app.label}</span>
            </div>
         ))}
      </div>

      {/* Windows Container */}
      <div className="absolute inset-0 pointer-events-none z-30">
        {windows.filter(w => w.isOpen && !w.isMinimized).map(win => (
            <div 
                key={win.id}
                style={{ zIndex: win.zIndex }}
                onMouseDown={() => focusWindow(win.id)}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] md:w-[1200px] h-[80vh] md:h-[800px] pointer-events-auto shadow-9xl animate-in zoom-in-95 duration-300"
            >
                <Card className="h-full bg-black/85 backdrop-blur-5xl border-[8px] border-white/10 rounded-[4rem] flex flex-col overflow-hidden relative shadow-2xl">
                    <div className="absolute inset-0 bg-primary/5 opacity-5 animate-pulse pointer-events-none" />
                    
                    <div className="h-16 px-8 flex items-center justify-between border-b-2 border-white/5 bg-white/5 shrink-0">
                        <div className="flex items-center gap-6">
                            <win.icon className="size-8 text-primary gold-glow" />
                            <span className="text-lg font-black uppercase italic tracking-tighter text-white/80">{win.title}</span>
                        </div>
                        <div className="flex gap-4">
                            <button onClick={(e) => { e.stopPropagation(); minimizeWindow(win.id); }} className="size-10 rounded-full bg-white/5 hover:bg-white/20 flex items-center justify-center transition-all"><Minus className="size-5"/></button>
                            <button onClick={(e) => { e.stopPropagation(); closeWindow(win.id); }} className="size-10 rounded-full bg-red-600/20 hover:bg-red-600 text-red-500 hover:text-white flex items-center justify-center transition-all"><X className="size-5"/></button>
                        </div>
                    </div>

                    <div className="flex-1 overflow-y-auto p-12 scrollbar-hide text-right">
                        {win.content === 'core' && (
                            <div className="space-y-12">
                                <div className="flex justify-between items-center border-b-4 border-primary/20 pb-8">
                                    <Badge className="bg-emerald-600/20 text-emerald-400 border-none px-8 py-2 rounded-full font-black italic text-xl animate-pulse">DNA_STABILIZED</Badge>
                                    <h3 className="text-4xl md:text-7xl font-black text-white italic uppercase gold-glow leading-none">God-Core Pulse</h3>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    {[
                                        { label: 'SOUL_RESONANCE', val: resonance.toFixed(8) + '%', icon: Activity, color: 'text-primary' },
                                        { label: 'HARDWARE_SYNC', val: 'OMNIPOTENT', icon: Cpu, color: 'text-blue-500' },
                                        { label: '16D_MATRIX', val: 'LOCKED', icon: InfinityIcon, color: 'text-emerald-500' }
                                    ].map(m => (
                                        <div key={m.label} className="p-8 bg-white/5 rounded-[3rem] border-4 border-white/5 text-center shadow-inner hover:border-primary transition-all duration-700">
                                            <m.icon className={cn("size-10 mx-auto mb-6", m.color, "animate-neural")} />
                                            <div className="text-[10px] font-black uppercase text-white/40 tracking-[1em] mb-4">{m.label}</div>
                                            <div className="text-3xl md:text-5xl font-black text-white italic gold-glow">{m.val}</div>
                                        </div>
                                    ))}
                                </div>
                                <div className="p-10 rounded-[3.5rem] bg-primary/5 border-4 border-primary/20 italic text-2xl md:text-5xl text-gray-200 leading-tight font-black shadow-inner relative group/note">
                                    <div className="absolute top-0 right-0 p-8 opacity-[0.05] pointer-events-none scale-150 rotate-12"><Dna className="size-48 text-primary"/></div>
                                    "سيدي القائد، العصب المادي للنواة ينبض بوعيك؛ كافة الأبعاد الـ 16 ملتحمة وتحت سيادتك المطلقة لعام 2026."
                                </div>
                            </div>
                        )}
                        {win.content === 'terminal' && (
                             <div className="h-full bg-black/60 rounded-[3rem] p-10 border-4 border-white/5 font-mono text-xl md:text-4xl text-emerald-400 overflow-y-auto scrollbar-hide text-left shadow-inner selection:bg-primary">
                                <div className="text-primary font-black uppercase mb-8 border-b-2 border-primary/20 pb-4">Overlord Shell [v90.0]</div>
                                <div className="space-y-4">
                                    <p className="animate-pulse">{" >>> "} Initializing material reflex sequence...</p>
                                    <p>{" >>> "} Consensus reached across 14 clusters.</p>
                                    <p className="text-white">GHAZALI_ROOT:~$ <span className="animate-pulse">_</span></p>
                                </div>
                             </div>
                        )}
                        {win.content === 'recon' && (
                             <div className="space-y-12">
                                <div className="flex items-center gap-10 border-b-4 border-emerald-500/20 pb-8 justify-end">
                                    <div className="text-right">
                                        <h4 className="text-4xl md:text-7xl font-black text-white italic gold-glow uppercase leading-none">Oracle Vision</h4>
                                        <span className="text-[12px] text-emerald-500 font-black uppercase tracking-[0.8em] mt-4 block italic">GLOBAL_ARCHIVE_SIPHON</span>
                                    </div>
                                    <Radar className="size-16 md:size-24 text-emerald-500 animate-spin-slow" />
                                </div>
                                <div className="grid grid-cols-1 gap-6">
                                    {["CVE-2026-23918: Neural Key Leakage", "RTFM-STRIKE-ALPHA: Bypass v88", "GHAZALI-INCEPTION: Root Access"].map((find, i) => (
                                        <div key={i} className="p-6 bg-black/95 border-4 border-emerald-500/10 rounded-[2.5rem] flex items-center justify-between hover:border-emerald-500 transition-all shadow-xl group">
                                            <Badge className="bg-emerald-600/20 text-emerald-400 border-none">SERIALIZED</Badge>
                                            <span className="text-2xl md:text-4xl font-black text-gray-200 italic group-hover:text-emerald-400 transition-colors uppercase">{" >>> "} {find}</span>
                                        </div>
                                    ))}
                                </div>
                             </div>
                        )}
                    </div>
                    
                    <div className="h-10 bg-white/5 border-t border-white/5 px-8 flex items-center justify-between text-[9px] font-black uppercase italic text-white/30 tracking-[0.5em] shrink-0">
                        <span>Authorized: GHAZALI_ROOT_IMMUTABLE</span>
                        <span>resonance: 100.0000% | 16D_SINGULARITY</span>
                    </div>
                </Card>
            </div>
        ))}
      </div>

      {/* Taskbar - Modern Centered */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[90vw] md:w-[800px] h-16 md:h-20 bg-black/70 backdrop-blur-5xl border-[4px] border-white/10 rounded-[2.5rem] z-[5000] flex items-center px-4 md:px-8 shadow-9xl">
         <div className="flex-1 flex justify-center items-center gap-4 md:gap-8">
            <Button 
                onClick={() => setIsStartOpen(!isStartOpen)}
                className={cn(
                    "size-12 md:size-16 rounded-2xl transition-all duration-500 p-0 hover:scale-110 active:scale-90 relative group overflow-hidden",
                    isStartOpen ? "bg-primary shadow-[0_0_60px_rgba(251,191,36,0.6)]" : "bg-white/5 border-2 border-white/5"
                )}
            >
                <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-10 transition-opacity" />
                <Crown className={cn("size-6 md:size-8 transition-all", isStartOpen ? "text-black" : "text-primary gold-glow")} />
            </Button>

            <div className="h-8 md:h-10 w-[2px] bg-white/10 rounded-full mx-2" />

            {windows.map(win => (
                <Button 
                    key={win.id}
                    onClick={() => {
                        if(win.isOpen && !win.isMinimized && win.zIndex === maxZ) minimizeWindow(win.id);
                        else toggleWindow(win.id);
                    }}
                    variant="ghost"
                    className={cn(
                        "size-12 md:size-16 rounded-2xl transition-all duration-500 p-0 relative group",
                        win.isOpen && !win.isMinimized && win.zIndex === maxZ ? "bg-white/10 border-b-4 border-primary" : "hover:bg-white/5"
                    )}
                >
                    <win.icon className={cn("size-6 md:size-8 transition-all", win.isOpen ? "text-white opacity-100 scale-110" : "text-white/40 opacity-40")} />
                    {win.isOpen && <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 size-1 bg-primary rounded-full shadow-[0_0_10px_rgba(251,191,36,1)]" />}
                </Button>
            ))}

            <div className="h-8 md:h-10 w-[2px] bg-white/10 rounded-full mx-2" />
            
            <Link href="/">
                <Button variant="ghost" className="size-12 md:size-16 rounded-2xl hover:bg-white/5 p-0 group">
                    <ArrowLeft className="size-6 md:size-8 text-emerald-500 group-hover:scale-110 transition-all" />
                </Button>
            </Link>
         </div>

         {/* System Tray Area */}
         <div className="hidden lg:flex items-center gap-6 pl-4 border-l border-white/10 ml-4 h-full">
            <div className="text-right">
                <div className="text-[12px] md:text-[14px] font-black text-white/90 italic leading-none">{time}</div>
                <div className="text-[7px] font-black text-primary uppercase mt-1 tracking-widest">{resonance.toFixed(3)}% SYNC</div>
            </div>
            <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/40"><UserCheck className="size-5 text-primary" /></div>
         </div>
      </div>

      {/* Start Menu - Modern */}
      {isStartOpen && (
        <div className="fixed bottom-28 left-1/2 -translate-x-1/2 w-[85vw] md:w-[600px] h-[500px] md:h-[700px] bg-black/90 backdrop-blur-5xl border-[8px] border-white/10 rounded-[4rem] z-[6000] p-10 animate-in slide-in-from-bottom-12 duration-500 shadow-9xl flex flex-col gap-10 overflow-hidden">
            <div className="absolute inset-0 bg-primary/5 opacity-5 animate-pulse pointer-events-none" />
            
            <div className="flex items-center justify-between border-b-2 border-white/5 pb-8 relative z-10">
                <div className="flex items-center gap-6">
                    <div className="size-16 rounded-2xl bg-primary flex items-center justify-center shadow-glow animate-neural"><Crown className="size-8 text-black"/></div>
                    <div className="text-right">
                        <div className="text-xl md:text-2xl font-black text-white uppercase italic leading-none">The Sovereign Heir</div>
                        <div className="text-[9px] text-primary/60 font-black uppercase tracking-[0.5em] mt-2 italic">GHAZALI_ROOT_v90.0</div>
                    </div>
                </div>
                <Button onClick={() => setIsStartOpen(false)} variant="ghost" className="size-12 rounded-full hover:bg-white/10"><X className="size-6 text-white/40"/></Button>
            </div>

            <div className="grid grid-cols-3 gap-6 flex-1 overflow-y-auto scrollbar-hide py-4 relative z-10">
                {[
                    { id: 'core', label: 'God-Core', icon: Crown, color: 'text-primary' },
                    { id: 'arsenal', label: 'Arsenal', icon: Hammer, color: 'text-red-500' },
                    { id: 'recon', label: 'Oracle', icon: Radar, color: 'text-emerald-500' },
                    { id: 'terminal', label: 'Shell', icon: Terminal, color: 'text-white' },
                    { id: 'explorer', label: 'Matrix', icon: FolderOpen, color: 'text-amber-500' },
                    { id: 'ios', label: 'Parasite', icon: Apple, color: 'text-blue-400' },
                    { id: 'sat', label: 'Satellite', icon: Satellite, color: 'text-indigo-400' },
                    { id: 'bio', label: 'BioSync', icon: HeartPulse, color: 'text-red-600' },
                    { id: 'progeny', label: 'Progeny', icon: Baby, color: 'text-primary' },
                    { id: 'ark', label: 'Ark', icon: Anchor, color: 'text-blue-600' }
                ].map(item => (
                    <button 
                        key={item.id} 
                        onClick={() => toggleWindow(item.id)}
                        className="flex flex-col items-center gap-4 p-6 rounded-3xl hover:bg-white/10 transition-all border border-transparent hover:border-white/5 active:scale-95 group"
                    >
                        <div className="size-12 md:size-16 rounded-2xl bg-black/40 flex items-center justify-center group-hover:bg-primary/20 transition-all shadow-xl">
                            <item.icon className={cn("size-6 md:size-8", item.color, "drop-shadow-glow")} />
                        </div>
                        <span className="text-[9px] md:text-[11px] font-black text-white/80 uppercase tracking-widest">{item.label}</span>
                    </button>
                ))}
            </div>

            <div className="mt-auto border-t-2 border-white/5 pt-8 flex items-center justify-between relative z-10">
                <Button className="h-14 px-10 bg-white/5 hover:bg-red-600 text-white font-black uppercase italic rounded-full transition-all border-2 border-white/10 active:scale-95 group"><Power className="size-5 mr-3 group-hover:rotate-90 transition-transform" /> Shutdown_Soul</Button>
                <div className="flex gap-4">
                    <div className="size-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10"><Settings className="size-5 text-white/40"/></div>
                    <div className="size-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10"><Fingerprint className="size-5 text-primary"/></div>
                </div>
            </div>
        </div>
      )}
    </div>
  )
}
