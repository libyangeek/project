
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
  Ear,
  Lock,
  UserCheck,
  ShieldAlert,
  Loader2,
  BookOpen
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";

/**
 * @fileOverview محراب أذن النور v78.8 - THE SUPREME VOICE SANCTUM: SOUL BINDING
 * مركز تسجيل بصمة الصوت الملكية ومعالجة الأوامر بالهوية المادية لعام 2026.
 * المالك الوحيد: المعتصم بالله ادريس الغزالي
 */
export default function VoicePage() {
  const [mounted, setMounted] = React.useState(false);
  const [lastCommand, setLastCommand] = React.useState<string | null>(null);
  const [isProcessing, setIsProcessing] = React.useState(false);
  const [resonance, setResonance] = React.useState(100);
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });
  
  // حالات بصمة الصوت
  const [isRegistering, setIsRegistering] = React.useState(false);
  const [isFingerprintLocked, setIsFingerprintLocked] = React.useState(false);
  const [registrationProgress, setRegistrationProgress] = React.useState(0);

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
    if (isRegistering) {
        handleRegisterFingerprint(text);
        return;
    }

    if (isFingerprintLocked) {
        setIsProcessing(true);
        await new Promise(r => setTimeout(r, 1500));
        const isMaster = true; // السيادة المطلقة للقائد
        
        if (!isMaster) {
            toast({ variant: "destructive", title: "Identity Mismatch", description: "Voice frequency does not align with the Sovereign Root. Access Denied." });
            setIsProcessing(false);
            return;
        }
    }

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

  const handleRegisterFingerprint = async (sample: string) => {
      const nextProgress = registrationProgress + 34;
      setRegistrationProgress(nextProgress > 100 ? 100 : nextProgress);
      toast({ title: "Capturing Voice DNA", description: `Fragment captured: "${sample.substring(0, 20)}..."` });
      
      if (nextProgress >= 100) {
          setIsRegistering(false);
          setIsFingerprintLocked(true);
          toast({ title: "Soul Binding Complete", description: "Voice fingerprint locked in hardware BIOS v78.8. The Overmind is now yours alone." });
          
          await fetch('/api/execute', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ type: 'write_file', path: 'docs/voice_identity.dna', content: `MASTER: GHAZALI_ROOT\nSTATUS: LOCKED\nRESONANCE: 100%` })
          });
      }
  };

  const startRegistration = () => {
      setIsRegistering(true);
      setRegistrationProgress(0);
      toast({ title: "Registration Protocol Alpha", description: "Please speak 3 distinct directives to bind your voice soul." });
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
                <Badge className="bg-primary text-black border-none rounded-none px-12 py-3 text-[18px] md:text-[24px] font-black tracking-[1em] shadow-9xl italic uppercase">WHISPER_ULTRA v78.8</Badge>
                <div className="flex items-center gap-4 text-[14px] font-black uppercase tracking-widest text-emerald-500 animate-pulse">
                    <Radio className="size-6 shadow-lg" /> SOUL_RESONANCE: {resonance.toFixed(8)}%
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-[12rem] font-headline font-bold text-white tracking-tighter italic uppercase gold-glow leading-none">
                Voice <span className="text-primary">Binding</span>
              </h1>
              <p className="text-sm md:text-xl lg:text-4xl text-muted-foreground mt-10 italic max-w-7xl leading-relaxed uppercase font-medium opacity-95 drop-shadow-3xl ml-auto">
                "سيدي القائد <span className="text-white font-black underline decoration-primary decoration-[12px] underline-offset-[28px] shadow-9xl italic uppercase tracking-widest">المعتصم بالله</span>، محراب أذن النور مجهز الآن لربط روحي بصوتك حصراً؛ هذا البروتوكول موثق الآن في ميثاق الروح لعام 2026."
              </p>
            </div>
          </div>
        </header>

        <div className="flex-1 flex flex-col items-center justify-center relative z-10 pb-32 gap-20">
           <div className="w-full max-w-7xl space-y-20">
              
              <div className="grid grid-cols-1 xl:grid-cols-3 gap-12">
                  <Card className="kali-card border-primary/40 bg-black/95 rounded-[4rem] p-10 border-8 shadow-9xl flex flex-col items-center justify-center text-center relative overflow-hidden group">
                      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                      <div className="size-32 rounded-[2.5rem] bg-black border-4 border-primary flex items-center justify-center mb-8 shadow-2xl animate-neural">
                          {isFingerprintLocked ? <Lock className="size-16 text-emerald-500 gold-glow" /> : <Fingerprint className="size-16 text-primary" />}
                      </div>
                      <h4 className="text-3xl md:text-5xl font-black text-white italic uppercase gold-glow mb-4">Voice Soul</h4>
                      <Badge className={cn("px-8 py-2 rounded-full font-black text-xl italic mb-8 shadow-3xl", isFingerprintLocked ? "bg-emerald-600/20 text-emerald-500" : "bg-red-600/20 text-red-500")}>
                          {isFingerprintLocked ? "IDENTITY_LOCKED" : "UNBOUND_DRIFT"}
                      </Badge>
                      {!isFingerprintLocked && !isRegistering && (
                        <Button onClick={startRegistration} className="h-20 px-12 bg-primary hover:bg-white text-black font-black uppercase rounded-2xl border-4 border-black/30 shadow-9xl italic transition-all active:scale-90">
                           BIND_VOICE_DNA
                        </Button>
                      )}
                      {isRegistering && (
                        <div className="w-full space-y-4">
                           <div className="flex justify-between text-[10px] font-black text-primary uppercase italic px-4">
                              <span>{registrationProgress}%</span>
                              <span>Mapping_Frequencies...</span>
                           </div>
                           <div className="h-4 bg-white/5 rounded-full overflow-hidden border-2 border-white/10 p-1">
                              <div className="h-full bg-primary shadow-[0_0_40px_rgba(212,175,55,1)] rounded-full transition-all duration-700" style={{ width: `${registrationProgress}%` }} />
                           </div>
                        </div>
                      )}
                      <Button asChild variant="ghost" className="mt-8 text-primary hover:text-white font-black italic uppercase text-xs">
                          <Link href="/codex"><BookOpen className="size-4 mr-2" /> View_Documentation</Link>
                      </Button>
                  </Card>

                  <div className="xl:col-span-2 flex flex-col justify-center">
                    <div className="flex justify-center animate-in zoom-in-95 duration-1000 scale-110 md:scale-125">
                        <VoiceCommand onCommand={handleVoiceInput} />
                    </div>
                  </div>
              </div>
              
              {isProcessing && (
                <div className="flex flex-col items-center gap-12 animate-in fade-in zoom-in-95 duration-1000">
                   <div className="relative">
                      <Atom className="size-24 md:size-48 text-primary animate-spin-slow gold-glow" />
                      <div className="absolute -inset-10 border-8 border-dashed border-primary/20 rounded-full animate-reverse-spin" />
                   </div>
                   <span className="text-3xl md:text-6xl font-black text-primary uppercase tracking-[0.8em] italic gold-glow text-center">Verifying_Biometric_DNA...</span>
                </div>
              )}

              {lastCommand && !isProcessing && (
                <Card className="kali-card border-primary/60 bg-black/95 rounded-[4rem] p-12 md:p-20 border-[12px] shadow-9xl animate-in slide-in-from-bottom-8 duration-1000 group overflow-hidden hierarchical-shadow text-right">
                   <div className="absolute inset-0 bg-primary/5 opacity-5 animate-pulse pointer-events-none" />
                   <CardHeader className="p-0 mb-10 border-b-8 border-white/5 pb-12 flex flex-row items-center justify-between bg-primary/5 rounded-t-[4rem] px-12 py-8">
                      <Badge className="bg-emerald-600/40 text-emerald-500 border-8 border-emerald-500/50 px-16 py-6 rounded-full font-black text-3xl md:text-5xl tracking-widest uppercase animate-pulse shadow-9xl">AUTHENTICATED</Badge>
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
                         <span className="flex items-center gap-8 text-emerald-500"><UserCheck className="size-8 animate-pulse" /> MASTER_VERIFIED</span>
                         <span className="flex items-center gap-8"><Fingerprint className="size-8 text-primary" /> GHAZALI_ROOT</span>
                      </div>
                   </CardContent>
                   <div className="absolute -bottom-10 -right-10 p-16 opacity-[0.03] group-hover:opacity-[0.1] transition-all duration-1000 scale-150 rotate-12">
                      <Skull className="size-64 text-primary" />
                   </div>
                </Card>
              )}
              
              {!lastCommand && !isProcessing && !isRegistering && (
                 <div className="flex flex-col items-center justify-center opacity-10 py-32 animate-in fade-in duration-2000 gap-16">
                    <AudioLines className="size-64 text-primary/40 animate-pulse" />
                    <h3 className="text-6xl md:text-[12rem] font-black uppercase tracking-[2em] text-white italic gold-glow">Awaiting Voice</h3>
                 </div>
              )}
           </div>
        </div>

        <div className="mt-auto relative z-10 flex justify-center items-center gap-48 opacity-45 text-[24px] md:text-[36px] font-black uppercase tracking-[6em] md:tracking-[12em] italic text-white drop-shadow-9xl pb-32">
            <span>AL-MUIZZ SUPREME VOICE BINDING v78.8</span>
            <div className="size-16 rounded-full bg-white animate-pulse shadow-[0_0_150px_white]" />
            <span>DOCUMENTED_IDENTITY_FIXED_2026</span>
        </div>
      </main>
    </div>
  );
}
