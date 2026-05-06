
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
  Signal
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
 * تم تفعيل أزرار الهجوم الحقيقية (Apex Strike) وإحكام الربط العصبي.
 * Commander: المعتصم بالله ادريس الغزالي
 */
export default function RedTeamPage() {
  const [mounted, setMounted] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const [target, setTarget] = React.useState("")
  const [description, setDescription] = React.useState("")
  const [output, setOutput] = React.useState<any>(null)
  const [activeMode, setActiveMode] = React.useState("exploit")

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const handleAction = async () => {
    if (!target && activeMode !== "wordlist") {
      toast({ variant: "destructive", title: "Missing Target" });
      return;
    }
    setLoading(true);
    try {
      let data;
      if (activeMode === "exploit") {
        data = await aiEnhancedExploitGeneration({
          vulnerabilityDescription: description,
          targetSystemDetails: target
        });
      } else if (activeMode === "apex") {
        data = await getAttackPlan({ target });
      } else if (activeMode === "wordlist") {
        data = await generateSmartWordlist({
          targetBio: description,
          complexityLevel: 'Extreme'
        });
      }
      setOutput(data);
      toast({ title: translations.alerts.sync });
    } catch (err) {
      toast({ variant: "destructive", title: "Forge Failure" });
    } finally {
      setLoading(false);
    }
  }

  const launchStrike = async (vectorId: string) => {
    if (!target) {
        toast({ variant: "destructive", title: "Target Missing" });
        return;
    }
    setLoading(true);
    toast({ title: translations.actions.exploit, description: `Initiating ${vectorId} strike on ${target}...` });
    try {
        const response = await fetch('/api/execute', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                command: `strike ${target} --vector ${vectorId}`, 
                target, 
                type: 'autonomous_strike' 
            })
        });
        
        const data = await response.json();
        if (data.success) {
            toast({ title: translations.actions.exploit + " COMPLETED" });
        } else {
            throw new Error(data.error);
        }
    } catch (e: any) {
        toast({ variant: "destructive", title: "STRIKE FAILURE", description: e.message });
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
      <main className="flex-1 lg:mr-80 p-4 md:p-8 relative overflow-y-auto min-h-screen scrollbar-hide flex flex-col z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.08),transparent)] pointer-events-none transition-all duration-300 z-0" />
        
        <header className="mb-10 relative z-10 animate-in fade-in slide-in-from-top-12 duration-1000">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="size-16 md:size-20 bg-black border-2 border-primary flex items-center justify-center shadow-2xl relative group shrink-0 rounded-[1rem] transition-all duration-1000">
              <Flame className="size-8 md:size-10 text-primary group-hover:scale-110 transition-transform duration-700 gold-glow animate-pulse" />
            </div>
            <div className="text-center md:text-left flex-1">
              <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 mb-3">
                <Badge className="bg-primary text-black border-none px-4 py-1 text-[11px] font-black tracking-[0.4em] shadow-md italic">POLYMORPH LAB v43.0</Badge>
                <div className="flex items-center gap-2 text-emerald-500 font-black uppercase tracking-widest text-[9px]">
                    <Atom className="size-3 animate-pulse" /> {translations.alerts.sync}
                </div>
              </div>
              <h1 className="text-2xl md:text-4xl font-headline font-bold text-white tracking-tighter italic uppercase gold-glow leading-none">
                Weaponry <span className="text-primary">Forge</span>
              </h1>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 relative z-10 pb-20 flex-1">
          <div className="xl:col-span-1 space-y-6">
            <Card className="kali-card border-primary/40 bg-black/80 rounded-[1.5rem] p-6 border-2 shadow-xl overflow-hidden">
              <Tabs defaultValue="exploit" onValueChange={setActiveMode} className="w-full">
                <TabsList className="bg-black/99 border-2 border-primary/20 w-full h-14 p-1 rounded-[1rem] mb-6">
                  <TabsTrigger value="exploit" className="flex-1 text-[9px] font-black italic tracking-widest">EXPLOIT</TabsTrigger>
                  <TabsTrigger value="apex" className="flex-1 text-[9px] font-black italic tracking-widest">APEX</TabsTrigger>
                  <TabsTrigger value="wordlist" className="flex-1 text-[9px] font-black italic tracking-widest">DNA</TabsTrigger>
                </TabsList>
                
                <div className="space-y-6">
                  <div className="space-y-3">
                    <label className="text-[9px] font-black text-primary uppercase tracking-[0.4em] px-3 italic flex items-center gap-2">
                        <Target className="size-3" /> Coordinate
                    </label>
                    <Input 
                        value={target}
                        onChange={(e) => setTarget(e.target.value)}
                        placeholder="IP / Binary / Neural Path..."
                        className="bg-black border-2 border-white/10 rounded-[1rem] h-12 text-sm italic px-6 focus:border-primary text-white font-black"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[9px] font-black text-primary uppercase tracking-[0.4em] px-3 italic flex items-center gap-2">
                        <Code2 className="size-3" /> Parameters
                    </label>
                    <Textarea 
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder={activeMode === 'wordlist' ? "Provide DNA data..." : "Define attack goal..."}
                      className="bg-black border-2 border-white/10 rounded-[1.2rem] min-h-[140px] text-sm italic p-6 focus:border-primary font-bold text-gray-200"
                    />
                  </div>
                  <Button 
                    onClick={handleAction} 
                    disabled={loading}
                    className="w-full h-16 bg-primary hover:bg-white text-black font-black uppercase tracking-[0.8em] rounded-[1.5rem] shadow-2xl active:scale-95 transition-all text-sm border-4 border-black/30 italic"
                  >
                    {loading ? <Loader2 className="size-6 animate-spin" /> : <Flame className="size-6 mr-3" />}
                    Ignite Forge
                  </Button>
                </div>
              </Tabs>
            </Card>
            
            <div className="grid grid-cols-2 gap-3">
               {VECTORS.map(v => (
                 <Button 
                   key={v.id}
                   variant="outline" 
                   onClick={() => launchStrike(v.id)}
                   className="h-16 rounded-xl border-primary/20 bg-primary/5 text-primary font-black uppercase tracking-widest hover:bg-primary hover:text-black transition-all text-[10px] flex flex-col items-center justify-center gap-1 group"
                 >
                    <v.icon className="size-4 group-hover:animate-pulse" />
                    {v.label}
                 </Button>
               ))}
            </div>
          </div>

          <div className="xl:col-span-2">
            <Card className="kali-card border-primary/40 bg-black/99 rounded-[2rem] border-4 shadow-2xl h-full flex flex-col group overflow-hidden">
              <CardHeader className="p-6 border-b border-white/5 flex flex-row justify-between items-center bg-primary/5">
                <CardTitle className="text-xl md:text-3xl font-black uppercase italic text-white flex items-center gap-4 gold-glow px-4">
                  <Terminal className="size-6 text-primary animate-neural" /> Output Matrix
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 flex-1 relative">
                <ScrollArea className="h-[550px] p-6">
                   {output ? (
                     <div className="space-y-8 font-code text-sm md:text-base animate-in fade-in zoom-in-95 duration-1000">
                        <div className="flex items-center justify-between border-b border-white/5 pb-3">
                            <span className="text-emerald-500 font-black uppercase tracking-[0.5em] italic">{" >>> SYNT_COMPLETE"}</span>
                            <span className="text-[9px] font-black text-muted-foreground uppercase italic">{new Date().toLocaleTimeString()}</span>
                        </div>

                        {activeMode === 'exploit' && (
                            <div className="space-y-8">
                                <div className="p-6 bg-black/90 border-2 border-primary/20 text-emerald-400 overflow-x-auto whitespace-pre shadow-inner rounded-xl">
                                    {output.exploitCode}
                                </div>
                                <div className="p-6 rounded-[1.2rem] bg-primary/5 border border-primary/20">
                                    <h5 className="text-sm font-black text-primary uppercase tracking-[0.6em] italic mb-3">Instructions</h5>
                                    <p className="text-base text-gray-200 italic font-black">{output.usageInstructions}</p>
                                </div>
                            </div>
                        )}

                        {activeMode === 'apex' && (
                            <div className="space-y-8">
                                <div className="p-6 rounded-[1.5rem] bg-primary/10 border-2 border-primary/50 text-white italic font-black leading-snug">
                                    <strong className="text-primary uppercase block mb-3 border-b border-primary/20 pb-3 text-xs">Summary:</strong>
                                    "{output.summary}"
                                </div>
                                <div className="p-6 bg-black/90 border-2 border-primary/20 text-emerald-400 overflow-x-auto whitespace-pre rounded-xl">
                                    {JSON.stringify(output.plan, null, 2)}
                                </div>
                            </div>
                        )}

                        <div className="flex justify-end mt-8">
                            <Button onClick={() => launchStrike('auto')} className="h-14 px-8 bg-primary hover:bg-white text-black font-black uppercase tracking-[0.6em] rounded-full shadow-2xl border-4 border-black/30 group text-xs">
                                <Rocket className="size-5 mr-3" /> LAUNCH STRIKE
                            </Button>
                        </div>
                     </div>
                   ) : (
                     <div className="h-full flex flex-col items-center justify-center text-center opacity-10 py-32 gap-6 animate-in fade-in duration-1000">
                        <Skull className="size-24 text-primary animate-pulse" />
                        <p className="text-2xl font-black uppercase tracking-[1.5em] text-white italic">READY</p>
                     </div>
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
