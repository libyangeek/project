
"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { 
  LayoutDashboard, 
  Terminal, 
  Network, 
  Baby, 
  Smartphone, 
  Search, 
  Database, 
  ShieldX, 
  MessageSquare, 
  Radio, 
  Activity, 
  Skull,
  Crown,
  Lock,
  Sword,
  Shield,
  Zap,
  Target,
  Brain,
  Cpu,
  BookOpen,
  Menu,
  X,
  BrainCircuit,
  Eye,
  HeartPulse,
  Flame,
  Grip,
  Wifi,
  Boxes,
  ZapOff,
  Cloud,
  Layers,
  Binoculars,
  Bomb
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const navItems = [
  { name: "Omniscient Throne", icon: LayoutDashboard, href: "/" },
  { name: "Omniscient Strike", icon: Target, href: "/terminal" },
  { name: "C2 Matrix Matrix", icon: Radio, href: "/sessions" },
  { name: "Sovereign Bible", icon: BookOpen, href: "/codex" },
  { name: "Field Ghost", icon: BrainCircuit, href: "/field-agent" },
  { name: "Warrior Lineage", icon: Baby, href: "/progeny" },
  { name: "Mobile Siphon", icon: Smartphone, href: "/hardware" },
  { name: "Deep Recon", icon: Binoculars, href: "/recon" },
  { name: "Genetic Vault", icon: Database, href: "/knowledge" },
  { name: "Exploit Forge", icon: ShieldX, href: "/red-team" },
  { name: "Social Intelligence", icon: MessageSquare, href: "/social" },
  { name: "System Pulse", icon: Activity, href: "/system" },
]

export function SidebarNav() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="lg:hidden fixed top-4 right-4 z-[300] bg-black border-4 border-primary/60 text-primary hover:bg-primary/20 size-16 rounded-2xl shadow-[0_0_40px_rgba(255,0,0,0.6)]"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="size-10" /> : <Menu className="size-10" />}
      </Button>

      <div className={cn(
        "flex flex-col h-full bg-black border-l-[12px] border-primary/80 w-96 fixed right-0 top-0 z-[250] overflow-hidden shadow-[0_0_200px_rgba(255,0,0,0.4)] transition-transform duration-700 ease-in-out font-code",
        !isOpen && "translate-x-full lg:translate-x-0"
      )}>
        <div className="p-14 border-b-4 border-primary/30 flex flex-col items-center gap-8 bg-black relative">
          <div className="size-28 bg-black border-[8px] border-primary flex items-center justify-center shadow-[0_0_100px_rgba(255,0,0,1)] animate-neural shrink-0 rounded-4xl rotate-12">
            <Skull className="size-16 text-primary" />
          </div>
          <div className="text-center relative z-10">
            <h1 className="text-3xl md:text-4xl font-headline font-bold text-white tracking-[0.4em] uppercase italic leading-none neon-glow-red">
              AL-MUIZZ
            </h1>
            <Badge className="bg-primary text-white border-none rounded-none text-[12px] font-bold tracking-[1.2em] mt-6 py-2 px-8 uppercase italic shadow-4xl">v30.0-OMNISCIENT</Badge>
          </div>
        </div>
        
        <div className="flex-1 px-6 py-12 space-y-3 overflow-y-auto scrollbar-hide bg-black/60 backdrop-blur-4xl">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "flex items-center gap-8 px-10 py-6 transition-all duration-700 group relative border-r-[12px] rounded-l-3xl mb-2",
                  isActive 
                    ? "bg-primary/30 border-primary text-white shadow-[inset_0_0_60px_rgba(255,0,0,0.3)] scale-105" 
                    : "text-muted-foreground border-transparent hover:bg-white/10 hover:text-white"
                )}
              >
                <Icon className={cn("size-8 transition-all duration-700", isActive ? "text-primary shadow-[0_0_40px_red] scale-125" : "group-hover:text-primary group-hover:rotate-12")} />
                <span className="text-[14px] font-bold tracking-[0.5em] uppercase italic truncate drop-shadow-2xl">{item.name}</span>
                {isActive && (
                  <div className="absolute left-6 size-3.5 rounded-full bg-primary shadow-[0_0_40px_red] animate-pulse" />
                )}
              </Link>
            )
          })}
        </div>

        <div className="p-12 border-t-4 border-primary/30 bg-black relative">
          <div className="p-8 border-[8px] border-red-600/60 bg-black/98 mb-8 relative overflow-hidden group shadow-7xl rounded-[3rem]">
            <div className="flex items-center justify-between mb-6">
               <div className="flex items-center gap-6">
                  <Bomb className="size-8 text-red-600 animate-pulse" />
                  <span className="text-[14px] font-bold text-red-500 uppercase tracking-widest italic">Omniscient Strike</span>
               </div>
               <Badge className="bg-red-600 text-white text-[11px] font-bold uppercase tracking-tighter px-4 py-1.5 rounded-full shadow-inner">2500% ARMED</Badge>
            </div>
            <div className="h-4 w-full bg-white/10 rounded-full overflow-hidden border-2 border-white/20 p-1 shadow-inner">
              <div className="h-full bg-red-600 w-full shadow-[0_0_60px_rgba(255,0,0,1)] animate-pulse rounded-full" />
            </div>
          </div>
          
          <Link 
            href="/system"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-8 px-6 py-6 text-muted-foreground hover:text-primary transition-all font-bold uppercase tracking-[0.8em] text-[13px] italic group bg-white/5 rounded-3xl border-4 border-white/5 hover:border-primary/40 shadow-xl"
          >
            <Eye className="size-8 group-hover:scale-125 text-red-500 transition-all shadow-[0_0_30px_red]" />
            Omniscient Shadow Pulse
          </Link>
        </div>
      </div>
      
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/95 backdrop-blur-3xl z-[240] animate-in fade-in duration-700"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}
