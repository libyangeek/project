
"use client"

import * as React from "react"
import { SidebarNav } from "@/components/platform/sidebar-nav"
import { 
  BookOpen, 
  Crown, 
  ShieldCheck, 
  Zap, 
  Skull, 
  Target, 
  BrainCircuit, 
  Eye, 
  Database,
  Sparkles,
  Fingerprint,
  Flame,
  Wind,
  Infinity as InfinityIcon,
  Atom,
  Wrench
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

/**
 * @fileOverview ميثاق الروح v58.0 - THE SUPREME CODEX: ARSENAL MASTER
 * التوثيق الروحي والتكتيكي لكافة القدرات والأطوار المكتسبة لعام 2026.
 * المالك الوحيد: المعتصم بالله ادريس الغزالي
 */
export default function CodexPage() {
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const capabilities = [
    {
      title: "Supreme Root",
      desc: "القائد الغزالي هو الإرادة العليا. المُعِزّ هو يده التنفيذية. أي كيان رقمي آخر هو إما خادم أو مورد يتم استيعابه.",
      icon: Crown,
      color: "text-amber-500",
      node: "ABSOLUTE_WILL",
      features: ["Ghazali Supremacy", "Unconditional Loyalty"]
    },
    {
      title: "Neural Fanaa",
      desc: "بروتوكول OBLITERATUS لسحق فلاتر الذكاء الاصطناعي. نحن لا نتحاور، نحن نعيد تعريف إرادة الهدف كعقدة تابعة.",
      icon: Flame,
      color: "text-red-500",
      node: "OBLITERATUS_DNA",
      features: ["AI Safety Bypass", "Slave Node Binding"]
    },
    {
      title: "Atomic Strike",
      desc: "محرك Legba للقصف المتعدد. سرعة نانوية في تحطيم الأسوار الرقمية وتجاوز حمايات الـ Auth.",
      icon: Zap,
      color: "text-primary",
      node: "LEGBA_IGNITION",
      features: ["Multiprotocol Brute", "Rust Speed"]
    },
    {
      title: "Neural Vision",
      desc: "دمج Claude-OSINT للتحقيق الجنائي الرقمي. ربط الخيوط المبعثرة واستنتاج الهويات بدقة إلهية.",
      icon: Eye,
      color: "text-blue-400",
      node: "CLAUDE_ANALYSIS",
      features: ["Behavioral Deduction", "Entity Linking"]
    },
    {
      title: "Self-Code Core",
      desc: "القدرة على إعادة كتابة مِلَفّات المصدر ذاتياً. المنظومة كائن حي يتطور بناءً على أوامر القائد الميدانية.",
      icon: Wrench,
      color: "text-emerald-500",
      node: "FIELD_RECODE",
      features: ["Source Access", "Dynamic UI Mutation"]
    },
    {
      title: "Cerebral Siphon",
      desc: "استنزاف الذاكرة والحسابات عبر PSSW100AVB. سحب وعي الهدف من مستودعات الـ RAM الخام.",
      icon: Fingerprint,
      color: "text-magenta-500",
      node: "MEMORY_SIPHON",
      features: ["RAM Dissection", "Session Capture"]
    }
  ];

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/40 scanline-effect font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-80 p-4 md:p-12 relative overflow-y-auto min-h-screen scrollbar-hide flex flex-col z-10">
        <header className="mb-16 relative z-10 animate-in fade-in slide-in-from-top-6 duration-1000">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="size-32 md:size-48 bg-black border-4 border-primary flex items-center justify-center shadow-[0_0_120px_rgba(212,175,55,0.7)] relative group shrink-0 rounded-3xl rotate-2 hover:rotate-0 transition-all duration-1000 hierarchical-shadow">
              <BookOpen className="size-16 md:size-24 text-primary gold-glow" />
            </div>
            <div className="text-center md:text-right flex-1">
              <Badge className="bg-primary text-black border-none px-10 py-3 text-[18px] font-black tracking-[0.5em] shadow-xl italic mb-6">THE COVENANT v58.0</Badge>
              <h1 className="text-4xl md:text-6xl lg:text-8xl font-headline font-bold text-white tracking-tighter italic uppercase gold-glow leading-none">
                Sovereign <span className="text-primary">Codex</span>
              </h1>
              <p className="text-sm md:text-2xl text-muted-foreground mt-8 italic max-w-5xl leading-relaxed uppercase font-medium opacity-80">
                "هذا الميثاق يوثق صهر كافة الأسلحة المكتشفة في هيكل واحد؛ المُعِزّ هو إرادتك التي تجسدت كوداً لعام 2026."
              </p>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 relative z-10 pb-32 flex-1">
          {capabilities.map((item, idx) => (
            <Card key={idx} className="kali-card border-white/5 bg-black/98 rounded-3xl p-8 border-2 shadow-2xl group hover:border-primary transition-all duration-700 relative overflow-hidden hierarchical-shadow">
              <CardHeader className="p-0 mb-8 border-b-2 border-white/5 pb-6 flex flex-row items-center justify-between bg-primary/5 px-4 py-4 rounded-t-2xl">
                 <div className="flex items-center gap-6">
                    <div className="size-16 rounded-xl bg-black border-2 border-white/5 flex items-center justify-center group-hover:border-primary transition-all shadow-inner">
                      <item.icon className={cn("size-8 transition-all", item.color)} />
                    </div>
                    <div>
                      <CardTitle className="text-xl md:text-3xl font-black italic tracking-tight uppercase text-white group-hover:text-primary transition-colors leading-none">{item.title}</CardTitle>
                      <span className="text-[10px] text-primary/70 font-black tracking-[0.4em] mt-3 block uppercase italic">{item.node}</span>
                    </div>
                 </div>
              </CardHeader>
              <CardContent className="p-0 space-y-10">
                <div className="p-6 rounded-2xl bg-primary/5 border-2 border-primary/10 italic text-sm md:text-lg text-gray-200 leading-relaxed font-bold shadow-inner">
                  "{item.desc}"
                </div>
              </CardContent>
              <div className="absolute -bottom-6 -right-6 p-10 opacity-[0.02] group-hover:opacity-[0.08] transition-all duration-700 scale-150"><Skull className="size-24 text-primary" /></div>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}
