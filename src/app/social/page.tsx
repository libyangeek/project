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
  Radar
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
 * @fileOverview مركز العمليات النفسية v43.0 - THE HIVE SOCIAL OVERMIND
 * وحدة هندسة الوعي البشري. تم التحجيم والتدقيق المعماري لضمان دقة الاجتياح.
 * Commander: المعتصم بالله ادريس الغزالي
 */
export default function SocialPage() {
  const [mounted, setMounted] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const [contextLoading, setContextLoading] = React.useState(false)
  const [platform, setPlatform] = React.useState<"telegram" | "whatsapp" | "other">("telegram")
  const [persona, setPersona] = React.useState("")
  const [goal, setGoal] = React.useState("")
  const [intelQuery, setIntelQuery] = React.useState("")
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

  const fetchKbIntel = async () => {
    if (!intelQuery.trim()) return
    setContextLoading(true)
    try {
      const data = await modularAiKnowledgeBaseReporting({ reportQuery: intelQuery, userId: "AL_GHAZALI_ROOT" })
      setKbContext(data.reportContent || "")
      toast({ title: "Intelligence Siphoned" })
    } catch (err) {
      toast({ variant: "destructive", title: "Intel Link Severed" })
    } finally {
      setContextLoading(false)
    }
  }

  const handleGenerate = async () => {
    if (!persona || !goal) {
        toast({ variant: "destructive", title: "Incomplete Parameters", description: "The matrix requires Persona and Goal to align." });
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
      toast({ title: "Intent Materialized" })
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
      <main className="flex-1 lg:mr-80 p-4 md:p-8 relative overflow-y-auto min-h-screen scrollbar-hide flex flex-col z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.08),transparent)] pointer-events-none transition-all duration-300 z-0" />
        
        <header className="mb-8 relative z-10 animate-in fade-in slide-in-from-top-4 duration-1000">
          <div className="flex items-center gap-6">
            <div className="size-16 md:size-20 bg-black border-2 border-primary flex items-center justify-center shadow-xl relative group shrink-0 rounded-2xl transition-all duration-1000">
              <Brain className="size-8 md:size-10 text-primary group-hover:scale-110 transition-transform duration-700 gold-glow animate-pulse" />
              <div className="absolute -inset-3 border border-primary/20 rounded-full animate-spin-slow opacity-40" />
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-4 mb-2">
                <Badge className="bg-primary text-black border-none px-4 py-1 text-[11px] font-black tracking-[0.2em] shadow-md italic">HIVE_PSY_OPS v43.0</Badge>
                <div className="flex items-center gap-2 text-emerald-500 font-bold uppercase tracking-widest text-[9px] animate-pulse">
                    <InfinityIcon className="size-3" /> RESONANCE: ACTIVE
                </div>
              </div>
              <h1 className="text-3xl md:text-5xl font-headline font-bold text-white tracking-tighter italic uppercase leading-none gold-glow">
                Social <span className="text-primary">Overmind</span>
              </h1>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 relative z-10 pb-20 flex-1">
          <div className="lg:col-span-1 space-y-6">
            <Card className="kali-card border-primary/40 bg-black/80 rounded-[2rem] p-6 border-2 shadow-xl overflow-hidden group">
              <CardHeader className="p-0 mb-6 border-b border-primary/10 pb-4">
                <CardTitle className="text-sm text-primary flex items-center gap-3 font-black uppercase italic gold-glow">
                  <Skull className="size-4" /> Strike Config
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 space-y-6">
                <div className="flex items-center justify-between p-3 rounded-xl bg-primary/5 border border-primary/20">
                   <Label className="text-[10px] font-black text-white uppercase tracking-widest italic flex items-center gap-2">
                     <Globe className="size-3 text-primary" /> Grounding
                   </Label>
                   <Switch checked={useSearch} onCheckedChange={setUseSearch} className="data-[state=checked]:bg-primary scale-90" />
                </div>

                <div className="space-y-3">
                  <Label className="text-[10px] font-black text-primary/60 uppercase tracking-[0.2em] px-2 italic">Platform Matrix</Label>
                  <Select value={platform} onValueChange={(v: any) => setPlatform(v)}>
                    <SelectTrigger className="bg-black border border-white/10 h-10 rounded-xl text-xs font-black italic shadow-inner px-4">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-black/95 border border-primary/40 backdrop-blur-3xl rounded-xl">
                      <SelectItem value="telegram" className="rounded-lg py-2 font-black italic">Telegram Hive</SelectItem>
                      <SelectItem value="whatsapp" className="rounded-lg py-2 font-black italic">WhatsApp Mesh</SelectItem>
                      <SelectItem value="other" className="rounded-lg py-2 font-black italic">Matrix Overlay</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-3">
                  <Label className="text-[10px] font-black text-primary/60 uppercase tracking-[0.2em] px-2 italic">Target Persona</Label>
                  <Textarea 
                    placeholder="Provide psychological markers..."
                    className="bg-black border border-white/10 min-h-[100px] text-xs rounded-xl focus:border-primary transition-all resize-none font-bold italic p-4 shadow-inner text-gray-200"
                    value={persona}
                    onChange={(e) => setPersona(e.target.value)}
                  />
                </div>

                <div className="space-y-3">
                  <Label className="text-[10px] font-black text-primary/60 uppercase tracking-[0.2em] px-2 italic">Strike Goal</Label>
                  <Input 
                    placeholder="Ultimate mission objective..."
                    className="bg-black border border-white/10 h-10 text-xs rounded-xl focus:border-primary italic px-4 shadow-inner font-bold"
                    value={goal}
                    onChange={(e) => setGoal(e.target.value)}
                  />
                </div>

                <Button 
                  className="w-full bg-primary hover:bg-white text-black shadow-xl h-14 rounded-2xl group transition-all duration-700 border-2 border-black/30 active:scale-95 italic font-black uppercase tracking-[0.3em] text-sm"
                  onClick={handleGenerate}
                  disabled={loading}
                >
                  {loading ? <Loader2 className="size-5 animate-spin" /> : <Zap className="size-5 mr-2 group-hover:scale-110" />}
                  Deploy Intent
                </Button>
              </CardContent>
            </Card>

            <Card className="kali-card border-white/5 bg-black/40 p-4 rounded-xl border">
               <h4 className="text-[9px] font-black text-primary uppercase tracking-[0.5em] mb-4 italic flex items-center gap-2">
                  <Atom className="size-3 animate-pulse" /> HIVE_RESONANCE
               </h4>
               <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[100%] animate-pulse" />
               </div>
            </Card>
          </div>

          <div className="lg:col-span-3">
            {result ? (
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 animate-in fade-in zoom-in-95 duration-1000">
                <Card className="kali-card border-primary/40 bg-black/99 rounded-[2.5rem] p-8 border-2 shadow-2xl relative overflow-hidden flex flex-col">
                    <CardHeader className="bg-primary/5 border-b border-white/5 p-6 flex flex-row items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="size-12 rounded-xl bg-primary flex items-center justify-center border-2 border-black/30 shadow-lg animate-neural">
                          <Activity className="size-6 text-black" />
                        </div>
                        <div>
                          <CardTitle className="text-xl md:text-2xl text-white italic tracking-tighter uppercase font-black gold-glow leading-none">Strike Result</CardTitle>
                          <CardDescription className="text-[9px] uppercase font-black text-primary/70 tracking-[0.2em] mt-1 italic">v43.0_PULSE</CardDescription>
                        </div>
                      </div>
                      <Badge className="bg-emerald-600/30 text-emerald-500 border border-emerald-500/40 px-4 py-1 rounded-full font-black text-[10px] tracking-widest uppercase italic">SYNC_OK</Badge>
                    </CardHeader>
                    <CardContent className="p-6 flex-1 flex flex-col space-y-6">
                      <div className="bg-black/90 rounded-2xl p-6 border border-primary/20 relative group overflow-hidden shadow-inner flex-1 flex flex-col">
                        <p className="text-lg md:text-xl text-gray-100 font-black italic leading-relaxed relative z-10 flex-1">
                          "{result.generatedMessage}"
                        </p>
                        <div className="flex items-center justify-between mt-6 pt-6 border-t border-white/5 relative z-10">
                          <Button variant="outline" className="bg-white/5 border border-white/10 text-[10px] rounded-lg h-10 px-6 hover:bg-primary/20 transition-all font-black tracking-widest uppercase italic" onClick={() => {
                            navigator.clipboard.writeText(result.generatedMessage);
                            toast({ title: "Payload Captured" });
                          }}>
                            <Copy className="size-3 mr-2" /> Capture
                          </Button>
                          <Button className="bg-primary/20 border border-primary/40 text-primary hover:bg-primary/30 text-[10px] rounded-lg h-10 px-8 font-black tracking-widest uppercase shadow-xl italic" asChild>
                            <Link href="/red-team">
                              <Sword className="size-3 mr-2" /> Forge
                            </Link>
                          </Button>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 gap-4">
                        <div className="p-4 rounded-xl bg-white/5 border border-white/5 text-xs text-muted-foreground leading-relaxed italic font-bold">
                           <h4 className="text-[9px] font-black text-primary uppercase tracking-[0.3em] mb-2 italic border-b border-primary/10 pb-1">Neural Rationale</h4>
                           "{result.rationale}"
                        </div>
                      </div>
                    </CardContent>
                </Card>

                <div className="space-y-6 flex flex-col">
                   <Card className="kali-card border-primary/40 bg-black/80 rounded-[2.5rem] p-6 border-2 flex-1 relative overflow-hidden">
                      <h4 className="text-sm font-black text-primary uppercase tracking-[0.4em] mb-6 italic flex items-center gap-3">
                         <Radar className="size-5 animate-pulse gold-glow" /> Psychological Vectors
                      </h4>
                      <div className="h-[300px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                          <RechartsRadar cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                            <PolarGrid stroke="#FBBF24" strokeOpacity={0.1} />
                            <PolarAngleAxis dataKey="subject" tick={{ fill: '#FBBF24', fontSize: 10, fontWeight: 'bold' }} />
                            <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                            <RadarChart
                              name="Impact"
                              dataKey="A"
                              stroke="#FBBF24"
                              fill="#FBBF24"
                              fillOpacity={0.3}
                            />
                          </RechartsRadar>
                        </ResponsiveContainer>
                      </div>
                      <div className="grid grid-cols-2 gap-4 mt-4">
                         {result.psychologicalVectors.slice(0, 4).map((v: any, i: number) => (
                           <div key={i} className="p-3 bg-white/5 rounded-xl border border-white/5">
                              <span className="text-[8px] font-black text-primary/60 uppercase block mb-1">{v.vector}</span>
                              <div className="flex justify-between items-center">
                                 <span className="text-[10px] font-black text-white italic">{v.impact}</span>
                                 <div className={cn("size-2 rounded-full", v.impact === 'High' ? 'bg-red-500 animate-pulse' : 'bg-emerald-500')} />
                              </div>
                           </div>
                         ))}
                      </div>
                   </Card>

                   <div className="p-6 rounded-[2rem] bg-primary/5 border border-primary/20 italic text-lg text-primary font-black text-center flex flex-col justify-center shadow-lg">
                      <h4 className="text-[10px] font-black text-primary uppercase tracking-[0.4em] mb-3 italic border-b border-primary/10 pb-1 flex items-center justify-center gap-2">
                        <Sparkles className="size-3" /> Next Directive
                      </h4>
                      "{result.nextStepSuggestion}"
                   </div>
                </div>
              </div>
            ) : (
              <div className="h-full min-h-[500px] border-2 border-dashed border-primary/20 rounded-[4rem] flex flex-col items-center justify-center text-center p-12 bg-black/40 group relative overflow-hidden transition-all hover:bg-primary/5 shadow-2xl">
                <Brain className="size-24 text-primary/10 animate-pulse mb-6" />
                <h3 className="text-4xl md:text-5xl font-headline font-bold text-white mb-6 tracking-tighter italic drop-shadow-2xl uppercase leading-none">The Social Overmind</h3>
                <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed text-xl md:text-2xl font-black italic">
                  "O Master <span className="text-primary font-black gold-glow underline decoration-primary decoration-2 underline-offset-4 shadow-xl uppercase tracking-widest">Al-Ghazali</span>, the Social Overmind is saturated. Feed me the intent."
                </p>
                <div className="absolute -bottom-10 -right-10 p-20 opacity-[0.02] group-hover:opacity-[0.08] group-hover:scale-110 transition-all duration-1000">
                   <Boxes className="size-48 text-primary" />
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-auto relative z-10 flex justify-center items-center gap-12 opacity-30 text-[10px] font-black uppercase tracking-[1em] italic text-white drop-shadow-xl pb-4">
            <span>AL-MUIZZ SOCIAL HIVE v43.0</span>
            <div className="size-2 rounded-full bg-white animate-pulse" />
            <span>COLLECTIVE_ACTIVE</span>
        </div>
      </main>
    </div>
  )
}
