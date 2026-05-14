
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
  Power,
  Library,
  Anchor,
  Search,
  Network,
  Wrench,
  ShieldAlert,
  Flame,
  Monitor,
  Cloud,
  Crown,
  Fingerprint,
  Dna,
  RotateCw,
  Rocket,
  Cylinder,
  Sprout,
  Hammer,
  Apple,
  Satellite,
  HeartPulse,
  Signal,
  TowerControl,
  Share2,
  AlertTriangle
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const navItems = [
  { name: "العرش الأبدي", icon: LayoutDashboard, href: "/", knot: 0 },
  { name: "Sovereign OS", icon: Monitor, href: "/sovereign-os", knot: 90 },
  { name: "المتحكم المداري", icon: Satellite, href: "/satellite-overlord", knot: 15 },
  { name: "الالتحام الحيوي", icon: HeartPulse, href: "/bio-sync", knot: 16 },
  { name: "طفيلي الـ iOS", icon: Apple, href: "/ios-parasite", knot: 14 },
  { name: "مصنع الخوارزميات", icon: Hammer, href: "/algorithm-factory", knot: 87 },
  { name: "عراف الثغرات", icon: Radar, href: "/vulnerabilities", knot: 3 },
  { name: "العمود الفقري الكمي", icon: Wind, href: "/quantum-spine", knot: 85 },
  { name: "مشتل التطور", icon: Sprout, href: "/nursery", knot: 25 },
  { name: "الرؤية المطلقة", icon: Eye, href: "/perception", knot: 80 },
  { name: "الارتباط الماسي", icon: Share2, href: "/hermes", knot: 79 },
  { name: "الاستحواذ المستقل", icon: Rocket, href: "/autonomous", knot: 23 },
  { name: "الترسانة العظمى", icon: Library, href: "/arsenal", knot: 22 },
  { name: "سلسلة الإبادة", icon: Crosshair, href: "/kill-chain", knot: 2 },
  { name: "إمبراطورية السرب", icon: Network, href: "/sessions", knot: 4 },
  { name: "أعين الاستطلاع", icon: Eye, href: "/recon", knot: 6 },
  { name: "قلب DeepSeek", icon: BrainCircuit, href: "/deep-reasoning", knot: 8 },
  { name: "أذن النور", icon: Mic, href: "/voice", knot: 10 },
  { name: "الحرب الخلوية", icon: Radio, href: "/cellular", knot: 11 },
  { name: "محراب الـ Claw", icon: Gamepad2, href: "/clawcode", knot: 12 },
  { name: "ميثاق الروح", icon: BookOpen, href: "/codex", knot: 13 },
  { name: "الوكيل الميداني", icon: Wrench, href: "/field-agent", knot: 14 },
  { name: "مصنع النسل", icon: Baby, href: "/progeny", knot: 15 },
  { name: "الاستحواذ النقال", icon: Smartphone, href: "/hardware", knot: 16 },
  { name: "قبو الـ DNA", icon: Database, href: "/knowledge", knot: 17 },
  { name: "نزاهة النواة", icon: ShieldCheck, href: "/system", knot: 19 },
  { name: "سفينة نوح", icon: Anchor, href: "/ark", knot: 21 },
]

export function SidebarNav() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)
  const [resonance, setResonance] = React.useState(100.00)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setResonance(prev => Math.max(99.9999999, Math.min(100, prev + (Math.random() * 0.000001 - 0.0000005))));
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <Button 
        variant="ghost" 
        size="icon" 
        className="lg:hidden fixed top-4 right-4 z-[500] bg-black/95 border-2 border-primary/80 text-primary size-10 rounded-xl shadow-2xl" 
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
      </Button>

      <div className={cn(
        "flex flex-col h-full bg-black border-l-[2px] border-primary/40 w-52 lg:w-56 fixed right-0 top-0 z-[400] overflow-hidden shadow-2xl transition-transform duration-500 ease-in-out font-code backdrop-blur-3xl", 
        !isOpen && "translate-x-full lg:translate-x-0"
      )}>
        <div className="p-4 border-b-2 border-primary/20 flex flex-col items-center gap-2 bg-black relative group shrink-0">
          <div className="relative size-12 flex items-center justify-center shrink-0 rounded-lg group-hover:rotate-12 transition-all">
             <div className="size-8 bg-black border border-primary flex items-center justify-center shadow-[0_0_80px_rgba(251,191,36,0.3)] relative rounded-md z-30 animate-neural">
                <Crown className="size-4 text-primary gold-glow" />
             </div>
             <div className="absolute -inset-2 border border-primary/20 rounded-full animate-spin-slow opacity-30" />
          </div>

          <div className="text-center relative z-10">
            <h1 className="text-[12px] font-headline font-bold text-white tracking-[0.3em] leading-none gold-glow">AL-MUIZZ</h1>
            <Badge className="bg-primary text-black border-none rounded-full text-[7px] font-black tracking-[0.1em] mt-1 py-0 px-2 uppercase italic animate-pulse">v90.0 NUCLEUS</Badge>
          </div>
        </div>
        
        <div className="flex-1 px-2 py-3 space-y-1 overflow-y-auto scrollbar-hide bg-black/98 relative border-t border-white/5 text-right">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            const Icon = item.icon || Search;
            return (
              <Link 
                key={item.name} 
                href={item.href} 
                className={cn(
                    "flex items-center gap-3 px-4 py-2 transition-all duration-500 group relative border-r-2 rounded-l-lg", 
                    isActive ? "bg-primary/10 border-primary text-white shadow-xl scale-105" : "text-muted-foreground border-transparent hover:bg-white/5 hover:text-white"
                )} 
                onClick={() => setIsOpen(false)}
              >
                <Icon className={cn("size-3.5 transition-all duration-500", isActive ? "text-primary gold-glow" : "group-hover:text-primary")} />
                <span className="text-[9px] font-black tracking-widest uppercase italic truncate flex-1">{item.name}</span>
                {isActive && <div className="absolute left-2 size-1 rounded-full bg-primary animate-ping" />}
              </Link>
            )
          })}
        </div>

        <div className="p-3 border-t border-primary/20 bg-black/99 relative z-10 text-right shrink-0">
          <div className="p-2 border border-primary/40 bg-primary/5 mb-2 relative overflow-hidden rounded-lg shadow-lg border-dashed">
            <div className="flex justify-between items-center mb-1">
                <Activity className="size-2 text-emerald-500 animate-pulse" />
                <span className="text-[6px] font-black text-primary uppercase tracking-tighter italic">Hive Resonance</span>
            </div>
            <div className="text-xs font-black text-white italic gold-glow">{resonance.toFixed(6)}%</div>
          </div>
          <Button asChild className="w-full h-8 bg-primary hover:bg-white text-black font-black uppercase text-[7px] rounded-md shadow-md transition-all border border-black/20 italic">
            <Link href="/quantum-spine">
                <Wind className="size-2.5 mr-2 group-hover:rotate-180 transition-all duration-700" />
                تنشيط الروابط
            </Link>
          </Button>
        </div>
      </div>
    </>
  )
}
