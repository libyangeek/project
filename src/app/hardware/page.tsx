"use client"

import * as React from "react"
import { SidebarNav } from "@/components/platform/sidebar-nav"
import { 
  Usb, 
  Smartphone, 
  Wifi, 
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
  CpuIcon,
  Search,
  Scan
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { getSystemAwareness } from "@/ai/flows/system-awareness-flow"
import { toast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"

export default function HardwareReconPage() {
  const [loading, setLoading] = React.useState(false)
  const [awareness, setAwareness] = React.useState<any>(null)
  const [activePulse, setActivePulse] = React.useState(false)

  const copyCommand = (cmd: string) => {
    navigator.clipboard.writeText(cmd)
    toast({ title: "Command Copied", description: "Ready for terminal execution." })
  }

  const runRecon = async () => {
    setLoading(true)
    setActivePulse(true)
    try {
      // محاكاة جلب بيانات حقيقية من النظام عبر المحرك السيادي
      const mockHardwareData = {
        usbDevices: [
          {id: "001", name: "Realtek WiFi Adapter", speed: "480M"}, 
          {id: "002", name: "Samsung Galaxy S24 Ultra (Android 14)", mount: "/dev/bus/usb/001/002"}
        ],
        mobileDevices: [
          {platform: "Android", id: "RF8W10XXXXX", status: "ADB_AUTHORIZED", version: "14", security_patch: "2025-01"},
          {platform: "iOS", id: "00008110-XXXX", status: "LOCKED/USB_RESTRICTED", version: "17.4", icloud: "SYNCED"}
        ],
        networkSnapshot: "Port 80: Open, Port 22: Open, WiFi: 'Sovereign_Net' (WPA2-ENT), Clients: 12"
      }
      
      const result = await getSystemAwareness(mockHardwareData)
      setAwareness(result)
      toast({ title: "Neural Pulse Active", description: "Mobile targets identified and vectors mapped." })
    } catch (err) {
      toast({ variant: "destructive", title: "Sync Failed", description: "Could not access hardware registers." })
    } finally {
      setLoading(false)
      setTimeout(() => setActivePulse(false), 2000)
    }
  }

  return (
    <div className="flex min-h-screen bg-black">
      <SidebarNav />
      <main className="flex-1 ml-64 p-8 bg-[radial-gradient(circle_at_bottom_left,rgba(170,76,255,0.05),transparent)]">
        <header className="mb-12 flex justify-between items-start">
          <div className="animate-in fade-in slide-in-from-left-4 duration-700">
            <div className="flex items-center gap-2 mb-2">
              <Badge className="bg-primary/20 text-primary border-primary/30 text-[10px] px-2 py-0 animate-pulse">HARDWARE INTELLIGENCE</Badge>
              <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-[0.3em]">Al-Mu'izz Awareness Engine</span>
            </div>
            <h2 className="text-5xl font-headline font-bold text-white mb-2 tracking-tighter italic">Shadow Harvest Hub</h2>
            <p className="text-muted-foreground max-w-xl">Deep mobile forensics, hardware pulse monitoring, and automated exploitation chain generation for Android and iOS targets.</p>
          </div>
          <div className="flex gap-4">
            <div className="text-right glass p-3 rounded-2xl border border-white/5 bg-black/40">
              <div className="text-lg font-code text-primary font-bold">02 ACTIVE TARGETS</div>
              <div className="text-[9px] text-muted-foreground uppercase font-bold tracking-widest text-right">Peripheral Registry</div>
            </div>
            <Button onClick={runRecon} disabled={loading} className="h-16 px-8 rounded-2xl bg-primary text-white shadow-[0_0_30px_rgba(170,76,255,0.3)] hover:scale-105 active:scale-95 transition-all text-sm font-bold uppercase tracking-widest">
              {loading ? <Loader2 className="size-5 mr-3 animate-spin" /> : <Scan className="size-5 mr-3" />}
              Initiate Pulse Scan
            </Button>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Panel: Target Matrix */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="glass-card border-primary/20 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent animate-pulse" />
              <CardHeader>
                <CardTitle className="text-white text-base flex items-center gap-2">
                  <Smartphone className="size-4 text-primary" />
                  Live Target Matrix
                </CardTitle>
                <CardDescription className="text-[10px] uppercase">Active Physical Connections</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { name: "Galaxy S24 Ultra", status: "Vulnerable", platform: "Android", id: "RF8...5X", level: 92, color: "emerald" },
                  { name: "iPhone 15 Pro", status: "Restricted", platform: "iOS", id: "000...4Q", level: 15, color: "amber" }
                ].map((d, i) => (
                  <div key={i} className="group p-4 rounded-2xl border border-white/5 bg-black/40 hover:border-primary/40 transition-all cursor-pointer relative overflow-hidden">
                    <div className={cn(
                      "absolute top-0 right-0 w-24 h-24 opacity-5 -mr-8 -mt-8 rotate-12 transition-transform group-hover:scale-110",
                      d.platform === 'Android' ? "text-emerald-500" : "text-amber-500"
                    )}>
                      <Smartphone className="size-full" />
                    </div>
                    <div className="flex justify-between items-start mb-4 relative z-10">
                      <div>
                        <span className="text-sm font-bold text-white block mb-1">{d.name}</span>
                        <span className="text-[9px] text-muted-foreground font-code">{d.id}</span>
                      </div>
                      <Badge className={cn(
                        "text-[9px] uppercase font-bold",
                        d.color === 'emerald' ? 'bg-emerald-500/20 text-emerald-500' : 'bg-amber-500/20 text-amber-500'
                      )}>
                        {d.status}
                      </Badge>
                    </div>
                    <div className="space-y-2 relative z-10">
                      <div className="flex justify-between text-[8px] font-bold text-muted-foreground uppercase">
                        <span>Exploit Sync</span>
                        <span>{d.level}%</span>
                      </div>
                      <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                        <div className={cn("h-full transition-all duration-1000", d.color === 'emerald' ? 'bg-emerald-500' : 'bg-amber-500')} style={{ width: `${d.level}%` }} />
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="glass-card border-red-500/20">
              <CardHeader>
                <CardTitle className="text-white text-xs uppercase tracking-[0.2em] flex items-center gap-2">
                  <ShieldX className="size-4 text-red-500" />
                  Active Threat Vectors
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {awareness?.shadowHarvestVector ? (
                  <div className="bg-red-500/5 border border-red-500/10 p-4 rounded-xl">
                    <p className="text-[10px] text-red-500 font-bold mb-2 uppercase tracking-widest">Selected Vector:</p>
                    <p className="text-xs text-white leading-relaxed italic font-medium">"{awareness.shadowHarvestVector}"</p>
                  </div>
                ) : (
                  <div className="p-4 rounded-xl border border-dashed border-white/10 text-center">
                    <p className="text-[10px] text-muted-foreground italic">Awaiting AI Classification...</p>
                  </div>
                )}
                <div className="grid grid-cols-2 gap-2 pt-2">
                  <Button variant="outline" className="text-[9px] h-9 bg-black/40 border-white/5 hover:border-red-500/40">FRIDA_BYPASS</Button>
                  <Button variant="outline" className="text-[9px] h-9 bg-black/40 border-white/5 hover:border-red-500/40">ADB_ROOT_PULL</Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content Area: Playbook & Analysis */}
          <div className="lg:col-span-3">
            {awareness ? (
              <div className="space-y-8 animate-in fade-in zoom-in-95 duration-700">
                <Card className="glass-card border-primary/20 overflow-hidden">
                  <CardHeader className="bg-primary/5 border-b border-white/5 p-8">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-4">
                        <div className="size-14 rounded-2xl bg-primary/20 flex items-center justify-center border border-primary/30 shadow-[0_0_20px_rgba(170,76,255,0.2)]">
                          <Target className="size-8 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl text-white italic">Al-Mu'izz Tactical Playbook</CardTitle>
                          <CardDescription className="text-primary font-bold text-[10px] uppercase tracking-[0.3em]">Operational Sequence Generated</CardDescription>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="bg-white/5 border-white/10 text-[10px] h-9">
                          <Download className="size-3 mr-2" /> EXPORT LOGS
                        </Button>
                        <Button size="sm" className="bg-emerald-600 hover:bg-emerald-500 text-white h-9 px-6 font-bold text-[10px]">
                          <Zap className="size-3 mr-2" /> EXECUTE ALL
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="bg-black/60 rounded-3xl p-8 border border-white/5 relative group mb-10 overflow-hidden">
                      <div className="absolute top-0 right-0 p-8 opacity-10">
                        <Fingerprint className="size-24 text-primary" />
                      </div>
                      <h4 className="text-[10px] font-bold text-primary uppercase tracking-[0.4em] mb-6 flex items-center gap-2">
                        <Activity className="size-3" />
                        Core Situation Analysis
                      </h4>
                      <p className="text-xl text-white leading-relaxed italic font-medium relative z-10">
                        "{awareness.analysis}"
                      </p>
                    </div>

                    <h4 className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.4em] mb-6">Autonomous Command Sequence</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {awareness.actionPlan.map((step: any, i: number) => (
                        <div key={i} className="group p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/40 hover:bg-white/[0.07] transition-all flex flex-col gap-4 relative overflow-hidden">
                          <div className="absolute -top-4 -right-4 size-20 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors" />
                          <div className="flex justify-between items-start">
                            <div className="flex gap-4">
                              <div className="size-8 rounded-lg bg-primary/10 flex items-center justify-center text-xs font-bold text-primary border border-primary/20 shadow-inner">
                                {String(i+1).padStart(2, '0')}
                              </div>
                              <div>
                                <span className="text-xs font-bold text-white block mb-1 uppercase tracking-tight">{step.step}</span>
                                <Badge variant="outline" className="text-[8px] bg-black/40 border-white/10 uppercase tracking-widest text-primary/70">{step.tool}</Badge>
                              </div>
                            </div>
                            <Button variant="ghost" size="icon" className="size-8 text-muted-foreground hover:text-white rounded-xl hover:bg-white/5" onClick={() => copyCommand(step.command)}>
                              <ClipboardCopy className="size-4" />
                            </Button>
                          </div>
                          <div className="bg-black/80 p-4 rounded-xl font-code text-[11px] text-emerald-400 border border-white/5 group-hover:border-emerald-500/30 transition-all shadow-inner">
                            <span className="text-emerald-900 mr-2">$</span>{step.command}
                          </div>
                          <div className="flex items-start gap-2">
                            <ChevronRight className="size-3 text-primary mt-0.5 shrink-0" />
                            <p className="text-[10px] text-muted-foreground leading-relaxed italic">"{step.reason}"</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-12 pt-8 border-t border-white/5">
                      <h4 className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.4em] mb-6">System Kali Toolchain Suggested</h4>
                      <div className="flex flex-wrap gap-3">
                        {awareness.kaliToolsSuggested.map((tool: string, i: number) => (
                          <Badge key={i} variant="secondary" className="bg-white/5 hover:bg-primary/20 text-white border-white/5 py-2 px-4 rounded-xl cursor-crosshair transition-all text-[10px] font-code">
                            {tool}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ) : (
              <div className="h-full min-h-[600px] border-2 border-dashed border-white/5 rounded-[3rem] flex flex-col items-center justify-center text-center p-12 bg-black/10 relative overflow-hidden group">
                {activePulse && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="size-[400px] border border-primary/20 rounded-full animate-ping duration-1000" />
                    <div className="size-[200px] border border-primary/40 rounded-full animate-ping duration-700 delay-300" />
                  </div>
                )}
                <div className="size-32 bg-primary/5 rounded-full flex items-center justify-center mb-8 border border-primary/10 group-hover:scale-110 transition-transform duration-500 relative">
                  <Smartphone className={cn("size-16 text-primary/30 transition-all", activePulse && "text-primary animate-pulse")} />
                  {activePulse && <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse" />}
                </div>
                <h3 className="text-4xl font-headline font-bold text-white mb-4 tracking-tighter italic">Awaiting Mobile Signal</h3>
                <p className="text-muted-foreground max-w-md mx-auto leading-relaxed mb-10 text-lg">
                  Connect a target device via USB or local network to initialize the <span className="text-primary font-bold italic">Shadow Harvest</span> extraction suite.
                </p>
                <div className="flex gap-4">
                  <Badge variant="outline" className="bg-white/5 py-2 px-6 text-[10px] tracking-[0.3em] uppercase border-white/10">Neural Vault Prime</Badge>
                  <Badge variant="outline" className="bg-white/5 py-2 px-6 text-[10px] tracking-[0.3em] uppercase border-white/10">v17.2 Secure Link</Badge>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Live Spectrum Visualizer (Simulated) */}
        <div className="fixed bottom-8 right-8 w-64 h-32 glass rounded-3xl border border-white/5 p-4 hidden xl:block overflow-hidden shadow-2xl">
          <div className="flex items-center justify-between mb-4">
             <div className="flex items-center gap-2">
                <Radio className="size-3 text-primary animate-pulse" />
                <span className="text-[8px] font-bold text-white uppercase tracking-widest">RF Spectrum</span>
             </div>
             <span className="text-[8px] font-code text-emerald-500">2.4 / 5.0 GHz</span>
          </div>
          <div className="flex items-end gap-1 h-12">
            {[40, 70, 45, 90, 65, 30, 85, 50, 95, 40, 60, 80, 55, 75, 40, 90, 35, 65, 50].map((h, i) => (
              <div 
                key={i} 
                className="flex-1 bg-primary/40 rounded-full hover:bg-primary transition-colors cursor-pointer" 
                style={{ height: `${h}%`, animation: `pulse 2s infinite ${i * 0.1}s` }} 
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
