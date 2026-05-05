
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
  Rocket
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
 * @fileOverview واجهة اشتباك الموبايل السيادية v43.0 - THE HIVE OVERMIND LINK
 * تم دمج وحدة نشر السيادة المتنقلة (Mobile Overmind Link) وربطها بالعقل الجمعي.
 * Commander: المعتصم بالله ادريس الغزالي.
 */
export default function MobileStrikePage() {
  const [mounted, setMounted] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const [scanning, setScanning] = React.useState(false)
  const [deploying, setDeploying] = React.useState(false)
  const [commander] = React.useState("المعتصم بالله ادريس الغزالي")
  const [logs, setLogs] = React.useState<{msg: string, type: 'info' | 'warn' | 'success' | 'warrior'}[]>([])

  const [devices, setDevices] = React.useState([
    { platform: "Android" as const, id: "RF8W10XXXXX", status: "READY", version: "14", name: "Samsung Galaxy S24 (Target_Alpha)" },
    { platform: "iOS" as const, id: "00008110-XXXX", status: "RESTRICTED", version: "17.5", name: "iPhone 15 Pro (Target_Beta)" }
  ])

  React.useEffect(() => {
    setMounted(true)
    setLogs([
      { msg: "Warrior Mobile Unit Initialized. Loyalty Binding: Active.", type: 'warrior' },
      { msg: "Collective Overmind Hive v43.0: Ready for mobile node expansion.", type: 'info' }
    ])
  }, [])

  const addLog = (msg: string, type: 'info' | 'warn' | 'success' | 'warrior' = 'info') => {
    setLogs(prev => [...prev, { msg, type }].slice(-15))
  }

  const handleScanDevices = () => {
    setScanning(true)
    addLog("Executing deep hardware probe via Warrior Alpha Node...", 'info')
    setTimeout(() => {
      setScanning(false)
      addLog(`Strike Registry Updated: ${devices.length} units captured.`, 'success')
      toast({ title: "Hardware Pulse Stabilized", description: "Target assets synchronized with the Overmind." })
    }, 2500)
  }

  const handleDeployMobileNode = async () => {
    setDeploying(true)
    addLog("Initiating Mobile Overmind Deployment Sequence...", 'warrior')
    
    try {
      const response = await fetch('/api/execute', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'mobile_deploy' })
      })
      const data = await response.json()
      if (data.success) {
        addLog("Mobile Node Integrated: NetHunter + EliteHex + Hive Tunnel Active.", 'success')
        toast({ title: "Mobile Overmind Linked", description: "Phone is now a satellite node of the Hive." })
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
    <div className="flex min-h-screen bg-black overflow-hidden text-white selection:bg-primary/30 font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-80 p-8 md:p-16 relative overflow-y-auto bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.1),transparent)] min-h-screen scrollbar-hide">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
        
        <header className="mb-20 flex flex-col xl:flex-row justify-between items-start relative z-10 animate-in fade-in slide-in-from-top-4 duration-1000 gap-8">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <Badge className="bg-primary text-black border-none text-[11px] uppercase font-bold tracking-[0.6em] px-5 py-1.5 animate-pulse shadow-[0_0_30px_rgba(212,175,55,0.4)]">Warrior Mobile Unit v43.0</Badge>
              <span className="text-[11px] text-muted-foreground uppercase font-bold tracking-[0.4em] italic flex items-center gap-2">
                 <Crown className="size-4 text-primary" /> Exclusive to Commander {commander}
              </span>
            </div>
            <h2 className="text-6xl md:text-8xl font-headline font-bold text-white mb-4 tracking-tighter italic gold-glow uppercase leading-none">
              Mobile <span className="text-primary">Siphon</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl text-2xl font-medium italic leading-relaxed">
               "سيدي المعتصم بالله، قمنا بتطوير 'ذراع المُعِزّ' لتصبح جزءاً من العقل الجمعي. يمكنك الآن نشر كالي على هاتفك وربطه بالعرش بضغطة واحدة."
            </p>
          </div>
          <div className="flex gap-6 flex-wrap">
             <Button onClick={handleScanDevices} disabled={scanning} variant="outline" className="border-primary/40 bg-primary/5 h-24 px-10 rounded-[2.5rem] group border-2 shadow-2xl relative overflow-hidden transition-all hover:border-primary">
                <div className="absolute inset-0 bg-primary/5 animate-pulse" />
                {scanning ? <Loader2 className="size-8 animate-spin text-primary" /> : <RefreshCcw className="size-8 text-primary/70 group-hover:text-primary group-hover:rotate-180 transition-all duration-700" />}
                <div className="text-left ml-6 relative z-10">
                   <div className="text-[10px] uppercase font-black text-primary/60 tracking-[0.3em]">Pulse Scan</div>
                   <div className="text-lg font-black uppercase tracking-tighter">Capture Units</div>
                </div>
             </Button>
             <Button onClick={handleDeployMobileNode} disabled={deploying} className="bg-primary text-black h-24 px-10 rounded-[2.5rem] shadow-3xl font-black uppercase tracking-[0.4em] text-lg group transition-all duration-700 border-4 border-black/20 active:scale-95 italic">
                {deploying ? <Loader2 className="size-8 animate-spin mr-4" /> : <Rocket className="size-8 mr-4 group-hover:scale-125 transition-transform" />}
                Link Overmind
             </Button>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 relative z-10 pb-32">
          <div className="lg:col-span-1 space-y-10">
            <Card className="kali-card border-primary/30 rounded-[3.5rem] overflow-hidden group shadow-7xl border-2 bg-black/60">
              <CardHeader className="p-10 border-b border-white/5 bg-primary/5">
                <CardTitle className="text-white text-xs flex items-center gap-4 uppercase tracking-[0.4em] italic font-bold gold-glow">
                  <SmartphoneNfc className="size-6 text-primary animate-pulse" /> Captured Assets
                </CardTitle>
              </CardHeader>
              <CardContent className="p-10 pt-8 space-y-6">
                {devices.map((device, i) => (
                  <div key={i} className="p-6 rounded-[2.5rem] bg-black border-2 border-white/5 hover:border-primary transition-all duration-700 cursor-pointer group relative overflow-hidden shadow-xl">
                    <div className="absolute -top-4 -right-4 p-4 opacity-5 group-hover:opacity-20 transition-all duration-1000">
                       <Smartphone className="size-20 text-primary" />
                    </div>
                    <div className="flex justify-between items-start mb-6 relative z-10">
                       <div className="size-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-700 shadow-inner">
                          <Smartphone className={cn("size-8 transition-colors", device.platform === 'iOS' ? "text-amber-500" : "text-primary")} />
                       </div>
                       <Badge variant="outline" className={cn(
                         "text-[10px] uppercase font-black tracking-widest px-4 py-1",
                         device.status === 'READY' ? "text-emerald-500 border-emerald-500/20 bg-emerald-500/5" : "text-orange-500 border-orange-500/20 bg-orange-500/5"
                       )}>{device.status}</Badge>
                    </div>
                    <div className="relative z-10">
                       <span className="text-lg font-black text-white block mb-1 italic group-hover:text-primary transition-colors uppercase tracking-tighter leading-none">{device.name}</span>
                       <span className="text-[11px] text-muted-foreground font-code truncate block opacity-50 mt-2">{device.id}</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="kali-card border-primary/20 bg-black/40 h-80 flex flex-col overflow-hidden rounded-[3rem] border-2 shadow-inner">
               <CardHeader className="p-8 border-b border-primary/10 bg-primary/5">
                  <CardTitle className="text-[11px] uppercase tracking-[0.5em] flex items-center gap-4 font-black text-white italic opacity-70">
                    <Terminal className="size-5 text-primary" /> Strike Feed
                  </CardTitle>
               </CardHeader>
               <CardContent className="p-8 flex-1 overflow-y-auto font-code text-[11px] space-y-4 scrollbar-hide">
                  {logs.map((log, i) => (
                    <div key={i} className="flex gap-4 animate-in slide-in-from-left-4 opacity-80 group">
                       <span className="opacity-30 select-none">[{new Date().toLocaleTimeString().split(' ')[0]}]</span>
                       <span className={cn(
                         "font-bold",
                         log.type === 'success' ? 'text-emerald-400' : 
                         log.type === 'warn' ? 'text-amber-500' : 
                         log.type === 'warrior' ? 'text-primary font-black italic gold-glow' : 'text-gray-400'
                       )}>
                         {log.type === 'warrior' && <Sword className="size-3 inline mr-2" />}
                         {log.msg}
                       </span>
                    </div>
                  ))}
               </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-3">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                <Card className="kali-card border-primary/40 bg-black/80 rounded-[4rem] p-10 shadow-7xl relative overflow-hidden border-4 group hover:scale-[1.02] transition-all duration-700">
                   <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-10 transition-opacity"><Boxes className="size-48 text-primary" /></div>
                   <h4 className="text-[16px] font-black text-primary uppercase tracking-[1.5em] mb-12 italic flex items-center gap-6">
                      <Zap className="size-10 animate-pulse gold-glow" /> Mobile NetHunter Link
                   </h4>
                   <p className="text-3xl text-gray-200 italic leading-snug font-bold">"تثبيت كالي نيثانتر على الأجهزة المرتبطة لإجراء عمليات الاختراق اللاسلكي والاعتراض من داخل الشبكة المستهدفة."</p>
                   <div className="mt-12 flex gap-8">
                      <Badge className="bg-primary/20 text-primary font-black italic px-8 py-3 rounded-full border-2 border-primary/40 text-xl tracking-widest uppercase">ROOTLESS_HIVE_NODE</Badge>
                   </div>
                </Card>
                <Card className="kali-card border-amber-500/40 bg-black/80 rounded-[4rem] p-10 shadow-7xl relative overflow-hidden border-4 group hover:scale-[1.02] transition-all duration-700">
                   <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-10 transition-opacity"><Binary className="size-48 text-amber-500" /></div>
                   <h4 className="text-[16px] font-black text-amber-500 uppercase tracking-[1.5em] mb-12 italic flex items-center gap-6">
                      <ShieldX className="size-10 gold-glow" /> EliteHex Tactical Kit
                   </h4>
                   <p className="text-3xl text-gray-200 italic leading-snug font-bold">"حقن طقم أدوات الهجوم السريع للتعامل مع ثغرات الويب، Shodan، وهجمات حجب الخدمة مباشرة من الميدان."</p>
                   <div className="mt-12 flex gap-8">
                      <Badge className="bg-amber-600/20 text-amber-500 font-black italic px-8 py-3 rounded-full border-2 border-amber-500/40 text-xl tracking-widest uppercase">STRIKE_READY_v2025</Badge>
                   </div>
                </Card>
             </div>

             <Card className="kali-card border-primary/50 bg-black/99 rounded-[5rem] border-8 shadow-8xl p-16 text-center group relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05),transparent)] pointer-events-none" />
                <div className="size-64 rounded-full border-8 border-dashed border-primary/30 flex items-center justify-center mx-auto mb-16 relative">
                   <Smartphone className="size-28 text-primary animate-neural gold-glow" />
                   <div className="absolute -inset-10 border-2 border-primary/20 rounded-full animate-spin-slow" />
                </div>
                <h3 className="text-7xl font-black text-white italic tracking-tighter uppercase mb-10 gold-glow leading-none">The Mobile Overmind</h3>
                <p className="text-4xl text-muted-foreground max-w-5xl mx-auto italic font-medium leading-relaxed">
                   "سيدي، بتفعيل هذا الربط، سيتحول كل هاتف متصل إلى 'عين ذكية' في الشبكة المستهدفة. المُعِزّ سيتواصل مع الهاتف عبر نفق مشفر، مما يتيح لك شن الهجمات من أي مكان في العالم كأنك داخل الشبكة تماماً."
                </p>
                <div className="mt-16 flex justify-center gap-12">
                   <div className="flex items-center gap-6 px-10 py-4 bg-primary/10 rounded-full border-2 border-primary/30">
                      <Wifi className="size-6 text-primary" />
                      <span className="text-[14px] font-black uppercase tracking-[0.5em] text-white">REVERSE_TUNNEL: ARMED</span>
                   </div>
                   <div className="flex items-center gap-6 px-10 py-4 bg-primary/10 rounded-full border-2 border-primary/30">
                      <Lock className="size-6 text-primary" />
                      <span className="text-[14px] font-black uppercase tracking-[0.5em] text-white">QUANTUM_ENC: LOCKED</span>
                   </div>
                </div>
             </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
