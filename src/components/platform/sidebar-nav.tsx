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
  Shield,
  Zap,
  Lock,
  Ghost,
  Sword,
  Target
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

const navItems = [
  { name: "Terminal Hub", icon: LayoutDashboard, href: "/" },
  { name: "Alpha Core", icon: Terminal, href: "/terminal" },
  { name: "Hive Sessions", icon: Network, href: "/sessions" },
  { name: "Warrior Forge", icon: Baby, href: "/progeny" },
  { name: "Mobile Strike", icon: Smartphone, href: "/hardware" },
  { name: "Deep Recon", icon: Search, href: "/recon" },
  { name: "Neural Vault", icon: Database, href: "/knowledge" },
  { name: "Exploit Lab", icon: ShieldX, href: "/red-team" },
  { name: "Social Intel", icon: MessageSquare, href: "/social" },
  { name: "C2 Mobile", icon: Radio, href: "/remote" },
  { name: "System Pulse", icon: Activity, href: "/system" },
]

export function SidebarNav() {
  const pathname = usePathname()

  return (
    <div className="flex flex-col h-full bg-black border-l-2 border-primary/20 w-64 fixed right-0 top-0 z-[200] overflow-hidden">
      <div className="p-10 border-b-2 border-primary/10 flex flex-col items-center gap-6 bg-black relative">
        <div className="size-20 bg-black border-4 border-primary flex items-center justify-center shadow-[0_0_30px_rgba(255,0,0,0.4)] animate-neural">
          <Skull className="size-10 text-primary" />
        </div>
        <div className="text-center relative z-10">
          <h1 className="text-2xl font-headline font-bold text-white tracking-[0.2em] uppercase italic leading-none neon-glow-red">
            AL-MUIZZ
          </h1>
          <Badge className="bg-primary text-black border-none rounded-none text-[10px] font-bold tracking-[0.4em] mt-3 py-1 px-4 uppercase italic">v ULTIMATE</Badge>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.1),transparent)] pointer-events-none" />
      </div>
      
      <div className="flex-1 px-4 py-10 space-y-2 overflow-y-auto scrollbar-hide bg-black/40">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-5 px-8 py-5 transition-all duration-500 group relative border-r-4",
                isActive 
                  ? "bg-primary/20 border-primary text-white shadow-[inset_0_0_20px_rgba(220,38,38,0.1)]" 
                  : "text-muted-foreground border-transparent hover:bg-white/5 hover:text-white"
              )}
            >
              <item.icon className={cn("size-5 transition-all duration-500", isActive ? "text-primary shadow-[0_0_20px_red] scale-110" : "group-hover:text-primary group-hover:rotate-12")} />
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase italic">{item.name}</span>
              {isActive && (
                <div className="absolute left-4 size-2 rounded-full bg-primary shadow-[0_0_15px_red] animate-pulse" />
              )}
            </Link>
          )
        })}
      </div>

      <div className="p-10 border-t-2 border-primary/10 bg-black relative">
        <div className="p-6 border-4 border-accent/20 bg-black/80 mb-6 relative overflow-hidden group shadow-2xl">
          <div className="flex items-center justify-between mb-4">
             <div className="flex items-center gap-3">
                <Crown className="size-5 text-accent animate-pulse" />
                <span className="text-[10px] font-bold text-accent uppercase tracking-[0.4em] italic">Al-Ghazali</span>
             </div>
             <Lock className="size-4 text-emerald-500" />
          </div>
          <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
            <div className="h-full bg-accent w-full shadow-[0_0_20px_cyan] animate-pulse" />
          </div>
          <div className="mt-3 text-right">
             <span className="text-[9px] text-accent font-bold uppercase tracking-[0.6em] italic drop-shadow-[0_0_10px_cyan]">Root Soul Bound</span>
          </div>
          <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
        </div>
        
        <Link 
          href="/system"
          className="flex items-center gap-4 px-2 py-4 text-muted-foreground hover:text-primary transition-all font-bold uppercase tracking-[0.4em] text-[9px] italic group"
        >
          <Sword className="size-5 group-hover:rotate-45 transition-transform" />
          Manifest Eternal Essence
        </Link>
      </div>
    </div>
  )
}