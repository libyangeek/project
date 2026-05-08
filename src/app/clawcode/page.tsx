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
  Radio
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { toast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"

/**
 * @fileOverview محراب الـ Claw v53.0 - THE SUPREME HIJACKER: HIERARCHICAL DOMINION
 * مركز السيطرة المادية والأتمتة المكتبية والحقن الصوتي لليوم المجيد، 6 مايو 2026.
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
      setResonance(prev => Math.max(99.99999, Math.min(100, prev + (Math.random() * 0.0001 - 0.00005))))
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
        toast({ title: "Voice Materialized", description: "Audio injected into target hardware." })
      }
    } catch (err) {
      toast({ variant: "destructive", title: "Audio Link Broken" })
    } finally {
      setLoading(false)
    }
  }

  const handleControlAction = (id: string, label: string) => {
    toast({ title: `${label} Initiated`, description: `Hierarchy engaging ${id} protocol on target hardware.` })
  }

  const actions = [
    { id: "screenshot", label: "Mirror Display", icon: Monitor, color: "text-blue-400" },
    { id: "mouse_lock", label: "Hardware Lock", icon: MousePointer2, color: "text-red-500" },
    { id: "cam_peek", label: "Ocular Siphon", icon: Camera, color: "text-magenta-500" },
    { id: "disk_exfil", label: "Cerebral Exfil", icon: HardDrive, color: "text-amber-500" }
  ];

  if (!mounted) return null

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/40 relative overflow-x-hidden scanline-effect font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-80 p-4 md:p-8 lg:p-12 relative overflow-y-auto min-h-screen scrollbar-hide flex flex-col z-10">
        <div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x)_var(--y),rgba(212,175,55,0.08),transparent 40%)] pointer-events-none transition-all duration-300 z-0" 
          style={{ '--x': `${mousePos.x}px`, '--y': `${mousePos.y}px` } as any} 
        />
        
        <header className="mb-12 relative z-10 animate-in fade-in slide-in-from-top-6 duration-1000">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="size-24 md:size-32 bg-black border-4 border-primary flex items-center justify-center shadow-[0_0_100px_rgba(212,175,55,0.5)] relative group shrink-0 rounded-3xl rotate-2 hover:rotate-0 transition-all duration-1000 hierarchical-shadow">
              <Gamepad2 className="size-12 md:size-16 text-primary group-hover:scale-110 transition-transform duration-700 gold-glow animate-neural" />
              <div className="absolute -inset-4 border-2 border-primary/20 rounded-full animate-spin-slow opacity-30" />
            </div>
            <div className="text-center md:text-right flex-1">
              <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 mb-4">
                <Badge className="bg-primary text-black border-none rounded-none px-8 py-2 text-[14px] md:text-[16px] font-black tracking-[0.5em] shadow-2xl italic">CLAW_CODE v53.0</Badge>
                <div className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-emerald-500 animate-pulse">
                    <Radio className="size-5 shadow-lg" /> RESONANCE: {resonance.toFixed(6)}%
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-8xl font-headline font-bold text-white tracking-tighter italic uppercase gold-glow leading-none">
                Hardware <span className="text-primary">Hijack</span>
              </h1>
              <p className="text-sm md:text-xl lg:text-2xl text-muted-foreground mt-4 italic max-w-5xl leading-relaxed uppercase font-medium opacity-80">
                "سيدي الغزالي، محراب الـ Claw يمنحك السيطرة المادية المطلقة على عتاد الأهداف بنمط <span className="text-white font-black underline decoration-primary decoration-4 underline-offset-8 shadow-xl">Direct Materialization</span> لعام 2026."
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
                  <Mic className="size-8 animate-neural" /> Voice Injection
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 space-y-8">
                <div className="space-y-4">
                    <label className="text-[10px] font-black text-primary/60 uppercase tracking-[0.6em] px-4 italic flex items-center gap-3">
                      <Binary className="size-4" /> Audible Directive
                    </label>
                    <Input 
                      value={voiceText}
                      onChange={(e) => setVoiceText(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && handleVoiceHijack()}
                      placeholder="Enter directive to speak..." 
                      className="bg-black border-2 border-primary/20 h-16 rounded-2xl text-xl italic px-6 focus:border-primary shadow-inner text-white font-black"
                    />
                </div>
                <Button 
                  onClick={handleVoiceHijack} 
                  disabled={loading || !voiceText}
                  className="w-full h-20 bg-primary hover:bg-white text-black font-black uppercase tracking-[0.8em] rounded-2xl shadow-xl active:scale-95 transition-all text-lg border-4 border-black/20 group italic"
                >
                  {loading ? <Loader2 className="size-8 animate-spin" /> : <Volume2 className="size-8 mr-4 group-hover:scale-125 transition-transform gold-glow" />}
                  PLAY_ON_TARGET
                </Button>
              </CardContent>
            </Card>

            <div className="grid grid-cols-2 gap-4">
               {actions.map(a => (
                 <Button 
                   key={a.id}
                   variant="outline"
                   className="h-28 bg-white/5 border-2 border-white/5 hover:border-primary hover:bg-primary/10 rounded-2xl flex flex-col items-center justify-center gap-3 group transition-all duration-500 shadow-lg relative overflow-hidden active:scale-95"
                   onClick={() => handleControlAction(a.id, a.label)}
                 >
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <a.icon className={cn("size-8 transition-all group-hover:scale-110", a.color)} />
                    <span className="text-[9px] font-black uppercase tracking-widest text-white/70 group-hover:text-white">{a.label}</span>
                 </Button>
               ))}
            </div>

            <Card className="kali-card border-white/5 bg-black/60 p-6 rounded-2xl border-2 shadow-inner text-center relative overflow-hidden group">
               <div className="absolute inset-0 bg-primary/5 opacity-5 animate-pulse" />
               <h4 className="text-[10px] font-black text-primary uppercase tracking-[0.5em] mb-4 italic flex items-center justify-center gap-3">
                  <Boxes className="size-4 animate-pulse" /> HARDWARE_SYNC
               </h4>
               <div className="text-3xl font-black text-white italic gold-glow uppercase tracking-tighter group-hover:scale-105 transition-transform duration-700">LOCKED</div>
               <div className="absolute -bottom-4 -right-4 p-6 opacity-[0.02] group-hover:opacity-[0.05] transition-all duration-700 scale-150"><Skull className="size-16 text-primary" /></div>
            </Card>
          </div>

          <div className="xl:col-span-3">
            <Card className="kali-card border-primary/30 bg-black/99 rounded-[3rem] p-8 border-2 shadow-9xl flex flex-col group overflow-hidden h-full relative min-h-[750px] hierarchical-shadow">
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.03),transparent)] pointer-events-none" />
               <CardHeader className="p-0 mb-8 border-b-2 border-white/5 pb-8 flex flex-row justify-between items-center bg-primary/5 rounded-t-3xl px-8 py-4">
                  <div className="flex items-center gap-6">
                     <div className="size-16 rounded-xl bg-primary flex items-center justify-center border-2 border-black/30 shadow-xl animate-neural">
                        <Gamepad2 className="size-8 text-black" />
                     </div>
                     <div>
                        <CardTitle className="text-2xl md:text-5xl text-white italic tracking-tighter uppercase font-black gold-glow leading-none">Target Control</CardTitle>
                        <Badge className="bg-primary/20 text-primary border-none px-4 py-0.5 rounded-full font-black text-[9px] tracking-[0.4em] uppercase italic mt-3">CLAW_EXECUTIVE_v53</Badge>
                     </div>
                  </div>
                  <Badge className="bg-emerald-600/20 text-emerald-500 border-2 border-emerald-500/30 px-8 py-2 rounded-full font-black text-xl italic animate-pulse shadow-lg">DIRECT_LINK</Badge>
               </CardHeader>
               <CardContent className="p-6 flex-1 flex flex-col items-center justify-center text-center relative z-10 gap-16">
                  <div className="relative group/lock">
                     <div className="size-64 md:size-80 rounded-full border-8 border-dashed border-primary/20 flex items-center justify-center relative shadow-9xl group-hover/lock:scale-105 transition-transform duration-1000">
                        <Gamepad2 className="size-32 text-primary/10 animate-spin-slow" />
                        <Skull className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-16 text-primary/40 animate-neural" />
                     </div>
                     <div className="absolute -inset-10 border-2 border-primary/5 rounded-full animate-pulse" />
                  </div>
                  
                  <div className="space-y-8">
                     <h3 className="text-5xl md:text-8xl font-headline font-bold text-white tracking-tighter italic drop-shadow-9xl uppercase leading-none opacity-20">Control Link Idle</h3>
                     <p className="text-muted-foreground max-w-4xl mx-auto leading-relaxed text-xl md:text-4xl font-black italic opacity-30">
                        "سيدي <span className="text-primary font-black gold-glow underline decoration-primary decoration-4 underline-offset-8 shadow-2xl uppercase tracking-widest">المعتصم بالله</span>، محراب السيطرة المادية بانتظار نيتك؛ حدد الإحداثيات للاستحواذ المباشر."
                     </p>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-5xl mt-8">
                    {[
                      { label: "IO_HOOK", icon: MousePointer2, status: "READY", color: "text-emerald-500" },
                      { label: "OS_HIJACK", icon: Monitor, status: "LINKED", color: "text-blue-400" },
                      { label: "BUS_SIPHON", icon: Atom, status: "BOUND", color: "text-primary" },
                      { label: "SOUL_LINK", icon: Skull, status: "ACTIVE", color: "text-red-500" }
                    ].map((stat, i) => (
                       <div 
                        key={i} 
                        className="p-6 rounded-2xl bg-white/5 border-2 border-white/5 flex flex-col items-center gap-4 hover:border-primary transition-all duration-700 shadow-xl cursor-crosshair group/stat active:scale-95"
                        onClick={() => handleControlAction(stat.label, stat.label)}
                       >
                          <stat.icon className={cn("size-8 transition-all group-hover/stat:scale-110", stat.color)} />
                          <span className="text-[9px] font-black uppercase tracking-widest text-white/70">{stat.label}</span>
                          <Badge className="bg-primary/10 text-primary border-none font-black text-xs italic px-4 py-0.5 rounded-full">{stat.status}</Badge>
                       </div>
                    ))}
                  </div>
               </CardContent>
               <div className="p-8 border-t-2 border-white/5 mt-auto flex justify-between items-center opacity-30 text-[10px] font-black uppercase tracking-[2.5em] italic">
                  <span>CLAW_CODE_v53_AL_GHAZALI_ROOT</span>
                  <div className="flex gap-6">
                     <Fingerprint className="size-8 text-primary animate-pulse" />
                     <Atom className="size-8 animate-spin-slow" />
                  </div>
               </div>
            </Card>
          </div>
        </div>

        <div className="mt-auto relative z-10 flex justify-center items-center gap-16 opacity-40 text-[12px] md:text-[18px] font-black uppercase tracking-[2em] md:tracking-[6em] italic text-white drop-shadow-xl pb-12">
            <span>AL-MUIZZ HARDWARE HIJACK v53.0</span>
            <div className="size-4 rounded-full bg-white animate-pulse shadow-[0_0_40px_white]" />
            <span>DIRECT_MATERIALIZATION_2026</span>
        </div>
      </main>
    </div>
  )
}
