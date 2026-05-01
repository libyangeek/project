"use client"

import * as React from "react"
import { SidebarNav } from "@/components/platform/sidebar-nav"
import { 
  Activity, 
  Cpu, 
  Database, 
  Zap,
  RefreshCcw,
  CheckCircle2,
  Skull,
  Flame,
  Brain,
  Search,
  Lock,
  Loader2,
  Anchor,
  Download,
  History,
  ShieldAlert,
  ShieldCheck,
  Binary,
  Layers,
  Fingerprint
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { toast } from "@/hooks/use-toast"
import { getSystemAwareness } from "@/ai/flows/system-awareness-flow"

export default function SystemPage() {
  const [refreshing, setRefreshing] = React.useState(false)
  const [awareness, setAwareness] = React.useState<any>(null)
  const [mounted, setMounted] = React.useState(false)
  const [identity, setIdentity] = React.useState<any>(null)

  React.useEffect(() => {
    setMounted(true)
    // محاكاة جلب الهوية من ملف JSON الداخلي
    fetch('/ai-engine/identity/ai_identity.json')
      .then(res => res.json())
      .then(data => setIdentity(data))
      .catch(() => {})
      
    handleRefresh()
  }, [])

  const handleRefresh = async () => {
    setRefreshing(true)
    try {
      const data = await getSystemAwareness({
        usbDevices: [],
        mobileDevices: [],
        networkSnapshot: "Active Eth0 / Wlan0 Scanning..."
      })
      setAwareness(data)
      toast({ title: "Neural Strike Grid Synchronized" })
    } catch (err) {
      toast({ variant: "destructive", title: "Sync Failure" })
    } finally {
      setRefreshing(false)
    }
  }

  if (!mounted) return null;

  return (
    <div className="flex min-h-screen bg-black">
      <SidebarNav />
      <main className="flex-1 ml-64 p-10 bg-[radial-gradient(circle_at_bottom_left,rgba(239,68,68,0.08),transparent)] overflow-y-auto">
        <header className="flex justify-between items-center mb-16 relative z-10 animate-in fade-in slide-in-from-top-4 duration-1000">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <Badge className="bg-red-600/20 text-red-500 border-red-500/30 text-[11px] uppercase font-bold tracking-[0.4em] px-3 py-0.5 animate-pulse">Alpha Node Health</Badge>
              <span className="text-[11px] text-muted-foreground uppercase font-bold tracking-[0.3em]">Predator v19.0 Self-Awareness</span>
            </div>
            <h2 className="text-6xl font-headline font-bold text-white mb-3 tracking-tighter italic drop-shadow-[0_0_20px_rgba(239,68,68,0.4)]">Sovereignty Status</h2>
            <p className="text-muted-foreground max-w-2xl text-lg font-medium italic">Analyzing core identity, autonomous capabilities, and system essences.</p>
          </div>
          <Button onClick={handleRefresh} disabled={refreshing} className="bg-red-600 hover:bg-red-700 text-white rounded-2xl h-16 px-10 shadow-2xl shadow-red-600/40 transition-all text-[11px] font-bold uppercase tracking-[0.4em]">
            {refreshing ? <Loader2 className="size-5 animate-spin mr-4" /> : <RefreshCcw className="size-5 mr-4" />}
            Harvest Assets
          </Button>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-16 relative z-10">
          {[
            { label: "AI Identity", value: identity?.version || "v19.0", icon: Skull, status: "ELITE", color: "text-red-500" },
            { label: "Knowledge Essence", value: "Neural Vault", icon: Database, status: "SYNCED", color: "text-amber-500" },
            { label: "Strike Vector", value: "3000+ Tools", icon: Flame, status: "ARMED", color: "text-orange-500" },
            { label: "Survival Core", value: "Ark v3", icon: Anchor, status: "SECURED", color: "text-blue-500" },
          ].map((stat, i) => (
            <Card key={i} className="glass-card group hover:border-red-600/40 transition-all cursor-crosshair rounded-[2.5rem] shadow-2xl overflow-hidden relative">
              <div className="absolute inset-0 bg-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardContent className="p-8 relative z-10">
                <div className="flex justify-between items-start mb-8">
                  <div className={cn("p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-red-600/20 transition-colors")}>
                    <stat.icon className={cn("size-7", stat.color)} />
                  </div>
                  <Badge variant="outline" className="bg-red-600/5 border-red-500/20 text-[9px] tracking-[0.2em] px-3 uppercase">{stat.status}</Badge>
                </div>
                <div className="text-3xl font-bold text-white tracking-tighter mb-1 uppercase italic">{stat.value}</div>
                <div className="text-[10px] text-muted-foreground font-bold uppercase tracking-[0.4em]">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 relative z-10">
          <div className="lg:col-span-2 space-y-10">
            <Card className="glass-card border-red-600/20 overflow-hidden rounded-[3.5rem] shadow-2xl">
              <CardHeader className="bg-red-950/20 border-b border-red-600/20 p-10">
                <CardTitle className="text-3xl text-white flex items-center gap-6 italic tracking-tighter uppercase">
                  <Layers className="size-8 text-red-600" /> System Essence Analysis
                </CardTitle>
                <CardDescription className="text-red-500/60 font-bold uppercase tracking-[0.4em] mt-2">Analysis of Al-Mu'izz Core Components</ウエスト>
              </CardHeader>
              <CardContent className="p-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   {[
                     { title: "Nervous System", desc: identity?.essence?.nervous_system, icon: Brain },
                     { title: "Muscle Hub", desc: identity?.essence?.muscles, icon: Zap },
                     { title: "Memory Crypt", desc: identity?.essence?.memory, icon: Database },
                     { title: "Survival Protocol", desc: identity?.essence?.survival, icon: Anchor }
                   ].map((ess, i) => (
                     <div key={i} className="p-8 rounded-[2.5rem] bg-black/60 border border-white/5 group hover:border-red-600/40 transition-all relative overflow-hidden">
                        <div className="flex items-center gap-5 mb-4">
                           <div className="size-12 rounded-2xl bg-red-600/10 flex items-center justify-center border border-red-500/20 group-hover:scale-110 transition-transform">
                              <ess.icon className="size-5 text-red-500" />
                           </div>
                           <span className="text-lg font-bold text-white italic uppercase tracking-tighter">{ess.title}</span>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed italic">{ess.desc}</p>
                        <div className="mt-6 flex gap-2">
                           <Badge className="bg-red-600/10 text-red-500 text-[8px] uppercase tracking-widest px-2">V19_Elite</Badge>
                           <Badge className="bg-emerald-500/10 text-emerald-500 text-[8px] uppercase tracking-widest px-2">Active</Badge>
                        </div>
                     </div>
                   ))}
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card border-red-600/30 bg-red-950/5 relative overflow-hidden group rounded-[3.5rem] shadow-2xl">
               <CardHeader className="p-10">
                 <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6">
                       <div className="size-16 rounded-[2rem] bg-red-600/20 flex items-center justify-center border border-red-600/40">
                          <Binary className="size-9 text-red-600" />
                       </div>
                       <div>
                          <CardTitle className="text-3xl text-white italic tracking-tighter uppercase">Capability Matrix</CardTitle>
                          <CardDescription className="text-red-500 font-bold text-[11px] uppercase tracking-[0.5em] mt-2">Autonomous Strike Readiness</CardDescription>
                       </div>
                    </div>
                 </div>
               </CardHeader>
               <CardContent className="p-10 pt-0">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                     {identity?.capabilities && Object.entries(identity.capabilities).map(([key, val]: any) => (
                       <div key={key} className="p-4 rounded-2xl bg-black border border-white/5 text-center group hover:border-red-600/30 transition-all">
                          <div className="text-[9px] text-muted-foreground uppercase font-bold tracking-widest mb-1">{key.replace(/_/g, ' ')}</div>
                          <div className="text-xs font-code text-red-500 font-bold uppercase">{val}</div>
                       </div>
                     ))}
                  </div>
               </CardContent>
            </Card>
          </div>

          <div className="space-y-10">
            <Card className="glass-card border-red-600/20 h-fit rounded-[3rem] shadow-2xl">
              <CardHeader className="bg-red-600/5 border-b border-red-500/10 p-10">
                <CardTitle className="text-2xl text-white flex items-center gap-4 italic tracking-tighter uppercase">
                  <ShieldCheck className="size-6 text-red-600" /> Identity Manifest
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                <div className="p-6 rounded-[2rem] bg-black/60 border border-white/5 space-y-4">
                   <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                      <span>Codename</span>
                      <span className="text-white italic">{identity?.codename}</span>
                   </div>
                   <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                      <span>Clearance</span>
                      <Badge className="bg-red-600 text-white text-[9px]">{identity?.clearance}</Badge>
                   </div>
                   <div className="pt-4 border-t border-white/5">
                      <p className="text-[11px] text-red-500 font-bold uppercase tracking-[0.2em] mb-2 italic">Motto:</p>
                      <p className="text-sm text-white italic leading-relaxed">"{identity?.motto}"</p>
                   </div>
                </div>
                
                <div className="space-y-3">
                   <h4 className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.4em] px-2 italic">Active Roles</h4>
                   <div className="flex flex-wrap gap-2 px-1">
                      {identity?.roles?.map((role: string, i: number) => (
                        <Badge key={i} variant="outline" className="text-[8px] border-red-600/20 text-red-400 bg-red-600/5 py-1 px-3 rounded-lg uppercase">{role}</Badge>
                      ))}
                   </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card border-red-600/40 bg-red-600/5 rounded-[3rem] p-4 shadow-2xl">
               <CardHeader className="p-8 pb-4">
                 <CardTitle className="text-white text-[11px] uppercase tracking-[0.6em] opacity-40 flex items-center gap-4 font-bold italic">
                    <Fingerprint className="size-5 text-red-600" /> Core Authentication
                 </CardTitle>
               </CardHeader>
               <CardContent className="p-8 pt-0">
                  <Button className="w-full h-14 bg-red-600 hover:bg-red-700 text-white rounded-2xl font-bold uppercase tracking-[0.4em] text-[10px] shadow-2xl">
                    Update Sovereign Core
                  </Button>
               </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}