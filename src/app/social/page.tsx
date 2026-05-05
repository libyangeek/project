
"use client"

import * as React from "react"
import { SidebarNav } from "@/components/platform/sidebar-nav"
import { 
  MessageSquare, 
  Send, 
  Zap, 
  ShieldCheck, 
  Brain,
  Copy,
  ChevronRight,
  Loader2,
  Database,
  Target,
  Search,
  Radar,
  Sparkles,
  Link as LinkIcon,
  Activity,
  Globe,
  Wifi,
  Info,
  Skull,
  Flame,
  Crown,
  Lock,
  Binary,
  TrendingUp,
  Sword,
  Atom,
  Boxes,
  Users,
  Fingerprint,
  Infinity as InfinityIcon
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
 * وحدة هندسة الوعي البشري. تم تحسين الخطوط والعرض.
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
  const [activePulse, setActivePulse] = React.useState(false)

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
      toast({ title: "Intel Sync OK" })
    } catch (err) {
      toast({ variant: "destructive", title: "Intel Sync Failed" })
    } finally {
      setContextLoading(false)
    }
  }

  const handleGenerate = async () => {
    if (!persona || !goal) return
    setLoading(true)
    setActivePulse(true)
    try {
      const data = await aiDrivenSocialEngineeringBots({
        platform,
        targetPersona: persona,
        campaignGoal: goal,
        knowledgeBaseContext: kbContext,
        useRealTimeIntel: useSearch
      })
      setResult(data)
      toast({ title: "Social Intent Materialized" })
    } catch (err) {
      toast({ variant: "destructive", title: "Core Sync Error" })
    } finally {
      setLoading(false)
      setTimeout(() => setActivePulse(false), 1500)
    }
  }

  if (!mounted) return null;

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/30 relative overflow-x-hidden scanline-effect font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-80 p-4 md:p-10 relative overflow-y-auto min-h-screen scrollbar-hide flex flex-col z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.08),transparent)] pointer-events-none transition-all duration-300 z-0" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />

        <header className="mb-12 relative z-10 animate-in fade-in slide-in-from-top-12 duration-1000">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="size-24 md:size-32 bg-black border-2 border-primary flex items-center justify-center shadow-2xl relative group shrink-0 rounded-[1.5rem] transition-all duration-1000">
              <Brain className="size-12 md:size-18 text-primary group-hover:scale-110 transition-transform duration-700 gold-glow animate-pulse" />
              <div className="absolute -inset-4 border border-primary/20 rounded-full animate-spin-slow opacity-40" />
            </div>
            <div className="text-center md:text-left flex-1">
              <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 mb-4">
                <Badge className="bg-primary text-black border-none rounded-none px-6 py-1.5 text-[14px] font-black tracking-[0.4em] shadow-md italic">HIVE_PSY_OPS v43.0</Badge>
                <div className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-emerald-500 animate-pulse">
                    <InfinityIcon className="size-4 shadow-lg" /> RESONANCE: ACTIVE
                </div>
              </div>
              <h1 className="text-4xl md:text-7xl font-headline font-bold text-white tracking-tighter italic uppercase leading-none gold-glow">
                Social <span className="text-primary">Overmind</span>
              </h1>
              <p className="text-lg md:text-2xl text-muted-foreground mt-4 italic max-w-4xl leading-relaxed uppercase font-medium">
                "سيدي الغزالي، وحدة هندسة الوعي البشري v43.0."
              </p>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative z-10 pb-24 flex-1">
          <div className="lg:col-span-1 space-y-8">
            <Card className="kali-card border-primary/40 bg-black/80 rounded-[2.5rem] p-8 border-2 shadow-xl overflow-hidden group">
              <CardHeader className="p-0 mb-6 border-b border-primary/10 pb-6">
                <CardTitle className="text-2xl text-primary flex items-center gap-4 font-black uppercase italic gold-glow">
                  <Skull className="size-8 text-primary" /> Hive Social Core
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 space-y-8">
                <div className="flex items-center justify-between p-4 rounded-[1.5rem] bg-primary/5 border-2 border-primary/20 shadow-md">
                   <div className="space-y-1">
                      <Label className="text-[10px] font-black text-white uppercase tracking-[0.2em] italic flex items-center gap-2">
                        <Globe className="size-4 text-primary" /> Real-time Intel
                      </Label>
                   </div>
                   <Switch checked={useSearch} onCheckedChange={setUseSearch} className="data-[state=checked]:bg-primary scale-110" />
                </div>

                <div className="space-y-4">
                  <Label className="text-[11px] font-black text-primary/60 uppercase tracking-[0.4em] px-4 italic">Platform Matrix</Label>
                  <Select value={platform} onValueChange={(v: any) => setPlatform(v)}>
                    <SelectTrigger className="bg-black/99 border-2 border-white/10 h-14 rounded-[1.5rem] text-sm font-black italic shadow-inner px-6">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-black/98 border-2 border-primary/40 backdrop-blur-3xl rounded-[1.5rem]">
                      <SelectItem value="telegram" className="rounded-xl py-2 font-black italic">Telegram Hive</SelectItem>
                      <SelectItem value="whatsapp" className="rounded-xl py-2 font-black italic">WhatsApp Mesh</SelectItem>
                      <SelectItem value="other" className="rounded-xl py-2 font-black italic">Matrix Overlay</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-4">
                  <Label className="text-[11px] font-black text-primary/60 uppercase tracking-[0.4em] px-4 italic">Target Profile</Label>
                  <Textarea 
                    placeholder="Descriptors..."
                    className="bg-black border-2 border-white/10 min-h-[140px] text-sm rounded-[1.5rem] focus:border-primary transition-all resize-none font-black italic p-6 shadow-inner text-gray-200"
                    value={persona}
                    onChange={(e) => setPersona(e.target.value)}
                  />
                </div>

                <div className="space-y-4">
                  <Label className="text-[11px] font-black text-primary/60 uppercase tracking-[0.4em] px-4 italic">Mission Objective</Label>
                  <Input 
                    placeholder="Goal..."
                    className="bg-black border-2 border-white/10 h-14 text-sm rounded-[1.5rem] focus:border-primary italic px-6 shadow-inner font-black"
                    value={goal}
                    onChange={(e) => setGoal(e.target.value)}
                  />
                </div>

                <Button 
                  className="w-full bg-primary hover:bg-white text-black shadow-2xl h-20 rounded-[2rem] group transition-all duration-700 border-4 border-black/30 active:scale-95 italic font-black uppercase tracking-[0.4em] text-lg"
                  onClick={handleGenerate}
                  disabled={loading}
                >
                  {loading ? <Loader2 className="size-8 animate-spin" /> : <Zap className="size-8 mr-4 group-hover:scale-125 transition-transform" />}
                  Ignite Hive
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-3">
            {result ? (
              <div className="space-y-8 animate-in fade-in zoom-in-95 duration-700">
                <Card className="kali-card border-primary/40 bg-black/99 rounded-[3rem] p-10 border-4 shadow-2xl relative overflow-hidden">
                    <CardHeader className="bg-primary/5 border-b border-primary/10 flex flex-col md:flex-row items-center justify-between p-8">
                      <div className="flex items-center gap-6">
                        <div className="size-16 rounded-2xl bg-primary flex items-center justify-center border-2 border-black/30 shadow-lg animate-neural">
                          <MessageSquare className="size-8 text-black" />
                        </div>
                        <div>
                          <CardTitle className="text-3xl md:text-5xl text-white italic tracking-tighter uppercase font-black gold-glow leading-none">Strike Intent</CardTitle>
                          <CardDescription className="text-[11px] uppercase font-black text-primary/70 tracking-[0.4em] mt-2 italic">v43.0 Pulse</CardDescription>
                        </div>
                      </div>
                      <Badge className="bg-primary/10 text-primary border-2 border-primary/30 px-6 py-2 rounded-full font-black text-sm tracking-widest uppercase italic">LVL: {result.riskLevel}</Badge>
                    </CardHeader>
                    <CardContent className="p-8 space-y-8">
                      <div className="bg-black/90 rounded-[2rem] p-10 md:p-14 border-2 border-primary/20 relative group overflow-hidden shadow-inner">
                        <p className="text-2xl md:text-4xl text-gray-100 font-black italic leading-tight relative z-10 drop-shadow-2xl">
                          "{result.generatedMessage}"
                        </p>
                        <div className="flex flex-wrap gap-4 mt-12 relative z-10">
                          <Button variant="outline" className="bg-white/5 border-2 border-white/10 text-sm rounded-xl h-12 px-8 hover:bg-primary/20 transition-all font-black tracking-widest uppercase italic group" onClick={() => {
                            navigator.clipboard.writeText(result.generatedMessage);
                            toast({ title: "Payload Siphoned" });
                          }}>
                            <Copy className="size-4 mr-2 group-hover:scale-110 transition-transform" /> Copy
                          </Button>
                          <Button className="bg-primary/20 border-2 border-primary/40 text-primary hover:bg-primary/30 text-sm rounded-xl h-12 px-10 ml-auto font-black tracking-widest uppercase shadow-xl italic" asChild>
                            <Link href="/red-team">
                              <Sword className="size-4 mr-2 group-hover:rotate-45 transition-all" /> Forge
                            </Link>
                          </Button>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="p-8 rounded-[2rem] bg-white/5 border border-white/5 text-lg text-muted-foreground leading-relaxed italic relative shadow-inner font-bold">
                          <h4 className="text-[12px] font-black text-primary uppercase tracking-[0.4em] mb-4 italic border-b border-primary/10 pb-2">Rationale</h4>
                          "{result.rationale}"
                        </div>
                        <div className="p-8 rounded-[2rem] bg-primary/5 border border-primary/10 text-2xl text-primary font-black italic text-center flex flex-col justify-center">
                          <h4 className="text-[12px] font-black text-primary uppercase tracking-[0.4em] mb-4 italic border-b border-primary/10 pb-2">Next Move</h4>
                          "{result.nextStepSuggestion}"
                        </div>
                      </div>
                    </CardContent>
                </Card>
              </div>
            ) : (
              <div className="h-full min-h-[700px] border-4 border-dashed border-primary/20 rounded-[5rem] flex flex-col items-center justify-center text-center p-20 bg-black/40 group relative overflow-hidden transition-all hover:bg-primary/5 shadow-2xl">
                <Brain className="size-48 text-primary/10 animate-pulse mb-8" />
                <h3 className="text-5xl md:text-[6rem] font-headline font-bold text-white mb-8 tracking-tighter italic drop-shadow-2xl uppercase leading-none">The Social Overmind</h3>
                <p className="text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-16 text-2xl md:text-4xl font-black italic">
                  Initialize the <span className="text-primary font-black gold-glow underline decoration-primary decoration-4 underline-offset-8 shadow-xl uppercase tracking-widest">Hive Brain</span>.
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="mt-auto relative z-10 flex justify-center items-center gap-24 opacity-40 text-[12px] font-black uppercase tracking-[2em] italic text-white drop-shadow-xl pb-6">
            <span>AL-MUIZZ SOCIAL HIVE v43.0</span>
            <div className="size-4 rounded-full bg-white animate-pulse" />
            <span>COLLECTIVE_ACTIVE</span>
        </div>
      </main>
    </div>
  )
}
