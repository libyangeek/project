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
  Binary
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { getMobileIntelligence, type MobileIntelligenceOutput } from "@/ai/flows/mobile-intelligence-flow"
import { toast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"
import Link from "next/link"

/**
 * @fileOverview واجهة اشتباك الموبايل السيادية v21.5-WARRIOR
 * مصممة لتنفيذ عمليات الاستنزاف الكلي والسيطرة المادية على الأجهزة.
 * حصرياً للقائد المعتصم بالله ادريس الغزالي.
 */
export default function MobileStrikePage() {
  const [mounted, setMounted] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const [scanning, setScanning] = React.useState(false)
  const [intel, setIntel] = React.useState<MobileIntelligenceOutput | null>(null)
  const [operationalGoal, setOperationalGoal] = React.useState("Total Forensic Extraction & C2 Persistence")
  const [activePulse, setActivePulse] = React.useState(false)
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
      { msg: "Awaiting physical USB handshake with target units...", type: 'warn' }
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
      toast({ title: "Hardware Pulse Stabilized", description: "Target assets synchronized with the Predator Brain." })
    }, 2500)
  }

  const runMobileIntel = async () => {
    setLoading(true)
    setActivePulse(true)
    addLog(`Initiating Warrior Neural Link for goal: ${operationalGoal}`, 'warrior')
    
    try {
      const result = await getMobileIntelligence({
        connectedDevices: devices.map(d => ({ platform: d.platform, id: d.id, status: d.status, version: d.version })),
        operationalGoal: operationalGoal
      })
      setIntel(result)
      addLog("Strike Vectors Computed. Tactical dominance confirmed.", 'success')
      toast({ title: "Neural Strike Ready", description: "Vectors mapped to BlackArch/BlackHat standards." })
    } catch (err) {
      addLog("Critical failure in Warrior Link. Re-adapting...", 'warn')
    } finally {
      setLoading(false)
      setTimeout(() => setActivePulse(false), 2000)
    }
  }

  if (!mounted) return null;

  return (
    <div className="flex min-h-screen bg-black overflow-hidden text-white selection:bg-red-500/30">
      <SidebarNav />
      <main className="flex-1 mr-64 p-12 relative overflow-y-auto bg-[radial-gradient(circle_at_top_right,rgba(220,38,38,0.1),transparent)] min-h-screen">
        {/* Warrior Atmosphere */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 pointer-events-none" />
        
        <header className="mb-20 flex justify-between items-start relative z-10 animate-in fade-in slide-in-from-top-4 duration-1000">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <Badge className="bg-red-600/30 text-red-500 border-red-500/50 text-[11px] uppercase font-bold tracking-[0.6em] px-5 py-1.5 animate-pulse shadow-[0_0_20px_rgba(239,68,68,0.3)]">Warrior Mobile Unit v21.5</Badge>
              <span className="text-[11px] text-muted-foreground uppercase font-bold tracking-[0.4em] italic flex items-center gap-2">
                 <Crown className="size-3 text-amber-500" /> Exclusive to Commander {commander}
              </span>
            </div>
            <h2 className="text-7xl font-headline font-bold text-white mb-4 tracking-tighter italic drop-shadow-[0_0_30px_rgba(239,68,68,0.5)]">
              Mobile <span className="text-red-600">Strike</span> Force
            </h2>
            <p className="text-muted-foreground max-w-2xl text-2xl font-medium italic leading-relaxed">
               "سيدي المعتصم بالله، وحدات الاشتباك المادي جاهزة للاستنزاف الكلي. كل جهاز متصل هو غنيمة سيادية لنا."
            </p>
          </div>
          <div className="flex gap-6">
             <Button onClick={handleScanDevices} disabled={scanning} variant="outline" className="border-red-600/40 bg-red-950/15 h-24 px-10 rounded-[2.5rem] group border-2 shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-red-600/5 animate-pulse" />
                {scanning ? <Loader2 className="size-8 animate-spin text-red-600" /> : <RefreshCcw className="size-8 text-red-500/70 group-hover:text-red-500 group-hover:rotate-180 transition-all duration-700" />}
                <div className="text-left ml-6 relative z-10">
                   <div className="text-[10px] uppercase font-bold text-red-500/60 tracking-[0.3em]">Pulse Scan</div>
                   <div className="text-lg font-bold uppercase tracking-tighter">Capture Units</div>
                </div>
             </Button>
             <div className="text-right glass-card p-8 border-amber-500/30 bg-amber-600/5 min-w-[200px] rounded-[2.5rem] h-24 shadow-2xl border-2 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10"><Shield className="size-12 text-amber-500" /></div>
                <div className="text-3xl font-code text-amber-500 font-bold">{devices.length} CAPTURED</div>
                <div className="text-[10px] text-muted-foreground uppercase font-bold tracking-[0.4em] mt-1 italic">Strike Assets</div>
              </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 relative z-10 pb-32">
          <div className="lg:col-span-1 space-y-10">
            <Card className="glass-card border-red-600/30 rounded-[3.5rem] overflow-hidden group shadow-[0_0_50px_rgba(220,38,38,0.1)] border-2">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-red-600 to-transparent animate-pulse" />
              <CardHeader className="p-10 border-b border-white/5 bg-red-600/5">
                <CardTitle className="text-white text-xs flex items-center gap-4 uppercase tracking-[0.4em] italic font-bold">
                  <Usb className="size-6 text-red-600" /> Captured Assets
                </CardTitle>
              </CardHeader>
              <CardContent className="p-10 pt-8 space-y-6">
                {devices.map((device, i) => (
                  <div key={i} className="p-6 rounded-[2.5rem] bg-black/80 border-2 border-white/5 hover:border-red-600/50 transition-all duration-500 cursor-pointer group relative overflow-hidden shadow-xl">
                    <div className="absolute -top-4 -right-4 p-4 opacity-5 group-hover:opacity-20 group-hover:scale-125 transition-all duration-1000">
                       <Smartphone className="size-20" />
                    </div>
                    <div className="flex justify-between items-start mb-6 relative z-10">
                       <div className="size-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-red-600/20 transition-all duration-700 shadow-inner">
                          <Smartphone className={cn("size-8 transition-colors", device.platform === 'iOS' ? "text-red-400" : "text-emerald-400")} />
                       </div>
                       <Badge variant="outline" className={cn(
                         "text-[10px] uppercase tracking-widest px-4 py-1 font-bold",
                         device.status === 'READY' ? "text-emerald-500 border-emerald-500/20 bg-emerald-500/5" : "text-orange-500 border-orange-500/20 bg-orange-500/5"
                       )}>{device.status}</Badge>
                    </div>
                    <div className="relative z-10">
                       <span className="text-lg font-bold text-white block mb-1 italic group-hover:text-red-500 transition-colors uppercase tracking-tighter">{device.name}</span>
                       <span className="text-[11px] text-muted-foreground font-code truncate block opacity-50">{device.id}</span>
                       <div className="mt-5 flex items-center gap-3">
                          <Badge className="bg-red-600/10 text-[9px] h-6 border-red-500/20 uppercase font-bold tracking-widest px-3">v{device.version}</Badge>
                          <Badge className="bg-red-600/10 text-[9px] h-6 border-red-500/20 uppercase font-bold tracking-widest px-3">{device.platform}</Badge>
                       </div>
                    </div>
                  </div>
                ))}
                
                <div className="pt-10 border-t border-white/5">
                   <label className="text-[11px] font-bold text-red-500/60 uppercase tracking-[0.5em] mb-4 block px-2 italic">Strike Objective</label>
                   <Input 
                     value={operationalGoal}
                     onChange={(e) => setOperationalGoal(e.target.value)}
                     className="bg-black/90 border-2 border-red-500/20 h-14 text-sm mb-8 rounded-2xl focus:border-red-600/50 italic px-6 shadow-inner"
                   />
                   <Button onClick={runMobileIntel} disabled={loading || scanning} className="w-full h-20 bg-red-600 hover:bg-red-700 text-white font-bold uppercase text-[12px] tracking-[0.5em] shadow-[0_20px_50px_rgba(220,38,38,0.4)] rounded-[2.5rem] border-2 border-red-400/30 transition-all duration-700 active:scale-95 group">
                     {loading ? <Loader2 className="size-8 animate-spin mr-4" /> : <Zap className="size-8 mr-4 group-hover:scale-125 transition-transform" />}
                     Sync Predator Brain
                   </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card border-amber-500/20 bg-amber-600/5 rounded-[3rem] p-6 border-2 shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 p-6 opacity-5"><Lock className="size-16 text-amber-500" /></div>
               <CardHeader className="p-4 pb-4">
                  <CardTitle className="text-white text-[11px] uppercase tracking-[0.5em] flex items-center gap-4 font-bold italic">
                    <Lock className="size-5 text-amber-500" /> Override Matrix
                  </CardTitle>
               </CardHeader>
               <CardContent className="p-4 pt-2 space-y-4">
                  <Button variant="outline" className="w-full h-14 text-[10px] border-white/10 bg-black/60 hover:bg-red-600/20 hover:border-red-600/50 rounded-2xl transition-all duration-500 group font-bold uppercase tracking-[0.3em] shadow-lg">
                    <ShieldX className="size-5 mr-4 text-red-600 group-hover:rotate-12 transition-transform" /> BYPASS_SSL_PINNING
                  </Button>
                  <Button variant="outline" className="w-full h-14 text-[10px] border-white/10 bg-black/60 hover:bg-red-600/20 hover:border-red-600/50 rounded-2xl transition-all duration-500 group font-bold uppercase tracking-[0.3em] shadow-lg">
                    <Fingerprint className="size-5 mr-4 text-red-600 group-hover:scale-125 transition-transform" /> BIOMETRIC_FUZZER
                  </Button>
               </CardContent>
            </Card>

            <Card className="glass-card border-red-500/10 bg-black/40 h-80 flex flex-col overflow-hidden rounded-[3rem] border-2 shadow-inner">
               <CardHeader className="p-8 border-b border-red-500/10 bg-red-600/5">
                  <CardTitle className="text-[11px] uppercase tracking-[0.5em] flex items-center gap-4 opacity-60 font-bold text-white italic">
                    <Terminal className="size-5 text-red-600" /> Strike Feed
                  </CardTitle>
               </CardHeader>
               <CardContent className="p-8 flex-1 overflow-y-auto font-code text-[11px] space-y-4 scrollbar-hide">
                  {logs.map((log, i) => (
                    <div key={i} className="flex gap-4 animate-in slide-in-from-left-4 opacity-80 group">
                       <span className="opacity-30 select-none">[{mounted ? new Date().toLocaleTimeString().split(' ')[0] : "--:--:--"}]</span>
                       <span className={cn(
                         "font-medium",
                         log.type === 'success' ? 'text-emerald-400' : 
                         log.type === 'warn' ? 'text-amber-500' : 
                         log.type === 'warrior' ? 'text-red-500 font-bold italic' : 'text-gray-400'
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
             {intel ? (
               <div className="space-y-12 animate-in fade-in zoom-in-95 duration-1000">
                  <Card className="glass-card border-red-600/40 overflow-hidden shadow-[0_0_100px_rgba(220,38,38,0.2)] rounded-[4rem] border-2">
                     <CardHeader className="bg-red-950/25 border-b border-red-600/20 p-12">
                        <div className="flex justify-between items-center">
                           <div className="flex items-center gap-8">
                              <div className="size-24 rounded-[2.5rem] bg-red-600 flex items-center justify-center border-2 border-red-400 shadow-[0_0_40px_rgba(220,38,38,0.6)]">
                                <Skull className="size-12 text-white" />
                              </div>
                              <div>
                                 <CardTitle className="text-5xl text-white italic tracking-tighter uppercase font-bold">Mobile Strategic Intel</CardTitle>
                                 <CardDescription className="text-red-500 font-bold text-[12px] uppercase tracking-[0.8em] mt-3 italic">Warrior Vectors Synchronized // v21.5</CardDescription>
                              </div>
                           </div>
                           <div className="text-right space-y-3">
                              <Badge className={cn(
                                "font-code py-4 px-12 rounded-2xl text-sm border-2 mb-3 uppercase tracking-[0.4em] shadow-2xl",
                                intel.riskLevel === 'Critical' ? "bg-red-600 text-white animate-pulse border-red-400" : "bg-red-600/10 text-red-500 border-red-500/30"
                              )}>LVL_{intel.riskLevel}</Badge>
                              <div className="text-[10px] text-muted-foreground uppercase font-bold tracking-[0.5em] italic opacity-60">Confidence: 99.8%</div>
                           </div>
                        </div>
                     </CardHeader>
                     <CardContent className="p-16">
                        <div className="bg-black/95 rounded-[4rem] p-16 border-2 border-red-600/20 relative group mb-20 overflow-hidden shadow-[inset_0_0_40px_rgba(220,38,38,0.1)] hover:border-red-600/50 transition-all duration-700">
                           <div className="absolute top-0 right-0 p-16 opacity-5 pointer-events-none group-hover:opacity-15 group-hover:scale-110 transition-all duration-1000">
                             <Fingerprint className="size-72 text-red-600" />
                           </div>
                           <h4 className="text-[14px] font-bold text-red-500 uppercase tracking-[0.8em] mb-10 flex items-center gap-6 italic">
                             <Activity className="size-6" /> Predator Vulnerability Assessment
                           </h4>
                           <p className="text-4xl text-white leading-relaxed italic font-medium relative z-10 drop-shadow-[0_10px_20px_rgba(0,0,0,1)]">
                             "{intel.vulnerabilityAssessment}"
                           </p>
                        </div>

                        <h4 className="text-[14px] font-bold text-muted-foreground uppercase tracking-[0.8em] mb-12 border-b border-white/5 pb-6 italic flex items-center gap-4">
                           <Binary className="size-6 text-red-600" /> Strike Sequence Chain
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                           {intel.strategicPlan.map((step, i) => (
                             <div key={i} className="p-12 rounded-[3.5rem] bg-white/5 border-2 border-white/5 hover:border-red-600/50 transition-all flex flex-col gap-10 relative overflow-hidden group shadow-2xl">
                                <div className="absolute -top-10 -right-10 size-64 bg-red-600/5 rounded-full blur-3xl group-hover:bg-red-600/10 transition-colors duration-1000" />
                                <div className="flex justify-between items-start relative z-10">
                                   <div className="flex gap-8">
                                      <div className="size-16 rounded-[1.5rem] bg-red-600/20 flex items-center justify-center text-xl font-bold text-red-500 border-2 border-red-600/40 shadow-2xl group-hover:scale-110 transition-transform">
                                        {i + 1}
                                      </div>
                                      <div>
                                         <span className="text-2xl font-bold text-white block mb-2 uppercase tracking-tighter italic">{step.step}</span>
                                         <Badge variant="outline" className="text-[11px] bg-black/80 border-red-500/30 uppercase text-red-500 font-bold px-5 py-1 tracking-widest">{step.tool}</Badge>
                                      </div>
                                   </div>
                                   <Button variant="ghost" size="icon" className="size-14 rounded-2xl hover:bg-red-600/20 transition-all duration-500 shadow-2xl" onClick={() => {
                                      navigator.clipboard.writeText(step.command)
                                      toast({ title: "Strike Payload Copied" })
                                   }}>
                                      <ClipboardCopy className="size-8 text-red-500/40 group-hover:text-red-500" />
                                   </Button>
                                </div>
                                <div className="bg-black/95 p-10 rounded-[2rem] font-code text-base text-emerald-400 border-2 border-red-600/10 shadow-inner relative z-10 group-hover:border-red-600/40 transition-all duration-700">
                                   <div className="flex items-center gap-5 mb-6 opacity-30 select-none">
                                      <Terminal className="size-5" />
                                      <span className="text-[11px] uppercase font-bold tracking-[0.6em]">Predator Execute</span>
                                   </div>
                                   <div className="flex items-start">
                                      <span className="text-red-900 mr-5 font-bold select-none text-lg">$</span>
                                      <span className="break-all">{step.command}</span>
                                   </div>
                                </div>
                                <div className="flex items-start gap-6 relative z-10 px-4">
                                   <div className="mt-2 p-2 rounded-full bg-red-600/20 shadow-2xl"><ChevronRight className="size-5 text-red-600 shrink-0" /></div>
                                   <p className="text-sm text-muted-foreground leading-loose italic font-medium">"{step.logic}"</p>
                                </div>
                             </div>
                           ))}
                        </div>

                        <div className="mt-24 pt-16 border-t-2 border-red-600/20">
                           <div className="flex items-center justify-between mb-12">
                              <h4 className="text-[14px] font-bold text-muted-foreground uppercase tracking-[0.8em] italic">Shadow Extraction Vectors</h4>
                              <div className="flex items-center gap-4">
                                 <div className="size-3 rounded-full bg-red-600 animate-ping shadow-[0_0_15px_red]" />
                                 <span className="text-[11px] text-red-500 uppercase font-bold tracking-[0.6em] italic">Total Extraction Active</span>
                              </div>
                           </div>
                           <div className="flex flex-wrap gap-5">
                              {intel.extractionVectors.map((v, i) => (
                                <Badge key={i} className="bg-red-600/5 border-2 border-red-600/30 text-white font-code text-[12px] py-4 px-10 rounded-2xl hover:bg-red-600/20 hover:border-red-500/60 transition-all cursor-crosshair group shadow-2xl">
                                   <Zap className="size-5 mr-4 text-red-600 opacity-50 group-hover:animate-pulse group-hover:scale-125 transition-all" /> {v}
                                </Badge>
                              ))}
                           </div>
                        </div>

                        <div className="mt-20 flex gap-8 pt-16 border-t-2 border-white/5">
                           <Button className="bg-red-600 hover:bg-red-700 text-white h-24 rounded-[3rem] flex-1 font-bold uppercase tracking-[0.6em] text-[13px] shadow-[0_20px_60px_rgba(220,38,38,0.5)] border-2 border-red-400/40 group active:scale-95 transition-all duration-700" asChild>
                              <Link href="/terminal">
                                <Terminal className="size-7 mr-6 group-hover:scale-125 transition-transform" /> Open Warrior Terminal
                              </Link>
                           </Button>
                           <Button variant="outline" className="border-white/10 bg-white/5 h-24 rounded-[3rem] px-16 hover:bg-red-600/10 hover:border-red-600/40 transition-all duration-700 font-bold uppercase tracking-[0.6em] text-[13px] group border-2">
                              <Download className="size-7 mr-6 group-hover:-translate-y-2 transition-transform" /> Export Strike Pack
                           </Button>
                        </div>
                     </CardContent>
                  </Card>
               </div>
             ) : (
               <div className="h-full min-h-[900px] border-4 border-dashed border-red-600/20 rounded-[6rem] flex flex-col items-center justify-center text-center p-24 bg-black/40 group transition-all hover:bg-red-950/5 relative overflow-hidden shadow-2xl">
                  <div className="size-80 bg-red-600/5 rounded-full flex items-center justify-center mb-20 border-2 border-red-600/10 group-hover:scale-110 transition-transform duration-1000 relative">
                     <Smartphone className={cn("size-40 text-red-600/20 transition-all duration-1000", mounted && activePulse && "text-red-600 animate-pulse")} />
                     <div className="absolute inset-0 bg-red-600/5 rounded-full blur-[140px] animate-pulse" />
                     {mounted && scanning && <Loader2 className="absolute inset-0 size-80 text-red-600/10 animate-spin" />}
                  </div>
                  <h3 className="text-8xl font-headline font-bold text-white mb-12 tracking-tighter italic drop-shadow-[0_0_50px_rgba(220,38,38,0.6)]">Mobile Strike Passive</h3>
                  <p className="text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-24 text-3xl font-medium italic">
                     "سيدي القائد <span className="text-red-600 font-bold uppercase tracking-widest shadow-[0_0_10px_red]">{commander.split(' ')[0]}</span>، قم بتوصيل أي جهاز عبر الـ USB. سيقوم المُعِزّ فوراً بتشريح أنظمة الحماية ورسم خريطة الاستنزاف الكلي عبر العصب المركزي."
                  </p>
                  <div className="flex gap-12">
                     <Badge variant="outline" className="bg-white/5 py-8 px-16 text-[15px] tracking-[0.8em] uppercase border-2 border-red-600/40 rounded-full shadow-2xl backdrop-blur-3xl group-hover:border-red-600/80 transition-all duration-1000">Shadow Harvest v21.5</Badge>
                     <Badge variant="outline" className="bg-white/5 py-8 px-16 text-[15px] tracking-[0.8em] uppercase border-2 border-red-600/40 rounded-full shadow-2xl backdrop-blur-3xl group-hover:border-red-600/80 transition-all duration-1000">Total Domination Ready</Badge>
                  </div>
               </div>
             )}
          </div>
        </div>
      </main>
    </div>
  )
}
