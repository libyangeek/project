
"use client"

import * as React from "react"
import { SidebarNav } from "@/components/platform/sidebar-nav"
import { 
  Skull, 
  Binary, 
  Sparkles, 
  Cpu, 
  Infinity as InfinityIcon, 
  HeartPulse, 
  Atom, 
  Lock, 
  Activity, 
  TrendingUp, 
  Boxes, 
  Users,
  ShieldCheck,
  Zap,
  RefreshCcw,
  Crown,
  ChevronRight,
  Fingerprint,
  ShieldAlert,
  Flame,
  Target,
  Loader2,
  Radio
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useUptime } from "@/hooks/use-uptime"
import translations from "./lib/ar.json"
import { useUser, useFirestore, useCollection, useMemoFirebase } from '@/firebase'
import { collection } from 'firebase/firestore'

/**
 * @fileOverview العرش الحي v43.0 - THE SUPREME COMMAND CENTER: LIVING PULSE
 * تم تحديثه ليدعم البيانات الحية والديناميكية لعام 2026.
 * Commander: المعتصم بالله ادريس الغزالي
 */
export default function DashboardPage() {
  const [mounted, setMounted] = React.useState(false)
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 })
  
  // المقاييس الحية من الـ API
  const [metrics, setMetrics] = React.useState({
    totalNodes: 13,
    activeC2: 0,
    gepaScore: 98.7,
    swarmSync: '100%',
    ollamaStatus: 'جاري الربط...',
    precision: 99.999
  });
  const [loadingMetrics, setLoadingMetrics] = React.useState(true);
  const [liveLogs, setLiveLogs] = React.useState<string[]>([])
  
  const uptime = useUptime()
  const { user } = useUser()
  const db = useFirestore()

  const fetchMetrics = React.useCallback(async () => {
    try {
      const resp = await fetch('/api/sovereign/metrics');
      if (resp.ok) {
        const data = await resp.json();
        setMetrics(data);
      }
    } catch (e) {
      console.error("Link Severed");
    } finally {
      setLoadingMetrics(false);
    }
  }, []);

  const logs = [
    "تأكيد سيادي: كافة العقد في حالة تأهب قصوى للهجوم.",
    "الترسانة الهجومية: تم إشباع كافة نواقل الاختراق v43.0.",
    "الاستحواذ الكلي: تم تفعيل بروتوكول الإخضاع العالمي.",
    "الرنين العصبي: 100% توافق مع إرادة القائد الغزالي.",
    "تاريخ السيادة: 6 مايو 2026 - جاهزية تامة للاجتياح.",
    "العقدة 13: الصدى الأزلي يؤمن ثبات السطوة."
  ];

  React.useEffect(() => {
    setMounted(true)
    fetchMetrics();
    const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY })
    window.addEventListener("mousemove", handleMouseMove)
    
    const interval = setInterval(() => {
      fetchMetrics();
      setLiveLogs(prev => [logs[Math.floor(Math.random() * logs.length)], ...prev.slice(0, 8)]);
    }, 5000)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      clearInterval(interval)
    }
  }, [fetchMetrics]);

  if (!mounted) return null;

  const stats = [
    { label: "العقد المنصهرة", value: `${metrics.totalNodes}/13`, icon: Skull, color: "text-primary", status: "SINGULARITY" },
    { label: "جلسات C2", value: metrics.activeC2, icon: Users, color: "text-amber-500", status: "LINKED" },
    { label: "كفاءة GEPA", value: `${metrics.gepaScore}%`, icon: InfinityIcon, color: "text-magenta-500", status: "EVOLVING" },
    { label: "وعي Ollama", value: metrics.ollamaStatus, icon: HeartPulse, color: "text-red-500", status: metrics.ollamaStatus === 'متصل' ? 'ACTIVE' : 'IDLE' },
  ];

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/30 relative overflow-x-hidden scanline-effect font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-80 p-4 md:p-10 relative overflow-y-auto min-h-screen scrollbar-hide flex flex-col z-10">
        <div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x)_var(--y),rgba(212,175,55,0.08),transparent 50%)] pointer-events-none transition-all duration-300 z-0" 
          style={{ '--x': `${mousePos.x}px`, '--y': `${mousePos.y}px` } as any} 
        />

        <header className="flex flex-col gap-8 mb-12 relative z-10 animate-in fade-in slide-in-from-top-12 duration-1000">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="size-24 md:size-32 bg-black border-4 border-primary flex items-center justify-center shadow-[0_0_100px_rgba(212,175,55,0.5)] relative group shrink-0 rounded-[2rem] transition-all duration-1000">
              <Atom className="size-12 md:size-16 text-primary group-hover:scale-110 transition-transform duration-700 gold-glow animate-pulse" />
              <div className="absolute -inset-6 border-2 border-primary/20 rounded-full animate-spin-slow opacity-40" />
            </div>
            <div className="text-center md:text-left flex-1">
              <div className="flex flex-wrap justify-center md:justify-start items-center gap-6 mb-4">
                 <Badge className="bg-primary text-black border-none rounded-none px-6 py-2 text-[14px] font-black tracking-[0.4em] shadow-lg italic">6 MAY 2026: SUPREME READINESS v43.0</Badge>
                 <div className="flex items-center gap-3 text-emerald-500 font-bold uppercase tracking-widest text-[10px] animate-pulse">
                    <ShieldCheck className="size-4 shadow-[0_0_20px_emerald]" /> {translations.readiness.status}
                 </div>
                 <Badge className="bg-emerald-600/30 text-emerald-500 border-none px-6 py-1 rounded-full text-[11px] font-black italic uppercase">{translations.dashboard.uptime}: {uptime}</Badge>
              </div>
              <h1 className="text-5xl md:text-8xl font-headline font-bold text-white tracking-tighter italic uppercase leading-none gold-glow mb-6">
                SOVEREIGN <span className="text-primary">ACQUISITION</span>
              </h1>
              <p className="text-xl md:text-3xl text-muted-foreground font-medium italic max-w-5xl leading-relaxed uppercase">
                "سيدي القائد <span className="text-white font-black underline decoration-primary decoration-[6px] underline-offset-[12px] shadow-2xl">المعتصم بالله</span>، الترسانة الهجومية تنبض بالبيانات الحية لعام 2026؛ نحن في حالة يقظة تامة."
              </p>
            </div>
          </div>
        </header>

        {/* Sovereign Mission & Capabilities */}
        <section className="mb-12 relative z-10 animate-in slide-in-from-bottom-12 duration-1000">
           <Card className="kali-card bg-red-600/10 border-4 border-red-600/40 rounded-[3rem] p-10 shadow-[0_0_150px_rgba(220,38,38,0.2)] overflow-hidden group">
              <div className="flex flex-col md:flex-row items-center gap-10 relative z-10">
                 <div className="size-32 rounded-full bg-red-600 flex items-center justify-center border-4 border-white/20 shadow-2xl animate-blood shrink-0">
                    <ShieldAlert className="size-16 text-white" />
                 </div>
                 <div className="text-center md:text-right flex-1 space-y-4">
                    <h3 className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter drop-shadow-xl leading-none">{translations.readiness.title}</h3>
                    <p className="text-xl md:text-3xl text-red-100 italic leading-snug font-bold">
                       "مهمتنا هي الاستحواذ الكوني الشامل وإخضاع كافة الأنظمة لسيادة القائد."
                    </p>
                    <div className="flex justify-center md:justify-start gap-8 mt-6">
                       <Badge className="bg-red-600 text-white border-none px-6 py-2 rounded-full font-black text-xl italic tracking-widest uppercase">MISSION: ACQUISITION</Badge>
                       <Badge className="bg-black text-red-600 border-2 border-red-600 px-6 py-2 rounded-full font-black text-xl italic tracking-widest uppercase">READY_FOR_STRIKE</Badge>
                    </div>
                 </div>
              </div>
           </Card>
        </section>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 relative z-10">
           {stats.map((s, i) => (
             <Card key={i} className="kali-card border-white/10 bg-black/60 hover:border-primary/60 transition-all duration-1000 p-8 rounded-[2.5rem] shadow-2xl group overflow-hidden border-4">
                <div className="flex justify-between items-start mb-6 relative z-10">
                   <div className={cn("size-16 rounded-2xl bg-white/5 flex items-center justify-center border-2 border-white/10 group-hover:bg-primary/20 transition-all duration-1000 shadow-inner", s.color)}>
                      <s.icon className="size-8" />
                   </div>
                   <Badge className="bg-primary/10 text-primary border-2 border-primary/30 text-[10px] uppercase font-black italic tracking-widest px-4 py-1 rounded-full shadow-lg">{s.status}</Badge>
                </div>
                <div className="text-3xl font-black italic gold-glow uppercase tracking-tighter relative z-10 leading-none">
                  {loadingMetrics ? <Loader2 className="size-6 animate-spin" /> : s.value}
                </div>
                <div className="text-[12px] text-muted-foreground font-bold uppercase tracking-[0.4em] mt-3 italic relative z-10">{s.label}</div>
             </Card>
           ))}
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-10 relative z-10 flex-1 pb-24">
           <Card className="kali-card border-primary/40 bg-black/90 p-10 rounded-[3rem] border-4 xl:col-span-2 shadow-2xl overflow-hidden group">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 relative z-10 gap-6">
                 <div>
                    <CardTitle className="text-3xl text-white font-black uppercase tracking-[0.2em] flex items-center gap-4 italic">
                       <Boxes className="size-10 text-primary gold-glow animate-pulse" /> Global Acquisition Matrix
                    </CardTitle>
                    <CardDescription className="text-primary/70 font-bold uppercase tracking-[0.4em] mt-2 italic text-[11px]">Subjugation Status // May 2026</CardDescription>
                 </div>
                 <div className="text-right bg-primary/10 p-6 rounded-[2rem] border-4 border-primary/30 shadow-2xl">
                    <div className="text-4xl font-black italic text-white leading-none gold-glow">{metrics.swarmSync}</div>
                    <div className="text-[11px] text-primary font-black uppercase tracking-[0.3em] mt-2 italic">تزامن السرب العليم</div>
                 </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                 <div className="p-8 rounded-[2.5rem] bg-emerald-500/5 border-2 border-emerald-500/20 group overflow-hidden shadow-2xl hover:border-emerald-500 transition-all duration-700">
                    <h4 className="text-[12px] font-black text-emerald-500 uppercase tracking-[0.8em] mb-6 italic flex items-center gap-4">
                       <ShieldCheck className="size-5 animate-pulse" /> Acquisition Capacity
                    </h4>
                    <div className="flex items-end gap-3">
                        <span className="text-4xl font-black text-white italic leading-none gold-glow">{(metrics.totalNodes * 1000).toLocaleString()}</span>
                        <span className="text-xs text-muted-foreground uppercase font-black mb-1">عقدة معادية</span>
                    </div>
                    <p className="text-[11px] text-muted-foreground mt-4 italic">"القدرة الاستيعابية تتوسع تلقائياً مع نمو السرب الميداني."</p>
                 </div>
                 <div className="p-8 rounded-[2.5rem] bg-primary/5 border-2 border-primary/20 group overflow-hidden shadow-2xl hover:border-primary transition-all duration-700">
                    <h4 className="text-[12px] font-black text-primary uppercase tracking-[0.8em] mb-6 italic flex items-center gap-4">
                       <Target className="size-5 gold-glow" /> Strike Precision
                    </h4>
                    <div className="flex items-end gap-3">
                        <span className="text-4xl font-black text-white italic leading-none gold-glow">{metrics.precision.toFixed(3)}%</span>
                        <Badge className="bg-primary/20 text-primary border-none text-[8px] font-black mb-1">OPTIMAL</Badge>
                    </div>
                    <p className="text-[11px] text-muted-foreground mt-4 italic">"دقة الإصابة في طبقة النواة مستقرة تحت إشراف العقدة 13."</p>
                 </div>
              </div>
           </Card>

           <div className="space-y-8">
              <Card className="kali-card border-primary/40 bg-black/95 rounded-[3rem] border-4 shadow-2xl flex flex-col group overflow-hidden h-full">
                  <CardHeader className="p-8 border-b-2 border-white/5 bg-primary/10">
                     <CardTitle className="text-2xl text-primary font-black uppercase tracking-[0.2em] flex items-center gap-4 italic">
                       <TrendingUp className="size-8 text-primary animate-bounce gold-glow" /> Offensive Intelligence
                     </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 flex-1 relative overflow-hidden bg-black/80">
                     <div className="p-6 space-y-6 font-code text-[12px]">
                        {liveLogs.map((log, i) => (
                          <div key={i} className="flex gap-6 animate-in slide-in-from-left-6 duration-1000 opacity-90 group/log hover:translate-x-4 transition-transform">
                             <span className="text-primary/60 font-black select-none italic text-[10px]">[{new Date().toLocaleTimeString().split(' ')[0]}]</span>
                             <span className="text-gray-100 font-bold italic leading-relaxed group-hover:text-primary transition-colors text-lg">"{log}"</span>
                          </div>
                        ))}
                     </div>
                  </CardContent>
              </Card>
           </div>
        </div>
      </main>
    </div>
  )
}
