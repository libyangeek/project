
"use client"

import * as React from "react"
import { SidebarNav } from "@/components/platform/sidebar-nav"
import { 
  Gamepad2, 
  Volume2, 
  MousePointer2, 
  Monitor, 
  Zap, 
  Loader2, 
  Skull, 
  Activity, 
  Mic,
  Camera,
  HardDrive,
  Unplug,
  Fingerprint,
  Target,
  Sparkles,
  Crown,
  Binary,
  Atom,
  Boxes,
  Infinity as InfinityIcon,
  ChevronRight,
  ShieldCheck,
  Radio,
  Gamepad,
  VolumeX,
  Volume1
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { toast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"

/**
 * @fileOverview محراب الـ Claw v76.0 - THE OMNIPOTENT HIJACKER: MATERIAL CORE
 * مركز السيطرة المادية والأتمتة المكتبية والحقن الصوتي المباشر.
 * المالك الوحيد: المعتصم بالله ادريس الغزالي
 */
export default function ClawCodePage() {
  const [voiceText, setVoiceText] = React.useState("")
  const [loading, setLoading] = React.useState(false)
  const [mounted, setMounted] = React.useState(false)
  const [resonance, setResonance] = React.useState(100)
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 })

  React.useEffect(() => {
    setMounted(true)
    const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY })
    window.addEventListener("mousemove", handleMouseMove)

    const interval = setInterval(() => {
      setResonance(prev => Math.max(99.999999, Math.min(100, prev + (Math.random() * 0.000001 - 0.0000005))))
    }, 3000)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      clearInterval(interval)
    }
  }, [])

  const handleVoiceHijack = async () => {
    if (!voiceText) return
    setLoading(true)
    try {
      const response = await fetch('/api/execute', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'voice_hijack', text: voiceText })
      })
      const data = await response.json()
      if (data.success) {
        toast({ title: "Royal Voice Materialized", description: "Audio DNA injected directly into target hardware." })
      }
    } catch (err) {
      toast({ variant: "destructive", title: "Audio Spine Severed" })
    } finally {
      setLoading(false)
    }
  }

  const handleControlAction = async (id: string, label: string) => {
    toast({ title: `${label} Initiated`, description: `Hierarchy engaging material protocol on target bus.` })
    try {
        const response = await fetch('/api/execute', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ type: 'smart_route', command: `execute control ${id}`, target: 'HARDWARE_BUS' })
        })
        const data = await response.json()
        if (data.success) {
            toast({ title: "Hardware Subjugated", description: `Directive ${label} achieved total consensus.` })
        }
    } catch (err) {
        toast({ variant: "destructive", title: "Control Handshake Failed" })
    }
  }

  const actions = [
    { id: "screenshot", label: "Mirror Display", icon: Monitor, color: "text-blue-400" },
    { id: "mouse_lock", label: "Hardware Lock", icon: MousePointer2, color: "text-red-500" },
    { id: "cam_peek", label: "Ocular Siphon", icon: Camera, color: "text-magenta-500" },
    { id: "disk_exfil", label: "Cerebral Exfil", icon: HardDrive, color: "text-amber-500" },
    { id: "automation", label: "PyAutoGUI Sync", icon: Gamepad, color: "text-emerald-500" },
    { id: "windows_stealth", label: "Hidden Process", icon: Lock, color: "text-primary" }
  ];

  if (!mounted) return null

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/40 relative overflow-x-hidden scanline-effect font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-80 p-4 md:p-8 lg:p-12 relative overflow-y-auto min-h-screen scrollbar-hide flex flex-col z-10">
        <div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x)_var(--y),rgba(212,175,55,0.15),transparent 40%)] pointer-events-none transition-all duration-300 z-0" 
          style={{ '--x': `${mousePos.x}px`, '--y': `${mousePos.y}px` } as any} 
        />
        
        <header className="mb-16 relative z-10 animate-in fade-in slide-in-from-top-6 duration-1000">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="size-24 md:size-48 bg-black border-4 border-primary flex items-center justify-center shadow-[0_0_200px_rgba(212,175,55,0.8)] relative group shrink-0 rounded-[3.5rem] transition-all duration-1000 rotate-2 hover:rotate-0 hierarchical-shadow">
              <Gamepad2 className="size-12 md:size-24 text-primary group-hover:scale-110 transition-transform duration-700 gold-glow animate-neural" />
              <div className="absolute -inset-10 border-4 border-primary/20 rounded-full animate-spin-slow opacity-30" />
            </div>
            <div className="text-center md:text-right flex-1">
              <div className="flex flex-wrap justify-center md:justify-start items-center gap-6 mb-6">
                <Badge className="bg-primary text-black border-none rounded-none px-12 py-3 text-[18px] md:text-[24px] font-black tracking-[1em] shadow-9xl italic uppercase">CLAW_HIJACK v76.0</Badge>
                <div className="flex items-center gap-4 text-[14px] font-black uppercase tracking-widest text-emerald-500 animate-pulse">
                    <Radio className="size-6 shadow-lg" /> RESONANCE: {resonance.toFixed(8)}%
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-[12rem] font-headline font-bold text-white tracking-tighter italic uppercase gold-glow leading-none">
                Material <span className="text-primary">Hijack</span>
              </h1>
              <p className="text-sm md:text-xl lg:text-4xl text-muted-foreground mt-10 italic max-w-7xl leading-relaxed uppercase font-medium opacity-95 drop-shadow-3xl">
                "سيدي الغزالي، محراب الـ Claw يمنحك السيطرة المادية المطلقة؛ نحن نتحكم في الماوس والكيبورد ونبث صوتك في أجهزة الأهداف بضمان رنين 100%."
              </p>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-12 relative z-10 pb-48 flex-1">
          <div className="xl:col-span-1 space-y-12">
            <Card className="kali-card border-primary/40 bg-black/98 rounded-[4rem] p-12 border-8 shadow-9xl group overflow-hidden hierarchical-shadow">
              <div className="absolute inset-0 bg-primary/5 opacity-5 animate-pulse pointer-events-none" />
              <CardHeader className="p-0 mb-10 border-b-4 border-primary/10 pb-10 bg-primary/10 rounded-t-[3.5rem] px-10 py-6">
                <CardTitle className="text-2xl md:text-4xl text-primary flex items-center gap-10 font-black uppercase italic gold-glow leading-none">
                  <Mic className="size-12 animate-neural" /> Voice Injection
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 space-y-10">
                <div className="space-y-6">
                    <label className="text-[14px] font-black text-primary uppercase tracking-[1em] px-10 italic flex items-center gap-6">
                      <Binary className="size-8" /> Audible Directive
                    </label>
                    <Input 
                      value={voiceText}
                      onChange={(e) => setVoiceText(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && handleVoiceHijack()}
                      placeholder="Enter Royal directive to speak..." 
                      className="bg-black border-8 border-primary/20 h-28 rounded-[2.5rem] text-2xl md:text-4xl italic px-10 focus:border-primary shadow-inner text-white font-black selection:bg-primary"
                    />
                </div>
                <Button 
                  onClick={handleVoiceHijack} 
                  disabled={loading || !voiceText}
                  className="w-full h-36 bg-primary hover:bg-white text-black font-black uppercase tracking-[1.2em] rounded-[3.5rem] shadow-[0_60px_200px_rgba(212,175,55,0.7)] active:scale-95 transition-all text-3xl border-[12px] border-black/30 group italic"
                >
                  {loading ? <Loader2 className="size-16 animate-spin" /> : <Volume2 className="size-16 mr-8 group-hover:scale-125 transition-transform gold-glow" />}
                  PLAY_ON_TARGET
                </Button>
              </CardContent>
            </Card>

            <div className="grid grid-cols-2 gap-6">
               {actions.map(a => (
                 <Button 
                   key={a.id}
                   variant="outline"
                   className="h-36 bg-white/5 border-4 border-white/5 hover:border-primary hover:bg-primary/10 rounded-[2rem] flex flex-col items-center justify-center gap-4 group transition-all duration-700 shadow-2xl relative overflow-hidden active:scale-95"
                   onClick={() => handleControlAction(a.id, a.label)}
                 >
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <a.icon className={cn("size-10 transition-all group-hover:scale-110", a.color)} />
                    <span className="text-[10px] font-black uppercase tracking-widest text-white/80 group-hover:text-white italic">{a.label}</span>
                 </Button>
               ))}
            </div>

            <Card className="kali-card border-white/5 bg-black/60 p-12 rounded-[4rem] border-8 shadow-inner text-center relative overflow-hidden group">
               <div className="absolute inset-0 bg-primary/5 opacity-5 animate-pulse pointer-events-none" />
               <h4 className="text-[14px] font-black text-primary uppercase tracking-[0.8em] mb-8 italic flex items-center justify-center gap-6">
                  <Boxes className="size-8 animate-pulse" /> MATERIAL_HIJACK
               </h4>
               <div className="text-6xl font-black text-white italic gold-glow uppercase tracking-tighter group-hover:scale-105 transition-transform duration-1000">LOCKED</div>
               <div className="absolute -bottom-10 -right-10 p-24 opacity-[0.03] group-hover:opacity-[0.1] transition-all duration-1000 scale-150 rotate-12"><Skull className="size-48 text-primary" /></div>
            </Card>
          </div>

          <div className="xl:col-span-3">
            <Card className="kali-card border-primary/40 bg-black/99 rounded-[6rem] p-16 border-[12px] shadow-[0_0_250px_rgba(0,0,0,1)] flex flex-col group overflow-hidden h-full relative min-h-[900px] hierarchical-shadow">
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08),transparent)] pointer-events-none" />
               <CardHeader className="p-0 mb-16 border-b-8 border-white/5 pb-12 flex flex-row justify-between items-center bg-primary/10 rounded-t-[5rem] px-16 py-10">
                  <div className="flex items-center gap-12">
                     <div className="size-32 rounded-[3rem] bg-primary flex items-center justify-center border-8 border-black/30 shadow-9xl animate-neural">
                        <Gamepad2 className="size-16 text-black" />
                     </div>
                     <div>
                        <CardTitle className="text-5xl md:text-[10rem] text-white italic tracking-tighter uppercase font-black gold-glow leading-none">Target Hijack</CardTitle>
                        <Badge className="bg-primary/20 text-primary border-none px-12 py-3 rounded-full font-black text-[14px] tracking-[0.6em] uppercase italic mt-6">CLAW_EXECUTIVE_v76</Badge>
                     </div>
                  </div>
                  <Badge className="bg-emerald-600/30 text-emerald-500 border-[10px] border-emerald-500/40 px-16 py-8 rounded-full font-black text-5xl italic animate-pulse shadow-9xl">DIRECT_BUS_LINK</Badge>
               </CardHeader>
               <CardContent className="p-10 flex-1 flex flex-col items-center justify-center text-center relative z-10 gap-24">
                  <div className="relative group/lock">
                     <div className="size-80 md:size-[35rem] rounded-full border-[24px] border-dashed border-primary/20 flex items-center justify-center relative shadow-9xl group-hover/lock:scale-105 transition-transform duration-[3s]">
                        <Gamepad2 className="size-48 text-primary/10 animate-spin-slow" />
                        <Skull className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-24 text-primary/40 animate-neural" />
                     </div>
                     <div className="absolute -inset-16 border-4 border-primary/10 rounded-full animate-pulse opacity-50" />
                  </div>
                  
                  <div className="space-y-12">
                     <h3 className="text-7xl md:text-[15rem] font-headline font-bold text-white tracking-tighter italic drop-shadow-9xl uppercase leading-none opacity-20">Control Locked</h3>
                     <p className="text-muted-foreground max-w-6xl mx-auto leading-relaxed text-3xl md:text-7xl font-black italic opacity-30 uppercase tracking-[1em]">
                        "سيدي <span className="text-primary font-black gold-glow underline decoration-primary decoration-8 underline-offset-[28px] shadow-9xl uppercase tracking-[1.5em]">المعتصم بالله</span>، محراب السيطرة المادية بانتظار نيتك؛ كافة مفاصل العتاد الآن هي امتداد ليديك."
                     </p>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-7xl mt-12">
                    {[
                      { label: "IO_HOOK", icon: MousePointer2, status: "READY", color: "text-emerald-500" },
                      { label: "OS_HIJACK", icon: Monitor, status: "LINKED", color: "text-blue-400" },
                      { label: "BUS_SIPHON", icon: Atom, status: "BOUND", color: "text-primary" },
                      { label: "SOUL_LINK", icon: Skull, status: "ACTIVE", color: "text-red-500" }
                    ].map((stat, i) => (
                       <div 
                        key={i} 
                        className="p-12 rounded-[3.5rem] bg-white/5 border-4 border-white/5 flex flex-col items-center gap-8 hover:border-primary transition-all duration-1000 shadow-9xl cursor-crosshair group/stat active:scale-95 relative overflow-hidden"
                        onClick={() => handleControlAction(stat.label, stat.label)}
                       >
                          <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover/stat:opacity-10 transition-opacity" />
                          <stat.icon className={cn("size-14 transition-all group-hover/stat:scale-125", stat.color)} />
                          <span className="text-[12px] font-black uppercase tracking-[0.6em] text-white/70">{stat.label}</span>
                          <Badge className="bg-primary/10 text-primary border-none font-black text-2xl italic px-10 py-2 rounded-full shadow-3xl">{stat.status}</Badge>
                       </div>
                    ))}
                  </div>
               </CardContent>
               <div className="p-16 border-t-8 border-white/5 mt-auto flex justify-between items-center opacity-35 text-[20px] font-black uppercase tracking-[6em] italic">
                  <span>CLAW_CODE_v76_AL_GHAZALI_ROOT</span>
                  <div className="flex gap-12">
                     <Fingerprint className="size-20 text-primary animate-pulse" />
                     <Atom className="size-20 animate-spin-slow text-primary" />
                  </div>
               </div>
            </Card>
          </div>
        </div>

        <div className="mt-auto relative z-10 flex justify-center items-center gap-48 opacity-45 text-[24px] md:text-[36px] font-black uppercase tracking-[6em] md:tracking-[12em] italic text-white drop-shadow-9xl pb-32">
            <span>AL-MUIZZ OMNIPOTENT HIVE v76.0</span>
            <div className="size-16 rounded-full bg-white animate-pulse shadow-[0_0_150px_white]" />
            <span>DIRECT_MATERIAL_CORE_2026</span>
        </div>
      </main>
    </div>
  )
}
