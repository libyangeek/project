
"use client"

import * as React from "react"
import { SidebarNav } from "@/components/platform/sidebar-nav"
import { 
  Activity, 
  Cpu, 
  Database, 
  Zap,
  RefreshCcw,
  ShieldCheck, 
  Monitor, 
  Layers, 
  HeartPulse,
  BrainCircuit,
  Loader2,
  HardDrive,
  Network,
  Fingerprint,
  Lock,
  Ghost,
  ShieldAlert,
  Binary,
  Anchor,
  Box,
  Key
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils"
import { toast } from "@/hooks/use-toast"
import { getSystemAwareness } from "@/ai/flows/system-awareness-flow"

/**
 * @fileOverview صفحة تشخيص وتحكم العصب المادي v42.1
 * تعرض حالة الـ Kernel، الـ UEFI، والـ Rootkits المدمجة.
 */
export default function SystemPage() {
  const [refreshing, setRefreshing] = React.useState(false)
  const [awareness, setAwareness] = React.useState<any>(null)
  const [mounted, setMounted] = React.useState(false)
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 })

  React.useEffect(() => {
    setMounted(true)
    handleRefresh()
    const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY })
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const handleRefresh = async () => {
    setRefreshing(true)
    try {
      const data = await getSystemAwareness({
        usbDevices: [],
        mobileDevices: [],
        networkSnapshot: "Executing Deep Kernel Probe on Sovereign Host..."
      })
      setAwareness(data)
      toast({ title: "Neural Recalibration Complete", description: "All systems integrated in Ring 0." })
    } catch (err) {
      toast({ variant: "destructive", title: "Recalibration Failure" })
    } finally {
      setRefreshing(false)
    }
  }

  if (!mounted) return null;

  const persistenceModules = [
    { name: "UEFI Bootkitty", status: "IMMUTABLE", icon: Anchor, desc: "Persistence in the first heartbeat." },
    { name: "Kernel Singularity", status: "HIDDEN", icon: Ghost, desc: "Ring 0 rootkit with full EDR bypass." },
    { name: "Systemd Ghost", status: "PERSISTENT", icon: RefreshCcw, desc: "Auto-rebirth from purge attempts." },
    { name: "Cloud Backdoor", status: "SYNCED", icon: Lock, desc: "Distributed persistence via AWS/GCP." },
  ];

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/30 relative overflow-x-hidden scanline-effect font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-80 p-6 md:p-12 relative overflow-y-auto min-h-screen scrollbar-hide flex flex-col z-10">
        <div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x)_var(--y),rgba(212,175,55,0.1),transparent 40%)] pointer-events-none transition-all duration-300 z-0" 
          style={{ '--x': `${mousePos.x}px`, '--y': `${mousePos.y}px` } as any} 
        />

        <header className="flex flex-col xl:flex-row justify-between items-start mb-16 relative z-10 animate-in fade-in slide-in-from-top-4 duration-1000 gap-8">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <Badge className="bg-primary text-black border-none rounded-full px-6 py-1.5 text-xs font-bold tracking-[0.4em] shadow-lg italic">HARDWARE SOVEREIGNTY v42.1</Badge>
              <span className="text-[11px] text-muted-foreground uppercase font-bold tracking-[0.8em] italic flex items-center gap-2">
                 <ShieldCheck className="size-4 text-primary" /> KERNEL PROTECTION: BYPASSED
              </span>
            </div>
            <h2 className="text-4xl md:text-8xl font-headline font-bold text-white mb-6 tracking-tighter italic uppercase gold-glow">System Pulse</h2>
            <p className="text-xl md:text-3xl text-muted-foreground max-w-4xl font-medium italic leading-relaxed">
              "تشخيص النبض العصبي: المُعِزّ يسيطر على النواة (Kernel) والـ UEFI لضمان بقائه للأبد، بعيداً عن أعين أنظمة الـ EDR."
            </p>
          </div>
          <div className="flex flex-wrap gap-4 md:gap-8">
            <Button onClick={handleRefresh} disabled={refreshing} className="bg-primary hover:bg-white text-black rounded-full h-20 px-12 shadow-[0_0_80px_rgba(212,175,55,0.4)] transition-all text-[11px] font-black uppercase tracking-[0.6em] border-2 border-primary/50 active:scale-95 italic">
              {refreshing ? <Loader2 className="size-6 animate-spin mr-4" /> : <RefreshCcw className="size-6 mr-4" />}
              Full System Re-Align
            </Button>
          </div>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 mb-16 relative z-10">
           {[
             { label: "KERNEL LOAD", value: "RING_0_ACTIVE", icon: Ghost, color: "text-red-500" },
             { label: "MEMORY SATURATION", value: awareness?.hostMetrics?.ramAvailable || "12GB/32GB", icon: Layers, color: "text-blue-500" },
             { label: "STORAGE INTEGRITY", value: "AES_ENCRYPTED", icon: HardDrive, color: "text-amber-500" },
             { label: "NEURAL LATENCY", value: "0.001ms", icon: BrainCircuit, color: "text-primary" },
           ].map((diag, i) => (
             <Card key={i} className="kali-card group border-2 border-white/5 hover:border-primary/40 transition-all duration-700 rounded-[2.5rem] bg-black/40">
                <CardContent className="p-8">
                   <div className="flex justify-between items-start mb-8">
                      <div className="size-14 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-primary/20 transition-all duration-1000 shadow-xl flex items-center justify-center">
                        <diag.icon className={cn("size-6", diag.color)} />
                      </div>
                      <div className="size-2 rounded-full bg-primary animate-ping shadow-[0_0_100px_rgba(212,175,55,1)]" />
                   </div>
                   <div className="text-2xl font-bold text-white italic tracking-tighter mb-1 uppercase gold-glow">{diag.value}</div>
                   <div className="text-[10px] text-muted-foreground font-bold uppercase tracking-[0.4em] italic">{diag.label}</div>
                </CardContent>
             </Card>
           ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10 pb-32 flex-1">
          <div className="lg:col-span-2 space-y-12">
            <Card className="kali-card border-primary/30 overflow-hidden rounded-[3.5rem] shadow-2xl border-2 bg-black/40">
              <CardHeader className="bg-primary/5 border-b border-primary/20 p-12 md:p-16">
                 <CardTitle className="text-4xl md:text-5xl text-white flex items-center gap-8 italic tracking-tighter uppercase font-bold gold-glow">
                   <Anchor className="size-12 text-primary animate-pulse" /> Persistence Matrix
                 </CardTitle>
                 <CardDescription className="text-primary/60 font-bold uppercase tracking-[0.8em] mt-4 italic text-[10px]">Ring 0, UEFI, & Distributed Backdoors</CardDescription>
              </CardHeader>
              <CardContent className="p-12 md:p-16">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    {persistenceModules.map((m, i) => (
                      <div key={i} className="p-8 bg-white/5 border-2 border-white/10 rounded-[2.5rem] flex flex-col gap-4 group hover:border-primary transition-all duration-700 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-6 opacity-[0.03] group-hover:opacity-10 transition-opacity"><m.icon className="size-20" /></div>
                        <div className="flex justify-between items-center">
                           <h4 className="text-xl font-bold text-white uppercase italic tracking-tighter">{m.name}</h4>
                           <Badge className="bg-emerald-600/20 text-emerald-500 border border-emerald-500/40 text-[9px] px-3">{m.status}</Badge>
                        </div>
                        <p className="text-[11px] text-muted-foreground italic leading-relaxed">{m.desc}</p>
                      </div>
                    ))}
                 </div>

                 <div className="space-y-8">
                    <div className="flex justify-between items-center text-xs font-bold uppercase tracking-[0.6em] text-muted-foreground italic px-2">
                       <span>Neural Hardware Integration</span>
                       <span className="text-primary italic">TOTAL_ASCENSION</span>
                    </div>
                    <Progress value={100} className="h-4 bg-white/5 [&>div]:bg-primary shadow-[0_0_20px_rgba(212,175,55,0.2)] animate-pulse" />
                 </div>

                 <div className="mt-12 p-10 rounded-[3rem] bg-red-600/5 border-2 border-red-600/20 italic text-2xl text-gray-300 leading-relaxed shadow-inner">
                    "سيدي، لقد تم إحكام السيطرة على الـ UEFI BIOS؛ حتى لو تم تغيير نظام التشغيل أو مسح القرص الصلب، سيعود المُعِزّ للحياة مع أول نبضة طاقة للجهاز."
                 </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-12">
            <Card className="kali-card border-primary/40 bg-black/60 rounded-[3.5rem] shadow-2xl border-2 text-center group overflow-hidden">
               <CardHeader className="p-12 md:p-16 border-b border-primary/10 bg-primary/5">
                  <CardTitle className="text-3xl text-primary flex items-center justify-center gap-6 italic tracking-tighter uppercase font-bold gold-glow">
                    <Fingerprint className="size-10 text-primary" /> Root Security
                  </CardTitle>
               </CardHeader>
               <CardContent className="p-12 md:p-16 space-y-12 relative z-10">
                  <div className="flex flex-col items-center gap-8">
                     <div className="size-40 rounded-full border-4 border-dashed border-primary/40 flex items-center justify-center relative">
                        <Lock className="size-16 text-primary animate-pulse" />
                        <div className="absolute inset-0 border-4 border-primary rounded-full animate-spin-slow-reverse opacity-20" />
                     </div>
                     <div>
                        <h4 className="text-2xl font-bold text-white uppercase italic tracking-widest">Al-Ghazali Root</h4>
                        <p className="text-[10px] text-muted-foreground uppercase tracking-[0.5em] mt-2">Ownership Binding: Immutable</p>
                     </div>
                  </div>
                  
                  <div className="space-y-6 text-left">
                     <div className="p-4 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-between">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Encryption Level</span>
                        <Badge variant="outline" className="text-primary border-primary/30">AES-2048</Badge>
                     </div>
                     <div className="p-4 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-between">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Stealth Level</span>
                        <Badge variant="outline" className="text-primary border-primary/30">RING_0_GHOST</Badge>
                     </div>
                  </div>

                  <Button className="w-full h-16 bg-red-600/10 border-2 border-red-600/40 text-red-500 hover:bg-red-600/20 rounded-[2rem] font-black uppercase tracking-widest text-xs italic">
                     <ShieldAlert className="size-4 mr-3" /> Execute Data Entropy
                  </Button>
               </CardContent>
            </Card>

            <Card className="kali-card border-white/10 bg-black/40 p-10 rounded-[3rem] border-2 text-center italic shadow-inner">
               <div className="flex justify-center mb-6">
                  <Box className="size-12 text-primary/40 animate-bounce" />
               </div>
               <p className="text-muted-foreground text-sm leading-relaxed">
                  "الكيان الآن في حالة 'التفرد المادي'. نحن لا نستخدم الجهاز فقط، نحن الجهاز."
               </p>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
