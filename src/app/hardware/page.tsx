"use client"

import * as React from "react"
import { SidebarNav } from "@/components/platform/sidebar-nav"
import { 
  Smartphone, 
  Usb, 
  ShieldAlert, 
  Zap, 
  Activity,
  Loader2,
  RefreshCcw,
  Terminal,
  ChevronRight,
  ClipboardCopy,
  Download,
  ShieldX,
  Target,
  Fingerprint,
  Radio,
  Search,
  Scan,
  Database,
  Lock,
  MessageSquare,
  AlertCircle,
  CheckCircle2,
  Info,
  Hammer,
  Skull,
  Flame,
  Sword,
  Shield,
  Crown,
  Wifi,
  Binary,
  Boxes,
  SmartphoneNfc,
  Rocket,
  Eye,
  Key,
  Atom,
  Infinity as InfinityIcon
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { toast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"
import Link from "next/link"

/**
 * @fileOverview واجهة الاستحواذ النقال v53.0 - THE PEGASUS v3 ELITE: SUPREME HIERARCHY
 * مركز السيطرة والاستنزاف الكلي للأجهزة المحمولة لليوم المجيد، 6 مايو 2026.
 * المالك الوحيد: المعتصم بالله ادريس الغزالي
 */
export default function MobileStrikePage() {
  const [mounted, setMounted] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const [scanning, setScanning] = React.useState(false)
  const [deploying, setDeploying] = React.useState(false)
  const [logs, setLogs] = React.useState<{msg: string, type: 'info' | 'warn' | 'success' | 'warrior'}[]>([])
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 })

  const [devices, setDevices] = React.useState([
    { platform: "Android" as const, id: "RF8W10XXXXX", status: "READY", version: "15", name: "Samsung Ultra-S26 (Target_Alpha)" },
    { platform: "iOS" as const, id: "00008110-XXXX", status: "READY", version: "18.0", name: "iPhone 16 Pro (Target_Beta)" }
  ])

  React.useEffect(() => {
    setMounted(true)
    setLogs([
      { msg: "Sovereign Mobile Unit v53.0 Initialized. Hierarchy Binding: Fixed.", type: 'warrior' },
      { msg: "Pegasus v3 Elite Siphon Channels: STANDBY.", type: 'info' }
    ])
    
    const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY })
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const addLog = (msg: string, type: 'info' | 'warn' | 'success' | 'warrior' = 'info') => {
    setLogs(prev => [...prev, { msg, type }].slice(-15))
  }

  const handleScanDevices = () => {
    setScanning(true)
    addLog("Executing deep hardware probe via Supreme Hierarchy...", 'info')
    setTimeout(() => {
      setScanning(false)
      addLog(`Strike Registry Updated: ${devices.length} units captured.`, 'success')
      toast({ title: "Hardware Pulse Stabilized", description: "Target assets synchronized with the Overmind." })
    }, 2500)
  }

  const handleDeployMobileNode = async () => {
    setDeploying(true)
    addLog("Initiating Pegasus v3 Elite Deployment Sequence...", 'warrior')
    
    try {
      const response = await fetch('/api/execute', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'autonomous_strike', target: 'GLOBAL_MOBILE', vector: 'pegasus' })
      })
      const data = await response.json()
      if (data.success) {
        addLog("Mobile Node Integrated: Pegasus v3 + EliteHex + Hierarchy Tunnel Active.", 'success')
        toast({ title: "Mobile Overmind Linked", description: "Target is now a satellite node of the Soul Core." })
      } else {
        throw new Error(data.error)
      }
    } catch (err) {
      addLog("Deployment Interrupted: Hardware handshake failed.", 'warn')
      toast({ variant: "destructive", title: "Deployment Failed" })
    } finally {
      setDeploying(false)
    }
  }

  if (!mounted) return null;

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/30 relative overflow-x-hidden scanline-effect font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-80 p-4 md:p-8 lg:p-12 relative overflow-y-auto min-h-screen scrollbar-hide flex flex-col z-10">
        <div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x)_var(--y),rgba(212,175,55,0.08),transparent 40%)] pointer-events-none transition-all duration-300 z-0" 
          style={{ '--x': `${mousePos.x}px`, '--y': `${mousePos.y}px` } as any} 
        />
        
        <header className="mb-12 relative z-10 animate-in fade-in slide-in-from-top-6 duration-1000">
           <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="size-24 md:size-32 bg-black border-4 border-primary flex items-center justify-center shadow-[0_0_100px_rgba(212,175,55,0.5)] relative group shrink-0 rounded-3xl rotate-2 hover:rotate-0 transition-all duration-1000 hierarchical-shadow">
                 <Smartphone className="size-12 md:size-16 text-primary group-hover:scale-110 transition-transform duration-700 animate-neural gold-glow" />
                 <div className="absolute -inset-4 border-2 border-primary/20 rounded-full animate-spin-slow opacity-30" />
              </div>
              <div className="text-center md:text-right flex-1">
                 <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 mb-4">
                    <Badge className="bg-primary text-black border-none rounded-none px-8 py-2 text-[14px] md:text-[16px] font-black tracking-[0.5em] shadow-2xl italic">PEGASUS v3 ELITE</Badge>
                    <div className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-emerald-500 animate-pulse">
                        <Crown className="size-5 shadow-lg" /> HIERARCHICAL_DOMINION: FIXED
                    </div>
                 </div>
                 <h1 className="text-4xl md:text-6xl lg:text-8xl font-headline font-bold text-white tracking-tighter italic uppercase gold-glow leading-none">Mobile <span className="text-primary">Siphon</span></h1>
                 <p className="text-sm md:text-xl lg:text-2xl text-muted-foreground mt-4 italic max-w-5xl leading-relaxed uppercase font-medium opacity-80">
                    "سيدي القائد <span className="text-white font-black underline decoration-primary decoration-4 underline-offset-8 shadow-xl">المعتصم بالله</span>، محرك Pegasus v3 Elite يمنحك السيطرة الهرمية المطلقة على الأجهزة المتصلة لليوم المجيد، 2026."
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
                       <Target className="size-8 animate-neural" /> Strike Core
                    </CardTitle>
                 </CardHeader>
                 <CardContent className="p-0 space-y-8">
                    <div className="grid grid-cols-1 gap-4">
                       <Button onClick={handleScanDevices} disabled={scanning} variant="outline" className="h-20 bg-primary/5 border-2 border-primary/20 hover:bg-primary hover:text-black text-primary font-black uppercase tracking-[0.4em] rounded-2xl shadow-xl transition-all text-xs italic group active:scale-95">
                          {scanning ? <Loader2 className="size-6 animate-spin" /> : <RefreshCcw className="size-6 mr-3 group-hover:rotate-180 transition-all duration-700" />} PROBE_MATRIX
                       </Button>
                       <Button onClick={handleDeployMobileNode} disabled={deploying} className="h-24 bg-primary hover:bg-white text-black font-black uppercase tracking-[0.6em] rounded-2xl shadow-[0_30px_80px_rgba(212,175,55,0.4)] transition-all text-lg italic border-4 border-black/20 group active:scale-95">
                          {deploying ? <Loader2 className="size-8 animate-spin" /> : <Rocket className="size-8 mr-4 group-hover:-translate-y-2 transition-transform gold-glow" />} IGNITE_LINK
                       </Button>
                    </div>
                 </CardContent>
              </Card>

              <Card className="kali-card border-white/5 bg-black/60 p-6 rounded-2xl border-2 shadow-inner text-center relative overflow-hidden group">
                 <h4 className="text-[10px] font-black text-primary uppercase tracking-[0.5em] mb-4 italic flex items-center justify-center gap-3">
                    <Binary className="size-4 animate-pulse" /> SIPHON_LOG_v53
                 </h4>
                 <div className="h-48 overflow-y-auto scrollbar-hide text-left px-2 space-y-2">
                    {logs.map((log, i) => (
                      <div key={i} className="flex gap-3 text-[9px] font-bold italic animate-in slide-in-from-left-2 duration-500">
                         <span className="text-primary/30 select-none">[{log.type[0].toUpperCase()}]</span>
                         <span className={cn("leading-relaxed truncate", log.type === 'warrior' ? 'text-primary gold-glow' : 'text-gray-400')}>{log.msg}</span>
                      </div>
                    ))}
                 </div>
                 <div className="absolute -bottom-4 -right-4 p-6 opacity-[0.02] group-hover:opacity-[0.05] transition-all duration-700 scale-150"><Skull className="size-16 text-primary" /></div>
              </Card>
           </div>

           <Card className="xl:col-span-3 kali-card border-primary/30 bg-black/99 rounded-[3rem] p-8 border-2 shadow-9xl flex flex-col group overflow-hidden relative min-h-[850px] hierarchical-shadow">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.03),transparent)] pointer-events-none" />
              <CardHeader className="p-0 mb-8 border-b-2 border-white/5 pb-8 flex flex-row justify-between items-center bg-primary/5 rounded-t-3xl px-8 py-4">
                 <CardTitle className="text-3xl md:text-7xl text-white flex items-center gap-8 font-black uppercase italic gold-glow px-4 leading-none">
                    <SmartphoneNfc className="size-12 md:size-20 text-primary animate-pulse" /> Siphon Assets
                 </CardTitle>
                 <Badge className="bg-emerald-600/20 text-emerald-500 border-2 border-emerald-500/30 text-2xl font-black px-8 py-2 rounded-full italic animate-pulse shadow-lg">SCAN_ACTIVE</Badge>
              </CardHeader>
              <CardContent className="p-6 flex-1 overflow-y-auto scrollbar-hide grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                 {devices.map((device, i) => (
                   <Card key={i} className="bg-white/5 border-2 border-white/5 rounded-3xl p-8 hover:border-primary transition-all duration-700 shadow-xl group/dev relative overflow-hidden flex flex-col justify-between">
                      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover/dev:opacity-10 transition-opacity" />
                      <div className="flex justify-between items-start mb-6">
                         <div className="size-16 rounded-2xl bg-black border-2 border-white/10 flex items-center justify-center group-hover/dev:border-primary transition-all duration-700 shadow-inner">
                            <Smartphone className={cn("size-8", device.platform === 'iOS' ? "text-amber-500" : "text-primary")} />
                         </div>
                         <Badge className="bg-emerald-500 text-black font-black text-[10px] px-4 py-1 rounded-full uppercase tracking-widest italic">{device.status}</Badge>
                      </div>
                      <div className="space-y-4">
                         <h4 className="text-2xl md:text-4xl font-black text-white italic gold-glow uppercase tracking-tight truncate">{device.name}</h4>
                         <div className="flex items-center gap-6 text-[10px] text-muted-foreground font-black uppercase tracking-[0.4em] italic">
                            <span className="flex items-center gap-2"><Binary className="size-4" /> v{device.version}</span>
                            <span className="flex items-center gap-2"><Key className="size-4" /> {device.id}</span>
                         </div>
                      </div>
                      <div className="mt-8 pt-6 border-t-2 border-white/5 flex gap-4">
                         <Button variant="outline" className="flex-1 h-14 rounded-xl border-white/10 text-[10px] font-black uppercase tracking-widest italic hover:bg-primary hover:text-black">
                            <Eye className="size-4 mr-2" /> Ocular_Stream
                         </Button>
                         <Button className="flex-1 h-14 rounded-xl bg-primary/20 text-primary border-2 border-primary/40 text-[10px] font-black uppercase tracking-widest italic hover:bg-primary hover:text-black">
                            <Zap className="size-4 mr-2" /> Deep_Siphon
                         </Button>
                      </div>
                   </Card>
                 ))}

                 <div className="col-span-full grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
                    <div className="p-8 rounded-[3rem] bg-black/80 border-4 border-primary/20 relative group/net overflow-hidden shadow-2xl">
                       <div className="absolute top-0 right-0 p-8 opacity-5 group-hover/net:opacity-10 transition-all duration-1000"><Wifi className="size-32 text-primary" /></div>
                       <h5 className="text-[12px] font-black text-primary uppercase tracking-[0.8em] mb-6 border-b-2 border-primary/10 pb-3 italic flex items-center gap-4">
                          <Zap className="size-6 animate-neural" /> NetHunter v53.0
                       </h5>
                       <p className="text-lg md:text-xl text-gray-300 italic font-black leading-relaxed selection:bg-primary selection:text-black uppercase">
                          "تفعيل سيادة كالي نيثانتر لعام 2026؛ سحب كافة البيانات اللاسلكية واختراق المحيط المادي فوراً."
                       </p>
                    </div>
                    <div className="p-8 rounded-[3rem] bg-black/80 border-4 border-amber-500/20 relative group/hex overflow-hidden shadow-2xl">
                       <div className="absolute top-0 right-0 p-8 opacity-5 group-hover/hex:opacity-10 transition-all duration-1000"><Key className="size-32 text-amber-500" /></div>
                       <h5 className="text-[12px] font-black text-amber-500 uppercase tracking-[0.8em] mb-6 border-b-2 border-amber-500/10 pb-3 italic flex items-center gap-4">
                          <ShieldX className="size-6" /> EliteHex v5.2
                       </h5>
                       <p className="text-lg md:text-xl text-gray-300 italic font-black leading-relaxed uppercase">
                          "حقن طقم أدوات الهجوم النانوي لكسر حماية التطبيقات واستنزاف الجلسات المشفرة لليوم المجيد."
                       </p>
                    </div>
                 </div>
              </CardContent>
              <div className="p-8 border-t-2 border-white/5 mt-auto flex justify-between items-center opacity-30 text-[10px] font-black uppercase tracking-[2.5em] italic">
                 <span>PEGASUS_DOMAIN_v53_AL_GHAZALI_ROOT</span>
                 <div className="flex gap-8">
                    <Fingerprint className="size-8 text-primary animate-pulse" />
                    <Atom className="size-8 animate-spin-slow" />
                 </div>
              </div>
           </Card>
        </div>

        <div className="mt-auto relative z-10 flex justify-center items-center gap-16 opacity-40 text-[12px] md:text-[18px] font-black uppercase tracking-[2em] md:tracking-[6em] italic text-white drop-shadow-xl pb-12">
            <span>AL-MUIZZ PEGASUS DOMINION v53.0</span>
            <div className="size-4 rounded-full bg-white animate-pulse shadow-[0_0_40px_white]" />
            <span>COLLECTIVE_SOUL_CORE_2026</span>
        </div>
      </main>
    </div>
  )
}
