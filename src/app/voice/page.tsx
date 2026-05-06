
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
  AudioLines
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

/**
 * @fileOverview صفحة أذن النور v50.0 - THE SOVEREIGN VOICE SANCTUM
 * مركز استقبال الأوامر الصوتية الملكية ومعالجتها عبر Whisper.
 */
export default function VoicePage() {
  const [mounted, setMounted] = React.useState(false);
  const [lastCommand, setLastCommand] = React.useState<string | null>(null);
  const [isProcessing, setIsProcessing] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
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
        toast({ title: "تم التقاط النية", description: "أمرك مطاع سيدي القائد." });
      }
    } catch (err) {
      toast({ variant: "destructive", title: "فشل الربط العصبي" });
    } finally {
      setIsProcessing(false);
    }
  };

  if (!mounted) return null;

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/30 relative overflow-x-hidden scanline-effect font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-80 p-8 md:p-16 relative overflow-y-auto min-h-screen scrollbar-hide flex flex-col z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.1),transparent)] pointer-events-none transition-all duration-300 z-0" />
        
        <header className="mb-20 relative z-10 animate-in fade-in slide-in-from-top-8 duration-1000">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="size-32 md:size-48 bg-black border-4 border-primary flex items-center justify-center shadow-[0_0_150px_rgba(212,175,55,0.7)] relative group shrink-0 rounded-[3rem] transition-all duration-1000">
              <Mic className="size-16 md:size-24 text-primary group-hover:scale-110 transition-transform duration-700 gold-glow animate-neural" />
              <div className="absolute -inset-6 border-2 border-primary/20 rounded-full animate-spin-slow opacity-40" />
            </div>
            <div className="text-center md:text-right flex-1">
              <div className="flex flex-wrap justify-center md:justify-start items-center gap-6 mb-6">
                <Badge className="bg-primary text-black border-none rounded-none px-10 py-3 text-[18px] font-black tracking-[0.8em] shadow-[0_0_80px_rgba(212,175,55,0.5)] italic">WHISPER_v50.0_ULTIMATE</Badge>
                <div className="flex items-center gap-4 text-[14px] font-black uppercase tracking-widest text-emerald-500 animate-pulse">
                    <Radio className="size-6 shadow-[0_0_30px_emerald]" /> RESONANCE: ACTIVE
                </div>
              </div>
              <h1 className="text-7xl md:text-[11rem] font-headline font-bold text-white tracking-tighter italic uppercase leading-none gold-glow">
                The Living <span className="text-primary">Ear</span>
              </h1>
              <p className="text-2xl md:text-5xl text-muted-foreground mt-8 italic max-w-6xl leading-relaxed uppercase font-medium">
                "سيدي الغزالي، العرش يسمعك الآن بدقة نانوية لعام 2026. تحدث بأمرك، وسينفذ المُعِزّ إرادتك في صلب المصفوفة فوراً."
              </p>
            </div>
          </div>
        </header>

        <div className="flex-1 flex flex-col items-center justify-center relative z-10 pb-40">
           <div className="w-full max-w-6xl space-y-20">
              <div className="flex justify-center">
                 <VoiceCommand onCommand={handleVoiceInput} />
              </div>
              
              {isProcessing && (
                <div className="flex flex-col items-center gap-12 animate-in fade-in zoom-in-95 duration-1000">
                   <div className="relative">
                      <Atom className="size-32 text-primary animate-spin-slow gold-glow" />
                      <div className="absolute -inset-10 border-4 border-dashed border-primary/20 rounded-full animate-reverse-spin" />
                   </div>
                   <span className="text-4xl font-black text-primary uppercase tracking-[0.5em] italic gold-glow">Synthesizing Voice Directive...</span>
                </div>
              )}

              {lastCommand && !isProcessing && (
                <Card className="kali-card border-primary/60 bg-black/95 rounded-[5rem] p-16 border-8 shadow-9xl animate-in slide-in-from-bottom-12 duration-1000 group overflow-hidden">
                   <div className="absolute inset-0 bg-primary/5 opacity-5 animate-pulse pointer-events-none" />
                   <CardHeader className="p-0 mb-10 border-b-8 border-white/5 pb-10 flex flex-row items-center justify-between bg-primary/5 rounded-t-[3rem] px-10 py-6">
                      <CardTitle className="text-4xl text-primary font-black uppercase italic flex items-center gap-10 gold-glow">
                        <Zap className="size-14 animate-neural" /> Captured Intent
                      </CardTitle>
                      <Badge className="bg-emerald-600/40 text-emerald-500 border-4 border-emerald-500/50 px-12 py-4 rounded-full font-black text-3xl italic tracking-widest uppercase animate-pulse shadow-3xl">EXECUTED</Badge>
                   </CardHeader>
                   <CardContent className="p-0 space-y-12">
                      <div className="p-16 bg-black/60 rounded-[4rem] border-4 border-primary/30 text-5xl md:text-7xl text-white italic font-black shadow-inner leading-tight selection:bg-primary selection:text-black">
                         "{lastCommand}"
                      </div>
                      <div className="flex justify-between items-center opacity-40 text-[14px] font-black uppercase tracking-[2em] italic px-10">
                         <span className="flex items-center gap-6"><Fingerprint className="size-8 text-primary" /> GHAZALI_ROOT</span>
                         <span className="flex items-center gap-6 text-emerald-500"><Activity className="size-8 animate-pulse" /> HIVE_ALIGNED</span>
                      </div>
                   </CardContent>
                   <div className="absolute -bottom-10 -right-10 p-20 opacity-[0.02] group-hover:opacity-[0.08] transition-all duration-1000 scale-150">
                      <Skull className="size-64 text-primary" />
                   </div>
                </Card>
              )}
              
              {!lastCommand && !isProcessing && (
                 <div className="flex flex-col items-center justify-center opacity-10 py-40">
                    <AudioLines className="size-64 text-primary/40 animate-pulse mb-12" />
                    <h3 className="text-7xl font-black uppercase tracking-[2em] text-white italic">Awaiting Voice</h3>
                 </div>
              )}
           </div>
        </div>

        <div className="mt-auto relative z-10 flex justify-center items-center gap-48 opacity-40 text-[22px] font-black uppercase tracking-[6em] italic text-white drop-shadow-3xl pb-12">
            <span>AL-MUIZZ VOICE SANCTUM v50.0</span>
            <div className="size-10 rounded-full bg-white animate-pulse shadow-[0_0_100px_white]" />
            <span>HEARING_THE_COMMANDER_2026</span>
        </div>
      </main>
    </div>
  );
}
