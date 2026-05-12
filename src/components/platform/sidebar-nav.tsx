
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
      {/* زر القائمة للموبايل - تم تحسين البروز */}
      <Button
        variant="ghost"
        size="icon"
        className="lg:hidden fixed top-4 right-4 z-[500] bg-black/95 border-2 border-primary text-primary hover:bg-primary/20 size-10 rounded-lg shadow-9xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
      </Button>

      {/* الشريط الجانبي - تم توحيد العرض لـ 72 (18rem) ليتناسب مع mr-72 */}
      <div className={cn(
        "flex flex-col h-full bg-black border-l-2 border-primary/40 w-64 lg:w-72 fixed right-0 top-0 z-[400] overflow-hidden shadow-2xl transition-transform duration-500 ease-in-out font-code backdrop-blur-3xl",
        !isOpen && "translate-x-full lg:translate-x-0"
      )}>
        <div className="p-6 border-b border-primary/20 flex flex-col items-center gap-4 bg-black/50 relative overflow-hidden group">
          <div className="size-16 bg-black border-2 border-primary/60 flex items-center justify-center shadow-[0_0_40px_rgba(212,175,55,0.2)] animate-pulse shrink-0 rounded-xl group-hover:rotate-6 transition-transform duration-700">
            <Ghost className="size-8 text-primary gold-glow" />
          </div>
          <div className="text-center relative z-10">
            <h1 className="text-lg font-headline font-bold text-white tracking-widest uppercase italic leading-none gold-glow">
              AL-MUIZZ
            </h1>
            <Badge className="bg-primary text-black border-none rounded-full text-[8px] font-black tracking-widest mt-2 py-0.5 px-4 uppercase italic">v63.8 OVERMIND</Badge>
          </div>
        </div>
        
        <div className="flex-1 px-3 py-4 space-y-1 overflow-y-auto scrollbar-hide bg-black/95">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            const Icon = item.icon || Search;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center gap-4 px-4 py-2.5 transition-all duration-300 group relative border-r-2 rounded-l-lg mb-1",
                  isActive 
                    ? "bg-primary/10 border-primary text-white shadow-lg" 
                    : "text-muted-foreground border-transparent hover:bg-white/5 hover:text-white"
                )}
                onClick={() => setIsOpen(false)}
              >
                <Icon className={cn("size-4 transition-all", isActive ? "text-primary gold-glow" : "group-hover:text-primary")} />
                <span className="text-[10px] font-black tracking-widest uppercase italic truncate">{item.name}</span>
                {isActive && <div className="absolute left-2 size-1.5 rounded-full bg-primary animate-ping" />}
              </Link>
            )
          })}
        </div>

        <div className="p-4 border-t border-primary/20 bg-black/99 relative z-10">
          <div className="p-3 border border-primary/40 bg-primary/5 mb-3 relative overflow-hidden group rounded-xl shadow-inner border-dashed">
            <div className="flex justify-between items-center mb-1">
               <span className="text-[8px] font-black text-primary uppercase tracking-widest italic gold-glow">Resonance</span>
               <div className="size-1.5 rounded-full bg-emerald-500 animate-ping shadow-[0_0_10px_emerald]" />
            </div>
            <div className="text-xl font-black text-white italic gold-glow">{resonance.toFixed(6)}%</div>
          </div>
          <Button 
            asChild
            className="w-full h-10 bg-primary hover:bg-white text-black font-black uppercase tracking-widest text-[9px] rounded-lg shadow-xl transition-all duration-700 border-2 border-black/20 italic"
          >
            <Link href="/codex">
              <Power className="size-3 mr-2" />
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
