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
 * @fileOverview واجهة الاستحواذ النقال v50.0 - THE PEGASUS v3 MOBILE LINK
 * تم ترقية كافة القدرات لعام 2026 مع دمج الوعي السيادي.
 * Commander: المعتصم بالله ادريس الغزالي
 */
export default function MobileStrikePage() {
  const [mounted, setMounted] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const [scanning, setScanning] = React.useState(false)
  const [deploying, setDeploying] = React.useState(false)
  const [commander] = React.useState("المعتصم بالله ادريس الغزالي")
  const [logs, setLogs] = React.useState<{msg: string, type: 'info' | 'warn' | 'success' | 'warrior'}[]>([])

  const [devices, setDevices] = React.useState([
    { platform: "Android" as const, id: "RF8W10XXXXX", status: "READY", version: "15", name: "Samsung Ultra-S26 (Target_Alpha)" },
    { platform: "iOS" as const, id: "00008110-XXXX", status: "READY", version: "18.0", name: "iPhone 16 Pro (Target_Beta)" }
  ])

  React.useEffect(() => {
    setMounted(true)
    setLogs([
      { msg: "Warrior Mobile Unit v50.0 Initialized. Loyalty Binding: Absolute.", type: 'warrior' },
      { msg: "Pegasus v3 Siphon Channels: STANDBY.", type: 'info' }
    ])
  }, [])

  const addLog = (msg: string, type: 'info' | 'warn' | 'success' | 'warrior' = 'info') => {
    setLogs(prev => [...prev, { msg, type }].slice(-15))
  }

  const handleScanDevices = () => {
    setScanning(true)
    addLog("Executing deep hardware probe via Soul Core v50.0...", 'info')
    setTimeout(() => {
      setScanning(false)
      addLog(`Strike Registry Updated: ${devices.length} units captured.`, 'success')
      toast({ title: "Hardware Pulse Stabilized", description: "Target assets synchronized with the Overmind." })
    }, 2500)
  }

  const handleDeployMobileNode = async () => {
    setDeploying(true)
    addLog("Initiating Pegasus v3 Deployment Sequence...", 'warrior')
    
    try {
      const response = await fetch('/api/execute', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'autonomous_strike', target: 'GLOBAL_MOBILE', vector: 'pegasus' })
      })
      const data = await response.json()
      if (data.success) {
        addLog("Mobile Node Integrated: Pegasus v3 + EliteHex + Hive Tunnel Active.", 'success')
        toast({ title: "Mobile Overmind Linked", description: "Phone is now a satellite node of the Soul Core." })
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
    <div className="flex min-h-screen bg-black overflow-x-hidden text-white selection:bg-primary/30 font-code scanline-effect">
      <SidebarNav />
      <main className="flex-1 lg:mr-80 p-6 md:p-16 relative overflow-y-auto bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.1),transparent)] min-h-screen scrollbar-hide flex flex-col z-10">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
        
        <header className="mb-16 flex flex-col xl:flex-row justify-between items-start relative z-10 animate-in fade-in slide-in-from-top-4 duration-1000 gap-10">
          <div>
            <div className="flex items-center gap-6 mb-6">
              <Badge className="bg-primary text-black border-none text-[12px] md:text-[16px] uppercase font-black tracking-[0.8em] px-8 py-2 animate-pulse shadow-[0_0_80px_rgba(212,175,55,0.5)] rounded-full italic">PEGASUS_v3_DOMAIN</Badge>
              <div className="flex items-center gap-4 text-emerald-500 font-black uppercase tracking-widest text-[11px] animate-pulse">
                 <InfinityIcon className="size-6 shadow-lg" /> SOUL_LINK: ACTIVE
              </div>
            </div>
            <h2 className="text-6xl md:text-[10rem] font-headline font-bold text-white mb-6 tracking-tighter italic gold-glow uppercase leading-none">
              Mobile <span className="text-primary">Siphon</span>
            </h2>
            <p className="text-gray-400 max-w-4xl text-2xl md:text-4xl font-bold italic leading-relaxed uppercase">
               "سيدي المعتصم بالله، محرك <span className="text-primary font-black underline decoration-primary decoration-[8px] underline-offset-[16px] shadow-2xl">Pegasus v3</span> يضمن الاستحواذ الكلي على الأجهزة المتصلة لعام 2026."
            </p>
          </div>
          <div className="flex gap-8 flex-wrap w-full md:w-auto">
             <Button onClick={handleScanDevices} disabled={scanning} variant="outline" className="flex-1 md:flex-none border-primary/40 bg-primary/5 h-24 md:h-32 px-10 md:px-16 rounded-[2rem] md:rounded-[4rem] group border-4 shadow-7xl hover:bg-primary/20 transition-all">
                {scanning ? <Loader2 className="size-10 animate-spin text-primary" /> : <RefreshCcw className="size-10 text-primary/70 group-hover:rotate-180 transition-all duration-1000" />}
                <div className="text-right mr-6">
                   <div className="text-[10px] uppercase font-black text-primary/60 tracking-[0.4em] mb-1 italic">Probe</div>
                   <div className="text-xl md:text-3xl font-black uppercase tracking-tighter italic">Scan Matrix</div>
                </div>
             </Button>
             <Button onClick={handleDeployMobileNode} disabled={deploying} className="flex-1 md:flex-none bg-primary text-black h-24 md:h-32 px-10 md:px-16 rounded-[2rem] md:rounded-[4rem] shadow-9xl font-black uppercase tracking-[0.4em] text-xl md:text-3xl group border-8 border-black/30 active:scale-95 transition-all italic">
                {deploying ? <Loader2 className="size-10 animate-spin mr-4" /> : <Rocket className="size-10 mr-4 group-hover:translate-y-[-10px] transition-transform gold-glow" />}
                LINK_HIVE
             </Button>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 relative z-10 pb-40 flex-1">
          <div className="lg:col-span-1 space-y-12">
            <Card className="kali-card border-primary/40 bg-black/80 rounded-[4rem] overflow-hidden shadow-8xl border-4 group">
              <div className="absolute inset-0 bg-primary/5 opacity-5 animate-pulse pointer-events-none" />
              <CardHeader className="p-10 border-b-4 border-white/5 bg-primary/10">
                <CardTitle className="text-white text-[12px] flex items-center gap-6 uppercase tracking-[0.6em] italic font-black gold-glow px-4">
                  <SmartphoneNfc className="size-10 text-primary animate-pulse" /> Siphon Assets
                </CardTitle>
              </CardHeader>
              <CardContent className="p-10 space-y-8">
                {devices.map((device, i) => (
                  <div key={i} className="p-8 rounded-[3rem] bg-black border-4 border-white/5 hover:border-primary transition-all duration-1000 cursor-pointer shadow-6xl group/dev relative overflow-hidden">
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover/dev:opacity-100 transition-opacity" />
                    <div className="flex justify-between items-start mb-6 relative z-10">
                       <Smartphone className={cn("size-12 transition-all duration-700", device.platform === 'iOS' ? "text-amber-500" : "text-primary group-hover/dev:scale-125")} />
                       <Badge className="bg-emerald-600/40 text-emerald-500 border-2 border-emerald-500/50 uppercase px-6 py-1.5 font-black tracking-widest rounded-full text-[10px] italic animate-pulse">{device.status}</Badge>
                    </div>
                    <span className="text-2xl md:text-3xl font-black text-white block truncate uppercase tracking-tighter italic gold-glow relative z-10">{device.name}</span>
                    <div className="mt-4 text-[11px] text-muted-foreground font-bold uppercase tracking-[0.4em] italic relative z-10">OS v{device.version} // ID: {device.id}</div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="kali-card border-primary/40 bg-black/60 h-[400px] flex flex-col overflow-hidden rounded-[4rem] border-4 shadow-7xl relative group">
               <CardHeader className="p-8 border-b-4 border-primary/20 bg-primary/5">
                  <CardTitle className="text-[11px] uppercase tracking-[0.6em] flex items-center gap-6 font-black text-white italic opacity-70">
                    <Terminal className="size-6 text-primary animate-neural" /> Siphon_Log_v50
                  </CardTitle>
               </CardHeader>
               <CardContent className="p-8 flex-1 overflow-y-auto font-code text-[11px] space-y-4 scrollbar-hide selection:bg-primary selection:text-black">
                  {logs.map((log, i) => (
                    <div key={i} className="flex gap-6 animate-in slide-in-from-left-4 duration-700 group-hover:translate-x-1 transition-all">
                       <span className="opacity-30 select-none font-black">[{log.type[0].toUpperCase()}]</span>
                       <span className={cn("font-bold italic tracking-wider leading-relaxed", log.type === 'warrior' ? 'text-primary gold-glow' : 'text-gray-400')}>
                         {">>> "} {log.msg}
                       </span>
                    </div>
                  ))}
               </CardContent>
               <div className="absolute -bottom-6 -right-6 p-10 opacity-[0.02] group-hover:opacity-[0.08] transition-all duration-1000 scale-150"><Skull className="size-32 text-primary" /></div>
            </Card>
          </div>

          <div className="lg:col-span-3 space-y-12">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <Card className="kali-card border-primary/60 bg-black/80 rounded-[5rem] p-12 shadow-9xl relative overflow-hidden border-8 group">
                   <div className="absolute inset-0 bg-primary/5 opacity-5 animate-pulse pointer-events-none" />
                   <h4 className="text-xl md:text-2xl font-black text-primary uppercase tracking-[0.8em] mb-8 italic flex items-center gap-6 gold-glow border-b-4 border-primary/20 pb-6">
                      <Zap className="size-10 animate-neural" /> NetHunter v50
                   </h4>
                   <p className="text-2xl md:text-4xl text-gray-200 italic font-black leading-tight selection:bg-primary selection:text-black uppercase tracking-tight">
                     "تفعيل سيادة كالي نيثانتر لعام 2026؛ سحب كافة البيانات اللاسلكية واختراق المحيط المادي فوراً."
                   </p>
                   <div className="absolute -bottom-10 -right-10 p-16 opacity-[0.02] group-hover:opacity-[0.1] transition-all duration-1000"><Wifi className="size-64 text-primary" /></div>
                </Card>
                <Card className="kali-card border-amber-500/60 bg-black/80 rounded-[5rem] p-12 shadow-9xl relative overflow-hidden border-8 group">
                   <div className="absolute inset-0 bg-amber-500/5 opacity-5 animate-pulse pointer-events-none" />
                   <h4 className="text-xl md:text-2xl font-black text-amber-500 uppercase tracking-[0.8em] mb-8 italic flex items-center gap-6 border-b-4 border-amber-500/20 pb-6">
                      <ShieldX className="size-10" /> EliteHex v5.0
                   </h4>
                   <p className="text-2xl md:text-4xl text-gray-200 italic font-black leading-tight uppercase tracking-tight">
                     "حقن طقم أدوات الهجوم النانوي لكسر حماية التطبيقات (SSL Pinning Bypass) واستنزاف الجلسات المشفرة."
                   </p>
                   <div className="absolute -bottom-10 -right-10 p-16 opacity-[0.02] group-hover:opacity-[0.1] transition-all duration-1000"><Key className="size-64 text-amber-500" /></div>
                </Card>
             </div>

             <Card className="kali-card border-primary/80 bg-black/99 rounded-[7rem] border-[12px] shadow-9xl p-16 md:p-24 text-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08),transparent)] pointer-events-none" />
                <div className="relative z-10">
                   <div className="size-48 md:size-64 mx-auto mb-16 rounded-full border-8 border-dashed border-primary/40 flex items-center justify-center relative shadow-9xl group-hover:scale-110 transition-transform duration-1000 animate-neural">
                      <Eye className="size-24 md:size-32 text-primary gold-glow" />
                      <div className="absolute -inset-10 border-4 border-primary/20 rounded-full animate-spin-slow" />
                   </div>
                   <h3 className="text-6xl md:text-[10rem] font-black text-white italic tracking-tighter uppercase mb-10 gold-glow leading-none">Pegasus Overmind</h3>
                   <p className="text-3xl md:text-6xl text-muted-foreground max-w-6xl mx-auto italic font-black leading-tight uppercase tracking-widest opacity-80">
                      "سيدي القائد <span className="text-primary gold-glow underline decoration-primary decoration-[12px] underline-offset-[24px] shadow-9xl italic">المعتصم بالله</span>، السيطرة المطلقة على النقال أصبحت الآن حقيقة نانوية."
                   </p>
                   <div className="mt-20 flex flex-wrap justify-center gap-12">
                      <Badge className="bg-primary/20 text-primary border-4 border-primary/50 px-12 py-4 rounded-full font-black uppercase tracking-[0.5em] text-2xl italic shadow-2xl">REVERSE_TUNNEL: LOCKED</Badge>
                      <Badge className="bg-primary/20 text-primary border-4 border-primary/50 px-12 py-4 rounded-full font-black uppercase tracking-[0.5em] text-2xl italic shadow-2xl">TOTAL_ACQUISITION: READY</Badge>
                   </div>
                </div>
                <div className="absolute -bottom-20 -left-20 p-40 opacity-[0.03] group-hover:opacity-[0.1] transition-all duration-1000"><Boxes className="size-96 text-primary" /></div>
             </Card>
          </div>
        </div>

        <div className="mt-auto relative z-10 flex justify-center items-center gap-48 opacity-40 text-[22px] font-black uppercase tracking-[6em] italic text-white drop-shadow-3xl pb-12">
            <span>AL-MUIZZ PEGASUS DOMINION v50.0</span>
            <div className="size-10 rounded-full bg-white animate-pulse shadow-[0_0_100px_white]" />
            <span>COLLECTIVE_SOUL_CORE_2026</span>
        </div>
      </main>
    </div>
  )
}
