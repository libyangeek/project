
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
  Wrench
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const navItems = [
  { name: "العرش الأبدي", icon: LayoutDashboard, href: "/", knot: 0 },
  { name: "الترسانة العظمى", icon: Library, href: "/arsenal", knot: 22 },
  { name: "سفينة نوح", icon: Anchor, href: "/ark", knot: 21 },
  { name: "الافتراس الاجتماعي", icon: Users, href: "/social", knot: 1 },
  { name: "سلسلة الإبادة", icon: Crosshair, href: "/kill-chain", knot: 2 },
  { name: "عراف الثغرات", icon: Radar, href: "/vulnerabilities", knot: 3 },
  { name: "إمبراطورية السرب", icon: Network, href: "/sessions", knot: 4 },
  { name: "المحقن الآلي", icon: Cpu, href: "/automation", knot: 5 },
  { name: "أعين الاستطلاع", icon: Eye, href: "/recon", knot: 6 },
  { name: "جسر Mistral", icon: Link2, href: "/mcp-bridge", knot: 7 },
  { name: "قلب DeepSeek", icon: BrainCircuit, href: "/deep-reasoning", knot: 8 },
  { name: "محاكي السطوة", icon: Workflow, href: "/digital-twin", knot: 9 },
  { name: "أذن النور", icon: Mic, href: "/voice", knot: 10 },
  { name: "الحرب الخلوية", icon: Radio, href: "/cellular", knot: 11 },
  { name: "محراب الـ Claw", icon: Gamepad2, href: "/clawcode", knot: 12 },
  { name: "ميثاق الروح", icon: BookOpen, href: "/codex", knot: 13 },
  { name: "الوكيل الميداني", icon: Wrench, href: "/field-agent", knot: 14 },
  { name: "مصنع النسل", icon: Baby, href: "/progeny", knot: 15 },
  { name: "الاستحواذ النقال", icon: Smartphone, href: "/hardware", knot: 16 },
  { name: "القبو الجيني 7.0", icon: Database, href: "/knowledge", knot: 17 },
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
      setResonance(prev => Math.max(99.99999, Math.min(100, prev + (Math.random() * 0.0001 - 0.00005))));
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="lg:hidden fixed top-6 right-6 z-[500] bg-black/95 border-[2px] border-primary/80 text-primary hover:bg-primary/20 size-12 rounded-xl shadow-2xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <XIcon className="size-6" /> : <Menu className="size-6" />}
      </Button>

      <div className={cn(
        "flex flex-col h-full bg-black border-l-[4px] border-primary/60 w-64 lg:w-72 fixed right-0 top-0 z-[400] overflow-hidden shadow-2xl transition-transform duration-500 ease-in-out font-code backdrop-blur-xl",
        !isOpen && "translate-x-full lg:translate-x-0"
      )}>
        <div className="p-8 border-b-2 border-primary/20 flex flex-col items-center gap-6 bg-black relative overflow-hidden group">
          <div className="size-20 bg-black border-2 border-primary/40 flex items-center justify-center shadow-[0_0_60px_rgba(212,175,55,0.3)] animate-neural shrink-0 rounded-2xl group-hover:rotate-6 transition-transform duration-700 relative">
            <Ghost className="size-10 text-primary gold-glow" />
          </div>
          <div className="text-center relative z-10">
            <h1 className="text-xl font-headline font-bold text-white tracking-[0.4em] uppercase italic leading-none gold-glow">
              AL-MUIZZ
            </h1>
            <Badge className="bg-primary text-black border-none rounded-full text-[10px] font-black tracking-[0.4em] mt-3 py-1 px-6 uppercase italic shadow-lg">v63.8 OVERMIND</Badge>
          </div>
        </div>
        
        <div className="flex-1 px-4 py-6 space-y-1.5 overflow-y-auto scrollbar-hide bg-black/98 relative">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            const Icon = item.icon || Search;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center gap-6 px-6 py-3 transition-all duration-500 group relative border-r-4 rounded-l-xl mb-1",
                  isActive 
                    ? "bg-primary/10 border-primary text-white shadow-xl" 
                    : "text-muted-foreground border-transparent hover:bg-white/5 hover:text-white"
                )}
                onClick={() => setIsOpen(false)}
              >
                <Icon className={cn("size-5 transition-all duration-500", isActive ? "text-primary gold-glow" : "group-hover:text-primary")} />
                <span className="text-xs font-black tracking-widest uppercase italic truncate">{item.name}</span>
                {isActive && <div className="absolute left-4 size-2 rounded-full bg-primary animate-ping" />}
              </Link>
            )
          })}
        </div>

        <div className="p-6 border-t-2 border-primary/20 bg-black/99 relative z-10">
          <div className="p-4 border-2 border-primary/40 bg-primary/5 mb-4 relative overflow-hidden group rounded-2xl shadow-xl border-dashed">
            <div className="flex justify-between items-center mb-2">
               <span className="text-[9px] font-black text-primary uppercase tracking-[0.2em] italic gold-glow">Overmind Resonance</span>
               <div className="size-2 rounded-full bg-emerald-500 animate-ping shadow-[0_0_20px_emerald]" />
            </div>
            <div className="text-2xl font-black text-white italic gold-glow">{resonance.toFixed(6)}%</div>
          </div>
          <Button 
            asChild
            className="w-full h-12 bg-primary hover:bg-white text-black font-black uppercase tracking-[0.4em] text-[10px] rounded-xl shadow-2xl transition-all duration-700 border-4 border-black/20 group active:scale-95 italic"
          >
            <Link href="/codex">
              <Power className="size-4 mr-2 group-hover:rotate-180 transition-all duration-700" />
              تنشيط السيادة v63.8
            </Link>
          </Button>
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
