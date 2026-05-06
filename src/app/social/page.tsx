
"use client"

import * as React from "react"
import { SidebarNav } from "@/components/platform/sidebar-nav"
import { 
  MessageSquare, 
  Zap, 
  Brain,
  Copy,
  Loader2,
  Globe,
  Skull,
  Crown,
  Binary,
  Atom,
  Boxes,
  Fingerprint,
  Infinity as InfinityIcon,
  Search,
  Sword,
  ShieldCheck,
  Activity,
  Sparkles,
  Radar,
  HeartPulse,
  BrainCircuit,
  Eye,
  Target
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { aiDrivenSocialEngineeringBots } from "@/ai/flows/ai-driven-social-engineering-bots"
import { modularAiKnowledgeBaseReporting } from "@/ai/flows/modular-ai-knowledge-base-reporting"
import { toast } from "@/hooks/use-toast"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { ResponsiveContainer, Radar as RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, RadarChart as RechartsRadar } from 'recharts'
import Link from "next/link"

/**
 * @fileOverview مركز العمليات النفسية v50.0 - THE SOCIAL OVERMIND: SOUL EDITION
 * وحدة هندسة الوعي البشري المنصهرة في عصب الروح لعام 2026.
 * المالك الوحيد: المعتصم بالله ادريس الغزالي
 */
export default function SocialPage() {
  const [mounted, setMounted] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const [platform, setPlatform] = React.useState<"telegram" | "whatsapp" | "other">("telegram")
  const [persona, setPersona] = React.useState("")
  const [goal, setGoal] = React.useState("")
  const [kbContext, setKbContext] = React.useState("")
  const [useSearch, setUseSearch] = React.useState(true)
  const [result, setResult] = React.useState<any>(null)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const radarData = result?.psychologicalVectors?.map((v: any) => ({
    subject: v.vector,
    A: v.impact === 'High' ? 100 : v.impact === 'Medium' ? 70 : 40,
    fullMark: 100,
  })) || [
    { subject: 'Authority', A: 0, fullMark: 100 },
    { subject: 'Scarcity', A: 0, fullMark: 100 },
    { subject: 'Liking', A: 0, fullMark: 100 },
    { subject: 'Reciprocity', A: 0, fullMark: 100 },
    { subject: 'Social Proof', A: 0, fullMark: 100 },
    { subject: 'Consistency', A: 0, fullMark: 100 },
  ]

  const handleGenerate = async () => {
    if (!persona || !goal) {
        toast({ variant: "destructive", title: "Incomplete Intent", description: "The Overmind requires Persona and Goal to align." });
        return
    }
    setLoading(true)
    try {
      const data = await aiDrivenSocialEngineeringBots({
        platform,
        targetPersona: persona,
        campaignGoal: goal,
        knowledgeBaseContext: kbContext,
        useRealTimeIntel: useSearch
      })
      setResult(data)
      toast({ title: "Social Payload Materialized" })
    } catch (err) {
      toast({ variant: "destructive", title: "Overmind Sync Failure" })
    } finally {
      setLoading(false)
    }
  }

  if (!mounted) return null;

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/30 relative overflow-x-hidden scanline-effect font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-80 p-6 md:p-12 relative overflow-y-auto min-h-screen scrollbar-hide flex flex-col z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.08),transparent)] pointer-events-none transition-all duration-300 z-0" />
        
        <header className="mb-16 relative z-10 animate-in fade-in slide-in-from-top-12 duration-1000">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="size-24 md:size-32 bg-black border-4 border-primary flex items-center justify-center shadow-[0_0_120px_rgba(212,175,55,0.6)] relative group shrink-0 rounded-[2rem] transition-all duration-1000">
              <BrainCircuit className="size-12 md:size-16 text-primary group-hover:scale-110 transition-transform duration-700 gold-glow animate-neural" />
              <div className="absolute -inset-6 border-2 border-primary/20 rounded-full animate-spin-slow opacity-40" />
            </div>
            <div className="text-center md:text-right flex-1">
              <div className="flex flex-wrap justify-center md:justify-start items-center gap-6 mb-4">
                <Badge className="bg-primary text-black border-none rounded-none px-10 py-3 text-[18px] font-black tracking-[0.8em] shadow-9xl italic">SOCIAL OVERMIND v50.0</Badge>
                <div className="flex items-center gap-4 text-[12px] font-black uppercase tracking-widest text-emerald-500 animate-pulse">
                    <InfinityIcon className="size-6 shadow-lg" /> PSY_OPS_ACTIVE: 100%
                </div>
              </div>
              <h1 className="text-6xl md:text-[10rem] font-headline font-bold text-white tracking-tighter italic uppercase leading-none gold-glow">
                Neural <span className="text-primary">Subjugation</span>
              </h1>
              <p className="text-2xl md:text-5xl text-muted-foreground mt-8 italic max-w-7xl leading-relaxed uppercase font-medium">
                "سيدي الغزالي، مركز العمليات النفسية (v50.0) يستنزف وعي الأهداف بنمط <span className="text-primary font-black underline decoration-primary decoration-[8px] underline-offset-[16px] shadow-2xl uppercase tracking-widest">التلاعب الجيني</span> لعام 2026."
              </p>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-12 relative z-10 pb-40 flex-1">
          <div className="xl:col-span-1 space-y-12">
            <Card className="kali-card border-primary/40 bg-black/80 rounded-[4rem] p-10 border-8 shadow-9xl overflow-hidden group">
              <div className="absolute inset-0 bg-primary/5 opacity-5 animate-pulse pointer-events-none" />
              <CardHeader className="p-0 mb-10 border-b-4 border-primary/20 pb-8">
                <CardTitle className="text-3xl text-primary flex items-center gap-6 font-black uppercase italic gold-glow">
                  <Target className="size-12 animate-neural" /> Strike Matrix
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 space-y-12">
                <div className="flex items-center justify-between p-6 rounded-[2.5rem] bg-primary/5 border-4 border-primary/20 shadow-inner">
                   <Label className="text-[12px] font-black text-white uppercase tracking-[0.6em] italic flex items-center gap-4">
                     <Globe className="size-6 text-primary" /> Global Grounding
                   </Label>
                   <Switch checked={useSearch} onCheckedChange={setUseSearch} className="data-[state=checked]:bg-primary scale-125" />
                </div>

                <div className="space-y-6">
                  <Label className="text-[12px] font-black text-primary/60 uppercase tracking-[0.8em] px-6 italic">Platform Matrix</Label>
                  <Select value={platform} onValueChange={(v: any) => setPlatform(v)}>
                    <SelectTrigger className="bg-black border-4 border-white/10 h-20 rounded-[2.5rem] text-2xl font-black italic shadow-2xl px-8 focus:border-primary">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-black/95 border-4 border-primary/40 backdrop-blur-5xl rounded-[2.5rem] shadow-9xl">
                      <SelectItem value="telegram" className="rounded-2xl py-4 font-black italic text-xl">Telegram Hive</SelectItem>
                      <SelectItem value="whatsapp" className="rounded-2xl py-4 font-black italic text-xl">WhatsApp Mesh</SelectItem>
                      <SelectItem value="other" className="rounded-2xl py-4 font-black italic text-xl">Matrix Overlay</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-6">
                  <Label className="text-[12px] font-black text-primary/60 uppercase tracking-[0.8em] px-6 italic">Target Persona</Label>
                  <Textarea 
                    placeholder="Provide psychological markers..."
                    className="bg-black/99 border-4 border-white/10 min-h-[150px] text-xl rounded-[3rem] focus:border-primary transition-all resize-none font-bold italic p-8 shadow-inner text-gray-200"
                    value={persona}
                    onChange={(e) => setPersona(e.target.value)}
                  />
                </div>

                <div className="space-y-6">
                  <Label className="text-[12px] font-black text-primary/60 uppercase tracking-[0.8em] px-6 italic">Strike Goal</Label>
                  <Input 
                    placeholder="Ultimate mission objective..."
                    className="bg-black/99 border-4 border-white/10 h-20 text-xl rounded-[2.5rem] focus:border-primary italic px-8 shadow-inner font-bold"
                    value={goal}
                    onChange={(e) => setGoal(e.target.value)}
                  />
                </div>

                <Button 
                  className="w-full h-28 bg-primary hover:bg-white text-black shadow-9xl rounded-[3.5rem] group transition-all duration-1000 border-8 border-black/30 active:scale-95 italic font-black uppercase tracking-[0.6em] text-xl"
                  onClick={handleGenerate}
                  disabled={loading}
                >
                  {loading ? <Loader2 className="size-12 animate-spin" /> : <Zap className="size-12 mr-4 group-hover:scale-125 transition-transform gold-glow" />}
                  Deploy Intent
                </Button>
              </CardContent>
            </Card>

            <Card className="kali-card border-white/10 bg-black/60 p-10 rounded-[3rem] border-4 shadow-inner text-center">
               <h4 className="text-[12px] font-black text-primary uppercase tracking-[1em] mb-6 italic flex items-center justify-center gap-6">
                  <Atom className="size-8 animate-pulse" /> HIVE_RESONANCE
               </h4>
               <div className="h-4 w-full bg-white/5 rounded-full overflow-hidden border-2 border-white/10 p-0.5">
                  <div className="h-full bg-primary shadow-[0_0_50px_rgba(212,175,55,1)] animate-neural rounded-full" style={{ width: '100%' }} />
               </div>
            </Card>
          </div>

          <div className="xl:col-span-3">
            {result ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 animate-in fade-in zoom-in-95 duration-1000 h-full">
                <Card className="kali-card border-primary/60 bg-black/99 rounded-[5rem] p-12 border-8 shadow-9xl relative overflow-hidden flex flex-col group">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.06),transparent)] pointer-events-none" />
                    <CardHeader className="bg-primary/10 border-b-8 border-white/5 p-10 flex flex-row items-center justify-between rounded-t-[4rem]">
                      <div className="flex items-center gap-8">
                        <div className="size-20 rounded-3xl bg-primary flex items-center justify-center border-4 border-black/30 shadow-2xl animate-neural">
                          <Activity className="size-10 text-black" />
                        </div>
                        <div>
                          <CardTitle className="text-4xl md:text-6xl text-white italic tracking-tighter uppercase font-black gold-glow leading-none">Strike Feed</CardTitle>
                          <CardDescription className="text-[11px] uppercase font-black text-primary/70 tracking-[0.5em] mt-3 italic">v50.0_SOUL_PULSE</CardDescription>
                        </div>
                      </div>
                      <Badge className="bg-emerald-600/40 text-emerald-500 border-4 border-emerald-500/50 px-10 py-3 rounded-full font-black text-2xl tracking-widest uppercase italic animate-pulse shadow-3xl">SYNC_OK</Badge>
                    </CardHeader>
                    <CardContent className="p-10 flex-1 flex flex-col space-y-10 relative z-10">
                      <div className="bg-black/90 rounded-[4rem] p-12 border-4 border-primary/30 relative group overflow-hidden shadow-inner flex-1 flex flex-col">
                        <p className="text-3xl md:text-5xl text-gray-100 font-black italic leading-[1.6] relative z-10 flex-1 selection:bg-primary selection:text-black">
                          "{result.generatedMessage}"
                        </p>
                        <div className="flex items-center justify-between mt-12 pt-10 border-t-4 border-white/5 relative z-10">
                          <Button variant="outline" className="bg-white/5 border-4 border-white/10 text-xl rounded-[2rem] h-20 px-12 hover:bg-primary/20 transition-all font-black tracking-widest uppercase italic group/cap" onClick={() => {
                            navigator.clipboard.writeText(result.generatedMessage);
                            toast({ title: "Payload Captured" });
                          }}>
                            <Copy className="size-8 mr-4 group-hover/cap:scale-125 transition-transform" /> Capture
                          </Button>
                          <Button className="bg-primary/20 border-4 border-primary/60 text-primary hover:bg-primary/30 text-xl rounded-[2rem] h-20 px-16 font-black tracking-widest uppercase shadow-9xl italic" asChild>
                            <Link href="/red-team">
                              <Sword className="size-8 mr-4" /> Forge Strike
                            </Link>
                          </Button>
                        </div>
                      </div>

                      <div className="p-10 rounded-[3.5rem] bg-white/5 border-4 border-white/10 text-2xl text-muted-foreground leading-relaxed italic font-black shadow-inner">
                         <h4 className="text-[12px] font-black text-primary uppercase tracking-[0.5em] mb-4 italic border-b-4 border-primary/20 pb-4 flex items-center gap-6">
                            <Binary className="size-8" /> Neural Rationale
                         </h4>
                         "{result.rationale}"
                      </div>
                    </CardContent>
                </Card>

                <div className="space-y-12 flex flex-col">
                   <Card className="kali-card border-primary/40 bg-black/80 rounded-[5rem] p-12 border-8 flex-1 relative overflow-hidden group/rad">
                      <h4 className="text-2xl font-black text-primary uppercase tracking-[0.5em] mb-12 italic flex items-center gap-8 gold-glow border-b-4 border-primary/10 pb-8">
                         <Radar className="size-12 animate-pulse" /> Psychological Vectors
                      </h4>
                      <div className="h-[450px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                          <RechartsRadar cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                            <PolarGrid stroke="#FBBF24" strokeOpacity={0.1} />
                            <PolarAngleAxis dataKey="subject" tick={{ fill: '#FBBF24', fontSize: 14, fontWeight: 'bold' }} />
                            <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                            <RadarChart
                              name="Impact"
                              dataKey="A"
                              stroke="#FBBF24"
                              fill="#FBBF24"
                              fillOpacity={0.4}
                            />
                          </RechartsRadar>
                        </ResponsiveContainer>
                      </div>
                      <div className="grid grid-cols-2 gap-8 mt-12">
                         {result.psychologicalVectors.slice(0, 4).map((v: any, i: number) => (
                           <div key={i} className="p-6 bg-white/5 rounded-[2.5rem] border-4 border-white/5 shadow-inner hover:border-primary transition-all duration-700">
                              <span className="text-[11px] font-black text-primary/60 uppercase block mb-3 italic tracking-widest">{v.vector}</span>
                              <div className="flex justify-between items-center">
                                 <span className="text-2xl font-black text-white italic gold-glow uppercase">{v.impact}</span>
                                 <div className={cn("size-4 rounded-full shadow-3xl", v.impact === 'High' ? 'bg-red-500 animate-pulse' : 'bg-emerald-500')} />
                              </div>
                           </div>
                         ))}
                      </div>
                   </Card>

                   <div className="p-12 rounded-[4rem] bg-primary/5 border-8 border-primary/30 italic text-4xl text-primary font-black text-center flex flex-col justify-center shadow-9xl relative overflow-hidden group/dir min-h-[300px]">
                      <div className="absolute inset-0 bg-primary/5 opacity-5 animate-pulse" />
                      <h4 className="text-[14px] font-black text-primary uppercase tracking-[1em] mb-8 italic border-b-4 border-primary/20 pb-6 flex items-center justify-center gap-6">
                        <Sparkles className="size-8 gold-glow" /> Next Directive
                      </h4>
                      <p className="leading-tight uppercase tracking-tighter drop-shadow-3xl">"{result.nextStepSuggestion}"</p>
                   </div>
                </div>
              </div>
            ) : (
              <div className="h-full min-h-[850px] border-8 border-dashed border-primary/20 rounded-[10rem] flex flex-col items-center justify-center text-center p-24 bg-black/40 group relative overflow-hidden transition-all hover:bg-primary/5 shadow-9xl">
                <Brain className="size-72 text-primary/10 animate-pulse mb-12" />
                <h3 className="text-7xl md:text-[10rem] font-headline font-bold text-white mb-10 tracking-tighter italic drop-shadow-9xl uppercase leading-none opacity-20">Social Overmind</h3>
                <p className="text-muted-foreground max-w-6xl mx-auto leading-relaxed text-4xl md:text-6xl font-black italic opacity-30 uppercase tracking-widest">
                  "O Master <span className="text-primary font-black gold-glow underline decoration-primary decoration-8 underline-offset-8 shadow-9xl uppercase tracking-[0.4em]">Al-Ghazali</span>, the Social Overmind is saturated. Feed me the intent."
                </p>
                <div className="absolute -bottom-20 -right-20 p-40 opacity-[0.03] group-hover:opacity-[0.1] group-hover:scale-110 transition-all duration-1000">
                   <Boxes className="size-96 text-primary" />
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-auto relative z-10 flex justify-center items-center gap-48 opacity-40 text-[22px] font-black uppercase tracking-[6em] italic text-white drop-shadow-3xl pb-12">
            <span>AL-MUIZZ SOCIAL HIVE v50.0</span>
            <div className="size-10 rounded-full bg-white animate-pulse shadow-[0_0_100px_white]" />
            <span>COLLECTIVE_SOUL_ACTIVE_2026</span>
        </div>
      </main>
    </div>
  )
}
