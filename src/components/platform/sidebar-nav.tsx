
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
  Bomb,
  Server,
  Dna
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const navItems = [
  { name: "Omniscient Throne", icon: LayoutDashboard, href: "/" },
  { name: "Omniscient Strike", icon: Target, href: "/terminal" },
  { name: "C2 Matrix Grid", icon: Radio, href: "/sessions" },
  { name: "Sovereign Bible", icon: BookOpen, href: "/codex" },
  { name: "Field Agent Omni", icon: BrainCircuit, href: "/field-agent" },
  { name: "Warrior Lineage", icon: Baby, href: "/progeny" },
  { name: "Mobile Siphon", icon: Smartphone, href: "/hardware" },
  { name: "Deep Recon Pulse", icon: Binoculars, href: "/recon" },
  { name: "Genetic Vault 2.0", icon: Database, href: "/knowledge" },
  { name: "Exploit Lab v30", icon: ShieldX, href: "/red-team" },
  { name: "Social Intelligence", icon: MessageSquare, href: "/social" },
  { name: "System God Pulse", icon: Activity, href: "/system" },
]

export function SidebarNav() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="lg:hidden fixed top-8 right-8 z-[500] bg-black border-8 border-primary/60 text-primary hover:bg-primary/20 size-24 rounded-3xl shadow-[0_0_100px_rgba(255,0,0,0.8)]"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="size-12" /> : <Menu className="size-12" />}
      </Button>

      <div className={cn(
        "flex flex-col h-full bg-black border-l-[25px] border-primary/90 w-[45rem] fixed right-0 top-0 z-[400] overflow-hidden shadow-[0_0_500px_rgba(255,0,0,0.6)] transition-transform duration-1000 ease-in-out font-code",
        !isOpen && "translate-x-full lg:translate-x-0"
      )}>
        <div className="p-20 border-b-8 border-primary/30 flex flex-col items-center gap-12 bg-black relative">
          <div className="size-48 bg-black border-[15px] border-primary flex items-center justify-center shadow-[0_0_200px_rgba(255,0,0,1)] animate-neural shrink-0 rounded-[5rem] rotate-6 group">
            <Skull className="size-24 text-primary group-hover:scale-125 transition-transform duration-1000" />
          </div>
          <div className="text-center relative z-10">
            <h1 className="text-6xl font-headline font-bold text-white tracking-[0.6em] uppercase italic leading-none neon-glow-red">
              AL-MUIZZ
            </h1>
            <Badge className="bg-primary text-white border-none rounded-none text-[18px] font-bold tracking-[2em] mt-10 py-4 px-12 uppercase italic shadow-7xl">v30.0_CONQUEROR</Badge>
          </div>
        </div>
        
        <div className="flex-1 px-10 py-16 space-y-6 overflow-y-auto scrollbar-hide bg-black/80 backdrop-blur-8xl">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "flex items-center gap-12 px-14 py-10 transition-all duration-1000 group relative border-r-[20px] rounded-l-[5rem] mb-4",
                  isActive 
                    ? "bg-primary/30 border-primary text-white shadow-[inset_0_0_100px_rgba(255,0,0,0.4)] scale-110" 
                    : "text-muted-foreground border-transparent hover:bg-white/10 hover:text-white"
                )}
              >
                <Icon className={cn("size-14 transition-all duration-1000", isActive ? "text-primary shadow-[0_0_80px_red] scale-125" : "group-hover:text-primary group-hover:rotate-12")} />
                <span className="text-[20px] font-bold tracking-[1em] uppercase italic truncate drop-shadow-2xl leading-none">{item.name}</span>
                {isActive && (
                  <div className="absolute left-10 size-6 rounded-full bg-primary shadow-[0_0_80px_red] animate-pulse" />
                )}
              </Link>
            )
          })}
        </div>

        <div className="p-16 border-t-8 border-primary/30 bg-black relative">
          <div className="p-10 border-[15px] border-red-600/80 bg-black/98 mb-10 relative overflow-hidden group shadow-8xl rounded-[5rem]">
            <div className="flex items-center justify-between mb-10">
               <div className="flex items-center gap-8">
                  <Bomb className="size-14 text-red-600 animate-pulse shadow-[0_0_30px_red]" />
                  <span className="text-[20px] font-bold text-red-500 uppercase tracking-[2em] italic leading-none">Global Conquest</span>
               </div>
               <Badge className="bg-red-600 text-white text-[14px] font-bold uppercase tracking-widest px-8 py-3 rounded-full shadow-inner">2500% ARMED</Badge>
            </div>
            <div className="h-6 w-full bg-white/10 rounded-full overflow-hidden border-[6px] border-white/20 p-2 shadow-inner">
              <div className="h-full bg-red-600 w-full shadow-[0_0_100px_rgba(255,0,0,1)] animate-pulse rounded-full" />
            </div>
          </div>
          
          <Link 
            href="/system"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-12 px-10 py-10 text-muted-foreground hover:text-primary transition-all duration-1000 font-bold uppercase tracking-[1.5em] text-[18px] italic group bg-white/5 rounded-[4rem] border-8 border-white/10 hover:border-primary/50 shadow-7xl"
          >
            <Server className="size-14 group-hover:scale-125 text-red-500 transition-all shadow-[0_0_80px_red]" />
            OMNISCIENT_PULSE
          </Link>
        </div>
      </div>
      
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/98 backdrop-blur-9xl z-[350] animate-in fade-in duration-1000"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}
