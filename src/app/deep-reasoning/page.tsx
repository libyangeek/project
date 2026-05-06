
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
  Binary
} from 'lucide-react';
import { toast } from "@/hooks/use-toast";

/**
 * @fileOverview محراب التفكير العميق v50.0 - THE STRATEGIC HEART (DEEPSEEK EDITION)
 * تتيح للقائد استخدام طور Deep Reasoning لحل المعضلات الاستراتيجية.
 */
export default function DeepReasoningPage() {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleReason = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    setResult(null);
    
    try {
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
      toast({ variant: "destructive", title: "Neural Link Disrupted" });
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
          <div className="flex items-center gap-12">
            <div className="size-32 md:size-48 bg-black border-4 border-primary flex items-center justify-center shadow-[0_0_150px_rgba(212,175,55,0.7)] relative group shrink-0 rounded-full transition-all duration-1000">
              <BrainCircuit className="size-16 md:size-24 text-primary group-hover:scale-110 transition-transform duration-700 gold-glow animate-neural" />
            </div>
            <div className="flex-1">
              <Badge className="bg-primary text-black border-none px-10 py-3 text-[18px] font-black tracking-[0.8em] italic rounded-full mb-6">DEEP_LOGIC v50.0</Badge>
              <h1 className="text-7xl md:text-[11rem] font-headline font-bold text-white tracking-tighter italic uppercase leading-none gold-glow">
                Strategic <span className="text-primary">Heart</span>
              </h1>
              <p className="text-2xl md:text-5xl text-muted-foreground mt-8 italic max-w-7xl leading-relaxed uppercase">
                "سيدي الغزالي، طور <span className="text-primary font-black underline decoration-primary decoration-[8px] underline-offset-[16px]">DeepSeek Logic</span> يمنحك القدرة على تشريح المصفوفة بسلاسل تفكير لا تقبل الكسر."
              </p>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-12 relative z-10 pb-40 flex-1">
          <div className="xl:col-span-1 space-y-12">
            <Card className="kali-card border-primary/40 bg-black/80 rounded-[5rem] p-10 border-4 shadow-7xl group">
              <CardHeader className="p-0 mb-10 border-b-4 border-primary/10 pb-8">
                <CardTitle className="text-4xl text-primary font-black uppercase italic gold-glow">Neural Input</CardTitle>
              </CardHeader>
              <CardContent className="p-0 space-y-10">
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  className="w-full h-80 bg-black border-4 border-white/10 rounded-[4rem] text-3xl font-code text-white focus:border-primary transition-all outline-none p-12 italic shadow-2xl resize-none"
                  placeholder="أدخل المعضلة الاستراتيجية هنا سيدي..."
                />
                <Button 
                  onClick={handleReason} 
                  disabled={loading || !prompt}
                  className="w-full h-32 bg-primary hover:bg-white text-black font-black uppercase tracking-[1.5em] rounded-[4rem] shadow-xl text-2xl italic border-8 border-black/30 group"
                >
                  {loading ? <Loader2 className="size-16 animate-spin" /> : <Zap className="size-16 mr-6 group-hover:scale-125 transition-transform gold-glow" />}
                  IGNITE REASONING
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="xl:col-span-2">
            {result ? (
              <Card className="kali-card border-primary/60 bg-black/99 rounded-[6rem] p-16 border-8 shadow-9xl animate-in zoom-in-95 duration-1000">
                <CardHeader className="p-0 mb-12 border-b-8 border-white/5 pb-10">
                   <CardTitle className="text-5xl text-white italic uppercase font-black gold-glow flex items-center gap-10">
                      <GitBranch className="size-12 text-primary animate-pulse" /> Logic Chain
                   </CardTitle>
                </CardHeader>
                <CardContent className="p-0 space-y-16">
                   <div className="space-y-8">
                      {result.thought_chain.map((step: string, i: number) => (
                        <div key={i} className="flex gap-10 items-start group/step">
                           <div className="size-10 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center shrink-0 group-hover:bg-primary transition-all">
                              <span className="text-primary text-xl font-black group-hover:text-black">{i+1}</span>
                           </div>
                           <p className="text-3xl text-gray-300 italic font-bold group-hover:text-white transition-colors">{step}</p>
                        </div>
                      ))}
                   </div>
                   <div className="p-12 rounded-[4rem] bg-primary/5 border-4 border-primary/30 italic text-4xl md:text-6xl text-gray-100 leading-tight font-black shadow-inner">
                      "{result.final_decision}"
                   </div>
                   <div className="flex justify-between items-center opacity-30 text-[14px] font-black uppercase tracking-[2em] italic">
                      <span>DEEPSEEK_LOGIC_v50_GHAZALI_ROOT</span>
                      <Fingerprint className="size-12 text-primary" />
                   </div>
                </CardContent>
              </Card>
            ) : (
              <div className="h-full min-h-[850px] border-8 border-dashed border-primary/10 rounded-[8rem] flex flex-col items-center justify-center text-center p-20 bg-black/40 opacity-20">
                 <Boxes className="size-64 mb-12 animate-spin-slow text-primary" />
                 <h3 className="text-6xl md:text-[8rem] font-headline font-bold text-white tracking-tighter italic uppercase leading-none">Awaiting Logic</h3>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
