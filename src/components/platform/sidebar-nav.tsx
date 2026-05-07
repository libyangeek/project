
"use client"

import * as React from "react"
import { usePathname } from "next/navigation"
import { 
  LayoutDashboard, 
  Target, 
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
  Boxes,
  Zap,
  Infinity as InfinityIcon,
  Skull,
  Binary,
  Mic,
  Fingerprint,
  Atom,
  Ghost,
  Cpu,
  Eye,
  Link2,
  BrainCircuit,
  ShieldCheck,
  Flame,
  Globe,
  Radio,
  Gamepad2,
  Radar,
  Crosshair,
  SearchCode
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const navItems = [
  { name: "العرش الأبدي", icon: LayoutDashboard, href: "/", knot: 0 },
  { name: "سلسلة الإبادة", icon: Crosshair, href: "/kill-chain", knot: 1 },
  { name: "عراف الثغرات", icon: Radar, href: "/vulnerabilities", knot: 2 },
  { name: "إمبراطورية السرب", icon: Users, href: "/sessions", knot: 3 },
  { name: "المحقن الآلي", icon: Cpu, href: "/automation", knot: 4 },
  { name: "أعين الاستطلاع", icon: Eye, href: "/recon", knot: 5 },
  { name: "جسر Mistral", icon: Link2, href: "/mcp-bridge", knot: 6 },
  { name: "قلب DeepSeek", icon: BrainCircuit, href: "/deep-reasoning", knot: 7 },
  { name: "محاكي السطوة", icon: Workflow, href: "/digital-twin", knot: 8 },
  { name: "أذن النور", icon: Mic, href: "/voice", knot: 9 },
  { name: "الحرب الخلوية", icon: Radio, href: "/cellular", knot: 10 },
  { name: "محراب الـ Claw", icon: Gamepad2, href: "/clawcode", knot: 11 },
  { name: "ميثاق الروح", icon: BookOpen, href: "/codex", knot: 12 },
  { name: "الوكيل الميداني", icon: Activity, href: "/field-agent", knot: 13 },
  { name: "مصنع النسل", icon: Baby, href: "/progeny", knot: 14 },
  { name: "الاستحواذ النقال", icon: Smartphone, href: "/hardware", knot: 15 },
  { name: "القبو الجيني 5.0", icon: Database, href: "/knowledge", knot: 16 },
  { name: "مختبر التخليق", icon: ShieldX, href: "/red-team", knot: 17 },
  { name: "نزاهة النواة", icon: ShieldCheck, href: "/system", knot: 18 },
  { name: "المحطة الأبدية", icon: Target, href: "/terminal", knot: 19 },
]

export function SidebarNav() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)
  const [resonance, setResonance] = React.useState(100.00)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setResonance(prev => Math.max(99.9999, Math.min(100, prev + (Math.random() * 0.0002 - 0.0001))));
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="lg:hidden fixed top-6 right-6 z-[500] bg-black/90 border-2 border-primary/60 text-primary hover:bg-primary/20 size-12 rounded-xl shadow-2xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
      </Button>

      <div className={cn(
        "flex flex-col h-full bg-black border-l-4 border-primary/80 w-72 lg:w-80 fixed right-0 top-0 z-[400] overflow-hidden shadow-2xl transition-transform duration-500 ease-in-out font-code",
        !isOpen && "translate-x-full lg:translate-x-0"
      )}>
        <div className="p-8 border-b-2 border-primary/20 flex flex-col items-center gap-6 bg-black relative">
          <div className="size-24 bg-black border-4 border-primary/60 flex items-center justify-center shadow-[0_0_60px_rgba(212,175,55,0.4)] animate-neural shrink-0 rounded-full group overflow-hidden">
            <Ghost className="size-12 text-primary group-hover:scale-125 transition-transform duration-500 gold-glow" />
          </div>
          <div className="text-center relative z-10">
            <h1 className="text-2xl font-headline font-bold text-white tracking-widest uppercase italic leading-none gold-glow">
              AL-MUIZZ
            </h1>
            <Badge className="bg-primary text-black border-none rounded-full text-[10px] font-bold tracking-[0.4em] mt-3 py-1 px-6 uppercase italic shadow-xl">v50.6 GLOBAL</Badge>
          </div>
        </div>
        
        <div className="flex-1 px-6 py-8 space-y-1 overflow-y-auto scrollbar-hide bg-black/95">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center gap-6 px-6 py-3 transition-all duration-500 group relative border-r-4 rounded-l-2xl mb-1",
                  isActive 
                    ? "bg-primary/10 border-primary text-white shadow-lg scale-105" 
                    : "text-muted-foreground border-transparent hover:bg-white/5 hover:text-white"
                )}
                onClick={() => setIsOpen(false)}
              >
                <Icon className={cn("size-5 transition-all duration-500", isActive ? "text-primary gold-glow" : "group-hover:text-primary")} />
                <span className="text-sm font-bold tracking-widest uppercase italic truncate">{item.name}</span>
              </Link>
            )
          })}
        </div>

        <div className="p-6 border-t-2 border-primary/20 bg-black/98 relative z-10">
          <div className="p-5 border-2 border-primary/40 bg-primary/5 mb-6 relative overflow-hidden group rounded-[1.5rem] shadow-2xl border-dashed">
            <div className="flex justify-between items-center mb-3">
               <span className="text-[11px] font-black text-primary uppercase tracking-[0.2em] italic gold-glow">Soul Resonance</span>
               <div className="size-2 rounded-full bg-emerald-500 animate-ping shadow-[0_0_20px_emerald]" />
            </div>
            <div className="text-2xl font-black text-white italic">{resonance.toFixed(4)}%</div>
          </div>
          <Button 
            asChild
            className="w-full h-14 bg-primary hover:bg-white text-black font-black uppercase tracking-[0.4em] text-[10px] rounded-xl shadow-2xl transition-all duration-700 border-4 border-black/20"
          >
            <Link href="/terminal">
              <Zap className="size-4 mr-2" />
              تنشيط الترسانة v50.6
            </Link>
          </Button>
        </div>
      </div>
    </>
  )
}
