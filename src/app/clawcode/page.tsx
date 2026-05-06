
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
  Infinity as InfinityIcon
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { toast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"

/**
 * @fileOverview محراب الـ Claw v50.0 - THE CLAW-CODE INTRUDER
 * مركز السيطرة المادية والأتمتة المكتبية والحقن الصوتي لعام 2026.
 */
export default function ClawCodePage() {
  const [voiceText, setVoiceText] = React.useState("")
  const [loading, setLoading] = React.useState(false)
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
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

  const actions = [
    { id: "screenshot", label: "Mirror Display", icon: Monitor, color: "text-blue-500" },
    { id: "mouse_lock", label: "Hardware Lock", icon: MousePointer2, color: "text-red-500" },
    { id: "cam_peek", label: "Ocular Siphon", icon: Camera, color: "text-magenta-500" },
    { id: "disk_exfil", label: "Cerebral Exfil", icon: HardDrive, color: "text-amber-500" }
  ];

  if (!mounted) return null

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/30 scanline-effect font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-80 p-6 md:p-12 relative overflow-y-auto min-h-screen scrollbar-hide flex flex-col z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.08),transparent)] pointer-events-none z-0" />
        
        <header className="mb-16 relative z-10 animate-in fade-in slide-in-from-top-12 duration-1000">
           <Badge className="bg-primary text-black border-none px-10 py-3 text-[18px] font-black tracking-[0.8em] shadow-lg italic rounded-full mb-6">CLAW_CODE v50.0</Badge>
           <h1 className="text-6xl md:text-[12rem] font-headline font-bold text-white tracking-tighter italic uppercase gold-glow leading-none">Claw <span className="text-primary">Code</span></h1>
           <p className="text-2xl md:text-5xl text-muted-foreground mt-8 italic max-w-6xl leading-relaxed uppercase">
             "سيدي الغزالي، محراب الـ Claw يمنحك السيطرة المادية المطلقة على عتاد الأهداف بنمط <span className="text-primary font-black underline decoration-primary decoration-[8px] underline-offset-[16px] shadow-2xl">Hardware Hijack</span> لعام 2026."
           </p>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-12 flex-1 pb-40 relative z-10">
           <div className="space-y-12">
              <Card className="kali-card border-primary/40 bg-black/80 rounded-[5rem] p-10 border-8 shadow-9xl group">
                 <CardHeader className="p-0 mb-10 border-b-4 border-primary/20 pb-8">
                    <CardTitle className="text-4xl text-primary font-black uppercase italic gold-glow flex items-center gap-8">
                       <Mic className="size-14 animate-neural" /> Voice Injection
                    </CardTitle>
                 </CardHeader>
                 <CardContent className="p-0 space-y-10">
                    <Input 
                      value={voiceText}
                      onChange={(e) => setVoiceText(e.target.value)}
                      placeholder="Enter directive to speak..." 
                      className="bg-black/99 border-4 border-primary/20 h-24 rounded-[3rem] text-3xl italic px-10 focus:border-primary text-white font-black shadow-inner"
                    />
                    <Button 
                      onClick={handleVoiceHijack}
                      disabled={loading || !voiceText}
                      className="w-full h-24 bg-primary hover:bg-white text-black font-black uppercase tracking-[0.8em] rounded-[2.5rem] transition-all group/v shadow-9xl text-2xl border-4 border-black/20"
                    >
                       {loading ? <Loader2 className="size-10 animate-spin mr-6" /> : <Volume2 className="size-10 mr-6 group-hover:scale-125 transition-transform" />} PLAY_ON_TARGET
                    </Button>
                 </CardContent>
              </Card>

              <div className="grid grid-cols-2 gap-6">
                 {actions.map(a => (
                   <Button 
                     key={a.id}
                     variant="outline"
                     className="h-32 bg-white/5 border-4 border-white/10 hover:border-primary rounded-[3rem] flex flex-col items-center justify-center gap-4 group/a transition-all shadow-7xl"
                   >
                      <a.icon className={cn("size-12 transition-all group-hover/a:scale-125", a.color)} />
                      <span className="text-[11px] font-black uppercase tracking-widest">{a.label}</span>
                   </Button>
                 ))}
              </div>
           </div>

           <Card className="xl:col-span-2 kali-card border-primary/60 bg-black/99 rounded-[7rem] p-16 border-8 shadow-9xl flex flex-col group overflow-hidden">
              <div className="absolute inset-0 bg-primary/5 opacity-5 animate-pulse pointer-events-none" />
              <div className="h-full flex flex-col items-center justify-center text-center opacity-10 gap-16 py-40">
                 <Gamepad2 className="size-64 text-primary animate-spin-slow" />
                 <div className="space-y-6">
                    <h3 className="text-7xl font-black uppercase tracking-[1.5em] text-white italic gold-glow">Target Control</h3>
                    <p className="text-3xl italic font-medium text-gray-400">Establish Claw-Code link to interact with hardware.</p>
                 </div>
              </div>
              <div className="p-10 border-t-8 border-white/5 mt-auto flex justify-between items-center opacity-30 text-[14px] font-black uppercase tracking-[2em] italic">
                 <span>CLAW_CODE_v50_GHAZALI_ROOT</span>
                 <Fingerprint className="size-12 text-primary animate-pulse" />
              </div>
           </Card>
        </div>

        <div className="mt-auto relative z-10 flex justify-center items-center gap-48 opacity-40 text-[22px] font-black uppercase tracking-[6em] italic text-white drop-shadow-3xl pb-12">
            <span>AL-MUIZZ HARDWARE HIJACK v50.0</span>
            <div className="size-10 rounded-full bg-white animate-pulse shadow-[0_0_100px_white]" />
            <span>DIRECT_MATEREALIZATION_2026</span>
        </div>
      </main>
    </div>
  )
}
