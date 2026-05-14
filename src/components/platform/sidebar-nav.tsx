
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
  Power,
  Library,
  Anchor,
  Search,
  Network,
  Wrench,
  ShieldAlert,
  Flame,
  Monitor,
  Sparkles,
  Cloud,
  Crown,
  Fingerprint,
  Dna,
  Shield,
  RotateCw,
  Rocket,
  Castle,
  Box,
  Share2
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const navItems = [
  { name: "العرش الأبدي", icon: LayoutDashboard, href: "/", knot: 0 },
  { name: "الارتباط الماسي (Hermes)", icon: Share2, href: "/hermes", knot: 80 },
  { name: "أتمتة السرب (n8n)", icon: Workflow, href: "/n8n", knot: 43 },
  { name: "الاستحواذ المستقل", icon: Rocket, href: "/autonomous", knot: 23 },
  { name: "صياد الأندرويد", icon: Smartphone, href: "/android-hunter", knot: 24 },
  { name: "سطح مكتب السطوة", icon: Monitor, href: "/classic-hub", knot: 78 },
  { name: "الترسانة العظمى", icon: Library, href: "/arsenal", knot: 22 },
  { name: "سلسلة الإبادة", icon: Crosshair, href: "/kill-chain", knot: 2 },
  { name: "عراف الثغرات", icon: Radar, href: "/vulnerabilities", knot: 3 },
  { name: "إمبراطورية السرب", icon: Network, href: "/sessions", knot: 4 },
  { name: "المحقن الآلي", icon: Cpu, href: "/automation", knot: 5 },
  { name: "أعين الاستطلاع", icon: Eye, href: "/recon", knot: 6 },
  { name: "جسر السحاب", icon: Cloud, href: "/mcp-bridge", knot: 7 },
  { name: "قلب DeepSeek", icon: BrainCircuit, href: "/deep-reasoning", knot: 8 },
  { name: "محاكي السطوة", icon: Workflow, href: "/digital-twin", knot: 9 },
  { name: "أذن النور", icon: Mic, href: "/voice", knot: 10 },
  { name: "الحرب الخلوية", icon: Radio, href: "/cellular", knot: 11 },
  { name: "محراب الـ Claw", icon: Gamepad2, href: "/clawcode", knot: 12 },
  { name: "ميثاق الروح", icon: BookOpen, href: "/codex", knot: 13 },
  { name: "الوكيل الميداني", icon: Wrench, href: "/field-agent", knot: 14 },
  { name: "مصنع النسل", icon: Baby, href: "/progeny", knot: 15 },
  { name: "الاستحواذ النقال", icon: Smartphone, href: "/hardware", knot: 16 },
  { name: "القبو الجيني 8.0", icon: Database, href: "/knowledge", knot: 17 },
  { name: "مختبر التخليق", icon: ShieldX, href: "/red-team", knot: 18 },
  { name: "نزاهة النواة", icon: ShieldCheck, href: "/system", knot: 19 },
  { name: "المحطة الأبدية", icon: Target, href: "/terminal", knot: 20 },
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
      <Button variant="ghost" size="icon" className="lg:hidden fixed top-4 right-4 z-[500] bg-black/95 border-2 border-primary/80 text-primary size-12 rounded-xl shadow-2xl" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
      </Button>

      <div className={cn("flex flex-col h-full bg-black border-l-[4px] border-primary/60 w-64 lg:w-72 fixed right-0 top-0 z-[400] overflow-hidden shadow-2xl transition-transform duration-500 ease-in-out font-code backdrop-blur-3xl", !isOpen && "translate-x-full lg:translate-x-0")}>
        <div className="p-8 border-b-2 border-primary/20 flex flex-col items-center gap-6 bg-black relative group">
          <div className="size-20 bg-black border-2 border-primary/40 flex items-center justify-center shadow-[0_0_80px_rgba(212,175,55,0.4)] animate-neural shrink-0 rounded-2xl group-hover:rotate-12 transition-all relative">
            <Crown className="size-10 text-primary gold-glow" />
          </div>
          <div className="text-center relative z-10">
            <h1 className="text-xl font-headline font-bold text-white tracking-[0.4em] uppercase leading-none gold-glow">AL-MUIZZ</h1>
            <Badge className="bg-primary text-black border-none rounded-full text-[10px] font-black tracking-[0.4em] mt-3 py-1 px-6 uppercase italic animate-pulse shadow-9xl">v80.0 GENESIS_v6</Badge>
          </div>
        </div>
        
        <div className="flex-1 px-4 py-6 space-y-1.5 overflow-y-auto scrollbar-hide bg-black/98 relative border-t-2 border-white/5">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            const Icon = item.icon || Search;
            return (
              <Link key={item.name} href={item.href} className={cn("flex items-center gap-6 px-6 py-3 transition-all duration-500 group relative border-r-4 rounded-l-xl mb-1", isActive ? "bg-primary/15 border-primary text-white scale-[1.02]" : "text-muted-foreground border-transparent hover:bg-white/5 hover:text-white")} onClick={() => setIsOpen(false)}>
                <Icon className={cn("size-5 transition-all", isActive ? "text-primary gold-glow" : "group-hover:text-primary")} />
                <span className="text-[10px] font-black tracking-widest uppercase italic truncate flex-1">{item.name}</span>
              </Link>
            )
          })}
        </div>

        <div className="p-6 border-t-2 border-primary/20 bg-black/99 relative z-10 text-right">
          <div className="p-4 border-2 border-primary/40 bg-primary/5 mb-4 relative overflow-hidden rounded-2xl shadow-xl border-dashed">
            <div className="flex justify-between items-center mb-2"><Activity className="size-3 text-emerald-500 animate-pulse" /><span className="text-[9px] font-black text-primary uppercase tracking-[0.2em] italic">Genesis Resonance</span></div>
            <div className="text-2xl font-black text-white italic gold-glow">{resonance.toFixed(7)}%</div>
          </div>
          <Button asChild className="w-full h-12 bg-primary hover:bg-white text-black font-black uppercase text-[10px] rounded-xl shadow-2xl transition-all border-4 border-black/20 italic"><Link href="/hermes"><Share2 className="size-4 mr-2" /> تنشيط الارتباط الماسي</Link></Button>
        </div>
      </div>
    </>
  )
}
