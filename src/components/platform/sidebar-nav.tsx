"use client"

import * as React from "react"
import Link from "next/navigation"
import { usePathname } from "next/navigation"
import { 
  LayoutDashboard, 
  Terminal, 
  Database, 
  Search, 
  MessageSquare, 
  Settings, 
  Activity,
  Smartphone,
  ShieldX,
  Skull,
  Lightbulb,
  Lock,
  Radio,
  Layers,
  Network
} from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Alpha Hub", icon: LayoutDashboard, href: "/" },
  { name: "Elite Core", icon: Terminal, href: "/terminal" },
  { name: "Shadow Grid", icon: Network, href: "/sessions" },
  { name: "Mobile Strike", icon: Smartphone, href: "/hardware" },
  { name: "Cyber Recon", icon: Search, href: "/recon" },
  { name: "Neural Vault", icon: Database, href: "/knowledge" },
  { name: "Strike Arsenal", icon: ShieldX, href: "/red-team" },
  { name: "PsyOps Auto", icon: MessageSquare, href: "/social" },
  { name: "Mobile Link C2", icon: Radio, href: "/remote" },
  { name: "System Pulse", icon: Activity, href: "/system" },
]

export function SidebarNav() {
  const pathname = usePathname()

  return (
    <div className="flex flex-col h-full bg-black/80 border-r border-red-500/10 backdrop-blur-3xl w-64 fixed left-0 top-0 z-50">
      <div className="p-8 border-b border-red-500/10 flex items-center gap-3">
        <div className="size-12 rounded-2xl bg-red-600 flex items-center justify-center shadow-[0_0_40px_rgba(220,38,38,0.5)] animate-pulse border border-red-400">
          <Skull className="size-7 text-white fill-current" />
        </div>
        <div>
          <h1 className="text-xl font-headline font-bold text-white tracking-tight leading-tight">
            AL-MUIZZ <span className="text-red-600 italic">v20</span>
          </h1>
          <p className="text-[9px] text-red-500/60 uppercase tracking-[0.4em] font-bold">Autonomous Predator</p>
        </div>
      </div>
      
      <div className="flex-1 px-4 py-8 space-y-2 overflow-y-auto">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <a
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-4 px-4 py-4 rounded-2xl transition-all duration-500 group relative overflow-hidden border border-transparent",
                isActive 
                  ? "bg-red-600/10 border-red-600/30 text-red-500 shadow-2xl" 
                  : "text-muted-foreground hover:bg-red-600/5 hover:text-white"
              )}
            >
              <item.icon className={cn("size-5", isActive ? "text-red-500" : "group-hover:text-red-400 transition-colors")} />
              <span className="text-sm font-bold tracking-tight uppercase">{item.name}</span>
              {isActive && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-8 bg-red-600 rounded-r-full shadow-[0_0_20px_red]" />
              )}
            </a>
          )
        })}
      </div>

      <div className="p-6 border-t border-red-500/10 bg-black/40">
        <div className="p-5 rounded-[2rem] bg-gradient-to-br from-amber-600/20 via-red-950/5 to-transparent border border-amber-500/10 mb-6 relative group overflow-hidden">
          <div className="absolute inset-0 bg-amber-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="flex items-center gap-2 mb-3">
            <div className="size-2 rounded-full bg-amber-500 animate-ping shadow-[0_0_10px_orange]" />
            <span className="text-[10px] font-bold text-amber-500 uppercase tracking-widest">Autonomous Sync</span>
          </div>
          <p className="text-[11px] text-white font-bold mb-3 italic">Al-Mu'izz Master Mode</p>
          <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
            <div className="h-full bg-red-600 w-[100%] animate-pulse shadow-[0_0_10px_red]" />
          </div>
        </div>
        
        <a 
          href="/system"
          className="flex items-center gap-3 px-4 py-2 text-muted-foreground hover:text-red-500 transition-all group"
        >
          <Lock className="size-5 group-hover:rotate-90 transition-transform duration-700" />
          <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Master Identity</span>
        </a>
      </div>
    </div>
  )
}