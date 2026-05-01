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
  ClipboardCopy
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { getSystemAwareness } from "@/ai/flows/system-awareness-flow"
import { toast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"

export default function HardwareReconPage() {
  const [loading, setLoading] = React.useState(false)
  const [awareness, setAwareness] = React.useState<any>(null)

  const copyCommand = (cmd: string) => {
    navigator.clipboard.writeText(cmd)
    toast({ title: "Command Copied", description: "Ready for terminal execution." })
  }

  const runRecon = async () => {
    setLoading(true)
    try {
      // محاكاة استدعاء البيانات من السكريبتات الخلفية
      const mockHardwareData = {
        usbDevices: [{id: "001", name: "Realtek WiFi Adapter"}, {id: "002", name: "Apple iPhone 15 Pro"}],
        mobileDevices: [{platform: "iOS", id: "00008110-XXXX", status: "LOCKED"}],
        networkSnapshot: "Port 80: Open, Port 22: Open, Port 8000: Operational, WiFi: 'Sovereign_Net' (WPA2)"
      }
      
      const result = await getSystemAwareness(mockHardwareData)
      setAwareness(result)
      toast({ title: "Awareness Synced", description: "System pulse and intelligent mapping complete." })
    } catch (err) {
      toast({ variant: "destructive", title: "Sync Failed", description: "Could not read hardware registers." })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen">
      <SidebarNav />
      <main className="flex-1 ml-64 p-8 bg-[radial-gradient(circle_at_bottom_left,rgba(170,76,255,0.03),transparent)]">
        <header className="mb-8 flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-headline font-bold text-white mb-2 tracking-tight">Advanced System Pulse</h2>
            <p className="text-muted-foreground">Real-time hardware intelligence and Kali toolchain orchestration.</p>
          </div>
          <Button onClick={runRecon} disabled={loading} className="bg-primary text-white shadow-xl shadow-primary/20">
            {loading ? <Loader2 className="size-4 mr-2 animate-spin" /> : <RefreshCcw className="size-4 mr-2" />}
            Initiate Neural Pulse
          </Button>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-white text-base flex items-center gap-2">
                  <Usb className="size-4 text-primary" />
                  Hardware Registers
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  { name: "Root Hub 3.0", status: "Active", icon: Cpu },
                  { name: "iPhone 15 Pro", status: "Mobile_iOS", highlight: true, icon: Smartphone },
                  { name: "Realtek Adapter", status: "Network", icon: Wifi }
                ].map((d, i) => (
                  <div key={i} className={cn(
                    "p-3 rounded-lg border flex justify-between items-center text-xs",
                    d.highlight ? "bg-primary/10 border-primary/30" : "bg-black/20 border-white/5"
                  )}>
                    <div className="flex items-center gap-2">
                      <d.icon className="size-3 text-muted-foreground" />
                      <span className="text-white font-medium">{d.name}</span>
                    </div>
                    <Badge variant="outline" className="text-[9px] uppercase">{d.status}</Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-white text-base flex items-center gap-2">
                  <Terminal className="size-4 text-emerald-500" />
                  Active Kali Toolchain
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {awareness?.kaliToolsSuggested?.map((tool: string, i: number) => (
                  <div key={i} className="bg-emerald-500/5 border border-emerald-500/10 p-2 rounded flex justify-between items-center">
                    <span className="text-[10px] text-emerald-500 font-code">{tool}</span>
                    <Badge className="bg-emerald-500/20 text-emerald-500 text-[8px]">READY</Badge>
                  </div>
                )) || <p className="text-[10px] text-muted-foreground italic text-center">No tools suggested yet.</p>}
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2">
            {awareness ? (
              <div className="space-y-6 animate-in fade-in zoom-in-95 duration-500">
                <Card className="glass-card border-primary/20">
                  <CardHeader className="border-b border-white/5 bg-white/5">
                    <CardTitle className="text-white flex items-center gap-3">
                      <Zap className="size-5 text-primary" />
                      Al-Mu'izz Strategic Assessment
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-8">
                    <p className="text-muted-foreground leading-relaxed text-lg mb-8 font-medium italic border-l-4 border-primary pl-6">
                      {awareness.analysis}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                      <div className="space-y-4">
                        <h4 className="text-xs font-bold text-white uppercase tracking-widest flex items-center gap-2">
                          <ShieldAlert className="size-4 text-red-500" />
                          Threat Indicators
                        </h4>
                        <ul className="space-y-2">
                          {awareness.threats.map((t: string, i: number) => (
                            <li key={i} className="text-sm text-muted-foreground flex gap-2">
                              <span className="text-red-500 font-bold">•</span> {t}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">Command Execution Sequence</h4>
                    <div className="space-y-4">
                      {awareness.actionPlan.map((step: any, i: number) => (
                        <div key={i} className="flex flex-col gap-2 p-4 rounded-xl bg-black/40 border border-white/5 hover:border-primary/40 transition-all group">
                          <div className="flex justify-between items-start">
                            <div className="flex gap-4">
                                <div className="size-8 rounded-lg bg-primary/10 flex items-center justify-center font-bold text-primary text-xs shrink-0">
                                {i + 1}
                                </div>
                                <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="text-sm font-bold text-white">{step.step}</span>
                                    <Badge variant="outline" className="text-[8px] bg-white/5 text-primary">{step.tool}</Badge>
                                </div>
                                <p className="text-xs text-muted-foreground">{step.reason}</p>
                                </div>
                            </div>
                            <Button variant="ghost" size="icon" className="size-8 hover:bg-primary/20 text-muted-foreground hover:text-primary" onClick={() => copyCommand(step.command)}>
                                <ClipboardCopy className="size-4" />
                            </Button>
                          </div>
                          <div className="mt-2 bg-black/60 p-3 rounded-lg border border-white/5 font-code text-[11px] text-emerald-500 flex items-center justify-between group-hover:border-emerald-500/30 transition-colors">
                            <span className="truncate">{step.command}</span>
                            <ChevronRight className="size-3 text-muted-foreground shrink-0" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ) : (
              <div className="h-full min-h-[500px] border-2 border-dashed border-white/5 rounded-3xl flex flex-col items-center justify-center text-center p-12 bg-black/20">
                <div className="size-20 bg-primary/5 rounded-full flex items-center justify-center mb-6 border border-primary/10 shadow-[0_0_20px_rgba(170,76,255,0.1)]">
                  <Activity className="size-10 text-primary/30" />
                </div>
                <h3 className="text-2xl font-headline font-bold text-white mb-2">Awaiting System Pulse</h3>
                <p className="text-muted-foreground max-w-sm">Initiate the pulse to synchronize local Kali intelligence with hardware register analysis.</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
