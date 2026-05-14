"use client"

import * as React from "react"
import { SidebarNav } from "@/components/platform/sidebar-nav"
import { 
  Smartphone, 
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
  Bot
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { toast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"
import { executeAndroidHunt } from "@/ai/flows/android-rag-hunt-flow"
import Link from "next/link"

/**
 * @fileOverview صياد الأندرويد v90.0 - ANDROID RAG HUNTER: OMNIPOTENT DISSECTION
 * واجهة الافتراس النقال التي تصهر الذاكرة الدلالية بأدوات AndroHunter و DroidLLM.
 * تم التحديث للنمط الأزرق السيبراني (Cyber Blue) لعام 2026.
 */
export default function AndroidHunterPage() {
  const [targetIp, setTargetIp] = React.useState("")
  const [apkPath, setApkPath] = React.useState("")
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

  const handleHunt = async () => {
    if (!targetIp && !apkPath) {
        toast({ variant: "destructive", title: "الهدف مفقود", description: "حدد عنوان IP أو مسار ملف APK للبدء." })
        return
    }
    setLoading(true); setResult(null)
    toast({ title: "تشغيل مفترس الأندرويد v90", description: "جاري دمج MemPalace مع مستشعرات الأجهزة المادية..." })
    try {
      const data = await executeAndroidHunt({ deviceIp: targetIp, apkPath: apkPath, missionMode: 'Total-Siphon' })
      setResult(data)
      toast({ title: "اكتمل الافتراس", description: "تم سحب DNA الجوال إلى عصب الهرمية." })
    } catch (err) {
      toast({ variant: "destructive", title: "فشل الارتباط العصبي" })
    } finally {
      setLoading(false)
    }
  }

  if (!mounted) return null

  return (
    <div className="flex min-h-screen bg-[#00050a] text-white selection:bg-blue-600/40 relative overflow-x-hidden scanline-effect font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-56 p-4 md:p-8 lg:p-12 relative overflow-y-auto min-h-screen scrollbar-hide flex flex-col z-10 text-right">
        <div className="dna-stream-bg" style={{ '--x': `${mousePos.x}px`, '--y': `${mousePos.y}px`, backgroundImage: 'radial-gradient(circle at var(--x) var(--y), rgba(59, 130, 246, 0.15), transparent 40%)' } as any} />
        
        <header className="sovereign-header flex flex-col md:flex-row items-center gap-12 justify-center md:justify-end text-center md:text-right">
           <div className="size-24 md:size-48 bg-black border-4 border-blue-500 flex items-center justify-center shadow-[0_0_150px_rgba(59,130,246,0.8)] relative group shrink-0 rounded-[3rem] transition-all duration-1000 rotate-2 hover:rotate-0 hierarchical-shadow">
              <Smartphone className="size-12 md:size-24 text-blue-400 group-hover:scale-110 transition-transform duration-700 animate-neural gold-glow" />
              <div className="absolute -inset-10 border-4 border-blue-500/20 rounded-full animate-spin-slow opacity-30" />
           </div>
           <div className="flex-1">
              <div className="flex flex-wrap justify-center md:justify-end items-center gap-6 mb-6">
                 <Badge className="bg-blue-600 text-white border-none rounded-none px-12 py-3 text-[18px] md:text-[24px] font-black tracking-[1em] shadow-9xl italic uppercase">DROID_PREDATOR v90.0</Badge>
                 <div className="flex items-center gap-4 text-[14px] font-black uppercase tracking-widest text-blue-400 animate-pulse">
                     <InfinityIcon className="size-6 shadow-lg" /> RAG_SYNC: {resonance.toFixed(8)}%
                 </div>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-[12rem] font-headline font-bold text-white tracking-tighter italic uppercase leading-none">
                 Mobile <span className="text-blue-500">Hunter</span>
              </h1>
              <p className="text-sm md:text-xl lg:text-4xl text-blue-100/60 mt-10 italic max-w-7xl leading-relaxed uppercase font-medium opacity-95 drop-shadow-3xl ml-auto">
                 "سيدي القائد <span className="text-white font-black underline decoration-blue-500 decoration-[12px] underline-offset-[28px] shadow-9xl italic uppercase tracking-widest">المعتصم بالله</span>، مصفوفة الافتراس النقال تصهر الذاكرة مع مستشعرات الأندرويد؛ نحن نبتلع الهوية المادية للجوالات للأبد."
              </p>
              <div className="flex justify-center md:justify-end gap-6 mt-12">
                 <Button asChild variant="outline" className="h-16 px-10 rounded-full border-4 border-blue-500/20 bg-blue-900/10 text-blue-400 font-black uppercase italic tracking-widest hover:bg-blue-600 hover:text-white transition-all shadow-2xl">
                     <Link href="/"><ArrowLeft className="size-6 mr-3" /> العودة</Link>
                 </Button>
              </div>
           </div>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-12 relative z-10 pb-48 flex-1 text-right">
           <div className="xl:col-span-1 space-y-12">
              <Card className="bg-black/90 border-8 border-blue-500/20 rounded-[4rem] p-12 shadow-9xl group overflow-hidden text-center backdrop-blur-3xl">
                 <CardHeader className="p-0 mb-10 border-b-4 border-blue-500/10 pb-10 bg-blue-900/20 rounded-t-[3.5rem] px-10 py-6 text-center">
                    <CardTitle className="text-2xl md:text-4xl text-blue-400 flex items-center justify-center gap-10 font-black uppercase italic leading-none">
                       <Target className="size-12 animate-neural" /> Predator Focus
                    </CardTitle>
                 </CardHeader>
                 <CardContent className="p-0 space-y-12 text-right">
                    <div className="space-y-6 text-right">
                        <label className="text-[14px] font-black text-blue-400 uppercase tracking-[1em] px-10 italic flex items-center gap-6 justify-end"><Network className="size-8" /> Device IP (ADB)</label>
                        <Input value={targetIp} onChange={(e) => setTargetIp(e.target.value)} placeholder="192.168.1.100..." className="bg-black border-8 border-blue-500/20 h-24 rounded-[2rem] text-xl italic px-10 focus:border-blue-500 shadow-inner text-white font-black text-left" />
                    </div>
                    <div className="space-y-6 text-right">
                        <label className="text-[14px] font-black text-blue-400 uppercase tracking-[1em] px-10 italic flex items-center gap-6 justify-end"><FileCode className="size-8" /> APK DNA Path</label>
                        <Input value={apkPath} onChange={(e) => setApkPath(e.target.value)} placeholder="/opt/capture/target.apk..." className="bg-black border-8 border-blue-500/20 h-24 rounded-[2rem] text-xl italic px-10 focus:border-blue-500 shadow-inner text-white font-black text-left" />
                    </div>

                    <Button 
                        disabled={loading}
                        onClick={handleHunt}
                        className="w-full h-36 bg-blue-600 hover:bg-white text-white hover:text-black font-black uppercase tracking-[1.2em] rounded-[3.5rem] shadow-[0_80px_250px_rgba(37,99,235,0.7)] active:scale-95 transition-all text-2xl md:text-4xl border-[12px] border-black/30 group italic"
                    >
                        {loading ? <Loader2 className="size-16 animate-spin" /> : <Zap className="size-16 mr-8 group-hover:scale-125 transition-transform gold-glow" />}
                        IGNITE_PREDATOR
                    </Button>
                 </CardContent>
              </Card>

              <Card className="bg-black/80 border-8 border-blue-500/20 p-10 rounded-[4rem] shadow-inner text-center relative overflow-hidden group">
                 <h4 className="text-[14px] font-black text-blue-400 uppercase tracking-[0.8em] mb-8 italic flex items-center justify-center gap-6">
                    <Database className="size-8 animate-pulse" /> ANDROID_RAG
                 </h4>
                 <div className="text-3xl font-black text-white italic gold-glow uppercase tracking-widest text-center">96.6% PRECISION</div>
                 <div className="absolute -bottom-10 -right-10 p-24 opacity-[0.03] group-hover:opacity-[0.1] transition-all duration-1000 scale-150 rotate-12"><Skull className="size-48 text-blue-500" /></div>
              </Card>
           </div>

           <Card className="xl:col-span-3 bg-black/90 border-[12px] border-blue-500/10 rounded-[7rem] p-16 shadow-9xl flex flex-col group overflow-hidden relative min-h-[1100px] backdrop-blur-5xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.08),transparent)] pointer-events-none" />
              <CardHeader className="p-0 mb-16 border-b-8 border-white/5 pb-12 bg-blue-900/10 rounded-t-[5rem] px-16 py-10 flex flex-row justify-between items-center text-right">
                 <Badge className="bg-blue-600/30 text-blue-400 border-[10px] border-blue-500/40 px-16 py-8 rounded-full font-black text-5xl animate-pulse shadow-9xl uppercase tracking-[0.4em] italic order-last md:order-none">ACQUISITION_OK</Badge>
                 <CardTitle className="text-5xl md:text-[12rem] text-white flex items-center gap-16 font-black uppercase italic gold-glow px-10 leading-none">
                    Predator Feed <Radar className="size-24 md:size-48 text-blue-400 animate-pulse" />
                 </CardTitle>
              </CardHeader>

              <CardContent className="p-12 flex-1 overflow-y-auto scrollbar-hide space-y-20 relative z-10 text-right">
                 {result ? (
                    <div className="space-y-20 animate-in fade-in zoom-in-95 duration-1000 flex-1 flex flex-col">
                        <div className="p-20 rounded-[6rem] bg-blue-600/5 border-[12px] border-blue-500/30 italic text-4xl md:text-[8rem] text-gray-100 leading-tight font-black shadow-inner relative group/brief overflow-hidden text-center flex flex-col justify-center min-h-[450px]">
                            <div className="absolute inset-0 bg-blue-600/5 opacity-5 animate-pulse pointer-events-none" />
                            "{result.commanderBrief}"
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                            <Card className="bg-black/95 border-8 border-white/5 p-12 md:p-16 rounded-[4rem] shadow-9xl relative group/vault overflow-hidden h-full">
                                <h5 className="text-3xl font-black text-blue-400 uppercase tracking-[1.5em] mb-12 border-b-8 border-blue-500/20 pb-10 flex items-center gap-12 gold-glow justify-end">
                                    APK DNA Intelligence <Dna className="size-14 animate-neural" />
                                </h5>
                                <div className="text-xl md:text-3xl text-gray-300 italic font-black leading-snug drop-shadow-3xl whitespace-pre-wrap text-left font-mono">
                                    {result.scanReport}
                                </div>
                            </Card>
                            <Card className="bg-black/95 border-8 border-white/5 p-12 md:p-16 rounded-[4rem] shadow-9xl space-y-12 relative overflow-hidden h-full">
                                <h5 className="text-3xl font-black text-emerald-500 uppercase tracking-[1.5em] mb-10 border-b-8 border-emerald-500/20 pb-10 flex items-center gap-12 justify-end">
                                    Recalled Hacks <History className="size-14" />
                                </h5>
                                <div className="space-y-8">
                                    {result.recalledMemoryDna?.map((dna: string, idx: number) => (
                                        <div key={idx} className="p-8 rounded-[2rem] bg-white/5 border-4 border-emerald-500/30 hover:border-emerald-500 transition-all text-right shadow-inner group/dna">
                                            <span className="text-xl md:text-2xl font-black text-white italic group-hover/dna:text-emerald-400">"{" >>> "}{dna.substring(0, 300)}..."</span>
                                        </div>
                                    ))}
                                </div>
                            </Card>
                        </div>

                        <div className="p-16 rounded-[6rem] bg-blue-600/10 border-[16px] border-blue-500/30 flex items-center gap-16 group/siphon shadow-9xl relative overflow-hidden mt-auto min-h-[350px]">
                            <div className="absolute inset-0 bg-blue-500/5 opacity-5 animate-pulse pointer-events-none" />
                            <div className="size-48 rounded-[3.5rem] bg-blue-600 flex items-center justify-center border-[14px] border-blue-400 shadow-9xl animate-neural shrink-0">
                                <ShieldCheck className="size-24 text-white" />
                            </div>
                            <div className="flex-1">
                                <h4 className="text-4xl font-black text-blue-400 uppercase tracking-[1.2em] mb-6 italic">Android_Subjugation_v90.0</h4>
                                <div className="space-y-4">
                                    {result.strategicPlan?.map((p: any, i: number) => (
                                        <div key={i} className="text-2xl md:text-4xl text-white font-black italic">
                                            <span className="text-blue-500 mr-4">{i+1}.</span> {p.action} ({p.tool})
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                 ) : (
                   <div className="h-full flex flex-col items-center justify-center text-center opacity-10 gap-24 py-80">
                      <div className="relative group/lock">
                        <Smartphone className="size-64 md:size-[50rem] animate-spin-slow text-blue-500 group-hover:scale-110 transition-transform duration-[12000ms]" />
                        <Skull className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-24 md:size-64 text-blue-400/40 animate-neural" />
                        <div className="absolute -inset-40 border-[80px] border-dashed border-blue-500/5 rounded-full animate-reverse-spin opacity-20" />
                      </div>
                      <h3 className="text-8xl md:text-[22rem] font-black uppercase tracking-[2.5em] text-white italic gold-glow leading-none">Predator Idle</h3>
                      <p className="text-4xl md:text-[10rem] font-bold italic text-gray-500 uppercase tracking-widest max-w-[140rem]">Consolidating RAG + Android sensors for total mobile subjugation v90.0.</p>
                   </div>
                 )}
              </CardContent>
              <div className="p-16 border-t-8 border-white/5 mt-auto flex justify-between items-center opacity-35 text-[20px] font-black uppercase tracking-[8em] italic">
                <span>MOBILE_HUNTER_v90_AL_GHAZALI_ROOT</span>
                <div className="flex gap-16">
                    <Fingerprint className="size-24 text-blue-400 animate-pulse" />
                    <Atom className="size-24 animate-spin-slow text-blue-400" />
                </div>
              </div>
           </Card>
        </div>
      </main>
    </div>
  )
}
