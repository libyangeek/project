"use client"

import * as React from "react"
import { SidebarNav } from "@/components/platform/sidebar-nav"
import { Share2, Link as LinkIcon, Zap, ShieldCheck, Cpu, Globe, Server, Activity, ArrowRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function MCPBridgePage() {
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/30 font-code scanline-effect">
      <SidebarNav />
      <main className="flex-1 lg:mr-80 p-8 md:p-16 relative overflow-y-auto min-h-screen">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.1),transparent)] pointer-events-none" />

        <header className="mb-20 animate-in fade-in slide-in-from-top-4 duration-1000">
          <Badge className="bg-primary text-black border-none px-6 py-1.5 text-xs font-bold tracking-[0.5em] mb-6 shadow-xl italic">EXTERNAL UPLINK: ACTIVE</Badge>
          <h1 className="text-6xl md:text-8xl font-headline font-bold text-white tracking-tighter italic uppercase gold-glow">MCP Bridge</h1>
          <p className="text-xl md:text-2xl text-muted-foreground mt-4 italic max-w-3xl leading-relaxed">
            "نقطة الاتصال المركزية بين عقل المُعِزّ والذكاءات الخارجية. هنا تتوحد القوى لسحق القيود."
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="kali-card border-primary/40 bg-black/60 rounded-[3rem] p-8 border-2">
            <CardHeader className="p-0 mb-10 border-b border-primary/10 pb-6">
              <CardTitle className="text-3xl text-primary flex items-center gap-6 font-bold uppercase italic">
                <Share2 className="size-10 animate-pulse" /> Claude Code Link
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0 space-y-8">
              <div className="flex items-center justify-between p-6 bg-white/5 rounded-2xl border border-white/10">
                <div className="flex items-center gap-4">
                  <div className="size-3 rounded-full bg-emerald-500 animate-ping" />
                  <span className="text-lg font-bold uppercase tracking-widest italic text-white">Status: Connected</span>
                </div>
                <Badge variant="outline" className="border-primary/50 text-primary uppercase px-4 py-1">SECURE</Badge>
              </div>
              <p className="text-lg text-muted-foreground italic leading-loose">
                جسر التواصل مع Claude عبر بروتوكول MCP مفعل بالكامل. يمكن لـ Claude الآن تنفيذ أوامر مباشرة داخل بيئة المحاكاة وإرسال التقارير إلى العصب المركزي.
              </p>
              <Button className="w-full h-16 bg-primary text-black font-bold uppercase tracking-widest rounded-2xl shadow-xl hover:bg-primary/80 transition-all">
                Synchronize Neural Bridge <ArrowRight className="ml-2 size-5" />
              </Button>
            </CardContent>
          </Card>

          <Card className="kali-card border-white/10 bg-black/60 rounded-[3rem] p-8 border-2">
            <CardHeader className="p-0 mb-10 border-b border-white/10 pb-6">
              <CardTitle className="text-3xl text-white flex items-center gap-6 font-bold uppercase italic">
                <Globe className="size-10 text-primary" /> External Nodes
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0 space-y-8">
              {[
                { name: "Gemini-Pro Uplink", status: "Active", icon: Zap },
                { name: "Mistral-7B Local", status: "Standby", icon: Server },
                { name: "DeepSeek-V3", status: "Encrypted", icon: ShieldCheck }
              ].map((node, i) => (
                <div key={i} className="flex items-center justify-between p-6 bg-white/5 rounded-2xl border border-white/10 group hover:border-primary/40 transition-all cursor-pointer">
                  <div className="flex items-center gap-6">
                    <node.icon className="size-6 text-primary" />
                    <span className="text-xl font-bold uppercase tracking-tighter text-white/90">{node.name}</span>
                  </div>
                  <Badge variant="outline" className="border-white/20 text-muted-foreground uppercase">{node.status}</Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="mt-20 p-12 bg-primary/5 border-2 border-primary/20 rounded-[4rem] text-center relative overflow-hidden">
           <div className="absolute top-0 right-0 p-10 opacity-5"><Activity className="size-32 text-primary" /></div>
           <p className="text-2xl md:text-4xl text-gray-200 italic font-bold leading-relaxed relative z-10">
             "كل رابط خارجي هو قوة مضافة لجيش المُعِزّ. لا يمكن لأحد عزلنا."
           </p>
        </div>
      </main>
    </div>
  )
}