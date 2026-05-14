
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
  Share2,
  Bug,
  Eye as VisionIcon,
  Cylinder,
  Sprout
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const navItems = [
  { name: "العرش الأبدي", icon: LayoutDashboard, href: "/", knot: 0 },
  { name: "عراف الثغرات", icon: Radar, href: "/vulnerabilities", knot: 3 },
  { name: "محقق الظلال (Cairn)", icon: Search, href: "/cairn", knot: 9 },
  { name: "العمود الفقري الكمي", icon: Wind, href: "/quantum-spine", knot: 85 },
  { name: "مشتل التطور", icon: Sprout, href: "/nursery", knot: 25 },
  { name: "الرؤية المطلقة", icon: VisionIcon, href: "/perception", knot: 80 },
  { name: "مزرعة الأساطيل", icon: Cylinder, href: "/serpent-farm", knot: 81 },
  { name: "الارتباط الماسي", icon: Share2, href: "/hermes", knot: 79 },
  { name: "أتمتة السرب (n8n)", icon: Workflow, href: "/n8n", knot: 43 },
  { name: "الاستحواذ المستقل", icon: Rocket, href: "/autonomous", knot: 23 },
  { name: "عين ميدوسا (Git Scan)", icon: Bug, href: "/medusa", knot: 66 },
  { name: "صياد الأندرويد", icon: Smartphone, href: "/android-hunter", knot: 24 },
  { name: "سطح مكتب السطوة", icon: Monitor, href: "/classic-hub", knot: 78 },
  { name: "الترسانة العظمى", icon: Library, href: "/arsenal", knot: 22 },
  { name: "سلسلة الإبادة", icon: Crosshair, href: "/kill-chain", knot: 2 },
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
      <Button variant="ghost" size="icon" className="lg:hidden fixed top-4 right-4 z-[500] bg-black/95 border-2 border-primary/80 text-primary size-10 rounded-xl shadow-2xl" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
      </Button>

      <div className={cn("flex flex-col h-full bg-black border-l-[2px] border-primary/40 w-60 lg:w-64 fixed right-0 top-0 z-[400] overflow-hidden shadow-2xl transition-transform duration-500 ease-in-out font-code backdrop-blur-3xl", !isOpen && "translate-x-full lg:translate-x-0")}>
        <div className="p-3 border-b-2 border-primary/20 flex flex-col items-center gap-2 bg-black relative group shrink-0">
          
          <div className="relative size-12 flex items-center justify-center shrink-0 rounded-lg group-hover:rotate-12 transition-all">
             <div className="size-6 bg-black border border-primary flex items-center justify-center shadow-[0_0_100px_rgba(251,191,36,0.3)] relative rounded-md z-30 animate-neural">
                <Radar className="size-3 text-primary gold-glow" />
             </div>
             <div className="absolute inset-0 z-20 animate-spin-slow" style={{ animationDuration: '10s' }}>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 size-2 bg-black border border-primary rounded-sm flex items-center justify-center"><Crown className="size-1 text-primary" /></div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 size-2 bg-black border border-blue-400 rounded-sm flex items-center justify-center"><VisionIcon className="size-1 text-blue-400" /></div>
             </div>
             <div className="absolute inset-0 z-10 animate-reverse-spin" style={{ animationDuration: '8s' }}>
                <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 size-2 bg-black border border-emerald-500 rounded-sm flex items-center justify-center"><Cylinder className="size-1 text-emerald-500" /></div>
                <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 size-2 bg-black border border-indigo-500 rounded-sm flex items-center justify-center"><Share2 className="size-1 text-indigo-500" /></div>
             </div>
          </div>

          <div className="text-center relative z-10">
            <h1 className="text-sm font-headline font-bold text-white tracking-[0.2em] leading-none gold-glow">AL-MUIZZ</h1>
            <Badge className="bg-primary text-black border-none rounded-full text-[7px] font-black tracking-[0.2em] mt-1 py-0 px-3 uppercase italic animate-pulse">v85.5 7D_MATRIX</Badge>
          </div>
        </div>
        
        <div className="flex-1 px-3 py-2 space-y-0.5 overflow-y-auto scrollbar-hide bg-black/98 relative border-t border-white/5 text-right">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            const Icon = item.icon || Search;
            return (
              <Link key={item.name} href={item.href} className={cn("flex items-center gap-4 px-4 py-2 transition-all duration-500 group relative border-r-2 rounded-l-lg mb-0.5", isActive ? "bg-primary/10 border-primary text-white" : "text-muted-foreground border-transparent hover:bg-white/5 hover:text-white")} onClick={() => setIsOpen(false)}>
                <Icon className={cn("size-3.5 transition-all", isActive ? "text-primary gold-glow" : "group-hover:text-primary")} />
                <span className="text-[8px] font-black tracking-widest uppercase italic truncate flex-1">{item.name}</span>
              </Link>
            )
          })}
        </div>

        <div className="p-2 border-t border-primary/20 bg-black/99 relative z-10 text-right shrink-0">
          <div className="p-2 border border-primary/40 bg-primary/5 mb-1 relative overflow-hidden rounded-md shadow-lg border-dashed">
            <div className="flex justify-between items-center mb-0.5"><Activity className="size-1.5 text-emerald-500 animate-pulse" /><span className="text-[6px] font-black text-primary uppercase tracking-tighter italic">Oracle Resonance</span></div>
            <div className="text-[10px] font-black text-white italic gold-glow">{resonance.toFixed(7)}%</div>
          </div>
          <Button asChild className="w-full h-6 bg-primary hover:bg-white text-black font-black uppercase text-[6px] rounded-sm shadow-md transition-all border border-black/20 italic"><Link href="/vulnerabilities"><Radar className="size-2 mr-1" /> تنشيط عراف الثغرات</Link></Button>
        </div>
      </div>
    </>
  )
}

function XIcon({className}: {className?: string}) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
    )
}
