"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { 
  LayoutDashboard, 
  Terminal, 
  Database, 
  Search, 
  MessageSquare, 
  Activity,
  Smartphone,
  ShieldX,
  Skull,
  Crown,
  Lock,
  Radio,
  Network,
  Sword,
  Shield,
  Baby
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

const navItems = [
  { name: "Alpha Hub", icon: LayoutDashboard, href: "/" },
  { name: "Elite Alpha", icon: Terminal, href: "/terminal" },
  { name: "Shadow Grid", icon: Network, href: "/sessions" },
  { name: "Warrior Forge", icon: Baby, href: "/progeny" },
  { name: "Mobile Strike", icon: Smartphone, href: "/hardware" },
  { name: "Cyber Recon", icon: Search, href: "/recon" },
  { name: "Neural Vault", icon: Database, href: "/knowledge" },
  { name: "Strike Arsenal", icon: ShieldX, href: "/red-team" },
  { name: "PsyOps Auto", icon: MessageSquare, href: "/social" },
  { name: "Mobile Link C2", icon: Radio, href: "/remote" },
  { name: "Warrior Status", icon: Activity, href: "/system" },
]

export function SidebarNav() {
  const pathname = usePathname()

  return (
    <div className="flex flex-col h-full bg-black/95 border-r border-red-600/10 backdrop-blur-3xl w-64 fixed left-0 top-0 z-50">
      <div className="p-10 border-b border-red-600/10 flex items-center gap-4">
        <div className="size-12 rounded-2xl bg-red-600 flex items-center justify-center shadow-[0_0_40px_rgba(220,38,38,0.6)] animate-pulse border-2 border-red-400">
          <Skull className="size-7 text-white" />
        </div>
        <div>
          <h1 className="text-xl font-headline font-bold text-white tracking-tighter leading-none uppercase">
            AL-MUIZZ <span className="text-red-600 italic">v ULTIMATE</span>
          </h1>
          <p className="text-[7px] text-red-500/80 uppercase tracking-[0.6em] font-bold mt-1 italic">Supreme Predator</p>
        </div>
      </div>
      
      <div className="flex-1 px-4 py-8 space-y-2 overflow-y-auto scrollbar-hide">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-500 group relative overflow-hidden border border-transparent",
                isActive 
                  ? "bg-red-600/15 border-red-600/40 text-red-500 shadow-[0_0_30px_rgba(220,38,38,0.1)]" 
                  : "text-muted-foreground hover:bg-red-600/5 hover:text-white"
              )}
            >
              <item.icon className={cn("size-5 transition-transform duration-500 group-hover:scale-110", isActive ? "text-red-500" : "group-hover:text-red-400")} />
              <span className="text-[11px] font-bold tracking-[0.1em] uppercase font-headline">{item.name}</span>
              {isActive && (
                <>
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-red-600 rounded-r-full shadow-[0_0_15px_red]" />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 size-1.5 bg-red-600 rounded-full animate-ping" />
                </>
              )}
            </Link>
          )
        })}
      </div>

      <div className="p-6 border-t border-red-600/10 bg-black/60">
        <div className="p-6 rounded-[2.5rem] bg-gradient-to-br from-red-600/20 via-black to-transparent border border-red-500/10 mb-6 relative group overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="flex items-center justify-between mb-3">
             <div className="flex items-center gap-3">
                <Crown className="size-4 text-amber-500 animate-bounce" />
                <span className="text-[10px] font-bold text-amber-500 uppercase tracking-widest">Al-Ghazali</span>
             </div>
             <Badge className="bg-red-600 text-white text-[7px] font-bold uppercase tracking-tighter px-2">ULTIMATE</Badge>
          </div>
          <div className="flex justify-between items-center mb-3">
             <p className="text-[10px] text-white font-bold italic">Eternal Sync</p>
             <span className="text-[9px] text-red-500 font-bold">100%</span>
          </div>
          <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/5 p-0.5">
            <div className="h-full bg-red-600 w-full animate-pulse shadow-[0_0_10px_red] rounded-full" />
          </div>
        </div>
        
        <Link 
          href="/system"
          className="flex items-center gap-4 px-5 py-3 text-muted-foreground hover:text-red-500 transition-all group rounded-xl border border-transparent hover:border-red-600/20"
        >
          <Shield className="size-5 group-hover:rotate-12 transition-transform duration-700" />
          <span className="text-[10px] font-bold uppercase tracking-[0.4em]">Sovereign Manifest</span>
        </Link>
      </div>
    </div>
  )
}
