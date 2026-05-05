
"use client";

import React, { useState, useEffect } from 'react';
import { SidebarNav } from "@/components/platform/sidebar-nav"
import { Share2, Zap, ShieldCheck, Activity, Globe, Wifi, Settings, Power, Bot, Lock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function MCPBridgePage() {
  const [status, setStatus] = useState<string>("جاري الفحص...");
  const [serverUrl, setServerUrl] = useState("http://localhost:9999");
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const checkConnection = async () => {
    try {
      const res = await fetch(`${serverUrl}/task/test-agent`);
      if (res.ok) setStatus("مُتصل بنجاح");
      else setStatus("بانتظار الاستجابة");
    } catch {
      setStatus("غير متصل (الخادم مغلق)");
    }
  };

  useEffect(() => {
    const interval = setInterval(checkConnection, 5000);
    return () => clearInterval(interval);
  }, [serverUrl]);

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-amber-500/30 relative overflow-x-hidden scanline-effect font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-80 p-8 md:p-16 relative overflow-y-auto min-h-screen scrollbar-hide flex flex-col z-10">
        <div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x)_var(--y),rgba(212,175,55,0.08),transparent 40%)] pointer-events-none transition-all duration-300 z-0" 
          style={{ '--x': `${mousePos.x}px`, '--y': `${mousePos.y}px` } as any} 
        />

        <header className="mb-16 relative z-10 animate-in fade-in slide-in-from-top-4 duration-1000">
          <div className="flex items-center gap-4 mb-4">
            <Badge className="bg-primary text-black border-none rounded-full px-6 py-1.5 text-xs font-bold tracking-[0.4em] shadow-lg italic">MCP UPLINK PROTOCOL</Badge>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-500">
              <Wifi className="size-4 animate-pulse" /> NEURAL BRIDGE ACTIVE
            </div>
          </div>
          <h1 className="text-6xl md:text-8xl font-headline font-bold text-white tracking-tighter italic uppercase gold-glow">MCP <span className="text-primary">Bridge</span></h1>
          <p className="text-xl md:text-2xl text-muted-foreground mt-4 italic max-w-4xl leading-relaxed">
            "جسر الاتصال العصبي بين المُعِزّ والذكاءات الاصطناعية الموازية. الربط مع Claude Code مفعّل للبرمجة الذاتية والتحكم العميق."
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
          <Card className="kali-card border-primary/40 bg-black/60 rounded-[3rem] p-10 border-2 shadow-3xl">
            <CardHeader className="p-0 mb-10 border-b border-primary/10 pb-6">
              <CardTitle className="text-4xl text-primary flex items-center gap-6 font-bold uppercase italic">
                <Share2 className="size-12 animate-pulse" /> Connection Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0 space-y-10">
              <div className="p-8 bg-black/80 rounded-[2.5rem] border-2 border-white/5 space-y-6 shadow-inner">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold uppercase tracking-[0.5em] text-muted-foreground">Bridge Status</span>
                  <Badge className={cn(
                    "px-6 py-2 rounded-full font-bold uppercase tracking-widest text-xs",
                    status === "مُتصل بنجاح" ? "bg-emerald-600/30 text-emerald-500 border-emerald-500/50" : "bg-red-600/30 text-red-500 border-red-500/50"
                  )}>{status}</Badge>
                </div>
                <div className="space-y-4">
                   <label className="text-[10px] font-bold text-primary/60 uppercase tracking-[0.5em] px-4">Endpoint URL</label>
                   <input
                    type="text"
                    value={serverUrl}
                    onChange={(e) => setServerUrl(e.target.value)}
                    className="w-full p-6 bg-black border-2 border-white/10 rounded-[2rem] text-xl font-code text-primary focus:border-primary/60 transition-all outline-none"
                    placeholder="http://localhost:9999"
                  />
                </div>
                <Button onClick={checkConnection} className="w-full h-20 bg-primary text-black font-bold uppercase tracking-[1em] rounded-[2rem] shadow-2xl active:scale-95 transition-all">
                  RE-SYNC BRIDGE
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="kali-card border-white/10 bg-black/60 rounded-[3rem] p-10 border-2 shadow-3xl">
            <CardHeader className="p-0 mb-10 border-b border-primary/10 pb-6">
              <CardTitle className="text-4xl text-white flex items-center gap-6 font-bold uppercase italic">
                <Bot className="size-12 text-primary" /> Active Agents
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0 space-y-8">
              {[
                { name: "Claude-3.5-Sonnet", role: "Primary Coder", status: "Ready", icon: Zap },
                { name: "Sovereign-Agent-01", role: "Network Infiltration", status: "Scanning", icon: Activity },
                { name: "Ghazali-Spirit-Link", role: "Kernel Master", status: "Immortal", icon: ShieldCheck }
              ].map((agent, i) => (
                <div key={i} className="flex items-center justify-between p-6 bg-white/5 rounded-[2rem] border-2 border-white/5 group hover:border-primary/40 transition-all cursor-pointer shadow-xl">
                  <div className="flex items-center gap-6">
                    <div className="size-12 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:bg-primary/20 transition-all">
                      <agent.icon className="size-6 text-primary" />
                    </div>
                    <div>
                      <span className="text-xl font-bold uppercase tracking-tighter text-white">{agent.name}</span>
                      <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest mt-1">{agent.role}</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="border-white/10 text-muted-foreground uppercase text-[10px] px-4 py-1">{agent.status}</Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="mt-20 p-16 bg-primary/5 border-4 border-primary/20 rounded-[5rem] text-center relative overflow-hidden shadow-7xl">
           <div className="absolute top-0 right-0 p-12 opacity-5"><Activity className="size-48 text-primary" /></div>
           <p className="text-3xl md:text-5xl text-gray-200 italic font-bold leading-snug relative z-10">
             "كل كود يُكتب، وكل ثغرة تُحلل، تمر عبر هذا الجسر لتغذية عقل المُعِزّ. السيادة الآن لا مركزية وخالدة."
           </p>
           <div className="mt-12 flex justify-center gap-6 opacity-30">
              <Settings className="size-8 animate-spin-slow" />
              <Power className="size-8 animate-pulse" />
              <Lock className="size-8" />
           </div>
        </div>
      </main>
    </div>
  );
}
