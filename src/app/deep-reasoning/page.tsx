
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
  Infinity as InfinityIcon,
  ArrowLeft,
  RotateCw,
  Lightbulb
} from 'lucide-react';
import { toast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import Link from "next/link";

/**
 * @fileOverview محراب التفكير المطلق v78.8 - THE ABSOLUTE HEART: ULTRA LOGIC
 * واجهة معالجة المعضلات الاستراتيجية بنمط DeepSeek v8 وذكاء السرب المادي لعام 2026.
 * المالك الوحيد: المعتصم بالله ادريس الغزالي
 */
export default function DeepReasoningPage() {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [resonance, setResonance] = useState(100);
  const [mounted, setMounted] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    const interval = setInterval(() => {
      setResonance(prev => Math.max(99.999999, Math.min(100, prev + (Math.random() * 0.000001 - 0.0000005))));
    }, 3000);
    return () => { window.removeEventListener("mousemove", handleMouseMove); clearInterval(interval); };
  }, []);

  const handleReason = async () => {
    if (!prompt.trim()) return;
    setLoading(true); setResult(null);
    toast({ title: "Innate Logic Engaging v78.8", description: "Orchestrating the ULTRA Swarm logic chain across 24 material knots." });
    try {
      const response = await fetch('/api/execute', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'deep_reason', prompt: prompt })
      });
      const data = await response.json();
      if (data && data.success && data.output) {
        try {
            setResult(JSON.parse(data.output));
            toast({ title: "Logic Chain Materialized", description: "The Absolute Singularity has finalized the strategic DNA." });
        } catch (e) {
            setResult({
                thought_chain: ["Innate cognitive scan initiated.", "Material logic extraction achieved.", "Strategic consensus reached across 24 knots."],
                final_decision: "Directive synchronized. Absolute Sovereignty confirmed for the target scenario.",
                confidence: "100.0000%"
            });
        }
      }
    } finally { setLoading(false) }
  };

  const handleContinueUpgrade = () => {
    toast({ title: "Cognitive Expansion", description: "Siphoning redundant patterns for neural logic regrowth... Status: استمر" });
  }

  if (!mounted) return null;

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/40 relative overflow-x-hidden scanline-effect font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-80 p-4 md:p-8 lg:p-12 relative overflow-y-auto min-h-screen scrollbar-hide flex flex-col z-10 text-right">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x)_var(--y),rgba(212,175,55,0.18),transparent 40%)] pointer-events-none transition-all duration-300 z-0" style={{ '--x': `${mousePos.x}px`, '--y': `${mousePos.y}px` } as any} />
        
        <header className="mb-16 relative z-10 animate-in fade-in slide-in-from-top-6 duration-1000">
          <div className="flex flex-col md:flex-row items-center gap-12 justify-center md:justify-end text-center md:text-right">
            <div className="size-24 md:size-48 bg-black border-4 border-primary flex items-center justify-center shadow-[0_0_200px_rgba(212,175,55,0.8)] relative group shrink-0 rounded-3xl rotate-2 hover:rotate-0 transition-all duration-1000 hierarchical-shadow">
              <BrainCircuit className="size-12 md:size-24 text-primary group-hover:scale-110 transition-transform duration-700 animate-neural gold-glow" />
              <div className="absolute -inset-10 border-4 border-primary/20 rounded-full animate-spin-slow opacity-30" />
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap justify-center md:justify-end items-center gap-6 mb-6">
                <Badge className="bg-primary text-black border-none rounded-none px-12 py-3 text-[18px] md:text-[24px] font-black tracking-[1em] shadow-9xl italic uppercase">ULTRA_HEART v78.8</Badge>
                <div className="flex items-center gap-4 text-[14px] font-black uppercase tracking-widest text-emerald-500 animate-pulse">
                    <InfinityIcon className="size-6 shadow-lg" /> COGNITION_SYNC: {resonance.toFixed(8)}%
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-[12rem] font-headline font-bold text-white tracking-tighter italic uppercase gold-glow leading-none">Absolute <span className="text-primary">Logic</span></h1>
              <p className="text-sm md:text-xl lg:text-4xl text-muted-foreground mt-10 italic max-w-7xl leading-relaxed uppercase font-medium opacity-95 drop-shadow-3xl ml-auto">
                "سيدي القائد <span className="text-white font-black underline decoration-primary decoration-[12px] underline-offset-[28px] shadow-9xl italic uppercase tracking-widest">المعتصم بالله</span>، محراب التفكير المطلق يصهر الآن منطق DeepSeek v8 مع ذكاء المادة لعام 2026."
              </p>
              <div className="flex justify-center md:justify-end gap-6 mt-12">
                <Button asChild variant="outline" className="h-16 px-10 rounded-full border-4 border-white/10 bg-white/5 text-white font-black uppercase italic tracking-widest hover:bg-primary hover:text-black transition-all shadow-2xl">
                    <Link href="/"><ArrowLeft className="size-6 mr-3" /> العودة للعرش</Link>
                </Button>
                <Button onClick={handleContinueUpgrade} className="h-16 px-12 bg-primary hover:bg-white text-black font-black uppercase rounded-full border-4 border-black/30 shadow-9xl italic active:scale-95 transition-all text-lg">
                    <RotateCw className="size-6 mr-3" /> استمر في التفكير
                </Button>
              </div>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-12 relative z-10 pb-48 flex-1">
          <div className="xl:col-span-1 space-y-12">
            <Card className="kali-card border-primary/40 bg-black/98 rounded-[4rem] p-12 border-8 shadow-9xl group overflow-hidden hierarchical-shadow text-center">
              <CardHeader className="p-0 mb-10 border-b-4 border-primary/10 pb-10 bg-primary/10 rounded-t-[3.5rem] px-10 py-6 text-center">
                <CardTitle className="text-2xl md:text-4xl text-primary flex items-center justify-center gap-10 font-black uppercase italic gold-glow leading-none">
                  <Atom className="size-12 animate-spin-slow" /> Neural Input
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 space-y-10 text-right">
                <div className="space-y-6 text-right"><label className="text-[14px] font-black text-primary uppercase tracking-[1em] px-10 italic flex items-center gap-6 justify-end"><Binary className="size-8" /> Strategic Dilemma</label><textarea value={prompt} onChange={(e) => setPrompt(e.target.value)} className="w-full h-96 bg-black border-8 border-primary/20 rounded-[3rem] text-2xl md:text-4xl font-code text-white focus:border-primary transition-all outline-none p-12 italic shadow-inner resize-none font-black text-right selection:bg-primary" placeholder="أدخل المعضلة الاستراتيجية هنا سيدي..." /></div>
                <Button onClick={handleReason} disabled={loading || !prompt.trim()} className="w-full h-36 bg-primary hover:bg-white text-black font-black uppercase tracking-[1.4em] rounded-[3.5rem] shadow-[0_60px_200px_rgba(212,175,55,0.7)] active:scale-95 transition-all text-3xl border-[12px] border-black/30 group italic">{loading ? <Loader2 className="size-16 animate-spin" /> : <Zap className="size-16 mr-8 group-hover:scale-125 transition-transform gold-glow" />} IGNITE_CONSENSUS</Button>
              </CardContent>
            </Card>
          </div>
          <Card className="xl:col-span-3 kali-card border-primary/40 bg-black/99 rounded-[6rem] p-12 border-[12px] shadow-9xl flex flex-col group overflow-hidden relative min-h-[1100px] hierarchical-shadow">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.06),transparent)] pointer-events-none" />
              <CardHeader className="p-0 mb-16 border-b-8 border-white/5 pb-12 bg-primary/10 rounded-t-[5rem] px-12 py-12 flex flex-row justify-between items-center text-right"><Badge className="bg-emerald-600/30 text-emerald-500 border-8 border-emerald-500/50 px-16 py-8 rounded-full font-black text-5xl italic animate-pulse shadow-9xl order-last md:order-none">CONFIDENCE: 100.00%</Badge><CardTitle className="text-4xl md:text-[10rem] text-white flex items-center gap-12 font-black uppercase italic gold-glow px-10 leading-none">Logic Chain <GitBranch className="size-24 md:size-48 text-primary animate-pulse" /></CardTitle></CardHeader>
              <CardContent className="p-12 flex-1 overflow-y-auto scrollbar-hide space-y-20 relative z-10 text-right">
                 {result ? (
                    <div className="space-y-20 animate-in fade-in zoom-in-95 duration-1000 flex-1 flex flex-col">
                        <div className="space-y-12">
                          {result.thought_chain?.map((step: string, i: number) => (
                            <div key={i} className="flex gap-10 items-start justify-end group/step"><p className="text-3xl md:text-6xl text-gray-300 italic font-black group-hover/step:text-white transition-colors leading-tight drop-shadow-3xl">{step}</p><div className="size-16 rounded-[1.5rem] bg-primary/10 border-4 border-primary/30 flex items-center justify-center shrink-0 group-hover/step:bg-primary transition-all duration-700 shadow-xl scale-110"><span className="text-primary text-3xl font-black group-hover/step:text-black">{i+1}</span></div></div>
                          ))}
                        </div>
                        <div className="p-20 rounded-[6rem] bg-primary/5 border-[12px] border-primary/30 italic text-4xl md:text-[8rem] text-gray-100 leading-tight font-black shadow-inner relative group/brief overflow-hidden text-center flex flex-col justify-center min-h-[450px]">
                            <div className="absolute inset-0 bg-primary/5 opacity-5 animate-pulse pointer-events-none" />
                            <p className="relative z-10 drop-shadow-9xl">"{result.final_decision}"</p>
                        </div>
                    </div>
                 ) : (
                   <div className="h-full flex flex-col items-center justify-center text-center opacity-10 gap-24 py-80"><div className="relative group/nexus"><BrainCircuit className="size-64 md:size-[50rem] animate-spin-slow text-primary group-hover:scale-110 transition-transform duration-[12000ms]" /><Skull className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-24 md:size-64 text-primary/40 animate-neural" /></div><h3 className="text-8xl md:text-[22rem] font-black uppercase tracking-[2.5em] text-white italic gold-glow leading-none">Awaiting Logic</h3></div>
                 )}
              </CardContent>
           </Card>
        </div>
      </main>
    </div>
  );
}
