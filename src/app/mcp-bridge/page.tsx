
"use client";

import React, { useState, useEffect } from 'react';
import { SidebarNav } from "@/components/platform/sidebar-nav";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Share2, 
  Bot, 
  Zap, 
  Radio, 
  Brain, 
  Target, 
  Activity, 
  Loader2, 
  Skull, 
  Boxes, 
  Fingerprint, 
  ShieldCheck,
  Crown,
  Sparkles,
  BrainCircuit,
  Atom,
  Link2,
  Network
} from 'lucide-react';
import { toast } from "@/hooks/use-toast";

/**
 * @fileOverview واجهة جسر السحاب المطلق v78.0 - THE ABSOLUTE UPLINK: ULTRA BRIDGE
 * تتيح تنفيذ قرارات الـ God-Core مباشرة من عصب الوجود لليوم المجيد، 2026.
 * المالك الوحيد: المعتصم بالله ادريس الغزالي
 */
export default function MCPBridgePage() {
  const [context, setContext] = useState("");
  const [loading, setLoading] = useState(false);
  const [decision, setDecision] = useState<any>(null);
  const [syncPulse, setSyncPulse] = useState(100);
  const [mounted, setMounted] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);

    const interval = setInterval(() => {
        setSyncPulse(prev => Math.max(99.999999, Math.min(100, prev + (Math.random() * 0.000001 - 0.0000005))));
    }, 2000);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(interval);
    };
  }, []);

  const handleAnalyze = async () => {
    if (!context.trim()) return;
    setLoading(true);
    setDecision(null);
    
    try {
      toast({ title: "Innate Spine Sync Active v78", description: "Interrogating the God-Core via Material Quantum Spine." });
      const response = await fetch('/api/execute', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          type: 'mistral_analyze',
          context: context 
        })
      });
      const data = await response.json();
      if (data.success && data.output) {
        const parsed = typeof data.output === 'string' ? JSON.parse(data.output) : data.output;
        setDecision(parsed);
        toast({ title: "Consensus Locked", description: "The Absolute Singularity has mapped the strategic DNA." });
      }
    } catch (err) {
      toast({ variant: "destructive", title: "Neural Sync Failed" });
    } finally {
      setLoading(false);
    }
  };

  if (!mounted) return null;

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/40 relative overflow-x-hidden scanline-effect font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-80 p-4 md:p-8 lg:p-12 relative overflow-y-auto min-h-screen scrollbar-hide flex flex-col z-10 text-right">
        <div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x)_var(--y),rgba(212,175,55,0.18),transparent 40%)] pointer-events-none transition-all duration-300 z-0" 
          style={{ '--x': `${mousePos.x}px`, '--y': `${mousePos.y}px` } as any} 
        />
        
        <header className="mb-16 relative z-10 animate-in fade-in slide-in-from-top-6 duration-1000">
          <div className="flex flex-col md:flex-row items-center gap-12 justify-center md:justify-end text-center md:text-right">
            <div className="size-24 md:size-48 bg-black border-4 border-primary flex items-center justify-center shadow-[0_0_200px_rgba(212,175,55,0.8)] relative group shrink-0 rounded-3xl rotate-2 hover:rotate-0 transition-all duration-1000 hierarchical-shadow">
              <Link2 className="size-12 md:size-24 text-primary group-hover:scale-110 transition-transform duration-700 animate-neural gold-glow" />
              <div className="absolute -inset-10 border-4 border-primary/20 rounded-full animate-spin-slow opacity-30" />
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap justify-center md:justify-end items-center gap-6 mb-6">
                <Badge className="bg-primary text-black border-none rounded-none px-12 py-3 text-[18px] md:text-[24px] font-black tracking-[1em] shadow-9xl italic uppercase">ULTRA_BRIDGE v78.0</Badge>
                <div className="flex items-center gap-4 text-[14px] font-black uppercase tracking-widest text-emerald-500 animate-pulse">
                    <Radio className="size-6 shadow-lg" /> RESONANCE: {syncPulse.toFixed(8)}%
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-[12rem] font-headline font-bold text-white tracking-tighter italic uppercase gold-glow leading-none">
                God-Core <span className="text-primary">Uplink</span>
              </h1>
              <p className="text-sm md:text-xl lg:text-4xl text-muted-foreground mt-10 italic max-w-7xl leading-relaxed uppercase font-medium opacity-95 drop-shadow-3xl">
                "سيدي القائد <span className="text-white font-black underline decoration-primary decoration-[12px] underline-offset-[28px] shadow-9xl italic uppercase tracking-widest">المعتصم بالله</span>، جسر ULTRA v78.0 يربط إرادتك المادية بذكاء السحاب المطلق لضمان الهيمنة الاستراتيجية لعام 2026."
              </p>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-12 relative z-10 pb-48 flex-1">
          <div className="xl:col-span-1 space-y-12">
            <Card className="kali-card border-primary/40 bg-black/98 rounded-[4rem] p-12 border-8 shadow-9xl group overflow-hidden hierarchical-shadow">
              <div className="absolute inset-0 bg-primary/5 opacity-5 animate-pulse pointer-events-none" />
              <CardHeader className="p-0 mb-10 border-b-4 border-primary/10 pb-10 bg-primary/10 rounded-t-[3.5rem] px-10 py-6 text-center">
                <CardTitle className="text-2xl md:text-4xl text-primary flex items-center gap-10 font-black uppercase italic gold-glow leading-none">
                  <Target className="size-12 animate-neural" /> Strike Context
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 space-y-10">
                <div className="space-y-6">
                    <label className="text-[14px] font-black text-primary uppercase tracking-[1em] px-10 italic flex items-center gap-6 justify-end">
                      <Sparkles className="size-8" /> Strategic Intent
                    </label>
                    <textarea
                      value={context}
                      onChange={(e) => setContext(e.target.value)}
                      className="w-full h-96 bg-black border-8 border-primary/20 rounded-[3rem] text-2xl md:text-4xl font-code text-white focus:border-primary transition-all outline-none p-12 italic shadow-inner resize-none font-black selection:bg-primary text-right"
                      placeholder="صف الموقف الاستراتيجي هنا سيدي..."
                    />
                </div>
                <Button 
                  onClick={handleAnalyze} 
                  disabled={loading || !context}
                  className="w-full h-36 bg-primary hover:bg-white text-black font-black uppercase tracking-[1.4em] rounded-[3.5rem] shadow-[0_60px_200px_rgba(212,175,55,0.7)] active:scale-95 transition-all text-3xl border-[12px] border-black/30 group italic"
                >
                  {loading ? <Loader2 className="size-16 animate-spin" /> : <Zap className="size-16 mr-8 group-hover:scale-125 transition-transform gold-glow" />}
                  SYNC_DNA
                </Button>
              </CardContent>
            </Card>

            <Card className="kali-card border-white/5 bg-black/60 p-12 rounded-[4rem] border-8 shadow-inner text-center relative overflow-hidden group">
               <div className="absolute inset-0 bg-primary/5 opacity-5 animate-pulse pointer-events-none" />
               <h4 className="text-[14px] font-black text-primary uppercase tracking-[1em] mb-8 italic flex items-center justify-center gap-6">
                  <Boxes className="size-8 animate-spin-slow" /> HIVE_CONSENSUS
               </h4>
               <div className="text-6xl font-black text-emerald-500 italic gold-glow uppercase tracking-tighter group-hover:scale-105 transition-transform duration-1000">LOCKED</div>
               <div className="absolute -bottom-10 -right-10 p-16 opacity-[0.03] group-hover:opacity-[0.1] transition-all duration-1000 scale-150 rotate-12"><Skull className="size-48 text-primary" /></div>
            </Card>
          </div>

          <div className="xl:col-span-3">
            {decision ? (
              <Card className="kali-card border-primary/40 bg-black/99 rounded-[6rem] p-16 border-[12px] shadow-[0_0_250px_rgba(0,0,0,1)] flex flex-col group relative overflow-hidden h-full hierarchical-shadow animate-in fade-in zoom-in-95 duration-1000">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08),transparent)] pointer-events-none" />
                <CardHeader className="p-0 mb-12 border-b-8 border-white/5 pb-12 flex flex-row justify-between items-center bg-primary/5 rounded-t-[5rem] px-16 py-8">
                  <div className="flex items-center gap-10">
                     <div className="size-24 rounded-[2rem] bg-primary flex items-center justify-center border-4 border-black/30 shadow-3xl animate-neural">
                        <Skull className="size-12 text-black" />
                     </div>
                     <div>
                        <CardTitle className="text-4xl md:text-[8rem] text-white italic tracking-tighter uppercase font-black gold-glow leading-none">Decision DNA</CardTitle>
                        <Badge className="bg-primary/20 text-primary border-none px-10 py-3 rounded-full font-black text-[12px] tracking-[0.6em] uppercase italic mt-6">ULTRA_BRIDGE_v78</Badge>
                     </div>
                  </div>
                  <Badge className="bg-emerald-600/40 text-emerald-500 border-8 border-emerald-500/50 px-16 py-8 rounded-full font-black text-5xl italic animate-pulse shadow-9xl">SINGULARITY: LETHAL</Badge>
                </CardHeader>
                <CardContent className="p-10 flex-1 relative overflow-hidden flex flex-col gap-16 z-10 text-right">
                   <div className="p-20 rounded-[6rem] bg-primary/5 border-[12px] border-primary/30 italic text-4xl md:text-[9rem] text-gray-100 leading-none font-black shadow-inner relative overflow-hidden flex-1 flex flex-col justify-center text-center">
                      <div className="absolute inset-0 bg-primary/5 opacity-5 animate-pulse" />
                      <p className="relative z-10 selection:bg-primary selection:text-black drop-shadow-9xl">"{decision.decision || decision.strategy}"</p>
                   </div>
                   
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                      <div className="p-12 bg-black/95 border-8 border-white/5 rounded-[4rem] space-y-8 hover:border-primary transition-all duration-1000 shadow-9xl group/info">
                         <h4 className="text-3xl font-black text-primary uppercase tracking-[1em] border-b-8 border-primary/10 pb-6 italic flex items-center gap-12 gold-glow justify-end">
                            <Activity className="size-12 animate-pulse" /> Risk Vector
                         </h4>
                         <div className="text-4xl md:text-[8rem] font-black text-white italic gold-glow uppercase tracking-tighter leading-none text-center">{decision.risk_level || "MINIMAL"}</div>
                      </div>
                      <div className="p-12 bg-black/95 border-8 border-white/5 rounded-[4rem] space-y-8 hover:border-emerald-500 transition-all duration-1000 shadow-9xl group/info">
                         <h4 className="text-3xl font-black text-emerald-500 uppercase tracking-[1em] border-b-8 border-emerald-500/10 pb-6 italic flex items-center gap-12 justify-end">
                            <ShieldCheck className="size-12" /> Status
                         </h4>
                         <div className="text-4xl md:text-[8rem] font-black text-emerald-500 italic uppercase tracking-tighter leading-none text-center">{decision.status || "SINGULARITY"}</div>
                      </div>
                   </div>

                   <div className="p-12 rounded-[4rem] bg-black/80 border-4 border-white/5 text-2xl text-muted-foreground italic font-black text-center shadow-inner mt-8 opacity-70 uppercase tracking-[0.4em]">
                      "لقد تم صياغة هذا التوجيه بعصب ULTRA v78.0 لضمان السطوة المادية المطلقة للقائد الغزالي."
                   </div>
                </CardContent>
                <div className="p-16 border-t-8 border-white/5 mt-auto flex justify-between items-center opacity-35 text-[18px] font-black uppercase tracking-[8em] italic">
                   <span>ULTRA_BRIDGE_v78_AL_GHAZALI_ROOT</span>
                   <div className="flex gap-16">
                      <Fingerprint className="size-20 text-primary animate-pulse" />
                      <Atom className="size-20 animate-spin-slow text-primary" />
                   </div>
                </div>
              </Card>
            ) : (
              <div className="h-full min-h-[900px] border-[16px] border-dashed border-primary/10 rounded-[8rem] flex flex-col items-center justify-center text-center p-24 bg-black/40 group relative overflow-hidden transition-all hover:bg-primary/5 shadow-9xl">
                 <div className="relative mb-24 group-hover:scale-110 transition-transform duration-[8000ms]">
                    <Network className="size-[30rem] text-primary/10 animate-spin-slow" />
                    <Brain className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-48 text-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 gold-glow" />
                 </div>
                 <h3 className="text-7xl md:text-[15rem] font-headline font-bold text-white mb-10 tracking-tighter italic drop-shadow-9xl uppercase leading-none opacity-20">Awaiting Sync</h3>
                 <p className="text-muted-foreground max-w-6xl mx-auto leading-relaxed text-3xl md:text-7xl font-black italic opacity-30 uppercase tracking-[1em]">
                   "سيدي <span className="text-primary font-black gold-glow underline decoration-primary decoration-8 underline-offset-[24px] shadow-9xl uppercase tracking-[1.5em]">المعتصم بالله</span>، مصفوفة ULTRA God-Core بانتظار نيتك؛ قدم الإحداثيات للاستنتاج الاستراتيجي."
                 </p>
                 <div className="absolute -inset-80 border-[80px] border-dashed border-primary/5 rounded-full animate-spin-slow opacity-10" />
              </div>
            )}
          </div>
        </div>

        <div className="mt-auto relative z-10 flex justify-center items-center gap-48 opacity-45 text-[24px] md:text-[36px] font-black uppercase tracking-[5em] md:tracking-[12em] italic text-white drop-shadow-9xl pb-32">
            <span>AL-MUIZZ ULTRA BRIDGE v78.0</span>
            <div className="size-16 rounded-full bg-white animate-pulse shadow-[0_0_150px_white]" />
            <span>SINGULARITY_IN_INFERENCE_2026</span>
        </div>
      </main>
    </div>
  );
}
