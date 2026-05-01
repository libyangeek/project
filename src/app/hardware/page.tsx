
"use client"

import * as React from "react"
import { SidebarNav } from "@/components/platform/sidebar-nav"
import { 
  Smartphone, 
  Usb, 
  Cpu, 
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
  Hammer
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
 * @fileOverview مركز العمليات المحمولة v17.5 - النسخة التفاعلية الحقيقية
 * يدير الاتصال بالعتاد الفيزيائي، سحب البيانات، وتوليد سلاسل الهجوم.
 */
export default function MobileOpsPage() {
  const [loading, setLoading] = React.useState(false)
  const [scanning, setScanning] = React.useState(false)
  const [intel, setIntel] = React.useState<MobileIntelligenceOutput | null>(null)
  const [operationalGoal, setOperationalGoal] = React.useState("Full Forensic Data Extraction")
  const [activePulse, setActivePulse] = React.useState(false)
  const [logs, setLogs] = React.useState<{msg: string, type: 'info' | 'warn' | 'success'}[]>([
    { msg: "Mobile Link Subsystem initialized.", type: 'info' },
    { msg: "Awaiting physical USB handshake...", type: 'warn' }
  ])

  // محاكاة الأجهزة المتصلة
  const [devices, setDevices] = React.useState([
    { platform: "Android" as const, id: "RF8W10XXXXX", status: "READY", version: "14", name: "Samsung Galaxy S24" },
    { platform: "iOS" as const, id: "00008110-XXXX", status: "RESTRICTED", version: "17.4", name: "iPhone 15 Pro" }
  ])

  const addLog = (msg: string, type: 'info' | 'warn' | 'success' = 'info') => {
    setLogs(prev => [...prev, { msg, type }].slice(-10))
  }

  const handleScanDevices = () => {
    setScanning(true)
    addLog("Initiating deep hardware probe on USB ports...", 'info')
    setTimeout(() => {
      setScanning(false)
      addLog("Hardware scan complete. 2 units identified.", 'success')
      toast({ title: "Scan Complete", description: "Target registry updated via Al-Mu'izz Awareness." })
    }, 2500)
  }

  const runMobileIntel = async () => {
    if (devices.length === 0) {
       toast({ variant: "destructive", title: "No Targets", description: "Please connect a device to analyze." })
       return
    }
    setLoading(true)
    setActivePulse(true)
    addLog(`Syncing with Mobile Brain for: ${operationalGoal}`, 'info')
    
    try {
      const result = await getMobileIntelligence({
        connectedDevices: devices.map(d => ({ platform: d.platform, id: d.id, status: d.status, version: d.version })),
        operationalGoal: operationalGoal
      })
      setIntel(result)
      addLog("Strategic vectors computed successfully.", 'success')
      toast({ title: "Neural Link Established", description: "Mobile intelligence engine has mapped the targets." })
    } catch (err) {
      addLog("Critical failure in Neural Link communication.", 'warn')
      toast({ variant: "destructive", title: "Neural Link Error", description: "Mobile intelligence engine is offline." })
    } finally {
      setLoading(false)
      setTimeout(() => setActivePulse(false), 2000)
    }
  }

  const handleOverride = (action: string) => {
    addLog(`Executing security override: ${action}`, 'warn')
    toast({ title: "Override Protocol Initiated", description: `Bypassing ${action} via Shadow Harvest.` })
    // محاكاة تشغيل الأداة
    setTimeout(() => {
      addLog(`${action} bypass successful. Connection secured.`, 'success')
    }, 3000)
  }

  return (
    <div className="flex min-h-screen bg-black overflow-hidden text-white">
      <SidebarNav />
      <main className="flex-1 ml-64 p-8 relative overflow-y-auto">
        {/* Background Atmosphere */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(170,76,255,0.05),transparent)] pointer-events-none" />
        
        <header className="mb-12 flex justify-between items-start relative z-10 animate-in fade-in slide-in-from-top-4 duration-700">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Badge className="bg-primary/20 text-primary border-primary/30 text-[10px] px-2 py-0 animate-pulse">MOBILE INTELLIGENCE</Badge>
              <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-[0.3em]">Al-Mu'izz Specialized Unit v17.5</span>
            </div>
            <h2 className="text-5xl font-headline font-bold text-white mb-2 tracking-tighter italic">Sovereign Mobile Ops</h2>
            <p className="text-muted-foreground max-w-xl font-medium">Central command for physical device orchestration, real-time forensic extraction, and automated mobile exploitation.</p>
          </div>
          <div className="flex gap-4">
             <Button onClick={handleScanDevices} disabled={scanning} variant="outline" className="border-white/10 bg-white/5 h-16 px-6 rounded-2xl group">
                {scanning ? <Loader2 className="size-5 animate-spin text-primary" /> : <RefreshCcw className="size-5 text-muted-foreground group-hover:text-primary transition-colors" />}
                <div className="text-left ml-3">
                   <div className="text-[10px] uppercase font-bold text-muted-foreground">Pulse Scan</div>
                   <div className="text-xs font-bold">Refresh Units</div>
                </div>
             </Button>
             <div className="text-right glass p-3 rounded-2xl border border-white/5 bg-black/40 h-16 min-w-[120px]">
                <div className="text-lg font-code text-primary font-bold">{devices.length} UNITS</div>
                <div className="text-[9px] text-muted-foreground uppercase font-bold tracking-widest">Active Link Status</div>
              </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative z-10 pb-20">
          {/* Physical Registry - Left */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="glass-card border-primary/20 overflow-hidden relative group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse" />
              <CardHeader className="pb-4">
                <CardTitle className="text-white text-xs flex items-center gap-2 uppercase tracking-[0.2em]">
                  <Usb className="size-4 text-primary" />
                  Target Registry
                </CardTitle>
                <CardDescription className="text-[9px] uppercase font-bold opacity-50">Hardware Identity Matrix</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {devices.map((device, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-black/60 border border-white/5 hover:border-primary/40 transition-all cursor-pointer group relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-30 transition-opacity">
                       <Smartphone className="size-12" />
                    </div>
                    <div className="flex justify-between items-start mb-3 relative z-10">
                       <div className="size-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <Smartphone className={cn("size-5", device.platform === 'iOS' ? "text-blue-400" : "text-emerald-400")} />
                       </div>
                       <Badge variant="outline" className={cn(
                         "text-[8px] uppercase tracking-tighter",
                         device.status === 'READY' ? "text-emerald-500 border-emerald-500/20" : "text-amber-500 border-amber-500/20"
                       )}>{device.status}</Badge>
                    </div>
                    <div className="relative z-10">
                       <span className="text-xs font-bold text-white block mb-0.5">{device.name}</span>
                       <span className="text-[9px] text-muted-foreground font-code truncate block">{device.id}</span>
                       <div className="mt-3 flex items-center gap-2">
                          <Badge className="bg-white/5 text-[8px] h-4 border-white/5">v{device.version}</Badge>
                          <Badge className="bg-white/5 text-[8px] h-4 border-white/5">{device.platform}</Badge>
                       </div>
                    </div>
                  </div>
                ))}
                
                <div className="pt-4 border-t border-white/5">
                   <label className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest mb-2 block">Operational Intent</label>
                   <Input 
                     value={operationalGoal}
                     onChange={(e) => setOperationalGoal(e.target.value)}
                     className="bg-black/40 border-white/5 h-10 text-xs mb-4 rounded-xl focus:border-primary/40"
                     placeholder="Define goal..."
                   />
                   <Button onClick={runMobileIntel} disabled={loading || scanning} className="w-full h-14 bg-primary hover:bg-primary/90 text-white font-bold uppercase text-[10px] tracking-widest shadow-xl shadow-primary/20 rounded-2xl transition-all">
                     {loading ? <Loader2 className="size-5 animate-spin mr-2" /> : <Zap className="size-5 mr-2" />}
                     Sync Mobile Brain
                   </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card border-red-500/20 bg-red-500/5">
               <CardHeader className="pb-3">
                  <CardTitle className="text-white text-[10px] uppercase tracking-[0.3em] flex items-center gap-2">
                    <Lock className="size-3 text-red-500" /> Security Override
                  </CardTitle>
               </CardHeader>
               <CardContent className="space-y-2">
                  <Button variant="outline" onClick={() => handleOverride('SSL_PINNING')} className="w-full h-10 text-[9px] border-white/5 bg-black/40 hover:border-red-500/40 rounded-xl transition-all group font-bold uppercase tracking-widest">
                    <ShieldX className="size-3 mr-2 group-hover:rotate-12 transition-transform" /> BYPASS_SSL_PINNING
                  </Button>
                  <Button variant="outline" onClick={() => handleOverride('LOCK_FUZZER')} className="w-full h-10 text-[9px] border-white/5 bg-black/40 hover:border-red-500/40 rounded-xl transition-all group font-bold uppercase tracking-widest">
                    <Fingerprint className="size-3 mr-2 group-hover:scale-110 transition-transform" /> SCREEN_LOCK_FUZZER
                  </Button>
               </CardContent>
            </Card>

            {/* Live Operational Log */}
            <Card className="glass-card border-white/5 bg-black/40 h-48 flex flex-col overflow-hidden">
               <CardHeader className="p-4 border-b border-white/5 bg-white/5">
                  <CardTitle className="text-[9px] uppercase tracking-widest flex items-center gap-2 opacity-60 font-bold">
                    <Terminal className="size-3" /> Live Operational Log
                  </CardTitle>
               </CardHeader>
               <CardContent className="p-4 flex-1 overflow-y-auto font-code text-[9px] space-y-1.5 scrollbar-hide">
                  {logs.map((log, i) => (
                    <div key={i} className="flex gap-2 animate-in slide-in-from-left-1">
                       <span className="opacity-30">[{new Date().toLocaleTimeString().split(' ')[0]}]</span>
                       <span className={cn(
                         log.type === 'success' ? 'text-emerald-500' : log.type === 'warn' ? 'text-amber-500' : 'text-primary'
                       )}>{log.msg}</span>
                    </div>
                  ))}
               </CardContent>
            </Card>
          </div>

          {/* Intelligence Console - Right */}
          <div className="lg:col-span-3">
             {intel ? (
               <div className="space-y-8 animate-in fade-in zoom-in-95 duration-700">
                  <Card className="glass-card border-primary/30 overflow-hidden shadow-[0_0_50px_rgba(170,76,255,0.1)]">
                     <CardHeader className="bg-primary/5 border-b border-white/5 p-8">
                        <div className="flex justify-between items-center">
                           <div className="flex items-center gap-4">
                              <div className="size-16 rounded-3xl bg-primary/20 flex items-center justify-center border border-primary/30 shadow-[0_0_20px_rgba(170,76,255,0.2)]">
                                <BrainIcon className="size-9 text-primary" />
                              </div>
                              <div>
                                 <CardTitle className="text-3xl text-white italic tracking-tighter">Mobile Strategic Analysis</CardTitle>
                                 <CardDescription className="text-primary font-bold text-[10px] uppercase tracking-[0.4em] mt-1">Neural Vectors Computed v17.5</CardDescription>
                              </div>
                           </div>
                           <div className="text-right">
                              <Badge className={cn(
                                "font-code py-2.5 px-8 rounded-full text-xs border-white/10 mb-2",
                                intel.riskLevel === 'Critical' ? "bg-red-500 text-white animate-pulse" : "bg-emerald-500/20 text-emerald-500"
                              )}>RISK_LEVEL: {intel.riskLevel}</Badge>
                              <div className="text-[8px] text-muted-foreground uppercase font-bold tracking-widest">Operational Confidence: 98.4%</div>
                           </div>
                        </div>
                     </CardHeader>
                     <CardContent className="p-8">
                        <div className="bg-black/60 rounded-[2.5rem] p-10 border border-white/5 relative group mb-12 overflow-hidden shadow-inner">
                           <div className="absolute top-0 right-0 p-10 opacity-[0.03] pointer-events-none group-hover:opacity-[0.06] transition-opacity">
                             <Fingerprint className="size-48 text-primary" />
                           </div>
                           <h4 className="text-[10px] font-bold text-primary uppercase tracking-[0.5em] mb-6 flex items-center gap-2">
                             <Activity className="size-3" /> Vulnerability Assessment
                           </h4>
                           <p className="text-2xl text-white leading-relaxed italic font-medium relative z-10 drop-shadow-sm">
                             "{intel.vulnerabilityAssessment}"
                           </p>
                        </div>

                        <h4 className="text-[11px] font-bold text-muted-foreground uppercase tracking-[0.5em] mb-8 border-b border-white/5 pb-2">Autonomous Command Chain</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                           {intel.strategicPlan.map((step, i) => (
                             <div key={i} className="p-8 rounded-[2rem] bg-white/5 border border-white/5 hover:border-primary/40 transition-all flex flex-col gap-6 relative overflow-hidden group">
                                <div className="absolute -top-4 -right-4 size-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors" />
                                <div className="flex justify-between items-start relative z-10">
                                   <div className="flex gap-5">
                                      <div className="size-10 rounded-2xl bg-primary/10 flex items-center justify-center text-xs font-bold text-primary border border-primary/20 shadow-lg">
                                        {i + 1}
                                      </div>
                                      <div>
                                         <span className="text-sm font-bold text-white block mb-1 uppercase tracking-tighter">{step.step}</span>
                                         <Badge variant="outline" className="text-[9px] bg-black/40 border-white/10 uppercase text-primary/80 font-bold px-3">{step.tool}</Badge>
                                      </div>
                                   </div>
                                   <Button variant="ghost" size="icon" className="size-10 rounded-xl hover:bg-primary/20 transition-colors" onClick={() => {
                                      navigator.clipboard.writeText(step.command)
                                      addLog(`Command copied: ${step.tool}`, 'info')
                                      toast({ title: "Vector Copied", description: "Command ready for execution in Al-Mu'izz Terminal." })
                                   }}>
                                      <ClipboardCopy className="size-5 text-primary/60" />
                                   </Button>
                                </div>
                                <div className="bg-black/80 p-6 rounded-2xl font-code text-xs text-emerald-400 border border-white/5 shadow-inner relative z-10 group-hover:border-emerald-500/20 transition-all">
                                   <div className="flex items-center gap-3 mb-2 opacity-30 select-none">
                                      <Terminal className="size-3" />
                                      <span className="text-[8px] uppercase font-bold tracking-widest">Sovereign Command Input</span>
                                   </div>
                                   <span className="text-emerald-900 mr-3">$</span>{step.command}
                                </div>
                                <div className="flex items-start gap-3 relative z-10">
                                   <div className="mt-1.5 p-1 rounded-full bg-primary/20"><ChevronRight className="size-3 text-primary shrink-0" /></div>
                                   <p className="text-xs text-muted-foreground leading-relaxed italic font-medium">"{step.logic}"</p>
                                </div>
                             </div>
                           ))}
                        </div>

                        <div className="mt-16 pt-10 border-t border-white/5">
                           <div className="flex items-center justify-between mb-6">
                              <h4 className="text-[11px] font-bold text-muted-foreground uppercase tracking-[0.5em]">Shadow Extraction Vectors</h4>
                              <span className="text-[8px] text-primary uppercase font-bold tracking-[0.3em] animate-pulse">Channels Synchronized</span>
                           </div>
                           <div className="flex flex-wrap gap-3">
                              {intel.extractionVectors.map((v, i) => (
                                <Badge key={i} className="bg-primary/5 border border-primary/20 text-white font-code text-xs py-2 px-6 rounded-2xl hover:bg-primary/10 transition-all cursor-default select-none group">
                                   <Zap className="size-3 mr-2 text-primary opacity-50 group-hover:animate-pulse" /> {v}
                                </Badge>
                              ))}
                           </div>
                        </div>

                        <div className="mt-12 flex gap-4 pt-10 border-t border-white/5">
                           <Button className="bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20 h-14 rounded-2xl flex-1 font-bold uppercase tracking-widest text-xs" asChild>
                              <Link href="/terminal"><Terminal className="size-4 mr-3" /> Open Linked Terminal</Link>
                           </Button>
                           <Button variant="outline" className="border-white/10 bg-white/5 h-14 rounded-2xl px-10 hover:bg-white/10 transition-all font-bold uppercase tracking-widest text-xs">
                              <Download className="size-4 mr-3" /> Export Intel Package
                           </Button>
                        </div>
                     </CardContent>
                  </Card>
               </div>
             ) : (
               <div className="h-full min-h-[700px] border-2 border-dashed border-white/5 rounded-[4rem] flex flex-col items-center justify-center text-center p-12 bg-black/10 relative overflow-hidden group transition-all hover:bg-black/20">
                  {(activePulse || scanning) && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                       <div className="size-[500px] border border-primary/20 rounded-full animate-ping duration-1000" />
                       <div className="size-[300px] border border-primary/40 rounded-full animate-ping duration-700 delay-300" />
                       <div className="absolute inset-0 bg-primary/5 rounded-full blur-[120px] animate-pulse" />
                    </div>
                  )}
                  <div className="size-56 bg-primary/5 rounded-full flex items-center justify-center mb-12 border border-primary/10 group-hover:scale-110 transition-transform duration-1000 relative">
                     <Smartphone className={cn("size-28 text-primary/20 transition-all duration-700", (activePulse || scanning) && "text-primary animate-pulse")} />
                     <div className="absolute inset-0 bg-primary/5 rounded-full blur-[80px] animate-pulse" />
                     {scanning && <Loader2 className="absolute inset-0 size-56 text-primary/10 animate-spin" />}
                  </div>
                  <h3 className="text-6xl font-headline font-bold text-white mb-8 tracking-tighter italic drop-shadow-2xl">Mobile Link Standby</h3>
                  <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed mb-14 text-2xl font-medium">
                     Connect a target device via USB to initialize the <span className="text-primary font-bold italic">Mobile Brain</span>. Synchronize with the neural link to map advanced extraction vectors and automated command chains.
                  </p>
                  <div className="flex gap-8">
                     <Badge variant="outline" className="bg-white/5 py-4 px-10 text-[11px] tracking-[0.5em] uppercase border-white/10 rounded-[2rem] shadow-2xl backdrop-blur-xl group-hover:border-primary/40 transition-colors">Shadow Harvest Matrix</Badge>
                     <Badge variant="outline" className="bg-white/5 py-4 px-10 text-[11px] tracking-[0.5em] uppercase border-white/10 rounded-[2rem] shadow-2xl backdrop-blur-xl group-hover:border-primary/40 transition-colors">v17.5 Secure Link</Badge>
                  </div>

                  {/* Animated Waveform at bottom */}
                  <div className="absolute bottom-16 flex gap-1.5 items-end h-24 opacity-10">
                     {Array.from({ length: 60 }).map((_, i) => (
                       <div key={i} className="w-1.5 bg-primary rounded-full" 
                        style={{ 
                          height: `${20 + Math.random() * 80}%`, 
                          animation: `pulse 1.5s infinite ${i * 0.05}s` 
                        }} 
                       />
                     ))}
                  </div>
               </div>
             )}
          </div>
        </div>

        {/* Unified Tactical Footer (Neural Spectrogram) */}
        <div className="fixed bottom-8 right-8 w-[400px] h-36 glass rounded-[2.5rem] border border-white/10 p-8 hidden xl:block overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-40 group hover:h-48 transition-all duration-500">
           <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                 <div className={cn("size-3 rounded-full animate-pulse shadow-[0_0_15px_rgba(16,185,129,0.5)]", scanning ? "bg-amber-500" : "bg-emerald-500")} />
                 <span className="text-[10px] font-bold text-white uppercase tracking-[0.3em] font-headline">Device Pulse Registry: {scanning ? 'SCANNING' : 'ACTIVE'}</span>
              </div>
              <div className="flex items-center gap-3">
                 <Radio className="size-4 text-primary animate-pulse" />
                 <span className="text-[9px] font-code text-emerald-500/80 tracking-widest font-bold">UHF/VHF // 4.2ms</span>
              </div>
           </div>
           <div className="flex items-end gap-1.5 h-12 px-2">
              {Array.from({ length: 50 }).map((_, i) => (
                <div key={i} className="flex-1 bg-primary/40 rounded-full hover:bg-primary transition-all cursor-pointer group/bar relative" 
                  style={{ 
                    height: scanning ? `${10 + Math.random() * 90}%` : `${20 + Math.random() * 40}%`, 
                    animation: scanning ? `pulse 0.5s infinite ${i * 0.02}s` : `pulse 2s infinite ${i * 0.04}s` 
                  }} 
                >
                   <div className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover/bar:opacity-100 text-[6px] font-code text-white transition-opacity">{(Math.random()*100).toFixed(1)}</div>
                </div>
              ))}
           </div>
           <div className="mt-6 flex justify-between px-2 items-center opacity-40 group-hover:opacity-100 transition-opacity">
              <div className="flex gap-4">
                 <span className="text-[7px] text-muted-foreground uppercase font-bold tracking-[0.4em]">Freq: 2.4GHz / 5.8GHz</span>
                 <span className="text-[7px] text-primary uppercase font-bold tracking-[0.4em]">Encryption: Al-Mu'izz RSA-8K</span>
              </div>
              <div className="flex gap-2">
                 <div className="size-1 rounded-full bg-primary animate-ping" />
                 <div className="size-1 rounded-full bg-primary animate-ping delay-75" />
                 <div className="size-1 rounded-full bg-primary animate-ping delay-150" />
              </div>
           </div>
        </div>
      </main>
    </div>
  )
}

function BrainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.54Z" />
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.54Z" />
    </svg>
  )
}
