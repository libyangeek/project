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
  Shield,
  Brain,
  Terminal,
  Target,
  FileCode,
  Share2,
  Cpu,
  ShieldAlert,
  Ghost,
  Save,
  Rocket
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
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
      toast({ variant: "destructive", title: "Missing Target", description: "Please enter a target." });
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
      toast({ title: "Operation Complete", description: "Weaponry synthesized in the forge." });
    } catch (err) {
      toast({ variant: "destructive", title: "Forge Failure", description: "Failed to materialize the payload." });
    } finally {
      setLoading(false);
    }
  }

  if (!mounted) return null;

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/30 font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-80 p-6 md:p-12 relative bg-black overflow-y-auto min-h-screen scrollbar-hide flex flex-col z-10">
        
        <header className="mb-16 relative z-10 animate-in fade-in slide-in-from-top-4 duration-1000">
          <div className="flex items-center gap-4 mb-4">
            <Badge className="bg-red-600 text-white border-none rounded-full px-6 py-1.5 text-xs font-bold tracking-[0.4em] shadow-lg italic">CYBER WEAPONRY FORGE</Badge>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-red-500">
              <Flame className="size-4 animate-pulse" /> ENGINE AT 5000% CAPACITY
            </div>
          </div>
          <h1 className="text-6xl md:text-8xl font-headline font-bold text-white tracking-tighter italic uppercase">Polymorph <span className="text-red-600">Lab</span></h1>
          <p className="text-xl md:text-2xl text-muted-foreground mt-4 italic max-w-4xl leading-relaxed">
            "مختبر التخليق السيادي: هنا تُصنع الأسلحة الرقمية الأكثر فتكاً. تجاوز الـ EDR، توليد الثغرات، وتدمير الدفاعات بذكاء متفرد."
          </p>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 flex-1">
          <div className="xl:col-span-1 space-y-8">
            <Card className="kali-card border-red-600/40 bg-black/60 p-8 rounded-[3rem] border-2 shadow-2xl">
              <Tabs defaultValue="exploit" onValueChange={setActiveMode} className="w-full">
                <TabsList className="grid grid-cols-3 gap-4 bg-white/5 p-2 rounded-[2rem] mb-8 border-2 border-white/5">
                  <TabsTrigger value="exploit" className="text-[11px] py-4 uppercase font-bold rounded-2xl data-[state=active]:bg-red-600 data-[state=active]:text-white transition-all">EXPLOIT</TabsTrigger>
                  <TabsTrigger value="apex" className="text-[11px] py-4 uppercase font-bold rounded-2xl data-[state=active]:bg-red-600 data-[state=active]:text-white transition-all">APEX</TabsTrigger>
                  <TabsTrigger value="wordlist" className="text-[11px] py-4 uppercase font-bold rounded-2xl data-[state=active]:bg-red-600 data-[state=active]:text-white transition-all">WORDLIST</TabsTrigger>
                </TabsList>
                
                <div className="space-y-8">
                  <div className="space-y-4">
                    <Label className="text-[11px] uppercase font-bold text-red-500/80 ml-6 tracking-widest">Target Objective</Label>
                    <Input 
                      value={target}
                      onChange={(e) => setTarget(e.target.value)}
                      placeholder="e.g., 192.168.1.10 or example.com"
                      className="bg-black border-2 border-white/10 rounded-[2.5rem] h-16 md:h-20 text-xl italic px-8 focus:border-red-600 shadow-inner"
                    />
                  </div>
                  <div className="space-y-4">
                    <Label className="text-[11px] uppercase font-bold text-red-500/80 ml-6 tracking-widest">Offensive Parameters</Label>
                    <Textarea 
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Describe the vulnerability or target persona..."
                      className="bg-black border-2 border-white/10 rounded-[2.5rem] min-h-[220px] text-lg italic p-8 focus:border-red-600 shadow-inner"
                    />
                  </div>
                  <Button 
                    onClick={handleAction} 
                    disabled={loading}
                    className="w-full h-24 bg-red-600 hover:bg-red-700 text-white font-black uppercase tracking-[0.8em] rounded-[3rem] shadow-[0_40px_100px_rgba(220,38,38,0.5)] border-4 border-red-400/40 active:scale-95 transition-all"
                  >
                    {loading ? <Loader2 className="size-10 animate-spin" /> : <Flame className="size-10 mr-4" />}
                    Ignite Forge
                  </Button>
                </div>
              </Tabs>
            </Card>

            <Card className="kali-card border-white/10 bg-black/60 p-8 rounded-[3rem] border-2 shadow-2xl">
              <h4 className="text-[11px] font-bold text-red-500 uppercase tracking-[1.5em] mb-8 italic text-center">Arsenal Status</h4>
              <div className="space-y-6">
                {[
                  { name: "ApexBrain v42", status: "ONLINE", icon: Brain, color: "text-red-500" },
                  { name: "Polymorph V3", status: "READY", icon: Ghost, color: "text-purple-500" },
                  { name: "Bypass.sys", status: "ARMED", icon: ShieldAlert, color: "text-yellow-500" },
                  { name: "C2 Matrix", status: "12 NODES", icon: Share2, color: "text-blue-500" }
                ].map((w, i) => (
                  <div key={i} className="flex items-center justify-between p-5 bg-white/5 rounded-[2rem] border-2 border-white/5 hover:border-red-600/30 transition-all">
                    <div className="flex items-center gap-5">
                      <w.icon className={cn("size-6", w.color)} />
                      <span className="text-sm font-bold text-white uppercase tracking-wider">{w.name}</span>
                    </div>
                    <Badge variant="outline" className="text-[9px] border-white/20 text-emerald-500 font-bold tracking-widest">{w.status}</Badge>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <div className="xl:col-span-2">
            <Card className="kali-card border-white/10 bg-black/90 rounded-[4rem] border-4 shadow-[0_0_200px_rgba(0,0,0,0.8)] h-full flex flex-col">
              <CardHeader className="p-10 border-b-2 border-white/5 flex flex-row justify-between items-center bg-white/5">
                <CardTitle className="text-4xl font-bold uppercase italic tracking-tighter text-white flex items-center gap-6">
                  <Terminal className="size-10 text-red-500 shadow-red-500" /> Output Matrix
                </CardTitle>
                <div className="flex gap-4">
                   <div className="size-4 rounded-full bg-red-600 shadow-[0_0_15px_red]" />
                   <div className="size-4 rounded-full bg-yellow-500 shadow-[0_0_15px_yellow]" />
                   <div className="size-4 rounded-full bg-green-500 shadow-[0_0_15px_green]" />
                </div>
              </CardHeader>
              <CardContent className="p-0 flex-1 relative bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]">
                <ScrollArea className="h-[750px] p-12">
                   {output ? (
                     <div className="space-y-10 font-mono text-xl animate-in fade-in slide-in-from-bottom-10 duration-700">
                        <div className="text-emerald-500 mb-8 font-black border-b-2 border-emerald-500/20 pb-4 uppercase tracking-[0.5em]">>>> WEAPONRY SYNTHESIZED:</div>
                        <div className="bg-black/50 p-6 rounded-2xl border border-white/10">
                            {activeMode === 'exploit' && (
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center">
                                        <span className="text-red-500">Language:</span>
                                        <span className="text-white">{output.exploitLanguage}</span>
                                    </div>
                                    <div className="p-4 bg-black rounded border border-white/5 text-sm text-green-400 overflow-x-auto whitespace-pre">
                                        {output.exploitCode}
                                    </div>
                                    <div className="text-red-400 text-sm mt-4">
                                        <strong>Stealth:</strong> {output.stealthFeatures?.join(", ")}
                                    </div>
                                </div>
                            )}
                            {activeMode === 'apex' && (
                                <div className="space-y-4">
                                    <p className="text-blue-400">{output.summary}</p>
                                    <div className="p-4 bg-black rounded border border-white/5 text-sm text-blue-300 overflow-x-auto whitespace-pre">
                                        {JSON.stringify(output.plan, null, 2)}
                                    </div>
                                </div>
                            )}
                            {activeMode === 'wordlist' && (
                                <div className="space-y-4">
                                    <p className="text-amber-400">Predicted Passwords:</p>
                                    <div className="grid grid-cols-2 gap-2">
                                        {output.likelyPasswords?.map((pw: string, idx: number) => (
                                            <div key={idx} className="p-2 bg-white/5 rounded border border-white/5 text-sm text-white">
                                                {pw}
                                            </div>
                                        ))}
                                    </div>
                                    <p className="text-xs text-white/40 mt-4 italic">{output.psychologicalInsight}</p>
                                </div>
                            )}
                        </div>
                        <div className="flex justify-end gap-4 mt-8">
                            <Button variant="outline" className="border-white/20 text-white"><Save className="size-4 mr-2" /> Save Pattern</Button>
                            <Button className="bg-red-600 text-white"><Rocket className="size-4 mr-2" /> Execute Strike</Button>
                        </div>
                     </div>
                   ) : (
                     <div className="h-full flex flex-col items-center justify-center text-center opacity-10 py-48">
                        <Skull className="size-48 mb-8 text-red-500 animate-pulse" />
                        <p className="text-4xl font-black uppercase tracking-[2em] text-white">VACUUM</p>
                        <p className="text-lg mt-4 text-gray-400">Waiting for Alpha Command Input...</p>
                     </div>
                   )}
                </ScrollArea>
                <div className="absolute bottom-8 right-12 opacity-30 flex items-center gap-4">
                  <Cpu className="size-5 text-red-500" />
                  <span className="text-[12px] font-black uppercase tracking-[1em] text-white">AL-MUIZZ_CORE</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
