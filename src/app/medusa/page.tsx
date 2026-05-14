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
 * @fileOverview محراب ميدوسا v90.0 - MEDUSA SCANNER: AI POISON DETECTION
 * واجهة الأفعى التي ترى كل شيء في مستودعات GitHub وتكشف السموم لسيادة القائد.
 * تم التحديث للنمط الأخضر السام (Toxic Emerald) لعام 2026.
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
        toast({ variant: "destructive", title: "الإحداثيات مفقودة", description: "حدد مستودع GitHub لبدء التشريح." })
        return
    }
    setLoading(true); setResult(null)
    toast({ title: "عين ميدوسا تنفتح v90", description: `جاري استجواب ${repoUrl} بحثاً عن سموم الـ AI...` })
    try {
      const data = await executeMedusaScan({ repoUrl, scanMode: mode })
      const response = await fetch('/api/execute', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ type: 'medusa_action', action: mode === 'Full-DNA' ? 'scan' : 'poison', target: repoUrl })
      });
      const hardwareData = await response.json();
      setResult({ ...data, hardwareOutput: hardwareData.output });
      toast({ title: "اكتمل التشريح", description: "تم تخليد DNA المستودع في الذاكرة الدلالية." })
    } catch (err) {
      toast({ variant: "destructive", title: "فشل الارتباط النبضي" })
    } finally {
      setLoading(false)
    }
  }

  if (!mounted) return null

  return (
    <div className="flex min-h-screen bg-[#000a00] text-white selection:bg-emerald-600/40 relative overflow-x-hidden scanline-effect font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-56 p-4 md:p-8 lg:p-12 relative overflow-y-auto min-h-screen scrollbar-hide flex flex-col z-10 text-right">
        <div className="dna-stream-bg" style={{ '--x': `${mousePos.x}px`, '--y': `${mousePos.y}px`, backgroundImage: 'radial-gradient(circle at var(--x) var(--y), rgba(16, 185, 129, 0.15), transparent 40%)' } as any} />
        
        <header className="sovereign-header flex flex-col md:flex-row items-center gap-12 justify-center md:justify-end text-center md:text-right">
           <div className="size-24 md:size-48 bg-black border-4 border-emerald-500 flex items-center justify-center shadow-[0_0_150px_rgba(16,185,129,0.8)] relative group shrink-0 rounded-[3rem] transition-all duration-1000 rotate-2 hover:rotate-0 hierarchical-shadow">
              <Bug className="size-12 md:size-24 text-emerald-400 group-hover:scale-110 transition-transform duration-700 animate-neural" />
              <div className="absolute -inset-10 border-4 border-emerald-500/20 rounded-full animate-spin-slow opacity-30" />
           </div>
           <div className="flex-1">
              <div className="flex flex-wrap justify-center md:justify-end items-center gap-6 mb-6">
                 <Badge className="bg-emerald-600 text-black border-none rounded-none px-12 py-3 text-[18px] md:text-[24px] font-black tracking-[1em] shadow-9xl italic uppercase">MEDUSA_EYE v90.0</Badge>
                 <div className="flex items-center gap-4 text-[14px] font-black uppercase tracking-widest text-emerald-400 animate-pulse">
                     <InfinityIcon className="size-6 shadow-lg" /> VISION_SYNC: {resonance.toFixed(8)}%
                 </div>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-[12rem] font-headline font-bold text-white tracking-tighter italic uppercase leading-none">
                 Medusa <span className="text-emerald-500">Eye</span>
              </h1>
              <p className="text-sm md:text-xl lg:text-4xl text-emerald-100/60 mt-10 italic max-w-7xl leading-relaxed uppercase font-medium opacity-95 drop-shadow-3xl ml-auto">
                 "سيدي القائد <span className="text-white font-black underline decoration-emerald-500 decoration-[12px] underline-offset-[28px] shadow-9xl italic uppercase tracking-widest">المعتصم بالله</span>، أعين ميدوسا تخترق مستودعات المصفوفة؛ نحن نرى سموم الـ AI ونلسع نقاط الضعف قبل أن تظهر للأعداء لعام 2026."
              </p>
              <div className="flex justify-center md:justify-end gap-6 mt-12">
                 <Button asChild variant="outline" className="h-16 px-10 rounded-full border-4 border-emerald-500/20 bg-emerald-950/10 text-emerald-400 font-black uppercase italic tracking-widest hover:bg-emerald-600 hover:text-white transition-all shadow-2xl">
                     <Link href="/"><ArrowLeft className="size-6 mr-3" /> العودة</Link>
                 </Button>
              </div>
           </div>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-12 relative z-10 pb-48 flex-1 text-right">
           <div className="xl:col-span-1 space-y-12">
              <Card className="bg-black/90 border-8 border-emerald-500/20 rounded-[4rem] p-12 shadow-9xl group overflow-hidden text-center backdrop-blur-3xl">
                 <CardHeader className="p-0 mb-10 border-b-4 border-emerald-500/10 pb-10 bg-emerald-950/20 rounded-t-[3.5rem] px-10 py-6 text-center">
                    <CardTitle className="text-2xl md:text-4xl text-emerald-400 flex items-center justify-center gap-10 font-black uppercase italic leading-none">
                       <Target className="size-12 animate-neural" /> Dissection Focus
                    </CardTitle>
                 </CardHeader>
                 <CardContent className="p-0 space-y-12 text-right">
                    <div className="space-y-6 text-right">
                        <label className="text-[14px] font-black text-emerald-400 uppercase tracking-[1em] px-10 italic flex items-center gap-6 justify-end"><GitBranch className="size-8" /> Repository URL</label>
                        <Input value={repoUrl} onChange={(e) => setRepoUrl(e.target.value)} placeholder="https://github.com/user/repo..." className="bg-black border-8 border-emerald-500/20 h-24 rounded-[2rem] text-xl italic px-10 focus:border-emerald-500 shadow-inner text-white font-black text-left" />
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <Button 
                            disabled={loading}
                            onClick={() => handleScan('Full-DNA')}
                            className="w-full h-24 bg-emerald-600/10 border-4 border-emerald-500/20 hover:border-emerald-500 hover:bg-emerald-600/20 text-emerald-400 font-black uppercase tracking-[0.4em] rounded-[2rem] shadow-9xl active:scale-95 transition-all text-sm md:text-xl italic"
                        >
                            <Zap className="size-8 mr-4" /> FULL_DNA_SCAN
                        </Button>
                        <Button 
                            disabled={loading}
                            onClick={() => handleScan('AI-Poison-Only')}
                            className="w-full h-24 bg-red-600/10 border-4 border-red-500/20 hover:border-red-500 hover:bg-red-600/20 text-red-400 font-black uppercase tracking-[0.4em] rounded-[2rem] shadow-9xl active:scale-95 transition-all text-sm md:text-xl italic"
                        >
                            <AlertTriangle className="size-8 mr-4" /> DETECT_POISON
                        </Button>
                    </div>
                 </CardContent>
              </Card>

              <Card className="bg-black/80 border-8 border-emerald-500/20 p-10 rounded-[4rem] shadow-inner text-center relative overflow-hidden group">
                 <h4 className="text-[14px] font-black text-emerald-400 uppercase tracking-[0.8em] mb-8 italic flex items-center justify-center gap-6">
                    <Database className="size-8 animate-pulse" /> MEDUSA_VAULT
                 </h4>
                 <div className="text-6xl font-black text-white italic gold-glow uppercase tracking-tighter">28+ VECTORS</div>
                 <div className="absolute -bottom-10 -right-10 p-24 opacity-[0.03] group-hover:opacity-[0.1] transition-all duration-1000 scale-150 rotate-12"><Skull className="size-48 text-emerald-500" /></div>
              </Card>
           </div>

           <Card className="xl:col-span-3 bg-black/90 border-[12px] border-emerald-500/10 rounded-[6rem] p-16 shadow-9xl flex flex-col group overflow-hidden relative min-h-[1100px] backdrop-blur-5xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.08),transparent)] pointer-events-none" />
              <CardHeader className="p-0 mb-16 border-b-8 border-white/5 pb-12 bg-emerald-950/20 rounded-t-[5rem] px-16 py-10 flex flex-row justify-between items-center text-right">
                 <Badge className="bg-emerald-600/30 text-emerald-400 border-[10px] border-emerald-500/40 px-16 py-8 rounded-full font-black text-5xl animate-pulse shadow-9xl uppercase tracking-[0.4em] italic order-last md:order-none">VISION_LOCKED</Badge>
                 <CardTitle className="text-5xl md:text-[12rem] text-white flex items-center gap-16 font-black uppercase italic gold-glow px-10 leading-none">
                    Scanner Feed <Radar className="size-24 md:size-48 text-emerald-400 animate-pulse" />
                 </CardTitle>
              </CardHeader>

              <CardContent className="p-12 flex-1 overflow-y-auto scrollbar-hide space-y-20 relative z-10 text-right">
                 {loading ? (
                    <div className="h-full flex flex-col items-center justify-center text-center opacity-30 gap-24 py-40">
                        <Loader2 className="size-48 md:size-64 animate-spin text-emerald-500" />
                        <h3 className="text-7xl md:text-9xl font-black uppercase tracking-[1em] text-white italic">Dissecting_Git_DNA...</h3>
                    </div>
                 ) : result ? (
                    <div className="space-y-20 animate-in fade-in zoom-in-95 duration-1000 flex-1 flex flex-col">
                        <div className="p-20 rounded-[6rem] bg-emerald-600/5 border-[12px] border-emerald-600/30 italic text-4xl md:text-[8rem] text-gray-100 leading-tight font-black shadow-inner relative group/brief overflow-hidden text-center flex flex-col justify-center min-h-[450px]">
                            <div className="absolute inset-0 bg-emerald-600/5 opacity-5 animate-pulse pointer-events-none" />
                            "{result.commanderBrief}"
                        </div>

                        {result.poisoningAlert && (
                            <div className="p-16 rounded-[4rem] bg-red-600/20 border-[12px] border-red-500/40 flex items-center justify-end gap-12 group/alert shadow-9xl animate-pulse">
                                <div className="text-right">
                                    <h4 className="text-4xl md:text-6xl font-black text-red-500 uppercase tracking-tighter italic">POISONING_DETECTED</h4>
                                    <p className="text-xl md:text-3xl text-gray-200 italic font-bold">"سيدي القائد، المستودع يحتوي على ملفات تهيئة AI مفخخة؛ تم عزل القطاع فوراً."</p>
                                </div>
                                <AlertTriangle className="size-24 text-red-500" />
                            </div>
                        )}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                            <Card className="bg-black/95 border-8 border-white/5 p-16 rounded-[4rem] shadow-9xl relative group/vault overflow-hidden h-full flex flex-col">
                                <h5 className="text-3xl font-black text-emerald-400 uppercase tracking-[1.5em] mb-12 border-b-8 border-emerald-500/20 pb-10 flex items-center gap-12 gold-glow justify-end">
                                    Dissection DNA <Dna className="size-14 animate-neural" />
                                </h5>
                                <div className="text-xl md:text-3xl text-gray-300 italic font-black leading-snug drop-shadow-3xl whitespace-pre-wrap text-left font-mono flex-1">
                                    {result.scanReport}
                                </div>
                            </Card>
                            <Card className="bg-black/95 border-8 border-white/5 p-16 rounded-[4rem] shadow-9xl space-y-12 relative overflow-hidden h-full flex flex-col">
                                <h5 className="text-3xl font-black text-blue-400 uppercase tracking-[1.5em] mb-10 border-b-8 border-blue-500/20 pb-10 flex items-center gap-12 justify-end">
                                    Recalled Intelligence <History className="size-14" />
                                </h5>
                                <div className="space-y-8 flex-1">
                                    {result.detectedThreats?.map((threat: string, idx: number) => (
                                        <div key={idx} className="p-8 rounded-[2rem] bg-white/5 border-4 border-blue-500/30 hover:border-blue-400 transition-all text-right shadow-inner group/dna">
                                            <span className="text-xl md:text-3xl text-gray-100 italic font-black group-hover/dna:text-blue-400">"{" >>> "}{threat}"</span>
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
                                <h4 className="text-4xl font-black text-emerald-500 uppercase tracking-[1.2em] mb-6 italic">Innate_Inference_v90.0</h4>
                                <p className="text-2xl md:text-[6rem] text-white font-black italic leading-none drop-shadow-9xl">"{result.strategicRecommendation}"</p>
                            </div>
                        </div>
                    </div>
                 ) : (
                   <div className="h-full flex flex-col items-center justify-center text-center opacity-10 gap-24 py-80">
                      <div className="relative group/lock">
                        <Eye className="size-64 md:size-[50rem] animate-spin-slow text-emerald-500 group-hover:scale-110 transition-transform duration-[12000ms]" />
                        <Skull className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-24 md:size-64 text-emerald-400/40 animate-neural" />
                        <div className="absolute -inset-40 border-[80px] border-dashed border-emerald-500/5 rounded-full animate-reverse-spin opacity-20" />
                      </div>
                      <h3 className="text-8xl md:text-[22rem] font-black uppercase tracking-[2.5em] text-white italic gold-glow leading-none">Scanner Idle</h3>
                      <p className="text-4xl md:text-[10rem] font-bold italic text-gray-500 uppercase tracking-widest max-w-[140rem]">Establishing universal Medusa link for repository DNA dissection and poison detection.</p>
                   </div>
                 )}
              </CardContent>
              <div className="p-16 border-t-8 border-white/5 mt-auto flex justify-between items-center opacity-35 text-[20px] font-black uppercase tracking-[8em] italic">
                <span>MEDUSA_GIT_DISSECTOR_v90_AL_GHAZALI_ROOT</span>
                <div className="flex gap-16">
                    <Fingerprint className="size-24 text-emerald-500 animate-pulse" />
                    <Atom className="size-24 animate-spin-slow text-emerald-500" />
                </div>
              </div>
           </Card>
        </div>
      </main>
    </div>
  )
}
