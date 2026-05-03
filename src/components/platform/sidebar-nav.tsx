
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
  ZapOff
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const navItems = [
  { name: "Sovereign Throne", icon: LayoutDashboard, href: "/" },
  { name: "Autonomous Strike", icon: Target, href: "/terminal" },
  { name: "C2 Matrix", icon: Radio, href: "/sessions" },
  { name: "Field Ghost", icon: BrainCircuit, href: "/field-agent" },
  { name: "Shadow Bible", icon: BookOpen, href: "/codex" },
  { name: "Warrior Lineage", icon: Baby, href: "/progeny" },
  { name: "Mobile Siphon", icon: Smartphone, href: "/hardware" },
  { name: "Deep Recon", icon: Search, href: "/recon" },
  { name: "Neural Vault", icon: Database, href: "/knowledge" },
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
        className="lg:hidden fixed top-4 right-4 z-[300] bg-black border-4 border-primary/60 text-primary hover:bg-primary/20 size-16 rounded-2xl shadow-[0_0_30px_rgba(208,0,0,0.6)]"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="size-8" /> : <Menu className="size-8" />}
      </Button>

      <div className={cn(
        "flex flex-col h-full bg-black border-l-8 border-primary/80 w-80 fixed right-0 top-0 z-[250] overflow-hidden shadow-[0_0_150px_rgba(208,0,0,0.4)] transition-transform duration-700 ease-in-out font-code",
        !isOpen && "translate-x-full lg:translate-x-0"
      )}>
        <div className="p-12 border-b-4 border-primary/30 flex flex-col items-center gap-8 bg-black relative">
          <div className="size-24 bg-black border-[6px] border-primary flex items-center justify-center shadow-[0_0_80px_rgba(208,0,0,1)] animate-neural shrink-0 rounded-3xl rotate-12">
            <Skull className="size-14 text-primary" />
          </div>
          <div className="text-center relative z-10">
            <h1 className="text-2xl md:text-3xl font-headline font-bold text-white tracking-[0.3em] uppercase italic leading-none neon-glow-red">
              AL-MUIZZ
            </h1>
            <Badge className="bg-primary text-white border-none rounded-none text-[10px] font-bold tracking-[1em] mt-4 py-2 px-6 uppercase italic shadow-3xl">v25.5-GOD_MODE</Badge>
          </div>
        </div>
        
        <div className="flex-1 px-4 py-10 space-y-2 overflow-y-auto scrollbar-hide bg-black/60 backdrop-blur-3xl">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            const Icon = item.icon; // Fix for constructor issues
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "flex items-center gap-6 px-8 py-5 transition-all duration-700 group relative border-r-[8px] rounded-l-2xl mb-1",
                  isActive 
                    ? "bg-primary/30 border-primary text-white shadow-[inset_0_0_40px_rgba(208,0,0,0.3)]" 
                    : "text-muted-foreground border-transparent hover:bg-white/10 hover:text-white"
                )}
              >
                <Icon className={cn("size-6 transition-all duration-700", isActive ? "text-primary shadow-[0_0_30px_red] scale-125" : "group-hover:text-primary group-hover:rotate-12")} />
                <span className="text-[12px] font-bold tracking-[0.4em] uppercase italic truncate drop-shadow-2xl">{item.name}</span>
                {isActive && (
                  <div className="absolute left-4 size-2.5 rounded-full bg-primary shadow-[0_0_30px_red] animate-pulse" />
                )}
              </Link>
            )
          })}
        </div>

        <div className="p-10 border-t-4 border-primary/30 bg-black relative">
          <div className="p-6 border-[6px] border-red-600/60 bg-black/98 mb-6 relative overflow-hidden group shadow-6xl rounded-[2rem]">
            <div className="flex items-center justify-between mb-4">
               <div className="flex items-center gap-4">
                  <Flame className="size-6 text-red-600 animate-pulse" />
                  <span className="text-[11px] font-bold text-red-500 uppercase tracking-widest italic">Omnipotent Power</span>
               </div>
               <Badge className="bg-red-600 text-white text-[9px] font-bold uppercase tracking-tighter px-3 py-1 rounded-full shadow-inner">500% ARMED</Badge>
            </div>
            <div className="h-3 w-full bg-white/10 rounded-full overflow-hidden border-2 border-white/20 p-1 shadow-inner">
              <div className="h-full bg-red-600 w-full shadow-[0_0_40px_rgba(239,68,68,1)] animate-pulse rounded-full" />
            </div>
          </div>
          
          <Link 
            href="/system"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-6 px-4 py-4 text-muted-foreground hover:text-primary transition-all font-bold uppercase tracking-[0.6em] text-[11px] italic group bg-white/5 rounded-2xl border-2 border-white/5 hover:border-primary/40 shadow-xl"
          >
            <Eye className="size-6 group-hover:scale-125 text-red-500 transition-all shadow-[0_0_20px_red]" />
            Sovereign Ghost Pulse
          </Link>
        </div>
      </div>
      
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/90 backdrop-blur-2xl z-[240] animate-in fade-in duration-700"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}
