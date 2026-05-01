"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { 
  LayoutDashboard, 
  Terminal, 
  Database, 
  ShieldAlert, 
  Search, 
  MessageSquare, 
  Settings, 
  Activity,
  Zap,
  Usb
} from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Dashboard", icon: LayoutDashboard, href: "/" },
  { name: "Terminal Hub", icon: Terminal, href: "/terminal" },
  { name: "Hardware Recon", icon: Usb, href: "/hardware" },
  { name: "Knowledge Base", icon: Database, href: "/knowledge" },
  { name: "Red Team Ops", icon: ShieldAlert, href: "/red-team" },
  { name: "Cyber Recon", icon: Search, href: "/recon" },
  { name: "Social Auto", icon: MessageSquare, href: "/social" },
  { name: "System Status", icon: Activity, href: "/system" },
]

export function SidebarNav() {
  const pathname = usePathname()

  return (
    <div className="flex flex-col h-full bg-card/50 border-r border-white/5 backdrop-blur-xl w-64 fixed left-0 top-0 z-50">
      <div className="p-6 border-b border-white/5 flex items-center gap-3">
        <div className="size-8 rounded-lg bg-primary flex items-center justify-center shadow-[0_0_15px_rgba(170,76,255,0.5)]">
          <Zap className="size-5 text-white fill-current" />
        </div>
        <div>
          <h1 className="text-xl font-headline font-bold text-white tracking-tight leading-tight">
            ARBITER <span className="text-primary">AI</span>
          </h1>
          <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-medium">Sovereign OS</p>
        </div>
      </div>
      
      <div className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group relative",
                isActive 
                  ? "bg-primary text-white shadow-lg shadow-primary/20" 
                  : "text-muted-foreground hover:bg-white/5 hover:text-white"
              )}
            >
              <item.icon className={cn("size-5", isActive ? "text-white" : "group-hover:text-primary transition-colors")} />
              <span className="text-sm font-medium">{item.name}</span>
              {isActive && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-white rounded-r-full" />
              )}
            </Link>
          )
        })}
      </div>

      <div className="p-4 border-t border-white/5">
        <div className="p-4 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-white/5 mb-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="size-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] font-bold text-emerald-500 uppercase">Engine Online</span>
          </div>
          <p className="text-xs text-muted-foreground font-medium">Al-Mu'izz active</p>
          <div className="mt-2 h-1 w-full bg-white/5 rounded-full overflow-hidden">
            <div className="h-full bg-primary w-[85%]" />
          </div>
        </div>
        
        <Link 
          href="/settings"
          className="flex items-center gap-3 px-3 py-2 text-muted-foreground hover:text-white transition-colors"
        >
          <Settings className="size-5" />
          <span className="text-sm font-medium">Settings</span>
        </Link>
      </div>
    </div>
  )
}
