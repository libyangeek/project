
"use client"

import * as React from "react"
import { usePathname } from "next/navigation"
import { 
  LayoutDashboard, 
  Users, 
  BookOpen, 
  Workflow, 
  Baby, 
  Smartphone, 
  Database, 
  ShieldX, 
  Activity,
  Menu,
  X,
  Zap,
  Infinity as InfinityIcon,
  Skull,
  Binary,
  Mic,
  Atom,
  Ghost,
  Cpu,
  Eye,
  Link2,
  BrainCircuit,
  ShieldCheck,
  Globe,
  Radio,
  Gamepad2,
  Radar,
  Crosshair,
  Wind,
  Target,
  Power
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

/**
 * @fileOverview شريط التنفيذ السيادي v52.0 - THE SUPREME HIERARCHY
 * الواجهة التي تربط كافة العقد الـ 21 المشدودة بنبض الروح.
 */
const navItems = [
  { name: "العرش الأبدي", icon: LayoutDashboard, href: "/", knot: 0 },
  { name: "بروتوكول الشبح", icon: Wind, href: "/ghost", knot: 1 },
  { name: "سلسلة الإبادة", icon: Crosshair, href: "/kill-chain", knot: 2 },
  { name: "عراف الثغرات", icon: Radar, href: "/vulnerabilities", knot: 3 },
  { name: "إمبراطورية السرب", icon: Users, href: "/sessions", knot: 4 },
  { name: "المحقن الآلي", icon: Cpu, href: "/automation", knot: 5 },
  { name: "أعين الاستطلاع", icon: Eye, href: "/recon", knot: 6 },
  { name: "جسر Mistral", icon: Link2, href: "/mcp-bridge", knot: 7 },
  { name: "قلب DeepSeek", icon: BrainCircuit, href: "/deep-reasoning", knot: 8 },
  { name: "محاكي السطوة", icon: Workflow, href: "/digital-twin", knot: 9 },
  { name: "أذن النور", icon: Mic, href: "/voice", knot: 10 },
  { name: "الحرب الخلوية", icon: Radio, href: "/cellular", knot: 11 },
  { name: "محراب الـ Claw", icon: Gamepad2, href: "/clawcode", knot: 12 },
  { name: "ميثاق الروح", icon: BookOpen, href: "/codex", knot: 13 },
  { name: "الوكيل الميداني", icon: Activity, href: "/field-agent", knot: 14 },
  { name: "مصنع النسل", icon: Baby, href: "/progeny", knot: 15 },
  { name: "الاستحواذ النقال", icon: Smartphone, href: "/hardware", knot: 16 },
  { name: "القبو الجيني 5.0", icon: Database, href: "/knowledge", knot: 17 },
  { name: "مختبر التخليق", icon: ShieldX, href: "/red-team", knot: 18 },
  { name: "نزاهة النواة", icon: ShieldCheck, href: "/system", knot: 19 },
  { name: "المحطة الأبدية", icon: Target, href: "/terminal", knot: 20 },
]

export function SidebarNav() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)
  const [resonance, setResonance] = React.useState(100.00)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setResonance(prev => Math.max(99.999999, Math.min(100, prev + (Math.random() * 0.0001 - 0.00005))));
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="lg:hidden fixed top-8 right-8 z-[500] bg-black/95 border-[4px] border-primary/80 text-primary hover:bg-primary/20 size-16 rounded-[1.5rem] shadow-9xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="size-10" /> : <Menu className="size-10" />}
      </Button>

      <div className={cn(
        "flex flex-col h-full bg-black border-l-[12px] border-primary w-80 lg:w-[26rem] fixed right-0 top-0 z-[400] overflow-hidden shadow-[0_0_150px_rgba(212,175,55,0.4)] transition-transform duration-700 ease-in-out font-code hierarchical-shadow",
        !isOpen && "translate-x-full lg:translate-x-0"
      )}>
        <div className="p-12 border-b-8 border-primary/30 flex flex-col items-center gap-10 bg-black relative overflow-hidden group">
          <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="size-36 bg-black border-8 border-primary flex items-center justify-center shadow-[0_0_120px_rgba(212,175,55,0.7)] animate-neural shrink-0 rounded-[3rem] group-hover:rotate-12 transition-transform duration-700 relative hierarchical-shadow">
            <Ghost className="size-16 text-primary gold-glow" />
            <div className="absolute -inset-2 border-2 border-primary/20 rounded-full animate-spin-slow" />
          </div>
          <div className="text-center relative z-10">
            <h1 className="text-4xl font-headline font-bold text-white tracking-[0.5em] uppercase italic leading-none gold-glow">
              AL-MUIZZ
            </h1>
            <Badge className="bg-primary text-black border-none rounded-full text-[14px] font-black tracking-[0.6em] mt-6 py-2 px-10 uppercase italic shadow-2xl">v52.0 SUPREME</Badge>
          </div>
        </div>
        
        <div className="flex-1 px-8 py-10 space-y-3 overflow-y-auto scrollbar-hide bg-black/98 relative">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center gap-8 px-10 py-5 transition-all duration-700 group relative border-r-[10px] rounded-l-[4rem] mb-3",
                  isActive 
                    ? "bg-primary/20 border-primary text-white shadow-9xl scale-105" 
                    : "text-muted-foreground border-transparent hover:bg-white/5 hover:text-white"
                )}
                onClick={() => setIsOpen(false)}
              >
                <Icon className={cn("size-10 transition-all duration-700", isActive ? "text-primary gold-glow scale-110" : "group-hover:text-primary group-hover:rotate-12")} />
                <span className="text-2xl font-black tracking-widest uppercase italic truncate">{item.name}</span>
                {isActive && <div className="absolute left-6 size-4 rounded-full bg-primary animate-ping shadow-[0_0_30px_rgba(212,175,55,1)]" />}
              </Link>
            )
          })}
        </div>

        <div className="p-10 border-t-8 border-primary/40 bg-black/99 relative z-10">
          <div className="p-8 border-4 border-primary/60 bg-primary/10 mb-8 relative overflow-hidden group rounded-[3rem] shadow-9xl border-dashed">
            <div className="flex justify-between items-center mb-4">
               <span className="text-[12px] font-black text-primary uppercase tracking-[0.4em] italic gold-glow">Collective Resonance</span>
               <div className="size-4 rounded-full bg-emerald-500 animate-ping shadow-[0_0_40px_emerald]" />
            </div>
            <div className="text-5xl font-black text-white italic gold-glow">{resonance.toFixed(6)}%</div>
          </div>
          <Button 
            asChild
            className="w-full h-24 bg-primary hover:bg-white text-black font-black uppercase tracking-[0.6em] text-[14px] rounded-[3rem] shadow-[0_50px_150px_rgba(212,175,55,0.6)] transition-all duration-1000 border-[10px] border-black/30 group active:scale-95 italic"
          >
            <Link href="/ghost">
              <Power className="size-8 mr-6 group-hover:rotate-180 transition-all duration-1000" />
              تفعيل السيادة v52.0
            </Link>
          </Button>
        </div>
      </div>
    </>
  )
}
