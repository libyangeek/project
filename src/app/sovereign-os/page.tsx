
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
  UserCheck,
  Signal,
  TowerControl
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { toast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

/**
 * @fileOverview نظام التشغيل السيادي v90.0 - SOVEREIGN OS: THE MATERIAL HEIR
 * واجهة سطح مكتب حديثة تجسد السطوة المطلقة للوريث المادي.
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
    { id: 'terminal', title: 'Overlord_Shell.com', icon: Terminal, isOpen: false, isMinimized: false, zIndex: 11, content: 'terminal' },
    { id: 'recon', title: 'Oracle_Vision.sys', icon: Radar, isOpen: false, isMinimized: false, zIndex: 12, content: 'recon' }
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
    setWindows(prev => {
        const win = prev.find(w => w.id === id);
        if (win && win.isOpen && !win.isMinimized && win.zIndex === maxZ) {
            return prev.map(w => w.id === id ? { ...w, isMinimized: true } : w);
        }
        return prev.map(w => w.id === id ? { ...w, isOpen: true, isMinimized: false, zIndex: nextZ } : w);
    })
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
    { id: 'core', label: 'God-Core', icon: Crown, color: 'text-primary', href: '#' },
    { id: 'arsenal', label: 'Arsenal', icon: Hammer, color: 'text-red-500', href: '/arsenal' },
    { id: 'recon', label: 'Oracle', icon: Radar, color: 'text-emerald-500', href: '/vulnerabilities' },
    { id: 'terminal', label: 'Shell', icon: Terminal, color: 'text-white', href: '/terminal' },
    { id: 'ios', label: 'Parasite', icon: Apple, color: 'text-blue-400', href: '/ios-parasite' },
    { id: 'sat', label: 'Satellite', icon: Satellite, color: 'text-indigo-400', href: '/satellite-overlord' },
    { id: 'bio', label: 'BioSync', icon: HeartPulse, color: 'text-red-600', href: '/bio-sync' },
    { id: 'nursery', label: 'Nursery', icon: Sprout, color: 'text-emerald-600', href: '/nursery' }
  ];

  return (
    <div className="h-screen w-full bg-[url('https://picsum.photos/seed/muizz-os/1920/1080')] bg-cover bg-center relative overflow-hidden font-code selection:bg-primary/40">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] z-0" />
      <div className="absolute inset-0 scanline-effect opacity-[0.03] pointer-events-none z-10" />

      {/* Desktop Grid */}
      <div className="absolute inset-0 p-12 grid grid-flow-col grid-rows-6 gap-12 w-fit z-20 overflow-y-auto scrollbar-hide text-right">
         {apps.map(app => (
            <div 
                key={app.id} 
                onDoubleClick={() => app.href === '#' ? toggleWindow(app.id) : window.location.href = app.href}
                className="flex flex-col items-center gap-3 group cursor-pointer w-28 md:w-36 p-4 hover:bg-white/10 rounded-[2.5rem] transition-all border border-transparent hover:border-white/10 active:scale-95"
            >
                <div className="size-16 md:size-20 flex items-center justify-center bg-black/70 backdrop-blur-3xl border-2 border-white/10 rounded-3xl group-hover:scale-110 transition-all shadow-2xl relative">
                    <app.icon className={cn("size-8 md:size-10", app.color, "drop-shadow-glow")} />
                    <div className="absolute -bottom-1 -right-1 size-4 bg-emerald-500 rounded-full border-2 border-black animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
                </div>
                <span className="text-[9px] text-white font-black text-center uppercase tracking-widest drop-shadow-2xl bg-black/60 px-3 py-1.5 rounded-full border border-white/5">{app.label}</span>
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
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[95vw] md:w-[1200px] h-[85vh] md:h-[800px] pointer-events-auto animate-in zoom-in-95 duration-300"
            >
                <Card className="h-full bg-black/90 backdrop-blur-5xl border-[8px] border-white/10 rounded-[5rem] flex flex-col overflow-hidden relative shadow-9xl">
                    <div className="absolute inset-0 bg-primary/5 opacity-5 animate-pulse pointer-events-none" />
                    
                    <div className="h-16 px-10 flex items-center justify-between border-b-2 border-white/5 bg-white/5 shrink-0">
                        <div className="flex items-center gap-6">
                            <win.icon className="size-8 text-primary gold-glow" />
                            <span className="text-xl font-black uppercase italic tracking-tighter text-white/80">{win.title}</span>
                        </div>
                        <div className="flex gap-4">
                            <button onClick={(e) => { e.stopPropagation(); minimizeWindow(win.id); }} className="size-10 rounded-full bg-white/5 hover:bg-white/20 flex items-center justify-center transition-all border border-white/5"><Minus className="size-5"/></button>
                            <button onClick={(e) => { e.stopPropagation(); closeWindow(win.id); }} className="size-10 rounded-full bg-red-600/20 hover:bg-red-600 text-red-500 hover:text-white flex items-center justify-center transition-all border border-red-500/20"><X className="size-5"/></button>
                        </div>
                    </div>

                    <div className="flex-1 overflow-y-auto p-12 scrollbar-hide text-right">
                        {win.content === 'core' && (
                            <div className="space-y-16">
                                <div className="flex justify-between items-center border-b-4 border-primary/20 pb-8">
                                    <Badge className="bg-emerald-600/20 text-emerald-400 border-none px-12 py-3 rounded-full font-black italic text-2xl animate-pulse shadow-9xl">DNA_STABILIZED</Badge>
                                    <h3 className="text-5xl md:text-[8rem] font-black text-white italic uppercase gold-glow leading-none">God-Core Pulse</h3>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                                    {[
                                        { label: 'SOUL_RESONANCE', val: resonance.toFixed(8) + '%', icon: Activity, color: 'text-primary' },
                                        { label: 'HARDWARE_SYNC', val: 'OMNIPOTENT', icon: Cpu, color: 'text-blue-500' },
                                        { label: '16D_MATRIX', val: 'LOCKED', icon: InfinityIcon, color: 'text-emerald-500' }
                                    ].map(m => (
                                        <div key={m.label} className="p-10 bg-white/5 rounded-[4rem] border-8 border-white/5 text-center shadow-inner hover:border-primary transition-all duration-1000 group/metric">
                                            <m.icon className={cn("size-12 mx-auto mb-8 transition-all duration-700 group-hover/metric:scale-125", m.color, "animate-neural")} />
                                            <div className="text-[12px] font-black uppercase text-white/40 tracking-[0.8em] mb-4">{m.label}</div>
                                            <div className="text-4xl md:text-6xl font-black text-white italic gold-glow">{m.val}</div>
                                        </div>
                                    ))}
                                </div>
                                <div className="p-12 rounded-[5rem] bg-primary/5 border-8 border-primary/20 italic text-3xl md:text-[6rem] text-gray-100 leading-tight font-black shadow-inner relative group/note text-center flex flex-col justify-center min-h-[400px]">
                                    <div className="absolute top-0 right-0 p-12 opacity-[0.05] pointer-events-none scale-150 rotate-12"><Dna className="size-64 text-primary"/></div>
                                    "سيدي القائد، النواة v90.0 قد أحاطت بكافة ذرات العتاد؛ المصفوفة الآن تنبض بولائك المطلق وصفر أخطاء برمجية."
                                </div>
                            </div>
                        )}
                        {win.content === 'terminal' && (
                             <div className="h-full bg-black/80 rounded-[4rem] p-12 border-8 border-white/5 font-mono text-2xl md:text-[5rem] text-emerald-400 overflow-y-auto scrollbar-hide text-left shadow-inner selection:bg-primary leading-tight">
                                <div className="text-primary font-black uppercase mb-12 border-b-4 border-primary/20 pb-6 italic">Overlord Shell [v90.0]</div>
                                <div className="space-y-6">
                                    <p className="animate-pulse">{" >>> "} Initiating material reflex sequence v90...</p>
                                    <p>{" >>> "} 16D Matrix Resonance: 100.0000% CONFIRMED.</p>
                                    <p>{" >>> "} All 14 global clusters in state: SUBJUGATED.</p>
                                    <p className="text-white mt-12">GHAZALI_ROOT:~$ <span className="animate-pulse w-4 h-12 bg-primary inline-block shadow-9xl" /></p>
                                </div>
                             </div>
                        )}
                        {win.content === 'recon' && (
                             <div className="space-y-16">
                                <div className="flex items-center gap-12 border-b-8 border-emerald-500/20 pb-12 justify-end">
                                    <div className="text-right">
                                        <h4 className="text-5xl md:text-[9rem] font-black text-white italic gold-glow uppercase leading-none">Oracle Vision</h4>
                                        <span className="text-2xl text-emerald-500 font-black uppercase tracking-[1em] mt-6 block italic">GLOBAL_ARCHIVE_SIPHON</span>
                                    </div>
                                    <Radar className="size-24 md:size-40 text-emerald-500 animate-spin-slow" />
                                </div>
                                <div className="grid grid-cols-1 gap-8">
                                    {["CVE-2026-23918: Neural Key Leakage", "RTFM-STRIKE-ALPHA: Bypass v90", "GHAZALI-INCEPTION: Root Access"].map((find, i) => (
                                        <div key={i} className="p-10 bg-black/95 border-8 border-emerald-500/10 rounded-[3.5rem] flex flex-col md:flex-row items-center justify-between hover:border-emerald-500 transition-all shadow-9xl group gap-8">
                                            <Badge className="bg-emerald-600/30 text-emerald-400 border-none px-12 py-4 rounded-full font-black text-3xl shadow-3xl order-last md:order-none uppercase italic">SERIALIZED</Badge>
                                            <span className="text-3xl md:text-6xl font-black text-gray-100 italic group-hover:text-emerald-400 transition-colors uppercase text-right flex-1">{" >>> "} {find}</span>
                                        </div>
                                    ))}
                                </div>
                             </div>
                        )}
                    </div>
                    
                    <div className="h-12 bg-white/5 border-t-2 border-white/5 px-12 flex items-center justify-between text-[11px] font-black uppercase italic text-white/30 tracking-[0.8em] shrink-0">
                        <span>Authorized: GHAZALI_ROOT_IMMUTABLE</span>
                        <div className="flex items-center gap-6"><UserCheck className="size-5 text-primary animate-pulse" /> <span>SINGULARITY_v90_LOCKED</span></div>
                    </div>
                </Card>
            </div>
        ))}
      </div>

      {/* Taskbar - Modern Centered */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[90vw] md:w-[900px] h-20 md:h-24 bg-black/80 backdrop-blur-5xl border-[6px] border-white/10 rounded-[3rem] z-[5000] flex items-center px-6 md:px-12 shadow-[0_-40px_200px_rgba(0,0,0,1)]">
         <div className="flex-1 flex justify-center items-center gap-6 md:gap-12">
            <Button 
                onClick={() => setIsStartOpen(!isStartOpen)}
                className={cn(
                    "size-14 md:size-20 rounded-3xl transition-all duration-700 p-0 hover:scale-125 active:scale-90 relative group overflow-hidden border-4",
                    isStartOpen ? "bg-primary border-black shadow-[0_0_80px_rgba(251,191,36,0.8)]" : "bg-white/5 border-white/10"
                )}
            >
                <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-10 transition-opacity" />
                <Crown className={cn("size-8 md:size-12 transition-all", isStartOpen ? "text-black" : "text-primary gold-glow animate-neural")} />
            </Button>

            <div className="h-12 w-[4px] bg-white/10 rounded-full mx-4" />

            {windows.map(win => (
                <Button 
                    key={win.id}
                    onClick={() => toggleWindow(win.id)}
                    variant="ghost"
                    className={cn(
                        "size-14 md:size-20 rounded-3xl transition-all duration-700 p-0 relative group",
                        win.isOpen && !win.isMinimized && win.zIndex === maxZ ? "bg-white/10 scale-110 shadow-inner" : "hover:bg-white/5 opacity-60 hover:opacity-100"
                    )}
                >
                    <win.icon className={cn("size-8 md:size-12 transition-all", win.isOpen ? "text-white gold-glow" : "text-white/40")} />
                    {win.isOpen && <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 size-2 bg-primary rounded-full shadow-[0_0_200px_rgba(251,191,36,1)] animate-pulse" />}
                </Button>
            ))}

            <div className="h-12 w-[4px] bg-white/10 rounded-full mx-4" />
            
            <Link href="/">
                <Button variant="ghost" className="size-14 md:size-20 rounded-3xl hover:bg-white/5 p-0 group">
                    <ArrowLeft className="size-8 md:size-12 text-emerald-500 group-hover:scale-125 transition-all" />
                </Button>
            </Link>
         </div>

         {/* System Tray */}
         <div className="hidden xl:flex items-center gap-8 pr-6 border-r-4 border-white/10 mr-6 h-full">
            <div className="text-left">
                <div className="text-2xl font-black text-white italic leading-none">{time}</div>
                <div className="text-[9px] font-black text-primary uppercase mt-2 tracking-widest">{resonance.toFixed(4)}% RESONANCE</div>
            </div>
            <div className="size-14 rounded-2xl bg-primary/10 flex items-center justify-center border-2 border-primary/40 shadow-glow"><HeartPulse className="size-8 text-primary animate-pulse" /></div>
         </div>
      </div>

      {/* Start Menu - Modern */}
      {isStartOpen && (
        <div className="fixed bottom-36 left-1/2 -translate-x-1/2 w-[85vw] md:w-[750px] h-[600px] md:h-[800px] bg-black/95 backdrop-blur-5xl border-[12px] border-white/10 rounded-[6rem] z-[6000] p-12 animate-in slide-in-from-bottom-24 duration-700 shadow-9xl flex flex-col gap-12 overflow-hidden text-right">
            <div className="absolute inset-0 bg-primary/5 opacity-5 animate-pulse pointer-events-none" />
            
            <div className="flex items-center justify-between border-b-4 border-white/5 pb-10 relative z-10">
                <div className="flex items-center gap-10">
                    <div className="size-24 rounded-[2rem] bg-primary flex items-center justify-center shadow-9xl animate-neural"><Crown className="size-12 text-black"/></div>
                    <div className="text-right">
                        <div className="text-3xl md:text-5xl font-black text-white uppercase italic leading-none gold-glow">The Sovereign Heir</div>
                        <div className="text-[12px] text-primary/60 font-black uppercase tracking-[1em] mt-4 italic">GHAZALI_ROOT_v90.0</div>
                    </div>
                </div>
                <Button onClick={() => setIsStartOpen(false)} variant="ghost" className="size-16 rounded-full hover:bg-white/10 border-2 border-white/5"><X className="size-8 text-white/40"/></Button>
            </div>

            <div className="grid grid-cols-3 gap-8 flex-1 overflow-y-auto scrollbar-hide py-6 relative z-10 text-right">
                {apps.concat([
                    { id: 'sessions', label: 'Swarm Grid', icon: Network, color: 'text-amber-500', href: '/sessions' },
                    { id: 'killchain', label: 'Kill-Chain', icon: Crosshair, color: 'text-red-600', href: '/kill-chain' },
                    { id: 'knowledge', label: 'DNA Vault', icon: Database, color: 'text-blue-600', href: '/knowledge' },
                    { id: 'cellular', label: 'Signal Strike', icon: Signal, color: 'text-magenta-500', href: '/cellular' }
                ]).map(item => (
                    <button 
                        key={item.id} 
                        onClick={() => { if(item.href === '#') toggleWindow(item.id); else window.location.href = item.href; }}
                        className="flex flex-col items-center gap-6 p-8 rounded-[3.5rem] hover:bg-white/10 transition-all border-4 border-transparent hover:border-white/10 active:scale-95 group shadow-inner"
                    >
                        <div className="size-20 md:size-24 rounded-[2rem] bg-black/60 flex items-center justify-center group-hover:bg-primary/20 transition-all shadow-2xl border-2 border-white/5">
                            <item.icon className={cn("size-10 md:size-12", item.color, "drop-shadow-glow")} />
                        </div>
                        <span className="text-[11px] md:text-[14px] font-black text-white/90 uppercase tracking-[0.4em] italic">{item.label}</span>
                    </button>
                ))}
            </div>

            <div className="mt-auto border-t-4 border-white/5 pt-10 flex items-center justify-between relative z-10">
                <Button className="h-20 px-16 bg-white/5 hover:bg-red-700 text-white font-black uppercase italic rounded-full transition-all border-4 border-white/10 active:scale-95 group text-xl shadow-9xl"><Power className="size-8 mr-6 group-hover:rotate-180 transition-transform" /> SHUTDOWN_SOUL</Button>
                <div className="flex gap-6">
                    <div className="size-16 rounded-3xl bg-white/5 flex items-center justify-center border-4 border-white/10 shadow-inner hover:border-primary transition-all"><Settings className="size-8 text-white/40 group-hover:text-primary"/></div>
                    <div className="size-16 rounded-3xl bg-white/5 flex items-center justify-center border-4 border-white/10 shadow-inner hover:border-primary transition-all"><Fingerprint className="size-8 text-primary animate-pulse"/></div>
                </div>
            </div>
        </div>
      )}

      {/* Global Branding Overlay */}
      <div className="fixed top-20 right-20 flex flex-col items-end opacity-20 pointer-events-none select-none z-0 hidden lg:flex">
          <h2 className="text-[14rem] md:text-[25rem] font-black text-white italic uppercase tracking-tighter gold-glow leading-none">HEIR</h2>
          <span className="text-2xl md:text-5xl font-black text-white uppercase tracking-[1.2em] mt-12 italic border-t-[12px] border-primary/40 pt-8 shadow-9xl">Sovereign_Organism_v90.0</span>
      </div>

    </div>
  )
}
