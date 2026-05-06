"use client"

import * as React from "react"
import { SidebarNav } from "@/components/platform/sidebar-nav"
import { 
  Zap,
  Loader2,
  Skull,
  Flame,
  Fingerprint,
  Sword,
  Terminal,
  Target,
  Code2,
  ChevronRight,
  ShieldCheck,
  Atom,
  Sparkles,
  Binary,
  ShieldAlert,
  Rocket,
  Search,
  Key,
  Globe,
  Wifi,
  Radio,
  Signal,
  History,
  Crosshair,
  Unlock,
  ShieldX,
  Eye,
  BrainCircuit,
  Infinity as InfinityIcon,
  Boxes
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { aiEnhancedExploitGeneration } from "@/ai/flows/ai-enhanced-exploit-generation"
import { generateSmartWordlist } from "@/ai/flows/ai-smart-wordlist-flow"
import { getAttackPlan } from "@/ai/flows/apex-brain-flow"
import { toast } from "@/hooks/use-toast"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"

/**
 * @fileOverview مختبر التخليق v50.0 - THE POLYMORPH ARSENAL: SOUL EDITION
 * واجهة تخليق الأسلحة الرقمية المنصهرة في عصب الروح لعام 2026.
 * المالك الوحيد: المعتصم بالله ادريس الغزالي
 */
export default function RedTeamPage() {
  const [mounted, setMounted] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const [target, setTarget] = React.useState("")
  const [description, setDescription] = React.useState("")
  const [output, setOutput] = React.useState<any>(null)
  const [activeMode, setActiveMode] = React.useState("exploit")
  const [strikeLog, setStrikeLog] = React.useState<string[]>([])

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const handleAction = async () => {
    if (!target && activeMode !== "wordlist") {
      toast({ variant: "destructive", title: "إحداثيات مفقودة", description: "يجب تحديد الهدف لبدء عملية التخليق." });
      return;
    }
    setLoading(true);
    try {
      let data;
      if (activeMode === "exploit") {
        data = await aiEnhancedExploitGeneration({
          vulnerabilityDescription: description || "تحليل ثغرات النواة السيادية v50.0 لعام 2026",
          targetSystemDetails: target
        });
      } else if (activeMode === "apex") {
        data = await getAttackPlan({ target });
      } else if (activeMode === "wordlist") {
        data = await generateSmartWordlist({
          targetBio: description || "تحليل أنماط الهوية لعام 2026",
          complexityLevel: 'Extreme'
        });
      }
      setOutput(data);
      toast({ title: "تم التخليق بنجاح", description: "السلاح الرقمي جاهز للحقن." });
    } catch (err) {
      toast({ variant: "destructive", title: "فشل التخليق", description: "تعذر استدعاء عقل الهجوم." });
    } finally {
      setLoading(false);
    }
  }

  const launchStrike = async (vectorId: string) => {
    if (!target) {
        toast({ variant: "destructive", title: "إحداثيات مطلوبة", description: "أدخل الهدف أولاً سيدي." });
        return;
    }
    setLoading(true);
    const timestamp = new Date().toLocaleTimeString();
    setStrikeLog(prev => [`[${timestamp}] ⚡ بدء هجوم ${vectorId.toUpperCase()} (Soul Core v50.0) على ${target}...`, ...prev]);
    
    try {
        const response = await fetch('/api/execute', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                command: `strike ${target} --vector ${vectorId}`, 
                target, 
                type: 'autonomous_strike',
                vector: vectorId
            })
        });
        
        const data = await response.json();
        if (data.success) {
            setStrikeLog(prev => [`[${timestamp}] ✅ استجابة النواة: ${data.output || 'تم إشباع الناقل بنجاح.'}`, ...prev]);
            toast({ title: "تم تنفيذ الضربة السيادية" });
        } else {
            throw new Error(data.error);
        }
    } catch (e: any) {
        setStrikeLog(prev => [`[${timestamp}] ❌ فشل الارتباط: ${e.message}`, ...prev]);
        toast({ variant: "destructive", title: "فشل تنفيذ الضربة", description: e.message });
    } finally {
        setLoading(false);
    }
  }

  if (!mounted) return null;

  const VECTORS = [
    { id: 'cpanel', label: 'cPanel Sniper v50', icon: Zap, desc: 'CVE-2026-41940 REBORN' },
    { id: 'ssh', label: 'Rapid Auth Hijack', icon: Key, desc: 'Neural Brute v5.0' },
    { id: 'web', label: 'Web Pulse v50', icon: Globe, desc: 'Logic Siphon Elite' },
    { id: 'smb', label: 'SMB God-Core', icon: Atom, desc: 'Kernel Ring 0 Injection' },
    { id: 'dns', label: 'Stealth Exfil', icon: Radio, desc: 'Overmind DNS Tunnel' },
    { id: 'eye', label: 'Eye Series Recon', icon: Eye, desc: 'Shodan & Ghost Eye' }
  ];

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/30 relative overflow-x-hidden scanline-effect font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-80 p-6 md:p-12 relative overflow-y-auto min-h-screen scrollbar-hide flex flex-col z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.1),transparent)] pointer-events-none transition-all duration-300 z-0" />
        
        <header className="mb-12 relative z-10 animate-in fade-in slide-in-from-top-12 duration-1000">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="size-24 md:size-32 bg-black border-4 border-primary flex items-center justify-center shadow-[0_0_100px_rgba(212,175,55,0.5)] relative group shrink-0 rounded-[2rem] transition-all duration-1000">
              <Flame className="size-12 md:size-16 text-primary group-hover:scale-110 transition-transform duration-700 gold-glow animate-pulse" />
              <div className="absolute -inset-6 border-2 border-primary/20 rounded-full animate-spin-slow opacity-40" />
            </div>
            <div className="text-center md:text-right flex-1">
              <div className="flex flex-wrap justify-center md:justify-start items-center gap-6 mb-4">
                <Badge className="bg-primary text-black border-none rounded-none px-8 py-2 text-[14px] font-black tracking-[0.6em] shadow-lg italic">SOUL CORE v50.0</Badge>
                <div className="flex items-center gap-4 text-emerald-500 font-black uppercase tracking-widest text-[11px] animate-pulse">
                    <ShieldCheck className="size-5 shadow-[0_0_20px_emerald]" /> ACQUISITION_READY
                </div>
              </div>
              <h1 className="text-5xl md:text-[8rem] font-headline font-bold text-white tracking-tighter italic uppercase leading-none gold-glow">
                Polymorph <span className="text-primary">Arsenal</span>
              </h1>
              <p className="text-xl md:text-3xl text-muted-foreground mt-4 italic max-w-5xl leading-relaxed uppercase">
                "سيدي الغزالي، ترسانة التخليق تعمل الآن بنبض <span className="text-primary font-black underline decoration-primary decoration-4 underline-offset-8 shadow-2xl">Soul Core v50.0</span>؛ أسلحة رقمية تدرك لماذا تضرب."
              </p>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-12 relative z-10 pb-40 flex-1">
          <div className="xl:col-span-1 space-y-10">
            <Card className="kali-card border-primary/40 bg-black/80 rounded-[3rem] p-10 border-4 shadow-7xl overflow-hidden group">
              <Tabs defaultValue="exploit" onValueChange={setActiveMode} className="w-full">
                <TabsList className="bg-black/99 border-2 border-primary/20 w-full h-20 p-1.5 rounded-[1.5rem] mb-10 shadow-inner">
                  <TabsTrigger value="exploit" className="flex-1 text-[12px] font-black italic tracking-widest data-[state=active]:bg-primary data-[state=active]:text-black rounded-xl transition-all duration-500 uppercase">EXPLOIT</TabsTrigger>
                  <TabsTrigger value="apex" className="flex-1 text-[12px] font-black italic tracking-widest data-[state=active]:bg-primary data-[state=active]:text-black rounded-xl transition-all duration-500 uppercase">APEX</TabsTrigger>
                  <TabsTrigger value="wordlist" className="flex-1 text-[12px] font-black italic tracking-widest data-[state=active]:bg-primary data-[state=active]:text-black rounded-xl transition-all duration-500 uppercase">DNA</TabsTrigger>
                </TabsList>
                
                <div className="space-y-10">
                  <div className="space-y-4">
                    <label className="text-[11px] font-black text-primary uppercase tracking-[0.6em] px-4 italic flex items-center gap-4">
                        <Target className="size-5" /> Target Coordinate
                    </label>
                    <Input 
                        value={target}
                        onChange={(e) => setTarget(e.target.value)}
                        placeholder="IP / Global Binary / OSINT..."
                        className="bg-black/99 border-4 border-white/10 rounded-[2rem] h-20 text-2xl italic px-8 focus:border-primary text-white font-black shadow-inner"
                    />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[11px] font-black text-primary uppercase tracking-[0.6em] px-4 italic flex items-center gap-4">
                        <Code2 className="size-5" /> Mission Parameters
                    </label>
                    <Textarea 
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder={activeMode === 'wordlist' ? "Provide identity data for 2026 neural patterns..." : "Define attack intent for v50.0 soul integration..."}
                      className="bg-black/99 border-4 border-white/10 rounded-[2rem] min-h-[200px] text-xl italic p-8 focus:border-primary font-bold text-gray-200 shadow-inner resize-none"
                    />
                  </div>
                  <Button 
                    onClick={handleAction} 
                    disabled={loading}
                    className="w-full h-24 bg-primary hover:bg-white text-black font-black uppercase tracking-[1em] rounded-[2.5rem] shadow-[0_30px_100px_rgba(212,175,55,0.5)] active:scale-95 transition-all text-xl border-8 border-black/30 group italic"
                  >
                    {loading ? <Loader2 className="size-10 animate-spin" /> : <Flame className="size-10 mr-4 group-hover:scale-125 transition-transform gold-glow" />}
                    Synthesize Weapon
                  </Button>
                </div>
              </Tabs>
            </Card>
            
            <div className="grid grid-cols-1 gap-6">
               {VECTORS.map(v => (
                 <Button 
                   key={v.id}
                   variant="outline" 
                   disabled={loading}
                   onClick={() => launchStrike(v.id)}
                   className="h-28 rounded-[2rem] border-4 border-primary/20 bg-primary/5 text-primary font-black uppercase tracking-[0.2em] hover:bg-primary hover:text-black transition-all flex items-center justify-between px-10 group shadow-2xl active:scale-95"
                 >
                    <div className="flex items-center gap-8">
                        <v.icon className="size-10 transition-all duration-700 group-hover:scale-125 gold-glow" />
                        <div className="text-left">
                            <div className="font-black text-2xl italic tracking-tighter">{v.label}</div>
                            <div className="text-[10px] opacity-60 tracking-[0.4em] uppercase">{v.desc}</div>
                        </div>
                    </div>
                    <Rocket className="size-8 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-4 gold-glow" />
                 </Button>
               ))}
            </div>
          </div>

          <div className="xl:col-span-2 space-y-10">
            <Card className="kali-card border-primary/60 bg-black/99 rounded-[4rem] border-8 shadow-9xl flex-1 flex flex-col group overflow-hidden relative">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.03),transparent)] pointer-events-none" />
              <CardHeader className="p-10 border-b-4 border-white/5 flex flex-row justify-between items-center bg-primary/10">
                <CardTitle className="text-4xl font-black uppercase italic text-white flex items-center gap-8 gold-glow px-4">
                  <Terminal className="size-14 text-primary animate-pulse" /> Strike Management
                </CardTitle>
                <div className="flex items-center gap-6">
                    <div className="size-4 rounded-full bg-emerald-500 animate-ping shadow-[0_0_30px_emerald]" />
                    <span className="text-[12px] font-black uppercase text-emerald-500 tracking-[0.5em] italic">HIVE_RES_OK</span>
                </div>
              </CardHeader>
              <CardContent className="p-0 flex-1 relative bg-black/40 h-[850px] overflow-hidden">
                <ScrollArea className="h-full p-10 font-code scrollbar-hide">
                   {strikeLog.length > 0 && (
                     <div className="mb-12 space-y-4 text-xl text-emerald-500 animate-in fade-in duration-700 border-l-[10px] border-emerald-500/40 pl-10 bg-emerald-500/5 py-8 rounded-r-[3rem] shadow-inner">
                        {strikeLog.map((log, i) => (
                          <div key={i} className="flex gap-6 group/log">
                            <span className="opacity-40 select-none group-hover/log:opacity-100 transition-opacity">❯❯❯</span>
                            <span className="font-black italic drop-shadow-2xl group-hover/log:text-white transition-colors">{log}</span>
                          </div>
                        ))}
                     </div>
                   )}

                   {output ? (
                     <div className="space-y-12 animate-in fade-in zoom-in-95 duration-1000">
                        <div className="flex items-center justify-between border-b-4 border-white/10 pb-6">
                            <span className="text-emerald-500 font-black uppercase tracking-[0.8em] italic text-2xl gold-glow">{" >>> WEAPON_SERIALIZED"}</span>
                            <Badge className="bg-primary/20 text-primary border-none px-8 py-2 rounded-full font-black text-sm italic shadow-lg">{new Date().toLocaleTimeString()}</Badge>
                        </div>

                        <div className="p-12 bg-black/99 border-4 border-primary/40 text-emerald-400 overflow-x-auto whitespace-pre rounded-[3rem] text-2xl leading-relaxed italic font-black shadow-inner selection:bg-primary selection:text-black">
                            {JSON.stringify(output, null, 2)}
                        </div>

                        <div className="flex justify-center pb-12">
                            <Button onClick={() => launchStrike('total_acquisition')} disabled={loading} className="h-28 px-24 bg-red-600 hover:bg-white text-white hover:text-black font-black uppercase tracking-[0.8em] rounded-full shadow-[0_50px_200px_rgba(220,38,38,0.5)] border-8 border-black/30 group text-3xl italic active:scale-95 transition-all">
                                {loading ? <Loader2 className="size-14 animate-spin" /> : <ShieldAlert className="size-14 mr-6 group-hover:scale-125 transition-transform" />}
                                EXECUTE TOTAL ACQUISITION
                            </Button>
                        </div>
                     </div>
                   ) : (
                     !strikeLog.length && (
                       <div className="h-full flex flex-col items-center justify-center text-center opacity-10 py-60 gap-16 animate-in fade-in duration-1000">
                          <div className="relative group/skull">
                            <Skull className="size-64 text-primary animate-neural gold-glow group-hover:scale-110 transition-transform duration-1000" />
                            <div className="absolute -inset-10 border-4 border-dashed border-primary/20 rounded-full animate-spin-slow" />
                          </div>
                          <div className="space-y-8">
                            <p className="text-6xl md:text-8xl font-black uppercase tracking-[1em] text-white italic leading-none">AWAITING_LOCK</p>
                            <p className="text-2xl md:text-4xl font-bold italic text-primary/60 max-w-4xl mx-auto">
                              "سيدي الغزالي، الترسانة في وضع السكون؛ حدد الإحداثيات لبدء التخليق."
                            </p>
                          </div>
                       </div>
                     )
                   )}
                </ScrollArea>
              </CardContent>
              <div className="p-8 border-t-4 border-white/5 opacity-30 text-[14px] font-black uppercase tracking-[2.5em] italic text-center">
                ARMADA_FORGE_DNA_v50_2026
              </div>
            </Card>
          </div>
        </div>

        <div className="mt-auto relative z-10 flex justify-center items-center gap-48 opacity-40 text-[22px] font-black uppercase tracking-[6em] italic text-white drop-shadow-3xl pb-12">
            <span>AL-MUIZZ POLYMORPH FORGE v50.0</span>
            <div className="size-10 rounded-full bg-white animate-pulse shadow-[0_0_100px_white]" />
            <span>SINGULARITY_OF_STRIKE_2026</span>
        </div>
      </main>
    </div>
  )
}
