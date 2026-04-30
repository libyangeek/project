"use client"

import * as React from "react"
import { SidebarNav } from "@/components/platform/sidebar-nav"
import { 
  Zap, 
  ShieldCheck, 
  Globe, 
  Cpu, 
  Wifi, 
  Lock, 
  Activity,
  AlertTriangle,
  ArrowRight
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen">
      <SidebarNav />
      <main className="flex-1 ml-64 p-8">
        <header className="flex justify-between items-start mb-8">
          <div>
            <h2 className="text-3xl font-headline font-bold text-white mb-2">Operational Command</h2>
            <p className="text-muted-foreground">Welcome back, Administrator. Platform integrity at 98.4%.</p>
          </div>
          <div className="flex gap-4">
            <Badge variant="outline" className="bg-emerald-500/10 text-emerald-500 border-emerald-500/20 py-1.5 px-3">
              <ShieldCheck className="size-4 mr-2" />
              Secure Protocol Active
            </Badge>
            <div className="text-right">
              <div className="text-sm font-medium text-white">03:42:15 UTC</div>
              <div className="text-[10px] text-muted-foreground uppercase font-bold">System Uptime</div>
            </div>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { label: "Active Nodes", value: "24", icon: Globe, trend: "+2" },
            { label: "AI Load", value: "42%", icon: Cpu, trend: "Stable" },
            { label: "Encryption", value: "256-bit", icon: Lock, trend: "AES" },
            { label: "Bandwidth", value: "1.2 GB/s", icon: Activity, trend: "High" },
          ].map((stat, i) => (
            <Card key={i} className="glass-card">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                    <stat.icon className="size-5 text-primary" />
                  </div>
                  <span className="text-[10px] font-bold text-emerald-500">{stat.trend}</span>
                </div>
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Monitor */}
          <div className="lg:col-span-2 space-y-8">
            <Card className="glass-card overflow-hidden">
              <CardHeader className="bg-white/5 border-b border-white/5">
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle className="text-white">Active Engagement Monitor</CardTitle>
                    <CardDescription>Real-time traffic analysis and threat detection</CardDescription>
                  </div>
                  <Button variant="outline" size="sm" className="bg-white/5 border-white/10 hover:bg-white/10">
                    Live View
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="aspect-video bg-black/40 relative flex items-center justify-center">
                  <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
                    backgroundSize: '24px 24px'
                  }}></div>
                  <div className="relative z-10 text-center">
                    <div className="flex gap-1 justify-center mb-4">
                      {[40, 60, 30, 80, 50, 90, 40, 70, 45, 85].map((h, i) => (
                        <div 
                          key={i} 
                          className="w-2 bg-primary rounded-full animate-pulse" 
                          style={{ height: h, animationDelay: `${i * 0.1}s` }}
                        />
                      ))}
                    </div>
                    <p className="font-code text-primary text-sm animate-pulse">ANALYZING PACKETS...</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-white text-lg flex items-center gap-2">
                    <AlertTriangle className="size-5 text-amber-500" />
                    Security Advisories
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    "CVE-2025-4664 detected on perimeter",
                    "Unauthorized access attempt blocked (IP: 192.168.1.42)",
                    "Internal health check warning: Storage at 92%"
                  ].map((note, i) => (
                    <div key={i} className="flex gap-3 text-sm border-b border-white/5 pb-3 last:border-0 last:pb-0">
                      <div className="size-2 mt-1.5 rounded-full bg-amber-500 shrink-0" />
                      <p className="text-muted-foreground">{note}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-white text-lg flex items-center gap-2">
                    <Activity className="size-5 text-primary" />
                    System Utilization
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <div className="flex justify-between text-xs font-bold mb-2 uppercase text-muted-foreground">
                      <span>Neural Processing Unit</span>
                      <span>85%</span>
                    </div>
                    <Progress value={85} className="h-1 bg-white/5" />
                  </div>
                  <div>
                    <div className="flex justify-between text-xs font-bold mb-2 uppercase text-muted-foreground">
                      <span>Quantum Memory</span>
                      <span>32%</span>
                    </div>
                    <Progress value={32} className="h-1 bg-white/5" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Sidebar Modules */}
          <div className="space-y-6">
            <Card className="glass-card bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="text-white">Al-Mu'izz Quick Access</CardTitle>
                <CardDescription className="text-primary/70">Autonomous Intelligence Hub</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-between bg-primary hover:bg-primary/90">
                  Deploy OSINT Probe
                  <ArrowRight className="size-4" />
                </Button>
                <Button variant="outline" className="w-full justify-between border-white/10 hover:bg-white/5">
                  Launch Shadow RAT
                  <ArrowRight className="size-4" />
                </Button>
                <Button variant="outline" className="w-full justify-between border-white/10 hover:bg-white/5">
                  Universal Parser
                  <ArrowRight className="size-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="glass-card border-white/5">
              <CardHeader>
                <CardTitle className="text-white text-lg">Platform Manifest</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-black/40 rounded-lg p-4 font-code text-[11px] text-primary leading-relaxed">
                  {`{
  "platform": "Sovereign AI",
  "version": "2025.04.1",
  "codename": "Al-Mu'izz",
  "status": "OPERATIONAL",
  "active_flows": [
    "exploit_gen",
    "social_eng_bot",
    "smart_router"
  ]
}`}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}