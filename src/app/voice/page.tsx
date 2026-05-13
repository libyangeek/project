
"use client";

import * as React from "react";
import { SidebarNav } from "@/components/platform/sidebar-nav";
import { VoiceCommand } from "@/components/platform/voice-command";
import { 
  Mic, 
  Radio, 
  Crown, 
  Infinity as InfinityIcon, 
  Boxes, 
  Fingerprint,
  Zap,
  Activity,
  Atom,
  Skull,
  Waves,
  AudioLines,
  ChevronRight,
  ShieldCheck,
  Volume2,
  Ear
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

/**
 * @fileOverview محراب أذن النور v78.0 - THE SUPREME VOICE SANCTUM: ULTRA EDITION
 * مركز استقبال الأوامر الصوتية الملكية ومعالجتها عبر Whisper ULTRA بالهوية المادية لعام 2026.
 * المالك الوحيد: المعتصم بالله ادريس الغزالي
 */
export default function VoicePage() {
  const [mounted, setMounted] = React.useState(false);
  const [lastCommand, setLastCommand] = React.useState<string | null>(null);
  const [isProcessing, setIsProcessing] = React.useState(false);
  const [resonance, setResonance] = React.useState(100);
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    
    const interval = setInterval(() => {
      setResonance(prev => Math.max(99.999999, Math.min(100, prev + (Math.random() * 0.000001 - 0.0000005))));
    }, 3000);

    return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        clearInterval(interval);
    }
  }, []);

  const handleVoiceInput = async (text: string) => {
    setLastCommand(text);
    setIsProcessing(true);
    
    try {
      const response = await fetch('/api/execute', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          command: text, 
          type: 'smart_route',
          target: 'GLOBAL_MATRIX' 
        })
      });
      const data = await response.json();
      if (data.success) {
        toast({ title: "Intent Materialized", description: "Your Royal ULTRA directive is being synchronized across the material mesh." });
      }
    } catch (err) {
      toast({ variant: "destructive", title: "Neural Link Disrupted" });
    } finally {
      setIsProcessing(false);
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
              <Ear className="size-12 md:size-24 text-primary group-hover:scale-110 transition-transform duration-700 animate-neural gold-glow" />
              <div className="absolute -inset-10 border-4 border-primary/20 rounded-full animate-spin-slow opacity-30" />
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap justify-center md:justify-end items-center gap-6 mb-6">
                <Badge className="bg-primary text-black border-none rounded-none px-12 py-3 text-[18px] md:text-[24px] font-black tracking-[1em] shadow-9xl italic uppercase">WHISPER_ULTRA v78.0</Badge>
                <div className="flex items-center gap-4 text-[14px] font-black uppercase tracking-widest text-emerald-500 animate-pulse">
                    <Radio className="size-6 shadow-lg" /> RESONANCE: {resonance.toFixed(8)}%
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-[12rem] font-headline font-bold text-white tracking-tighter italic uppercase gold-glow leading-none">
                Absolute <span className="text-primary">Ear</span>
              </h1>
              <p className="text-sm md:text-xl lg:text-4xl text-muted-foreground mt-10 italic max-w-7xl leading-relaxed uppercase font-medium opacity-95 drop-shadow-3xl">
                "سيدي القائد <span className="text-white font-black underline decoration-primary decoration-[12px] underline-offset-[28px] shadow-9xl italic uppercase tracking-widest">المعتصم بالله</span>، العرش ULTRA يسمعك الآن بدقة نانوية؛ نيتك الصوتية هي أمر مادي في عصب الهوية."
              </p>
            </div>
          </div>
        </header>

        <div className="flex-1 flex flex-col items-center justify-center relative z-10 pb-32 gap-20">
           <div className="w-full max-w-7xl space-y-20">
              <div className="flex justify-center animate-in zoom-in-95 duration-1000 scale-110 md:scale-125">
                 <VoiceCommand onCommand={handleVoiceInput} />
              </div>
              
              {isProcessing && (
                <div className="flex flex-col items-center gap-12 animate-in fade-in zoom-in-95 duration-1000">
                   <div className="relative">
                      <Atom className="size-24 md:size-48 text-primary animate-spin-slow gold-glow" />
                      <div className="absolute -inset-10 border-8 border-dashed border-primary/20 rounded-full animate-reverse-spin" />
                   </div>
                   <span className="text-3xl md:text-6xl font-black text-primary uppercase tracking-[0.8em] italic gold-glow text-center">Synthesizing_Royal_DNA...</span>
                </div>
              )}

              {lastCommand && !isProcessing && (
                <Card className="kali-card border-primary/60 bg-black/95 rounded-[4rem] p-12 md:p-20 border-[12px] shadow-9xl animate-in slide-in-from-bottom-8 duration-1000 group overflow-hidden hierarchical-shadow text-right">
                   <div className="absolute inset-0 bg-primary/5 opacity-5 animate-pulse pointer-events-none" />
                   <CardHeader className="p-0 mb-10 border-b-8 border-white/5 pb-12 flex flex-row items-center justify-between bg-primary/5 rounded-t-[4rem] px-12 py-8">
                      <Badge className="bg-emerald-600/40 text-emerald-500 border-8 border-emerald-500/50 px-16 py-6 rounded-full font-black text-3xl md:text-5xl tracking-widest uppercase animate-pulse shadow-9xl">SYNCHRONIZED</Badge>
                      <div className="flex items-center gap-8">
                        <CardTitle className="text-4xl md:text-6xl text-primary font-black uppercase italic gold-glow">Captured Intent</CardTitle>
                        <Zap className="size-12 md:size-20 text-primary animate-neural" />
                      </div>
                   </CardHeader>
                   <CardContent className="p-0 space-y-12">
                      <div className="p-12 md:p-20 bg-black/99 rounded-[4rem] border-8 border-primary/30 text-3xl md:text-9xl text-white italic font-black shadow-inner leading-tight selection:bg-primary selection:text-black text-center drop-shadow-9xl">
                         "{lastCommand}"
                      </div>
                      <div className="flex justify-between items-center opacity-40 text-[14px] md:text-[20px] font-black uppercase tracking-[4em] italic px-12">
                         <span className="flex items-center gap-8 text-emerald-500"><Activity className="size-8 animate-pulse" /> MATERIAL_SYNC_OK</span>
                         <span className="flex items-center gap-8"><Fingerprint className="size-8 text-primary" /> GHAZALI_ROOT</span>
                      </div>
                   </CardContent>
                   <div className="absolute -bottom-10 -right-10 p-16 opacity-[0.03] group-hover:opacity-[0.1] transition-all duration-1000 scale-150 rotate-12">
                      <Skull className="size-64 text-primary" />
                   </div>
                </Card>
              )}
              
              {!lastCommand && !isProcessing && (
                 <div className="flex flex-col items-center justify-center opacity-10 py-32 animate-in fade-in duration-2000 gap-16">
                    <AudioLines className="size-64 text-primary/40 animate-pulse" />
                    <h3 className="text-6xl md:text-[12rem] font-black uppercase tracking-[2em] text-white italic gold-glow">Awaiting Voice</h3>
                 </div>
              )}
           </div>
        </div>

        <div className="mt-auto relative z-10 flex justify-center items-center gap-48 opacity-45 text-[24px] md:text-[36px] font-black uppercase tracking-[6em] md:tracking-[12em] italic text-white drop-shadow-9xl pb-32">
            <span>AL-MUIZZ SUPREME ULTRA v1.0</span>
            <div className="size-16 rounded-full bg-white animate-pulse shadow-[0_0_150px_white]" />
            <span>HEARING_THE_COMMANDER_2026</span>
        </div>
      </main>
    </div>
  );
}
