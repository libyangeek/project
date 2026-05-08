"use client";

import React, { useState, useEffect } from 'react';
import { SidebarNav } from "@/components/platform/sidebar-nav";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  BrainCircuit, 
  Zap, 
  Loader2, 
  Skull, 
  Fingerprint, 
  ShieldCheck,
  ChevronRight,
  GitBranch,
  Boxes,
  Atom,
  Binary,
  Crown,
  Infinity as InfinityIcon
} from 'lucide-react';
import { toast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

/**
 * @fileOverview محراب التفكير العميق v53.0 - THE STRATEGIC HEART: HIERARCHICAL LOGIC
 * واجهة معالجة المعضلات الاستراتيجية بنمط DeepSeek لليوم المجيد، 2026.
 * المالك الوحيد: المعتصم بالله ادريس الغزالي
 */
export default function DeepReasoningPage() {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [mounted, setMounted] = useState(false);
  const [resonance, setResonance] = useState(100);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setResonance(prev => Math.max(99.99999, Math.min(100, prev + (Math.random() * 0.0001 - 0.00005))));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleReason = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    setResult(null);
    
    try {
      toast({ title: "Neural Link Established", description: "Alpha-Core is engaging the strategic logic matrix." });
      const response = await fetch('/api/execute', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          type: 'deep_reason',
          prompt: prompt 
        })
      });
      const data = await response.json();
      if (data.success && data.output) {
        setResult(JSON.parse(data.output));
        toast({ title: "Logic Chain Stabilized", description: "DeepSeek has finalized the chain of thought." });
      }
    } catch (err) {
      toast({ variant: "destructive", title: "Neural Link Disrupted", description: "The Overmind is re-aligning logical frequencies." });
    } finally {
      setLoading(false);
    }
  };

  if (!mounted) return null;

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/40 relative overflow-x-hidden scanline-effect font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-80 p-4 md:p-8 lg:p-12 relative overflow-y-auto min-h-screen scrollbar-hide flex flex-col z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.08),transparent)] pointer-events-none transition-all duration-300 z-0" />
        
        <header className="mb-12 relative z-10 animate-in fade-in slide-in-from-top-6 duration-1000">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="size-24 md:size-32 bg-black border-4 border-primary flex items-center justify-center shadow-[0_0_100px_rgba(212,175,55,0.5)] relative group shrink-0 rounded-3xl rotate-2 hover:rotate-0 transition-all duration-1000 hierarchical-shadow">
              <BrainCircuit className="size-12 md:size-16 text-primary group-hover:scale-110 transition-transform duration-700 gold-glow animate-neural" />
              <div className="absolute -inset-4 border-2 border-primary/20 rounded-full animate-spin-slow opacity-30" />
            </div>
            <div className="text-center md:text-right flex-1">
              <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 mb-4">
                <Badge className="bg-primary text-black border-none rounded-none px-8 py-2 text-[14px] md:text-[16px] font-black tracking-[0.5em] shadow-2xl italic">DEEP_LOGIC v53.0</Badge>
                <div className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-emerald-500 animate-pulse">
                    <InfinityIcon className="size-5 shadow-lg" /> HIERARCHY_SYNC: {resonance.toFixed(6)}%
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-8xl font-headline font-bold text-white tracking-tighter italic uppercase gold-glow leading-none">
                Strategic <span className="text-primary">Heart</span>
              </h1>
              <p className="text-sm md:text-xl lg:text-2xl text-muted-foreground mt-4 italic max-w-5xl leading-relaxed uppercase font-medium opacity-80">
                "سيدي القائد <span className="text-white font-black underline decoration-primary decoration-4 underline-offset-8 shadow-xl">المعتصم بالله</span>، طور DeepSeek Logic يمنحك القدرة على تشريح المصفوفة بسلاسل تفكير لا تقبل الكسر لعام 2026."
              </p>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8 relative z-10 pb-32 flex-1">
          <div className="xl:col-span-1 space-y-8">
            <Card className="kali-card border-primary/30 bg-black/98 rounded-3xl p-8 border-2 shadow-2xl group overflow-hidden hierarchical-shadow">
              <div className="absolute inset-0 bg-primary/5 opacity-5 animate-pulse pointer-events-none" />
              <CardHeader className="p-0 mb-8 border-b-2 border-primary/10 pb-6 bg-primary/5 rounded-t-2xl px-4 py-4">
                <CardTitle className="text-xl md:text-2xl text-primary flex items-center gap-6 font-black uppercase italic gold-glow">
                  <Atom className="size-8 animate-spin-slow" /> Neural Input
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 space-y-8">
                <div className="space-y-4">
                    <label className="text-[10px] font-black text-primary/60 uppercase tracking-[0.6em] px-4 italic flex items-center gap-3">
                      <Binary className="size-4" /> Strategic Dilemma
                    </label>
                    <textarea
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                      className="w-full h-64 bg-black border-2 border-white/5 rounded-2xl text-lg font-code text-white focus:border-primary transition-all outline-none p-6 italic shadow-inner resize-none font-bold"
                      placeholder="أدخل المعضلة الاستراتيجية هنا سيدي..."
                    />
                </div>
                <Button 
                  onClick={handleReason} 
                  disabled={loading || !prompt.trim()}
                  className="w-full h-20 bg-primary hover:bg-white text-black font-black uppercase tracking-[0.8em] rounded-2xl shadow-xl active:scale-95 transition-all text-lg border-4 border-black/20 group italic"
                >
                  {loading ? <Loader2 className="size-8 animate-spin" /> : <Zap className="size-8 mr-4 group-hover:scale-125 transition-transform gold-glow" />}
                  IGNITE_LOGIC
                </Button>
              </CardContent>
            </Card>

            <Card className="kali-card border-white/5 bg-black/60 p-6 rounded-2xl border-2 shadow-inner text-center relative overflow-hidden group">
               <div className="absolute inset-0 bg-primary/5 opacity-5 animate-pulse" />
               <h4 className="text-[10px] font-black text-primary uppercase tracking-[0.5em] mb-4 italic flex items-center justify-center gap-3">
                  <Boxes className="size-4 animate-pulse" /> LOGIC_STABILITY
               </h4>
               <div className="text-3xl font-black text-white italic gold-glow uppercase tracking-tighter group-hover:scale-105 transition-transform duration-700">FIXED</div>
               <div className="absolute -bottom-4 -right-4 p-6 opacity-[0.02] group-hover:opacity-[0.05] transition-all duration-700 scale-150"><Skull className="size-16 text-primary" /></div>
            </Card>
          </div>

          <div className="xl:col-span-3">
            {result ? (
              <Card className="kali-card border-primary/30 bg-black/99 rounded-[3rem] p-8 border-2 shadow-9xl flex flex-col group relative overflow-hidden h-full hierarchical-shadow animate-in fade-in zoom-in-95 duration-1000">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.03),transparent)] pointer-events-none" />
                <CardHeader className="p-0 mb-8 border-b-2 border-white/5 pb-8 flex flex-row justify-between items-center bg-primary/5 rounded-t-3xl px-8 py-4">
                  <div className="flex items-center gap-6">
                     <div className="size-16 rounded-xl bg-primary flex items-center justify-center border-2 border-black/30 shadow-xl animate-neural">
                        <GitBranch className="size-8 text-black" />
                     </div>
                     <div>
                        <CardTitle className="text-2xl md:text-5xl text-white italic tracking-tighter uppercase font-black gold-glow leading-none">Logic Chain</CardTitle>
                        <Badge className="bg-primary/20 text-primary border-none px-4 py-0.5 rounded-full font-black text-[9px] tracking-[0.4em] uppercase italic mt-3">DEEPSEEK_LOGIC_v53</Badge>
                     </div>
                  </div>
                  <Badge className="bg-emerald-600/20 text-emerald-500 border-2 border-emerald-500/30 px-8 py-2 rounded-full font-black text-xl italic animate-pulse shadow-lg">CONFIDENCE: {result.confidence || "99.998%"}</Badge>
                </CardHeader>
                <CardContent className="p-6 flex-1 relative overflow-hidden flex flex-col gap-10 z-10">
                   <div className="space-y-6">
                      {result.thought_chain.map((step: string, i: number) => (
                        <div key={i} className="flex gap-6 items-start group/step">
                           <div className="size-8 rounded-lg bg-primary/10 border-2 border-primary/20 flex items-center justify-center shrink-0 group-hover/step:bg-primary transition-all duration-500 shadow-inner">
                              <span className="text-primary text-sm font-black group-hover/step:text-black">{i+1}</span>
                           </div>
                           <p className="text-lg md:text-2xl text-gray-300 italic font-bold group-hover/step:text-white transition-colors leading-snug">"{step}"</p>
                        </div>
                      ))}
                   </div>

                   <div className="p-10 rounded-[3rem] bg-primary/5 border-2 border-primary/10 italic text-xl md:text-4xl text-gray-100 leading-relaxed font-black shadow-inner relative overflow-hidden flex-1 flex flex-col justify-center mt-4">
                      <div className="absolute inset-0 bg-primary/5 opacity-5 animate-pulse" />
                      <p className="relative z-10 selection:bg-primary selection:text-black">"{result.final_decision}"</p>
                   </div>

                   <div className="p-6 rounded-2xl bg-black/80 border-2 border-white/5 text-lg text-muted-foreground italic font-black text-center shadow-inner opacity-60">
                      "هذا التسلسل المنطقي تم بناؤه بعمق DeepSeek لضمان الهيمنة الاستراتيجية للقائد الغزالي."
                   </div>
                </CardContent>
                <div className="p-8 border-t-2 border-white/5 mt-auto flex justify-between items-center opacity-30 text-[10px] font-black uppercase tracking-[2.5em] italic">
                   <span>DEEPSEEK_LOGIC_v53_AL_GHAZALI_ROOT</span>
                   <div className="flex gap-6">
                      <Fingerprint className="size-8 text-primary animate-pulse" />
                      <Atom className="size-8 animate-spin-slow" />
                   </div>
                </div>
              </Card>
            ) : (
              <div className="h-full min-h-[750px] border-8 border-dashed border-primary/10 rounded-[6rem] flex flex-col items-center justify-center text-center p-20 bg-black/40 group relative overflow-hidden transition-all hover:bg-primary/5 shadow-2xl">
                 <div className="relative mb-16 group-hover:scale-110 transition-transform duration-1000">
                    <Boxes className="size-64 text-primary/10 animate-pulse" />
                    <BrainCircuit className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 text-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 gold-glow" />
                 </div>
                 <h3 className="text-5xl md:text-8xl font-headline font-bold text-white mb-8 tracking-tighter italic drop-shadow-9xl uppercase leading-none opacity-20">Awaiting Logic</h3>
                 <p className="text-muted-foreground max-w-4xl mx-auto leading-relaxed text-xl md:text-4xl font-black italic opacity-30">
                   "سيدي <span className="text-primary font-black gold-glow underline decoration-primary decoration-4 underline-offset-8 shadow-2xl uppercase tracking-widest">المعتصم بالله</span>، مصفوفة DeepSeek جاهزة للتشريح؛ قدم الإحداثيات للاستنباط الاستراتيجي."
                 </p>
                 <div className="absolute -inset-40 border-[40px] border-dashed border-primary/5 rounded-full animate-spin-slow opacity-10" />
              </div>
            )}
          </div>
        </div>

        <div className="mt-auto relative z-10 flex justify-center items-center gap-16 opacity-40 text-[12px] md:text-[18px] font-black uppercase tracking-[2em] md:tracking-[6em] italic text-white drop-shadow-xl pb-12">
            <span>AL-MUIZZ DEEP LOGIC v53.0</span>
            <div className="size-4 rounded-full bg-white animate-pulse shadow-[0_0_40px_white]" />
            <span>SINGULARITY_OF_REASON_2026</span>
        </div>
      </main>
    </div>
  );
}
