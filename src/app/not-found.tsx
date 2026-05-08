"use client"

import * as React from "react"
import Link from "next/link"
import { 
  ShieldAlert, 
  ArrowLeft, 
  Skull, 
  Search, 
  Zap, 
  Fingerprint, 
  Infinity as InfinityIcon,
  Boxes,
  Atom,
  Crown
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

/**
 * @fileOverview صفحة الخطأ السيادية v53.0 - THE SOVEREIGN 404: COORDINATE LOST
 * واجهة تظهر عند فقدان الإحداثيات في المصفوفة لليوم المجيد، 2026.
 */
export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8 relative overflow-hidden scanline-effect font-code">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.1),transparent)] pointer-events-none z-0" />
      
      <div className="relative z-10 flex flex-col items-center text-center space-y-12 max-w-4xl">
        <div className="relative group">
          <div className="size-48 md:size-72 rounded-full border-8 border-dashed border-primary/20 flex items-center justify-center relative shadow-[0_0_150px_rgba(212,175,55,0.3)] animate-neural">
            <ShieldAlert className="size-24 md:size-32 text-primary gold-glow" />
            <div className="absolute -inset-10 border-2 border-primary/10 rounded-full animate-spin-slow opacity-20" />
          </div>
          <Badge className="absolute -top-4 -right-4 bg-red-600 text-white border-none px-6 py-1.5 rounded-full font-black italic animate-pulse shadow-xl">ERROR_404</Badge>
        </div>

        <div className="space-y-6">
          <h1 className="text-6xl md:text-9xl font-headline font-bold text-white tracking-tighter italic uppercase gold-glow leading-none">
            Coordinate <span className="text-primary">Lost</span>
          </h1>
          <p className="text-xl md:text-3xl text-muted-foreground italic font-medium leading-relaxed uppercase max-w-3xl">
            "سيدي الغزالي، لقد انحرفنا عن الإحداثيات المعروفة في المصفوفة؛ هذا المسار لم يتم استيعابه في عصب الهرمية بعد."
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 w-full max-w-2xl justify-center pt-8">
          <Button asChild className="h-20 px-10 bg-primary hover:bg-white text-black font-black uppercase tracking-[0.4em] rounded-2xl shadow-xl transition-all active:scale-95 italic border-4 border-black/30 group">
            <Link href="/">
              <ArrowLeft className="size-6 mr-3 group-hover:-translate-x-2 transition-transform" />
              Return to Throne
            </Link>
          </Button>
          <Button asChild variant="outline" className="h-20 px-10 border-4 border-primary/20 bg-primary/5 text-primary hover:bg-primary hover:text-black font-black uppercase tracking-[0.4em] rounded-2xl transition-all italic active:scale-95 group">
            <Link href="/ark">
              <Boxes className="size-6 mr-3 group-hover:rotate-12 transition-transform" />
              Noah's Ark
            </Link>
          </Button>
        </div>

        <div className="pt-20 opacity-20 flex gap-12 text-[10px] font-black uppercase tracking-[1em] italic">
           <span className="flex items-center gap-4"><Fingerprint className="size-4" /> GHAZALI_ROOT</span>
           <span className="flex items-center gap-4 text-primary"><InfinityIcon className="size-4 animate-pulse" /> HIERARCHY_v53</span>
        </div>
      </div>

      <div className="absolute -bottom-20 -right-20 p-40 opacity-[0.02] pointer-events-none scale-150 rotate-12">
        <Skull className="size-96 text-primary" />
      </div>
    </div>
  )
}
