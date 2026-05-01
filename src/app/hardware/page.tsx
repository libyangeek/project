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
  MessageSquare
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { getMobileIntelligence, type MobileIntelligenceOutput } from "@/ai/flows/mobile-intelligence-flow"
import { toast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"

export default function MobileOpsPage() {
  const [loading, setLoading] = React.useState(false)
  const [intel, setIntel] = React.useState<MobileIntelligenceOutput | null>(null)
  const [operationalGoal, setOperationalGoal] = React.useState("Full Forensic Data Extraction")
  const [activePulse, setActivePulse] = React.useState(false)

  // محاكاة الأجهزة المتصلة فعلياً
  const [devices, setDevices] = React.useState([
    { platform: "Android" as const, id: "RF8W10XXXXX", status: "READY", version: "14", name: "Samsung Galaxy S24" },
    { platform: "iOS" as const, id: "00008110-XXXX", status: "RESTRICTED", version: "17.4", name: "iPhone 15 Pro" }
  ])

  const copyCommand = (cmd: string) => {
    navigator.clipboard.writeText(cmd)
    toast({ title: "Vector Copied", description: "Command ready for execution." })
  }

  const runMobileIntel = async () => {
    setLoading(true)
    setActivePulse(true)
    try {
      const result = await getMobileIntelligence({
        connectedDevices: devices.map(d => ({ platform: d.platform, id: d.id, status: d.status, version: d.version })),
        operationalGoal: operationalGoal
      })
      setIntel(result)
      toast({ title: "Mobile Brain Synced", description: "Strategic vectors mapped for targets." })
    } catch (err) {
      toast({ variant: "destructive", title: "Neural Link Error", description: "Mobile intelligence engine is offline." })
    } finally {
      setLoading(false)
      setTimeout(() => setActivePulse(false), 2000)
    }
  }

  return (
    <div className="flex min-h-screen bg-black overflow-hidden">
      <SidebarNav />
      <main className="flex-1 ml-64 p-8 relative">
        {/* Background Atmosphere */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(170,76,255,0.05),transparent)] pointer-events-none" />
        
        <header className="mb-12 flex justify-between items-start relative z-10 animate-in fade-in slide-in-from-top-4 duration-700">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Badge className="bg-primary/20 text-primary border-primary/30 text-[10px] px-2 py-0 animate-pulse">MOBILE INTELLIGENCE</Badge>
              <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-[0.3em]">Al-Mu'izz Specialized Unit</span>
            </div>
            <h2 className="text-5xl font-headline font-bold text-white mb-2 tracking-tighter italic">Sovereign Mobile Ops</h2>
            <p className="text-muted-foreground max-w-xl">Central command for physical device orchestration, real-time forensic extraction, and automated mobile exploitation.</p>
          </div>
          <div className="flex gap-4">
             <div className="text-right glass p-3 rounded-2xl border border-white/5 bg-black/40">
                <div className="text-lg font-code text-primary font-bold">{devices.length} UNITS</div>
                <div className="text-[9px] text-muted-foreground uppercase font-bold tracking-widest">Active Link Status</div>
              </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative z-10">
          {/* Physical Registry - Left */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="glass-card border-primary/20 overflow-hidden relative group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse" />
              <CardHeader>
                <CardTitle className="text-white text-sm flex items-center gap-2 uppercase tracking-widest">
                  <Usb className="size-4 text-primary" />
                  Target Registry
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {devices.map((device, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-black/60 border border-white/5 hover:border-primary/40 transition-all cursor-pointer group">
                    <div className="flex justify-between items-start mb-3">
                       <div className="size-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <Smartphone className={cn("size-5", device.platform === 'iOS' ? "text-blue-400" : "text-emerald-400")} />
                       </div>
                       <Badge variant="outline" className="text-[8px] uppercase tracking-tighter">{device.status}</Badge>
                    </div>
                    <div>
                       <span className="text-xs font-bold text-white block mb-0.5">{device.name}</span>
                       <span className="text-[9px] text-muted-foreground font-code truncate block">{device.id}</span>
                       <div className="mt-2 flex items-center gap-2">
                          <Badge className="bg-white/5 text-[8px] h-4">v{device.version}</Badge>
                          <Badge className="bg-white/5 text-[8px] h-4">{device.platform}</Badge>
                       </div>
                    </div>
                  </div>
                ))}
                
                <div className="pt-4 border-t border-white/5">
                   <label className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest mb-2 block">Operational Intent</label>
                   <Input 
                     value={operationalGoal}
                     onChange={(e) => setOperationalGoal(e.target.value)}
                     className="bg-black/40 border-white/5 h-10 text-xs mb-4"
                     placeholder="Define goal..."
                   />
                   <Button onClick={runMobileIntel} disabled={loading} className="w-full h-12 bg-primary text-white font-bold uppercase text-[10px] tracking-widest shadow-xl shadow-primary/20">
                     {loading ? <Loader2 className="size-4 animate-spin mr-2" /> : <Zap className="size-4 mr-2" />}
                     Sync Mobile Brain
                   </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card border-red-500/20">
               <CardHeader>
                  <CardTitle className="text-white text-[10px] uppercase tracking-[0.2em] flex items-center gap-2">
                    <Lock className="size-3 text-red-500" /> Security Override
                  </CardTitle>
               </CardHeader>
               <CardContent className="space-y-2">
                  <Button variant="outline" className="w-full h-9 text-[9px] border-white/5 bg-black/40 hover:border-red-500/40">BYPASS_SSL_PINNING</Button>
                  <Button variant="outline" className="w-full h-9 text-[9px] border-white/5 bg-black/40 hover:border-red-500/40">SCREEN_LOCK_FUZZER</Button>
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
                              <div className="size-14 rounded-3xl bg-primary/20 flex items-center justify-center border border-primary/30 shadow-[0_0_20px_rgba(170,76,255,0.2)]">
                                <Brain className="size-8 text-primary" />
                              </div>
                              <div>
                                 <CardTitle className="text-3xl text-white italic">Mobile Strategic Analysis</CardTitle>
                                 <CardDescription className="text-primary font-bold text-[10px] uppercase tracking-[0.3em]">Neural Vectors Computed</CardDescription>
                              </div>
                           </div>
                           <Badge className={cn(
                             "font-code py-2 px-6 rounded-full text-xs",
                             intel.riskLevel === 'Critical' ? "bg-red-500 text-white" : "bg-emerald-500/20 text-emerald-500"
                           )}>LEVEL: {intel.riskLevel}</Badge>
                        </div>
                     </CardHeader>
                     <CardContent className="p-8">
                        <div className="bg-black/60 rounded-3xl p-8 border border-white/5 relative group mb-10 overflow-hidden shadow-inner">
                           <div className="absolute top-0 right-0 p-8 opacity-10">
                             <Fingerprint className="size-24 text-primary" />
                           </div>
                           <h4 className="text-[10px] font-bold text-primary uppercase tracking-[0.4em] mb-4 flex items-center gap-2">
                             <Activity className="size-3" /> Vulnerability Assessment
                           </h4>
                           <p className="text-xl text-white leading-relaxed italic font-medium relative z-10">
                             "{intel.vulnerabilityAssessment}"
                           </p>
                        </div>

                        <h4 className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.4em] mb-6">Autonomous Command Chain</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                           {intel.strategicPlan.map((step, i) => (
                             <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/40 transition-all flex flex-col gap-4 relative overflow-hidden group">
                                <div className="absolute -top-4 -right-4 size-20 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors" />
                                <div className="flex justify-between items-start">
                                   <div className="flex gap-4">
                                      <div className="size-8 rounded-lg bg-primary/10 flex items-center justify-center text-xs font-bold text-primary border border-primary/20">
                                        {i + 1}
                                      </div>
                                      <div>
                                         <span className="text-xs font-bold text-white block mb-1 uppercase tracking-tight">{step.step}</span>
                                         <Badge variant="outline" className="text-[8px] bg-black/40 border-white/10 uppercase text-primary/70">{step.tool}</Badge>
                                      </div>
                                   </div>
                                   <Button variant="ghost" size="icon" className="size-8 hover:bg-white/5" onClick={() => copyCommand(step.command)}>
                                      <ClipboardCopy className="size-4" />
                                   </Button>
                                </div>
                                <div className="bg-black/80 p-4 rounded-xl font-code text-[11px] text-emerald-400 border border-white/5 shadow-inner">
                                   <span className="text-emerald-900 mr-2">$</span>{step.command}
                                </div>
                                <div className="flex items-start gap-2">
                                   <ChevronRight className="size-3 text-primary mt-0.5 shrink-0" />
                                   <p className="text-[10px] text-muted-foreground leading-relaxed italic">"{step.logic}"</p>
                                </div>
                             </div>
                           ))}
                        </div>

                        <div className="mt-12 pt-8 border-t border-white/5">
                           <h4 className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.4em] mb-4">Shadow Extraction Vectors</h4>
                           <div className="flex flex-wrap gap-2">
                              {intel.extractionVectors.map((v, i) => (
                                <Badge key={i} className="bg-white/5 border-white/10 text-white font-code text-[10px] py-1.5 px-4">{v}</Badge>
                              ))}
                           </div>
                        </div>
                     </CardContent>
                  </Card>
               </div>
             ) : (
               <div className="h-full min-h-[600px] border-2 border-dashed border-white/5 rounded-[4rem] flex flex-col items-center justify-center text-center p-12 bg-black/10 relative overflow-hidden group">
                  {activePulse && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                       <div className="size-[400px] border border-primary/20 rounded-full animate-ping duration-1000" />
                       <div className="size-[200px] border border-primary/40 rounded-full animate-ping duration-700 delay-300" />
                    </div>
                  )}
                  <div className="size-40 bg-primary/5 rounded-full flex items-center justify-center mb-10 border border-primary/10 group-hover:scale-110 transition-transform duration-700 relative">
                     <Smartphone className={cn("size-20 text-primary/20 transition-all", activePulse && "text-primary animate-pulse")} />
                     <div className="absolute inset-0 bg-primary/5 rounded-full blur-[60px] animate-pulse" />
                  </div>
                  <h3 className="text-5xl font-headline font-bold text-white mb-6 tracking-tighter italic">Mobile Link Standby</h3>
                  <p className="text-muted-foreground max-w-lg mx-auto leading-relaxed mb-12 text-xl font-medium">
                     Connect a target device via USB to initialize the <span className="text-primary font-bold italic">Mobile Brain</span>. Synchronize with the neural link to map advanced extraction vectors and automated command chains.
                  </p>
                  <div className="flex gap-6">
                     <Badge variant="outline" className="bg-white/5 py-3 px-8 text-[11px] tracking-[0.4em] uppercase border-white/10 rounded-2xl shadow-xl">Shadow Harvest Matrix</Badge>
                     <Badge variant="outline" className="bg-white/5 py-3 px-8 text-[11px] tracking-[0.4em] uppercase border-white/10 rounded-2xl shadow-xl">v17.5 Secure Link</Badge>
                  </div>
               </div>
             )}
          </div>
        </div>

        {/* Neural Visualizer Bottom */}
        <div className="fixed bottom-8 right-8 w-80 h-32 glass rounded-3xl border border-white/10 p-6 hidden xl:block overflow-hidden shadow-2xl z-40">
           <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                 <Radio className="size-3 text-primary animate-pulse" />
                 <span className="text-[9px] font-bold text-white uppercase tracking-[0.3em]">Device Pulse Registry</span>
              </div>
              <span className="text-[9px] font-code text-emerald-500">UHF/VHF Active</span>
           </div>
           <div className="flex items-end gap-1 h-12">
              {Array.from({ length: 30 }).map((_, i) => (
                <div key={i} className="flex-1 bg-primary/30 rounded-full hover:bg-primary transition-all cursor-pointer" 
                  style={{ height: `${20 + Math.random() * 80}%`, animation: `pulse 2s infinite ${i * 0.1}s` }} 
                />
              ))}
           </div>
        </div>
      </main>
    </div>
  )
}

function Brain(props: any) {
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
