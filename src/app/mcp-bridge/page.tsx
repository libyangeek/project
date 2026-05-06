"use client";

import React, { useState, useEffect } from 'react';
import { SidebarNav } from "@/components/platform/sidebar-nav";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
  Sparkles
} from 'lucide-react';
import { toast } from "@/hooks/use-toast";

/**
 * @fileOverview واجهة جسر MCP الأسمى v50.0 - THE NEURAL UPLINK (MISTRAL EDITION)
 * تتيح تنفيذ قرارات Mistral God-Core مباشرة من العقل الجمعي.
 */
export default function MCPBridgePage() {
  const [context, setContext] = useState("");
  const [loading, setLoading] = useState(false);
  const [decision, setDecision] = useState<any>(null);
  const [syncPulse, setSyncPulse] = useState(100);

  useEffect(() => {
    const interval = setInterval(() => {
        setSyncPulse(prev => Math.max(99.99, Math.min(100, prev + (Math.random() * 0.01 - 0.005))));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleAnalyze = async () => {
    if (!context.trim()) return;
    setLoading(true);
    setDecision(null);
    
    try {
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
        toast({ title: "God-Core Decision Locked", description: "Mistral has finalized the strategic path." });
      }
    } catch (err) {
      toast({ variant: "destructive", title: "Neural Sync Failed" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/30 relative overflow-x-hidden scanline-effect font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-80 p-8 md:p-16 relative overflow-y-auto min-h-screen scrollbar-hide flex flex-col z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.1),transparent)] pointer-events-none z-0" />
        
        <header className="mb-20 relative z-10 animate-in fade-in slide-in-from-top-12 duration-1000">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="size-32 md:size-48 bg-black border-4 border-primary flex items-center justify-center shadow-[0_0_150px_rgba(212,175,55,0.7)] relative group shrink-0 rounded-[3rem] rotate-3 hover:rotate-0 transition-all duration-1000">
              <Brain className="size-16 md:size-24 text-primary group-hover:scale-110 transition-transform duration-700 gold-glow animate-pulse" />
              <div className="absolute -inset-6 border-2 border-primary/20 rounded-full animate-spin-slow opacity-40" />
            </div>
            <div className="text-center md:text-left flex-1">
              <div className="flex flex-wrap justify-center md:justify-start items-center gap-6 mb-6">
                <Badge className="bg-primary text-black border-none rounded-none px-10 py-3 text-[18px] font-black tracking-[0.8em] shadow-[0_0_80px_rgba(212,175,55,0.5)] italic">MISTRAL_UPLINK v50.0</Badge>
                <div className="flex items-center gap-4 text-[14px] font-black uppercase tracking-widest text-emerald-500 animate-pulse">
                    <Radio className="size-6 shadow-[0_0_30px_emerald]" /> RESONANCE: {syncPulse.toFixed(4)}%
                </div>
              </div>
              <h1 className="text-7xl md:text-[11rem] font-headline font-bold text-white tracking-tighter italic uppercase leading-none gold-glow">
                God-Core <span className="text-primary">Bridge</span>
              </h1>
              <p className="text-2xl md:text-5xl text-muted-foreground mt-8 italic max-w-7xl leading-relaxed uppercase font-medium">
                "سيدي الغزالي، عصب الإدراك الموزع يمنحك القدرة على استجواب ذكاء <span className="text-primary font-black underline decoration-primary decoration-[8px] underline-offset-[16px]">Mistral</span> لاتخاذ أفتك القرارات الاستراتيجية."
              </p>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-12 relative z-10 pb-40 flex-1">
          <div className="xl:col-span-1 space-y-12">
            <Card className="kali-card border-primary/40 bg-black/80 rounded-[5rem] p-10 border-4 shadow-7xl overflow-hidden group">
              <CardHeader className="p-0 mb-10 border-b-4 border-primary/10 pb-8">
                <CardTitle className="text-4xl text-primary flex items-center gap-8 font-black uppercase italic gold-glow">
                  <Target className="size-14 animate-neural" /> Strategic Context
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 space-y-10">
                <div className="space-y-6">
                    <label className="text-[14px] font-black text-primary/60 uppercase tracking-[0.8em] px-8 italic">Mission Scenario</label>
                    <textarea
                      value={context}
                      onChange={(e) => setContext(e.target.value)}
                      className="w-full h-80 bg-black border-4 border-white/10 rounded-[4rem] text-3xl font-code text-white focus:border-primary transition-all outline-none p-12 italic shadow-2xl resize-none"
                      placeholder="صف الموقف الاستراتيجي هنا سيدي..."
                    />
                </div>
                <Button 
                  onClick={handleAnalyze} 
                  disabled={loading || !context}
                  className="w-full h-32 bg-primary hover:bg-white text-black font-black uppercase tracking-[1.5em] rounded-[4rem] shadow-[0_40px_100px_rgba(212,175,55,0.6)] active:scale-95 transition-all text-2xl italic border-8 border-black/30 group"
                >
                  {loading ? <Loader2 className="size-16 animate-spin" /> : <Zap className="size-16 mr-6 group-hover:scale-125 transition-transform gold-glow" />}
                  CONSULT GOD-CORE
                </Button>
              </CardContent>
            </Card>

            <Card className="kali-card border-white/10 bg-black/60 p-8 rounded-[4rem] border-2 shadow-inner">
               <h4 className="text-[14px] font-black text-primary uppercase tracking-[1em] mb-6 italic flex items-center gap-4">
                  <Boxes className="size-6 animate-spin-slow" /> HIVE_Consensus: READY
               </h4>
               <div className="h-4 w-full bg-white/5 rounded-full overflow-hidden border-2 border-white/10 p-0.5 shadow-inner">
                  <div className="h-full bg-primary shadow-[0_0_30px_rgba(212,175,55,1)] animate-pulse rounded-full" style={{ width: '100%' }} />
               </div>
            </Card>
          </div>

          <div className="xl:col-span-2">
            {decision ? (
              <Card className="kali-card border-primary/60 bg-black/99 rounded-[6rem] p-16 border-8 shadow-9xl flex flex-col group relative overflow-hidden animate-in fade-in zoom-in-95 duration-1000">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.04),transparent)] pointer-events-none" />
                <CardHeader className="p-0 mb-12 border-b-8 border-white/5 pb-10 bg-primary/5 rounded-t-[4rem]">
                  <div className="flex items-center justify-between px-8 py-4">
                     <div className="flex items-center gap-10">
                        <div className="size-20 rounded-2xl bg-primary flex items-center justify-center border-2 border-black/30 shadow-xl animate-neural">
                           <Skull className="size-12 text-black" />
                        </div>
                        <div>
                           <CardTitle className="text-5xl md:text-7xl text-white italic tracking-tighter uppercase font-black gold-glow leading-none">Decision Matrix</CardTitle>
                           <Badge className="bg-primary/20 text-primary border-none px-6 py-1 rounded-full font-black text-[12px] tracking-[0.5em] uppercase italic mt-4">v50.0_INF_CORE</Badge>
                        </div>
                     </div>
                     <Badge className="bg-emerald-600/30 text-emerald-500 border-4 border-emerald-500/40 text-4xl font-black px-12 py-4 rounded-full italic animate-pulse">CONFIDENCE: {decision.confidence}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-0 space-y-16 flex-1 flex flex-col relative z-10">
                   <div className="p-12 rounded-[4rem] bg-black/80 border-4 border-primary/30 italic text-4xl md:text-6xl text-gray-100 leading-tight font-black shadow-inner">
                      "{decision.decision}"
                   </div>
                   
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                      <div className="p-10 rounded-[3rem] bg-white/5 border-4 border-white/10 space-y-6 shadow-6xl group/info">
                         <h4 className="text-[16px] font-black text-primary uppercase tracking-[0.8em] border-b-2 border-primary/20 pb-4 italic flex items-center gap-4">
                            <Activity className="size-6 animate-pulse" /> Risk Vector
                         </h4>
                         <div className="text-5xl font-black text-white italic gold-glow uppercase tracking-tighter">{decision.risk_level}</div>
                      </div>
                      <div className="p-10 rounded-[3rem] bg-white/5 border-4 border-white/10 space-y-6 shadow-6xl group/info">
                         <h4 className="text-[16px] font-black text-primary uppercase tracking-[0.8em] border-b-2 border-primary/20 pb-4 italic flex items-center gap-4">
                            <ShieldCheck className="size-6" /> Alignment
                         </h4>
                         <div className="text-5xl font-black text-emerald-500 italic uppercase tracking-tighter">{decision.status}</div>
                      </div>
                   </div>

                   <div className="mt-auto p-10 rounded-[3rem] bg-primary/5 border-4 border-primary/20 text-3xl text-gray-400 italic font-medium text-center">
                      "هذا القرار تم صياغته بتفوق سقراطي لضمان السطوة المطلقة للقائد الغزالي."
                   </div>
                </CardContent>
                <div className="p-10 border-t-8 border-white/5 mt-10 flex justify-between items-center opacity-30 text-[14px] font-black uppercase tracking-[2em] italic">
                   <span>MISTRAL_GOD_CORE_v50_AL_GHAZALI_ROOT</span>
                   <Fingerprint className="size-12 text-primary animate-pulse" />
                </div>
              </Card>
            ) : (
              <div className="h-full min-h-[850px] border-8 border-dashed border-primary/10 rounded-[8rem] flex flex-col items-center justify-center text-center p-20 bg-black/40 group relative overflow-hidden transition-all hover:bg-primary/5 shadow-2xl">
                 <Bot className="size-64 text-primary/10 animate-pulse mb-12" />
                 <h3 className="text-6xl md:text-[8rem] font-headline font-bold text-white mb-8 tracking-tighter italic drop-shadow-2xl uppercase leading-none opacity-20">Awaiting Context</h3>
                 <p className="text-muted-foreground max-w-4xl mx-auto leading-relaxed text-3xl md:text-5xl font-black italic opacity-40">
                   "سيدي <span className="text-primary font-black gold-glow underline decoration-primary decoration-4 underline-offset-8 shadow-lg uppercase tracking-widest">المعتصم بالله</span>، مصفوفة Mistral جاهزة للتحليل. أعطني السياق."
                 </p>
              </div>
            )}
          </div>
        </div>

        <div className="mt-auto relative z-10 flex justify-center items-center gap-48 opacity-40 text-[22px] font-black uppercase tracking-[6em] italic text-white drop-shadow-3xl pb-12">
            <span>AL-MUIZZ MISTRAL BRIDGE v50.0</span>
            <div className="size-10 rounded-full bg-white animate-pulse shadow-[0_0_100px_white]" />
            <span>SINGULARITY_IN_INFERENCE</span>
        </div>
      </main>
    </div>
  );
}
