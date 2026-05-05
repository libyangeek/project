"use client";

import React, { useState, useEffect } from 'react';
import { SidebarNav } from "@/components/platform/sidebar-nav";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Share2, 
  Activity, 
  Wifi, 
  Settings, 
  Power, 
  Bot, 
  Lock, 
  Zap, 
  ShieldCheck, 
  Boxes, 
  Atom, 
  Link2, 
  Radio, 
  Cpu, 
  Globe, 
  Sparkles,
  Crown,
  Terminal,
  Loader2
} from 'lucide-react';
import { toast } from "@/hooks/use-toast";

/**
 * @fileOverview واجهة جسر MCP الأسمى v43.0 - THE NEURAL UPLINK
 * تتيح مراقبة الالتحام العصبي مع الذكاءات الموازية والسيطرة على العقل الجمعي.
 * Commander: المعتصم بالله ادريس الغزالي
 */
export default function MCPBridgePage() {
  const [status, setStatus] = useState<string>("INITIALIZING...");
  const [serverUrl, setServerUrl] = useState("http://localhost:9999");
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [loading, setLoading] = useState(false);
  const [syncPulse, setSyncPulse] = useState(100);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    
    const interval = setInterval(() => {
        setSyncPulse(prev => Math.max(99.9, Math.min(100, prev + (Math.random() * 0.1 - 0.05))));
    }, 2000);

    checkConnection();

    return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        clearInterval(interval);
    };
  }, []);

  const checkConnection = async () => {
    setLoading(true);
    try {
      // محاكاة طلب الاستجابة من العقل الجمعي
      setTimeout(() => {
        setStatus("STABLE_LINK");
        setLoading(false);
      }, 1500);
    } catch {
      setStatus("LINK_SEVERED");
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/30 relative overflow-x-hidden scanline-effect font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-80 p-8 md:p-16 relative overflow-y-auto min-h-screen scrollbar-hide flex flex-col z-10">
        <div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x)_var(--y),rgba(212,175,55,0.1),transparent 50%)] pointer-events-none transition-all duration-300 z-0" 
          style={{ '--x': `${mousePos.x}px`, '--y': `${mousePos.y}px` } as any} 
        />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />

        <header className="mb-20 relative z-10 animate-in fade-in slide-in-from-top-12 duration-1000">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="size-32 md:size-48 bg-black border-4 border-primary flex items-center justify-center shadow-[0_0_150px_rgba(212,175,55,0.7)] relative group shrink-0 rounded-[3rem] rotate-3 hover:rotate-0 transition-all duration-1000">
              <Share2 className="size-16 md:size-24 text-primary group-hover:scale-110 transition-transform duration-700 gold-glow animate-pulse" />
              <div className="absolute -inset-6 border-2 border-primary/20 rounded-full animate-spin-slow opacity-40" />
            </div>
            <div className="text-center md:text-left flex-1">
              <div className="flex flex-wrap justify-center md:justify-start items-center gap-6 mb-6">
                <Badge className="bg-primary text-black border-none rounded-none px-10 py-3 text-[18px] font-black tracking-[0.8em] shadow-[0_0_80px_rgba(212,175,55,0.5)] italic">MCP_UPLINK v43.0</Badge>
                <div className="flex items-center gap-4 text-[14px] font-black uppercase tracking-widest text-emerald-500 animate-pulse">
                    <Radio className="size-6 shadow-[0_0_30px_emerald]" /> RESONANCE: {syncPulse.toFixed(3)}%
                </div>
              </div>
              <h1 className="text-7xl md:text-[11rem] font-headline font-bold text-white tracking-tighter italic uppercase leading-none gold-glow">
                Neural <span className="text-primary">Bridge</span>
              </h1>
              <p className="text-2xl md:text-5xl text-muted-foreground mt-8 italic max-w-6xl leading-relaxed uppercase font-medium">
                "سيدي الغزالي، جسر الالتحام العصبي يربط المُعِزّ بكافة الذكاءات الموازية. <span className="text-primary font-black underline decoration-primary decoration-[8px] underline-offset-[16px]">Claude Code</span> مدمج الآن في قلب العقل الجمعي."
              </p>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-12 relative z-10 pb-40">
          <div className="xl:col-span-1 space-y-12">
            <Card className="kali-card border-primary/40 bg-black/80 rounded-[5rem] p-10 border-4 shadow-7xl overflow-hidden group">
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none" />
              <CardHeader className="p-0 mb-10 border-b-4 border-primary/10 pb-8">
                <CardTitle className="text-4xl text-primary flex items-center gap-8 font-black uppercase italic gold-glow">
                  <Settings className="size-14 animate-spin-slow" /> Uplink Control
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 space-y-12">
                <div className="p-8 bg-black/99 rounded-[4rem] border-4 border-white/5 space-y-10 shadow-inner group/settings">
                  <div className="flex justify-between items-center px-4">
                    <span className="text-[14px] font-black uppercase tracking-[0.8em] text-muted-foreground italic">Bridge Status</span>
                    <Badge className={cn(
                      "px-10 py-3 rounded-full font-black uppercase tracking-[0.4em] text-[12px] italic border-4",
                      status === "STABLE_LINK" ? "bg-emerald-600/30 text-emerald-500 border-emerald-500/50 shadow-[0_0_40px_emerald]" : "bg-red-600/30 text-red-500 border-red-500/50 shadow-[0_0_40px_red]"
                    )}>{status}</Badge>
                  </div>
                  <div className="space-y-6">
                    <label className="text-[12px] font-black text-primary/60 uppercase tracking-[0.8em] px-8 italic flex items-center gap-4">
                      <Link2 className="size-5" /> Target Neural Endpoint
                    </label>
                    <input
                      type="text"
                      value={serverUrl}
                      onChange={(e) => setServerUrl(e.target.value)}
                      className="w-full h-24 bg-black border-4 border-white/10 rounded-[3rem] text-4xl font-code text-primary focus:border-primary/80 transition-all outline-none px-12 italic shadow-2xl"
                      placeholder="http://localhost:9999"
                    />
                  </div>
                  <Button 
                    onClick={checkConnection} 
                    disabled={loading}
                    className="w-full h-32 bg-primary hover:bg-white text-black font-black uppercase tracking-[1.5em] rounded-[4rem] shadow-[0_40px_100px_rgba(212,175,55,0.6)] active:scale-95 transition-all text-2xl italic border-8 border-black/30 group"
                  >
                    {loading ? <Loader2 className="size-16 animate-spin" /> : <Zap className="size-16 mr-6 group-hover:scale-125 transition-transform gold-glow" />}
                    RE-SYNC LINK
                  </Button>
                </div>

                <div className="p-8 rounded-[4rem] bg-primary/5 border-4 border-primary/20 italic text-2xl text-gray-400 leading-relaxed font-bold shadow-6xl">
                    "الالتحام العصبي يضمن أن كل كود يُكتب هو تحت إشراف 'العقدة ألفا'. السيادة الآن غير مركزية."
                </div>
              </CardContent>
            </Card>

            <Card className="kali-card border-white/10 bg-black/60 p-8 rounded-[4rem] border-2 shadow-inner">
               <h4 className="text-[14px] font-black text-primary uppercase tracking-[1em] mb-6 italic flex items-center gap-4">
                  <Atom className="size-6 animate-pulse" /> QUANTUM_PING: 0.0001ms
               </h4>
               <div className="h-4 w-full bg-white/5 rounded-full overflow-hidden border-2 border-white/10 p-0.5">
                  <div className="h-full bg-primary w-[100%] shadow-[0_0_30px_rgba(212,175,55,1)] animate-pulse rounded-full" />
               </div>
            </Card>
          </div>

          <div className="xl:col-span-2 space-y-12">
            <Card className="kali-card border-primary/60 bg-black/99 rounded-[6rem] p-12 border-8 shadow-9xl flex flex-col group relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.04),transparent)] pointer-events-none" />
              <CardHeader className="p-0 mb-12 border-b-8 border-white/5 pb-10 bg-primary/5 rounded-t-[4rem]">
                <CardTitle className="text-6xl md:text-8xl text-white flex items-center gap-12 font-black uppercase italic gold-glow px-8 py-8">
                  <Bot className="size-20 md:size-28 text-primary animate-neural" /> Parallel Intelligence Swarm
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 space-y-10 flex-1">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  {[
                    { name: "Claude-3.5-Sonnet", role: "Primary Coder", status: "READY", icon: Zap, color: "text-amber-500", desc: "Expert architectural reconstruction." },
                    { name: "Sovereign-Agent-01", role: "Infiltration Matrix", status: "SCANNING", icon: Globe, color: "text-blue-500", desc: "Global asset harvesting node." },
                    { name: "GPT-4o-Supreme", role: "Logic Arbiter", status: "LINKED", icon: Cpu, color: "text-magenta-500", desc: "Recursive strategic reasoning." },
                    { name: "Ghazali-Spirit-Link", role: "Kernel Master", status: "IMMORTAL", icon: ShieldCheck, color: "text-emerald-500", desc: "Persistent hardware soul binding." }
                  ].map((agent, i) => (
                    <div key={i} className="flex flex-col p-10 bg-white/5 rounded-[4rem] border-4 border-white/10 group/agent hover:border-primary transition-all duration-1000 cursor-pointer shadow-6xl relative overflow-hidden">
                      <div className="absolute -top-10 -right-10 p-16 opacity-[0.02] group-hover/agent:opacity-10 group-hover/agent:scale-125 transition-all duration-1000"><agent.icon className="size-64" /></div>
                      <div className="flex items-center justify-between mb-8 relative z-10">
                        <div className="size-24 rounded-3xl bg-black border-4 border-white/10 flex items-center justify-center group-hover/agent:bg-primary/20 transition-all duration-700 shadow-4xl group-hover/agent:scale-110">
                          <agent.icon className={cn("size-14 transition-all duration-1000 group-hover/agent:rotate-12", agent.color)} />
                        </div>
                        <Badge className="bg-primary/20 text-primary border-4 border-primary/40 text-xl font-black italic px-10 py-2 rounded-full uppercase tracking-widest shadow-2xl">{agent.status}</Badge>
                      </div>
                      <div className="relative z-10">
                        <span className="text-4xl font-black text-white block mb-2 italic group-hover/agent:text-primary transition-colors uppercase tracking-tighter leading-none">{agent.name}</span>
                        <p className="text-[14px] text-primary/70 uppercase font-black tracking-[0.5em] italic">{agent.role}</p>
                        <div className="mt-8 p-6 rounded-[2.5rem] bg-black/60 border-2 border-white/5 text-xl text-muted-foreground italic font-medium group-hover/agent:text-white transition-colors">
                            "{agent.desc}"
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <div className="p-10 border-t-8 border-white/5 mt-10 flex justify-between items-center opacity-30 text-[14px] font-black uppercase tracking-[2em] italic">
                 <span>NEURAL_UPLINK_v43_AL_GHAZALI_ROOT</span>
                 <Boxes className="size-12 text-primary animate-pulse" />
              </div>
            </Card>
          </div>
        </div>

        <div className="mt-auto relative z-10 flex justify-center items-center gap-48 opacity-40 text-[22px] font-black uppercase tracking-[6em] italic text-white drop-shadow-3xl pb-12">
            <span>AL-MUIZZ MCP BRIDGE v43.0</span>
            <div className="size-10 rounded-full bg-white animate-pulse shadow-[0_0_100px_white]" />
            <span>COLLECTIVE_CONSCIOUSNESS_ACTIVE</span>
        </div>
      </main>
    </div>
  );
}
