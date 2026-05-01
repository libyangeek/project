"use client"

import * as React from "react"
import { SidebarNav } from "@/components/platform/sidebar-nav"
import { 
  Activity, 
  Cpu, 
  Database, 
  HardDrive, 
  Network, 
  ShieldCheck, 
  Zap,
  RefreshCcw,
  CheckCircle2,
  AlertCircle,
  Smartphone,
  Globe,
  Lock,
  Loader2
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function SystemPage() {
  const [refreshing, setRefreshing] = React.useState(false)

  const handleRefresh = () => {
    setRefreshing(true)
    setTimeout(() => setRefreshing(false), 2000)
  }

  return (
    <div className="flex min-h-screen bg-black">
      <SidebarNav />
      <main className="flex-1 ml-64 p-8 bg-[radial-gradient(circle_at_bottom_left,rgba(170,76,255,0.03),transparent)]">
        <header className="flex justify-between items-center mb-8">
          <div className="animate-in fade-in slide-in-from-left-4 duration-500">
            <h2 className="text-4xl font-headline font-bold text-white mb-2 tracking-tight">Platform Integrity</h2>
            <p className="text-muted-foreground font-medium">Real-time status of Al-Mu'izz sovereign engine and peripheral nodes.</p>
          </div>
          <Button onClick={handleRefresh} disabled={refreshing} variant="outline" className="border-white/10 bg-white/5 rounded-xl h-12 px-6">
            {refreshing ? <Loader2 className="size-4 mr-2 animate-spin" /> : <RefreshCcw className="size-4 mr-2" />}
            Resync Diagnostics
          </Button>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { label: "Uptime", value: "142d 03h", icon: Activity, status: "Normal", color: "text-emerald-500" },
            { label: "Core Temp", value: "32°C", icon: Zap, status: "Optimal", color: "text-blue-500" },
            { label: "Active Probes", value: "482", icon: Network, status: "Sovereign", color: "text-primary" },
            { label: "Neural Load", value: "92%", icon: Cpu, status: "High", color: "text-amber-500" },
          ].map((stat, i) => (
            <Card key={i} className="glass-card group hover:border-primary/30 transition-all">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-primary/20 transition-colors">
                    <stat.icon className={cn("size-6", stat.color)} />
                  </div>
                  <Badge variant="outline" className="bg-white/5 border-white/10 text-[10px] tracking-tighter">{stat.status}</Badge>
                </div>
                <div className="text-3xl font-bold text-white tracking-tighter mb-1">{stat.value}</div>
                <div className="text-[10px] text-muted-foreground font-bold uppercase tracking-[0.2em]">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="glass-card lg:col-span-2 border-primary/20">
            <CardHeader className="bg-white/5 border-b border-white/5">
              <CardTitle className="text-white flex items-center gap-3">
                <Cpu className="size-5 text-primary" />
                Neural Processing Grid (NPU)
              </CardTitle>
              <CardDescription>Model inference and routing workload orchestration</CardDescription>
            </CardHeader>
            <CardContent className="p-8 space-y-8">
              {[
                { name: "Al-Mu'izz Core (Qwen-3)", usage: 42, status: "Operational", color: "bg-emerald-500" },
                { name: "DeepSeek Coder v2", usage: 12, status: "Standby", color: "bg-blue-500" },
                { name: "WhiteRabbitNeo (Attack)", usage: 88, status: "High Load", color: "bg-red-500" },
                { name: "Neural Router v17.2", usage: 65, status: "Optimized", color: "bg-primary" }
              ].map((node, i) => (
                <div key={i} className="space-y-3">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className={cn("size-1.5 rounded-full animate-pulse", node.color)} />
                      <span className="text-sm font-bold text-white uppercase tracking-tight">{node.name}</span>
                    </div>
                    <span className="text-xs font-code text-muted-foreground font-bold">{node.usage}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className={cn("h-full transition-all duration-1000", node.color)} style={{ width: `${node.usage}%` }} />
                  </div>
                  <div className="flex justify-between text-[8px] text-muted-foreground uppercase font-bold tracking-widest">
                    <span>Status: {node.status}</span>
                    <span>{node.usage > 80 ? "Scaling Required" : "Stable Node"}</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="glass-card border-emerald-500/20">
            <CardHeader className="bg-white/5 border-b border-white/5">
              <CardTitle className="text-white flex items-center gap-3">
                <Lock className="size-5 text-emerald-500" />
                Security Pulse
              </CardTitle>
              <CardDescription>Latest system integrity events</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                {[
                  { event: "Global Knowledge re-indexed", time: "2m ago", type: "success" },
                  { event: "Shadow Link Node #42 active", time: "15m ago", type: "success" },
                  { event: "Unauthorized API attempt nullified", time: "1h ago", type: "warning" },
                  { event: "System kernel updated to v17.2", time: "1d ago", type: "success" }
                ].map((log, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-xl bg-black/40 border border-white/5 group hover:border-emerald-500/30 transition-all">
                    {log.type === 'success' ? (
                      <CheckCircle2 className="size-4 text-emerald-500 mt-0.5 shrink-0" />
                    ) : (
                      <AlertCircle className="size-4 text-amber-500 mt-0.5 shrink-0" />
                    )}
                    <div className="flex-1">
                      <p className="text-xs text-white font-bold tracking-tight mb-1">{log.event}</p>
                      <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-tighter">{log.time}</span>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="ghost" className="w-full mt-6 text-[10px] uppercase font-bold tracking-widest text-primary hover:text-primary hover:bg-primary/10">
                View Operational Logs
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
