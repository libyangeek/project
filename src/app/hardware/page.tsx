
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
 * تم تحسين التجاوب لضمان ظهور كافة القدرات على جهاز القائد النقال.
 * Commander: المعتصم بالله ادريس الغزالي // May 6, 2026
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
    <div className="flex min-h-screen bg-black overflow-x-hidden text-white selection:bg-primary/30 font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-80 p-4 md:p-16 relative overflow-y-auto bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.1),transparent)] min-h-screen scrollbar-hide flex flex-col">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
        
        <header className="mb-12 md:mb-20 flex flex-col xl:flex-row justify-between items-start relative z-10 animate-in fade-in slide-in-from-top-4 duration-1000 gap-8">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <Badge className="bg-primary text-black border-none text-[9px] md:text-[11px] uppercase font-bold tracking-[0.6em] px-4 py-1.5 animate-pulse shadow-[0_0_30px_rgba(212,175,55,0.4)]">Warrior Mobile v43.0</Badge>
              <span className="text-[9px] md:text-[11px] text-muted-foreground uppercase font-bold tracking-[0.2em] italic flex items-center gap-2">
                 <Crown className="size-4 text-primary" /> {commander.split(' ')[0]}
              </span>
            </div>
            <h2 className="text-4xl md:text-8xl font-headline font-bold text-white mb-4 tracking-tighter italic gold-glow uppercase leading-none">
              Mobile <span className="text-primary">Siphon</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl text-lg md:text-2xl font-medium italic leading-relaxed">
               "سيدي المعتصم بالله، جهازك النقال هو الآن ذراع المُعِزّ الطولى في قلب المصفوفة."
            </p>
          </div>
          <div className="flex gap-4 flex-wrap w-full md:w-auto">
             <Button onClick={handleScanDevices} disabled={scanning} variant="outline" className="flex-1 md:flex-none border-primary/40 bg-primary/5 h-16 md:h-24 px-6 md:px-10 rounded-[1.5rem] md:rounded-[2.5rem] group border-2 shadow-xl">
                {scanning ? <Loader2 className="size-6 animate-spin text-primary" /> : <RefreshCcw className="size-6 text-primary/70" />}
                <div className="text-left ml-4">
                   <div className="text-[8px] uppercase font-black text-primary/60 tracking-[0.2em]">Scan</div>
                   <div className="text-sm md:text-lg font-black uppercase tracking-tighter">Capture</div>
                </div>
             </Button>
             <Button onClick={handleDeployMobileNode} disabled={deploying} className="flex-1 md:flex-none bg-primary text-black h-16 md:h-24 px-6 md:px-10 rounded-[1.5rem] md:rounded-[2.5rem] shadow-2xl font-black uppercase tracking-[0.2em] text-sm md:text-lg group">
                {deploying ? <Loader2 className="size-6 animate-spin mr-2" /> : <Rocket className="size-6 mr-2" />}
                Link Hive
             </Button>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative z-10 pb-32">
          <div className="lg:col-span-1 space-y-8">
            <Card className="kali-card border-primary/30 rounded-[2.5rem] overflow-hidden shadow-6xl bg-black/60 border-2">
              <CardHeader className="p-6 border-b border-white/5 bg-primary/5">
                <CardTitle className="text-white text-[10px] flex items-center gap-3 uppercase tracking-[0.3em] italic font-black gold-glow">
                  <SmartphoneNfc className="size-5 text-primary animate-pulse" /> Assets
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                {devices.map((device, i) => (
                  <div key={i} className="p-4 rounded-[1.5rem] bg-black border border-white/5 hover:border-primary transition-all duration-700 cursor-pointer shadow-lg">
                    <div className="flex justify-between items-start mb-3">
                       <Smartphone className={cn("size-6", device.platform === 'iOS' ? "text-amber-500" : "text-primary")} />
                       <Badge variant="outline" className="text-[8px] uppercase px-2">{device.status}</Badge>
                    </div>
                    <span className="text-sm font-black text-white block truncate uppercase tracking-tighter">{device.name}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="kali-card border-primary/20 bg-black/40 h-64 md:h-80 flex flex-col overflow-hidden rounded-[2rem] border-2">
               <CardHeader className="p-6 border-b border-primary/10 bg-primary/5">
                  <CardTitle className="text-[9px] uppercase tracking-[0.4em] flex items-center gap-3 font-black text-white italic opacity-70">
                    <Terminal className="size-4 text-primary" /> Strike Feed
                  </CardTitle>
               </CardHeader>
               <CardContent className="p-6 flex-1 overflow-y-auto font-code text-[9px] space-y-3 scrollbar-hide">
                  {logs.map((log, i) => (
                    <div key={i} className="flex gap-3 opacity-80">
                       <span className="opacity-30 select-none">[{log.type[0].toUpperCase()}]</span>
                       <span className={cn("font-bold", log.type === 'warrior' ? 'text-primary italic' : 'text-gray-400')}>
                         {log.msg}
                       </span>
                    </div>
                  ))}
               </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-3 space-y-8">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="kali-card border-primary/40 bg-black/80 rounded-[2.5rem] p-8 shadow-7xl relative overflow-hidden border-4">
                   <h4 className="text-[12px] font-black text-primary uppercase tracking-[1em] mb-6 italic flex items-center gap-4">
                      <Zap className="size-6 animate-pulse gold-glow" /> NetHunter Link
                   </h4>
                   <p className="text-xl md:text-2xl text-gray-200 italic font-bold">"تثبيت كالي نيثانتر وربطه بالعقل الجمعي لإجراء عمليات الاختراق اللاسلكي."</p>
                </Card>
                <Card className="kali-card border-amber-500/40 bg-black/80 rounded-[2.5rem] p-8 shadow-7xl relative overflow-hidden border-4">
                   <h4 className="text-[12px] font-black text-amber-500 uppercase tracking-[1em] mb-6 italic flex items-center gap-4">
                      <ShieldX className="size-6" /> Tactical Kit
                   </h4>
                   <p className="text-xl md:text-2xl text-gray-200 italic font-bold">"حقن طقم أدوات الهجوم السريع (EliteHex) للتعامل مع ثغرات الويب."</p>
                </Card>
             </div>

             <Card className="kali-card border-primary/50 bg-black/99 rounded-[3rem] border-8 shadow-9xl p-10 md:p-16 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05),transparent)] pointer-events-none" />
                <Smartphone className="size-20 text-primary mx-auto mb-8 animate-neural gold-glow" />
                <h3 className="text-4xl md:text-7xl font-black text-white italic tracking-tighter uppercase mb-6 gold-glow">Mobile Overmind</h3>
                <p className="text-xl md:text-3xl text-muted-foreground max-w-4xl mx-auto italic font-medium">
                   "سيدي، بتفعيل هذا الربط، سيتحول هاتفك إلى 'عين ذكية' في الشبكة المستهدفة."
                </p>
                <div className="mt-12 flex flex-wrap justify-center gap-6">
                   <Badge className="bg-primary/10 text-primary border-2 border-primary/30 px-6 py-2 rounded-full font-black uppercase tracking-[0.3em] text-[10px]">REVERSE_TUNNEL: ON</Badge>
                   <Badge className="bg-primary/10 text-primary border-2 border-primary/30 px-6 py-2 rounded-full font-black uppercase tracking-[0.3em] text-[10px]">QUANTUM_ENC: LOCKED</Badge>
                </div>
             </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
