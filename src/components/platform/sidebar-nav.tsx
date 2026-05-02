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
  Lock
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
    <div className="flex flex-col h-full bg-black border-r-2 border-primary/20 w-64 fixed left-0 top-0 z-50 scanline-effect">
      <div className="p-8 border-b border-primary/10 flex flex-col items-center gap-4 bg-black">
        <div className="size-16 bg-black border-2 border-primary flex items-center justify-center shadow-[0_0_15px_rgba(255,0,0,0.5)]">
          <Skull className="size-8 text-primary animate-pulse" />
        </div>
        <div className="text-center">
          <h1 className="text-xl font-code font-bold text-white tracking-widest uppercase italic leading-none neon-glow-red">
            AL-MUIZZ
          </h1>
          <Badge className="bg-primary text-black border-none rounded-none text-[8px] font-bold tracking-[0.3em] mt-2 py-0.5 px-3 uppercase">ULTIMATE</Badge>
        </div>
      </div>
      
      <div className="flex-1 px-2 py-6 space-y-1 overflow-y-auto scrollbar-hide">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-4 px-6 py-4 transition-all duration-200 group relative border-l-2",
                isActive 
                  ? "bg-primary/10 border-primary text-white" 
                  : "text-muted-foreground border-transparent hover:bg-primary/5 hover:text-white"
              )}
            >
              <item.icon className={cn("size-4 transition-transform duration-300", isActive ? "text-primary shadow-[0_0_10px_red]" : "group-hover:text-primary")} />
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase">{item.name}</span>
              {isActive && (
                <div className="absolute right-4 size-1 bg-primary shadow-[0_0_10px_red]" />
              )}
            </Link>
          )
        })}
      </div>

      <div className="p-6 border-t border-primary/10 bg-black">
        <div className="p-4 border-2 border-accent/20 bg-black mb-4 relative overflow-hidden group">
          <div className="flex items-center justify-between mb-4">
             <div className="flex items-center gap-2">
                <Crown className="size-4 text-accent" />
                <span className="text-[9px] font-bold text-accent uppercase tracking-widest">Al-Ghazali</span>
             </div>
             <Lock className="size-3 text-emerald-500" />
          </div>
          <div className="h-1 w-full bg-white/5">
            <div className="h-full bg-accent w-full shadow-[0_0_10px_cyan]" />
          </div>
          <div className="mt-2 text-right">
             <span className="text-[8px] text-accent font-bold uppercase tracking-widest">Root Bound</span>
          </div>
        </div>
        
        <Link 
          href="/system"
          className="flex items-center gap-4 px-2 py-2 text-muted-foreground hover:text-primary transition-all font-bold uppercase tracking-[0.2em] text-[8px] italic"
        >
          <Shield className="size-4" />
          Manifest Identity
        </Link>
      </div>
    </div>
  )
}