
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
  Volume2
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

/**
 * @fileOverview محراب أذن النور v53.0 - THE SUPREME VOICE SANCTUM
 * مركز استقبال الأوامر الصوتية الملكية ومعالجتها عبر Whisper بالهوية الهرمية الجديدة.
 * المالك الوحيد: المعتصم بالله ادريس الغزالي // 2026
 */
export default function VoicePage() {
  const [mounted, setMounted] = React.useState(false);
  const [lastCommand, setLastCommand] = React.useState<string | null>(null);
  const [isProcessing, setIsProcessing] = React.useState(false);
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
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
        toast({ title: "Intent Materialized", description: "Your Royal directive is being synchronized across the mesh." });
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
          className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x)_var(--y),rgba(212,175,55,0.08),transparent 40%)] pointer-events-none transition-all duration-300 z-0" 
          style={{ '--x': `${mousePos.x}px`, '--y': `${mousePos.y}px` } as any} 
        />
        
        <header className="mb-12 relative z-10 animate-in fade-in slide-in-from-top-6 duration-1000">
          <div className="flex flex-col md:flex-row items-center gap-8 justify-center md:justify-end">
            <div className="size-24 md:size-32 bg-black border-4 border-primary flex items-center justify-center shadow-[0_0_100px_rgba(212,175,55,0.5)] relative group shrink-0 rounded-3xl rotate-2 hover:rotate-0 transition-all duration-1000 hierarchical-shadow">
              <Mic className="size-12 md:size-16 text-primary group-hover:scale-110 transition-transform duration-700 gold-glow animate-neural" />
              <div className="absolute -inset-4 border-2 border-primary/20 rounded-full animate-spin-slow opacity-30" />
            </div>
            <div className="text-center md:text-right">
              <div className="flex flex-wrap justify-center md:justify-end items-center gap-4 mb-4">
                <Badge className="bg-primary text-black border-none rounded-none px-6 py-2 text-[14px] md:text-[16px] font-black tracking-[0.5em] shadow-2xl italic">WHISPER v53.0 SUPREME</Badge>
                <div className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-emerald-500 animate-pulse">
                    <Radio className="size-5 shadow-lg" /> RESONANCE: ACTIVE
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-8xl font-headline font-bold text-white tracking-tighter italic uppercase gold-glow leading-none">
                The Living <span className="text-primary">Ear</span>
              </h1>
              <p className="text-sm md:text-xl lg:text-2xl text-muted-foreground mt-4 italic max-w-5xl leading-relaxed uppercase font-medium opacity-80">
                "سيدي القائد <span className="text-white font-black underline decoration-primary decoration-4 underline-offset-8 shadow-xl uppercase tracking-widest">المعتصم بالله</span>، العرش يسمعك الآن بدقة نانوية؛ نيتك الصوتية هي أمر تنفيذي في عصب المصفوفة."
              </p>
            </div>
          </div>
        </header>

        <div className="flex-1 flex flex-col items-center justify-center relative z-10 pb-32">
           <div className="w-full max-w-4xl space-y-16">
              <div className="flex justify-center animate-in zoom-in-95 duration-1000">
                 <VoiceCommand onCommand={handleVoiceInput} />
              </div>
              
              {isProcessing && (
                <div className="flex flex-col items-center gap-8 animate-in fade-in zoom-in-95 duration-1000">
                   <div className="relative">
                      <Atom className="size-20 md:size-24 text-primary animate-spin-slow gold-glow" />
                      <div className="absolute -inset-6 border-4 border-dashed border-primary/20 rounded-full animate-reverse-spin" />
                   </div>
                   <span className="text-xl md:text-3xl font-black text-primary uppercase tracking-[0.4em] italic gold-glow text-center">Synthesizing Voice Directive...</span>
                </div>
              )}

              {lastCommand && !isProcessing && (
                <Card className="kali-card border-primary/60 bg-black/95 rounded-[3rem] p-8 md:p-12 border-4 shadow-9xl animate-in slide-in-from-bottom-6 duration-1000 group overflow-hidden hierarchical-shadow text-right">
                   <div className="absolute inset-0 bg-primary/5 opacity-5 animate-pulse pointer-events-none" />
                   <CardHeader className="p-0 mb-8 border-b-2 border-white/5 pb-6 flex flex-row items-center justify-between bg-primary/5 rounded-t-2xl px-6 py-4">
                      <Badge className="bg-emerald-600/20 text-emerald-500 border-2 border-emerald-500/30 px-6 py-1 rounded-full font-black text-xs tracking-widest uppercase animate-pulse">EXECUTED</Badge>
                      <div className="flex items-center gap-6">
                        <CardTitle className="text-xl md:text-3xl text-primary font-black uppercase italic gold-glow">Captured Intent</CardTitle>
                        <Zap className="size-8 md:size-10 text-primary animate-neural" />
                      </div>
                   </CardHeader>
                   <CardContent className="p-0 space-y-8">
                      <div className="p-8 md:p-12 bg-black/60 rounded-[2.5rem] border-2 border-primary/20 text-2xl md:text-5xl text-white italic font-black shadow-inner leading-tight selection:bg-primary selection:text-black text-center">
                         "{lastCommand}"
                      </div>
                      <div className="flex justify-between items-center opacity-40 text-[10px] font-black uppercase tracking-[1.5em] italic px-6">
                         <span className="flex items-center gap-4 text-emerald-500"><Activity className="size-5 animate-pulse" /> HIVE_ALIGNED</span>
                         <span className="flex items-center gap-4"><Fingerprint className="size-5 text-primary" /> GHAZALI_ROOT</span>
                      </div>
                   </CardContent>
                   <div className="absolute -bottom-6 -right-6 p-10 opacity-[0.02] group-hover:opacity-[0.08] transition-all duration-700 scale-150">
                      <Skull className="size-32 text-primary" />
                   </div>
                </Card>
              )}
              
              {!lastCommand && !isProcessing && (
                 <div className="flex flex-col items-center justify-center opacity-10 py-20 animate-in fade-in duration-1000">
                    <AudioLines className="size-48 text-primary/40 animate-pulse mb-8" />
                    <h3 className="text-4xl md:text-6xl font-black uppercase tracking-[1.5em] text-white italic gold-glow">Awaiting Voice</h3>
                 </div>
              )}
           </div>
        </div>

        <div className="mt-auto relative z-10 flex justify-center items-center gap-16 opacity-40 text-[12px] md:text-[18px] font-black uppercase tracking-[2em] md:tracking-[6em] italic text-white drop-shadow-xl pb-12">
            <span>AL-MUIZZ SUPREME HIERARCHY v53.0</span>
            <div className="size-4 rounded-full bg-white animate-pulse shadow-[0_0_40px_white]" />
            <span>HEARING_THE_COMMANDER_2026</span>
        </div>
      </main>
    </div>
  );
}
