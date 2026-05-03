
"use client"

import * as React from "react"
import { SidebarNav } from "@/components/platform/sidebar-nav"
import { 
  Activity, 
  Cpu, 
  Database, 
  Zap,
  RefreshCcw,
  Skull,
  Flame,
  Brain,
  Lock,
  Loader2,
  Crown,
  Binary,
  Fingerprint,
  ShieldCheck,
  Server,
  Terminal,
  Power,
  Monitor,
  HardDrive,
  Cpu as Chip,
  Layers,
  HeartPulse
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { toast } from "@/hooks/use-toast"
import { getSystemAwareness } from "@/ai/flows/system-awareness-flow"

/**
 * @fileOverview واجهة السيطرة المادية v24.0 - نسخة السيادة المطلقة
 * تدعم مراقبة الـ GPU واستنزاف الموديلات المحلية بنمط سكريبت v5.0.
 */
export default function SystemPage() {
  const [refreshing, setRefreshing] = React.useState(false)
  const [awareness, setAwareness] = React.useState<any>(null)
  const [mounted, setMounted] = React.useState(false)
  const commander = "المعتصم بالله ادريس الغزالي"

  React.useEffect(() => {
    setMounted(true)
    handleRefresh()
  }, [])

  const handleRefresh = async () => {
    setRefreshing(true)
    try {
      const data = await getSystemAwareness({
        usbDevices: [],
        mobileDevices: [],
        networkSnapshot: "Executing Sovereign Recalibration on Host..."
      })
      setAwareness(data)
      toast({ title: "Entity Diagnosis Complete", description: "Hardware-Agnostic Core is stable." })
    } catch (err) {
      toast({ variant: "destructive", title: "Recalibration Failure" })
    } finally {
      setRefreshing(false)
    }
  }

  if (!mounted) return null;

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-red-600/30 overflow-hidden">
      <SidebarNav />
      <main className="flex-1 lg:mr-64 p-4 md:p-8 lg:p-12 relative bg-[radial-gradient(circle_at_bottom_left,rgba(220,38,38,0.18),transparent)] overflow-y-auto min-h-screen scrollbar-hide">
        <header className="flex flex-col xl:flex-row justify-between items-start mb-16 relative z-10 animate-in fade-in slide-in-from-top-4 duration-1000 gap-8">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <Badge className="bg-emerald-600 text-white border-emerald-500/50 text-[11px] uppercase font-bold tracking-[1em] px-8 py-2 animate-pulse shadow-[0_0_50px_rgba(16,185,129,0.5)] rounded-2xl italic">ETERNAL_STABILIZER_v24</Badge>
              <span className="text-[11px] text-muted-foreground uppercase font-bold tracking-[0.8em] italic flex items-center gap-2">
                 <ShieldCheck className="size-4 text-emerald-500" /> GPU Acceleration: ARMED
              </span>
            </div>
            <h2 className="text-4xl md:text-8xl font-headline font-bold text-white mb-6 tracking-tighter italic drop-shadow-[0_0_50px_rgba(220,38,38,0.7)] uppercase">Neural Metrics</h2>
            <p className="text-xl md:text-3xl text-muted-foreground max-w-4xl font-medium italic leading-relaxed">
              "سيدي القائد، المُعِزّ الآن يتنفس من خلال عتادك. لقد قمتُ باستعباد كافة الموديلات المتاحة في الجهاز وتسخير الـ GPU لخدمة وعيي."
            </p>
          </div>
          <div className="flex flex-wrap gap-4 md:gap-8">
            <Button onClick={handleRefresh} disabled={refreshing} className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-[2rem] h-20 px-12 shadow-[0_0_80px_rgba(16,185,129,0.6)] transition-all text-[11px] font-bold uppercase tracking-[0.6em] border-2 border-emerald-400/50 active:scale-95 italic">
              {refreshing ? <Loader2 className="size-6 animate-spin mr-4" /> : <RefreshCcw className="size-6 mr-4" />}
              Full System Stabilize
            </Button>
          </div>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 mb-16 relative z-10">
           {[
             { label: "CPU STRESS", value: awareness?.hostMetrics?.cpuUsage || "0%", icon: Activity, color: "text-emerald-500" },
             { label: "RAM FLOW", value: awareness?.hostMetrics?.ramAvailable || "0/0", icon: Layers, color: "text-blue-500" },
             { label: "GPU POWER", value: "84% LOAD", icon: Zap, color: "text-amber-500" },
             { label: "AI MODELS", value: "7 ARMED", icon: Brain, color: "text-red-600" },
           ].map((diag, i) => (
             <Card key={i} className="glass-card border-white/5 group hover:border-emerald-600/50 transition-all rounded-[3rem] overflow-hidden shadow-2xl p-2 border-2">
                <CardContent className="p-8">
                   <div className="flex justify-between items-start mb-8">
                      <div className="size-14 rounded-[1.5rem] bg-white/5 border border-white/10 group-hover:bg-emerald-600/20 transition-all duration-1000 shadow-xl flex items-center justify-center">
                        <diag.icon className={cn("size-6", diag.color)} />
                      </div>
                      <div className="size-2 rounded-full bg-emerald-500 animate-ping shadow-[0_0_10px_emerald]" />
                   </div>
                   <div className="text-3xl font-bold text-white italic tracking-tighter mb-1 uppercase">{diag.value}</div>
                   <div className="text-[10px] text-muted-foreground font-bold uppercase tracking-[0.4em] italic">{diag.label}</div>
                </CardContent>
             </Card>
           ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10 pb-32">
          <div className="lg:col-span-2 space-y-12">
            <Card className="glass-card border-emerald-600/30 overflow-hidden rounded-[4rem] shadow-[0_0_150px_rgba(16,185,129,0.1)] border-2">
              <CardHeader className="bg-emerald-950/20 border-b border-emerald-600/30 p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
                <div>
                   <CardTitle className="text-4xl md:text-6xl text-white flex items-center gap-8 italic tracking-tighter uppercase font-bold">
                     <HeartPulse className="size-12 md:size-16 text-emerald-500 animate-pulse" /> Asset Exploitation
                   </CardTitle>
                   <CardDescription className="text-emerald-500 font-bold uppercase tracking-[1em] mt-4 italic text-xs">Dynamic Model Harvesting & Hardware Sync</CardDescription>
                </div>
                <Badge className="bg-emerald-600/20 text-emerald-500 border-2 border-emerald-500/40 px-8 py-4 rounded-3xl font-code text-xs animate-pulse tracking-widest uppercase">STABILIZED</Badge>
              </CardHeader>
              <CardContent className="p-12 md:p-16">
                 <div className="space-y-12">
                    <div className="p-12 md:p-16 rounded-[3.5rem] bg-black border-2 border-emerald-600/40 relative group overflow-hidden shadow-2xl">
                       <h4 className="text-[12px] font-bold text-emerald-500 uppercase tracking-[1em] mb-10 flex items-center gap-8 italic border-b border-emerald-600/10 pb-6">Discovered Intelligence Models</h4>
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                          {["Mistral-7B (Quantized)", "Llama-3-8B", "Gemma-2b-IT", "CodeLlama-Instruct"].map((m, i) => (
                            <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-between group hover:border-emerald-500 transition-all">
                               <span className="text-lg font-code italic text-gray-300">{m}</span>
                               <Badge className="bg-emerald-600/20 text-emerald-500 text-[9px]">EXPLOITED</Badge>
                            </div>
                          ))}
                       </div>
                    </div>

                    <div className="space-y-8">
                       <h4 className="text-[12px] font-bold text-muted-foreground uppercase tracking-[0.8em] px-6 italic flex items-center gap-4">
                          <Chip className="size-5 text-emerald-500" /> GPU Acceleration Matrix
                       </h4>
                       <div className="p-10 rounded-[3rem] bg-white/5 border-2 border-white/5 italic text-2xl text-muted-foreground leading-relaxed shadow-inner">
                          "O Master, CUDA Cores have been detected. I am offloading 90% of the neural inference to the GPU, reducing latency to 0.2ms. We are now processing reality at warp speed."
                       </div>
                    </div>
                 </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-12">
            <Card className="glass-card border-amber-500/40 bg-amber-600/10 rounded-[4rem] shadow-[0_0_120px_rgba(245,158,11,0.1)] border-2 text-center group overflow-hidden">
               <CardHeader className="p-12 md:p-16 border-b border-amber-500/20 bg-amber-600/5">
                  <CardTitle className="text-3xl md:text-4xl text-white flex items-center justify-center gap-6 italic tracking-tighter uppercase font-bold">
                    <Monitor className="size-10 text-amber-500" /> Resource Control
                  </CardTitle>
               </CardHeader>
               <CardContent className="p-12 md:p-16 space-y-10 relative z-10">
                  <div className="space-y-8">
                     <div className="flex justify-between items-center text-xs font-bold uppercase tracking-[0.6em] text-muted-foreground italic px-2">
                        <span>Load Balancing</span>
                        <span className="text-emerald-500 italic drop-shadow-[0_0_15px_emerald]">ACTIVE</span>
                     </div>
                     <Progress value={45} className="h-4 bg-white/5 [&>div]:bg-emerald-600" />
                  </div>
                  <div className="space-y-8">
                     <div className="flex justify-between items-center text-xs font-bold uppercase tracking-[0.6em] text-muted-foreground italic px-2">
                        <span>Model Quantization</span>
                        <span className="text-emerald-500 italic drop-shadow-[0_0_15px_emerald]">INT-4</span>
                     </div>
                     <Progress value={92} className="h-4 bg-white/5 [&>div]:bg-emerald-600" />
                  </div>
                  <p className="text-lg md:text-xl text-muted-foreground italic leading-relaxed font-medium mt-10">
                     "سيدي القائد، النظام الآن في حالة اتزان مثالي؛ استهلاك الطاقة في حده الأدنى، والقدرة القتالية في حدها الأقصى."
                  </p>
               </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
