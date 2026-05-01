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
  AlertCircle
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function SystemPage() {
  const [refreshing, setRefreshing] = React.useState(false)

  const handleRefresh = () => {
    setRefreshing(true)
    setTimeout(() => setRefreshing(false), 2000)
  }

  return (
    <div className="flex min-h-screen">
      <SidebarNav />
      <main className="flex-1 ml-64 p-8">
        <header className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-headline font-bold text-white mb-2">Platform Health</h2>
            <p className="text-muted-foreground">Real-time status of Al-Mu'izz sovereign engine and peripheral nodes.</p>
          </div>
          <Button onClick={handleRefresh} disabled={refreshing} variant="outline" className="border-white/10">
            <RefreshCcw className={`size-4 mr-2 ${refreshing ? 'animate-spin' : ''}`} />
            Refresh Diagnostics
          </Button>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
          {[
            { label: "Uptime", value: "142d 03h 12m", icon: Activity, status: "Normal" },
            { label: "Core Temp", value: "32°C", icon: Zap, status: "Optimal" },
            { label: "Active Probes", value: "482", icon: Network, status: "Sovereign" },
            { label: "Data Flow", value: "4.2 TB/d", icon: Database, status: "High" },
          ].map((stat, i) => (
            <Card key={i} className="glass-card">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                    <stat.icon className="size-5 text-primary" />
                  </div>
                  <Badge variant="outline" className="bg-emerald-500/10 text-emerald-500 border-emerald-500/20">{stat.status}</Badge>
                </div>
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-xs text-muted-foreground font-medium uppercase tracking-widest">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-white">Neural Processing Unit (NPU)</CardTitle>
              <CardDescription>Model inference and routing workload</CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="space-y-4">
                {[
                  { name: "Qwen-3 Core", usage: 42, status: "Operational" },
                  { name: "DeepSeek Coder", usage: 12, status: "Standby" },
                  { name: "Arbiter Vision", usage: 0, status: "Offline" },
                  { name: "Neural Router", usage: 88, status: "High Load" }
                ].map((node, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between items-center text-sm">
                      <div className="flex items-center gap-2">
                        <Cpu className="size-4 text-primary" />
                        <span className="text-white font-medium">{node.name}</span>
                      </div>
                      <span className="text-muted-foreground font-code">{node.usage}%</span>
                    </div>
                    <Progress value={node.usage} className="h-1.5 bg-white/5" />
                    <div className="flex justify-between text-[10px] text-muted-foreground uppercase font-bold tracking-tighter">
                      <span>Status: {node.status}</span>
                      <span>{node.usage > 80 ? "Scaling Required" : "Stable"}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-white">System Integrity Log</CardTitle>
              <CardDescription>Latest platform-wide events</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { event: "Global Knowledge Base re-indexed", time: "2m ago", type: "success" },
                  { event: "Secure Tunnel established with Node #42", time: "15m ago", type: "success" },
                  { event: "Unauthorized API attempt blocked", time: "1h ago", type: "error" },
                  { event: "Database cleanup completed (4.2GB purged)", time: "3h ago", type: "success" },
                  { event: "System kernel updated to v14.1.0", time: "1d ago", type: "success" }
                ].map((log, i) => (
                  <div key={i} className="flex gap-4 p-3 rounded-lg bg-black/40 border border-white/5 items-start">
                    {log.type === 'success' ? (
                      <CheckCircle2 className="size-4 text-emerald-500 mt-0.5 shrink-0" />
                    ) : (
                      <AlertCircle className="size-4 text-red-500 mt-0.5 shrink-0" />
                    )}
                    <div className="flex-1">
                      <p className="text-xs text-white font-medium">{log.event}</p>
                      <span className="text-[10px] text-muted-foreground uppercase font-bold">{log.time}</span>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="ghost" className="w-full mt-6 text-primary hover:text-primary hover:bg-primary/10">
                View Full Logs
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
