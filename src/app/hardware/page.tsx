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
  Flame
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

export default function MobileOpsPage() {
  const [mounted, setMounted] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const [scanning, setScanning] = React.useState(false)
  const [intel, setIntel] = React.useState<MobileIntelligenceOutput | null>(null)
  const [operationalGoal, setOperationalGoal] = React.useState("Full Forensic Data Extraction")
  const [activePulse, setActivePulse] = React.useState(false)
  const [logs, setLogs] = React.useState<{msg: string, type: 'info' | 'warn' | 'success'}[]>([])

  const [devices, setDevices] = React.useState([
    { platform: "Android" as const, id: "RF8W10XXXXX", status: "READY", version: "14", name: "Samsung Galaxy S24" },
    { platform: "iOS" as const, id: "00008110-XXXX", status: "RESTRICTED", version: "17.4", name: "iPhone 15 Pro" }
  ])

  React.useEffect(() => {
    setMounted(true)
    setLogs([
      { msg: "Mobile Strike Unit initialized.", type: 'info' },
      { msg: "Awaiting physical USB handshake...", type: 'warn' }
    ])
  }, [])

  const addLog = (msg: string, type: 'info' | 'warn' | 'success' = 'info') => {
    setLogs(prev => [...prev, { msg, type }].slice(-12))
  }

  const handleScanDevices = () => {
    setScanning(true)
    addLog("Initiating deep hardware probe on USB ports...", 'info')
    setTimeout(() => {
      setScanning(false)
      addLog("Hardware scan complete. 2 units identified.", 'success')
      toast({ title: "Scan Complete", description: "Target registry updated via Predator Awareness." })
    }, 2500)
  }

  const runMobileIntel = async () => {
    setLoading(true)
    setActivePulse(true)
    addLog(`Syncing with Predator Brain for: ${operationalGoal}`, 'info')
    
    try {
      const result = await getMobileIntelligence({
        connectedDevices: devices.map(d => ({ platform: d.platform, id: d.id, status: d.status, version: d.version })),
        operationalGoal: operationalGoal
      })
      setIntel(result)
      addLog("Strike vectors computed successfully.", 'success')
      toast({ title: "Neural Link Established" })
    } catch (err) {
      addLog("Critical failure in Neural Link.", 'warn')
    } finally {
      setLoading(false)
      setTimeout(() => setActivePulse(false), 2000)
    }
  }

  return (
    <div className="flex min-h-screen bg-black overflow-hidden text-white">
      <SidebarNav />
      <main className="flex-1 ml-64 p-10 relative overflow-y-auto">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(239,68,68,0.08),transparent)] pointer-events-none" />
        
        <header className="mb-16 flex justify-between items-start relative z-10 animate-in fade-in slide-in-from-top-4 duration-1000">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <Badge className="bg-red-600/20 text-red-500 border-red-500/30 text-[11px] uppercase font-bold tracking-[0.4em] px-3 py-0.5 animate-pulse">Mobile Strike Unit</Badge>
              <span className="text-[11px] text-muted-foreground uppercase font-bold tracking-widest">Predator v18.0 Specialized Node</span>
            </div>
            <h2 className="text-6xl font-headline font-bold text-white mb-3 tracking-tighter italic drop-shadow-[0_0_20px_rgba(239,68,68,0.4)]">Mobile Strike</h2>
            <p className="text-muted-foreground max-w-2xl text-lg font-medium italic">Physical device orchestration and automated mobile exploitation via the Alpha Core.</p>
          </div>
          <div className="flex gap-6">
             <Button onClick={handleScanDevices} disabled={scanning} variant="outline" className="border-red-500/20 bg-red-600/5 h-20 px-8 rounded-3xl group">
                {scanning ? <Loader2 className="size-6 animate-spin text-red-600" /> : <RefreshCcw className="size-6 text-red-500/70 group-hover:text-red-500 transition-colors" />}
                <div className="text-left ml-4">
                   <div className="text-[10px] uppercase font-bold text-red-500/60 tracking-widest">Pulse Scan</div>
                   <div className="text-sm font-bold uppercase tracking-tighter">Refresh Units</div>
                </div>
             </Button>
             <div className="text-right glass-card p-5 border-red-600/30 bg-red-950/10 min-w-[160px] rounded-3xl h-20 shadow-2xl">
                <div className="text-2xl font-code text-red-600 font-bold">{devices.length} UNITS</div>
                <div className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest mt-1">Strike Registry</div>
              </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 relative z-10 pb-20">
          <div className="lg:col-span-1 space-y-8">
            <Card className="glass-card border-red-600/20 rounded-[2.5rem] overflow-hidden group shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent animate-pulse" />
              <CardHeader className="p-8">
                <CardTitle className="text-white text-xs flex items-center gap-3 uppercase tracking-[0.3em]">
                  <Usb className="size-5 text-red-600" /> Target Registry
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 pt-0 space-y-5">
                {devices.map((device, i) => (
                  <div key={i} className="p-5 rounded-[2rem] bg-black/80 border border-white/5 hover:border-red-600/40 transition-all cursor-pointer group relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-3 opacity-5 group-hover:opacity-15 transition-opacity">
                       <Smartphone className="size-14" />
                    </div>
                    <div className="flex justify-between items-start mb-4 relative z-10">
                       <div className="size-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-red-600/20 transition-colors">
                          <Smartphone className={cn("size-6", device.platform === 'iOS' ? "text-red-400" : "text-emerald-400")} />
                       </div>
                       <Badge variant="outline" className={cn(
                         "text-[9px] uppercase tracking-tighter px-3 py-0.5",
                         device.status === 'READY' ? "text-emerald-500 border-emerald-500/20" : "text-orange-500 border-orange-500/20"
                       )}>{device.status}</Badge>
                    </div>
                    <div className="relative z-10">
                       <span className="text-sm font-bold text-white block mb-0.5 italic">{device.name}</span>
                       <span className="text-[10px] text-muted-foreground font-code truncate block opacity-60">{device.id}</span>
                       <div className="mt-4 flex items-center gap-3">
                          <Badge className="bg-red-600/10 text-[9px] h-5 border-red-500/20 uppercase">v{device.version}</Badge>
                          <Badge className="bg-red-600/10 text-[9px] h-5 border-red-500/20 uppercase">{device.platform}</Badge>
                       </div>
                    </div>
                  </div>
                ))}
                
                <div className="pt-8 border-t border-white/5">
                   <label className="text-[10px] font-bold text-red-500/60 uppercase tracking-[0.4em] mb-3 block px-1">Engagement Intent</label>
                   <Input 
                     value={operationalGoal}
                     onChange={(e) => setOperationalGoal(e.target.value)}
                     className="bg-black/60 border-red-500/20 h-12 text-sm mb-6 rounded-2xl focus:border-red-600/50"
                   />
                   <Button onClick={runMobileIntel} disabled={loading || scanning} className="w-full h-16 bg-red-600 hover:bg-red-700 text-white font-bold uppercase text-[11px] tracking-[0.4em] shadow-2xl shadow-red-600/30 rounded-[1.5rem] transition-all">
                     {loading ? <Loader2 className="size-6 animate-spin mr-3" /> : <Zap className="size-6 mr-3" />}
                     Sync Predator Brain
                   </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card border-red-600/30 bg-red-600/5 rounded-[2.5rem] p-4">
               <CardHeader className="p-4 pb-2">
                  <CardTitle className="text-white text-[11px] uppercase tracking-[0.4em] flex items-center gap-3">
                    <Lock className="size-4 text-red-600" /> Override Matrix
                  </CardTitle>
               </CardHeader>
               <CardContent className="p-4 pt-4 space-y-3">
                  <Button variant="outline" className="w-full h-12 text-[10px] border-red-500/20 bg-black/60 hover:bg-red-600/20 hover:border-red-600/40 rounded-2xl transition-all group font-bold uppercase tracking-[0.2em]">
                    <ShieldX className="size-4 mr-3 text-red-600 group-hover:rotate-12 transition-transform" /> BYPASS_SSL_PINNING
                  </Button>
                  <Button variant="outline" className="w-full h-12 text-[10px] border-red-500/20 bg-black/60 hover:bg-red-600/20 hover:border-red-600/40 rounded-2xl transition-all group font-bold uppercase tracking-[0.2em]">
                    <Fingerprint className="size-4 mr-3 text-red-600 group-hover:scale-110 transition-transform" /> SCREEN_LOCK_FUZZER
                  </Button>
               </CardContent>
            </Card>

            <Card className="glass-card border-red-500/10 bg-black/40 h-64 flex flex-col overflow-hidden rounded-[2.5rem]">
               <CardHeader className="p-6 border-b border-red-500/10 bg-red-600/5">
                  <CardTitle className="text-[10px] uppercase tracking-[0.4em] flex items-center gap-3 opacity-60 font-bold text-white">
                    <Terminal className="size-4 text-red-600" /> Strike Feed
                  </CardTitle>
               </CardHeader>
               <CardContent className="p-6 flex-1 overflow-y-auto font-code text-[10px] space-y-3 scrollbar-hide">
                  {logs.map((log, i) => (
                    <div key={i} className="flex gap-3 animate-in slide-in-from-left-2 opacity-80">
                       <span className="opacity-30">[{mounted ? new Date().toLocaleTimeString().split(' ')[0] : "--:--:--"}]</span>
                       <span className={cn(
                         log.type === 'success' ? 'text-emerald-500' : log.type === 'warn' ? 'text-orange-500' : 'text-red-500'
                       )}>{log.msg}</span>
                    </div>
                  ))}
               </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-3">
             {intel ? (
               <div className="space-y-10 animate-in fade-in zoom-in-95 duration-1000">
                  <Card className="glass-card border-red-600/40 overflow-hidden shadow-[0_0_80px_rgba(239,68,68,0.2)] rounded-[3.5rem]">
                     <CardHeader className="bg-red-950/20 border-b border-red-600/20 p-10">
                        <div className="flex justify-between items-center">
                           <div className="flex items-center gap-6">
                              <div className="size-20 rounded-[2.5rem] bg-red-600 flex items-center justify-center border border-red-400 shadow-[0_0_30px_rgba(239,68,68,0.4)]">
                                <Skull className="size-10 text-white" />
                              </div>
                              <div>
                                 <CardTitle className="text-4xl text-white italic tracking-tighter uppercase">Mobile Strategic Intel</CardTitle>
                                 <CardDescription className="text-red-500 font-bold text-[11px] uppercase tracking-[0.6em] mt-2">Neural Vectors v18.0 Synchronized</CardDescription>
                              </div>
                           </div>
                           <div className="text-right">
                              <Badge className={cn(
                                "font-code py-3 px-10 rounded-full text-xs border-red-500/20 mb-3",
                                intel.riskLevel === 'Critical' ? "bg-red-600 text-white animate-pulse" : "bg-red-600/10 text-red-500"
                              )}>STRIKE_LVL: {intel.riskLevel}</Badge>
                              <div className="text-[10px] text-muted-foreground uppercase font-bold tracking-[0.3em]">Operational Confidence: 99.1%</div>
                           </div>
                        </div>
                     </CardHeader>
                     <CardContent className="p-12">
                        <div className="bg-black/90 rounded-[3rem] p-12 border border-red-600/20 relative group mb-16 overflow-hidden shadow-2xl">
                           <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity">
                             <Fingerprint className="size-56 text-red-600" />
                           </div>
                           <h4 className="text-[12px] font-bold text-red-500 uppercase tracking-[0.6em] mb-8 flex items-center gap-4">
                             <Activity className="size-4" /> Vulnerability Manifest
                           </h4>
                           <p className="text-3xl text-white leading-relaxed italic font-medium relative z-10 drop-shadow-xl">
                             "{intel.vulnerabilityAssessment}"
                           </p>
                        </div>

                        <h4 className="text-[12px] font-bold text-muted-foreground uppercase tracking-[0.6em] mb-10 border-b border-white/5 pb-4">Strike Sequence Chain</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                           {intel.strategicPlan.map((step, i) => (
                             <div key={i} className="p-10 rounded-[2.5rem] bg-white/5 border border-white/5 hover:border-red-600/40 transition-all flex flex-col gap-8 relative overflow-hidden group">
                                <div className="absolute -top-4 -right-4 size-48 bg-red-600/5 rounded-full blur-3xl group-hover:bg-red-600/10 transition-colors" />
                                <div className="flex justify-between items-start relative z-10">
                                   <div className="flex gap-6">
                                      <div className="size-12 rounded-2xl bg-red-600/20 flex items-center justify-center text-sm font-bold text-red-500 border border-red-600/30 shadow-2xl">
                                        {i + 1}
                                      </div>
                                      <div>
                                         <span className="text-lg font-bold text-white block mb-1 uppercase tracking-tighter">{step.step}</span>
                                         <Badge variant="outline" className="text-[10px] bg-black/60 border-red-500/20 uppercase text-red-500 font-bold px-4">{step.tool}</Badge>
                                      </div>
                                   </div>
                                   <Button variant="ghost" size="icon" className="size-12 rounded-2xl hover:bg-red-600/20 transition-colors" onClick={() => {
                                      navigator.clipboard.writeText(step.command)
                                      toast({ title: "Strike Vector Copied" })
                                   }}>
                                      <ClipboardCopy className="size-6 text-red-500/40 group-hover:text-red-500" />
                                   </Button>
                                </div>
                                <div className="bg-black/90 p-8 rounded-3xl font-code text-sm text-emerald-400 border border-red-600/10 shadow-inner relative z-10 group-hover:border-red-500/30 transition-all">
                                   <div className="flex items-center gap-4 mb-4 opacity-30 select-none">
                                      <Terminal className="size-4" />
                                      <span className="text-[10px] uppercase font-bold tracking-[0.5em]">Predator Command</span>
                                   </div>
                                   <span className="text-red-900 mr-4 font-bold">$</span>{step.command}
                                </div>
                                <div className="flex items-start gap-4 relative z-10">
                                   <div className="mt-1.5 p-1.5 rounded-full bg-red-600/20"><ChevronRight className="size-4 text-red-600 shrink-0" /></div>
                                   <p className="text-xs text-muted-foreground leading-relaxed italic font-medium">"{step.logic}"</p>
                                </div>
                             </div>
                           ))}
                        </div>

                        <div className="mt-20 pt-12 border-t border-red-600/20">
                           <div className="flex items-center justify-between mb-10">
                              <h4 className="text-[12px] font-bold text-muted-foreground uppercase tracking-[0.6em]">Shadow Extraction Vectors</h4>
                              <span className="text-[10px] text-red-500 uppercase font-bold tracking-[0.5em] animate-pulse shadow-[0_0_10px_red]">Vectors Stabilized</span>
                           </div>
                           <div className="flex flex-wrap gap-4">
                              {intel.extractionVectors.map((v, i) => (
                                <Badge key={i} className="bg-red-600/5 border border-red-600/20 text-white font-code text-[11px] py-3 px-8 rounded-2xl hover:bg-red-600/15 transition-all cursor-default group">
                                   <Zap className="size-4 mr-3 text-red-600 opacity-50 group-hover:animate-pulse" /> {v}
                                </Badge>
                              ))}
                           </div>
                        </div>

                        <div className="mt-16 flex gap-6 pt-12 border-t border-white/5">
                           <Button className="bg-red-600/10 border border-red-600/30 text-red-500 hover:bg-red-600/20 h-16 rounded-[2rem] flex-1 font-bold uppercase tracking-[0.4em] text-[10px]" asChild>
                              <Link href="/terminal"><Terminal className="size-5 mr-4" /> Open Predator Terminal</Link>
                           </Button>
                           <Button variant="outline" className="border-white/10 bg-white/5 h-16 rounded-[2rem] px-12 hover:bg-white/10 transition-all font-bold uppercase tracking-[0.4em] text-[10px]">
                              <Download className="size-5 mr-4" /> Export Strike Pack
                           </Button>
                        </div>
                     </CardContent>
                  </Card>
               </div>
             ) : (
               <div className="h-full min-h-[800px] border-2 border-dashed border-red-600/20 rounded-[5rem] flex flex-col items-center justify-center text-center p-20 bg-black/40 group transition-all hover:bg-red-950/5 relative overflow-hidden">
                  <div className="size-72 bg-red-600/5 rounded-full flex items-center justify-center mb-16 border border-red-600/10 group-hover:scale-110 transition-transform duration-1000 relative">
                     <Smartphone className={cn("size-36 text-red-600/20 transition-all duration-1000", mounted && activePulse && "text-red-600 animate-pulse")} />
                     <div className="absolute inset-0 bg-red-600/5 rounded-full blur-[120px] animate-pulse" />
                     {mounted && scanning && <Loader2 className="absolute inset-0 size-72 text-red-600/10 animate-spin" />}
                  </div>
                  <h3 className="text-7xl font-headline font-bold text-white mb-10 tracking-tighter italic drop-shadow-2xl">Mobile Strike Standby</h3>
                  <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-20 text-3xl font-medium italic">
                     Connect a target device via USB to initialize the <span className="text-red-600 font-bold">Predator Brain</span>. Synchronize with the neural link to map advanced extraction vectors and automated command chains.
                  </p>
                  <div className="flex gap-10">
                     <Badge variant="outline" className="bg-white/5 py-6 px-12 text-[13px] tracking-[0.6em] uppercase border-red-600/30 rounded-full shadow-2xl backdrop-blur-3xl group-hover:border-red-600/60 transition-colors">Shadow Harvest Matrix</Badge>
                     <Badge variant="outline" className="bg-white/5 py-6 px-12 text-[13px] tracking-[0.6em] uppercase border-red-600/30 rounded-full shadow-2xl backdrop-blur-3xl group-hover:border-red-600/60 transition-colors">v18.0 Strike Hub</Badge>
                  </div>
               </div>
             )}
          </div>
        </div>

        <div className="fixed bottom-10 right-10 w-[450px] h-40 glass rounded-[3rem] border border-red-500/20 p-10 hidden 2xl:block overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.8)] z-40 group hover:h-56 transition-all duration-700">
           <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-5">
                 <div className={cn("size-3.5 rounded-full animate-pulse shadow-[0_0_15px_red]", scanning ? "bg-orange-500" : "bg-red-600")} />
                 <span className="text-[12px] font-bold text-white uppercase tracking-[0.4em] font-headline">Strike Registry: {scanning ? 'SCANNING' : 'ACTIVE'}</span>
              </div>
              <div className="flex items-center gap-4">
                 <Radio className="size-5 text-red-600 animate-pulse" />
                 <span className="text-[10px] font-code text-red-500/80 tracking-[0.3em] font-bold italic">UHF/VHF // 0.8ms</span>
              </div>
           </div>
           <div className="flex items-end gap-2 h-14 px-2">
              {mounted && Array.from({ length: 50 }).map((_, i) => (
                <div key={i} className="flex-1 bg-red-600/40 rounded-full hover:bg-red-600 transition-all cursor-pointer" 
                  style={{ 
                    height: `${20 + Math.random() * 80}%`, 
                    animation: scanning ? `pulse 0.5s infinite ${i * 0.02}s` : `pulse 2s infinite ${i * 0.04}s` 
                  }} 
                />
              ))}
           </div>
           <div className="mt-8 flex justify-between px-2 items-center opacity-40 group-hover:opacity-100 transition-opacity">
              <span className="text-[8px] text-red-500 uppercase font-bold tracking-[0.5em]">Encryption: Predator-RSA-16K</span>
              <div className="flex gap-3">
                 <div className="size-1.5 rounded-full bg-red-600 animate-ping shadow-[0_0_5px_red]" />
                 <div className="size-1.5 rounded-full bg-red-600 animate-ping delay-100 shadow-[0_0_5px_red]" />
              </div>
           </div>
        </div>
      </main>
    </div>
  )
}