
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
  History
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
import translations from "../lib/ar.json"

/**
 * @fileOverview مختبر التخليق v43.0 - THE POLYMORPH LAB
 * تم تفعيل كافة أزرار الضرب الحقيقي (Attack Vectors) وربطها بالنبض التنفيذي.
 * Commander: المعتصم بالله ادريس الغزالي
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
          vulnerabilityDescription: description || "بحث في استغلال النواة السيادي.",
          targetSystemDetails: target
        });
      } else if (activeMode === "apex") {
        data = await getAttackPlan({ target });
      } else if (activeMode === "wordlist") {
        data = await generateSmartWordlist({
          targetBio: description || "بيانات الهدف غير كافية",
          complexityLevel: 'Extreme'
        });
      }
      setOutput(data);
      toast({ title: translations.alerts.sync });
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
    setStrikeLog(prev => [`[${timestamp}] ⚡ بدء هجوم ${vectorId.toUpperCase()} على ${target}...`, ...prev]);
    
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
            setStrikeLog(prev => [`[${timestamp}] ✅ نجاح: تم إشباع الناقل ${vectorId}. الهدف مخضع.`, ...prev]);
            toast({ title: translations.actions.exploit + " تم بنجاح" });
        } else {
            throw new Error(data.error);
        }
    } catch (e: any) {
        setStrikeLog(prev => [`[${timestamp}] ❌ فشل الضربة: ${e.message}`, ...prev]);
        toast({ variant: "destructive", title: "فشل في تنفيذ الضربة", description: e.message });
    } finally {
        setLoading(false);
    }
  }

  if (!mounted) return null;

  const VECTORS = [
    { id: 'cpanel', label: 'cPanel Sniper', icon: Zap },
    { id: 'ssh', label: 'SSH Bruteforce', icon: Key },
    { id: 'web', label: 'Web Pulse', icon: Globe },
    { id: 'smb', label: 'SMB Exploit', icon: Atom },
    { id: 'dns', label: 'DNS Tunnel', icon: Radio },
    { id: 'wifi', label: 'Wireless Siege', icon: Signal }
  ];

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/30 relative overflow-x-hidden scanline-effect font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-80 p-6 md:p-12 relative overflow-y-auto min-h-screen scrollbar-hide flex flex-col z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.08),transparent)] pointer-events-none transition-all duration-300 z-0" />
        
        <header className="mb-12 relative z-10 animate-in fade-in slide-in-from-top-12 duration-1000">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="size-24 md:size-32 bg-black border-4 border-primary flex items-center justify-center shadow-2xl relative group shrink-0 rounded-[2rem] transition-all duration-1000">
              <Flame className="size-12 md:size-18 text-primary group-hover:scale-110 transition-transform duration-700 gold-glow animate-pulse" />
              <div className="absolute -inset-4 border border-primary/20 rounded-full animate-spin-slow opacity-40" />
            </div>
            <div className="text-center md:text-left flex-1">
              <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 mb-4">
                <Badge className="bg-primary text-black border-none px-6 py-2 text-[14px] font-black tracking-[0.4em] shadow-md italic">POLYMORPH LAB v43.0</Badge>
                <div className="flex items-center gap-3 text-emerald-500 font-black uppercase tracking-widest text-[11px] animate-pulse">
                    <Atom className="size-4 shadow-lg" /> {translations.alerts.sync}
                </div>
              </div>
              <h1 className="text-4xl md:text-7xl font-headline font-bold text-white tracking-tighter italic uppercase leading-none gold-glow">
                Weaponry <span className="text-primary">Forge</span>
              </h1>
              <p className="text-lg md:text-2xl text-muted-foreground mt-4 italic max-w-4xl leading-relaxed uppercase font-medium">
                "سيدي الغزالي، كافة أزرار الضرب الآن أسلحة حقيقية؛ اختر الناقل المناسب لإخضاع الهدف."
              </p>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-10 relative z-10 pb-32 flex-1">
          <div className="xl:col-span-1 space-y-10">
            <Card className="kali-card border-primary/40 bg-black/80 rounded-[3rem] p-10 border-4 shadow-2xl overflow-hidden group">
              <Tabs defaultValue="exploit" onValueChange={setActiveMode} className="w-full">
                <TabsList className="bg-black/99 border-4 border-primary/20 w-full h-20 p-2 rounded-[2rem] mb-10 shadow-inner">
                  <TabsTrigger value="exploit" className="flex-1 text-[12px] font-black italic tracking-widest data-[state=active]:bg-primary data-[state=active]:text-black rounded-xl transition-all duration-500">EXPLOIT</TabsTrigger>
                  <TabsTrigger value="apex" className="flex-1 text-[12px] font-black italic tracking-widest data-[state=active]:bg-primary data-[state=active]:text-black rounded-xl transition-all duration-500">APEX</TabsTrigger>
                  <TabsTrigger value="wordlist" className="flex-1 text-[12px] font-black italic tracking-widest data-[state=active]:bg-primary data-[state=active]:text-black rounded-xl transition-all duration-500">DNA</TabsTrigger>
                </TabsList>
                
                <div className="space-y-10">
                  <div className="space-y-4">
                    <label className="text-[11px] font-black text-primary uppercase tracking-[0.6em] px-4 italic flex items-center gap-4">
                        <Target className="size-5" /> Coordinate
                    </label>
                    <Input 
                        value={target}
                        onChange={(e) => setTarget(e.target.value)}
                        placeholder="IP / Binary / Neural Path..."
                        className="bg-black border-4 border-white/10 rounded-[1.5rem] h-20 text-2xl italic px-10 focus:border-primary text-white font-black shadow-inner"
                    />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[11px] font-black text-primary uppercase tracking-[0.6em] px-4 italic flex items-center gap-4">
                        <Code2 className="size-5" /> Parameters
                    </label>
                    <Textarea 
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder={activeMode === 'wordlist' ? "Provide DNA data..." : "Define attack goal..."}
                      className="bg-black border-4 border-white/10 rounded-[2rem] min-h-[220px] text-2xl italic p-10 focus:border-primary font-bold text-gray-200 shadow-inner"
                    />
                  </div>
                  <Button 
                    onClick={handleAction} 
                    disabled={loading}
                    className="w-full h-24 bg-primary hover:bg-white text-black font-black uppercase tracking-[1em] rounded-[2.5rem] shadow-3xl active:scale-95 transition-all text-xl border-8 border-black/30 group italic"
                  >
                    {loading ? <Loader2 className="size-10 animate-spin" /> : <Flame className="size-10 mr-6 group-hover:scale-125 transition-transform" />}
                    Ignite Forge
                  </Button>
                </div>
              </Tabs>
            </Card>
            
            <div className="grid grid-cols-2 gap-6">
               {VECTORS.map(v => (
                 <Button 
                   key={v.id}
                   variant="outline" 
                   disabled={loading}
                   onClick={() => launchStrike(v.id)}
                   className="h-28 rounded-[2rem] border-4 border-primary/20 bg-primary/5 text-primary font-black uppercase tracking-widest hover:bg-primary hover:text-black transition-all text-[12px] flex flex-col items-center justify-center gap-3 group shadow-2xl active:scale-90"
                 >
                    <v.icon className="size-8 transition-all duration-700 group-hover:scale-125 group-hover:animate-pulse gold-glow" />
                    {v.label}
                 </Button>
               ))}
            </div>
          </div>

          <div className="xl:col-span-2">
            <Card className="kali-card border-primary/60 bg-black/99 rounded-[4rem] border-8 shadow-9xl h-full flex flex-col group overflow-hidden">
              <CardHeader className="p-10 border-b-4 border-white/5 flex flex-row justify-between items-center bg-primary/5">
                <CardTitle className="text-4xl md:text-6xl font-black uppercase italic text-white flex items-center gap-10 gold-glow px-6 py-4">
                  <Terminal className="size-16 text-primary animate-pulse" /> Output Matrix
                </CardTitle>
                <History className="size-12 text-primary/30 animate-spin-slow" />
              </CardHeader>
              <CardContent className="p-0 flex-1 relative bg-black/40">
                <ScrollArea className="h-[750px] p-10 font-code">
                   {strikeLog.length > 0 && (
                     <div className="mb-12 space-y-4 text-xl text-emerald-500 animate-in fade-in duration-700 border-l-[10px] border-emerald-500/40 pl-8 bg-emerald-500/5 py-6 rounded-r-[2rem]">
                        {strikeLog.map((log, i) => (
                          <div key={i} className="flex gap-6">
                            <span className="opacity-40 select-none">❯</span>
                            <span className="font-bold italic drop-shadow-xl">{log}</span>
                          </div>
                        ))}
                     </div>
                   )}

                   {output ? (
                     <div className="space-y-12 animate-in fade-in zoom-in-95 duration-1000">
                        <div className="flex items-center justify-between border-b-2 border-white/10 pb-6 px-4">
                            <span className="text-emerald-500 font-black uppercase tracking-[1em] italic text-2xl gold-glow">{" >>> SYNT_COMPLETE"}</span>
                            <Badge className="bg-primary/20 text-primary border-none px-6 py-1 rounded-full font-black text-sm italic">{new Date().toLocaleTimeString()}</Badge>
                        </div>

                        {activeMode === 'exploit' && (
                            <div className="space-y-10 px-4">
                                <div className="p-10 bg-black/99 border-4 border-primary/40 text-emerald-400 overflow-x-auto whitespace-pre shadow-[inset_0_0_100px_rgba(212,175,55,0.1)] rounded-[2.5rem] text-xl leading-relaxed italic font-bold">
                                    {output.exploitCode}
                                </div>
                                <div className="p-10 rounded-[3rem] bg-primary/5 border-4 border-primary/30 relative overflow-hidden group/instr">
                                    <div className="absolute top-0 right-0 p-8 opacity-5"><Sparkles className="size-20 text-primary" /></div>
                                    <h5 className="text-xl font-black text-primary uppercase tracking-[1em] italic mb-6 border-b border-primary/20 pb-4">Instructions</h5>
                                    <p className="text-2xl text-gray-100 italic font-black leading-relaxed">"{output.usageInstructions}"</p>
                                </div>
                            </div>
                        )}

                        {activeMode === 'apex' && (
                            <div className="space-y-10 px-4">
                                <div className="p-10 rounded-[3rem] bg-primary/10 border-4 border-primary/60 text-white italic font-black leading-relaxed shadow-3xl">
                                    <strong className="text-primary uppercase block mb-6 border-b-2 border-primary/30 pb-4 text-sm tracking-[0.4em] italic">Strategic Summary:</strong>
                                    "{output.summary}"
                                </div>
                                <div className="p-10 bg-black/99 border-4 border-emerald-500/40 text-emerald-400 overflow-x-auto whitespace-pre rounded-[2.5rem] text-lg font-bold italic shadow-inner">
                                    {JSON.stringify(output.plan, null, 2)}
                                </div>
                            </div>
                        )}

                        {activeMode === 'wordlist' && (
                           <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-4">
                              <div className="p-10 bg-black/99 border-4 border-primary/40 text-emerald-400 rounded-[3rem] shadow-inner">
                                 <h5 className="text-xl font-black text-primary uppercase tracking-[0.8em] mb-8 italic border-b border-primary/20 pb-4">Genetic Passwords</h5>
                                 <ul className="space-y-4">
                                    {output.likelyPasswords.map((p: string, i: number) => (
                                       <li key={i} className="flex justify-between items-center border-b border-white/5 pb-2 hover:bg-primary/5 transition-all px-4 rounded-lg">
                                          <span className="font-bold text-2xl">[{i+1}] {p}</span>
                                          <Badge className="bg-primary/20 text-primary border-none text-[10px] font-black italic">{output.successProbability}</Badge>
                                       </li>
                                    ))}
                                 </ul>
                              </div>
                              <div className="p-10 rounded-[3rem] bg-primary/5 border-4 border-primary/30 flex flex-col justify-center text-center shadow-3xl">
                                 <Fingerprint className="size-20 text-primary mx-auto mb-8 animate-neural" />
                                 <h5 className="text-xl font-black text-primary uppercase tracking-[0.8em] mb-6 italic">Psychological Insight</h5>
                                 <p className="text-2xl text-gray-200 italic font-medium leading-relaxed">"{output.psychologicalInsight}"</p>
                              </div>
                           </div>
                        )}

                        <div className="flex justify-center mt-12 pb-8">
                            <Button onClick={() => launchStrike('auto')} disabled={loading} className="h-20 px-16 bg-primary hover:bg-white text-black font-black uppercase tracking-[1em] rounded-full shadow-[0_40px_100px_rgba(212,175,55,0.6)] border-8 border-black/30 group text-xl italic active:scale-95 transition-all">
                                {loading ? <Loader2 className="size-10 animate-spin" /> : <Rocket className="size-10 mr-4 group-hover:scale-125 transition-transform" />}
                                LAUNCH STRIKE
                            </Button>
                        </div>
                     </div>
                   ) : (
                     !strikeLog.length && (
                       <div className="h-full flex flex-col items-center justify-center text-center opacity-10 py-60 gap-12 animate-in fade-in duration-1000">
                          <Skull className="size-64 text-primary animate-pulse gold-glow" />
                          <p className="text-5xl font-black uppercase tracking-[2em] text-white italic drop-shadow-2xl">READY_FOR_FORGE</p>
                       </div>
                     )
                   )}
                </ScrollArea>
              </CardContent>
              <div className="p-8 border-t-4 border-white/5 flex justify-between items-center opacity-30 text-[12px] font-black uppercase tracking-[2em] italic">
                 <span>HIVE_LAB_v43_AL_GHAZALI</span>
                 <Boxes className="size-10 text-primary animate-spin-slow" />
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
