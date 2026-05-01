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
  Target
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
      const mockHardwareData = {
        usbDevices: [
          {id: "001", name: "Realtek WiFi Adapter"}, 
          {id: "002", name: "Samsung Galaxy S24 Ultra (Android 14)"}
        ],
        mobileDevices: [
          {platform: "Android", id: "RF8W10XXXXX", status: "ADB_AUTHORIZED", version: "14"},
          {platform: "iOS", id: "00008110-XXXX", status: "LOCKED", version: "17.4"}
        ],
        networkSnapshot: "Port 80: Open, Port 22: Open, WiFi: 'Sovereign_Net' (WPA2)"
      }
      
      const result = await getSystemAwareness(mockHardwareData)
      setAwareness(result)
      toast({ title: "Neural Pulse Active", description: "Mobile targets identified and vectors mapped." })
    } catch (err) {
      toast({ variant: "destructive", title: "Sync Failed", description: "Could not access hardware registers." })
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
            <h2 className="text-3xl font-headline font-bold text-white mb-2 tracking-tight">Shadow Harvest Control</h2>
            <p className="text-muted-foreground">Mobile exploitation, forensic extraction, and hardware pulse monitoring.</p>
          </div>
          <Button onClick={runRecon} disabled={loading} className="bg-primary text-white shadow-xl shadow-primary/20">
            {loading ? <Loader2 className="size-4 mr-2 animate-spin" /> : <Zap className="size-4 mr-2" />}
            Initiate Shadow Harvest
          </Button>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-white text-base flex items-center gap-2">
                  <Smartphone className="size-4 text-primary" />
                  Mobile Targets
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  { name: "Galaxy S24 Ultra", status: "Vulnerable", platform: "Android", color: "text-emerald-500" },
                  { name: "iPhone 15 Pro", status: "Restricted", platform: "iOS", color: "text-amber-500" }
                ].map((d, i) => (
                  <div key={i} className="p-3 rounded-lg border border-white/5 bg-black/20 flex flex-col gap-2">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-bold text-white">{d.name}</span>
                      <Badge className={cn("text-[8px]", d.color === 'text-emerald-500' ? 'bg-emerald-500/20 text-emerald-500' : 'bg-amber-500/20 text-amber-500')}>
                        {d.status}
                      </Badge>
                    </div>
                    <div className="text-[10px] text-muted-foreground uppercase tracking-widest">{d.platform} CORE</div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="glass-card border-red-500/20">
              <CardHeader>
                <CardTitle className="text-white text-sm flex items-center gap-2">
                  <ShieldX className="size-4 text-red-500" />
                  Exploitation Vectors
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {awareness?.shadowHarvestVector && (
                  <div className="bg-red-500/5 border border-red-500/10 p-3 rounded-lg">
                    <p className="text-[10px] text-red-500 font-bold mb-1 uppercase">Active Vector:</p>
                    <p className="text-xs text-white leading-relaxed">{awareness.shadowHarvestVector}</p>
                  </div>
                )}
                <div className="grid grid-cols-2 gap-2 mt-4">
                  <Button variant="outline" size="sm" className="text-[9px] h-8 bg-black/40">FRIDA_BYPASS</Button>
                  <Button variant="outline" size="sm" className="text-[9px] h-8 bg-black/40">ADB_BACKUP</Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-3">
            {awareness ? (
              <div className="space-y-6 animate-in fade-in zoom-in-95 duration-500">
                <Card className="glass-card border-primary/20">
                  <CardHeader className="border-b border-white/5 bg-white/5">
                    <CardTitle className="text-white flex items-center gap-3">
                      <Target className="size-5 text-primary" />
                      Al-Mu'izz Tactical Playbook
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10 mb-8">
                      <p className="text-white leading-relaxed text-base italic font-medium">
                        {awareness.analysis}
                      </p>
                    </div>

                    <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-4">Command Chain Execution</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {awareness.actionPlan.map((step: any, i: number) => (
                        <div key={i} className="group p-4 rounded-xl bg-black/40 border border-white/5 hover:border-primary/40 transition-all flex flex-col gap-3">
                          <div className="flex justify-between items-start">
                            <div className="flex gap-3">
                              <div className="size-6 rounded bg-primary/10 flex items-center justify-center text-[10px] font-bold text-primary">{i+1}</div>
                              <span className="text-xs font-bold text-white">{step.step}</span>
                            </div>
                            <Button variant="ghost" size="icon" className="size-6 text-muted-foreground" onClick={() => copyCommand(step.command)}>
                              <ClipboardCopy className="size-3" />
                            </Button>
                          </div>
                          <div className="bg-black/60 p-2 rounded-lg font-code text-[10px] text-emerald-500 border border-white/5 group-hover:border-emerald-500/30 transition-colors">
                            {step.command}
                          </div>
                          <p className="text-[10px] text-muted-foreground italic">{step.reason}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ) : (
              <div className="h-full min-h-[500px] border-2 border-dashed border-white/5 rounded-3xl flex flex-col items-center justify-center text-center p-12 bg-black/10">
                <div className="size-20 bg-primary/5 rounded-full flex items-center justify-center mb-6 border border-primary/10 animate-pulse">
                  <Smartphone className="size-10 text-primary/30" />
                </div>
                <h3 className="text-2xl font-headline font-bold text-white mb-2">Awaiting Mobile Signal</h3>
                <p className="text-muted-foreground max-w-sm">Connect a device via USB or network to enable the Shadow Harvest extraction suite.</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
