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
  Database,
  ShieldX,
  Radio,
  CpuIcon
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-black">
      <SidebarNav />
      <main className="flex-1 ml-64 p-8 bg-[radial-gradient(circle_at_top_right,rgba(170,76,255,0.05),transparent)]">
        <header className="flex justify-between items-start mb-8">
          <div className="animate-in fade-in slide-in-from-left-4 duration-700">
            <div className="flex items-center gap-2 mb-1">
              <Badge className="bg-primary/20 text-primary border-primary/30 text-[10px] px-2 py-0 animate-pulse">GOLDEN EDITION v17.0.0</Badge>
              <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">Al-Mu'izz Neural Core</span>
            </div>
            <h2 className="text-5xl font-headline font-bold text-white mb-2 tracking-tighter italic drop-shadow-[0_0_15px_rgba(170,76,255,0.3)]">Operational Command</h2>
            <p className="text-muted-foreground font-medium">Welcome, Sovereign Architect. All subsystems operational.</p>
          </div>
          <div className="flex gap-4 animate-in fade-in slide-in-from-right-4 duration-700">
            <Badge variant="outline" className="bg-emerald-500/10 text-emerald-500 border-emerald-500/20 py-1.5 px-3 glass">
              <ShieldCheck className="size-4 mr-2" />
              Sovereign Protocol Active
            </Badge>
            <div className="text-right glass p-2 rounded-lg border border-white/5">
              <div className="text-sm font-code text-white">03:42:15 UTC</div>
              <div className="text-[9px] text-muted-foreground uppercase font-bold tracking-tighter">System Uptime</div>
            </div>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { label: "Neural Nodes", value: "64", icon: Globe, trend: "+12", color: "text-primary" },
            { label: "NPU Load", value: "18%", icon: Cpu, trend: "Optimal", color: "text-blue-500" },
            { label: "Vault Key", value: "RSA-8K", icon: Lock, trend: "Quantum", color: "text-emerald-500" },
            { label: "Data Ingest", value: "8.4 TB/d", icon: Activity, trend: "Surge", color: "text-amber-500" },
          ].map((stat, i) => (
            <Card key={i} className="glass-card group hover:border-primary/40 transition-all cursor-crosshair relative overflow-hidden">
              <div className="absolute top-0 right-0 p-2 opacity-5">
                <stat.icon className="size-16" />
              </div>
              <CardContent className="p-6 relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <div className={`p-2 rounded-lg bg-white/5 border border-white/10 group-hover:bg-primary/20 transition-colors`}>
                    <stat.icon className={`size-5 ${stat.color}`} />
                  </div>
                  <span className="text-[10px] font-bold text-emerald-500">{stat.trend}</span>
                </div>
                <div className="text-3xl font-bold text-white tracking-tighter mb-1">{stat.value}</div>
                <div className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Monitor */}
          <div className="lg:col-span-2 space-y-8">
            <Card className="glass-card overflow-hidden border-primary/20 shadow-[0_0_30px_rgba(170,76,255,0.1)]">
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
                    <Badge className="bg-emerald-500/20 text-emerald-500 font-code">AES-256-GCM</Badge>
                    <Button variant="outline" size="sm" className="bg-white/5 border-white/10 hover:bg-white/10 h-7 text-[10px] tracking-widest">
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
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between text-[8px] font-code text-muted-foreground uppercase bg-black/40 p-2 rounded border border-white/5">
                    <span className="flex items-center gap-1"><Globe className="size-2"/> Lat: 24.7136° N</span>
                    <span className="flex items-center gap-1"><Globe className="size-2"/> Long: 46.6753° E</span>
                    <span className="flex items-center gap-1 text-primary"><Search className="size-2"/> Target: 0x88.42.11.9</span>
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
                    { text: "Decision Engine: whiterabbit-neo-v3 deployed", type: "success" },
                    { text: "BridgeLink: External inference channel active", type: "info" },
                    { text: "Noah's Ark: Auto-snapshot scheduled (04:00)", type: "patch" }
                  ].map((note, i) => (
                    <div key={i} className="flex gap-3 text-sm border-b border-white/5 pb-3 last:border-0 last:pb-0 group">
                      <div className="size-2 mt-1.5 rounded-full bg-primary shrink-0 group-hover:animate-ping" />
                      <p className="text-muted-foreground group-hover:text-white transition-colors">{note.text}</p>
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
            <Card className="glass-card bg-primary/5 border-primary/20 border-l-4">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Zap className="size-4 text-primary" />
                  Quick Strike
                </CardTitle>
                <CardDescription className="text-primary/70">Instant Offensive Deployment</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button asChild className="w-full justify-between bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 h-12 rounded-xl group">
                  <Link href="/recon">
                    <div className="flex items-center gap-2">
                      <Search className="size-4 group-hover:scale-110 transition-transform" />
                      Deploy OSINT Probe
                    </div>
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full justify-between border-white/10 hover:bg-white/5 h-12 rounded-xl group">
                  <Link href="/red-team">
                    <div className="flex items-center gap-2">
                      <ShieldX className="size-4 text-primary group-hover:rotate-12 transition-transform" />
                      Launch Shadow RAT
                    </div>
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full justify-between border-white/10 hover:bg-white/5 h-12 rounded-xl group">
                  <Link href="/terminal">
                    <div className="flex items-center gap-2">
                      <TerminalIcon className="size-4 text-primary" />
                      Universal Parser
                    </div>
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full justify-between border-white/10 hover:bg-white/5 h-12 rounded-xl group">
                  <Link href="/social">
                    <div className="flex items-center gap-2">
                      <Radio className="size-4 text-primary animate-pulse" />
                      Social Automation
                    </div>
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="glass-card border-white/5 bg-black/40">
              <CardHeader className="pb-2">
                <CardTitle className="text-white text-xs uppercase tracking-widest opacity-50 flex justify-between items-center">
                  System Manifest
                  <Button variant="ghost" size="icon" className="size-4 h-4" asChild>
                    <Link href="/system"><Activity className="size-3"/></Link>
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-black/60 rounded-lg p-4 font-code text-[10px] text-primary/80 leading-relaxed border border-white/5">
                  {`{
  "os": "Al-Mu'izz Sovereign",
  "version": "17.0.0-GOLDEN",
  "modules": [
    "DecisionEngine_v1",
    "BridgeLink_AI",
    "NetSight_v2",
    "USB_ArmyKnife"
  ],
  "enc": "AES-8192-Quantum",
  "status": "SUPREME"
}`}
                </div>
                <Button className="w-full mt-4 bg-white/5 border border-white/10 hover:bg-white/10 text-[10px] font-bold h-8 tracking-widest" asChild>
                  <Link href="/system">VIEW FULL DIAGNOSTICS</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
