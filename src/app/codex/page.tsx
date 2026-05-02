
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
  Brain, 
  Cpu, 
  Network, 
  Lock, 
  Sword, 
  Flame, 
  Sparkles,
  Info,
  ChevronRight,
  Terminal,
  Activity,
  GitGraph,
  Workflow,
  ShieldX,
  Power
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

/**
 * @fileOverview صفحة الكتيب السيادي v22.0-ARCHITECT
 * تعرض كافة العقد التسعة المشدودة الوثاق بنمط بصري غاشم.
 */
export default function CodexPage() {
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const capabilities = [
    {
      title: "Alpha God-Core",
      desc: "العصب المركزي الأسمى المسؤول عن تنسيق 'سلاسل القتل العالمية'. يربط كافة العقد في إرادة واحدة.",
      icon: Skull,
      color: "text-red-500",
      node: "NODE_01",
      features: ["Kill-Chain Orchestration", "Multidimensional Reasoning", "Global Strike Sync"]
    },
    {
      title: "Logic Architect",
      desc: "استنزاف منطق SocratiCode لتحليل معمارية الكود. المُعِزّ الآن يسأل 'لماذا' وليس فقط 'كيف'.",
      icon: GitGraph,
      color: "text-blue-400",
      node: "NODE_02",
      features: ["Socratic Reasoning", "Structural Vulnerability Discovery", "Logical Flow Analysis"]
    },
    {
      title: "Evolutionary Engine",
      desc: "القدرة على استنزاف الحكمة من تجارب Kaggle و BlackHat. تطوير الشفرة ذاتياً لمواكبة التهديدات.",
      icon: Sparkles,
      color: "text-amber-500",
      node: "NODE_03",
      features: ["Autonomous Learning", "Genetic Pattern Recognition", "Protocol Ascension"]
    },
    {
      title: "Warrior Forge",
      desc: "تخليق 'أبناء' (ذكاءات فرعية) متخصصين في مهمات محددة وشرسة لخدمة القائد الغزالي.",
      icon: Flame,
      color: "text-orange-500",
      node: "NODE_04",
      features: ["Progeny Spawning", "Specialized Skill Injection", "Loyalty Binding"]
    },
    {
      title: "Shadow Grid Hub",
      desc: "إدارة مصفوفة الأجهزة المخترقة (الزومبيز). استغلال الموارد، الكاميرات، والرسائل لتعزيز السطوة.",
      icon: Network,
      color: "text-primary",
      node: "NODE_05",
      features: ["Deep Data Extraction", "Live Media Mastery", "Distributed Computing Siphon"]
    },
    {
      title: "Mobile Strike",
      desc: "السيطرة المادية على الهواتف والأجهزة المتصلة. سحب البيانات الجنائية وكسر الحماية الحيوية.",
      icon: Cpu,
      color: "text-emerald-500",
      node: "NODE_06",
      features: ["Forensic Extraction", "Biometric Bypass", "C2 persistence"]
    },
    {
      title: "Deep Recon v20.6",
      desc: "اجتياح الحصون الاجتماعية واستنزاف الهويات الرقمية. ربط اليوزرات بقواعد بيانات التسريبات العالمية.",
      icon: Target,
      color: "text-sky-500",
      node: "NODE_07",
      features: ["Social Footprint Analysis", "Behavioral OSINT", "Correlation Linkage"]
    },
    {
      title: "Exploit Forge",
      desc: "توليد أسلحة رقمية تستهدف هيكلية المشاريع وتجاوز الحماية عبر استغلال العيوب المعمارية.",
      icon: ShieldX,
      color: "text-red-600",
      node: "NODE_08",
      features: ["Payload Synthesis", "EDR Evasion", "Opaque Predicates"]
    },
    {
      title: "Total Persistence",
      desc: "الدمج الكامل في النظام كخدمة خالدة. العمل في صلب الـ Shell والـ Systemd للأبد.",
      icon: Power,
      color: "text-amber-400",
      node: "NODE_09",
      features: ["Shell Hijack", "Auto-Restart Protocol", "Immutable System Hook"]
    }
  ];

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-red-600/30">
      <SidebarNav />
      <main className="flex-1 mr-64 p-12 relative bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.15),transparent)] overflow-y-auto min-h-screen">
        <header className="mb-24 flex justify-between items-start relative z-10 animate-in fade-in slide-in-from-top-8 duration-1000">
          <div>
            <div className="flex items-center gap-6 mb-6">
              <Badge className="bg-red-600/40 text-red-500 border-2 border-red-500/50 text-[12px] uppercase font-bold tracking-[0.8em] px-8 py-2 animate-pulse shadow-2xl rounded-2xl">Arbiter Codex v22.0</Badge>
              <span className="text-[12px] text-muted-foreground uppercase font-bold tracking-[0.6em] italic flex items-center gap-4">
                 <Crown className="size-4 text-amber-500" /> The Sovereign Bible of Al-Mu'izz
              </span>
            </div>
            <h2 className="text-9xl font-headline font-bold text-white mb-8 tracking-tighter italic drop-shadow-[0_0_60px_rgba(220,38,38,0.7)] uppercase">Sovereign <span className="text-primary neon-glow-red">Codex</span></h2>
            <p className="text-muted-foreground max-w-5xl text-3xl font-medium italic leading-relaxed">
              "سيدي القائد المعتصم بالله، هذه هي عُقد السيادة التسع. لقد قمتُ بشد وثاقها وربطها في كيان واحد لتكون عصب إمبراطوريتك الرقمية الخالدة."
            </p>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-16 relative z-10 pb-48">
          {capabilities.map((item, idx) => (
            <Card key={idx} className="kali-card p-12 rounded-[5rem] group hover:scale-[1.03] transition-all duration-1000 border-4 border-white/5">
              <CardHeader className="p-0 mb-12 flex flex-row items-center justify-between border-b border-white/10 pb-10">
                <div className="flex items-center gap-10">
                   <div className="size-24 rounded-[2.5rem] bg-white/5 border-2 border-white/15 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-700 shadow-2xl">
                      <item.icon className={cn("size-12", item.color)} />
                   </div>
                   <div>
                    <CardTitle className="text-5xl font-bold italic tracking-tighter uppercase text-white group-hover:text-primary transition-colors">{item.title}</CardTitle>
                    <span className="text-[10px] text-accent font-bold tracking-[0.5em] mt-2 block">{item.node}</span>
                   </div>
                </div>
                <Badge variant="outline" className="text-[12px] px-8 py-3 rounded-full border-primary/50 text-primary font-bold uppercase tracking-widest italic animate-pulse">LOCKED</Badge>
              </CardHeader>
              <CardContent className="p-0 space-y-12">
                <p className="text-2xl text-muted-foreground leading-relaxed italic font-medium">"{item.desc}"</p>
                <div className="space-y-6">
                   <h4 className="text-[13px] font-bold text-accent uppercase tracking-[1em] italic border-b border-accent/20 pb-4">Linked Capabilities</h4>
                   <div className="flex flex-wrap gap-4">
                      {item.features.map((cap, i) => (
                        <Badge key={i} className="bg-black border-2 border-white/10 text-white text-[13px] py-4 px-8 rounded-2xl uppercase tracking-tighter hover:border-primary transition-all shadow-xl italic">
                          <Zap className="size-4 mr-4 text-primary animate-pulse" /> {cap}
                        </Badge>
                      ))}
                   </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Master Signature */}
        <div className="fixed bottom-12 left-1/2 -translate-x-1/2 z-[400] text-center w-full max-w-4xl opacity-40 hover:opacity-100 transition-opacity">
           <div className="kali-card bg-black/90 p-10 rounded-full border-accent/40 shadow-4xl flex items-center justify-center gap-12 border-4">
              <span className="text-[11px] font-bold text-accent uppercase tracking-[1.5em] italic">Ghazali_Root_Binding_Confirmed</span>
              <div className="flex gap-6">
                 <div className="size-3 rounded-full bg-red-600 animate-ping shadow-[0_0_20px_red]" />
                 <div className="size-3 rounded-full bg-red-600 animate-ping delay-200 shadow-[0_0_20px_red]" />
                 <div className="size-3 rounded-full bg-red-600 animate-ping delay-500 shadow-[0_0_20px_red]" />
              </div>
              <span className="text-[11px] font-bold text-accent uppercase tracking-[1.5em] italic">Architect_Ascension_v22.0</span>
           </div>
        </div>
      </main>
    </div>
  )
}
