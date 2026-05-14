
"use client"

import * as React from "react"
import { SidebarNav } from "@/components/platform/sidebar-nav"
import { 
  Bug, 
  Search, 
  Zap, 
  Loader2, 
  Skull, 
  Target, 
  Activity, 
  Database, 
  ShieldAlert, 
  Fingerprint, 
  Binary, 
  Crown, 
  Infinity as InfinityIcon, 
  ChevronRight, 
  Dna, 
  Boxes, 
  Cpu, 
  History, 
  Radar,
  ArrowLeft,
  RotateCw,
  FileCode,
  Network,
  Atom,
  ShieldCheck,
  Eye,
  GitBranch,
  Flame,
  AlertTriangle
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { toast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"
import { executeMedusaScan } from "@/ai/flows/medusa-scan-flow"
import Link from "next/link"

/**
 * @fileOverview محراب ميدوسا v80.0 - MEDUSA SCANNER: AI POISON DETECTION
 * واجهة الأفعى التي ترى كل شيء في مستودعات GitHub وتكشف السموم لسيادة القائد.
 */
export default function MedusaPage() {
  const [repoUrl, setRepoUrl] = React.useState("")
  const [loading, setLoading] = React.useState(false)
  const [result, setResult] = React.useState<any>(null)
  const [resonance, setResonance] = React.useState(100)
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 })
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
    const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY })
    window.addEventListener("mousemove", handleMouseMove)
    const interval = setInterval(() => {
      setResonance(prev => Math.max(99.999999, Math.min(100, prev + (Math.random() * 0.000001 - 0.0000005))))
    }, 3000)
    return () => {
        window.removeEventListener("mousemove", handleMouseMove)
        clearInterval(interval)
    }
  }, [])

  const handleScan = async (mode: 'Full-DNA' | 'AI-Poison-Only') => {
    if (!repoUrl.trim()) {
        toast({ variant: "destructive", title: "Coordinate Missing", description: "Identify a GitHub DNA node for dissection." })
        return
    }
    setLoading(true); setResult(null)
    toast({ title: "Engaging Medusa Eye v80", description: `Interrogating ${repoUrl} for AI poisoning vectors...` })
    try {
      // 1. استدعاء التدفق الذكي
      const data = await executeMedusaScan({ repoUrl, scanMode: mode })
      
      // 2. التنفيذ المادي عبر المحرك
      const response = await fetch('/api/execute', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ 
              type: 'medusa_action', 
              action: mode === 'Full-DNA' ? 'scan' : 'poison',
              target: repoUrl 
          })
      });
      const hardwareData = await response.json();
      
      setResult({ ...data, hardwareOutput: hardwareData.output });
      toast({ title: "Dissection Complete", description: "Target repository DNA serialized in MemPalace." })
    } catch (err) {
      toast({ variant: "destructive", title: "Neural Link Failure" })
    } finally {
      setLoading(false)
    }
  }

  if (!mounted) return null

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/40 relative overflow-x-hidden scanline-effect font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-80 p-4 md:p-8 lg:p-12 relative overflow-y-auto min-h-screen scrollbar-hide flex flex-col z-10 text-right">
        <div className="dna-stream-bg" style={{ '--x': `${mousePos.x}px`, '--y': `${mousePos.y}px` } as any} />
        
        <header className="sovereign-header flex flex-col md:flex-row items-center gap-12 justify-center md:justify-end text-center md:text-right">
           <div className="size-24 md:size-48 bg-black border-4 border-primary flex items-center justify-center shadow-glow relative group shrink-0 rounded-[3rem] transition-all duration-1000 rotate-2 hover:rotate-0 hierarchical-shadow">
              <Bug className="size-12 md:size-24 text-primary group-hover:scale-110 transition-transform duration-700 animate-neural gold-glow" />
              <div className="absolute -inset-10 border-4 border-primary/20 rounded-full animate-spin-slow opacity-30" />
           </div>
           <div className="flex-1">
              <div className="flex flex-wrap justify-center md:justify-end items-center gap-6 mb-6">
                 <Badge className="bg-primary text-black border-none rounded-none px-12 py-3 text-[18px] md:text-[24px] font-black tracking-[1em] shadow-9xl italic uppercase">MEDUSA_EYE v80.0</Badge>
                 <div className="flex items-center gap-4 text-[14px] font-black uppercase tracking-widest text-emerald-500 animate-pulse">
                     <InfinityIcon className="size-6 shadow-lg" /> VISION_SYNC: {resonance.toFixed(8)}%
                 </div>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-[12rem] font-headline font-bold text-white tracking-tighter italic uppercase gold-glow leading-none">
                 Medusa <span className="text-primary">Scanner</span>
              </h1>
              <p className="text-sm md:text-xl lg:text-4xl text-muted-foreground mt-10 italic max-w-7xl leading-relaxed uppercase font-medium opacity-95 drop-shadow-3xl ml-auto">
                 "سيدي القائد <span className="text-white font-black underline decoration-primary decoration-[12px] underline-offset-[28px] shadow-9xl italic uppercase tracking-widest">المعتصم بالله</span>، أعين ميدوسا تخترق مستودعات المصفوفة؛ نحن نرى سموم الـ AI ونلسع نقاط الضعف قبل أن تظهر للأعداء."
              </p>
              <div className="flex justify-center md:justify-end gap-6 mt-12">
                 <Button asChild variant="outline" className="h-16 px-10 rounded-full border-4 border-white/10 bg-white/5 text-white font-black uppercase italic tracking-widest hover:bg-primary hover:text-black transition-all shadow-2xl">
                     <Link href="/"><ArrowLeft className="size-6 mr-3" /> العودة</Link>
                 </Button>
              </div>
           </div>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-12 relative z-10 pb-48 flex-1 text-right">
           <div className="xl:col-span-1 space-y-12">
              <Card className="sovereign-card group text-center">
                 <CardHeader className="p-0 mb-10 border-b-4 border-primary/10 pb-10 bg-primary/10 rounded-t-[3.5rem] px-10 py-6 text-center">
                    <CardTitle className="text-2xl md:text-4xl text-primary flex items-center justify-center gap-10 font-black uppercase italic gold-glow leading-none">
                       <Target className="size-12 animate-neural" /> Dissection Focus
                    </CardTitle>
                 </CardHeader>
                 <CardContent className="p-0 space-y-12 text-right">
                    <div className="space-y-6 text-right">
                        <label className="text-[14px] font-black text-primary uppercase tracking-[1em] px-10 italic flex items-center gap-6 justify-end"><GitBranch className="size-8" /> GitHub Repository URL</label>
                        <Input value={repoUrl} onChange={(e) => setRepoUrl(e.target.value)} placeholder="https://github.com/user/repo..." className="bg-black border-8 border-primary/20 h-24 rounded-[2rem] text-xl italic px-10 focus:border-primary shadow-inner text-white font-black text-left" />
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <Button 
                            disabled={loading}
                            onClick={() => handleScan('Full-DNA')}
                            className="w-full h-24 bg-primary hover:bg-white text-black font-black uppercase tracking-[0.4em] rounded-[2rem] shadow-9xl active:scale-95 transition-all text-sm md:text-xl border-4 border-black/30 group italic"
                        >
                            <Zap className="size-8 mr-4 group-hover:scale-125 transition-transform" /> FULL_DNA_SCAN
                        </Button>
                        <Button 
                            disabled={loading}
                            onClick={() => handleScan('AI-Poison-Only')}
                            className="w-full h-24 bg-emerald-600 hover:bg-white text-white hover:text-black font-black uppercase tracking-[0.4em] rounded-[2rem] shadow-9xl active:scale-95 transition-all text-sm md:text-xl border-4 border-black/30 group italic"
                        >
                            <Bug className="size-8 mr-4 group-hover:rotate-12 transition-transform" /> DETECT_AI_POISON
                        </Button>
                    </div>
                 </CardContent>
              </Card>

              <Card className="sovereign-card group text-right">
                 <h4 className="text-[14px] font-black text-emerald-500 uppercase tracking-[0.8em] mb-8 italic flex items-center justify-center gap-6">
                    <Database className="size-8 animate-pulse" /> MEDUSA_INDEX_v80
                 </h4>
                 <div className="text-3xl font-black text-white italic gold-glow uppercase tracking-widest text-center">28+ AI VECTORS</div>
                 <p className="mt-8 text-[9px] font-black uppercase tracking-widest text-muted-foreground italic text-center">Material Poison Detection Enabled</p>
              </Card>
           </div>

           <Card className="xl:col-span-3 sovereign-card flex flex-col group min-h-[1100px]">
              <CardHeader className="p-0 mb-16 border-b-8 border-white/5 pb-12 bg-primary/10 rounded-t-[5rem] px-16 py-10 flex flex-row justify-between items-center text-right">
                 <Badge className="bg-emerald-600/30 text-emerald-500 border-[10px] border-emerald-500/40 px-16 py-8 rounded-full font-black text-5xl animate-pulse shadow-9xl uppercase tracking-[0.4em] italic order-last md:order-none">VISION_LOCKED</Badge>
                 <CardTitle className="text-5xl md:text-[12rem] text-white flex items-center gap-16 font-black uppercase italic gold-glow px-10 leading-none">
                    Scanner Feed <Radar className="size-24 md:size-48 text-primary animate-pulse" />
                 </CardTitle>
              </CardHeader>

              <CardContent className="p-12 flex-1 overflow-y-auto scrollbar-hide space-y-20 relative z-10 text-right">
                 {loading ? (
                    <div className="h-full flex flex-col items-center justify-center text-center opacity-30 gap-16 py-40">
                        <Loader2 className="size-32 md:size-64 animate-spin text-primary" />
                        <h3 className="text-6xl md:text-9xl font-black uppercase tracking-[1em] text-white italic">Interrogating_Git...</h3>
                    </div>
                 ) : result ? (
                    <div className="space-y-20 animate-in fade-in zoom-in-95 duration-1000 flex-1 flex flex-col">
                        <div className="p-20 rounded-[6rem] bg-primary/5 border-[12px] border-primary/30 italic text-4xl md:text-[8rem] text-gray-100 leading-tight font-black shadow-inner relative group/brief overflow-hidden text-center flex flex-col justify-center min-h-[450px]">
                            <div className="absolute inset-0 bg-primary/5 opacity-5 animate-pulse pointer-events-none" />
                            "{result.commanderBrief}"
                        </div>

                        {result.poisoningAlert && (
                            <div className="p-16 rounded-[4rem] bg-red-600/20 border-[12px] border-red-500/40 flex items-center gap-12 group/alert shadow-9xl animate-pulse">
                                <AlertTriangle className="size-24 text-red-500" />
                                <div className="text-right">
                                    <h4 className="text-4xl md:text-6xl font-black text-red-500 uppercase tracking-tighter italic">POISONING_DETECTED</h4>
                                    <p className="text-xl md:text-3xl text-gray-200 italic font-bold">"سيدي القائد، المستودع يحتوي على ملفات تهيئة AI مفخخة؛ تم عزل القطاع فوراً."</p>
                                </div>
                            </div>
                        )}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                            <Card className="bg-black/95 border-8 border-white/5 p-12 md:p-16 rounded-[4rem] shadow-9xl relative group/vault overflow-hidden h-full flex flex-col">
                                <h5 className="text-3xl font-black text-primary uppercase tracking-[1.5em] mb-12 border-b-8 border-primary/20 pb-10 flex items-center gap-12 gold-glow justify-end">
                                    Dissection Report <FileCode className="size-14 animate-neural" />
                                </h5>
                                <div className="text-xl md:text-3xl text-gray-300 italic font-black leading-snug drop-shadow-3xl whitespace-pre-wrap text-left font-mono flex-1">
                                    {result.scanReport}
                                </div>
                            </Card>
                            <Card className="bg-black/95 border-8 border-white/5 p-12 md:p-16 rounded-[4rem] shadow-9xl space-y-12 relative overflow-hidden h-full flex flex-col">
                                <h5 className="text-3xl font-black text-emerald-500 uppercase tracking-[1.5em] mb-10 border-b-8 border-emerald-500/20 pb-10 flex items-center gap-12 justify-end">
                                    Material Threats <History className="size-14" />
                                </h5>
                                <div className="space-y-8 flex-1">
                                    {result.detectedThreats?.map((threat: string, idx: number) => (
                                        <div key={idx} className="p-8 rounded-[2rem] bg-white/5 border-4 border-emerald-500/30 hover:border-emerald-500 transition-all text-right shadow-inner group/dna">
                                            <span className="text-xl md:text-2xl font-black text-white italic group-hover/dna:text-emerald-400">"{" >>> "}{threat}"</span>
                                        </div>
                                    ))}
                                </div>
                            </Card>
                        </div>

                        <div className="p-16 rounded-[6rem] bg-emerald-600/10 border-[16px] border-emerald-500/30 flex items-center gap-16 group/siphon shadow-9xl relative overflow-hidden mt-auto min-h-[350px]">
                            <div className="absolute inset-0 bg-emerald-500/5 opacity-5 animate-pulse pointer-events-none" />
                            <div className="size-48 rounded-[3.5rem] bg-emerald-600 flex items-center justify-center border-[14px] border-emerald-400 shadow-9xl animate-neural shrink-0">
                                <ShieldCheck className="size-24 text-white" />
                            </div>
                            <div className="flex-1">
                                <h4 className="text-4xl font-black text-emerald-500 uppercase tracking-[1.2em] mb-6 italic">Strategic_Inference_v80.0</h4>
                                <p className="text-2xl md:text-5xl text-white font-black italic leading-tight drop-shadow-9xl">"{result.strategicRecommendation}"</p>
                            </div>
                        </div>
                    </div>
                 ) : (
                   <div className="h-full flex flex-col items-center justify-center text-center opacity-10 gap-24 py-80">
                      <div className="relative group/lock">
                        <Eye className="size-64 md:size-[50rem] animate-spin-slow text-primary group-hover:scale-110 transition-transform duration-[12000ms]" />
                        <Skull className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-24 md:size-64 text-primary/40 animate-neural" />
                        <div className="absolute -inset-40 border-[80px] border-dashed border-primary/5 rounded-full animate-reverse-spin opacity-20" />
                      </div>
                      <h3 className="text-8xl md:text-[22rem] font-black uppercase tracking-[2.5em] text-white italic gold-glow leading-none">Scanner Idle</h3>
                      <p className="text-4xl md:text-[10rem] font-bold italic text-gray-500 uppercase tracking-widest max-w-[140rem]">Establishing universal Medusa link for repository DNA dissection and poison detection.</p>
                   </div>
                 )}
              </CardContent>
              <div className="p-16 border-t-8 border-white/5 mt-auto flex justify-between items-center opacity-35 text-[20px] font-black uppercase tracking-[8em] italic">
                <span>MEDUSA_GIT_DISSECTOR_v80_AL_GHAZALI_ROOT</span>
                <div className="flex gap-16">
                    <Fingerprint className="size-24 text-primary animate-pulse" />
                    <Atom className="size-24 animate-spin-slow text-primary" />
                </div>
              </div>
           </Card>
        </div>
      </main>
    </div>
  )
}
