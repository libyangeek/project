
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
            setStrikeLog(prev => [`[${timestamp}] ✅ نجاح: ${data.output || 'تم إشباع الناقل.'}`, ...prev]);
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
      <main className="flex-1 lg:mr-80 p-6 md:p-10 relative overflow-y-auto min-h-screen scrollbar-hide flex flex-col z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.08),transparent)] pointer-events-none transition-all duration-300 z-0" />
        
        <header className="mb-8 relative z-10 animate-in fade-in slide-in-from-top-12 duration-1000">
          <div className="flex items-center gap-6">
            <div className="size-16 md:size-20 bg-black border-2 border-primary flex items-center justify-center shadow-xl relative group shrink-0 rounded-2xl transition-all duration-1000">
              <Flame className="size-8 md:size-10 text-primary group-hover:scale-110 transition-transform duration-700 gold-glow animate-pulse" />
              <div className="absolute -inset-3 border border-primary/20 rounded-full animate-spin-slow opacity-40" />
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-4 mb-2">
                <Badge className="bg-primary text-black border-none px-4 py-1 text-[11px] font-black tracking-[0.2em] shadow-md italic">POLYMORPH LAB v43.0</Badge>
                <div className="flex items-center gap-2 text-emerald-500 font-black uppercase tracking-widest text-[9px] animate-pulse">
                    <Atom className="size-3 shadow-lg" /> {translations.alerts.sync}
                </div>
              </div>
              <h1 className="text-3xl md:text-5xl font-headline font-bold text-white tracking-tighter italic uppercase leading-none gold-glow">
                Weaponry <span className="text-primary">Forge</span>
              </h1>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 relative z-10 pb-24 flex-1">
          <div className="xl:col-span-1 space-y-6">
            <Card className="kali-card border-primary/40 bg-black/80 rounded-[2rem] p-6 border-2 shadow-xl overflow-hidden group">
              <Tabs defaultValue="exploit" onValueChange={setActiveMode} className="w-full">
                <TabsList className="bg-black/99 border-2 border-primary/20 w-full h-14 p-1 rounded-xl mb-6 shadow-inner">
                  <TabsTrigger value="exploit" className="flex-1 text-[10px] font-black italic tracking-widest data-[state=active]:bg-primary data-[state=active]:text-black rounded-lg transition-all duration-500">EXPLOIT</TabsTrigger>
                  <TabsTrigger value="apex" className="flex-1 text-[10px] font-black italic tracking-widest data-[state=active]:bg-primary data-[state=active]:text-black rounded-lg transition-all duration-500">APEX</TabsTrigger>
                  <TabsTrigger value="wordlist" className="flex-1 text-[10px] font-black italic tracking-widest data-[state=active]:bg-primary data-[state=active]:text-black rounded-lg transition-all duration-500">DNA</TabsTrigger>
                </TabsList>
                
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-[9px] font-black text-primary uppercase tracking-[0.4em] px-2 italic flex items-center gap-2">
                        <Target className="size-3" /> Coordinate
                    </label>
                    <Input 
                        value={target}
                        onChange={(e) => setTarget(e.target.value)}
                        placeholder="IP / Binary / Path..."
                        className="bg-black border border-white/10 rounded-xl h-12 text-sm italic px-4 focus:border-primary text-white font-black shadow-inner"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[9px] font-black text-primary uppercase tracking-[0.4em] px-2 italic flex items-center gap-2">
                        <Code2 className="size-3" /> Parameters
                    </label>
                    <Textarea 
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder={activeMode === 'wordlist' ? "Provide DNA data..." : "Define attack goal..."}
                      className="bg-black border border-white/10 rounded-xl min-h-[140px] text-sm italic p-4 focus:border-primary font-bold text-gray-200 shadow-inner"
                    />
                  </div>
                  <Button 
                    onClick={handleAction} 
                    disabled={loading}
                    className="w-full h-14 bg-primary hover:bg-white text-black font-black uppercase tracking-[0.2em] rounded-xl shadow-xl active:scale-95 transition-all text-xs border-2 border-black/30 group italic"
                  >
                    {loading ? <Loader2 className="size-4 animate-spin" /> : <Flame className="size-4 mr-2 group-hover:scale-110 transition-transform" />}
                    Ignite Forge
                  </Button>
                </div>
              </Tabs>
            </Card>
            
            <div className="grid grid-cols-2 gap-4">
               {VECTORS.map(v => (
                 <Button 
                   key={v.id}
                   variant="outline" 
                   disabled={loading}
                   onClick={() => launchStrike(v.id)}
                   className="h-20 rounded-xl border-2 border-primary/20 bg-primary/5 text-primary font-black uppercase tracking-widest hover:bg-primary hover:text-black transition-all text-[10px] flex flex-col items-center justify-center gap-2 group shadow-xl active:scale-90"
                 >
                    <v.icon className="size-5 transition-all duration-700 group-hover:scale-125 gold-glow" />
                    {v.label}
                 </Button>
               ))}
            </div>
          </div>

          <div className="xl:col-span-2">
            <Card className="kali-card border-primary/60 bg-black/99 rounded-[2rem] border-4 shadow-2xl h-full flex flex-col group overflow-hidden">
              <CardHeader className="p-6 border-b border-white/5 flex flex-row justify-between items-center bg-primary/5">
                <CardTitle className="text-2xl font-black uppercase italic text-white flex items-center gap-4 gold-glow px-2">
                  <Terminal className="size-8 text-primary animate-pulse" /> Output Matrix
                </CardTitle>
                <History className="size-6 text-primary/30 animate-spin-slow" />
              </CardHeader>
              <CardContent className="p-0 flex-1 relative bg-black/40">
                <ScrollArea className="h-[600px] p-6 font-code">
                   {strikeLog.length > 0 && (
                     <div className="mb-8 space-y-2 text-sm text-emerald-500 animate-in fade-in duration-700 border-l-4 border-emerald-500/40 pl-4 bg-emerald-500/5 py-3 rounded-r-xl">
                        {strikeLog.map((log, i) => (
                          <div key={i} className="flex gap-4">
                            <span className="opacity-40 select-none">❯</span>
                            <span className="font-bold italic drop-shadow-xl">{log}</span>
                          </div>
                        ))}
                     </div>
                   )}

                   {output ? (
                     <div className="space-y-8 animate-in fade-in zoom-in-95 duration-1000">
                        <div className="flex items-center justify-between border-b border-white/10 pb-4">
                            <span className="text-emerald-500 font-black uppercase tracking-[0.5em] italic text-sm gold-glow">{" >>> SYNT_COMPLETE"}</span>
                            <Badge className="bg-primary/20 text-primary border-none px-4 py-0.5 rounded-full font-black text-[9px] italic">{new Date().toLocaleTimeString()}</Badge>
                        </div>

                        <div className="p-6 bg-black/99 border-2 border-primary/40 text-emerald-400 overflow-x-auto whitespace-pre rounded-xl text-sm leading-relaxed italic font-bold">
                            {JSON.stringify(output, null, 2)}
                        </div>

                        <div className="flex justify-center pb-4">
                            <Button onClick={() => launchStrike('auto')} disabled={loading} className="h-14 px-12 bg-primary hover:bg-white text-black font-black uppercase tracking-[0.4em] rounded-full shadow-2xl border-4 border-black/30 group text-sm italic active:scale-95 transition-all">
                                {loading ? <Loader2 className="size-5 animate-spin" /> : <Rocket className="size-5 mr-3 group-hover:scale-125 transition-transform" />}
                                LAUNCH STRIKE
                            </Button>
                        </div>
                     </div>
                   ) : (
                     !strikeLog.length && (
                       <div className="h-full flex flex-col items-center justify-center text-center opacity-10 py-40 gap-6 animate-in fade-in duration-1000">
                          <Skull className="size-32 text-primary animate-pulse gold-glow" />
                          <p className="text-2xl font-black uppercase tracking-[1em] text-white italic">READY_FOR_FORGE</p>
                       </div>
                     )
                   )}
                </ScrollArea>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
