"use client"

import * as React from "react"
import Link from "next/link"
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
  ArrowRight,
  Terminal as TerminalIcon,
  Search,
  Database
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
            <div className="flex items-center gap-2 mb-1">
              <Badge className="bg-primary/20 text-primary border-primary/30 text-[10px] px-2 py-0">v17.0.0 GOLDEN</Badge>
              <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">Al-Mu'izz OS Active</span>
            </div>
            <h2 className="text-4xl font-headline font-bold text-white mb-2 tracking-tighter italic">Operational Command</h2>
            <p className="text-muted-foreground">Welcome back, Administrator. Neural Core integrity at 99.8%.</p>
          </div>
          <div className="flex gap-4">
            <Badge variant="outline" className="bg-emerald-500/10 text-emerald-500 border-emerald-500/20 py-1.5 px-3">
              <ShieldCheck className="size-4 mr-2" />
              Sovereign Protocol Active
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
            { label: "Neural Nodes", value: "64", icon: Globe, trend: "+12" },
            { label: "NPU Load", value: "18%", icon: Cpu, trend: "Optimal" },
            { label: "Vault Key", value: "RSA-8K", icon: Lock, trend: "Quantum" },
            { label: "Data Ingest", value: "8.4 TB/d", icon: Activity, trend: "Surge" },
          ].map((stat, i) => (
            <Card key={i} className="glass-card group hover:border-primary/40 transition-all cursor-crosshair">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 group-hover:bg-primary/20">
                    <stat.icon className="size-5 text-primary" />
                  </div>
                  <span className="text-[10px] font-bold text-emerald-500">{stat.trend}</span>
                </div>
                <div className="text-2xl font-bold text-white tracking-tighter">{stat.value}</div>
                <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Monitor */}
          <div className="lg:col-span-2 space-y-8">
            <Card className="glass-card overflow-hidden border-primary/10">
              <CardHeader className="bg-white/5 border-b border-white/5">
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle className="text-white flex items-center gap-2">
                      <Wifi className="size-4 text-primary animate-pulse" />
                      Live Engagement Monitor
                    </CardTitle>
                    <CardDescription>Packet analysis and autonomous threat mitigation</CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Badge className="bg-emerald-500/20 text-emerald-500">AES-256-GCM</Badge>
                    <Button variant="outline" size="sm" className="bg-white/5 border-white/10 hover:bg-white/10 h-7 text-[10px]">
                      LIVE FEED
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="aspect-video bg-black/60 relative flex items-center justify-center group">
                  <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
                    backgroundSize: '24px 24px'
                  }}></div>
                  <div className="relative z-10 text-center">
                    <div className="flex gap-1.5 justify-center mb-6">
                      {[60, 80, 40, 95, 70, 110, 50, 90, 65, 100].map((h, i) => (
                        <div 
                          key={i} 
                          className="w-3 bg-primary/80 rounded-full animate-pulse shadow-[0_0_10px_rgba(170,76,255,0.4)]" 
                          style={{ height: h, animationDelay: `${i * 0.08}s` }}
                        />
                      ))}
                    </div>
                    <p className="font-code text-primary text-xs tracking-widest animate-pulse font-bold">AL-MUIZZ NEURAL SCAN IN PROGRESS...</p>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between text-[8px] font-code text-muted-foreground uppercase">
                    <span>Lat: 24.7136° N</span>
                    <span>Long: 46.6753° E</span>
                    <span>Target: 0x88.42.11.9</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-white text-lg flex items-center gap-2">
                    <AlertTriangle className="size-5 text-amber-500" />
                    Strategic Advisories
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    "CVE-2025-4664 patched on internal nodes",
                    "Shadow Agent #14 established persistence",
                    "OSINT Probe: 4.2M records indexed in Vault"
                  ].map((note, i) => (
                    <div key={i} className="flex gap-3 text-sm border-b border-white/5 pb-3 last:border-0 last:pb-0 group">
                      <div className="size-2 mt-1.5 rounded-full bg-primary shrink-0 group-hover:animate-ping" />
                      <p className="text-muted-foreground group-hover:text-white transition-colors">{note}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-white text-lg flex items-center gap-2">
                    <Activity className="size-5 text-primary" />
                    Resource Allocation
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <div className="flex justify-between text-[10px] font-bold mb-2 uppercase text-muted-foreground">
                      <span>Neural Engine</span>
                      <span className="text-primary">92%</span>
                    </div>
                    <Progress value={92} className="h-1 bg-white/5" />
                  </div>
                  <div>
                    <div className="flex justify-between text-[10px] font-bold mb-2 uppercase text-muted-foreground">
                      <span>Shadow Bandwidth</span>
                      <span className="text-primary">45%</span>
                    </div>
                    <Progress value={45} className="h-1 bg-white/5" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Sidebar Modules */}
          <div className="space-y-6">
            <Card className="glass-card bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="text-white">Al-Mu'izz Quick Strike</CardTitle>
                <CardDescription className="text-primary/70">Instant Offensive Deployment</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button asChild className="w-full justify-between bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 h-12">
                  <Link href="/recon">
                    <div className="flex items-center gap-2">
                      <Search className="size-4" />
                      Deploy OSINT Probe
                    </div>
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full justify-between border-white/10 hover:bg-white/5 h-12">
                  <Link href="/red-team">
                    <div className="flex items-center gap-2">
                      <Zap className="size-4 text-primary" />
                      Launch Shadow RAT
                    </div>
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full justify-between border-white/10 hover:bg-white/5 h-12">
                  <Link href="/terminal">
                    <div className="flex items-center gap-2">
                      <TerminalIcon className="size-4 text-primary" />
                      Universal Parser
                    </div>
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full justify-between border-white/10 hover:bg-white/5 h-12">
                  <Link href="/knowledge">
                    <div className="flex items-center gap-2">
                      <Database className="size-4 text-primary" />
                      Neural Memory
                    </div>
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="glass-card border-white/5 bg-black/40">
              <CardHeader className="pb-2">
                <CardTitle className="text-white text-xs uppercase tracking-widest opacity-50">System Manifest</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-black/60 rounded-lg p-4 font-code text-[10px] text-primary/80 leading-relaxed border border-white/5">
                  {`{
  "os": "Al-Mu'izz Sovereign",
  "version": "17.0.0-GOLDEN",
  "kernel": "X-99-Neural",
  "status": "SUPREME",
  "modules": [
    "HexStrike_v2",
    "ChromSploit_v3",
    "Shadow_C2",
    "DeepEye_AI"
  ],
  "enc": "AES-8192-Quantum"
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
